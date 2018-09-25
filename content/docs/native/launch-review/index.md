---
layout: "fluid/docs_base"
version: "4.15.0"
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







<p>Assists in leaving user reviews/ratings in the App Stores.</p>
<ul>
<li>Launches the platform&#39;s App Store page for the current app in order for the user to leave a review.</li>
<li>On iOS (10.3 and above) invokes the native in-app rating dialog which allows a user to rate your app without needing to open the App Store.</li>
</ul>


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

this.launchReview.launch()
  .then(() =&gt; console.log(&#39;Successfully launched store app&#39;);

if(this.launchReview.isRatingSupported()){
  this.launchReview.rating()
    .then(() =&gt; console.log(&#39;Successfully launched rating dialog&#39;));
}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="launch" href="#launch"></a><code>launch(appId)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Launches App Store on current platform in order to leave a review for given app.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      appId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>(optional) the platform-specific app ID to use to open the page in the store app.
If not specified, the plugin will use the app ID for the app in which the plugin is contained.
On Android this is the full package name of the app. For example, for Google Maps: <code>com.google.android.apps.maps</code>
On iOS this is the Apple ID of the app. For example, for Google Maps: <code>585027354</code></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="rating" href="#rating"></a><code>rating()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Invokes the native in-app rating dialog which allows a user to rate your app without needing to open the App Store.
Requires iOS 10.3 and above: Calling this on any platform/version other than iOS 10.3+ will result in the error callback.
Success callback will be called up to 3 times:
- First: after `LaunchReview.rating()` is called and the request to show the dialog is successful. Will be passed the value `requested`.
- Second: if and when the Rating dialog is actually displayed.  Will be passed the value `shown`.
- Third: if and when the Rating dialog is dismissed.  Will be passed the value `dismissed`.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="isRatingSupported" href="#isRatingSupported"></a><code>isRatingSupported()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Indicates if the current platform/version supports in-app ratings dialog, i.e. calling LaunchReview.rating().
Will return true if current platform is iOS 10.3 or above.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div>





