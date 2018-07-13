---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "fcm"
title: "FCM"
header_sub_title: "Class in module "
doc: "FCM"
docType: "class"
---

<h1 class="api-title">FCM</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/fcm/index.ts#L16">
  Improve this doc
</a>







<p>Provides basic functionality for Firebase Cloud Messaging</p>


<p>Repo:
  <a href="https://github.com/fechanique/cordova-plugin-fcm">
    https://github.com/fechanique/cordova-plugin-fcm
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-fcm
$ npm install --save @ionic-native/fcm
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FCM } from &#39;@ionic-native/fcm&#39;;

constructor(private fcm: FCM) {}

...

this.fcm.subscribeToTopic(&#39;marketing&#39;);

this.fcm.getToken().then(token =&gt; {
  backend.registerToken(token);
});

this.fcm.onNotification().subscribe(data =&gt; {
  if(data.wasTapped){
    console.log(&quot;Received in background&quot;);
  } else {
    console.log(&quot;Received in foreground&quot;);
  };
});

this.fcm.onTokenRefresh().subscribe(token =&gt; {
  backend.registerToken(token);
});

this.fcm.unsubscribeFromTopic(&#39;marketing&#39;);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getToken" href="#getToken"></a><code>getToken()</code></h3>


Gets device's current registration id



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a Promise that resolves with the registration id token
</div><h3><a class="anchor" name="onTokenRefresh" href="#onTokenRefresh"></a><code>onTokenRefresh()</code></h3>




Event firing on the token refresh



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;string&gt;</code> Returns an Observable that notifies with the change of device's registration id
</div><h3><a class="anchor" name="subscribeToTopic" href="#subscribeToTopic"></a><code>subscribeToTopic(topic)</code></h3>


Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)

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
      <p>Topic to be subscribed to</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise resolving in result of subscribing to a topic
</div><h3><a class="anchor" name="unsubscribeFromTopic" href="#unsubscribeFromTopic"></a><code>unsubscribeFromTopic(topic)</code></h3>


Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)

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
      <p>Topic to be unsubscribed from</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise resolving in result of unsubscribing from a topic
</div><h3><a class="anchor" name="onNotification" href="#onNotification"></a><code>onNotification()</code></h3>




Watch for incoming notifications



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> returns an object with data from the notification
</div>





<h2><a class="anchor" name="NotificationData" href="#NotificationData"></a>NotificationData</h2>

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
      wasTapped
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Determines whether the notification was pressed or not</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





