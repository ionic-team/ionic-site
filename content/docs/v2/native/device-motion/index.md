---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "device-motion"
title: "Device Motion"
header_sub_title: "Class in module "
doc: "Device Motion"
docType: "class"
---







<h1 class="api-title">
  
  Device Motion
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/devicemotion.ts#L34">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-device-motion</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-device-motion">
    https://github.com/apache/cordova-plugin-device-motion
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: <code>cordova-plugin-device-motion</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-device-motion">Device Motion docs</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { DeviceMotion } from &#39;ionic-native&#39;;


// Get the device current acceleration
DeviceMotion.getCurrentAcceleration().then(
  (acceleration: AccelerationData) =&gt; console.log(acceleration),
  (error: any) =&gt; console.log(error)
);

// Watch device acceleration
var subscription = DeviceMotion.watchAcceleration().subscribe((acceleration: AccelerationData) =&gt; {
  console.log(acceleration);
});

// Stop watch
subscription.unsubscribe();
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="getCurrentAcceleration"></div>
<h3><code>getCurrentAcceleration()</code>
  
</h3>


Get the current acceleration along the x, y, and z axes.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;DeviceMotionAccelerationData&gt;</code> Returns object with x, y, z, and timestamp properties
</div>



<div id="watchAcceleration"></div>
<h3><code>watchAcceleration(options)</code>
  
</h3>




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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Observable&lt;DeviceMotionAccelerationData&gt;</code> Observable returns an observable that you can subscribe to
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Requested period of calls to accelerometerSuccess with acceleration data in Milliseconds. Default: 10000</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

