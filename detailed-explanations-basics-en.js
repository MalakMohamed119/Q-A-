// English detailed explanations for HTML questions 1 through 25.
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
  /  \\
h1    p

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
Download ──────────┐
                   ↓
                 Execute

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

Example:

/products?id=10

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
  // Mark the numbered question lines as headings so the shared section parser
  // can read them exactly like the other static explanation files.
  .replace(/^(\d+)\.\s+(?=(?:What|Name|Can)\b)/gm, '## $1. ');
