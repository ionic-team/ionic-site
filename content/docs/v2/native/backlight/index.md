---
layout: "v2_fluid/docs_base"
version: "2.9.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "backlight"
title: "Backlight"
header_sub_title: "Class in module "
doc: "Backlight"
docType: "class"
---







<h1 class="api-title">
  
  Backlight
  

  

  <span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/backlight.ts#L0">
  Improve this doc
</a>



<!-- decorators -->




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/mebibou/cordova-plugin-backlight/issues">plugin repo</a>.
</p>


<pre><code>$ ionic plugin add cordova-plugin-backlight</code></pre>
<p>Repo:
  <a href="https://github.com/mebibou/cordova-plugin-backlight">
    https://github.com/mebibou/cordova-plugin-backlight
  </a>
</p>

<!-- description -->

<p>This plugin adds turning on/off the device backlight.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Backlight } from &#39;ionic-native&#39;;

// Turn backlight on
Backlight.on().then(() =&gt; console.log(&#39;backlight on&#39;));

// Turn backlight off
Backlight.off().then(() =&gt; console.log(&#39;backlight off&#39;));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="on"></div>
<h3><code>on()</code>
  
</h3>


This function turns backlight on






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when the backlight is on
</div>



<div id="off"></div>
<h3><code>off()</code>
  
</h3>


This function turns backlight off






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when the backlight is off
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

