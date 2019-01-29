---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "lottie-splash-screen"
title: "Lottie Splash Screen"
header_sub_title: "Class in module "
doc: "Lottie Splash Screen"
docType: "class"
---

<h1 class="api-title">Lottie Splash Screen</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/lottie-splash-screen/index.ts#L1">
  Improve this doc
</a>







<p>Cordova plugin to show bodymovin/Lottie animations as the splash screen with Airbnb&#39;s Lottie wrapper</p>


<p>Repo:
  <a href="https://github.com/timbru31/cordova-plugin-lottie-splashscreen">
    https://github.com/timbru31/cordova-plugin-lottie-splashscreen
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ''
$ npm install --save @ionic-native/lottie-splash-screen@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { LottieSplashScreen } from &#39;@ionic-native/lottie-splash-screen&#39;;


constructor(private lottieSplashScreen: LottieSplashScreen) { }

...


this.lottieSplashScreen.show(&#39;www/lottie/animation.json&#39;, false, 1024, 768)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show(location,&nbsp;remote,&nbsp;width,&nbsp;height)</code></h3>




This function shows a Lottie splash screen. If no arguments are given, it defaults to the config.xml values, however you can pass (new) options here to change the behavior on runtime. (For easier reading the TypeScript notation is used)
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
      location</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Location of the Lottie JSON file that should be loaded.</p>
</td>
  </tr>
  
  <tr>
    <td>
      remote</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Toggles Lottie&#39;s remote mode which allows files to be downloaded/displayed from URLs. Example:</p>
</td>
  </tr>
  
  <tr>
    <td>
      width</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Width of the container that&#39;s rendering the Lottie animation</p>
</td>
  </tr>
  
  <tr>
    <td>
      height</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Height of the container that&#39;s rendering the Lottie animation</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>




This methods hides the current active Lottie splashscreen and destroys the views.









