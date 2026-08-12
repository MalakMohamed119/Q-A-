// Static source material supplied for the More explanation feature.
// It is bundled with the site; no AI or network request is used to read it.
window.DETAILED_EXPLANATIONS = {
  ar: String.raw`
تمام، نكمل من **HTML Intermediate**، وبنفس الطريقة: **السؤال → معنى السؤال → شرح الإجابة → مثال → إجابة Interview تحفظيها**. وهلتزم بإجابات الملف نفسها في ترتيبها. 

# 🟡 HTML — Intermediate
السؤال 1: What is HTML?

الإجابة الموجودة في الملف:

HTML (HyperText Markup Language) is the standard structural markup language used to compile and scaffold document nodes for layout rendering on global web viewports.

يعني إيه الكلام ده؟

خلينا نفكها:

HTML = HyperText Markup Language

يعني لغة توصيف/ترميز صفحات الويب.

وظيفتها الأساسية هي إنها بتحدد Structure / Structure of the page، يعني هيكل الصفحة.

مثلاً:

<h1>My Portfolio</h1>

<p>I'm a Frontend Developer.</p>

<button>Contact Me</button>

HTML هنا بتقول للمتصفح:

ده عنوان → h1
ده Paragraph → p
ده Button → button

لكن HTML مش مسؤولة عن شكل العنصر بشكل أساسي.

يعني:

<h1>Hello</h1>

HTML بتحدد إن Hello عنوان.

أما:

h1 {
    color: red;
    font-size: 40px;
}

CSS هي اللي بتحدد شكله.

وJavaScript ممكن تغير المحتوى أو السلوك:

document.querySelector("h1").textContent = "Hello Malak";
🧠 إذن Frontend عنده 3 أساسيات:
HTML
 ↓
Structure
CSS
 ↓
Style / Appearance
JavaScript
 ↓
Behavior / Interaction

مثال:

<button id="btn">Click me</button>

HTML → أنشأت الزرار.

button {
    background: blue;
}

CSS → غيرت شكله.

document.querySelector("#btn").onclick = () => {
    alert("Hello!");
};

JavaScript → أضافت له تفاعل.

🎯 إجابة Interview قصيرة

لو اتسألتي:

What is HTML?

قولي:

HTML stands for HyperText Markup Language. It is the standard markup language used to structure the content of web pages.

ودي كفاية جدًا كبداية.

السؤال 2: What is the difference between <div> and <span>?

الإجابة في الملف بتقول إن:

<div> Block-level element
<span> Inline element
<div>

div عنصر Block.

يعني يبدأ في سطر جديد، وبيأخذ عرض المساحة المتاحة افتراضيًا.

<div>Hello</div>
<div>World</div>

النتيجة:

Hello
World
<span>

span عنصر Inline.

يعني يفضل في نفس السطر وياخد مساحة المحتوى فقط.

<span>Hello</span>
<span>World</span>

النتيجة:

Hello World
إمتى أستخدم كل واحد؟

div → لما أكون بعمل container / grouping لعناصر.

<div class="card">
    <h2>Product</h2>
    <p>Price: $100</p>
</div>

span → لما أحتاج أعمل styling أو تحديد جزء صغير داخل النص.

<p>
    My name is <span class="highlight">Malak</span>.
</p>
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

بدل:

<div class="main-content">

نستخدم:

<main>

المتصفح والـ screen readers ومحركات البحث يقدروا يفهموا دور الجزء ده بشكل أفضل.

مثال:
<header>
    <h1>My Website</h1>
</header>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<main>
    <article>
        <h2>My First Post</h2>
        <p>...</p>
    </article>
</main>

<footer>
    Copyright 2026
</footer>

ده أوضح بكثير من:

<div>
    <div>
        <div>
            ...
        </div>
    </div>
</div>
ليه مهم؟

1. Accessibility

Screen readers تقدر تفهم structure الصفحة.

2. SEO

Search engines تقدر تفهم محتوى الصفحة بشكل أفضل.

3. Maintainability

الكود بيكون أسهل في القراءة والفهم.

🎯 Interview

Semantic HTML means using HTML elements according to their meaning and purpose, such as header, nav, main, article, and footer. It improves accessibility, SEO, and code readability.

السؤال 4: Name some new semantic tags in HTML5

الملف بيذكر: header, footer, section, article, aside, nav, وmain.

خلينا نفهمهم بدل ما نحفظهم:

Tag	استخدامه
<header>	مقدمة الصفحة أو section
<nav>	Navigation links
<main>	المحتوى الأساسي للصفحة
<section>	مجموعة محتوى مرتبطة بموضوع
<article>	محتوى مستقل
<aside>	محتوى جانبي
<footer>	الجزء السفلي

مثال:

<header>
    <h1>My Blog</h1>
</header>

<nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
</nav>

<main>
    <section>
        <h2>Latest Posts</h2>

        <article>
            <h3>HTML Basics</h3>
            <p>...</p>
        </article>
    </section>

    <aside>
        Popular Posts
    </aside>
</main>

<footer>
    Copyright 2026
</footer>
السؤال 5: What is the difference between <section> and <article>?

الملف يفرق بينهم كالتالي: section مجموعة منطقية لمحتوى مرتبط، بينما article قطعة محتوى مستقلة يمكن أن تكون قائمة بذاتها.

<section>

مجموعة محتوى لها موضوع مشترك.

مثلاً في Portfolio:

<section>
    <h2>My Skills</h2>

    <p>HTML</p>
    <p>CSS</p>
    <p>JavaScript</p>
</section>
<article>

محتوى مستقل بذاته.

مثلاً Blog:

<article>
    <h2>What is Angular?</h2>
    <p>Angular is...</p>
</article>

لو أخدنا الـ article وحطيناه في مكان آخر، المفروض يفضل مفهومًا.

🧠 الفرق السريع:

Section = Group of related content

Article = Independent content

السؤال 6: What is the DOM?

الملف بيقول إن الـ DOM يمثل الـ document كشجرة من الـ nodes، ويسمح للـ JavaScript بالوصول للعناصر وتعديلها.

خلينا نبسطها جدًا.

لو HTML:

<html>
    <body>
        <h1>Hello</h1>
        <p>Welcome</p>
    </body>
</html>

المتصفح يبني تمثيلًا شجريًا:

Document
   │
  html
   │
  body
  ├── h1
  │    └── Hello
  │
  └── p
       └── Welcome

كل عنصر هنا Node.

وبعدين JavaScript تقدر تتعامل مع الشجرة:

const title = document.querySelector("h1");

title.textContent = "Hello Malak";

يعني JavaScript وصلت للـ h1 وغيرت محتواه.

مهم جدًا:

HTML ≠ DOM

HTML هو الـ markup اللي كتبناه.

DOM هو التمثيل الذي أنشأه المتصفح من الـ document والذي تتعامل معه JavaScript.

🎯 Interview

The DOM, or Document Object Model, is a tree-like representation of an HTML document that allows JavaScript to access and manipulate elements and content dynamically.

السؤال 7: What is the DOCTYPE?
<!DOCTYPE html>

دي declaration بنحطها في بداية ملف HTML.

وظيفتها الأساسية إنها تخبر المتصفح إن الصفحة تستخدم HTML standard mode بدل الدخول في quirks mode. والملف يربطها بـ HTML5 والمعيار الحديث.

يعني:

<!DOCTYPE html>

<html>
...
</html>
ليه مهمة؟

عشان المتصفح يعرض الصفحة بطريقة standards-compliant.

نقطة مهمة:

DOCTYPE مش HTML element.

ومفيش closing tag:

<!DOCTYPE html>

مش:

</DOCTYPE>
🎯 Interview

DOCTYPE tells the browser to render the document in standards mode. In modern HTML, we use <!DOCTYPE html>.

السؤال 8: What is an Attribute?

الـ Attribute هو معلومة إضافية بنحطها داخل opening tag للـ element. الملف يعطي أمثلة مثل id وhref.

مثلاً:

<a href="https://example.com">Visit</a>

هنا:

href = "https://example.com"

هو Attribute.

مثال آخر:

<img
    src="cat.jpg"
    alt="A cat"
>

عندنا:

src
alt
الشكل العام:
<tag attribute="value">

مثلاً:

<input type="text" placeholder="Enter your name">
السؤال 9: Block vs Inline

الملف يوضح أن Block elements تتدفق رأسيًا وتبدأ أسطرًا جديدة، بينما Inline elements تتدفق في نفس السطر ولا تتعامل مع height وtop/bottom margins بنفس طريقة الـ block.

Block
<div>One</div>
<div>Two</div>
One
Two

أمثلة:

div
p
h1
section
article
Inline
<span>One</span>
<span>Two</span>
One Two

أمثلة:

span
a
strong
em
السؤال 10: What is the difference between id and class?

الملف يعتبر id معرفًا فريدًا، بينما class قابلة لإعادة الاستخدام على عدة عناصر.

id
<div id="header"></div>

المفروض يكون unique داخل الصفحة.

class
<div class="card"></div>
<div class="card"></div>
<div class="card"></div>

عادي جدًا تتكرر.

CSS:
.card {
    padding: 20px;
}

كل العناصر اللي عندها card هتاخد الـ style.

JavaScript:
document.getElementById("header");

و:

document.querySelectorAll(".card");
احفظي:

id → unique

class → reusable

السؤال 11: Can an id be repeated?

لا.

المفروض الـ id يكون unique داخل الـ document. الملف يحذر من تكرار IDs لأنه قد يسبب مشاكل في عمليات تحديد العناصر مثل getElementById.

غلط:

<div id="card"></div>
<div id="card"></div>

صح:

<div id="card1"></div>
<div id="card2"></div>

ولو عندك عناصر كتير بنفس الـ styling:

<div class="card"></div>
<div class="card"></div>

استخدمي class.

السؤال 12: What are Meta Tags?

الـ Meta tags بتوفر metadata عن الصفحة داخل <head>، مثل character encoding والـ description والـ viewport، ومش بتظهر كمحتوى عادي للمستخدم.

مثلاً:

<head>

    <meta charset="UTF-8">

    <meta
        name="description"
        content="My Portfolio"
    >

</head>
أهم أمثلة:
<meta charset="UTF-8">

→ Character encoding

<meta name="description" content="...">

→ وصف الصفحة

<meta name="viewport" content="...">

→ التحكم في الـ viewport على الأجهزة المختلفة

السؤال 13: What is the function of <meta viewport>?

الكود:

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

الملف يربطه بالـ responsive scaling عبر جعل عرض الـ viewport مساويًا لعرض الجهاز.

width=device-width

يعني:

خلي عرض الـ viewport مساوي لعرض شاشة الجهاز.

لو الموبايل عرضه 390px، الـ viewport يتعامل مع العرض ده.

initial-scale=1.0

يعني:

خلي الـ initial zoom = 100%.

وده مهم جدًا للـ Responsive Design.

السؤال 14: What is the difference between <script> in the head and the body?

الملف يوضح أن script العادي في <head> ممكن يوقف parsing، بينما وضعه أسفل <body> يأتي بعد بناء عناصر HTML السابقة له.

مثلاً:

<head>
    <script src="app.js"></script>
</head>

الـ browser ممكن يوقف parsing علشان يحمل وينفذ الـ script.

لكن:

<body>

    <h1>Hello</h1>
    <button>Click</button>

    <script src="app.js"></script>
</body>

العناصر الموجودة قبل الـ script تم parsing لها بالفعل.

لكن في Modern HTML غالبًا نستخدم defer مع scripts في <head>:

<head>
    <script src="app.js" defer></script>
</head>

وده بيسمح بتحميل الـ script بالتوازي مع parsing، مع تنفيذ مؤجل بعد اكتمال parsing.

🟡 كده خلصنا HTML Basics

وده 14 سؤال بالترتيب الموجود في الملف.

بعدهم ندخل HTML Intermediate، وأول سؤال:

What is the difference between <img alt=""> and without it?

ومن هنا هنكمل بنفس الأسلوب: سؤال → تفكيك الإجابة → مثال → Interview answer → السؤال اللي بعده.

كمل
## 15) What is the difference between \`<img alt="">\` and without it?

### معنى السؤال

إيه الفرق بين إن الصورة يكون لها \`alt\` وبين إننا منكتبش \`alt\` أصلًا؟

الإجابة في الملف بتربط \`alt\` بالـ **accessibility** والـ screen readers والـ SEO. 

### يعني إيه \`alt\`؟

\`alt\` اختصار **alternative text**.

مثلاً:

\`\`\`html
<img src="cat.jpg" alt="A white cat sitting on a chair">
\`\`\`

لو الصورة مش ظهرت، الـ \`alt\` بيوصف للمستخدم إيه المفروض يكون موجود.

والأهم: **Screen readers** ممكن تقرأ الـ alt text للمستخدم الذي لا يستطيع رؤية الصورة.

### طب لو مفيش \`alt\`؟

\`\`\`html
<img src="cat.jpg">
\`\`\`

أنتِ لم تعطي وصفًا للصورة.

وده يضر الـ accessibility لأن المستخدم الذي يعتمد على screen reader مش هيحصل على وصف مفيد للصورة.

### مثال مهم:

لو الصورة مجرد decoration ومش لها معنى:

\`\`\`html
<img src="line.png" alt="">
\`\`\`

هنا \`alt=""\` أفضل من حذف الـ \`alt\`، لأنك بتقولي للـ assistive technology إن الصورة **decorative** ومش محتاجة وصف.

### 🎯 Interview answer

> **The \`alt\` attribute provides alternative text for an image. It improves accessibility by giving screen readers a meaningful description when the image contains important information, and it also provides fallback text when the image cannot be displayed.**

---

# 16) What is the difference between \`<link>\` and \`<script>\`?

الإجابة في الملف:
\`link\` بيربط ملفات خارجية غير قابلة للتنفيذ، خصوصًا stylesheets، بينما \`script\` بيحتوي أو يستدعي JavaScript. 

### \`<link>\`

غالبًا بنستخدمه لاستدعاء CSS:

\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`

يعني:

> يا browser، استخدم ملف \`style.css\` كـ stylesheet للصفحة.

\`link\` نفسه **مش بيشغل JavaScript**.

---

### \`<script>\`

بنستخدمه لإضافة أو استدعاء JavaScript:

\`\`\`html
<script src="app.js"><\/script>
\`\`\`

أو ممكن نكتب JavaScript داخله:

\`\`\`html
<script>
    console.log("Hello");
<\/script>
\`\`\`

### 🧠 الفرق:

\`\`\`text
<link>   → external resource / CSS
<script> → JavaScript
\`\`\`

### 🎯 Interview answer

> **\`link\` is used to reference external resources such as stylesheets, while \`script\` is used to embed or load executable JavaScript code.**

---

# 17) What do \`defer\` and \`async\` do?

دي من أهم أسئلة HTML.

الملف بيقول إن الاتنين بيسمحوا بتحميل الـ scripts بدون إيقاف HTML parsing أثناء التحميل، لكن طريقة التنفيذ مختلفة. 

## أولًا: بدونهم

\`\`\`html
<script src="app.js"><\/script>
\`\`\`

المتصفح ممكن يعمل:

\`\`\`text
HTML parsing
     ↓
يلاقي script
     ↓
يوقف parsing
     ↓
تحميل JS
     ↓
تنفيذ JS
     ↓
يكمل HTML
\`\`\`

وده ممكن يكون blocking.

---

## \`defer\`

\`\`\`html
<script src="app.js" defer><\/script>
\`\`\`

الـ browser:

\`\`\`text
HTML parsing ─────────────→ complete
      │
      └── download JS
                    ↓
               execute
\`\`\`

يعني تحميل الـ script يحصل بالتوازي مع parsing.

وبعد اكتمال HTML parsing، يتم تنفيذ الـ deferred scripts.

**والترتيب بينهم محفوظ.**

مثلاً:

\`\`\`html
<script src="one.js" defer><\/script>
<script src="two.js" defer><\/script>
\`\`\`

\`one.js\` هيتنفذ قبل \`two.js\`.

---

## \`async\`

\`\`\`html
<script src="analytics.js" async><\/script>
\`\`\`

التحميل يحصل بالتوازي، لكن بمجرد ما الـ script يخلص تحميل، **ينفذ فورًا**.

لذلك ترتيب scripts متعددة باستخدام \`async\` **غير مضمون**.

### 🧠 احفظي:

**defer:**

> Download now, execute after HTML parsing, preserve order.

**async:**

> Download now, execute as soon as ready, order is not guaranteed.

### مثال استخدام

\`defer\` مناسب غالبًا لـ:

\`\`\`html
<script src="app.js" defer><\/script>
\`\`\`

لأن application code غالبًا يعتمد على DOM.

\`async\` مناسب لسكريبت مستقل لا يعتمد على ترتيب معين، مثل بعض scripts الخاصة بالanalytics.

---

# 18) What are \`localStorage\` and \`sessionStorage\`?

الاتنين طرق لتخزين بيانات **في المتصفح على جهة العميل (client-side)**. الملف يفرق بينهم حسب مدة استمرار البيانات. 

## \`localStorage\`

البيانات بتفضل موجودة حتى بعد ما تقفلي browser/tab، إلى أن يتم حذفها.

\`\`\`javascript
localStorage.setItem("name", "Malak");
\`\`\`

نجيبها:

\`\`\`javascript
localStorage.getItem("name");
\`\`\`

نحذفها:

\`\`\`javascript
localStorage.removeItem("name");
\`\`\`

---

## \`sessionStorage\`

البيانات مرتبطة بالـ **browser tab/session**.

\`\`\`javascript
sessionStorage.setItem("name", "Malak");
\`\`\`

وتظل أثناء الـ session، وعند إغلاق الـ tab تُزال.

### الفرق:

|           | localStorage   | sessionStorage    |
| --------- | -------------- | ----------------- |
| الاستمرار | طويل/حتى الحذف | أثناء الـ session |
| إغلاق tab | البيانات تظل   | البيانات تُحذف    |
| API       | نفس الفكرة     | نفس الفكرة        |

### 🎯 Interview

> **Both provide client-side storage. \`localStorage\` persists data until it is explicitly cleared, while \`sessionStorage\` persists data for the current tab session.**

---

# 19) What is the difference between form GET and POST?

الملف يقارن طريقة إرسال البيانات في HTTP. 

## GET

البيانات بتظهر في URL كـ query parameters.

مثلاً:

\`\`\`html
<form method="GET">
\`\`\`

لو عندنا:

\`\`\`html
<input name="search">
\`\`\`

وكتبنا:

\`\`\`text
laptop
\`\`\`

ممكن يبقى URL بالشكل:

\`\`\`text
/search?search=laptop
\`\`\`

يعني البيانات **ظاهرة في URL**.

---

## POST

البيانات بتتبعت داخل **HTTP request body** بدل ما تتحط في URL.

\`\`\`html
<form method="POST">
\`\`\`

مناسبة لإرسال بيانات أكبر أو بيانات لا نريد وضعها في URL.

### ⚠️ نقطة مهمة

**POST مش معناها automatically secure.**

لو بتبعت password، لازم تستخدم **HTTPS**.

يعني الأمان الحقيقي مش لأنك استخدمت POST فقط.

### 🎯 Interview

> **GET sends form data as query parameters in the URL, while POST sends the data in the HTTP request body. GET is commonly used for retrieving resources, while POST is commonly used for submitting or creating data.**

---

# 20) What is an iframe?

\`iframe\` = **Inline Frame**.

الملف يصفه كـ container يعرض document HTML آخر داخل الصفحة الحالية. 

مثلاً:

\`\`\`html
<iframe
    src="https://example.com"
    width="600"
    height="400">
</iframe>
\`\`\`

الصفحة الحالية هتحتوي على **صفحة أخرى داخلها**.

من استخداماته:

* Embedding maps
* فيديوهات
* مستندات
* محتوى من خدمة أخرى

مثلاً YouTube embed بيستخدم iframe في كثير من حالات التضمين.

### 🎯 Interview

> **An iframe allows us to embed another HTML document or external content inside the current webpage.**

---

# 21) What is the benefit of accessibility (ARIA attributes)?

الملف يشرح ARIA بأنها attributes بتضيف **semantic information** تساعد assistive technologies على فهم components المعقدة. 

ARIA = **Accessible Rich Internet Applications**

مثلاً عندك button:

\`\`\`html
<button aria-label="Close">
    X
</button>
\`\`\`

الشخص اللي بيستخدم screen reader ممكن يفهم إن الزر ده وظيفته **Close**، حتى لو الظاهر للمستخدم مجرد \`X\`.

### مهم جدًا:

**استخدمي semantic HTML أولًا.**

يعني لو عندك:

\`\`\`html
<button>Close</button>
\`\`\`

ده أفضل من:

\`\`\`html
<div role="button">Close</div>
\`\`\`

لأن الـ \`<button>\` أصلاً عنصر semantic وaccessible.

ARIA بنستخدمها لما الـ native HTML semantics **مش كافية**.

### 🎯 Interview

> **ARIA attributes improve accessibility by providing additional semantic information to assistive technologies, especially for custom or complex UI components.**

---

# 🔴 HTML Advanced

## 22) What is Shadow DOM?

الـ Shadow DOM هو نظام يسمح بإنشاء **DOM subtree معزول** داخل component. الملف يركز على عزل الـ DOM والـ CSS عن الصفحة الرئيسية. 

تخيليه كأن عندك component:

\`\`\`text
Main Document
│
├── Header
├── Content
│
└── My Component
      │
      └── Shadow Root
            ├── HTML
            └── CSS
\`\`\`

الـ CSS داخل الـ Shadow DOM بيكون scoped للـ component بدل ما يبقى كله global.

وده مهم جدًا في **Web Components**.

---

# 23) What are Web Components?

الملف يعتبر Web Components مجموعة من web platform capabilities تسمح ببناء components قابلة لإعادة الاستخدام بدون الاعتماد على framework معين. وتشمل:

* Custom Elements
* Shadow DOM
* HTML Templates 

مثلاً ممكن تعمل عنصر خاص بك:

\`\`\`html
<user-card></user-card>
\`\`\`

بدل ما تعتمد على Angular أو React علشان تعمل component.

### الفكرة:

\`\`\`text
Web Components
├── Custom Elements
├── Shadow DOM
└── Templates
\`\`\`

### 🎯 Interview

> **Web Components are a set of native web platform APIs for creating reusable, encapsulated, framework-independent custom elements.**

---

# 24) What is the \`<template>\` tag?

الـ \`<template>\` بيحتوي على **HTML blueprint** لا يتم عرضه مباشرة عند تحميل الصفحة. الملف يوضح إنه لا يدخل الـ rendered page حتى يتم نسخه/instantiated وإضافته للـ DOM. 

مثلاً:

\`\`\`html
<template id="userTemplate">
    <div class="user-card">
        <h2></h2>
        <p></p>
    </div>
</template>
\`\`\`

الـ HTML ده **مش هيظهر مباشرة**.

JavaScript ممكن تعمل clone:

\`\`\`javascript
const template = document.querySelector("#userTemplate");

const clone = template.content.cloneNode(true);

document.body.appendChild(clone);
\`\`\`

فكرتها:

> **Template = blueprint جاهز نستخدمه لإنشاء elements لاحقًا.**

---

# 25) What is the benefit of \`<picture>\` and \`srcset\`?

الملف يربطهم بالـ **responsive image delivery** واختيار الصورة المناسبة حسب أبعاد الشاشة أو الـ pixel density. 

### \`srcset\`

مثلاً:

\`\`\`html
<img
    src="small.jpg"
    srcset="
        small.jpg 480w,
        medium.jpg 800w,
        large.jpg 1200w
    "
    alt="Mountain">
\`\`\`

المتصفح يقدر يختار الصورة المناسبة حسب الـ viewport/device.

---

### \`<picture>\`

مفيد أكثر لما نحتاج **art direction**، يعني نريد صورًا مختلفة فعلًا حسب حجم الشاشة.

\`\`\`html
<picture>
    <source media="(max-width: 600px)" srcset="mobile.jpg">
    <source media="(min-width: 601px)" srcset="desktop.jpg">

    <img src="desktop.jpg" alt="Mountain">
</picture>
\`\`\`

هنا ممكن نستخدم composition مختلفة للموبايل والـ desktop.

### 🧠 الفرق المهم:

**\`srcset\` → choose an appropriate image resource**

**\`picture\` → provide different image sources/versions based on conditions**

---

## ✅ كده خلصنا HTML كله

وصلنا من **السؤال 1 إلى 25**، والـ 25 سؤال دول هم Basics + Intermediate + Advanced في ملف الـ HTML.  

**الخطوة الجاية في الملف: CSS Architecture → Basics**، وأول سؤال:

> **What is the difference between inline, internal, and external CSS?** 

وده هنبدأه من الصفر برضه، مش مجرد حفظ الإجابة.


# 🎨 CSS Architecture

## 26) Inline vs Internal vs External CSS

### Inline

\`\`\`html
<p style="color: red;">Hello</p>
\`\`\`

CSS مكتوبة داخل العنصر نفسه.

**عيبها:** صعبة في الصيانة وإعادة الاستخدام.

### Internal

\`\`\`html
<head>
  <style>
    p { color: red; }
  </style>
</head>
\`\`\`

CSS داخل \`<style>\` في نفس الصفحة.

### External

\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`

والـ CSS في ملف منفصل.

**الأفضل في المشاريع الكبيرة** لأنه reusable وأسهل في التنظيم، ويمكن للمتصفح عمل caching للملف. 

**احفظي:**

> Inline = inside element
> Internal = inside \`<style>\`
> External = separate \`.css\` file

---

## 27) What is Specificity?

الـ **Specificity** هي أولوية الـ CSS لما أكتر من rule يحاول يطبق على نفس العنصر.

مثلاً:

\`\`\`css
p {
  color: blue;
}

.text {
  color: green;
}

#title {
  color: red;
}
\`\`\`

\`\`\`html
<p id="title" class="text">Hello</p>
\`\`\`

النتيجة **red** لأن \`id\` أقوى من \`class\` وelement selector.

الترتيب الموجود في الملف:

\`\`\`text
Inline
  ↓
ID
  ↓
Class / Attribute / Pseudo-class
  ↓
Element
\`\`\`



---

# 28) What is the Cascade?

الـ **Cascade** هي الآلية التي يحدد بها CSS أي rule يفوز عندما توجد قواعد متعارضة.

يعتمد الاختيار على عوامل مثل:

* Origin
* Importance
* Specificity
* Order

مثلاً:

\`\`\`css
p {
  color: red;
}

p {
  color: blue;
}
\`\`\`

نفس specificity، إذن الأخيرة تفوز:

\`\`\`text
blue
\`\`\`

**Cascade ≠ Specificity**

Specificity جزء من عملية الـ Cascade.

---

# 29) What is the Box Model?

كل element في CSS بيتعامل معه المتصفح كصندوق:

\`\`\`text
┌──────────── Margin ────────────┐
│ ┌────────── Border ──────────┐ │
│ │ ┌──────── Padding ───────┐ │ │
│ │ │       Content          │ │ │
│ │ └────────────────────────┘ │ │
│ └────────────────────────────┘ │
└────────────────────────────────┘
\`\`\`

الترتيب:

**Content → Padding → Border → Margin**

مثال:

\`\`\`css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  margin: 10px;
}
\`\`\`

---

# 30) Margin vs Padding

### Padding

مسافة **داخل العنصر**:

\`\`\`css
.card {
  padding: 20px;
}
\`\`\`

المحتوى يبعد عن الـ border.

### Margin

مسافة **خارج العنصر**:

\`\`\`css
.card {
  margin: 20px;
}
\`\`\`

العنصر يبعد عن العناصر الأخرى.

**احفظي:**

> Padding = inside
> Margin = outside



---

# 31) What is \`display\`?

\`display\` بتحدد **طريقة العنصر في layout**.

أهم القيم:

### \`block\`

\`\`\`css
div {
  display: block;
}
\`\`\`

يبدأ سطر جديد.

### \`inline\`

\`\`\`css
span {
  display: inline;
}
\`\`\`

يظل في نفس السطر.

### \`inline-block\`

يجمع ميزات الاثنين:

* يظل inline
* لكن يقبل \`width\` و\`height\`

\`\`\`css
span {
  display: inline-block;
  width: 100px;
  height: 50px;
}
\`\`\`

### \`flex\`

مناسب لترتيب العناصر في **row أو column**.

\`\`\`css
.container {
  display: flex;
}
\`\`\`

### \`grid\`

مناسب للـ **rows + columns**.

\`\`\`css
.container {
  display: grid;
}
\`\`\`

---

# 32) What is Flexbox?

Flexbox نظام layout **one-dimensional**.

يعني بتركزي على اتجاه واحد:

\`\`\`text
Row
أو
Column
\`\`\`

مثال:

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

### \`justify-content\`

يتعامل مع **main axis**.

### \`align-items\`

يتعامل مع **cross axis**.

---

# 33) What is Grid?

CSS Grid نظام layout **two-dimensional**:

\`\`\`text
Columns →
┌────┬────┬────┐
│    │    │    │
├────┼────┼────┤
│    │    │    │
└────┴────┴────┘
       ↓
      Rows
\`\`\`

مثال:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
\`\`\`

هيعمل 3 columns.

---

# 34) \`flex: 1\` vs \`flex: auto\`

حسب الملف:

\`\`\`css
flex: 1;
\`\`\`

تعادل تقريبًا:

\`\`\`css
flex: 1 1 0%;
\`\`\`

العناصر تتقاسم المساحة المتاحة بشكل متساوٍ.

أما:

\`\`\`css
flex: auto;
\`\`\`

تعادل:

\`\`\`css
flex: 1 1 auto;
\`\`\`

وتأخذ **حجم المحتوى الأصلي في الاعتبار** قبل توزيع المساحة. 

---

# 35) \`grid-template-columns\` vs \`grid-template-rows\`

\`\`\`css
grid-template-columns
\`\`\`

تحدد **الأعمدة**.

\`\`\`css
grid-template-rows
\`\`\`

تحدد **الصفوف**.

مثلاً:

\`\`\`css
grid-template-columns: 1fr 1fr;
grid-template-rows: 100px 200px;
\`\`\`

---

# 36) What is \`fr\`?

\`fr\` = **fraction**

بتقسم المساحة المتاحة بين grid tracks.

\`\`\`css
grid-template-columns: 1fr 2fr;
\`\`\`

يعني:

\`\`\`text
1 جزء | 2 جزء
\`\`\`

إجمالي 3 أجزاء.

---

# 37) What is \`minmax()\`?

بتحدد minimum وmaximum لحجم الـ grid track.

\`\`\`css
grid-template-columns:
  repeat(3, minmax(200px, 1fr));
\`\`\`

يعني العمود:

> مش أقل من 200px، لكن ممكن يكبر لحد المساحة المتاحة.

---

# 38) \`repeat()\` vs \`auto-fill\` vs \`auto-fit\`

### \`repeat()\`

تقلل تكرار كتابة tracks:

\`\`\`css
repeat(3, 1fr)
\`\`\`

### \`auto-fill\`

يحاول يحجز أكبر عدد ممكن من tracks، حتى لو بعضها فاضي.

### \`auto-fit\`

يعمل collapse للـ empty tracks ويوسع العناصر الموجودة.

الملف يوضح الفرق ده تحديدًا في Grid. 

---

# 39) What is Specificity Hierarchy?

الملف يعطي score مبسط:

\`\`\`text
Inline…4036 tokens truncated…r
\`\`\`

لأن \`x\` موجود في TDZ.



---

# 99) Generators & Async Iterators

Generator:

\`\`\`javascript
function* numbers() {
  yield 1;
  yield 2;
}
\`\`\`

\`yield\` يوقف execution مؤقتًا.

Async iterators تستخدم:

\`\`\`javascript
for await (const item of items) {
}
\`\`\`

والملف يربطها بـ \`[Symbol.asyncIterator]\`. 

---

# 📘 TypeScript

## 100) What is TypeScript?

TypeScript هي لغة مبنية فوق JavaScript وتضيف **static typing**.

\`\`\`typescript
let age: number = 20;
\`\`\`

قبل تشغيل الكود يتم type checking ثم تتحول إلى JavaScript.



---

# 101) \`any\` vs \`unknown\`

### any

يلغي تقريبًا type checking:

\`\`\`typescript
let value: any = "hello";

value.foo.bar();
\`\`\`

TypeScript تسمح.

### unknown

آمنة أكثر:

\`\`\`typescript
let value: unknown = "hello";
\`\`\`

لازم تعمل narrowing قبل استخدامه.

\`\`\`typescript
if (typeof value === "string") {
  value.toUpperCase();
}
\`\`\`



---

# 102) \`interface\` vs \`type\`

### interface

ممتاز لتعريف object structures:

\`\`\`typescript
interface User {
  name: string;
  age: number;
}
\`\`\`

ويمكن **declaration merging**.

### type

أكثر مرونة:

\`\`\`typescript
type ID = string | number;
\`\`\`

ويمكن تعريف unions/tuples وغيرها. 

---

# 103) Union Type

Variable تقبل أكثر من type:

\`\`\`typescript
let id: string | number;
\`\`\`

ممكن:

\`\`\`typescript
id = "A123";
id = 123;
\`\`\`

---

# 104) Generics

بتخلي function/class reusable مع الحفاظ على type safety.

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}
\`\`\`

\`\`\`typescript
identity<string>("Hello");
identity<number>(10);
\`\`\`

---

# 105) Enum

مجموعة values مسماة:

\`\`\`typescript
enum Role {
  Admin,
  User,
  Guest
}
\`\`\`

فتستخدم:

\`\`\`typescript
Role.Admin
\`\`\`

---

# 106) readonly

يمنع modification بعد initialization:

\`\`\`typescript
interface User {
  readonly id: number;
}
\`\`\`

\`\`\`typescript
user.id = 5; // Error
\`\`\`

---

# 107) Interface Merging

لو كتبنا:

\`\`\`typescript
interface User {
  name: string;
}

interface User {
  age: number;
}
\`\`\`

TypeScript تدمجهم:

\`\`\`typescript
User {
  name: string;
  age: number;
}
\`\`\`

---

# 108) public / private / protected

\`\`\`text
public     → everywhere
private    → داخل class
protected  → class + subclasses
\`\`\`



---

# 109) Decorators

Annotations/metadata مرتبطة بـ classes أو properties أو methods.

في Angular مثلًا:

\`\`\`typescript
@Component({
  selector: 'app-user'
})
\`\`\`

\`@Component\` decorator.

---

# 110) Type Inference

TypeScript ممكن تستنتج النوع بدون ما تكتبيه:

\`\`\`typescript
let age = 20;
\`\`\`

TypeScript تستنتج:

\`\`\`text
number
\`\`\`

---

# 111) Utility Types

### Partial

كل properties optional:

\`\`\`typescript
Partial<User>
\`\`\`

### Pick

اختيار properties:

\`\`\`typescript
Pick<User, "name">
\`\`\`

### Omit

حذف properties:

\`\`\`typescript
Omit<User, "password">
\`\`\`

### Record

بناء object type من keys/type:

\`\`\`typescript
Record<string, number>
\`\`\`



---

# 💧 jQuery

## 112) What is jQuery?

Library قديمة لتسهيل:

* DOM
* Events
* AJAX
* Animations



---

# 113) \`hide()\` vs \`remove()\`

\`\`\`javascript
$("#box").hide();
\`\`\`

يخفي العنصر لكنه يظل في DOM.

\`\`\`javascript
$("#box").remove();
\`\`\`

يحذف العنصر من DOM.

---

# 114) AJAX in jQuery

\`\`\`javascript
$.ajax({
  url: "/api/users",
  success: function(data) {}
});
\`\`\`

طريقة قديمة لعمل asynchronous requests.

---

# 115) Selecting Elements

\`\`\`javascript
$(".card")
\`\`\`

يختار class.

\`\`\`javascript
$("#title")
\`\`\`

يختار ID.

---

# 116) \`document.ready\` vs \`window.onload\`

### ready

يحدث عندما يكون DOM جاهزًا.

### onload

ينتظر تحميل resources مثل الصور أيضًا.



---

# 117) Why jQuery decreased?

لأن المتصفحات الحديثة توفر native APIs مثل:

\`\`\`javascript
document.querySelector()
fetch()
addEventListener()
\`\`\`

بالإضافة إلى frameworks الحديثة مثل Angular/React/Vue.

---

# 118) \`on()\` vs \`click()\`

\`click()\` shorthand للـ click event.

\`on()\` أكثر مرونة، ومنها **event delegation**:

\`\`\`javascript
$("#parent").on("click", ".child", handler);
\`\`\`

---

# 119) fadeIn / fadeOut

jQuery تغير opacity تدريجيًا، ثم تتعامل مع \`display\` لإظهار/إخفاء العنصر.



---

# 🅰️ Angular

## 120) What is Angular?

Framework component-based من Google لبناء تطبيقات web كبيرة، خصوصًا SPAs. 

---

# 121) SPA vs MPA

### SPA

صفحة واحدة، والتنقل يغير الـ view بدون تحميل document كامل كل مرة.

### MPA

كل navigation يطلب document جديد من server.

---

# 122) What is a Component?

Component = building block أساسي في Angular.

يتكون من:

\`\`\`text
TypeScript
+
HTML Template
+
CSS
+
@Component metadata
\`\`\`

---

# 123) Parts of Component

مثلاً:

\`\`\`typescript
@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {}
\`\`\`

عندنا:

* Class
* Decorator
* Template
* Styles

---

# 124) What are Modules?

الملف يشرح \`NgModule\` كحاويات لتنظيم components/directives/pipes/services. 

**لكن مهم:** Angular الحديث يعتمد كثيرًا على **Standalone Components**، وهنوصل لها لاحقًا في الملف.

---

# 125) Data Binding Types

### Interpolation

\`\`\`html
{{ name }}
\`\`\`

TS → HTML.

### Property Binding

\`\`\`html
<img [src]="imageUrl">
\`\`\`

### Event Binding

\`\`\`html
<button (click)="save()">
\`\`\`

HTML event → TS.

### Two-way binding

\`\`\`html
<input [(ngModel)]="name">
\`\`\`

TS ↔ HTML.



---

# 126) Directive

Directive class تغير behavior أو structure الخاص بالـ template.

---

# 127) Types of Directives

### Component

Directive + Template.

### Structural

تغير DOM structure:

\`\`\`text
*ngIf
*ngFor
\`\`\`

### Attribute

تغير appearance/behavior:

\`\`\`text
ngClass
ngStyle
\`\`\`



---

# 128) \`*ngIf\`

يعرض element حسب condition:

\`\`\`html
<div *ngIf="isLoggedIn">
  Welcome
</div>
\`\`\`

---

# 129) \`*ngFor\`

يكرر elements:

\`\`\`html
<div *ngFor="let user of users">
  {{ user.name }}
</div>
\`\`\`

---

# 130) \`*ngSwitch\`

اختيار view حسب value.

---

# 131) \`ngClass\` vs \`ngStyle\`

### ngClass

يغير classes:

\`\`\`html
<div [ngClass]="{active: isActive}">
\`\`\`

### ngStyle

يغير inline styles:

\`\`\`html
<div [ngStyle]="{color: color}">
\`\`\`



---

# 132) What is a Service?

Class تحتوي logic reusable مثل:

* API calls
* shared data
* caching
* business logic

بدل ما component تعمل كل حاجة.

---

# 133) Dependency Injection

بدل component تعمل:

\`\`\`typescript
const service = new UserService();
\`\`\`

Angular توفر الـ dependency لها.

مثلاً:

\`\`\`typescript
constructor(private userService: UserService) {}
\`\`\`



---

# 134) Service Scope

\`\`\`typescript
@Injectable({
  providedIn: 'root'
})
\`\`\`

يعني service singleton على مستوى التطبيق عادةً.

ولو provider على component، يمكن يكون له instance خاص بذلك branch.

---

# 135) Lifecycle Hooks

أهم الموجودة في الملف:

\`\`\`text
ngOnChanges
ngOnInit
ngDoCheck
ngAfterViewInit
ngOnDestroy
\`\`\`



---

# 136) \`ngOnInit\`

تشتغل مرة بعد initialization للـ inputs.

مناسبة لبدء data loading.

---

# 137) \`ngOnChanges\`

تشتغل عندما تتغير \`@Input()\` values.

وتستقبل \`SimpleChanges\`.

---

# 138) RouterModule

مسؤول عن routing configuration وعرض component المطابق داخل:

\`\`\`html
<router-outlet></router-outlet>
\`\`\`

---

# 139) Lazy Loading

بدل تحميل كل application code مرة واحدة، نحمل feature code عند الحاجة.

الهدف:

> تقليل initial bundle.

---

# 140) \`routerLink\` vs programmatic navigation

### Template

\`\`\`html
<a routerLink="/users">
\`\`\`

### TypeScript

\`\`\`typescript
this.router.navigate(['/users']);
\`\`\`

الملف يذكر \`Router.navigate()\` كـ programmatic navigation. 

---

# 141) Template-driven vs Reactive Forms

### Template-driven

الـ form logic في HTML.

مناسب للنماذج البسيطة.

### Reactive

الـ form structure في TypeScript:

\`\`\`typescript
form = new FormGroup({
  name: new FormControl('')
});
\`\`\`

مناسب للنماذج الكبيرة والـ validation المعقد.

---

# 142) FormControl vs FormGroup

### FormControl

يمثل input واحد:

\`\`\`typescript
name = new FormControl('');
\`\`\`

### FormGroup

يجمع controls:

\`\`\`typescript
form = new FormGroup({
  name: new FormControl(''),
  email: new FormControl('')
});
\`\`\`

---

# 143) Validators

Rules تتحقق من صحة input:

\`\`\`typescript
Validators.required
Validators.email
Validators.minLength(8)
\`\`\`

---

# 144) HttpClient

Angular service لعمل HTTP requests.

\`\`\`typescript
this.http.get<User[]>('/api/users');
\`\`\`

ويرجع Observable.

---

# 145) Interceptor

Middleware للـ HTTP requests/responses.

مثلاً إضافة token لكل request:

\`\`\`text
Request
 ↓
Interceptor
 ↓
Add Authorization
 ↓
Server
\`\`\`



---

# 🔵 RxJS

## 146) Observable

Observable = stream من البيانات ممكن يرسل values مع الوقت.

\`\`\`typescript
observable.subscribe(value => {
  console.log(value);
});
\`\`\`

---

# 147) Subject vs BehaviorSubject

### Subject

لا يحتفظ بقيمة سابقة للمشترك الجديد.

### BehaviorSubject

يحتاج initial value ويحتفظ بآخر value.

\`\`\`typescript
new BehaviorSubject(0);
\`\`\`

المشترك الجديد يحصل على current value مباشرة.



---

# 148) \`switchMap\` vs \`mergeMap\`

### switchMap

لو جاء request جديد، يلغي/يترك stream السابق.

ممتاز للبحث:

\`\`\`text
a
ab
abc
\`\`\`

نريد نتيجة \`abc\`.

### mergeMap

يسمح للـ streams بالتنفيذ بالتوازي.



---

# 149) What is a Signal?

Signal reactive state:

\`\`\`typescript
count = signal(0);
\`\`\`

وعندما تتغير القيمة، Angular يعرف الـ consumers المتأثرين.

---

# 150) Signal vs BehaviorSubject

Signal مناسب جدًا لـ **reactive state داخل Angular**.

BehaviorSubject جزء من RxJS ومناسب أكثر لـ **stream/event-based state**.

---

# 151) \`computed\`

Signal مشتق من signals أخرى:

\`\`\`typescript
total = computed(() => price() * quantity());
\`\`\`

read-only ومبني من dependencies.

---

# 152) \`effect\`

يشغل side effect عندما تتغير signals التي يعتمد عليها:

\`\`\`typescript
effect(() => {
  console.log(count());
});
\`\`\`

---

# 153) Signals vs Observables

**Signals → state/reactive UI**

**Observables → async streams/events/data pipelines**



---

# 154) How to unsubscribe cleanly?

الملف يركز على Angular الحديث:

\`\`\`typescript
takeUntilDestroyed()
\`\`\`

أو:

\`\`\`typescript
DestroyRef
\`\`\`

بدل إدارة subscriptions يدويًا في كل component. 

---

# 155) \`forkJoin\` vs \`combineLatest\`

### forkJoin

ينتظر **كل Observables تكمل** ثم يعطي final values مرة واحدة.

مناسب مثل:

> أحتاج 3 API requests وكلهم لازم يخلصوا.

### combineLatest

كلما source يرسل value، يعطي combination من آخر values لكل sources، بشرط كل source يكون أرسل مرة واحدة على الأقل.



---

# 🚀 Angular Advanced

## 156) What is Hydration?

لو Angular استخدمت SSR، السيرفر يرسل HTML جاهز.

Hydration تجعل Angular على client **تربط behavior/state بالـ HTML الموجود بدل إعادة بناء الصفحة من الصفر**.

---

# 157) Incremental Hydration

بدل hydrate كل التطبيق مرة واحدة، يتم hydration لأجزاء معينة عند الحاجة، مثل:

\`\`\`text
viewport
click
hover
\`\`\`

والهدف تحسين performance وCore Web Vitals. 

---

# 158) Change Detection

Angular تراقب state changes وتحدث الـ templates.

الفكرة:

\`\`\`text
Root
 ↓
Parent
 ↓
Child
 ↓
Template
\`\`\`

والـ OnPush يمكنه تقليل الفروع التي تحتاج checking. 

---

# 159) JIT vs AOT

### JIT

Compilation أثناء runtime.

### AOT

Compilation أثناء build قبل deployment.

AOT يقلل العمل الذي يحتاج browser القيام به أثناء runtime. 

---

# 160) AOT performance benefits

حسب الملف:

* أسرع initial rendering
* يقلل compiler overhead في production
* يساعد tree shaking
* يكتشف أخطاء أثناء build



---

# 161) Default vs OnPush

### Default

Angular تعمل checks على components أكثر على نطاق واسع أثناء change detection.

### OnPush

تقلل checks للـ component subtree، مع حالات triggers مثل تغير input reference أو events أو observable bound عبر async pipe.

---

# 162) Standalone Components

بدل الاعتماد على \`NgModule\` لتجميع كل component، component يمكن أن يكون **standalone** ويحدد dependencies في \`imports\` مباشرة.

الفكرة:

\`\`\`typescript
@Component({
  standalone: true,
  imports: [...]
})
\`\`\`

وهي من الاتجاهات الحديثة في Angular.

---

# 163) Router Guards

Guard يتحقق هل المستخدم مسموح له يدخل route.

أهم الأنواع في الملف:

\`\`\`text
canActivate
canDeactivate
canLoad / canMatch
\`\`\`

* \`canActivate\` → يسمح/يمنع الدخول.
* \`canDeactivate\` → يمنع الخروج مثل form unsaved.
* \`canLoad/canMatch\` → التحكم في الوصول إلى lazy-loaded features.



---

# 164) \`canActivate\` vs \`canLoad\`

الفكرة الموجودة في الملف:

\`canActivate\` يتحقق من الوصول للroute بعد إمكانية تحميل الكود.

\`canLoad\` يمنع lazy-loaded code من التحميل عندما لا يكون الوصول مسموحًا، وبالتالي يوفر bandwidth.



---

# 165) \`ng-container\` vs \`ng-template\`

### ng-container

Grouping بدون إضافة wrapper element للـ DOM.

### ng-template

Template غير rendered مباشرة، ويتم instantiate عند الحاجة.



---

# 166) Angular 17+ Control Flow

بدل:

\`\`\`html
<div *ngIf="isLogged"></div>
\`\`\`

أصبح عندنا:

\`\`\`html
@if (isLogged) {
  <div>Welcome</div>
}
\`\`\`

وبدل \`*ngFor\`:

\`\`\`html
@for (user of users; track user.id) {
  <div>{{ user.name }}</div>
}
\`\`\`

الملف يربطه بتحسين syntax والأداء وtracking المدمج. 

---

# 167) \`@defer\`

Angular الحديثة تسمح بـ:

\`\`\`html
@defer {
  <heavy-component />
}
\`\`\`

بحيث يتم تحميل component عند trigger مناسب مثل viewport/interactions، بدل تحميله مباشرة. 

---

# 168) OnPush Performance

OnPush يقلل unnecessary change detection.

الملف يذكر triggers مثل:

* Input reference changes
* component/template event
* Observable bound with \`async\` emits



---

# 169) \`trackBy\` / \`track\`

لو عندك list كبيرة:

\`\`\`html
@for (user of users; track user.id)
\`\`\`

Angular تقدر تعرف أن:

> هذا نفس العنصر القديم.

فتحتفظ بالـ DOM بدل إعادة إنشاء كل العناصر.



---

# 170) Lazy Loading vs Preloading

### Lazy Loading

لا تحمل feature إلا عند navigation إليها.

### Preloading

بعد initial load، يبدأ تحميل features في الخلفية لتكون جاهزة عندما المستخدم يدخلها.



---

# 171) Pure Pipes

بدل:

\`\`\`html
{{ calculateTotal() }}
\`\`\`

الـ method ممكن تتنفذ في كل change detection.

Pure pipe يعيد الحساب عندما تتغير inputs بدل إعادة الحساب بلا داعٍ.



---

# 172) \`shareReplay\`

لو Observable بارد وكل subscriber يسبب HTTP request جديد، ممكن يحصل duplicate requests.

\`\`\`typescript
shareReplay(1)
\`\`\`

تخلي النتيجة قابلة للمشاركة وتعيد آخر value للمشتركين الجدد، حسب configuration المستخدمة.



---

# 🧠 Interview Scenarios

آخر جزء في الملف عبارة عن **أسئلة مواقف وتصميم**، وده أهم جزء للتدريب على المقابلة لأنه مش حفظ تعريفات فقط.

## 173) Large-scale Angular architecture

الإجابة الموجودة في الملف تعتمد على:

\`\`\`text
Core
Shared
Feature
Lazy Loading
\`\`\`

### Core

Singleton services مثل:

\`\`\`text
Auth
API configuration
\`\`\`

### Shared

Components / pipes / utilities reusable.

### Feature

كل business domain في module/feature منفصل.

والـ lazy loading يقلل initial bundle. 

---

## 174) Local State vs Global State

### Local

حالة تخص component:

\`\`\`text
dropdown open
loading spinner
form field
\`\`\`

### Global

حالة يحتاجها أجزاء متعددة:

\`\`\`text
Authentication
Shopping cart
Shared API data
\`\`\`

الفكرة:

> لا تعملي global state لكل حاجة.

---

## 175) Authentication & Authorization Architecture

في scenario ده، الفكرة الأساسية تكون:

\`\`\`text
Login
 ↓
Server validates credentials
 ↓
Token/session
 ↓
Client stores/uses authentication state
 ↓
Interceptor
 ↓
Attach credentials
 ↓
Backend
\`\`\`

والـ authorization يتم التحقق منه على **server** أيضًا؛ الـ frontend route guards وحدها ليست security boundary.

---

# 🛑 وهنا لازم أقف عند نقطة مهمة

أنا أقدر أكمل **باقي الـ Interview Scenarios الموجودة بعد السؤال ده**، لكن الملف الذي أتاحه البحث ظاهر عندي حتى **95–96% فقط** في نتائج البحث، وبعض آخر الأسئلة غير مكتملة في المقاطع المسترجعة. لذلك مش هخترع باقي الأسئلة وأقول إنها من الملف.

المؤكد من الملف وصلناه حتى **قسم Interview Scenarios**، وبدأنا أول أسئلته. 

**ولو هدفنا المذاكرة فعلًا، أنا أنصح جدًا بعد كده نرجع من أول CSS ونمشي سؤال سؤال بعمق أكبر، لأن الـ 170+ سؤال دول بالشكل ده يعتبروا مراجعة، مش شرح دراسة.**


`,
  en: String.raw`
Absolutely. Here is the **same explanation in English**, keeping the same order and interview-focused style.

# 🎨 CSS Architecture

## 26. Inline vs Internal vs External CSS

### Inline CSS

CSS is written directly inside the HTML element:

\`\`\`html
<p style="color: red;">Hello</p>
\`\`\`

**Disadvantage:** difficult to maintain and reuse.

### Internal CSS

CSS is written inside a \`<style>\` tag:

\`\`\`html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
\`\`\`

### External CSS

CSS is placed in a separate file:

\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`

**Best for large projects** because it is reusable, easier to maintain, and can be cached by the browser.

**Remember:**

> Inline = inside the element
> Internal = inside \`<style>\`
> External = separate \`.css\` file

---

# 27. What is Specificity?

**Specificity** determines which CSS rule wins when multiple rules target the same element.

Example:

\`\`\`css
p {
  color: blue;
}

.text {
  color: green;
}

#title {
  color: red;
}
\`\`\`

\`\`\`html
<p id="title" class="text">Hello</p>
\`\`\`

The result is **red**, because an ID selector has higher specificity than a class or element selector.

A simplified hierarchy is:

\`\`\`text
Inline
   ↓
ID
   ↓
Class / Attribute / Pseudo-class
   ↓
Element
\`\`\`

---

# 28. What is the Cascade?

The **Cascade** is the mechanism CSS uses to decide which rule should be applied when multiple rules conflict.

It considers things such as:

* Origin
* Importance
* Specificity
* Source order

Example:

\`\`\`css
p {
  color: red;
}

p {
  color: blue;
}
\`\`\`

Both selectors have the same specificity, so the **last rule wins**.

### Important:

> Specificity is part of the Cascade.

They are not exactly the same thing.

---

# 29. What is the Box Model?

Every HTML element is treated as a box.

\`\`\`text
┌──────────── Margin ────────────┐
│ ┌────────── Border ──────────┐ │
│ │ ┌──────── Padding ───────┐ │ │
│ │ │       Content          │ │ │
│ │ └────────────────────────┘ │ │
│ └────────────────────────────┘ │
└────────────────────────────────┘
\`\`\`

The order is:

**Content → Padding → Border → Margin**

Example:

\`\`\`css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  margin: 10px;
}
\`\`\`

---

# 30. Margin vs Padding

### Padding

Padding is the space **inside** the element.

\`\`\`css
.card {
  padding: 20px;
}
\`\`\`

It creates space between the content and the border.

### Margin

Margin is the space **outside** the element.

\`\`\`css
.card {
  margin: 20px;
}
\`\`\`

It creates space between the element and other elements.

### Remember:

> Padding = inside
> Margin = outside

---

# 31. What is \`display\`?

The \`display\` property determines how an element participates in the layout.

### \`block\`

\`\`\`css
div {
  display: block;
}
\`\`\`

The element starts on a new line.

### \`inline\`

\`\`\`css
span {
  display: inline;
}
\`\`\`

The element stays in the same line.

### \`inline-block\`

It combines features of inline and block:

\`\`\`css
span {
  display: inline-block;
  width: 100px;
  height: 50px;
}
\`\`\`

It stays inline but allows \`width\` and \`height\`.

### \`flex\`

Used for one-dimensional layouts:

\`\`\`css
.container {
  display: flex;
}
\`\`\`

### \`grid\`

Used for two-dimensional layouts:

\`\`\`css
.container {
  display: grid;
}
\`\`\`

---

# 32. What is Flexbox?

Flexbox is a **one-dimensional layout system**.

You mainly work with one direction:

\`\`\`text
Row
or
Column
\`\`\`

Example:

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

### \`justify-content\`

Controls alignment along the **main axis**.

### \`align-items\`

Controls alignment along the **cross axis**.

---

# 33. What is CSS Grid?

CSS Grid is a **two-dimensional layout system**.

It works with both rows and columns.

\`\`\`text
┌────┬────┬────┐
│    │    │    │
├────┼────┼────┤
│    │    │    │
└────┴────┴────┘
\`\`\`

Example:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
\`\`\`

This creates three columns.

---

# 34. \`flex: 1\` vs \`flex: auto\`

\`\`\`css
flex: 1;
\`\`\`

is approximately:

\`\`\`css
flex: 1 1 0%;
\`\`\`

The items distribute the available space equally.

While:

\`\`\`css
flex: auto;
\`\`\`

is approximately:

\`\`\`css
flex: 1 1 auto;
\`\`\`

It takes the item's original content size into account before distributing the remaining space.

### Interview answer:

> \`flex: 1\` distributes available space based on a zero flex-basis, while \`flex: auto\` considers the element's existing size.

---

# 35. \`grid-template-columns\` vs \`grid-template-rows\`

\`\`\`css
grid-template-columns
\`\`\`

defines the **columns**.

\`\`\`css
grid-template-rows
\`\`\`

defines the **rows**.

Example:

\`\`\`css
grid-template-columns: 1fr 1fr;
grid-template-rows: 100px 200px;
\`\`\`

---

# 36. What is \`fr\`?

\`fr\` means **fraction**.

It divides the available grid space.

Example:

\`\`\`css
grid-template-columns: 1fr 2fr;
\`\`\`

The available space is divided into three parts:

\`\`\`text
1 part | 2 parts
\`\`\`

So the second column gets twice as much space as the first.

---

# 37. What is \`minmax()\`?

\`minmax()\` defines a minimum and maximum size for a grid track.

Example:

\`\`\`css
grid-template-columns:
  repeat(3, minmax(200px, 1fr));
\`\`\`

This means:

> Each column cannot be smaller than 200px, but it can grow up to the available space.

---

# 38. \`repeat()\` vs \`auto-fill\` vs \`auto-fit\`

### \`repeat()\`

Used to avoid repeating the same grid definition.

\`\`\`css
repeat(3, 1fr)
\`\`\`

means three columns of \`1fr\`.

### \`auto-fill\`

Tries to create as many tracks as possible, even if some tracks remain empty.

### \`auto-fit\`

Collapses empty tracks and allows existing items to expand.

---

# 39. Specificity Hierarchy

A simplified scoring system is:

\`\`\`text
Inline       1000
ID            100
Class          10
Element         1
\`\`\`

Example:

\`\`\`css
#box .title
\`\`\`

has higher specificity than:

\`\`\`css
.box h2
\`\`\`

because the first selector contains an ID.

---

# 40. What is a Stacking Context?

A **stacking context** is like an independent layer system for elements on the Z-axis.

It is strongly related to \`z-index\`.

For example, even if a child has:

\`\`\`css
z-index: 999999;
\`\`\`

it cannot necessarily escape its parent's stacking context and appear above another stacking context.

Think of it like:

\`\`\`text
Stacking Context A
   └── Child z-index: 999999

Stacking Context B
\`\`\`

The child's huge \`z-index\` is still evaluated within its own stacking context.

---

# 41. How do you create a Stacking Context?

Some common ways include:

\`\`\`css
position: relative;
z-index: 1;
\`\`\`

or:

\`\`\`css
position: absolute;
z-index: 1;
\`\`\`

Also:

\`\`\`css
position: fixed;
\`\`\`

\`\`\`css
position: sticky;
\`\`\`

Certain values such as:

\`\`\`css
opacity: .99;
\`\`\`

or:

\`\`\`css
transform: scale(1);
\`\`\`

can also create stacking contexts.

---

# 🟦 Bootstrap

# 42. What is Bootstrap?

Bootstrap is a CSS/JS framework that provides:

* Grid system
* Components
* Utilities
* Responsive design system

Instead of building everything from scratch, you can use Bootstrap's predefined classes and components.

---

# 43. What is the Bootstrap Grid?

Bootstrap uses a **12-column responsive grid**.

Example:

\`\`\`html
<div class="row">
  <div class="col-6">A</div>
  <div class="col-6">B</div>
</div>
\`\`\`

Each column takes 6 out of 12 columns.

\`\`\`text
A A A A A A | B B B B B B
\`\`\`

---

# 44. \`col\` vs \`col-sm\` vs \`col-md\` vs \`col-lg\`

Example:

\`\`\`html
<div class="col-md-6">
\`\`\`

This means that from the \`md\` breakpoint and above, the element takes 6 out of 12 columns.

Common breakpoints:

\`\`\`text
sm  = 576px
md  = 768px
lg  = 992px
xl  = 1200px
xxl = 1400px
\`\`\`

---

# 45. \`.container\` vs \`.container-fluid\`

### \`.container\`

Has a responsive \`max-width\` that changes depending on the breakpoint.

### \`.container-fluid\`

Takes the full available width:

\`\`\`css
width: 100%;
\`\`\`

---

# 46. How does a Bootstrap Modal work?

A Modal generally consists of:

\`\`\`text
Backdrop
   +
Modal Content
   +
High z-index
\`\`\`

JavaScript/state controls opening and closing the modal.

---

# 47. How does Bootstrap Navbar work?

A Navbar provides navigation links.

On smaller screens, it can collapse into a **hamburger menu**.

---

# 48. Bootstrap Spacing System

Example:

\`\`\`html
<div class="mt-3">
\`\`\`

Meaning:

\`\`\`text
m = margin
t = top
3 = spacing scale
\`\`\`

Examples:

\`\`\`text
p-3   → padding
mb-2  → margin-bottom
px-4  → padding left + right
\`\`\`

---

# 49. Bootstrap Colors

Examples:

\`\`\`html
<p class="text-danger">
\`\`\`

or:

\`\`\`html
<div class="bg-primary">
\`\`\`

They use Bootstrap's predefined color utilities.

---

# 🍃 Tailwind CSS

# 50. What is Tailwind CSS?

Tailwind is a **utility-first CSS framework**.

Instead of creating a custom CSS class:

\`\`\`css
.card {
  padding: 20px;
  border-radius: 10px;
}
\`\`\`

you can write:

\`\`\`html
<div class="p-5 rounded-lg">
\`\`\`

Each utility class performs a specific styling task.

---

# 51. Why is Tailwind called Utility-first?

Because you build your UI using small utility classes.

Example:

\`\`\`html
<div class="flex items-center pt-2">
\`\`\`

Instead of creating a new CSS class for every component.

---

# 52. Tailwind vs Bootstrap

### Bootstrap

Provides many ready-made components:

\`\`\`html
<button class="btn btn-primary">
\`\`\`

### Tailwind

Provides low-level utility classes:

\`\`\`html
<button class="px-4 py-2 rounded bg-blue-500">
\`\`\`

### Simple interview answer:

> Bootstrap is more component-oriented, while Tailwind is utility-first.

---

# 53. What do these Tailwind classes mean?

\`\`\`html
<div class="flex items-center justify-between">
\`\`\`

### \`flex\`

\`\`\`css
display: flex;
\`\`\`

### \`items-center\`

\`\`\`css
align-items: center;
\`\`\`

### \`justify-between\`

\`\`\`css
justify-content: space-between;
\`\`\`

Other examples:

\`\`\`text
bg-blue-500 → background color
text-xl     → larger font size
\`\`\`

---

# 54. Responsive Tailwind

Tailwind follows a **mobile-first approach**.

Example:

\`\`\`html
<p class="text-center md:text-left">
\`\`\`

Means:

\`\`\`text
Mobile → centered
md and above → left aligned
\`\`\`

---

# 55. Arbitrary Values

If you need a value that is not available as a standard utility:

\`\`\`html
<div class="top-[13px]">
\`\`\`

This represents:

\`\`\`css
top: 13px;
\`\`\`

---

# 56. Tailwind Animation

Examples:

\`\`\`html
<div class="animate-spin"></div>
\`\`\`

Other utilities include:

\`\`\`text
animate-pulse
animate-bounce
\`\`\`

You can also define custom animations depending on the project configuration.

---

# 57. Tailwind Configuration

Tailwind configuration can contain:

* Theme
* Colors
* Plugins
* Content
* Custom design tokens

---

# 58. What does \`dark:\` mean?

Example:

\`\`\`html
<div class="bg-white dark:bg-black">
\`\`\`

Means:

\`\`\`text
Normal mode → white
Dark mode   → black
\`\`\`

---

# 59. What is \`@apply\`?

\`@apply\` allows you to combine Tailwind utilities into a custom CSS class.

\`\`\`css
.btn-custom {
  @apply bg-blue-500 text-white rounded px-4;
}
\`\`\`

---

# 💄 SASS / SCSS

# 60. SASS vs SCSS

### SASS

Uses indentation instead of \`{}\` and \`;\`.

\`\`\`scss
.card
  color: red
\`\`\`

### SCSS

Uses normal CSS syntax:

\`\`\`scss
.card {
  color: red;
}
\`\`\`

SCSS is usually easier for developers who already know CSS.

---

# 61. SASS Variables

\`\`\`scss
$primary-color: red;

button {
  color: $primary-color;
}
\`\`\`

This allows you to reuse values instead of repeating them.

---

# 62. Mixins

A mixin is a reusable block of styles.

\`\`\`scss
@mixin flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

Use it with:

\`\`\`scss
.card {
  @include flexCenter;
}
\`\`\`

---

# 63. SASS Functions

A function calculates and returns a value.

\`\`\`scss
@function double($value) {
  @return $value * 2;
}
\`\`\`

---

# 64. Nested Rules

Instead of:

\`\`\`scss
.card {}
.card h2 {}
.card p {}
\`\`\`

you can write:

\`\`\`scss
.card {
  h2 {
    color: red;
  }

  p {
    color: gray;
  }
}
\`\`\`

---

# 65. \`@extend\`

Allows one selector to inherit styles from another selector.

\`\`\`scss
.message {
  padding: 10px;
}

.success {
  @extend .message;
  color: green;
}
\`\`\`

---

# 66. Partial Files

A partial file usually starts with \`_\`:

\`\`\`text
_vars.scss
_buttons.scss
\`\`\`

It is used as part of a modular stylesheet architecture.

---

# 67. \`@import\` vs \`@use\` vs \`@forward\`

### \`@import\`

Old approach.

### \`@use\`

Modern way of importing Sass modules.

Example:

\`\`\`scss
@use "variables";

color: variables.$primary;
\`\`\`

### \`@forward\`

Re-exports a module so other files can access it.

---

# 68. Why is \`@use\` better?

It reduces global scope pollution and makes Sass modules more organized and predictable.

---

# 69. What are SASS Modules?

Modules are specialized files containing things such as:

* Variables
* Mixins
* Functions

They can be consumed using \`@use\`.

---

# 70. How does SASS make CSS scalable?

By splitting a large stylesheet into smaller modules/files instead of keeping everything in one huge file.

---

# 🟨 JavaScript

# 71. \`var\` vs \`let\` vs \`const\`

### \`var\`

Function-scoped.

\`\`\`javascript
var x = 10;
\`\`\`

It allows reassignment and redeclaration.

### \`let\`

Block-scoped.

\`\`\`javascript
let x = 10;
x = 20;
\`\`\`

It allows reassignment but not redeclaration in the same scope.

### \`const\`

Block-scoped.

\`\`\`javascript
const x = 10;
\`\`\`

It does not allow reassignment.

---

# 72. What is Hoisting?

Hoisting means JavaScript processes declarations before executing the code in their scope.

Example:

\`\`\`javascript
console.log(x);

var x = 10;
\`\`\`

The result is:

\`\`\`text
undefined
\`\`\`

But:

\`\`\`javascript
console.log(x);

let x = 10;
\`\`\`

causes a \`ReferenceError\` because \`x\` is in the Temporal Dead Zone.

---

# 73. \`==\` vs \`===\`

\`\`\`javascript
5 == "5"   // true
5 === "5"  // false
\`\`\`

\`==\` performs type coercion.

\`===\` compares both **value and type**.

### Interview recommendation:

> Prefer \`===\` in most cases because it avoids unexpected type coercion.

---

# 74. Primitive Types

JavaScript primitive types include:

\`\`\`text
String
Number
Boolean
Null
Undefined
Symbol
BigInt
\`\`\`

Primitive values are not objects.

---

# 75. Reference Types

Common reference types include:

\`\`\`text
Object
Array
Function
\`\`\`

They are handled through references.

Example:

\`\`\`javascript
const a = { name: "A" };
const b = a;

b.name = "B";

console.log(a.name);
\`\`\`

Result:

\`\`\`text
B
\`\`\`

Because \`a\` and \`b\` reference the same object.

---

# 76. \`null\` vs \`undefined\`

### \`undefined\`

A value has not been assigned.

\`\`\`javascript
let x;

console.log(x);
\`\`\`

Result:

\`\`\`text
undefined
\`\`\`

### \`null\`

You intentionally specify that there is no value.

\`\`\`javascript
let user = null;
\`\`\`

---

# 77. What is Scope?

Scope defines where a variable can be accessed.

Important types:

\`\`\`text
Global Scope
Function Scope
Block Scope
\`\`\`

Example:

\`\`\`javascript
{
  let x = 10;
}

console.log(x);
\`\`\`

This causes an error because \`x\` is block-scoped.

---

# 78. What is a Closure?

A **closure** occurs when an inner function remembers and can access variables from its outer scope even after the outer function has finished executing.

Example:

\`\`\`javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

increment(); // 1
increment(); // 2
\`\`\`

Why is \`count\` still available?

Because the inner function created a **closure** over \`count\`.

### Interview answer:

> A closure is a function together with its preserved lexical environment.

---

# 79. What is a Callback Function?

A callback is a function passed as an argument to another function.

\`\`\`javascript
function greet(callback) {
  callback();
}

greet(() => {
  console.log("Hello");
});
\`\`\`

---

# 80. Arrow Functions

Instead of:

\`\`\`javascript
function add(a, b) {
  return a + b;
}
\`\`\`

we can write:

\`\`\`javascript
const add = (a, b) => a + b;
\`\`\`

An important difference:

> Arrow functions do not have their own \`this\`; they inherit \`this\` from their lexical scope.

---

# 81. Function Declaration vs Function Expression

### Function Declaration

\`\`\`javascript
function test() {}
\`\`\`

It is hoisted and can generally be called before its declaration.

### Function Expression

\`\`\`javascript
const test = function () {};
\`\`\`

It follows the initialization rules of the variable containing it.

---

# 82. What is \`this\`?

\`this\` refers to the object/context associated with how a function is called.

Example:

\`\`\`javascript
const user = {
  name: "Malak",

  sayHi() {
    console.log(this.name);
  }
};

user.sayHi();
\`\`\`

Here:

\`\`\`text
this → user
\`\`\`

Arrow functions behave differently because they don't create their own \`this\`.

---

# 83. \`call()\` vs \`apply()\` vs \`bind()\`

### \`call()\`

\`\`\`javascript
fn.call(obj, a, b);
\`\`\`

Calls the function immediately.

### \`apply()\`

\`\`\`javascript
fn.apply(obj, [a, b]);
\`\`\`

Also calls it immediately, but arguments are passed as an array.

### \`bind()\`

\`\`\`javascript
const newFn = fn.bind(obj);
\`\`\`

Returns a new function that can be called later.

---

# 84. Event Bubbling

When an event happens on a child element, it can bubble upward:

\`\`\`text
button
   ↓
div
   ↓
body
   ↓
document
\`\`\`

---

# 85. Event Delegation

Instead of adding event listeners to every child:

\`\`\`javascript
parent.addEventListener("click", handler);
\`\`\`

You attach one listener to the parent and use event bubbling.

This is especially useful for dynamically created elements.

---

# 86. \`map\` vs \`filter\` vs \`reduce\`

### \`map\`

Transforms every item:

\`\`\`javascript
[1, 2, 3].map(x => x * 2);
\`\`\`

Result:

\`\`\`text
[2, 4, 6]
\`\`\`

### \`filter\`

Selects items:

\`\`\`javascript
[1, 2, 3].filter(x => x > 1);
\`\`\`

Result:

\`\`\`text
[2, 3]
\`\`\`

### \`reduce\`

Reduces an array to a single result:

\`\`\`javascript
[1, 2, 3].reduce((sum, x) => sum + x, 0);
\`\`\`

Result:

\`\`\`text
6
\`\`\`

---

# 87. \`forEach\` vs \`map\`

### \`forEach\`

Executes a function for every item but does not return a new transformed array.

### \`map\`

Returns a new array containing the transformed values.

---

# 88. How do …1140 tokens truncated… Type

More flexible for unions, tuples, aliases, etc.

\`\`\`typescript
type ID = string | number;
\`\`\`

---

# 103. Union Type

A union allows a value to have multiple possible types.

\`\`\`typescript
let id: string | number;
\`\`\`

Both are valid:

\`\`\`typescript
id = "A123";
id = 123;
\`\`\`

---

# 104. Generics

Generics allow reusable, type-safe code.

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}
\`\`\`

Examples:

\`\`\`typescript
identity<string>("Hello");
identity<number>(10);
\`\`\`

---

# 105. Enum

An enum is a collection of named values.

\`\`\`typescript
enum Role {
  Admin,
  User,
  Guest
}
\`\`\`

Usage:

\`\`\`typescript
Role.Admin
\`\`\`

---

# 106. \`readonly\`

Prevents modification after initialization.

\`\`\`typescript
interface User {
  readonly id: number;
}
\`\`\`

Then:

\`\`\`typescript
user.id = 5;
\`\`\`

causes a TypeScript error.

---

# 107. Interface Merging

If you declare the same interface more than once:

\`\`\`typescript
interface User {
  name: string;
}

interface User {
  age: number;
}
\`\`\`

TypeScript merges them into:

\`\`\`typescript
interface User {
  name: string;
  age: number;
}
\`\`\`

---

# 108. \`public\` / \`private\` / \`protected\`

\`\`\`text
public     → accessible everywhere
private    → accessible only inside the class
protected  → accessible inside the class and subclasses
\`\`\`

---

# 109. Decorators

Decorators attach metadata or behavior to classes, properties, methods, etc.

Angular uses decorators heavily.

Example:

\`\`\`typescript
@Component({
  selector: 'app-user'
})
\`\`\`

\`@Component\` is a decorator.

---

# 110. Type Inference

TypeScript can automatically infer a type.

\`\`\`typescript
let age = 20;
\`\`\`

TypeScript infers:

\`\`\`text
number
\`\`\`

You don't always need to explicitly write:

\`\`\`typescript
let age: number = 20;
\`\`\`

---

# 111. Utility Types

### \`Partial\`

Makes all properties optional:

\`\`\`typescript
Partial<User>
\`\`\`

### \`Pick\`

Selects specific properties:

\`\`\`typescript
Pick<User, "name">
\`\`\`

### \`Omit\`

Removes specific properties:

\`\`\`typescript
Omit<User, "password">
\`\`\`

### \`Record\`

Creates an object type:

\`\`\`typescript
Record<string, number>
\`\`\`

---

# 💧 jQuery

# 112. What is jQuery?

jQuery is a JavaScript library that simplifies:

* DOM manipulation
* Events
* AJAX
* Animations

---

# 113. \`hide()\` vs \`remove()\`

\`\`\`javascript
$("#box").hide();
\`\`\`

Hides the element but keeps it in the DOM.

While:

\`\`\`javascript
$("#box").remove();
\`\`\`

Removes the element from the DOM.

---

# 114. AJAX in jQuery

Example:

\`\`\`javascript
$.ajax({
  url: "/api/users",
  success: function(data) {
    console.log(data);
  }
});
\`\`\`

Used for asynchronous HTTP requests.

---

# 115. Selecting Elements

Class:

\`\`\`javascript
$(".card")
\`\`\`

ID:

\`\`\`javascript
$("#title")
\`\`\`

---

# 116. \`document.ready\` vs \`window.onload\`

### \`document.ready\`

Runs when the DOM is ready to be manipulated.

### \`window.onload\`

Waits for the whole page and its resources, such as images, to finish loading.

---

# 117. Why has jQuery decreased in popularity?

Modern browsers now provide native APIs such as:

\`\`\`javascript
document.querySelector()
fetch()
addEventListener()
\`\`\`

Modern frameworks such as Angular, React, and Vue also provide more structured approaches to building applications.

---

# 118. \`on()\` vs \`click()\`

\`click()\` is a shorthand for handling click events.

\`on()\` is more flexible and supports event delegation.

Example:

\`\`\`javascript
$("#parent").on("click", ".child", handler);
\`\`\`

---

# 119. \`fadeIn()\` / \`fadeOut()\`

jQuery gradually changes the element's opacity to create a fade animation and handles showing/hiding the element.

---

# 🅰️ Angular

# 120. What is Angular?

Angular is a component-based web framework developed by Google for building large-scale web applications, especially SPAs.

---

# 121. SPA vs MPA

### SPA — Single Page Application

The browser loads the main document and navigation updates the view without loading a completely new document every time.

### MPA — Multi Page Application

Each navigation typically requests a new document from the server.

---

# 122. What is a Component?

A component is a fundamental building block in Angular.

It generally consists of:

\`\`\`text
TypeScript class
+
HTML template
+
CSS styles
+
@Component metadata
\`\`\`

---

# 123. Parts of an Angular Component

Example:

\`\`\`typescript
@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {}
\`\`\`

The component contains:

* A class
* Component metadata
* Template
* Styles

---

# 124. What are Angular Modules?

\`NgModule\` is a way of organizing Angular components, directives, pipes, and services.

However, modern Angular strongly supports **Standalone Components**, which reduce the need for NgModules.

---

# 125. Angular Data Binding Types

## Interpolation

\`\`\`html
{{ name }}
\`\`\`

TypeScript → HTML.

## Property Binding

\`\`\`html
<img [src]="imageUrl">
\`\`\`

## Event Binding

\`\`\`html
<button (click)="save()">
\`\`\`

HTML event → TypeScript.

## Two-way Binding

\`\`\`html
<input [(ngModel)]="name">
\`\`\`

TypeScript ↔ HTML.

---

# 126. What is a Directive?

A directive is a class that changes the behavior, appearance, or structure of an element/template.

---

# 127. Types of Directives

### Component

A directive that also has a template.

### Structural directives

Change the DOM structure:

\`\`\`text
*ngIf
*ngFor
\`\`\`

### Attribute directives

Change appearance or behavior:

\`\`\`text
ngClass
ngStyle
\`\`\`

---

# 128. \`*ngIf\`

Conditionally renders content.

\`\`\`html
<div *ngIf="isLoggedIn">
  Welcome
</div>
\`\`\`

---

# 129. \`*ngFor\`

Repeats an element for every item.

\`\`\`html
<div *ngFor="let user of users">
  {{ user.name }}
</div>
\`\`\`

---

# 130. \`*ngSwitch\`

Allows different templates to be displayed based on a value.

---

# 131. \`ngClass\` vs \`ngStyle\`

### \`ngClass\`

Changes classes:

\`\`\`html
<div [ngClass]="{active: isActive}">
\`\`\`

### \`ngStyle\`

Changes inline styles:

\`\`\`html
<div [ngStyle]="{color: color}">
\`\`\`

---

# 132. What is an Angular Service?

A service is a reusable class that can contain logic such as:

* API calls
* Shared data
* Business logic
* Caching

This keeps components smaller and more focused.

---

# 133. What is Dependency Injection?

Instead of manually creating dependencies:

\`\`\`typescript
const service = new UserService();
\`\`\`

Angular provides them through Dependency Injection.

Example:

\`\`\`typescript
constructor(private userService: UserService) {}
\`\`\`

---

# 134. Service Scope

Example:

\`\`\`typescript
@Injectable({
  providedIn: 'root'
})
\`\`\`

This generally provides a singleton service at the application/root level.

A service provided at a component level can have a separate instance for that component subtree.

---

# 135. Angular Lifecycle Hooks

Important hooks include:

\`\`\`text
ngOnChanges
ngOnInit
ngDoCheck
ngAfterViewInit
ngOnDestroy
\`\`\`

---

# 136. \`ngOnInit\`

Runs once after Angular initializes the component's inputs.

It's commonly used for initial data loading and setup.

---

# 137. \`ngOnChanges\`

Runs when an \`@Input()\` value changes.

It receives information about the changes through \`SimpleChanges\`.

---

# 138. RouterModule

Angular Router manages navigation and route configuration.

The routed component is rendered inside:

\`\`\`html
<router-outlet></router-outlet>
\`\`\`

---

# 139. Lazy Loading

Instead of loading the entire application at startup, Angular can load feature code only when it is needed.

### Main benefit:

> Smaller initial bundle and faster initial loading.

---

# 140. \`routerLink\` vs Programmatic Navigation

### Template navigation

\`\`\`html
<a routerLink="/users">
\`\`\`

### TypeScript navigation

\`\`\`typescript
this.router.navigate(['/users']);
\`\`\`

---

# 141. Template-driven vs Reactive Forms

### Template-driven Forms

Most of the form logic is defined in the template.

Good for simple forms.

### Reactive Forms

The form structure is defined in TypeScript.

\`\`\`typescript
form = new FormGroup({
  name: new FormControl('')
});
\`\`\`

Better for complex forms and advanced validation.

---

# 142. FormControl vs FormGroup

### FormControl

Represents one form control:

\`\`\`typescript
name = new FormControl('');
\`\`\`

### FormGroup

Groups multiple controls:

\`\`\`typescript
form = new FormGroup({
  name: new FormControl(''),
  email: new FormControl('')
});
\`\`\`

---

# 143. Validators

Validators define rules for form values.

Examples:

\`\`\`typescript
Validators.required
Validators.email
Validators.minLength(8)
\`\`\`

---

# 144. HttpClient

Angular's \`HttpClient\` is used to make HTTP requests.

Example:

\`\`\`typescript
this.http.get<User[]>('/api/users');
\`\`\`

It returns an Observable.

---

# 145. HTTP Interceptor

An interceptor sits between your application and the HTTP request/response pipeline.

For example:

\`\`\`text
Request
   ↓
Interceptor
   ↓
Add Authorization Token
   ↓
Server
\`\`\`

It can also handle logging, error handling, loading indicators, etc.

---

# 🔵 RxJS

# 146. What is an Observable?

An Observable represents a stream of values that can arrive over time.

Example:

\`\`\`typescript
observable.subscribe(value => {
  console.log(value);
});
\`\`\`

---

# 147. Subject vs BehaviorSubject

### Subject

Does not store the previous value for new subscribers.

### BehaviorSubject

Requires an initial value and stores the latest value.

\`\`\`typescript
new BehaviorSubject(0);
\`\`\`

A new subscriber immediately receives the current value.

---

# 148. \`switchMap\` vs \`mergeMap\`

### \`switchMap\`

Switches to the latest inner Observable and unsubscribes from the previous one.

Very useful for search/autocomplete:

\`\`\`text
a
ab
abc
\`\`\`

We usually want the latest request, \`abc\`.

### \`mergeMap\`

Allows multiple inner Observables to run concurrently.

---

# 149. What is a Signal?

A Signal is Angular's reactive state primitive.

Example:

\`\`\`typescript
count = signal(0);
\`\`\`

When its value changes, Angular can track which consumers depend on it.

---

# 150. Signal vs BehaviorSubject

### Signal

Best suited for reactive state and UI state inside Angular.

### BehaviorSubject

An RxJS primitive suited for streams, events, and reactive data pipelines.

---

# 151. \`computed()\`

Creates derived state from other signals.

\`\`\`typescript
total = computed(() => price() * quantity());
\`\`\`

It is read-only and automatically tracks its dependencies.

---

# 152. \`effect()\`

Runs a side effect whenever the signals it reads change.

\`\`\`typescript
effect(() => {
  console.log(count());
});
\`\`\`

---

# 153. Signals vs Observables

A simple way to remember:

> **Signals → reactive state**

> **Observables → asynchronous streams/events/data pipelines**

---

# 154. How do you unsubscribe cleanly in Angular?

Modern Angular provides utilities such as:

\`\`\`typescript
takeUntilDestroyed()
\`\`\`

and:

\`\`\`typescript
DestroyRef
\`\`\`

These help automatically clean up subscriptions when a component/directive is destroyed.

---

# 155. \`forkJoin\` vs \`combineLatest\`

### \`forkJoin\`

Waits until all Observables complete and then emits their final values.

Good when:

> I need the results of several API calls before continuing.

### \`combineLatest\`

Emits whenever one source changes, using the latest value from each source.

Each source must emit at least once before the combined stream emits.

---

# 🚀 Angular Advanced

# 156. What is Hydration?

In SSR applications, the server sends already-rendered HTML.

**Hydration** allows Angular on the client to connect behavior and state to that existing HTML instead of rebuilding everything from scratch.

---

# 157. What is Incremental Hydration?

Instead of hydrating the entire application immediately, Angular can hydrate specific parts when needed.

Possible triggers include:

* Viewport
* Interaction
* Other conditions

The goal is better performance and improved Core Web Vitals.

---

# 158. What is Change Detection?

Change detection is how Angular detects changes in application state and updates the relevant templates.

Conceptually:

\`\`\`text
Root
 ↓
Parent
 ↓
Child
 ↓
Template
\`\`\`

\`OnPush\` can reduce unnecessary checking.

---

# 159. JIT vs AOT

### JIT — Just-in-Time

Compilation happens at runtime.

### AOT — Ahead-of-Time

Compilation happens during the build process before deployment.

AOT reduces work that the browser needs to perform at runtime.

---

# 160. AOT Performance Benefits

AOT can provide:

* Faster initial rendering
* Less runtime compilation overhead
* Better optimization/tree-shaking opportunities
* Earlier detection of template errors

---

# 161. Default vs OnPush Change Detection

### Default

Angular performs change detection more broadly throughout the component tree.

### OnPush

Reduces unnecessary checks for a component subtree.

Common triggers include:

* Input reference changes
* Events from the component/template
* Observable emissions consumed through the \`async\` pipe

---

# 162. Standalone Components

Modern Angular allows components to be standalone instead of requiring an NgModule.

Example:

\`\`\`typescript
@Component({
  standalone: true,
  imports: [...]
})
\`\`\`

The component directly declares its dependencies through \`imports\`.

---

# 163. Router Guards

Router Guards control access to routes.

Common examples:

\`\`\`text
canActivate
canDeactivate
canLoad / canMatch
\`\`\`

### \`canActivate\`

Controls whether the user can enter a route.

### \`canDeactivate\`

Controls whether the user can leave a route.

Useful for unsaved forms.

### \`canLoad\` / \`canMatch\`

Can prevent access to lazy-loaded features.

---

# 164. \`canActivate\` vs \`canLoad\`

### \`canActivate\`

Checks whether navigation to a route is allowed.

### \`canLoad\`

Can prevent a lazy-loaded feature from being loaded when the user isn't allowed to access it.

This can save bandwidth.

---

# 165. \`ng-container\` vs \`ng-template\`

### \`ng-container\`

Groups elements without creating an actual wrapper element in the DOM.

### \`ng-template\`

Defines a template that is not rendered immediately and can be instantiated when needed.

---

# 166. Angular Modern Control Flow

Modern Angular supports:

\`\`\`html
@if (isLogged) {
  <div>Welcome</div>
}
\`\`\`

Instead of:

\`\`\`html
<div *ngIf="isLogged">
  Welcome
</div>
\`\`\`

For loops:

\`\`\`html
@for (user of users; track user.id) {
  <div>{{ user.name }}</div>
}
\`\`\`

This provides cleaner syntax and built-in tracking.

---

# 167. \`@defer\`

Angular supports deferred loading:

\`\`\`html
@defer {
  <heavy-component />
}
\`\`\`

The component can be loaded when an appropriate trigger occurs, instead of immediately.

This can improve initial page performance.

---

# 168. OnPush Performance

OnPush reduces unnecessary change detection.

Typical triggers include:

* Input reference changes
* Template/component events
* Observable emissions consumed with \`async\`

---

# 169. \`trackBy\` / \`track\`

For large lists, tracking by a unique ID helps Angular identify which items are actually the same.

Example:

\`\`\`html
@for (user of users; track user.id) {
  <div>{{ user.name }}</div>
}
\`\`\`

Instead of recreating every DOM element, Angular can reuse existing DOM nodes when appropriate.

---

# 170. Lazy Loading vs Preloading

### Lazy Loading

A feature is loaded only when the user needs it.

### Preloading

After the initial application loads, Angular can load some features in the background so they are ready when the user navigates to them.

---

# 171. Pure Pipes

A pure pipe recalculates when its input changes rather than unnecessarily recalculating during every change detection cycle.

This can be more efficient than repeatedly calling methods from templates.

---

# 172. \`shareReplay\`

Suppose multiple subscribers subscribe to an HTTP Observable.

Without sharing, you may accidentally trigger multiple requests.

\`\`\`typescript
shareReplay(1)
\`\`\`

can share the latest emitted value with multiple subscribers and replay it to later subscribers, depending on the configuration.

---

# 🧠 Interview Scenarios

## 173. How would you structure a large-scale Angular application?

A common architecture is:

\`\`\`text
Core
Shared
Features
Lazy Loading
\`\`\`

### Core

Contains application-wide/singleton services such as:

\`\`\`text
Authentication
API configuration
Global services
\`\`\`

### Shared

Contains reusable:

* Components
* Pipes
* Directives
* Utilities

### Feature

Each business domain gets its own feature area.

For example:

\`\`\`text
users
products
orders
payments
\`\`\`

Lazy loading can then reduce the initial bundle.

---

# 174. Local State vs Global State

### Local State

State needed by only one component/feature.

Examples:

\`\`\`text
Dropdown open/closed
Loading spinner
Form field values
\`\`\`

### Global State

State required by many parts of the application.

Examples:

\`\`\`text
Authentication state
Shopping cart
Shared application data
\`\`\`

### Interview answer:

> Don't put everything into global state. Keep state local when possible and use global state only when multiple parts of the application actually need it.

---

# 175. Authentication & Authorization Architecture

A typical flow is:

\`\`\`text
Login
  ↓
Server validates credentials
  ↓
Authentication token/session
  ↓
Client maintains authentication state
  ↓
HTTP Interceptor
  ↓
Attach credentials
  ↓
Backend
\`\`\`

An important interview point:

> Frontend route guards are not a security boundary.

The backend must always validate authentication and authorization because the client can be manipulated.

---

## ⭐ The most important interview concepts to memorize

If you're preparing for a **Frontend / Angular interview**, focus especially on these:

### CSS

\`\`\`text
Box Model
Specificity
Cascade
Flexbox
Grid
Position
z-index
Responsive Design
\`\`\`

### JavaScript

\`\`\`text
var / let / const
Hoisting
Scope
Closure
this
Promises
async/await
Event Loop
Microtasks / Macrotasks
map / filter / reduce
Shallow vs Deep Copy
Event Bubbling
Event Delegation
\`\`\`

### TypeScript

\`\`\`text
any vs unknown
interface vs type
Union Types
Generics
Utility Types
Type Inference
Access Modifiers
\`\`\`

### Angular

\`\`\`text
Components
Directives
Data Binding
Services
Dependency Injection
Lifecycle Hooks
Routing
Guards
Lazy Loading
Forms
HttpClient
Interceptors
Change Detection
OnPush
Signals
RxJS
Observables
Subject vs BehaviorSubject
switchMap vs mergeMap
forkJoin vs combineLatest
Standalone Components
@defer
SSR / Hydration
\`\`\`

**For interview practice, the next best step is to turn these into a real Q&A session: I ask you one question in English, you answer, and then I correct your answer and give you the ideal interview answer.**

---

## 40. What is minmax()?

\`minmax()\` sets the minimum and maximum size of a CSS Grid track. It lets a column stay usable on small screens while growing when space is available.

\`\`\`css
grid-template-columns: minmax(200px, 1fr) 1fr;
\`\`\`

The first column is never smaller than \`200px\`, but it may grow up to one fraction of the free space. **Interview answer:** \`minmax(min, max)\` defines a flexible grid track with safe size limits.

---

## 41. What is the difference between repeat(), auto-fit, and auto-fill?

\`repeat()\` avoids repeating the same track definition: \`repeat(3, 1fr)\` creates three equal columns.

\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
\`\`\`

\`auto-fill\` keeps as many possible tracks as fit, including empty ones. \`auto-fit\` collapses empty tracks, allowing populated columns to expand. The \`auto-fit\` pattern above is a common responsive-card layout.

---

## 42. What is specificity hierarchy?

Specificity decides which selector wins when rules target the same element. A simplified hierarchy is: inline styles, IDs, classes/attributes/pseudo-classes, then elements/pseudo-elements.

\`\`\`css
p { color: blue; }
.text { color: green; }
#title { color: red; }
\`\`\`

For \`<p id="title" class="text">\`, the text is red. Importance and origin are considered before specificity; source order breaks a tie.

---

## 43. What is the Stacking Context and why does it affect z-index?

A stacking context is an isolated layer-management environment on the Z-axis. Its children are layered against one another inside that context, not globally against every element on the page.

That is why a child with \`z-index: 999999\` can still appear below an element in another, higher parent stacking context. **Key point:** \`z-index\` only makes sense together with stacking contexts.

---

## 44. How can you explicitly trigger or create a new Stacking Context?

Common triggers include a positioned element with a non-auto \`z-index\`, \`position: fixed\` or \`sticky\`, \`opacity\` below \`1\`, a non-\`none\` \`transform\`, \`filter\`, and \`isolation: isolate\`.

\`\`\`css
.layer { position: relative; z-index: 1; }
.isolated { isolation: isolate; }
\`\`\`

\`position: relative\` by itself does not always create a stacking context.

---

## 45. What is the complete layout Stacking Order?

Within one stacking context, a practical simplified order is: background and borders, negative \`z-index\` children, normal-flow content, positioned elements with \`z-index: auto\` or \`0\`, then positive \`z-index\` children.

\`\`\`css
.box1 { position: relative; z-index: 1; }
.box2 { position: relative; z-index: 2; }
\`\`\`

If both belong to the same stacking context, \`box2\` appears above \`box1\`.

---

## 46. What is the difference between ::before and ::after?

They are pseudo-elements that generate content before or after an element's actual content.

\`\`\`css
.title::before { content: "★ "; }
.title::after { content: " ✓"; }
\`\`\`

They are useful for decorative icons, overlays, badges, lines, and shapes. Generated pseudo-elements normally need \`content\`. \`::before\` is a pseudo-element; \`:hover\` is a pseudo-class.

---

## 47. What is calc()?

\`calc()\` performs CSS calculations with compatible values, including different units.

\`\`\`css
.container { width: calc(100% - 40px); }
.page { height: calc(100vh - 80px); }
\`\`\`

It is useful when a dimension must combine values such as \`%\` and \`px\`. **Interview answer:** \`calc()\` evaluates a CSS value at layout time.

---

## 48. What is clip-path?

\`clip-path\` defines the visible region of an element, letting it appear as a custom shape.

\`\`\`css
.circle { clip-path: circle(50%); }
.triangle { clip-path: polygon(50% 0%, 100% 100%, 0% 100%); }
\`\`\`

It is useful for creative image shapes, diagonal sections, and decorative UI. It changes what is visible, not the element's original layout dimensions.

---

## 49. What is the difference between transitions and animations?

A transition smoothly changes a property between states, usually after an interaction such as \`:hover\`. An animation uses \`@keyframes\`, can have multiple stages, and can run automatically or repeat.

\`\`\`css
.button { transition: background .3s; }
.button:hover { background: red; }
.box { animation: move 2s infinite; }
\`\`\`

**Interview answer:** a transition connects states; an animation is a controlled keyframe sequence.

---

## 50. What is Bootstrap and why do we use it?

Bootstrap is a frontend CSS framework with ready-made responsive components and utility classes, including a grid, buttons, forms, cards, navbars, modals, alerts, and breakpoints.

\`\`\`html
<button class="btn btn-primary">Submit</button>
\`\`\`

It speeds up consistent UI development without writing every style from scratch.

---

## 51. What is the Bootstrap grid system?

Bootstrap uses a responsive 12-column grid. A typical structure is \`container\` → \`row\` → columns.

\`\`\`html
<div class="row">
  <div class="col-6">Left</div>
  <div class="col-6">Right</div>
</div>
\`\`\`

Here, \`6 + 6 = 12\`, so each column takes half the row.

---

## 52. What is the difference between col / col-sm / col-md / col-lg?

These classes set a column's behavior at responsive breakpoints. \`col\` distributes available space automatically, while classes such as \`col-md-6\` mean six of twelve columns from the \`md\` breakpoint upward.

\`\`\`html
<div class="row">
  <div class="col-12 col-md-6">Card</div>
  <div class="col-12 col-md-6">Card</div>
</div>
\`\`\`

The cards stack on small screens and sit side by side from \`md\` upward.

---

## 53. What are the Bootstrap breakpoints?

Bootstrap 5 is mobile-first. Its main breakpoints are \`xs\` below \`576px\`, then \`sm\` at \`576px\`, \`md\` at \`768px\`, \`lg\` at \`992px\`, \`xl\` at \`1200px\`, and \`xxl\` at \`1400px\`.

For example, \`col-12 col-md-6 col-lg-4\` uses a full row on small screens, half a row at medium widths, and one third at large widths.

---

## 54. What is the difference between container and container-fluid?

\`.container\` has responsive maximum widths that change at Bootstrap breakpoints. \`.container-fluid\` always uses the full available width.

\`\`\`html
<div class="container">Centered content</div>
<div class="container-fluid">Full-width content</div>
\`\`\`

---

## 55. How does the Modal work?

A Bootstrap Modal is a dialog shown above the current page with a backdrop. It is commonly used for logins, confirmations, forms, warnings, and detail views. Bootstrap supplies the required markup, accessibility behavior, and JavaScript to open, close, and manage focus in the dialog.

---

## 56. How does the navbar work?

A Bootstrap Navbar is a responsive navigation component with a brand, links, and an optional toggle button for a collapsed mobile menu.

\`\`\`html
<nav class="navbar navbar-expand-lg">...</nav>
\`\`\`

\`navbar-expand-lg\` keeps it expanded at the large breakpoint and above; below that it can collapse into the toggle menu.

---

## 57. What is the spacing system (m-1, p-3...)

Bootstrap spacing utilities apply margin and padding without custom CSS. \`m-3\` means margin, \`p-3\` means padding; directional variants include \`mt\`, \`mb\`, \`ms\`, \`me\`, \`mx\`, and \`my\`.

\`\`\`html
<div class="px-4 py-2">Content</div>
\`\`\`

This applies horizontal padding of scale \`4\` and vertical padding of scale \`2\`.

---

## 58. What are the text and background colors (bg-primary, text-danger)

Bootstrap offers theme color utilities for text and backgrounds.

\`\`\`html
<p class="text-primary">Hello</p>
<div class="bg-danger text-white">Warning</div>
\`\`\`

Examples include \`text-success\`, \`text-danger\`, \`text-warning\`, \`bg-primary\`, \`bg-success\`, \`bg-dark\`, and \`bg-light\`. These classes apply predefined theme colors quickly and consistently.


`
};
