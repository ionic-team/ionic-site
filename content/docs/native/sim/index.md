---
layout: "fluid/docs_base"
version: "3.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "sim"
title: "Sim"
header_sub_title: "Class in module "
doc: "Sim"
docType: "class"
---

<h1 class="api-title">Sim</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/sim/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-sim
$ npm install --save @ionic-native/sim
</code></pre>
<p>Repo:
  <a href="https://github.com/pbakondy/cordova-plugin-sim">
    https://github.com/pbakondy/cordova-plugin-sim
  </a>
</p>


<p>Gets info from the Sim card like the carrier name, mcc, mnc and country code and other system dependent info.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-sim</code>. For more info, please see the <a href="https://github.com/pbakondy/cordova-plugin-sim">Cordova Sim docs</a>.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { Sim } from &#39;@ionic-native/sim&#39;;


constructor(private sim: Sim) { }

...

this.sim.getSimInfo().then(
  (info) =&gt; console.log(&#39;Sim info: &#39;, info),
  (err) =&gt; console.log(&#39;Unable to get sim info: &#39;, err)
);

this.sim.hasReadPermission().then(
  (info) =&gt; console.log(&#39;Has permission: &#39;, info)
);

this.sim.requestReadPermission().then(
  () =&gt; console.log(&#39;Permission granted&#39;),
  () =&gt; console.log(&#39;Permission denied&#39;)
);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="getSimInfo" href="#getSimInfo"></a><code>getSimInfo()</code></h3>


Returns info from the SIM card.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hasReadPermission" href="#hasReadPermission"></a><code>hasReadPermission()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Check permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestReadPermission" href="#requestReadPermission"></a><code>requestReadPermission()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Request permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





