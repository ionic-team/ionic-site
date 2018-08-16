---
layout: "fluid/docs_base"
version: "4.12.0"
versionHref: "/docs/native"
path: ""
category: native
id: "app-availability"
title: "App Availability"
header_sub_title: "Class in module "
doc: "App Availability"
docType: "class"
---

<h1 class="api-title">App Availability</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/app-availability/index.ts#L1">
  Improve this doc
</a>







<p>This plugin allows you to check if an app is installed on the user&#39;s device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.</p>
<p>Requires Cordova plugin: cordova-plugin-appavailability. For more info, please see the <a href="https://github.com/ohh2ahh/AppAvailability">AppAvailability plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/ohh2ahh/AppAvailability">
    https://github.com/ohh2ahh/AppAvailability
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-appavailability
$ npm install --save @ionic-native/app-availability
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AppAvailability } from &#39;@ionic-native/app-availability&#39;;
import { Platform } from &#39;ionic-angular&#39;;

constructor(private appAvailability: AppAvailability, private platform: Platform) { }

...

let app;

if (this.platform.is(&#39;ios&#39;)) {
  app = &#39;twitter://&#39;;
} else if (this.platform.is(&#39;android&#39;)) {
  app = &#39;com.twitter.android&#39;;
}

this.appAvailability.check(app)
  .then(
    (yes: boolean) =&gt; console.log(app + &#39; is available&#39;),
    (no: boolean) =&gt; console.log(app + &#39; is NOT available&#39;)
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="check" href="#check"></a><code>check(app)</code></h3>


Checks if an app is available on device
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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Package name on android, or URI scheme on iOS</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div>





