---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "hypertrack"
title: "HyperTrack"
header_sub_title: "Class in module "
doc: "HyperTrack"
docType: "class"
---

<h1 class="api-title">HyperTrack<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/hyper-track/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/hypertrack/hypertrack-cordova/issues">plugin repo</a>.
</p>




<p>HyperTrack cordova plugin wrapper for Ionic Native. Location-based services provider.
Make sure to include your publishable key at config.xml (see <a href="https://docs.hypertrack.com/sdks/cordova/setup.html#step-2-configure-the-sdk">HyperTrack Cordova Setup</a>).</p>


<p>Repo:
  <a href="https://github.com/hypertrack/hypertrack-cordova">
    https://github.com/hypertrack/hypertrack-cordova
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-hypertrack
$ npm install --save @ionic-native/hyper-track
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { HyperTrack } from &#39;@ionic-native/hyper-track&#39;;

constructor(private hyperTrack: HyperTrack) { }

// Check if app has location permissions enabled
this.hyperTrack.checkLocationPermission().then(response =&gt; {
  // response (String) can be &quot;true&quot; or &quot;false&quot;
  if (response != &quot;true&quot;) {
    // Ask for permissions
    this.hyperTrack.requestPermissions().then(response =&gt; {}, error =&gt; {});
  }
}, error =&gt; {});

// Check if app has location services enabled
this.hyperTrack.checkLocationServices().then(response =&gt; {
  // response (String) can be &quot;true&quot; or &quot;false&quot;
  if (response != &quot;true&quot;) {
    // Request services to be enabled
    this.hyperTrack.requestLocationServices().then(response =&gt; {}, error =&gt; {});
  }
}, error =&gt; {});

// First set the current user. This can be done via getOrCreateUser() or setUserId()
this.hyperTrack.setUserId(&quot;xxx&quot;).then(user =&gt; {
  // user (String) is a String representation of a User&#39;s JSON

  this.hyperTrack.startTracking().then(userId =&gt; {}, trackingError =&gt; {});

  this.hyperTrack.createAndAssignAction(&#39;visit&#39;, &#39;lookupId&#39;,&#39;address&#39;, 20.12, -100.3).then(action =&gt; {
    // Handle action. It&#39;s a String representation of the Action&#39;s JSON. For example:
    // &#39;{&quot;eta&quot;:&quot;Jul 17, 2017 12:50:03 PM&quot;,&quot;assigned_at&quot;:&quot;Jul 17, 2017 12:34:38 PM&quot;,,&quot;distance&quot;:&quot;0.0&quot;,...}&#39;
  }, error =&gt; {});

  // You can complete an action with completeAction() or completeActionWithLookupId()
  this.hyperTrack.completeAction(&#39;action-id&#39;).then(response =&gt; {
    // Handle response (String). Should be &quot;OK&quot;.
  }, error =&gt; {});

  this.hyperTrack.getCurrentLocation().then(location =&gt; {
    // Handle location. It&#39;s a String representation of a Location&#39;s JSON.For example:
    // &#39;{&quot;mAccuracy&quot;:22.601,,&quot;mLatitude&quot;:23.123456, &quot;mLongitude&quot;:-100.1234567, ...}&#39;
  }, error =&gt; {});

  this.hyperTrack.stopTracking().then(success =&gt; {
    // Handle success (String). Should be &quot;OK&quot;.
  }, error =&gt; {});

}, error =&gt; {});*
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="helloWorld" href="#helloWorld"></a><code>helloWorld(text)</code></h3>


Returns given text. For testing purposes.
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
      text</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Given text to print</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the result text (which is the same as the given text) if successful, or it gets rejected if an error ocurred.
</div><h3><a class="anchor" name="getOrCreateUser" href="#getOrCreateUser"></a><code>getOrCreateUser(name,&nbsp;phone,&nbsp;photo,&nbsp;lookupId)</code></h3>


Create a new user to identify the current device or get a user from a lookup id.
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
      name</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>User&#39;s name</p>
</td>
  </tr>
  
  <tr>
    <td>
      phone</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>User&#39;s phone</p>
</td>
  </tr>
  
  <tr>
    <td>
      photo</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>User&#39;s photo as URL or a Base64 converted string</p>
</td>
  </tr>
  
  <tr>
    <td>
      lookupId</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>User&#39;s lookupId, which is used to check if a new user is to be created (in this case you could set it to an internal reference for the user that you can use later to identify it), or if one with an existing lookupId is to be used.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with a string representation of the User's JSON, or it gets rejected if an error ocurred.
</div><h3><a class="anchor" name="setUserId" href="#setUserId"></a><code>setUserId(userId)</code></h3>


Set UserId for the SDK created using HyperTrack APIs. This is useful if you already have a user previously created.
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
      userId</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>User&#39;s ID</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred. An "OK" response doesn't necessarily mean that the userId was found. It just means that it was set correctly.
</div><h3><a class="anchor" name="startTracking" href="#startTracking"></a><code>startTracking()</code></h3>


Enable the SDK and start tracking. This will fail if there is no user set.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the userId (String) of the User being tracked if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
</div><h3><a class="anchor" name="createAndAssignAction" href="#createAndAssignAction"></a><code>createAndAssignAction(type,&nbsp;lookupId,&nbsp;expectedPlaceAddress,&nbsp;expectedPlaceLatitude,&nbsp;expectedPlaceLongitude)</code></h3>


Create and assign an action to the current user using specified parameters
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
      type</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>The action type. Can be one from &quot;pickup&quot;, &quot;delivery&quot;, &quot;dropoff&quot;, &quot;visit&quot;, &quot;stopover&quot; or &quot;task&quot;</p>
</td>
  </tr>
  
  <tr>
    <td>
      lookupId</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>The Action&#39;s desired lookupId</p>
</td>
  </tr>
  
  <tr>
    <td>
      expectedPlaceAddress</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>The address of the Action</p>
</td>
  </tr>
  
  <tr>
    <td>
      expectedPlaceLatitude</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>The latitude of the Action</p>
</td>
  </tr>
  
  <tr>
    <td>
      expectedPlaceLongitude</td>
    <td>
      <code>Number</code>
    </td>
    <td>
      <p>The longitude of the Action</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with a string representation of the Action's JSON, or it gets rejected if an error ocurred.
</div><h3><a class="anchor" name="completeAction" href="#completeAction"></a><code>completeAction(actionId)</code></h3>


Complete an action from the SDK by its ID
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
      actionId</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>ID of the Action that will be marked as completed</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
</div><h3><a class="anchor" name="completeActionWithLookupId" href="#completeActionWithLookupId"></a><code>completeActionWithLookupId(lookupId)</code></h3>


Complete an action from the SDK using Action's lookupId as parameter
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
      lookupId</td>
    <td>
      <code>String</code>
    </td>
    <td>
      <p>Lookup ID of the Action that will be marked as completed</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
</div><h3><a class="anchor" name="stopTracking" href="#stopTracking"></a><code>stopTracking()</code></h3>


Disable the SDK and stop tracking.
Needs user setting (via getOrCreateUser() or setUserId()) first.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the an "OK" string if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
</div><h3><a class="anchor" name="getCurrentLocation" href="#getCurrentLocation"></a><code>getCurrentLocation()</code></h3>


Get user's current location from the SDK


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with a string representation of the Location's JSON, or it gets rejected if an error ocurred.
</div><h3><a class="anchor" name="checkLocationPermission" href="#checkLocationPermission"></a><code>checkLocationPermission()</code></h3>


Check if Location permission has been granted to the app (for Android).
Returns "true" or "false" in success method accordingly.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the a string that can be "true" or "false", depending if location permission was granted, or it gets rejected if an error ocurred.
</div><h3><a class="anchor" name="requestPermissions" href="#requestPermissions"></a><code>requestPermissions()</code></h3>


Request user to grant Location access to the app (for Anrdoid).
For Android Marshmallow and above. In other platforms, the Promise is never resolved.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location access was given to the app, or it gets rejected if an error ocurred.
</div><h3><a class="anchor" name="checkLocationServices" href="#checkLocationServices"></a><code>checkLocationServices()</code></h3>


Check if Location services are enabled on the device (for Android).
Returns "true" or "false" in success method accordingly.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the a string that can be "true" or "false", depending if location services are enabled, or it gets rejected if an error ocurred.
</div><h3><a class="anchor" name="requestLocationServices" href="#requestLocationServices"></a><code>requestLocationServices()</code></h3>


Request user to enable Location services on the device.
For Android Marshmallow and above. In other platforms, the Promise is never resolved.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location services were enabled, or it gets rejected if an error ocurred.
</div>





