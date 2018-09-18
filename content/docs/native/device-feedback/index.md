---
layout: "fluid/docs_base"
version: "4.14.0"
versionHref: "/docs/native"
path: ""
category: native
id: "device-feedback"
title: "Device Feedback"
header_sub_title: "Class in module "
doc: "Device Feedback"
docType: "class"
---

<h1 class="api-title">Device Feedback</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/device-feedback/index.ts#L9">
  Improve this doc
</a>







<p>Plugin that lets you provide haptic or acoustic feedback on Android devices.</p>


<p>Repo:
  <a href="https://github.com/VVelda/device-feedback">
    https://github.com/VVelda/device-feedback
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-velda-devicefeedback
$ npm install --save @ionic-native/device-feedback
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { DeviceFeedback } from &#39;@ionic-native/device-feedback&#39;;

constructor(private deviceFeedback: DeviceFeedback) { }

...


this.deviceFeedback.acoustic();

this.deviceFeedback.haptic(0);

this.deviceFeedback.isFeedbackEnabled().then(feedback =&gt; {
    console.log(feedback);
    // {
    //   acoustic: true,
    //   haptic: true
    // }
  });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="acoustic" href="#acoustic"></a><code>acoustic()</code></h3>




Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.



<h3><a class="anchor" name="haptic" href="#haptic"></a><code>haptic(type)</code></h3>




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
      type</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="isFeedbackEnabled" href="#isFeedbackEnabled"></a><code>isFeedbackEnabled()</code></h3>


Check if haptic and acoustic feedback is enabled by user settings.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DeviceFeedbackEnabled&gt;</code> 
</div>





