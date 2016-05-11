---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "flashlight"
title: "Flashlight"
header_sub_title: "Class in module "
doc: "Flashlight"
docType: "class"
---








<h1 class="api-title">

  
  Flashlight
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/flashlight.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-flashlight</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git">
    https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
  </a>
</p>

<!-- description -->

<p>This plugin allows you to switch the flashlight / torch of the device on and off.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-flashlight</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin">Flashlight plugin docs</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {Flashlight} from &#39;ionic-native&#39;;
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="available"></div>
<h3><code>available()</code>

</h3>

Checks if the flashlight is available






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with a boolean stating if the flashlight is available.
</div>



<div id="switchOn"></div>
<h3><code>switchOn()</code>

</h3>

Switches the flashlight on






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="switchOff"></div>
<h3><code>switchOff()</code>

</h3>

Switches the flashlight off






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="toggle"></div>
<h3><code>toggle()</code>

</h3>

Toggles the flashlight






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isSwitchedOn"></div>
<h3><code>isSwitchedOn()</code>

</h3>



Checks if the flashlight is turned on.
Returns a boolean











<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

