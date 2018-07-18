---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "ibeacon"
title: "IBeacon"
header_sub_title: "Class in module "
doc: "IBeacon"
docType: "class"
---

<h1 class="api-title">IBeacon</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/ibeacon/index.ts#L222">
  Improve this doc
</a>







<p>This plugin provides functions for working with iBeacons.</p>
<p> The plugin&#39;s API closely mimics the one exposed through the <a href="https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html">CLLocationManager</a> introduced in iOS 7.</p>


<p>Repo:
  <a href="https://github.com/petermetz/cordova-plugin-ibeacon">
    https://github.com/petermetz/cordova-plugin-ibeacon
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-ibeacon
$ npm install --save @ionic-native/ibeacon
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { IBeacon } from &#39;@ionic-native/ibeacon&#39;;

constructor(private ibeacon: IBeacon) { }

...


// Request permission to use location on iOS
this.ibeacon.requestAlwaysAuthorization();
// create a new delegate and register it with the native layer
let delegate = this.ibeacon.Delegate();

// Subscribe to some of the delegate&#39;s event handlers
delegate.didRangeBeaconsInRegion()
  .subscribe(
    data =&gt; console.log(&#39;didRangeBeaconsInRegion: &#39;, data),
    error =&gt; console.error()
  );
delegate.didStartMonitoringForRegion()
  .subscribe(
    data =&gt; console.log(&#39;didStartMonitoringForRegion: &#39;, data),
    error =&gt; console.error()
  );
delegate.didEnterRegion()
  .subscribe(
    data =&gt; {
      console.log(&#39;didEnterRegion: &#39;, data);
    }
  );

let beaconRegion = this.ibeacon.BeaconRegion(&#39;deskBeacon&#39;,&#39;F7826DA6-ASDF-ASDF-8024-BC5B71E0893E&#39;);

this.ibeacon.startMonitoringForRegion(beaconRegion)
  .then(
    () =&gt; console.log(&#39;Native layer recieved the request to monitoring&#39;),
    error =&gt; console.error(&#39;Native layer failed to begin monitoring: &#39;, error)
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="Delegate" href="#Delegate"></a><code>Delegate()</code></h3>




Instances of this class are delegates between the <a href="LocationManager">LocationManager</a> and
the code that consumes the messages generated on in the native layer.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>IBeaconDelegate</code> An instance of the type {@type Delegate}.
</div><h3><a class="anchor" name="BeaconRegion" href="#BeaconRegion"></a><code>BeaconRegion(identifier,&nbsp;uuid,&nbsp;major,&nbsp;minor,&nbsp;notifyEntryStateOnDisplay)</code></h3>




Creates a new BeaconRegion

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
      identifier</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>@see {CLRegion}</p>
</td>
  </tr>
  
  <tr>
    <td>
      uuid</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>The proximity ID of the beacon being targeted.
This value must not be blank nor invalid as a UUID.</p>
</td>
  </tr>
  
  <tr>
    <td>
      major</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>The major value that you use to identify one or more beacons.</p>
</td>
  </tr>
  
  <tr>
    <td>
      minor</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>The minor value that you use to identify a specific beacon.</p>
</td>
  </tr>
  
  <tr>
    <td>
      notifyEntryStateOnDisplay</td>
    <td>
      <code>BOOL</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>BeaconRegion</code> Returns the BeaconRegion that was created
</div><h3><a class="anchor" name="getDelegate" href="#getDelegate"></a><code>getDelegate()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>IBeaconDelegate</code> Returns the IBeaconDelegate
</div><h3><a class="anchor" name="setDelegate" href="#setDelegate"></a><code>setDelegate(delegate)</code></h3>



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
      delegate</td>
    <td>
      <code>IBeaconDelegate</code>
    </td>
    <td>
      <p>An instance of a delegate to register with the native layer.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>IBeaconDelegate</code> Returns the IBeaconDelegate
</div><h3><a class="anchor" name="onDomDelegateReady" href="#onDomDelegateReady"></a><code>onDomDelegateReady()</code></h3>




Signals the native layer that the client side is ready to consume messages.
Readiness here means that it has a {IBeaconDelegate} set by the consumer javascript
code.

The {LocationManager.setDelegate()} will implicitly call this method as well,
therefore the only case when you have to call this manually is if you don't
wish to specify a {IBeaconDelegate} of yours.

The purpose of this signaling mechanism is to make the events work when the
app is being woken up by the Operating System to give it a chance to handle
region monitoring events for example.

If you don't set a {IBeaconDelegate} and don't call this method manually, an error
message get emitted in the native runtime and the DOM as well after a certain
period of time.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the request and started to send events.
</div><h3><a class="anchor" name="isBluetoothEnabled" href="#isBluetoothEnabled"></a><code>isBluetoothEnabled()</code></h3>




Determines if bluetooth is switched on, according to the native layer.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether bluetooth is active.
</div><h3><a class="anchor" name="enableBluetooth" href="#enableBluetooth"></a><code>enableBluetooth()</code></h3>




Enables Bluetooth using the native Layer. (ANDROID ONLY)



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved when Bluetooth
could be enabled. If not, the promise will be rejected with an error.
</div><h3><a class="anchor" name="disableBluetooth" href="#disableBluetooth"></a><code>disableBluetooth()</code></h3>




Disables Bluetooth using the native Layer. (ANDROID ONLY)



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved when Bluetooth
could be enabled. If not, the promise will be rejected with an error.
</div><h3><a class="anchor" name="startMonitoringForRegion" href="#startMonitoringForRegion"></a><code>startMonitoringForRegion(region)</code></h3>




Start monitoring the specified region.

If a region of the same type with the same identifier is already being
monitored for this application,
it will be removed from monitoring. For circular regions, the region
monitoring service will prioritize
regions by their size, favoring smaller regions over larger regions.

This is done asynchronously and may not be immediately reflected in monitoredRegions.

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
      region</td>
    <td>
      <code>Region</code>
    </td>
    <td>
      <p>An instance of {Region} which will be monitored
by the operating system.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the monitoring request.
</div><h3><a class="anchor" name="stopMonitoringForRegion" href="#stopMonitoringForRegion"></a><code>stopMonitoringForRegion(region)</code></h3>




Stop monitoring the specified region.  It is valid to call
stopMonitoringForRegion: for a region that was registered for monitoring
with a different location manager object, during this or previous
launches of your application.

This is done asynchronously and may not be immediately reflected in monitoredRegions.

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
      region</td>
    <td>
      <code>Region</code>
    </td>
    <td>
      <p>An instance of {Region} which will be monitored
by the operating system.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the request to stop monitoring.
</div><h3><a class="anchor" name="requestStateForRegion" href="#requestStateForRegion"></a><code>requestStateForRegion(region)</code></h3>




Request state the for specified region. When result is ready
didDetermineStateForRegion is triggered. This can be any region,
also those which is not currently monitored.

This is done asynchronously and may not be immediately reflected in monitoredRegions.

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
      region</td>
    <td>
      <code>Region</code>
    </td>
    <td>
      <p>An instance of {Region} which will be monitored
by the operating system.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the request to stop monitoring.
</div><h3><a class="anchor" name="startRangingBeaconsInRegion" href="#startRangingBeaconsInRegion"></a><code>startRangingBeaconsInRegion(region)</code></h3>




Start ranging the specified beacon region.

If a region of the same type with the same identifier is already being
monitored for this application, it will be removed from monitoring.

This is done asynchronously and may not be immediately reflected in rangedRegions.

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
      region</td>
    <td>
      <code>Region</code>
    </td>
    <td>
      <p>An instance of {BeaconRegion} which will be monitored
by the operating system.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the monitoring request.
</div><h3><a class="anchor" name="stopRangingBeaconsInRegion" href="#stopRangingBeaconsInRegion"></a><code>stopRangingBeaconsInRegion(region)</code></h3>




Stop ranging the specified region.  It is valid to call
stopMonitoringForRegion: for a region that was registered for ranging
with a different location manager object, during this or previous
launches of your application.

This is done asynchronously and may not be immediately reflected in rangedRegions.

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
      region</td>
    <td>
      <code>Region</code>
    </td>
    <td>
      <p>An instance of {BeaconRegion} which will be monitored
by the operating system.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the request to stop monitoring.
</div><h3><a class="anchor" name="getAuthorizationStatus" href="#getAuthorizationStatus"></a><code>getAuthorizationStatus()</code></h3>




Queries the native layer to determine the current authorization in effect.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;IBeaconPluginResult&gt;</code> Returns a promise which is resolved with the
requested authorization status.
</div><h3><a class="anchor" name="requestWhenInUseAuthorization" href="#requestWhenInUseAuthorization"></a><code>requestWhenInUseAuthorization()</code></h3>




For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to
explicitly request permissions via methods like these:
<a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization">requestWhenInUseAuthorization</a>
<a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization">requestAlwaysAuthorization</a>

If you are using this plugin on Android devices only, you will never have to use this, nor {@code requestAlwaysAuthorization}


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise that is resolved when the request dialog is shown.
</div><h3><a class="anchor" name="requestAlwaysAuthorization" href="#requestAlwaysAuthorization"></a><code>requestAlwaysAuthorization()</code></h3>




See the documentation of {@code requestWhenInUseAuthorization} for further details.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved when the native layer
shows the request dialog.
</div><h3><a class="anchor" name="getMonitoredRegions" href="#getMonitoredRegions"></a><code>getMonitoredRegions()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Region[]&gt;</code> Returns a promise which is resolved with an {Array}
of {Region} instances that are being monitored by the native layer.
</div><h3><a class="anchor" name="getRangedRegions" href="#getRangedRegions"></a><code>getRangedRegions()</code></h3>







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Region[]&gt;</code> Returns a promise which is resolved with an {Array}
of {Region} instances that are being ranged by the native layer.
</div><h3><a class="anchor" name="isRangingAvailable" href="#isRangingAvailable"></a><code>isRangingAvailable()</code></h3>




Determines if ranging is available or not, according to the native layer.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether ranging is available or not.
</div><h3><a class="anchor" name="isMonitoringAvailableForClass" href="#isMonitoringAvailableForClass"></a><code>isMonitoringAvailableForClass(region)</code></h3>




Determines if region type is supported or not, according to the native layer.

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
      region</td>
    <td>
      <code>Region</code>
    </td>
    <td>
      <p>An instance of {Region} which will be checked
by the operating system.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether the region type is supported or not.
</div><h3><a class="anchor" name="startAdvertising" href="#startAdvertising"></a><code>startAdvertising(region,&nbsp;measuredPower:)</code></h3>




Start advertising the specified region.

If a region a different identifier is already being advertised for
this application, it will be replaced with the new identifier.

This call will accept a valid beacon even when no BlueTooth is available,
and will start when BlueTooth is powered on. See {IBeaconDelegate.}

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
      region</td>
    <td>
      <code>Region</code>
    </td>
    <td>
      <p>An instance of {Region} which will be advertised
by the operating system.</p>
</td>
  </tr>
  
  <tr>
    <td>
      measuredPower:</td>
    <td>
      <code>Integer</code>
    </td>
    <td>
      <p>Optional parameter, if left empty, the device will
use it&#39;s own default value.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the advertising request.
</div><h3><a class="anchor" name="stopAdvertising" href="#stopAdvertising"></a><code>stopAdvertising()</code></h3>




Stop advertising as a beacon.

This is done asynchronously and may not be immediately reflected in isAdvertising.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the request to stop advertising.
</div><h3><a class="anchor" name="isAdvertisingAvailable" href="#isAdvertisingAvailable"></a><code>isAdvertisingAvailable()</code></h3>




Determines if advertising is available or not, according to the native layer.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether advertising is available or not.
</div><h3><a class="anchor" name="isAdvertising" href="#isAdvertising"></a><code>isAdvertising()</code></h3>




Determines if advertising is currently active, according to the native layer.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether advertising is active.
</div><h3><a class="anchor" name="disableDebugLogs" href="#disableDebugLogs"></a><code>disableDebugLogs()</code></h3>




Disables debug logging in the native layer. Use this method if you want
to prevent this plugin from writing to the device logs.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer has set the logging level accordingly.
</div><h3><a class="anchor" name="enableDebugNotifications" href="#enableDebugNotifications"></a><code>enableDebugNotifications()</code></h3>




Enables the posting of debug notifications in the native layer. Use this method if you want
to allow the plugin the posting local notifications.
This can be very helpful when debugging how to apps behave when launched into the background.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer has set the flag to enabled.
</div><h3><a class="anchor" name="disableDebugNotifications" href="#disableDebugNotifications"></a><code>disableDebugNotifications()</code></h3>




Disables the posting of debug notifications in the native layer. Use this method if you want
to prevent the plugin from posting local notifications.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer has set the flag to disabled.
</div><h3><a class="anchor" name="enableDebugLogs" href="#enableDebugLogs"></a><code>enableDebugLogs()</code></h3>




Enables debug logging in the native layer. Use this method if you want
a debug the inner workings of this plugin.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer has set the logging level accordingly.
</div><h3><a class="anchor" name="appendToDeviceLog" href="#appendToDeviceLog"></a><code>appendToDeviceLog(message)</code></h3>




Appends the provided [message] to the device logs.
Note: If debug logging is turned off, this won't do anything.

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
      message</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>The message to append to the device logs.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a promise which is resolved with the log
message received by the native layer for appending. The returned message
is expected to be equivalent to the one provided in the original call.
</div>





<h2><a class="anchor" name="Beacon" href="#Beacon"></a>Beacon</h2>

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
      uuid
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The physical device&#39;s identifier.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      major
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The beacon&#39;s major identifier number.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      minor
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The beacon&#39;s minor identifier number.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      proximity
    </td>
    <td>
      <code>&#39;ProximityImmediate&#39; | &#39;ProximityNear&#39; | &#39;ProximityFar&#39; | &#39;ProximityUnknown&#39;</code>
    </td>
    <td>
      <p>The proximity of the beacon relative to the phone.</p>
<p>Possible options are:
ProximityImmediate
ProximityNear
ProximityFar
ProximityUnknown</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      tx
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Transmission Power of the beacon. A constant emitted by the beacon which indicates what&#39;s the expected RSSI at a distance of 1 meter to the beacon.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      rssi
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Received Signal Strength Indicator. The strength of the beacon&#39;s signal when it reaches the device.
 RSSI ranges from aprox -26 (a few inches) to -100 (40-50 m distance).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      accuracy
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The accuracy of the ranging.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="BeaconRegion" href="#BeaconRegion"></a>BeaconRegion</h2>

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
      identifier
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A unique identifier for this region.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      uuid
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The the beacon identifier the device will &quot;watch&quot; for. Many beacons can share the same uuid.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      major
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The beacon&#39;s major identifier number. Optional, of nothing is supplied
the plugin will treat it as a wildcard.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      minor
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The beacon&#39;s minor identifier number. Optional, of nothing is supplied
the plugin will treat it as a wildcard.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      notifyEntryStateOnDisplay
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If set to true the device will scan for beacons and determine region state anytime
the device&#39;s screen is turned on or off. Useful for debugging.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CircularRegion" href="#CircularRegion"></a>CircularRegion</h2>

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
      identifier
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A unique identifier for this region.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      latitude
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The latitude of this region.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      longitude
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The longitude of this region.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      radius
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The radius of the geofence for this region.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="IBeaconPluginResult" href="#IBeaconPluginResult"></a>IBeaconPluginResult</h2>

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
      eventType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the delegate function that produced the PluginResult object.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      region
    </td>
    <td>
      <code>Region</code>
    </td>
    <td>
      <p>The region that triggered the event.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      beacons
    </td>
    <td>
      <code>Beacon[]</code>
    </td>
    <td>
      <p>An array of beacon objects</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      authorizationStatus
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The status of the location permission for iOS.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      state
    </td>
    <td>
      <code>&#39;CLRegionStateInside&#39; | &#39;CLRegionStateOutside&#39;</code>
    </td>
    <td>
      <p>The state of the phone in relation to the region. Inside/outside for example.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      error
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Error message, used only with monitoringDidFailForRegionWithError delegate.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="IBeaconDelegate" href="#IBeaconDelegate"></a>IBeaconDelegate</h2>

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
      didChangeAuthorizationStatus
    </td>
    <td>
      <code>Observable&lt;string&gt;</code>
    </td>
    <td>
      <p>An observable that publishes information about the location permission authorization status.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      didDetermineStateForRegion
    </td>
    <td>
      <code>Observable&lt;IBeaconPluginResult&gt;</code>
    </td>
    <td>
      <p>An Observable that publishes event data to it&#39;s subscribers
when the native layer is able to determine the device&#39;s state.</p>
<p>This event is called when the phone begins starts monitoring,
when requestStateForRegion is called, etc.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      didEnterRegion
    </td>
    <td>
      <code>Observable&lt;IBeaconPluginResult&gt;</code>
    </td>
    <td>
      <p>An Observable that publishes event data to it&#39;s subscribers
when the phone enters a region that it was asked to monitor.</p>
<p>If the user has given the app Always-Location permission, this function
 will be called even when the app is not running on iOS.
The app will run silently in the background for a small amount of time.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      didExitRegion
    </td>
    <td>
      <code>Observable&lt;IBeaconPluginResult&gt;</code>
    </td>
    <td>
      <p>An Observable that publishes event data to it&#39;s subscribers
when the phone exits a region that it was asked to monitor.</p>
<p>If the user has given the app Always-Location permission, this function
 will be called even when the app is not running on iOS.
The app will run silently in the background for a small amount of time.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      didRangeBeaconsInRegion
    </td>
    <td>
      <code>Observable&lt;IBeaconPluginResult&gt;</code>
    </td>
    <td>
      <p>An Observable that publishes event data to it&#39;s subscribers
 each time that the device ranges beacons. Modern Android and iOS devices range
aproximately once per second.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      didStartMonitoringForRegion
    </td>
    <td>
      <code>Observable&lt;IBeaconPluginResult&gt;</code>
    </td>
    <td>
      <p>An Observable that publishes event data to it&#39;s subscribers
 when the device begins monitoring a region.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      monitoringDidFailForRegionWithError
    </td>
    <td>
      <code>Observable&lt;IBeaconPluginResult&gt;</code>
    </td>
    <td>
      <p>An Observable that publishes event data to it&#39;s subscribers
 when the device fails to monitor a region.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      peripheralManagerDidStartAdvertising
    </td>
    <td>
      <code>Observable&lt;IBeaconPluginResult&gt;</code>
    </td>
    <td>
      <p>An Observable that publishes event data to it&#39;s subscribers
 when the device begins advertising as an iBeacon.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      peripheralManagerDidUpdateState
    </td>
    <td>
      <code>Observable&lt;IBeaconPluginResult&gt;</code>
    </td>
    <td>
      <p>An Observable that publishes event data to it&#39;s subscribers
when the state of the peripheral manager&#39;s state updates.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





