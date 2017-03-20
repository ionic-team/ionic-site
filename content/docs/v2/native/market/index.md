---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "market"
title: "Market"
header_sub_title: "Class in module "
doc: "Market"
docType: "class"
---







<h1 class="api-title">
  
  Market
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/market/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-market
$ npm install --save @ionic-native/
</code></pre>
<p>Repo:
  <a href="https://github.com/xmartlabs/cordova-plugin-market">
    https://github.com/xmartlabs/cordova-plugin-market
  </a>
</p>

<!-- description -->

<p>Opens an app&#39;s page in the market place (Google Play, App Store)</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Market } from &#39;@ionic-native/market&#39;;

constructor(private market: Market) { }

...

this.market.open(&#39;your.package.name&#39;);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="open"></div>
<h3>
  <code>open(appId)</code>
  

</h3>
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
      appId
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="search"></div>
<h3>
  <code>search(keyword)</code>
  

</h3>
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
      keyword
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

