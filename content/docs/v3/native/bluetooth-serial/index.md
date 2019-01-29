---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "bluetooth-serial"
title: "Bluetooth Serial"
header_sub_title: "Class in module "
doc: "Bluetooth Serial"
docType: "class"
---

<h1 class="api-title">Bluetooth Serial</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/bluetooth-serial/index.ts#L2">
  Improve this doc
</a>







<p>This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino (not Android to Android or iOS to iOS).</p>


<p>Repo:
  <a href="https://github.com/don/BluetoothSerial">
    https://github.com/don/BluetoothSerial
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-bluetooth-serial
$ npm install --save @ionic-native/bluetooth-serial@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BluetoothSerial } from &#39;@ionic-native/bluetooth-serial&#39;;

constructor(private bluetoothSerial: BluetoothSerial) { }


// Write a string
this.bluetoothSerial.write(&#39;hello world&#39;).then(success, failure);

// Array of int or bytes
this.bluetoothSerial.write([186, 220, 222]).then(success, failure);

// Typed Array
var data = new Uint8Array(4);
data[0] = 0x41;
data[1] = 0x42;
data[2] = 0x43;
data[3] = 0x44;
this.bluetoothSerial.write(data).then(success, failure);

// Array Buffer
this.bluetoothSerial.write(data.buffer).then(success, failure);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="connect" href="#connect"></a><code>connect(macAddress_or_uuid)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Connect to a Bluetooth device
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
      macAddress_or_uuid</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Identifier of the remote device</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Subscribe to connect, unsubscribe to disconnect.
</div><h3><a class="anchor" name="connectInsecure" href="#connectInsecure"></a><code>connectInsecure(macAddress)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Connect insecurely to a Bluetooth device
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
      macAddress</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Identifier of the remote device</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Subscribe to connect, unsubscribe to disconnect.
</div><h3><a class="anchor" name="disconnect" href="#disconnect"></a><code>disconnect()</code></h3>


Disconnect from the connected device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="write" href="#write"></a><code>write(data)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Writes data to the serial port
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
      <p>ArrayBuffer of data</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise when data has been written
</div><h3><a class="anchor" name="available" href="#available"></a><code>available()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Gets the number of bytes of data available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise that contains the available bytes
</div><h3><a class="anchor" name="read" href="#read"></a><code>read()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Reads data from the buffer


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise with data from the buffer
</div><h3><a class="anchor" name="readUntil" href="#readUntil"></a><code>readUntil(delimiter)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Reads data from the buffer until it reaches a delimiter
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
      delimiter</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>string that you want to search until</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise
</div><h3><a class="anchor" name="subscribe" href="#subscribe"></a><code>subscribe(delimiter)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Subscribe to be notified when data is received
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
      delimiter</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the string you want to watch for</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> returns an observable.
</div><h3><a class="anchor" name="subscribeRawData" href="#subscribeRawData"></a><code>subscribeRawData()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Subscribe to be notified when data is received


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> returns an observable
</div><h3><a class="anchor" name="clear" href="#clear"></a><code>clear()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Clears data in buffer


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise when completed
</div><h3><a class="anchor" name="list" href="#list"></a><code>list()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Lists bonded devices


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise
</div><h3><a class="anchor" name="isEnabled" href="#isEnabled"></a><code>isEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Reports if bluetooth is enabled


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise
</div><h3><a class="anchor" name="isConnected" href="#isConnected"></a><code>isConnected()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Reports the connection status


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise
</div><h3><a class="anchor" name="readRSSI" href="#readRSSI"></a><code>readRSSI()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Reads the RSSI from the connected peripheral


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise
</div><h3><a class="anchor" name="showBluetoothSettings" href="#showBluetoothSettings"></a><code>showBluetoothSettings()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Show the Bluetooth settings on the device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise
</div><h3><a class="anchor" name="enable" href="#enable"></a><code>enable()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Enable Bluetooth on the device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise
</div><h3><a class="anchor" name="discoverUnpaired" href="#discoverUnpaired"></a><code>discoverUnpaired()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Discover unpaired devices


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a promise
</div><h3><a class="anchor" name="setDeviceDiscoveredListener" href="#setDeviceDiscoveredListener"></a><code>setDeviceDiscoveredListener()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows Phone</strong>&nbsp;</p>


Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an observable
</div><h3><a class="anchor" name="setName" href="#setName"></a><code>setName(newName)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Sets the human readable device name that is broadcasted to other devices
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
      newName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Desired name of device</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setDiscoverable" href="#setDiscoverable"></a><code>setDiscoverable(discoverableDuration)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Makes the device discoverable by other devices
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
      discoverableDuration</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Desired number of seconds device should be discoverable for</p>
</td>
  </tr>
  </tbody>
</table>







