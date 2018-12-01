---
layout: "fluid/docs_base"
version: "4.18.0"
versionHref: "/docs/native"
path: ""
category: native
id: "pedometer"
title: "Pedometer"
header_sub_title: "Class in module "
doc: "Pedometer"
docType: "class"
---

<h1 class="api-title">Pedometer</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/pedometer/index.ts#L14">
  Improve this doc
</a>







<p>Fetch pedestrian-related pedometer data,
such as step counts and other information about the distance travelled.</p>


<p>Repo:
  <a href="https://github.com/leecrossley/cordova-plugin-pedometer">
    https://github.com/leecrossley/cordova-plugin-pedometer
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-pedometer
$ npm install --save @ionic-native/pedometer
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Pedometer } from &#39;@ionic-native/pedometer&#39;;

Pedometer.isDistanceAvailable()
  .then((available: boolean) =&gt; console.log(available))
  .catch((error: any) =&gt; console.log(error));

Pedometer.startPedometerUpdates()
   .subscribe((data: IPedometerData) =&gt; {
     console.log(data);
   });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isStepCountingAvailable" href="#isStepCountingAvailable"></a><code>isStepCountingAvailable()</code></h3>


Checks if step counting is available. Only works on iOS.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves when feature is supported (true) or not supported (false)
</div><h3><a class="anchor" name="isDistanceAvailable" href="#isDistanceAvailable"></a><code>isDistanceAvailable()</code></h3>


Distance estimation indicates the ability to use step information to supply the approximate distance travelled by the user.
This capability is not supported on all devices, even with iOS 8.
Only works on iOS.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves when feature is supported (true) or not supported (false)
</div><h3><a class="anchor" name="isFloorCountingAvailable" href="#isFloorCountingAvailable"></a><code>isFloorCountingAvailable()</code></h3>


Floor counting indicates the ability to count the number of floors the user walks up or down using stairs.
This capability is not supported on all devices, even with iOS 8.
Only works on iOS.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves when feature is supported (true) or not supported (false)
</div><h3><a class="anchor" name="startPedometerUpdates" href="#startPedometerUpdates"></a><code>startPedometerUpdates()</code></h3>




Starts the delivery of recent pedestrian-related data to your Cordova app.

When the app is suspended, the delivery of updates stops temporarily.
Upon returning to foreground or background execution, the pedometer object begins updates again.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;IPedometerData&gt;</code> Returns a Observable that recieves repeatly data from pedometer in background.
</div><h3><a class="anchor" name="stopPedometerUpdates" href="#stopPedometerUpdates"></a><code>stopPedometerUpdates()</code></h3>


Stops the delivery of recent pedestrian data updates to your Cordova app.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves when pedometer watching was stopped
</div><h3><a class="anchor" name="queryData" href="#queryData"></a><code>queryData(options)</code></h3>




Retrieves the data between the specified start and end dates.
The startDate and endDate options are required and can be constructed in any valid JavaScript way
(e.g. new Date(2015, 4, 1, 15, 20, 00) is also valid, as is milliseconds).
Only works on iOS.
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
      <code>any</code>
    </td>
    <td>
      <p>start date and en date where you want to get pedometer data</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;IPedometerData&gt;</code> Returns a promise that resolves when pedometer data found
</div>





