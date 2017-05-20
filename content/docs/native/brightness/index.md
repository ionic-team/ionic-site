---
layout: "fluid/docs_base"
version: "3.10.2"
versionHref: "/docs/native"
path: ""
category: native
id: "brightness"
title: "Brightness"
header_sub_title: "Class in module "
doc: "Brightness"
docType: "class"
---

<h1 class="api-title">Brightness</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/brightness/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-brightness
$ npm install --save @ionic-native/brightness
</code></pre>
<p>Repo:
  <a href="https://github.com/mgcrea/cordova-plugin-brightness">
    https://github.com/mgcrea/cordova-plugin-brightness
  </a>
</p>


<p>The Brightness plugin let you control the display brightness of your device.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-brightness</code>. For more info, please see the <a href="https://github.com/mgcrea/cordova-plugin-brightness">Brightness plugin docs</a>.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { Brightness } from &#39;@ionic-native/brightness&#39;;

constructor(private brightness: Brightness) { }

...

let brightnessValue: number = 0.8;
this.brightness.setBrightness(brightnessValue);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="setBrightness" href="#setBrightness"></a><code>setBrightness(Floating)</code></h3>


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
      Floating</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves if setting brightness was successful.
</div><h3><a class="anchor" name="getBrightness" href="#getBrightness"></a><code>getBrightness()</code></h3>


Reads the current brightness of the device display.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the
brightness value of the device display (floating number between 0 and 1).
</div><h3><a class="anchor" name="setKeepScreenOn" href="#setKeepScreenOn"></a><code>setKeepScreenOn()</code></h3>


Keeps the screen on. Prevents the device from setting the screen to sleep.









