---
layout: "v2/docs_api"
version: "2.0.0-alpha.10"
versionHref: "/docs/v2"
path: ""

title: "ionContent"
header_sub_title: "Class in module "
doc: "ionContent"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/#L'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/#L'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ionContent



</h1>







<h1 class="class export">ionContent <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/content/content.ts#L7-L170">ionic/components/content/content.ts (line 7)</a>
</p>
<p></p>
## Members

<div id="onInit"></div>
<h2>
  <code>onInit()</code>

</h2>

TODO











<div id="addScrollEventListener"></div>
<h2>
  <code>addScrollEventListener(handler)</code>

</h2>

Adds the specified scroll handler to the content' scroll element.



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
        handler
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>The scroll event handler.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Function</code> A function that removes the scroll handler.




<div id="addTouchMoveListener"></div>
<h2>
  <code>addTouchMoveListener(handler)</code>

</h2>

Adds the specified touchmove handler to the content's scroll element.



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
        handler
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>The touchmove handler.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Function</code> A function that removes the touchmove handler.




<div id="scrollTo"></div>
<h2>
  <code>scrollTo(x, y, duration, tolerance)</code>

</h2>

Scroll to the specified position.



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
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        y
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        duration
        
        
      </td>
      <td>
        
  <code>Number</code>
      </td>
      <td>
        <p>Duration of the scroll animation.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        tolerance
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>TODO</code> TODO




<div id="getDimensions"></div>
<h2>
  <code>getDimensions()</code>

</h2>

Returns the content and scroll elements' dimensions.






* Returns: 
  <code>Object</code> dimensions  The content and scroll elements' dimensions
{Number} dimensions.contentHeight  content offsetHeight
{Number} dimensions.contentTop  content offsetTop
{Number} dimensions.contentBottom  content offsetTop+offsetHeight
{Number} dimensions.contentWidth  content offsetWidth
{Number} dimensions.contentLeft  content offsetLeft
{Number} dimensions.contentRight  content offsetLeft + offsetWidth
{Number} dimensions.scrollHeight  scroll scrollHeight
{Number} dimensions.scrollTop  scroll scrollTop
{Number} dimensions.scrollBottom  scroll scrollTop + scrollHeight
{Number} dimensions.scrollWidth  scroll scrollWidth
{Number} dimensions.scrollLeft  scroll scrollLeft
{Number} dimensions.scrollRight  scroll scrollLeft + scrollWidth
TODO: figure out how to get this to work




<div id="addKeyboardPadding"></div>
<h2>
  <code>addKeyboardPadding()</code>

</h2>











<div id="pollFocus"></div>
<h2>
  <code>pollFocus()</code>

</h2>

TODO











