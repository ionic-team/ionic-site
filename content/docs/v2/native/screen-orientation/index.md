---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "screen-orientation"
title: "Screen Orientation"
header_sub_title: "Class in module "
doc: "Screen Orientation"
docType: "class"
---







<h1 class="api-title">
  
  Screen Orientation
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/screen-orientation.ts#L2">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-screen-orientation</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-screen-orientation">
    https://github.com/apache/cordova-plugin-screen-orientation
  </a>
</p>

<!-- description -->

<p>Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, WP8 and Blackberry 10.
This plugin is based on an early version of Screen Orientation API so the api does not currently match the current spec.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-screen-orientation</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-screen-orientation">Screen Orientation plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { ScreenOrientation } from &#39;ionic-native&#39;;


// set to either landscape
ScreenOrientation.lockOrientation(&#39;landscape&#39;);

// allow user rotate
ScreenOrientation.unlockOrientation();
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="lockOrientation"></div>
<h3><code>lockOrientation(orientation)</code>
  
</h3>




Lock the orientation to the passed value.
See below for accepted values


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
      orientation
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The orientation which should be locked. Accepted values see table below.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="unlockOrientation"></div>
<h3><code>unlockOrientation()</code>
  
</h3>




Unlock and allow all orientations.










<div id="orientation"></div>
<h3><code>orientation()</code>
  
</h3>


Get the current orientation of the device.











<!-- methods on the class -->

<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>Accepted orientation values:</p>
<table>
<thead>
<tr>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>portrait-primary</td>
<td>The orientation is in the primary portrait mode.</td>
</tr>
<tr>
<td>portrait-secondary</td>
<td>The orientation is in the secondary portrait mode.</td>
</tr>
<tr>
<td>landscape-primary</td>
<td>The orientation is in the primary landscape mode.</td>
</tr>
<tr>
<td>landscape-secondary</td>
<td>The orientation is in the secondary landscape mode.</td>
</tr>
<tr>
<td>portrait</td>
<td>The orientation is either portrait-primary or portrait-secondary (sensor).</td>
</tr>
<tr>
<td>landscape</td>
<td>The orientation is either landscape-primary or landscape-secondary (sensor).</td>
</tr>
</tbody>
</table>


<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

