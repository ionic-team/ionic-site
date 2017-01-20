---
layout: "v2_fluid/docs_base"
version: "2.2.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "nativegeocoder"
title: "NativeGeocoder"
header_sub_title: "Class in module "
doc: "NativeGeocoder"
docType: "class"
---







<h1 class="api-title">
  
  NativeGeocoder
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/native-geocoder.ts#L0">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-nativegeocoder</code></pre>
<p>Repo:
  <a href="https://github.com/sebastianbaar/cordova-plugin-nativegeocoder">
    https://github.com/sebastianbaar/cordova-plugin-nativegeocoder
  </a>
</p>

<!-- description -->

<p>Cordova plugin for native forward and reverse geocoding</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { NativeGeocoder } from &#39;ionic-native&#39;;

NativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
  .then((result: ReverseResult) =&gt; console.log(&quot;The address is &quot; + result.address + &quot; in &quot; + result.countryCode))
  .catch((error: any) =&gt; console.log(error));

NativeGeocoder.forwardGeocode(&quot;Berlin&quot;)
  .then((coordinates: ForwardResult) =&gt; console.log(&quot;The coordinates are latitude=&quot; + coordinates.latitude + &quot; and longitude=&quot; + coordinates.longitude))
  .catch((error: any) =&gt; console.log(error));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="reverseGeocode"></div>
<h3><code>reverseGeocode(latitude,&nbsp;longitude)</code>
  
</h3>


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
      latitude
      
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>The latitude</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      longitude
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="forwardGeocode"></div>
<h3><code>forwardGeocode(addressString)</code>
  
</h3>


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
      addressString
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

