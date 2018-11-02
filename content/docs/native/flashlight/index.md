---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "flashlight"
title: "Flashlight"
header_sub_title: "Class in module "
doc: "Flashlight"
docType: "class"
---

<h1 class="api-title">Flashlight</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/flashlight/index.ts#L1">
  Improve this doc
</a>







<p>This plugin allows you to switch the flashlight / torch of the device on and off.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-flashlight</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin">Flashlight plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-flashlight
$ npm install --save @ionic-native/flashlight
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Flashlight } from &#39;@ionic-native/flashlight&#39;;

constructor(private flashlight: Flashlight) { }

...

this.flashlight.switchOn();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="available" href="#available"></a><code>available()</code></h3>


Checks if the flashlight is available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with a boolean stating if the flashlight is available.
</div><h3><a class="anchor" name="switchOn" href="#switchOn"></a><code>switchOn()</code></h3>


Switches the flashlight on


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="switchOff" href="#switchOff"></a><code>switchOff()</code></h3>


Switches the flashlight off


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="toggle" href="#toggle"></a><code>toggle()</code></h3>


Toggles the flashlight


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isSwitchedOn" href="#isSwitchedOn"></a><code>isSwitchedOn()</code></h3>




Checks if the flashlight is turned on.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div>





