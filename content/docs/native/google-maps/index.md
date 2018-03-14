---
layout: "fluid/docs_base"
version: "4.5.2"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/google-maps/index.ts#L886">
  Improve this doc
</a>







<p>This plugin uses the native Google Maps SDK
Note: As of Ionic native 4.0, this using the 2.0 version of the google maps plugin. Please make sure your plugin is updated</p>


<p>Repo:
  <a href="https://github.com/mapsplugin/cordova-plugin-googlemaps">
    https://github.com/mapsplugin/cordova-plugin-googlemaps
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
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
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from &#39;@ionic-native/google-maps&#39;;
import { Component } from &quot;@angular/core/&quot;;

@Component({
  selector: &#39;page-home&#39;,
  templateUrl: &#39;home.html&#39;
})
export class HomePage {
  map: GoogleMap;
  constructor() { }

  ionViewDidLoad() {
   this.loadMap();
  }

 loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create(&#39;map_canvas&#39;, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() =&gt; {
        console.log(&#39;Map is ready!&#39;);

        // Now you can use all methods safely.
        this.map.addMarker({
            title: &#39;Ionic&#39;,
            icon: &#39;blue&#39;,
            animation: &#39;DROP&#39;,
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          })
          .then(marker =&gt; {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() =&gt; {
                alert(&#39;clicked&#39;);
              });
          });

      });
  }
}
</code></pre>




<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create(element,&nbsp;options)</code></h3>

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
      <code>GoogleMapOptions</code>
    </td>
    <td>
      <p>[options] Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
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
      <code>HTMLElement</code>|<code>string</code>
    </td>
    <td>
      <p>[options] If you want to display the map in an html element, you need to specify an element or id. If omit this argument, the map is detached from webview.</p>
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


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="animateCameraZoomOut" href="#animateCameraZoomOut"></a><code>animateCameraZoomOut()</code></h3>


Zooming out the camera with animation


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="moveCamera" href="#moveCamera"></a><code>moveCamera()</code></h3>


Moves the camera without animation


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="moveCameraZoomIn" href="#moveCameraZoomIn"></a><code>moveCameraZoomIn()</code></h3>


Zooming in the camera without animation


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="moveCameraZoomOut" href="#moveCameraZoomOut"></a><code>moveCameraZoomOut()</code></h3>


Zooming out the camera without animation


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getCameraPosition" href="#getCameraPosition"></a><code>getCameraPosition()</code></h3>




Get the position of the camera.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>CameraPosition</code> 
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
      <code>ILatLng</code>|<code>Array.&lt;ILatLng&gt;</code>
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




Get the current visible region (southWest and northEast)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>VisibleRegion</code> 
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


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="clear" href="#clear"></a><code>clear()</code></h3>


Remove all overlays, such as marker


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="fromLatLngToPoint" href="#fromLatLngToPoint"></a><code>fromLatLngToPoint()</code></h3>


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




Set true if you want to show the MyLocation control (blue dot)
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

<h3><a class="anchor" name="setMyLocationButtonEnabled" href="#setMyLocationButtonEnabled"></a><code>setMyLocationButtonEnabled(enabled)</code></h3>




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




Set visibility of the map
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




Adjust the map padding (same as CSS padding rule)
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

<h3><a class="anchor" name="addMarker" href="#addMarker"></a><code>addMarker(options)</code></h3>


Adds a marker
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
      <code>MarkerOptions</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Marker | any&gt;</code> 
</div><h3><a class="anchor" name="addMarkerCluster" href="#addMarkerCluster"></a><code>addMarkerCluster(options)</code></h3>


Adds a marker cluster
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
      <code>MarkerClusterOptions</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;MarkerCluster | any&gt;</code> 
</div><h3><a class="anchor" name="addCircle" href="#addCircle"></a><code>addCircle(options)</code></h3>


Adds a circle
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
      <code>CircleOptions</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Circle | any&gt;</code> 
</div><h3><a class="anchor" name="addPolygon" href="#addPolygon"></a><code>addPolygon(options)</code></h3>


Adds a polygon
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
      <code>PolygonOptions</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Polygon | any&gt;</code> 
</div><h3><a class="anchor" name="addPolyline" href="#addPolyline"></a><code>addPolyline(options)</code></h3>


Adds a polyline
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
      <code>PolylineOptions</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Polyline | any&gt;</code> 
</div><h3><a class="anchor" name="addTileOverlay" href="#addTileOverlay"></a><code>addTileOverlay(options)</code></h3>


Adds a tile overlay
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
      <code>TileOverlayOptions</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;TileOverlay | any&gt;</code> 
</div><h3><a class="anchor" name="addGroundOverlay" href="#addGroundOverlay"></a><code>addGroundOverlay(options)</code></h3>


Adds a ground overlay
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
      <code>GroundOverlayOptions</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;GroundOverlay | any&gt;</code> 
</div><h3><a class="anchor" name="addKmlOverlay" href="#addKmlOverlay"></a><code>addKmlOverlay(options)</code></h3>


Adds a kml overlay
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
      <code>KmlOverlayOptions</code>
    </td>
    <td>
      <p>options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;KmlOverlay | any&gt;</code> 
</div><h3><a class="anchor" name="toDataURL" href="#toDataURL"></a><code>toDataURL(options)</code></h3>


Returns the base64 encoded screen capture of the map.
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
      <code>ToDataUrlOptions</code>
    </td>
    <td>
      <p>[options] options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h2><a class="anchor" name="Circle" href="#Circle"></a>Circle</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getId" href="#getId"></a><code>getId()</code></h3>




Return the ID of instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="getMap" href="#getMap"></a><code>getMap()</code></h3>

Return the map instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
</div><h3><a class="anchor" name="setCenter" href="#setCenter"></a><code>setCenter(latLng)</code></h3>




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
      <code>ILatLng</code>
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
  <b>Returns:</b> <code>ILatLng</code> 
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
</div><h2><a class="anchor" name="Encoding" href="#Encoding"></a>Encoding</h2>
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<h3><a class="anchor" name="decodePath" href="#decodePath"></a><code>decodePath(encoded,&nbsp;precision?)</code></h3>

Decodes an encoded path string into a sequence of LatLngs.
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
      encoded</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>an encoded path string</p>
</td>
  </tr>
  
  <tr>
    <td>
      precision?</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>default: 5</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>ILatLng[]</code> 
</div>
<h3><a class="anchor" name="encodePath" href="#encodePath"></a><code>encodePath(path)</code></h3>

Encodes a sequence of LatLngs into an encoded path string.
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
      path</td>
    <td>
      <code>Array.&lt;ILatLng&gt;</code>|<code>BaseArrayClass.&lt;ILatLng&gt;</code>
    </td>
    <td>
      <p>a sequence of LatLngs</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div>


<h2><a class="anchor" name="Environment" href="#Environment"></a>Environment</h2>
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<h3><a class="anchor" name="getLicenseInfo" href="#getLicenseInfo"></a><code>getLicenseInfo()</code></h3>

Get the open source software license information for Google Maps SDK for iOS.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>
<h3><a class="anchor" name="setBackgroundColor" href="#setBackgroundColor"></a><code>setBackgroundColor(color)</code></h3>

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




<h2><a class="anchor" name="Geocoder" href="#Geocoder"></a>Geocoder</h2>
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
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
  <b>Returns:</b> <code>Promise&lt;GeocoderResult[] | BaseArrayClass&lt;GeocoderResult&gt;&gt;</code> 
</div>


<h2><a class="anchor" name="GroundOverlay" href="#GroundOverlay"></a>GroundOverlay</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getId" href="#getId"></a><code>getId()</code></h3>




Return the ID of instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="getMap" href="#getMap"></a><code>getMap()</code></h3>

Return the map instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
</div><h3><a class="anchor" name="setBounds" href="#setBounds"></a><code>setBounds(bounds)</code></h3>




Change the bounds of the GroundOverlay
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
      bounds</td>
    <td>
      <code>ILatLng[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setBearing" href="#setBearing"></a><code>setBearing(bearing)</code></h3>




Change the bearing of the ground overlay
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
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getBearing" href="#getBearing"></a><code>getBearing()</code></h3>




Return the current bearing value



<h3><a class="anchor" name="setImage" href="#setImage"></a><code>setImage(image)</code></h3>




Change the image of the ground overlay
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
      image</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of image</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setOpacity" href="#setOpacity"></a><code>setOpacity(opacity)</code></h3>




Change the opacity of the ground overlay from 0.0 to 1.0
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
      opacity</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getOpacity" href="#getOpacity"></a><code>getOpacity()</code></h3>




Return the current opacity


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setClickable" href="#setClickable"></a><code>setClickable(clickable)</code></h3>




Change clickablity of the ground overlay
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




Return true if the ground overlay is clickable


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="setVisible" href="#setVisible"></a><code>setVisible(visible)</code></h3>




Change visibility of the ground overlay
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




Return true if the ground overlay is visible


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="setZIndex" href="#setZIndex"></a><code>setZIndex(index)</code></h3>




Change the ground overlay zIndex order
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
      index</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getZIndex" href="#getZIndex"></a><code>getZIndex()</code></h3>




Return the current ground overlay zIndex


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>


Remove the ground overlay



<h2><a class="anchor" name="HtmlInfoWindow" href="#HtmlInfoWindow"></a>HtmlInfoWindow</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="setBackgroundColor" href="#setBackgroundColor"></a><code>setBackgroundColor(color)</code></h3>


Change the backgroundColor
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

<h3><a class="anchor" name="setContent" href="#setContent"></a><code>setContent(content,&nbsp;cssOptions?)</code></h3>


Set your HTML contents.
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
      content</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>String containing text or HTML element</p>
</td>
  </tr>
  
  <tr>
    <td>
      cssOptions?</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>CSS styles for the container element of HTMLInfoWindow</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="open" href="#open"></a><code>open(marker)</code></h3>


Open the htmlInfoWindow
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
      marker</td>
    <td>
      <code>Marker</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>


Close the htmlInfoWindow



<h2><a class="anchor" name="Geocoder" href="#Geocoder"></a>Geocoder</h2>
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
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
  <b>Returns:</b> <code>Promise&lt;GeocoderResult[] | BaseArrayClass&lt;GeocoderResult&gt;&gt;</code> 
</div>


<h2><a class="anchor" name="LatLng" href="#LatLng"></a>LatLng</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="lat" href="#lat"></a><code>lat()</code></h3>




<h3><a class="anchor" name="lng" href="#lng"></a><code>lng()</code></h3>




<h3><a class="anchor" name="equals" href="#equals"></a><code>equals()</code></h3>




<h3><a class="anchor" name="toString" href="#toString"></a><code>toString()</code></h3>




<h3><a class="anchor" name="toUrlValue" href="#toUrlValue"></a><code>toUrlValue()</code></h3>




<h2><a class="anchor" name="LatLngBounds" href="#LatLngBounds"></a>LatLngBounds</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="northeast" href="#northeast"></a><code>northeast()</code></h3>





<h3><a class="anchor" name="southwest" href="#southwest"></a><code>southwest()</code></h3>





<h3><a class="anchor" name="type" href="#type"></a><code>type()</code></h3>





<h3><a class="anchor" name="toString" href="#toString"></a><code>toString()</code></h3>




Converts to string


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="toUrlValue" href="#toUrlValue"></a><code>toUrlValue(precision)</code></h3>




Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
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
      precision</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="extend" href="#extend"></a><code>extend(LatLng)</code></h3>




Extends this bounds to contain the given point.
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
      LatLng</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="contains" href="#contains"></a><code>contains(LatLng)</code></h3>




Returns true if the given lat/lng is in this bounds.
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
      LatLng</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getCenter" href="#getCenter"></a><code>getCenter()</code></h3>




Computes the center of this LatLngBounds


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>LatLng</code> 
</div><h2><a class="anchor" name="Marker" href="#Marker"></a>Marker</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getId" href="#getId"></a><code>getId()</code></h3>




Return the ID of instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="getMap" href="#getMap"></a><code>getMap()</code></h3>

Return the map instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
</div><h3><a class="anchor" name="setPosition" href="#setPosition"></a><code>setPosition(latLng)</code></h3>




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
      <code>ILatLng</code>
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
  <b>Returns:</b> <code>ILatLng</code> 
</div><h3><a class="anchor" name="showInfoWindow" href="#showInfoWindow"></a><code>showInfoWindow()</code></h3>




Show the normal infoWindow of the marker.



<h3><a class="anchor" name="hideInfoWindow" href="#hideInfoWindow"></a><code>hideInfoWindow()</code></h3>




Hide the normal infoWindow of the marker.



<h3><a class="anchor" name="setAnimation" href="#setAnimation"></a><code>setAnimation(animation)</code></h3>




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




Change title of the normal infoWindow.
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




Change snippet of the normal infoWindow.
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




Change the marker opacity from 0.0 to 1.0.
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


Remove the marker.



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
      <p>Distance from left of the icon image in pixels.</p>
</td>
  </tr>
  
  <tr>
    <td>
      y</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Distance from top of the icon image in pixels.</p>
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
      <p>Distance from left of the icon image in pixels.</p>
</td>
  </tr>
  
  <tr>
    <td>
      y</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Distance from top of the icon image in pixels.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="isInfoWindowShown" href="#isInfoWindowShown"></a><code>isInfoWindowShown()</code></h3>




Return true if the infoWindow is shown on the marker


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="getHashCode" href="#getHashCode"></a><code>getHashCode()</code></h3>




Return the marker hash code.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> Marker hash code
</div><h3><a class="anchor" name="setZIndex" href="#setZIndex"></a><code>setZIndex(y)</code></h3>




Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
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
      y</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>z-index</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getZIndex" href="#getZIndex"></a><code>getZIndex()</code></h3>




Get z-index


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setDraggable" href="#setDraggable"></a><code>setDraggable(draggable)</code></h3>




Set true if you allow all users to drag the marker.
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
</div><h2><a class="anchor" name="MarkerCluster" href="#MarkerCluster"></a>MarkerCluster</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getId" href="#getId"></a><code>getId()</code></h3>




Return the ID of instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="addMarker" href="#addMarker"></a><code>addMarker(marker,&nbsp;skipRedraw?)</code></h3>




Add one marker location
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
      marker</td>
    <td>
      <code>MarkerOptions</code>
    </td>
    <td>
      <p>one location</p>
</td>
  </tr>
  
  <tr>
    <td>
      skipRedraw?</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>marker cluster does not redraw the marker cluster if true.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="addMarkers" href="#addMarkers"></a><code>addMarkers(markers)</code></h3>




Add marker locations
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
      markers</td>
    <td>
      <code>MarkerOptions[]</code>
    </td>
    <td>
      <p>multiple locations</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>


Remove the marker cluster



<h3><a class="anchor" name="getMap" href="#getMap"></a><code>getMap()</code></h3>

Return the map instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
</div><h2><a class="anchor" name="Polygon" href="#Polygon"></a>Polygon</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getId" href="#getId"></a><code>getId()</code></h3>




Return the ID of instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="getMap" href="#getMap"></a><code>getMap()</code></h3>

Return the map instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
</div><h3><a class="anchor" name="setPoints" href="#setPoints"></a><code>setPoints(points)</code></h3>




Change the polygon points.
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
      points</td>
    <td>
      <code>ILatLng[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getPoints" href="#getPoints"></a><code>getPoints()</code></h3>


Return an instance of the BaseArrayClass.
You can modify the points.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>BaseArrayClass&lt;ILatLng&gt;</code> 
</div><h3><a class="anchor" name="setHoles" href="#setHoles"></a><code>setHoles(holes)</code></h3>




Change the polygon holes.
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
      holes</td>
    <td>
      <code>ILatLng[][]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getHoles" href="#getHoles"></a><code>getHoles()</code></h3>


Return an instance of the BaseArrayClass.
You can modify the holes.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>BaseArrayClass&lt;ILatLng[]&gt;</code> 
</div><h3><a class="anchor" name="setFillColor" href="#setFillColor"></a><code>setFillColor(fillColor)</code></h3>




Change the filling color (inner color)
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
      fillColor</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getFillColor" href="#getFillColor"></a><code>getFillColor()</code></h3>




Return the current polygon filling color (inner color).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="setStrokeColor" href="#setStrokeColor"></a><code>setStrokeColor(strokeColor)</code></h3>




Change the stroke color (outer color)
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




Return the current polygon stroke color (outer color)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="setClickable" href="#setClickable"></a><code>setClickable(clickable)</code></h3>




Change clickablity of the polygon
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




Return true if the polygon is clickable



<h3><a class="anchor" name="setVisible" href="#setVisible"></a><code>setVisible(visible)</code></h3>




Change visibility of the polygon
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




Return true if the polygon is visible


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="setZIndex" href="#setZIndex"></a><code>setZIndex(zIndex)</code></h3>




Change the polygon zIndex order.
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




Return the current polygon zIndex


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>


Remove the polygon.



<h3><a class="anchor" name="setStrokeWidth" href="#setStrokeWidth"></a><code>setStrokeWidth()</code></h3>




Change the polygon stroke width



<h3><a class="anchor" name="getStrokeWidth" href="#getStrokeWidth"></a><code>getStrokeWidth()</code></h3>




Return the polygon stroke width



<h3><a class="anchor" name="setGeodesic" href="#setGeodesic"></a><code>setGeodesic(geodesic)</code></h3>




When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
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
      geodesic</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getGeodesic" href="#getGeodesic"></a><code>getGeodesic()</code></h3>




Return true if the polygon is geodesic.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h2><a class="anchor" name="Polyline" href="#Polyline"></a>Polyline</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getId" href="#getId"></a><code>getId()</code></h3>




Return the ID of instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="getMap" href="#getMap"></a><code>getMap()</code></h3>

Return the map instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
</div><h3><a class="anchor" name="setPoints" href="#setPoints"></a><code>setPoints(points)</code></h3>




Change the polyline points.
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
      points</td>
    <td>
      <code>ILatLng[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getPoints" href="#getPoints"></a><code>getPoints()</code></h3>


Return an instance of the BaseArrayClass
You can modify the points.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>BaseArrayClass&lt;ILatLng&gt;</code> 
</div><h3><a class="anchor" name="setGeoDesic" href="#setGeoDesic"></a><code>setGeoDesic(geoDesic)</code></h3>




When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
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
      geoDesic</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getGeodesic" href="#getGeodesic"></a><code>getGeodesic()</code></h3>




Return true if the polyline is geodesic



<h3><a class="anchor" name="setVisible" href="#setVisible"></a><code>setVisible(visible)</code></h3>




Change visibility of the polyline
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




Return true if the polyline is visible


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="setClickable" href="#setClickable"></a><code>setClickable(clickable)</code></h3>




Change clickablity of the polyline
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




Return true if the polyline is clickable


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="setStrokeColor" href="#setStrokeColor"></a><code>setStrokeColor(strokeColor)</code></h3>




Change the polyline color
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




Return the current polyline color


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="setStrokeWidth" href="#setStrokeWidth"></a><code>setStrokeWidth(strokeWidth)</code></h3>




Change the polyline stroke width
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




Return the current stroke width (unit: pixel).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setZIndex" href="#setZIndex"></a><code>setZIndex(index)</code></h3>




Change the polyline zIndex order.
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
      index</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getZIndex" href="#getZIndex"></a><code>getZIndex()</code></h3>




Return the current polyline zIndex


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>


Remove the polyline



<h2><a class="anchor" name="Spherical" href="#Spherical"></a>Spherical</h2>
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<h3><a class="anchor" name="computeDistanceBetween" href="#computeDistanceBetween"></a><code>computeDistanceBetween(locationA,&nbsp;locationB)</code></h3>

Returns the distance, in meters, between two LatLngs.
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
      locationA</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      locationB</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div>
<h3><a class="anchor" name="computeOffset" href="#computeOffset"></a><code>computeOffset(from,&nbsp;distance,&nbsp;heading)</code></h3>

Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
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
      from</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      distance</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      heading</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>LatLng</code> 
</div>
<h3><a class="anchor" name="computeOffsetOrigin" href="#computeOffsetOrigin"></a><code>computeOffsetOrigin(to,&nbsp;distance,&nbsp;heading)</code></h3>

Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
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
      to</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      <p>The destination LatLng.</p>
</td>
  </tr>
  
  <tr>
    <td>
      distance</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The distance travelled, in meters.</p>
</td>
  </tr>
  
  <tr>
    <td>
      heading</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The heading in degrees clockwise from north.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>LatLng</code> 
</div>
<h3><a class="anchor" name="computeLength" href="#computeLength"></a><code>computeLength(path)</code></h3>

Returns the length of the given path.
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
      path</td>
    <td>
      <code>Array.&lt;ILatLng&gt;</code>|<code>BaseArrayClass.&lt;ILatLng&gt;</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div>
<h3><a class="anchor" name="computeArea" href="#computeArea"></a><code>computeArea(path)</code></h3>

Returns the area of a closed path. The computed area uses the same units as the radius.
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
      path</td>
    <td>
      <code>Array.&lt;ILatLng&gt;</code>|<code>BaseArrayClass.&lt;ILatLng&gt;</code>
    </td>
    <td>
      <p>.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div>
<h3><a class="anchor" name="computeSignedArea" href="#computeSignedArea"></a><code>computeSignedArea(path)</code></h3>

Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
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
      path</td>
    <td>
      <code>Array.&lt;ILatLng&gt;</code>|<code>BaseArrayClass.&lt;ILatLng&gt;</code>
    </td>
    <td>
      <p>.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div>
<h3><a class="anchor" name="computeHeading" href="#computeHeading"></a><code>computeHeading(from,&nbsp;to)</code></h3>

Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
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
      from</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      to</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div>
<h3><a class="anchor" name="interpolate" href="#interpolate"></a><code>interpolate(from,&nbsp;to,&nbsp;fraction)</code></h3>

Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
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
      from</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      <p>The LatLng from which to start.</p>
</td>
  </tr>
  
  <tr>
    <td>
      to</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      <p>The LatLng toward which to travel.</p>
</td>
  </tr>
  
  <tr>
    <td>
      fraction</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>A fraction of the distance to travel from 0.0 to 1.0 .</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>LatLng</code> 
</div>


<h2><a class="anchor" name="KmlOverlay" href="#KmlOverlay"></a>KmlOverlay</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getDefaultViewport" href="#getDefaultViewport"></a><code>getDefaultViewport()</code></h3>




Returns the viewport to contains all overlays



<h3><a class="anchor" name="getId" href="#getId"></a><code>getId()</code></h3>




Return the ID of instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="getMap" href="#getMap"></a><code>getMap()</code></h3>

Return the map instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
</div><h3><a class="anchor" name="setVisible" href="#setVisible"></a><code>setVisible(visible)</code></h3>




Change visibility of the polyline
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




Return true if the polyline is visible


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="setClickable" href="#setClickable"></a><code>setClickable(clickable)</code></h3>




Change clickablity of the KmlOverlay
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




Return true if the KmlOverlay is clickable


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>


Remove the KmlOverlay



<h2><a class="anchor" name="Poly" href="#Poly"></a>Poly</h2>
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<h3><a class="anchor" name="containsLocation" href="#containsLocation"></a><code>containsLocation(location,&nbsp;path)</code></h3>

Returns true if the speicified location is in the polygon path
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
      location</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      path</td>
    <td>
      <code>ILatLng[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div>
<h3><a class="anchor" name="isLocationOnEdge" href="#isLocationOnEdge"></a><code>isLocationOnEdge(location,&nbsp;path)</code></h3>

Returns true if the speicified location is on the polyline path
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
      location</td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      path</td>
    <td>
      <code>ILatLng[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div>


<h2><a class="anchor" name="TileOverlay" href="#TileOverlay"></a>TileOverlay</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getId" href="#getId"></a><code>getId()</code></h3>




Return the ID of instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>string</code> 
</div><h3><a class="anchor" name="getMap" href="#getMap"></a><code>getMap()</code></h3>

Return the map instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>GoogleMap</code> 
</div><h3><a class="anchor" name="setFadeIn" href="#setFadeIn"></a><code>setFadeIn(fadeIn)</code></h3>




Set whether the tiles should fade in.
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
      fadeIn</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getFadeIn" href="#getFadeIn"></a><code>getFadeIn()</code></h3>




Get whether the tiles should fade in


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="setZIndex" href="#setZIndex"></a><code>setZIndex(zIndex)</code></h3>




Set the zIndex of the tile overlay
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




Return the zIndex of the tile overlay


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setOpacity" href="#setOpacity"></a><code>setOpacity(opacity)</code></h3>




Set the opacity of the tile overlay
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
      opacity</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getOpacity" href="#getOpacity"></a><code>getOpacity()</code></h3>




Return the opacity of the tile overlay


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="setVisible" href="#setVisible"></a><code>setVisible(visible)</code></h3>




Set false if you want to hide
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




Return true if the tile overlay is visible


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="getTileSize" href="#getTileSize"></a><code>getTileSize()</code></h3>




Get tile size



<h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>


Remove the tile overlay



<h2><a class="anchor" name="BaseClass" href="#BaseClass"></a>BaseClass</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="addEventListener" href="#addEventListener"></a><code>addEventListener(eventName)</code></h3>




Adds an event listener.
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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>event name you want to observe.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addListenerOnce" href="#addListenerOnce"></a><code>addListenerOnce(eventName)</code></h3>


Adds an event listener that works once.
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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>event name you want to observe.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="get" href="#get"></a><code>get(key)</code></h3>




Gets a value
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
      key</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="set" href="#set"></a><code>set(key,&nbsp;value,&nbsp;noNotify)</code></h3>




Sets a value
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The key name for the value. <code>(key)_changed</code> will be fired when you set value through this method.</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      noNotify</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>[options] True if you want to prevent firing the <code>(key)_changed</code> event.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="bindTo" href="#bindTo"></a><code>bindTo(key,&nbsp;target,&nbsp;targetKey?,&nbsp;noNotify?)</code></h3>




Bind a key to another object
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The property name you want to observe.</p>
</td>
  </tr>
  
  <tr>
    <td>
      target</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The target object you want to observe.</p>
</td>
  </tr>
  
  <tr>
    <td>
      targetKey?</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>[options]  The property name you want to observe. If you omit this, the <code>key</code> argument is used.</p>
</td>
  </tr>
  
  <tr>
    <td>
      noNotify?</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>[options] True if you want to prevent <code>(key)_changed</code> event when you bind first time, because the internal status is changed from <code>undefined</code> to something.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="on" href="#on"></a><code>on(key)</code></h3>




Alias of `addEventListener`
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The property name you want to observe.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="one" href="#one"></a><code>one(key)</code></h3>


Alias of `addEventListenerOnce`
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The property name you want to observe.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="empty" href="#empty"></a><code>empty()</code></h3>




Clears all stored values



<h3><a class="anchor" name="trigger" href="#trigger"></a><code>trigger(eventName,&nbsp;parameters)</code></h3>




Dispatch event.
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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Event name</p>
</td>
  </tr>
  
  <tr>
    <td>
      parameters</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>[options] The data you want to pass to event listerners.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="destroy" href="#destroy"></a><code>destroy()</code></h3>




Executes off() and empty()



<h3><a class="anchor" name="removeEventListener" href="#removeEventListener"></a><code>removeEventListener(eventName,&nbsp;listener)</code></h3>




Remove event listener(s)
The `removeEventListener()` has three usages:
 - removeEventListener("eventName", listenerFunction);
    This removes one particular event listener
 - removeEventListener("eventName");
    This removes the event listeners that added for the event name.
 - removeEventListener();
    This removes all listeners.

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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>[options] Event name</p>
</td>
  </tr>
  
  <tr>
    <td>
      listener</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>[options] Event listener</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="off" href="#off"></a><code>off(eventName,&nbsp;listener)</code></h3>




Alias of `removeEventListener`

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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>[options] Event name</p>
</td>
  </tr>
  
  <tr>
    <td>
      listener</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>[options] Event listener</p>
</td>
  </tr>
  </tbody>
</table>

<h2><a class="anchor" name="BaseArrayClass" href="#BaseArrayClass"></a>BaseArrayClass</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="empty" href="#empty"></a><code>empty(noNotify?)</code></h3>




Removes all elements from the array.
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
      noNotify?</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>[options] Set true to prevent remove_at events.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="forEach" href="#forEach"></a><code>forEach(fn)</code></h3>




Iterate over each element, calling the provided callback.
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
      fn</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="forEachAsync" href="#forEachAsync"></a><code>forEachAsync(fn)</code></h3>


Iterate over each element, calling the provided callback.
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
      fn</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="map" href="#map"></a><code>map(fn)</code></h3>




Iterate over each element, then return a new value.
Then you can get the results of each callback.
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
      fn</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Array&lt;Object&gt;</code> returns a new array with the results
</div><h3><a class="anchor" name="mapAsync" href="#mapAsync"></a><code>mapAsync(fn,&nbsp;callback)</code></h3>


Iterate over each element, calling the provided callback.
Then you can get the results of each callback.
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
      fn</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      callback</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a new array with the results
</div><h3><a class="anchor" name="mapSeries" href="#mapSeries"></a><code>mapSeries(fn,&nbsp;callback)</code></h3>


Same as `mapAsync`, but keep the execution order
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
      fn</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      callback</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a new array with the results
</div><h3><a class="anchor" name="filter" href="#filter"></a><code>filter(fn)</code></h3>




The filter() method creates a new array with all elements that pass the test implemented by the provided function.
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
      fn</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Array&lt;Object&gt;</code> returns a new filtered array
</div><h3><a class="anchor" name="filterAsync" href="#filterAsync"></a><code>filterAsync(fn,&nbsp;callback)</code></h3>


The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
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
      fn</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      callback</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> returns a new filtered array
</div><h3><a class="anchor" name="getArray" href="#getArray"></a><code>getArray()</code></h3>




Returns a reference to the underlying Array.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Array&lt;Object&gt;</code> 
</div><h3><a class="anchor" name="getAt" href="#getAt"></a><code>getAt(index)</code></h3>




Returns the element at the specified index.
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
      index</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Object</code> 
</div><h3><a class="anchor" name="getLength" href="#getLength"></a><code>getLength()</code></h3>




Returns the number of the elements.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="indexOf" href="#indexOf"></a><code>indexOf(element)</code></h3>




The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
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
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>number</code> 
</div><h3><a class="anchor" name="reverse" href="#reverse"></a><code>reverse()</code></h3>




The reverse() method reverses an array in place.



<h3><a class="anchor" name="sort" href="#sort"></a><code>sort()</code></h3>




The sort() method sorts the elements of an array in place and returns the array.



<h3><a class="anchor" name="insertAt" href="#insertAt"></a><code>insertAt(index,&nbsp;element,&nbsp;noNotify?)</code></h3>




Inserts an element at the specified index.
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
      index</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      element</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      noNotify?</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>[options] Set true to prevent insert_at events.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Object</code> 
</div><h3><a class="anchor" name="pop" href="#pop"></a><code>pop(noNotify?)</code></h3>




Removes the last element of the array and returns that element.
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
      noNotify?</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>[options] Set true to prevent remove_at events.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Object</code> 
</div><h3><a class="anchor" name="push" href="#push"></a><code>push(element,&nbsp;noNotify?)</code></h3>




Adds one element to the end of the array and returns the new length of the array.
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
      <code>object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      noNotify?</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true to prevent insert_at events.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="removeAt" href="#removeAt"></a><code>removeAt(index,&nbsp;noNotify?)</code></h3>




Removes an element from the specified index.
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
      index</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      noNotify?</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>[options] Set true to prevent remove_at events.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setAt" href="#setAt"></a><code>setAt(index,&nbsp;element,&nbsp;noNotify?)</code></h3>




Sets an element at the specified index.
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
      index</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      element</td>
    <td>
      <code>object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      noNotify?</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>[options] Set true to prevent set_at events.</p>
</td>
  </tr>
  </tbody>
</table>





<h2><a class="anchor" name="GoogleMapOptions" href="#GoogleMapOptions"></a>GoogleMapOptions</h2>

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
      mapType
    </td>
    <td>
      <code>MapType</code>
    </td>
    <td>
      <p>mapType [options]</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      controls
    </td>
    <td>
      <code>GoogleMapControlOptions</code>
    </td>
    <td>
      <p>controls [options]</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      gestures
    </td>
    <td>
      <code>GoogleMapGestureOptions</code>
    </td>
    <td>
      <p>gestures [options]</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      styles
    </td>
    <td>
      <code>any[]</code>
    </td>
    <td>
      <p>Map styles [options]</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      camera
    </td>
    <td>
      <code>CameraPosition&lt;any&gt;</code>
    </td>
    <td>
      <p>Initial camera position [options]</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      preferences
    </td>
    <td>
      <code>GoogleMapPreferenceOptions</code>
    </td>
    <td>
      <p>preferences [options]</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CameraPosition" href="#CameraPosition"></a>CameraPosition</h2>

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
      <code>T</code>
    </td>
    <td>
      <p>The center location of the camera view.</p>
<p>[usage 1]</p>
<p>let cameraPos: CameraPosition<ILatLng> = {
  target: {lat: ..., lng: ...},
  zoom: 10
}</p>
<p>[usage 2] The zoom property is ignored when you specify multiple position</p>
<p>let cameraPos: CameraPosition<ILatLng[]> = {
  target: [
     {lat: ..., lng: ...},
     {lat: ..., lng: ...},
     {lat: ..., lng: ...}
  ]
}</p>

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
      <p>View angle</p>

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
      <p>Zoom level</p>

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
      <p>Map orientation</p>

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
      <p>The duration of animation in milliseconds</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      padding
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Camera padding in pixel</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="CircleOptions" href="#CircleOptions"></a>CircleOptions</h2>

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
    </td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      <p>Center position of circle</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      radius
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Radius of circle in meter</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      strokeColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the stroke color
(rgb, rgba, #RRGGBB, &quot;colorname&quot;, ...etc)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      strokeWidth
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set the stroke width in pixel</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      fillColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the inside color of polygon
(rgb, rgba, #RRGGBB, &quot;colorname&quot;, ...etc)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      clickable
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to receive the CIRCLE_CLICK event
(default: false)</p>

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
      <p>Set to false to hide</p>

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
      <p>Z-index</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="GeocoderRequest" href="#GeocoderRequest"></a>GeocoderRequest</h2>

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
    </td>
    <td>
      <code>string | string[]</code>
    </td>
    <td>
      <p>The address property or position property is required.
You can not specify both property at the same time.</p>
<p>[geocoding usage1]
let request: GeocoderRequest = {
  address: &quot;Los Angeles, California, USA&quot;
};</p>
<p>[geocoding usage2]
let request: GeocoderRequest = {
  address: [
   &quot;Los Angeles, California, USA&quot;,
   &quot;San Francisco, California, USA&quot;,
  ]
};</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      position
    </td>
    <td>
      <code>ILatLng | ILatLng[]</code>
    </td>
    <td>
      <p>[reverse-geocoding usage1]
let request: GeocoderRequest = {
  position: {&quot;lat&quot;: 37.421655, &quot;lng&quot;: -122.085637}
};</p>
<p>[reverse-geocoding usage2]
let request: GeocoderRequest = {
  address: [
   {&quot;lat&quot;: 37.421655, &quot;lng&quot;: -122.085637},
   {&quot;lat&quot;: 37.332, &quot;lng&quot;: -122.030781}
  ]
};</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="GeocoderResult" href="#GeocoderResult"></a>GeocoderResult</h2>

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
      country
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
      countryCode
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
      extra
    </td>
    <td>
      <code>{
    featureName?: string;
    lines?: Array&lt;string&gt;;
    permises?: string;
    phone?: string;
    url?: string
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      locale
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
      locality
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
      position
    </td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      subAdminArea
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
      subLocality
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
      subThoroughfare
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
      thoroughfare
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="GroundOverlayOptions" href="#GroundOverlayOptions"></a>GroundOverlayOptions</h2>

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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of overlay</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      bounds
    </td>
    <td>
      <code>Array&lt;ILatLng&gt;</code>
    </td>
    <td>
      <p>Bounds, array of ILatLng</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      clickable
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to receive the GROUND_OVERLAY_CLICK event
(default: false)</p>

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
      <p>Set to false to hide</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      opacity
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Opacity. From 0.0 to 1.0 .</p>

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
      <p>Bearing</p>

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
      <p>Z-index</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="ILatLng" href="#ILatLng"></a>ILatLng</h2>

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
      lat
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      lng
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="MarkerIcon" href="#MarkerIcon"></a>MarkerIcon</h2>

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
      size
    </td>
    <td>
      <code>{
    width?: number;
    height?: number;
  }</code>
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
      <code>ILatLng</code>
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
      <p>Specify the options for title. This property work for normal InfoWindow.</p>

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
      <p>Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.</p>

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


<h2><a class="anchor" name="MarkerClusterIcon" href="#MarkerClusterIcon"></a>MarkerClusterIcon</h2>


<h2><a class="anchor" name="MarkerClusterOptions" href="#MarkerClusterOptions"></a>MarkerClusterOptions</h2>

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
      maxZoomLevel
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Maximum zoom level of clustering
(default: 15, max: 18)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      boundsDraw
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Draw a rectangle that contains all locations of clustered when you tap on a clister marker.
(default: true)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      markers
    </td>
    <td>
      <code>MarkerOptions[]</code>
    </td>
    <td>
      <p>Position list
[
  {title: &quot;store A&quot;, position: {lat: ..., lng: ...}},
  {title: &quot;store B&quot;, position: {lat: ..., lng: ...}},
  {title: &quot;store C&quot;, position: {lat: ..., lng: ...}}
]</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      icons
    </td>
    <td>
      <code>any[]</code>
    </td>
    <td>
      <p>Conditions of clustering
[
  {icon: &quot;assets/small.png&quot;, min: 2, max: 10},
  {icon: &quot;assets/middle.png&quot;, min: 11, max: 30},
  {icon: &quot;assets/large.png&quot;, min: 31},
]</p>

      
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
      <p>Set true if you want to try to use GPS mandatory.
(In false, the plugin try to use GPS and network)
(default: false)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="PolygonOptions" href="#PolygonOptions"></a>PolygonOptions</h2>

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
    </td>
    <td>
      <code>Array&lt;ILatLng&gt;</code>
    </td>
    <td>
      <p>Pass ILatLng[] to specify the vertixes.
You need to contain two points at least.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      geodesic
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true if you want to draw the curve polygon based on the earth
(default: false)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      strokeColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the stroke color
(rgb, rgba, #RRGGBB, &quot;colorname&quot;, ...etc)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      strokeWidth
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set the stroke width in pixel</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      fillColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the inside color of polygon
(rgb, rgba, #RRGGBB, &quot;colorname&quot;, ...etc)</p>

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
      <p>Set false if you want to create invisible polygon
(Invisible polygon is not clickable, default true)</p>

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
      <p>Hierarchy z-index</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      addHole
    </td>
    <td>
      <code>Array&lt;Array&lt;ILatLng&gt;&gt;</code>
    </td>
    <td>
      <p>Pass ILatLng[][] to create holes in polygon</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      clickable
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true if you want to receive the POLYGON_CLICK event
(default: false)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="PolylineOptions" href="#PolylineOptions"></a>PolylineOptions</h2>

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
    </td>
    <td>
      <code>Array&lt;ILatLng&gt;</code>
    </td>
    <td>
      <p>Pass ILatLng[] to specify the vertixes.
You need to contain two points at least.</p>

      
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
      <p>Set false if you want to create invisible polyline
(Invisible polyline is not clickable, default true)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      geodesic
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true if you want to draw the curve polyline based on the earth
(default: false)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      color
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set the stroke color
(rgb, rgba, #RRGGBB, &quot;colorname&quot;, ...etc)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Set the stroke width in pixel</p>

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
      <p>Hierarchy z-index</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      clickable
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true if you want to receive the POLYLINE_CLICK event
(default: false)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="TileOverlayOptions" href="#TileOverlayOptions"></a>TileOverlayOptions</h2>

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
      getTile
    </td>
    <td>
      <code>(x: number, y: number, zoom: number) =&gt; string</code>
    </td>
    <td>
      <p>This callback must return string of image URL.
If no tile, you need to return null.</p>

      
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
      <p>Set false if you want to create invisible tilelayer
(default true)</p>

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
      <p>Hierarchy z-index of tilelayer</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      tileSize
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Default: 512px</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      opacity
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Default: 1.0</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      debug
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set true if you want to display the tile information over the tile images.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="KmlOverlayOptions" href="#KmlOverlayOptions"></a>KmlOverlayOptions</h2>

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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      clickable
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      suppressInfoWindows
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
      <code>ILatLng</code>
    </td>
    <td>
      <p>The northeast of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
Since the map view is able to rotate, the farRight is not the same as the northeast.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      southwest
    </td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      <p>The southwest of the bounds that contains the farLeft, farRight, nearLeft and nearRight.
Since the map view is able to rotate, the nearLeft is not the same as the southwest.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      farLeft
    </td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      <p>The nearRight indicates the lat/lng of the top-left of the map view.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      farRight
    </td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      <p>The nearRight indicates the lat/lng of the top-right of the map view.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      nearLeft
    </td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      <p>The nearRight indicates the lat/lng of the bottom-left of the map view.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      nearRight
    </td>
    <td>
      <code>ILatLng</code>
    </td>
    <td>
      <p>The nearRight indicates the lat/lng of the bottom-right of the map view.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>constant value : <code>VisibleRegion</code></p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      toString
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Converts to string</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      toUrlValue
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Returns a string of the form &quot;lat_sw,lng_sw,lat_ne,lng_ne&quot; for this bounds, where &quot;sw&quot; corresponds to the southwest corner of the bounding box, while &quot;ne&quot; corresponds to the northeast corner of that box.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      contains
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Returns true if the given lat/lng is in this bounds.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





