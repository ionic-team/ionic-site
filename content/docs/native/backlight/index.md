---
layout: "fluid/docs_base"
version: "4.15.0"
versionHref: "/docs/native"
path: ""
category: native
id: "backlight"
title: "Backlight"
header_sub_title: "Class in module "
doc: "Backlight"
docType: "class"
---

<h1 class="api-title">Backlight<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/backlight/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/mebibou/cordova-plugin-backlight/issues">plugin repo</a>.
</p>




<p>This plugin adds turning on/off the device backlight.</p>


<p>Repo:
  <a href="https://github.com/mebibou/cordova-plugin-backlight">
    https://github.com/mebibou/cordova-plugin-backlight
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-backlight
$ npm install --save @ionic-native/backlight
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Backlight } from &#39;@ionic-native/backlight&#39;;

constructor(private backlight: Backlight) { }

...

// Turn backlight on
this.backlight.on().then(() =&gt; console.log(&#39;backlight on&#39;));

// Turn backlight off
this.backlight.off().then(() =&gt; console.log(&#39;backlight off&#39;));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="on" href="#on"></a><code>on()</code></h3>


This function turns backlight on


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the backlight is on
</div><h3><a class="anchor" name="off" href="#off"></a><code>off()</code></h3>


This function turns backlight off


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the backlight is off
</div>





