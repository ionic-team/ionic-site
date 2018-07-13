---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "aes256"
title: "AES256"
header_sub_title: "Class in module "
doc: "AES256"
docType: "class"
---

<h1 class="api-title">AES256</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/aes-256/index.ts#L1">
  Improve this doc
</a>







<p>This cordova ionic plugin allows you to perform AES 256 encryption and decryption on the plain text.
It&#39;s a cross-platform plugin which supports both Android and iOS.
The encryption and decryption are performed on the device native layer so that the performance is much faster.</p>


<p>Repo:
  <a href="https://github.com/Ideas2IT/cordova-aes256">
    https://github.com/Ideas2IT/cordova-aes256
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-aes256-encryption
$ npm install --save @ionic-native/aes-256
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AES256 } from &#39;@ionic-native/aes-256&#39;;


constructor(private aES256: AES256) { }

...


this.aES256.encrypt(&#39;12345678123456781234567812345678&#39;, &#39;1234567812345678&#39;, &#39;testdata&#39;)
  .then(res =&gt; console.log(&#39;Encrypted Data: &#39;,res))
  .catch((error: any) =&gt; console.error(error));

this.aES256.decrypt(&#39;12345678123456781234567812345678&#39;, &#39;1234567812345678&#39;, &#39;encryptedData&#39;)
  .then(res =&gt; console.log(&#39;Decrypted Data : &#39;,res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="encrypt" href="#encrypt"></a><code>encrypt(secureKey,&nbsp;secureIV,&nbsp;data)</code></h3>


This function used to perform the aes256 encryption
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
      secureKey</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A 32 bytes string, which will used as input key for AES256 encryption.</p>
</td>
  </tr>
  
  <tr>
    <td>
      secureIV</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A 16 bytes string, which will used as initial vector for AES256 encryption.</p>
</td>
  </tr>
  
  <tr>
    <td>
      data</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string which will be encrypted</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves when encryption happens. The success response will returns encrypted data.
</div><h3><a class="anchor" name="decrypt" href="#decrypt"></a><code>decrypt(secureKey,&nbsp;secureIV,&nbsp;data)</code></h3>


This function used to perform the aes256 decryption
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
      secureKey</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A 32 bytes string, which will used as input key for AES256 decryption.</p>
</td>
  </tr>
  
  <tr>
    <td>
      secureIV</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A 16 bytes string, which will used as initial vector for AES256 decryption.</p>
</td>
  </tr>
  
  <tr>
    <td>
      data</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>An AES256 encrypted data which will be decrypted.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves when decryption happens. The success response will returns decrypted data.
</div>





