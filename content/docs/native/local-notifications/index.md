---
layout: "fluid/docs_base"
version: "4.12.1"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/local-notifications/index.ts#L402">
  Improve this doc
</a>







<p>This plugin allows you to display local notifications on the device</p>


<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-local-notifications">
    https://github.com/katzer/cordova-plugin-local-notifications
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-local-notification
$ npm install --save @ionic-native/local-notifications
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
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
   trigger: {at: new Date(new Date().getTime() + 3600)},
   led: &#39;FF0000&#39;,
   sound: null
});
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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
</div><h3><a class="anchor" name="getIds" href="#getIds"></a><code>getIds()</code></h3>


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
</div><h3><a class="anchor" name="requestPermission" href="#requestPermission"></a><code>requestPermission()</code></h3>


Request permission to show notifications if not already granted.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="hasPermission" href="#hasPermission"></a><code>hasPermission()</code></h3>


Informs if the app has the permission to show notifications.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="addActions" href="#addActions"></a><code>addActions(groupId,&nbsp;actions)</code></h3>


Adds a group of actions
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
      groupId</td>
    <td>
      
    </td>
    <td>
      <p>The id of the action group</p>
</td>
  </tr>
  
  <tr>
    <td>
      actions</td>
    <td>
      
    </td>
    <td>
      <p>The actions of this group</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="removeActions" href="#removeActions"></a><code>removeActions(groupId)</code></h3>


Removes a group of actions
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
      groupId</td>
    <td>
      
    </td>
    <td>
      <p>The id of the action group</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hasActions" href="#hasActions"></a><code>hasActions(groupId)</code></h3>


Checks if a group of actions is defined
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
      groupId</td>
    <td>
      
    </td>
    <td>
      <p>The id of the action group</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Whether the group is defined
</div><h3><a class="anchor" name="getDefaults" href="#getDefaults"></a><code>getDefaults()</code></h3>




Gets the (platform specific) default settings.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> An object with all default settings
</div><h3><a class="anchor" name="setDefaults" href="#setDefaults"></a><code>setDefaults()</code></h3>




Overwrites the (platform specific) default settings.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="on" href="#on"></a><code>on(eventName)</code></h3>




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
      <code>string</code>
    </td>
    <td>
      <p>The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable</code> 
</div><h3><a class="anchor" name="fireEvent" href="#fireEvent"></a><code>fireEvent(args)</code></h3>




Not an official interface, however its possible to manually fire events.
* @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall. Custom event names are possible for actions
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
      args</td>
    <td>
      
    </td>
    <td>
      <p>Optional arguments</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="fireQueuedEvents" href="#fireQueuedEvents"></a><code>fireQueuedEvents()</code></h3>


Fire queued events once the device is ready and all listeners are registered.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





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
      <code>string | string[]</code>
    </td>
    <td>
      <p>Second row of the notification
Default: Empty string</p>

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
      vibrate
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY
Use the default notification vibrate.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      led
    </td>
    <td>
      <code>{ color: string; on: number; off: number } | any[] | boolean | string</code>
    </td>
    <td>
      <p>ANDROID ONLY
Define the blinking of the LED on the device.
If set to true, the LED will blink in the default color with
timings for on and off set to 1000 ms.
If set to a string, the LED will blink in this ARGB value with
timings for on and off set to 1000 ms.
If set to an array, the value of the key 0 will be used as the color,
the value of the key 1 will be used as the &#39;on&#39; timing, the value of
the key 2 will be used as the &#39;off&#39; timing</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      priority
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Notification priority.
Integers between -2 and 2, whereas -2 is minimum and 2 is maximum priority</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      silent
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Is a silent notification</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      launch
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Specifies whether the a click on the notification causes the app
to launch in the foreground</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      wakeup
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY
Wakeup the device. (default is true)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      timeoutAfter
    </td>
    <td>
      <code>number |</code>
    </td>
    <td>
      <p>ANDROID ONLY
Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      false
    </td>
    <td>
      <code></code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      actions
    </td>
    <td>
      <code>string | ILocalNotificationAction[]</code>
    </td>
    <td>
      <p>Actions id or actions</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      trigger
    </td>
    <td>
      <code>ILocalNotificationTrigger</code>
    </td>
    <td>
      <p>When to trigger the notification</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      attachments
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>A list of image attachments</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      clock
    </td>
    <td>
      <code>boolean | string</code>
    </td>
    <td>
      <p>ANDROID ONLY
If and how the notification shall show the when date.
Possbile values:
                 boolean: true equals &#39;clock&#39;, false disable a watch/counter
                 &#39;clock&#39;: Show the when date in the content view
                 &#39;chronometer&#39;: Show a stopwatch</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      progressBar
    </td>
    <td>
      <code>ILocalNotificationProgressBar | boolean</code>
    </td>
    <td>
      <p>Shows a progress bar
Setting a boolean is a shortcut for {enabled: true/false} respectively</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      group
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
If multiple notifications have the same group your app can present
them as a single group.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      groupSummary
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY
If set to &#39;true&#39; this notification could use &#39;summary&#39; to summarize
the contents of the whole group</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      summary
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
Summary of the whole notification group. Should be used in conjuntion
with &#39;groupSummary&#39; set to true</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      number
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>ANDROID ONLY
Sets the number of items this notification represents.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      sticky
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY
Set whether this is an &quot;ongoing&quot; notification.
Ongoing notifications cannot be dismissed by the user,
so your application or service must take care of canceling them.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      autoClear
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY
Make this notification automatically dismissed when the user touches it.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      lockscreen
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>ANDROID ONLY
If set to true the notification will be show in its entirety on all lockscreens.
If set to false it will not be revealed on a secure lockscreen.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      defaults
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>ANDROID ONLY
Set the default notification options that will be used.
The value should be one or more of the following fields combined with
bitwise-or: DEFAULT_SOUND, DEFAULT_VIBRATE, DEFAULT_LIGHTS.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      channel
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
Specifies the channel the notification should be delivered on.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      mediaSession
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>ANDROID ONLY
Set the token for the media session</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      foreground
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Make this notification show when app in foreground.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





