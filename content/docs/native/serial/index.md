---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "serial"
title: "Serial"
header_sub_title: "Class in module "
doc: "Serial"
docType: "class"
---

<h1 class="api-title">Serial</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/serial/index.ts#L20">
  Improve this doc
</a>







<p>This plugin provides functions for working with Serial connections</p>


<p>Repo:
  <a href="https://github.com/xseignard/cordovarduino">
    https://github.com/xseignard/cordovarduino
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordovarduino
$ npm install --save @ionic-native/serial
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Ubuntu</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Serial } from &#39;@ionic-native/serial&#39;;

constructor(private serial: Serial) { }

...

this.serial.requestPermission().then(() =&gt; {
  this.serial.open({
    baudRate: 9800,
    dataBits: 4,
    stopBits: 1,
    parity: 0,
    dtr: true,
    rts: true,
    sleepOnPause: false
  }).then(() =&gt; {
    console.log(&#39;Serial connection opened&#39;);
  });
}).catch((error: any) =&gt; console.log(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="requestPermission" href="#requestPermission"></a><code>requestPermission(options)</code></h3>




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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when permissions are granted
</div><h3><a class="anchor" name="open" href="#open"></a><code>open(options)</code></h3>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the serial connection is opened
</div><h3><a class="anchor" name="write" href="#write"></a><code>write(data)</code></h3>


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
      data</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the write is complete
</div><h3><a class="anchor" name="writeHex" href="#writeHex"></a><code>writeHex(data)</code></h3>


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
      data</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the write is complete
</div><h3><a class="anchor" name="read" href="#read"></a><code>read()</code></h3>


Read from a serial connection



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves with data read from the serial connection
</div><h3><a class="anchor" name="registerReadCallback" href="#registerReadCallback"></a><code>registerReadCallback()</code></h3>




Watch the incoming data from the serial connection. Clear the watch by unsubscribing from the observable



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Observable returns an observable that you can subscribe to
</div><h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>


Close the serial connection



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the serial connection is closed
</div>





