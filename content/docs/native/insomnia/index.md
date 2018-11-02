---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "insomnia"
title: "Insomnia"
header_sub_title: "Class in module "
doc: "Insomnia"
docType: "class"
---

<h1 class="api-title">Insomnia</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/insomnia/index.ts#L1">
  Improve this doc
</a>







<p>Prevent the screen of the mobile device from falling asleep.</p>


<p>Repo:
  <a href="https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-insomnia
$ npm install --save @ionic-native/insomnia
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>Firefox OS</li><li>iOS</li><li>Windows</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Insomnia } from &#39;@ionic-native/insomnia&#39;;

constructor(private insomnia: Insomnia) { }

...

this.insomnia.keepAwake()
  .then(
    () =&gt; console.log(&#39;success&#39;),
    () =&gt; console.log(&#39;error&#39;)
  );

this.insomnia.allowSleepAgain()
  .then(
    () =&gt; console.log(&#39;success&#39;),
    () =&gt; console.log(&#39;error&#39;)
  );
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="keepAwake" href="#keepAwake"></a><code>keepAwake()</code></h3>


Keeps awake the application


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="allowSleepAgain" href="#allowSleepAgain"></a><code>allowSleepAgain()</code></h3>


Allows the application to sleep again


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





