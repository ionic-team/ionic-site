---
layout: "v2_fluid/docs_base"
version: "1.0.10"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "barcodescanner"
title: "BarcodeScanner"
header_sub_title: "Class in module "
doc: "BarcodeScanner"
docType: "class"
---








<h1 class="api-title">


BarcodeScanner






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master/src/plugins/barcodescanner.ts#L0'>
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

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">BarcodeScanner.scan().then((barcodeData) =&gt; {
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

