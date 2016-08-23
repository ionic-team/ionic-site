---
layout: "v2_fluid/docs_base"
version: "1.3.17"
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
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone 8</li>
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
<h3><code>lockOrientation(The)</code>
  
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
      The
      
      
    </td>
    <td>
      
<code>orientation</code>
    </td>
    <td>
      <p>orientation which should be locked. Accepted values see table above.</p>

      
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












<!-- methods on the class --><h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>Accepted orientation values:
| Value                         | Description                                                                  |
|-------------------------------|------------------------------------------------------------------------------|
| portrait-primary              | The orientation is in the primary portrait mode.                             |
| portrait-secondary            | The orientation is in the secondary portrait mode.                           |
| landscape-primary             | The orientation is in the primary landscape mode.                            |
| landscape-secondary           | The orientation is in the secondary landscape mode.                          |
| portrait                      | The orientation is either portrait-primary or portrait-secondary (sensor).   |
| landscape                     | The orientation is either landscape-primary or landscape-secondary (sensor). |</p>


<!-- related link --><!-- end content block -->


<!-- end body block -->

