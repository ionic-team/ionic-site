---
layout: "fluid/docs_base"
version: "3.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "app-minimize"
title: "App Minimize"
header_sub_title: "Class in module "
doc: "App Minimize"
docType: "class"
---

<h1 class="api-title">App Minimize</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/app-minimize/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/tomloprod/cordova-plugin-appminimize.git
$ npm install --save @ionic-native/app-minimize
</code></pre>
<p>Repo:
  <a href="https://github.com/tomloprod/cordova-plugin-appminimize">
    https://github.com/tomloprod/cordova-plugin-appminimize
  </a>
</p>


<p>AppMinimize is a plugin to minimize the application on android devices</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { AppMinimize } from &#39;@ionic-native/app-minimize&#39;;


constructor(private appMinimize: AppMinimize) { }

...

this.plugin.minimize().then(
  success =&gt; console.log(&#39;Closed&#39;),
  err =&gt; console.log(&#39;Something went wrong&#39;)
);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="minimize" href="#minimize"></a><code>minimize()</code></h3>


Minimizes the application


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





