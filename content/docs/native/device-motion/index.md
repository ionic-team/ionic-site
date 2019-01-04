---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "device-motion"
title: "Device Motion"
header_sub_title: "Class in module "
doc: "Device Motion"
docType: "class"
---

<h1 class="api-title">Device Motion</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/device-motion/index.ts#L35">
  Improve this doc
</a>







<p>Requires Cordova plugin: <code>cordova-plugin-device-motion</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-device-motion">Device Motion docs</a>.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-device-motion">
    https://github.com/apache/cordova-plugin-device-motion
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-device-motion
$ npm install --save @ionic-native/device-motion
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>BlackBerry 10</li><li>Browser</li><li>Firefox OS</li><li>iOS</li><li>Tizen</li><li>Ubuntu</li><li>Windows</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { DeviceMotion, DeviceMotionAccelerationData } from &#39;@ionic-native/device-motion&#39;;

constructor(private deviceMotion: DeviceMotion) { }

...

// Get the device current acceleration
this.deviceMotion.getCurrentAcceleration().then(
  (acceleration: DeviceMotionAccelerationData) =&gt; console.log(acceleration),
  (error: any) =&gt; console.log(error)
);

// Watch device acceleration
var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) =&gt; {
  console.log(acceleration);
});

// Stop watch
subscription.unsubscribe();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getCurrentAcceleration" href="#getCurrentAcceleration"></a><code>getCurrentAcceleration()</code></h3>


Get the current acceleration along the x, y, and z axes.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DeviceMotionAccelerationData&gt;</code> Returns object with x, y, z, and timestamp properties
</div><h3><a class="anchor" name="watchAcceleration" href="#watchAcceleration"></a><code>watchAcceleration(options)</code></h3>




Watch the device acceleration. Clear the watch by unsubscribing from the observable.
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
      <code>AccelerometerOptions</code>
    </td>
    <td>
      <p>list of options for the accelerometer.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;DeviceMotionAccelerationData&gt;</code> Observable returns an observable that you can subscribe to
</div>





<h2><a class="anchor" name="DeviceMotionAccelerationData" href="#DeviceMotionAccelerationData"></a>DeviceMotionAccelerationData</h2>

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
      x
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Amount of acceleration on the x-axis. (in m/s^2)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Amount of acceleration on the y-axis. (in m/s^2)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      z
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Amount of acceleration on the z-axis. (in m/s^2)</p>

      
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
      <p>Creation timestamp in milliseconds.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="DeviceMotionAccelerometerOptions" href="#DeviceMotionAccelerometerOptions"></a>DeviceMotionAccelerometerOptions</h2>

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
      <p>Requested period of calls to accelerometerSuccess with acceleration data in Milliseconds. Default: 10000</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





