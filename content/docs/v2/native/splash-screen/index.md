---
layout: "v2_fluid/docs_base"
version: "3.3.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "splash-screen"
title: "Splash Screen"
header_sub_title: "Class in module "
doc: "Splash Screen"
docType: "class"
---

<h1 class="api-title">Splash Screen</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/splash-screen/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-splashscreen
$ npm install --save @ionic-native/splash-screen
</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-splashscreen">
    https://github.com/apache/cordova-plugin-splashscreen
  </a>
</p>


<p>This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.</p>









<h2>Usage</h2>
<pre><code class="lang-typescript">import { SplashScreen } from &#39;@ionic-native/splash-screen&#39;;

constructor(private splashScreen: SplashScreen) { }

...

this.splashScreen.show();

this.splashScreen.hide();
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>




Shows the splashscreen



<h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>




Hides the splashscreen









