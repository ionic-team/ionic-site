---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "devicefeedback"
title: "DeviceFeedback"
header_sub_title: "Class in module "
doc: "DeviceFeedback"
docType: "class"
---







<h1 class="api-title">
  
  DeviceFeedback
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/device-feedback.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-velda-devicefeedback</code></pre>
<p>Repo:
  <a href="https://github.com/VVelda/device-feedback">
    https://github.com/VVelda/device-feedback
  </a>
</p>

<!-- description -->

<p>Plugin that lets you provide haptic or acoustic feedback on Android devices.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { DeviceFeedback } from &#39;ionic-native&#39;;

DeviceFeedback.acoustic();

DeviceFeedback.haptic(0);

DeviceFeedback.isFeedbackEnabled()
  .then((feedback) =&gt; {
    console.log(feedback);
    // {
    //   acoustic: true,
    //   haptic: true
    // }
  });
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="acoustic"></div>
<h3><code>acoustic()</code>
  
</h3>




Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.










<div id="haptic"></div>
<h3><code>haptic(type)</code>
  
</h3>




Provide vibrate feedback to user, nevertheless respect user's tactile feedback setting as native feedback do.


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
      type
      
      
    </td>
    <td>
      
<code>Number</code>
    </td>
    <td>
      <p>Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="isFeedbackEnabled"></div>
<h3><code>isFeedbackEnabled()</code>
  
</h3>


Check if haptic and acoustic feedback is enabled by user settings.











<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

