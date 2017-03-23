---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "couchbase-lite"
title: "Couchbase Lite"
header_sub_title: "Class in module "
doc: "Couchbase Lite"
docType: "class"
---







<h1 class="api-title">
  
  Couchbase Lite
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/couchbase-lite/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin
$ npm install --save @ionic-native/couchbase-lite
</code></pre>
<p>Repo:
  <a href="https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin">
    https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin
  </a>
</p>

<!-- description -->

<p>Plugin to install Couchbase Lite in your PhoneGap app on iOS or Android</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { CouchbaseLite } from &#39;@ionic-native/couchbase-lite&#39;;

constructor(private couchbase: CouchbaseLite) {

  couchbase.getURL()
    .then(url =&gt; console.log(url))
    .catch(error =&gt; console.error(error));

}
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="getURL"></div>
<h3>
  <code>getURL()</code>
  

</h3>
Get the database url


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves with the local database url
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

