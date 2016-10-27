---
layout: "v2_fluid/docs_base"
version: "2.2.6"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/barcodescanner.ts#L0">
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
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li><li>Windows 10</li><li>Windows 8</li><li>BlackBerry 10</li><li>Browser</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { BarcodeScanner } from &#39;ionic-native&#39;;


BarcodeScanner.scan().then((barcodeData) =&gt; {
 // Success! Barcode data is here
}, (err) =&gt; {
    // An error occurred
});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="scan"></div>
<h3><code>scan(options)</code>
  
</h3>




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
      options
      
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      <p>Optional options to pass to the scanner</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with scanner data, or rejects with an error.


</div>



<div id="encode"></div>
<h3><code>encode(type,&nbsp;data)</code>
  
</h3>


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
      type
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Type of encoding</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      data
      
      
    </td>
    <td>
      
<code>any</code>
    </td>
    <td>
      <p>Data to encode</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

