---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "abbyy-real-time-recognition"
title: "ABBYY Real-Time Recognition"
header_sub_title: "Class in module "
doc: "ABBYY Real-Time Recognition"
docType: "class"
---

<h1 class="api-title">ABBYY Real-Time Recognition</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/abbyy-rtr/index.ts#L260">
  Improve this doc
</a>







<p>This plugin allows to use the Text Capture and Data Capture features of
ABBYY Real-Time Recognition SDK (RTR SDK) in apps.</p>


<p>Repo:
  <a href="https://github.com/abbyysdk/RTR-SDK.Cordova">
    https://github.com/abbyysdk/RTR-SDK.Cordova
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-abbyy-rtr-sdk
$ npm install --save @ionic-native/abbyy-rtr
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AbbyyRTR } from &#39;@ionic-native/abbyy-rtr&#39;;


constructor(private abbyyRTR: AbbyyRTR) { }

...


this.abbyyRTR.startTextCapture(options)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));


this.abbyyRTR.startDataCapture(options)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="startTextCapture" href="#startTextCapture"></a><code>startTextCapture(options)</code></h3>


Opens a modal dialog with controls for the Text Capture scenario.
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
      <code>TextCaptureOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;TextCaptureResult&gt;</code> 
</div><h3><a class="anchor" name="startDataCapture" href="#startDataCapture"></a><code>startDataCapture(options)</code></h3>


Opens a modal dialog with controls for the Data Capture scenario.
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
      <code>DataCaptureOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DataCaptureResult&gt;</code> 
</div>





