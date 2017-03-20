---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "vibration"
title: "Vibration"
header_sub_title: "Class in module "
doc: "Vibration"
docType: "class"
---







<h1 class="api-title">
  
  Vibration
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/vibration/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>
  $ ionic plugin add cordova-plugin-vibration$ npm install --save @ionic-native/navigator
</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-vibration">
    https://github.com/apache/cordova-plugin-vibration
  </a>
</p>

<!-- description -->

<p>Vibrates the device</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows 8.1 Phone</li><li>Windows 8.1</li><li>Windows 10</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Vibration } from &#39;@ionic-native/vibration&#39;;

constructor(private vibration: Vibration) { }

...

// Vibrate the device for a second
// Duration is ignored on iOS.
this.vibration.vibrate(1000);

// Vibrate 2 seconds
// Pause for 1 second
// Vibrate for 2 seconds
// Patterns work on Android and Windows only
this.vibration.vibrate([2000,1000,2000]);

// Stop any current vibrations immediately
// Works on Android and Windows only
this.vibration.vibrate(0);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="vibrate"></div>
<h3>
  <code>vibrate(time)</code>
  

</h3>
Vibrates the device for given amount of time.
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
      time
      
      
    </td>
    <td>
      
<code>number</code>|<code>Array.&lt;number&gt;</code>
    </td>
    <td>
      <p>Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

