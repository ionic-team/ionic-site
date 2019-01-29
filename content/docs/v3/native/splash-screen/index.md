---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "splash-screen"
title: "Splash Screen"
header_sub_title: "Class in module "
doc: "Splash Screen"
docType: "class"
---

<h1 class="api-title">Splash Screen</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/splash-screen/index.ts#L1">
  Improve this doc
</a>







<p>This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-splashscreen">
    https://github.com/apache/cordova-plugin-splashscreen
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-splashscreen
$ npm install --save @ionic-native/splash-screen@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SplashScreen } from &#39;@ionic-native/splash-screen&#39;;

constructor(private splashScreen: SplashScreen) { }

...

this.splashScreen.show();

this.splashScreen.hide();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>




Shows the splashscreen



<h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>




Hides the splashscreen









