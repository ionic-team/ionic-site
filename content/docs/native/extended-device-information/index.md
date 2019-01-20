---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "extended-device-information"
title: "Extended Device Information"
header_sub_title: "Class in module "
doc: "Extended Device Information"
docType: "class"
---

<h1 class="api-title">Extended Device Information</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/extended-device-information/index.ts#L1">
  Improve this doc
</a>







<p>Retrieves additional device information from the Device Hardware</p>
<ul>
<li>memory</li>
<li>cpumhz</li>
<li>totalstorage</li>
<li>freestorage</li>
</ul>


<p>Repo:
  <a href="https://github.com/danielehrhardt/cordova-plugin-extended-device-information">
    https://github.com/danielehrhardt/cordova-plugin-extended-device-information
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-extended-device-information
$ npm install --save @ionic-native/extended-device-information
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { ExtendedDeviceInformation } from &#39;@ionic-native/extended-device-information&#39;;


constructor(private extendedDeviceInformation: ExtendedDeviceInformation) { }

...

console.log(&#39;The Memory is: &#39; + this.extendedDeviceInformation.memory);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="memory" href="#memory"></a><code>memory</code></h3>


Get the device's memory size



<h3><a class="anchor" name="cpumhz" href="#cpumhz"></a><code>cpumhz</code></h3>


Get the device's CPU mhz



<h3><a class="anchor" name="totalstorage" href="#totalstorage"></a><code>totalstorage</code></h3>


Get the total storage



<h3><a class="anchor" name="freestorage" href="#freestorage"></a><code>freestorage</code></h3>


Get the total storage









