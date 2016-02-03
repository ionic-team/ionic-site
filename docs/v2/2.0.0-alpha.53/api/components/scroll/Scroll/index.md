---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.53"
versionHref: "/docs/v2/2.0.0-alpha.53"
path: ""
category: api
id: "scroll"
title: "Scroll"
header_sub_title: "Class in module "
doc: "Scroll"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/scroll/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Scroll






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/scroll/scroll.ts#L7'>
Improve this doc
</a>






<p>Scroll is a non-flexboxed scroll area that can scroll horizontally or vertically. <code>ion-Scroll</code> Can be used in places were you may not need a full page scroller, but a highly customized one, such as image scubber or comment scroller.</p>


<h2>Component</h2>
<h3>selector: <code>ion-scroll</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-scroll scrollX=&quot;true&quot;&gt;
&lt;/ion-scroll&gt;

&lt;ion-scroll scrollY=&quot;true&quot;&gt;
&lt;/ion-scroll&gt;

&lt;ion-scroll scrollX=&quot;true&quot; scrollY=&quot;true&quot;&gt;
&lt;/ion-scroll&gt;
</code></pre>




<!-- @property tags -->

<h2>Attributes:</h2>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>




















<th>Type</th>


<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
scrollX
</td>


<td>
boolean
</td>


<td>
whether to enable scrolling along the X axis
</td>
</tr>

<tr>
<td>
scrollY
</td>


<td>
boolean
</td>


<td>
whether to enable scrolling along the Y axis
</td>
</tr>

<tr>
<td>
zoom
</td>


<td>
boolean
</td>


<td>
whether to enable zooming
</td>
</tr>

<tr>
<td>
maxZoom
</td>


<td>
number
</td>


<td>
set the max zoom amount for ion-scroll
</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h2>Methods</h2>

<div id="maxScale"></div>

<h3>
<code>maxScale()</code>
  

</h3>












<div id="zoomDuration"></div>

<h3>
<code>zoomDuration()</code>
  

</h3>












<div id="scrollElement"></div>

<h3>
<code>scrollElement()</code>
  

</h3>












<div id="addScrollEventListener"></div>

<h3>
<code>addScrollEventListener(handler)</code>
  

</h3>

Add a scroll event handler to the scroll element if it exists.


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
        handler
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>The scroll handler to add to the scroll element.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>?Function</code> a function to remove the specified handler, otherwise
undefined if the scroll element doesn't exist.
</div>


<!-- related link --><!-- end content block -->


<!-- end body block -->

