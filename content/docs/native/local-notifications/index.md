---
layout: "fluid/docs_base"
version: "3.6.0"
versionHref: "/docs/native"
path: ""
category: native
id: "local-notifications"
title: "Local Notifications"
header_sub_title: "Class in module "
doc: "Local Notifications"
docType: "class"
---

<h1 class="api-title">Local Notifications</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/local-notifications/index.ts#L91">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save de.appplant.cordova.plugin.local-notification
$ npm install --save @ionic-native/local-notifications
</code></pre>
<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-local-notifications">
    https://github.com/katzer/cordova-plugin-local-notifications
  </a>
</p>


<p>This plugin allows you to display local notifications on the device</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { LocalNotifications } from &#39;@ionic-native/local-notifications&#39;;


constructor(private localNotifications: LocalNotifications) { }

...


// Schedule a single notification
this.localNotifications.schedule({
  id: 1,
  text: &#39;Single ILocalNotification&#39;,
  sound: isAndroid? &#39;file://sound.mp3&#39;: &#39;file://beep.caf&#39;,
  data: { secret: key }
});


// Schedule multiple notifications
this.localNotifications.schedule([{
   id: 1,
   text: &#39;Multi ILocalNotification 1&#39;,
   sound: isAndroid ? &#39;file://sound.mp3&#39;: &#39;file://beep.caf&#39;,
   data: { secret:key }
  },{
   id: 2,
   title: &#39;Local ILocalNotification Example&#39;,
   text: &#39;Multi ILocalNotification 2&#39;,
   icon: &#39;http://example.com/icon.png&#39;
}]);


// Schedule delayed notification
this.localNotifications.schedule({
   text: &#39;Delayed ILocalNotification&#39;,
   at: new Date(new Date().getTime() + 3600),
   led: &#39;FF0000&#39;,
   sound: null
});
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="schedule" href="#schedule"></a><code>schedule(options)</code></h3>




Schedules a single or multiple notifications
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
      options</td>
    <td>
      <code>Notification</code>|<code>Array.&lt;ILocalNotification&gt;</code>
    </td>
    <td>
      <p>optional</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="update" href="#update"></a><code>update(options)</code></h3>




Updates a previously scheduled notification. Must include the id in the options parameter.
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
      options</td>
    <td>
      <code>ILocalNotification</code>
    </td>
    <td>
      <p>optional</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="clear" href="#clear"></a><code>clear(notificationId)</code></h3>


Clears single or multiple notifications
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
      notificationId</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>A single notification id, or an array of notification ids.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise when the notification had been cleared
</div><h3><a class="anchor" name="clearAll" href="#clearAll"></a><code>clearAll()</code></h3>




Clears all notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise when all notifications have cleared
</div><h3><a class="anchor" name="cancel" href="#cancel"></a><code>cancel(notificationId)</code></h3>


Cancels single or multiple notifications
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
      notificationId</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>A single notification id, or an array of notification ids.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise when the notification is canceled
</div><h3><a class="anchor" name="cancelAll" href="#cancelAll"></a><code>cancelAll()</code></h3>




Cancels all notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise when all notifications are canceled
</div><h3><a class="anchor" name="isPresent" href="#isPresent"></a><code>isPresent(notificationId)</code></h3>


Checks presence of a notification
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
      notificationId</td>
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
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isScheduled" href="#isScheduled"></a><code>isScheduled(notificationId)</code></h3>


Checks is a notification is scheduled
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
      notificationId</td>
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
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isTriggered" href="#isTriggered"></a><code>isTriggered(notificationId)</code></h3>


Checks if a notification is triggered
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
      notificationId</td>
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
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getAllIds" href="#getAllIds"></a><code>getAllIds()</code></h3>


Get all the notification ids


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;number&gt;&gt;</code> 
</div><h3><a class="anchor" name="getTriggeredIds" href="#getTriggeredIds"></a><code>getTriggeredIds()</code></h3>


Get the ids of triggered notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;number&gt;&gt;</code> 
</div><h3><a class="anchor" name="getScheduledIds" href="#getScheduledIds"></a><code>getScheduledIds()</code></h3>


Get the ids of scheduled notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;number&gt;&gt;</code> Returns a promise
</div><h3><a class="anchor" name="get" href="#get"></a><code>get(notificationId)</code></h3>


Get a notification object
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
      notificationId</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The id of the notification to get</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ILocalNotification&gt;</code> 
</div><h3><a class="anchor" name="getScheduled" href="#getScheduled"></a><code>getScheduled(notificationId)</code></h3>


Get a scheduled notification object
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
      notificationId</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The id of the notification to get</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ILocalNotification&gt;</code> 
</div><h3><a class="anchor" name="getTriggered" href="#getTriggered"></a><code>getTriggered(notificationId)</code></h3>


Get a triggered notification object
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
      notificationId</td>
    <td>
      
    </td>
    <td>
      <p>The id of the notification to get</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ILocalNotification&gt;</code> 
</div><h3><a class="anchor" name="getAll" href="#getAll"></a><code>getAll()</code></h3>


Get all notification objects


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;ILocalNotification&gt;&gt;</code> 
</div><h3><a class="anchor" name="getAllScheduled" href="#getAllScheduled"></a><code>getAllScheduled()</code></h3>


Get all scheduled notification objects


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;ILocalNotification&gt;&gt;</code> 
</div><h3><a class="anchor" name="getAllTriggered" href="#getAllTriggered"></a><code>getAllTriggered()</code></h3>


Get all triggered notification objects


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Array&lt;ILocalNotification&gt;&gt;</code> 
</div><h3><a class="anchor" name="registerPermission" href="#registerPermission"></a><code>registerPermission()</code></h3>


Register permission to show notifications if not already granted.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="hasPermission" href="#hasPermission"></a><code>hasPermission()</code></h3>


Informs if the app has the permission to show notifications.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="on" href="#on"></a><code>on(eventName,&nbsp;callback)</code></h3>




Sets a callback for a specific event
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
      eventName</td>
    <td>
      
    </td>
    <td>
      <p>The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall</p>
</td>
  </tr>
  
  <tr>
    <td>
      callback</td>
    <td>
      
    </td>
    <td>
      <p>Call back function. All events return notification and state parameter. clear and clearall return state parameter only.</p>
</td>
  </tr>
  </tbody>
</table>







<h2><a class="anchor" name="ILocalNotification" href="#ILocalNotification"></a>ILocalNotification</h2>

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
      id
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>A unique identifier required to clear, cancel, update or retrieve the local notification in the future
Default: 0</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>First row of the notification
Default: Empty string (iOS) or the app name (Android)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      text
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Second row of the notification
Default: Empty string</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      every
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The interval at which to reschedule the local notification. That can be a value of second, minute, hour, day, week, month or year
Default: 0 (which means that the system triggers the local notification once)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      at
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
Default: now ~ new Date()</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      firstAt
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      badge
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The number currently set as the badge of the app icon in Springboard (iOS) or at the right-hand side of the local notification (Android)
Default: 0 (which means don&#39;t show a number)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      sound
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Uri of the file containing the sound to play when an alert is displayed
Default: res://platform_default</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      data
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Arbitrary data, objects will be encoded to JSON string
Default: null</p>

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
      <p>ANDROID ONLY
Uri of the icon that is shown in the ticker and notification
Default: res://icon</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      smallIcon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
Uri of the resource (only res://) to use in the notification layouts. Different classes of devices may return different sizes
Default: res://ic_popup_reminder</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      color
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
RGB value for the background color of the smallIcon.
Default: Androids COLOR_DEFAULT, which will vary based on Android version.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      ongoing
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY
Ongoing notifications differ from regular notifications in the following ways:</p>
<ul>
<li>They are sorted above the regular notifications in the notification panel</li>
<li>They do not have an &#39;X&#39; close button, and are not affected by the &quot;Clear all&quot; button
Default: false</li>
</ul>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      led
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
ARGB value that you would like the LED on the device to blink
Default: FFFFFF</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





