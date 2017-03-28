---
layout: "v2_fluid/docs_base"
version: "3.3.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "image-resizer"
title: "Image Resizer"
header_sub_title: "Class in module "
doc: "Image Resizer"
docType: "class"
---

<h1 class="api-title">Image Resizer</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/image-resizer/index.ts#L37">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git
$ npm install --save @ionic-native/image-resizer
</code></pre>
<p>Repo:
  <a href="https://github.com/protonet/cordova-plugin-image-resizer">
    https://github.com/protonet/cordova-plugin-image-resizer
  </a>
</p>


<p>Cordova Plugin For Image Resize</p>
<p>Requires plugin <code>info.protonet.imageresizer</code> - use the Ionic CLI and type in the following command:
<code>ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git</code></p>
<p>For more info, please see the <a href="https://github.com/protonet/cordova-plugin-image-resizer">https://github.com/protonet/cordova-plugin-image-resizer</a></p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2>Usage</h2>
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








<h2>Instance Members</h2>
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
      fileName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A custom name for the file. Default name is a timestamp
(Android and Windows only)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





