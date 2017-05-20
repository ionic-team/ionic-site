---
layout: "fluid/docs_base"
version: "3.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "gyroscope"
title: "Gyroscope"
header_sub_title: "Class in module "
doc: "Gyroscope"
docType: "class"
---

<h1 class="api-title">Gyroscope</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/gyroscope/index.ts#L39">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-gyroscope
$ npm install --save @ionic-native/gyroscope
</code></pre>
<p>Repo:
  <a href="https://github.com/NeoLSN/cordova-plugin-gyroscope">
    https://github.com/NeoLSN/cordova-plugin-gyroscope
  </a>
</p>


<p>Read Gyroscope sensor data</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from &#39;@ionic-native/gyroscope&#39;;


constructor(private gyroscope: Gyroscope) { }

...


let options: GyroscopeOptions = {
   frequency: 1000
};

this.gyroscope.getCurrent(options)
  .then((orientation: GyroscopeOrientation) =&gt; {
     console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
   })
  .catch()


this.gyroscope.watch()
   .subscribe((orientation: GyroscopeOrientation) =&gt; {
      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
   });
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="watch" href="#watch"></a><code>watch(options)</code></h3>

Watching for gyroscope sensor changes
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
      <code>GyroscopeOptions</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;GyroscopeOrientation&gt;</code> Returns an Observable that resolves GyroscopeOrientation
</div><h3><a class="anchor" name="getCurrent" href="#getCurrent"></a><code>getCurrent(options)</code></h3>




Get current data from gyroscope sensor
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
      <code>GyroscopeOptions</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;GyroscopeOrientation&gt;</code> Returns a promise that resolves GyroscopeOrientation
</div>





<h2><a class="anchor" name="GyroscopeOrientation" href="#GyroscopeOrientation"></a>GyroscopeOrientation</h2>

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
      <p>Represent x-axis</p>

      
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
      <p>Represent y-axis</p>

      
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
      <p>Represent z-axis</p>

      
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
      <p>Represent timestamp of sensor read. Default is 10000ms</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="GyroscopeOptions" href="#GyroscopeOptions"></a>GyroscopeOptions</h2>

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
      <p>Represent how often (in milliseconds) sensor should be read.  Default is 10000 ms</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





