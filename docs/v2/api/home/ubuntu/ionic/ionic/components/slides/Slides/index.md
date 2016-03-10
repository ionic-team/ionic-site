---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/slides/slides.ts#L12'>
Improve this doc
</a>






<p>Slides is a slide box implementation based on Swiper.js</p>


<h2>Component</h2>
<h3>selector: <code>ion-slides</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">@Page({
 template: `
    &lt;ion-slides pager (change)=&quot;onSlideChanged($event)&quot; (move)=&quot;onSlideMove($event)&quot;&gt;
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



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>pager</td>
      <td><code>boolean</code></td>
      <td><p> Whether the slide should show the pager or not</p>
</td>
    </tr>
    
    <tr>
      <td>options</td>
      <td><code>any</code></td>
      <td><p> Any slider options you want to configure, see swiper parameters: <a href="http://www.idangero.us/swiper/api/">http://www.idangero.us/swiper/api/</a></p>
</td>
    </tr>
    
    <tr>
      <td>zoom</td>
      <td><code>number</code></td>
      <td><p> Whether or not the slider can zoom in or out</p>
</td>
    </tr>
    
    <tr>
      <td>zoomDuration</td>
      <td><code>number</code></td>
      <td><p> how long it should take to zoom a slide</p>
</td>
    </tr>
    
    <tr>
      <td>zoomMax</td>
      <td><code>number</code></td>
      <td><p> the max scale an slide can be zoomed</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>change</td>
      <td><p> expression to evaluate when a slide has been changed</p>
</td>
    </tr>
    
    <tr>
      <td>slideChangeStart</td>
      <td><p> expression to evaluate when a slide change starts</p>
</td>
    </tr>
    
    <tr>
      <td>move</td>
      <td><p> expression to evaluate when a slide moves</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#slides'>Slides Component Docs</a>

Swiper.js:
The most modern mobile touch slider and framework with hardware accelerated transitions

http://www.idangero.us/swiper/

Copyright 2015, Vladimir Kharlampidi
The iDangero.us
http://www.idangero.us/

Licensed under MIT<!-- end content block -->


<!-- end body block -->

