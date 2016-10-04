---
layout: "v2_fluid/docs_base"
version: "2.1.1"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/googlemaps.ts#L41">
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
<h2><a class="anchor" name="related-classes" href="#related-classes"></a>Related Classes</h2>



<h3><a class="anchor" name="GoogleMapsMarker" href="#GoogleMapsMarker"></a>GoogleMapsMarker</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="addEventListener"></div>
<h3>
  <code>addEventListener()</code>
  

</h3>




<div id="isVisible"></div>
<h3>
  <code>isVisible()</code>
  

</h3>




<div id="setVisible"></div>
<h3>
  <code>setVisible()</code>
  

</h3>




<div id="getHashCode"></div>
<h3>
  <code>getHashCode()</code>
  

</h3>




<div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>




<div id="setOpacity"></div>
<h3>
  <code>setOpacity()</code>
  

</h3>




<div id="getOpacity"></div>
<h3>
  <code>getOpacity()</code>
  

</h3>




<div id="setZIndex"></div>
<h3>
  <code>setZIndex()</code>
  

</h3>




<div id="setIconAnchor"></div>
<h3>
  <code>setIconAnchor()</code>
  

</h3>




<div id="setInfoWindowAnchor"></div>
<h3>
  <code>setInfoWindowAnchor()</code>
  

</h3>




<div id="setDraggable"></div>
<h3>
  <code>setDraggable()</code>
  

</h3>




<div id="isDraggable"></div>
<h3>
  <code>isDraggable()</code>
  

</h3>




<div id="setFlat"></div>
<h3>
  <code>setFlat()</code>
  

</h3>




<div id="setIcon"></div>
<h3>
  <code>setIcon()</code>
  

</h3>




<div id="setTitle"></div>
<h3>
  <code>setTitle()</code>
  

</h3>




<div id="getTitle"></div>
<h3>
  <code>getTitle()</code>
  

</h3>




<div id="setSnippet"></div>
<h3>
  <code>setSnippet()</code>
  

</h3>




<div id="getSnippet"></div>
<h3>
  <code>getSnippet()</code>
  

</h3>




<div id="setRotation"></div>
<h3>
  <code>setRotation()</code>
  

</h3>




<div id="getRotation"></div>
<h3>
  <code>getRotation()</code>
  

</h3>




<div id="showInfoWindow"></div>
<h3>
  <code>showInfoWindow()</code>
  

</h3>




<div id="hideInfoWindow"></div>
<h3>
  <code>hideInfoWindow()</code>
  

</h3>




<div id="setPosition"></div>
<h3>
  <code>setPosition()</code>
  

</h3>




<div id="getPosition"></div>
<h3>
  <code>getPosition()</code>
  

</h3>




<div id="getMap"></div>
<h3>
  <code>getMap()</code>
  

</h3>




<div id="setAnimation"></div>
<h3>
  <code>setAnimation()</code>
  

</h3>








<h3><a class="anchor" name="GoogleMapsCircle" href="#GoogleMapsCircle"></a>GoogleMapsCircle</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="addEventListener"></div>
<h3>
  <code>addEventListener()</code>
  

</h3>




<div id="getCenter"></div>
<h3>
  <code>getCenter()</code>
  

</h3>




<div id="getRadius"></div>
<h3>
  <code>getRadius()</code>
  

</h3>




<div id="getStrokeColor"></div>
<h3>
  <code>getStrokeColor()</code>
  

</h3>




<div id="getVisible"></div>
<h3>
  <code>getVisible()</code>
  

</h3>




<div id="getZIndex"></div>
<h3>
  <code>getZIndex()</code>
  

</h3>




<div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>




<div id="setCenter"></div>
<h3>
  <code>setCenter()</code>
  

</h3>




<div id="setFillColor"></div>
<h3>
  <code>setFillColor()</code>
  

</h3>




<div id="setStrokeColor"></div>
<h3>
  <code>setStrokeColor()</code>
  

</h3>




<div id="setStrokeWidth"></div>
<h3>
  <code>setStrokeWidth()</code>
  

</h3>




<div id="setVisible"></div>
<h3>
  <code>setVisible()</code>
  

</h3>




<div id="setZIndex"></div>
<h3>
  <code>setZIndex()</code>
  

</h3>




<div id="setRadius"></div>
<h3>
  <code>setRadius()</code>
  

</h3>




<div id="getMap"></div>
<h3>
  <code>getMap()</code>
  

</h3>








<h3><a class="anchor" name="GoogleMapsPolyline" href="#GoogleMapsPolyline"></a>GoogleMapsPolyline</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="addEventListener"></div>
<h3>
  <code>addEventListener()</code>
  

</h3>




<div id="getPoints"></div>
<h3>
  <code>getPoints()</code>
  

</h3>




<div id="getCOlor"></div>
<h3>
  <code>getCOlor()</code>
  

</h3>




<div id="getWidth"></div>
<h3>
  <code>getWidth()</code>
  

</h3>




<div id="getGeodesic"></div>
<h3>
  <code>getGeodesic()</code>
  

</h3>




<div id="getZIndex"></div>
<h3>
  <code>getZIndex()</code>
  

</h3>




<div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>




<div id="setPoints"></div>
<h3>
  <code>setPoints()</code>
  

</h3>




<div id="setColor"></div>
<h3>
  <code>setColor()</code>
  

</h3>




<div id="setWidth"></div>
<h3>
  <code>setWidth()</code>
  

</h3>




<div id="setVisible"></div>
<h3>
  <code>setVisible()</code>
  

</h3>




<div id="setZIndex"></div>
<h3>
  <code>setZIndex()</code>
  

</h3>




<div id="setGeoDesic"></div>
<h3>
  <code>setGeoDesic()</code>
  

</h3>




<div id="getMap"></div>
<h3>
  <code>getMap()</code>
  

</h3>








<h3><a class="anchor" name="GoogleMapsPolygon" href="#GoogleMapsPolygon"></a>GoogleMapsPolygon</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="addEventListener"></div>
<h3>
  <code>addEventListener()</code>
  

</h3>




<div id="getPoints"></div>
<h3>
  <code>getPoints()</code>
  

</h3>




<div id="getStrokeColor"></div>
<h3>
  <code>getStrokeColor()</code>
  

</h3>




<div id="getFillColor"></div>
<h3>
  <code>getFillColor()</code>
  

</h3>




<div id="getStrokeWidth"></div>
<h3>
  <code>getStrokeWidth()</code>
  

</h3>




<div id="getGeodesic"></div>
<h3>
  <code>getGeodesic()</code>
  

</h3>




<div id="getVisible"></div>
<h3>
  <code>getVisible()</code>
  

</h3>




<div id="getZIndex"></div>
<h3>
  <code>getZIndex()</code>
  

</h3>




<div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>




<div id="setPoints"></div>
<h3>
  <code>setPoints()</code>
  

</h3>




<div id="setStrokeColor"></div>
<h3>
  <code>setStrokeColor()</code>
  

</h3>




<div id="setFillColor"></div>
<h3>
  <code>setFillColor()</code>
  

</h3>




<div id="setStrokeWidth"></div>
<h3>
  <code>setStrokeWidth()</code>
  

</h3>




<div id="setVisible"></div>
<h3>
  <code>setVisible()</code>
  

</h3>




<div id="setZIndex"></div>
<h3>
  <code>setZIndex()</code>
  

</h3>




<div id="setGeodesic"></div>
<h3>
  <code>setGeodesic()</code>
  

</h3>








<h3><a class="anchor" name="GoogleMapsTileOverlay" href="#GoogleMapsTileOverlay"></a>GoogleMapsTileOverlay</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="getVisible"></div>
<h3>
  <code>getVisible()</code>
  

</h3>




<div id="setVisible"></div>
<h3>
  <code>setVisible()</code>
  

</h3>




<div id="getFadeIn"></div>
<h3>
  <code>getFadeIn()</code>
  

</h3>




<div id="setFadeIn"></div>
<h3>
  <code>setFadeIn()</code>
  

</h3>




<div id="getZIndex"></div>
<h3>
  <code>getZIndex()</code>
  

</h3>




<div id="setZIndex"></div>
<h3>
  <code>setZIndex()</code>
  

</h3>




<div id="getOpacity"></div>
<h3>
  <code>getOpacity()</code>
  

</h3>




<div id="setOpacity"></div>
<h3>
  <code>setOpacity()</code>
  

</h3>




<div id="clearTileCache"></div>
<h3>
  <code>clearTileCache()</code>
  

</h3>




<div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>








<h3><a class="anchor" name="GoogleMapsGroundOverlay" href="#GoogleMapsGroundOverlay"></a>GoogleMapsGroundOverlay</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="setBearing"></div>
<h3>
  <code>setBearing()</code>
  

</h3>




<div id="getBearing"></div>
<h3>
  <code>getBearing()</code>
  

</h3>




<div id="setOpacity"></div>
<h3>
  <code>setOpacity()</code>
  

</h3>




<div id="getOpacity"></div>
<h3>
  <code>getOpacity()</code>
  

</h3>




<div id="setVisible"></div>
<h3>
  <code>setVisible()</code>
  

</h3>




<div id="getVisible"></div>
<h3>
  <code>getVisible()</code>
  

</h3>




<div id="setImage"></div>
<h3>
  <code>setImage()</code>
  

</h3>




<div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>








<h3><a class="anchor" name="GoogleMapsKmlOverlay" href="#GoogleMapsKmlOverlay"></a>GoogleMapsKmlOverlay</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>




<div id="getOverlays"></div>
<h3>
  <code>getOverlays()</code>
  

</h3>








<h3><a class="anchor" name="GoogleMapsLatLngBounds" href="#GoogleMapsLatLngBounds"></a>GoogleMapsLatLngBounds</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="southwestOrArrayOfLatLng"></div>
<h3>
  <code>southwestOrArrayOfLatLng()</code>
  

</h3>




<div id="northeast"></div>
<h3>
  <code>northeast()</code>
  

</h3>




<div id="toString"></div>
<h3>
  <code>toString()</code>
  

</h3>




<div id="toUrlValue"></div>
<h3>
  <code>toUrlValue()</code>
  

</h3>




<div id="extend"></div>
<h3>
  <code>extend()</code>
  

</h3>




<div id="contains"></div>
<h3>
  <code>contains()</code>
  

</h3>




<div id="getCenter"></div>
<h3>
  <code>getCenter()</code>
  

</h3>








<h3><a class="anchor" name="GoogleMapsLatLng" href="#GoogleMapsLatLng"></a>GoogleMapsLatLng</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="lat"></div>
<h3>
  <code>lat()</code>
  

</h3>




<div id="lng"></div>
<h3>
  <code>lng()</code>
  

</h3>




<div id="equals"></div>
<h3>
  <code>equals()</code>
  

</h3>




<div id="toString"></div>
<h3>
  <code>toString()</code>
  

</h3>




<div id="toUrlValue"></div>
<h3>
  <code>toUrlValue()</code>
  

</h3>








<h3><a class="anchor" name="Geocoder" href="#Geocoder"></a>Geocoder</h3>
<h2>Static Members</h2>

<div id="geocode"></div>
<h3><code>geocode(request)</code>
  
</h3>

Converts position to address and vice versa


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
      request
      
      
    </td>
    <td>
      
<code>GeocoderRequest</code>
    </td>
    <td>
      <p>Request object with either an address or a position</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;GeocoderResult[]&gt;</code> 
</div>




<!-- methods on the class -->


<!-- end other classes -->

<!-- interfaces -->

<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>


<h3><a class="anchor" name="AnimateCameraOptions" href="#AnimateCameraOptions"></a>AnimateCameraOptions</h3>


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      GoogleMapsLatLng | Array&lt;GoogleMapsMarker&gt; | GoogleMapsLatLngBounds
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      tilt
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      zoom
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      bearing
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      duration
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="CameraPosition" href="#CameraPosition"></a>CameraPosition</h3>


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      GoogleMapsLatLng | GoogleMapsLatLngBounds | GoogleMapsLatLng[]
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      zoom
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      tilt
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      bearing
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="MyLocation" href="#MyLocation"></a>MyLocation</h3>


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
      latLng
      <div><em>(optional)</em></div>
    </td>
    <td>
      GoogleMapsLatLng
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      speed
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      time
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      bearing
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="MyLocationOptions" href="#MyLocationOptions"></a>MyLocationOptions</h3>


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
      enableHighAccuracy
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="VisibleRegion" href="#VisibleRegion"></a>VisibleRegion</h3>


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
      northeast
      <div><em>(optional)</em></div>
    </td>
    <td>
      any
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      southwest
      <div><em>(optional)</em></div>
    </td>
    <td>
      any
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="GoogleMApsMarkerOptions" href="#GoogleMApsMarkerOptions"></a>GoogleMApsMarkerOptions</h3>




<h3><a class="anchor" name="GoogleMapsMarkerIcon" href="#GoogleMapsMarkerIcon"></a>GoogleMapsMarkerIcon</h3>


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
      url
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      size
      <div><em>(optional)</em></div>
    </td>
    <td>
      {
    width?: number;
    height?: number;
  }
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="GoogleMapsCircleOptions" href="#GoogleMapsCircleOptions"></a>GoogleMapsCircleOptions</h3>


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
      center
      <div><em>(optional)</em></div>
    </td>
    <td>
      GoogleMapsLatLng
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      radius
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      strokeColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      strokeWidth
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      fillColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      visible
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      zIndex
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="GoogleMapsPolylineOptions" href="#GoogleMapsPolylineOptions"></a>GoogleMapsPolylineOptions</h3>


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
      points
      <div><em>(optional)</em></div>
    </td>
    <td>
      Array&lt;GoogleMapsLatLng&gt;
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      visible
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      googledesic
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      color
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      width
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      zIndex
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="GoogleMapsPolygonOptions" href="#GoogleMapsPolygonOptions"></a>GoogleMapsPolygonOptions</h3>


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
      points
      <div><em>(optional)</em></div>
    </td>
    <td>
      Array&lt;GoogleMapsLatLng&gt;
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      geodesic
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      strokeColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      strokeWidth
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      fillColor
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      visible
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      zIndex
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      addHole
      <div><em>(optional)</em></div>
    </td>
    <td>
      Array&lt;GoogleMapsLatLng&gt;
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="GoogleMapsTileOverlayOptions" href="#GoogleMapsTileOverlayOptions"></a>GoogleMapsTileOverlayOptions</h3>


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
      tileUrlFormat
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      visible
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      zIndex
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      tileSize
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      opacity
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="GoogleMapsGroundOverlayOptions" href="#GoogleMapsGroundOverlayOptions"></a>GoogleMapsGroundOverlayOptions</h3>


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
      url
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      bounds
      <div><em>(optional)</em></div>
    </td>
    <td>
      Array&lt;GoogleMapsLatLng&gt;
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      visible
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      opacity
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      bearing
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      zIndex
      <div><em>(optional)</em></div>
    </td>
    <td>
      number
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="GoogleMapsKmlOverlayOptions" href="#GoogleMapsKmlOverlayOptions"></a>GoogleMapsKmlOverlayOptions</h3>


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
      url
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      preserveViewport
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      animation
      <div><em>(optional)</em></div>
    </td>
    <td>
      boolean
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="GeocoderRequest" href="#GeocoderRequest"></a>GeocoderRequest</h3>


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
      address
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      bounds
      <div><em>(optional)</em></div>
    </td>
    <td>
      GoogleMapsLatLng[]
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      position
      <div><em>(optional)</em></div>
    </td>
    <td>
      { lat: number; lng: number }
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>




<h3><a class="anchor" name="GeocoderResult" href="#GeocoderResult"></a>GeocoderResult</h3>


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
      adminArea
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      country
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      countryCode
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      extra
      <div><em>(optional)</em></div>
    </td>
    <td>
      {
    featureName?: string;
    lines?: Array&lt;string&gt;;
    permises?: string;
    phone?: string;
    url?: string
  }
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      locale
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      locality
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      position
      <div><em>(optional)</em></div>
    </td>
    <td>
      { lat: number; lng: number }
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      postalCode
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      subAdminArea
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      subLocality
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      subThoroughfare
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      thoroughfare
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

