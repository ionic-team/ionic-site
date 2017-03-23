---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "splash-screen"
title: "Splash Screen"
header_sub_title: "Class in module "
doc: "Splash Screen"
docType: "class"
---







<h1 class="api-title">
  
  Splash Screen
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/splash-screen/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-splashscreen
$ npm install --save @ionic-native/splash-screen
</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-splashscreen">
    https://github.com/apache/cordova-plugin-splashscreen
  </a>
</p>

<!-- description -->

<p>This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { SplashScreen } from &#39;@ionic-native/splash-screen&#39;;

constructor(private splashScreen: SplashScreen) { }

...

this.splashScreen.show();

this.splashScreen.hide();
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="show"></div>
<h3>
  <code>show()</code>
  

</h3>
Shows the splashscreen



<div id="hide"></div>
<h3>
  <code>hide()</code>
  

</h3>
Hides the splashscreen







<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

