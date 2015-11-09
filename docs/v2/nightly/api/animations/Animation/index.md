---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{Animation | slugify}}"
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
</div>




<h1 class="api-title">

  Animation



</h1>





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


<h1 class="class export">Animation <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/animations/animation.ts#L2-L521">ionic/animations/animation.ts (line 2)</a>
</p>
## Members

<div id="reset"></div>
<h2>
  <code>reset()</code>

</h2>












<div id="elements"></div>
<h2>
  <code>elements()</code>

</h2>












<div id="addElement"></div>
<h2>
  <code>addElement()</code>

</h2>












<div id="parent"></div>
<h2>
  <code>parent()</code>

</h2>












<div id="add"></div>
<h2>
  <code>add()</code>

</h2>












<div id="duration"></div>
<h2>
  <code>duration()</code>

</h2>












<div id="clearDuration"></div>
<h2>
  <code>clearDuration()</code>

</h2>












<div id="easing"></div>
<h2>
  <code>easing()</code>

</h2>












<div id="playbackRate"></div>
<h2>
  <code>playbackRate()</code>

</h2>












<div id="reverse"></div>
<h2>
  <code>reverse()</code>

</h2>












<div id="forward"></div>
<h2>
  <code>forward()</code>

</h2>












<div id="from"></div>
<h2>
  <code>from()</code>

</h2>












<div id="to"></div>
<h2>
  <code>to()</code>

</h2>












<div id="fromTo"></div>
<h2>
  <code>fromTo()</code>

</h2>












<div id="fadeIn"></div>
<h2>
  <code>fadeIn()</code>

</h2>












<div id="fadeOut"></div>
<h2>
  <code>fadeOut()</code>

</h2>












<div id="before"></div>
<h2>
  <code>before()</code>

</h2>












<div id="after"></div>
<h2>
  <code>after()</code>

</h2>












<div id="play"></div>
<h2>
  <code>play()</code>

</h2>












<div id="stage"></div>
<h2>
  <code>stage()</code>

</h2>












<div id="pause"></div>
<h2>
  <code>pause()</code>

</h2>












<div id="progressStart"></div>
<h2>
  <code>progressStart()</code>

</h2>












<div id="progress"></div>
<h2>
  <code>progress()</code>

</h2>












<div id="getCurrentTime"></div>
<h2>
  <code>getCurrentTime()</code>

</h2>

Get the current time of the first animation
in the list. To get a specific time of an animation, call
subAnimationInstance.getCurrentTime()











<div id="progressEnd"></div>
<h2>
  <code>progressEnd()</code>

</h2>












<div id="onReady"></div>
<h2>
  <code>onReady()</code>

</h2>












<div id="onPlay"></div>
<h2>
  <code>onPlay()</code>

</h2>












<div id="onFinish"></div>
<h2>
  <code>onFinish()</code>

</h2>












<div id="clone"></div>
<h2>
  <code>clone()</code>

</h2>












<div id="dispose"></div>
<h2>
  <code>dispose()</code>

</h2>












