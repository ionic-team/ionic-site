---
layout: "fluid/docs_base"
version: "4.2.1"
versionHref: "/docs/native"
path: ""
category: native
id: "documentreader"
title: "DocumentReader"
header_sub_title: "Class in module "
doc: "DocumentReader"
docType: "class"
---

<h1 class="api-title">DocumentReader</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/document-reader/index.ts#L1">
  Improve this doc
</a>







<p>Plugin for reading and validation of identification documents.</p>


<p>Repo:
  <a href="https://github.com/regulaforensics/cordova-plugin-documentreader.git">
    https://github.com/regulaforensics/cordova-plugin-documentreader.git
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic plugin add cordova-plugin-documentreader --variable CAMERA_USAGE_DESCRIPTION="To take photo"
$ npm install --save @ionic-native/document-reader
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { DocumentReader } from &#39;ionic-native&#39;;
var license; // read regula.license file
DocumentReader.scanDocument(license).then((result) =&gt; {
        // read result
})
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="scanDocument" href="#scanDocument"></a><code>scanDocument(license)</code></h3>


Run the scanner
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
      license</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>License data</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string[]&gt;</code> Returns a promise that resolves when results was got, and fails when not
</div>





