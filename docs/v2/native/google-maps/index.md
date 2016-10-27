---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "google-maps"
title: "Google Maps"
header_sub_title: "Class in module "
doc: "Google Maps"
docType: "class"
---







<h1 class="api-title">
  
  Google Maps
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/googlemap.ts#L36">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"</code></pre>
<p>Repo:
  <a href="https://github.com/mapsplugin/cordova-plugin-googlemaps">
    https://github.com/mapsplugin/cordova-plugin-googlemaps
  </a>
</p>

<!-- description -->

<p>This plugin uses the native Google Maps SDK</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { GoogleMap, GoogleMapsEvent } from &#39;ionic-native&#39;;

// create a new map using element ID
let map = new GoogleMap(&#39;elementID&#39;);

// or create a new map by passing HTMLElement
let element: HTMLElement = document.getElementById(&#39;elementID&#39;);

// In Angular 2 or Ionic 2, if we have this element in html: &lt;div #map&gt;&lt;/div&gt;
// then we can use @ViewChild to find the element and pass it to GoogleMaps
@ViewChild(&#39;map&#39;) mapElement;
let map = new GoogleMap(mapElement);

// listen to MAP_READY event
map.one(GoogleMapsEvent.MAP_READY).then(() =&gt; console.log(&#39;Map is ready!&#39;));


// create LatLng object
let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);

// create CameraPosition
let position: CameraPosition = {
  target: ionic,
  zoom: 18,
  tilt: 30
};

// move the map&#39;s camera to position
map.moveCamera(position);

// create new marker
let markerOptions: GoogleMapsMarkerOptions = {
  position: ionic,
  title: &#39;Ionic&#39;
};

map.addMarker(markerOptions)
  .then((marker: GoogleMapsMarker) =&gt; {
    marker.showInfoWindow();
  });
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isAvailable"></div>
<h3><code>isAvailable()</code>
  
</h3>


Checks if a map object has been created and is available.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="on"></div>
<h3>
  <code>on()</code>
  

</h3>
Listen to a map event.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div><div id="one"></div>
<h3>
  <code>one()</code>
  

</h3>
Listen to a map event only once.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setDebuggable"></div>
<h3>
  <code>setDebuggable()</code>
  

</h3>




<div id="setClickable"></div>
<h3>
  <code>setClickable()</code>
  

</h3>




<div id="getCameraPosition"></div>
<h3>
  <code>getCameraPosition()</code>
  

</h3>
Get the position of the camera.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;CameraPosition&gt;</code> 
</div><div id="getMyLocation"></div>
<h3>
  <code>getMyLocation()</code>
  

</h3>
Get the location of the user.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;MyLocation&gt;</code> 
</div><div id="getVisibleRegion"></div>
<h3>
  <code>getVisibleRegion()</code>
  

</h3>
Get the visible region.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;VisibleRegion&gt;</code> 
</div><div id="showDialog"></div>
<h3>
  <code>showDialog()</code>
  

</h3>




<div id="closeDialog"></div>
<h3>
  <code>closeDialog()</code>
  

</h3>




<div id="getLicenseInfo"></div>
<h3>
  <code>getLicenseInfo()</code>
  

</h3>




<div id="setCenter"></div>
<h3>
  <code>setCenter()</code>
  

</h3>




<div id="setZoom"></div>
<h3>
  <code>setZoom()</code>
  

</h3>




<div id="setMapTypeId"></div>
<h3>
  <code>setMapTypeId()</code>
  

</h3>




<div id="setTilt"></div>
<h3>
  <code>setTilt()</code>
  

</h3>




<div id="animateCamera"></div>
<h3>
  <code>animateCamera()</code>
  

</h3>




<div id="moveCamera"></div>
<h3>
  <code>moveCamera()</code>
  

</h3>




<div id="setMyLocationEnabled"></div>
<h3>
  <code>setMyLocationEnabled()</code>
  

</h3>




<div id="setIndoorEnabled"></div>
<h3>
  <code>setIndoorEnabled()</code>
  

</h3>




<div id="setTrafficEnabled"></div>
<h3>
  <code>setTrafficEnabled()</code>
  

</h3>




<div id="setCompassEnabled"></div>
<h3>
  <code>setCompassEnabled()</code>
  

</h3>




<div id="setAllGesturesEnabled"></div>
<h3>
  <code>setAllGesturesEnabled()</code>
  

</h3>




<div id="addMarker"></div>
<h3>
  <code>addMarker()</code>
  

</h3>




<div id="addCircle"></div>
<h3>
  <code>addCircle()</code>
  

</h3>




<div id="addPolygon"></div>
<h3>
  <code>addPolygon()</code>
  

</h3>




<div id="addPolyline"></div>
<h3>
  <code>addPolyline()</code>
  

</h3>




<div id="addTileOverlay"></div>
<h3>
  <code>addTileOverlay()</code>
  

</h3>




<div id="addGroundOverlay"></div>
<h3>
  <code>addGroundOverlay()</code>
  

</h3>




<div id="addKmlOverlay"></div>
<h3>
  <code>addKmlOverlay()</code>
  

</h3>




<div id="setDiv"></div>
<h3>
  <code>setDiv()</code>
  

</h3>




<div id="setVisible"></div>
<h3>
  <code>setVisible()</code>
  

</h3>




<div id="setOptions"></div>
<h3>
  <code>setOptions()</code>
  

</h3>




<div id="setBackgroundColor"></div>
<h3>
  <code>setBackgroundColor()</code>
  

</h3>




<div id="setPadding"></div>
<h3>
  <code>setPadding()</code>
  

</h3>




<div id="clear"></div>
<h3>
  <code>clear()</code>
  

</h3>




<div id="refreshLayout"></div>
<h3>
  <code>refreshLayout()</code>
  

</h3>




<div id="fromLatLngToPoint"></div>
<h3>
  <code>fromLatLngToPoint()</code>
  

</h3>




<div id="fromPointToLatLng"></div>
<h3>
  <code>fromPointToLatLng()</code>
  

</h3>




<div id="toDataURL"></div>
<h3>
  <code>toDataURL()</code>
  

</h3>




<div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>




<div id="panBy"></div>
<h3>
  <code>panBy()</code>
  

</h3>








<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

