---
layout: "fluid/docs_base"
version: "3.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "android-full-screen"
title: "Android Full Screen"
header_sub_title: "Class in module "
doc: "Android Full Screen"
docType: "class"
---

<h1 class="api-title">Android Full Screen</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/android-full-screen/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-fullscreen
$ npm install --save @ionic-native/android-full-screen
</code></pre>
<p>Repo:
  <a href="https://github.com/mesmotronic/cordova-plugin-fullscreen">
    https://github.com/mesmotronic/cordova-plugin-fullscreen
  </a>
</p>


<p>This plugin enables developers to offer users a true full screen experience in their Cordova and PhoneGap apps for Android.
Using Android 4.0+, you can use true full screen in &quot;lean mode&quot;, the way you see in apps like YouTube, expanding the app right to the edges of the screen, hiding the status and navigation bars until the user next interacts. This is ideally suited to video or cut-scene content.
In Android 4.4+, however, you can now enter true full screen, fully interactive immersive mode. In this mode, your app will remain in true full screen until you choose otherwise; users can swipe down from the top of the screen to temporarily display the system UI.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { AndroidFullScreen } from &#39;@ionic-native/android-full-screen&#39;;

constructor(private androidFullScreen: AndroidFullScreen) { }

...

this.androidFullScreen.isImmersiveModeSupported()
  .then(() =&gt; this.androidFullScreen.immersiveMode())
  .catch((error: any) =&gt; console.log(error));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="isSupported" href="#isSupported"></a><code>isSupported()</code></h3>


Is this plugin supported?


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="isImmersiveModeSupported" href="#isImmersiveModeSupported"></a><code>isImmersiveModeSupported()</code></h3>


Is immersive mode supported?


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="immersiveWidth" href="#immersiveWidth"></a><code>immersiveWidth()</code></h3>


The width of the screen in immersive mode.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;number&gt;</code> 
</div><h3><a class="anchor" name="immersiveHeight" href="#immersiveHeight"></a><code>immersiveHeight()</code></h3>


The height of the screen in immersive mode.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;number&gt;</code> 
</div><h3><a class="anchor" name="leanMode" href="#leanMode"></a><code>leanMode()</code></h3>


Hide system UI until user interacts.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="showSystemUI" href="#showSystemUI"></a><code>showSystemUI()</code></h3>


Show system UI.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="showUnderStatusBar" href="#showUnderStatusBar"></a><code>showUnderStatusBar()</code></h3>


Extend your app underneath the status bar (Android 4.4+ only).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="showUnderSystemUI" href="#showUnderSystemUI"></a><code>showUnderSystemUI()</code></h3>


Extend your app underneath the system UI (Android 4.4+ only).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="immersiveMode" href="#immersiveMode"></a><code>immersiveMode()</code></h3>


Hide system UI and keep it hidden (Android 4.4+ only).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div>





