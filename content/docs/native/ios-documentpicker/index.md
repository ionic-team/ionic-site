---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "ios-documentpicker"
title: "iOS DocumentPicker"
header_sub_title: "Class in module "
doc: "iOS DocumentPicker"
docType: "class"
---

<h1 class="api-title">iOS DocumentPicker</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/document-picker/index.ts#L1">
  Improve this doc
</a>







<p>Opens the file picker on iOS for the user to select a file, returns a file URI.
Allows the user to upload files from iCloud</p>


<p>Repo:
  <a href="https://github.com/iampossible/Cordova-DocPicker">
    https://github.com/iampossible/Cordova-DocPicker
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-documentpicker.DocumentPicker
$ npm install --save @ionic-native/document-picker
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { IOSDocumentPicker } from &#39;@ionic-native/document-picker&#39;;

constructor(private docPicker: IOSDocumentPicker) { }

...

this.docPicker.getFile(&#39;all&#39;)
  .then(uri =&gt; console.log(uri))
  .catch(e =&gt; console.log(e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getFile" href="#getFile"></a><code>getFile(option)</code></h3>


Open a file
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
      option</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>files between &#39;image&#39;, &#39;pdf&#39; or &#39;all&#39;<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div>





