---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "instagram"
title: "Instagram"
header_sub_title: "Class in module "
doc: "Instagram"
docType: "class"
---

<h1 class="api-title">Instagram</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/instagram/index.ts#L1">
  Improve this doc
</a>







<p>Share a photo with the instagram app</p>


<p>Repo:
  <a href="https://github.com/vstirbu/InstagramPlugin">
    https://github.com/vstirbu/InstagramPlugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-instagram-plugin
$ npm install --save @ionic-native/instagram
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Instagram } from &#39;@ionic-native/instagram&#39;;

constructor(private instagram: Instagram) { }

...

this.instagram.share(&#39;data:image/png;uhduhf3hfif33&#39;, &#39;Caption&#39;)
  .then(() =&gt; console.log(&#39;Shared!&#39;))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isInstalled" href="#isInstalled"></a><code>isInstalled()</code></h3>




Detect if the Instagram application is installed on the device.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean|string&gt;</code> Returns a promise that returns a boolean value if installed, or the app version on android
</div><h3><a class="anchor" name="share" href="#share"></a><code>share(canvasIdOrDataUrl,&nbsp;caption)</code></h3>




Share an image on Instagram
Note: Instagram app stopped accepting pre-filled captions on both iOS and Android. As a work-around, the caption is copied to the clipboard. You have to inform your users to paste the caption.

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
      canvasIdOrDataUrl</td>
    <td>
      
    </td>
    <td>
      <p>The canvas element id or the dataURL of the image to share</p>
</td>
  </tr>
  
  <tr>
    <td>
      caption</td>
    <td>
      
    </td>
    <td>
      <p>The caption of the image</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves if the image was shared
</div><h3><a class="anchor" name="shareAsset" href="#shareAsset"></a><code>shareAsset(assetLocalIdentifier)</code></h3>




Share a library asset or video
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
      assetLocalIdentifier</td>
    <td>
      
    </td>
    <td>
      <p>A local fileURI</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves if the image was shared
</div>





