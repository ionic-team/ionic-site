---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "uptime"
title: "Uptime"
header_sub_title: "Class in module "
doc: "Uptime"
docType: "class"
---

<h1 class="api-title">Uptime</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/uptime/index.ts#L1">
  Improve this doc
</a>







<p>This plugin return the device uptime, without sleep time.</p>


<p>Repo:
  <a href="https://github.com/s1lviu/cordova-plugin-uptime">
    https://github.com/s1lviu/cordova-plugin-uptime
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-uptime
$ npm install --save @ionic-native/uptime
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Uptime } from &#39;@ionic-native/uptime&#39;;

constructor(private uptime: Uptime) { }

...

this.uptime.getUptime()
  .then(uptime =&gt; console.log(uptime))
  .catch(error =&gt; console.log(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getUptime" href="#getUptime"></a><code>getUptime()</code></h3>


This function return system uptime


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a promise that return the uptime in milliseconds
</div>





