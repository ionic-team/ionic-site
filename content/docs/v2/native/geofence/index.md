---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "geofence"
title: "Geofence"
header_sub_title: "Class in module "
doc: "Geofence"
docType: "class"
---







<h1 class="api-title">
  
  Geofence
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/geofence.ts#L3">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-geofence</code></pre>
<p>Repo:
  <a href="https://github.com/cowbell/cordova-plugin-geofence/">
    https://github.com/cowbell/cordova-plugin-geofence/
  </a>
</p>

<!-- description -->

<p>Monitors circular geofences around latitude/longitude coordinates, and sends a notification to the user when the boundary of a geofence is crossed. Notifications can be sent when the user enters and/or exits a geofence.
Geofences persist after device reboot. Geofences will be monitored even when the app is not running.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li><li>Windows Phone</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Geofence } from &#39;ionic-native&#39;;
import { Platform } from  &#39;ionic-angular&#39;
...

constructor(private platform: Platform) {
  this.platform.ready().then(() =&gt; {
         // initialize the plugin
      Geofence.initialize().then(
        // resolved promise does not return a value
        () =&gt; console.log(&#39;Geofence Plugin Ready&#39;),
        (err) =&gt; console.log(err)
      )
  })
}

private addGeofence() {
  //options describing geofence
  let fence = {
    id: &quot;69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb&quot;, //any unique ID
    latitude:       37.285951, //center of geofence radius
    longitude:      -121.936650,
    radius:         100, //radius to edge of geofence
    transitionType: 3, //see &#39;Transition Types&#39; below
    notification: { //notification settings
        id:             1, //any unique ID
        title:          &quot;You crossed a fence&quot;, //notification title
        text:           &quot;You just arrived to Gliwice city center.&quot;, //notification body
        openAppOnClick: true //open app when notification is tapped
    }
  }

  Geofence.addOrUpdate(fence).then(
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
Try running <code>ionic platform rm &lt;platform&gt;</code> then run <code>ionic platform add &lt;platform&gt;</code> to recreate the
platform directories.</p>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="TransitionType"></div>
<h3><code>TransitionType()</code>
  
</h3>











<div id="onTrasitionReceived"></div>
<h3><code>onTrasitionReceived()</code>
  
</h3>











<div id="initialize"></div>
<h3><code>initialize()</code>
  
</h3>


Initializes the plugin. User will be prompted to allow the app to use location and notifications.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> 
</div>



<div id="addOrUpdate"></div>
<h3><code>addOrUpdate()</code>
  
</h3>


Adds a new geofence or array of geofences. For geofence object, see above.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> 
</div>



<div id="remove"></div>
<h3><code>remove()</code>
  
</h3>


Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
geofence was created.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> 
</div>



<div id="removeAll"></div>
<h3><code>removeAll()</code>
  
</h3>


Removes all geofences.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> 
</div>



<div id="getWatched"></div>
<h3><code>getWatched()</code>
  
</h3>


Returns an array of geofences currently being monitored.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Array&lt;string&gt;&gt;</code> 
</div>



<div id="onTransitionReceived"></div>
<h3><code>onTransitionReceived()</code>
  
</h3>

Called when a geofence is crossed in the direction specified by `TransitType`.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="onNotificationClicked"></div>
<h3><code>onNotificationClicked()</code>
  
</h3>

Called when the user clicks a geofence notification. iOS and Android only.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

