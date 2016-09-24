---
layout: "v2_fluid/docs_base"
version: "2.0.3"
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
  <li>iOS</li>
  
  <li>Android</li>
  
  <li>Windows Phone 8</li>
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
  
</h3>Set location service provider @see https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers 

Possible values:
 ANDROID_DISTANCE_FILTER_PROVIDER: 0, 
 ANDROID_ACTIVITY_PROVIDER: 1 









<div id="Accuracy"></div>
<h3><code>Accuracy()</code>
  
</h3>Desired accuracy in meters. Possible values [0, 10, 100, 1000]. 
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
  
</h3>Used in the switchMode function 

Possible values:
 BACKGROUND: 0
 FOREGROUND: 1 









<div id="configure"></div>
<h3><code>configure(Success,&nbsp;Fail,&nbsp;An)</code>
  
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
      Success
      
      
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
      Fail
      
      
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
      An
      
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      <p>object of type Config</p>

      
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

<!-- related link --><!-- end content block -->


<!-- end body block -->

