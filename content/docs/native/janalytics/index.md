---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "janalytics"
title: "jAnalytics"
header_sub_title: "Class in module "
doc: "jAnalytics"
docType: "class"
---

<h1 class="api-title">jAnalytics</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/janalytics/index.ts#L1">
  Improve this doc
</a>







<p>This plugin does something</p>


<p>Repo:
  <a href="https://github.com/jpush/cordova-plugin-janalytics">
    https://github.com/jpush/cordova-plugin-janalytics
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY
$ npm install --save @ionic-native/janalytics
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { JAnalytics } from &#39;@ionic-native/JAnalytics&#39;;


constructor(private jAnalytics: JAnalytics) { }

...


this.jAnalytics.functionName(&#39;Hello&#39;, 123)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="init" href="#init"></a><code>init()</code></h3>


This function does something


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div><h3><a class="anchor" name="initCrashHandler" href="#initCrashHandler"></a><code>initCrashHandler()</code></h3>





<h3><a class="anchor" name="stopCrashHandler" href="#stopCrashHandler"></a><code>stopCrashHandler()</code></h3>





<h3><a class="anchor" name="onPageStart" href="#onPageStart"></a><code>onPageStart()</code></h3>





<h3><a class="anchor" name="onPageEnd" href="#onPageEnd"></a><code>onPageEnd()</code></h3>





<h3><a class="anchor" name="addCountEvent" href="#addCountEvent"></a><code>addCountEvent()</code></h3>





<h3><a class="anchor" name="addCalculateEvent" href="#addCalculateEvent"></a><code>addCalculateEvent()</code></h3>





<h3><a class="anchor" name="addLoginEvent" href="#addLoginEvent"></a><code>addLoginEvent()</code></h3>





<h3><a class="anchor" name="addRegisterEvent" href="#addRegisterEvent"></a><code>addRegisterEvent()</code></h3>





<h3><a class="anchor" name="addBrowseEvent" href="#addBrowseEvent"></a><code>addBrowseEvent()</code></h3>





<h3><a class="anchor" name="addPurchaseEvent" href="#addPurchaseEvent"></a><code>addPurchaseEvent()</code></h3>











