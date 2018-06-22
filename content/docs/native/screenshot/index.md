---
layout: "fluid/docs_base"
version: "4.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "screenshot"
title: "Screenshot"
header_sub_title: "Class in module "
doc: "Screenshot"
docType: "class"
---

<h1 class="api-title">Screenshot</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/screenshot/index.ts#L3">
  Improve this doc
</a>







<p>Captures a screen shot</p>


<p>Repo:
  <a href="https://github.com/gitawego/cordova-screenshot">
    https://github.com/gitawego/cordova-screenshot
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add com.darktalker.cordova.screenshot
$ npm install --save @ionic-native/screenshot
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>macOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Screenshot } from &#39;@ionic-native/screenshot&#39;;

constructor(private screenshot: Screenshot) { }

...

// Take a screenshot and save to file
this.screenshot.save(&#39;jpg&#39;, 80, &#39;myscreenshot.jpg&#39;).then(onSuccess, onError);

// Take a screenshot and get temporary file URI
this.screenshot.URI(80).then(onSuccess, onError);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="save" href="#save"></a><code>save(format,&nbsp;quality,&nbsp;filename)</code></h3>

Takes screenshot and saves the image

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
      format</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Format can take the value of either &#39;jpg&#39; or &#39;png&#39;
On ios, only &#39;jpg&#39; format is supported</p>
</td>
  </tr>
  
  <tr>
    <td>
      quality</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Determines the quality of the screenshot.
       Default quality is set to 100.</p>
</td>
  </tr>
  
  <tr>
    <td>
      filename</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of the file as stored on the storage</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="URI" href="#URI"></a><code>URI(quality)</code></h3>

Takes screenshot and returns the image as an URI

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
      quality</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Determines the quality of the screenshot.
       Default quality is set to 100.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





