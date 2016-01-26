---
layout: "v2_fluid/docs_base"
version: "1.0.8"
versionHref: "/docs/v2/platform"
path: ""
category: platform
id: "{{Camera | slugify}}"
title: "Camera"
header_sub_title: "Class in module "
doc: "Camera"
docType: "class"
---








<h1 class="api-title">


Camera






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/src/plugins/camera.ts#L0'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>Take a photo or capture video.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-camera</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-camera">Cordova Camera Plugin Docs</a>.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">Camera.getPicture(options).then((imageData) =&gt; {
 // imageData is either a base64 encoded string or a file URI
 // If it&#39;s base64:
 let base64Image = &quot;data:image/jpeg;base64,&quot; + imageData;
}, (err) =&gt; {
});
</code></pre>




<!-- @property tags -->


<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

