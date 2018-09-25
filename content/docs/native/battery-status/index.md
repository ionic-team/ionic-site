---
layout: "fluid/docs_base"
version: "4.15.0"
versionHref: "/docs/native"
path: ""
category: native
id: "battery-status"
title: "Battery Status"
header_sub_title: "Class in module "
doc: "Battery Status"
docType: "class"
---

<h1 class="api-title">Battery Status</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/battery-status/index.ts#L14">
  Improve this doc
</a>







<p>Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the <a href="https://github.com/apache/cordova-plugin-battery-status">BatteryStatus plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-battery-status">
    https://github.com/apache/cordova-plugin-battery-status
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-battery-status
$ npm install --save @ionic-native/battery-status
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li><li>Android</li><li>Windows</li><li>Browser</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BatteryStatus } from &#39;@ionic-native/battery-status&#39;;

constructor(private batteryStatus: BatteryStatus) { }

...


// watch change in battery status
const subscription = this.batteryStatus.onChange().subscribe(status =&gt; {
   console.log(status.level, status.isPlugged);
});

// stop watch
subscription.unsubscribe();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="onChange" href="#onChange"></a><code>onChange()</code></h3>




Watch the change in battery level


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;BatteryStatusResponse&gt;</code> Returns an observable that pushes a status object
</div><h3><a class="anchor" name="onLow" href="#onLow"></a><code>onLow()</code></h3>




Watch when the battery level goes low


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;BatteryStatusResponse&gt;</code> Returns an observable that pushes a status object
</div><h3><a class="anchor" name="onCritical" href="#onCritical"></a><code>onCritical()</code></h3>




Watch when the battery level goes to critical


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;BatteryStatusResponse&gt;</code> Returns an observable that pushes a status object
</div>





<h2><a class="anchor" name="BatteryStatusResponse" href="#BatteryStatusResponse"></a>BatteryStatusResponse</h2>

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
      level
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The battery charge percentage</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      isPlugged
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean that indicates whether the device is plugged in</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





