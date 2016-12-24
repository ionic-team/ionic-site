---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "base64-to-gallery"
title: "Base64 To Gallery"
header_sub_title: "Class in module "
doc: "Base64 To Gallery"
docType: "class"
---







<h1 class="api-title">
  
  Base64 To Gallery
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/base64togallery.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-base64-to-gallery</code></pre>
<p>Repo:
  <a href="https://github.com/Nexxa/cordova-base64-to-gallery">
    https://github.com/Nexxa/cordova-base64-to-gallery
  </a>
</p>

<!-- description -->

<p>This plugin allows you to save base64 data as a png image into the device</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Base64ToGallery } from &#39;ionic-native&#39;;


Base64ToGallery.base64ToGallery(base64Data, &#39;img_&#39;).then(
  res =&gt; console.log(&#39;Saved image to gallery &#39;, res),
  err =&gt; console.log(&#39;Error saving image to gallery &#39;, err)
);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="base64ToGallery"></div>
<h3><code>base64ToGallery(data,&nbsp;options)</code>
  
</h3>




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
      data
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The actual base64 string that you want to save</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>any</code>
    </td>
    <td>
      <p>(optional) An object with properties: prefix: string, mediaScanner: boolean. Prefix will be prepended to the filename. If true, mediaScanner runs Media Scanner on Android and saves to Camera Roll on iOS; if false, saves to Library folder on iOS.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise that resolves when the image is saved.
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

