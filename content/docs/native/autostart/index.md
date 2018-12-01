---
layout: "fluid/docs_base"
version: "4.18.0"
versionHref: "/docs/native"
path: ""
category: native
id: "autostart"
title: "Autostart"
header_sub_title: "Class in module "
doc: "Autostart"
docType: "class"
---

<h1 class="api-title">Autostart</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/autostart/index.ts#L1">
  Improve this doc
</a>







<p>This plugin automatically starts your Android app after every boot or auto-update.
You can enable or disable the autostart function in your app.</p>


<p>Repo:
  <a href="https://github.com/ToniKorin/cordova-plugin-autostart">
    https://github.com/ToniKorin/cordova-plugin-autostart
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-autostart
$ npm install --save @ionic-native/autostart
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Autostart } from &#39;@ionic-native/autostart&#39;;


constructor(private autostart: Autostart) { }

...

this.autostart.enable();

this.autostart.disable();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="enable" href="#enable"></a><code>enable()</code></h3>




Enable the automatic startup after the boot



<h3><a class="anchor" name="disable" href="#disable"></a><code>disable()</code></h3>




Disable the automatic startup after the boot









