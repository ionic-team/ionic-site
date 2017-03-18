---
layout: "v2_fluid/docs_base"
version: "2.9.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "fingerprintaio"
title: "FingerprintAIO"
header_sub_title: "Class in module "
doc: "FingerprintAIO"
docType: "class"
---







<h1 class="api-title">
  
  FingerprintAIO
  

  

  <span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/fingerprint-aio.ts#L18">
  Improve this doc
</a>



<!-- decorators -->




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio/issues">plugin repo</a>.
</p>


<pre><code>$ ionic plugin add cordova-plugin-fingerprint-aio</code></pre>
<p>Repo:
  <a href="https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio">
    https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
  </a>
</p>

<!-- description -->

<p>Use simple fingerprint authentication on Android and iOS.
Requires Cordova plugin: cordova-plugin-fingerprint-aio. For more info about plugin, vist: <a href="https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio">https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio</a></p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { FingerprintAIO } from &#39;ionic-native&#39;;

FingerprintAIO.show({
    clientId: &quot;Fingerprint-Demo&quot;,
    clientSecret: &quot;password&quot;, //Only necessary for Android
    disableBackup:true  //Only for Android(optional)
})
.then((result: any) =&gt; console.log(any))
.catch((error: any) =&gt; console.log(error));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isAvailable"></div>
<h3><code>isAvailable()</code>
  
</h3>


Check if fingerprint authentication is available






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise with result
</div>



<div id="show"></div>
<h3><code>show(options)</code>
  
</h3>


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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when authentication was successfull
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Secret password. Only for android</p>

    </td>
  </tr>
  
  <tr>
    <td>
      disableBackup
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Disable &#39;use backup&#39; option. Only for android (optional)</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

