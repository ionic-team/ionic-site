---
layout: "v2_fluid/docs_base"
version: "3.2.4"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "market"
title: "Market"
header_sub_title: "Class in module "
doc: "Market"
docType: "class"
---

<h1 class="api-title">Market</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/market/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-market
$ npm install --save @ionic-native/market
</code></pre>
<p>Repo:
  <a href="https://github.com/xmartlabs/cordova-plugin-market">
    https://github.com/xmartlabs/cordova-plugin-market
  </a>
</p>


<p>Opens an app&#39;s page in the market place (Google Play, App Store)</p>









<h2>Usage</h2>
<pre><code>import { Market } from &#39;@ionic-native/market&#39;;

constructor(private market: Market) { }

...

this.market.open(&#39;your.package.name&#39;);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="open" href="#open"></a><code>open(appId)</code></h3>




Opens an app in Google Play / App Store
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      appId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Package name</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="search" href="#search"></a><code>search(keyword)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Search apps by keyword
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      keyword</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Keyword</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





