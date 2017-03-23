---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "launch-review"
title: "Launch Review"
header_sub_title: "Class in module "
doc: "Launch Review"
docType: "class"
---







<h1 class="api-title">
  
  Launch Review
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/launch-review/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-launch-review
$ npm install --save @ionic-native/launch-review
</code></pre>
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

<pre><code>import { LaunchReview } from &#39;@ionic-native/launch-review&#39;;

constructor(private launchReview: LaunchReview) { }

...

const appId: string = &#39;yourAppId&#39;;
this.launchReview.launch(appId)
  .then(() =&gt; console.log(&#39;Successfully launched store app&#39;);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="launch"></div>
<h3>
  <code>launch()</code>
  

</h3>
Launch store app using given app ID


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

