---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "sim"
title: "Sim"
header_sub_title: "Class in module "
doc: "Sim"
docType: "class"
---







<h1 class="api-title">
  
  Sim
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/sim/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-sim
$ npm install --save @ionic-native/Sim
</code></pre>
<p>Repo:
  <a href="https://github.com/pbakondy/cordova-plugin-sim">
    https://github.com/pbakondy/cordova-plugin-sim
  </a>
</p>

<!-- description -->

<p>Gets info from the Sim card like the carrier name, mcc, mnc and country code and other system dependent info.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-sim</code>. For more info, please see the <a href="https://github.com/pbakondy/cordova-plugin-sim">Cordova Sim docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

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




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="getSimInfo"></div>
<h3>
  <code>getSimInfo()</code>
  

</h3>
Returns info from the SIM card.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="hasReadPermission"></div>
<h3>
  <code>hasReadPermission()</code>
  

</h3>
Check permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="requestReadPermission"></div>
<h3>
  <code>requestReadPermission()</code>
  

</h3>
Request permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

