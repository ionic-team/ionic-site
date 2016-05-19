---
layout: "v2_fluid/docs_base"
version: "1.2.1"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/background-geolocation.ts#L153'>
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



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {BackgroundGeolocation} from &#39;ionic-native&#39;;



// When device is ready :
platform.ready().then(() =&gt; {

    // BackgroundGeolocation is highly configurable. See platform specific configuration options
    BackgroundGeolocation.configure(
        (location) =&gt; {
            console.log(&#39;[js] BackgroundGeolocation callback:  &#39; + location.latitude + &#39;,&#39; + location.longitude);

            // IMPORTANT:  You must execute the finish method here to inform the native plugin that you&#39;re finished,
            // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
            // IF YOU DON&#39;T, ios will CRASH YOUR APP for spending too much time in the background.
            BackgroundGeolocation.finish();
        },
        (error) =&gt; {
            console.log(&#39;BackgroundGeolocation error&#39;);
        },
        {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false, // enable this to clear background location settings when the app terminates
        }
    );

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    BackgroundGeolocation.start();
}

// If you wish to turn OFF background-tracking, call the #stop method.
BackgroundGeolocation.stop();
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="configure"></div>
<h3><code>configure()</code>

</h3>



Configure the plugin.
Success callback will be called with one argument - Location object, which tries to mimic w3c Coordinates interface.
See http://dev.w3.org/geo/api/spec-source.html#coordinates_interface
Callback to be executed every time a geolocation is recorded in the background.

Fail callback to be executed every time a geolocation error occurs.

Options a json object of type Config










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











<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

