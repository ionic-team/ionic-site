---
layout: "docs_api"
version: "1.0.1"
versionHref: "/docs"
path: "api/utility/ionic.EventController/"

title: "ionic.EventController"
header_sub_title: "Utility in module ionic"
doc: "ionic.EventController"
docType: "utility"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/utils/events.js#L44'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/utils/events.js#L44'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ionic.EventController



</h1>
















  

  
## Methods

<div id="trigger"></div>
<h2>
  <code>trigger(eventType, data, [bubbles], [cancelable])</code><small>(alias: ionic.trigger)</small>

</h2>





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
        <p>The event to trigger.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        data
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The data for the event. Hint: pass in
<code>{target: targetElement}</code></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        bubbles
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the event should bubble up the DOM.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        cancelable
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the event should be cancelable.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="on"></div>
<h2>
  <code>on(type, callback, element)</code><small>(alias: ionic.on)</small>

</h2>

Listen to an event on an element.



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
        type
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The event to listen for.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>The listener to be called.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        element
        
        
      </td>
      <td>
        
  <code>DOMElement</code>
      </td>
      <td>
        <p>The element to listen for the event on.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="off"></div>
<h2>
  <code>off(type, callback, element)</code><small>(alias: ionic.off)</small>

</h2>

Remove an event listener.



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
        type
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
    <tr>
      <td>
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
    <tr>
      <td>
        element
        
        
      </td>
      <td>
        
  <code>DOMElement</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="onGesture"></div>
<h2>
  <code>onGesture(eventType, callback, element, options)</code><small>(alias: ionic.onGesture)</small>

</h2>

Add an event listener for a gesture on an element.

Available eventTypes (from [hammer.js](http://eightmedia.github.io/hammer.js/)):

`hold`, `tap`, `doubletap`, `drag`, `dragstart`, `dragend`, `dragup`, `dragdown`, <br/>
`dragleft`, `dragright`, `swipe`, `swipeup`, `swipedown`, `swipeleft`, `swiperight`, <br/>
`transform`, `transformstart`, `transformend`, `rotate`, `pinch`, `pinchin`, `pinchout`, </br>
`touch`, `release`



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
        element
        
        
      </td>
      <td>
        
  <code>DOMElement</code>
      </td>
      <td>
        <p>The angular element to listen for the event on.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        options
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>object.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>ionic.Gesture</code> The gesture object (use this to remove the gesture later on).




<div id="offGesture"></div>
<h2>
  <code>offGesture(gesture, eventType, callback)</code><small>(alias: ionic.offGesture)</small>

</h2>

Remove an event listener for a gesture created on an element.



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
        gesture
        
        
      </td>
      <td>
        
  <code>ionic.Gesture</code>
      </td>
      <td>
        <p>The gesture that should be removed.</p>

        
      </td>
    </tr>
    
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
    
  </tbody>
</table>








  
  






