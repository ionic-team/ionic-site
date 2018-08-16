---
layout: "fluid/docs_base"
version: "4.12.0"
versionHref: "/docs/native"
path: ""
category: native
id: "geofence"
title: "Geofence"
header_sub_title: "Class in module "
doc: "Geofence"
docType: "class"
---

<h1 class="api-title">Geofence</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/geofence/index.ts#L4">
  Improve this doc
</a>







<p>Monitors circular geofences around latitude/longitude coordinates, and sends a notification to the user when the boundary of a geofence is crossed. Notifications can be sent when the user enters and/or exits a geofence.
Geofences persist after device reboot. Geofences will be monitored even when the app is not running.</p>


<p>Repo:
  <a href="https://github.com/cowbell/cordova-plugin-geofence">
    https://github.com/cowbell/cordova-plugin-geofence
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-geofence
$ npm install --save @ionic-native/geofence
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Geofence } from &#39;@ionic-native/geofence&#39;;

...

constructor(private geofence: Geofence) {
  // initialize the plugin
  geofence.initialize().then(
    // resolved promise does not return a value
    () =&gt; console.log(&#39;Geofence Plugin Ready&#39;),
    (err) =&gt; console.log(err)
  )
}

...

private addGeofence() {
  //options describing geofence
  let fence = {
    id: &#39;69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb&#39;, //any unique ID
    latitude:       37.285951, //center of geofence radius
    longitude:      -121.936650,
    radius:         100, //radius to edge of geofence in meters
    transitionType: 3, //see &#39;Transition Types&#39; below
    notification: { //notification settings
        id:             1, //any unique ID
        title:          &#39;You crossed a fence&#39;, //notification title
        text:           &#39;You just arrived to Gliwice city center.&#39;, //notification body
        openAppOnClick: true //open app when notification is tapped
    }
  }

  this.geofence.addOrUpdate(fence).then(
     () =&gt; console.log(&#39;Geofence added&#39;),
     (err) =&gt; console.log(&#39;Geofence failed to add&#39;)
   );
}
</code></pre>
<h3 id="transition-types">Transition Types</h3>
<p>Transition type specifies whether the geofence should trigger when the user enters and/or leaves the geofence.</p>
<h4 id="supported-values">Supported values</h4>
<ul>
<li>1: Enter</li>
<li>2: Leave</li>
<li>3: Both</li>
</ul>
<h3 id="defining-a-geofence">Defining a Geofence</h3>
<p>Geofences are defined by an object that is passed to <code>addOrUpdate()</code>. Object properties are:</p>
<ul>
<li>id: Any unique ID for the geofence. This ID is used to remove and update a geofence</li>
<li>latitude: Latitude coordinate of the center of the geofence radius</li>
<li>longitude: Latitude coordinate of the center of the geofence radius</li>
<li>radius: Radius from the center to the edge of the geofence</li>
<li>transitionType: Type of geofence transition to monitor for. See &#39;Transition Types&#39; above</li>
<li>notification: Object. Options for defining the notification sent when a geofence is crossed<ul>
<li>id: Any unique ID</li>
<li>title: Notification title</li>
<li>text: Notification body</li>
<li>openAppOnClick: Boolean. Whether to open the app when the notification is tapped by the user</li>
</ul>
</li>
</ul>
<h3 id="troubleshooting">Troubleshooting</h3>
<h4 id="i-get-compile-errors-when-i-run-ionic-build-ios-or-ionic-run-ios-">I get compile errors when I run <code>ionic build ios</code> or <code>ionic run ios</code>.</h4>
<p>This could be caused by the Cordova project directory in <code>/platforms/ios</code> not being named correctly.
Try running <code>ionic cordova platform rm &lt;platform&gt;</code> then run <code>ionic cordova platform add &lt;platform&gt;</code> to recreate the
platform directories.</p>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="TransitionType" href="#TransitionType"></a><code>TransitionType</code></h3>




<h3><a class="anchor" name="onTransitionReceived" href="#onTransitionReceived"></a><code>onTransitionReceived()</code></h3>


Subscribe to get notified when a transition is received


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="initialize" href="#initialize"></a><code>initialize()</code></h3>


Initializes the plugin. User will be prompted to allow the app to use location and notifications.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="addOrUpdate" href="#addOrUpdate"></a><code>addOrUpdate()</code></h3>


Adds a new geofence or array of geofences. For geofence object, see above.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>


Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
geofence was created.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="removeAll" href="#removeAll"></a><code>removeAll()</code></h3>


Removes all geofences.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="getWatched" href="#getWatched"></a><code>getWatched()</code></h3>


Returns an array of geofences currently being monitored.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;string&gt;&gt;</code> 
</div><h3><a class="anchor" name="onNotificationClicked" href="#onNotificationClicked"></a><code>onNotificationClicked()</code></h3>

Called when the user clicks a geofence notification. iOS and Android only.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div>





