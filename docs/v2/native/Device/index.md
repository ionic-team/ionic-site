---
layout: "v2_fluid/docs_base"
version: "1.0.8"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/src/plugins/device.ts#L26'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>Access information about the underlying device and platform.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">let info = Device.getDevice();
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="getDevice"></div>
<h3><code>getDevice()</code>
  
</h3>

Returns the whole device object.







<div class="return-value" markdown="1">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Object</code> The device object.
</div>




<!-- methods on the class -->

<h2>Instance Methods</h2>

<div id="cordova"></div>

<h3>
<code>cordova()</code>
  

</h3>

Get the version of Cordova running on the device.











<div id="model"></div>

<h3>
<code>model()</code>
  

</h3>

The device.model returns the name of the device's model or product. The value is set
by the device manufacturer and may be different across versions of the same product.











<div id="platform"></div>

<h3>
<code>platform()</code>
  

</h3>

Get the device's operating system name.











<div id="uuid"></div>

<h3>
<code>uuid()</code>
  

</h3>

Get the device's Universally Unique Identifier (UUID).











<div id="version"></div>

<h3>
<code>version()</code>
  

</h3>

Get the operating system version.











<div id="manufacturer"></div>

<h3>
<code>manufacturer()</code>
  

</h3>

Get the device's manufacturer.











<div id="isVirtual"></div>

<h3>
<code>isVirtual()</code>
  

</h3>

Whether the device is running on a simulator.











<div id="serial"></div>

<h3>
<code>serial()</code>
  

</h3>

Get the device hardware serial number.









<!-- related link --><!-- end content block -->


<!-- end body block -->

