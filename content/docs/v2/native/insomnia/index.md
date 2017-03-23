---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "insomnia"
title: "Insomnia"
header_sub_title: "Class in module "
doc: "Insomnia"
docType: "class"
---







<h1 class="api-title">
  
  Insomnia
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/insomnia/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code class="nohighlight">$ ionic plugin add https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
$ npm install --save @ionic-native/insomnia
</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin">
    https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin
  </a>
</p>

<!-- description -->

<p>Prevent the screen of the mobile device from falling asleep.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

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




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="keepAwake"></div>
<h3>
  <code>keepAwake()</code>
  

</h3>
Keeps awake the application


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="allowSleepAgain"></div>
<h3>
  <code>allowSleepAgain()</code>
  

</h3>
Allows the application to sleep again


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

