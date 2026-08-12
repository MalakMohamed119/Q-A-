window.SUPPLIED_ARABIC_STUDY_CONTENT = String.raw`n40. Ù…Ø§ Ù‡ÙŠ minmax()ØŸ

minmax() Ù‡ÙŠ Function ÙÙŠ CSS Grid Ø¨ØªØ­Ø¯Ø¯ Ø£Ù‚Ù„ ÙˆØ£Ù‚ØµÙ‰ Ø­Ø¬Ù… Ù…Ù…ÙƒÙ† Ù„Ù„Ù€Column Ø£Ùˆ Row.

grid-template-columns: minmax(200px, 1fr);

Ù…Ø¹Ù†Ø§Ù‡Ø§:

Ø£Ù‚Ù„ Ø¹Ø±Ø¶ Ù„Ù„Ù€Column = 200px
Ù…Ù…ÙƒÙ† ÙŠÙƒØ¨Ø± Ù„Ø­Ø¯ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…ØªØ§Ø­Ø© 1fr

ÙŠØ¹Ù†ÙŠ Ø¨Ø¨Ø³Ø§Ø·Ø©:

"Ø®Ù„ÙŠÙ‡ Ù…Ø§ ÙŠØµØºØ±Ø´ Ø¹Ù† 200pxØŒ Ù„ÙƒÙ† Ù„Ùˆ ÙÙŠÙ‡ Ù…Ø³Ø§Ø­Ø© Ø®Ù„ÙŠÙ‡ ÙŠÙƒØ¨Ø±."

41. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† repeat() Ùˆauto-fit Ùˆauto-fillØŸ
repeat()

Ø¨Ø¯Ù„ Ù…Ø§ Ø£ÙƒØ±Ø± Ù†ÙØ³ Ø§Ù„Ù€Columns ÙŠØ¯ÙˆÙŠÙ‹Ø§:

grid-template-columns: 1fr 1fr 1fr;

Ø£Ù‚Ø¯Ø± Ø£ÙƒØªØ¨:

grid-template-columns: repeat(3, 1fr);

ÙŠØ¹Ù†ÙŠ ÙƒØ±Ø± 1fr Ø«Ù„Ø§Ø« Ù…Ø±Ø§Øª.

auto-fill

ØªØ­Ø§ÙˆÙ„ ØªØ­Ø· Ø£ÙƒØ¨Ø± Ø¹Ø¯Ø¯ Ù…Ù…ÙƒÙ† Ù…Ù† Ø§Ù„Ù€Columns Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø³Ø§Ø­Ø©ØŒ Ø­ØªÙ‰ Ù„Ùˆ Ø¨Ø¹Ø¶ Ø§Ù„Ù€Columns Ø§Ù„Ù†Ø§ØªØ¬Ø© ÙØ§Ø¶ÙŠØ©.

auto-fit

ØªØ­Ø§ÙˆÙ„ ØªØ­Ø· Ø£ÙƒØ¨Ø± Ø¹Ø¯Ø¯ Ù…Ù…ÙƒÙ† Ø£ÙŠØ¶Ù‹Ø§ØŒ Ù„ÙƒÙ† Ø§Ù„Ù€Columns Ø§Ù„ÙØ§Ø¶ÙŠØ© Ø¨ØªØ®ØªÙÙŠØŒ ÙˆØ§Ù„Ù€Columns Ø§Ù„Ù…ÙˆØ¬ÙˆØ¯Ø© ØªØªÙ…Ø¯Ø¯ Ù„ØªØ³ØªØºÙ„ Ø§Ù„Ù…Ø³Ø§Ø­Ø©.

auto-fill â†’ ÙŠØ­ØªÙØ¸ Ø¨Ø§Ù„Ø£Ù…Ø§ÙƒÙ† Ø§Ù„ÙØ§Ø¶ÙŠØ©
auto-fit  â†’ ÙŠÙ„ØºÙŠ Ø§Ù„Ø£Ù…Ø§ÙƒÙ† Ø§Ù„ÙØ§Ø¶ÙŠØ© ÙˆÙŠÙƒØ¨Ø± Ø§Ù„Ù…ÙˆØ¬ÙˆØ¯

42. Ù…Ø§ Ù‡ÙŠ Specificity HierarchyØŸ

Ù‡ÙŠ Ø§Ù„Ù‚Ø§Ø¹Ø¯Ø© Ø§Ù„ØªÙŠ ÙŠØ­Ø¯Ø¯ Ø¨Ù‡Ø§ CSS Ø£ÙŠ Style ÙŠÙÙˆØ² Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙƒÙˆÙ† Ù‡Ù†Ø§Ùƒ Ø£ÙƒØ«Ø± Ù…Ù† Rule ÙŠØ¤Ø«Ø± Ø¹Ù„Ù‰ Ù†ÙØ³ Ø§Ù„Ø¹Ù†ØµØ±.

Ø§Ù„ØªØ±ØªÙŠØ¨:

Inline Style
     â†“
ID
     â†“
Class / Pseudo-class
     â†“
Element

ÙˆØ¨Ø§Ù„Ø£Ø±Ù‚Ø§Ù…:

Inline       â†’ 1000
ID           â†’ 0100
Class        â†’ 0010
Element      â†’ 0001

Ù…Ø«Ù„Ø§Ù‹:

#title {
    color: red;
}

.title {
    color: blue;
}

Ø§Ù„Ù€ID ÙŠÙÙˆØ²ØŒ Ù„Ø£Ù† Specificity Ø¨ØªØ§Ø¹Ù‡ Ø£Ø¹Ù„Ù‰.

43. Ù…Ø§ Ù‡Ùˆ Stacking ContextØŸ ÙˆÙ„Ù…Ø§Ø°Ø§ ÙŠØ¤Ø«Ø± Ø¹Ù„Ù‰ z-indexØŸ

ØªØ®ÙŠÙ„ÙŠ Ø¥Ù† Ø§Ù„ØµÙØ­Ø© Ø¹Ø¨Ø§Ø±Ø© Ø¹Ù† Ù…Ø¬Ù…ÙˆØ¹Ø§Øª Ù…Ù† Ø§Ù„Ø·Ø¨Ù‚Ø§Øª.

ÙƒÙ„ Stacking Context Ø¹Ø¨Ø§Ø±Ø© Ø¹Ù† Ù…Ø³Ø§Ø­Ø© Ø®Ø§ØµØ© ÙŠØªÙ… ØªØ±ØªÙŠØ¨ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„Ù…ÙˆØ¬ÙˆØ¯Ø© Ø¨Ø¯Ø§Ø®Ù„Ù‡Ø§ ÙÙˆÙ‚ Ø¨Ø¹Ø¶.

Ø§Ù„Ù…Ù‡Ù… Ø¬Ø¯Ù‹Ø§:

Ù„Ùˆ Ø¹Ù†ØµØ± Parent Ù…ÙˆØ¬ÙˆØ¯ ÙÙŠ Stacking Context Ù…Ù†Ø®ÙØ¶ØŒ ÙØ§Ù„Ù€Child Ø¨ØªØ§Ø¹Ù‡ Ù…Ø´ Ù‡ÙŠÙ‚Ø¯Ø± ÙŠØ®Ø±Ø¬ Ù…Ù† Ø§Ù„Ù€Context Ø¯Ù‡ Ø­ØªÙ‰ Ù„Ùˆ Ø£Ø¹Ø·ÙŠÙ†Ø§Ù‡:

z-index: 9999;

ÙŠØ¹Ù†ÙŠ:

Parent Context â†’ z-index Ù…Ù†Ø®ÙØ¶

     Child â†’ z-index: 9999

Ø§Ù„Ù€Child ÙŠØ¸Ù„ Ù…Ø­Ø¯ÙˆØ¯Ù‹Ø§ Ø¯Ø§Ø®Ù„ Ø§Ù„Ù€Parent Context.

44. ÙƒÙŠÙ ÙŠÙ…ÙƒÙ† Ø¥Ù†Ø´Ø§Ø¡ Stacking Context Ø¬Ø¯ÙŠØ¯ØŸ

Ø­Ø³Ø¨ Ø§Ù„Ù…Ù„ÙØŒ Ù…Ù† Ø§Ù„Ø·Ø±Ù‚:

position: relative;
z-index: 1;

Ø£Ùˆ:

position: absolute;
z-index: 1;

ÙˆÙƒØ°Ù„Ùƒ:

position: fixed;

Ø£Ùˆ:

position: sticky;

ÙˆØ£ÙŠØ¶Ù‹Ø§:

opacity: 0.99;

Ø£Ùˆ:

transform: scale(1);

ÙˆÙƒØ°Ù„Ùƒ:

isolation: isolate;

ÙÙƒØ±Ø© isolation: isolate ØªØ­Ø¯ÙŠØ¯Ù‹Ø§ Ø¥Ù†Ù‡Ø§ ØªØ¹Ù…Ù„ Stacking Context Ù…Ø³ØªÙ‚Ù„.

45. Ù…Ø§ Ù‡Ùˆ Stacking OrderØŸ

Ù‡Ùˆ ØªØ±ØªÙŠØ¨ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ù…Ù† Ø§Ù„Ø®Ù„Ù Ø¥Ù„Ù‰ Ø§Ù„Ø£Ù…Ø§Ù… Ø¯Ø§Ø®Ù„ Ù†ÙØ³ Stacking Context.

Ø­Ø³Ø¨ Ø§Ù„Ù…Ù„Ù:

1. Backgrounds & Borders
2. Negative z-index
3. Normal block elements
4. Floats
5. Inline content
6. z-index: 0 / auto
7. Positive z-index

ÙŠØ¹Ù†ÙŠ ÙƒÙ„Ù…Ø§ ØªÙ‚Ø¯Ù…Ù†Ø§ ÙÙŠ Ø§Ù„ØªØ±ØªÙŠØ¨ØŒ Ø§Ù„Ø¹Ù†ØµØ± ÙŠÙƒÙˆÙ† ÙÙŠ Ø·Ø¨Ù‚Ø© Ø£Ø¹Ù„Ù‰.

46. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† ::before Ùˆ::afterØŸ

Ø§Ù„Ø§ØªÙ†ÙŠÙ† Pseudo-elements ÙŠØ³Ù…Ø­ÙˆØ§ Ù„Ù†Ø§ Ø¨Ø¥Ø¶Ø§ÙØ© Ù…Ø­ØªÙˆÙ‰ Ø£Ùˆ Styling Ù…Ù† CSS Ø¨Ø¯ÙˆÙ† ÙƒØªØ§Ø¨Ø© Ø¹Ù†ØµØ± HTML Ø­Ù‚ÙŠÙ‚ÙŠ.

.box::before {
    content: "";
}

::before ØªØ¶ÙŠÙ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ù‚Ø¨Ù„ Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø¹Ù†ØµØ±.

.box::after {
    content: "";
}

::after ØªØ¶ÙŠÙÙ‡ Ø¨Ø¹Ø¯ Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø¹Ù†ØµØ±.

Ù…Ù‡Ù… Ø¬Ø¯Ù‹Ø§: ØºØ§Ù„Ø¨Ù‹Ø§ Ù†Ø­ØªØ§Ø¬ Ù†ÙƒØªØ¨:

content: "";

Ø¹Ø´Ø§Ù† Ø§Ù„Ù€Pseudo-element ÙŠØ¸Ù‡Ø±.

47. Ù…Ø§ Ù‡ÙŠ calc()ØŸ

calc() ØªØ³Ù…Ø­ Ù„Ù†Ø§ Ù†Ø¹Ù…Ù„ Ø­Ø³Ø§Ø¨Ø§Øª Ø¯Ø§Ø®Ù„ CSS.

Ù…Ø«Ù„Ø§Ù‹:

width: calc(100% - 40px);

ÙŠØ¹Ù†ÙŠ:

Ø¹Ø±Ø¶ Ø§Ù„Ø¹Ù†ØµØ± = 100% Ù…Ù† Ø§Ù„Ø£Ø¨ Ù†Ø§Ù‚Øµ 40px.

Ø§Ù„Ù…ÙŠØ²Ø© Ø§Ù„Ù…Ù‡Ù…Ø© Ø¥Ù†Ù‡Ø§ ØªØ³Ù…Ø­ Ø¨Ø¯Ù…Ø¬ ÙˆØ­Ø¯Ø§Øª Ù…Ø®ØªÙ„ÙØ©:

width: calc(100% - 20px);

Ø¨Ø¯Ù„ Ù…Ø§ Ù†Ø­ØªØ§Ø¬ Ù†Ø­Ø³Ø¨ Ø§Ù„Ù‚ÙŠÙ…Ø© ÙŠØ¯ÙˆÙŠÙ‹Ø§.

48. Ù…Ø§ Ù‡ÙŠ clip-pathØŸ

clip-path ØªØ³ØªØ®Ø¯Ù… Ù„Ø¹Ù…Ù„ Ø´ÙƒÙ„ Ù‚Øµ / Clipping Ù„Ù„Ø¹Ù†ØµØ±.

Ø£ÙŠ Ø¬Ø²Ø¡ Ù…Ù† Ø§Ù„Ø¹Ù†ØµØ± ÙŠÙ‚Ø¹ Ø®Ø§Ø±Ø¬ Ø§Ù„Ø´ÙƒÙ„ Ø§Ù„Ù…Ø­Ø¯Ø¯ ÙŠØªÙ… Ø¥Ø®ÙØ§Ø¤Ù‡.

Ù…Ø«Ù„Ø§Ù‹:

.box {
    clip-path: circle(50%);
}

Ù…Ù…ÙƒÙ† Ù†Ø³ØªØ®Ø¯Ù…Ù‡Ø§ Ù„Ø¹Ù…Ù„:

Circle
Triangle
Polygon
Custom shapes

49. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† Transition ÙˆAnimationØŸ

Transition ØªØ­Ø¯Ø« Ø¹Ù†Ø¯Ù…Ø§ ØªØªØºÙŠØ± Ù‚ÙŠÙ…Ø© CSS Ù…Ù† Ø­Ø§Ù„Ø© Ø¥Ù„Ù‰ Ø­Ø§Ù„Ø© Ø£Ø®Ø±Ù‰.

Ù…Ø«Ù„Ø§Ù‹ Ø¹Ù†Ø¯ Hover:

button {
    transition: 0.3s;
}

button:hover {
    transform: scale(1.1);
}

Ø£Ù…Ø§ Animation ÙØªØ³Ù…Ø­ Ù„Ù†Ø§ Ø¨ØªØ¹Ø±ÙŠÙ Ù…Ø±Ø§Ø­Ù„ Ù…ØªØ¹Ø¯Ø¯Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… @keyframes.

@keyframes move {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100px);
    }
}

ÙØ§Ù„ÙØ±Ù‚ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ:

Transition â†’ Ø§Ù†ØªÙ‚Ø§Ù„ Ø¨ÙŠÙ† Ø­Ø§Ù„ØªÙŠÙ†
Animation  â†’ Ø­Ø±ÙƒØ© ÙŠÙ…ÙƒÙ† Ø£Ù† ØªØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ Ù…Ø±Ø§Ø­Ù„ Ù…ØªØ¹Ø¯Ø¯Ø©
ðŸŸ£ Bootstrap â€” Ù…Ù† 50 Ø¥Ù„Ù‰ 58
50. Ù…Ø§ Ù‡Ùˆ BootstrapØŸ

Bootstrap Ù‡Ùˆ Framework Ù„Ù„Ù€Frontend ÙŠÙˆÙØ± Components ÙˆUtilities Ø¬Ø§Ù‡Ø²Ø© ØªØ³Ø§Ø¹Ø¯Ù†Ø§ ÙÙŠ Ø¨Ù†Ø§Ø¡ ÙˆØ§Ø¬Ù‡Ø§Øª Responsive Ø¨Ø³Ø±Ø¹Ø©.

Ù…Ø«Ù„Ø§Ù‹:

Buttons
Navbar
Modal
Grid
Forms
Utilities

Ø§Ù„ÙÙƒØ±Ø© Ø¥Ù† Ø¨Ø¯Ù„ Ù…Ø§ Ù†ÙƒØªØ¨ ÙƒÙ„ CSS Ù…Ù† Ø§Ù„ØµÙØ±ØŒ Ù†Ø³ØªØ®Ø¯Ù… Classes Ø¬Ø§Ù‡Ø²Ø©.

51. Ù…Ø§ Ù‡Ùˆ Bootstrap Grid SystemØŸ

Ù‡Ùˆ Ù†Ø¸Ø§Ù… Layout Ù…Ø¨Ù†ÙŠ Ø¹Ù„Ù‰ 12 Column.

Ù…Ø«Ù„Ø§Ù‹:

<div class="row">
    <div class="col-6"></div>
    <div class="col-6"></div>
</div>

Ù‡Ù†Ø§:

6 + 6 = 12

ÙŠØ¹Ù†ÙŠ ÙƒÙ„ Ø¹Ù†ØµØ± Ø£Ø®Ø° Ù†ØµÙ Ø§Ù„Ù€Row.

Ø§Ù„Ù€Grid ÙÙŠ Ø§Ù„Ù…Ù„Ù Ù…ÙˆØµÙˆÙ Ø¨Ø£Ù†Ù‡ Responsive ÙˆÙ…Ø¨Ù†ÙŠ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Flexbox.

52. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† col Ùˆcol-sm Ùˆcol-md Ùˆcol-lgØŸ

Ø¯ÙŠ Classes Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ø§Ù„Ù€Breakpoints.

col     â†’ Ø§Ù„Ø³Ù„ÙˆÙƒ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ
col-sm  â†’ ÙŠØ¨Ø¯Ø£ Ù…Ù† 576px
col-md  â†’ ÙŠØ¨Ø¯Ø£ Ù…Ù† 768px
col-lg  â†’ ÙŠØ¨Ø¯Ø£ Ù…Ù† 992px

Ù…Ø«Ù„Ø§Ù‹:

<div class="col-12 col-md-6">

Ù…Ø¹Ù†Ø§Ù‡Ø§:

Ø´Ø§Ø´Ø© ØµØºÙŠØ±Ø© â†’ 12 Column
Ù…Ù† md ÙˆÙ…Ø§ ÙÙˆÙ‚ â†’ 6 Columns

53. Ù…Ø§ Ù‡ÙŠ Bootstrap BreakpointsØŸ

Ù‡ÙŠ Ø£Ø­Ø¬Ø§Ù… Ø´Ø§Ø´Ø© Bootstrap ØªØ³ØªØ®Ø¯Ù…Ù‡Ø§ Ù„ØªØºÙŠÙŠØ± Ø§Ù„Ù€Layout Ø­Ø³Ø¨ Ø­Ø¬Ù… Ø§Ù„Ø¬Ù‡Ø§Ø².

xs  â†’ 0px
sm  â†’ 576px
md  â†’ 768px
lg  â†’ 992px
xl  â†’ 1200px
xxl â†’ 1400px

Ù…Ø«Ù„Ø§Ù‹ col-md-6 ÙŠØ¨Ø¯Ø£ ØªØ·Ø¨ÙŠÙ‚Ù‡ Ø¹Ù†Ø¯ 768px ÙØ£ÙƒØ«Ø±.

54. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† container Ùˆcontainer-fluidØŸ
<div class="container">

ÙŠØ¹Ø·ÙŠÙƒ Container Ù„Ù‡ Max Width ÙŠØªØºÙŠØ± Ø­Ø³Ø¨ Ø§Ù„Ù€Breakpoint.

Ø£Ù…Ø§:

<div class="container-fluid">

ÙÙŠØ£Ø®Ø°:

100% Ù…Ù† Ø¹Ø±Ø¶ Ø§Ù„Ø´Ø§Ø´Ø©

Ø¨Ø¨Ø³Ø§Ø·Ø©:

container       â†’ Ø¹Ø±Ø¶ Ù…Ø­Ø¯ÙˆØ¯ Responsive
container-fluid â†’ Full Width

55. ÙƒÙŠÙ ÙŠØ¹Ù…Ù„ Bootstrap ModalØŸ

Ø§Ù„Ù€Modal Ø¹Ø¨Ø§Ø±Ø© Ø¹Ù† Ù†Ø§ÙØ°Ø© ØªØ¸Ù‡Ø± ÙÙˆÙ‚ Ø§Ù„ØµÙØ­Ø©.

Ø¹Ù†Ø¯ ÙØªØ­Ù‡Ø§ØŒ Bootstrap ØªØ³ØªØ®Ø¯Ù…:

Backdrop
+
Modal
+
High z-index

ÙˆØ§Ù„Ù€Backdrop ÙŠÙ…Ù†Ø¹ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† Ø§Ù„ØªÙØ§Ø¹Ù„ Ù…Ø¹ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ù…ÙˆØ¬ÙˆØ¯ Ø®Ù„Ù Ø§Ù„Ù€Modal.

Ù…Ø«Ù„Ø§Ù‹:

Login
Confirmation
Delete confirmation
Form

56. ÙƒÙŠÙ ØªØ¹Ù…Ù„ NavbarØŸ

Bootstrap Navbar ØªÙˆÙØ± Navigation Ø¬Ø§Ù‡Ø²Ø©.

Ø¹Ù„Ù‰ Ø§Ù„Ø´Ø§Ø´Ø§Øª Ø§Ù„ÙƒØ¨ÙŠØ±Ø© ØªØ¸Ù‡Ø± Ø§Ù„Ù€Links Ø¨Ø´ÙƒÙ„ Ø¹Ø§Ø¯ÙŠØŒ ÙˆØ¹Ù„Ù‰ Ø§Ù„Ø´Ø§Ø´Ø§Øª Ø§Ù„ØµØºÙŠØ±Ø© ÙŠÙ…ÙƒÙ† Ø£Ù† ØªØªØ­ÙˆÙ„ Ø¥Ù„Ù‰ Hamburger Menu.

ÙŠØ¹Ù†ÙŠ:

Desktop
Home | About | Contact

Mobile
â˜°

57. Ù…Ø§ Ù‡Ùˆ Spacing System Ù…Ø«Ù„ m-1 Ùˆp-3ØŸ

Bootstrap ØªÙˆÙØ± Classes Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù€Margin ÙˆØ§Ù„Ù€Padding.

m â†’ margin
p â†’ padding

ÙˆØ§Ù„Ø§ØªØ¬Ø§Ù‡:

t â†’ top
b â†’ bottom
l â†’ left
r â†’ right
x â†’ left + right
y â†’ top + bottom

Ù…Ø«Ù„Ø§Ù‹:

<div class="mt-3">

ÙŠØ¹Ù†ÙŠ Margin Top.

Ùˆ:

<div class="px-4">

ÙŠØ¹Ù†ÙŠ Padding Ø£ÙÙ‚ÙŠ.

58. Ù…Ø§ Ù‡ÙŠ Text ÙˆBackground Colors ÙÙŠ BootstrapØŸ

Bootstrap ØªÙˆÙØ± Classes Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø£Ù„ÙˆØ§Ù†.

Ù…Ø«Ù„Ø§Ù‹:

<p class="text-danger">

Ù„ÙˆÙ† Ø§Ù„Ù†Øµ ÙŠÙƒÙˆÙ† Danger.

Ùˆ:

<div class="bg-primary">

Ø§Ù„Ø®Ù„ÙÙŠØ© ØªÙƒÙˆÙ† Primary.

ÙˆÙ…Ù†Ù‡Ø§:

primary
success
danger
warning

ðŸŸ¢ Tailwind CSS â€” Ù…Ù† 59 Ø¥Ù„Ù‰ 68
59. Ù…Ø§ Ù‡Ùˆ TailwindØŸ

Tailwind Ù‡Ùˆ Utility-first CSS Framework.

ÙŠØ¹Ù†ÙŠ Ø¨Ø¯Ù„ Ù…Ø§ Ù†ÙƒØªØ¨ Class Ù…Ø«Ù„:

.card {
    ...
}

Ù†Ø³ØªØ®Ø¯Ù… Utilities Ø¬Ø§Ù‡Ø²Ø© Ù…Ø¨Ø§Ø´Ø±Ø© ÙÙŠ HTML:

<div class="p-4 rounded bg-blue-500">

60. Ù„Ù…Ø§Ø°Ø§ ÙŠØ³Ù…Ù‰ Utility-firstØŸ

Ù„Ø£Ù† ÙƒÙ„ Class ØªÙ‚Ø±ÙŠØ¨Ù‹Ø§ ØªÙ…Ø«Ù„ ÙˆØ¸ÙŠÙØ© CSS ØµØºÙŠØ±Ø©.

Ù…Ø«Ù„Ø§Ù‹:

<div class="flex items-center pt-2">

Ù…Ø¹Ù†Ø§Ù‡Ø§:

flex          â†’ display: flex
items-center  â†’ align-items: center
pt-2          â†’ padding-top

ÙˆØ¨Ù†Ø¬Ù…Ø¹ Ø§Ù„Ù€Utilities Ù…Ø¹ Ø¨Ø¹Ø¶ Ù„Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù€UI.

61. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† Tailwind ÙˆBootstrapØŸ

Bootstrap ØªÙˆÙØ± Components ÙˆUI patterns Ø¬Ø§Ù‡Ø²Ø©.

Ù…Ø«Ù„Ø§Ù‹:

.btn-primary

Ø¨ÙŠÙ†Ù…Ø§ Tailwind ØªÙˆÙØ± Utilities ØµØºÙŠØ±Ø© ÙˆÙ†Ù‚ÙˆÙ… Ù†Ø­Ù† Ø¨ØªØ±ÙƒÙŠØ¨ Ø§Ù„ØªØµÙ…ÙŠÙ….

Ù…Ø«Ù„Ø§Ù‹:

px-4
py-2
bg-blue-500
rounded

Ø¨Ø§Ù„ØªØ§Ù„ÙŠ:

Bootstrap â†’ Components Ø¬Ø§Ù‡Ø²Ø© Ø£ÙƒØ«Ø±
Tailwind  â†’ Utilities ÙˆCustomization Ø£ÙƒØ«Ø±

62. Ù…Ø§Ø°Ø§ ØªØ¹Ù†ÙŠ Classes Ù…Ø«Ù„ flex Ùˆitems-center Ùˆjustify-betweenØŸ
flex
â†’ ÙŠØ¬Ø¹Ù„ Ø§Ù„Ø¹Ù†ØµØ± Flex Container

items-center
â†’ ÙŠØ¶Ø¹ Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ Ø§Ù„Ù…Ù†ØªØµÙ Ø¹Ù„Ù‰ Cross Axis

justify-between
â†’ ÙŠÙˆØ²Ø¹ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ù…Ø¹ Space Between

bg-blue-500
â†’ Background Ø¨Ø§Ù„Ù„ÙˆÙ† Ø§Ù„Ø£Ø²Ø±Ù‚ Ø¨Ø¯Ø±Ø¬Ø© 500

text-xl
â†’ Ø­Ø¬Ù… Ø§Ù„Ù†Øµ XL

63. ÙƒÙŠÙ ØªØ¹Ù…Ù„ Responsive Classes ÙÙŠ TailwindØŸ

Tailwind ØªØ³ØªØ®Ø¯Ù… Mobile First.

Ù…Ø«Ù„Ø§Ù‹:

<p class="text-sm md:text-lg">

ÙŠØ¹Ù†ÙŠ:

Default â†’ text-sm
md ÙˆÙ…Ø§ ÙÙˆÙ‚ â†’ text-lg

ÙÙ€md: Ù…Ø¹Ù†Ø§Ù‡Ø§: Ø·Ø¨Ù‘Ù‚ Ø§Ù„Ù€Utility Ø¨Ø¯Ø§ÙŠØ© Ù…Ù† Breakpoint Ø§Ù„Ø®Ø§Øµ Ø¨Ù€md.

64. Ù…Ø§ Ù‡ÙŠ Arbitrary ValuesØŸ

Ù‡ÙŠ Ø·Ø±ÙŠÙ‚Ø© Ù†ÙƒØªØ¨ Ø¨Ù‡Ø§ Ù‚ÙŠÙ…Ø© Ù…Ø®ØµØµØ© Ø¯Ø§Ø®Ù„ [] Ø¨Ø¯Ù„ Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„Ø¬Ø§Ù‡Ø²Ø©.

Ù…Ø«Ù„Ø§Ù‹:

<div class="top-[13px]">

ØªØ¹Ù†ÙŠ:

top: 13px;

Ù…ÙÙŠØ¯Ø© Ø¹Ù†Ø¯Ù…Ø§ Ù†Ø­ØªØ§Ø¬ Ù‚ÙŠÙ…Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø© ÙÙŠ Ø§Ù„Ù€Default Design System.

65. ÙƒÙŠÙ ØªØ¹Ù…Ù„ Animation ÙÙŠ TailwindØŸ

Tailwind Ù„Ø¯ÙŠÙ‡Ø§ Utilities Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù€Animations.

Ù…Ø«Ù„Ø§Ù‹:

animate-pulse
animate-spin
animate-bounce

ÙƒÙ…Ø§ ÙŠÙ…ÙƒÙ† ØªØ¹Ø±ÙŠÙ Animations Ù…Ø®ØµØµØ© Ù…Ù† Ø®Ù„Ø§Ù„ Configuration.

66. Ù…Ø§ Ù‡Ùˆ Config FileØŸ

Ù‡Ùˆ Ù…Ù„Ù Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Tailwind:

tailwind.config.js

ÙˆÙ…Ù† Ø®Ù„Ø§Ù„Ù‡ ÙŠÙ…ÙƒÙ† ØªØ®ØµÙŠØµ:

Colors
Theme
Breakpoints
Plugins
Content sources
Design system

67. Ù…Ø§ ÙˆØ¸ÙŠÙØ© dark:ØŸ

dark: ØªØ³ØªØ®Ø¯Ù… Ù„ØªØ·Ø¨ÙŠÙ‚ Style Ù…Ø¹ÙŠÙ† ÙÙŠ Dark Mode.

Ù…Ø«Ù„Ø§Ù‹:

<div class="bg-white dark:bg-black">

ÙŠØ¹Ù†ÙŠ:

Light Mode â†’ White
Dark Mode  â†’ Black
68. Ù…Ø§ Ù‡ÙŠ @applyØŸ

@apply ØªØ³Ù…Ø­ Ù„Ù†Ø§ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…Ù† Tailwind Utilities Ø¯Ø§Ø®Ù„ CSS.

Ù…Ø«Ù„Ø§Ù‹:

.button {
    @apply px-4 py-2 rounded;
}

Ø¨Ø¯Ù„ ØªÙƒØ±Ø§Ø±:

px-4 py-2 rounded

ÙÙŠ ÙƒÙ„ Ù…ÙƒØ§Ù†.

ðŸŸ  SASS / SCSS â€” Ù…Ù† 69 Ø¥Ù„Ù‰ 80
69. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† SASS ÙˆSCSSØŸ

Ø§Ù„Ø§ØªÙ†ÙŠÙ† Preprocessors Ù„Ù„Ù€CSS.

SCSS ØªØ³ØªØ®Ø¯Ù… Syntax Ù‚Ø±ÙŠØ¨ Ø¬Ø¯Ù‹Ø§ Ù…Ù† CSS:

.button {
    color: red;
}

Ø£Ù…Ø§ SASS Ø§Ù„Ù‚Ø¯ÙŠÙ…Ø© ÙØªØ³ØªØ®Ø¯Ù… Syntax Ù…Ø®ØªÙ„Ù Ø¨Ø¯ÙˆÙ† {} Ùˆ;.

70. Ù…Ø§ Ù‡ÙŠ Variables ÙÙŠ SASSØŸ

Ù…ØªØºÙŠØ±Ø§Øª Ù†Ø®Ø²Ù† ÙÙŠÙ‡Ø§ Ù‚ÙŠÙ… Ù†Ø³ØªØ®Ø¯Ù…Ù‡Ø§ Ø£ÙƒØ«Ø± Ù…Ù† Ù…Ø±Ø©.

$primary: #3498db;

.button {
    background: $primary;
}

Ø§Ù„Ù…ÙŠØ²Ø© Ø¥Ù† Ù„Ùˆ Ø¹Ø§ÙŠØ²ÙŠÙ† Ù†ØºÙŠØ± Ø§Ù„Ù„ÙˆÙ†ØŒ Ù†ØºÙŠØ±Ù‡ Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø©.

71. Ù…Ø§ Ù‡ÙŠ MixinsØŸ

Ù‡ÙŠ Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…Ù† CSS Rules Ù†ÙƒØªØ¨Ù‡Ø§ Ù…Ø±Ø© ÙˆÙ†Ø³ØªØ®Ø¯Ù…Ù‡Ø§ Ø£ÙƒØ«Ø± Ù…Ù† Ù…Ø±Ø©.

@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}

Ø«Ù…:

.box {
    @include center;
}
72. Ù…Ø§ Ù‡ÙŠ Functions ÙÙŠ SASSØŸ

Ù‡ÙŠ Functions Ù†Ù‚Ø¯Ø± Ù†Ù…Ø±Ø± Ù„Ù‡Ø§ Values ÙˆØªÙ‚ÙˆÙ… Ø¨Ø¹Ù…Ù„ÙŠØ© ÙˆØªØ±Ø¬Ø¹ Ù†ØªÙŠØ¬Ø©.

@function double($value) {
    @return $value * 2;
}

Ø«Ù…:

.box {
    width: double(100px);
}
73. Ù…Ø§ Ù‡ÙŠ Nested RulesØŸ

ØªØ³Ù…Ø­ Ù„Ù†Ø§ Ø¨ÙƒØªØ§Ø¨Ø© Ø§Ù„Ù€Selectors Ø§Ù„Ø¯Ø§Ø®Ù„ÙŠØ© Ø¯Ø§Ø®Ù„ Ø§Ù„Ù€Selector Ø§Ù„Ø£Ø¨.

.nav {
    .link {
        color: blue;

        &:hover {
            color: red;
        }
    }
}

Ø¯Ù‡ ÙŠØ¬Ø¹Ù„ Ø§Ù„ÙƒÙˆØ¯ Ù…Ù†Ø¸Ù…Ù‹Ø§ ÙˆÙŠØ¹Ø¨Ø± Ø¹Ù† Ø¹Ù„Ø§Ù‚Ø© Parent/Child.

74. Ù…Ø§ Ù‡ÙŠ @extendØŸ

ØªØ³Ù…Ø­ Ù„Ù€Selector Ø¥Ù†Ù‡ ÙŠØ¹ÙŠØ¯ Ø§Ø³ØªØ®Ø¯Ø§Ù… Styles Ø§Ù„Ù…ÙˆØ¬ÙˆØ¯Ø© ÙÙŠ Selector Ø¢Ø®Ø±.

.message {
    padding: 10px;
}

.success {
    @extend .message;
    color: green;
}

Ù‡Ù†Ø§ .success Ø³ØªØ³ØªØ®Ø¯Ù… Styles Ø§Ù„Ø®Ø§ØµØ© Ø¨Ù€.message Ø¨Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ø¥Ù„Ù‰ Ø§Ù„Ù€Style Ø§Ù„Ø®Ø§Øµ Ø¨Ù‡Ø§.

75. Ù…Ø§ ÙˆØ¸ÙŠÙØ© Partial FilesØŸ

Ù‡ÙŠ Ù…Ù„ÙØ§Øª SASS ØµØºÙŠØ±Ø© Ù†Ø³ØªØ®Ø¯Ù…Ù‡Ø§ Ù„ØªÙ‚Ø³ÙŠÙ… Ø§Ù„Ù…Ø´Ø±ÙˆØ¹.

ØºØ§Ù„Ø¨Ù‹Ø§ ØªØ¨Ø¯Ø£ Ø¨Ù€_:

_variables.scss
_buttons.scss
_header.scss

ÙˆØ§Ù„Ù€Compiler Ù„Ø§ ÙŠÙ‚ÙˆÙ… Ø¨Ø¥Ø®Ø±Ø§Ø¬ Ù…Ù„Ù CSS Ù…Ø³ØªÙ‚Ù„ Ù„ÙƒÙ„ PartialØŒ ÙˆØ¥Ù†Ù…Ø§ Ù†Ø³ØªØ®Ø¯Ù…Ù‡Ø§ Ø¶Ù…Ù† Ù…Ù„ÙØ§Øª SASS Ø£Ø®Ø±Ù‰.

76. Ù…Ø§ Ù…Ø¹Ù†Ù‰ @import Ùˆ@use Ùˆ@forwardØŸ

@import:

Ø·Ø±ÙŠÙ‚Ø© Ù‚Ø¯ÙŠÙ…Ø© Ù„Ø¥Ø¯Ø®Ø§Ù„ Ù…Ù„ÙØ§Øª SASSØŒ ÙˆÙƒØ§Ù†Øª ØªØ¬Ø¹Ù„ Ø§Ù„Ù…ØªØºÙŠØ±Ø§Øª Ù…ØªØ§Ø­Ø© ÙÙŠ Global Scope.

@use:

ØªØ³ØªØ®Ø¯Ù… Ù„Ø¥Ø¯Ø®Ø§Ù„ Module Ø¨Ø·Ø±ÙŠÙ‚Ø© Ù…Ù†Ø¸Ù…Ø© Ù…Ø¹ Namespace.

@forward:

ØªØ³Ù…Ø­ Ù„Ù…Ù„Ù Ø£Ù† ÙŠØ¹ÙŠØ¯ ØªØµØ¯ÙŠØ± Ù…Ø­ØªÙˆÙŠØ§Øª Module Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡Ø§ Ù…Ù† Ø®Ù„Ø§Ù„Ù‡.

77. Ù„Ù…Ø§Ø°Ø§ @use Ø£ÙØ¶Ù„ Ù…Ù† @importØŸ

Ù„Ø£Ù† @use ÙŠÙ…Ù†Ø¹ ØªÙ„ÙˆØ« Ø§Ù„Ù€Global ScopeØŒ ÙˆÙŠØ¹Ø·ÙŠ Modules Namespace ÙˆØ§Ø¶Ø­.

Ù…Ø«Ù„Ø§Ù‹:

@use "colors";

.button {
    color: colors.$primary;
}

ÙØ£Ù†Ø§ Ø¹Ø§Ø±ÙØ© Ø£Ù† $primary Ø¬Ø§ÙŠØ© Ù…Ù† colors.

ÙƒÙ…Ø§Ù† Ø§Ù„Ù…Ù„Ù ÙŠØªÙ… ØªØ­Ù…ÙŠÙ„Ù‡ Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø© Ø­ØªÙ‰ Ù„Ùˆ ØªÙ… Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡ ÙÙŠ Ø£ÙƒØ«Ø± Ù…Ù† Ù…ÙƒØ§Ù†.

78. Ù…Ø§ Ù…Ø¹Ù†Ù‰ Modules ÙÙŠ SASSØŸ

Module Ø¹Ø¨Ø§Ø±Ø© Ø¹Ù† Ù…Ù„Ù SASS ÙŠØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ Ø£Ø´ÙŠØ§Ø¡ Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ø¨Ø¹Ø¶ Ù…Ø«Ù„:

Variables
Mixins
Functions

ÙˆÙ†Ø³ØªØ¯Ø¹ÙŠÙ‡ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù…:

@use

ÙˆØ¨Ø§Ù„ØªØ§Ù„ÙŠ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ ÙŠØµØ¨Ø­ Ù…Ù‚Ø³Ù…Ù‹Ø§ Ø¥Ù„Ù‰ Ø£Ø¬Ø²Ø§Ø¡ Ù…Ù†Ø¸Ù…Ø© Ø¨Ø¯Ù„ Ù…Ù„Ù Ø¶Ø®Ù… ÙˆØ§Ø­Ø¯.

79. ÙƒÙŠÙ ØªØ¬Ø¹Ù„ SASS Ø§Ù„Ù€CSS Ù‚Ø§Ø¨Ù„Ù‹Ø§ Ù„Ù„ØªÙˆØ³Ø¹ØŸ

Ø¹Ù† Ø·Ø±ÙŠÙ‚ ØªÙ‚Ø³ÙŠÙ… Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ø¥Ù„Ù‰ Modules ÙˆFiles Ù…Ù†Ø¸Ù…Ø© Ø¨Ø¯Ù„ ÙˆØ¶Ø¹ ÙƒÙ„ Ø§Ù„Ù€CSS ÙÙŠ Ù…Ù„Ù ÙˆØ§Ø­Ø¯.

Ù…Ø«Ù„Ø§Ù‹:

variables
buttons
forms
header
footer
components
pages

ÙˆØ§Ù„Ù…Ù„Ù ÙŠØ´ÙŠØ± Ø¥Ù„Ù‰ Ø£Ù† SASS ÙŠÙ…ÙƒÙ†Ù‡Ø§ ØªÙ†Ø¸ÙŠÙ… Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„ÙƒØ¨ÙŠØ±Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Modular Architecture Ù…Ø«Ù„ 7-1 Pattern.

80. ÙƒÙŠÙ ØªØ¹Ù…Ù„ Loop Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… @eachØŸ

@each ØªØ³ØªØ®Ø¯Ù… Ù„Ù„Ù…Ø±ÙˆØ± Ø¹Ù„Ù‰ List Ø£Ùˆ Map ÙˆØ¥Ù†Ø´Ø§Ø¡ CSS Ø¨Ø´ÙƒÙ„ ØªÙ„Ù‚Ø§Ø¦ÙŠ.

Ù…Ø«Ù„Ø§Ù‹:

@each $color in primary, success {
    .#{$color}-text {
        color: get-color($color);
    }
}

Ø¨Ø¯Ù„ Ù…Ø§ Ø£ÙƒØ±Ø± Ù†ÙØ³ Ø§Ù„ÙƒÙˆØ¯ ÙŠØ¯ÙˆÙŠÙ‹Ø§ Ù„ÙƒÙ„ Color.

ðŸŸ¡ JavaScript â€” Ù…Ù† 81 Ø¥Ù„Ù‰ 98
81. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† var Ùˆlet ÙˆconstØŸ

var

Function Scoped
ÙŠØªÙ… Hoisting Ù„Ù‡Ø§
Ù‚ÙŠÙ…ØªÙ‡Ø§ ØªÙƒÙˆÙ† undefined Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„Ù€Hoisting
ÙŠÙ…ÙƒÙ† Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹Ø±ÙŠÙÙ‡Ø§ ÙˆØ¥Ø¹Ø§Ø¯Ø© Ø¥Ø³Ù†Ø§Ø¯Ù‡Ø§

let

Block Scoped
ÙŠÙ…ÙƒÙ† Ø¥Ø¹Ø§Ø¯Ø© Ø¥Ø³Ù†Ø§Ø¯Ù‡Ø§
Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹Ø±ÙŠÙÙ‡Ø§ ÙÙŠ Ù†ÙØ³ Ø§Ù„Ù€Scope
Ù…ÙˆØ¬ÙˆØ¯Ø© ÙÙŠ TDZ Ù‚Ø¨Ù„ Ø§Ù„ØªÙ‡ÙŠØ¦Ø©

const

Block Scoped
ÙŠØ¬Ø¨ Ø¥Ø¹Ø·Ø§Ø¤Ù‡Ø§ Ù‚ÙŠÙ…Ø© Ø¹Ù†Ø¯ ØªØ¹Ø±ÙŠÙÙ‡Ø§
Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø¥Ø¹Ø§Ø¯Ø© Ø¥Ø³Ù†Ø§Ø¯Ù‡Ø§
Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø¥Ø¹Ø§Ø¯Ø© ØªØ¹Ø±ÙŠÙÙ‡Ø§

82. Ù…Ø§ Ù‡Ùˆ HoistingØŸ

Ù‡Ùˆ Ø³Ù„ÙˆÙƒ ÙÙŠ JavaScript ÙŠØªÙ… ÙÙŠÙ‡ ØªØ¬Ù‡ÙŠØ² Declarations Ø£Ø«Ù†Ø§Ø¡ Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ù€Execution Context Ù‚Ø¨Ù„ ØªÙ†ÙÙŠØ° Ø§Ù„ÙƒÙˆØ¯.

Ø¨Ø§Ù„Ù†Ø³Ø¨Ø© Ù„Ù€var:

console.log(x); // undefined
var x = 10;

Ø£Ù…Ø§ let Ùˆconst ÙÙ‡Ù…Ø§ Ù…ÙˆØ¬ÙˆØ¯Ø§Ù† ÙÙŠ Ø§Ù„Ù€Scope Ù„ÙƒÙ† ØºÙŠØ± Ù…Ù‡ÙŠØ£ØªÙŠÙ† Ù‚Ø¨Ù„ Ø³Ø·Ø± Ø§Ù„ØªØ¹Ø±ÙŠÙØŒ ÙˆÙ„Ø°Ù„Ùƒ Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„ÙŠÙ‡Ù…Ø§ Ù‚Ø¨Ù„ Ø§Ù„ØªÙ‡ÙŠØ¦Ø© ÙŠØ³Ø¨Ø¨ Error Ø¨Ø³Ø¨Ø¨ Temporal Dead Zone.

83. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† == Ùˆ===ØŸ

== ØªØ³Ù…Ù‰ Loose EqualityØŒ ÙˆÙŠÙ…ÙƒÙ† Ø£Ù† ØªÙ‚ÙˆÙ… Ø¨ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù†ÙˆØ¹ Ù‚Ø¨Ù„ Ø§Ù„Ù…Ù‚Ø§Ø±Ù†Ø©.

5 == "5"; // true

Ø£Ù…Ø§ === ÙÙ‡ÙŠ Strict Equality ÙˆØªÙ‚Ø§Ø±Ù† Ø§Ù„Ù‚ÙŠÙ…Ø© ÙˆØ§Ù„Ù†ÙˆØ¹.

5 === "5"; // false

ÙÙŠ Ø§Ù„Ù€Interview Ù‚ÙˆÙ„ÙŠ:

I generally prefer === because it avoids implicit type coercion.

84. Ù…Ø§ Ù‡ÙŠ Primitive TypesØŸ

Ù‡ÙŠ Ø£Ù†ÙˆØ§Ø¹ Ø¨ÙŠØ§Ù†Ø§Øª Ø£Ø³Ø§Ø³ÙŠØ© ÙÙŠ JavaScript:

String
Number
Boolean
Null
Undefined
Symbol
BigInt

ÙˆØ§Ù„Ù…Ù„Ù ÙŠØµÙÙ‡Ø§ Ø¨Ø£Ù†Ù‡Ø§ Immutable ÙˆÙŠØªÙ… Ø§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹Ù‡Ø§ ÙƒÙ‚ÙŠÙ….

85. Ù…Ø§ Ù‡ÙŠ Reference TypesØŸ

Ù‡ÙŠ Ø£Ù†ÙˆØ§Ø¹ Ù…Ø¹Ù‚Ø¯Ø© Ù…Ø«Ù„:

Object
Array
Function

ÙˆØ¹Ù†Ø¯ Ù†Ø³Ø®Ù‡Ø§ Ø£Ùˆ ØªÙ…Ø±ÙŠØ±Ù‡Ø§ØŒ Ù†ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Reference Ù„Ù„ÙƒØ§Ø¦Ù† ÙˆÙ„ÙŠØ³ Ù…Ø¬Ø±Ø¯ Ù†Ø³Ø®Ø© Ù…Ø³ØªÙ‚Ù„Ø© Ù…Ù† Ù…Ø­ØªÙˆØ§Ù‡.

Ù…Ø«Ù„Ø§Ù‹:

const a = { name: "Malak" };
const b = a;

b.name = "Sara";

Ù‡Ù†Ø§ a.name Ø£ÙŠØ¶Ù‹Ø§ Ø³ØªØªØºÙŠØ± Ù„Ø£Ù† Ø§Ù„Ø§Ø«Ù†ÙŠÙ† ÙŠØ´ÙŠØ±Ø§Ù† Ù„Ù†ÙØ³ Ø§Ù„Ù€Object.

86. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† null ÙˆundefinedØŸ

undefined ØªØ¹Ù†ÙŠ Ø£Ù† Variable Ù…ÙˆØ¬ÙˆØ¯Ø© Ù„ÙƒÙ† Ù„Ù… ÙŠØªÙ… Ø¥Ø¹Ø·Ø§Ø¤Ù‡Ø§ Ù‚ÙŠÙ…Ø©.

let x;

Ø£Ù…Ø§ null ÙÙ‡ÙŠ Ù‚ÙŠÙ…Ø© Ù†Ø¶Ø¹Ù‡Ø§ Ø¨Ø´ÙƒÙ„ Ù…Ù‚ØµÙˆØ¯ Ù„Ù„ØªØ¹Ø¨ÙŠØ± Ø¹Ù† Ø¹Ø¯Ù… ÙˆØ¬ÙˆØ¯ Object/Value.

let user = null;

87. Ù…Ø§ Ù‡Ùˆ ScopeØŸ

Ù‡Ùˆ Ø§Ù„Ù†Ø·Ø§Ù‚ Ø§Ù„Ø°ÙŠ ÙŠÙ…ÙƒÙ† Ø¯Ø§Ø®Ù„Ù‡ Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Variable.

Ø£Ù‡Ù… Ø§Ù„Ø£Ù†ÙˆØ§Ø¹:

Global Scope
Function Scope
Block Scope

Ù…Ø«Ù„Ø§Ù‹ let Ùˆconst Ù„Ø¯ÙŠÙ‡Ù… Block Scope:

if (true) {
    let x = 10;
}

Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ x Ø®Ø§Ø±Ø¬ Ø§Ù„Ù€Block.

88. Ù…Ø§ Ù‡Ùˆ ClosureØŸ

Closure ÙŠØ¹Ù†ÙŠ Ø£Ù† Function ØªØ­ØªÙØ¸ Ø¨Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ù€Variables Ø§Ù„Ù…ÙˆØ¬ÙˆØ¯Ø© ÙÙŠ Ø§Ù„Ù€Lexical Scope Ø§Ù„Ø®Ø§Øµ Ø¨Ù‡Ø§ Ø­ØªÙ‰ Ø¨Ø¹Ø¯ Ø§Ù†ØªÙ‡Ø§Ø¡ Ø§Ù„Ù€Outer Function.

Ù…Ø«Ù„Ø§Ù‹:

function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

Ø­ØªÙ‰ Ø¨Ø¹Ø¯ Ø§Ù†ØªÙ‡Ø§Ø¡ counter()ØŒ Ø§Ù„Ù€Inner Function Ù…Ø§ Ø²Ø§Ù„Øª ØªØ³ØªØ·ÙŠØ¹ Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ count.

89. Ù…Ø§ Ù‡ÙŠ Callback FunctionØŸ

Ù‡ÙŠ Function Ù†Ù…Ø±Ø±Ù‡Ø§ ÙƒÙ€Argument Ø¥Ù„Ù‰ Function Ø£Ø®Ø±Ù‰ØŒ Ù„ÙŠØªÙ… ØªÙ†ÙÙŠØ°Ù‡Ø§ Ù„Ø§Ø­Ù‚Ù‹Ø§ Ø£Ùˆ Ø¨Ø¹Ø¯ Ø§Ù†ØªÙ‡Ø§Ø¡ Ø¹Ù…Ù„ÙŠØ© Ù…Ø¹ÙŠÙ†Ø©.

Ù…Ø«Ù„Ø§Ù‹:

setTimeout(() => {
    console.log("Done");
}, 1000);

Ø§Ù„Ù€Function Ø§Ù„Ù…ÙˆØ¬ÙˆØ¯Ø© Ø¯Ø§Ø®Ù„ setTimeout ØªØ¹ØªØ¨Ø± Callback.

90. Ù…Ø§ Ù‡ÙŠ Arrow FunctionsØŸ

Ù‡ÙŠ Ø·Ø±ÙŠÙ‚Ø© Ù…Ø®ØªØµØ±Ø© Ù„ÙƒØªØ§Ø¨Ø© Function.

Ø¨Ø¯Ù„:

function add(a, b) {
    return a + b;
}

Ù†ÙƒØªØ¨:

const add = (a, b) => a + b;

ÙˆÙ…Ù† Ø£Ù‡Ù… Ø®ØµØ§Ø¦ØµÙ‡Ø§ Ø£Ù†Ù‡Ø§ Ù„Ø§ ØªÙ…ØªÙ„Ùƒ this Ø®Ø§ØµÙ‹Ø§ Ø¨Ù‡Ø§ØŒ ÙˆØ¥Ù†Ù…Ø§ ØªØ³ØªØ®Ø¯Ù… this Ù…Ù† Ø§Ù„Ù€Lexical Scope Ø§Ù„Ù…Ø­ÙŠØ· Ø¨Ù‡Ø§.

91. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† Function Declaration ÙˆFunction ExpressionØŸ

Declaration:

function add() {
}

Expression:

const add = function() {
};

Ø§Ù„Ù€Function Declaration ÙŠÙ…ÙƒÙ† Ø§Ø³ØªØ¯Ø¹Ø§Ø¤Ù‡Ø§ Ù‚Ø¨Ù„ Ù…ÙƒØ§Ù† ØªØ¹Ø±ÙŠÙÙ‡Ø§ Ø¨Ø³Ø¨Ø¨ Hoisting.

Ø£Ù…Ø§ Function Expression Ø§Ù„Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ù€let Ø£Ùˆ const ÙÙ„Ø§ ÙŠÙ…ÙƒÙ† Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡Ø§ Ù‚Ø¨Ù„ ØªÙ‡ÙŠØ¦Ø© Ø§Ù„Ù…ØªØºÙŠØ±.

92. Ù…Ø§ Ù‡Ùˆ thisØŸ

this ØªØ´ÙŠØ± Ø¥Ù„Ù‰ Context Ø§Ù„Ø®Ø§Øµ Ø¨Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ Ø§Ù„Ù€Function.

Ù…Ø«Ù„Ø§Ù‹:

const user = {
    name: "Malak",

    sayHello() {
        console.log(this.name);
    }
};

Ø¹Ù†Ø¯:

user.sayHello();

this ØªØ´ÙŠØ± Ø¥Ù„Ù‰ user.

Ø£Ù…Ø§ Arrow Functions ÙÙ„Ø§ ØªÙ†Ø´Ø¦ this Ø®Ø§ØµÙ‹Ø§ Ø¨Ù‡Ø§.

93. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† bind Ùˆcall ÙˆapplyØŸ

Ø§Ù„Ø«Ù„Ø§Ø«Ø© ÙŠØ³Ù…Ø­ÙˆØ§ Ù„Ù†Ø§ Ø¨ØªØ­Ø¯ÙŠØ¯ Ù‚ÙŠÙ…Ø© this.

call

ØªØ´ØºÙ„ Function ÙÙˆØ±Ù‹Ø§ ÙˆØ§Ù„Ù€Arguments Ù…Ù†ÙØµÙ„Ø©:

fn.call(obj, arg1, arg2);
apply

ØªØ´ØºÙ„ Function ÙÙˆØ±Ù‹Ø§ Ù„ÙƒÙ† Ø§Ù„Ù€Arguments ØªÙƒÙˆÙ† Array:

fn.apply(obj, [arg1, arg2]);
bind

Ù„Ø§ ØªØ´ØºÙ„ Function ÙÙˆØ±Ù‹Ø§Ø› ØªØ±Ø¬Ø¹ Function Ø¬Ø¯ÙŠØ¯Ø© Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ù€this:

const newFn = fn.bind(obj);
94. Ù…Ø§ Ù‡Ùˆ Event BubblingØŸ

Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ­Ø¯Ø« Event Ø¹Ù„Ù‰ Ø¹Ù†ØµØ±ØŒ Ø§Ù„Ù€Event ÙŠØ¨Ø¯Ø£ Ù…Ù† Ø§Ù„Ø¹Ù†ØµØ± Ù†ÙØ³Ù‡ Ø«Ù… ÙŠØµØ¹Ø¯ Ù„Ù„Ø£Ø¨ Ø«Ù… Ø§Ù„Ø¬Ø¯ Ø«Ù… Ø¨Ø§Ù‚ÙŠ Ø§Ù„Ù€Ancestors.

Ù…Ø«Ù„Ø§Ù‹:

button
   â†‘
div
   â†‘
body
   â†‘
document

ÙˆØ¯Ù‡ Ù…Ù‡Ù… Ø¬Ø¯Ù‹Ø§ ÙÙŠ Event Delegation.

95. Ù…Ø§ Ù‡Ùˆ Event DelegationØŸ

Ø¨Ø¯Ù„ Ù…Ø§ Ø£Ø¶Ø¹ Event Listener Ø¹Ù„Ù‰ ÙƒÙ„ ChildØŒ Ø£Ø¶Ø¹ Listener ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ù€Parent ÙˆØ£Ø³ØªÙÙŠØ¯ Ù…Ù† Event Bubbling.

Ù…Ø«Ù„Ø§Ù‹:

list.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
        // handle click
    }
});

Ø§Ù„Ù…ÙŠØ²Ø© Ø¥Ù†Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ø¬Ø¯Ù‹Ø§ Ù„Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„ØªÙŠ ÙŠØªÙ… Ø¥Ù†Ø´Ø§Ø¤Ù‡Ø§ Dynamically.

96. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† map Ùˆfilter ÙˆreduceØŸ
map

ØªØ­ÙˆÙ„ ÙƒÙ„ Ø¹Ù†ØµØ± ÙˆØªØ±Ø¬Ø¹ Array Ø¬Ø¯ÙŠØ¯Ø©:

[1, 2, 3].map(x => x * 2);

// [2, 4, 6]
filter

ØªØ®ØªØ§Ø± Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø§Ù„ØªÙŠ ØªØ­Ù‚Ù‚ Ø´Ø±Ø·Ù‹Ø§:

[1, 2, 3].filter(x => x > 1);

// [2, 3]
reduce

ØªØ¬Ù…Ø¹ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙÙŠ Ù‚ÙŠÙ…Ø© ÙˆØ§Ø­Ø¯Ø©:

[1, 2, 3].reduce((sum, x) => sum + x, 0);

// 6
97. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† forEach ÙˆmapØŸ

forEach ØªØ³ØªØ®Ø¯Ù… Ù„ØªÙ†ÙÙŠØ° Ø¹Ù…Ù„ÙŠØ© Ø¹Ù„Ù‰ ÙƒÙ„ Ø¹Ù†ØµØ±ØŒ Ù„ÙƒÙ†Ù‡Ø§ Ù„Ø§ ØªØ±Ø¬Ø¹ Array Ø¬Ø¯ÙŠØ¯Ø© Ù…Ù† Ø§Ù„Ø¹Ù†Ø§ØµØ±.

Ø£Ù…Ø§ map ØªÙ‚ÙˆÙ… Ø¨Ø¹Ù…Ù„ Transformation ÙˆØªØ±Ø¬Ø¹ Array Ø¬Ø¯ÙŠØ¯Ø©.

forEach â†’ execute
map     â†’ transform + return new array
98. ÙƒÙŠÙ ØªØ¹Ù…Ù„ Ù†Ø³Ø® Ø§Ù„Ù€Objects ÙˆÙ…Ø§ Ù‡Ùˆ Event LoopØŸ

Ù‡Ù†Ø§ Ø¹Ù†Ø¯Ù†Ø§ Ø¬Ø²Ø¦ÙŠÙ† Ù…Ù‡Ù…ÙŠÙ†:

Ø£ÙˆÙ„Ù‹Ø§: Ù†Ø³Ø® Object

Ù„Ù„Ù€Shallow Copy:

const copy = { ...original };

Ù„ÙƒÙ† Ù„Ùˆ Ø¹Ù†Ø¯Ù†Ø§ Nested ObjectsØŒ ÙØ§Ù„Ù€Spread Ù„Ø§ ÙŠØ¹Ù…Ù„ Deep Copy.

ÙŠÙ…ÙƒÙ† Ø§Ø³ØªØ®Ø¯Ø§Ù…:

const copy = structuredClone(original);

ÙÙŠ Ø§Ù„Ø­Ø§Ù„Ø§Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø©.

Ø«Ø§Ù†ÙŠÙ‹Ø§: Event Loop

JavaScript Ù„Ø¯ÙŠÙ‡Ø§ Call Stack ÙˆØ§Ø­Ø¯ØŒ Ù„ÙƒÙ† ÙŠÙ…ÙƒÙ†Ù‡Ø§ Ø§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù€Asynchronous Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Browser/Runtime APIs ÙˆØ§Ù„Ù€Queues.

Ø¨Ø´ÙƒÙ„ Ù…Ø¨Ø³Ø·:

Call Stack
    â†“
Async operation
    â†“
Queue
    â†“
Event Loop
    â†“
Call Stack

Ø§Ù„Ù€Event Loop ÙŠØ±Ø§Ù‚Ø¨ Ø§Ù„Ù€Call Stack ÙˆØ§Ù„Ù€QueuesØŒ ÙˆØ¹Ù†Ø¯Ù…Ø§ ÙŠÙƒÙˆÙ† Ø§Ù„Ù€Stack Ø¬Ø§Ù‡Ø²Ù‹Ø§ ÙŠØ³Ù…Ø­ Ù„Ù„Ù…Ù‡Ø§Ù… Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ø¨Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¥Ù„ÙŠÙ‡.

ðŸ…°ï¸ Angular â€” Ù…Ù† 176 Ø¥Ù„Ù‰ 184
176. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† canActivate ÙˆcanLoadØŸ

canActivate ØªØªØ­ÙƒÙ… ÙÙŠ Ù‡Ù„ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ø³Ù…ÙˆØ­ Ù„Ù‡ Ø¨Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¥Ù„Ù‰ Route Ø£Ù… Ù„Ø§.

Ø£Ù…Ø§ canLoad ÙØªÙ…Ù†Ø¹ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù€Lazy-loaded Module/Feature Ù…Ù† Ø§Ù„Ø£Ø³Ø§Ø³ Ø¥Ø°Ø§ ÙƒØ§Ù† Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ØºÙŠØ± Ù…Ø³Ù…ÙˆØ­ Ù„Ù‡.

ÙŠØ¹Ù†ÙŠ:

canActivate
â†’ Ù‡Ù„ ÙŠØ¯Ø®Ù„ RouteØŸ

canLoad
â†’ Ù‡Ù„ Ù†Ø­Ù…Ù„ Ø§Ù„Ù€Lazy Feature Ø£ØµÙ„Ù‹Ø§ØŸ

ÙˆØ¯Ù‡ ÙŠØ¬Ø¹Ù„ canLoad Ù…ÙÙŠØ¯Ø© Ù„ØªØ¬Ù†Ø¨ ØªØ­Ù…ÙŠÙ„ Ù…ÙˆØ§Ø±Ø¯ Ù„Ø§ ÙŠÙØ³Ù…Ø­ Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡Ø§.

177. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† <ng-container> Ùˆ<ng-template>ØŸ

ng-container Ø¹Ø¨Ø§Ø±Ø© Ø¹Ù† Container Ù„Ø§ ÙŠØ¸Ù‡Ø± ÙƒØ¹Ù†ØµØ± Ø­Ù‚ÙŠÙ‚ÙŠ ÙÙŠ Ø§Ù„Ù€DOM.

Ù†Ø³ØªØ®Ø¯Ù…Ù‡ Ø¹Ù†Ø¯Ù…Ø§ Ù†Ø±ÙŠØ¯ grouping Ø£Ùˆ Ù†Ø·Ø¨Ù‚ Structural Logic Ø¨Ø¯ÙˆÙ† Ø¥Ø¶Ø§ÙØ© wrapper.

Ø£Ù…Ø§ ng-template ÙÙ‡Ùˆ Template Ù„Ø§ ÙŠØªÙ… Ø¹Ø±Ø¶Ù‡ Ù…Ø¨Ø§Ø´Ø±Ø©ØŒ ÙˆØ¥Ù†Ù…Ø§ ÙŠØªÙ… Ø¹Ø±Ø¶Ù‡ Ø¹Ù†Ø¯Ù…Ø§ Angular ØªÙ‚ÙˆÙ… Ø¨Ø¹Ù…Ù„ Instantiate Ù„Ù‡.

Ø¨Ø¨Ø³Ø§Ø·Ø©:

ng-container â†’ grouping Ø¨Ø¯ÙˆÙ† Element Ø­Ù‚ÙŠÙ‚ÙŠ
ng-template  â†’ Template Ù…Ø®ÙÙŠ Ø­ØªÙ‰ ÙŠØªÙ… Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡
178. Ù…Ø§ Ù‡Ùˆ Angular 17 Control FlowØŸ

Angular Ù‚Ø¯Ù…Øª Syntax Ø­Ø¯ÙŠØ« Ù„Ù„Ù€Control Flow:

@if
@for
@switch

Ø¨Ø¯Ù„ Ø§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯ Ø¹Ù„Ù‰ Syntax Ù…Ø«Ù„:

*ngIf
*ngFor
*ngSwitch

Ù…Ø«Ù„Ø§Ù‹:

@for (user of users; track user.id) {
    <p>{{ user.name }}</p>
}

Ø§Ù„Ù…ÙŠØ²Ø© Ø¥Ù†Ù‡ Ø£ÙƒØ«Ø± ÙˆØ¶ÙˆØ­Ù‹Ø§ØŒ Ùˆ@for ØªØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ track Ø¨Ø´ÙƒÙ„ Ù…Ø¨Ø§Ø´Ø± Ù„ØªØ­Ø³ÙŠÙ† ØªØªØ¨Ø¹ Ø§Ù„Ø¹Ù†Ø§ØµØ±.

179. Ù…Ø§ Ù‡Ùˆ @deferØŸ

@defer ØªØ³Ù…Ø­ Ù„Ù†Ø§ Ø¨ØªØ£Ø¬ÙŠÙ„ ØªØ­Ù…ÙŠÙ„ Ø£Ø¬Ø²Ø§Ø¡ Ù…Ù† Ø§Ù„Ù€UI Ø­ØªÙ‰ Ù†Ø­ØªØ§Ø¬Ù‡Ø§.

Ù…Ø«Ù„Ø§Ù‹ Ù„Ùˆ Ø¹Ù†Ø¯ÙŠ Component Ø«Ù‚ÙŠÙ„ Ù…ÙˆØ¬ÙˆØ¯ Ø£Ø³ÙÙ„ Ø§Ù„ØµÙØ­Ø©ØŒ Ù…Ø´ Ù„Ø§Ø²Ù… Ø£Ø­Ù…Ù„Ù‡ Ù…Ø¹ Ø¨Ø¯Ø§ÙŠØ© Ø§Ù„ØªØ·Ø¨ÙŠÙ‚.

Ù…Ù…ÙƒÙ† Ø£Ø®Ù„ÙŠÙ‡ ÙŠØªØ­Ù…Ù„ Ø¹Ù†Ø¯Ù…Ø§:

ÙŠØ¯Ø®Ù„ Ø§Ù„Ù€Viewport
Ø£Ùˆ
Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙŠØªÙØ§Ø¹Ù„ Ù…Ø¹Ù‡
Ø£Ùˆ
ÙŠØ­Ø¯Ø« Trigger Ù…Ø¹ÙŠÙ†

Ø§Ù„Ù‡Ø¯Ù:

ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„Ù€Initial Load ÙˆØªØ­Ø³ÙŠÙ† Performance.

180. ÙƒÙŠÙ ÙŠØ­Ø³Ù† OnPush Ø§Ù„Ù€PerformanceØŸ

ÙÙŠ Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„Ø¹Ø§Ø¯ÙŠ Angular ØªÙ‚ÙˆÙ… Ø¨ÙØ­Øµ Components Ø¨Ø´ÙƒÙ„ Ø£ÙˆØ³Ø¹ Ø£Ø«Ù†Ø§Ø¡ Change Detection.

Ø£Ù…Ø§ OnPush ÙØªØ³Ù…Ø­ Ù„Ù€Angular Ø¨ØªØ®Ø·ÙŠ Ø£Ø¬Ø²Ø§Ø¡ Ù…Ù† Component Tree Ø¹Ù†Ø¯Ù…Ø§ Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø³Ø¨Ø¨ Ù„Ù„ÙØ­Øµ.

ÙŠØªÙ… ÙØ­Øµ Component Ø¹Ù†Ø¯ Ø£Ø³Ø¨Ø§Ø¨ Ù…Ø«Ù„:

Input Reference ØªØºÙŠØ±
Event Ø­Ø¯Ø« Ø¯Ø§Ø®Ù„ Component
Observable ÙÙŠ Template Ø£ØµØ¯Ø± Ù‚ÙŠÙ…Ø©

ÙˆØ¨Ø§Ù„ØªØ§Ù„ÙŠ Ù†Ù‚Ù„Ù„ Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù€Change Detection ØºÙŠØ± Ø§Ù„Ø¶Ø±ÙˆØ±ÙŠØ©.

181. Ù„Ù…Ø§Ø°Ø§ trackBy Ø£Ùˆ track Ù…Ù‡Ù…ØŸ

Ù„Ù…Ø§ ÙŠÙƒÙˆÙ† Ø¹Ù†Ø¯Ù†Ø§ List:

<div *ngFor="let user of users">

Angular ØªØ­ØªØ§Ø¬ ØªØ¹Ø±Ù:

Ø£ÙŠ Ø¹Ù†ØµØ± Ù‡Ùˆ Ù†ÙØ³ Ø§Ù„Ø¹Ù†ØµØ± Ø§Ù„Ù‚Ø¯ÙŠÙ…ØŸ ÙˆØ£ÙŠ Ø¹Ù†ØµØ± Ø¬Ø¯ÙŠØ¯ØŸ

Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… trackBy:

trackById(index: number, user: User) {
    return user.id;
}

Ø£Ùˆ ÙÙŠ Angular Ø§Ù„Ø­Ø¯ÙŠØ«Ø©:

@for (user of users; track user.id) {
}

Angular ØªØ³ØªØ·ÙŠØ¹ ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… ID Ø¨Ø¯Ù„ Ø¥Ø¹Ø§Ø¯Ø© Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù€DOM ÙƒÙ„Ù‡.

ÙˆØ¯Ù‡ ÙŠØ­Ø³Ù† Performance Ø®ØµÙˆØµÙ‹Ø§ Ù…Ø¹ Ø§Ù„Ù‚ÙˆØ§Ø¦Ù… Ø§Ù„ÙƒØ¨ÙŠØ±Ø©.

182. Ù…Ø§ Ø§Ù„ÙØ±Ù‚ Ø¨ÙŠÙ† Lazy Loading ÙˆPreloadingØŸ
Lazy Loading

Ù„Ø§ Ù†Ø­Ù…Ù„ Ø§Ù„Ù€Feature Ø¥Ù„Ø§ Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ­ØªØ§Ø¬Ù‡Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù….

User opens Admin
       â†“
Admin loads
Preloading

Ø¨Ø¹Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØŒ Angular ØªÙ‚ÙˆÙ… Ø¨ØªØ­Ù…ÙŠÙ„ Ø¨Ø¹Ø¶ Ø§Ù„Ù€Features ÙÙŠ Ø§Ù„Ø®Ù„ÙÙŠØ© Ù‚Ø¨Ù„ Ø£Ù† ÙŠØ­ØªØ§Ø¬Ù‡Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù….

App loads
   â†“
Home appears
   â†“
Admin loads in background

ÙŠØ¹Ù†ÙŠ:

Lazy Loading â†’ Ø§Ù„ØªØ­Ù…ÙŠÙ„ Ø¹Ù†Ø¯ Ø§Ù„Ø­Ø§Ø¬Ø©
Preloading   â†’ Ø§Ù„ØªØ­Ù…ÙŠÙ„ Ù„Ø§Ø­Ù‚Ù‹Ø§ ÙÙŠ Ø§Ù„Ø®Ù„ÙÙŠØ© Ù‚Ø¨Ù„ Ø§Ù„Ø­Ø§Ø¬Ø©
183. ÙƒÙŠÙ ØªØ­Ø³Ù† Pure Pipes Ø§Ù„Ù€Performance Ù…Ù‚Ø§Ø±Ù†Ø© Ø¨Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ Methods Ø¯Ø§Ø®Ù„ TemplateØŸ

Ø§Ù„Ù€Pure Pipe Ù„Ø§ ØªØ¹ÙŠØ¯ ØªÙ†ÙÙŠØ° Ù†ÙØ³Ù‡Ø§ Ø¨Ø¯ÙˆÙ† Ø¯Ø§Ø¹ÙØ› Angular ØªØ³ØªØ·ÙŠØ¹ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡Ø§ Ø·Ø§Ù„Ù…Ø§ Ø§Ù„Ù€Input Ù„Ù… ÙŠØªØºÙŠØ±.

Ø£Ù…Ø§ Ù„Ùˆ ÙƒØªØ¨Øª:

{{ calculateTotal() }}

ÙØ§Ù„Ù€Method Ù‚Ø¯ ÙŠØªÙ… Ø§Ø³ØªØ¯Ø¹Ø§Ø¤Ù‡Ø§ Ø£Ø«Ù†Ø§Ø¡ Ø¯ÙˆØ±Ø§Øª Change Detection Ø¨Ø´ÙƒÙ„ Ù…ØªÙƒØ±Ø±.

Ù„Ø°Ù„Ùƒ ÙÙŠ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø©:

Pure Pipe â†’ Angular ØªÙ‚Ø¯Ø± ØªØ¹ØªÙ…Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„Ø³Ø§Ø¨Ù‚Ø©
Method     â†’ Ù…Ù…ÙƒÙ† ØªØªÙ†ÙØ° Ù…Ø±Ø§Øª ÙƒØ«ÙŠØ±Ø©

ÙˆØ¨Ø§Ù„ØªØ§Ù„ÙŠ Pure Pipes Ø£ÙØ¶Ù„ Ù„Ù„Ù€Performance Ø¹Ù†Ø¯Ù…Ø§ Ù†Ø³ØªØ®Ø¯Ù…Ù‡Ø§ Ø¨Ø§Ù„Ø´ÙƒÙ„ Ø§Ù„Ù…Ù†Ø§Ø³Ø¨.

184. ÙƒÙŠÙ ØªØ³Ø§Ø¹Ø¯ shareReplay ÙÙŠ Ù…Ù†Ø¹ Performance BottlenecksØŸ

ØªØ®ÙŠÙ„ÙŠ Ø¥Ù† Ø¹Ù†Ø¯ÙŠ API:

GET /users

ÙˆÙ„Ùˆ 5 Components Ø§Ø´ØªØ±ÙƒÙˆØ§ ÙÙŠ Ù†ÙØ³ ObservableØŒ Ù…Ù…ÙƒÙ† ÙŠÙ†ØªÙ‡ÙŠ Ø¨Ù†Ø§ Ø§Ù„Ø£Ù…Ø± Ø¨Ø¹Ù…Ù„ Ù†ÙØ³ Ø§Ù„Ù€Request Ø£ÙƒØ«Ø± Ù…Ù† Ù…Ø±Ø©.

shareReplay ØªØ³Ù…Ø­ Ø¨Ù…Ø´Ø§Ø±ÙƒØ© Ø¢Ø®Ø± Ù†ØªÙŠØ¬Ø© Ø¨ÙŠÙ† Subscribers ÙˆØ¥Ø¹Ø§Ø¯Ø© Ø§Ø³ØªØ®Ø¯Ø§Ù…Ù‡Ø§.

Ù…Ø«Ù„Ø§Ù‹:

users$ = this.http.get('/api/users').pipe(
    shareReplay(1)
);

Ù‡Ù†Ø§ ÙŠÙ…ÙƒÙ† Ù„Ø£ÙƒØ«Ø± Ù…Ù† Subscriber Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù†ÙØ³ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø¨Ø¯Ù„ Ø¥Ø¹Ø§Ø¯Ø© ØªÙ†ÙÙŠØ° Ù†ÙØ³ Ø§Ù„Ù€Observable ÙƒÙ„ Ù…Ø±Ø©.

Ø§Ù„ÙÙƒØ±Ø©:

Ø¨Ø¯ÙˆÙ† shareReplay
Component 1 â†’ API
Component 2 â†’ API
Component 3 â†’ API

Ù…Ø¹ shareReplay
             â†’ API
                â†“
        Cached/Shared result
        â†™      â†“       â†˜
       C1      C2       C3

ÙˆØ¯Ù‡ Ù…ÙÙŠØ¯ Ø¬Ø¯Ù‹Ø§ Ù…Ø¹ API Calls Ø§Ù„Ù…ØªÙƒØ±Ø±Ø©.

ðŸ”¥ Interview Scenarios â€” Ù…Ù† 185 Ø¥Ù„Ù‰ 189
185. ÙƒÙŠÙ ØªØµÙ…Ù… Architecture Ù„ØªØ·Ø¨ÙŠÙ‚ Angular Enterprise ÙƒØ¨ÙŠØ±ØŸ

Ø£Ù‚Ø³Ù… Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ Ø¥Ù„Ù‰ Ø£Ø¬Ø²Ø§Ø¡ ÙˆØ§Ø¶Ø­Ø© Ø­Ø³Ø¨ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ©.

Ù…Ø«Ù„Ø§Ù‹:

Core
Shared
Features

Core:

ÙŠØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø´ÙŠØ§Ø¡ Ø§Ù„Ù…Ø´ØªØ±ÙƒØ© Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚ Ù…Ø«Ù„:

Authentication
Interceptors
Global Services
Guards

Shared:

ÙŠØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ Components ÙˆPipes ÙˆDirectives Ø§Ù„Ù‚Ø§Ø¨Ù„Ø© Ù„Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù….

Features:

ÙƒÙ„ Business Feature ØªÙƒÙˆÙ† Ù…Ù†Ø¸Ù…Ø© Ø¨Ø´ÙƒÙ„ Ù…Ø³ØªÙ‚Ù„ØŒ Ù…Ø«Ù„:

Users
Products
Orders
Payments

ÙˆØ£Ø³ØªØ®Ø¯Ù… Lazy Loading Ù„Ù„Ù€Features Ø§Ù„ÙƒØ¨ÙŠØ±Ø© Ù„ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„Ù€Initial Bundle.

Ø¥Ø¬Ø§Ø¨Ø© Interview Ù…Ø®ØªØµØ±Ø©:

"I would use a feature-based architecture with Core and Shared layers, lazy-load large features, keep reusable UI in Shared, and keep application-wide services in Core."

186. Ù…ØªÙ‰ Ø£Ø³ØªØ®Ø¯Ù… Local State ÙˆÙ…ØªÙ‰ Global StateØŸ

Ù„Ùˆ Ø§Ù„Ù€State ØªØ®Øµ Component ÙˆØ§Ø­Ø¯ ÙÙ‚Ø·ØŒ Ø£Ø³ØªØ®Ø¯Ù… Local State.

Ù…Ø«Ù„Ø§Ù‹:

Modal open/closed
Form values
Selected tab
Loading state

Ù„ÙƒÙ† Ù„Ùˆ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ØªØ­ØªØ§Ø¬Ù‡Ø§ Components ÙƒØ«ÙŠØ±Ø© Ø£Ùˆ Features Ù…Ø®ØªÙ„ÙØ©ØŒ Ø£Ø³ØªØ®Ø¯Ù… Global State.

Ù…Ø«Ù„Ø§Ù‹:

Authenticated user
Shopping cart
Application settings
Shared server state

Ø¨Ø¨Ø³Ø§Ø·Ø©:

Local  â†’ ØªØ®Øµ Ø¬Ø²Ø¡ ØµØºÙŠØ± Ù…Ù† Ø§Ù„ØªØ·Ø¨ÙŠÙ‚
Global â†’ ØªØ­ØªØ§Ø¬Ù‡Ø§ Ø£Ø¬Ø²Ø§Ø¡ ÙƒØ«ÙŠØ±Ø© Ù…Ù† Ø§Ù„ØªØ·Ø¨ÙŠÙ‚
187. ÙƒÙŠÙ ØªØµÙ…Ù… Authentication & Authorization Ø¨Ø´ÙƒÙ„ Ø¢Ù…Ù†ØŸ

Ø£ÙØ±Ù‚ Ø£ÙˆÙ„Ù‹Ø§ Ø¨ÙŠÙ†:

Authentication

Ù…ÙŠÙ† Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ØŸ

Authorization

Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø¯Ù‡ Ù…Ø³Ù…ÙˆØ­ Ù„Ù‡ ÙŠØ¹Ù…Ù„ Ø¥ÙŠÙ‡ØŸ

Ø§Ù„Ù€Flow ÙŠÙƒÙˆÙ† ØªÙ‚Ø±ÙŠØ¨Ù‹Ø§:

Login
 â†“
Backend validates credentials
 â†“
Authentication result / token
 â†“
Client sends credentials with API requests
 â†“
Backend validates authorization

ÙˆØ£Ø³ØªØ®Ø¯Ù…:

HTTP Interceptor
Route Guards
401 handling
Token expiration / refresh strategy

ÙˆØ§Ù„Ø£Ù‡Ù…: Ø§Ù„Ù€Frontend Guard Ù„ÙŠØ³ ÙˆØ³ÙŠÙ„Ø© Ø§Ù„Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ©Ø› Ø§Ù„Ù€Backend ÙŠØ¬Ø¨ Ø£Ù† ÙŠØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„ØµÙ„Ø§Ø­ÙŠØ§Øª Ø£ÙŠØ¶Ù‹Ø§.

188. Ù„Ùˆ Web Application Ø¨Ø·ÙŠØ¡ Ø¬Ø¯Ù‹Ø§ Ø¹Ù„Ù‰ 3GØŒ Ù…Ø§Ø°Ø§ ØªÙØ¹Ù„ØŸ

Ø£Ø±ÙƒØ² Ø£ÙˆÙ„Ù‹Ø§ Ø¹Ù„Ù‰ ØªÙ‚Ù„ÙŠÙ„ ÙƒÙ…ÙŠØ© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ù€JavaScript Ø§Ù„ØªÙŠ ÙŠØªÙ… ØªØ­Ù…ÙŠÙ„Ù‡Ø§ ÙÙŠ Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©.

Ø£Ø³ØªØ®Ø¯Ù…:

Lazy Loading
@defer
ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„Ù€Initial Bundle
Ø¶ØºØ· ÙˆØªÙ‚Ù„ÙŠÙ„ Ø­Ø¬Ù… Ø§Ù„ØµÙˆØ± ÙˆØ§Ù„Assets
Caching
SSR / Hydration Ø­Ø³Ø¨ Architecture
Virtual Scrolling Ù„Ù„Ù‚ÙˆØ§Ø¦Ù… Ø§Ù„ÙƒØ¨ÙŠØ±Ø©
ØªÙ‚Ù„ÙŠÙ„ API Requests ØºÙŠØ± Ø§Ù„Ø¶Ø±ÙˆØ±ÙŠØ©

Ø§Ù„ÙÙƒØ±Ø©:

3G
 â†“
Bandwidth Ù‚Ù„ÙŠÙ„
 â†“
Ù‚Ù„Ù„ Initial Payload
 â†“
Lazy load + defer + cache
 â†“
ØµÙØ­Ø© ØªØ¸Ù‡Ø± Ø£Ø³Ø±Ø¹
189. ÙƒÙŠÙ ØªØµÙ…Ù… Centralized Error HandlingØŸ

Ø¨Ø¯Ù„ Ù…Ø§ Ø£Ø¹Ù…Ù„ Error Handling ÙÙŠ ÙƒÙ„ ComponentØŒ Ø£Ø¹Ù…Ù„ Ù†Ø¸Ø§Ù… Ù…Ø±ÙƒØ²ÙŠ.

Ø£Ø³ØªØ®Ø¯Ù…:

Global Error Handler

Ù„Ø£Ø®Ø·Ø§Ø¡ Ø§Ù„Ù€Runtime.

HTTP Interceptor

Ù„Ø£Ø®Ø·Ø§Ø¡ Ø§Ù„Ù€HTTP Ù…Ø«Ù„:

401
403
404
500

ÙˆØ§Ù„Ù€Flow ÙŠÙƒÙˆÙ†:

Error
 â†“
Centralized Handler
 â†“
Log error
 â†“
Monitoring
 â†“
User-friendly message

Ù…Ø«Ù„Ø§Ù‹ Ø¨Ø¯Ù„ Ù…Ø§ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙŠØ´ÙˆÙ:

HttpErrorResponse: 500...

ÙŠØ´ÙˆÙ:

"Something went wrong. Please try again later."

ÙˆÙÙŠ Ù†ÙØ³ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø§Ù„ØªÙ‚Ù†ÙŠØ© ÙŠØªÙ… ØªØ³Ø¬ÙŠÙ„Ù‡Ø§ Ù„Ù„Ù€Development Team.

âœ… ÙƒØ¯Ù‡ Ø¨Ø§Ù„Ø¶Ø¨Ø· Ø§Ù„Ø¬Ø²Ø¡ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨ Ù…Ù†Ùƒ
40â€“49   CSS
50â€“58   Bootstrap
59â€“68   Tailwind
69â€“80   SASS/SCSS
81â€“98   JavaScript
176â€“184 Angular
185â€“189 Interview Scenarios

ÙˆØ¯Ù‡ Ù‡Ùˆ Ø§Ù„Ø¬Ø²Ø¡ Ø§Ù„Ù„ÙŠ Ø·Ù„Ø¨ØªÙŠÙ‡ ØªØ­Ø¯ÙŠØ¯Ù‹Ø§ØŒ Ø¨Ø¯ÙˆÙ† Ø¥Ø¯Ø®Ø§Ù„ 99â€“175 ÙÙŠ Ø§Ù„Ù†Øµ.
`;
