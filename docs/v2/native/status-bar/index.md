---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "status-bar"
title: "Status Bar"
header_sub_title: "Class in module "
doc: "Status Bar"
docType: "class"
---








<h1 class="api-title">

  
  Status Bar
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/statusbar.ts#L2'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-statusbar</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-statusbar">
    https://github.com/apache/cordova-plugin-statusbar
  </a>
</p>

<!-- description -->

<p>Manage the appearance of the native status bar.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-statusbar</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-statusbar">StatusBar plugin docs</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {StatusBar} from &#39;ionic-native&#39;;



StatuBar.overlaysWebView(true);

StatusBar.
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
      
<code>boolean</code>
    </td>
    <td>
      <p>Whether the status bar overlays the main app view.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="styleDefault"></div>
<h3><code>styleDefault()</code>

</h3>



Use the default statusbar (dark text, for light backgrounds).










<div id="styleLightContent"></div>
<h3><code>styleLightContent()</code>

</h3>



Use the lightContent statusbar (light text, for dark backgrounds).










<div id="styleBlackTranslucent"></div>
<h3><code>styleBlackTranslucent()</code>

</h3>



Use the blackTranslucent statusbar (light text, for dark backgrounds).










<div id="styleBlackOpaque"></div>
<h3><code>styleBlackOpaque()</code>

</h3>



Use the blackOpaque statusbar (light text, for dark backgrounds).










<div id="backgroundColorByName"></div>
<h3><code>backgroundColorByName(colorName)</code>

</h3>



Set the status bar to a specific named color. Valid options:
black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.

iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.



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
      colorName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The name of the color (from above)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="backgroundColorByHexString"></div>
<h3><code>backgroundColorByHexString(hexString)</code>

</h3>



Set the status bar to a specific hex color (CSS shorthand supported!).

iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.



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
      hexString
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The hex value of the color.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="hide"></div>
<h3><code>hide()</code>

</h3>



Hide the StatusBar










<div id="show"></div>
<h3><code>show()</code>

</h3>



Show the StatusBar










<div id="isVisible"></div>
<h3><code>isVisible()</code>

</h3>

Whether the StatusBar is currently visible or not.











<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

