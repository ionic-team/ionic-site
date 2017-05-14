---
layout: "fluid/docs_base"
version: "3.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "device-orientation"
title: "Device Orientation"
header_sub_title: "Class in module "
doc: "Device Orientation"
docType: "class"
---

<h1 class="api-title">Device Orientation</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/device-orientation/index.ts#L40">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-device-orientation
$ npm install --save @ionic-native/device-orientation
</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-device-orientation">
    https://github.com/apache/cordova-plugin-device-orientation
  </a>
</p>


<p>Requires Cordova plugin: <code>cordova-plugin-device-orientation</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-device-orientation">Device Orientation docs</a>.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>BlackBerry 10</li><li>Browser</li><li>Firefox OS</li><li>iOS</li><li>Tizen</li><li>Ubuntu</li><li>Windows</li><li>Windows Phone</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">// DeviceOrientationCompassHeading is an interface for compass
import { DeviceOrientation, DeviceOrientationCompassHeading } from &#39;@ionic-native/device-orientation&#39;;

constructor(private deviceOrientation: DeviceOrientation) { }

...

// Get the device current compass heading
this.deviceOrientation.getCurrentHeading().then(
  (data: DeviceOrientationCompassHeading) =&gt; console.log(data),
  (error: any) =&gt; console.log(error)
);

// Watch the device compass heading change
var subscription = this.deviceOrientation.watchHeading().subscribe(
  (data: DeviceOrientationCompassHeading) =&gt; console.log(data)
);

// Stop watching heading change
subscription.unsubscribe();
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="getCurrentHeading" href="#getCurrentHeading"></a><code>getCurrentHeading()</code></h3>


Get the current compass heading.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DeviceOrientationCompassHeading&gt;</code> 
</div><h3><a class="anchor" name="watchHeading" href="#watchHeading"></a><code>watchHeading(options)</code></h3>




Get the device current heading at a regular interval

Stop the watch by unsubscribing from the observable
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
      <code>DeviceOrientationCompassOptions</code>
    </td>
    <td>
      <p>Options for compass. Frequency and Filter. Optional</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;DeviceOrientationCompassHeading&gt;</code> Returns an observable that contains the compass heading
</div>





<h2><a class="anchor" name="DeviceOrientationCompassOptions" href="#DeviceOrientationCompassOptions"></a>DeviceOrientationCompassOptions</h2>

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
      frequency
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>How often to retrieve the compass heading in milliseconds. (Number) (Default: 100)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      filter
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The change in degrees required to initiate a watchHeading success callback. When this value is set, frequency is ignored. (Number)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="DeviceOrientationCompassHeading" href="#DeviceOrientationCompassHeading"></a>DeviceOrientationCompassHeading</h2>

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
      magneticHeading
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The heading in degrees from 0-359.99 at a single moment in time. (Number)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      trueHeading
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The heading relative to the geographic North Pole in degrees 0-359.99 at a single moment in time. A negative value indicates that the true heading can&#39;t be determined. (Number)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      headingAccuracy
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The deviation in degrees between the reported heading and the true heading. (Number)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      timestamp
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The time at which this heading was determined. (DOMTimeStamp)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





