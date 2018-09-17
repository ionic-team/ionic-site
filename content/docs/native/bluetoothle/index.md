---
layout: "fluid/docs_base"
version: "4.13.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/bluetooth-le/index.ts#L388">
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
<h3><a class="anchor" name="initialize
Initialize Bluetooth on the device" href="#initialize
Initialize Bluetooth on the device"></a><code>initialize
Initialize Bluetooth on the device(params)</code></h3>





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
</div><h3><a class="anchor" name="enable (Android)
Enable Bluetooth on the device. Android support only" href="#enable (Android)
Enable Bluetooth on the device. Android support only"></a><code>enable (Android)
Enable Bluetooth on the device. Android support only()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: boolean }&gt;</code> 
</div><h3><a class="anchor" name="disable (Android)
Disable Bluetooth on the device. Android support only" href="#disable (Android)
Disable Bluetooth on the device. Android support only"></a><code>disable (Android)
Disable Bluetooth on the device. Android support only()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b>  void

</div><h3><a class="anchor" name="getAdapterInfo (Android)
Retrieve useful information such as the address, name, and various states (initialized, enabled, scanning, discoverable).
This can be very useful when the general state of the adapter has been lost, and we would otherwise need to go through a series of callbacks to get the correct state (first initialized, then enabled, then isScanning, and so forth).
The result of this method allows us to take business logic decisions while avoiding a large part of the callback hell.
Currently the discoverable state does not have any relevance because there is no "setDiscoverable" functionality in place. That may change in the future." href="#getAdapterInfo (Android)
Retrieve useful information such as the address, name, and various states (initialized, enabled, scanning, discoverable).
This can be very useful when the general state of the adapter has been lost, and we would otherwise need to go through a series of callbacks to get the correct state (first initialized, then enabled, then isScanning, and so forth).
The result of this method allows us to take business logic decisions while avoiding a large part of the callback hell.
Currently the discoverable state does not have any relevance because there is no "setDiscoverable" functionality in place. That may change in the future."></a><code>getAdapterInfo (Android)
Retrieve useful information such as the address, name, and various states (initialized, enabled, scanning, discoverable).
This can be very useful when the general state of the adapter has been lost, and we would otherwise need to go through a series of callbacks to get the correct state (first initialized, then enabled, then isScanning, and so forth).
The result of this method allows us to take business logic decisions while avoiding a large part of the callback hell.
Currently the discoverable state does not have any relevance because there is no "setDiscoverable" functionality in place. That may change in the future.()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;AdapterInfo&gt;</code> 
</div><h3><a class="anchor" name="startScan
Scan for Bluetooth LE devices.
Since scanning is expensive, stop as soon as possible. The Cordova app should use a timer to limit the scan interval.
Android API >= 23 requires ACCESS_COARSE_LOCATION permissions to find unpaired devices.
Permissions can be requested by using the hasPermission and requestPermission functions.
Android API >= 23 also requires location services to be enabled. Use isLocationEnabled to determine whether location services are enabled.
If not enabled, use requestLocation to prompt the location services settings page." href="#startScan
Scan for Bluetooth LE devices.
Since scanning is expensive, stop as soon as possible. The Cordova app should use a timer to limit the scan interval.
Android API >= 23 requires ACCESS_COARSE_LOCATION permissions to find unpaired devices.
Permissions can be requested by using the hasPermission and requestPermission functions.
Android API >= 23 also requires location services to be enabled. Use isLocationEnabled to determine whether location services are enabled.
If not enabled, use requestLocation to prompt the location services settings page."></a><code>startScan
Scan for Bluetooth LE devices.
Since scanning is expensive, stop as soon as possible. The Cordova app should use a timer to limit the scan interval.
Android API >= 23 requires ACCESS_COARSE_LOCATION permissions to find unpaired devices.
Permissions can be requested by using the hasPermission and requestPermission functions.
Android API >= 23 also requires location services to be enabled. Use isLocationEnabled to determine whether location services are enabled.
If not enabled, use requestLocation to prompt the location services settings page.(params)</code></h3>





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
      <code>ScanParams</code>
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
</div><h3><a class="anchor" name="stopScan
Stop scan for Bluetooth LE devices. Since scanning is expensive, stop as soon as possible
The app should use a timer to limit the scanning time." href="#stopScan
Stop scan for Bluetooth LE devices. Since scanning is expensive, stop as soon as possible
The app should use a timer to limit the scanning time."></a><code>stopScan
Stop scan for Bluetooth LE devices. Since scanning is expensive, stop as soon as possible
The app should use a timer to limit the scanning time.()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{status: &#39;scanStopped&#39;}&gt;</code> 
</div><h3><a class="anchor" name="retrieveConnected
Retrieved paired Bluetooth LE devices. In iOS, devices that are "paired" to will not return during a normal scan.
Callback is "instant" compared to a scan." href="#retrieveConnected
Retrieved paired Bluetooth LE devices. In iOS, devices that are "paired" to will not return during a normal scan.
Callback is "instant" compared to a scan."></a><code>retrieveConnected
Retrieved paired Bluetooth LE devices. In iOS, devices that are "paired" to will not return during a normal scan.
Callback is "instant" compared to a scan.(An)</code></h3>





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
</div><h3><a class="anchor" name="bond (Android)
Bond with a device.
The device doesn't need to be connected to initiate bonding. Android support only." href="#bond (Android)
Bond with a device.
The device doesn't need to be connected to initiate bonding. Android support only."></a><code>bond (Android)
Bond with a device.
The device doesn't need to be connected to initiate bonding. Android support only.(params)</code></h3>





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
</div><h3><a class="anchor" name="unbond (Android)
Unbond with a device. The device doesn't need to be connected to initiate bonding. Android support only." href="#unbond (Android)
Unbond with a device. The device doesn't need to be connected to initiate bonding. Android support only."></a><code>unbond (Android)
Unbond with a device. The device doesn't need to be connected to initiate bonding. Android support only.(params)</code></h3>





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
</div><h3><a class="anchor" name="connect
Connect to a Bluetooth LE device" href="#connect
Connect to a Bluetooth LE device"></a><code>connect
Connect to a Bluetooth LE device(connectSuccess,&nbsp;connectError,&nbsp;params,&nbsp;params)</code></h3>





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
</div><h3><a class="anchor" name="reconnect
Reconnect to a previously connected Bluetooth device" href="#reconnect
Reconnect to a previously connected Bluetooth device"></a><code>reconnect
Reconnect to a previously connected Bluetooth device(params)</code></h3>





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
</div><h3><a class="anchor" name="disconnect
Disconnect from a Bluetooth LE device.
             Note: It's simpler to just call close(). Starting with iOS 10, disconnecting before closing seems required!" href="#disconnect
Disconnect from a Bluetooth LE device.
             Note: It's simpler to just call close(). Starting with iOS 10, disconnecting before closing seems required!"></a><code>disconnect
Disconnect from a Bluetooth LE device.
             Note: It's simpler to just call close(). Starting with iOS 10, disconnecting before closing seems required!(params)</code></h3>





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
</div><h3><a class="anchor" name="close
Close/dispose a Bluetooth LE device.
Prior to 2.7.0, you needed to disconnect to the device before closing, but this is no longer the case.
Starting with iOS 10, disconnecting before closing seems required!" href="#close
Close/dispose a Bluetooth LE device.
Prior to 2.7.0, you needed to disconnect to the device before closing, but this is no longer the case.
Starting with iOS 10, disconnecting before closing seems required!"></a><code>close
Close/dispose a Bluetooth LE device.
Prior to 2.7.0, you needed to disconnect to the device before closing, but this is no longer the case.
Starting with iOS 10, disconnecting before closing seems required!(params)</code></h3>





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
</div><h3><a class="anchor" name="discover
Discover all the devices services, characteristics and descriptors.
Doesn't need to be called again after disconnecting and then reconnecting.
If using iOS, you shouldn't use discover and services/characteristics/descriptors on the same device.
There seems to be an issue with calling discover on iOS8 devices, so use with caution.
On some Android versions, the discovered services may be cached for a device.
Subsequent discover events will make use of this cache.
If your device's services change, set the clearCache parameter to force Android to re-discover services." href="#discover
Discover all the devices services, characteristics and descriptors.
Doesn't need to be called again after disconnecting and then reconnecting.
If using iOS, you shouldn't use discover and services/characteristics/descriptors on the same device.
There seems to be an issue with calling discover on iOS8 devices, so use with caution.
On some Android versions, the discovered services may be cached for a device.
Subsequent discover events will make use of this cache.
If your device's services change, set the clearCache parameter to force Android to re-discover services."></a><code>discover
Discover all the devices services, characteristics and descriptors.
Doesn't need to be called again after disconnecting and then reconnecting.
If using iOS, you shouldn't use discover and services/characteristics/descriptors on the same device.
There seems to be an issue with calling discover on iOS8 devices, so use with caution.
On some Android versions, the discovered services may be cached for a device.
Subsequent discover events will make use of this cache.
If your device's services change, set the clearCache parameter to force Android to re-discover services.(params)</code></h3>





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
</div><h3><a class="anchor" name="services (iOS)
Discover the device's services.
Not providing an array of services will return all services and take longer to discover. iOS support only." href="#services (iOS)
Discover the device's services.
Not providing an array of services will return all services and take longer to discover. iOS support only."></a><code>services (iOS)
Discover the device's services.
Not providing an array of services will return all services and take longer to discover. iOS support only.(params)</code></h3>





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
</div><h3><a class="anchor" name="characteristics (iOS)
Discover the service's characteristics.
Not providing an array of characteristics will return all characteristics and take longer to discover. iOS support only." href="#characteristics (iOS)
Discover the service's characteristics.
Not providing an array of characteristics will return all characteristics and take longer to discover. iOS support only."></a><code>characteristics (iOS)
Discover the service's characteristics.
Not providing an array of characteristics will return all characteristics and take longer to discover. iOS support only.(params)</code></h3>





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
</div><h3><a class="anchor" name="descriptors (iOS)
Discover the characteristic's descriptors. iOS support only." href="#descriptors (iOS)
Discover the characteristic's descriptors. iOS support only."></a><code>descriptors (iOS)
Discover the characteristic's descriptors. iOS support only.(params)</code></h3>





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
</div><h3><a class="anchor" name="read
Read a particular service's characteristic once" href="#read
Read a particular service's characteristic once"></a><code>read
Read a particular service's characteristic once(params)</code></h3>





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
</div><h3><a class="anchor" name="subscribe
Subscribe to a particular service's characteristic.
Once a subscription is no longer needed, execute unsubscribe in a similar fashion.
The Client Configuration descriptor will automatically be written to enable notification/indication based on the characteristic's properties." href="#subscribe
Subscribe to a particular service's characteristic.
Once a subscription is no longer needed, execute unsubscribe in a similar fashion.
The Client Configuration descriptor will automatically be written to enable notification/indication based on the characteristic's properties."></a><code>subscribe
Subscribe to a particular service's characteristic.
Once a subscription is no longer needed, execute unsubscribe in a similar fashion.
The Client Configuration descriptor will automatically be written to enable notification/indication based on the characteristic's properties.(params)</code></h3>





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
  <b>Returns:</b> <code>Observable.&lt;{result: OperationResult}&gt;</code> 
</div><h3><a class="anchor" name="unsubscribe
Unsubscribe to a particular service's characteristic." href="#unsubscribe
Unsubscribe to a particular service's characteristic."></a><code>unsubscribe
Unsubscribe to a particular service's characteristic.(params)</code></h3>





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
</div><h3><a class="anchor" name="write (limitation on iOS, read below)
Write a particular service's characteristic
Note: no callback will occur on write without response on iOS." href="#write (limitation on iOS, read below)
Write a particular service's characteristic
Note: no callback will occur on write without response on iOS."></a><code>write (limitation on iOS, read below)
Write a particular service's characteristic
Note: no callback will occur on write without response on iOS.(params)</code></h3>





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
</div><h3><a class="anchor" name="write (limitation on iOS, read below)
Write Quick / Queue, use this method to quickly execute write without response commands when writing more than 20 bytes at a time.
Note: no callback will occur on write without response on iOS." href="#write (limitation on iOS, read below)
Write Quick / Queue, use this method to quickly execute write without response commands when writing more than 20 bytes at a time.
Note: no callback will occur on write without response on iOS."></a><code>write (limitation on iOS, read below)
Write Quick / Queue, use this method to quickly execute write without response commands when writing more than 20 bytes at a time.
Note: no callback will occur on write without response on iOS.(params)</code></h3>





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
</div><h3><a class="anchor" name="readDescriptor
Read a particular characterist's descriptor" href="#readDescriptor
Read a particular characterist's descriptor"></a><code>readDescriptor
Read a particular characterist's descriptor(params)</code></h3>





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
</div><h3><a class="anchor" name="writeDescriptor
Write a particular characteristic's descriptor. Unable to write characteristic configuration directly to keep in line with iOS implementation.
Instead use subscribe/unsubscribe, which will automatically enable/disable notification." href="#writeDescriptor
Write a particular characteristic's descriptor. Unable to write characteristic configuration directly to keep in line with iOS implementation.
Instead use subscribe/unsubscribe, which will automatically enable/disable notification."></a><code>writeDescriptor
Write a particular characteristic's descriptor. Unable to write characteristic configuration directly to keep in line with iOS implementation.
Instead use subscribe/unsubscribe, which will automatically enable/disable notification.(params)</code></h3>





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
</div><h3><a class="anchor" name="rssi
Read RSSI of a connected device. RSSI is also returned with scanning." href="#rssi
Read RSSI of a connected device. RSSI is also returned with scanning."></a><code>rssi
Read RSSI of a connected device. RSSI is also returned with scanning.(params)</code></h3>





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
</div><h3><a class="anchor" name="mtu (Android, Android 5+)
Set MTU of a connected device. Android only." href="#mtu (Android, Android 5+)
Set MTU of a connected device. Android only."></a><code>mtu (Android, Android 5+)
Set MTU of a connected device. Android only.(params)</code></h3>





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
</div><h3><a class="anchor" name="requestConnectionPriority (Android, Android 5+)
Request a change in the connection priority to improve throughput when transfer large amounts of data via BLE.
Android support only. iOS will return error." href="#requestConnectionPriority (Android, Android 5+)
Request a change in the connection priority to improve throughput when transfer large amounts of data via BLE.
Android support only. iOS will return error."></a><code>requestConnectionPriority (Android, Android 5+)
Request a change in the connection priority to improve throughput when transfer large amounts of data via BLE.
Android support only. iOS will return error.(params)</code></h3>





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
</div><h3><a class="anchor" name="isInitialized
Determine whether the adapter is initialized. No error callback. Returns true or false" href="#isInitialized
Determine whether the adapter is initialized. No error callback. Returns true or false"></a><code>isInitialized
Determine whether the adapter is initialized. No error callback. Returns true or false()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ isInitialized: boolean }&gt;</code> 
</div><h3><a class="anchor" name="isEnabled
Determine whether the adapter is enabled. No error callback" href="#isEnabled
Determine whether the adapter is enabled. No error callback"></a><code>isEnabled
Determine whether the adapter is enabled. No error callback()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ isEnabled: boolean }&gt;</code> 
</div><h3><a class="anchor" name="isScanning
Determine whether the adapter is scanning. No error callback. Returns true or false" href="#isScanning
Determine whether the adapter is scanning. No error callback. Returns true or false"></a><code>isScanning
Determine whether the adapter is scanning. No error callback. Returns true or false()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ isScanning: boolean }&gt;</code> 
</div><h3><a class="anchor" name="isBonded (Android)
Determine whether the device is bonded or not, or error if not initialized. Android support only." href="#isBonded (Android)
Determine whether the device is bonded or not, or error if not initialized. Android support only."></a><code>isBonded (Android)
Determine whether the device is bonded or not, or error if not initialized. Android support only.(params)</code></h3>





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
</div><h3><a class="anchor" name="wasConnected
Determine whether the device was connected, or error if not initialized." href="#wasConnected
Determine whether the device was connected, or error if not initialized."></a><code>wasConnected
Determine whether the device was connected, or error if not initialized.(params)</code></h3>





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
</div><h3><a class="anchor" name="isConnected
Determine whether the device is connected, or error if not initialized or never connected to device" href="#isConnected
Determine whether the device is connected, or error if not initialized or never connected to device"></a><code>isConnected
Determine whether the device is connected, or error if not initialized or never connected to device(params)</code></h3>





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
</div><h3><a class="anchor" name="isDiscovered
Determine whether the device's characteristics and descriptors have been discovered, or error if not initialized or not connected to device." href="#isDiscovered
Determine whether the device's characteristics and descriptors have been discovered, or error if not initialized or not connected to device."></a><code>isDiscovered
Determine whether the device's characteristics and descriptors have been discovered, or error if not initialized or not connected to device.(params)</code></h3>





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
</div><h3><a class="anchor" name="hasPermission (useful only for Android 6+ / API 23)
Determine whether coarse location privileges are granted since scanning for unpaired devices requires it in Android API 23" href="#hasPermission (useful only for Android 6+ / API 23)
Determine whether coarse location privileges are granted since scanning for unpaired devices requires it in Android API 23"></a><code>hasPermission (useful only for Android 6+ / API 23)
Determine whether coarse location privileges are granted since scanning for unpaired devices requires it in Android API 23()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ hasPermission: boolean }&gt;</code> 
</div><h3><a class="anchor" name="requestPermission (useful only for Android 6+ / API 23)
Request coarse location privileges since scanning for unpaired devices requires it in Android API 23.
Will return an error if called on iOS or Android versions prior to 6.0." href="#requestPermission (useful only for Android 6+ / API 23)
Request coarse location privileges since scanning for unpaired devices requires it in Android API 23.
Will return an error if called on iOS or Android versions prior to 6.0."></a><code>requestPermission (useful only for Android 6+ / API 23)
Request coarse location privileges since scanning for unpaired devices requires it in Android API 23.
Will return an error if called on iOS or Android versions prior to 6.0.()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ requestPermission: boolean }&gt;</code> 
</div><h3><a class="anchor" name="isLocationEnabled (useful only for Android 6+ / API 23)
Determine if location services are enabled or not. Location Services are required to find devices in Android API 23" href="#isLocationEnabled (useful only for Android 6+ / API 23)
Determine if location services are enabled or not. Location Services are required to find devices in Android API 23"></a><code>isLocationEnabled (useful only for Android 6+ / API 23)
Determine if location services are enabled or not. Location Services are required to find devices in Android API 23()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ isLocationEnabled: boolean }&gt;</code> 
</div><h3><a class="anchor" name="requestLocation (useful only for Android 6+ / API 23)
Prompt location services settings pages. requestLocation property returns whether location services are enabled or disabled.
Location Services are required to find devices in Android API 23." href="#requestLocation (useful only for Android 6+ / API 23)
Prompt location services settings pages. requestLocation property returns whether location services are enabled or disabled.
Location Services are required to find devices in Android API 23."></a><code>requestLocation (useful only for Android 6+ / API 23)
Prompt location services settings pages. requestLocation property returns whether location services are enabled or disabled.
Location Services are required to find devices in Android API 23.()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ requestLocation: boolean }&gt;</code> 
</div><h3><a class="anchor" name="initializePeripheral
Initialize Bluetooth on the device. Must be called before anything else.
Callback will continuously be used whenever Bluetooth is enabled or disabled." href="#initializePeripheral
Initialize Bluetooth on the device. Must be called before anything else.
Callback will continuously be used whenever Bluetooth is enabled or disabled."></a><code>initializePeripheral
Initialize Bluetooth on the device. Must be called before anything else.
Callback will continuously be used whenever Bluetooth is enabled or disabled.(params)</code></h3>





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
</div><h3><a class="anchor" name="addService
Add a service with characteristics and descriptors. If more than one service is added, add them sequentially" href="#addService
Add a service with characteristics and descriptors. If more than one service is added, add them sequentially"></a><code>addService
Add a service with characteristics and descriptors. If more than one service is added, add them sequentially(params)</code></h3>





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
</div><h3><a class="anchor" name="removeService
Remove a service" href="#removeService
Remove a service"></a><code>removeService
Remove a service(params)</code></h3>





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
</div><h3><a class="anchor" name="removeAllServices
Remove all services" href="#removeAllServices
Remove all services"></a><code>removeAllServices
Remove all services()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: Status }&gt;</code> 
</div><h3><a class="anchor" name="startAdvertising (different behavior on Android/iOS, read below)
Start advertising as a BLE device.
Note: This needs to be improved so services can be used for both Android and iOS.
On iOS, the advertising devices likes to rename itself back to the name of the device, i.e. Rand' iPhone" href="#startAdvertising (different behavior on Android/iOS, read below)
Start advertising as a BLE device.
Note: This needs to be improved so services can be used for both Android and iOS.
On iOS, the advertising devices likes to rename itself back to the name of the device, i.e. Rand' iPhone"></a><code>startAdvertising (different behavior on Android/iOS, read below)
Start advertising as a BLE device.
Note: This needs to be improved so services can be used for both Android and iOS.
On iOS, the advertising devices likes to rename itself back to the name of the device, i.e. Rand' iPhone(params)</code></h3>





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
</div><h3><a class="anchor" name="stopAdvertising
Stop advertising" href="#stopAdvertising
Stop advertising"></a><code>stopAdvertising
Stop advertising()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: Status }&gt;</code> 
</div><h3><a class="anchor" name="isAdvertising
Determine if app is advertising or not." href="#isAdvertising
Determine if app is advertising or not."></a><code>isAdvertising
Determine if app is advertising or not.()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{ status: boolean }&gt;</code> 
</div><h3><a class="anchor" name="respond
Respond to a read or write request" href="#respond
Respond to a read or write request"></a><code>respond
Respond to a read or write request(params)</code></h3>





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
</div><h3><a class="anchor" name="notify
Update a value for a subscription. Currently all subscribed devices will receive update.
Device specific updates will be added in the future.
If sent equals false in the return value, you must wait for the peripheralManagerIsReadyToUpdateSubscribers event before sending more updates." href="#notify
Update a value for a subscription. Currently all subscribed devices will receive update.
Device specific updates will be added in the future.
If sent equals false in the return value, you must wait for the peripheralManagerIsReadyToUpdateSubscribers event before sending more updates."></a><code>notify
Update a value for a subscription. Currently all subscribed devices will receive update.
Device specific updates will be added in the future.
If sent equals false in the return value, you must wait for the peripheralManagerIsReadyToUpdateSubscribers event before sending more updates.(params)</code></h3>





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
</div><h3><a class="anchor" name="encodedStringToBytes
Helper function to convert a base64 encoded string from a characteristic or descriptor value into a uint8Array object" href="#encodedStringToBytes
Helper function to convert a base64 encoded string from a characteristic or descriptor value into a uint8Array object"></a><code>encodedStringToBytes
Helper function to convert a base64 encoded string from a characteristic or descriptor value into a uint8Array object(str)</code></h3>





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
</div><h3><a class="anchor" name="bytesToEncodedString
Helper function to convert a unit8Array to a base64 encoded string for a characteric or descriptor write" href="#bytesToEncodedString
Helper function to convert a unit8Array to a base64 encoded string for a characteric or descriptor write"></a><code>bytesToEncodedString
Helper function to convert a unit8Array to a base64 encoded string for a characteric or descriptor write(bytes)</code></h3>





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
</div><h3><a class="anchor" name="stringToBytes
Helper function to convert a string to bytes" href="#stringToBytes
Helper function to convert a string to bytes"></a><code>stringToBytes
Helper function to convert a string to bytes(value)</code></h3>





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
</div><h3><a class="anchor" name="bytesToString
Helper function to convert bytes to a string." href="#bytesToString
Helper function to convert bytes to a string."></a><code>bytesToString
Helper function to convert bytes to a string.(value)</code></h3>





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











