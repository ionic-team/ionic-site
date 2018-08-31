---
layout: "fluid/docs_base"
version: "4.12.1"
versionHref: "/docs/native"
path: ""
category: native
id: "unique-device-id"
title: "Unique Device ID"
header_sub_title: "Class in module "
doc: "Unique Device ID"
docType: "class"
---

<h1 class="api-title">Unique Device ID</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/unique-device-id/index.ts#L1">
  Improve this doc
</a>







<p>This plugin produces a unique, cross-install, app-specific device id.</p>


<p>Repo:
  <a href="https://github.com/Paldom/UniqueDeviceID">
    https://github.com/Paldom/UniqueDeviceID
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-uniquedeviceid
$ npm install --save @ionic-native/unique-device-id
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { UniqueDeviceID } from &#39;@ionic-native/unique-device-id&#39;;

constructor(private uniqueDeviceID: UniqueDeviceID) { }

...

this.uniqueDeviceID.get()
  .then((uuid: any) =&gt; console.log(uuid))
  .catch((error: any) =&gt; console.log(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="get" href="#get"></a><code>get()</code></h3>


Gets a unique, cross-install, app-specific device id.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves when something happens
</div>





