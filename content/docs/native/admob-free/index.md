---
layout: "fluid/docs_base"
version: "4.12.1"
versionHref: "/docs/native"
path: ""
category: native
id: "admob-free"
title: "AdMob Free"
header_sub_title: "Class in module "
doc: "AdMob Free"
docType: "class"
---

<h1 class="api-title">AdMob Free</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/admob-free/index.ts#L64">
  Improve this doc
</a>







<p>A free, no ad-sharing version of Google AdMob plugin for Cordova.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-admob-free</code>. For more info, please see the <a href="https://github.com/ratson/cordova-plugin-admob-free">AdMob Free plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/ratson/cordova-plugin-admob-free">
    https://github.com/ratson/cordova-plugin-admob-free
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-admob-free
$ npm install --save @ionic-native/admob-free
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AdMobFree, AdMobFreeBannerConfig } from &#39;@ionic-native/admob-free&#39;;


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








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="events" href="#events"></a><code>events</code></h3>

Convenience object to get event names


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

Returns the AdMobFreeBanner object


<h3><a class="anchor" name="interstitial" href="#interstitial"></a><code>interstitial</code></h3>

Returns the AdMobFreeInterstitial object


<h3><a class="anchor" name="rewardVideo" href="#rewardVideo"></a><code>rewardVideo</code></h3>

Returns the AdMobFreeRewardVideo object




<h2><a class="anchor" name="AdMobFreeBanner" href="#AdMobFreeBanner"></a>AdMobFreeBanner</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="config" href="#config"></a><code>config(options)</code></h3>




Update config
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
      options</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>AdMobFreeBannerConfig</code> 
</div><h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>




Hide the banner


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="prepare" href="#prepare"></a><code>prepare()</code></h3>




Create banner


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>




Remove the banner


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>




Show the banner


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h2><a class="anchor" name="AdMobFreeInterstitial" href="#AdMobFreeInterstitial"></a>AdMobFreeInterstitial</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="config" href="#config"></a><code>config(options)</code></h3>




Update config
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
      options</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>AdMobFreeInterstitialConfig</code> 
</div><h3><a class="anchor" name="isReady" href="#isReady"></a><code>isReady()</code></h3>




Check if interstitial is ready


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="prepare" href="#prepare"></a><code>prepare()</code></h3>




Prepare interstitial


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>




Show the interstitial


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h2><a class="anchor" name="AdMobFreeRewardVideo" href="#AdMobFreeRewardVideo"></a>AdMobFreeRewardVideo</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="config" href="#config"></a><code>config(options)</code></h3>




Update config
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
      options</td>
    <td>
      <code>AdMobFreeRewardVideoConfig</code>
    </td>
    <td>
      <p>Admob reward config</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>AdMobFreeRewardVideoConfig</code> 
</div><h3><a class="anchor" name="isReady" href="#isReady"></a><code>isReady()</code></h3>




Check if reward video is ready


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="prepare" href="#prepare"></a><code>prepare()</code></h3>




Prepare reward video


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>




Show the reward video


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>



<h2><a class="anchor" name="AdMobFreeBannerConfig" href="#AdMobFreeBannerConfig"></a>AdMobFreeBannerConfig</h2>

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
      id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Ad Unit ID</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      isTesting
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Receiving test ad</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      autoShow
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Auto show ad when loaded</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bannerAtTop
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true, to put banner at top</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      overlap
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true, to allow banner overlap WebView</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      offsetTopBar
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to avoid ios7 status bar overlap</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      size
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Banner  size</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AdMobFreeInterstitialConfig" href="#AdMobFreeInterstitialConfig"></a>AdMobFreeInterstitialConfig</h2>

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
      id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Ad Unit ID</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      isTesting
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Receiving test ad</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      autoShow
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Auto show ad when loaded</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="AdMobFreeRewardVideoConfig" href="#AdMobFreeRewardVideoConfig"></a>AdMobFreeRewardVideoConfig</h2>

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
      id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Ad Unit ID</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      isTesting
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Receiving test ad</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      autoShow
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Auto show ad when loaded</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





