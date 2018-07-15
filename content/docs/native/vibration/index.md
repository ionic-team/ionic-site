---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "vibration"
title: "Vibration"
header_sub_title: "Class in module "
doc: "Vibration"
docType: "class"
---

<h1 class="api-title">Vibration</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/vibration/index.ts#L1">
  Improve this doc
</a>







<p>Vibrates the device</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-vibration">
    https://github.com/apache/cordova-plugin-vibration
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-vibration
$ npm install --save @ionic-native/vibration
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
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








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="vibrate" href="#vibrate"></a><code>vibrate(time)</code></h3>




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
      time</td>
    <td>
      <code>number</code>|<code>Array.&lt;number&gt;</code>
    </td>
    <td>
      <p>Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.</p>
</td>
  </tr>
  </tbody>
</table>







