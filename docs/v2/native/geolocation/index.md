---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "geolocation"
title: "Geolocation"
header_sub_title: "Class in module "
doc: "Geolocation"
docType: "class"
---








<h1 class="api-title">

  
  Geolocation
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/geolocation.ts#L91'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-geolocation</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-geolocation">
    https://github.com/apache/cordova-plugin-geolocation
  </a>
</p>

<!-- description -->

<p>This plugin provides information about the device&#39;s location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.</p>
<p> This API is based on the W3C Geolocation API Specification, and only executes on devices that don&#39;t already provide an implementation.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {Geolocation} from &#39;ionic-native&#39;;



Geolocation.getCurrentPosition().then((resp) =&gt; {
 //resp.coords.latitude
 //resp.coords.longitude
})

let watch = Geolocation.watchPosition();
watch.subscribe((data) =&gt; {
 //data.coords.latitude
 //data.coords.longitude
})
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="getCurrentPosition"></div>
<h3><code>getCurrentPosition(options)</code>

</h3>



Get the device's current position.



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
      
<code>GeolocationOptions</code>
    </td>
    <td>
      <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions">geolocation options</a>.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.


</div>



<div id="watchPosition"></div>
<h3><code>watchPosition(options)</code>

</h3>



Watch the current device's position.  Clear the watch by unsubscribing from
Observable changes.

```ts
var subscription = Geolocation.watchPosition().subscribe(position => {
  console.log(position.coords.longitude + ' ' + position.coords.latitude);
});

// To stop notifications
subscription.unsubscribe();
```



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
      
<code>GeolocationOptions</code>
    </td>
    <td>
      <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions">geolocation options</a>.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.


</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

