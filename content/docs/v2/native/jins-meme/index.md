---
layout: "v2_fluid/docs_base"
version: "3.2.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "jins-meme"
title: "Jins Meme"
header_sub_title: "Class in module "
doc: "Jins Meme"
docType: "class"
---







<h1 class="api-title">
  
  Jins Meme
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/jins-meme/index.ts#L4">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add JinsMemeSDK-Plugin-Cordova
$ npm install --save @ionic-native/jins-meme
</code></pre>
<p>Repo:
  <a href="https://github.com/jins-meme/JinsMemeSDK-Plugin-Cordova.git">
    https://github.com/jins-meme/JinsMemeSDK-Plugin-Cordova.git
  </a>
</p>

<!-- description -->

<p>Implementation of the JINS MEME SDK</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { JinsMeme } from &#39;@ionic-native/jins-meme&#39;;

constructor(private jinsMeme: JinsMeme) { }

...

this.jinsMeme.setAppClientID(appClientId: string, clientSecret: string)
  .then(this.jinsMeme.startScan())
  .catch(console.log(&#39;jinsMeme.setAppClientID authentication error!&#39;));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="setAppClientID"></div>
<h3>
  <code>setAppClientID(setAppClientID,&nbsp;clientSecret)</code>
  

</h3>
Authentication and authorization of App and SDK.
Must call this method at first.

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
      setAppClientID
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      clientSecret
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="startScan"></div>
<h3>
  <code>startScan()</code>
  

</h3>
Starts scanning for JINS MEME.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div><div id="stopScan"></div>
<h3>
  <code>stopScan()</code>
  

</h3>
Stops scanning JINS MEME.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="connect"></div>
<h3>
  <code>connect(target)</code>
  

</h3>
Establishes connection to JINS MEME.
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
      target
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div><div id="setAutoConnect"></div>
<h3>
  <code>setAutoConnect(flag)</code>
  

</h3>
Set auto connection mode.
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
      flag
      
    </td>
    <td>
      
<code>Boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="isConnected"></div>
<h3>
  <code>isConnected()</code>
  

</h3>
Returns whether a connection to JINS MEME has been established.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="disconnect"></div>
<h3>
  <code>disconnect()</code>
  

</h3>
Disconnects from JINS MEME.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="startDataReport"></div>
<h3>
  <code>startDataReport()</code>
  

</h3>
Starts receiving realtime data.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div><div id="stopDataReport"></div>
<h3>
  <code>stopDataReport()</code>
  

</h3>
Stops receiving data.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getSDKVersion"></div>
<h3>
  <code>getSDKVersion()</code>
  

</h3>
Returns SDK version.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getConnectedByOthers"></div>
<h3>
  <code>getConnectedByOthers()</code>
  

</h3>
Returns JINS MEME connected with other apps.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="isCalibrated"></div>
<h3>
  <code>isCalibrated()</code>
  

</h3>
Returns calibration status


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getConnectedDeviceType"></div>
<h3>
  <code>getConnectedDeviceType()</code>
  

</h3>
Returns device type.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getConnectedDeviceSubType"></div>
<h3>
  <code>getConnectedDeviceSubType()</code>
  

</h3>
Returns hardware version.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getFWVersion"></div>
<h3>
  <code>getFWVersion()</code>
  

</h3>
Returns FW Version.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getHWVersion"></div>
<h3>
  <code>getHWVersion()</code>
  

</h3>
Returns HW Version.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="isDataReceiving"></div>
<h3>
  <code>isDataReceiving()</code>
  

</h3>
Returns response about whether data was received or not.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

