---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2/2.0.0-rc.2"
path: ""
category: api
id: "animation"
title: "Animation"
header_sub_title: "Ionic API Documentation"
doc: "Animation"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="animation" href="#animation"></a>

Animation





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/animations/animation.ts#L1">
Improve this doc
</a>










<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="parent"></div>

<h3>
<a class="anchor" name="parent" href="#parent"></a>
<code>parent</code>
  

</h3>












<div id="opts"></div>

<h3>
<a class="anchor" name="opts" href="#opts"></a>
<code>opts</code>
  

</h3>












<div id="hasChildren"></div>

<h3>
<a class="anchor" name="hasChildren" href="#hasChildren"></a>
<code>hasChildren</code>
  

</h3>












<div id="isPlaying"></div>

<h3>
<a class="anchor" name="isPlaying" href="#isPlaying"></a>
<code>isPlaying</code>
  

</h3>












<div id="hasCompleted"></div>

<h3>
<a class="anchor" name="hasCompleted" href="#hasCompleted"></a>
<code>hasCompleted</code>
  

</h3>












<div id="element"></div>

<h3>
<a class="anchor" name="element" href="#element"></a>
<code>element()</code>
  

</h3>












<div id="add"></div>

<h3>
<a class="anchor" name="add" href="#add"></a>
<code>add()</code>
  

</h3>

Add a child animation to this animation.











<div id="getDuration"></div>

<h3>
<a class="anchor" name="getDuration" href="#getDuration"></a>
<code>getDuration()</code>
  

</h3>

Get the duration of this animation. If this animation does
not have a duration, then it'll get the duration from its parent.











<div id="duration"></div>

<h3>
<a class="anchor" name="duration" href="#duration"></a>
<code>duration()</code>
  

</h3>

Set the duration for this animation.











<div id="getEasing"></div>

<h3>
<a class="anchor" name="getEasing" href="#getEasing"></a>
<code>getEasing()</code>
  

</h3>

Get the easing of this animation. If this animation does
not have an easing, then it'll get the easing from its parent.











<div id="easing"></div>

<h3>
<a class="anchor" name="easing" href="#easing"></a>
<code>easing()</code>
  

</h3>

Set the easing for this animation.











<div id="from"></div>

<h3>
<a class="anchor" name="from" href="#from"></a>
<code>from()</code>
  

</h3>

Add the "from" value for a specific property.











<div id="to"></div>

<h3>
<a class="anchor" name="to" href="#to"></a>
<code>to()</code>
  

</h3>

Add the "to" value for a specific property.











<div id="fromTo"></div>

<h3>
<a class="anchor" name="fromTo" href="#fromTo"></a>
<code>fromTo()</code>
  

</h3>

Shortcut to add both the "from" and "to" for the same property.











<div id="beforeAddClass"></div>

<h3>
<a class="anchor" name="beforeAddClass" href="#beforeAddClass"></a>
<code>beforeAddClass()</code>
  

</h3>

Add CSS class to this animation's elements
before the animation begins.











<div id="beforeRemoveClass"></div>

<h3>
<a class="anchor" name="beforeRemoveClass" href="#beforeRemoveClass"></a>
<code>beforeRemoveClass()</code>
  

</h3>

Remove CSS class from this animation's elements
before the animation begins.











<div id="beforeStyles"></div>

<h3>
<a class="anchor" name="beforeStyles" href="#beforeStyles"></a>
<code>beforeStyles()</code>
  

</h3>

Set CSS inline styles to this animation's elements
before the animation begins.











<div id="beforeClearStyles"></div>

<h3>
<a class="anchor" name="beforeClearStyles" href="#beforeClearStyles"></a>
<code>beforeClearStyles()</code>
  

</h3>

Clear CSS inline styles from this animation's elements
before the animation begins.











<div id="beforeAddRead"></div>

<h3>
<a class="anchor" name="beforeAddRead" href="#beforeAddRead"></a>
<code>beforeAddRead()</code>
  

</h3>

Add a function which contains DOM reads, which will run
before the animation begins.











<div id="beforeAddWrite"></div>

<h3>
<a class="anchor" name="beforeAddWrite" href="#beforeAddWrite"></a>
<code>beforeAddWrite()</code>
  

</h3>

Add a function which contains DOM writes, which will run
before the animation begins.











<div id="afterAddClass"></div>

<h3>
<a class="anchor" name="afterAddClass" href="#afterAddClass"></a>
<code>afterAddClass()</code>
  

</h3>

Add CSS class to this animation's elements
after the animation finishes.











<div id="afterRemoveClass"></div>

<h3>
<a class="anchor" name="afterRemoveClass" href="#afterRemoveClass"></a>
<code>afterRemoveClass()</code>
  

</h3>

Remove CSS class from this animation's elements
after the animation finishes.











<div id="afterStyles"></div>

<h3>
<a class="anchor" name="afterStyles" href="#afterStyles"></a>
<code>afterStyles()</code>
  

</h3>

Set CSS inline styles to this animation's elements
after the animation finishes.











<div id="afterClearStyles"></div>

<h3>
<a class="anchor" name="afterClearStyles" href="#afterClearStyles"></a>
<code>afterClearStyles()</code>
  

</h3>

Clear CSS inline styles from this animation's elements
after the animation finishes.











<div id="play"></div>

<h3>
<a class="anchor" name="play" href="#play"></a>
<code>play()</code>
  

</h3>

Play the animation.











<div id="stop"></div>

<h3>
<a class="anchor" name="stop" href="#stop"></a>
<code>stop()</code>
  

</h3>

Immediately stop at the end of the animation.











<div id="progressStart"></div>

<h3>
<a class="anchor" name="progressStart" href="#progressStart"></a>
<code>progressStart()</code>
  

</h3>

Start the animation with a user controlled progress.











<div id="progressStep"></div>

<h3>
<a class="anchor" name="progressStep" href="#progressStep"></a>
<code>progressStep()</code>
  

</h3>

Set the progress step for this animation.











<div id="progressEnd"></div>

<h3>
<a class="anchor" name="progressEnd" href="#progressEnd"></a>
<code>progressEnd()</code>
  

</h3>

End the progress animation.











<div id="onFinish"></div>

<h3>
<a class="anchor" name="onFinish" href="#onFinish"></a>
<code>onFinish()</code>
  

</h3>

Add a callback to fire when the animation has finished.











<div id="reverse"></div>

<h3>
<a class="anchor" name="reverse" href="#reverse"></a>
<code>reverse()</code>
  

</h3>

Reverse the animation.











<div id="destroy"></div>

<h3>
<a class="anchor" name="destroy" href="#destroy"></a>
<code>destroy()</code>
  

</h3>

Recursively destroy this animation and all child animations.














<!-- related link --><!-- end content block -->


<!-- end body block -->

