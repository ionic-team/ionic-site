---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "background-geolocation"
title: "Background Geolocation"
header_sub_title: "Class in module "
doc: "Background Geolocation"
docType: "class"
---







<h1 class="api-title">
  
  Background Geolocation
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/background-geolocation/index.ts#L289">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-mauron85-background-geolocation
$ npm install --save @ionic-native/background-geolocation
</code></pre>
<p>Repo:
  <a href="https://github.com/mauron85/cordova-plugin-background-geolocation">
    https://github.com/mauron85/cordova-plugin-background-geolocation
  </a>
</p>

<!-- description -->

<p>This plugin provides foreground and background geolocation with battery-saving &quot;circular region monitoring&quot; and &quot;stop detection&quot;. For
more detail, please see <a href="https://github.com/mauron85/cordova-plugin-background-geolocation">https://github.com/mauron85/cordova-plugin-background-geolocation</a></p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<p>BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.</p>
<pre><code class="lang-typescript">import { BackgroundGeolocation, BackgroundGeolocationConfig } from &#39;@ionic-native/background-geolocation&#39;;

constructor(private backgroundGeolocation: BackgroundGeolocation) { }

...

const config: BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };

this.backgroundGeolocation.configure(config)
  .subscribe((location: BackgroundGeolocationResponse) =&gt; {

    console.log(location);

    // IMPORTANT:  You must execute the finish method here to inform the native plugin that you&#39;re finished,
    // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
    // IF YOU DON&#39;T, ios will CRASH YOUR APP for spending too much time in the background.
    this.backgroundGeolocation.finish(); // FOR IOS ONLY

  });

// start recording location
this.backgroundGeolocation.start();

// If you wish to turn OFF background-tracking, call the #stop method.
this.backgroundGeolocation.stop();
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="LocationProvider"></div>
<h3>
  <code>LocationProvider</code>
  

</h3>
Set location service provider @see https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers 

Possible values:
 ANDROID_DISTANCE_FILTER_PROVIDER: 0, 
 ANDROID_ACTIVITY_PROVIDER: 1 



<div id="Accuracy"></div>
<h3>
  <code>Accuracy</code>
  

</h3>
Desired accuracy in meters. Possible values [0, 10, 100, 1000]. 
The lower the number, the more power devoted to GeoLocation resulting in higher accuracy readings. 
1000 results in lowest power drain and least accurate readings. 

Possible values:
 HIGH: 0 
 MEDIUM: 10 
 LOW: 100 
 PASSIVE: 1000

enum {number}



<div id="Mode"></div>
<h3>
  <code>Mode</code>
  

</h3>
Used in the switchMode function 

Possible values:
 BACKGROUND: 0
 FOREGROUND: 1 



<div id="configure"></div>
<h3>
  <code>configure(options)</code>
  

</h3>
Configure the plugin.

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
      options
      
    </td>
    <td>
      
<code>BackgroundGeolocationConfig</code>
    </td>
    <td>
      <p>options An object of type Config</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;BackgroundGeolocationResponse&gt;</code> 
</div><div id="start"></div>
<h3>
  <code>start()</code>
  

</h3>
Turn ON the background-geolocation system.
The user will be tracked whenever they suspend the app.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="stop"></div>
<h3>
  <code>stop()</code>
  

</h3>
Turn OFF background-tracking


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="finish"></div>
<h3>
  <code>finish()</code>
  

</h3>
Inform the native plugin that you're finished, the background-task may be completed


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="changePace"></div>
<h3>
  <code>changePace(isMoving)</code>
  

</h3>
Force the plugin to enter "moving" or "stationary" state
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
      isMoving
      
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
<code>Promise&lt;any&gt;</code> 
</div><div id="setConfig"></div>
<h3>
  <code>setConfig(options)</code>
  

</h3>
Setup configuration
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
      options
      
    </td>
    <td>
      
<code>BackgroundGeolocationConfig</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getStationaryLocation"></div>
<h3>
  <code>getStationaryLocation()</code>
  

</h3>
Returns current stationaryLocation if available. null if not


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Location&gt;</code> 
</div><div id="onStationary"></div>
<h3>
  <code>onStationary()</code>
  

</h3>
Add a stationary-region listener. Whenever the devices enters "stationary-mode",
your #success callback will be executed with #location param containing #radius of region


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="isLocationEnabled"></div>
<h3>
  <code>isLocationEnabled()</code>
  

</h3>
Check if location is enabled on the device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;number&gt;</code> Returns a promise with int argument that takes values 0, 1 (true).
</div><div id="showAppSettings"></div>
<h3>
  <code>showAppSettings()</code>
  

</h3>
Display app settings to change permissions



<div id="showLocationSettings"></div>
<h3>
  <code>showLocationSettings()</code>
  

</h3>
Display device location settings



<div id="watchLocationMode"></div>
<h3>
  <code>watchLocationMode()</code>
  

</h3>
Method can be used to detect user changes in location services settings.
If user enable or disable location services then success callback will be executed.
In case or error (SettingNotFoundException) fail callback will be executed.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div><div id="stopWatchingLocationMode"></div>
<h3>
  <code>stopWatchingLocationMode()</code>
  

</h3>
Stop watching for location mode changes.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getLocations"></div>
<h3>
  <code>getLocations()</code>
  

</h3>
Method will return all stored locations.
Locations are stored when:
 - config.stopOnTerminate is false and main activity was killed
   by the system
 or
 - option.debug is true


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getValidLocations"></div>
<h3>
  <code>getValidLocations()</code>
  

</h3>
Method will return locations, which has not been yet posted to server. NOTE: Locations does contain locationId. 


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="deleteLocation"></div>
<h3>
  <code>deleteLocation(locationId)</code>
  

</h3>
Delete stored location by given locationId.
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
      locationId
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="deleteAllLocations"></div>
<h3>
  <code>deleteAllLocations()</code>
  

</h3>
Delete all stored locations.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="switchMode"></div>
<h3>
  <code>switchMode(modeId)</code>
  

</h3>
Normally plugin will handle switching between BACKGROUND and FOREGROUND mode itself.
Calling switchMode you can override plugin behavior and force plugin to switch into other mode.

In FOREGROUND mode plugin uses iOS local manager to receive locations and behavior is affected by option.desiredAccuracy and option.distanceFilter.
In BACKGROUND mode plugin uses significant changes and region monitoring to receive locations and uses option.stationaryRadius only. 

BackgroundGeolocation.Mode.FOREGROUND
BackgroundGeolocation.Mode.BACKGROUND 
*
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
      modeId
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getLogEntries"></div>
<h3>
  <code>getLogEntries()</code>
  

</h3>
Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries. 
@see https://github.com/mauron85/cordova-plugin-background-geolocation/tree/v2.2.1#debugging for more information. 

@param limit {number} Limits the number of entries 


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="BackgroundGeolocationResponse" href="#BackgroundGeolocationResponse"></a>BackgroundGeolocationResponse</h2>


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
      locationId
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>ID of location as stored in DB (or null)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      serviceProvider
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Service provider</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      debug
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>true if location recorded as part of debug</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      time
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>UTC time of this fix, in milliseconds since January 1, 1970.</p>

      
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
      <p>latitude, in degrees.</p>

      
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
      <p>longitude, in degrees.</p>

      
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
      <p>estimated accuracy of this location, in meters.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      speed
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>speed if it is available, in meters/second over ground.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      altitude
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>altitude if available, in meters above the WGS 84 reference ellipsoid.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      altitudeAccuracy
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>accuracy of the altitude if available.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      bearing
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>bearing, in degrees.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      coords
    </td>
    <td>
      <code>Coordinates</code>
    </td>
    <td>
      <p>A Coordinates object defining the current location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>A timestamp representing the time at which the location was retrieved.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="BackgroundGeolocationConfig" href="#BackgroundGeolocationConfig"></a>BackgroundGeolocationConfig</h2>


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
      desiredAccuracy
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Desired accuracy in meters. Possible values [0, 10, 100, 1000]. The lower
the number, the more power devoted to GeoLocation resulting in higher
accuracy readings. 1000 results in lowest power drain and least accurate
readings. @see Apple docs (<a href="https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instp/CLLocationManager/desiredAccuracy">https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instp/CLLocationManager/desiredAccuracy</a>)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      stationaryRadius
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Stationary radius in meters. When stopped, the minimum distance the device
must move beyond the stationary location for aggressive background-tracking
to engage.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      debug
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>When enabled, the plugin will emit sounds for life-cycle events of
background-geolocation! See debugging sounds table.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      distanceFilter
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The minimum distance (measured in meters) a device must move horizontally
before an update event is generated. @see Apple docs. (<a href="https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/distanceFilter">https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/distanceFilter</a>)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      stopOnTerminate
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>IOS, ANDROID ONLY
Enable this in order to force a stop() when the application terminated
(e.g. on iOS, double-tap home button, swipe away the app).o</p>
<p>Defaults to true</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      startOnBoot
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY 
Start background service on device boot. </p>
<p>Defaults to false</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      startForeground
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY 
If false location service will not be started in foreground and no notification will be shown.</p>
<p>Defaults to true</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      interval
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>ANDROID, WP8 ONLY
When using BackgroundGeolocation.LocationProvider.ANDROID_DISTANCE_FILTER_PROVIDER:
The minimum time interval between location updates in milliseconds.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      notificationTitle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
Custom notification title in the drawer.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      notificationText
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
Custom notification text in the drawer.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      notificationIconColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
The accent color to use for notification. Eg. #4CAF50.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      notificationIconLarge
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY 
The filename of a custom notification icon. See android quirks. 
NOTE: Only available for API Level &gt;=21.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      notificationIconSmall
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY 
The filename of a custom notification icon. See android quirks. 
NOTE: Only available for API Level &gt;=21.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      locationProvider
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>ANDROID ONLY
Set location service provider @see wiki (<a href="https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers">https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers</a>)</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      activityType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>IOS ONLY
[AutomotiveNavigation, OtherNavigation, Fitness, Other] Presumably,
this affects iOS GPS algorithm. @see Apple docs for more information
(<a href="https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/activityType">https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/activityType</a>)</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      pauseLocationUpdates
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>IOS ONLY 
Pauses location updates when app is paused </p>
<p>Defaults to true</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Server url where to send HTTP POST with recorded locations </p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      syncUrl
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Server url where to send fail to post locations </p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      syncThreshold
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Specifies how many previously failed locations will be sent to server at once </p>
<p>Defaults to 100</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      httpHeaders
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Optional HTTP headers sent along in HTTP request</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      saveBatteryOnBackground
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>IOS ONLY 
Switch to less accurate significant changes and region monitory when in background (default)</p>
<p>Defaults to 100</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      maxLocations
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Limit maximum number of locations stored into db </p>
<p>Defaults to 10000</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      fastestInterval
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>ANDROID ONLY with BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER</p>
<p>Fastest rate in milliseconds at which your app can handle location updates.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      activitiesInterval
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>ANDROID ONLY with BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER</p>
<p>Rate in milliseconds at which activity recognition occurs. Larger values will result in fewer activity detections while improving battery life.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      stopOnStillActivity
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY with BackgroundGeolocation.LocationProvider.ANDROID_ACTIVITY_PROVIDER</p>
<p>stop() is forced, when the STILL activity is detected (default is true)</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

