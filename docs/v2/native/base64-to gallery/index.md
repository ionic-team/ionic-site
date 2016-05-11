---
layout: "v2_fluid/docs_base"
version: "1.2.1"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/base64togallery.ts#L0'>
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
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone 8</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {Base64ToGallery} from &#39;ionic-native&#39;;


Base64ToGallery.base64ToGallery(base64Data, &#39;img_&#39;).then(
  res =&gt; console.log(&quot;Saved image to gallery &quot;, res),
  err =&gt; console.log(&quot;Error saving image to gallery &quot;, err)
);
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Instance Methods</h2>

<div id="base64ToGallery"></div>

<h3>
  <code>base64ToGallery(data,&nbsp;prefix)</code>


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
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      prefix
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>






<!-- related link --><!-- end content block -->


<!-- end body block -->

