---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "brightness"
title: "Brightness"
header_sub_title: "Class in module "
doc: "Brightness"
docType: "class"
---








<h1 class="api-title">

  
  Brightness
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/brightness.ts#L0">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-brightness</code></pre>
<p>Repo:
  <a href="https://github.com/mgcrea/cordova-plugin-brightness">
    https://github.com/mgcrea/cordova-plugin-brightness
  </a>
</p>

<!-- description -->

<p>The Brightness plugin let you control the display brightness of your device.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-brightness</code>. For more info, please see the <a href="https://github.com/mgcrea/cordova-plugin-brightness">Brightness plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Brightness } from &#39;ionic-native&#39;;


let brightnessValue: number = 0.8;
Brightness.setBrightness(brightnessValue);
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="setBrightness"></div>
<h3><code>setBrightness(Floating)</code>
  
</h3>

Sets the brightness of the display.



<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      Floating
      
      
    </td>
    <td>
      
<code>value</code>
    </td>
    <td>
      <p>number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise that resolves if setting brightness was successful.
</div>



<div id="getBrightness"></div>
<h3><code>getBrightness()</code>
  
</h3>

Reads the current brightness of the device display.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a Promise that resolves with the
brightness value of the device display (floating number between 0 and 1).
</div>



<div id="setKeepScreenOn"></div>
<h3><code>setKeepScreenOn()</code>
  
</h3>

Keeps the screen on. Prevents the device from setting the screen to sleep.











<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

