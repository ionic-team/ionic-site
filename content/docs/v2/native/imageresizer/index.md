---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "imageresizer"
title: "ImageResizer"
header_sub_title: "Class in module "
doc: "ImageResizer"
docType: "class"
---







<h1 class="api-title">
  
  ImageResizer
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/imageresizer.ts#L36">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git</code></pre>
<p>Repo:
  <a href="https://github.com/protonet/cordova-plugin-image-resizer">
    https://github.com/protonet/cordova-plugin-image-resizer
  </a>
</p>

<!-- description -->

<p>Cordova Plugin For Image Resize</p>
<p>Requires plugin <code>info.protonet.imageresizer</code> - use the Ionic CLI and type in the following command:
<code>ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git</code></p>
<p>For more info, please see the <a href="https://github.com/protonet/cordova-plugin-image-resizer">https://github.com/protonet/cordova-plugin-image-resizer</a></p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { ImageResizer, ImageResizerOptions } from &#39;ionic-native&#39;;

let options = {
 uri: uri,
 folderName: &#39;Protonet&#39;,
 quality: 90,
 width: 1280,
 height: 1280
} as ImageResizerOptions;

ImageResizer
.resize(options)
.then(
 (filePath: string) =&gt; { console.log(&#39;FilePath&#39;, filePath); },
 () =&gt; { console.log(&#39;Error occured&#39;); }
)
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="resize"></div>
<h3><code>resize()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the folder the image should be put
(Android only)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      quality
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Quality given as Number for the quality of the new image
(Android and iOS only)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      fileName
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A custom name for the file. Default name is a timestamp
(Android and Windows only)</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

