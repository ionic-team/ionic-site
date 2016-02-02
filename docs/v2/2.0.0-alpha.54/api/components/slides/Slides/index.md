---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.54"
versionHref: "/docs/v2/2.0.0-alpha.54"
path: ""
category: api
id: "slides"
title: "Slides"
header_sub_title: "Class in module "
doc: "Slides"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/slides/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Slides






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/slides/slides.ts#L12'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>Slides is a slide box implementation based on Swiper.js</p>
<p>Swiper.js:
The most modern mobile touch slider and framework with hardware accelerated transitions</p>
<p><a href="http://www.idangero.us/swiper/">http://www.idangero.us/swiper/</a></p>
<p>Copyright 2015, Vladimir Kharlampidi
The iDangero.us
<a href="http://www.idangero.us/">http://www.idangero.us/</a></p>
<p>Licensed under MIT</p>


<h2>Component</h2>
<h3>selector: <code>ion-slides</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">@Page({
 template: `
    &lt;ion-slides pager (change)=&quot;onSlideChanged($event)&quot; loop=&quot;true&quot; autoplay=&quot;true&quot;&gt;
     &lt;ion-slide&gt;
       &lt;h3&gt;Thank you for choosing the Awesome App!&lt;/h3&gt;
       &lt;p&gt;
         The number one app for everything awesome.
       &lt;/p&gt;
     &lt;/ion-slide&gt;
     &lt;ion-slide&gt;
       &lt;h3&gt;Using Awesome&lt;/h3&gt;
        &lt;div id=&quot;list&quot;&gt;
          &lt;h5&gt;Just three steps:&lt;/h5&gt;
          &lt;ol&gt;
            &lt;li&gt;Be awesome&lt;/li&gt;
            &lt;li&gt;Stay awesome&lt;/li&gt;
            &lt;li&gt;There is no step 3&lt;/li&gt;
          &lt;/ol&gt;
        &lt;/div&gt;
     &lt;/ion-slide&gt;
     &lt;ion-slide&gt;
       &lt;h3&gt;Any questions?&lt;/h3&gt;
     &lt;/ion-slide&gt;
   &lt;/ion-slides&gt;
   `
})
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
autoplay
</td>


<td>
Boolean
</td>


<td>
whether or not the slides should automatically change
</td>
</tr>

<tr>
<td>
loop
</td>


<td>
Boolean
</td>


<td>
whether the slides should loop from the last slide back to the first
</td>
</tr>

<tr>
<td>
bounce
</td>


<td>
Boolean
</td>


<td>
whether the slides should bounce
</td>
</tr>

<tr>
<td>
index
</td>


<td>
Number
</td>


<td>
The slide index to start on
</td>
</tr>

<tr>
<td>
pager
</td>


<td>

</td>


<td>
add this property to enable the slide pager
</td>
</tr>

<tr>
<td>
change
</td>


<td>
Any
</td>


<td>
expression to evaluate when a slide has been changed
</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h2>Methods</h2>

<div id="rapidUpdate"></div>

<h3>
<code>rapidUpdate()</code>
  

</h3>












<div id="showPager"></div>

<h3>
<code>showPager()</code>
  

</h3>












<div id="slider"></div>

<h3>
<code>slider()</code>
  

</h3>












<div id="maxScale"></div>

<h3>
<code>maxScale()</code>
  

</h3>












<div id="zoomElement"></div>

<h3>
<code>zoomElement()</code>
  

</h3>












<div id="zoomGesture"></div>

<h3>
<code>zoomGesture()</code>
  

</h3>












<div id="scale"></div>

<h3>
<code>scale()</code>
  

</h3>












<div id="zoomLastPosX"></div>

<h3>
<code>zoomLastPosX()</code>
  

</h3>












<div id="zoomLastPosY"></div>

<h3>
<code>zoomLastPosY()</code>
  

</h3>












<div id="viewportWidth"></div>

<h3>
<code>viewportWidth()</code>
  

</h3>












<div id="viewportHeight"></div>

<h3>
<code>viewportHeight()</code>
  

</h3>












<div id="enableZoom"></div>

<h3>
<code>enableZoom()</code>
  

</h3>












<div id="touch"></div>

<h3>
<code>touch()</code>
  

</h3>












<div id="autoplay"></div>

<h3>
<code>autoplay()</code>
  

</h3>












<div id="loop"></div>

<h3>
<code>loop()</code>
  

</h3>












<div id="index"></div>

<h3>
<code>index()</code>
  

</h3>












<div id="bounce"></div>

<h3>
<code>bounce()</code>
  

</h3>












<div id="pager"></div>

<h3>
<code>pager()</code>
  

</h3>












<div id="options"></div>

<h3>
<code>options()</code>
  

</h3>












<div id="zoom"></div>

<h3>
<code>zoom()</code>
  

</h3>












<div id="zoomDuration"></div>

<h3>
<code>zoomDuration()</code>
  

</h3>












<div id="zoomMax"></div>

<h3>
<code>zoomMax()</code>
  

</h3>












<div id="change"></div>

<h3>
<code>change()</code>
  

</h3>










<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#slides'>Slides Component Docs</a><!-- end content block -->


<!-- end body block -->

