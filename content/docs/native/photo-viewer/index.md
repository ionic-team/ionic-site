---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "photo-viewer"
title: "Photo Viewer"
header_sub_title: "Class in module "
doc: "Photo Viewer"
docType: "class"
---

<h1 class="api-title">Photo Viewer</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/photo-viewer/index.ts#L8">
  Improve this doc
</a>







<p>This plugin can display your image in full screen with the ability to pan, zoom, and share the image.</p>


<p>Repo:
  <a href="https://github.com/sarriaroman/photoviewer">
    https://github.com/sarriaroman/photoviewer
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add com-sarriaroman-photoviewer
$ npm install --save @ionic-native/photo-viewer
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { PhotoViewer } from &#39;@ionic-native/photo-viewer&#39;;

constructor(private photoViewer: PhotoViewer) { }

...

this.photoViewer.show(&#39;https://mysite.com/path/to/image.jpg&#39;);

this.photoViewer.show(&#39;https://mysite.com/path/to/image.jpg&#39;, &#39;My image title&#39;, {share: false});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show(url,&nbsp;title,&nbsp;options)</code></h3>




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
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL or path to image</p>
</td>
  </tr>
  
  <tr>
    <td>
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>PhotoViewerOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>







