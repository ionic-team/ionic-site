---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "firebase-messaging"
title: "Firebase Messaging"
header_sub_title: "Class in module "
doc: "Firebase Messaging"
docType: "class"
---

<h1 class="api-title">Firebase Messaging<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/firebase-messaging/index.ts#L7">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/chemerisuk/cordova-plugin-firebase-messaging/issues">plugin repo</a>.
</p>




<p>Cordova plugin for Firebase Messaging</p>


<p>Repo:
  <a href="https://github.com/chemerisuk/cordova-plugin-firebase-messaging">
    https://github.com/chemerisuk/cordova-plugin-firebase-messaging
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-firebase-messaging
$ npm install --save @ionic-native/firebase-messaging
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FirebaseMessaging } from &#39;@ionic-native/firebase-messaging&#39;;


constructor(private firebaseMessaging: FirebaseMessaging) { }

...


this.firebaseMessaging.logEvent(&#39;page_view&#39;, {page: &quot;dashboard&quot;})
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="onMessage" href="#onMessage"></a><code>onMessage()</code></h3>




Called when a push message received while app is in foreground.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onBackgroundMessage" href="#onBackgroundMessage"></a><code>onBackgroundMessage()</code></h3>




Called when a push message received while app is in background.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestPermission" href="#requestPermission"></a><code>requestPermission()</code></h3>




Grant permission to recieve push notifications (will trigger prompt on iOS).



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="getToken" href="#getToken"></a><code>getToken()</code></h3>




Returns a promise that fulfills with the current FCM token



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="onTokenRefresh" href="#onTokenRefresh"></a><code>onTokenRefresh()</code></h3>




Triggers every time when FCM token updated.
You should usually call getToken to get an updated token and send it to server.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;void&gt;</code> 
</div><h3><a class="anchor" name="subscribe" href="#subscribe"></a><code>subscribe(topic)</code></h3>




Subscribe to topic in background.

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
  <b>Returns:</b> <code>Promise&lt;null&gt;</code> 
</div>





<h2><a class="anchor" name="IFirebaseMessage" href="#IFirebaseMessage"></a>IFirebaseMessage</h2>

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
      aps
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      gcm
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





