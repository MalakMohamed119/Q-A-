// ==========================================
// 3. ADVANCED TOPICS (CSS, JS, Angular, etc.)
// ==========================================
window.DETAILED_EXPLANATIONS = {
  ar: String.raw`
# 🎨 CSS Architecture

## 26) Inline vs Internal vs External CSS
### Inline
<p style="color: red;">Hello</p>
CSS مكتوبة داخل العنصر نفسه.
عيبها: صعبة في الصيانة وإعادة الاستخدام.

### Internal
<head>
  <style>
    p { color: red; }
  </style>
</head>
CSS داخل <style> في نفس الصفحة.

### External
<link rel="stylesheet" href="style.css">
والـ CSS في ملف منفصل. الأفضل في المشاريع الكبيرة لأنه reusable وأسهل في التنظيم.

## 27) What is Specificity?
الـ Specificity هي أولوية الـ CSS لما أكتر من rule يحاول يطبق على نفس العنصر.
الترتيب:
Inline → ID → Class / Pseudo-class → Element

## 28) What is the Cascade?
هي الآلية التي يحدد بها CSS أي rule يفوز عندما توجد قواعد متعارضة تعتمد على: Origin, Importance, Specificity, Order.

## 29) What is the Box Model?
كل element بيتعامل كصندوق وترتيبه من الداخل للخارج:
Content → Padding → Border → Margin

## 30) Margin vs Padding
Padding: مسافة داخل العنصر.
Margin: مسافة خارج العنصر.

## 31) What is display?
block: يبدأ سطر جديد.
inline: يظل في نفس السطر.
inline-block: يجمع ميزات الاثنين.
flex: لترتيب العناصر في row أو column.
grid: للـ rows + columns.

## 32) What is Flexbox?
نظام layout one-dimensional. بتتعاملي مع اتجاه واحد فقط.

## 33) What is Grid?
نظام layout two-dimensional. بيقسم الشاشة لصفوف وأعمدة.

## 34) flex: 1 vs flex: auto
flex: 1 تتقاسم المساحة بشكل متساوٍ، بينما flex: auto تأخذ حجم المحتوى الأصلي في الاعتبار قبل التوزيع.

## 35) grid-template-columns vs grid-template-rows
تحدد عدد وحجم الأعمدة (Columns) والصفوف (Rows).

## 36) What is fr?
اختصار Fraction وبتقسم المساحة المتاحة بالتساوي.

## 37) What is minmax()?
بتحدد minimum و maximum لحجم الـ grid track.

## 38) repeat() vs auto-fill vs auto-fit
repeat: لتقليل التكرار.
auto-fill: يحاول يحجز أكبر عدد tracks حتى لو فاضية.
auto-fit: يعمل collapse للـ empty tracks ويوسع العناصر الموجودة.

## 39) What is Specificity Hierarchy?
الـ Specificity هي أولوية تطبيق أوامر الـ CSS عندما تتعارض. يتم حسابها بنظام النقاط:
- الـ Inline Style (مثل style="color:red") = 1000 نقطة.
- الـ ID = 100 نقطة.
- الـ Class / Attributes / Pseudo-classes = 10 نقاط.
- الـ Elements / Pseudo-elements = 1 نقطة.
دائماً القاعدة ذات النقاط الأعلى هي التي تفوز.

## 40) What is a Stacking Context?
هو عبارة عن نظام طبقات (Layers) يعزله المتصفح على المحور Z (العمق). عندما يأخذ عنصر Stacking Context جديد (مثلاً بسبب position: relative مع z-index)، فإن كل أبنائه يتم ترتيبهم داخله، ولا يمكن لأي ابن أن يخرج ليغطي عنصراً خارج هذا الـ Context إذا كان الأب نفسه في طبقة أقل.

## 41) What is the difference between transitions and animations?
- **Transitions**: تقوم بتغيير الخصائص بشكل ناعم من نقطة (A) إلى (B) وتحتاج غالباً إلى حدث لتشغيلها مثل :hover.
- **Animations**: تعتمد على @keyframes وتسمح بعمل حركات معقدة متعددة المراحل وتعمل تلقائياً دون الحاجة لتدخل المستخدم.

# 🟦 Bootstrap & Tailwind

## 42) What is the Bootstrap grid system?
يعتمد على نظام 12 عموداً مرناً (12-column responsive grid) مبني على الـ Flexbox. تستخدم كلاسات مثل col-md-6 لتقسيم الشاشة إلى نصفين بداية من شاشات الـ medium.

## 50) What is Tailwind CSS and why Utility-first?
Tailwind هو إطار عمل يعتمد على كلاسات صغيرة جداً (Utilities) تقوم بمهمة واحدة. بدل كتابة كلاس .card في CSS، تقوم بكتابة <div class="p-4 bg-white rounded shadow">. هذا يسرع التطوير ويمنع تضخم ملفات الـ CSS.

# 🟨 JavaScript

## 71) var vs let vs const
- **var**: نطاقها (Function-scoped)، يمكن إعادة تعريفها، وتتأثر بالـ Hoisting كـ undefined.
- **let**: نطاقها (Block-scoped)، لا يمكن إعادة تعريفها بنفس النطاق، وتقع في الـ Temporal Dead Zone.
- **const**: مثل let ولكن لا يمكن تغيير قيمتها بعد تعيينها (إلا إذا كانت Object/Array فيمكن تغيير محتواها).

## 78) What is a Closure?
الـ Closure هو احتفاظ الدالة الداخلية (Inner function) بالمتغيرات الموجودة في بيئة الدالة الخارجية (Outer function) حتى بعد أن تنتهي الدالة الخارجية من التنفيذ. مفيد جداً في الـ Encapsulation.

## 86) map vs filter vs reduce
- **map**: تمر على كل عناصر المصفوفة وترجع مصفوفة جديدة معدلة.
- **filter**: ترجع مصفوفة جديدة تحتوي فقط على العناصر التي حققت الشرط (true).
- **reduce**: تقوم بتجميع أو دمج عناصر المصفوفة لتخرج بقيمة واحدة نهائية (مثل المجموع).

## 89) What is the Event Loop?
المحرك الذي يجعل JavaScript قادرة على العمل بـ Asynchronous رغم أنها Single-threaded. يقوم بمراقبة الـ Call Stack، وعندما يفرغ، يبدأ بجلب المهام من الـ Microtask Queue (مثل وعود Promises) أولاً، ثم يجلب من الـ Macrotask Queue (مثل setTimeout).

## 96) What is a Promise?
هو كائن (Object) يمثل نجاح أو فشل عملية غير متزامنة (Asynchronous). له 3 حالات:
- Pending (قيد الانتظار)
- Fulfilled (تم بنجاح)
- Rejected (فشل)

# 📘 TypeScript

## 100) What is TypeScript?
لغة مبنية فوق JavaScript تضيف نظام الأنواع (Static Typing)، مما يساعد على اكتشاف الأخطاء أثناء كتابة الكود (Compile-time) قبل تشغيله في المتصفح.

## 101) any vs unknown
- **any**: تلغي فحص الأنواع تماماً وتسمح بأي عملية (غير آمنة).
- **unknown**: آمنة؛ تجبرك على التحقق من نوع المتغير (Type checking) قبل إجراء أي عملية عليه.

## 102) interface vs type
- **interface**: تستخدم غالباً لتعريف شكل الكائنات (Objects)، وتدعم دمج التصريحات (Declaration Merging).
- **type**: أكثر مرونة، وتستطيع تعريف الـ Unions و Tuples وغيرها.

## 104) Generics
بتخلي الـ function أو الـ class قابلة لإعادة الاستخدام مع الحفاظ على الـ type safety (مثل function identity<T>(value: T)).

## 111) Utility Types
Partial (تجعل الخصائص اختيارية)، Pick (اختيار خصائص معينة)، Omit (استبعاد خصائص)، و Record.

# 🅰️ Angular

## 120) What is Angular?
إطار عمل من Google مبني على الـ Components لبناء تطبيقات ويب قوية من نوع SPA.

## 122) What is a Component?
الـ Component هو حجر الأساس ويتكون من: TypeScript Class، HTML Template، CSS Styles، و @Component metadata.

## 126) Types of Directives
Component (له template)، Structural (زي *ngIf لتغيير هيكل الـ DOM)، و Attribute (زي ngClass لتغيير المظهر).

## 132) What is a Service and Dependency Injection?
الـ Service هي كلاس لفصل الـ Business Logic والـ API calls، والـ Dependency Injection هو الطريقة اللي Angular بيوفر بيها نسخة من الـ Service دي للـ Components.

## 135) Lifecycle Hooks
أهمهم: ngOnInit (بعد تهيئة المدخلات)، و ngOnChanges (عند تغير الـ @Input)، و ngOnDestroy (لتنظيف الموارد).

## 141) Template-driven vs Reactive Forms
Template-driven مناسبة للنماذج البسيطة وتعتمد على الـ HTML، بينما Reactive مناسبة للنماذج المعقدة وتُبنى بشكل برمجي في TypeScript.

## 146) Observables vs Signals
Observables ممتازة للـ Asynchronous events زي الـ HTTP requests وتعتمد على RxJS.
Signals طريقة جديدة في Angular للتعامل مع الـ Reactive State وتحديث الـ UI بشكل أكثر دقة وكفاءة.

## 158) Change Detection (Default vs OnPush)
Default بيفحص كل التطبيق، بينما OnPush بيفحص الـ Component فقط لو اتغير الـ @Input أو حصل Event أو انبعثت قيمة من Observable مربوط بـ async pipe، مما يحسن الأداء جداً.

## 162) Standalone Components
طريقة حديثة تسمح بإنشاء المكونات بدون الحاجة لإضافتها داخل NgModule، مما يبسط هيكل التطبيق.

## 173) Large-scale Angular Architecture
تعتمد على تنظيم التطبيق إلى Core Module للخدمات الأساسية، Shared Module للعناصر المشتركة، و Feature Modules للميزات المنفصلة مع استخدام الـ Lazy Loading لتحسين الأداء.

---

# 📌 ملحق الأسئلة الإضافية (CSS & JS)

## 200) What is the difference between position: static / relative / absolute / fixed / sticky?
سؤال أساسي في أي انترفيو لتقييم فهمك للـ Layouts:
- **static**: القيمة الافتراضية لأي عنصر. العنصر يتدفق طبيعياً في الصفحة ولا يتأثر بخصائص (top, right, bottom, left).
- **relative**: العنصر يتحرك بالنسبة لموقعه الأصلي الطبيعي في الصفحة، والمسافة اللي بيسيبها بتفضل محجوزة.
- **absolute**: العنصر يتحرك بالنسبة لأقرب أب له يحمل position غير static. بيخرج تماماً من التدفق الطبيعي للصفحة.
- **fixed**: العنصر يتحرك بالنسبة لنافذة المتصفح (Viewport) نفسها. بيفضل ثابت في مكانه مهما عملت Scroll.
- **sticky**: حالة هجينة! العنصر يتصرف كـ relative لحد ما تعمل Scroll وتوصل لنقطة معينة، وقتها بيتحول لـ fixed ويثبت.

## 201) What does z-index do?
الـ z-index بيتحكم في ترتيب الطبقات (Stacking) للعناصر على المحور Z (العمق) عشان نحدد مين يظهر فوق التاني.
شرط أساسي: لا يعمل أبداً مع العناصر اللي الـ position بتاعها static.

## 202) What is the difference between rem, em, and px?
- **px (Pixels)**: وحدة ثابتة (Absolute). 16px هتفضل دايماً 16 بكسل مهما حصل.
- **em**: وحدة نسبية (Relative) بتتحسب بناءً على حجم الخط (font-size) الخاص بالعنصر الأب.
- **rem (Root em)**: وحدة نسبية بتتحسب بناءً على حجم الخط الخاص بالجذر (html root) فقط. دي أفضل وحدة للـ Responsive Design.

## 203) How does media query work?
الـ Media Query هي الأداة الأساسية للـ Responsive Design. تسمح لك بتطبيق أسطر CSS معينة فقط لما تتحقق شروط معينة في شاشة المستخدم (زي أقصى عرض max-width).

## 204) What is the difference between a Shallow Copy and a Deep Copy?
- **Shallow Copy**: بيتم نسخ الخصائص اللي في المستوى الأول بس. لو الـ Object جواه Object تاني، بيتم نسخ الـ Reference بتاعه (زي الـ Spread Operator).
- **Deep Copy**: بيعمل نسخة مستقلة تماماً من كل البيانات. تغيير النسخة لا يؤثر على الأصل أبداً (زي structuredClone).

## 205) What is the fetch API?
هو واجهة برمجية (Interface) حديثة مبنية على الـ Promises، بتستخدم لعمل طلبات للشبكة لجلب أو إرسال البيانات من وإلى الـ Server.
`,
  en: String.raw`
# 🎨 CSS Architecture

## 39. What is Specificity Hierarchy?
Specificity determines which CSS rule applies when multiple conflict. The scoring hierarchy is:
- Inline Styles: 1000 points
- IDs: 100 points
- Classes / Pseudo-classes: 10 points
- Elements / Pseudo-elements: 1 point
The rule with the highest total score wins.

## 40. What is a Stacking Context?
A stacking context is an isolated layer-management environment on the Z-axis. When an element forms a stacking context (e.g., via position: relative with a z-index), all its children are contained within that layer. A child with z-index: 9999 cannot overlap an element outside if its parent's stacking context is lower.

## 41. What is the difference between transitions and animations?
- **Transitions:** Smoothly interpolate property changes between two states (e.g., on :hover).
- **Animations:** Use @keyframes to define multiple stages of motion that can run automatically and loop indefinitely without user interaction.

# 🟦 Bootstrap & Tailwind

## 42. What is the Bootstrap grid system?
A responsive, mobile-first 12-column layout system built on Flexbox. You use classes like col-md-6 to dictate that an element should span 6 out of 12 columns on medium screens and up.

## 50. What is Tailwind CSS and why Utility-first?
Tailwind is a framework providing atomic, single-purpose CSS classes. Instead of writing a custom .btn class in CSS, you combine utilities directly in HTML like class="px-4 py-2 bg-blue-500 rounded". This prevents stylesheet bloat and speeds up UI building.

# 🟨 JavaScript

## 71. var vs let vs const
- **var:** Function-scoped, can be redeclared, and is hoisted as undefined.
- **let:** Block-scoped, cannot be redeclared in the same scope, and is hoisted into the Temporal Dead Zone (TDZ).
- **const:** Block-scoped, requires immediate initialization, and cannot be reassigned (though objects/arrays declared with const can still have their contents mutated).

## 78. What is a Closure?
A closure is formed when an inner function remembers and has access to the variables of its outer (enclosing) lexical scope, even after the outer function has finished executing. 

## 86. map vs filter vs reduce
- **map:** Transforms each element and returns a new array of the same length.
- **filter:** Returns a new array containing only the elements that pass a given boolean test.
- **reduce:** Accumulates array values down to a single output value (e.g., summing numbers).

## 89. What is the Event Loop?
The mechanism that handles asynchronous execution in JavaScript's single-threaded environment. It continuously monitors the Call Stack. When the stack is empty, it processes all tasks in the Microtask Queue (e.g., Promises) before moving to the Macrotask Queue (e.g., setTimeout).

## 96. What is a Promise?
An object representing the eventual completion (or failure) of an asynchronous operation. It has three states:
- **Pending:** The initial state.
- **Fulfilled:** The operation completed successfully.
- **Rejected:** The operation failed.

# 📘 TypeScript

## 100. What is TypeScript?
A strongly typed syntactic superset of JavaScript. It adds static type checking to catch errors at compile-time rather than runtime.

## 101. any vs unknown
- **any:** Disables type checking completely. You can do anything with it (unsafe).
- **unknown:** A type-safe counterpart to any. You must explicitly check and narrow the type before you can perform operations on it.

## 102. interface vs type
- **interface:** Primarily used for declaring object shapes. Supports "declaration merging" (redeclaring it adds properties).
- **type:** Highly versatile alias used for intersections, unions (e.g., string | number), and primitives.

# 🅰️ Angular

## 120. What is Angular?
Angular is a component-based web framework developed by Google for building large-scale, single-page web applications (SPAs).

## 122. What is a Component?
A fundamental building block in Angular. It pairs a TypeScript class containing the logic with an HTML template and CSS styles, configured via the @Component decorator.

## 126. Types of Directives
- **Components:** Directives with a template.
- **Structural:** Change the DOM structure (e.g., *ngIf, *ngFor).
- **Attribute:** Change appearance or behavior (e.g., ngClass, ngStyle).

## 132. What is a Service and Dependency Injection?
A service is a reusable class for business logic and API calls. Dependency Injection (DI) is the design pattern Angular uses to automatically instantiate and provide these services to components through their constructors.

## 135. Lifecycle Hooks
Key hooks include: ngOnInit (runs once after inputs initialize), ngOnChanges (runs when an @Input value changes), and ngOnDestroy (runs before cleanup to prevent memory leaks).

## 141. Template-driven vs Reactive Forms
Template-driven forms rely heavily on HTML and two-way data binding (good for simple forms). Reactive forms are built programmatically in TypeScript, offering better control and validation for complex scenarios.

## 146. Observables vs Signals
Observables (via RxJS) are excellent for asynchronous events and streams. Signals are Angular's modern reactive primitive for managing synchronous UI state with fine-grained reactivity.

## 158. Change Detection (Default vs OnPush)
Default checks the entire component tree. OnPush optimizes this by only checking the component when an @Input reference changes, an event is triggered locally, or an async pipe emits a new value.

## 162. Standalone Components
A modern architecture choice in Angular that removes the need for NgModules. Standalone components import their own dependencies directly, simplifying application structure.

## 173. Large-scale Angular Architecture
A common enterprise structure uses a Core Module for singleton services, a Shared Module for common UI elements, and distinct Feature Modules mapped to Lazy-loaded routes to optimize the initial bundle size.

---

# 📌 Additional Essential Scenarios (CSS & JS)

## 200. What is the difference between position: static / relative / absolute / fixed / sticky?
This is a core layout question:
- **static**: The default flow of the document.
- **relative**: Positioned relative to its normal position. The space it originally occupied remains reserved.
- **absolute**: Positioned relative to its closest positioned ancestor. It is removed from the normal document flow.
- **fixed**: Positioned relative to the browser viewport. It stays in the same place even if the page is scrolled.
- **sticky**: A hybrid value. The element toggles between relative and fixed depending on the scroll position.

## 201. What does z-index do?
The z-index property controls the vertical stacking order of elements. Elements with a higher z-index value appear in front of those with a lower value. Crucial note: z-index only works on positioned elements (not static).

## 202. What is the difference between rem, em, and px?
- **px**: An absolute, fixed unit of measurement.
- **em**: A relative unit based on the font-size of the element's direct parent.
- **rem**: A relative unit based strictly on the font-size of the root element (<html>). Highly recommended for responsive designs.

## 203. How does media query work?
Media queries allow you to apply specific CSS rules only when certain conditions about the user's device or viewport are met (e.g., max-width: 768px).

## 204. What is the difference between a Shallow Copy and a Deep Copy?
- **Shallow Copy**: Copies only the first-level properties. For nested objects, it copies the reference (e.g., using Spread Operator ...).
- **Deep Copy**: Creates a completely independent clone of the object and all of its deeply nested properties (e.g., using structuredClone(obj)).

## 205. What is the fetch API?
The Fetch API is a modern, Promise-based JavaScript interface used to make asynchronous network requests to a server, providing a cleaner alternative to XMLHttpRequest.
`
};