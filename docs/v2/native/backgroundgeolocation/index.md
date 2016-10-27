---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "backgroundgeolocation"
title: "BackgroundGeolocation"
header_sub_title: "Class in module "
doc: "BackgroundGeolocation"
docType: "class"
---







<h1 class="api-title">
  
  BackgroundGeolocation
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/background-geolocation.ts#L256">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-mauron85-background-geolocation</code></pre>
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


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { BackgroundGeolocation } from &#39;ionic-native&#39;;


// When device is ready :
platform.ready().then(() =&gt; {
    // IMPORTANT: BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.

    // BackgroundGeolocation is highly configurable. See platform specific configuration options
    let config = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };

    BackgroundGeolocation.configure((location) =&gt; {
         console.log(&#39;[js] BackgroundGeolocation callback:  &#39; + location.latitude + &#39;,&#39; + location.longitude);

          // IMPORTANT:  You must execute the finish method here to inform the native plugin that you&#39;re finished,
          // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
          // IF YOU DON&#39;T, ios will CRASH YOUR APP for spending too much time in the background.
          BackgroundGeolocation.finish(); // FOR IOS ONLY

     }, (error) =&gt; {
       console.log(&#39;BackgroundGeolocation error&#39;);
     }, config);

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    BackgroundGeolocation.start();
})

// If you wish to turn OFF background-tracking, call the #stop method.
BackgroundGeolocation.stop();
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="LocationProvider"></div>
<h3><code>LocationProvider()</code>
  
</h3>

Set location service provider @see https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers 

Possible values:
 ANDROID_DISTANCE_FILTER_PROVIDER: 0, 
 ANDROID_ACTIVITY_PROVIDER: 1 









<div id="Accuracy"></div>
<h3><code>Accuracy()</code>
  
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
<h3><code>Mode()</code>
  
</h3>

Used in the switchMode function 

Possible values:
 BACKGROUND: 0
 FOREGROUND: 1 









<div id="configure"></div>
<h3><code>configure(callback,&nbsp;errorCallback,&nbsp;options)</code>
  
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
      callback
      
      
    </td>
    <td>
      
<code>Function</code>
    </td>
    <td>
      <p>callback will be called when background location is determined.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      errorCallback
      
      
    </td>
    <td>
      
<code>Function</code>
    </td>
    <td>
      <p>callback to be executed every time a geolocation error occurs.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>Config</code>
    </td>
    <td>
      <p>An object of type Config</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Location object, which tries to mimic w3c Coordinates interface.
See http://dev.w3.org/geo/api/spec-source.html#coordinates_interface
Callback to be executed every time a geolocation is recorded in the background.


</div>



<div id="start"></div>
<h3><code>start()</code>
  
</h3>


Turn ON the background-geolocation system.
The user will be tracked whenever they suspend the app.










<div id="stop"></div>
<h3><code>stop()</code>
  
</h3>


Turn OFF background-tracking










<div id="finish"></div>
<h3><code>finish()</code>
  
</h3>


Inform the native plugin that you're finished, the background-task may be completed
NOTE: IOS, WP only










<div id="changePace"></div>
<h3><code>changePace()</code>
  
</h3>


Force the plugin to enter "moving" or "stationary" state
NOTE: IOS, WP only










<div id="setConfig"></div>
<h3><code>setConfig()</code>
  
</h3>




Setup configuration










<div id="getStationaryLocation"></div>
<h3><code>getStationaryLocation()</code>
  
</h3>


Returns current stationaryLocation if available. null if not
NOTE: IOS, WP only










<div id="onStationary"></div>
<h3><code>onStationary()</code>
  
</h3>


Add a stationary-region listener. Whenever the devices enters "stationary-mode",
your #success callback will be executed with #location param containing #radius of region
NOTE: IOS, WP only










<div id="isLocationEnabled"></div>
<h3><code>isLocationEnabled()</code>
  
</h3>


Check if location is enabled on the device






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;number&gt;</code> Returns a promise with int argument that takes values 0, 1 (true).
NOTE: ANDROID only
</div>



<div id="showAppSettings"></div>
<h3><code>showAppSettings()</code>
  
</h3>




Display app settings to change permissions










<div id="showLocationSettings"></div>
<h3><code>showLocationSettings()</code>
  
</h3>




Display device location settings










<div id="watchLocationMode"></div>
<h3><code>watchLocationMode()</code>
  
</h3>


Method can be used to detect user changes in location services settings.
If user enable or disable location services then success callback will be executed.
In case or error (SettingNotFoundException) fail callback will be executed.
NOTE: ANDROID only










<div id="stopWatchingLocationMode"></div>
<h3><code>stopWatchingLocationMode()</code>
  
</h3>


Stop watching for location mode changes.
NOTE: ANDROID only










<div id="getLocations"></div>
<h3><code>getLocations()</code>
  
</h3>


Method will return all stored locations.
Locations are stored when:
 - config.stopOnTerminate is false and main activity was killed
   by the system
 or
 - option.debug is true
NOTE: ANDROID only










<div id="getValidLocations"></div>
<h3><code>getValidLocations()</code>
  
</h3>


Method will return locations, which has not been yet posted to server. NOTE: Locations does contain locationId.










<div id="deleteLocation"></div>
<h3><code>deleteLocation()</code>
  
</h3>


Delete stored location by given locationId.
NOTE: ANDROID only










<div id="deleteAllLocations"></div>
<h3><code>deleteAllLocations()</code>
  
</h3>


Delete all stored locations.
NOTE: ANDROID only










<div id="switchMode"></div>
<h3><code>switchMode(See)</code>
  
</h3>


Normally plugin will handle switching between BACKGROUND and FOREGROUND mode itself.
Calling switchMode you can override plugin behavior and force plugin to switch into other mode.

In FOREGROUND mode plugin uses iOS local manager to receive locations and behavior is affected by option.desiredAccuracy and option.distanceFilter.
In BACKGROUND mode plugin uses significant changes and region monitoring to receive locations and uses option.stationaryRadius only. 

BackgroundGeolocation.Mode.FOREGROUND
BackgroundGeolocation.Mode.BACKGROUND 

NOTE: iOS only



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
      See
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>above.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="getLogEntries"></div>
<h3><code>getLogEntries(Limits)</code>
  
</h3>


Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries. 
@see https://github.com/mauron85/cordova-plugin-background-geolocation/tree/v2.2.1#debugging for more information. 



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
      Limits
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>the number of entries</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>


<h3><a class="anchor" name="Location" href="#Location"></a>Location</h3>


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
      number
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
      string
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
      boolean
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
      number
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
      number
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
      number
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
      number
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
      number
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
      number
    </td>
    <td>
      <p>altitude if available, in meters above the WGS 84 reference ellipsoid.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      bearing
      
    </td>
    <td>
      number
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
      Coordinates
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
      number
    </td>
    <td>
      <p>A timestamp representing the time at which the location was retrieved.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="Config" href="#Config"></a>Config</h3>


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
      number
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
      number
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
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      <p>When enabled, the plugin will emit sounds for life-cycle events of
background-geolocation! See debugging sounds table.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      distanceFilter
      
    </td>
    <td>
      number
    </td>
    <td>
      <p>The minimum distance (measured in meters) a device must move horizontally
before an update event is generated. @see Apple docs. (<a href="https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/distanceFilter">https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/distanceFilter</a>)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      stopOnTerminate
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      <p>IOS, ANDROID ONLY
Enable this in order to force a stop() when the application terminated
(e.g. on iOS, double-tap home button, swipe away the app).o</p>
<p>Defaults to true</p>

    </td>
  </tr>
  
  <tr>
    <td>
      startOnBoot
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      <p>ANDROID ONLY 
Start background service on device boot. </p>
<p>Defaults to false</p>

    </td>
  </tr>
  
  <tr>
    <td>
      startForeground
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      <p>ANDROID ONLY 
If false location service will not be started in foreground and no notification will be shown.</p>
<p>Defaults to true</p>

    </td>
  </tr>
  
  <tr>
    <td>
      interval
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      <p>ANDROID, WP8 ONLY
The minimum time interval between location updates in seconds.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      notificationTitle
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>ANDROID ONLY
Custom notification title in the drawer.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      notificationText
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>ANDROID ONLY
Custom notification text in the drawer.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      notificationIconColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>ANDROID ONLY
The accent color to use for notification. Eg. #4CAF50.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      notificationIconLarge
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>ANDROID ONLY 
The filename of a custom notification icon. See android quirks. 
NOTE: Only available for API Level &gt;=21.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      notificationIconSmall
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>ANDROID ONLY 
The filename of a custom notification icon. See android quirks. 
NOTE: Only available for API Level &gt;=21.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      locationProvider
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      <p>ANDROID ONLY
Set location service provider @see wiki (<a href="https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers">https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers</a>)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      activityType
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>IOS ONLY
[AutomotiveNavigation, OtherNavigation, Fitness, Other] Presumably,
this affects iOS GPS algorithm. @see Apple docs for more information
(<a href="https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/activityType">https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html#//apple_ref/occ/instp/CLLocationManager/activityType</a>)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      pauseLocationUpdates
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      <p>IOS ONLY 
Pauses location updates when app is paused </p>
<p>Defaults to true</p>

    </td>
  </tr>
  
  <tr>
    <td>
      url
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>Server url where to send HTTP POST with recorded locations </p>

    </td>
  </tr>
  
  <tr>
    <td>
      syncUrl
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>Server url where to send fail to post locations </p>

    </td>
  </tr>
  
  <tr>
    <td>
      syncThreshold
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      <p>Specifies how many previously failed locations will be sent to server at once </p>
<p>Defaults to 100</p>

    </td>
  </tr>
  
  <tr>
    <td>
      httpHeaders
      <div><em>(optional)</em></div>
    </td>
    <td>
      any
    </td>
    <td>
      <p>Optional HTTP headers sent along in HTTP request</p>

    </td>
  </tr>
  
  <tr>
    <td>
      saveBatteryOnBackground
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      <p>IOS ONLY 
Switch to less accurate significant changes and region monitory when in background (default)</p>
<p>Defaults to 100</p>

    </td>
  </tr>
  
  <tr>
    <td>
      maxLocations
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      <p>Limit maximum number of locations stored into db </p>
<p>Defaults to 10000</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

