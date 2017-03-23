---
layout: "v2_fluid/docs_base"
version: "3.2.2"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/google-maps/index.ts#L366">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"
$ npm install --save @ionic-native/google-maps
</code></pre>
<p>Repo:
  <a href="https://github.com/mapsplugin/cordova-plugin-googlemaps">
    https://github.com/mapsplugin/cordova-plugin-googlemaps
  </a>
</p>

<!-- description -->

<p>This plugin uses the native Google Maps SDK</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {
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

// Load map only after view is initialize
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

 let map: GoogleMap = GoogleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(() =&gt; console.log(&#39;Map is ready!&#39;));

 // create LatLng object
 let ionic: LatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);

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




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="isAvailable"></div>
<h3>
  <code>isAvailable()</code>
  

</h3>
Checks if a map object has been created and is available.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div><div id="create"></div>
<h3>
  <code>create(element,&nbsp;options)</code>
  

</h3>
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
      element
      
    </td>
    <td>
      
<code>string</code>|<code>HTMLElement</code>
    </td>
    <td>
      <p>Element ID or reference to attach the map to</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
    </td>
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
  <b>Returns:</b> 
<code>GoogleMap</code> 
</div>



<!-- other classes -->
<!--<h2><a class="anchor" name="related-classes" href="#related-classes"></a>Related Classes</h2>-->



<h2><a class="anchor" name="GoogleMap" href="#GoogleMap"></a>GoogleMap</h2>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="addEventListener"></div>
<h3>
  <code>addEventListener()</code>
  

</h3>
Adds an event listener.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div><div id="addListenerOnce"></div>
<h3>
  <code>addListenerOnce()</code>
  

</h3>
Adds an event listener that works once.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="get"></div>
<h3>
  <code>get(key)</code>
  

</h3>
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
      key
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="set"></div>
<h3>
  <code>set(key,&nbsp;value)</code>
  

</h3>
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
      key
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      value
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

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
</div><div id="empty"></div>
<h3>
  <code>empty()</code>
  

</h3>
Clears all stored values



<div id="setDebuggable"></div>
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



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="moveCamera"></div>
<h3>
  <code>moveCamera()</code>
  

</h3>



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setMyLocationEnabled"></div>
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



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Marker | any&gt;</code> 
</div><div id="addCircle"></div>
<h3>
  <code>addCircle()</code>
  

</h3>



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Circle | any&gt;</code> 
</div><div id="addPolygon"></div>
<h3>
  <code>addPolygon()</code>
  

</h3>



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Polygon | any&gt;</code> 
</div><div id="addPolyline"></div>
<h3>
  <code>addPolyline()</code>
  

</h3>



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Polyline | any&gt;</code> 
</div><div id="addTileOverlay"></div>
<h3>
  <code>addTileOverlay()</code>
  

</h3>



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;TileOverlay | any&gt;</code> 
</div><div id="addGroundOverlay"></div>
<h3>
  <code>addGroundOverlay()</code>
  

</h3>



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;GroundOverlay | any&gt;</code> 
</div><div id="addKmlOverlay"></div>
<h3>
  <code>addKmlOverlay()</code>
  

</h3>



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;KmlOverlay | any&gt;</code> 
</div><div id="setDiv"></div>
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



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="fromPointToLatLng"></div>
<h3>
  <code>fromPointToLatLng()</code>
  

</h3>



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;LatLng&gt;</code> 
</div><div id="toDataURL"></div>
<h3>
  <code>toDataURL()</code>
  

</h3>



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>



<div id="panBy"></div>
<h3>
  <code>panBy()</code>
  

</h3>







<h2><a class="anchor" name="Marker" href="#Marker"></a>Marker</h2>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="addEventListener"></div>
<h3>
  <code>addEventListener()</code>
  

</h3>
Adds an event listener.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div><div id="addListenerOnce"></div>
<h3>
  <code>addListenerOnce()</code>
  

</h3>
Adds an event listener that works once.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="get"></div>
<h3>
  <code>get(key)</code>
  

</h3>
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
      key
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="set"></div>
<h3>
  <code>set(key,&nbsp;value)</code>
  

</h3>
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
      key
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      value
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

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
</div><div id="empty"></div>
<h3>
  <code>empty()</code>
  

</h3>
Clears all stored values



<div id="isVisible"></div>
<h3>
  <code>isVisible()</code>
  

</h3>
Return true if the marker is visible



<div id="setVisible"></div>
<h3>
  <code>setVisible(visible)</code>
  

</h3>
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
      visible
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="getHashCode"></div>
<h3>
  <code>getHashCode()</code>
  

</h3>
Return the marker hash code.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>string</code> Marker hash code
</div><div id="remove"></div>
<h3>
  <code>remove()</code>
  

</h3>
Remove the marker completely.



<div id="setOpacity"></div>
<h3>
  <code>setOpacity(alpha)</code>
  

</h3>
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
      alpha
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Opacity</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="getOpacity"></div>
<h3>
  <code>getOpacity()</code>
  

</h3>
Return the marker opacity.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>number</code> Opacity
</div><div id="setZIndex"></div>
<h3>
  <code>setZIndex()</code>
  

</h3>
iOS only, Plugin Version >= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You're able to run this on Android, but it will have no effect)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>number</code> 
</div><div id="setIconAnchor"></div>
<h3>
  <code>setIconAnchor(x,&nbsp;y)</code>
  

</h3>
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
      x
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
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
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setInfoWindowAnchor"></div>
<h3>
  <code>setInfoWindowAnchor(x,&nbsp;y)</code>
  

</h3>
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
      x
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
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
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setDraggable"></div>
<h3>
  <code>setDraggable(draggable)</code>
  

</h3>
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
      draggable
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="isDraggable"></div>
<h3>
  <code>isDraggable()</code>
  

</h3>
Return true if the marker drag is enabled.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>boolean</code> 
</div><div id="setFlat"></div>
<h3>
  <code>setFlat(flat)</code>
  

</h3>
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
      flat
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setIcon"></div>
<h3>
  <code>setIcon(icon)</code>
  

</h3>
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
      icon
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setTitle"></div>
<h3>
  <code>setTitle(title)</code>
  

</h3>
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
      title
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="getTitle"></div>
<h3>
  <code>getTitle()</code>
  

</h3>
Return the title strings.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>string</code> 
</div><div id="setSnippet"></div>
<h3>
  <code>setSnippet(snippet)</code>
  

</h3>
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
      snippet
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="getSnippet"></div>
<h3>
  <code>getSnippet()</code>
  

</h3>
Return the snippet strings.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>string</code> 
</div><div id="setRotation"></div>
<h3>
  <code>setRotation(rotation)</code>
  

</h3>
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
      rotation
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="getRotation"></div>
<h3>
  <code>getRotation()</code>
  

</h3>
Return the marker rotation angle.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>number</code> 
</div><div id="showInfoWindow"></div>
<h3>
  <code>showInfoWindow()</code>
  

</h3>
Show the infoWindow of the marker.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>number</code> 
</div><div id="hideInfoWindow"></div>
<h3>
  <code>hideInfoWindow()</code>
  

</h3>
Hide the infoWindow of the marker.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>number</code> 
</div><div id="setPosition"></div>
<h3>
  <code>setPosition(latLng)</code>
  

</h3>
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
      latLng
      
    </td>
    <td>
      
<code>GoogleMapLatLng</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="getPosition"></div>
<h3>
  <code>getPosition()</code>
  

</h3>
Return the marker position.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;GoogleMapLatLng&gt;</code> 
</div><div id="getMap"></div>
<h3>
  <code>getMap()</code>
  

</h3>
Return the map instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>GoogleMap</code> 
</div><div id="setAnimation"></div>
<h3>
  <code>setAnimation(animation)</code>
  

</h3>
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
      animation
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<h2><a class="anchor" name="LatLng" href="#LatLng"></a>LatLng</h2>


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







<h2><a class="anchor" name="Geocoder" href="#Geocoder"></a>Geocoder</h2>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="geocode"></div>
<h3>
  <code>geocode(request)</code>
  

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


<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
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

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      markerClick
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Function to be invoked when the user clicks on the marker</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      infoClick
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Function to be invoked when the user clicks on the info box</p>

      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

