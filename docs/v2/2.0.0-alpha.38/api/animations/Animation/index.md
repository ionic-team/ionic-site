---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.38"
versionHref: "/docs/v2/2.0.0-alpha.38"
path: ""
category: api
id: "animation"
title: "Animation"
header_sub_title: "Class in module "
doc: "Animation"
docType: "class"
---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/animations/animation.ts#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/animations/animation.ts#L1'>
    Improve this doc
  </a>

  <!-- TODO(drewrygh, perrygovier): render this block in the correct location, markup identical to component docs -->

</div>




<h1 class="api-title">


Animation






</h1>






<h2>Description</h2>

<h2 id="animation-steps-process">Animation Steps/Process</h2>
<p>  1) Construct animation (doesn&#39;t start)
  2) Client play()&#39;s animation, returns promise
  3) Add before classes to elements
  4) Remove before classes from elements
  5) Elements staged in &quot;from&quot; effect w/ inline styles
  6) Call onReady()
  7) Wait for RENDER_DELAY milliseconds (give browser time to render)
  8) Call onPlay()
  8) Run from/to animation on elements
  9) Animations finish async
 10) Set inline styles w/ the &quot;to&quot; effects on elements
 11) Add after classes to elements
 12) Remove after classes from elements
 13) Call onFinish()
 14) Resolve play()&#39;s promise</p>

<h2>Usage</h2>





<h2>Methods</h2>

<div id="reset"></div>

<h3>
<code>reset()</code>

</h3>












<div id="elements"></div>

<h3>
<code>elements()</code>

</h3>












<div id="addElement"></div>

<h3>
<code>addElement()</code>

</h3>












<div id="parent"></div>

<h3>
<code>parent()</code>

</h3>












<div id="add"></div>

<h3>
<code>add()</code>

</h3>












<div id="duration"></div>

<h3>
<code>duration()</code>

</h3>












<div id="clearDuration"></div>

<h3>
<code>clearDuration()</code>

</h3>












<div id="easing"></div>

<h3>
<code>easing()</code>

</h3>












<div id="playbackRate"></div>

<h3>
<code>playbackRate()</code>

</h3>












<div id="reverse"></div>

<h3>
<code>reverse()</code>

</h3>












<div id="forward"></div>

<h3>
<code>forward()</code>

</h3>












<div id="from"></div>

<h3>
<code>from()</code>

</h3>












<div id="to"></div>

<h3>
<code>to()</code>

</h3>












<div id="fromTo"></div>

<h3>
<code>fromTo()</code>

</h3>












<div id="fadeIn"></div>

<h3>
<code>fadeIn()</code>

</h3>












<div id="fadeOut"></div>

<h3>
<code>fadeOut()</code>

</h3>












<div id="before"></div>

<h3>
<code>before()</code>

</h3>












<div id="after"></div>

<h3>
<code>after()</code>

</h3>












<div id="play"></div>

<h3>
<code>play()</code>

</h3>












<div id="stage"></div>

<h3>
<code>stage()</code>

</h3>












<div id="pause"></div>

<h3>
<code>pause()</code>

</h3>












<div id="progressStart"></div>

<h3>
<code>progressStart()</code>

</h3>












<div id="progress"></div>

<h3>
<code>progress()</code>

</h3>












<div id="getCurrentTime"></div>

<h3>
<code>getCurrentTime()</code>

</h3>

Get the current time of the first animation
in the list. To get a specific time of an animation, call
subAnimationInstance.getCurrentTime()











<div id="progressEnd"></div>

<h3>
<code>progressEnd()</code>

</h3>












<div id="onReady"></div>

<h3>
<code>onReady()</code>

</h3>












<div id="onPlay"></div>

<h3>
<code>onPlay()</code>

</h3>












<div id="onFinish"></div>

<h3>
<code>onFinish()</code>

</h3>












<div id="clone"></div>

<h3>
<code>clone()</code>

</h3>












<div id="dispose"></div>

<h3>
<code>dispose()</code>

</h3>










<!-- end content block -->


<!-- end body block -->


