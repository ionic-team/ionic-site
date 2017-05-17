---
layout: "fluid/docs_base"
version: "3.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "is-debug"
title: "Is Debug"
header_sub_title: "Class in module "
doc: "Is Debug"
docType: "class"
---

<h1 class="api-title">Is Debug</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/is-debug/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-is-debug
$ npm install --save @ionic-native/is-debug
</code></pre>
<p>Repo:
  <a href="https://github.com/mattlewis92/cordova-plugin-is-debug">
    https://github.com/mattlewis92/cordova-plugin-is-debug
  </a>
</p>


<p>Detect if the app is running in debug mode or not.
Debug mode is when the app is built and installed locally via xcode / eclipse / the cordova cli etc, compared to release mode when the app was downloaded from the app / play store via an end user.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { IsDebug } from &#39;@ionic-native/is-debug&#39;;

constructor(private isDebug: IsDebug) { }

...

this.isDebug.getIsDebug()
  .then((isDebug: boolean) =&gt; console.log(&#39;Is debug:&#39;, isDebug))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="getIsDebug" href="#getIsDebug"></a><code>getIsDebug()</code></h3>


Determine if an app was installed via xcode / eclipse / the ionic CLI etc


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with true if the app was installed via xcode / eclipse / the ionic CLI etc. It will resolve to false if the app was downloaded from the app / play store by the end user.
</div>





