---
layout: "fluid/docs_base"
version: "3.4.4"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/insomnia/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
$ npm install --save @ionic-native/insomnia
</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin
  </a>
</p>


<p>Prevent the screen of the mobile device from falling asleep.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2>Usage</h2>
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








<h2>Instance Members</h2>
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





