---
layout: "fluid/docs_base"
version: "2.0.0"
versionHref: "/docs/v3/2.0.0"
path: ""
category: api
id: "scroll"
title: "Scroll"
header_sub_title: "Ionic API Documentation"
doc: "Scroll"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/scroll/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="scroll" href="#scroll"></a>

Scroll
<h3><code>ion-scroll</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/scroll/scroll.ts#L2">
Improve this doc
</a>






<p>Scroll is a non-flexboxed scroll area that can scroll horizontally or vertically. <code>ion-Scroll</code> Can be used in places where you may not need a full page scroller, but a highly customized one, such as image scubber or comment scroller.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-scroll scrollX=&quot;true&quot;&gt;
&lt;/ion-scroll&gt;

&lt;ion-scroll scrollY=&quot;true&quot;&gt;
&lt;/ion-scroll&gt;

&lt;ion-scroll scrollX=&quot;true&quot; scrollY=&quot;true&quot;&gt;
&lt;/ion-scroll&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
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
      <td>scrollX</td>
      <td><code>boolean</code></td>
      <td><p> whether to enable scrolling along the X axis</p>
</td>
    </tr>
    
    <tr>
      <td>scrollY</td>
      <td><code>boolean</code></td>
      <td><p> whether to enable scrolling along the Y axis; requires the following CSS declaration: ion-scroll { white-space: nowrap; }</p>
</td>
    </tr>
    
    <tr>
      <td>zoom</td>
      <td><code>boolean</code></td>
      <td><p> whether to enable zooming</p>
</td>
    </tr>
    
    <tr>
      <td>maxZoom</td>
      <td><code>number</code></td>
      <td><p> set the max zoom amount for ion-scroll</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link --><!-- end content block -->


<!-- end body block -->

