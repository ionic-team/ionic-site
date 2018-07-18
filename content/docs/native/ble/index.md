---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "ble"
title: "BLE"
header_sub_title: "Class in module "
doc: "BLE"
docType: "class"
---

<h1 class="api-title">BLE</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/ble/index.ts#L7">
  Improve this doc
</a>







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


<p>Repo:
  <a href="https://github.com/don/cordova-plugin-ble-central">
    https://github.com/don/cordova-plugin-ble-central
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-ble-central
$ npm install --save @ionic-native/ble
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BLE } from &#39;@ionic-native/ble&#39;;

constructor(private ble: BLE) { }
</code></pre>
<h2 id="peripheral-data">Peripheral Data</h2>
<p>Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning.</p>
<pre><code class="lang-typescript">{
    &#39;name&#39;: &#39;Battery Demo&#39;,
    &#39;id&#39;: &#39;20:FF:D0:FF:D1:C0&#39;,
    &#39;advertising&#39;: [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    &#39;rssi&#39;: -55
}
</code></pre>
<p>After connecting, the peripheral object also includes service, characteristic and descriptor information.</p>
<pre><code class="lang-typescript">{
    &#39;name&#39;: &#39;Battery Demo&#39;,
    &#39;id&#39;: &#39;20:FF:D0:FF:D1:C0&#39;,
    &#39;advertising&#39;: [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    &#39;rssi&#39;: -55,
    &#39;services&#39;: [
        &#39;1800&#39;,
        &#39;1801&#39;,
        &#39;180f&#39;
    ],
    &#39;characteristics&#39;: [
        {
            &#39;service&#39;: &#39;1800&#39;,
            &#39;characteristic&#39;: &#39;2a00&#39;,
            &#39;properties&#39;: [
                &#39;Read&#39;
            ]
        },
        {
            &#39;service&#39;: &#39;1800&#39;,
            &#39;characteristic&#39;: &#39;2a01&#39;,
            &#39;properties&#39;: [
                &#39;Read&#39;
            ]
        },
        {
            &#39;service&#39;: &#39;1801&#39;,
            &#39;characteristic&#39;: &#39;2a05&#39;,
            &#39;properties&#39;: [
                &#39;Read&#39;
            ]
        },
        {
            &#39;service&#39;: &#39;180f&#39;,
            &#39;characteristic&#39;: &#39;2a19&#39;,
            &#39;properties&#39;: [
                &#39;Read&#39;
            ],
            &#39;descriptors&#39;: [
                {
                    &#39;uuid&#39;: &#39;2901&#39;
                },
                {
                    &#39;uuid&#39;: &#39;2904&#39;
                }
            ]
        }
    ]
}
</code></pre>
<h2 id="advertising-data">Advertising Data</h2>
<p>Bluetooth advertising data is returned in when scanning for devices. The format varies depending on your platform. On Android advertising data will be the raw advertising bytes. iOS does not allow access to raw advertising data, so a dictionary of data is returned.</p>
<p>The advertising information for both Android and iOS appears to be a combination of advertising data and scan response data.</p>
<h3 id="android">Android</h3>
<pre><code class="lang-typescript"> {
     &#39;name&#39;: &#39;demo&#39;,
     &#39;id&#39;: &#39;00:1A:7D:DA:71:13&#39;,
     &#39;advertising&#39;: ArrayBuffer,
    &#39;rssi&#39;: -37
}
</code></pre>
<p>Convert the advertising info to a Uint8Array for processing. <code>var adData = new Uint8Array(peripheral.advertising)</code></p>
<h3 id="ios">iOS</h3>
<p>Note that iOS uses the string value of the constants for the <a href="https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys">Advertisement Data Retrieval Keys</a>. This will likely change in the future.</p>
<pre><code class="lang-typescript">{
    &#39;name&#39;: &#39;demo&#39;,
    &#39;id&#39;: &#39;D8479A4F-7517-BCD3-91B5-3302B2F81802&#39;,
    &#39;advertising&#39;: {
        &#39;kCBAdvDataChannel&#39;: 37,
        &#39;kCBAdvDataServiceData&#39;: {
            &#39;FED8&#39;: {
                &#39;byteLength&#39;: 7 // data not shown
            }
        },
        &#39;kCBAdvDataLocalName&#39;: &#39;demo&#39;,
        &#39;kCBAdvDataServiceUUIDs&#39;: [&#39;FED8&#39;],
        &#39;kCBAdvDataManufacturerData&#39;: {
            &#39;byteLength&#39;: 7  // data not shown
        },
        &#39;kCBAdvDataTxPowerLevel&#39;: 32,
        &#39;kCBAdvDataIsConnectable&#39;: true
    },
    &#39;rssi&#39;: -53
}
</code></pre>
<h2 id="typed-arrays">Typed Arrays</h2>
<p>This plugin uses typed Arrays or ArrayBuffers for sending and receiving data.</p>
<p>This means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving.</p>
<pre><code class="lang-typescript">// ASCII only
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








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="scan" href="#scan"></a><code>scan(services,&nbsp;seconds)</code></h3>




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
      services</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>List of service UUIDs to discover, or <code>[]</code> to find all devices</p>
</td>
  </tr>
  
  <tr>
    <td>
      seconds</td>
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
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable that notifies of each peripheral that is discovered during the specified time.
</div><h3><a class="anchor" name="startScan" href="#startScan"></a><code>startScan(services)</code></h3>




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
      services</td>
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
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable that notifies of each peripheral discovered.
</div><h3><a class="anchor" name="startScanWithOptions" href="#startScanWithOptions"></a><code>startScanWithOptions(services,&nbsp;options)</code></h3>




Scans for BLE devices. This function operates similarly to the `startScan` function, but allows you to specify extra options (like allowing duplicate device reports).
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
      services</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>List of service UUIDs to discover, or <code>[]</code> to find all devices</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>BLEScanOptions</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable that notifies of each peripheral discovered.
</div><h3><a class="anchor" name="stopScan" href="#stopScan"></a><code>stopScan()</code></h3>


Stop a scan started by `startScan`.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="connect" href="#connect"></a><code>connect(deviceId)</code></h3>




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
      deviceId</td>
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
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable that notifies of connect/disconnect.
</div><h3><a class="anchor" name="autoConnect" href="#autoConnect"></a><code>autoConnect(deviceId,&nbsp;connectCallback,&nbsp;disconnectCallback)</code></h3>




Establish an automatic connection to a peripheral. The phone will automatically connect to the Bluetooth peripheral
whenever it is in range. The autoConnect function uses callbacks instead of observables because connect and
disconnect can each be called many times as a devices connects and disconnects.

On Android you can pass a MAC address directly to autoConnect. With iOS, you need to get a device id by scanning,
calling ble.peripheralsWithIdentifiers, or calling ble.connectedPeripheralsWithServices.

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
      deviceId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>
</td>
  </tr>
  
  <tr>
    <td>
      connectCallback</td>
    <td>
      <code>function</code>
    </td>
    <td>
      <p>function that is called with peripheral data when the devices connects</p>
</td>
  </tr>
  
  <tr>
    <td>
      disconnectCallback</td>
    <td>
      <code>function</code>
    </td>
    <td>
      <p>function that is called with peripheral data when the devices disconnects</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="requestMtu" href="#requestMtu"></a><code>requestMtu(deviceId,&nbsp;mtuSize)</code></h3>


Request MTU size.
May be used to fix the Error 14 "Unlikely" on write requests with more than 20 bytes.
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
      deviceId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>
</td>
  </tr>
  
  <tr>
    <td>
      mtuSize</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The new MTU size. (23 - 517, default is usually 23. Max recommended: 512)</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise.
</div><h3><a class="anchor" name="refreshDeviceCache" href="#refreshDeviceCache"></a><code>refreshDeviceCache(deviceId,&nbsp;timeoutMillis)</code></h3>


Refresh Device Cache
This method may fix a issue of old cached services and characteristics.
NOTE Since this uses an undocumented API it's not guaranteed to work.
If you choose a too low delay time (timeoutMillis) the method could fail.
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
      deviceId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>
</td>
  </tr>
  
  <tr>
    <td>
      timeoutMillis</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Delay in milliseconds after refresh before discovering services.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise.
</div><h3><a class="anchor" name="disconnect" href="#disconnect"></a><code>disconnect(deviceId)</code></h3>


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
      deviceId</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise
</div><h3><a class="anchor" name="read" href="#read"></a><code>read(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID)</code></h3>


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
      deviceId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>
</td>
  </tr>
  
  <tr>
    <td>
      serviceUUID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>
</td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise
</div><h3><a class="anchor" name="write" href="#write"></a><code>write(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID,&nbsp;value)</code></h3>


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
      deviceId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>
</td>
  </tr>
  
  <tr>
    <td>
      serviceUUID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>
</td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID of the BLE characteristic</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise
</div><h3><a class="anchor" name="writeWithoutResponse" href="#writeWithoutResponse"></a><code>writeWithoutResponse(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID,&nbsp;value)</code></h3>


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
      deviceId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>
</td>
  </tr>
  
  <tr>
    <td>
      serviceUUID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>
</td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID of the BLE characteristic</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise
</div><h3><a class="anchor" name="startNotification" href="#startNotification"></a><code>startNotification(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID)</code></h3>




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
      deviceId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>
</td>
  </tr>
  
  <tr>
    <td>
      serviceUUID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>
</td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID</td>
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
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable that notifies of characteristic changes.
</div><h3><a class="anchor" name="stopNotification" href="#stopNotification"></a><code>stopNotification(deviceId,&nbsp;serviceUUID,&nbsp;characteristicUUID)</code></h3>


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
      deviceId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID or MAC address of the peripheral</p>
</td>
  </tr>
  
  <tr>
    <td>
      serviceUUID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID of the BLE service</p>
</td>
  </tr>
  
  <tr>
    <td>
      characteristicUUID</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isConnected" href="#isConnected"></a><code>isConnected(deviceId)</code></h3>


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
      deviceId</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isEnabled" href="#isEnabled"></a><code>isEnabled()</code></h3>


Report if bluetooth is enabled.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a Promise that resolves if Bluetooth is enabled, and rejects if disabled.
</div><h3><a class="anchor" name="startStateNotifications" href="#startStateNotifications"></a><code>startStateNotifications()</code></h3>




Register to be notified when Bluetooth state changes on the device.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable that notifies when the Bluetooth is enabled or disabled on the device.
</div><h3><a class="anchor" name="stopStateNotifications" href="#stopStateNotifications"></a><code>stopStateNotifications()</code></h3>


Stop state notifications.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="showBluetoothSettings" href="#showBluetoothSettings"></a><code>showBluetoothSettings()</code></h3>


Open System Bluetooth settings (Android only).



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="enable" href="#enable"></a><code>enable()</code></h3>


Enable Bluetooth on the device (Android only).



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="readRSSI" href="#readRSSI"></a><code>readRSSI(deviceId)</code></h3>


Read the RSSI value on the device connection.

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
      deviceId</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="connectedPeripheralsWithServices" href="#connectedPeripheralsWithServices"></a><code>connectedPeripheralsWithServices(services)</code></h3>


Retrieves a list of the peripherals (containing any of the specified services)
currently connected to the system. The peripheral list is sent to the success callback.
iOS only

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
      services</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>List of services to discover</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise with a list of peripheral objects
</div><h3><a class="anchor" name="peripheralsWithIdentifiers" href="#peripheralsWithIdentifiers"></a><code>peripheralsWithIdentifiers(uuids)</code></h3>


Find the connected peripherals offering the listed service UUIDs.
iOS only

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
      uuids</td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>List of peripheral UUIDs</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise with a list of peripheral objects
</div><h3><a class="anchor" name="bondedDevices" href="#bondedDevices"></a><code>bondedDevices()</code></h3>


Find the bonded devices
Android only



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise with a list of peripheral objects
</div>





<h2><a class="anchor" name="BLEScanOptions" href="#BLEScanOptions"></a>BLEScanOptions</h2>

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
      reportDuplicates
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>true if duplicate devices should be reported, false (default) if devices should only be reported once.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





