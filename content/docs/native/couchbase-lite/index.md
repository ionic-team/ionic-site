---
layout: "fluid/docs_base"
version: "3.10.2"
versionHref: "/docs/native"
path: ""
category: native
id: "couchbase-lite"
title: "Couchbase Lite"
header_sub_title: "Class in module "
doc: "Couchbase Lite"
docType: "class"
---

<h1 class="api-title">Couchbase Lite</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/couchbase-lite/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin
$ npm install --save @ionic-native/couchbase-lite
</code></pre>
<p>Repo:
  <a href="https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin">
    https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin
  </a>
</p>


<p>Plugin to install Couchbase Lite in your PhoneGap app on iOS or Android</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { CouchbaseLite } from &#39;@ionic-native/couchbase-lite&#39;;

constructor(private couchbase: CouchbaseLite) {

  couchbase.getURL()
    .then(url =&gt; console.log(url))
    .catch(error =&gt; console.error(error));

}
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="getURL" href="#getURL"></a><code>getURL()</code></h3>




Get the database url


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves with the local database url
</div>





