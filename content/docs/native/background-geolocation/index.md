---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "background-geolocation"
title: "Background Geolocation"
header_sub_title: "Class in module "
doc: "Background Geolocation"
docType: "class"
---

<h1 class="api-title">Background Geolocation</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/background-geolocation/index.ts#L488">
  Improve this doc
</a>







<p>This plugin provides foreground and background geolocation with battery-saving &quot;circular region monitoring&quot; and &quot;stop detection&quot;. For
more detail, please see <a href="https://github.com/mauron85/cordova-plugin-background-geolocation">https://github.com/mauron85/cordova-plugin-background-geolocation</a></p>


<p>Repo:
  <a href="https://github.com/mauron85/cordova-plugin-background-geolocation">
    https://github.com/mauron85/cordova-plugin-background-geolocation
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-mauron85-background-geolocation@alpha
$ npm install --save @ionic-native/background-geolocation
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<p>BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.</p>
<pre><code class="lang-typescript">import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from &#39;@ionic-native/background-geolocation&#39;;

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








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="code" href="#code"></a><code>code</code></h3>




<h3><a class="anchor" name="message" href="#message"></a><code>message</code></h3>




<h3><a class="anchor" name="configure" href="#configure"></a><code>configure(options)</code></h3>


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
      options</td>
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
  <b>Returns:</b> <code>Observable&lt;BackgroundGeolocationResponse&gt;</code> 
</div><h3><a class="anchor" name="start" href="#start"></a><code>start()</code></h3>


Turn ON the background-geolocation system.
The user will be tracked whenever they suspend the app.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stop" href="#stop"></a><code>stop()</code></h3>


Turn OFF background-tracking


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="finish" href="#finish"></a><code>finish()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Inform the native plugin that you're finished, the background-task may be completed


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="changePace" href="#changePace"></a><code>changePace(isMoving)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


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
      isMoving</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setConfig" href="#setConfig"></a><code>setConfig(options)</code></h3>




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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getStationaryLocation" href="#getStationaryLocation"></a><code>getStationaryLocation()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Returns current stationaryLocation if available. null if not


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Location&gt;</code> 
</div><h3><a class="anchor" name="onStationary" href="#onStationary"></a><code>onStationary()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Add a stationary-region listener. Whenever the devices enters "stationary-mode",
your #success callback will be executed with #location param containing #radius of region


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isLocationEnabled" href="#isLocationEnabled"></a><code>isLocationEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Check if location is enabled on the device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;number&gt;</code> Returns a promise with int argument that takes values 0, 1 (true).
</div><h3><a class="anchor" name="showAppSettings" href="#showAppSettings"></a><code>showAppSettings()</code></h3>




Display app settings to change permissions



<h3><a class="anchor" name="showLocationSettings" href="#showLocationSettings"></a><code>showLocationSettings()</code></h3>




Display device location settings



<h3><a class="anchor" name="watchLocationMode" href="#watchLocationMode"></a><code>watchLocationMode()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Method can be used to detect user changes in location services settings.
If user enable or disable location services then success callback will be executed.
In case or  (SettingNotFoundException) fail callback will be executed.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;number&gt;</code> 
</div><h3><a class="anchor" name="stopWatchingLocationMode" href="#stopWatchingLocationMode"></a><code>stopWatchingLocationMode()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Stop watching for location mode changes.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getLocations" href="#getLocations"></a><code>getLocations()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Method will return all stored locations.
Locations are stored when:
 - config.stopOnTerminate is false and main activity was killed
   by the system
 or
 - option.debug is true


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getValidLocations" href="#getValidLocations"></a><code>getValidLocations()</code></h3>


Method will return locations, which has not been yet posted to server. NOTE: Locations does contain locationId.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="deleteLocation" href="#deleteLocation"></a><code>deleteLocation(locationId)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


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
      locationId</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="deleteAllLocations" href="#deleteAllLocations"></a><code>deleteAllLocations()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Delete all stored locations.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="switchMode" href="#switchMode"></a><code>switchMode(modeId)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Normally plugin will handle switching between BACKGROUND and FOREGROUND mode itself.
Calling switchMode you can override plugin behavior and force plugin to switch into other mode.

In FOREGROUND mode plugin uses iOS local manager to receive locations and behavior is affected by option.desiredAccuracy and option.distanceFilter.
In BACKGROUND mode plugin uses significant changes and region monitoring to receive locations and uses option.stationaryRadius only.

BackgroundGeolocation.Mode.FOREGROUND
BackgroundGeolocation.Mode.BACKGROUND

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
      modeId</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getLogEntries" href="#getLogEntries"></a><code>getLogEntries(limit)</code></h3>


Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries.
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
      limit</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Limits the number of entries</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getConfig" href="#getConfig"></a><code>getConfig()</code></h3>


Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getCurrentLocation" href="#getCurrentLocation"></a><code>getCurrentLocation(options)</code></h3>




One time location check to get current location of the device.
{timeout: Maximum time in milliseconds device will wait for location,
maximumAge: Maximum age in milliseconds of a possible cached location that is acceptable to return;
enableHighAccuracy: if true and if the device is able to provide a more accurate position, it will do so}

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
      options</td>
    <td>
      <code>BackgroundGeolocationCurrentPositionConfig</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="checkStatus" href="#checkStatus"></a><code>checkStatus()</code></h3>


Check status of the service



<h3><a class="anchor" name="startTask" href="#startTask"></a><code>startTask()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">IOS</strong>&nbsp;</p>


Start background task (iOS only)

To perform any long running operation on iOS
you need to create background task
IMPORTANT: task has to be ended by endTask



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;number&gt;</code> taskKey
</div><h3><a class="anchor" name="endTask" href="#endTask"></a><code>endTask()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">IOS</strong>&nbsp;</p>


End background task indentified by taskKey (iOS only)



<h3><a class="anchor" name="headlessTask" href="#headlessTask"></a><code>headlessTask(func)</code></h3>


A special task that gets executed when the app is terminated, but
the plugin was configured to continue running in the background
(option <code>stopOnTerminate: false</code>).

In this scenario the Activity was killed by the system and all registered
event listeners will not be triggered until the app is relaunched.

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
      func</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="forceSync" href="#forceSync"></a><code>forceSync()</code></h3>


Force sync of pending locations.
Option <code>syncThreshold</code> will be ignored and all pending locations will be immediately posted to <code>syncUrl</code> in single batch.

Platform: Android, iOS



<h3><a class="anchor" name="on" href="#on"></a><code>on(event,&nbsp;callbackFn)</code></h3>




Register event listener.

Triggered when server responded with "<code>285 Updates Not Required</code>" to post/sync request.
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
      event</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      callbackFn</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="removeAllListeners" href="#removeAllListeners"></a><code>removeAllListeners()</code></h3>


Unregister all event listeners for given event.

If parameter <code>event</code> is not provided then all event listeners will be removed.









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
      id
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
      provider
    </td>
    <td>
      <code>BackgroundGeolocationNativeProvider</code>
    </td>
    <td>
      <p>Native provider reponsible for location.</p>
<p>Possible values:
&quot;gps&quot;, &quot;network&quot;, &quot;passive&quot; or &quot;fused&quot;</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      locationProvider
    </td>
    <td>
      <code>BackgroundGeolocationLocationProvider</code>
    </td>
    <td>
      <p>Configured location provider.</p>

      
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
      <p>Latitude, in degrees.</p>

      
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
      <p>Longitude, in degrees.</p>

      
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
      <p>Estimated accuracy of this location, in meters.</p>

      
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
      <p>Speed if it is available, in meters/second over ground.</p>
<p>Note: Not all providers are capable of providing speed.
Typically network providers are not able to do so.</p>

      
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
      <p>Altitude if available, in meters above the WGS 84 reference ellipsoid.</p>

      
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
      <p>Bearing, in degrees.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      isFromMockProvider
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>True if location was recorded by mock provider. (ANDROID ONLY)</p>
<p>Note: this property is not enabled by default!
You can enable it &quot;postTemplate&quot; configure option.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      mockLocationsEnabled
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>True if device has mock locations enabled. (ANDROID ONLY)</p>
<p>Note: this property is not enabled by default!
You can enable it &quot;postTemplate&quot; configure option.</p>

      <em>(optional)</em>
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
      locationProvider
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set location provider</p>
<p>Platform: all
Available providers:
 DISTANCE_FILTER_PROVIDER,
 ACTIVITY_PROVIDER
 RAW_PROVIDER</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      desiredAccuracy
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Desired accuracy in meters.</p>
<p>Platform: all
Provider: all
Possible values:
 HIGH_ACCURACY,
 MEDIUM_ACCURACY,
 LOW_ACCURACY,
 PASSIVE_ACCURACY
Note: Accuracy has direct effect on power drain. Lower accuracy = lower power drain.</p>

      <em>(optional)</em>
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
      <p>Stationary radius in meters.</p>
<p>When stopped, the minimum distance the device must move beyond the stationary location for aggressive background-tracking to engage.
Platform: all
Provider: DISTANCE_FILTER</p>

      <em>(optional)</em>
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
      <p>When enabled, the plugin will emit sounds for life-cycle events of background-geolocation! See debugging sounds table.</p>
<p>Platform: all
Provider: all</p>

      <em>(optional)</em>
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
      <p>The minimum distance (measured in meters) a device must move horizontally before an update event is generated.</p>
<p>Platform: all
Provider: DISTANCE_FILTER, RAW</p>

      <em>(optional)</em>
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
      <p>Enable this in order to force a stop() when the application terminated.
E.g. on iOS, double-tap home button, swipe away the app.</p>
<p>Platform: all
Provider: all</p>

      <em>(optional)</em>
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
      <p>Start background service on device boot.</p>
<p>Platform: Android
Provider: all</p>

      <em>(optional)</em>
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
      <p>The minimum time interval between location updates in milliseconds.</p>
<p>Platform: Android
Provider: all</p>

      <em>(optional)</em>
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
      <p>Fastest rate in milliseconds at which your app can handle location updates.</p>
<p>Platform: Android
Provider: ACTIVITY</p>

      <em>(optional)</em>
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
      <p>Rate in milliseconds at which activity recognition occurs.
Larger values will result in fewer activity detections while improving battery life.</p>
<p>Platform: Android
Provider: ACTIVITY</p>

      <em>(optional)</em>
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
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      notificationsEnabled
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Enable/disable local notifications when tracking and syncing locations.</p>
<p>Platform: Android
Provider: all</p>

      <em>(optional)</em>
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
      <p>Allow location sync service to run in foreground state.
Foreground state also requires a notification to be presented to the user.</p>
<p>Platform: Android
Provider: all</p>

      <em>(optional)</em>
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
      <p>Custom notification title in the drawer.</p>
<p>Platform: Android
Provider: all</p>

      <em>(optional)</em>
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
      <p>Custom notification text in the drawer.</p>
<p>Platform: Android
Provider: all</p>

      <em>(optional)</em>
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
      <p>The accent color (hex triplet) to use for notification.
Eg. <code>#4CAF50</code>.</p>
<p>Platform: Android
Provider: all</p>

      <em>(optional)</em>
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
      <p>The filename of a custom notification icon.</p>
<p>Platform: Android
Provider: all</p>

      <em>(optional)</em>
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
      <p>The filename of a custom notification icon.</p>
<p>Platform: Android
Provider: all</p>

      <em>(optional)</em>
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
      <p>Activity type.
Presumably, this affects iOS GPS algorithm.</p>
<p>Possible values:
&quot;AutomotiveNavigation&quot;, &quot;OtherNavigation&quot;, &quot;Fitness&quot;, &quot;Other&quot;</p>
<p>Platform: iOS
Provider: all</p>

      <em>(optional)</em>
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
      <p>Pauses location updates when app is paused.</p>
<p>Platform: iOS
Provider: all</p>

      <em>(optional)</em>
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
      <p>Switch to less accurate significant changes and region monitory when in background.</p>
<p>Platform: iOS
Provider: all</p>

      <em>(optional)</em>
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
      <p>Server url where to send HTTP POST with recorded locations</p>
<p>Platform: all
Provider: all</p>

      <em>(optional)</em>
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
      <p>Server url where to send fail to post locations</p>
<p>Platform: all
Provider: all</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      syncThreshold
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Specifies how many previously failed locations will be sent to server at once.</p>
<p>Platform: all
Provider: all</p>

      <em>(optional)</em>
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
      <p>Optional HTTP headers sent along in HTTP request.</p>
<p>Platform: all
Provider: all</p>

      <em>(optional)</em>
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
      <p>Limit maximum number of locations stored into db.</p>
<p>Platform: all
Provider: all</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      postTemplate
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Customization post template.</p>
<p>Platform: all
Provider: all</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





