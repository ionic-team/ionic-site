---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "estimotebeacons"
title: "EstimoteBeacons"
header_sub_title: "Class in module "
doc: "EstimoteBeacons"
docType: "class"
---







<h1 class="api-title">
  
  EstimoteBeacons
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/estimote-beacons.ts#L15">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-estimote</code></pre>
<p>Repo:
  <a href="https://github.com/evothings/phonegap-estimotebeacons">
    https://github.com/evothings/phonegap-estimotebeacons
  </a>
</p>

<!-- description -->

<p>This plugin enables communication between a phone and Estimote Beacons peripherals.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->


<!-- @property tags -->


<h2>Static Members</h2>

<div id="ProximityUnknown"></div>
<h3><code>ProximityUnknown()</code>
  
</h3>

Proximity value










<div id="ProximityImmediate"></div>
<h3><code>ProximityImmediate()</code>
  
</h3>

Proximity value










<div id="ProximityNear"></div>
<h3><code>ProximityNear()</code>
  
</h3>

Proximity value










<div id="ProximityFar"></div>
<h3><code>ProximityFar()</code>
  
</h3>

Proximity value










<div id="BeaconColorUnknown"></div>
<h3><code>BeaconColorUnknown()</code>
  
</h3>

Beacon colour










<div id="BeaconColorMintCocktail"></div>
<h3><code>BeaconColorMintCocktail()</code>
  
</h3>

Beacon colour










<div id="BeaconColorIcyMarshmallow"></div>
<h3><code>BeaconColorIcyMarshmallow()</code>
  
</h3>

Beacon colour










<div id="BeaconColorBlueberryPie"></div>
<h3><code>BeaconColorBlueberryPie()</code>
  
</h3>

Beacon colour










<div id="BeaconColorSweetBeetroot"></div>
<h3><code>BeaconColorSweetBeetroot()</code>
  
</h3>

Beacon colour.










<div id="BeaconColorCandyFloss"></div>
<h3><code>BeaconColorCandyFloss()</code>
  
</h3>

Beacon colour










<div id="BeaconColorLemonTart"></div>
<h3><code>BeaconColorLemonTart()</code>
  
</h3>

Beacon colour










<div id="BeaconColorVanillaJello"></div>
<h3><code>BeaconColorVanillaJello()</code>
  
</h3>

Beacon colour










<div id="BeaconColorLiquoriceSwirl"></div>
<h3><code>BeaconColorLiquoriceSwirl()</code>
  
</h3>

Beacon colour










<div id="BeaconColorWhite"></div>
<h3><code>BeaconColorWhite()</code>
  
</h3>

Beacon colour










<div id="BeaconColorTransparent"></div>
<h3><code>BeaconColorTransparent()</code>
  
</h3>

Beacon colour










<div id="RegionStateUnknown"></div>
<h3><code>RegionStateUnknown()</code>
  
</h3>

Region state










<div id="RegionStateOutside"></div>
<h3><code>RegionStateOutside()</code>
  
</h3>

Region state










<div id="RegionStateInside"></div>
<h3><code>RegionStateInside()</code>
  
</h3>

Region state










<div id="requestWhenInUseAuthorization"></div>
<h3><code>requestWhenInUseAuthorization()</code>
  
</h3>


Ask the user for permission to use location services
while the app is in the foreground.
You need to call this function or requestAlwaysAuthorization
on iOS 8+.
Does nothing on other platforms.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestAlwaysAuthorization"></div>
<h3><code>requestAlwaysAuthorization()</code>
  
</h3>


Ask the user for permission to use location services
whenever the app is running.
You need to call this function or requestWhenInUseAuthorization
on iOS 8+.
Does nothing on other platforms.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="authorizationStatus"></div>
<h3><code>authorizationStatus()</code>
  
</h3>


Get the current location authorization status.
Implemented on iOS 8+.
Does nothing on other platforms.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="startAdvertisingAsBeacon"></div>
<h3><code>startAdvertisingAsBeacon(uuid,&nbsp;major,&nbsp;minor,&nbsp;regionId)</code>
  
</h3>




Start advertising as a beacon.



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
      <p>UUID string the beacon should advertise (mandatory).</p>

      
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
      <p>Major value to advertise (mandatory).</p>

      
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
      <p>Minor value to advertise (mandatory).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      regionId
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Identifier of the region used to advertise (mandatory).</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="stopAdvertisingAsBeacon"></div>
<h3><code>stopAdvertisingAsBeacon()</code>
  
</h3>


Stop advertising as a beacon.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="enableAnalytics"></div>
<h3><code>enableAnalytics(enable)</code>
  
</h3>


Enable analytics.



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
      enable
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Boolean value to turn analytics on or off (mandatory).</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isAnalyticsEnabled"></div>
<h3><code>isAnalyticsEnabled()</code>
  
</h3>


Test if analytics is enabled.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isAuthorized"></div>
<h3><code>isAuthorized()</code>
  
</h3>


Test if App ID and App Token is set.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="setupAppIDAndAppToken"></div>
<h3><code>setupAppIDAndAppToken(appID,&nbsp;appToken)</code>
  
</h3>


Set App ID and App Token.



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
      appID
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The App ID (mandatory).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      appToken
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The App Token (mandatory).</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="startEstimoteBeaconDiscovery"></div>
<h3><code>startEstimoteBeaconDiscovery()</code>
  
</h3>




Start scanning for all nearby beacons using CoreBluetooth (no region object is used).
Available on iOS.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns an Observable that notifies of each beacon discovered.
</div>



<div id="stopEstimoteBeaconDiscovery"></div>
<h3><code>stopEstimoteBeaconDiscovery()</code>
  
</h3>


Stop CoreBluetooth scan. Available on iOS.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="startRangingBeaconsInRegion"></div>
<h3><code>startRangingBeaconsInRegion(region)</code>
  
</h3>




Start ranging beacons. Available on iOS and Android.



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
      
<code>EstimoteBeaconRegion</code>
    </td>
    <td>
      <p>Dictionary with region properties (mandatory).</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns an Observable that notifies of each beacon discovered.
</div>



<div id="stopRangingBeaconsInRegion"></div>
<h3><code>stopRangingBeaconsInRegion(region)</code>
  
</h3>


Stop ranging beacons. Available on iOS and Android.



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
      
<code>EstimoteBeaconRegion</code>
    </td>
    <td>
      <p>Dictionary with region properties (mandatory).</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="startRangingSecureBeaconsInRegion"></div>
<h3><code>startRangingSecureBeaconsInRegion()</code>
  
</h3>




Start ranging secure beacons. Available on iOS.
This function has the same parameters/behaviour as
<a href='undefined'><code>startRangingBeaconsInRegion</code></a>.
To use secure beacons set the App ID and App Token using
<a href='undefined'><code>setupAppIDAndAppToken</code></a>.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="stopRangingSecureBeaconsInRegion"></div>
<h3><code>stopRangingSecureBeaconsInRegion()</code>
  
</h3>


Stop ranging secure beacons. Available on iOS.
This function has the same parameters/behaviour as
<a href='undefined'><code>stopRangingBeaconsInRegion</code></a>.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="startMonitoringForRegion"></div>
<h3><code>startMonitoringForRegion(region,&nbsp;notifyEntryStateOnDisplay)</code>
  
</h3>




Start monitoring beacons. Available on iOS and Android.



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
      
<code>EstimoteBeaconRegion</code>
    </td>
    <td>
      <p>Dictionary with region properties (mandatory).</p>

      
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
      <p>Set to true to detect if you
are inside a region when the user turns display on, see
<a href='<a'>href="https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLBeaconRegion_class/index.html#//apple_ref/occ/instp/CLBeaconRegion/notifyEntryStateOnDisplay|iOS">https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLBeaconRegion_class/index.html#//apple_ref/occ/instp/CLBeaconRegion/notifyEntryStateOnDisplay|iOS</a> documentation</a>
for further details (optional, defaults to false, iOS only).</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns an Observable that notifies of each region state discovered.
</div>



<div id="stopMonitoringForRegion"></div>
<h3><code>stopMonitoringForRegion(region)</code>
  
</h3>


Stop monitoring beacons. Available on iOS and Android.



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
      
<code>EstimoteBeaconRegion</code>
    </td>
    <td>
      <p>Dictionary with region properties (mandatory).</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="startSecureMonitoringForRegion"></div>
<h3><code>startSecureMonitoringForRegion(region,&nbsp;notifyEntryStateOnDisplay)</code>
  
</h3>




Start monitoring secure beacons. Available on iOS.
This function has the same parameters/behaviour as
EstimoteBeacons.startMonitoringForRegion.
To use secure beacons set the App ID and App Token using
<a href='undefined'><code>setupAppIDAndAppToken</code></a>.


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
      
<code>EstimoteBeaconRegion</code>
    </td>
    <td>
      <p>Region</p>

      
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
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="stopSecureMonitoringForRegion"></div>
<h3><code>stopSecureMonitoringForRegion(region)</code>
  
</h3>


Stop monitoring secure beacons. Available on iOS.
This function has the same parameters/behaviour as
<a href='undefined'><code>stopMonitoringForRegion</code></a>.


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
      
<code>EstimoteBeaconRegion</code>
    </td>
    <td>
      <p>Region</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="connectToBeacon"></div>
<h3><code>connectToBeacon(beacon)</code>
  
</h3>


Connect to Estimote Beacon. Available on Android.



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
      beacon
      
      
    </td>
    <td>
      
<code>Beacon</code>
    </td>
    <td>
      <p>Beacon to connect to.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="disconnectConnectedBeacon"></div>
<h3><code>disconnectConnectedBeacon()</code>
  
</h3>


Disconnect from connected Estimote Beacon. Available on Android.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="writeConnectedProximityUUID"></div>
<h3><code>writeConnectedProximityUUID()</code>
  
</h3>


Write proximity UUID to connected Estimote Beacon. Available on Android.









<div id="writeConnectedMajor"></div>
<h3><code>writeConnectedMajor()</code>
  
</h3>


Write major to connected Estimote Beacon. Available on Android.









<div id="writeConnectedMinor"></div>
<h3><code>writeConnectedMinor()</code>
  
</h3>


Write minor to connected Estimote Beacon. Available on Android.










<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="EstimoteBeaconRegion" href="#EstimoteBeaconRegion"></a>EstimoteBeaconRegion</h2>


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
      state
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
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
      
    </td>
  </tr>
  
  <tr>
    <td>
      identifier
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
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
      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

