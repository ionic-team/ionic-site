---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.35"
versionHref: "/docs/v2/2.0.0-alpha.35"
path: ""
category: api
id: "{{Content | slugify}}"
title: "Content"
header_sub_title: "Class in module "
doc: "Content"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/content/content.ts#L8'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/content/content.ts#L8'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  Content



</h1>





<p>The Content component provides an easy to use content area that can be configured to use Ionic&#39;s custom Scroll View, or the built in overflow scrolling of the browser.</p>
<p>While we recommend using the custom Scroll features in Ionic in most cases, sometimes (for performance reasons) only the browser&#39;s native overflow scrolling will suffice, and so we&#39;ve made it easy to toggle between the Ionic scroll implementation and overflow scrolling.</p>
<p>You can implement pull-to-refresh with the <a href="../../scroll/Refresher">Refresher</a> component.</p>


<h1 class="class export">Content <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/content/content.ts#L9-L227">ionic/components/content/content.ts (line 9)</a>
</p>
<h2>Component</h2>
  <span>selector: ion-content</span>


## Members

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




<div id="onScrollEnd"></div>
<h2>
  <code>onScrollEnd()</code>

</h2>












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
        <p>The x-value to scroll to.</p>

        
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
        <p>The y-value to scroll to.</p>

        
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




<div id="scrollToTop"></div>
<h2>
  <code>scrollToTop()</code>

</h2>












