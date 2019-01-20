---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "app-version"
title: "App Version"
header_sub_title: "Class in module "
doc: "App Version"
docType: "class"
---

<h1 class="api-title">App Version</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/app-version/index.ts#L1">
  Improve this doc
</a>







<p>Reads the version of your app from the target build settings.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-app-version</code>. For more info, please see the <a href="https://github.com/whiteoctober/cordova-plugin-app-version">Cordova App Version docs</a>.</p>


<p>Repo:
  <a href="https://github.com/whiteoctober/cordova-plugin-app-version">
    https://github.com/whiteoctober/cordova-plugin-app-version
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-app-version
$ npm install --save @ionic-native/app-version
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AppVersion } from &#39;@ionic-native/app-version&#39;;

constructor(private appVersion: AppVersion) { }

...


this.appVersion.getAppName();
this.appVersion.getPackageName();
this.appVersion.getVersionCode();
this.appVersion.getVersionNumber();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getAppName" href="#getAppName"></a><code>getAppName()</code></h3>


Returns the name of the app, e.g.: "My Awesome App"


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="getPackageName" href="#getPackageName"></a><code>getPackageName()</code></h3>


Returns the package name of the app, e.g.: "com.example.myawesomeapp"


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="getVersionCode" href="#getVersionCode"></a><code>getVersionCode()</code></h3>


Returns the build identifier of the app.
In iOS a string with the build version like "1.6095"
In Android a number generated from the version string, like 10203 for version "1.2.3"


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string | number&gt;</code> 
</div><h3><a class="anchor" name="getVersionNumber" href="#getVersionNumber"></a><code>getVersionNumber()</code></h3>


Returns the version of the app, e.g.: "1.2.3"


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div>





