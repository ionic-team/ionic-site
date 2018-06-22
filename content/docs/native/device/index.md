---
layout: "fluid/docs_base"
version: "4.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "device"
title: "Device"
header_sub_title: "Class in module "
doc: "Device"
docType: "class"
---

<h1 class="api-title">Device</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/device/index.ts#L3">
  Improve this doc
</a>







<p>Access information about the underlying device and platform.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-device">
    https://github.com/apache/cordova-plugin-device
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-device
$ npm install --save @ionic-native/device
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>macOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Device } from &#39;@ionic-native/device&#39;;

constructor(private device: Device) { }

...

console.log(&#39;Device UUID is: &#39; + this.device.uuid);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="cordova" href="#cordova"></a><code>cordova</code></h3>


Get the version of Cordova running on the device.



<h3><a class="anchor" name="model" href="#model"></a><code>model</code></h3>


The device.model returns the name of the device's model or product. The value is set
by the device manufacturer and may be different across versions of the same product.



<h3><a class="anchor" name="platform" href="#platform"></a><code>platform</code></h3>


Get the device's operating system name.



<h3><a class="anchor" name="uuid" href="#uuid"></a><code>uuid</code></h3>


Get the device's Universally Unique Identifier (UUID).



<h3><a class="anchor" name="version" href="#version"></a><code>version</code></h3>


Get the operating system version.



<h3><a class="anchor" name="manufacturer" href="#manufacturer"></a><code>manufacturer</code></h3>


Get the device's manufacturer.



<h3><a class="anchor" name="isVirtual" href="#isVirtual"></a><code>isVirtual</code></h3>


Whether the device is running on a simulator.



<h3><a class="anchor" name="serial" href="#serial"></a><code>serial</code></h3>


Get the device hardware serial number.









