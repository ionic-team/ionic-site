---
layout: "v2_fluid/docs_base"
version: "1.2.1"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/vibration.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-vibration</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-vibration">
    https://github.com/apache/cordova-plugin-vibration
  </a>
</p>

<!-- description -->

<p>Vibrates the device</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {Vibration} from &#39;ionic-native&#39;;



// Vibrate the device for a second
Vibration.vibrate(1000);

// Vibrate 2 seconds
// Pause for 1 second
// Vibrate for 2 seconds
// Patterns work on Android and Windows only
Vibration.vibrate([2000,1000,2000]);

// Stop any current vibrations immediately
// Works on Android and Windows only
Vibration.vibrate(0);
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="vibrate"></div>
<h3><code>vibrate(time)</code>

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
      
<code>Number</code>|<code>Array.&lt;Number&gt;</code>
    </td>
    <td>
      <p>Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

