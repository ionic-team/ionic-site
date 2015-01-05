---
layout: "docs_api"
version: "1.0.0-beta.13"
versionHref: "/docs/1.0.0-beta.13"
path: "api/service/$ionicPosition/"

title: "$ionicPosition"
header_sub_title: "Service in module ionic"
doc: "$ionicPosition"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/position.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/position.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicPosition



</h1>





A set of utility methods that can be use to retrieve position of DOM elements.
It is meant to be used where we need to absolute-position DOM elements in
relation to other, existing elements (this is the case for tooltips, popovers, etc.).

Adapted from [AngularUI Bootstrap](https://github.com/angular-ui/bootstrap/blob/master/src/position/position.js),
([license](https://github.com/angular-ui/bootstrap/blob/master/LICENSE))










  

  
## Methods

<div id="position"></div>
<h2>
  <code>position(element)</code>

</h2>

Get the current coordinates of the element, relative to the offset parent.
Read-only equivalent of [jQuery's position function](http://api.jquery.com/position/).



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
        element
        
        
      </td>
      <td>
        
  <code>element</code>
      </td>
      <td>
        <p>The element to get the position of.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> Returns an object containing the properties top, left, width and height.




<div id="offset"></div>
<h2>
  <code>offset(element)</code>

</h2>

Get the current coordinates of the element, relative to the document.
Read-only equivalent of [jQuery's offset function](http://api.jquery.com/offset/).



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
        element
        
        
      </td>
      <td>
        
  <code>element</code>
      </td>
      <td>
        <p>The element to get the offset of.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> Returns an object containing the properties top, left, width and height.



  
  






