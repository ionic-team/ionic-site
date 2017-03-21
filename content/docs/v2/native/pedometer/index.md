---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "pedometer"
title: "Pedometer"
header_sub_title: "Class in module "
doc: "Pedometer"
docType: "class"
---







<h1 class="api-title">
  
  Pedometer
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/pedometer/index.ts#L14">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-pedometer
$ npm install --save @ionic-native/pedometer
</code></pre>
<p>Repo:
  <a href="https://github.com/leecrossley/cordova-plugin-pedometer">
    https://github.com/leecrossley/cordova-plugin-pedometer
  </a>
</p>

<!-- description -->

<p>Fetch pedestrian-related pedometer data,
such as step counts and other information about the distance travelled.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Pedometer } from &#39;ionic-native&#39;;

Pedometer.isDistanceAvailable()
  .then((available: boolean) =&gt; console.log(available))
  .catch((error: any) =&gt; console.log(error));

Pedometer.startPedometerUpdates()
   .subscribe((data: IPedometerData) =&gt; {
     console.log(data);
   });
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="isStepCountingAvailable"></div>
<h3>
  <code>isStepCountingAvailable()</code>
  

</h3>
Checks if step counting is available. Only works on iOS.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise that resolves when feature is supported (true) or not supported (false)
</div><div id="isDistanceAvailable"></div>
<h3>
  <code>isDistanceAvailable()</code>
  

</h3>
Distance estimation indicates the ability to use step information to supply the approximate distance travelled by the user.
This capability is not supported on all devices, even with iOS 8.
Only works on iOS.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise that resolves when feature is supported (true) or not supported (false)
</div><div id="isFloorCountingAvailable"></div>
<h3>
  <code>isFloorCountingAvailable()</code>
  

</h3>
Floor counting indicates the ability to count the number of floors the user walks up or down using stairs.
This capability is not supported on all devices, even with iOS 8.
Only works on iOS.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise that resolves when feature is supported (true) or not supported (false)
</div><div id="startPedometerUpdates"></div>
<h3>
  <code>startPedometerUpdates()</code>
  

</h3>
Starts the delivery of recent pedestrian-related data to your Cordova app.

When the app is suspended, the delivery of updates stops temporarily.
Upon returning to foreground or background execution, the pedometer object begins updates again.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;IPedometerData&gt;</code> Returns a Observable that recieves repeatly data from pedometer in background.
</div><div id="stopPedometerUpdates"></div>
<h3>
  <code>stopPedometerUpdates()</code>
  

</h3>
Stops the delivery of recent pedestrian data updates to your Cordova app.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Returns a promise that resolves when pedometer watching was stopped
</div><div id="queryData"></div>
<h3>
  <code>queryData(options)</code>
  

</h3>
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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;IPedometerData&gt;</code> Returns a promise that resolves when pedometer data found
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

