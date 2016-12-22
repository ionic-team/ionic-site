---
layout: "v2_fluid/docs_base"
version: "2.2.12"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/z-bar.ts#L34">
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
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the scanned string, or rejects with an error.
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="ZBarOptions" href="#ZBarOptions"></a>ZBarOptions</h2>


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
      text_title
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string representing the title text (Android only).
Default: &quot;Scan QR Code&quot;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      text_instructions
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string representing the instruction text (Android only).
Default: &quot;Please point your camera at the QR code.&quot;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      camera
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string defining the active camera when opening the scanner.
Possible values: &quot;front&quot;, &quot;back&quot;
Default: &quot;back&quot;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      flash
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string defining the state of the flash.
Possible values: &quot;on&quot;, &quot;off&quot;, &quot;auto&quot;
Default: &quot;auto&quot;</p>

    </td>
  </tr>
  
  <tr>
    <td>
      drawSight
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean to show or hide a line in the center of the scanner.
Default: true</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

