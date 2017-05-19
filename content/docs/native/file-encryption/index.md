---
layout: "fluid/docs_base"
version: "3.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "file-encryption"
title: "File Encryption"
header_sub_title: "Class in module "
doc: "File Encryption"
docType: "class"
---

<h1 class="api-title">File Encryption</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/file-encryption/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add cordova-safe
$ npm install --save @ionic-native/file-encryption
</code></pre>
<p>Repo:
  <a href="https://github.com/disusered/cordova-safe">
    https://github.com/disusered/cordova-safe
  </a>
</p>


<p>Simple file encryption for Cordova.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { FileEncryption } from &#39;@ionic-native/file-encryption&#39;;


constructor(private fileEncryption: FileEncryption) { }

...

this.fileEncryption.decrypt(&#39;assets/json/topSecret.json&#39;, &#39;secretKey&#39;);

this.fileEncryption.encrypt(&#39;assets/json/topSecret.json&#39;, &#39;secretKey&#39;);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="encrypt" href="#encrypt"></a><code>encrypt(file,&nbsp;key)</code></h3>


Enrcypt a file
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
      file</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string representing a local URI</p>
</td>
  </tr>
  
  <tr>
    <td>
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A key for the crypto operations</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="decrypt" href="#decrypt"></a><code>decrypt(file,&nbsp;key)</code></h3>


Decrypt a file
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
      file</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string representing a local URI</p>
</td>
  </tr>
  
  <tr>
    <td>
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A key for the crypto operations</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div>





