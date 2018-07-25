---
layout: "fluid/docs_base"
version: "4.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "native-geocoder"
title: "Native Geocoder"
header_sub_title: "Class in module "
doc: "Native Geocoder"
docType: "class"
---

<h1 class="api-title">Native Geocoder</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/native-geocoder/index.ts#L1">
  Improve this doc
</a>







<p>Cordova plugin for native forward and reverse geocoding</p>


<p>Repo:
  <a href="https://github.com/sebastianbaar/cordova-plugin-nativegeocoder">
    https://github.com/sebastianbaar/cordova-plugin-nativegeocoder
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-nativegeocoder
$ npm install --save @ionic-native/native-geocoder
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li><li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from &#39;@ionic-native/native-geocoder&#39;;

constructor(private nativeGeocoder: NativeGeocoder) { }

...

let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
};

this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options)
  .then((result: NativeGeocoderReverseResult[]) =&gt; console.log(JSON.stringify(result[0])))
  .catch((error: any) =&gt; console.log(error));

this.nativeGeocoder.forwardGeocode(&#39;Berlin&#39;, options)
  .then((coordinates: NativeGeocoderForwardResult[]) =&gt; console.log(&#39;The coordinates are latitude=&#39; + coordinates[0].latitude + &#39; and longitude=&#39; + coordinates[0].longitude))
  .catch((error: any) =&gt; console.log(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="reverseGeocode" href="#reverseGeocode"></a><code>reverseGeocode(latitude,&nbsp;longitude,&nbsp;options)</code></h3>




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
  
  <tr>
    <td>
      options</td>
    <td>
      <code>NativeGeocoderOptions</code>
    </td>
    <td>
      <p>The options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;NativeGeocoderReverseResult[]&gt;</code> 
</div><h3><a class="anchor" name="forwardGeocode" href="#forwardGeocode"></a><code>forwardGeocode(addressString,&nbsp;options)</code></h3>




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
  
  <tr>
    <td>
      options</td>
    <td>
      <code>NativeGeocoderOptions</code>
    </td>
    <td>
      <p>The options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;NativeGeocoderForwardResult[]&gt;</code> 
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
      countryCode
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The country code.</p>

      
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
      administrativeArea
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The administrativeArea.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      subAdministrativeArea
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The subAdministrativeArea.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      locality
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The locality.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      subLocality
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The subLocality.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      thoroughfare
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The thoroughfare.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      subThoroughfare
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The subThoroughfare.</p>

      
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


<h2><a class="anchor" name="NativeGeocoderOptions" href="#NativeGeocoderOptions"></a>NativeGeocoderOptions</h2>

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
      useLocale
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>The locale to use when returning the address information.
If set to &#39;false&#39; the locale will always be &#39;en_US&#39;.
Default is &#39;true&#39;</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      defaultLocale
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The default locale to use when returning the address information.
e.g.: &#39;fa-IR&#39; or &#39;de_DE&#39;.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      maxResults
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The maximum number of result to return (max is 5).
Default is 1</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





