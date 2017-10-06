---
layout: "fluid/docs_base"
version: "4.3.1"
versionHref: "/docs/native"
path: ""
category: native
id: "launch-review"
title: "Launch Review"
header_sub_title: "Class in module "
doc: "Launch Review"
docType: "class"
---

<h1 class="api-title">Launch Review</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/launch-review/index.ts#L1">
  Improve this doc
</a>







<p>This launches the native store app in order for the user to leave a review.
On Android, the plugin opens the the app&#39;s storepage in the Play Store where the user can leave a review by pressing the stars to give a rating.
On iOS, the plugin opens the app&#39;s storepage in the App Store and focuses the Review tab, where the user can leave a review by pressing &quot;Write a review&quot;.</p>


<p>Repo:
  <a href="https://github.com/dpa99c/cordova-launch-review">
    https://github.com/dpa99c/cordova-launch-review
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-launch-review
$ npm install --save @ionic-native/launch-review
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { LaunchReview } from &#39;@ionic-native/launch-review&#39;;

constructor(private launchReview: LaunchReview) { }

...

const appId: string = &#39;yourAppId&#39;;
this.launchReview.launch(appId)
  .then(() =&gt; console.log(&#39;Successfully launched store app&#39;);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="launch" href="#launch"></a><code>launch()</code></h3>


Launch store app using given app ID


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div>





