---
layout: "v2_fluid/docs_base"
version: "1.0.8"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "geolocation"
title: "Geolocation"
header_sub_title: "Class in module "
doc: "Geolocation"
docType: "class"
---








<h1 class="api-title">


Geolocation






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/src/plugins/geolocation.ts#L4'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>Get geolocation data.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">Geolocation.getCurrentPosition().then((resp) =&gt; {
 //resp.coords.latitude
 //resp.coords.longitude
})

let watch = Geolocation.watchPosition();
watch.subscribe((data) =&gt; {
 //data.coords.latitude
 //data.coords.longitude
})
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="getCurrentPosition"></div>
<h3><code>getCurrentPosition()</code>
  
</h3>











<div id="watchPosition"></div>
<h3><code>watchPosition()</code>
  
</h3>












<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

