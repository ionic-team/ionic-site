---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "ibeacon"
title: "IBeacon"
header_sub_title: "Class in module "
doc: "IBeacon"
docType: "class"
---







<h1 class="api-title">
  
  IBeacon
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/ibeacon.ts#L221">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-ibeacon</code></pre>
<p>Repo:
  <a href="https://github.com/petermetz/cordova-plugin-ibeacon">
    https://github.com/petermetz/cordova-plugin-ibeacon
  </a>
</p>

<!-- description -->

<p>This plugin provides functions for working with iBeacons.</p>
<p> The plugin&#39;s API closely mimics the one exposed through the <a href="https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html">CLLocationManager</a> introduced in iOS 7.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { IBeacon } from &#39;ionic-native&#39;;


// Request permission to use location on iOS
IBeacon.requestAlwaysAuthorization();
// create a new delegate and register it with the native layer
let delegate = IBeacon.IBeaconDelegate();

// Subscribe to some of the delegate&#39;s event handlers
delegate.didRangeBeaconsInRegion()
  .subscribe(
    data =&gt; console.log(&#39;didRangeBeaconsInRegion: &#39;, data),
    error =&gt; console.error();
  );
delegate.didStartMonitoringForRegion()
  .subscribe(
    data =&gt; console.log(&#39;didStartMonitoringForRegion: &#39;, data),
    error =&gt; console.error();
  );
delegate.didEnterRegion()
  .subscribe(
    data =&gt; {
      console.log(&#39;didEnterRegion: &#39;, data);
    }
  );

let beaconRegion = IBeacon.BeaconRegion(&#39;deskBeacon&#39;,&#39;F7826DA6-ASDF-ASDF-8024-BC5B71E0893E&#39;);

IBeacon.startMonitoringForRegion(beaconRegion)
  .then(
    () =&gt; console.log(&#39;Native layer recieved the request to monitoring&#39;),
    error =&gt; console.error(&#39;Native layer failed to begin monitoring: &#39;, error)
  );
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="Delegate"></div>
<h3><code>Delegate()</code>
  
</h3>

Instances of this class are delegates between the <a href='LocationManager'>LocationManager</a> and
the code that consumes the messages generated on in the native layer.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>IBeaconDelegate</code> An instance of the type {@type Delegate}.
</div>



<div id="BeaconRegion"></div>
<h3><code>BeaconRegion(identifier,&nbsp;uuid,&nbsp;major,&nbsp;minor,&nbsp;notifyEntryStateOnDisplay)</code>
  
</h3>

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
      identifier
      
      
    </td>
    <td>
      
<code>String</code>
    </td>
    <td>
      <p>@see {CLRegion}</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      uuid
      
      
    </td>
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
      major
      
      
    </td>
    <td>
      
<code>Number</code>
    </td>
    <td>
      <p>The major value that you use to identify one or more beacons.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      minor
      
      
    </td>
    <td>
      
<code>Number</code>
    </td>
    <td>
      <p>The minor value that you use to identify a specific beacon.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      notifyEntryStateOnDisplay
      
      
    </td>
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
  <b>Returns:</b> 
<code>BeaconRegion</code> Returns the BeaconRegion that was created
</div>



<div id="getDelegate"></div>
<h3><code>getDelegate()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>IBeaconDelegate</code> Returns the IBeaconDelegate
</div>



<div id="setDelegate"></div>
<h3><code>setDelegate(delegate)</code>
  
</h3>





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
      delegate
      
      
    </td>
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
  <b>Returns:</b> 
<code>IBeaconDelegate</code> Returns the IBeaconDelegate
</div>



<div id="onDomDelegateReady"></div>
<h3><code>onDomDelegateReady()</code>
  
</h3>




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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the request and started to send events.
</div>



<div id="isBluetoothEnabled"></div>
<h3><code>isBluetoothEnabled()</code>
  
</h3>




Determines if bluetooth is switched on, according to the native layer.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether bluetooth is active.
</div>



<div id="enableBluetooth"></div>
<h3><code>enableBluetooth()</code>
  
</h3>




Enables Bluetooth using the native Layer. (ANDROID ONLY)







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved when Bluetooth
could be enabled. If not, the promise will be rejected with an error.
</div>



<div id="disableBluetooth"></div>
<h3><code>disableBluetooth()</code>
  
</h3>




Disables Bluetooth using the native Layer. (ANDROID ONLY)







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved when Bluetooth
could be enabled. If not, the promise will be rejected with an error.
</div>



<div id="startMonitoringForRegion"></div>
<h3><code>startMonitoringForRegion(region)</code>
  
</h3>




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
      region
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the monitoring request.
</div>



<div id="stopMonitoringForRegion"></div>
<h3><code>stopMonitoringForRegion(region)</code>
  
</h3>




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
      region
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the request to stop monitoring.
</div>



<div id="requestStateForRegion"></div>
<h3><code>requestStateForRegion(region)</code>
  
</h3>




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
      region
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the request to stop monitoring.
</div>



<div id="startRangingBeaconsInRegion"></div>
<h3><code>startRangingBeaconsInRegion(region)</code>
  
</h3>




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
      region
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the monitoring request.
</div>



<div id="stopRangingBeaconsInRegion"></div>
<h3><code>stopRangingBeaconsInRegion(region)</code>
  
</h3>




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
      region
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the request to stop monitoring.
</div>



<div id="getAuthorizationStatus"></div>
<h3><code>getAuthorizationStatus()</code>
  
</h3>




Queries the native layer to determine the current authorization in effect.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise which is resolved with the
requested authorization status.
</div>



<div id="requestWhenInUseAuthorization"></div>
<h3><code>requestWhenInUseAuthorization()</code>
  
</h3>




For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to
explicitly request permissions via methods like these:
<a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization">requestWhenInUseAuthorization</a>
<a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization">requestAlwaysAuthorization</a>

If you are using this plugin on Android devices only, you will never have to use this, nor {@code requestAlwaysAuthorization}






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise that is resolved when the request dialog is shown.
</div>



<div id="requestAlwaysAuthorization"></div>
<h3><code>requestAlwaysAuthorization()</code>
  
</h3>




See the docuemntation of {@code requestWhenInUseAuthorization} for further details.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved when the native layer
shows the request dialog.
</div>



<div id="getMonitoredRegions"></div>
<h3><code>getMonitoredRegions()</code>
  
</h3>











<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Region[]&gt;</code> Returns a promise which is resolved with an {Array}
of {Region} instances that are being monitored by the native layer.
</div>



<div id="getRangedRegions"></div>
<h3><code>getRangedRegions()</code>
  
</h3>











<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Region[]&gt;</code> Returns a promise which is resolved with an {Array}
of {Region} instances that are being ranged by the native layer.
</div>



<div id="isRangingAvailable"></div>
<h3><code>isRangingAvailable()</code>
  
</h3>




Determines if ranging is available or not, according to the native layer.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether ranging is available or not.
</div>



<div id="isMonitoringAvailableForClass"></div>
<h3><code>isMonitoringAvailableForClass(region)</code>
  
</h3>




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
      region
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether the region type is supported or not.
</div>



<div id="startAdvertising"></div>
<h3><code>startAdvertising(region,&nbsp;measuredPower:)</code>
  
</h3>




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
      region
      
      
    </td>
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
      measuredPower:
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the advertising request.
</div>



<div id="stopAdvertising"></div>
<h3><code>stopAdvertising()</code>
  
</h3>




Stop advertising as a beacon.

This is done asynchronously and may not be immediately reflected in isAdvertising.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer acknowledged the dispatch of the request to stop advertising.
</div>



<div id="isAdvertisingAvailable"></div>
<h3><code>isAdvertisingAvailable()</code>
  
</h3>




Determines if advertising is available or not, according to the native layer.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether advertising is available or not.
</div>



<div id="isAdvertising"></div>
<h3><code>isAdvertising()</code>
  
</h3>




Determines if advertising is currently active, according to the native layer.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved with a {Boolean}
indicating whether advertising is active.
</div>



<div id="disableDebugLogs"></div>
<h3><code>disableDebugLogs()</code>
  
</h3>




Disables debug logging in the native layer. Use this method if you want
to prevent this plugin from writing to the device logs.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer has set the logging level accordingly.
</div>



<div id="enableDebugNotifications"></div>
<h3><code>enableDebugNotifications()</code>
  
</h3>




Enables the posting of debug notifications in the native layer. Use this method if you want
to allow the plugin the posting local notifications.
This can be very helpful when debugging how to apps behave when launched into the background.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer has set the flag to enabled.
</div>



<div id="disableDebugNotifications"></div>
<h3><code>disableDebugNotifications()</code>
  
</h3>




Disables the posting of debug notifications in the native layer. Use this method if you want
to prevent the plugin from posting local notifications.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer has set the flag to disabled.
</div>



<div id="enableDebugLogs"></div>
<h3><code>enableDebugLogs()</code>
  
</h3>




Enables debug logging in the native layer. Use this method if you want
a debug the inner workings of this plugin.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved as soon as the
native layer has set the logging level accordingly.
</div>



<div id="appendToDeviceLog"></div>
<h3><code>appendToDeviceLog(message)</code>
  
</h3>




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
      message
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise which is resolved with the log
message received by the native layer for appending. The returned message
is expected to be equivalent to the one provided in the original call.
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <p>The beacon&#39;s major identifier number.</p>

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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The beacon&#39;s major identifier number. Optional, of nothing is supplied
the plugin will treat it as a wildcard.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      minor
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The beacon&#39;s minor identifier number. Optional, of nothing is supplied
the plugin will treat it as a wildcard.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      notifyEntryStateOnDisplay
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If set to true the device will scan for beacons and determine region state anytime
the device&#39;s screen is turned on or off. Useful for debugging.</p>

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





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

