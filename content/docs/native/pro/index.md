---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "pro"
title: "Pro"
header_sub_title: "Class in module "
doc: "Pro"
docType: "class"
---

<h1 class="api-title">Pro</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/pro/index.ts#L97">
  Improve this doc
</a>







<p>This plugin enables Ionic Pro services like live updates and error monitoring</p>


<p>Repo:
  <a href="https://github.com/ionic-team/cordova-plugin-ionic">
    https://github.com/ionic-team/cordova-plugin-ionic
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-ionic --save --variable APP_ID="XXXXXXXX" --variable CHANNEL_NAME="Channel"
$ npm install --save @ionic-native/pro
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Pro, AppInfo, DeployInfo } from &#39;@ionic-native/pro&#39;;


constructor(private pro: Pro) { }

// Get app info
this.pro.getAppInfo().then((res: AppInfo) =&gt; {
  console.log(res)
})

// Get live update info
this.pro.deploy.info().then((res: DeployInfo) =&gt; {
  console.log(res)
})
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="deploy" href="#deploy"></a><code>deploy()</code></h3>




Ionic Pro Deploy .js API.



<h3><a class="anchor" name="enableCrashLogging" href="#enableCrashLogging"></a><code>enableCrashLogging()</code></h3>


Not yet implemented


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="checkForPendingCrash" href="#checkForPendingCrash"></a><code>checkForPendingCrash()</code></h3>


Not yet implemented


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="loadPendingCrash" href="#loadPendingCrash"></a><code>loadPendingCrash()</code></h3>


Not yet implemented


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="forceCrash" href="#forceCrash"></a><code>forceCrash()</code></h3>


Not yet implemented


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="getAppInfo" href="#getAppInfo"></a><code>getAppInfo()</code></h3>


Get information about the currently running app


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves with current app info
</div>





