---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "barcode-scanner"
title: "Barcode Scanner"
header_sub_title: "Class in module "
doc: "Barcode Scanner"
docType: "class"
---

<h1 class="api-title">Barcode Scanner</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/barcode-scanner/index.ts#L75">
  Improve this doc
</a>







<p>The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.</p>
<p>Requires Cordova plugin: <code>phonegap-plugin-barcodescanner</code>. For more info, please see the <a href="https://github.com/phonegap/phonegap-plugin-barcodescanner">BarcodeScanner plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/phonegap/phonegap-plugin-barcodescanner">
    https://github.com/phonegap/phonegap-plugin-barcodescanner
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add phonegap-plugin-barcodescanner
$ npm install --save @ionic-native/barcode-scanner
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>BlackBerry 10</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BarcodeScanner } from &#39;@ionic-native/barcode-scanner&#39;;

constructor(private barcodeScanner: BarcodeScanner) { }

...


this.barcodeScanner.scan().then(barcodeData =&gt; {
 console.log(&#39;Barcode data&#39;, barcodeData);
}).catch(err =&gt; {
    console.log(&#39;Error&#39;, err);
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="Encode" href="#Encode"></a><code>Encode</code></h3>




<h3><a class="anchor" name="scan" href="#scan"></a><code>scan(options)</code></h3>




Open the barcode scanner.
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
      <code>BarcodeScannerOptions</code>
    </td>
    <td>
      <p>Optional options to pass to the scanner<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with scanner data, or rejects with an error.
</div><h3><a class="anchor" name="encode" href="#encode"></a><code>encode(type,&nbsp;data)</code></h3>


Encodes data into a barcode.
NOTE: not well supported on Android
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
      type</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Type of encoding</p>
</td>
  </tr>
  
  <tr>
    <td>
      data</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Data to encode</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="BarcodeScannerOptions" href="#BarcodeScannerOptions"></a>BarcodeScannerOptions</h2>

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
      preferFrontCamera
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Prefer front camera. Supported on iOS and Android.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      showFlipCameraButton
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Show flip camera button. Supported on iOS and Android.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      showTorchButton
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Show torch button. Supported on iOS and Android.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      disableAnimations
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Disable animations. Supported on iOS only.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      disableSuccessBeep
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Disable success beep. Supported on iOS only.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      prompt
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Prompt text. Supported on Android only.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      formats
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Formats separated by commas. Defaults to all formats except <code>PDF_417</code> and <code>RSS_EXPANDED</code>.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      orientation
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Orientation. Supported on Android only. Can be set to <code>portrait</code> or <code>landscape</code>. Defaults to none so the user can rotate the phone and pick an orientation.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      torchOn
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Launch with the torch switched on (if available). Supported on Android only.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      resultDisplayDuration
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Display scanned text for X ms. 0 suppresses it entirely, default 1500. Supported on Android only.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="BarcodeScanResult" href="#BarcodeScanResult"></a>BarcodeScanResult</h2>

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
      format
    </td>
    <td>
      <code>| &#39;QR_CODE&#39;
    | &#39;DATA_MATRIX&#39;
    | &#39;UPC_E&#39;
    | &#39;UPC_A&#39;
    | &#39;EAN_8&#39;
    | &#39;EAN_13&#39;
    | &#39;CODE_128&#39;
    | &#39;CODE_39&#39;
    | &#39;CODE_93&#39;
    | &#39;CODABAR&#39;
    | &#39;ITF&#39;
    | &#39;RSS14&#39;
    | &#39;RSS_EXPANDED&#39;
    | &#39;PDF_417&#39;
    | &#39;AZTEC&#39;
    | &#39;MSI&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      cancelled
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      text
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





