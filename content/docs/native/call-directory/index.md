---
layout: "fluid/docs_base"
version: "4.12.0"
versionHref: "/docs/native"
path: ""
category: native
id: "call-directory"
title: "Call Directory"
header_sub_title: "Class in module "
doc: "Call Directory"
docType: "class"
---

<h1 class="api-title">Call Directory</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/call-directory/index.ts#L6">
  Improve this doc
</a>







<p>This plugin can add phone numbers to an Callkit call directory extension. Call <code>reloadExtension</code> after using <code>addIdentification</code> and <code>removeIdentification</code>
to process the changes in the call directory extension.</p>


<p>Repo:
  <a href="https://github.com/GEDYSIntraWare/cordova-plugin-call-directory">
    https://github.com/GEDYSIntraWare/cordova-plugin-call-directory
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ cordova plugin add cordova-plugin-call-directory --variable EXT_NAME="Cordova-Directory" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES="NO"
$ npm install --save @ionic-native/call-directory
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { CallDirectory } from &#39;@ionic-native/call-directory&#39;;


constructor(private callDirectory: CallDirectory) { }


let items = [{label: &quot;Hello&quot;, number: &quot;123&quot;}];
this.callDirectory.addIdentification(items)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));

this.callDirectory.reloadExtension()
  .then(res: string) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


Check if the call directory extension is available and enabled


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise with result
</div><h3><a class="anchor" name="addIdentification" href="#addIdentification"></a><code>addIdentification(items)</code></h3>


Add identification numbers
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
      items</td>
    <td>
      <code>Array&lt;CallDirectoryItem&gt;</code>
    </td>
    <td>
      <p>Set of numbers with labels</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when numbers are added
</div><h3><a class="anchor" name="removeIdentification" href="#removeIdentification"></a><code>removeIdentification(items)</code></h3>


Remove identification numbers
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
      items</td>
    <td>
      <code>Array&lt;CallDirectoryItem&gt;</code>
    </td>
    <td>
      <p>Set of numbers with arbitrary label</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when numbers are removed
</div><h3><a class="anchor" name="removeAllIdentification" href="#removeAllIdentification"></a><code>removeAllIdentification()</code></h3>


Remove all items from call directory. Refreshes immediately.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise after refresh with message
</div><h3><a class="anchor" name="getAllItems" href="#getAllItems"></a><code>getAllItems()</code></h3>


Get all numbers and labels in call directory


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Array&lt;CallDirectoryItem&gt;</code> Returns a promise that resolves with an array of all items
</div><h3><a class="anchor" name="reloadExtension" href="#reloadExtension"></a><code>reloadExtension()</code></h3>


Reload extension to process queued changes


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise after refresh with message
</div>





