---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "firebase"
title: "Firebase"
header_sub_title: "Class in module "
doc: "Firebase"
docType: "class"
---

<h1 class="api-title">Firebase<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/firebase/index.ts#L2">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/arnesson/cordova-plugin-firebase/issues">plugin repo</a>.
</p>




<p>This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).</p>


<p>Repo:
  <a href="https://github.com/arnesson/cordova-plugin-firebase">
    https://github.com/arnesson/cordova-plugin-firebase
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-firebase
$ npm install --save @ionic-native/firebase
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Firebase } from &#39;@ionic-native/firebase&#39;;

constructor(private firebase: Firebase) { }

...

this.firebase.getToken()
  .then(token =&gt; console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error =&gt; console.error(&#39;Error getting token&#39;, error));

this.firebase.onTokenRefresh()
  .subscribe((token: string) =&gt; console.log(`Got a new token ${token}`));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getToken" href="#getToken"></a><code>getToken()</code></h3>


Get the device token


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onTokenRefresh" href="#onTokenRefresh"></a><code>onTokenRefresh()</code></h3>




Get notified when a token is refreshed


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onNotificationOpen" href="#onNotificationOpen"></a><code>onNotificationOpen()</code></h3>




Get notified when the user opens a notification


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="grantPermission" href="#grantPermission"></a><code>grantPermission()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Grant permission to receive push notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hasPermission" href="#hasPermission"></a><code>hasPermission()</code></h3>


Check permission to receive push notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;{isEnabled: boolean}&gt;</code> 
</div><h3><a class="anchor" name="setBadgeNumber" href="#setBadgeNumber"></a><code>setBadgeNumber(badgeNumber)</code></h3>


Set icon badge number. Set to 0 to clear the badge.
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
      badgeNumber</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getBadgeNumber" href="#getBadgeNumber"></a><code>getBadgeNumber()</code></h3>


Get icon badge number


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="subscribe" href="#subscribe"></a><code>subscribe(topic)</code></h3>


Subscribe to a topic
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
      topic</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="unsubscribe" href="#unsubscribe"></a><code>unsubscribe(topic)</code></h3>


Unsubscribe from a topic
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
      topic</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="unregister" href="#unregister"></a><code>unregister()</code></h3>


Unregister from firebase, used to stop receiving push notifications.
Call this when you logout user from your app.



<h3><a class="anchor" name="logEvent" href="#logEvent"></a><code>logEvent(type,&nbsp;data)</code></h3>


Log an event using Analytics
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
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      data</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="logError" href="#logError"></a><code>logError(message)</code></h3>


Log an Error using FirebaseCrash
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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setScreenName" href="#setScreenName"></a><code>setScreenName(name)</code></h3>


Set the name of the current screen in Analytics
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
      <code>string</code>
    </td>
    <td>
      <p>Screen name</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setUserId" href="#setUserId"></a><code>setUserId(userId)</code></h3>


Set a user id for use in Analytics
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
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setUserProperty" href="#setUserProperty"></a><code>setUserProperty(name,&nbsp;value)</code></h3>


Set a user property for use in Analytics
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
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="fetch" href="#fetch"></a><code>fetch(cacheExpirationSeconds)</code></h3>




Fetch Remote Config parameter values for your app
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
      cacheExpirationSeconds</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="activateFetched" href="#activateFetched"></a><code>activateFetched()</code></h3>


Activate the Remote Config fetched config


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getValue" href="#getValue"></a><code>getValue(key,&nbsp;namespace)</code></h3>




Retrieve a Remote Config value
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      namespace</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getByteArray" href="#getByteArray"></a><code>getByteArray(key,&nbsp;namespace)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Retrieve a Remote Config byte array
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      namespace</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getInfo" href="#getInfo"></a><code>getInfo()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Get the current state of the FirebaseRemoteConfig singleton object


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setConfigSettings" href="#setConfigSettings"></a><code>setConfigSettings(settings)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Change the settings for the FirebaseRemoteConfig object's operations
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
      settings</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setDefaults" href="#setDefaults"></a><code>setDefaults(defaults,&nbsp;namespace)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Set defaults in the Remote Config
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
      defaults</td>
    <td>
      <code>Object</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      namespace</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getVerificationID" href="#getVerificationID"></a><code>getVerificationID(phoneNumber)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication
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
      phoneNumber</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="verifyPhoneNumber" href="#verifyPhoneNumber"></a><code>verifyPhoneNumber(phoneNumber,&nbsp;timeoutDuration)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication
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
      phoneNumber</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The phone number, including &#39;+&#39; and country code</p>
</td>
  </tr>
  
  <tr>
    <td>
      timeoutDuration</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The timeout in sec - no more SMS will be sent to this number until this timeout expires</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setAnalyticsCollectionEnabled" href="#setAnalyticsCollectionEnabled"></a><code>setAnalyticsCollectionEnabled(enabled)</code></h3>


Allows the user to enable/disable analytics collection
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
      enabled</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>value to set collection</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





