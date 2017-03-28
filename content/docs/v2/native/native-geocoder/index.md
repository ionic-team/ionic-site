---
layout: "v2_fluid/docs_base"
version: "3.4.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "native-geocoder"
title: "Native Geocoder"
header_sub_title: "Class in module "
doc: "Native Geocoder"
docType: "class"
---

<h1 class="api-title">Native Geocoder<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/native-geocoder/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/sebastianbaar/cordova-plugin-nativegeocoder/issues">plugin repo</a>.
</p>



<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-nativegeocoder
$ npm install --save @ionic-native/native-geocoder
</code></pre>
<p>Repo:
  <a href="https://github.com/sebastianbaar/cordova-plugin-nativegeocoder">
    https://github.com/sebastianbaar/cordova-plugin-nativegeocoder
  </a>
</p>


<p>Cordova plugin for native forward and reverse geocoding</p>




<h2>Supported platforms</h2>
<ul>
  <li>iOS</li><li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from &#39;@ionic-native/native-geocoder&#39;;

constructor(private nativeGeocoder: NativeGeocoder) { }

...

this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
  .then((result: NativeGeocoderReverseResult) =&gt; console.log(&quot;The address is &quot; + result.street + &quot; in &quot; + result.countryCode))
  .catch((error: any) =&gt; console.log(error));

this.nativeGeocoder.forwardGeocode(&quot;Berlin&quot;)
  .then((coordinates: NativeGeocoderForwardResult) =&gt; console.log(&quot;The coordinates are latitude=&quot; + coordinates.latitude + &quot; and longitude=&quot; + coordinates.longitude))
  .catch((error: any) =&gt; console.log(error));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="reverseGeocode" href="#reverseGeocode"></a><code>reverseGeocode(latitude,&nbsp;longitude)</code></h3>




Reverse geocode a given latitude and longitude to find location address
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
      latitude</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The latitude</p>
</td>
  </tr>
  
  <tr>
    <td>
      longitude</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The longitude</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="forwardGeocode" href="#forwardGeocode"></a><code>forwardGeocode(addressString)</code></h3>




Forward geocode a given address to find coordinates
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
      addressString</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The address to be geocoded</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="NativeGeocoderReverseResult" href="#NativeGeocoderReverseResult"></a>NativeGeocoderReverseResult</h2>

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
      street
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The street.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      houseNumber
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The house number.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      postalCode
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The postal code.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      city
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The city.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      countryName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The country name.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      countryCode
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The country code.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="NativeGeocoderForwardResult" href="#NativeGeocoderForwardResult"></a>NativeGeocoderForwardResult</h2>

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
      latitude
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The latitude.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      longitude
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The longitude.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





