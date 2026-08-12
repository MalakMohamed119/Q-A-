// ==========================================
// 1. ENGLISH BASICS (HTML 1 - 25)
// ==========================================
window.DETAILED_EXPLANATIONS_EN_BASICS = String.raw`
1. What is HTML?

Answer:
HTML stands for HyperText Markup Language. It is the standard markup language used to create and structure the content of web pages.

Explanation:
HTML is responsible for the structure of a webpage. It tells the browser what each piece of content is, such as a heading, paragraph, image, link, form, or button.

<h1>Welcome</h1>
<p>This is my website.</p>
<img src="image.jpg" alt="My image">

Remember:
HTML = Structure

2. What is the difference between <div> and <span>?

Answer:
<div> is a block-level element, while <span> is an inline element.

Explanation:
A <div> normally starts on a new line and takes the available width.
A <span> stays in the same line and only takes the space needed by its content.

<div>Hello</div>
<div>World</div>

<span>Hello</span>
<span>World</span>

The result is roughly:
Hello
World
Hello World

Remember:
div → block
span → inline

3. What is Semantic HTML and why is it important?

Answer:
Semantic HTML means using HTML elements that clearly describe the meaning and purpose of their content.

Examples:
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>

Why is it important?
It improves accessibility.
It helps search engines understand the page.
It makes the code easier to read and maintain.
It gives the document a meaningful structure.

Instead of:
<div class="header"></div>
<div class="navigation"></div>
<div class="content"></div>

We can use:
<header></header>
<nav></nav>
<main></main>

Remember:
Semantic HTML = Meaningful structure

4. Name some new semantic tags in HTML5.

Answer:
Some important HTML5 semantic elements are:
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>

Explanation:
header → introductory/header content.
nav → navigation links.
main → main content of the page.
section → related group of content.
article → independent content.
aside → secondary/side content.
footer → footer information.

5. What is the difference between <section> and <article>?

Answer:
A <section> groups related content, while an <article> represents independent, self-contained content.

Section
Used when content belongs to the same topic.
<section>
    <h2>Our Services</h2>
    <p>Web Development</p>
    <p>Mobile Development</p>
</section>

Article
Represents content that could stand on its own.
<article>
    <h2>How to Learn JavaScript</h2>
    <p>JavaScript is...</p>
</article>

Remember:
section → related content
article → independent content

6. What is the DOM?

Answer:
DOM stands for Document Object Model. It is a tree-like representation of an HTML document that allows JavaScript to access and manipulate the page.

For example:
<body>
    <h1>Hello</h1>
    <p>Welcome</p>
</body>

The browser represents it approximately like:
Document
   |
 html
   |
 body
 /  \
h1   p

JavaScript can then modify these nodes:
document.querySelector("h1").textContent = "Hello World";

Explanation:
The DOM is basically the bridge between HTML and JavaScript.

Remember:
HTML → DOM → JavaScript manipulation

7. What is the DOCTYPE?

Answer:
<!DOCTYPE html> tells the browser that the document uses the modern HTML standard.

<!DOCTYPE html>
<html>

Why do we use it?
It tells the browser to render the page using standards mode instead of quirks mode.

Important:
DOCTYPE is a declaration, not an HTML element.

8. What is an Attribute?

Answer:
An attribute provides additional information or configuration for an HTML element.

Example:
<a href="https://example.com" target="_blank">
    Visit
</a>

Here:
href is an attribute.
target is an attribute.

Another example:
<input type="text" id="username" class="form-control">

Here:
type
id
class
are attributes.

Remember:
Attributes are written inside the opening tag.

9. What is the difference between Block and Inline elements?

Answer:
Block elements normally start on a new line, while inline elements remain in the same line.

Block example
<div>One</div>
<div>Two</div>

Result:
One
Two

Inline example
<span>One</span>
<span>Two</span>

Result:
One Two

Block elements generally respect width and height, while normal inline elements don't behave like blocks for those dimensions.

Remember:
Block  → new line
Inline → same line

10. What is the difference between id and class?

Answer:
An id is intended to uniquely identify one element, while a class can be reused across multiple elements.

Example:
<div id="header"></div>

<div class="card"></div>
<div class="card"></div>
<div class="card"></div>

CSS:
#header {
    background: black;
}

.card {
    padding: 20px;
}

Remember:
id    → unique
class → reusable

11. Can an ID be repeated?

Answer:
No. An ID should be unique within an HTML document.

Wrong:
<div id="card"></div>
<div id="card"></div>

Correct:
<div id="card1"></div>
<div id="card2"></div>

If multiple elements need the same styling, use a class:
<div class="card"></div>
<div class="card"></div>

Interview point:
Repeating IDs can cause problems with DOM selection and accessibility.

12. What are Meta Tags?

Answer:
Meta tags provide metadata about an HTML document and are usually placed inside the <head>.

Example:
<head>
    <meta charset="UTF-8">
    <meta name="description" content="My website">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
</head>

They can provide information about:
Character encoding
SEO description
Viewport behavior
Other document metadata

Important:
Meta tags normally don't display visible content on the page.

13. What is the viewport meta tag?

Answer:
<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

It controls how the webpage is displayed and scaled on different devices.

width=device-width
Makes the viewport width equal to the device's screen width.

initial-scale=1.0
Sets the initial zoom level to 100%.

Without this meta tag, websites may not behave correctly on mobile devices.

Remember:
viewport → responsive behavior on different screens

14. What is the difference between placing a script in the <head> and at the end of <body>?

Answer:
A normal script placed in the <head> can block HTML parsing while the browser downloads and executes it.

Example:
<head>
    <script src="app.js"><\/script>
</head>

The browser may:
Parse HTML
   ↓
Stop parsing
   ↓
Download JS
   ↓
Execute JS
   ↓
Continue parsing HTML

If we put it near the end of <body>:
<body>
    <!-- page content -->
    <script src="app.js"><\/script>
</body>

Most of the HTML has already been parsed before the script executes.

Another modern solution is:
<script src="app.js" defer><\/script>

Remember:
Normal scripts can block parsing.

15. What is the alt attribute in an image?

Answer:
The alt attribute provides alternative text for an image.

<img src="cat.jpg" alt="A white cat">

It is important for:

Accessibility
Screen readers can read the alternative text to users who cannot see the image.

Failed image loading
If the image cannot load, the alternative text can provide context.

SEO
It can also help search engines understand the image.

Good alt:
<img src="laptop.jpg" alt="Black laptop on a desk">

Bad alt:
<img src="laptop.jpg" alt="image">

16. What is the difference between <link> and <script>?

Answer:
<link> is commonly used to connect external resources such as CSS files.
<link rel="stylesheet" href="style.css">

<script> is used to load or execute JavaScript.
<script src="app.js"><\/script>

Remember:
link   → external resources, commonly CSS
script → JavaScript

17. What is the difference between async and defer?

Both allow the browser to download JavaScript without blocking HTML parsing during the download.

async
<script src="a.js" async><\/script>
The script executes as soon as it finishes downloading.
Therefore, if you have multiple async scripts, their execution order is not guaranteed.

defer
<script src="a.js" defer><\/script>
<script src="b.js" defer><\/script>
Scripts execute after HTML parsing is complete, and deferred scripts maintain their order.

Simple comparison
async
HTML parsing ────────────────┐
Download ──────────┐         │
                   ↓         │
                Execute       │
                   ↓         │
HTML parsing pauses, then resumes

defer
Download ────────────────
HTML parsing ────────────
                         ↓
                      Execute

Remember:
async → download and execute ASAP
defer → execute after parsing + preserves order

18. What is the difference between localStorage and sessionStorage?

Both are browser Web Storage APIs.

localStorage
Data remains after closing the browser/tab until it is explicitly removed.
localStorage.setItem("username", "Malak");

Retrieve:
localStorage.getItem("username");

sessionStorage
Data exists only for the current browser tab/session.
sessionStorage.setItem("username", "Malak");

When the tab is closed, the data is normally removed.

Remember:
localStorage   → persists
sessionStorage → current tab/session

19. What is the difference between GET and POST?

Both are HTTP methods.

GET
Used mainly for retrieving data.
Example: /products?id=10
The parameters are commonly visible in the URL.

POST
Used mainly for sending data to the server.
The data is normally placed inside the request body.
Example:
fetch("/login", {
    method: "POST",
    body: JSON.stringify({
        username: "Malak",
        password: "123"
    })
});

Remember:
GET  → retrieve data
POST → send data

20. What is an iframe?

Answer:
An iframe allows you to embed another HTML document or webpage inside the current webpage.

Example:
<iframe
    src="https://example.com"
    width="600"
    height="400">
</iframe>

The embedded page has its own document context.

Common uses:
Embedded videos
Maps
External pages
Third-party widgets

Security note:
For untrusted content, iframe sandboxing can be important.

21. What is ARIA?

Answer:
ARIA stands for Accessible Rich Internet Applications.
It provides additional information to assistive technologies such as screen readers.

Example:
<button aria-label="Close menu">
    X
</button>
The visual X may not be enough for a screen reader, so aria-label gives it a meaningful description.

Another example:
<div role="button" aria-expanded="false">
    Menu
</div>

Important:
Use semantic HTML first whenever possible. ARIA should supplement it, not unnecessarily replace it.

22. What is Shadow DOM?

Answer:
Shadow DOM provides an encapsulated DOM tree for a component.

It helps isolate:
HTML structure
CSS styles
component internals

Example concept:
Normal DOM
    |
    └── Custom Element
            |
            └── Shadow Root
                  |
                  ├── HTML
                  └── CSS

The styles inside the Shadow DOM are generally isolated from the outside document.

Remember:
Shadow DOM = Encapsulation

23. What are Web Components?

Answer:
Web Components are browser-native technologies for creating reusable custom elements without depending on a framework.

The main technologies are:
Custom Elements
Shadow DOM
HTML Templates

Example:
class MyButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<button>Click Me</button>";
    }
}

customElements.define("my-button", MyButton);

Then:
<my-button></my-button>

Remember:
Web Components = reusable framework-independent components

24. What is the <template> element?

Answer:
<template> contains HTML that is not rendered immediately.

Example:
<template id="user-card">
    <div class="card">
        <h2>User</h2>
    </div>
</template>

JavaScript can later clone the template and add it to the DOM.
const template = document.querySelector("#user-card");
const clone = template.content.cloneNode(true);
document.body.appendChild(clone);

Why use it?
It is useful for creating reusable HTML structures without displaying them until needed.

25. What are <picture> and srcset?

Answer:
<picture> and srcset are used to provide responsive images and allow the browser to choose the most appropriate image resource.

srcset
<img
    src="small.jpg"
    srcset="
        small.jpg 480w,
        medium.jpg 800w,
        large.jpg 1200w
    "
    alt="Landscape">
The browser can choose an appropriate image based on the available conditions.

<picture>
<picture>
    <source media="(max-width: 600px)"
            srcset="mobile.jpg">
    <source media="(min-width: 601px)"
            srcset="desktop.jpg">
    <img src="desktop.jpg" alt="Landscape">
</picture>
`
  .replace(/^(\d+)\.\s+(?=(?:What|Name|Can)\b)/gm, '## $1. ');

// ==========================================
// 2. ARABIC BASICS (HTML 1 - 25)
// ==========================================
window.DETAILED_EXPLANATIONS_AR_BASICS = String.raw`
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
HTML → Structure
CSS → Style / Appearance
JavaScript → Behavior / Interaction

🎯 إجابة Interview قصيرة
لو اتسألتي: What is HTML?
قولي:
HTML stands for HyperText Markup Language. It is the standard markup language used to structure the content of web pages.

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

السؤال 4: Name some new semantic tags in HTML5

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

الملف بيقول إن الـ DOM يمثل الـ document كشجرة من الـ nodes، ويسمح للـ JavaScript بالوصول للعناصر وتعديلها.

خلينا نبسطها جدًا.
المتصفح يبني تمثيلًا شجريًا للصفحة (Document -> html -> body -> h1).
كل عنصر هنا هو Node.
وبعدين JavaScript تقدر تتعامل مع الشجرة وتغير محتواها.

مهم جدًا:
HTML ≠ DOM
HTML هو الـ markup اللي كتبناه.
DOM هو التمثيل الذي أنشأه المتصفح من الـ document والذي تتعامل معه JavaScript.

🎯 Interview
The DOM, or Document Object Model, is a tree-like representation of an HTML document that allows JavaScript to access and manipulate elements and content dynamically.

السؤال 7: What is the DOCTYPE?

<!DOCTYPE html>
دي declaration بنحطها في بداية ملف HTML.
وظيفتها الأساسية إنها تخبر المتصفح إن الصفحة تستخدم HTML standard mode بدل الدخول في quirks mode. 

نقطة مهمة:
DOCTYPE مش HTML element. ومفيش closing tag.

🎯 Interview
DOCTYPE tells the browser to render the document in standards mode. In modern HTML, we use <!DOCTYPE html>.

السؤال 8: What is an Attribute?

الـ Attribute هو معلومة إضافية بنحطها داخل opening tag للـ element. 
مثلاً:
<a href="https://example.com">Visit</a>
هنا href هو Attribute.

الشكل العام:
<tag attribute="value">

السؤال 9: Block vs Inline

الملف يوضح أن Block elements تتدفق رأسيًا وتبدأ أسطرًا جديدة، بينما Inline elements تتدفق في نفس السطر ولا تتعامل مع height وtop/bottom margins بنفس طريقة الـ block.

Block أمثلة: div, p, h1, section, article
Inline أمثلة: span, a, strong, em

السؤال 10: What is the difference between id and class?

الملف يعتبر id معرفًا فريدًا، بينما class قابلة لإعادة الاستخدام على عدة عناصر.

id: المفروض يكون unique داخل الصفحة.
class: عادي جدًا تتكرر وتستخدم لتطبيق نفس الستايل على عناصر مختلفة.

احفظي:
id → unique
class → reusable

السؤال 11: Can an id be repeated?

لا.
المفروض الـ id يكون unique داخل الـ document. تكرار IDs قد يسبب مشاكل في عمليات تحديد العناصر بواسطة JavaScript (مثل getElementById) ويؤثر على الـ Accessibility.

السؤال 12: What are Meta Tags?

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

iframe = Inline Frame.
هو container يعرض document HTML آخر (صفحة خارجية) داخل الصفحة الحالية.
من استخداماته: تضمين خرائط Google، فيديوهات YouTube، أو محتوى من خدمة أخرى.

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
`;