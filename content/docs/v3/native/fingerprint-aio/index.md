---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "fingerprint-aio"
title: "Fingerprint AIO"
header_sub_title: "Class in module "
doc: "Fingerprint AIO"
docType: "class"
---

<h1 class="api-title">Fingerprint AIO</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/fingerprint-aio/index.ts#L28">
  Improve this doc
</a>







<p>Use simple fingerprint authentication on Android and iOS.
Requires Cordova plugin: cordova-plugin-fingerprint-aio. For more info about plugin, vist: <a href="https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio">https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio</a></p>


<p>Repo:
  <a href="https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio">
    https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-fingerprint-aio
$ npm install --save @ionic-native/fingerprint-aio@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FingerprintAIO } from &#39;@ionic-native/fingerprint-aio&#39;;

constructor(private faio: FingerprintAIO) { }

...

this.faio.show({
    clientId: &#39;Fingerprint-Demo&#39;,
    clientSecret: &#39;password&#39;, //Only necessary for Android
    disableBackup:true,  //Only for Android(optional)
    localizedFallbackTitle: &#39;Use Pin&#39;, //Only for iOS
    localizedReason: &#39;Please authenticate&#39; //Only for iOS
})
.then((result: any) =&gt; console.log(result))
.catch((error: any) =&gt; console.log(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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
      <p>Options for platform specific fingerprint API</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when authentication was successful
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
  
  <tr>
    <td>
      localizedFallbackTitle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Title of fallback button. Only for iOS</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      localizedReason
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Description in authentication dialogue. Only for iOS</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





