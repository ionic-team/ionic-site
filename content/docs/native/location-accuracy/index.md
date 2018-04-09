---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "location-accuracy"
title: "Location Accuracy"
header_sub_title: "Class in module "
doc: "Location Accuracy"
docType: "class"
---

<h1 class="api-title">Location Accuracy</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/location-accuracy/index.ts#L1">
  Improve this doc
</a>







<p>This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.</p>


<p>Repo:
  <a href="https://github.com/dpa99c/cordova-plugin-request-location-accuracy">
    https://github.com/dpa99c/cordova-plugin-request-location-accuracy
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-request-location-accuracy
$ npm install --save @ionic-native/location-accuracy
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { LocationAccuracy } from &#39;@ionic-native/location-accuracy&#39;;

constructor(private locationAccuracy: LocationAccuracy) { }

...

this.locationAccuracy.canRequest().then((canRequest: boolean) =&gt; {

  if(canRequest) {
    // the accuracy option will be ignored by iOS
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () =&gt; console.log(&#39;Request successful&#39;),
      error =&gt; console.log(&#39;Error requesting location permissions&#39;, error)
    );
  }

});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="canRequest" href="#canRequest"></a><code>canRequest()</code></h3>


Indicates if you can request accurate location


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resovles with a boolean that indicates if you can request accurate location
</div><h3><a class="anchor" name="isRequesting" href="#isRequesting"></a><code>isRequesting()</code></h3>


Indicates if a request is currently in progress


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a promise that resolves with a boolean that indicates if a request is currently in progress
</div><h3><a class="anchor" name="request" href="#request"></a><code>request(accuracy)</code></h3>




Requests accurate location
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
      accuracy</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves on success and rejects if an error occurred
</div><h3><a class="anchor" name="REQUEST_PRIORITY_NO_POWER" href="#REQUEST_PRIORITY_NO_POWER"></a><code>REQUEST_PRIORITY_NO_POWER</code></h3>

Convenience constant


<h3><a class="anchor" name="REQUEST_PRIORITY_LOW_POWER" href="#REQUEST_PRIORITY_LOW_POWER"></a><code>REQUEST_PRIORITY_LOW_POWER</code></h3>

Convenience constant


<h3><a class="anchor" name="REQUEST_PRIORITY_BALANCED_POWER_ACCURACY" href="#REQUEST_PRIORITY_BALANCED_POWER_ACCURACY"></a><code>REQUEST_PRIORITY_BALANCED_POWER_ACCURACY</code></h3>

Convenience constant


<h3><a class="anchor" name="REQUEST_PRIORITY_HIGH_ACCURACY" href="#REQUEST_PRIORITY_HIGH_ACCURACY"></a><code>REQUEST_PRIORITY_HIGH_ACCURACY</code></h3>

Convenience constant


<h3><a class="anchor" name="SUCCESS_SETTINGS_SATISFIED" href="#SUCCESS_SETTINGS_SATISFIED"></a><code>SUCCESS_SETTINGS_SATISFIED</code></h3>

Convenience constant


<h3><a class="anchor" name="SUCCESS_USER_AGREED" href="#SUCCESS_USER_AGREED"></a><code>SUCCESS_USER_AGREED</code></h3>

Convenience constant


<h3><a class="anchor" name="ERROR_ALREADY_REQUESTING" href="#ERROR_ALREADY_REQUESTING"></a><code>ERROR_ALREADY_REQUESTING</code></h3>

Convenience constant


<h3><a class="anchor" name="ERROR_INVALID_ACTION" href="#ERROR_INVALID_ACTION"></a><code>ERROR_INVALID_ACTION</code></h3>

Convenience constant


<h3><a class="anchor" name="ERROR_INVALID_ACCURACY" href="#ERROR_INVALID_ACCURACY"></a><code>ERROR_INVALID_ACCURACY</code></h3>

Convenience constant


<h3><a class="anchor" name="ERROR_EXCEPTION" href="#ERROR_EXCEPTION"></a><code>ERROR_EXCEPTION</code></h3>

Convenience constant


<h3><a class="anchor" name="ERROR_CANNOT_CHANGE_ACCURACY" href="#ERROR_CANNOT_CHANGE_ACCURACY"></a><code>ERROR_CANNOT_CHANGE_ACCURACY</code></h3>

Convenience constant


<h3><a class="anchor" name="ERROR_USER_DISAGREED" href="#ERROR_USER_DISAGREED"></a><code>ERROR_USER_DISAGREED</code></h3>

Convenience constant


<h3><a class="anchor" name="ERROR_GOOGLE_API_CONNECTION_FAILED" href="#ERROR_GOOGLE_API_CONNECTION_FAILED"></a><code>ERROR_GOOGLE_API_CONNECTION_FAILED</code></h3>

Convenience constant








