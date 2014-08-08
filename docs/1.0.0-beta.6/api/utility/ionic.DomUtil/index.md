---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/utility/ionic.DomUtil/"

title: "ionic.DomUtil"
header_sub_title: "Utility in module ionic"
doc: "ionic.DomUtil"
docType: "utility"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/utils/dom.js#L38'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ionic.DomUtil



</h1>
















  

  
## Methods

<div id="requestAnimationFrame"></div>
<h2>
  <code>requestAnimationFrame(callback)</code><small>(alias: ionic.requestAnimationFrame)</small>

</h2>

Calls [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame), or a polyfill if not available.



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
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>The function to call when the next frame
happens.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="animationFrameThrottle"></div>
<h2>
  <code>animationFrameThrottle(callback)</code><small>(alias: ionic.animationFrameThrottle)</small>

</h2>

When given a callback, if that callback is called 100 times between
animation frames, adding Throttle will make it only run the last of
the 100 calls.



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
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>a function which will be throttled to
requestAnimationFrame</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>function</code> A function which will then call the passed in callback.
The passed in callback will receive the context the returned function is
called with.




<div id="getPositionInParent"></div>
<h2>
  <code>getPositionInParent(element)</code>

</h2>

Find an element's scroll offset within its container.



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
        
  <code>DOMElement</code>
      </td>
      <td>
        <p>The element to find the offset of.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A position object with the following properties:
  - `{number}` `left` The left offset of the element.
  - `{number}` `top` The top offset of the element.




<div id="ready"></div>
<h2>
  <code>ready(callback)</code>

</h2>

Call a function when the DOM is ready, or if it is already ready
call the function immediately.



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
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>The function to be called.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="getTextBounds"></div>
<h2>
  <code>getTextBounds(textNode)</code>

</h2>

Get a rect representing the bounds of the given textNode.



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
        textNode
        
        
      </td>
      <td>
        
  <code>DOMElement</code>
      </td>
      <td>
        <p>The textNode to find the bounds of.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> An object representing the bounds of the node. Properties:
  - `{number}` `left` The left positton of the textNode.
  - `{number}` `right` The right positton of the textNode.
  - `{number}` `top` The top positton of the textNode.
  - `{number}` `bottom` The bottom position of the textNode.
  - `{number}` `width` The width of the textNode.
  - `{number}` `height` The height of the textNode.




<div id="getChildIndex"></div>
<h2>
  <code>getChildIndex(element, type)</code>

</h2>

Get the first index of a child node within the given element of the
specified type.



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
        
  <code>DOMElement</code>
      </td>
      <td>
        <p>The element to find the index of.</p>

        
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
        <p>The nodeName to match children of element against.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>number</code> The index, or -1, of a child with nodeName matching type.




<div id="getParentWithClass"></div>
<h2>
  <code>getParentWithClass(element, className)</code>

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
        element
        
        
      </td>
      <td>
        
  <code>DOMElement</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
    <tr>
      <td>
        className
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>DOMElement</code> The closest parent of element matching the
className, or null.




<div id="getParentWithClass"></div>
<h2>
  <code>getParentWithClass(element, className)</code>

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
        element
        
        
      </td>
      <td>
        
  <code>DOMElement</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
    <tr>
      <td>
        className
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>DOMElement</code> The closest parent or self matching the
className, or null.




<div id="rectContains"></div>
<h2>
  <code>rectContains(x, y, x1, y1, x2, y2)</code>

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
    
    <tr>
      <td>
        x1
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
    <tr>
      <td>
        y1
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
    <tr>
      <td>
        x2
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
    <tr>
      <td>
        y2
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether {x,y} fits within the rectangle defined by
{x1,y1,x2,y2}.



  
  






