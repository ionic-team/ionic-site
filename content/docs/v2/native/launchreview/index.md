---
layout: "v2_fluid/docs_base"
version: "2.3.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "launchreview"
title: "LaunchReview"
header_sub_title: "Class in module "
doc: "LaunchReview"
docType: "class"
---







<h1 class="api-title">
  
  LaunchReview
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/launch-review.ts#L0">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-launch-review</code></pre>
<p>Repo:
  <a href="https://github.com/dpa99c/cordova-launch-review">
    https://github.com/dpa99c/cordova-launch-review
  </a>
</p>

<!-- description -->

<p>This launches the native store app in order for the user to leave a review.
On Android, the plugin opens the the app&#39;s storepage in the Play Store where the user can leave a review by pressing the stars to give a rating.
On iOS, the plugin opens the app&#39;s storepage in the App Store and focuses the Review tab, where the user can leave a review by pressing &quot;Write a review&quot;.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { LaunchReview } from &#39;ionic-native&#39;;

const appId: string = &#39;yourAppId&#39;;
LaunchReview.launch(appId)
  .then(() =&gt; console.log(&#39;Successfully launched store app&#39;);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="launch"></div>
<h3><code>launch()</code>
  
</h3>


Launch store app using given app ID






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

