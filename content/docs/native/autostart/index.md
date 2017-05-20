---
layout: "fluid/docs_base"
version: "3.10.1"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/autostart/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-autostart
$ npm install --save @ionic-native/autostart
</code></pre>
<p>Repo:
  <a href="https://github.com/ToniKorin/cordova-plugin-autostart">
    https://github.com/ToniKorin/cordova-plugin-autostart
  </a>
</p>


<p>This plugin will start automatically your Android app after the every boot or the auto-update of your application.
You can enable or disable the autostart function in your app.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { Autostart } from &#39;@ionic-native/autostart&#39;;


constructor(private autostart: Autostart) { }

...

this.autostart.enable();

this.autostart.disable();
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="enable" href="#enable"></a><code>enable()</code></h3>




Enable the automatic startup after the boot



<h3><a class="anchor" name="disable" href="#disable"></a><code>disable()</code></h3>




Disable the automatic startup after the boot









