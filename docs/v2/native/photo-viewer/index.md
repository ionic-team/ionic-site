---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "photo-viewer"
title: "Photo Viewer"
header_sub_title: "Class in module "
doc: "Photo Viewer"
docType: "class"
---








<h1 class="api-title">

  
  Photo Viewer
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/photo-viewer.ts#L0">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add com-sarriaroman-photoviewer</code></pre>
<p>Repo:
  <a href="https://github.com/sarriaroman/photoviewer">
    https://github.com/sarriaroman/photoviewer
  </a>
</p>

<!-- description -->

<p>This plugin can display your image in full screen with the ability to pan, zoom, and share the image.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { PhotoViewer } from &#39;ionic-native&#39;;

PhotoViewer.show(&#39;https://mysite.com/path/to/image.jpg&#39;);

PhotoViewer.show(&#39;https://mysite.com/path/to/image.jpg&#39;, &#39;My image title&#39;, {share: false});
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="show"></div>
<h3><code>show(url,&nbsp;title,&nbsp;options)</code>
  
</h3>



Shows an image in full screen


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
      url
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>URL or path to image</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
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
      
      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

