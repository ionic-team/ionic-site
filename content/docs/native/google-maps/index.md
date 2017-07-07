---
layout: "fluid/docs_base"
version: "3.14.0"
versionHref: "/docs/native"
path: ""
category: native
id: "google-maps"
title: "Google Maps"
header_sub_title: "Class in module "
doc: "Google Maps"
docType: "class"
---

<h1 class="api-title">Google Maps</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/google-maps/index.ts#L275">
  Improve this doc
</a>






<p>This plugin uses the native Google Maps SDK</p>


<p>Repo:
  <a href="https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps">
    https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
$ npm install --save @ionic-native/google-maps
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from &#39;@ionic-native/google-maps&#39;;

export class MapPage {
 constructor(private googleMaps: GoogleMaps) {}

// Load map only after view is initialized
ngAfterViewInit() {
 this.loadMap();
}

loadMap() {
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won&#39;t be visible
 // &lt;ion-content&gt;
 //  &lt;div #map id=&quot;map&quot; style=&quot;height:100%;&quot;&gt;&lt;/div&gt;
 // &lt;/ion-content&gt;

 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById(&#39;map&#39;);

 let map: GoogleMap = this.googleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(
   () =&gt; {
     console.log(&#39;Map is ready!&#39;);
     // Now you can add elements to the map like the marker
   }
 );

 // create LatLng object
 let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

 // create CameraPosition
 let position: CameraPosition = {
   target: ionic,
   zoom: 18,
   tilt: 30
 };

 // move the map&#39;s camera to position
 map.moveCamera(position);

 // create new marker
 let markerOptions: MarkerOptions = {
   position: ionic,
   title: &#39;Ionic&#39;
 };

 const marker: Marker = map.addMarker(markerOptions)
   .then((marker: Marker) =&gt; {
      marker.showInfoWindow();
    });
 }

}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


Checks if a map object has been created and is available.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="create" href="#create"></a><code>create(element,&nbsp;options)</code></h3>

Creates a new GoogleMap instance
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
      element</td>
    <td>
      <code>string</code>|<code>HTMLElement</code>
    </td>
    <td>
      <p>Element ID or reference to attach the map to</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
</div><h3><a class="anchor" name="environment" href="#environment"></a><code>environment()</code></h3>

Convenience method that returns an instance of Environment class


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Object</code> 
</div>

<h2><a class="anchor" name="GoogleMap" href="#GoogleMap"></a>GoogleMap</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="setDiv" href="#setDiv"></a><code>setDiv(domNode)</code></h3>




Changes the map div
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
      domNode</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getDiv" href="#getDiv"></a><code>getDiv()</code></h3>




Returns the map HTML element


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>HTMLElement</code> 
</div><h3><a class="anchor" name="setMapTypeId" href="#setMapTypeId"></a><code>setMapTypeId(mapTypeId)</code></h3>




Changes the map type id
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
      mapTypeId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="animateCamera" href="#animateCamera"></a><code>animateCamera()</code></h3>


Moves the camera with animation


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="animateCameraZoomIn" href="#animateCameraZoomIn"></a><code>animateCameraZoomIn()</code></h3>


Zooming in the camera with animation



<h3><a class="anchor" name="animateCameraZoomOut" href="#animateCameraZoomOut"></a><code>animateCameraZoomOut()</code></h3>


Zooming out the camera with animation



<h3><a class="anchor" name="moveCamera" href="#moveCamera"></a><code>moveCamera()</code></h3>


Moves the camera without animation


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="moveCameraZoomIn" href="#moveCameraZoomIn"></a><code>moveCameraZoomIn()</code></h3>


Zooming in the camera without animation



<h3><a class="anchor" name="moveCameraZoomOut" href="#moveCameraZoomOut"></a><code>moveCameraZoomOut()</code></h3>


Zooming out the camera without animation



<h3><a class="anchor" name="getCameraPosition" href="#getCameraPosition"></a><code>getCameraPosition()</code></h3>


Get the position of the camera.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;CameraPosition&gt;</code> 
</div><h3><a class="anchor" name="getCameraTarget" href="#getCameraTarget"></a><code>getCameraTarget()</code></h3>


Get the current camera target position


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;CameraPosition&gt;</code> 
</div><h3><a class="anchor" name="getCameraZoom" href="#getCameraZoom"></a><code>getCameraZoom()</code></h3>




Get the current camera zoom level


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="getCameraBearing" href="#getCameraBearing"></a><code>getCameraBearing()</code></h3>




Get the current camera bearing


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="getCameraTilt" href="#getCameraTilt"></a><code>getCameraTilt()</code></h3>




Get the current camera tilt (view angle)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setCameraTarget" href="#setCameraTarget"></a><code>setCameraTarget(latLng)</code></h3>




Set the center position of the camera view
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
      latLng</td>
    <td>
      <code>LatLng</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setCameraZoom" href="#setCameraZoom"></a><code>setCameraZoom(zoomLevel)</code></h3>




Set zoom level of the camera
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
      zoomLevel</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Zoom level</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setCameraTilt" href="#setCameraTilt"></a><code>setCameraTilt(tiltLevel)</code></h3>




Set the camera view angle
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
      tiltLevel</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Tilt level</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setCameraBearing" href="#setCameraBearing"></a><code>setCameraBearing(bearing)</code></h3>




Set camera bearing
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
      bearing</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="panBy" href="#panBy"></a><code>panBy(x,&nbsp;y)</code></h3>




Change the center of the map by the given distance in pixels
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
      x</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      y</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getVisibleRegion" href="#getVisibleRegion"></a><code>getVisibleRegion()</code></h3>


Get the current visible region (sw and ne)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;VisibleRegion&gt;</code> 
</div><h3><a class="anchor" name="getMyLocation" href="#getMyLocation"></a><code>getMyLocation()</code></h3>


Get the current device location


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;MyLocation&gt;</code> 
</div><h3><a class="anchor" name="setClickable" href="#setClickable"></a><code>setClickable(isClickable)</code></h3>




Set false to ignore all clicks on the map
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
      isClickable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>




Destroy a map completely



<h3><a class="anchor" name="clear" href="#clear"></a><code>clear()</code></h3>




Remove all overlays, such as marker



<h3><a class="anchor" name="fromLatLngToPoint" href="#fromLatLngToPoint"></a><code>fromLatLngToPoint()</code></h3>


Convert the unit from LatLng to the pixels from the left/top of the map div


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="fromPointToLatLng" href="#fromPointToLatLng"></a><code>fromPointToLatLng()</code></h3>


Convert the unit from the pixels from the left/top to the LatLng


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;LatLng&gt;</code> 
</div><h3><a class="anchor" name="setMyLocationEnabled" href="#setMyLocationEnabled"></a><code>setMyLocationEnabled(enabled)</code></h3>




Set true if you want to show the MyLocation button
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
      enabled</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getFocusedBuilding" href="#getFocusedBuilding"></a><code>getFocusedBuilding()</code></h3>


Get the currently focused building


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setIndoorEnabled" href="#setIndoorEnabled"></a><code>setIndoorEnabled(enabled)</code></h3>




Set true if you want to show the indoor map
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
      enabled</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setTrafficEnabled" href="#setTrafficEnabled"></a><code>setTrafficEnabled(enabled)</code></h3>




Set true if you want to show the traffic layer
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
      enabled</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setCompassEnabled" href="#setCompassEnabled"></a><code>setCompassEnabled(enabled)</code></h3>




Set true if you want to show the compass button
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
      enabled</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setAllGesturesEnabled" href="#setAllGesturesEnabled"></a><code>setAllGesturesEnabled(enabled)</code></h3>




Sets the preference for whether all gestures should be enabled or disabled
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
      enabled</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setVisible" href="#setVisible"></a><code>setVisible(visible)</code></h3>




Set visiblity of the map
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
      visible</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setPadding" href="#setPadding"></a><code>setPadding(top,&nbsp;right,&nbsp;left,&nbsp;bottom)</code></h3>




Adjust the map padding
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
      top</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      right</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      left</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      bottom</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setOptions" href="#setOptions"></a><code>setOptions(options)</code></h3>




Set options
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
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="addMarker" href="#addMarker"></a><code>addMarker()</code></h3>


Adds a marker


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Marker | any&gt;</code> 
</div><h3><a class="anchor" name="addCircle" href="#addCircle"></a><code>addCircle()</code></h3>


Adds a circle


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Circle | any&gt;</code> 
</div><h3><a class="anchor" name="addPolygon" href="#addPolygon"></a><code>addPolygon()</code></h3>


Adds a polygon


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Polygon | any&gt;</code> 
</div><h3><a class="anchor" name="addPolyline" href="#addPolyline"></a><code>addPolyline()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Polyline | any&gt;</code> 
</div><h3><a class="anchor" name="addTileOverlay" href="#addTileOverlay"></a><code>addTileOverlay()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;TileOverlay | any&gt;</code> 
</div><h3><a class="anchor" name="addGroundOverlay" href="#addGroundOverlay"></a><code>addGroundOverlay()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;GroundOverlay | any&gt;</code> 
</div><h3><a class="anchor" name="refreshLayout" href="#refreshLayout"></a><code>refreshLayout()</code></h3>




Refreshes layout.
You can execute it, but you don't need to do that. The plugin does this automatically.



<h3><a class="anchor" name="toDataURL" href="#toDataURL"></a><code>toDataURL()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h2><a class="anchor" name="Circle" href="#Circle"></a>Circle</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="setCenter" href="#setCenter"></a><code>setCenter(latLng)</code></h3>




Change the center position.
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
      latLng</td>
    <td>
      <code>LatLng</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getCenter" href="#getCenter"></a><code>getCenter()</code></h3>




Return the current center position


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>LatLng</code> 
</div><h3><a class="anchor" name="getRadius" href="#getRadius"></a><code>getRadius()</code></h3>




Return the current circle radius.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setRadius" href="#setRadius"></a><code>setRadius(radius)</code></h3>




Change the circle radius.
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
      radius</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setFillColor" href="#setFillColor"></a><code>setFillColor(color)</code></h3>




Change the filling color (inner color).
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
      color</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getFillColor" href="#getFillColor"></a><code>getFillColor()</code></h3>




Return the current circle filling color (inner color).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="setStrokeWidth" href="#setStrokeWidth"></a><code>setStrokeWidth(strokeWidth)</code></h3>




Change the stroke width.
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
      strokeWidth</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getStrokeWidth" href="#getStrokeWidth"></a><code>getStrokeWidth()</code></h3>




Return the current circle stroke width (unit: pixel).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setStrokeColor" href="#setStrokeColor"></a><code>setStrokeColor(strokeColor)</code></h3>




Change the stroke color (outter color).
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
      strokeColor</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getStrokeColor" href="#getStrokeColor"></a><code>getStrokeColor()</code></h3>




Return the current circle stroke color (outer color).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="setClickable" href="#setClickable"></a><code>setClickable(clickable)</code></h3>




Change clickablity of the circle.
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
      clickable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getClickable" href="#getClickable"></a><code>getClickable()</code></h3>




Return true if the circle is clickable.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="setZIndex" href="#setZIndex"></a><code>setZIndex(zIndex)</code></h3>




Change the circle zIndex order.
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
      zIndex</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getZIndex" href="#getZIndex"></a><code>getZIndex()</code></h3>




Return the current circle zIndex.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>




Remove the circle.



<h3><a class="anchor" name="getBounds" href="#getBounds"></a><code>getBounds()</code></h3>




Return the latLngBounds (rectangle) that contains the circle.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>LatLngBounds</code> 
</div><h3><a class="anchor" name="setVisible" href="#setVisible"></a><code>setVisible(visible)</code></h3>




Set circle visibility
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
      visible</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getVisible" href="#getVisible"></a><code>getVisible()</code></h3>




Returns a boolean that indicates whether the circle is visible


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h2><a class="anchor" name="Environment" href="#Environment"></a>Environment</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getLicenseInfo" href="#getLicenseInfo"></a><code>getLicenseInfo()</code></h3>


Get the open source software license information for Google Maps Android API v2 and Google Maps SDK for iOS.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setBackgroundColor" href="#setBackgroundColor"></a><code>setBackgroundColor(color)</code></h3>




Specifies the background color of the app.
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
      color</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h2><a class="anchor" name="Marker" href="#Marker"></a>Marker</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="setPosition" href="#setPosition"></a><code>setPosition(latLng)</code></h3>




Set the marker position.
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
      latLng</td>
    <td>
      <code>LatLng</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getPosition" href="#getPosition"></a><code>getPosition()</code></h3>


Return the marker position.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;LatLng&gt;</code> 
</div><h3><a class="anchor" name="showInfoWindow" href="#showInfoWindow"></a><code>showInfoWindow()</code></h3>




Show the infoWindow of the marker.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="hideInfoWindow" href="#hideInfoWindow"></a><code>hideInfoWindow()</code></h3>




Hide the infoWindow of the marker.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setAnimation" href="#setAnimation"></a><code>setAnimation(animation)</code></h3>




Specify the animation either `DROP` or `BOUNCE`
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
      animation</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setDisableAutoPan" href="#setDisableAutoPan"></a><code>setDisableAutoPan(disableAutoPan)</code></h3>




Set true if you **do not want** to move the map when you click on the marker.
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
      disableAutoPan</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setVisible" href="#setVisible"></a><code>setVisible(visible)</code></h3>


Set false if you want to hide the marker.
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
      visible</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="isVisible" href="#isVisible"></a><code>isVisible()</code></h3>




Return true if the marker is visible



<h3><a class="anchor" name="setTitle" href="#setTitle"></a><code>setTitle(title)</code></h3>




Change title of the infoWindow.
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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getTitle" href="#getTitle"></a><code>getTitle()</code></h3>




Return the title strings.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="setSnippet" href="#setSnippet"></a><code>setSnippet(snippet)</code></h3>




Change snippet of the infoWindow.
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
      snippet</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getSnippet" href="#getSnippet"></a><code>getSnippet()</code></h3>




Return the snippet strings.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="setOpacity" href="#setOpacity"></a><code>setOpacity(alpha)</code></h3>




Change the marker opacity.
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
      alpha</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Opacity</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getOpacity" href="#getOpacity"></a><code>getOpacity()</code></h3>




Return the marker opacity.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> Opacity
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>




Remove the marker completely.



<h3><a class="anchor" name="setIconAnchor" href="#setIconAnchor"></a><code>setIconAnchor(x,&nbsp;y)</code></h3>




Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
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
      x</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      y</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setInfoWindowAnchor" href="#setInfoWindowAnchor"></a><code>setInfoWindowAnchor(x,&nbsp;y)</code></h3>




Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
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
      x</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      y</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="isInfoWindowShown" href="#isInfoWindowShown"></a><code>isInfoWindowShown()</code></h3>




Retrurn true if the infoWindow is shown on the marker


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="getHashCode" href="#getHashCode"></a><code>getHashCode()</code></h3>




Return the marker hash code.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> Marker hash code
</div><h3><a class="anchor" name="setZIndex" href="#setZIndex"></a><code>setZIndex()</code></h3>




iOS only, Plugin Version >= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You're able to run this on Android, but it will have no effect)



<h3><a class="anchor" name="getZIndex" href="#getZIndex"></a><code>getZIndex()</code></h3>




Get z-index


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setDraggable" href="#setDraggable"></a><code>setDraggable(draggable)</code></h3>




Set true if you allows all users to drag the marker.
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
      draggable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="isDraggable" href="#isDraggable"></a><code>isDraggable()</code></h3>




Return true if the marker drag is enabled.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="setFlat" href="#setFlat"></a><code>setFlat(flat)</code></h3>




Set true if you want to be flat marker.
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
      flat</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setIcon" href="#setIcon"></a><code>setIcon(icon)</code></h3>




Change icon url and/or size
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
      icon</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setRotation" href="#setRotation"></a><code>setRotation(rotation)</code></h3>




Set the marker rotation angle.
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
      rotation</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getRotation" href="#getRotation"></a><code>getRotation()</code></h3>




Return the marker rotation angle.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="getMap" href="#getMap"></a><code>getMap()</code></h3>




Return the map instance.
Note that this method returns the original Google Map object, and not the Ionic Native wrapper.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Object</code> 
</div><h2><a class="anchor" name="LatLng" href="#LatLng"></a>LatLng</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="lat" href="#lat"></a><code>lat()</code></h3>




<h3><a class="anchor" name="lng" href="#lng"></a><code>lng()</code></h3>




<h3><a class="anchor" name="equals" href="#equals"></a><code>equals()</code></h3>




<h3><a class="anchor" name="toString" href="#toString"></a><code>toString()</code></h3>




<h3><a class="anchor" name="toUrlValue" href="#toUrlValue"></a><code>toUrlValue()</code></h3>




<h2><a class="anchor" name="Geocoder" href="#Geocoder"></a>Geocoder</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="geocode" href="#geocode"></a><code>geocode(request)</code></h3>


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
      request</td>
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
  <b>Returns:</b> <code>Promise&lt;GeocoderResult | BaseArrayClass&lt;GeocoderResult&gt;&gt;</code> 
</div>



<h2><a class="anchor" name="AnimateCameraOptions" href="#AnimateCameraOptions"></a>AnimateCameraOptions</h2>

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
      <code>LatLng | Array&lt;Marker&gt; | LatLngBounds</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      tilt
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      zoom
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bearing
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      duration
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="MarkerOptions" href="#MarkerOptions"></a>MarkerOptions</h2>

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
      icon
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The icon image url or properties. Also you can specify HTML Color values. Alternatively you can specify the image as Base64</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The content of the infoWindow.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      snippet
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The snippet of the infoWindow.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      position
    </td>
    <td>
      <code>LatLng</code>
    </td>
    <td>
      <p>The position of the marker.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      infoWindowAnchor
    </td>
    <td>
      <code>number[]</code>
    </td>
    <td>
      <p>Specify the anchor of the InfoWindow</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      draggable
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true if you want to enable to drag the marker. (Default: false) Important! Drag starts after long pressed on the marker.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      flat
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true if you want to use a flat marker. (Default: false)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      rotation
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set rotation angle. (Default: 0)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      visible
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set false if you want to hide. (Default: true)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      styles
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Specify the options for title.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      animation
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Which animation to play when marker is added to a map.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      zIndex
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>iOS only, Plugin Version &gt;= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You&#39;re able to run this on Android, but it will have no effect)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      disableAutoPan
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to disable auto panning when the marker is clicked.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="MyLocation" href="#MyLocation"></a>MyLocation</h2>

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
    </td>
    <td>
      <code>LatLng</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      elapsedRealtimeNanos
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      time
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      accuracy
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bearing
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      altitude
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      speed
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      provider
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hashCode
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="MyLocationOptions" href="#MyLocationOptions"></a>MyLocationOptions</h2>

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
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="VisibleRegion" href="#VisibleRegion"></a>VisibleRegion</h2>

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
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      southwest
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





