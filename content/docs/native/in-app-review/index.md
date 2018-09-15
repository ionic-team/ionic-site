---
layout: "fluid/docs_base"
version: "4.12.2"
versionHref: "/docs/native"
path: ""
category: native
id: "in-app-review"
title: "In App Review"
header_sub_title: "Class in module "
doc: "In App Review"
docType: "class"
---

<h1 class="api-title">In App Review</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/in-app-review/index.ts#L1">
  Improve this doc
</a>







<p>This plugin does use the iOS class SKStore​Review​Controller to open the inApp review popup available since iOS 10.3</p>
<p>This functionality only works on iOS devices</p>


<p>Repo:
  <a href="https://github.com/omaxlive/com.omarben.inappreview">
    https://github.com/omaxlive/com.omarben.inappreview
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add com.omarben.inappreview
$ npm install --save @ionic-native/in-app-review
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { InAppReview } from &#39;@ionic-native/in-app-review&#39;;


constructor(private inAppReview: InAppReview) { }

...


this.inAppReview.requestReview()
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="requestReview" href="#requestReview"></a><code>requestReview()</code></h3>


Open the inApp review popup


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div>





