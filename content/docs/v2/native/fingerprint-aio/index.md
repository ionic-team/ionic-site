---
layout: "v2_fluid/docs_base"
version: "3.3.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "fingerprint-aio"
title: "Fingerprint AIO"
header_sub_title: "Class in module "
doc: "Fingerprint AIO"
docType: "class"
---

<h1 class="api-title">Fingerprint AIO<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/fingerprint-aio/index.ts#L19">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio/issues">plugin repo</a>.
</p>



<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-fingerprint-aio
$ npm install --save @ionic-native/fingerprint-aio
</code></pre>
<p>Repo:
  <a href="https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio">
    https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
  </a>
</p>


<p>Use simple fingerprint authentication on Android and iOS.
Requires Cordova plugin: cordova-plugin-fingerprint-aio. For more info about plugin, vist: <a href="https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio">https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio</a></p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { FingerprintAIO } from &#39;@ionic-native/fingerprint-aio&#39;;

constructor(private faio: FingerpirntAIO) { }

...

this.faio.show({
    clientId: &quot;Fingerprint-Demo&quot;,
    clientSecret: &quot;password&quot;, //Only necessary for Android
    disableBackup:true  //Only for Android(optional)
})
.then((result: any) =&gt; console.log(result))
.catch((error: any) =&gt; console.log(error));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


Check if fingerprint authentication is available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise with result
</div><h3><a class="anchor" name="show" href="#show"></a><code>show(options)</code></h3>


Show authentication dialogue
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
      options</td>
    <td>
      <code>FingerprintOptions</code>
    </td>
    <td>
      <p>options for platform specific fingerprint API</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when authentication was successfull
</div>





<h2><a class="anchor" name="FingerprintOptions" href="#FingerprintOptions"></a>FingerprintOptions</h2>

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
      clientId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Key for platform keychain</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      clientSecret
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Secret password. Only for android</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      disableBackup
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Disable &#39;use backup&#39; option. Only for android (optional)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





