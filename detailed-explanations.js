// ==========================================
// 3. ADVANCED TOPICS (CSS, JS, Angular, etc.)
// ==========================================
window.DETAILED_EXPLANATIONS = {
  ar: String.raw`
# 🌐 Advanced Syllabus Detailed Explanations


# 📌 CSS Architecture

## 26) What is the difference between inline, internal, and external CSS?

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

## 27) What is specificity?

### شرح تفصيلي عن What is specificity?

الإجابة: The browser weight matching equation determining which CSS directive takes visual precedence when structural rules collide. Calculated via structural category points: Inline > IDs > Classes & Attributes > Base Elements.

## 28) What is the cascade?

### شرح تفصيلي عن What is the cascade?

الإجابة: The fundamental waterfall mechanism prioritizing style rules based on structural importance flags, stylesheet source origin types, specificity values, and literal order declaration.

## 29) What is the Box Model?

كل element بيتعامل كصندوق وترتيبه من الداخل للخارج:
Content → Padding → Border → Margin

## 30) What is the difference between margin and padding?

Padding: مسافة داخل العنصر.
Margin: مسافة خارج العنصر.

## 31) What is display? And what are the differences between block / inline / inline-block / flex / grid?

### شرح تفصيلي عن What is display? And what are the differences between block / inline / inline-block / flex / grid?

الإجابة: Defines node rendering layout contexts:<ul><li><code>block</code>: Full-width line breaker.</li><li><code>inline</code>: Fluid item flow, ignores bounding box heights.</li><li><code>inline-block</code>: Inline alignment while retaining box model padding/height manipulation capabilities.</li><li><code>flex</code>: Triggers 1-dimensional item layout flow manipulation.</li><li><code>grid</code>: Triggers a 2-dimensional system managing structured rows/columns simultaneously.</li></ul>

## 32) What is the difference between position: static / relative / absolute / fixed / sticky?

سؤال أساسي في أي انترفيو لتقييم فهمك للـ Layouts:
- **static**: القيمة الافتراضية لأي عنصر. العنصر يتدفق طبيعياً في الصفحة ولا يتأثر بخصائص (top, right, bottom, left).
- **relative**: العنصر يتحرك بالنسبة لموقعه الأصلي الطبيعي في الصفحة، والمسافة اللي بيسيبها بتفضل محجوزة.
- **absolute**: العنصر يتحرك بالنسبة لأقرب أب له يحمل position غير static. بيخرج تماماً من التدفق الطبيعي للصفحة.
- **fixed**: العنصر يتحرك بالنسبة لنافذة المتصفح (Viewport) نفسها. بيفضل ثابت في مكانه مهما عملت Scroll.
- **sticky**: حالة هجينة! العنصر يتصرف كـ relative لحد ما تعمل Scroll وتوصل لنقطة معينة، وقتها بيتحول لـ fixed ويثبت.

## 33) What does z-index do?

### شرح تفصيلي عن What does z-index do?

الإجابة: Alters the virtual layering coordinate along the depth rendering axis (Z-Axis). Requires a non-static position attribute configuration.

## 34) What is the difference between rem, em, and px?

### شرح تفصيلي عن What is the difference between rem, em, and px?

الإجابة: <ul><li><code>px</code>: Absolute design pixel value. Static.</li><li><code>em</code>: Relative scale based on the local component font value configuration.</li><li><code>rem</code>: Scaled entirely off the root HTML font size (natively 16px). Essential for elastic layouts.</li></ul>

## 35) How does media query work?

الـ Media Query هي الأداة الأساسية للـ Responsive Design. تسمح لك بتطبيق أسطر CSS معينة فقط لما تتحقق شروط معينة في شاشة المستخدم (زي أقصى عرض max-width).

## 36) What is the function of justify-content / align-items / flex-direction / flex-wrap / align-content?

### شرح تفصيلي عن What is the function of justify-content / align-items / flex-direction / flex-wrap / align-content?

الإجابة: <ul><li><code>justify-content</code>: Distributes flex items along the configured Main Axis tracking line.</li><li><code>align-items</code>: Aligns components along the secondary Cross Axis line.</li><li><code>flex-direction</code>: Sets the layout tracking line orientation (row vs column).</li><li><code>flex-wrap</code>: Permits flex items to shift onto multi-row levels if space caps clip.</li><li><code>align-content</code>: Aligns multi-row track levels inside the flex container wrapper space.</li></ul>

## 37) What is the difference between flex:1 and flex:auto?

flex: 1 تتقاسم المساحة بشكل متساوٍ، بينما flex: auto تأخذ حجم المحتوى الأصلي في الاعتبار قبل التوزيع.

## 38) What is the difference between grid-template-rows and grid-template-columns?

تحدد عدد وحجم الأعمدة (Columns) والصفوف (Rows).

## 39) What is the fr unit?

### شرح تفصيلي عن What is the fr unit?

الإجابة: The Fraction Unit (<code>fr</code>) calculates fractional ratios of unallocated free structural layout real estate inside the grid matrix layout.

## 40) What is minmax()?

### شرح تفصيلي عن What is minmax()?

الإجابة: A grid sizing function establishing a safe boundary threshold allowing an item grid track size to flex dynamically between an explicit minimum baseline up to an explicit maximum value cap.

## 41) What is the difference between repeat(), auto-fit, and auto-fill?

repeat: لتقليل التكرار.
auto-fill: يحاول يحجز أكبر عدد tracks حتى لو فاضية.
auto-fit: يعمل collapse للـ empty tracks ويوسع العناصر الموجودة.

## 42) What is specificity hierarchy?

الـ Specificity هي أولوية تطبيق أوامر الـ CSS عندما تتعارض. يتم حسابها بنظام النقاط:
- الـ Inline Style (مثل style="color:red") = 1000 نقطة.
- الـ ID = 100 نقطة.
- الـ Class / Attributes / Pseudo-classes = 10 نقاط.
- الـ Elements / Pseudo-elements = 1 نقطة.
دائماً القاعدة ذات النقاط الأعلى هي التي تفوز.

## 43) What is the Stacking Context and why does it affect z-index?

هو عبارة عن نظام طبقات (Layers) يعزله المتصفح على المحور Z (العمق). عندما يأخذ عنصر Stacking Context جديد (مثلاً بسبب position: relative مع z-index)، فإن كل أبنائه يتم ترتيبهم داخله، ولا يمكن لأي ابن أن يخرج ليغطي عنصراً خارج هذا الـ Context إذا كان الأب نفسه في طبقة أقل.

## 44) How can you explicitly trigger or create a new Stacking Context?

هو عبارة عن نظام طبقات (Layers) يعزله المتصفح على المحور Z (العمق). عندما يأخذ عنصر Stacking Context جديد (مثلاً بسبب position: relative مع z-index)، فإن كل أبنائه يتم ترتيبهم داخله، ولا يمكن لأي ابن أن يخرج ليغطي عنصراً خارج هذا الـ Context إذا كان الأب نفسه في طبقة أقل.

## 45) What is the complete layout Stacking Order?

### ترتيب الطبقات (Stacking Order)
لما تكوني في Stacking Context، المتصفح بيرسم العناصر من ورا لقدام بالترتيب ده:
1. الخلفية والحدود الخاصة بالعنصر الأب.
2. العناصر اللي ليها Position و z-index سالب.
3. العناصر العادية Block-level (زي div و p) اللي ملهاش position.
4. العناصر العائمة Floats.
5. العناصر السطرية Inline (زي text و span).
6. العناصر المتموضعة (Positioned) اللي ليها z-index: 0 أو auto.
7. العناصر المتموضعة اللي ليها z-index موجب (1 فما فوق).

## 46) What is the difference between ::before and ::after?

### العناصر الوهمية ::before و ::after
دول بنسميهم Pseudo-elements، بيخلّوكي تضيفي محتوى وتنسقيه من غير ما تعدلي في ملف الـ HTML نفسه.
- \`::before\`: بيحط المحتوى قبل محتوى العنصر الأصلي.
- \`::after\`: بيحط المحتوى بعد محتوى العنصر الأصلي.
*ملحوظة مهمة*: لازم دايماً تستخدمي خاصية \`content\` عشان يظهروا، حتى لو هتسيبها فاضية \`content: "";\` (زي لما تيجي تعملي خلفية جمالية أو أيقونة).

## 47) What is calc()?

### دالة calc()
دالة \`calc()\` بتخليكي تعملي عمليات حسابية مباشرة في الـ CSS عشان تحسبي القيم ديناميكياً.
- العمليات المتاحة: الجمع (+)، الطرح (-)، الضرب (*)، القسمة (/).
- *قاعدة ذهبية*: لازم تسيبي مسافة قبل وبعد علامة الجمع والطرح، مثلاً: \`calc(100% - 20px)\` وليس \`calc(100%-20px)\` وإلا الكود هيبوظ.
- الميزة الأكبر: بتدمج وحدات مختلفة مع بعض زي النسبة المئوية والبكسل.

## 48) What is clip-path?

### خاصية clip-path
الخاصية دي بتعمل زي ماسك أو مقص للعنصر، بتحدد مساحة هندسية معينة يظهر فيها العنصر، وأي جزء برة المساحة دي بيختفي تماماً.
- الأشكال المشهورة: \`circle()\` لعمل دائرة، \`ellipse()\` للشكل البيضاوي، \`polygon()\` لعمل مضلعات بأبعاد مخصصة، أو مسار SVG مخصص.

## 49) What is the difference between transitions and animations?

- **Transitions**: تقوم بتغيير الخصائص بشكل ناعم من نقطة (A) إلى (B) وتحتاج غالباً إلى حدث لتشغيلها مثل :hover.
- **Animations**: تعتمد على @keyframes وتسمح بعمل حركات معقدة متعددة المراحل وتعمل تلقائياً دون الحاجة لتدخل المستخدم.

# 🟦 Bootstrap & Tailwind


# 📌 Bootstrap

## 50) What is Bootstrap and why do we use it?

### شرح تفصيلي عن What is Bootstrap and why do we use it?

الإجابة: An open-source UI ecosystem featuring component templates designed for fast, standardized front-end layout prototyping.

## 51) What is the Bootstrap grid system?

يعتمد على نظام 12 عموداً مرناً (12-column responsive grid) مبني على الـ Flexbox. تستخدم كلاسات مثل col-md-6 لتقسيم الشاشة إلى نصفين بداية من شاشات الـ medium.

## 52) What is the difference between col / col-sm / col-md / col-lg?

### كلاسات الشاشات في Bootstrap (col vs col-sm vs col-md...)
الـ Bootstrap بيقسم الشاشات لنقاط توقف (Breakpoints) وبناءً عليها بتحددي مساحة العنصر:
- \`col-\`: للموبايلات والشاشات الصغيرة جداً (<576px).
- \`col-sm-\`: للشاشات الصغيرة زي التابلت (&ge;576px).
- \`col-md-\`: للشاشات المتوسطة (&ge;768px).
- \`col-lg-\`: للشاشات الكبيرة (&ge;992px).
لما تكتبي مثلاً \`col-md-6\`، ده معناه إن العنصر هياخد نص الشاشة (6 من 12) في الشاشات المتوسطة فما فوق، وفي الشاشات الأصغر هينزل تحت بعضه بملء الشاشة.

## 53) What are the Bootstrap breakpoints?

### شاشات المقارنة في Bootstrap
نقاط التوقف الافتراضية اللي بيعتمد عليها Bootstrap لتنسيق الشاشات هي:
- **xs (Extra Small)**: أقل من 576px
- **sm (Small)**: أكبر من أو يساوي 576px (التابلت)
- **md (Medium)**: أكبر من أو يساوي 768px (لابتوب صغير)
- **lg (Large)**: أكبر من أو يساوي 992px (لابتوب كبير)
- **xl (Extra Large)**: أكبر من أو يساوي 1200px (شاشات الكمبيوتر الكبيرة)
- **xxl (Extra Extra Large)**: أكبر من أو يساوي 1400px

## 54) What is the difference between container and container-fluid?

### الفرق بين container و container-fluid
- \`.container\`: بيعمل حاوية ليها عرض أقصى محدد (Max-width) ومستقرة في نص الشاشة مع وجود هوامش على الجنبين، وبيصغر خطوة بخطوة مع كل شاشة.
- \`.container-fluid\`: بياخد 100% من عرض الشاشة بالكامل دايماً في كل أنواع الشاشات بدون أي حدود قصوى.

## 55) How does the Modal work?

### كيف يعمل Modal في Bootstrap؟
الـ Modal هو النافذة المنبثقة اللي بتظهر فوق محتوى الصفحة:
- بيستخدم طبقة خلفية داكنة (Backdrop) مع \`z-index\` عالي جداً لحجب محتوى الصفحة الخلفية.
- بيتحكم برمجياً في الكيبورد عشان يقفل لما تدوسي \`Esc\`، وبيعمل حاجز للـ Focus بحيث الزرار \`Tab\` ما يروحش للعناصر اللي ورا الـ Modal وهي مفتوحة.

## 56) How does the navbar work?

### آلية عمل شريط التنقل (Navbar) في Bootstrap
شريط التنقل بيتحكم في ظهور القوائم في الشاشات الصغيرة:
- في الموبايل، القائمة بتكون مخفية افتراضيًا باستخدام كلاسات الـ collapse.
- عند الضغط على زرار الهامبرجر (Hamburger button)، الكود بيضيف كلاس \`.show\` ديناميكياً وبيشغل الـ Transition الخاص بالـ height عشان القائمة تنزل بنعومة.

## 57) What is the spacing system (m-1, p-3...)

### نظام الهوامش والمسافات (m-1, p-3...)
الـ Bootstrap بيوفر كلاسات جاهزة سريعة للمسافات مبنية على وحدة \`rem\`:
- الحرف الأول: \`m\` تعني Margin (هامش خارجي)، \`p\` تعني Padding (هامش داخلي).
- الحرف الثاني (اختياري): \`t\` (أعلى)، \`b\` (أسفل)، \`s\` (بداية/يسار)، \`e\` (نهاية/يمين)، \`x\` (أفقي)، \`y\` (رأسي).
- الرقم: من \`0\` إلى \`5\` يمثل مضاعفات المسافة الأساسية. مثلاً: \`mb-4\` يعني هامش سفلي كبير.

## 58) What are the text and background colors (bg-primary, text-danger)

### الألوان في Bootstrap (bg-primary, text-danger...)
الـ Bootstrap بيستخدم مسميات دلالية (Semantic names) للألوان عشان تحافظي على هوية التصميم:
- \`primary\`: اللون الأزرق الأساسي للبراند.
- \`success\`: اللون الأخضر (للعمليات الناجحة).
- \`danger\`: اللون الأحمر (للأخطاء والتحذيرات الخطيرة).
- \`warning\`: اللون الأصفر (للتحذيرات العادية).
- \`secondary\`: الرمادي الداكن.


# 📌 Tailwind CSS

## 59) What is Tailwind?

### ما هو Tailwind CSS؟
الـ Tailwind هو إطار عمل CSS يعتمد على مبدأ الـ Utility-first.
بدل ما يديكي عناصر جاهزة الشكل زي زرار Bootstrap، بيديكي كلاسات صغيرة جداً ومحددة الوظيفة (مثل \`flex\` للـ Layout، \`text-red-500\` للون، \`rounded\` للحواف الدائرية) وانتي بتركبيهم مع بعض في الـ HTML مباشرة عشان تعملي تصميمك الفريد.

## 60) Why is it considered Utility-first?

Tailwind هو إطار عمل يعتمد على كلاسات صغيرة جداً (Utilities) تقوم بمهمة واحدة. بدل كتابة كلاس .card في CSS، تقوم بكتابة <div class="p-4 bg-white rounded shadow">. هذا يسرع التطوير ويمنع تضخم ملفات الـ CSS.

# 🟨 JavaScript

## 61) What is the difference between Tailwind and Bootstrap?

### الفرق بين Tailwind و Bootstrap
- **Bootstrap**: يعتمد على المكونات الجاهزة (Component-driven). سهل وسريع جداً في البداية، لكن تخصيصه صعب وبتلاقي مواقع كتير طالعة شبه بعضها.
- **Tailwind**: يعتمد على الكلاسات الذرية (Utility-driven). بتكتبي الستايل في الـ HTML مباشرة. بيديكي حرية كاملة في التصميم وملف الـ CSS النهائي بيكون صغير جداً لأنه بيمسح الكلاسات اللي مش مستخدماها.

## 62) What do classes like flex / items-center / justify-between / bg-blue-500 / text-xl mean?

### شرح كلاسات Tailwind الشائعة
- \`flex\`: بيحول العنصر لـ Flex Container.
- \`items-center\`: بيوسط العناصر رأسياً (align-items: center).
- \`justify-between\`: بيوزع العناصر بحيث يكون في مسافات متساوية بينهم (justify-content: space-between).
- \`bg-blue-500\`: بيلون الخلفية باللون الأزرق بدرجة سطوع 500.
- \`text-xl\`: بيكبر حجم الخط لـ 1.25rem (يعني حوالي 20px).

## 63) How do responsive classes work in Tailwind?

### كيف تعمل الكلاسات التفاعلية (Responsive) في Tailwind؟
الـ Tailwind مبني على مبدأ Mobile-first. الكلاسات بدون بادئة بتطبق على كل الشاشات. عشان تحددي ستايل لشاشة معينة بتكتبي اسم الشاشة قبل الكلاس:
- \`md:text-left\`: هيخلي النص على الشمال فقط في الشاشات المتوسطة (&ge;768px) فما فوق.
- \`lg:w-1/2\`: هيخلي عرض العنصر 50% فقط في الشاشات الكبيرة (&ge;992px) فما فوق.

## 64) What are arbitrary values?

### القيم العشوائية (Arbitrary Values) في Tailwind
لو محتاجة قيمة معينة بالظبط مش موجودة في تصميم Tailwind الافتراضي، بتكتبيها جوة أقواس مربعة \`[ ]\`:
- \`w-[325px]\`: هيعمل العرض 325px بالظبط.
- \`bg-[#ff0055]\`: هيلون الخلفية باللون ده بالظبط.
الميزة هنا إنك مش بتضطري تفتحي ملف CSS خارجي عشان تكتبي قواعد استثنائية.

## 65) How does animation work in Tailwind?

### الحركات والأنيميشن في Tailwind
الـ Tailwind بيوفر كلاسات حركية جاهزة بتسهل عليكي الشغل:
- \`animate-spin\`: بيلف العنصر بشكل دائري (ممتاز للـ loading spinner).
- \`animate-pulse\`: بيعمل بهتان وظهور ناعم متكرر (ممتاز للـ skeleton loading).
- \`animate-bounce\`: بيخلي العنصر ينط لفوق ولتحت (ممتاز لجذب الانتباه).

## 66) What is the config file?

### ملف إعدادات Tailwind (tailwind.config.js)
الملف ده هو مركز التحكم الرئيسي في الـ Tailwind:
- بتحددي فيه مسارات الملفات (HTML/JS) عشان Tailwind يقرأها ويمسح الكلاسات اللي مش مستخدمة.
- تقدري من خلاله تضيفي ألوان البراند الخاصة بيكي، أو خطوط مخصصة، أو شاشات جديدة جوة قسم الـ \`theme.extend\`.

## 67) What does dark: mean?

### البادئة dark: للوضع الليلي
الـ Tailwind بيدعم الوضع الداكن (Dark Mode) بشكل مدمج. لما تكتبي \`dark:\` قبل أي كلاس، معناه إن الكلاس ده هيشتغل بس لما يكون الـ Dark Mode شغال على الموقع (عادةً عن طريق إضافة كلاس \`dark\` لعنصر الـ \`html\` الرئيسي):
- مثلاً: \`bg-white dark:bg-black\` يعني الخلفية بيضاء في الوضع العادي وسوداء في الوضع الليلي.

## 68) How do you create a component using @apply?

### استخدام التوجيه @apply في Tailwind
توجيه \`@apply\` بيخليكي تجمعي كلاسات Tailwind وتكتبيها جوة كلاس CSS مخصص في ملف الـ CSS بتاعك:
\`\`\`css
.my-button {
  @apply bg-green-500 text-white rounded p-2;
}
\`\`\`
*نصيحة انترفيو*: يفضل عدم استخدامه بكثرة لأنه بيفقدك ميزة الـ Utility-first وبيكبر حجم ملف الـ CSS تاني.


# 📌 SASS / SCSS

## 69) What is the difference between SASS and SCSS?

### الفرق بين SASS و SCSS
- **SASS (القديم)**: بيكتب الكود بالاعتماد على الفراغات (Indentation) والسطور الجديدة، من غير ما يحتاج أقواس \`{ }\` أو فاصلة منقوطة \`;\`.
- **SCSS (الجديد والمشهور)**: بيكتب الكود بنفس طريقة الـ CSS العادي تماماً باستخدام الأقواس والفاصلة المنقوطة، وده بيخليه أسهل بكتير في التعلم والكتابة ومتوافق مع أي كود CSS قديم.

## 70) What are variables?

### المتغيرات في SASS
المتغيرات بنستخدمها لتخزين قيم (زي الألوان أو مقاسات الخطوط) عشان نعيد استخدامها بسهولة. بنبدأ كتابتها بعلامة الدولار \`$\`:
\`\`\`scss
$my-font: 'Cairo', sans-serif;
body { font-family: $my-font; }
\`\`\`
ده بيخلي لو حبيتي تغيري لون الموقع مثلاً، بتغيريه من مكان واحد بس.

## 71) What are mixins?

### شرح تفصيلي عن What are mixins?

الإجابة: Reusable CSS presentation declaration groups capable of receiving dynamic argument logic: <pre><code>@mixin flexCenter($dir) {
  display: flex; flex-direction: $dir;
}</code></pre>

## 72) What are functions in SASS?

### الدوال (Functions) في SASS
الـ Function في SASS بتعمل عملية حسابية وبترجعلك قيمة واحدة محددة باستخدام \`@return\`:
\`\`\`scss
@function half-size($size) {
  @return $size / 2;
}
.box { width: half-size(100px); } // هتطلع 50px
\`\`\`

## 73) What are nested rules?

### التداخل (Nesting) في SASS
بيخليكي تكتب الـ CSS بشكل هرمي شبيه بتركيب ملف الـ HTML، وده بيوفر تكرار الأسماء وبيخلي الكود منظم جداً:
\`\`\`scss
.navbar {
  background-color: #eee;
  .nav-item {
    color: black;
    &:hover { color: blue; } // علامة & بتشير للأب المباشر (.nav-item)
  }
}
\`\`\`

## 74) What is @extend?

### التوجيه @extend في SASS
بيخلي عنصر يرث الستايل بالكامل من عنصر تاني تم تصميمه مسبقاً، عشان تمنعي تكرار الكود:
\`\`\`scss
.btn-base { padding: 10px 20px; border-radius: 5px; }
.btn-success {
  @extend .btn-base;
  background-color: green;
}
\`\`\`

## 75) What is the function of Partial files?

### ملفات الـ Partials في SASS
هي ملفات SASS فرعية بنسميها بتبدأ بشرطة سفلية (Underscore) زي \`_colors.scss\`.
الشرطة دي بتقول للـ Compiler: \"ما تترجمش الملف ده لوحده لملف CSS مستقل، سيبه لحد ما أستدعيه جوة الملف الرئيسي\". ده بيساعد جداً في تنظيم الملفات.

## 76) What do @import, @use, and @forward mean?

### الفرق بين @import و @use و @forward
- \`@import\` (القديم): بيستدعي الملفات وبيخلي كل المتغيرات متاحة بشكل عام (Global) في كل مكان، وده كان بيعمل مشاكل تداخل أسماء.
- \`@use\` (الحديث والأفضل): بيستدعي الملف كـ Module مستقل، يعني عشان تستخدمي متغير لازم تكتبي اسم الملف قبله (مثل: \`theme.$primary-color\`).
- \`@forward\`: بيعمل زي إعادة توجيه (Forwarding) للملفات عشان تخليها تظهر لملفات تانية أعلى في الترتيب.

## 77) Why is @use better than @import?

### ليه @use أفضل من @import؟
1. **منع التداخل (No conflicts)**: بيحمي الكود من تداخل الأسماء بفضل استخدام الـ Namespaces.
2. **الأداء (Performance)**: الملف بيتم تحميله مرة واحدة بس في الميموري حتى لو استدعيتيه في كذا مكان.
3. **سهولة التتبع**: بتبقي عارفة بالظبط المتغير ده جاي من أنهي ملف من خلال البادئة بتاعته.

## 78) What does Modules mean in SASS?

### شرح تفصيلي عن What does Modules mean in SASS?

الإجابة: Encapsulated stylesheet layers containing specialized variable mappings, mixins, or functions that are imported strictly via namespace call commands using the modern <code>@use</code> directive.

## 79) How does SASS make CSS scalable?

### جعل الـ CSS قابلاً للتوسع (Scalable)
الـ SASS بيخليكي تقدري تطبقي هيكليات تنظيمية مشهورة جداً زي الـ **7-1 Pattern**:
- بيقسم الكود لـ 7 مجلدات فرعية (زي المكونات، الصفحات، الأساسيات، الإعدادات، إلخ) وملف رئيسي واحد هو اللي بيجمعهم.
- ده بيخلي التعديل سهل وممنهج في المشاريع الضخمة وما تتوهيش جوة كود CSS طويل جداً.

## 80) How to create a loop with @each?

### التكرار باستخدام @each
توجيه \`@each\` بيخليكي تلفي على مصفوفة (List) أو خريطة قيم (Map) وتنشئي كلاسات متكررة تلقائياً:
\`\`\`scss
$colors: (red, green, blue);
@each $color in $colors {
  .text-#{$color} { color: $color; }
}
\`\`\`
ده بيولد في النهاية كلاسات جاهزة للمتصفح: \`.text-red\`, \`.text-green\`, \`.text-blue\`.


# 📌 JavaScript (ES6+)

## 81) What is the difference between var, let, and const?

- **var**: نطاقها (Function-scoped)، يمكن إعادة تعريفها، وتتأثر بالـ Hoisting كـ undefined.
- **let**: نطاقها (Block-scoped)، لا يمكن إعادة تعريفها بنفس النطاق، وتقع في الـ Temporal Dead Zone.
- **const**: مثل let ولكن لا يمكن تغيير قيمتها بعد تعيينها (إلا إذا كانت Object/Array فيمكن تغيير محتواها).

## 82) What is hoisting?

### الرفع (Hoisting) للمتغيرات
الـ Hoisting هو سلوك محرك جافا سكريبت برفع إعلانات المتغيرات والدوال لأعلى النطاق (Scope) قبل بدء تشغيل الكود:
- الـ \`var\`: بيترفع وبيكون واخد قيمة مبدئية \`undefined\`. تقدري تناديه قبل سطر تعريفه عادي بس قيمته هتكون undefined.
- الـ \`let\` و \`const\`: بيترفعوا برضه، بس مش بيحصلهم تهيئة (Uninitialized)، فبيكونوا محبوسين في منطقة اسمها الـ TDZ. لو ناديتيهم قبل سطر تعريفهم الكود هيطلع خطأ (ReferenceError).

## 83) What is the difference between == and ===?

### الفرق بين == و ===
- \`==\` (مقارنة فضفاضة): بتقارن القيم بس وبتقوم بتحويل الأنواع تلقائياً (Type Coercion) عشان تخليهم شبه بعض. مثلاً: \`5 == "5"\` بتطلع \`true\`.
- \`===\` (مقارنة صارمة): بتقارن القيمة والنوع مع بعض ومن غير أي تحويل. مثلاً: \`5 === "5"\` بتطلع \`false\` لأن الأول رقم والتاني نص.

## 84) What are primitive types?

### الأنواع البدائية (Primitive Types)
هي قيم بسيطة غير قابلة للتعديل (Immutable) وبتتخزن مباشرة في الـ Stack memory:
- عددها 7 أنواع: \`String\`, \`Number\`, \`Boolean\`, \`Null\`, \`Undefined\`, \`Symbol\`, \`BigInt\`.
- لما بتنسخي متغير بدائي لمتغير تاني، بيتم نسخ القيمة الفعلية نفسها في مكان جديد بالذاكرة.

## 85) What are reference types?

### أنواع المراجع (Reference Types)
هي هياكل بيانات معقدة وقابلة للتعديل (Mutable) بتتخزن في الـ Heap memory:
- بتشمل الـ \`Objects\`, \`Arrays\`, والـ \`Functions\`.
- لما بتنسخي عنصر مرجعي، انتي مش بتنسخي البيانات نفسها، انتي بتنسخي فقط مؤشر العنوان في الذاكرة (Pointer). لو عدلتي في النسخة، الأصل هيتعدل معاه فوراً.

## 86) What is the difference between null and undefined?

### شرح تفصيلي عن What is the difference between null and undefined?

الإجابة: <ul><li><code>undefined</code>: Variable declared but not assigned any initialization value yet.</li><li><code>null</code>: Explicit programmatic setting defining an intentional assignment value that represents the absence of any object value.</li></ul>

## 87) What is scope?

### نطاق المتغيرات (Scope)
الـ Scope هو مساحة الرؤية والوصول للمتغيرات في الكود:
- **Global Scope (عام)**: المتغير برة أي دالة وتقدري تشوفيه في أي حتة بالكود.
- **Function Scope (خاص بالدالة)**: متعرف جوة دالة ومش بيتشاف برة حدودها (زي المتغيرات بـ var).
- **Block Scope (خاص بالبلوك)**: متعرف جوة قوسين \`{ }\` (زي جملة if أو loop)، وده خاص بالمتغيرات المعرفة بـ \`let\` و \`const\` فقط.

## 88) What is a closure?

### Closure (البيئة المغلقة)
الـ Closure بيحصل لما دالة داخلية تفتكر وتقدر توصل لمتغيرات الدالة الخارجية بتاعتها حتى بعد ما الدالة الخارجية دي تكون خلصت تنفيذ وانتهت:
\`\`\`js
function makeCounter() {
  let x = 0;
  return function() {
    x++;
    return x;
  }
}
const count = makeCounter();
console.log(count()); // 1
console.log(count()); // 2
\`\`\`
هنا الدالة الداخلية محتفظة بالمتغير \`x\` في الذاكرة ومحافظة عليه.

## 89) What is a callback function?

### شرح تفصيلي عن What is a callback function?

الإجابة: A function passed into another execution process method as a parameter argument, intended to run upon the conclusion of that internal routine.

## 90) What are arrow functions?

### الدوال السهمية (Arrow Functions)
طريقة حديثة ومختصرة لكتابة الدوال في ES6:
- *أهم فرق*: الدوال السهمية ملهاش \`this\` خاص بيها! هي بترث قيمة \`this\` من السياق الخارجي اللي اتكتبت فيه (Lexical bind).
- متقدريش تستخدميها كـ Constructor (يعني متناديهاش بـ \`new\`) ومعندهاش كائن \`arguments\` الخاص بالدوال العادية.

## 91) What is the difference between function declaration and function expression?

### الفرق بين Function Declaration و Function Expression
- **Function Declaration**: بيحصلها Hoisting كامل هي ومحتواها، يعني تقدري تنادي الدالة قبل سطر تعريفها في الملف وتشتغل عادي.
\`\`\`js
sayHello(); // بتشتغل عادي!
function sayHello() { console.log("Hi"); }
\`\`\`
- **Function Expression**: بتتعامل معاملة المتغيرات. لو متعرفة بـ \`const\` أو \`let\`، مش هتقدري تناديها قبل سطر تعريفها وإلا هيطلع خطأ.

## 92) What is this?

### الكلمة المحجوزة this
قيمة \`this\` في جافا سكريبت مش ثابتة، وبتتحدد بناءً على طريقة استدعاء الدالة في وقت التشغيل (Runtime binding):
- في الاستدعاء العادي كدالة مستقلة: بتشير للـ \`window\` (أو \`undefined\` لو مفعلة الـ Strict Mode).
- في استدعاء كـ Method جوة Object: بتشير للـ Object نفسه اللي نادى عليها.
- في الـ Arrow Functions: بتورث قيمتها من السياق الخارجي اللي اتكتبت فيه.

## 93) What is the difference between bind, call, and apply?

### الفرق بين bind و call و apply
تستخدم لتغيير قيمة \`this\` داخل الدوال يدوياً:
- \`call()\`: بتنفذ الدالة فوراً، وبتمرري فيها قيمة \`this\` الجديدة كأول معامل، وبعدها باقي معاملات الدالة مفصلة بفواصل.
- \`apply()\`: نفس الـ call وبتنفذ فوراً، بس بتمرري باقي معاملات الدالة جوة مصفوفة (Array) واحدة.
- \`bind()\`: مش بتنفذ الدالة فوراً؛ هي بترجعلك دالة جديدة تماماً مرتبطة بـ \`this\` الجديدة عشان تنفذيها في المستقبل وقت ما تحبي.

## 94) What is Event Bubbling and Event Delegation?

### Event Bubbling و Event Delegation
- **Event Bubbling (فقاعة الحدث)**: لما يحصل تفاعل (زي click) على عنصر داخلي، الحدث ده بينتقل ويطلع لفوق لكل الأباء بتوعه في شجرة DOM بالتدريج.
- **Event Delegation (تفويض الحدث)**: فكرة ذكية مستغلة الـ Bubbling؛ بدل ما تحطي Event Listener على 100 عنصر داخلي، بتحطيه مرة واحدة بس على الأب الكبير وبتفحصي مين اللي تم الضغط عليه بالظبط باستخدام \`e.target\`.

## 95) What is the difference between map, filter, and reduce?

- **map**: تمر على كل عناصر المصفوفة وترجع مصفوفة جديدة معدلة.
- **filter**: ترجع مصفوفة جديدة تحتوي فقط على العناصر التي حققت الشرط (true).
- **reduce**: تقوم بتجميع أو دمج عناصر المصفوفة لتخرج بقيمة واحدة نهائية (مثل المجموع).

## 96) What is the difference between forEach and map?

### شرح تفصيلي عن What is the difference between forEach and map?

الإجابة: <code>forEach()</code> iterates over elements to perform side effects but returns <code>undefined</code>. <code>map()</code> explicitly yields a new transformed array without altering the original array.

## 97) How do we copy an object without reference issues?

### نسخ الكائنات وتجنب Reference Issues
لما تيجي تنسخي Object عشان تعدلي فيه من غير ما يغير في الـ Object الأصلي:
- **نسخ سطحي (Shallow Copy)**: بـ \`{...obj}\` أو \`Object.assign()\`، بينسخ المستوى الأول بس، ولو في Object جوة الأولاني هيفضلوا رابطين في نفس العنوان بالذاكرة.
- **نسخ عميق (Deep Copy)**: بنستخدم \`structuredClone(obj)\` وده بيفصل النسخة الجديدة تماماً بجميع المستويات والـ nested objects.

## 98) What is the Event Loop?

المحرك الذي يجعل JavaScript قادرة على العمل بـ Asynchronous رغم أنها Single-threaded. يقوم بمراقبة الـ Call Stack، وعندما يفرغ، يبدأ بجلب المهام من الـ Microtask Queue (مثل وعود Promises) أولاً، ثم يجلب من الـ Macrotask Queue (مثل setTimeout).

## 99) What is the difference between synchronous and asynchronous?

### التزامن وعدم التزامن (Sync vs Async)
- **Synchronous (متزامن)**: الكود بيتنفذ سطر بسطر بالترتيب. كل سطر بيعطل اللي بعده لحد ما يخلص (Blocking).
- **Asynchronous (غير متزامن)**: العمليات اللي بتاخد وقت (زي سحب بيانات من النت) بتتبعت تتنفذ في الخلفية، وجافا سكريبت بتكمل تشغيل باقي السطور عادي بدون تعطيل (Non-blocking).

## 100) What is a Promise?

### شرح تفصيلي عن What is a Promise?

الإجابة: An object representing the eventual resolution or failure of an asynchronous operation, existing in three states: <code>Pending</code>, <code>Fulfilled</code>, or <code>Rejected</code>.

## 101) What is the difference between async and await?

### شرح تفصيلي عن What is the difference between async and await?

الإجابة: <code>async</code> flags a function to implicitly wrap its return value in a Promise. <code>await</code> pauses execution code processing inside that function until its target Promise resolves.

## 102) What is the fetch API?

هو واجهة برمجية (Interface) حديثة مبنية على الـ Promises، بتستخدم لعمل طلبات للشبكة لجلب أو إرسال البيانات من وإلى الـ Server.
\`,

## 103) What is the difference between a Shallow Copy and a Deep Copy?

- **Shallow Copy**: بيتم نسخ الخصائص اللي في المستوى الأول بس. لو الـ Object جواه Object تاني، بيتم نسخ الـ Reference بتاعه (زي الـ Spread Operator).
- **Deep Copy**: بيعمل نسخة مستقلة تماماً من كل البيانات. تغيير النسخة لا يؤثر على الأصل أبداً (زي structuredClone).

## 104) What is the difference between microtasks and macrotasks in the JavaScript Event Loop, and in what order are they executed?

المحرك الذي يجعل JavaScript قادرة على العمل بـ Asynchronous رغم أنها Single-threaded. يقوم بمراقبة الـ Call Stack، وعندما يفرغ، يبدأ بجلب المهام من الـ Microtask Queue (مثل وعود Promises) أولاً، ثم يجلب من الـ Macrotask Queue (مثل setTimeout).

## 105) How does the tail-call optimization (TCO) work in ES6, and why is it not supported in most modern JavaScript engines?

### Tail-Call Optimization (TCO)
ميزة في مواصفات ES6 بتخلي استدعاء الدالة التكرارية (Recursion) في نهاية الدالة تماماً يتنفذ من غير ما يضيف طبقة جديدة في الـ Call Stack، وده بيحمي المتصفح من الانهيار (Stack Overflow).
- *تنبيه انترفيو*: الميزة دي مش مدعومة في معظم المحركات الحديثة (ما عدا Safari/WebKit) لأنها بتصعب عملية الـ Debugging وتتبع الأخطاء.

## 106) What are WeakMap and WeakSet in ESNext, and how do they differ from Map and Set regarding garbage collection?

### WeakMap و WeakSet والفرق مع Map و Set
- الـ \`Map\` والـ \`Set\` العاديين: بيحتفظوا بـ Strong references للعناصر، فالعنصر مش بيتمسح من الذاكرة حتى لو مبقاش مستخدم برة الخريطة.
- الـ \`WeakMap\` والـ \`WeakSet\`: المراجع بداخلهم ضعيفة (Weakly held). لو الـ Object اللي جوة مبقاش مستخدم في الكود برة الـ WeakMap، الذاكرة هتمسحه تلقائياً (Garbage Collected) عشان يمنع تسريب الميموري. المفاتيح لازم تكون Objects.

## 107) What is the Temporal Dead Zone (TDZ) in JavaScript, and how does the engine enforce it at compile and execution time?

### منطقة الموت المؤقتة (Temporal Dead Zone)
الـ TDZ هي الفترة الزمنية من أول ما ندخل الـ block scope لحد ما يتم الوصول لسطر تعريف المتغير بـ \`let\` أو \`const\`.
- في الفترة دي المتغير بيكون محجوز في الذاكرة بس غير متاح، وأي محاولة لقراءة قيمته أو الكتابة فيه هترمي خطأ \`ReferenceError\` علطول.

## 108) How do JavaScript Generators and Async Iterators function under the hood, and how do they manage async control flows?

### الـ Generators والـ Async Iterators
- **Generators (\`function*\`)**: دوال تقدري توقفي تشغيلها في النص وترجعي تكمليها بعدين باستخدام الكلمة المحجوزة \`yield\`.
- **Async Iterators**: هي Generators بس بدل ما ترجع قيم عادية بترجع Promises، وبتخليكي تلفي على مصادر بيانات غير متزامنة باستخدام حلقة \`for await...of\`.


# 📌 TypeScript Engine

## 109) What is TypeScript?

### ما هي لغة TypeScript؟
هي لغة برمجة مفتوحة المصدر من تطوير Microsoft، بتعتبر Superset من جافا سكريبت، يعني بتشمل كل مميزات JS وبتضيف عليها نظام الأنواع الصارم (Static Typing):
- المتصفحات ما بتفهمش TS مباشرة؛ عشان كده بيحصلها Compilation وبتترجم لـ JS عادية.
- الميزة الأكبر: بتخليكي تكتشفي الأخطاء وانتي بتكتبي الكود (Compile-time) وقبل ما تشغلي الموقع في المتصفح.

## 110) What is the difference between any and unknown?

- **any**: تلغي فحص الأنواع تماماً وتسمح بأي عملية (غير آمنة).
- **unknown**: آمنة؛ تجبرك على التحقق من نوع المتغير (Type checking) قبل إجراء أي عملية عليه.

## 111) What is the difference between type and interface?

- **interface**: تستخدم غالباً لتعريف شكل الكائنات (Objects)، وتدعم دمج التصريحات (Declaration Merging).
- **type**: أكثر مرونة، وتستطيع تعريف الـ Unions و Tuples وغيرها.

## 112) What is a union type?

### الأنواع المشتركة (Union Types)
الـ Union Type بيخليكي تحددي إن المتغير يقدر يقبل أكتر من نوع بيانات، وبنفصل بينهم بعلامة الخط الرأسي \`|\`:
\`\`\`ts
let code: string | number;
code = 404;      // تمام
code = "NOT_FOUND"; // تمام
\`\`\`
وده بيديكي مرونة مع الحفاظ على الأمان والتأكد إن مفيش قيم غريبة هتدخل.

## 113) What do generics mean?

### القوالب العامة (Generics)
الـ Generics بتخليكي تعملي دوال أو كلاسات قابلة لإعادة الاستخدام مع أنواع بيانات مختلفة من غير ما تضطري تستخدمي \`any\` وتفقدي الأمان:
\`\`\`ts
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("Malak"); // النوع هنا هيكون string تلقائياً
\`\`\`
الرمز \`T\` هو مجرد Placeholder بيتحدد نوعه الفعلي وقت مناداة الدالة.

## 114) What is an enum?

### التعداد (Enums)
الـ Enum هو وسيلة لتعريف مجموعة من الثوابت المسماة مع بعض، وده بيخلي الكود مقروء أكتر وبدل ما تكتبي أرقام عشوائية بتكتبي أسماء واضحة:
\`\`\`ts
enum Status {
  Pending,
  Active,
  Failed
}
let current: Status = Status.Active;
\`\`\`

## 115) What does readonly mean?

### المعدل readonly (للقراءة فقط)
الكلمة المحجوزة \`readonly\` بتستخدم لحماية الخصائص في الكلاس أو الـ Interface من التعديل بعد إنشائها:
- بمجرد تعيين قيمة للخاصية في الـ Constructor، مش هينفع تعدليها تاني أبداً في الكود وإلا الـ Compiler هيطلع خطأ.

## 116) What is interface merging?

### دمج الواجهات (Interface Merging)
في TypeScript، لو عرفتي اتنين Interface بنفس الاسم بالظبط في نفس المشروع، الـ Compiler هيقوم بدمجهم مع بعض تلقائياً في واجهة واحدة كبيرة تشمل كل الخصائص:
- الميزة دي مفيدة جداً لما تكوني بتستخدمي مكتبة خارجية وعايزة تضيفي خصائص جديدة للـ Types بتاعتها.

## 117) What is the difference between public / private / protected?

### محددات الوصول (public, private, protected)
الـ Access Modifiers بتتحكم في مين يقدر يشوف ويعدل الخصائص جوة الكلاس:
- \`public\` (الافتراضي): يمكن الوصول للخاصية من أي مكان برة الكلاس.
- \`private\`: لا يمكن الوصول للخاصية إلا جوة الكلاس نفسه فقط.
- \`protected\`: يمكن الوصول للخاصية جوة الكلاس نفسه أو أي كلاس وارث منه (Subclasses).

## 118) What are decorators?

### المزخرفات (Decorators)
الـ Decorators هي عبارة عن دوال خاصة بتدخل تعدل أو تضيف منطق تشغيلي للكلاس أو الدوال أو الخصائص، وبتبدأ بعلامة \`@\`:
- بتستخدم بكثرة في بيئة عمل Angular زي \`@Component\` لتحديد إعدادات المكون. ميزة تجريبية وقوية جداً للـ Metaprogramming.

## 119) How does type inference work?

### استنتاج النوع (Type Inference)
الـ Type Inference يعني إن الـ TypeScript ذكية كفاية لدرجة إنها بتستنتج نوع المتغير لوحدها من القيمة اللي بدأت بيها، من غير ما تضطري تكتبي النوع يدوياً:
\`\`\`ts
let x = 10; // الـ Compiler هيفهم علطول إن x نوعه number
\`\`\`

## 120) What are Utility Types in TypeScript (Partial, Pick, Omit, Record)?

Partial (تجعل الخصائص اختيارية)، Pick (اختيار خصائص معينة)، Omit (استبعاد خصائص)، و Record.

# 🅰️ Angular


# 📌 Legacy jQuery

## 121) What is jQuery?

### ما هي مكتبة jQuery؟
هي مكتبة جافا سكريبت شهيرة جداً اتعملت سنة 2006 لتبسيط كتابة الكود:
- كانت بتسهل جداً التعامل مع الـ DOM، الحركات (Animations)، وعمل الـ AJAX عبر المتصفحات المختلفة.
- حالياً استخدامها قل جداً لأن المتصفحات الحديثة بقت بتدعم كل ده بشكل أصلي وسهل (Native) زي \`fetch\` و \`querySelectorAll\`.

## 122) What is the difference between hide() and remove()?

### شرح تفصيلي عن What is the difference between hide() and remove()?

الإجابة: <ul><li><code>hide()</code>: Modifies inline styles to <code>display: none</code>, keeping the node in the DOM tree.</li><li><code>remove()</code>: Excises the target element and its event listeners from the DOM entirely.</li></ul>

## 123) What is AJAX in jQuery?

### الـ AJAX في jQuery
الـ jQuery كانت بتسهل عمل طلبات الشبكة (API requests) بأسلوب مريح جداً عبر استدعاء \`$.ajax()\` أو \`$.get()\`:
- كانت بتتعامل مع توافقية المتصفحات القديمة خلف الكواليس وتوفر كتابة كود XmlHttpRequest الطويل.

## 124) How do we select an element?

### محددات العناصر في jQuery
الـ jQuery بتستخدم نفس محددات الـ CSS عشان تختار العناصر من الصفحة بسهولة عن طريق علامة الدولار \`$()\`:
- \`$(".box")\`: اختيار كل العناصر اللي ليها كلاس box.
- \`$("#title")\`: اختيار العنصر اللي الـ ID بتاعه title.

## 125) What is the difference between document.ready and window.onload?

### الفرق بين $(document).ready() و window.onload
- \`$(document).ready()\`: بيشتغل أول ما هيكل الصفحة (DOM) يتبني بالكامل، ومش بيستنى الصور أو الـ stylesheets تخلص تحميل (أسرع).
- \`window.onload\`: بيشتغل متأخر؛ بيستنى لحد ما الصفحة تخلص تحميل بنسبة 100% بكل الصور والملفات الخارجية.

## 126) Why has jQuery usage decreased?

### شرح تفصيلي عن Why has jQuery usage decreased?

الإجابة: Modern browsers natively support clean standard selectors like <code>querySelectorAll</code> and APIs like <code>fetch</code>, alongside modern component frameworks.

## 127) What is the difference between on() and click()?

### الفرق بين click() و on() في jQuery
- \`click()\`: اختصار سريع لإضافة حدث الضغط، بس بيشتغل فقط على العناصر اللي كانت موجودة فعلياً في الصفحة لحظة تحميلها.
- \`on()\`: هو الطريقة الأشمل والأقوى للتعامل مع الأحداث، وبيدعم الـ Event Delegation يعني بيشتغل برضه مع العناصر اللي هتتضاف ديناميكياً بعد كدة في الصفحة.

## 128) How do fadeIn and fadeOut work?

### حركات fadeIn() و fadeOut() في jQuery
دي دوال حركية جاهزة بتتحكم في الشفافية (Opacity):
- \`fadeOut()\`: بتقلل الشفافية تدريجياً لحد ما توصل لـ 0، وبعدين بتعمل \`display: none\` للعنصر تلقائياً عشان ما ياخدش مساحة.
- \`fadeIn()\`: بتعمل العكس تماماً لإظهار العنصر بنعومة.


# 📌 Angular Core

## 129) What is Angular?

### شرح تفصيلي عن What is Angular?

الإجابة: A robust component-driven development framework by Google, engineered for compiling scalable, enterprise-grade single-page web applications.

## 130) What is the difference between SPA and MPA?

### الفرق بين SPA و MPA
- **SPA (تطبيق الصفحة الواحدة)**: الموقع بيحمل صفحة HTML واحدة بس في البداية. لما بتتحركي بين الصفحات، الـ Client-side routing بيغير المحتوى ديناميكياً من غير ما يعيد تحميل الصفحة بالكامل في المتصفح. التجربة بتكون سريعة وشبه الأبلكيشن.
- **MPA (تطبيق متعدد الصفحات)**: كل صفحة هي ملف مستقل على السيرفر. لما بتدوسي على لينك، المتصفح بيعمل Refresh كامل وبيطلب الصفحة الجديدة من السيرفر. ده التقليدي والمناسب للمواقع اللي بتعتمد على محرك البحث (SEO) بشكل أساسي.

## 131) What is a Component?

### شرح تفصيلي عن What is a Component?

الإجابة: The primary building block of an Angular view layer, uniting an HTML layout template, styling layers, and a TypeScript logic class.

## 132) What are the parts of a Component?

### أجزاء الـ Component في Angular
أي Component في Angular بيتكون من 4 أجزاء رئيسية:
1. **ملف الـ TypeScript (.ts)**: بيكتب فيه المنطق (Logic) والمتغيرات والدوال.
2. **ملف الـ HTML (.html)**: بيحدد هيكل وشكل الواجهة المعروضة.
3. **ملف الـ CSS (.css)**: الستايل الخاص بالمكون ده فقط ومش بيأثر على باقي عناصر الصفحة.
4. **المزخرف @Component**: الميتاداتا اللي بتربط التلات ملفات دول ببعض وبتحدد الـ Selector اللي هننادي بيه عليه.

## 133) What are Modules?

### الوحدات (Modules - NgModule)
الـ Module هو عبارة عن حاوية بتجمع العناصر المرتبطة ببعض (Components, Directives, Pipes) وتخليهم يشتغلوا كوحدة واحدة:
- \`declarations\`: بنسجل فيها الـ Components والـ Pipes التابعة للموديل ده.
- \`imports\`: بنستورد فيها الموديلات التانية اللي محتاجين نستخدم كلاساتها.
- \`providers\`: بنسجل فيها الخدمات (Services) عشان تكون متاحة للـ Dependency Injection.
- \`exports\`: العناصر اللي عايزين نعرضها للموديلات التانية عشان تقدر تستخدمها.

## 134) What are the types of Data Binding?

### أنواع ربط البيانات (Data Binding)
الـ Data Binding بيعمل مزامنة للبيانات بين الـ HTML والـ TypeScript:
1. **Interpolation** (\`{{ data }}\`): إرسال قيمة نصية من الـ TS لعرضها في الـ HTML.
2. **Property Binding** (\`[src]="url"\`): ربط قيم الـ TS بخصائص عناصر الـ DOM (اتجاه واحد).
3. **Event Binding** (\`(click)="save()"\`): إرسال إشعار من الـ HTML لتشغيل دالة في الـ TS عند تفاعل المستخدم.
4. **Two-Way Binding** (\`[(ngModel)]="val"\`): ربط متبادل؛ لو القيمة اتغيرت في الـ Input تتغير في الـ TS والعكس فوراً.

## 135) What is a Directive?

### التوجيهات (Directives)
الـ Directives هي كلاسات بتضيف سلوك أو مظهر إضافي لعناصر الـ DOM:
- **Component**: هو عبارة عن توجيه بس معاه Template (واجهة عرض).
- **Structural Directives (هيكلية)**: بتغير في بنية الـ DOM عن طريق مسح أو إضافة عناصر (تبدأ بـ \`*\` زي \`*ngIf\` و \`*ngFor\`).
- **Attribute Directives (مظهرية)**: بتغير شكل أو سلوك العنصر الموجود فعلياً (زي \`ngClass\` و \`ngStyle\`).

## 136) What are the types of Directives?

Component (له template)، Structural (زي *ngIf لتغيير هيكل الـ DOM)، و Attribute (زي ngClass لتغيير المظهر).

## 137) Explain: *ngIf / *ngFor / *ngSwitch

### التوجيهات الهيكلية: *ngIf و *ngFor و *ngSwitch
- \`*ngIf\`: بيمسح أو بيضيف العنصر من الـ DOM بالكامل بناءً على قيمة boolean (مش مجرد بيعمله hide).
- \`*ngFor\`: بيلف على مصفوفة عشان يكرر عرض بلوك HTML معين لكل عنصر فيها.
- \`*ngSwitch\`: بيعرض عنصر واحد فقط من وسط خيارات متعددة بناءً على مطابقة قيمة مفتاح الاختيار.

## 138) Explain ngClass and ngStyle

### التنسيق الديناميكي بـ ngClass و ngStyle
- \`ngClass\`: بيضيف أو بيشيل كلاسات CSS بناءً على شروط معينة: \`[ngClass]="{'text-success': isDone}"\`. لو \`isDone\` بـ true الكلاس هيتحط.
- \`ngStyle\`: بيضيف ستايل مخصص (Inline Style) مباشرة للعنصر: \`[ngStyle]="{'font-size.px': size}"\`.

## 139) What is a service?

### الخدمات (Services)
الـ Service هي كلاس بنكتب فيه المنطق المشترك أو طلبات الـ API البعيدة عن المكونات:
- هدفها هو فصل المهام (Separation of concerns) عشان نخلي الـ Components خفيفة ووظيفتها عرض البيانات فقط.
- بتشتغل بنظام الـ Singleton (يعني نسخة واحدة مشتركة في التطبيق كله) بيتم إدارتها بواسطة الـ Dependency Injection.

## 140) What is Dependency Injection?

الـ Service هي كلاس لفصل الـ Business Logic والـ API calls، والـ Dependency Injection هو الطريقة اللي Angular بيوفر بيها نسخة من الـ Service دي للـ Components.

## 141) What is Services Scope?

### نطاق الخدمات (Services Scope)
الـ Angular بيدعم حقن التبعيات بشكل هرمي (Hierarchical DI):
- \`providedIn: 'root'\`: بيخلي الخدمة Singleton على مستوى التطبيق كله، وبتتحمل فقط لما نحتاجها (Lazy loaded).
- مستوى الـ Component (\`providers: [MyService]\`): بينشئ نسخة فريدة من الخدمة خاصة بالـ Component ده وأبنائه بس، وبتتمسح من الذاكرة معاه.

## 142) Name the most important Lifecycle Hooks

أهمهم: ngOnInit (بعد تهيئة المدخلات)، و ngOnChanges (عند تغير الـ @Input)، و ngOnDestroy (لتنظيف الموارد).

## 143) What is the role of ngOnInit?

### دالة ngOnInit
دالة \`ngOnInit\` هي جزء من دورة حياة المكون (Lifecycle Hook) وبتتنفذ مرة واحدة فقط:
- بتشتغل بعد ما الـ Angular يخلص تهيئة كل المدخلات المربوطة بالـ Component (\`@Input\`).
- ده المكان الأنسب لبدء سحب البيانات من السيرفر (API calls) وتجهيز المكون.

## 144) What is the role of ngOnChanges?

### دالة ngOnChanges
دالة \`ngOnChanges\` بتتنفذ قبل \`ngOnInit\` وبتشتغل في كل مرة يحصل فيها تغيير في أي مدخلات ممررة للمكون (\`@Input\` properties):
- بتستقبل كائن من نوع \`SimpleChanges\` بيحتوي على القيمة الحالية والقيمة السابقة للخاصية اللي اتغيرت.

## 145) What is RouterModule?

### نظام التوجيه RouterModule
الموديل المسؤول عن إدارة التنقل بين الصفحات في الـ Single Page App:
- بتعرفي جواه المسارات (Routes) وبتربطي كل مسار بالـ Component بتاعه.
- بيقوم بعرض المكون النشط ديناميكياً جوة وسم الـ \`<router-outlet></router-outlet>\` في صفحة الـ HTML.

## 146) What is lazy loading?

### التحميل الكسول للموديلات (Lazy Loading)
هو تكنيك لتحسين الأداء بيخلي المتصفح ما يحملش كود الموديل أو المكون إلا لما المستخدم يروح للمسار (Route) بتاعه بالظبط:
- الميزة: بيقلل جداً حجم ملف الـ JavaScript الأولي اللي بيتحمل في البداية، فالموقع يفتح أسرع.
- بيتم برمجته في ملف الـ Routes باستخدام \`loadChildren\` أو \`loadComponent\`.

## 147) What is the difference between routerLink and Maps()?

### الفرق بين routerLink والتوجيه البرمجي Router.navigate()
- \`routerLink\`: توجيه بنكتبه في الـ HTML (على أوسمة الروابط \`<a>\`) عشان يخلي المستخدم يتنقل بمجرد الضغط: \`<a routerLink="/about">About</a>\`.
- \`Router.navigate()\`: دالة بنناديها برمجياً جوة ملف الـ TypeScript: \`this.router.navigate(['/home']);\`. مفيدة جداً لما تحبي تنقلي المستخدم بعد ما يعمل Action معين زي إتمام الدفع أو التسجيل.

## 148) What is the difference between Template-driven and Reactive forms?

Template-driven مناسبة للنماذج البسيطة وتعتمد على الـ HTML، بينما Reactive مناسبة للنماذج المعقدة وتُبنى بشكل برمجي في TypeScript.

## 149) What are FormGroup and FormControl?

### مكونات النماذج التفاعلية: FormGroup و FormControl
في الـ Reactive Forms:
- \`FormControl\`: بيمثل خلية إدخال واحدة (Input)، وبيراقب قيمتها وحالة الـ Validation بتاعتها (صحيحة ولا فيها خطأ).
- \`FormGroup\`: بيجمع كذا \`FormControl\` مع بعض كجروب واحد (زي فورم كاملة)، وبيخليكي تحصلي على قيمهم مع بعض وتتأكدي من صحة الفورم كلها.

## 150) What are Validators?

### التحقق من صحة النماذج (Validators)
الـ Angular بيوفر كلاس جاهز اسمه \`Validators\` للتحقق من المدخلات:
- شروط شائعة: \`Validators.required\` (إجباري)، \`Validators.email\` (صيغة بريد إلكتروني)، \`Validators.minLength(6)\` (الحد الأدنى للحروف).
- لو المدخلات مطابقتش الشروط، الكود بيعلم على الـ Input كـ Invalid وبيمنع الفورم من الإرسال.

## 151) How do we use HttpClient?

### طلبات الشبكة بـ HttpClient
الـ HttpClient هي خدمة مدمجة في Angular لعمل طلبات الشبكة (GET, POST, etc.):
- *مهم جداً*: الطلبات دي بترجع RxJS Observables مش Promises.
- بتقوم بترجمة البيانات المستلمة (JSON) تلقائياً لأوبجكت جاهز للاستخدام.

## 152) What is an interceptor?

### المعترضات (HTTP Interceptors)
هي كلاسات بتشتغل زي حارس أمن لطلبات الشبكة:
- بتعترض أي طلب خارج من الموقع للسيرفر، أو أي استجابة (Response) داخلة للموقع.
- الاستخدامات الشائعة: وضع الـ Authorization Token تلقائياً في طلبات الـ HTTP، أو معالجة أخطاء الشبكة بشكل مركزي.

## 153) What is an Observable?

### الـ RxJS Observables
الـ Observable هو عبارة عن مجرى بيانات (Data Stream) بيبعت قيم متعددة على مدار الوقت:
- عكس الـ Promises اللي بترجع قيمة واحدة بس وبتنتهي، الـ Observable ممكن يفضل شغال ويبعت بيانات باستمرار.
- الـ Observables كسولة (Lazy)؛ مش بتشتغل ولا بتبعت أي طلبات نت إلا لما نعمل ليها \`.subscribe()\`.

## 154) What is the difference between Subject and BehaviorSubject?

### الفرق بين Subject و BehaviorSubject في RxJS
الاتنين بيمثلوا مصادر بيانات بتقدر تبعت القيم لكذا مشترك في نفس الوقت (Multicast):
- **Subject**: مش بيحتفظ بآخر قيمة مبعوتة. أي مشترك جديد هيجيله البيانات اللي هتبعت *بعد* اشتراكه فقط.
- **BehaviorSubject**: لازم تديله قيمة مبدئية عند إنشائه، وبيحتفظ دايماً بآخر قيمة تم إرسالها. أي مشترك جديد هيستلم آخر قيمة محفوظة فوراً لحظة اشتراكه.

## 155) What are switchMap and mergeMap?

### الفرق بين switchMap و mergeMap في RxJS
- \`switchMap\`: لما تجيله قيمة جديدة، بيلغي تماماً أي طلب شبكة شغال حالياً ويبدأ الطلب الجديد. (مثالي لشريط البحث التلقائي لتجنب تعارض النتائج القديمة).
- \`mergeMap\`: بينفذ كل الطلبات بالتوازي ومن غير ما يلغي أي طلب قديم لو طلب جديد وصل.

## 156) What is a signal?

### الـ Signals في Angular
الـ Signals هي طريقة حديثة وذكية لإدارة الحالة (State Management) ظهرت في Angular 16:
- هي عبارة عن قيمة بتراقب نفسها وبتبلغ الـ UI تلقائياً وبأعلى كفاءة بمجرد ما تتغير.
- الميزة: بتعمل تحديث دقيق جداً (Fine-grained reactivity) في جزء الـ DOM المعتمد على الـ Signal ده فقط، بدون الحاجة لفحص كل المكونات بالتفصيل.

## 157) What is the difference between signal and BehaviorSubject?

### الفرق بين Signals و BehaviorSubject
- **BehaviorSubject**: بيعتمد على مكتبة RxJS، بيحتاج تشغيل يدوي للـ Subscribe ومسحه لتجنب تسريب الميموري، وبيحدث الواجهة بفحص المكونات العام.
- **Signals**: جزء أصلي مدمج في Angular، مش بيحتاج Subscribe أو إلغاء اشتراك يدوياً، وبيحدث فقط الخلايا المتأثرة مباشرة بأداء أسرع بكتير وبدون تعقيد RxJS.

## 158) What does computed mean?

### الـ Computed Signals
هي دالة تابعة بتعتمد على Signal تاني وبتحسب قيمة مشتقة منه، وبتكون للقراءة فقط (Read-only):
\`\`\`ts
const price = signal(10);
const total = computed(() => price() * 1.14); // بيحسب مع الضريبة تلقائياً
\`\`\`
ميزتها إنها ذكية ومخزنة (Cached)؛ مش هتعيد الحساب إلا لو قيمة الـ Signal الأساسي اتغيرت فعلياً.

## 159) What does effect mean?

### دالة effect() مع الـ Signals
الـ \`effect()\` هي دالة بتشتغل تلقائياً في كل مرة تتغير فيها قيمة الـ Signal اللي جواها:
\`\`\`ts
effect(() => {
  localStorage.setItem('user_theme', this.theme());
});
\`\`\`
*ملحوظة*: بنستخدمها فقط للأمور الجانبية (Side effects) زي الحفظ في الكاش، ومش لتعديل قيم الـ Signals التانية.

## 160) Signals vs Observables

Observables ممتازة للـ Asynchronous events زي الـ HTTP requests وتعتمد على RxJS.
Signals طريقة جديدة في Angular للتعامل مع الـ Reactive State وتحديث الـ UI بشكل أكثر دقة وكفاءة.

## 161) How do you cleanly unsubscribe from Observables in modern Angular?

### إلغاء الاشتراك وتجنب تسريب الذاكرة (Unsubscribe)
لو ما لغيتيش الـ Subscriptions المفتوحة، الميموري هتتسرب والموقع هيتقل. طرق المعالجة:
1. **الـ Async Pipe** (\`| async\`): دي الطريقة الأسهل؛ بتشغل الـ Subscribe وتلغيه لوحدها في الـ HTML أول ما الـ Component يتقفل.
2. **takeUntilDestroyed()**: معامل حديث في Angular 16 بيلغي الاشتراك تلقائياً بمجرد مسح الـ Component.
3. **المسح اليدوي**: بالاحتفاظ بالاشتراك واستدعاء \`unsubscribe()\` في دالة \`ngOnDestroy\`.

## 162) What is the difference between forkJoin and combineLatest in RxJS?

### الفرق بين combineLatest و forkJoin في RxJS
- \`combineLatest\`: بيبعت قيم جديدة في كل مرة أي Observable من المشتركين يبعت قيمة جديدة (بيديكي أحدث لقطة من الكل).
- \`forkJoin\`: شغال زي \`Promise.all\`؛ بيستنى لحد ما كل الـ Observables يقفلوا ويخلصوا تماماً (Complete)، وبعدين يرجع مصفوفة بآخر قيم ليهم كلهم مع بعض.

## 163) What is Hydration in Angular?

### الترطيب (Hydration) في SSR
الـ Hydration هو تكنيك بيخلي Angular يتبنى هيكل الـ HTML الثابت اللي السيرفر بعته (Server-Side Rendering) من غير ما يمسحه ويهده:
- المتصفح بيركب الـ Event Listeners والـ JavaScript على الـ DOM الموجود فعلياً، وده بيمنع رعشة الصفحة (Flickering) وبيسرع وقت التفاعل.

## 164) What is Incremental Hydration?

### الترطيب التدريجي (Incremental Hydration)
هو معمارية متقدمة بيتم فيها ترطيب (Hydrate) أجزاء الصفحة بشكل تدريجي وتكاسلي (مثلاً لما يدخل المكون شاشة العرض أو لما المستخدم يضغط عليه)، بدل ترطيب الصفحة بالكامل دفعة واحدة، مما يعطي أداء استثنائي لشاشات الموبايل الضعيفة.

## 165) What is Change Detection and how does its hierarchy function?

Default بيفحص كل التطبيق، بينما OnPush بيفحص الـ Component فقط لو اتغير الـ @Input أو حصل Event أو انبعثت قيمة من Observable مربوط بـ async pipe، مما يحسن الأداء جداً.

## 166) What is the structural difference between JIT and AOT compilation?

### الفرق بين مترجم JIT ومترجم AOT
- **JIT (في وقت التشغيل)**: المتصفح بيحمل المترجم معاه وبيقوم بترجمة كود الـ Angular للـ JS عند تشغيل الموقع. وده بيكبر حجم التحميل الأولي.
- **AOT (مسبقاً أثناء البناء)**: عملية الترجمة بتحصل على جهاز المطور أو السيرفر أثناء عمل Build. المتصفح بيستلم الكود مترجم جاهز وسريع جداً، وده المعيار الأساسي للـ Production.

## 167) What are the main performance benefits of AOT over JIT?

### فوائد استخدام مترجم AOT
1. **سرعة التشغيل**: المتصفح بيشغل الكود علطول من غير ما يضيع وقت في الترجمة.
2. **تقليل حجم الملفات**: بيتم استبعاد كود المترجم (Compiler) نفسه من الملفات المبعوتة للعميل.
3. **أمان أعلى**: بيكتشف أخطاء كتابة الـ HTML جوة الـ templates في وقت الـ Build.

## 168) What is the difference between Default and OnPush Change Detection?

Default بيفحص كل التطبيق، بينما OnPush بيفحص الـ Component فقط لو اتغير الـ @Input أو حصل Event أو انبعثت قيمة من Observable مربوط بـ async pipe، مما يحسن الأداء جداً.

## 169) What are Standalone Components?

طريقة حديثة تسمح بإنشاء المكونات بدون الحاجة لإضافتها داخل NgModule، مما يبسط هيكل التطبيق.

## 170) What is ViewEncapsulation?

### عزلة الستايل (ViewEncapsulation)
بتحدد إزاي الـ CSS هيتعزل جوة الـ Component:
1. **Emulated** (الافتراضي): الـ Angular بيحاكي العزل عن طريق إضافة سمات فريدة (Attribute) للعناصر مثل \`_ngcontent-x\` عشان يضمن إن الستايل ما يتسربش برة.
2. **ShadowDom**: بيستخدم الـ Shadow DOM الأصلي للمتصفح لعزل كامل وحقيقي للـ Component.
3. **None**: بيلغي العزل تماماً، وأي ستايل هنا هيسمع في الموقع كله.

## 171) What is the difference between ViewChild and ContentChild?

### الفرق بين ViewChild و ContentChild
- \`@ViewChild\`: بيستخدم للوصول لعنصر أو مكون ابن موجود جوة ملف الـ HTML الخاص بالـ Component نفسه.
- \`@ContentChild\`: بيستخدم للوصول لمكون تم تمريره من الخارج ووضعه بين وسمي البداية والنهاية للمكون الحالي (عن طريق الـ Content Projection باستخدام \`<ng-content>\`).

## 172) What is the difference between a pure and impure pipe?

### الفرق بين Pure Pipe و Impure Pipe
- **Pure Pipe** (الافتراضي): مش بيعيد حساب التنسيق إلا لو المدخلات نفسها اتغيرت قيمتها بالكامل (Reference change). أداؤه ممتاز وموفر للعمليات.
- **Impure Pipe**: بيتنفذ في كل دورة Change Detection حتى لو البيانات ما اتغيرتش. مفيد لو بتتعاملي مع بيانات بتتغير داخلياً بس عيبه إنه بيستهلك أداء المتصفح لو الكود تقيل.

## 173) What are HostListener and HostBinding?

### HostListener و HostBinding
- \`@HostListener\`: بيخلّيكي تسمعي وتراقبي الأحداث (Events) اللي بتحصل على العنصر المستضيف نفسه (زي مراقبة الضغط أو الـ Scroll).
- \`@HostBinding\`: بيخلّيكي تربطي خاصية في الـ HTML (زي الكلاس أو الـ style) لمتغير في الـ TS مباشرة، لو اتغير يتغير معاه في الـ DOM.

## 174) How do you create a custom Pipe?

### عمل Pipe مخصصة (Custom Pipe)
عشان تعملي Pipe بتنسيق مخصص من عندك:
1. بتنشئي كلاس وبتكتبي فوقه المزخرف \`@Pipe\` مع تحديد اسم الاستدعاء.
2. بتعملي implement لواجهة الـ \`PipeTransform\` وبتكتبي منطق التحويل جوة دالة الـ \`transform()\`.
3. بتستوردي الـ Pipe دي في المكون أو الموديل وتستخدميها بـ \`|\` جوة الـ HTML.

## 175) What is a Router Guard and what are its core types?

### حراس المسار وأنواعهم (Router Guards)
هي خدمات بتتحكم في صلاحيات دخول وخروج المستخدم من الصفحات:
- \`canActivate\`: بيحدد هل المستخدم مسموح له يدخل الصفحة دي ولا لأ.
- \`canDeactivate\`: بيسأل المستخدم لو عايز يخرج من الصفحة دي ولا لأ (زي تحذير بوجود فورم غير محفوظة).
- \`canMatch\`: بيحدد لو المسار ده متطابق ومسموح بتحميل الملفات بتاعته.

## 176) What is the structural difference between canActivate and canLoad?

### الفرق بين canActivate و canLoad
- \`canActivate\`: بيفحص الصلاحية *بعد* ما يكون المتصفح نزل كود الصفحة بالفعل. يعني الكود بيتحمل حتى لو الدخول اترفض.
- \`canLoad\`: بيمنع المتصفح من تحميل الكود الخاص بالصفحة الكسولة (Lazy Loaded Module) نهائياً لو المستخدم ملوش صلاحية، وده أفضل للأداء وحجم البيانات.

## 177) What is the difference between &lt;ng-container&gt; and &lt;ng-template&gt;?

### الفرق بين ng-container و ng-template
- \`<ng-container>\`: عنصر تنظيمي وهمي مش بيظهر خالص في الـ DOM النهائي، بنستخدمه عشان نجمع عناصر أو نحط عليه توجيهات من غير ما نبوظ الـ CSS بـ div زيادة.
- \`<ng-template>\`: قالب محتوى خفي مش بيظهر تلقائياً؛ بيستنى حد ينادي عليه برمجياً أو باستخدام توجيه زي الـ else في \`*ngIf\`.

## 178) What is the new Angular 17 Control Flow (@if, @for, @switch)?

### نظام التحكم الجديد في Angular 17
الـ Angular 17 جاب طريقة كتابة جديدة بالكامل ومدمجة لتوجيهات التحكم بدل التوجيهات القديمة:
- الشروط: \`@if (isActive) { } @else { }\` بدل \`*ngIf\`.
- التكرار: \`@for (user of users; track user.id) { }\` بدل \`*ngFor\`.
- يمتاز بأنه أسرع بـ 30% في الترجمة ومش بيحتاج تستوردي \`CommonModule\` في الـ Standalone.

## 179) What is the defer block in Angular 17+?

### البلوك @defer في Angular 17+
بلوك \`@defer\` هو واحد من أقوى مميزات Angular 17؛ بيسمح بتحميل المكونات التقيلة بشكل كسول وتأجيلها بناءً على محفزات (Triggers):
- المحفزات: \`on viewport\` لما تظهر في الشاشة، \`on hover\` لما الماوس ييجي عليها، \`on idle\` وقت الخمول.
- بيجي معاه بلوكات مساعدة: \`@placeholder\` (محتوى مؤقت)، \`@loading\` (أثناء التحميل)، \`@error\` (لو حصل فشل).

## 180) How does the OnPush change detection strategy optimize performance in Angular?

Default بيفحص كل التطبيق، بينما OnPush بيفحص الـ Component فقط لو اتغير الـ @Input أو حصل Event أو انبعثت قيمة من Observable مربوط بـ async pipe، مما يحسن الأداء جداً.

## 181) Why is using trackBy important in *ngFor (or the track expression in @for loops)?

### أهمية استخدام trackBy أو تعبير track
لما نحدث مصفوفة بيانات في قائمة:
- لو مش مستخدمة \`track\`، الـ Angular هيمسح كل عناصر القائمة من الـ DOM ويعيد بنائها بالكامل من الصفر، وده بيتقل الصفحة.
- باستخدام معرف فريد (مثل \`item.id\`)، المترجم هيعدل فقط العنصر اللي اتغير، ويسيب باقي عناصر الـ DOM بدون أي لمس.

## 182) What is the difference between Lazy Loading and Preloading in Angular?

### الفرق بين Lazy Loading و Preloading
- **Lazy Loading**: تحميل الموديل عند الطلب فقط لما المستخدم يدوس على اللينك المخصص.
- **Preloading**: تحميل الموديلات الكسولة في الخلفية بعد ما الموقع يفتح والصفحة الأساسية تخلص تحميل، بحيث لو المستخدم داس على اللينك يلاقي الصفحة تفتح معاه فوراً بدون أي انتظار.

## 183) How do Pure Pipes improve performance compared to calling methods directly in templates?

### فوائد أداء الـ Pure Pipes مقارنة بالدوال
مناداة دالة جوة الـ HTML template (مثل: \`{{ getPrice() }}\`) بيخليها تشتغل مع كل حركة ماوس أو نقرة كيبورد في الصفحة (أداء سيء).
الـ Pure Pipe بتحتفظ بالنتيجة كـ Cache ومش بتعيد الحساب إلا لو قيمة مدخلاتها اتغيرت فعلياً، وده بيوفر ملايين العمليات غير الضرورية.

## 184) How can RxJS operators like shareReplay prevent performance bottlenecks?

### التخزين المؤقت بـ shareReplay في RxJS
معامل \`shareReplay\` بيحول الـ Observable من Cold (بيشتغل من جديد مع كل مشترك) لـ Hot ومخزن للبيانات:
- مفيد جداً لحفظ استجابات طلبات الـ HTTP، بحيث لو كذا Component طلبوا نفس البيانات، الموقع يعمل طلب واحد بس للسيرفر ويوزع النتيجة المخزنة عليهم كلهم.


# 📌 Interview Scenarios

## 185) How would you design the architecture of a large-scale enterprise Angular application?

تعتمد على تنظيم التطبيق إلى Core Module للخدمات الأساسية، Shared Module للعناصر المشتركة، و Feature Modules للميزات المنفصلة مع استخدام الـ Lazy Loading لتحسين الأداء.

---

# 📌 ملحق الأسئلة الإضافية (CSS & JS)

## 186) How do you decide when to use local component state versus global state management?

### متى نستخدم Local State ومتى نستخدم Global State؟
سؤال نظام تصميم (System Design) شهير:
- **Local State**: البيانات المحفوظة جوة مكون واحد بس (زي إظهار/إخفاء قائمة منسدلة). استخدميها للمكونات المستقلة والـ inputs المؤقتة.
- **Global State**: البيانات المشتركة بين مكونات كتير ملهاش علاقة ببعض (زي بيانات تسجيل دخول المستخدم أو سلة المشتريات). بنستخدم لها أدوات زي Redux أو Signals.

## 187) Explain how you would architect a secure Authentication and Authorization flow.

### معمارية تسجيل الدخول والأمان (Authentication Architecture)
لتصميم تدفق أمان ممتاز في الواجهة الأمامية:
1. **حفظ الـ Tokens**: يفضل حفظ الـ Access Token في Cookie مشفرة نوعها HTTP-only لحمايتها من السرقة عبر ثغرات XSS، بدل الـ localStorage.
2. **حراس المسار (Route Guards)**: لمنع المستخدم غير المسجل من دخول صفحات الإدارة.
3. **المعترضات (Interceptors)**: لإضافة توكن الأمان تلقائياً في ترويسة (Header) كل طلب شبكة خارج.

## 188) If a web application is loading very slowly on 3G networks, what is your optimization strategy?

### استراتيجية تحسين الأداء على الشبكات الضعيفة (3G)
خطة عمل شاملة للأداء:
- **التحميل الكسول (Lazy Loading)**: تقسيم الكود بحيث لا يتم تحميل إلا الملفات المطلوبة للصفحة الحالية فقط.
- **تحسين الصور**: استخدام صيغ حديثة مثل WebP وتحديد مقاسات مختلفة عبر srcset.
- **التخزين المؤقت (Caching)**: تفعيل الـ Service Workers لحفظ الملفات الأساسية محلياً.
- **ضغط الملفات (Minification)** و مسح الأكواد غير المستخدمة (Tree shaking).

## 189) How do you design a robust, centralized error-handling system in a front-end application?

### نظام معالجة الأخطاء المركزي (Centralized Error Handling)
لبناء نظام تتبع ومعالجة أخطاء احترافي:
1. **معالج الأخطاء العالمي**: (مثل \`ErrorHandler\` في Angular) لالتقاط أي انهيار مفاجئ في الـ JS وعرض صفحة بديلة بدل تجمد الموقع.
2. **معترض الشبكة**: لالتقاط أخطاء الـ API (مثل 401 أو 500) وعرض تنبيهات Toast مناسبة للمستخدم.
3. **أدوات المراقبة**: ربط الواجهة بخدمة تتبع مثل Sentry لإرسال تقارير الأخطاء فوراً للمطورين.


`,
  en: String.raw`
# 🌐 Advanced Syllabus Detailed Explanations


# 📌 CSS Architecture

## 26. What is the difference between inline, internal, and external CSS?

### Detailed explanation for What is the difference between inline, internal, and external CSS?

Answer: <ul><li><b>Inline:</b> Directly written in the tag style attribute. Low scalability.</li><li><b>Internal:</b> Wrapped within a <code>&lt;style&gt;</code> element inside the HTML header.</li><li><b>External:</b> Linked standalone <code>.css</code> sheets. Optimal production design caching standard.</li></ul>

## 27. What is specificity?

### Detailed explanation for What is specificity?

Answer: The browser weight matching equation determining which CSS directive takes visual precedence when structural rules collide. Calculated via structural category points: Inline > IDs > Classes & Attributes > Base Elements.

## 28. What is the cascade?

### Detailed explanation for What is the cascade?

Answer: The fundamental waterfall mechanism prioritizing style rules based on structural importance flags, stylesheet source origin types, specificity values, and literal order declaration.

## 29. What is the Box Model?

### Detailed explanation for What is the Box Model?

Answer: The foundational geometric mapping layer wrapped over every node component grid, consisting of the core content volume outward through padding fields, edge borders, and margin gaps.

## 30. What is the difference between margin and padding?

### Detailed explanation for What is the difference between margin and padding?

Answer: <ul><li><b>Padding:</b> Expands inner element space, increasing internal breathing room within the border limits.</li><li><b>Margin:</b> Creates structural distance spacing boundaries outside of the element borders to isolate adjacent components.</li></ul>

## 31. What is display? And what are the differences between block / inline / inline-block / flex / grid?

### Detailed explanation for What is display? And what are the differences between block / inline / inline-block / flex / grid?

Answer: Defines node rendering layout contexts:<ul><li><code>block</code>: Full-width line breaker.</li><li><code>inline</code>: Fluid item flow, ignores bounding box heights.</li><li><code>inline-block</code>: Inline alignment while retaining box model padding/height manipulation capabilities.</li><li><code>flex</code>: Triggers 1-dimensional item layout flow manipulation.</li><li><code>grid</code>: Triggers a 2-dimensional system managing structured rows/columns simultaneously.</li></ul>

## 32. What is the difference between position: static / relative / absolute / fixed / sticky?

This is a core layout question:
- **static**: The default flow of the document.
- **relative**: Positioned relative to its normal position. The space it originally occupied remains reserved.
- **absolute**: Positioned relative to its closest positioned ancestor. It is removed from the normal document flow.
- **fixed**: Positioned relative to the browser viewport. It stays in the same place even if the page is scrolled.
- **sticky**: A hybrid value. The element toggles between relative and fixed depending on the scroll position.

## 33. What does z-index do?

### Detailed explanation for What does z-index do?

Answer: Alters the virtual layering coordinate along the depth rendering axis (Z-Axis). Requires a non-static position attribute configuration.

## 34. What is the difference between rem, em, and px?

### Detailed explanation for What is the difference between rem, em, and px?

Answer: <ul><li><code>px</code>: Absolute design pixel value. Static.</li><li><code>em</code>: Relative scale based on the local component font value configuration.</li><li><code>rem</code>: Scaled entirely off the root HTML font size (natively 16px). Essential for elastic layouts.</li></ul>

## 35. How does media query work?

Media queries allow you to apply specific CSS rules only when certain conditions about the user's device or viewport are met (e.g., max-width: 768px).

## 36. What is the function of justify-content / align-items / flex-direction / flex-wrap / align-content?

### Detailed explanation for What is the function of justify-content / align-items / flex-direction / flex-wrap / align-content?

Answer: <ul><li><code>justify-content</code>: Distributes flex items along the configured Main Axis tracking line.</li><li><code>align-items</code>: Aligns components along the secondary Cross Axis line.</li><li><code>flex-direction</code>: Sets the layout tracking line orientation (row vs column).</li><li><code>flex-wrap</code>: Permits flex items to shift onto multi-row levels if space caps clip.</li><li><code>align-content</code>: Aligns multi-row track levels inside the flex container wrapper space.</li></ul>

## 37. What is the difference between flex:1 and flex:auto?

### Detailed explanation for What is the difference between flex:1 and flex:auto?

Answer: <ul><li><code>flex: 1</code>: Shorthand for <code>flex: 1 1 0%</code>; dynamically stretches items to fill remaining empty space equally, bypassing initial content mass dimensions.</li><li><code>flex: auto</code>: Shorthand for <code>flex: 1 1 auto</code>; expands layout allocations but prioritizes inherent content base widths.</li></ul>

## 38. What is the difference between grid-template-rows and grid-template-columns?

### Detailed explanation for What is the difference between grid-template-rows and grid-template-columns?

Answer: <code>grid-template-columns</code> maps out the horizontal column tracks, while <code>grid-template-rows</code> defines the vertical row track bounds of a grid matrix layout.

## 39. What is the fr unit?

### Detailed explanation for What is the fr unit?

Answer: The Fraction Unit (<code>fr</code>) calculates fractional ratios of unallocated free structural layout real estate inside the grid matrix layout.

## 40. What is minmax()?

### Detailed explanation for What is minmax()?

Answer: A grid sizing function establishing a safe boundary threshold allowing an item grid track size to flex dynamically between an explicit minimum baseline up to an explicit maximum value cap.

## 41. What is the difference between repeat(), auto-fit, and auto-fill?

### Detailed explanation for What is the difference between repeat(), auto-fit, and auto-fill?

Answer: <ul><li><code>repeat()</code>: Eliminates manual duplication by generating structural tracks dynamically based on a pattern formula.</li><li><code>auto-fill</code>: Spawns as many tracks as possible into the container, even if the new grid tracks remain empty.</li><li><code>auto-fit</code>: Collapses empty unallocated grid tracks entirely down to 0px, flexing the active occupied columns to expand and fill the remaining space.</li></ul>

## 42. What is specificity hierarchy?

Specificity determines which CSS rule applies when multiple conflict. The scoring hierarchy is:
- Inline Styles: 1000 points
- IDs: 100 points
- Classes / Pseudo-classes: 10 points
- Elements / Pseudo-elements: 1 point
The rule with the highest total score wins.

## 43. What is the Stacking Context and why does it affect z-index?

A stacking context is an isolated layer-management environment on the Z-axis. When an element forms a stacking context (e.g., via position: relative with a z-index), all its children are contained within that layer. A child with z-index: 9999 cannot overlap an element outside if its parent's stacking context is lower.

## 44. How can you explicitly trigger or create a new Stacking Context?

A stacking context is an isolated layer-management environment on the Z-axis. When an element forms a stacking context (e.g., via position: relative with a z-index), all its children are contained within that layer. A child with z-index: 9999 cannot overlap an element outside if its parent's stacking context is lower.

## 45. What is the complete layout Stacking Order?

### The CSS Stacking Order
Within a stacking context, the browser paints elements in this order (from back to front):
1. Background and borders of the parent stacking context
2. Positioned descendants with z-index less than 0
3. Non-positioned block elements (like divs, paragraphs)
4. Non-positioned floating elements
5. Non-positioned inline elements (like text, spans, images)
6. Positioned elements with z-index: 0 or auto
7. Positioned elements with positive z-index (e.g., z-index: 1+)

## 46. What is the difference between ::before and ::after?

### ::before and ::after Pseudo-elements
These pseudo-elements inject virtual content into the page styling without adding code to your HTML document.
- \`::before\` inserts content before the element's actual content.
- \`::after\` inserts content after it.
Both require a \`content\` property (which can be an empty string \`""\`) to render.

## 47. What is calc()?

### The calc() Function
The \`calc()\` function lets you perform mathematical calculations to determine CSS property values.
- Supported operators: \`+\`, \`-\`, \`*\`, \`/\`.
- Key rule: You must put spaces around \`+\` and \`-\` operators (e.g., \`calc(100% - 20px)\`).
- Benefit: It allows you to mix different units, like subtracting absolute pixels from relative percentages.

## 48. What is clip-path?

### The clip-path Property
The \`clip-path\` property allows you to hide specific areas of an element by creating a clipping mask. Only the parts of the element inside the defined shape will remain visible.
- Commonly used shapes: \`circle()\`, \`ellipse()\`, \`polygon()\`, or a path referenced from an SVG.

## 49. What is the difference between transitions and animations?

- **Transitions:** Smoothly interpolate property changes between two states (e.g., on :hover).
- **Animations:** Use @keyframes to define multiple stages of motion that can run automatically and loop indefinitely without user interaction.

# 🟦 Bootstrap & Tailwind


# 📌 Bootstrap

## 50. What is Bootstrap and why do we use it?

### Detailed explanation for What is Bootstrap and why do we use it?

Answer: An open-source UI ecosystem featuring component templates designed for fast, standardized front-end layout prototyping.

## 51. What is the Bootstrap grid system?

A responsive, mobile-first 12-column layout system built on Flexbox. You use classes like col-md-6 to dictate that an element should span 6 out of 12 columns on medium screens and up.

## 52. What is the difference between col / col-sm / col-md / col-lg?

### Responsive Column Breakpoints in Bootstrap
Bootstrap uses breakpoints to determine column width based on the screen size:
- \`col-\`: Extra small screens (mobile, <576px)
- \`col-sm-\`: Small screens (tablets, &ge;576px)
- \`col-md-\`: Medium screens (desktops, &ge;768px)
- \`col-lg-\`: Large screens (larger desktops, &ge;992px)
If you apply \`col-md-6\`, it takes up 6 out of 12 columns only from medium screens upwards. On smaller screens, it will stack (100% width) by default.

## 53. What are the Bootstrap breakpoints?

### Bootstrap Breakpoints Reference
Bootstrap's grid is mobile-first and uses the following default media query breakpoints:
- **xs**: <576px
- **sm**: &ge;576px
- **md**: &ge;768px
- **lg**: &ge;992px
- **xl**: &ge;1200px
- **xxl**: &ge;1400px

## 54. What is the difference between container and container-fluid?

### container vs container-fluid
- \`.container\`: Creates a fixed-width centered container. It snaps to different maximum widths at each breakpoint (e.g., 1140px on large screens).
- \`.container-fluid\`: Spans 100% of the viewport width at all times, making it ideal for full-width headers or layouts.

## 55. How does the Modal work?

### Bootstrap Modals Under the Hood
Bootstrap Modals display content in an overlay box above the main page content:
- It uses a dark backdrop backdrop layer with a high \`z-index\` to overlay the document.
- It intercepts keyboard events (like pressing Esc to close) and handles focus trapping so the user doesn't accidentally tab to background elements while the modal is open.

## 56. How does the navbar work?

### Bootstrap Navbar Toggle Mechanism
The navbar utilizes standard CSS transitions combined with Bootstrap's collapse plugin:
- On mobile devices, target elements are hidden using \`display: none\` inside the collapsed state.
- Clicking the hamburger button dynamically adds/removes classes like \`.show\` and animates the \`height\` transition to smoothly show or hide navigation links.

## 57. What is the spacing system (m-1, p-3...)

### Spacing Utilities (m-*, p-*)
Bootstrap offers quick margin (\`m\`) and padding (\`p\`) utility classes:
- **First letter**: \`m\` for margin, \`p\` for padding.
- **Second letter (optional)**: \`t\` (top), \`b\` (bottom), \`s\` (start/left), \`e\` (end/right), \`x\` (horizontal), \`y\` (vertical).
- **Size**: Numbers from \`0\` to \`5\` (representing rem steps based on \`$spacer\` variable, natively \`1rem = 16px\`). E.g., \`mt-3\` is margin-top with 1rem.

## 58. What are the text and background colors (bg-primary, text-danger)

### Bootstrap Color Theme System
Bootstrap maps primary styles to standard semantic names:
- \`primary\`: Brand blue theme color
- \`secondary\`: Dark gray theme color
- \`success\`: Green color for successful actions
- \`danger\`: Red color for alerts or errors
- \`warning\`: Yellow color for warnings


# 📌 Tailwind CSS

## 59. What is Tailwind?

### What is Tailwind CSS?
Tailwind is a utility-first CSS framework. Rather than providing pre-styled components (like Bootstrap's \`.btn\`), it gives you thousands of low-level utility classes (like \`flex\`, \`pt-4\`, \`text-center\`, \`rounded-lg\`) to build entirely custom designs directly inside your HTML.

## 60. Why is it considered Utility-first?

Tailwind is a framework providing atomic, single-purpose CSS classes. Instead of writing a custom .btn class in CSS, you combine utilities directly in HTML like class="px-4 py-2 bg-blue-500 rounded". This prevents stylesheet bloat and speeds up UI building.

# 🟨 JavaScript

## 61. What is the difference between Tailwind and Bootstrap?

### Tailwind vs Bootstrap
- **Bootstrap**: Component-driven. Quick to get started but difficult to customize, resulting in many sites looking identical unless heavily overridden.
- **Tailwind**: Utility-driven. You write styling directly in HTML using individual classes. Highly customizable, producing smaller production builds because it purges unused classes.

## 62. What do classes like flex / items-center / justify-between / bg-blue-500 / text-xl mean?

### Common Tailwind Classes Explained
- \`flex\`: Sets display to flex.
- \`items-center\`: Centers flex items vertically (align-items: center).
- \`justify-between\`: Distributes items evenly (justify-content: space-between).
- \`bg-blue-500\`: Sets background color to a specific blue shade.
- \`text-xl\`: Increases font size to 1.25rem (20px) and adjusts line height.

## 63. How do responsive classes work in Tailwind?

### Tailwind Responsive Prefixes
Tailwind is mobile-first. Classes without a prefix apply to all screen sizes. To add responsive styles, prefix them with a breakpoint size:
- \`md:text-left\`: Aligns text to the left ONLY on medium screens (&ge;768px) and above.
- \`lg:grid-cols-3\`: Sets 3 grid columns on large screens (&ge;992px) and above.

## 64. What are arbitrary values?

### Arbitrary Values in Tailwind
If you need a specific custom value not available in Tailwind's default design system, you can use square brackets:
- \`w-[347px]\` generates \`width: 347px;\`
- \`bg-[#1da1f2]\` generates \`background-color: #1da1f2;\`
This gives you absolute design flexibility without forcing you to write custom CSS stylesheet overrides.

## 65. How does animation work in Tailwind?

### Tailwind Animations
Tailwind includes built-in animations out of the box:
- \`animate-spin\`: Rotates elements (ideal for loading spinners).
- \`animate-pulse\`: Fades opacity in and out (ideal for skeleton screens).
- \`animate-bounce\`: Bounces elements up and down (ideal for drawing attention).

## 66. What is the config file?

### The Tailwind Config File
The \`tailwind.config.js\` file is the core configuration hub:
- It defines your template files path so Tailwind can scan them and purge unused classes.
- It allows you to customize and extend the default theme (e.g., adding custom colors, font sizes, or screen breakpoints).

## 67. What does dark: mean?

### The dark: Variant
Tailwind features a native dark mode variant. Prefixing any utility class with \`dark:\` tells Tailwind to apply that styling only when dark mode is enabled on the client HTML tree (usually via a \`class="dark"\` selector on the root html element).
- E.g., \`bg-white dark:bg-gray-900\` transitions background color seamlessly.

## 68. How do you create a component using @apply?

### Using @apply in Tailwind
The \`@apply\` directive allows you to extract repetitive Tailwind classes into custom CSS files:
\`\`\`css
.btn-custom {
  @apply bg-blue-500 text-white rounded px-4 py-2;
}
\`\`\`
Use this sparingly to avoid bloating your CSS output and breaking utility workflow rules.


# 📌 SASS / SCSS

## 69. What is the difference between SASS and SCSS?

### SASS vs SCSS Syntaxes
- **SASS (Syntactically Awesome Style Sheets)**: The original syntax. It uses indentation instead of curly brackets and newlines instead of semicolons.
- **SCSS (Sassy CSS)**: The newer syntax. It matches standard CSS block structures, using curly braces and semicolons, making it completely backwards-compatible with normal CSS.

## 70. What are variables?

### Variables in SASS
Variables in SASS are declared using the dollar sign \`$\` operator. They store configuration values (like colors, sizes, fonts) for global reuse:
\`\`\`scss
$primary-color: #ff0055;
body { color: $primary-color; }
\`\`\`

## 71. What are mixins?

### Detailed explanation for What are mixins?

Answer: Reusable CSS presentation declaration groups capable of receiving dynamic argument logic: <pre><code>@mixin flexCenter($dir) {
  display: flex; flex-direction: $dir;
}</code></pre>

## 72. What are functions in SASS?

### Functions in SASS/SCSS
Functions in SASS perform custom math calculations and return a single value. They are defined using the \`@function\` directive:
\`\`\`scss
@function calculate-rem($px-size) {
  @return ($px-size / 16px) * 1rem;
}
.title { font-size: calculate-rem(32px); }
\`\`\`

## 73. What are nested rules?

### Nested Rules in SASS/SCSS
Nesting lets you structure your style code to match the hierarchical nesting of your HTML document, making it highly readable:
\`\`\`scss
nav {
  background: white;
  ul { list-style: none; }
  li { display: inline-block; }
}
\`\`\`

## 74. What is @extend?

### The @extend Directive
The \`@extend\` directive lets a selector share styles with another styled selector, outputting grouped selectors in the compiled CSS:
\`\`\`scss
.message-base { border: 1px solid gray; padding: 10px; }
.error-msg { @extend .message-base; border-color: red; }
\`\`\`

## 75. What is the function of Partial files?

### SASS Partials
Partials are smaller stylesheet files that won't compile into separate standalone CSS files. They are named with a leading underscore (e.g., \`_variables.scss\`). 
- The compiler ignores them until they are imported into a main file, which compiles into the final unified CSS bundle.

## 76. What do @import, @use, and @forward mean?

### @import vs @use vs @forward
- \`@import\`: The legacy way to load stylesheets. It loads all variables/mixins globally, which can cause scope collision errors.
- \`@use\`: The modern modular approach. It encapsulates loaded styles into a namespace (e.g., \`variables.$color\`).
- \`@forward\`: Acts as a conduit to make modular stylesheets accessible from higher levels in the file import pipeline.

## 77. Why is @use better than @import?

### Why @use is Better Than @import
1. **Encapsulation**: It creates namespaces, avoiding variable naming collisions.
2. **Performance**: Styles are loaded and compiled only once, even if imported multiple times.
3. **Traceability**: You can easily inspect where a variable or mixin comes from by looking at its namespace prefix.

## 78. What does Modules mean in SASS?

### Detailed explanation for What does Modules mean in SASS?

Answer: Encapsulated stylesheet layers containing specialized variable mappings, mixins, or functions that are imported strictly via namespace call commands using the modern <code>@use</code> directive.

## 79. How does SASS make CSS scalable?

### Scaling CSS with SASS
SASS makes stylesheets highly scalable by allowing architecture patterns like the **7-1 Pattern**:
- Organize code into 7 folders (base, components, layouts, pages, themes, abstracts, vendors) and 1 main file that imports all partials.
- This creates clean, modular, and maintainable styles for large-scale enterprise applications.

## 80. How to create a loop with @each?

### Loop Generation with @each
The \`@each\` directive loops through a list or a map to generate CSS styles dynamically, eliminating repetitive styling lines:
\`\`\`scss
$sizes: (small: 12px, large: 24px);
@each $name, $size in $sizes {
  .text-#{$name} { font-size: $size; }
}
\`\`\`


# 📌 JavaScript (ES6+)

## 81. What is the difference between var, let, and const?

- **var:** Function-scoped, can be redeclared, and is hoisted as undefined.
- **let:** Block-scoped, cannot be redeclared in the same scope, and is hoisted into the Temporal Dead Zone (TDZ).
- **const:** Block-scoped, requires immediate initialization, and cannot be reassigned (though objects/arrays declared with const can still have their contents mutated).

## 82. What is hoisting?

### Variable Hoisting in JavaScript
Hoisting is JS's behavior of moving declarations to the top of their enclosing scope before executing code:
- Variables declared with \`var\` are hoisted with an initial value of \`undefined\`.
- Variables declared with \`let\` and \`const\` are hoisted but NOT initialized, staying in the Temporal Dead Zone (TDZ). Calling them before declaration throws a ReferenceError.

## 83. What is the difference between == and ===?

### == vs === (Equality Operators)
- \`==\` (Loose Equality): Compares values for equality after performing type coercion (converting types if they are different). E.g., \`5 == "5"\` is \`true\`.
- \`===\` (Strict Equality): Compares both values and types without coercion. E.g., \`5 === "5"\` is \`false\` because one is a Number and the other is a String.

## 84. What are primitive types?

### Primitive Types in JavaScript
Primitives are immutable, raw data values stored directly in the stack memory:
- There are 7 primitive types: \`String\`, \`Number\`, \`Boolean\`, \`Null\`, \`Undefined\`, \`Symbol\`, and \`BigInt\`.
- When you assign a primitive, you copy the actual value.

## 85. What are reference types?

### Reference Types (Objects & Arrays)
Reference types are mutable, complex structures stored in the heap memory.
- They include \`Objects\`, \`Arrays\`, and \`Functions\`.
- Assigning a reference type does NOT copy the object; it only copies the memory reference pointer. Modifying the copy will modify the original object.

## 86. What is the difference between null and undefined?

### Detailed explanation for What is the difference between null and undefined?

Answer: <ul><li><code>undefined</code>: Variable declared but not assigned any initialization value yet.</li><li><code>null</code>: Explicit programmatic setting defining an intentional assignment value that represents the absence of any object value.</li></ul>

## 87. What is scope?

### Lexical Scope in JavaScript
Scope defines where variables are accessible:
- **Global Scope**: Accessible everywhere.
- **Function Scope**: Declared inside a function, accessible only within it.
- **Block Scope**: Declared inside \`{ }\` (e.g., inside if/for), enforced by \`let\` and \`const\`.

## 88. What is a closure?

### Closures in JavaScript
A closure is when an inner function retains access to the variables of its outer function even after the outer function has finished executing:
\`\`\`js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
\`\`\`

## 89. What is a callback function?

### Detailed explanation for What is a callback function?

Answer: A function passed into another execution process method as a parameter argument, intended to run upon the conclusion of that internal routine.

## 90. What are arrow functions?

### Arrow Functions (ES6)
Arrow functions provide a shorter syntax for writing functions. 
- Crucial difference: They do NOT bind their own \`this\`. Instead, they inherit \`this\` lexically from the surrounding parent code block.
- They also lack the \`arguments\` object and cannot be used as constructors.

## 91. What is the difference between function declaration and function expression?

### Function Declaration vs Function Expression
- **Function Declaration**: Hoisted completely. You can call the function before declaring it in the code.
\`\`\`js
log(); // Works!
function log() {}
\`\`\`
- **Function Expression**: Bound by variable hoisting rules. If assigned to a \`let\` or \`const\` variable, it is in the TDZ and cannot be called before it is declared.

## 92. What is this?

### Understanding the 'this' Keyword
In JavaScript, the value of \`this\` is determined by how the function is called (runtime binding):
- In a global context or regular function call, \`this\` refers to the window/global object (or \`undefined\` in strict mode).
- In a method call, \`this\` refers to the object owning the method.
- In arrow functions, \`this\` is bound lexically (inherited from enclosing block).

## 93. What is the difference between bind, call, and apply?

### bind, call, and apply
- \`call()\`: Invokes the function immediately, passing the \`this\` context as the first argument, followed by arguments listed individually.
- \`apply()\`: Invokes the function immediately, but accepts arguments as a single array.
- \`bind()\`: Returns a new function with the \`this\` context permanently locked, for execution at a later time.

## 94. What is Event Bubbling and Event Delegation?

### Event Bubbling and Event Delegation
- **Event Bubbling**: When an event is triggered on a DOM node, it propagates up through its parent elements to the root.
- **Event Delegation**: A pattern that utilizes bubbling by adding a single listener to a parent node to handle events for all existing and future children (by checking \`e.target\`).

## 95. What is the difference between map, filter, and reduce?

- **map:** Transforms each element and returns a new array of the same length.
- **filter:** Returns a new array containing only the elements that pass a given boolean test.
- **reduce:** Accumulates array values down to a single output value (e.g., summing numbers).

## 96. What is the difference between forEach and map?

### Detailed explanation for What is the difference between forEach and map?

Answer: <code>forEach()</code> iterates over elements to perform side effects but returns <code>undefined</code>. <code>map()</code> explicitly yields a new transformed array without altering the original array.

## 97. How do we copy an object without reference issues?

### Copying Objects (Shallow vs Deep)
To duplicate an object safely:
- **Shallow Copy** (spread operator \`{...obj}\` or \`Object.assign\`): Only copies top-level properties. Nested objects still share the same reference.
- **Deep Copy** (\`structuredClone(obj)\`): Creates a completely independent clone, copying all nested objects recursively.

## 98. What is the Event Loop?

The mechanism that handles asynchronous execution in JavaScript's single-threaded environment. It continuously monitors the Call Stack. When the stack is empty, it processes all tasks in the Microtask Queue (e.g., Promises) before moving to the Macrotask Queue (e.g., setTimeout).

## 99. What is the difference between synchronous and asynchronous?

### Synchronous vs Asynchronous
- **Synchronous**: Code is executed step-by-step in order. Each operation blocks execution until it completes.
- **Asynchronous**: Long-running operations (like network fetch or timers) are delegated to browser API threads, allowing the JS main thread to continue execution without blocking.

## 100. What is a Promise?

### Detailed explanation for What is a Promise?

Answer: An object representing the eventual resolution or failure of an asynchronous operation, existing in three states: <code>Pending</code>, <code>Fulfilled</code>, or <code>Rejected</code>.

## 101. What is the difference between async and await?

### Detailed explanation for What is the difference between async and await?

Answer: <code>async</code> flags a function to implicitly wrap its return value in a Promise. <code>await</code> pauses execution code processing inside that function until its target Promise resolves.

## 102. What is the fetch API?

The Fetch API is a modern, Promise-based JavaScript interface used to make asynchronous network requests to a server, providing a cleaner alternative to XMLHttpRequest.
\`
};

## 103. What is the difference between a Shallow Copy and a Deep Copy?

- **Shallow Copy**: Copies only the first-level properties. For nested objects, it copies the reference (e.g., using Spread Operator ...).
- **Deep Copy**: Creates a completely independent clone of the object and all of its deeply nested properties (e.g., using structuredClone(obj)).

## 104. What is the difference between microtasks and macrotasks in the JavaScript Event Loop, and in what order are they executed?

The mechanism that handles asynchronous execution in JavaScript's single-threaded environment. It continuously monitors the Call Stack. When the stack is empty, it processes all tasks in the Microtask Queue (e.g., Promises) before moving to the Macrotask Queue (e.g., setTimeout).

## 105. How does the tail-call optimization (TCO) work in ES6, and why is it not supported in most modern JavaScript engines?

### Tail-Call Optimization (TCO) in ES6
TCO allows a recursive function call at the very tail end of a function to be executed without allocating a new stack frame, preventing stack overflow. 
- Note: Although in the ES6 spec, most engines (except Apple's WebKit/Safari) do not implement it because it makes debugging and stack-trace inspecting difficult.

## 106. What are WeakMap and WeakSet in ESNext, and how do they differ from Map and Set regarding garbage collection?

### WeakMap and WeakSet
- In a normal \`Map\` or \`Set\`, objects are stored with strong references, preventing garbage collection.
- In a \`WeakMap\` or \`WeakSet\`, references to objects are held weakly. If there are no other references to an object, the garbage collector will automatically delete it, helping to avoid memory leaks. Keys must be objects.

## 107. What is the Temporal Dead Zone (TDZ) in JavaScript, and how does the engine enforce it at compile and execution time?

### The Temporal Dead Zone (TDZ)
The TDZ is the period of time from the start of a block scope until a variable declared with \`let\` or \`const\` is initialized. 
- During this window, the variable exists in memory but is uninitialized. Any attempt to read or write to it throws a \`ReferenceError\`.

## 108. How do JavaScript Generators and Async Iterators function under the hood, and how do they manage async control flows?

### Generators and Async Iterators
- **Generators** (\`function*\`): Functions that can pause and resume execution using the \`yield\` keyword.
- **Async Iterators**: Generators that yield Promises, allowing you to iterate over asynchronous data sources using the \`for await...of\` loop structure.


# 📌 TypeScript Engine

## 109. What is TypeScript?

### What is TypeScript?
TypeScript is an open-source programming language developed by Microsoft. It is a strict syntactical superset of JavaScript, adding optional static typing.
- Since browsers cannot run TypeScript directly, it compiles down to standard JavaScript.
- Benefit: It detects errors during compilation (compile-time) rather than during execution (runtime), making codebase refactoring safer.

## 110. What is the difference between any and unknown?

- **any:** Disables type checking completely. You can do anything with it (unsafe).
- **unknown:** A type-safe counterpart to any. You must explicitly check and narrow the type before you can perform operations on it.

## 111. What is the difference between type and interface?

- **interface:** Primarily used for declaring object shapes. Supports "declaration merging" (redeclaring it adds properties).
- **type:** Highly versatile alias used for intersections, unions (e.g., string | number), and primitives.

# 🅰️ Angular

## 112. What is a union type?

### Union Types
Union types allow a variable to hold one of several specified types, separated by the pipe symbol \`|\`:
\`\`\`ts
let id: string | number;
id = 123;      // OK
id = "abc";    // OK
\`\`\`
This provides flexibility while maintaining type safety.

## 113. What do generics mean?

### Generics in TypeScript
Generics allow you to create reusable code templates that work with different data types while retaining type safety:
\`\`\`ts
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
const numArr = getArray<number>([1, 2, 3]);
\`\`\`
The placeholder \`T\` is resolved dynamically when the function or class is invoked.

## 114. What is an enum?

### Enums in TypeScript
Enums (short for enumerations) allow you to define a set of named constants. This makes code more readable and self-documenting:
\`\`\`ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
\`\`\`

## 115. What does readonly mean?

### The readonly Modifier
The \`readonly\` keyword makes class properties or interface properties immutable after initialization:
- Attempts to modify a \`readonly\` property outside of the class constructor will trigger a compile-time error.

## 116. What is interface merging?

### Interface Merging
If you declare multiple interfaces with the exact same name in the same scope, TypeScript automatically merges their declarations into a single combined interface.
- This is useful when extending third-party libraries or plugin structures.

## 117. What is the difference between public / private / protected?

### Access Modifiers (public, private, protected)
TS controls class properties accessibility using keywords:
- \`public\` (default): Accessible from anywhere.
- \`private\`: Accessible ONLY inside the defining class.
- \`protected\`: Accessible inside the defining class and any derived subclasses.

## 118. What are decorators?

### Decorators in TypeScript
Decorators are special annotations that can be attached to class declarations, methods, properties, or parameters to modify their behavior at runtime.
- Note: Decorators are an experimental feature in TypeScript and are widely used in frameworks like Angular (e.g., \`@Component\`, \`@Injectable\`).

## 119. How does type inference work?

### Type Inference
Type inference means TypeScript automatically determines the type of a variable based on the value it was initialized with, even if you don't explicitly write the type.
\`\`\`ts
let name = "Malak"; // TS infers this as a string
\`\`\`

## 120. What are Utility Types in TypeScript (Partial, Pick, Omit, Record)?

### Detailed explanation for What are Utility Types in TypeScript (Partial, Pick, Omit, Record)?

Answer: Built-in type transformations: <ul><li><code>Partial&lt;T&gt;</code>: Makes all properties optional.</li><li><code>Pick&lt;T, Keys&gt;</code>: Extracts a specific set of properties to form a new type.</li><li><code>Omit&lt;T, Keys&gt;</code>: Constructs a type by excluding specific properties.</li><li><code>Record&lt;Keys, Type&gt;</code>: Creates an object type with specified keys mapped to a specific value type.</li></ul>


# 📌 Legacy jQuery

## 121. What is jQuery?

### What is jQuery?
jQuery is a legacy, fast, and concise JavaScript library created in 2006.
- It simplified HTML document traversing, event handling, animating, and Ajax interactions.
- Today, its usage has declined because modern browsers natively support standard APIs like \`querySelector\` and \`fetch\`.

## 122. What is the difference between hide() and remove()?

### Detailed explanation for What is the difference between hide() and remove()?

Answer: <ul><li><code>hide()</code>: Modifies inline styles to <code>display: none</code>, keeping the node in the DOM tree.</li><li><code>remove()</code>: Excises the target element and its event listeners from the DOM entirely.</li></ul>

## 123. What is AJAX in jQuery?

### AJAX in jQuery
jQuery simplifies asynchronous HTTP requests using helper methods like \`$.ajax()\`, \`$.get()\`, or \`$.post()\`. It handles cross-browser bugs internally, returning jQuery deferred objects for chaining.

## 124. How do we select an element?

### jQuery Element Selectors
jQuery uses CSS selectors wrapped inside the factory function \`$()\` to grab DOM elements:
- \`$(".menu")\` selects elements by class name.
- \`$("#header")\` selects elements by ID.
This returned a custom jQuery wrapper object containing extra helper methods.

## 125. What is the difference between document.ready and window.onload?

### $(document).ready() vs window.onload
- \`$(document).ready()\`: Fires as soon as the HTML document is parsed and the DOM tree is constructed. It does not wait for large resources like images to finish loading.
- \`window.onload\`: Fires later, waiting for the entire page to load, including all style sheets, images, and subframes.

## 126. Why has jQuery usage decreased?

### Detailed explanation for Why has jQuery usage decreased?

Answer: Modern browsers natively support clean standard selectors like <code>querySelectorAll</code> and APIs like <code>fetch</code>, alongside modern component frameworks.

## 127. What is the difference between on() and click()?

### jQuery on() vs click()
- \`click()\`: A shorthand event helper. It only binds events to DOM elements that are already present in the markup during page load.
- \`on()\`: A versatile event handler. It supports event delegation, allowing you to handle events on elements dynamically added to the page later.

## 128. How do fadeIn and fadeOut work?

### jQuery fadeIn() and fadeOut()
These visual methods animate the opacity of selected elements:
- \`fadeOut()\` decreases opacity to 0, then automatically sets \`display: none\` to clear the element from layout calculations.
- \`fadeIn()\` does the reverse.


# 📌 Angular Core

## 129. What is Angular?

### Detailed explanation for What is Angular?

Answer: A robust component-driven development framework by Google, engineered for compiling scalable, enterprise-grade single-page web applications.

## 130. What is the difference between SPA and MPA?

### SPA (Single Page Application) vs MPA (Multi-Page Application)
- **SPA**: Loads a single HTML shell page. Clicking links dynamically updates the DOM using client-side routing (e.g. Angular Router) without reloading the page. Provides smooth, app-like transitions.
- **MPA**: Navigating to a new route triggers a full page refresh, requesting a brand new HTML document from the server. Suitable for content-heavy sites (like blogs or e-commerce) where SEO is crucial.

## 131. What is a Component?

### Detailed explanation for What is a Component?

Answer: The primary building block of an Angular view layer, uniting an HTML layout template, styling layers, and a TypeScript logic class.

## 132. What are the parts of a Component?

### Anatomy of an Angular Component
An Angular component consists of four core parts:
1. **TypeScript Class**: Contains the logic, state data, and event handler methods.
2. **HTML Template**: Defines the visual layout and structure of the view.
3. **CSS Styles**: Scoped styles that only apply to this component's HTML.
4. **@Component Decorator**: Metadata that binds the template, style, and selector together.

## 133. What are Modules?

### Angular Modules (NgModule)
An \`NgModule\` is a container that groups related components, directives, pipes, and services:
- \`declarations\`: Component, directives, and pipes belonging to this module.
- \`imports\`: Other modules whose exported components are needed in this module's templates.
- \`providers\`: Services that this module makes available to the dependency injector.
- \`exports\`: Elements that should be visible to other modules importing this one.

## 134. What are the types of Data Binding?

### Types of Data Binding in Angular
Data binding synchronizes data between the component class (TS) and the view (HTML):
1. **Interpolation** (\`{{ value }}\`): One-way from TS to HTML. Renders text.
2. **Property Binding** (\`[property]="value"\`): One-way from TS to DOM properties.
3. **Event Binding** (\`(event)="method()"\`): One-way from HTML events to TS methods.
4. **Two-Way Binding** (\`[(ngModel)]="property"\`): Synchronizes state instantly between input controls and TS variables.

## 135. What is a Directive?

### What is an Angular Directive?
Directives are classes that add extra behavior to elements in your Angular applications:
- **Component**: A directive with a template (defines a view).
- **Structural Directives**: Alter the DOM layout by adding, removing, or replacing elements (e.g., \`*ngIf\`, \`*ngFor\`).
- **Attribute Directives**: Change the appearance or behavior of an existing element (e.g., \`ngClass\`, \`ngStyle\`).

## 136. What are the types of Directives?

- **Components:** Directives with a template.
- **Structural:** Change the DOM structure (e.g., *ngIf, *ngFor).
- **Attribute:** Change appearance or behavior (e.g., ngClass, ngStyle).

## 137. Explain: *ngIf / *ngFor / *ngSwitch

### Structural Directives: *ngIf, *ngFor, and *ngSwitch
- \`*ngIf\`: Conditionally adds or removes elements from the DOM tree based on a boolean value.
- \`*ngFor\`: Loops through an array and instantiates a template block for each item.
- \`*ngSwitch\`: Displays one element from a choice of nested templates based on a switch key value.

## 138. Explain ngClass and ngStyle

### Dynamic Styling with ngClass and ngStyle
- \`ngClass\`: Expects an object, array, or string. When passing an object, keys represent CSS classes, and values are booleans determining whether that class should be active: \`[ngClass]="{'active': isActive}"\`.
- \`ngStyle\`: Evaluates expressions to apply inline CSS styles dynamically: \`[ngStyle]="{'color': isError ? 'red' : 'blue'}"\`.

## 139. What is a service?

### Angular Services
A service is a class designed to encapsulate shared business logic, data caching state, or external API networking code:
- This separation of concerns ensures components remain slim, focusing only on presenting data to the user.
- Services are typically singletons (one instance shared application-wide) handled by Angular's dependency injection container.

## 140. What is Dependency Injection?

A service is a reusable class for business logic and API calls. Dependency Injection (DI) is the design pattern Angular uses to automatically instantiate and provide these services to components through their constructors.

## 141. What is Services Scope?

### Dependency Injection Services Scope
Angular supports hierarchical dependency injection:
- \`providedIn: 'root'\`: Creates a single application-wide singleton service.
- Component-level (\`providers: [...]\`): Instantiates a unique instance of the service scoped only to that component and its children. The instance is destroyed when the component is destroyed.

## 142. Name the most important Lifecycle Hooks

Key hooks include: ngOnInit (runs once after inputs initialize), ngOnChanges (runs when an @Input value changes), and ngOnDestroy (runs before cleanup to prevent memory leaks).

## 143. What is the role of ngOnInit?

### The ngOnInit Life Cycle Hook
\`ngOnInit\` is invoked once after Angular has initialized all data-bound input properties of a component:
- It is the standard place to execute initialization tasks, such as calling services to fetch data from a backend server.

## 144. What is the role of ngOnChanges?

### The ngOnChanges Life Cycle Hook
\`ngOnChanges\` fires before \`ngOnInit\` and whenever any data-bound input properties (\`@Input\`) change.
- It receives a \`SimpleChanges\` object containing the current and previous values of the modified properties, allowing you to react programmatically.

## 145. What is RouterModule?

### RouterModule and Client Routing
The \`RouterModule\` is responsible for enabling navigation between different component views based on the client browser URL path:
- It maps paths to components, such as \`{ path: 'profile', component: ProfileComponent }\`.
- Renders the active component dynamically inside the \`<router-outlet></router-outlet>\` container.

## 146. What is lazy loading?

### Lazy Loading Feature Modules
Lazy loading is an optimization technique that loads feature modules only when their specific route is navigated to:
- Benefit: It drastically reduces the initial bundle size of the application, speeding up initial page load times.
- Implemented in routing configurations using \`loadChildren\` or \`loadComponent\` dynamic imports.

## 147. What is the difference between routerLink and Maps()?

### routerLink vs Router.navigate()
- \`routerLink\`: A directive used directly in HTML templates to trigger navigation on anchor tags: \`<a routerLink="/home">Home</a>\`. It handles SEO and link nesting properly.
- \`Router.navigate()\`: A programmatic navigation method triggered inside TypeScript logic: \`this.router.navigate(['/dashboard'])\`, useful after processing actions like form submissions.

## 148. What is the difference between Template-driven and Reactive forms?

Template-driven forms rely heavily on HTML and two-way data binding (good for simple forms). Reactive forms are built programmatically in TypeScript, offering better control and validation for complex scenarios.

## 149. What are FormGroup and FormControl?

### Reactive Forms: FormGroup and FormControl
- \`FormControl\`: Tracks the value, validation criteria, and validation status of an individual input element.
- \`FormGroup\`: Groups multiple FormControls into a single unified container, tracking their collective values and validation statuses.

## 150. What are Validators?

### Form Validation with Validators
Angular provides built-in \`Validators\` to assert validation rules on \`FormControl\` instances:
- Common validators: \`Validators.required\`, \`Validators.minLength(5)\`, \`Validators.email\`.
- If criteria fail, the control is flagged as invalid, exposing errors to the template layout.

## 151. How do we use HttpClient?

### HTTP Requests with HttpClient
The \`HttpClient\` service communicates with remote backends over HTTP:
- It returns RxJS Observables instead of Promises.
- It handles response parsing automatically (default is JSON) and supports request interception.

## 152. What is an interceptor?

### HTTP Interceptors
Interceptors intercept and inspect outgoing HTTP requests or incoming HTTP responses globally:
- Common use cases: Automatically appending auth bearer tokens to headers, logging request metrics, or globally handling network failure toast alerts.

## 153. What is an Observable?

### RxJS Observables
An Observable represents a stream of data events over time that you can subscribe to:
- Unlike Promises, which resolve only once, an Observable can emit multiple values asynchronously.
- Observables are lazy; they do not execute until you call \`.subscribe()\` on them.

## 154. What is the difference between Subject and BehaviorSubject?

### Subject vs BehaviorSubject in RxJS
Both are hot observables that can multicast to multiple observers:
- **Subject**: Does not store the current value. Late subscribers will only receive values emitted AFTER they subscribe.
- **BehaviorSubject**: Requires an initial value and stores the latest emitted value. Late subscribers instantly receive the stored value upon subscribing.

## 155. What are switchMap and mergeMap?

### switchMap vs mergeMap in RxJS
- \`switchMap\`: Flattens a stream but cancels any previous ongoing inner observables if a new value arrives. Best for search autocompletes.
- \`mergeMap\`: Flattens streams and processes all emissions concurrently without cancellation. Best for independent write actions.

## 156. What is a signal?

### Angular Signals
Introduced in Angular 16, a **Signal** is a reactive primitive wrapper representing a value that notifies consumers whenever it changes:
- It enables fine-grained reactivity, updating only the specific DOM nodes that depend on the signal rather than running global change detection.
- Read it as a getter function: \`mySignal()\`.

## 157. What is the difference between signal and BehaviorSubject?

### Signals vs BehaviorSubject
- **BehaviorSubject**: Requires RxJS dependencies, demands manual subscription management, and updates via global change detection checks.
- **Signals**: Native Angular primitives that don't need manual unsubscribing, update only dependent DOM cells, and use simple call syntax \`state()\` without RxJS boilerplate.

## 158. What does computed mean?

### Computed Signals
A computed signal represents a read-only reactive value derived from other signals:
\`\`\`ts
const count = signal(3);
const double = computed(() => count() * 2);
\`\`\`
Computed signals are lazily evaluated and cached; they only re-evaluate when their dependency signals change.

## 159. What does effect mean?

### The effect() Function in Signals
An \`effect()\` is a function that runs code whenever its dependency signals change:
\`\`\`ts
effect(() => console.log('Current theme:', theme()));
\`\`\`
Use effects for side effects, such as writing values to localStorage or interacting with external non-Angular libraries.

## 160. Signals vs Observables

Observables (via RxJS) are excellent for asynchronous events and streams. Signals are Angular's modern reactive primitive for managing synchronous UI state with fine-grained reactivity.

## 161. How do you cleanly unsubscribe from Observables in modern Angular?

### Unsubscribing in Angular
Failing to unsubscribe from Observables leads to memory leaks:
1. **Async Pipe** (\`| async\`): Automatically handles subscription and unsubscription inside HTML templates.
2. **takeUntilDestroyed()**: Modern Angular 16 operator to bind unsubscription to the component lifecycle.
3. **take(1)**: Automatically unsubscribes after emitting the first value.

## 162. What is the difference between forkJoin and combineLatest in RxJS?

### combineLatest vs forkJoin in RxJS
- \`combineLatest\`: Emits a value whenever *any* of the source Observables emits, providing the latest values from each.
- \`forkJoin\`: Acts like Promise.all. It waits for *all* source Observables to complete, then emits a single array of the final emitted values.

## 163. What is Hydration in Angular?

### Client Hydration in Angular
Hydration is the process where Angular runs on the client and adopts the static HTML document rendered by the server (SSR):
- Instead of wiping and rebuilding the DOM, it attaches event listeners to the existing HTML, improving performance and avoiding page flickering.

## 164. What is Incremental Hydration?

### Incremental Hydration
Incremental Hydration is an advanced rendering strategy that hydrates different sections of the page lazily as they enter the viewport or are interacted with, rather than hydrating the entire document at once.

## 165. What is Change Detection and how does its hierarchy function?

Default checks the entire component tree. OnPush optimizes this by only checking the component when an @Input reference changes, an event is triggered locally, or an async pipe emits a new value.

## 166. What is the structural difference between JIT and AOT compilation?

### JIT vs AOT Compilation
- **JIT (Just-In-Time) Compiler**: Compiles the TypeScript application in the browser at runtime. Leads to larger load bundles and slower initial paints.
- **AOT (Ahead-Of-Time) Compiler**: Compiles your templates and components during the build phase before the browser downloads the code. Ideal for production.

## 167. What are the main performance benefits of AOT over JIT?

### Performance Benefits of AOT
1. **Faster Rendering**: Browsers download pre-compiled executable JS code directly.
2. **Smaller Download Size**: The Angular compiler itself is excluded from the client download bundle.
3. **Security**: Templates are parsed into code, reducing opportunities for injection attacks.

## 168. What is the difference between Default and OnPush Change Detection?

Default checks the entire component tree. OnPush optimizes this by only checking the component when an @Input reference changes, an event is triggered locally, or an async pipe emits a new value.

## 169. What are Standalone Components?

A modern architecture choice in Angular that removes the need for NgModules. Standalone components import their own dependencies directly, simplifying application structure.

## 170. What is ViewEncapsulation?

### ViewEncapsulation Options
ViewEncapsulation dictates how CSS styles are scoped inside components:
1. **Emulated** (default): Modifies styling selectors by appending unique attributes (e.g. \`_ngcontent-c12\`) to scope styles.
2. **ShadowDom**: Uses native browser Shadow DOM, isolating styles completely.
3. **None**: Styles are injected globally, affecting the entire application.

## 171. What is the difference between ViewChild and ContentChild?

### ViewChild vs ContentChild
- \`@ViewChild\`: Used to access elements, directives, or child components that exist inside this component's own HTML template.
- \`@ContentChild\`: Used to access elements projected into this component via content projection (\`<ng-content></ng-content>\`).

## 172. What is the difference between a pure and impure pipe?

### Pure vs Impure Pipes
- **Pure Pipe** (default): Re-evaluates only when the input reference value changes. Highly performant because of input caching.
- **Impure Pipe**: Executes on every change detection cycle, regardless of whether inputs modified. Useful for tracking internal object modifications but can cause severe performance issues.

## 173. What are HostListener and HostBinding?

### HostListener and HostBinding
- \`@HostListener\`: Binds a DOM event on the host element to a component method (e.g., listening for window scrolls).
- \`@HostBinding\`: Binds a host element property (like a CSS class or attribute) to a class property in TypeScript dynamically.

## 174. How do you create a custom Pipe?

### Creating a Custom Pipe
To build a custom formatting pipe:
1. Decorate a class with \`@Pipe({ name: 'myPipe' })\`.
2. Implement the \`PipeTransform\` interface and define its \`transform(value: any, ...args: any[])\` method.
3. Register the pipe in your component imports or module declarations.

## 175. What is a Router Guard and what are its core types?

### Router Guards and Types
Router guards control navigation access to specific routes:
- \`canActivate\`: Decides if a route can be activated.
- \`canActivateChild\`: Decides if child routes can be activated.
- \`canDeactivate\`: Decides if the user can leave the current active route (e.g., warning about unsaved form changes).
- \`canMatch\`: Decides if a route matches and can be loaded (replaces \`canLoad\`).

## 176. What is the structural difference between canActivate and canLoad?

### canActivate vs canLoad
- \`canActivate\`: Checks permissions *after* the module code has been downloaded. Even if access is denied, the code bundle is still loaded by the client browser.
- \`canLoad\`: Prevents the browser from downloading lazy-loaded feature modules entirely if the user lacks access credentials. (In modern Angular, use \`canMatch\` instead).

## 177. What is the difference between &lt;ng-container&gt; and &lt;ng-template&gt;?

### <ng-container> vs <ng-template>
- \`<ng-container>\`: A logical grouping element that does not render in the DOM tree, avoiding extra wrapper divs.
- \`<ng-template>\`: A template block that does not render itself until referenced and instantiated (e.g. by an \`*ngIf="...; else temp"\` configuration or dynamic component loading).

## 178. What is the new Angular 17 Control Flow (@if, @for, @switch)?

### Angular 17 Built-In Control Flow
Angular 17 introduced a new declarative control flow syntax that replaces traditional structural directives:
- **Conditionals**: \`@if (condition) { ... } @else { ... }\`
- **Loops**: \`@for (item of items; track item.id) { ... } @empty { ... }\`
- **Switch**: \`@switch (value) { @case ('a') { ... } }\`
It is faster to compile and does not require importing \`CommonModule\`.

## 179. What is the defer block in Angular 17+?

### The @defer Block in Angular 17+
The \`@defer\` block enables declarative lazy loading of component views:
- It fetches and renders dependencies (like heavy child components) only when specified triggers occur (e.g., \`on viewport\`, \`on idle\`, \`on hover\`, \`when condition\`).
- It comes with built-in states: \`@placeholder\`, \`@loading\`, and \`@error\`.

## 180. How does the OnPush change detection strategy optimize performance in Angular?

Default checks the entire component tree. OnPush optimizes this by only checking the component when an @Input reference changes, an event is triggered locally, or an async pipe emits a new value.

## 181. Why is using trackBy important in *ngFor (or the track expression in @for loops)?

### The Importance of trackBy / track Expressions
When data arrays update, Angular re-renders DOM elements:
- Without \`trackBy\` (or \`track\` in \`@for\`), Angular destroys and recreates the entire DOM list, causing performance hits.
- By providing a unique identifier (like \`item.id\`), Angular only adds, removes, or moves the modified items, keeping unmodified DOM nodes untouched.

## 182. What is the difference between Lazy Loading and Preloading in Angular?

### Lazy Loading vs Preloading
- **Lazy Loading**: Loads modules on demand when navigating to their respective routes. Saves bandwidth.
- **Preloading**: Downloads lazy-loaded modules in the background *after* the initial application has booted up, so there is zero transition delay when the user clicks.

## 183. How do Pure Pipes improve performance compared to calling methods directly in templates?

### Performance Advantages of Pure Pipes
Methods called inside templates (\`{{ myMethod() }}\`) execute on every single change detection cycle (e.g., mouse moves, keypresses). Pure Pipes, however, cache results and only execute when their input arguments reference values change, avoiding heavy recalculation loops.

## 184. How can RxJS operators like shareReplay prevent performance bottlenecks?

### Caching with the shareReplay Operator
\`shareReplay\` transforms a cold observable into a hot one, caching the latest emitted values:
- This is incredibly useful for caching HTTP requests, so multiple components subscribing to the same data service trigger only one backend network request instead of multiple duplicate requests.


# 📌 Interview Scenarios

## 185. How would you design the architecture of a large-scale enterprise Angular application?

A common enterprise structure uses a Core Module for singleton services, a Shared Module for common UI elements, and distinct Feature Modules mapped to Lazy-loaded routes to optimize the initial bundle size.

---

# 📌 Additional Essential Scenarios (CSS & JS)

## 186. How do you decide when to use local component state versus global state management?

### Local vs Global State Management
- **Local State**: Kept inside a single component (e.g., using React's useState or Angular's local property). Use this for UI toggle flags, local form inputs, or temporary states.
- **Global State**: Accessible by multiple unrelated components (e.g., Redux, NgRx, Signals). Use this for shared user authentication info, global theme configurations, or shopping cart items.

## 187. Explain how you would architect a secure Authentication and Authorization flow.

### Secure Front-End Auth Flow
A secure front-end authentication architecture involves:
1. Storing access tokens safely: It's best to store session tokens in an HTTP-only cookie to prevent XSS theft, rather than in localStorage.
2. Utilizing Route Guards to intercept and check authentication states before rendering restricted views.
3. Automatically appending tokens to outgoing network requests using HTTP Interceptors.

## 188. If a web application is loading very slowly on 3G networks, what is your optimization strategy?

### Web App Performance Optimization for Slow Networks (3G)
Optimization checklist:
- Code-splitting and Lazy Loading: Download only the code needed for the active page.
- Image Optimizations: Deploy modern formats (like WebP) and responsive srcset targets.
- Client Caching: Implement service workers and progressive web app (PWA) cache headers.
- Minimizing resource payloads (tree shaking, minify CSS/JS).

## 189. How do you design a robust, centralized error-handling system in a front-end application?

### Centralized Error Handling System
A robust centralized error management architecture uses:
1. Global Error Handlers (like Angular's \`ErrorHandler\` class) to catch unhandled runtime crashes.
2. HTTP Interceptors to catch network failures (like 401 Unauthorized, 500 Server Error) and display toast notifications.
3. Log forwarding: Sending critical error logs to remote logging services (like Sentry) for real-time monitoring.


`
};
