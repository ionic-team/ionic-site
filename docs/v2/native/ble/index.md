---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "ble"
title: "BLE"
header_sub_title: "Class in module "
doc: "BLE"
docType: "class"
---








<h1 class="api-title">

  
  BLE
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/ble.ts#L1'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-ble-central</code></pre>
<p>Repo:
  <a href="https://github.com/don/cordova-plugin-ble-central">
    https://github.com/don/cordova-plugin-ble-central
  </a>
</p>

<!-- description -->

<p>This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.</p>
<p>The plugin provides a simple JavaScript API for iOS and Android.</p>
<ul>
<li>Scan for peripherals</li>
<li>Connect to a peripheral</li>
<li>Read the value of a characteristic</li>
<li>Write new value to a characteristic</li>
<li>Get notified when characteristic&#39;s value changes</li>
</ul>
<p>Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally.</p>
<p>Simultaneous connections to multiple peripherals are supported.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li>
  
  <li>Android</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<h2 id="peripheral-data">Peripheral Data</h2>
<p>Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning.</p>
<pre><code class="lang-ts">{
    &quot;name&quot;: &quot;Battery Demo&quot;,
    &quot;id&quot;: &quot;20:FF:D0:FF:D1:C0&quot;,
    &quot;advertising&quot;: [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    &quot;rssi&quot;: -55
}
</code></pre>
<p>After connecting, the peripheral object also includes service, characteristic and descriptor information.</p>
<pre><code class="lang-ts">{
    &quot;name&quot;: &quot;Battery Demo&quot;,
    &quot;id&quot;: &quot;20:FF:D0:FF:D1:C0&quot;,
    &quot;advertising&quot;: [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    &quot;rssi&quot;: -55,
    &quot;services&quot;: [
        &quot;1800&quot;,
        &quot;1801&quot;,
        &quot;180f&quot;
    ],
    &quot;characteristics&quot;: [
        {
            &quot;service&quot;: &quot;1800&quot;,
            &quot;characteristic&quot;: &quot;2a00&quot;,
            &quot;properties&quot;: [
                &quot;Read&quot;
            ]
        },
        {
            &quot;service&quot;: &quot;1800&quot;,
            &quot;characteristic&quot;: &quot;2a01&quot;,
            &quot;properties&quot;: [
                &quot;Read&quot;
            ]
        },
        {
            &quot;service&quot;: &quot;1801&quot;,
            &quot;characteristic&quot;: &quot;2a05&quot;,
            &quot;properties&quot;: [
                &quot;Read&quot;
            ]
        },
        {
            &quot;service&quot;: &quot;180f&quot;,
            &quot;characteristic&quot;: &quot;2a19&quot;,
            &quot;properties&quot;: [
                &quot;Read&quot;
            ],
            &quot;descriptors&quot;: [
                {
                    &quot;uuid&quot;: &quot;2901&quot;
                },
                {
                    &quot;uuid&quot;: &quot;2904&quot;
                }
            ]
        }
    ]
}
</code></pre>
<h2 id="advertising-data">Advertising Data</h2>
<p>Bluetooth advertising data is returned in when scanning for devices. The format format varies depending on your platform. On Android advertising data will be the raw advertising bytes. iOS does not allow access to raw advertising data, so a dictionary of data is returned.</p>
<p>The advertising information for both Android and iOS appears to be a combination of advertising data and scan response data.</p>
<h3 id="android">Android</h3>
<pre><code class="lang-ts"> {
     &quot;name&quot;: &quot;demo&quot;,
     &quot;id&quot;: &quot;00:1A:7D:DA:71:13&quot;,
     &quot;advertising&quot;: ArrayBuffer,
    &quot;rssi&quot;: -37
}
</code></pre>
<p>Convert the advertising info to a Uint8Array for processing. <code>var adData = new Uint8Array(peripheral.advertising)</code></p>
<h3 id="ios">iOS</h3>
<p>Note that iOS uses the string value of the constants for the <a href="https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys">Advertisement Data Retrieval Keys</a>. This will likely change in the future.</p>
<pre><code class="lang-ts">{
    &quot;name&quot;: &quot;demo&quot;,
    &quot;id&quot;: &quot;D8479A4F-7517-BCD3-91B5-3302B2F81802&quot;,
    &quot;advertising&quot;: {
        &quot;kCBAdvDataChannel&quot;: 37,
        &quot;kCBAdvDataServiceData&quot;: {
            &quot;FED8&quot;: {
                &quot;byteLength&quot;: 7 // data not shown
            }
        },
        &quot;kCBAdvDataLocalName&quot;: &quot;demo&quot;,
        &quot;kCBAdvDataServiceUUIDs&quot;: [&quot;FED8&quot;],
        &quot;kCBAdvDataManufacturerData&quot;: {
            &quot;byteLength&quot;: 7  // data not shown
        },
        &quot;kCBAdvDataTxPowerLevel&quot;: 32,
        &quot;kCBAdvDataIsConnectable&quot;: true
    },
    &quot;rssi&quot;: -53
}
</code></pre>
<h2 id="typed-arrays">Typed Arrays</h2>
<p>This plugin uses typed Arrays or ArrayBuffers for sending and receiving data.</p>
<p>This means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving.</p>
<pre><code class="lang-ts">// ASCII only
function stringToBytes(string) {
   var array = new Uint8Array(string.length);
   for (var i = 0, l = string.length; i &lt; l; i++) {
       array[i] = string.charCodeAt(i);
    }
    return array.buffer;
}

// ASCII only
function bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
}
</code></pre>
<p>You can read more about typed arrays in these articles on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays">MDN</a> and <a href="http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/">HTML5 Rocks</a>.</p>
<h2 id="uuids">UUIDs</h2>
<p>UUIDs are always strings and not numbers. Some 16-bit UUIDs, such as &#39;2220&#39; look like integers, but they&#39;re not. (The integer 2220 is 0x8AC in hex.) This isn&#39;t a problem with 128 bit UUIDs since they look like strings 82b9e6e1-593a-456f-be9b-9215160ebcac. All 16-bit UUIDs should also be passed to methods as strings.</p>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="scan"></div>
<h3><code>scan(services,&nbsp;seconds)</code>

</h3>



Scan and discover BLE peripherals for the specified amount of time.



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
      services
      
      
    </td>
    <td>
      
<code>string[]</code>
    </td>
    <td>
      <p>List of service UUIDs to discover, or <code>[]</code> to find all devices</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      seconds
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Number of seconds to run discovery</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns an Observable that notifies of each peripheral that is discovered during the specified time.


</div>



<div id="startScan"></div>
<h3><code>startScan(services)</code>

</h3>



Scan and discover BLE peripherals until `stopScan` is called.



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
      services
      
      
    </td>
    <td>
      
<code>string[]</code>
    </td>
    <td>
      <p>List of service UUIDs to discover, or <code>[]</code> to find all devices</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns an Observable that notifies of each peripheral discovered.


</div>



<div id="stopScan"></div>
<h3><code>stopScan()</code>

</h3>

Stop a scan started by `startScan`.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 returns a Promise.


</div>



<div id="connect"></div>
<h3><code>connect(deviceId)</code>

</h3>



Connect to a peripheral.


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
      deviceId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns an Observable that notifies of connect/disconnect.


</div>



<div id="disconnect"></div>
<h3><code>disconnect(deviceId)</code>

</h3>

Disconnect from a peripheral.


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
      deviceId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="read"></div>
<h3><code>read(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID)</code>

</h3>

Read the value of a characteristic.



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
      deviceId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      serviceUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE characteristic</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="write"></div>
<h3><code>write(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID,&nbsp;value)</code>

</h3>

Write the value of a characteristic.


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
      deviceId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      serviceUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE characteristic</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      value
      
      
    </td>
    <td>
      
<code>ArrayBuffer</code>
    </td>
    <td>
      <p>Data to write to the characteristic, as an ArrayBuffer.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="writeWithoutResponse"></div>
<h3><code>writeWithoutResponse(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID,&nbsp;value)</code>

</h3>

Write the value of a characteristic without waiting for confirmation from the peripheral.



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
      deviceId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      serviceUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE characteristic</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      value
      
      
    </td>
    <td>
      
<code>ArrayBuffer</code>
    </td>
    <td>
      <p>Data to write to the characteristic, as an ArrayBuffer.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise


</div>



<div id="startNotification"></div>
<h3><code>startNotification(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID)</code>

</h3>



Register to be notified when the value of a characteristic changes.



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
      deviceId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      serviceUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE characteristic</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns an Observable that notifies of characteristic changes.


</div>



<div id="stopNotification"></div>
<h3><code>stopNotification(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID)</code>

</h3>

Stop being notified when the value of a characteristic changes.



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
      deviceId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      serviceUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID of the BLE characteristic</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise.


</div>



<div id="isConnected"></div>
<h3><code>isConnected(deviceId)</code>

</h3>

Report the connection status.



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
      deviceId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise.


</div>



<div id="isEnabled"></div>
<h3><code>isEnabled()</code>

</h3>

Report if bluetooth is enabled.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise.


</div>



<div id="showBluetoothSettings"></div>
<h3><code>showBluetoothSettings()</code>

</h3>

Open System Bluetooth settings (Android only).







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise.


</div>



<div id="enable"></div>
<h3><code>enable()</code>

</h3>

Enable Bluetooth on the device (Android only).







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise.


</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

