---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "serial"
title: "Serial"
header_sub_title: "Class in module "
doc: "Serial"
docType: "class"
---







<h1 class="api-title">
  
  Serial
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/serial/index.ts#L14">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordovarduino
$ npm install --save @ionic-native/serial
</code></pre>
<p>Repo:
  <a href="https://github.com/xseignard/cordovarduino">
    https://github.com/xseignard/cordovarduino
  </a>
</p>

<!-- description -->

<p>This plugin provides functions for working with Serial connections</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Serial } from &#39;@ionic-native/serial&#39;;

constructor(private serial: Serial) { }

...

this.serial.requestPermission().then(() =&gt; {
  this.serial.open({
    baudRate: 9800
  }).then(() =&gt; {
    console.log(&#39;Serial connection opened&#39;);
  });
}).catch((error: any) =&gt; console.log(error));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="requestPermission"></div>
<h3>
  <code>requestPermission(options)</code>
  

</h3>
Request permission to connect to a serial device

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
      
<code>SerialPermissionOptions</code>
    </td>
    <td>
      <p>Options used to request serial permissions for an unknown device</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when permissions are granted
</div><div id="open"></div>
<h3>
  <code>open(options)</code>
  

</h3>
Open connection to a serial device

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
      
<code>SerialOpenOptions</code>
    </td>
    <td>
      <p>Options used to open serial connection</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when the serial connection is opened
</div><div id="write"></div>
<h3>
  <code>write(data)</code>
  

</h3>
Write to a serial connection

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
      data
      
      
    </td>
    <td>
      
<code>any</code>
    </td>
    <td>
      <p>data to write to the serial connection</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when the write is complete
</div><div id="writeHex"></div>
<h3>
  <code>writeHex(data)</code>
  

</h3>
Write hex to a serial connection

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
      data
      
      
    </td>
    <td>
      
<code>any</code>
    </td>
    <td>
      <p>data to write to the serial connection</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when the write is complete
</div><div id="read"></div>
<h3>
  <code>read()</code>
  

</h3>
Read from a serial connection



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves with data read from the serial connection
</div><div id="registerReadCallback"></div>
<h3>
  <code>registerReadCallback()</code>
  

</h3>
Watch the incoming data from the serial connection. Clear the watch by unsubscribing from the observable



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Observable returns an observable that you can subscribe to
</div><div id="close"></div>
<h3>
  <code>close()</code>
  

</h3>
Close the serial connection



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when the serial connection is closed
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

