const MAX_INPUT_LENGTH = 12000;
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 20;
const requestLog = new Map();

function tooManyRequests(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(time => now - time < WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}

function send(res, status, body) {
  res.status(status).json(body);
}

function readableOpenAIError(status, error = {}) {
  if (status === 401 || error.code === 'invalid_api_key') {
    return 'مفتاح OpenAI غير صحيح أو تم إلغاؤه. أنشئ مفتاحًا جديدًا وضعه في Vercel.';
  }
  if (status === 429 || error.code === 'insufficient_quota') {
    return 'لا يوجد رصيد API متاح أو تم تجاوز حد الاستخدام في حساب OpenAI.';
  }
  if (status === 404 || error.code === 'model_not_found') {
    return 'الموديل المحدد غير متاح لحسابك. غيّر OPENAI_MODEL في Vercel إلى موديل متاح.';
  }
  if (status === 403) {
    return 'المفتاح لا يملك صلاحية استخدام هذا الموديل أو المشروع.';
  }
  return 'تعذر على OpenAI إنشاء الرد الآن. راجع Vercel Runtime Logs لمعرفة التفاصيل.';
}

export default async function handler(req, res) {
  // Lets the browser decide whether to use AI without first sending a request
  // that will fail when the deployment has no secret configured.
  if (req.method === 'GET') {
    return send(res, 200, { enabled: Boolean(process.env.OPENAI_API_KEY) });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return send(res, 405, { error: 'Method not allowed.' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
  if (tooManyRequests(ip)) return send(res, 429, { error: 'يرجى الانتظار قليلًا ثم المحاولة مرة أخرى.' });

  const { action, question, answer, text } = req.body || {};
  if (!['translate', 'explain'].includes(action)) return send(res, 400, { error: 'Invalid action.' });
  if (!process.env.OPENAI_API_KEY) return send(res, 503, { error: 'لم يتم إعداد خدمة الذكاء الاصطناعي بعد.' });

  const source = action === 'translate' ? text : `${question || ''}\n\n${answer || ''}`;
  if (typeof source !== 'string' || !source.trim() || source.length > MAX_INPUT_LENGTH) {
    return send(res, 400, { error: 'النص غير صالح أو أطول من الحد المسموح.' });
  }

  const instructions = action === 'translate'
    ? 'ترجم النص إلى العربية الطبيعية الواضحة للطالب، لا ترجمة حرفية. أبقِ أسماء التقنيات، أسماء الخصائص، وأي كود أو رموز بين الأقواس كما هي. أعد الترجمة فقط دون مقدمات.'
    : 'أنت مدرب Frontend. اشرح الإجابة بالعربية الطبيعية وبأسلوب بسيط للمبتدئ: الفكرة الأساسية، أهميتها في مقابلات العمل، ومثال عملي قصير إن كان مفيدًا. حافظ على المصطلحات التقنية وأي كود بالإنجليزية. لا تكرر السؤال ولا تخترع معلومات. استخدم HTML بسيطًا وآمنًا فقط: p, strong, ul, ol, li, code, pre.';

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5-mini',
        store: false,
        instructions,
        input: source
      })
    });
    const data = await response.json();
    if (!response.ok) {
      console.error('OpenAI request failed:', data?.error?.message);
      return send(res, 502, { error: readableOpenAIError(response.status, data?.error) });
    }
    const output = data.output_text?.trim();
    if (!output) return send(res, 502, { error: 'لم تُرجع الخدمة نصًا.' });
    return send(res, 200, { output });
  } catch (error) {
    console.error('AI service error:', error);
    return send(res, 502, { error: 'تعذر الاتصال بخدمة الذكاء الاصطناعي.' });
  }
}
