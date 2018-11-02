---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "geolocation"
title: "Geolocation"
header_sub_title: "Class in module "
doc: "Geolocation"
docType: "class"
---

<h1 class="api-title">Geolocation</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/geolocation/index.ts#L104">
  Improve this doc
</a>







<p>This plugin provides information about the device&#39;s location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.</p>
<p> This API is based on the W3C Geolocation API Specification, and only executes on devices that don&#39;t already provide an implementation.</p>
<p>For iOS you have to add this configuration to your configuration.xml file</p>
<pre><code class="lang-xml">&lt;edit-config file=&quot;*-Info.plist&quot; mode=&quot;merge&quot; target=&quot;NSLocationWhenInUseUsageDescription&quot;&gt;
   &lt;string&gt;We use your location for full functionality of certain app features.&lt;/string&gt;
&lt;/edit-config&gt;
</code></pre>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-geolocation">
    https://github.com/apache/cordova-plugin-geolocation
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
$ npm install --save @ionic-native/geolocation
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Geolocation } from &#39;@ionic-native/geolocation&#39;;

...

constructor(private geolocation: Geolocation) {}

...

this.geolocation.getCurrentPosition().then((resp) =&gt; {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) =&gt; {
  console.log(&#39;Error getting location&#39;, error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) =&gt; {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getCurrentPosition" href="#getCurrentPosition"></a><code>getCurrentPosition(options)</code></h3>




Get the device's current position.

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
      <code>GeolocationOptions</code>
    </td>
    <td>
      <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions">geolocation options</a>.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Geoposition&gt;</code> Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
</div><h3><a class="anchor" name="watchPosition" href="#watchPosition"></a><code>watchPosition(options)</code></h3>

Watch the current device's position.  Clear the watch by unsubscribing from
Observable changes.

```typescript
const subscription = this.geolocation.watchPosition()
                              .filter((p) => p.coords !== undefined) //Filter Out Errors
                              .subscribe(position => {
  console.log(position.coords.longitude + ' ' + position.coords.latitude);
});

// To stop notifications
subscription.unsubscribe();
```

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
      <code>GeolocationOptions</code>
    </td>
    <td>
      <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions">geolocation options</a>.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;Geoposition&gt;</code> Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
</div>





<h2><a class="anchor" name="Coordinates" href="#Coordinates"></a>Coordinates</h2>

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
      latitude
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>a double representing the position&#39;s latitude in decimal degrees.</p>

      
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
      <p>A double representing the position&#39;s longitude in decimal degrees.</p>

      
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
      <p>A double representing the accuracy of the latitude and longitude properties,
expressed in meters.</p>

      
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
      <p>A double representing the position&#39;s altitude in metres, relative to sea
level. This value can be null if the implementation cannot provide the data.</p>

      
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
      <p>A double representing the accuracy of the altitude expressed in meters.
This value can be null.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      heading
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>A double representing the direction in which the device is traveling. This
value, specified in degrees, indicates how far off from heading true north
the device is. 0 degrees represents true north, and the direction is
determined clockwise (which means that east is 90 degrees and west is 270
degrees). If speed is 0, heading is NaN. If the device is unable to provide
heading information, this value is null.</p>

      
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
      <p>A double representing the velocity of the device in meters per second.
This value can be null.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="Geoposition" href="#Geoposition"></a>Geoposition</h2>

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


<h2><a class="anchor" name="PositionError" href="#PositionError"></a>PositionError</h2>

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
      code
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>A code that indicates the error that occurred</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      message
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A message that can describe the error that occurred</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="GeolocationOptions" href="#GeolocationOptions"></a>GeolocationOptions</h2>

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
      maximumAge
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Is a positive long value indicating the maximum age in milliseconds of a
possible cached position that is acceptable to return. If set to 0, it
means that the device cannot use a cached position and must attempt to
retrieve the real current position. If set to Infinity the device must
return a cached position regardless of its age. Default: 0.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      timeout
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Is a positive long value representing the maximum length of time
(in milliseconds) the device is allowed to take in order to return a
position. The default value is Infinity, meaning that getCurrentPosition()
won&#39;t return until the position is available.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      enableHighAccuracy
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Indicates the application would like to receive the best possible results.
If true and if the device is able to provide a more accurate position, it
will do so. Note that this can result in slower response times or increased
power consumption (with a GPS chip on a mobile device for example). On the
other hand, if false, the device can take the liberty to save resources by
responding more quickly and/or using less power. Default: false.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





