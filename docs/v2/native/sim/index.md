---
layout: "v2_fluid/docs_base"
version: "1.3.17"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/sim.ts#L0">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-sim</code></pre>
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
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Sim } from &#39;ionic-native&#39;;


Sim.getSimInfo().then(
  (info) =&gt; console.log(&#39;Sim info: &#39;, info),
  (err) =&gt; console.log(&#39;Unable to get sim info: &#39;, err)
);
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="getSimInfo"></div>
<h3><code>getSimInfo()</code>
  
</h3>

Returns info from the SIM card.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> 
</div>




<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

