---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "blinkup"
title: "BlinkUp"
header_sub_title: "Class in module "
doc: "BlinkUp"
docType: "class"
---

<h1 class="api-title">BlinkUp</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/blinkup/index.ts#L31">
  Improve this doc
</a>







<p>Electric Imp BlinkUp ionic plugin.</p>


<p>Repo:
  <a href="https://github.com/SensorShare/cordova-plugin-blinkup">
    https://github.com/SensorShare/cordova-plugin-blinkup
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-blinkup
$ npm install --save @ionic-native/blinkup
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BlinkUp } from &#39;@ionic-native/blinkup&#39;;

const options = &lt;BlinkUpWifiOptions&gt;{
   apiKey: &#39;API_KEY&#39;,
   timeoutMs: 60000,
   ssid: &#39;MY_SSID&#39;,
   password: &#39;MY_PASSWORD&#39;
 }
 BlinkUp.flashWifiBlinkUp(options).subscribe(
    (result) =&gt; console.log(&#39;Done&#39;),
    (error) =&gt; console.log(error)
  )
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="startBlinkUp" href="#startBlinkUp"></a><code>startBlinkUp(options)</code></h3>




startBlinkUp - starts the blinkup process
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
      options</td>
    <td>
      <code>module:blinkup.BlinkUpOptions</code>
    </td>
    <td>
      <p>BlinkUp Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable
</div><h3><a class="anchor" name="flashWifiBlinkUp" href="#flashWifiBlinkUp"></a><code>flashWifiBlinkUp(options)</code></h3>




flashWifiBlinkUp - invokes the flash wifi process
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
      options</td>
    <td>
      <code>module:blinkup.BlinkUpWifiOptions</code>
    </td>
    <td>
      <p>BlinkUp Wifi Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable
</div><h3><a class="anchor" name="flashWPSBlinkUp" href="#flashWPSBlinkUp"></a><code>flashWPSBlinkUp(options)</code></h3>




flashWPSBlinkUp - invokes the flash wps process
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
      options</td>
    <td>
      <code>module:blinkup.BlinkUpWPSOptions</code>
    </td>
    <td>
      <p>BlinkUp WPS Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable
</div><h3><a class="anchor" name="abortBlinkUp" href="#abortBlinkUp"></a><code>abortBlinkUp()</code></h3>




abortBlinkUp - abort blinkup process


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable
</div><h3><a class="anchor" name="clearBlinkUpData" href="#clearBlinkUpData"></a><code>clearBlinkUpData()</code></h3>




clearBlinkUpData - clear wifi data


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable
</div>





