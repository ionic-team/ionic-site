---
layout: "v2_fluid/docs_base"
version: "3.3.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "adbmobfree"
title: "AdbMobFree"
header_sub_title: "Class in module "
doc: "AdbMobFree"
docType: "class"
---

<h1 class="api-title">AdbMobFree</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/admob-free/index.ts#L64">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-admob-free
$ npm install --save @ionic-native/admob-free
</code></pre>
<p>Repo:
  <a href="https://github.com/ratson/cordova-plugin-admob-free">
    https://github.com/ratson/cordova-plugin-admob-free
  </a>
</p>






<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code>import { AdMobFree, AdMobFreeBannerConfig } from &#39;ionic-native&#39;;


constructor(private admobFree: AdMobFree) { }


...


const bannerConfig: AdMobFreeBannerConfig = {
 // add your config here
 // for the sake of this example we will just use the test config
 isTesting: true,
 autoShow: true
};
this.admobFree.banner.config(bannerConfig);

this.admobFree.banner.prepare()
  .then(() =&gt; {
    // banner Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
  })
  .catch(e =&gt; console.log(e));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="events" href="#events"></a><code>events</code></h3>

Convenience constructor to get event names



<h3><a class="anchor" name="on" href="#on"></a><code>on(event)</code></h3>

Watch an event
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
      event</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>event name</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="banner" href="#banner"></a><code>banner</code></h3>




<h3><a class="anchor" name="interstitial" href="#interstitial"></a><code>interstitial</code></h3>




<h3><a class="anchor" name="rewardVideo" href="#rewardVideo"></a><code>rewardVideo</code></h3>










