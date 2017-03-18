---
layout: "v2_fluid/docs_base"
version: "2.9.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "uniquedeviceid"
title: "UniqueDeviceID"
header_sub_title: "Class in module "
doc: "UniqueDeviceID"
docType: "class"
---







<h1 class="api-title">
  
  UniqueDeviceID
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/unique-device-id.ts#L0">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-uniquedeviceid</code></pre>
<p>Repo:
  <a href="https://github.com/Paldom/UniqueDeviceID">
    https://github.com/Paldom/UniqueDeviceID
  </a>
</p>

<!-- description -->

<p>This plugin produces a unique, cross-install, app-specific device id.</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { UniqueDeviceID } from &#39;ionic-native&#39;;

UniqueDeviceID.get()
  .then((uuid: any) =&gt; console.log(uuid))
  .catch((error: any) =&gt; console.log(error));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="get"></div>
<h3><code>get()</code>
  
</h3>


Gets a unique, cross-install, app-specific device id.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Returns a promise that resolves when something happens
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

