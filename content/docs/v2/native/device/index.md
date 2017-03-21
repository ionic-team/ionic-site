---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "device"
title: "Device"
header_sub_title: "Class in module "
doc: "Device"
docType: "class"
---







<h1 class="api-title">
  
  Device
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/device/index.ts#L3">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-device
$ npm install --save @ionic-native/device
</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-device">
    https://github.com/apache/cordova-plugin-device
  </a>
</p>

<!-- description -->

<p>Access information about the underlying device and platform.</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Device } from &#39;@ionic-native/device&#39;;

constructor(private device: Device) { }

...

console.log(&#39;Device UUID is: &#39; + this.device.uuid);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="cordova"></div>
<h3>
  <code>cordova</code>
  

</h3>
Get the version of Cordova running on the device.



<div id="model"></div>
<h3>
  <code>model</code>
  

</h3>
The device.model returns the name of the device's model or product. The value is set
by the device manufacturer and may be different across versions of the same product.



<div id="platform"></div>
<h3>
  <code>platform</code>
  

</h3>
Get the device's operating system name.



<div id="uuid"></div>
<h3>
  <code>uuid</code>
  

</h3>
Get the device's Universally Unique Identifier (UUID).



<div id="version"></div>
<h3>
  <code>version</code>
  

</h3>
Get the operating system version.



<div id="manufacturer"></div>
<h3>
  <code>manufacturer</code>
  

</h3>
Get the device's manufacturer.



<div id="isVirtual"></div>
<h3>
  <code>isVirtual</code>
  

</h3>
Whether the device is running on a simulator.



<div id="serial"></div>
<h3>
  <code>serial</code>
  

</h3>
Get the device hardware serial number.







<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

