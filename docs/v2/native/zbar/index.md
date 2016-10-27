---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "zbar"
title: "ZBar"
header_sub_title: "Class in module "
doc: "ZBar"
docType: "class"
---







<h1 class="api-title">
  
  ZBar
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/z-bar.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-cszbar</code></pre>
<p>Repo:
  <a href="https://github.com/tjwoon/csZBar">
    https://github.com/tjwoon/csZBar
  </a>
</p>

<!-- description -->

<p>The ZBar Scanner Plugin allows you to scan 2d barcodes.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-cszbar</code>. For more info, please see the <a href="https://github.com/tjwoon/csZBar">zBar plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { ZBar } from &#39;ionic-native&#39;;

let zBarOptions = {
      flash: &quot;off&quot;,
      drawSight: false
    };

ZBar.scan(zBarOptions)
   .then(result =&gt; {
      console.log(result); // Scanned code
   })
   .catch(error =&gt; {
      console.log(error); // Error message
   });
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="scan"></div>
<h3><code>scan(options)</code>
  
</h3>


Open the scanner


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
      
<code>ZBarOptions</code>
    </td>
    <td>
      <p>Scan options</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the scanned string, or rejects with an error.


</div>




<!-- methods on the class -->

<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>zBar options</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Values</th>
<th>Defaults</th>
</tr>
</thead>
<tbody>
<tr>
<td>text_title</td>
<td><code>string?</code></td>
<td></td>
<td><code>&quot;Scan QR Code&quot;</code> (Android only)</td>
</tr>
<tr>
<td>text_instructions</td>
<td><code>string?</code></td>
<td></td>
<td><code>&quot;Please point your camera at the QR code.&quot;</code> (Android only)</td>
</tr>
<tr>
<td>camera</td>
<td><code>string?</code></td>
<td><code>&quot;front&quot;</code>, <code>&quot;back&quot;</code>,</td>
<td><code>&quot;back&quot;</code></td>
</tr>
<tr>
<td>flash</td>
<td><code>string?</code></td>
<td><code>&quot;on&quot;</code>, <code>&quot;off&quot;</code>, <code>&quot;auto&quot;</code></td>
<td><code>&quot;auto&quot;</code></td>
</tr>
<tr>
<td>drawSight</td>
<td><code>boolean?</code></td>
<td><code>true</code>, <code>false</code></td>
<td><code>true</code> (Draws red line in center of scanner)</td>
</tr>
</tbody>
</table>


<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

