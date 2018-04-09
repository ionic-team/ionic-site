---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "app-minimize"
title: "App Minimize"
header_sub_title: "Class in module "
doc: "App Minimize"
docType: "class"
---

<h1 class="api-title">App Minimize</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/app-minimize/index.ts#L1">
  Improve this doc
</a>







<p>AppMinimize is a plugin to minimize the application on android devices</p>


<p>Repo:
  <a href="https://github.com/tomloprod/cordova-plugin-appminimize">
    https://github.com/tomloprod/cordova-plugin-appminimize
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-appminimize
$ npm install --save @ionic-native/app-minimize
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Platfrom } from &#39;ionic-angular&#39;;
import { AppMinimize } from &#39;@ionic-native/app-minimize&#39;;


constructor(private platform: Platform, private appMinimize: AppMinimize) { }

...

this.platform.registerBackButtonAction(() =&gt; {
   this.appMinimize.minimize();
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="minimize" href="#minimize"></a><code>minimize()</code></h3>


Minimizes the application


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





