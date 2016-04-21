---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "spinner"
title: "Spinner"
header_sub_title: "Ionic API Documentation"
doc: "Spinner"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="spinner" href="#spinner"></a>

Spinner






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/spinner/spinner.ts#L3">
Improve this doc
</a>






<p>The <code>ion-spinner</code> component provides a variety of animated SVG spinners.
Spinners enables you to give users feedback that the app is actively
processing/thinking/waiting/chillin’ out, or whatever you’d like it to indicate.
By default, the <code>ion-refresher</code> feature uses this spinner component while it&#39;s
the refresher is in the <code>refreshing</code> state.</p>
<p>Ionic offers a handful of spinners out of the box, and by default, it will use
the appropriate spinner for the platform on which it’s running.</p>
<table class="table spinner-table">
 <tr>
   <th>
     <code>ios</code>
   </th>
   <td>
     <ion-spinner name="ios"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>ios-small</code>
   </th>
   <td>
     <ion-spinner name="ios-small"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>bubbles</code>
   </th>
   <td>
     <ion-spinner name="bubbles"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>circles</code>
   </th>
   <td>
     <ion-spinner name="circles"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>crescent</code>
   </th>
   <td>
     <ion-spinner name="crescent"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>dots</code>
   </th>
   <td>
     <ion-spinner name="dots"></ion-spinner>
   </td>
 </tr>
</table>

<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-spinner</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>The following code would use the default spinner for the platform it&#39;s
running from. If it&#39;s neither iOS or Android, it&#39;ll default to use <code>ios</code>.</p>
<pre><code class="lang-html">&lt;ion-spinner&gt;&lt;/ion-spinner&gt;
</code></pre>
<p>By setting the <code>name</code> property, you can specify which predefined spinner to
use, no matter what the platform is.</p>
<pre><code class="lang-html">&lt;ion-spinner name=&quot;bubbles&quot;&gt;&lt;/ion-spinner&gt;
</code></pre>
<h2 id="styling-svg-with-css">Styling SVG with CSS</h2>
<p>One cool thing about SVG is its ability to be styled with CSS! One thing to note
is that some of the CSS properties on an SVG element have different names. For
example, SVG uses the term <code>stroke</code> instead of <code>border</code>, and <code>fill</code> instead
of <code>background-color</code>.</p>
<pre><code class="lang-css">ion-spinner svg {
  width: 28px;
  height: 28px;
  stroke: #444;
  fill: #222;
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="ngOnInit"></div>

<h3>
<a class="anchor" name="ngOnInit" href="#ngOnInit"></a>
<code>ngOnInit()</code>
  

</h3>












<div id="load"></div>

<h3>
<a class="anchor" name="load" href="#load"></a>
<code>load()</code>
  

</h3>











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
      <td>name</td>
      <td><code>string</code></td>
      <td><p> SVG spinner name.</p>
</td>
    </tr>
    
    <tr>
      <td>duration</td>
      <td><code>string</code></td>
      <td><p> How long it takes it to do one loop.</p>
</td>
    </tr>
    
    <tr>
      <td>paused</td>
      <td><code>string</code></td>
      <td><p> If the animation is paused or not. Defaults to <code>false</code>.</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link --><!-- end content block -->


<!-- end body block -->

