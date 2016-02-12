---
layout: "v2_fluid/docs_base"
version: "1.0.8"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "statusbar"
title: "StatusBar"
header_sub_title: "Class in module "
doc: "StatusBar"
docType: "class"
---








<h1 class="api-title">


StatusBar






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/src/plugins/statusbar.ts#L0'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>Manage the appearance of the native status bar.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">StatusBar.hide(); // Hide the bar

StatusBar.setStyle(StatusBar.LIGHT_CONTENT) // Good for dark backgrounds
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="overlaysWebView"></div>
<h3><code>overlaysWebView(doesOverlay)</code>
  
</h3>

Set whether the status bar overlays the main app view. The default
is true.



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
        doesOverlay
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>whether the status bar overlays the main app view.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>







<div id="styleDefault"></div>
<h3><code>styleDefault()</code>
  
</h3>











<div id="styleLightContent"></div>
<h3><code>styleLightContent()</code>
  
</h3>











<div id="styleBlackTranslucent"></div>
<h3><code>styleBlackTranslucent()</code>
  
</h3>











<div id="styleBlackOpaque"></div>
<h3><code>styleBlackOpaque()</code>
  
</h3>











<div id="backgroundColorByName"></div>
<h3><code>backgroundColorByName(name)</code>
  
</h3>

Set the status bar to a specific named color. Valid options:
black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.

iOS note: you must call StatusBar.setOverlay(false) to enable color changing.



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
        name
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the name of the color (from above)</p>

        
      </td>
    </tr>
    
  </tbody>
</table>







<div id="backgroundColorByHexString"></div>
<h3><code>backgroundColorByHexString(hex)</code>
  
</h3>

Set the status bar to a specific hex color (CSS shorthand supported!).

iOS note: you must call StatusBar.setOverlay(false) to enable color changing.



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
        hex
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the hex value of the color.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>







<div id="hide"></div>
<h3><code>hide(style)</code>
  
</h3>

Hide the StatusBar

Options:

StatusBar.DEFAULT
StatusBar.LIGHT_CONTENT
StatusBar.BLACK_TRANSLUCENT
StatusBar.BLACK_OPAQUE



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
        style
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        <p>the style from above</p>

        
      </td>
    </tr>
    
  </tbody>
</table>







<div id="show"></div>
<h3><code>show()</code>
  
</h3>

Show the StatusBar











<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

