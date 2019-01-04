---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "base64-to-gallery"
title: "Base64 To Gallery"
header_sub_title: "Class in module "
doc: "Base64 To Gallery"
docType: "class"
---

<h1 class="api-title">Base64 To Gallery</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/base64-to-gallery/index.ts#L11">
  Improve this doc
</a>







<p>This plugin allows you to save base64 data as a png image into the device</p>


<p>Repo:
  <a href="https://github.com/Nexxa/cordova-base64-to-gallery">
    https://github.com/Nexxa/cordova-base64-to-gallery
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-base64-to-gallery
$ npm install --save @ionic-native/base64-to-gallery
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Base64ToGallery } from &#39;@ionic-native/base64-to-gallery&#39;;

constructor(private base64ToGallery: Base64ToGallery) { }


...


this.base64ToGallery.base64ToGallery(base64Data, { prefix: &#39;_img&#39; }).then(
  res =&gt; console.log(&#39;Saved image to gallery &#39;, res),
  err =&gt; console.log(&#39;Error saving image to gallery &#39;, err)
);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="base64ToGallery" href="#base64ToGallery"></a><code>base64ToGallery(data,&nbsp;options)</code></h3>




Converts a base64 string to an image file in the device gallery
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
      data</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The actual base64 string that you want to save</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>An object with properties<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise that resolves when the image is saved.
</div>





<h2><a class="anchor" name="Base64ToGalleryOptions" href="#Base64ToGalleryOptions"></a>Base64ToGalleryOptions</h2>

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
      prefix
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Saved file name prefix</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      mediaScanner
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>On Android runs Media Scanner after file creation.
On iOS if true the file will be added to camera roll, otherwise will be saved to a library folder.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





