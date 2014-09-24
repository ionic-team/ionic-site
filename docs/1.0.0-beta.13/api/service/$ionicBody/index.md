---
layout: "docs_api"
version: "1.0.0-beta.13"
versionHref: "/docs"
path: "api/service/$ionicBody/"

title: "$ionicBody"
header_sub_title: "Service in module ionic"
doc: "$ionicBody"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/body.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/body.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicBody



</h1>





An angular utility service to easily and efficiently
add and remove CSS classes from the document's body element.










  

  
## Methods

<div id="add"></div>
<h2>
  <code>add(class)</code>

</h2>

Add a class to the document's body element.



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
        class
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Each argument will be added to the body element.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>$ionicBody</code> The $ionicBody service so methods can be chained.




<div id="removeClass"></div>
<h2>
  <code>removeClass(class)</code>

</h2>

Remove a class from the document's body element.



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
        class
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Each argument will be removed from the body element.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>$ionicBody</code> The $ionicBody service so methods can be chained.




<div id="enableClass"></div>
<h2>
  <code>enableClass(shouldEnableClass, class)</code>

</h2>

Similar to the `add` method, except the first parameter accepts a boolean
value determining if the class should be added or removed. Rather than writing user code,
such as "if true then add the class, else then remove the class", this method can be
given a true or false value which reduces redundant code.



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
        shouldEnableClass
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>A true/false value if the class should be added or removed.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        class
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Each remaining argument would be added or removed depending on
the first argument.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>$ionicBody</code> The $ionicBody service so methods can be chained.




<div id="append"></div>
<h2>
  <code>append(element)</code>

</h2>

Append a child to the document's body.



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
        <p>The element to be appended to the body. The passed in element
can be either a jqLite element, or a DOM element.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>$ionicBody</code> The $ionicBody service so methods can be chained.




<div id="get"></div>
<h2>
  <code>get()</code>

</h2>

Get the document's body element.






* Returns: 
  <code>element</code> Returns the document's body element.



  
  






