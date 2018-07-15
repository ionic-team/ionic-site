---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "pin-check"
title: "Pin Check"
header_sub_title: "Class in module "
doc: "Pin Check"
docType: "class"
---

<h1 class="api-title">Pin Check</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/pin-check/index.ts#L1">
  Improve this doc
</a>







<p>This plugin is for use with Apache Cordova and allows your application to check whether pin/keyguard or passcode is setup on iOS and Android phones.</p>
<p>Requires Cordova plugin: cordova-plugin-pincheck. For more info, please see the <a href="https://github.com/ohh2ahh/AppAvailability">PinCheck plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/shangyilim/cordova-plugin-pincheck">
    https://github.com/shangyilim/cordova-plugin-pincheck
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-pincheck
$ npm install --save @ionic-native/pin-check
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { PinCheck } from &#39;@ionic-native/pin-check&#39;;
import { Platform } from &#39;ionic-angular&#39;;

constructor(private pinCheck: PinCheck, private platform: Platform) { }

...

this.pinCheck.isPinSetup()
  .then(
    (success: string) =&gt;  console.log(&quot;pin is setup.&quot;);,
    (error: string) =&gt; console.log(&quot;pin not setup.&quot;);
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isPinSetup" href="#isPinSetup"></a><code>isPinSetup()</code></h3>


check whether pin/keyguard or passcode is setup    


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div>





