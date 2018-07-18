---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "file-path"
title: "File Path"
header_sub_title: "Class in module "
doc: "File Path"
docType: "class"
---

<h1 class="api-title">File Path</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/file-path/index.ts#L3">
  Improve this doc
</a>







<p>This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.</p>


<p>Repo:
  <a href="https://github.com/hiddentao/cordova-plugin-filepath">
    https://github.com/hiddentao/cordova-plugin-filepath
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-filepath
$ npm install --save @ionic-native/file-path
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FilePath } from &#39;@ionic-native/file-path&#39;;

constructor(private filePath: FilePath) { }

...

this.filePath.resolveNativePath(path)
  .then(filePath =&gt; console.log(filePath))
  .catch(err =&gt; console.log(err));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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
      <code>string</code>
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





