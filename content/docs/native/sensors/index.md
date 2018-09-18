---
layout: "fluid/docs_base"
version: "4.14.0"
versionHref: "/docs/native"
path: ""
category: native
id: "sensors"
title: "Sensors"
header_sub_title: "Class in module "
doc: "Sensors"
docType: "class"
---

<h1 class="api-title">Sensors</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/sensors/index.ts#L22">
  Improve this doc
</a>







<p>This plugin enables sensors on Android devices</p>


<p>Repo:
  <a href="https://github.com/fabiorogeriosj/cordova-plugin-sensors.git">
    https://github.com/fabiorogeriosj/cordova-plugin-sensors.git
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/fabiorogeriosj/cordova-plugin-sensors.git
$ npm install --save @ionic-native/sensors
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Sensors, TYPE_SENSOR } from &#39;@ionic-native/sensors&#39;;


constructor(private sensors: Sensors) { }

...


this.sensors.enableSensor(TYPE_SENSOR.LIGHT);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="enableSensor" href="#enableSensor"></a><code>enableSensor(TYPE_SENSOR)</code></h3>


This function enables the sensor
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
      TYPE_SENSOR</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Specify the sensor to enable</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="disableSensor" href="#disableSensor"></a><code>disableSensor()</code></h3>


This function disables the sensor


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="getState" href="#getState"></a><code>getState()</code></h3>


This function calls the success callback


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns sensor state
</div>





