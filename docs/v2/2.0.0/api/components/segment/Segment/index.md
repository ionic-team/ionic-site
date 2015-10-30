---
layout: "v2_fluid/docs_base"
version: "2.0.0"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Segment | slugify}}"
title: "Segment"
header_sub_title: "Class in module "
doc: "Segment"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/segment/segment.ts#L5'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/segment/segment.ts#L5'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  Segment



</h1>





<p>A Segment is a group of buttons, sometimes known as Segmented Controls, that allow the user to interact with a compact group of a number of controls.</p>
<p>Segments provide functionality similar to tabs, selecting one will unselect all others. You should use a tab bar instead of a segmented control when you want to let the user move back and forth between distinct pages in your app.</p>


<h1 class="class export">Segment <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/segment/segment.ts#L6-L118">ionic/components/segment/segment.ts (line 6)</a>
</p>
<h2>Component</h2>
  <span>selector: ion-segment</span>

  <span>inputs: value</span>


## Members

<div id="writeValue"></div>
<h2>
  <code>writeValue()</code>

</h2>












<div id="register"></div>
<h2>
  <code>register(segmentButton)</code>

</h2>

Called by child SegmentButtons to bind themselves to
the Segment.



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
        segmentButton
        
        
      </td>
      <td>
        
  <code>SegmentButton</code>
      </td>
      <td>
        <p>The child SegmentButton to register.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="selectFromValue"></div>
<h2>
  <code>selectFromValue(value)</code>

</h2>

Select the button with the given value.



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
        value
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Value of the button to select.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="selected"></div>
<h2>
  <code>selected(segmentButton)</code>

</h2>

Indicate a button should be selected.



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
        segmentButton
        
        
      </td>
      <td>
        
  <code>SegmentButton</code>
      </td>
      <td>
        <p>The button to select.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









