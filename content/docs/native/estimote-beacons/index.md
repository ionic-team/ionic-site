---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "estimote-beacons"
title: "Estimote Beacons"
header_sub_title: "Class in module "
doc: "Estimote Beacons"
docType: "class"
---

<h1 class="api-title">Estimote Beacons</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/estimote-beacons/index.ts#L14">
  Improve this doc
</a>







<p>This plugin enables communication between a phone and Estimote Beacons peripherals.</p>


<p>Repo:
  <a href="https://github.com/evothings/phonegap-estimotebeacons">
    https://github.com/evothings/phonegap-estimotebeacons
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-estimote
$ npm install --save @ionic-native/estimote-beacons
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { EstimoteBeacons } from &#39;@ionic-native/estimote-beacons&#39;;

constructor(private eb: EstimoteBeacons) { }

...

this.eb.requestAlwaysAuthorization();

this.eb.enableAnalytics(true);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="ProximityUnknown" href="#ProximityUnknown"></a><code>ProximityUnknown</code></h3>

Proximity value



<h3><a class="anchor" name="ProximityImmediate" href="#ProximityImmediate"></a><code>ProximityImmediate</code></h3>

Proximity value



<h3><a class="anchor" name="ProximityNear" href="#ProximityNear"></a><code>ProximityNear</code></h3>

Proximity value



<h3><a class="anchor" name="ProximityFar" href="#ProximityFar"></a><code>ProximityFar</code></h3>

Proximity value



<h3><a class="anchor" name="BeaconColorUnknown" href="#BeaconColorUnknown"></a><code>BeaconColorUnknown</code></h3>

Beacon colour



<h3><a class="anchor" name="BeaconColorMintCocktail" href="#BeaconColorMintCocktail"></a><code>BeaconColorMintCocktail</code></h3>

Beacon colour



<h3><a class="anchor" name="BeaconColorIcyMarshmallow" href="#BeaconColorIcyMarshmallow"></a><code>BeaconColorIcyMarshmallow</code></h3>

Beacon colour



<h3><a class="anchor" name="BeaconColorBlueberryPie" href="#BeaconColorBlueberryPie"></a><code>BeaconColorBlueberryPie</code></h3>

Beacon colour



<h3><a class="anchor" name="BeaconColorSweetBeetroot" href="#BeaconColorSweetBeetroot"></a><code>BeaconColorSweetBeetroot</code></h3>

Beacon colour.



<h3><a class="anchor" name="BeaconColorCandyFloss" href="#BeaconColorCandyFloss"></a><code>BeaconColorCandyFloss</code></h3>

Beacon colour



<h3><a class="anchor" name="BeaconColorLemonTart" href="#BeaconColorLemonTart"></a><code>BeaconColorLemonTart</code></h3>

Beacon colour



<h3><a class="anchor" name="BeaconColorVanillaJello" href="#BeaconColorVanillaJello"></a><code>BeaconColorVanillaJello</code></h3>

Beacon colour



<h3><a class="anchor" name="BeaconColorLiquoriceSwirl" href="#BeaconColorLiquoriceSwirl"></a><code>BeaconColorLiquoriceSwirl</code></h3>

Beacon colour



<h3><a class="anchor" name="BeaconColorWhite" href="#BeaconColorWhite"></a><code>BeaconColorWhite</code></h3>

Beacon colour



<h3><a class="anchor" name="BeaconColorTransparent" href="#BeaconColorTransparent"></a><code>BeaconColorTransparent</code></h3>

Beacon colour



<h3><a class="anchor" name="RegionStateUnknown" href="#RegionStateUnknown"></a><code>RegionStateUnknown</code></h3>

Region state



<h3><a class="anchor" name="RegionStateOutside" href="#RegionStateOutside"></a><code>RegionStateOutside</code></h3>

Region state



<h3><a class="anchor" name="RegionStateInside" href="#RegionStateInside"></a><code>RegionStateInside</code></h3>

Region state



<h3><a class="anchor" name="requestWhenInUseAuthorization" href="#requestWhenInUseAuthorization"></a><code>requestWhenInUseAuthorization()</code></h3>


Ask the user for permission to use location services
while the app is in the foreground.
You need to call this function or requestAlwaysAuthorization
on iOS 8+.
Does nothing on other platforms.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestAlwaysAuthorization" href="#requestAlwaysAuthorization"></a><code>requestAlwaysAuthorization()</code></h3>


Ask the user for permission to use location services
whenever the app is running.
You need to call this function or requestWhenInUseAuthorization
on iOS 8+.
Does nothing on other platforms.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="authorizationStatus" href="#authorizationStatus"></a><code>authorizationStatus()</code></h3>


Get the current location authorization status.
Implemented on iOS 8+.
Does nothing on other platforms.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startAdvertisingAsBeacon" href="#startAdvertisingAsBeacon"></a><code>startAdvertisingAsBeacon(uuid,&nbsp;major,&nbsp;minor,&nbsp;regionId)</code></h3>




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
      uuid</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>UUID string the beacon should advertise (mandatory).</p>
</td>
  </tr>
  
  <tr>
    <td>
      major</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Major value to advertise (mandatory).</p>
</td>
  </tr>
  
  <tr>
    <td>
      minor</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Minor value to advertise (mandatory).</p>
</td>
  </tr>
  
  <tr>
    <td>
      regionId</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stopAdvertisingAsBeacon" href="#stopAdvertisingAsBeacon"></a><code>stopAdvertisingAsBeacon()</code></h3>


Stop advertising as a beacon.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="enableAnalytics" href="#enableAnalytics"></a><code>enableAnalytics(enable)</code></h3>


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
      enable</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isAnalyticsEnabled" href="#isAnalyticsEnabled"></a><code>isAnalyticsEnabled()</code></h3>


Test if analytics is enabled.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isAuthorized" href="#isAuthorized"></a><code>isAuthorized()</code></h3>


Test if App ID and App Token is set.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setupAppIDAndAppToken" href="#setupAppIDAndAppToken"></a><code>setupAppIDAndAppToken(appID,&nbsp;appToken)</code></h3>


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
      appID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The App ID (mandatory).</p>
</td>
  </tr>
  
  <tr>
    <td>
      appToken</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startEstimoteBeaconDiscovery" href="#startEstimoteBeaconDiscovery"></a><code>startEstimoteBeaconDiscovery()</code></h3>




Start scanning for all nearby beacons using CoreBluetooth (no region object is used).
Available on iOS.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable that notifies of each beacon discovered.
</div><h3><a class="anchor" name="stopEstimoteBeaconDiscovery" href="#stopEstimoteBeaconDiscovery"></a><code>stopEstimoteBeaconDiscovery()</code></h3>


Stop CoreBluetooth scan. Available on iOS.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startRangingBeaconsInRegion" href="#startRangingBeaconsInRegion"></a><code>startRangingBeaconsInRegion(region)</code></h3>




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
      region</td>
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
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable that notifies of each beacon discovered.
</div><h3><a class="anchor" name="stopRangingBeaconsInRegion" href="#stopRangingBeaconsInRegion"></a><code>stopRangingBeaconsInRegion(region)</code></h3>


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
      region</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startRangingSecureBeaconsInRegion" href="#startRangingSecureBeaconsInRegion"></a><code>startRangingSecureBeaconsInRegion()</code></h3>




Start ranging secure beacons. Available on iOS.
This function has the same parameters/behavior as
<a href="undefined"><code>startRangingBeaconsInRegion</code></a>.
To use secure beacons set the App ID and App Token using
<a href="undefined"><code>setupAppIDAndAppToken</code></a>.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stopRangingSecureBeaconsInRegion" href="#stopRangingSecureBeaconsInRegion"></a><code>stopRangingSecureBeaconsInRegion()</code></h3>


Stop ranging secure beacons. Available on iOS.
This function has the same parameters/behavior as
<a href="undefined"><code>stopRangingBeaconsInRegion</code></a>.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startMonitoringForRegion" href="#startMonitoringForRegion"></a><code>startMonitoringForRegion(region,&nbsp;notifyEntryStateOnDisplay)</code></h3>




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
      region</td>
    <td>
      <code>EstimoteBeaconRegion</code>
    </td>
    <td>
      <p>Dictionary with region properties (mandatory).</p>
</td>
  </tr>
  
  <tr>
    <td>
      notifyEntryStateOnDisplay</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to detect if you
are inside a region when the user turns display on, see
<a href="<a">href="https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLBeaconRegion_class/index.html#//apple_ref/occ/instp/CLBeaconRegion/notifyEntryStateOnDisplay|iOS">https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLBeaconRegion_class/index.html#//apple_ref/occ/instp/CLBeaconRegion/notifyEntryStateOnDisplay|iOS</a> documentation</a>
for further details (iOS only).<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an Observable that notifies of each region state discovered.
</div><h3><a class="anchor" name="stopMonitoringForRegion" href="#stopMonitoringForRegion"></a><code>stopMonitoringForRegion(region)</code></h3>


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
      region</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startSecureMonitoringForRegion" href="#startSecureMonitoringForRegion"></a><code>startSecureMonitoringForRegion(region,&nbsp;notifyEntryStateOnDisplay)</code></h3>




Start monitoring secure beacons. Available on iOS.
This function has the same parameters/behavior as
EstimoteBeacons.startMonitoringForRegion.
To use secure beacons set the App ID and App Token using
<a href="undefined"><code>setupAppIDAndAppToken</code></a>.
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
      <code>EstimoteBeaconRegion</code>
    </td>
    <td>
      <p>Region</p>
</td>
  </tr>
  
  <tr>
    <td>
      notifyEntryStateOnDisplay</td>
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
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stopSecureMonitoringForRegion" href="#stopSecureMonitoringForRegion"></a><code>stopSecureMonitoringForRegion(region)</code></h3>


Stop monitoring secure beacons. Available on iOS.
This function has the same parameters/behavior as
<a href="undefined"><code>stopMonitoringForRegion</code></a>.
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="connectToBeacon" href="#connectToBeacon"></a><code>connectToBeacon(beacon)</code></h3>


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
      beacon</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="disconnectConnectedBeacon" href="#disconnectConnectedBeacon"></a><code>disconnectConnectedBeacon()</code></h3>


Disconnect from connected Estimote Beacon. Available on Android.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="writeConnectedProximityUUID" href="#writeConnectedProximityUUID"></a><code>writeConnectedProximityUUID()</code></h3>


Write proximity UUID to connected Estimote Beacon. Available on Android.



<h3><a class="anchor" name="writeConnectedMajor" href="#writeConnectedMajor"></a><code>writeConnectedMajor()</code></h3>


Write major to connected Estimote Beacon. Available on Android.



<h3><a class="anchor" name="writeConnectedMinor" href="#writeConnectedMinor"></a><code>writeConnectedMinor()</code></h3>


Write minor to connected Estimote Beacon. Available on Android.









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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
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





