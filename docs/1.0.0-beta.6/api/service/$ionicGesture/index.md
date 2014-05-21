---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicGesture/"

title: "$ionicGesture"
header_sub_title: "Service in module ionic"
doc: "$ionicGesture"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/gesture.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicGesture



</h1>





An angular service exposing ionic
<a href="/docs/api/utility/ionic.EventController/"><code>ionic.EventController</code></a>'s gestures.










  

  
## Methods

<div id="on"></div>
<h2>
  <code>on(eventType, callback, $element)</code>

</h2>

Add an event listener for a gesture on an element. See <a href="/docs/api/utility/ionic.EventController/#onGesture"><code>ionic.EventController</code></a>.



<table class="table" style="margin:0;">
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
        eventType
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The gesture event to listen for.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        callback
        
        
      </td>
      <td>
        
  <code>function(e)</code>
      </td>
      <td>
        <p>The function to call when the gesture
happens.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        $element
        
        
      </td>
      <td>
        
  <code>element</code>
      </td>
      <td>
        <p>The angular element to listen for the event on.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="off"></div>
<h2>
  <code>off(eventType, callback, $element)</code>

</h2>

Remove an event listener for a gesture on an element. See <a href="/docs/api/utility/ionic.EventController/#offGesture"><code>ionic.EventController</code></a>.



<table class="table" style="margin:0;">
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
        eventType
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The gesture event to remove the listener for.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        callback
        
        
      </td>
      <td>
        
  <code>function(e)</code>
      </td>
      <td>
        <p>The listener to remove.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        $element
        
        
      </td>
      <td>
        
  <code>element</code>
      </td>
      <td>
        <p>The angular element that was listening for the event.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








  
  






