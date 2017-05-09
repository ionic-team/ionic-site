---
layout: "fluid/docs_base"
version: "3.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "phonegap-local-notification"
title: "Phonegap Local Notification"
header_sub_title: "Class in module "
doc: "Phonegap Local Notification"
docType: "class"
---

<h1 class="api-title">Phonegap Local Notification</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/phonegap-local-notification/index.ts#L47">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save phonegap-local-notifications
$ npm install --save @ionic-native/phonegap-local-notification
</code></pre>
<p>Repo:
  <a href="https://github.com/phonegap/phonegap-plugin-local-notification">
    https://github.com/phonegap/phonegap-plugin-local-notification
  </a>
</p>


<p>The Local Notification plugin gives developers the ability to post notifications from their app that show up in the device’s notification area.
The API for the local notification plugin follows the W3C Web Notifications specification: <a href="https://www.w3.org/TR/notifications/">https://www.w3.org/TR/notifications/</a></p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Browser</li>
</ul>






<h2>Usage</h2>
<pre><code>import { PhonegapLocalNotifications } from &#39;@ionic-native/phonegap-local-notifications&#39;;


constructor(private localNotification: PhonegapLocalNotifications) { }

...

this.localNotification.requestPermission().then(
  (permission) =&gt; {
    if (permission === &#39;granted&#39;) {

      // Create the notification
      this.localNotification.create(&#39;My Title&#39;, {
        tag: &#39;message1&#39;,
        body: &#39;My body&#39;,
        icon: &#39;assets/icon/favicon.ico&#39;
      });

    }
  }
);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create(title,&nbsp;Options)</code></h3>

A global object that lets you interact with the Notification API.
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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Title of the local notification.</p>
</td>
  </tr>
  
  <tr>
    <td>
      Options</td>
    <td>
      <code>LocalNotificationOptions</code>
    </td>
    <td>
      <p>An object containing optional property/value pairs.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>PLNObject</code> 
</div><h3><a class="anchor" name="requestPermission" href="#requestPermission"></a><code>requestPermission()</code></h3>


requests permission from the user to show a local notification.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="LocalNotificationOptions" href="#LocalNotificationOptions"></a>LocalNotificationOptions</h2>

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
      dir
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sets the direction of the notification. One of &quot;auto&quot;, &quot;ltr&quot; or &quot;rtl&quot;</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      lang
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sets the language of the notification</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      body
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sets the body of the notification</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      tag
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sets the identifying tag of the notification</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Sets the icon of the notification</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





