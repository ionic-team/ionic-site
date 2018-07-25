---
layout: "fluid/docs_base"
version: "4.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "regula-document-reader"
title: "Regula Document Reader"
header_sub_title: "Class in module "
doc: "Regula Document Reader"
docType: "class"
---

<h1 class="api-title">Regula Document Reader<span class="beta" title="beta">&beta;</span><span class="paid" title="paid">Paid</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/regula-document-reader/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/regulaforensics/cordova-plugin-documentreader.git/issues">plugin repo</a>.
</p>


<p class="paid-notice">
  This plugin might require a paid license, or might take a share of your app's earnings.
  Check the <a target="_blank" rel="nofollow" href="https://github.com/regulaforensics/cordova-plugin-documentreader.git">plugin's repo</a> for more information.
</p>



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
$ npm install --save @ionic-native/regula-document-reader
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li><li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { RegulaDocumentReader } from &#39;@ionic-native/regula-document-reader&#39;;

let license; // read regula.license file
RegulaDocumentReader.initReader(license); // initialize reader
RegulaDocumentReader.scanDocument().then((result) =&gt; {
        // read result
})
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="initReader" href="#initReader"></a><code>initReader(license)</code></h3>


Initialize the scanner
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

<h3><a class="anchor" name="scanDocument" href="#scanDocument"></a><code>scanDocument()</code></h3>


Run the scanner


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string[]&gt;</code> Returns a promise that resolves when results was got, and fails when not
</div>





