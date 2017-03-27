---
layout: "v2_fluid/docs_base"
version: "3.3.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "file-path"
title: "File Path"
header_sub_title: "Class in module "
doc: "File Path"
docType: "class"
---

<h1 class="api-title">File Path</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/file-path/index.ts#L3">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-filepath
$ npm install --save @ionic-native/file-path
</code></pre>
<p>Repo:
  <a href="https://github.com/hiddentao/cordova-plugin-filepath">
    https://github.com/hiddentao/cordova-plugin-filepath
  </a>
</p>


<p>This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code>import { FilePath } from &#39;@ionic-native/file-path&#39;;

constructor(private filePath: FilePath) { }

...

this.filePath.resolveNativePath(path)
  .then(filePath =&gt; console.log(filePath);
  .catch(err =&gt; console.log(err);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="resolveNativePath" href="#resolveNativePath"></a><code>resolveNativePath(path)</code></h3>


Resolve native path for given content URL/path.
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
      path</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Content URL/path.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div>





