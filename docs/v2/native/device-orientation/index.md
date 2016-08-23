---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "device-orientation"
title: "Device Orientation"
header_sub_title: "Class in module "
doc: "Device Orientation"
docType: "class"
---








<h1 class="api-title">

  
  Device Orientation
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/deviceorientation.ts#L40">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-device-orientation</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-device-orientation">
    https://github.com/apache/cordova-plugin-device-orientation
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: <code>cordova-plugin-device-orientation</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-device-orientation">Device Orientation docs</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">// CompassHeading is an interface for compass
import { DeviceOrientation, CompassHeading } from &#39;ionic-native&#39;;


// Get the device current compass heading
DeviceOrientation.getCurrentHeading().then(
  (data: CompassHeading) =&gt; console.log(data),
  (error: any) =&gt; console.log(error)
);

// Watch the device compass heading change
var subscription = DeviceOrientation.watchHeading().subscribe(
  (data: CompassHeading) =&gt; console.log(data)
);

// Stop watching heading change
subscription.unsubscribe();
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="getCurrentHeading"></div>
<h3><code>getCurrentHeading()</code>
  
</h3>

Get the current compass heading.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;CompassHeading&gt;</code> 
</div>



<div id="watchHeading"></div>
<h3><code>watchHeading(options)</code>
  
</h3>



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
      options
      
      
    </td>
    <td>
      
<code>CompassOptions</code>
    </td>
    <td>
      <p>Options for compass. Frequency and Filter. Optional</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;CompassHeading&gt;</code> Returns an observable that contains the compass heading
</div>




<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

