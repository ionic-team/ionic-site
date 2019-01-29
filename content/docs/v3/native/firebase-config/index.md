---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "firebase-config"
title: "Firebase Config"
header_sub_title: "Class in module "
doc: "Firebase Config"
docType: "class"
---

<h1 class="api-title">Firebase Config<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/firebase-config/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/chemerisuk/cordova-plugin-firebase-config/issues">plugin repo</a>.
</p>




<p>Cordova plugin for Firebase Config</p>


<p>Repo:
  <a href="https://github.com/chemerisuk/cordova-plugin-firebase-config">
    https://github.com/chemerisuk/cordova-plugin-firebase-config
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-firebase-config
$ npm install --save @ionic-native/firebase-config@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FirebaseConfig } from &#39;@ionic-native/firebase-config&#39;;


constructor(private firebaseConfig: FirebaseConfig) { }

...


this.firebaseConfig.getBoolean(&#39;my_key&#39;)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="update" href="#update"></a><code>update(ttlSeconds)</code></h3>




Fetches remote config values with appropriate TTL and then activates them.

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
      ttlSeconds</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;null&gt;</code> 
</div>





