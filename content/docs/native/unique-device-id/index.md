---
layout: "fluid/docs_base"
version: "3.6.0"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/unique-device-id/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-uniquedeviceid
$ npm install --save @ionic-native/unique-device-id
</code></pre>
<p>Repo:
  <a href="https://github.com/Paldom/UniqueDeviceID">
    https://github.com/Paldom/UniqueDeviceID
  </a>
</p>


<p>This plugin produces a unique, cross-install, app-specific device id.</p>









<h2>Usage</h2>
<pre><code>import { UniqueDeviceID } from &#39;@ionic-native/unique-device-id&#39;;

constructor(private uniqueDeviceID: UniqueDeviceID) { }

...

this.uniqueDeviceID.get()
  .then((uuid: any) =&gt; console.log(uuid))
  .catch((error: any) =&gt; console.log(error));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="get" href="#get"></a><code>get()</code></h3>


Gets a unique, cross-install, app-specific device id.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that resolves when something happens
</div>





