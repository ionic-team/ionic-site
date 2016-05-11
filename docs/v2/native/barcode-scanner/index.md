---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "barcode-scanner"
title: "Barcode Scanner"
header_sub_title: "Class in module "
doc: "Barcode Scanner"
docType: "class"
---








<h1 class="api-title">

  
  Barcode Scanner
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/barcodescanner.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add phonegap-plugin-barcodescanner</code></pre>
<p>Repo:
  <a href="https://github.com/phonegap/phonegap-plugin-barcodescanner">
    https://github.com/phonegap/phonegap-plugin-barcodescanner
  </a>
</p>

<!-- description -->

<p>The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.</p>
<p>Requires Cordova plugin: <code>phonegap-plugin-barcodescanner</code>. For more info, please see the <a href="https://github.com/phonegap/phonegap-plugin-barcodescanner">BarcodeScanner plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone 8</li>
  
  <li>Windows 10</li>
  
  <li>Windows 8</li>
  
  <li>BlackBerry 10</li>
  
  <li>Browser</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {BarcodeScanner} from &#39;ionic-native&#39;;


BarcodeScanner.scan().then((barcodeData) =&gt; {
 // Success! Barcode data is here
}, (err) =&gt; {
    // An error occurred
});
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="scan"></div>
<h3><code>scan()</code>

</h3>

Open the barcode scanner.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with scanner data, or rejects with an error.


</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

