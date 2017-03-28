---
layout: "v2_fluid/docs_base"
version: "3.4.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "app-version"
title: "App Version"
header_sub_title: "Class in module "
doc: "App Version"
docType: "class"
---

<h1 class="api-title">App Version</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/app-version/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-app-version
$ npm install --save @ionic-native/app-version
</code></pre>
<p>Repo:
  <a href="https://github.com/whiteoctober/cordova-plugin-app-version">
    https://github.com/whiteoctober/cordova-plugin-app-version
  </a>
</p>


<p>Reads the version of your app from the target build settings.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-app-version</code>. For more info, please see the <a href="https://github.com/whiteoctober/cordova-plugin-app-version">Cordova App Version docs</a>.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { AppVersion } from &#39;@ionic-native/app-version&#39;;

constructor(private appVersion: AppVersion) { }

...


this.appVersion.getAppName();
this.appVersion.getPackageName();
this.appVersion.getVersionCode();
this.appVersion.getVersionNumber();
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="getAppName" href="#getAppName"></a><code>getAppName()</code></h3>


Returns the name of the app


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getPackageName" href="#getPackageName"></a><code>getPackageName()</code></h3>


Returns the package name of the app


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getVersionCode" href="#getVersionCode"></a><code>getVersionCode()</code></h3>


Returns the build identifier of the app


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getVersionNumber" href="#getVersionNumber"></a><code>getVersionNumber()</code></h3>


Returns the version of the app


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





