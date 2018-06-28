---
layout: "fluid/docs_base"
version: "4.9.0"
versionHref: "/docs/native"
path: ""
category: native
id: "image-resizer"
title: "Image Resizer"
header_sub_title: "Class in module "
doc: "Image Resizer"
docType: "class"
---

<h1 class="api-title">Image Resizer</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/image-resizer/index.ts#L42">
  Improve this doc
</a>







<p>Cordova Plugin For Image Resize</p>


<p>Repo:
  <a href="https://github.com/JoschkaSchulz/cordova-plugin-image-resizer">
    https://github.com/JoschkaSchulz/cordova-plugin-image-resizer
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add info.protonet.imageresizer
$ npm install --save @ionic-native/image-resizer
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { ImageResizer, ImageResizerOptions } from &#39;@ionic-native/image-resizer&#39;;

constructor(private imageResizer: ImageResizer) { }

...

let options = {
 uri: uri,
 folderName: &#39;Protonet&#39;,
 quality: 90,
 width: 1280,
 height: 1280
} as ImageResizerOptions;

this.imageResizer
  .resize(options)
  .then((filePath: string) =&gt; console.log(&#39;FilePath&#39;, filePath))
  .catch(e =&gt; console.log(e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="resize" href="#resize"></a><code>resize()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="ImageResizerOptions" href="#ImageResizerOptions"></a>ImageResizerOptions</h2>

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
      uri
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The URI for the image on the device to get scaled</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      folderName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the folder the image should be put
(Android only)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      fileName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A custom name for the file. Default name is a timestamp. You have to set this value on iOS</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      quality
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Quality given as Number for the quality of the new image
(Android and iOS only)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The width of the new image</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The height of the new image</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      base64
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Whether or not to return a base64 encoded image string instead of the path to the resized image.
iOS only</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





