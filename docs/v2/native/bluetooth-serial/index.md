---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "bluetooth-serial"
title: "Bluetooth Serial"
header_sub_title: "Class in module "
doc: "Bluetooth Serial"
docType: "class"
---








<h1 class="api-title">

  
  Bluetooth Serial
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/bluetoothserial.ts#L1'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-bluetooth-serial</code></pre>
<p>Repo:
  <a href="https://github.com/don/BluetoothSerial">
    https://github.com/don/BluetoothSerial
  </a>
</p>

<!-- description -->

<p>This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone</li>
  
  <li>Browser</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->


<!-- @property tags -->
<h2>Static Methods</h2>
<div id="connect"></div>
<h3><code>connect(macAddress_or_uuid)</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


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
      macAddress_or_uuid
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Identifier of the remote device</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="connectInsecure"></div>
<h3><code>connectInsecure(macAddress)</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;


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
      macAddress
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Identifier of the remote device</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="disconnect"></div>
<h3><code>disconnect()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Disconnect










<div id="write"></div>
<h3><code>write(data)</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


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
      data
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>ArrayBuffer of data</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="available"></div>
<h3><code>available()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Gets the number of bytes of data available










<div id="read"></div>
<h3><code>read()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Reads data from the buffer










<div id="readUntil"></div>
<h3><code>readUntil(delimiter)</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


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
      delimiter
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="subscribe"></div>
<h3><code>subscribe(delimiter)</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


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
      delimiter
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="subscribeRawData"></div>
<h3><code>subscribeRawData()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Subscribe to be notified when data is received










<div id="clear"></div>
<h3><code>clear()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Clears data in buffer










<div id="list"></div>
<h3><code>list()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Lists bonded devices










<div id="isEnabled"></div>
<h3><code>isEnabled()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Reports if bluetooth is enabled










<div id="isConnected"></div>
<h3><code>isConnected()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Reports the connection status










<div id="readRSSI"></div>
<h3><code>readRSSI()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Reads the RSSI from the connected peripheral










<div id="showBluetoothSettings"></div>
<h3><code>showBluetoothSettings()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Show the Bluetooth settings on the device










<div id="enable"></div>
<h3><code>enable()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Enable Bluetooth on the device










<div id="discoverUnpaired"></div>
<h3><code>discoverUnpaired()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Discover unpaired devices








<div id="setDeviceDiscoveredListener"></div>
<h3><code>setDeviceDiscoveredListener()</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;

<code>iOS</code>&nbsp;

<code>Windows Phone</code>&nbsp;


Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.










<div id="setName"></div>
<h3><code>setName(newName)</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;


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
      newName
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Desired name of device</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="setDiscoverable"></div>
<h3><code>setDiscoverable(discoverableDuration)</code>

</h3>


<b>Platforms:</b>
<code>Android</code>&nbsp;


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
      discoverableDuration
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Desired number of seconds device should be discoverable for</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

