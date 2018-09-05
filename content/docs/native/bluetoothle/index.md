---
layout: "fluid/docs_base"
version: "4.12.2"
versionHref: "/docs/native"
path: ""
category: native
id: "bluetoothle"
title: "BluetoothLE"
header_sub_title: "Class in module "
doc: "BluetoothLE"
docType: "class"
---

<h1 class="api-title">BluetoothLE</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/bluetooth-le/index.ts#L374">
  Improve this doc
</a>







<p>This plugin has the most complete implementation for interacting with Bluetooth LE devices on Android, iOS and partially Windows.
It&#39;s a wrap around <a href="https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md">randdusing/cordova-plugin-bluetoothle</a> cordova plugin for Ionic.
It supports peripheral <strong>and</strong> central modes and covers most of the API methods available on Android and iOS.</p>


<p>Repo:
  <a href="https://github.com/randdusing/cordova-plugin-bluetoothle">
    https://github.com/randdusing/cordova-plugin-bluetoothle
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-bluetoothle
$ npm install --save @ionic-native/bluetooth-le
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BluetoothLE } from &#39;@ionic-native/bluetooth-le&#39;;


constructor(public bluetoothle: BluetoothLE, public plt: Platform) {

 this.plt.ready().then((readySource) =&gt; {

   console.log(&#39;Platform ready from&#39;, readySource);

   this.bluetoothle.initialize().then(ble =&gt; {
     console.log(&#39;ble&#39;, ble.status) // logs &#39;enabled&#39;
   });

  });
}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="initialize" href="#initialize"></a><code>initialize(params)</code></h3>




Initialize Bluetooth on the device
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
      params</td>
    <td>
      <code>InitParams</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise.&lt;{status: (&#39;enabled&#39;|&#39;disabled&#39;)}&gt;</code> The callback that is passed initialize status (enabled/disabled)
</div><h3><a class="anchor" name="enable (Android)" href="#enable (Android)"></a><code>enable (Android)()</code></h3>




Enable Bluetooth on the device. Android support only


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: boolean }&gt;</code> 
</div><h3><a class="anchor" name="disable (Android)" href="#disable (Android)"></a><code>disable (Android)()</code></h3>




Disable Bluetooth on the device. Android support only


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  void

</div><h3><a class="anchor" name="getAdapterInfo (Android)" href="#getAdapterInfo (Android)"></a><code>getAdapterInfo (Android)()</code></h3>




@todo


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ name: string, address: string, isInitialized: boolean, isEnabled: boolean, isScanning: boolean, isDiscoverable: boolean}&gt;</code> 
</div><h3><a class="anchor" name="startScan" href="#startScan"></a><code>startScan(params)</code></h3>




Scan for Bluetooth LE devices.
Since scanning is expensive, stop as soon as possible. The Cordova app should use a timer to limit the scan interval.
Android API >= 23 requires ACCESS_COARSE_LOCATION permissions to find unpaired devices.
Permissions can be requested by using the hasPermission and requestPermission functions.
Android API >= 23 also requires location services to be enabled. Use isLocationEnabled to determine whether location services are enabled.
If not enabled, use requestLocation to prompt the location services settings page.
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
      params</td>
    <td>
      
    </td>
    <td>
      <p>Scan params</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable.&lt;{status: ScanStatus}&gt;</code> 
</div><h3><a class="anchor" name="stopScan" href="#stopScan"></a><code>stopScan()</code></h3>




Stop scan for Bluetooth LE devices. Since scanning is expensive, stop as soon as possible
The app should use a timer to limit the scanning time.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{status: &#39;scanStopped&#39;}&gt;</code> 
</div><h3><a class="anchor" name="retrieveConnected" href="#retrieveConnected"></a><code>retrieveConnected(An)</code></h3>




Retrieved paired Bluetooth LE devices. In iOS, devices that are "paired" to will not return during a normal scan.
Callback is "instant" compared to a scan.
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
      An</td>
    <td>
      <code>{ services: string[] }</code>
    </td>
    <td>
      <p>array of service IDs to filter the retrieval by. If no service IDs are specified, no devices will be returned.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ devices: DeviceInfo[] }&gt;</code> 
</div><h3><a class="anchor" name="bond (Android)" href="#bond (Android)"></a><code>bond (Android)(params)</code></h3>




Bond with a device.
The device doesn't need to be connected to initiate bonding. Android support only.
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
      params</td>
    <td>
      <code>{ address: string }</code>
    </td>
    <td>
      <p>The address/identifier provided by the scan&#39;s return object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable.&lt;{status: DeviceInfo}&gt;</code> success:
   The first success callback should always return with status == bonding.
   If the bond is created, the callback will return again with status == bonded.
   If the bonding popup is canceled or the wrong code is entered, the callback will return again with status == unbonded.
error:
   The callback that will be triggered when the bond operation fails
</div><h3><a class="anchor" name="unbond (Android)" href="#unbond (Android)"></a><code>unbond (Android)(params)</code></h3>




Unbond with a device. The device doesn't need to be connected to initiate bonding. Android support only.
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
      params</td>
    <td>
      <code>{address: string}</code>
    </td>
    <td>
      <p>The address/identifier</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: DeviceInfo }&gt;</code> success: The success callback should always return with status == unbonded, that is passed with device object
   error: The callback that will be triggered when the unbond operation fails
</div><h3><a class="anchor" name="connect" href="#connect"></a><code>connect(connectSuccess,&nbsp;connectError,&nbsp;params,&nbsp;params)</code></h3>




Connect to a Bluetooth LE device
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
      connectSuccess</td>
    <td>
      
    </td>
    <td>
      <p>The success callback that is passed with device object</p>
</td>
  </tr>
  
  <tr>
    <td>
      connectError</td>
    <td>
      
    </td>
    <td>
      <p>The callback that will be triggered when the connect operation fails</p>
</td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      
    </td>
    <td>
      <p>The address/identifier</p>
</td>
  </tr>
  
  <tr>
    <td>
      params</td>
    <td>
      <code>{address: string, autoConnect: boolean}</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable.&lt;{status: DeviceInfo}&gt;</code> success: device object with status
   error: The callback that will be triggered when the unbond operation fails
</div><h3><a class="anchor" name="reconnect" href="#reconnect"></a><code>reconnect(params)</code></h3>




Reconnect to a previously connected Bluetooth device
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
      params</td>
    <td>
      <code>{address: string}</code>
    </td>
    <td>
      <p>The address/identifier</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable.&lt;{status: DeviceInfo}&gt;</code> 
</div><h3><a class="anchor" name="disconnect" href="#disconnect"></a><code>disconnect(params)</code></h3>




Disconnect from a Bluetooth LE device.
             Note: It's simpler to just call close(). Starting with iOS 10, disconnecting before closing seems required!
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
      params</td>
    <td>
      <code>{address: string}</code>
    </td>
    <td>
      <p>The address/identifier</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: DeviceInfo }&gt;</code> 
</div><h3><a class="anchor" name="close" href="#close"></a><code>close(params)</code></h3>




Close/dispose a Bluetooth LE device.
Prior to 2.7.0, you needed to disconnect to the device before closing, but this is no longer the case.
Starting with iOS 10, disconnecting before closing seems required!
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
      params</td>
    <td>
      <code>{ address: string }</code>
    </td>
    <td>
      <p>The address/identifier</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: DeviceInfo }&gt;</code> 
</div><h3><a class="anchor" name="discover" href="#discover"></a><code>discover(params)</code></h3>




Discover all the devices services, characteristics and descriptors.
Doesn't need to be called again after disconnecting and then reconnecting.
If using iOS, you shouldn't use discover and services/characteristics/descriptors on the same device.
There seems to be an issue with calling discover on iOS8 devices, so use with caution.
On some Android versions, the discovered services may be cached for a device.
Subsequent discover events will make use of this cache.
If your device's services change, set the clearCache parameter to force Android to re-discover services.
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
      params</td>
    <td>
      <code>{ address: string, clearCache: boolean }</code>
    </td>
    <td>
      <p>The address/identifier</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ device: Device }&gt;</code> success: device object (contains array of service objects)
   error: The callback that will be triggered when the unbond operation fails
</div><h3><a class="anchor" name="services (iOS)" href="#services (iOS)"></a><code>services (iOS)(params)</code></h3>




Discover the device's services.
Not providing an array of services will return all services and take longer to discover. iOS support only.
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
      params</td>
    <td>
      <code>{address: string, services: string[]}</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ services: Services }&gt;</code> 
</div><h3><a class="anchor" name="characteristics (iOS)" href="#characteristics (iOS)"></a><code>characteristics (iOS)(params)</code></h3>




Discover the service's characteristics.
Not providing an array of characteristics will return all characteristics and take longer to discover. iOS support only.
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
      params</td>
    <td>
      <code>CharacteristicParams</code>
    </td>
    <td>
      <p>Characteristic params</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ characteristics: Characteristics }&gt;</code> The service id and an Array of characteristics
</div><h3><a class="anchor" name="descriptors (iOS)" href="#descriptors (iOS)"></a><code>descriptors (iOS)(params)</code></h3>




Discover the characteristic's descriptors. iOS support only.
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
      params</td>
    <td>
      <code>DescriptorParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ descriptors: Descriptors }&gt;</code> 
</div><h3><a class="anchor" name="read" href="#read"></a><code>read(params)</code></h3>




Read a particular service's characteristic once
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
      params</td>
    <td>
      <code>DescriptorParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;OperationResult&gt;</code> 
</div><h3><a class="anchor" name="subscribe" href="#subscribe"></a><code>subscribe(params)</code></h3>




Subscribe to a particular service's characteristic.
Once a subscription is no longer needed, execute unsubscribe in a similar fashion.
The Client Configuration descriptor will automatically be written to enable notification/indication based on the characteristic's properties.
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
      params</td>
    <td>
      <code>DescriptorParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;OperationResult&gt;</code> 
</div><h3><a class="anchor" name="unsubscribe" href="#unsubscribe"></a><code>unsubscribe(params)</code></h3>




Unsubscribe to a particular service's characteristic.
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
      params</td>
    <td>
      <code>DescriptorParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;UnsubscribeResult&gt;</code> 
</div><h3><a class="anchor" name="write (limitation on iOS, read below)" href="#write (limitation on iOS, read below)"></a><code>write (limitation on iOS, read below)(params)</code></h3>




Write a particular service's characteristic
Note: no callback will occur on write without response on iOS.
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
      params</td>
    <td>
      <code>WriteCharacteristicParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;OperationResult&gt;</code> 
</div><h3><a class="anchor" name="write (limitation on iOS, read below)" href="#write (limitation on iOS, read below)"></a><code>write (limitation on iOS, read below)(params)</code></h3>




Write Quick / Queue, use this method to quickly execute write without response commands when writing more than 20 bytes at a time.
Note: no callback will occur on write without response on iOS.
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
      params</td>
    <td>
      <code>WriteCharacteristicParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;OperationResult&gt;</code> 
</div><h3><a class="anchor" name="readDescriptor" href="#readDescriptor"></a><code>readDescriptor(params)</code></h3>




Read a particular characterist's descriptor
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
      params</td>
    <td>
      <code>OperationDescriptorParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DescriptorResult&gt;</code> 
</div><h3><a class="anchor" name="writeDescriptor" href="#writeDescriptor"></a><code>writeDescriptor(params)</code></h3>




Write a particular characteristic's descriptor. Unable to write characteristic configuration directly to keep in line with iOS implementation.
Instead use subscribe/unsubscribe, which will automatically enable/disable notification.
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
      params</td>
    <td>
      <code>WriteDescriptorParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DescriptorResult&gt;</code> 
</div><h3><a class="anchor" name="rssi" href="#rssi"></a><code>rssi(params)</code></h3>




Read RSSI of a connected device. RSSI is also returned with scanning.
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
      params</td>
    <td>
      <code>{ address: string }</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ rssi: RSSI }&gt;</code> 
</div><h3><a class="anchor" name="mtu (Android, Android 5+)" href="#mtu (Android, Android 5+)"></a><code>mtu (Android, Android 5+)(params)</code></h3>




Set MTU of a connected device. Android only.
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
      params</td>
    <td>
      <code>{ address: string, mtu: number }</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ mtu: MTU }&gt;</code> 
</div><h3><a class="anchor" name="requestConnectionPriority (Android, Android 5+)" href="#requestConnectionPriority (Android, Android 5+)"></a><code>requestConnectionPriority (Android, Android 5+)(params)</code></h3>




Request a change in the connection priority to improve throughput when transfer large amounts of data via BLE.
Android support only. iOS will return error.
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
      params</td>
    <td>
      <code>{ address: string, connectionPriority: ConnectionPriority }</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DeviceInfo&gt;</code> 
</div><h3><a class="anchor" name="isInitialized" href="#isInitialized"></a><code>isInitialized()</code></h3>




Determine whether the adapter is initialized. No error callback. Returns true or false


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ isInitialized: boolean }&gt;</code> 
</div><h3><a class="anchor" name="isEnabled" href="#isEnabled"></a><code>isEnabled()</code></h3>




Determine whether the adapter is enabled. No error callback


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ isEnabled: boolean }&gt;</code> 
</div><h3><a class="anchor" name="isScanning" href="#isScanning"></a><code>isScanning()</code></h3>




Determine whether the adapter is scanning. No error callback. Returns true or false


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ isScanning: boolean }&gt;</code> 
</div><h3><a class="anchor" name="isBonded (Android)" href="#isBonded (Android)"></a><code>isBonded (Android)(params)</code></h3>




Determine whether the device is bonded or not, or error if not initialized. Android support only.
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
      params</td>
    <td>
      <code>{ address: string }</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;BondedStatus&gt;</code> 
</div><h3><a class="anchor" name="wasConnected" href="#wasConnected"></a><code>wasConnected(params)</code></h3>




Determine whether the device was connected, or error if not initialized.
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
      params</td>
    <td>
      <code>{ address: string }</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PrevConnectionStatus&gt;</code> 
</div><h3><a class="anchor" name="isConnected" href="#isConnected"></a><code>isConnected(params)</code></h3>




Determine whether the device is connected, or error if not initialized or never connected to device
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
      params</td>
    <td>
      <code>{ address: string }</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;CurrConnectionStatus&gt;</code> 
</div><h3><a class="anchor" name="isDiscovered" href="#isDiscovered"></a><code>isDiscovered(params)</code></h3>




Determine whether the device's characteristics and descriptors have been discovered, or error if not initialized or not connected to device.
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
      params</td>
    <td>
      <code>{ address: string }</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DiscoverStatus&gt;</code> 
</div><h3><a class="anchor" name="hasPermission (useful only for Android 6+ / API 23)" href="#hasPermission (useful only for Android 6+ / API 23)"></a><code>hasPermission (useful only for Android 6+ / API 23)()</code></h3>




Determine whether coarse location privileges are granted since scanning for unpaired devices requires it in Android API 23


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ hasPermission: boolean }&gt;</code> 
</div><h3><a class="anchor" name="requestPermission (useful only for Android 6+ / API 23)" href="#requestPermission (useful only for Android 6+ / API 23)"></a><code>requestPermission (useful only for Android 6+ / API 23)()</code></h3>




Request coarse location privileges since scanning for unpaired devices requires it in Android API 23.
Will return an error if called on iOS or Android versions prior to 6.0.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ requestPermission: boolean }&gt;</code> 
</div><h3><a class="anchor" name="isLocationEnabled (useful only for Android 6+ / API 23)" href="#isLocationEnabled (useful only for Android 6+ / API 23)"></a><code>isLocationEnabled (useful only for Android 6+ / API 23)()</code></h3>




Determine if location services are enabled or not. Location Services are required to find devices in Android API 23


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ isLocationEnabled: boolean }&gt;</code> 
</div><h3><a class="anchor" name="requestLocation (useful only for Android 6+ / API 23)" href="#requestLocation (useful only for Android 6+ / API 23)"></a><code>requestLocation (useful only for Android 6+ / API 23)()</code></h3>




Prompt location services settings pages. requestLocation property returns whether location services are enabled or disabled.
Location Services are required to find devices in Android API 23.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ requestLocation: boolean }&gt;</code> 
</div><h3><a class="anchor" name="initializePeripheral" href="#initializePeripheral"></a><code>initializePeripheral(params)</code></h3>




Initialize Bluetooth on the device. Must be called before anything else.
Callback will continuously be used whenever Bluetooth is enabled or disabled.
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
      params</td>
    <td>
      <code>InitPeripheralParams</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;InitializeResult&gt;</code> 
</div><h3><a class="anchor" name="addService" href="#addService"></a><code>addService(params)</code></h3>




Add a service with characteristics and descriptors. If more than one service is added, add them sequentially
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
      params</td>
    <td>
      <code>{ service: string, characteristics: Characteristic[] }</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ service: string, status: Status }&gt;</code> 
</div><h3><a class="anchor" name="removeService" href="#removeService"></a><code>removeService(params)</code></h3>




Remove a service
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
      params</td>
    <td>
      <code>{ service: string }</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ service: string, status: Status }&gt;</code> 
</div><h3><a class="anchor" name="removeAllServices" href="#removeAllServices"></a><code>removeAllServices()</code></h3>




Remove all services


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: Status }&gt;</code> 
</div><h3><a class="anchor" name="startAdvertising (different behavior on Android/iOS, read below)" href="#startAdvertising (different behavior on Android/iOS, read below)"></a><code>startAdvertising (different behavior on Android/iOS, read below)(params)</code></h3>




Start advertising as a BLE device.
Note: This needs to be improved so services can be used for both Android and iOS.
On iOS, the advertising devices likes to rename itself back to the name of the device, i.e. Rand' iPhone
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
      params</td>
    <td>
      <code>AdvertisingParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: Status }&gt;</code> 
</div><h3><a class="anchor" name="stopAdvertising" href="#stopAdvertising"></a><code>stopAdvertising()</code></h3>




Stop advertising


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: Status }&gt;</code> 
</div><h3><a class="anchor" name="isAdvertising" href="#isAdvertising"></a><code>isAdvertising()</code></h3>




Determine if app is advertising or not.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: boolean }&gt;</code> 
</div><h3><a class="anchor" name="respond" href="#respond"></a><code>respond(params)</code></h3>




Respond to a read or write request
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
      params</td>
    <td>
      <code>RespondParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: Status }&gt;</code> 
</div><h3><a class="anchor" name="notify" href="#notify"></a><code>notify(params)</code></h3>




Update a value for a subscription. Currently all subscribed devices will receive update.
Device specific updates will be added in the future.
If sent equals false in the return value, you must wait for the peripheralManagerIsReadyToUpdateSubscribers event before sending more updates.
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
      params</td>
    <td>
      <code>NotifyParams</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: Status, sent: boolean }&gt;</code> 
</div><h3><a class="anchor" name="encodedStringToBytes" href="#encodedStringToBytes"></a><code>encodedStringToBytes(str)</code></h3>




Helper function to convert a base64 encoded string from a characteristic or descriptor value into a uint8Array object
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
      str</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Uint8Array</code> 
</div><h3><a class="anchor" name="bytesToEncodedString" href="#bytesToEncodedString"></a><code>bytesToEncodedString(bytes)</code></h3>




Helper function to convert a unit8Array to a base64 encoded string for a characteric or descriptor write
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
      bytes</td>
    <td>
      <code>Uint8Array</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="stringToBytes" href="#stringToBytes"></a><code>stringToBytes(value)</code></h3>




Helper function to convert a string to bytes
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
      value</td>
    <td>
      <code>Uint8Array</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="bytesToString" href="#bytesToString"></a><code>bytesToString(value)</code></h3>




Helper function to convert bytes to a string.
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
      value</td>
    <td>
      <code>Uint8Array</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="SCAN_MODE_OPPORTUNISTIC" href="#SCAN_MODE_OPPORTUNISTIC"></a><code>SCAN_MODE_OPPORTUNISTIC</code></h3>





<h3><a class="anchor" name="SCAN_MODE_LOW_POWER" href="#SCAN_MODE_LOW_POWER"></a><code>SCAN_MODE_LOW_POWER</code></h3>





<h3><a class="anchor" name="SCAN_MODE_BALANCED" href="#SCAN_MODE_BALANCED"></a><code>SCAN_MODE_BALANCED</code></h3>





<h3><a class="anchor" name="SCAN_MODE_LOW_LATENCY" href="#SCAN_MODE_LOW_LATENCY"></a><code>SCAN_MODE_LOW_LATENCY</code></h3>





<h3><a class="anchor" name="MATCH_MODE_AGRESSIVE" href="#MATCH_MODE_AGRESSIVE"></a><code>MATCH_MODE_AGRESSIVE</code></h3>





<h3><a class="anchor" name="MATCH_MODE_STICKY" href="#MATCH_MODE_STICKY"></a><code>MATCH_MODE_STICKY</code></h3>





<h3><a class="anchor" name="MATCH_NUM_ONE_ADVERTISEMENT" href="#MATCH_NUM_ONE_ADVERTISEMENT"></a><code>MATCH_NUM_ONE_ADVERTISEMENT</code></h3>





<h3><a class="anchor" name="MATCH_NUM_FEW_ADVERTISEMENT" href="#MATCH_NUM_FEW_ADVERTISEMENT"></a><code>MATCH_NUM_FEW_ADVERTISEMENT</code></h3>





<h3><a class="anchor" name="MATCH_NUM_MAX_ADVERTISEMENT" href="#MATCH_NUM_MAX_ADVERTISEMENT"></a><code>MATCH_NUM_MAX_ADVERTISEMENT</code></h3>





<h3><a class="anchor" name="CALLBACK_TYPE_ALL_MATCHES" href="#CALLBACK_TYPE_ALL_MATCHES"></a><code>CALLBACK_TYPE_ALL_MATCHES</code></h3>





<h3><a class="anchor" name="CALLBACK_TYPE_FIRST_MATCH" href="#CALLBACK_TYPE_FIRST_MATCH"></a><code>CALLBACK_TYPE_FIRST_MATCH</code></h3>





<h3><a class="anchor" name="CALLBACK_TYPE_MATCH_LOST" href="#CALLBACK_TYPE_MATCH_LOST"></a><code>CALLBACK_TYPE_MATCH_LOST</code></h3>











