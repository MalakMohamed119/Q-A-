// ==========================================
// 1. ENGLISH BASICS (HTML 1 - 25)
// ==========================================
window.DETAILED_EXPLANATIONS_EN_BASICS = String.raw`
## 1. What is HTML?

### Detailed explanation for What is HTML?

Answer: HTML (HyperText Markup Language) is the standard structural markup language used to compile and scaffold document nodes for layout rendering on global web viewports.

## 2. What is the difference between <div> and <span>?

### Detailed explanation for What is the difference between <div> and <span>?

Answer: <ul><li><code>&lt;div&gt;</code>: A block-level element that natively consumes 100% width of its parent node container, initiating a structural line break.</li><li><code>&lt;span&gt;</code>: An inline element that wraps text components without line breaks, consuming space absolute to content mass.</li></ul>

## 3. What is Semantic HTML and why is it important?

### Detailed explanation for What is Semantic HTML and why is it important?

Answer: Semantic HTML introduces structural elements that explicitly describe their meaningful context to both the client browser, screen-reader accessibility systems (ARIA engines), and search engine web spiders (SEO advantages).

## 4. Name some new semantic tags in HTML5.

### Detailed explanation for Name some new semantic tags in HTML5.

Answer: Common layout blocks include: <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;main&gt;</code>.

## 5. What is the difference between <section> and <article>?

### Detailed explanation for What is the difference between <section> and <article>?

Answer: <ul><li><code>&lt;section&gt;</code>: Represents a broad logical grouping of general thematic content chunks, usually requiring a distinct header marker.</li><li><code>&lt;article&gt;</code>: Defines an independent, decoupled, completely standalone piece of structured information capable of syndication (e.g., product updates, blogs).</li></ul>

## 6. What is the DOM?

### Detailed explanation for What is the DOM?

Answer: The DOM (Document Object Model) acts as an API mapping of the active document as a node tree branch system, enabling dynamic script access and element layout mutations by execution context programs like JS.

## 7. What is the DOCTYPE?

### Detailed explanation for What is the DOCTYPE?

Answer: The <code>&lt;!DOCTYPE html&gt;</code> declaration acts as a browser engine instruction statement proving the document complies with the W3C HTML5 living specification standard, inhibiting fallback quirks-mode layouts.

## 8. What is an attribute?

### Detailed explanation for What is an attribute?

Answer: An attribute sets a technical modifier value pair inside the elemental opening tag node block (e.g., <code>id="root"</code>, <code>href=""</code>), modifying default behaviors.

## 9. What is the difference between Block elements and Inline elements?

### Detailed explanation for What is the difference between Block elements and Inline elements?

Answer: <ul><li><b>Block:</b> Flows vertically downwards down the tree, enforcing line breaks and respecting height and margin configurations.</li><li><b>Inline:</b> Flows horizontally on the exact same axis line, ignoring top/bottom custom block margins and explicit height declarations.</li></ul>

## 10. What is the difference between id and class?

### Detailed explanation for What is the difference between id and class?

Answer: <ul><li><code>id</code>: A strictly unique component locator token; must only appear once within the active document node mapping.</li><li><code>class</code>: A reusable structural styling or selection handle applied across infinitely repeated nodes.</li></ul>

## 11. Can an id be repeated?

### Detailed explanation for Can an id be repeated?

Answer: No. Declaring identical duplicate IDs breaks valid validation standards, resulting in erratic script behavior when using document locator operations like <code>getElementById</code>.

## 12. What are meta tags?

### Detailed explanation for What are meta tags?

Answer: Meta elements capture background documents attributes (such as charsets, SEO descriptions, viewport constraints) inside the <code>&lt;head&gt;</code> sector without active display properties.

## 13. What is the function of <meta viewport>?

### Detailed explanation for What is the function of <meta viewport>?

Answer: It establishes modern responsive scaling logic across varying screen viewports by setting the page width parameter absolute to the user hardware profile: <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>

## 14. What is the difference between <script> in the head and the body?

### Detailed explanation for What is the difference between <script> in the head and the body?

Answer: <ul><li><b>In the Head:</b> Intercepts HTML processing immediately to fetch/run scripts, causing critical paint blockages unless flagged with <code>defer</code>/<code>async</code> attributes.</li><li><b>At Body Base:</b> Guarantees complete DOM asset mapping is active prior to processing script triggers, avoiding rendering delays.</li></ul>

## 15. What is the difference between <img alt=""> and without it?

### Detailed explanation for What is the difference between <img alt=""> and without it?

Answer: Leaving the <code>alt</code> text completely absent forces screen readers to read out raw asset file URLs instead of meaningful context descriptions, causing severe access failures and negative SEO flags.

## 16. What is the difference between <link> and <script>?

### Detailed explanation for What is the difference between <link> and <script>?

Answer: <ul><li><code>&lt;link&gt;</code>: An empty tag referencing non-executable external documents, primarily style sheet layers.</li><li><code>&lt;script&gt;</code>: A wrapper container holding or pointing directly to client-side logic scripts.</li></ul>

## 17. What do defer and async do?

### Detailed explanation for What do defer and async do?

Answer: Both download scripts without stalling the HTML parsing thread:<ul><li><code>async</code>: Immediately halts parsing to execute the target script block as soon as it concludes loading.</li><li><code>defer</code>: Monitored to execute only after completion of structural DOM analysis, honoring the exact script tag order.</li></ul>

## 18. What are localStorage and sessionStorage?

### Detailed explanation for What are localStorage and sessionStorage?

Answer: Client-side data persistence mechanisms:<ul><li><code>localStorage</code>: Data remains indefinitely until a script or user manually wipes the domain cache storage.</li><li><code>sessionStorage</code>: Wiped instantly whenever the current browser tab instance is closed.</li></ul>

## 19. What is the difference between form GET and POST?

### Detailed explanation for What is the difference between form GET and POST?

Answer: <ul><li><code>GET</code>: Appends tracking query parameters explicitly to the visible URL route. Has stringent data length thresholds.</li><li><code>POST</code>: Transports data streams cleanly payloaded inside the HTTP transaction request body mass, providing secure overhead capacities.</li></ul>

## 20. What is an iframe?

### Detailed explanation for What is an iframe?

Answer: An iframe (Inline Frame) acts as an isolated sandbox window container embedding a completely foreign secondary HTML document directly inside your existing view layer layout.

## 21. What is the benefit of accessibility (ARIA attributes)?

### Detailed explanation for What is the benefit of accessibility (ARIA attributes)?

Answer: Accessible Rich Internet Applications (ARIA) attributes augment default HTML tags with contextual semantic descriptions, allowing modern assistive reader rigs to cleanly parse complex components.

## 22. What is Shadow DOM?

### Detailed explanation for What is Shadow DOM?

Answer: A core Web Component system that encapsulates a modular subtree DOM separate from the primary global Document flow, blocking unintended outer CSS styling leaks from bleeding into individual components.

## 23. What are Web Components?

### Detailed explanation for What are Web Components?

Answer: A suite of standard runtime capabilities (Custom Elements, Shadow DOM, HTML Templates) that empower engineers to generate modular, framework-agnostic platform tags.

## 24. What is the <template> tag?

### Detailed explanation for What is the <template> tag?

Answer: An element structure holding layout blueprints that bypasses page initialization rendering entirely until parsed, cloned, and dynamically attached to the active tree by JavaScript controllers.

## 25. What is the benefit of <picture> and srcset?

### Detailed explanation for What is the benefit of <picture> and srcset?

Answer: Enables native art direction and conditional media responsive image delivery based on varying client hardware device screen dimensions or target pixel ratio resolutions.

`
  .replace(/^(\d+)\.\s+(?=(?:What|Name|Can)\b)/gm, '## $1. ');

// ==========================================
// 2. ARABIC BASICS (HTML 1 - 25)
// ==========================================
window.DETAILED_EXPLANATIONS_AR_BASICS = String.raw`
السؤال 1: What is HTML?

### شرح تفصيلي عن What is HTML?

الإجابة: HTML (HyperText Markup Language) is the standard structural markup language used to compile and scaffold document nodes for layout rendering on global web viewports.

السؤال 2: What is the difference between <div> and <span>?

الإجابة في الملف بتقول إن:
<div> Block-level element
<span> Inline element

<div>
div عنصر Block.
يعني يبدأ في سطر جديد، وبيأخذ عرض المساحة المتاحة افتراضيًا.

<span>
span عنصر Inline.
يعني يفضل في نفس السطر وياخد مساحة المحتوى فقط.

إمتى أستخدم كل واحد؟
div → لما أكون بعمل container / grouping لعناصر.
span → لما أحتاج أعمل styling أو تحديد جزء صغير داخل النص.

🎯 Interview
div is a block-level element used as a generic container, while span is an inline element typically used to style or group a small piece of content without creating a new line.

السؤال 3: What is Semantic HTML and why is it important?

الـ Semantic HTML يعني إننا نستخدم HTML elements ليها معنى واضح عن المحتوى اللي بداخلها. الملف يربط أهميتها بالـ structure والـ accessibility والـ SEO.

مثلاً بدل:
<div class="header">
نستخدم:
<header>

بدل:
<div class="navigation">
نستخدم:
<nav>

المتصفح والـ screen readers ومحركات البحث يقدروا يفهموا دور الجزء ده بشكل أفضل.

ليه مهم؟
1. Accessibility: Screen readers تقدر تفهم structure الصفحة.
2. SEO: Search engines تقدر تفهم محتوى الصفحة بشكل أفضل.
3. Maintainability: الكود بيكون أسهل في القراءة والفهم.

🎯 Interview
Semantic HTML means using HTML elements according to their meaning and purpose, such as header, nav, main, article, and footer. It improves accessibility, SEO, and code readability.

السؤال 4: Name some new semantic tags in HTML5.

الملف بيذكر: header, footer, section, article, aside, nav, وmain.
خلينا نفهمهم بدل ما نحفظهم:

<header> مقدمة الصفحة أو section
<nav> Navigation links
<main> المحتوى الأساسي للصفحة
<section> مجموعة محتوى مرتبطة بموضوع
<article> محتوى مستقل
<aside> محتوى جانبي
<footer> الجزء السفلي

السؤال 5: What is the difference between <section> and <article>?

الملف يفرق بينهم كالتالي: section مجموعة منطقية لمحتوى مرتبط، بينما article قطعة محتوى مستقلة يمكن أن تكون قائمة بذاتها.

<section>
مجموعة محتوى لها موضوع مشترك. (مثلاً: My Skills في البورتفوليو).

<article>
محتوى مستقل بذاته. (مثلاً: مقال في Blog). لو أخدنا الـ article وحطيناه في مكان آخر، المفروض يفضل مفهومًا.

🧠 الفرق السريع:
Section = Group of related content
Article = Independent content

السؤال 6: What is the DOM?

### شرح تفصيلي عن What is the DOM?

الإجابة: The DOM (Document Object Model) acts as an API mapping of the active document as a node tree branch system, enabling dynamic script access and element layout mutations by execution context programs like JS.

السؤال 7: What is the DOCTYPE?

### شرح تفصيلي عن What is the DOCTYPE?

الإجابة: The <code>&lt;!DOCTYPE html&gt;</code> declaration acts as a browser engine instruction statement proving the document complies with the W3C HTML5 living specification standard, inhibiting fallback quirks-mode layouts.

السؤال 8: What is an attribute?

### شرح تفصيلي عن What is an attribute?

الإجابة: An attribute sets a technical modifier value pair inside the elemental opening tag node block (e.g., <code>id="root"</code>, <code>href=""</code>), modifying default behaviors.

السؤال 9: What is the difference between Block elements and Inline elements?

الملف يوضح أن Block elements تتدفق رأسيًا وتبدأ أسطرًا جديدة، بينما Inline elements تتدفق في نفس السطر ولا تتعامل مع height وtop/bottom margins بنفس طريقة الـ block.

Block أمثلة: div, p, h1, section, article
Inline أمثلة: span, a, strong, em

السؤال 10: What is the difference between id and class?

### شرح تفصيلي عن What is the difference between id and class?

الإجابة: <ul><li><code>id</code>: A strictly unique component locator token; must only appear once within the active document node mapping.</li><li><code>class</code>: A reusable structural styling or selection handle applied across infinitely repeated nodes.</li></ul>

السؤال 11: Can an id be repeated?

لا.
المفروض الـ id يكون unique داخل الـ document. تكرار IDs قد يسبب مشاكل في عمليات تحديد العناصر بواسطة JavaScript (مثل getElementById) ويؤثر على الـ Accessibility.

السؤال 12: What are meta tags?

الـ Meta tags بتوفر metadata عن الصفحة داخل <head>، مثل character encoding والـ description والـ viewport، ومش بتظهر كمحتوى عادي للمستخدم.

أهم أمثلة:
<meta charset="UTF-8"> → Character encoding
<meta name="description" content="..."> → وصف الصفحة
<meta name="viewport" content="..."> → التحكم في الـ viewport

السؤال 13: What is the function of <meta viewport>?

الكود:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

الملف يربطه بالـ responsive scaling:
width=device-width: خلي عرض الـ viewport مساوي لعرض شاشة الجهاز.
initial-scale=1.0: خلي الـ initial zoom = 100%.
وده مهم جدًا للـ Responsive Design عشان الموقع يظهر بشكل سليم على الموبايل.

السؤال 14: What is the difference between <script> in the head and the body?

الملف يوضح أن script العادي في <head> ممكن يوقف parsing للملف (يوقف تحميل باقي الصفحة)، بينما وضعه أسفل <body> يأتي بعد بناء عناصر HTML السابقة له.

في Modern HTML غالبًا نستخدم defer مع scripts في <head>:
<script src="app.js" defer></script>
وده بيسمح بتحميل الـ script بالتوازي مع parsing، مع تنفيذ مؤجل بعد اكتمال parsing.

السؤال 15: What is the difference between <img alt=""> and without it?

إيه الفرق بين إن الصورة يكون لها alt وبين إننا منكتبش alt أصلًا؟
alt اختصار alternative text.
لو الصورة مش ظهرت، الـ alt بيوصف للمستخدم إيه المفروض يكون موجود. والأهم: Screen readers ممكن تقرأ الـ alt text للمستخدم الذي لا يستطيع رؤية الصورة.

لو الصورة مجرد decoration ومش لها معنى:
<img src="line.png" alt=""> أفضل من حذف الـ alt تمامًا، لأنك بتقولي للـ screen reader إن الصورة decorative ومش محتاجة وصف.

🎯 Interview answer
The alt attribute provides alternative text for an image. It improves accessibility and SEO, and provides fallback text margin when the image cannot be displayed.

السؤال 16: What is the difference between <link> and <script>?

<link> بيربط ملفات خارجية غير قابلة للتنفيذ، خصوصًا CSS.
<link rel="stylesheet" href="style.css">

<script> بنستخدمه لإضافة أو استدعاء JavaScript.
<script src="app.js"></script>

🎯 Interview answer
link is used to reference external resources such as stylesheets, while script is used to embed or load executable JavaScript code.

السؤال 17: What do defer and async do?

الاتنين بيسمحوا بتحميل الـ scripts بدون إيقاف HTML parsing أثناء التحميل، لكن طريقة التنفيذ مختلفة:

defer:
التحميل يحصل بالتوازي مع parsing. وبعد اكتمال HTML parsing، يتم تنفيذ الـ deferred scripts. والترتيب بينهم محفوظ. (مناسب لملفات الـ JS اللي بتعتمد على الـ DOM).

async:
التحميل يحصل بالتوازي، لكن بمجرد ما الـ script يخلص تحميل، ينفذ فورًا. ترتيب التنفيذ غير مضمون. (مناسب لملفات الـ Analytics المستقلة).

السؤال 18: What are localStorage and sessionStorage?

الاتنين طرق لتخزين بيانات في المتصفح على جهة العميل (client-side).

localStorage: البيانات بتفضل موجودة حتى بعد ما تقفلي المتصفح، إلى أن يتم حذفها يدويًا أو برمجيًا.
sessionStorage: البيانات مرتبطة بالـ tab الحالي فقط، وعند إغلاق الـ tab تُزال فوراً.

🎯 Interview
Both provide client-side storage. localStorage persists data until it is explicitly cleared, while sessionStorage persists data for the current tab session.

السؤال 19: What is the difference between form GET and POST?

GET: البيانات بتظهر في الـ URL كـ query parameters. مناسبة لجلب البيانات (Retrieving).
POST: البيانات بتتبعت داخل HTTP request body بدل ما تتحط في الـ URL. مناسبة لإرسال البيانات المهمة أو الكبيرة.

🎯 Interview
GET sends form data as query parameters in the URL, while POST sends the data in the HTTP request body.

السؤال 20: What is an iframe?

### شرح تفصيلي عن What is an iframe?

الإجابة: An iframe (Inline Frame) acts as an isolated sandbox window container embedding a completely foreign secondary HTML document directly inside your existing view layer layout.

السؤال 21: What is the benefit of accessibility (ARIA attributes)?

ARIA = Accessible Rich Internet Applications
ARIA attributes بتضيف semantic information تساعد الـ assistive technologies (زي الـ Screen readers) على فهم الـ components المعقدة.
مهم: استخدمي semantic HTML الأصلي أولًا (زي button)، واستخدمي ARIA لما الـ HTML semantics مش كافية لتوضيح الفكرة.

السؤال 22: What is Shadow DOM?

الـ Shadow DOM هو نظام يسمح بإنشاء DOM subtree معزول داخل component. 
الـ CSS داخل الـ Shadow DOM بيكون scoped للـ component ده فقط ومش بيأثر (أو يتأثر) بالـ CSS الخاص بالصفحة الرئيسية. وهو جزء أساسي من الـ Web Components.

السؤال 23: What are Web Components?

مجموعة من الـ web platform APIs تسمح ببناء components قابلة لإعادة الاستخدام بدون الاعتماد على framework معين (زي Angular أو React).
وتشمل:
1. Custom Elements
2. Shadow DOM
3. HTML Templates

السؤال 24: What is the <template> tag?

الـ <template> بيحتوي على HTML blueprint لا يتم عرضه مباشرة عند تحميل الصفحة. 
لا يدخل في الـ rendered page حتى يتم نسخه (cloned) وإضافته للـ DOM عن طريق الـ JavaScript.

السؤال 25: What is the benefit of <picture> and srcset?

بيستخدموا للـ responsive image delivery واختيار الصورة المناسبة حسب الشاشة.

srcset: بيسمح للمتصفح يختار الحجم المناسب من الصورة حسب أبعاد الشاشة (مثلاً small.jpg للموبايل و large.jpg للديسكتوب).
<picture>: مفيد أكثر في الـ "art direction"، يعني عرض صورة مختلفة تماماً (بـ crop مختلف مثلاً) بناءً على الـ media queries.

🧠 الفرق المهم:
srcset → choose an appropriate image resource (same image, different sizes)
picture → provide different image sources/versions based on conditions
\`;

`;
