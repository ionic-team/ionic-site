---
layout: "fluid/docs_base"
version: "4.16.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/brightness/index.ts#L1">
  Improve this doc
</a>







<p>The Brightness plugin let you control the display brightness of your device.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-brightness</code>. For more info, please see the <a href="https://github.com/mgcrea/cordova-plugin-brightness">Brightness plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/mgcrea/cordova-plugin-brightness">
    https://github.com/mgcrea/cordova-plugin-brightness
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-brightness
$ npm install --save @ionic-native/brightness
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Brightness } from &#39;@ionic-native/brightness&#39;;

constructor(private brightness: Brightness) { }

...

let brightnessValue = 0.8;
this.brightness.setBrightness(brightnessValue);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="setBrightness" href="#setBrightness"></a><code>setBrightness(value)</code></h3>


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
      value</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Floating number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.</p>
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
</div><h3><a class="anchor" name="setKeepScreenOn" href="#setKeepScreenOn"></a><code>setKeepScreenOn(value)</code></h3>


Keeps the screen on. Prevents the device from setting the screen to sleep.
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
      value</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>







