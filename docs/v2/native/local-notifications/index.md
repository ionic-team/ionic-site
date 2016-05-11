---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "local-notifications"
title: "Local Notifications"
header_sub_title: "Class in module "
doc: "Local Notifications"
docType: "class"
---








<h1 class="api-title">

  
  Local Notifications
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/localnotifications.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add de.appplant.cordova.plugin.local-notification</code></pre>
<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-local-notifications">
    https://github.com/katzer/cordova-plugin-local-notifications
  </a>
</p>

<!-- description -->

<p>This plugin allows you to display local notifications on the device</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {LocalNotifications} from &#39;ionic-native&#39;;



// Schedule a single notification
LocalNotifications.schedule({
  id: 1,
  text: &quot;Single Notification&quot;,
  sound: isAndroid? &#39;file://sound.mp3&#39;: &#39;file://beep.caf&#39;
  data: { secret: key }
});


// Schedule multiple notifications
LocalNotifications.schedule([{
   id: 1,
   text: &quot;Multi Notification 1&quot;,
   sound: isAndroid ? &#39;file://sound.mp3&#39;: &#39;file://beep.caf&#39;,
   data: { secret:key }
  },{
   id: 2,
   title: &quot;Local Notification Example&quot;,
   text: &quot;Multi Notification 2&quot;,
   icon: &quot;http://example.com/icon.png&quot;
}]);


// Schedule delayed notification
LocalNotifications.schedule({
   text: &quot;Delayed Notification&quot;,
   at: new Date(new Date().getTime() + 3600),
   led: &quot;FF0000&quot;,
   sound: null
});
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="schedule"></div>
<h3><code>schedule(options)</code>

</h3>



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
      options
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="update"></div>
<h3><code>update(options)</code>

</h3>



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
      options
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="clear"></div>
<h3><code>clear(notificationId)</code>

</h3>

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
      notificationId
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>A single notification id, or an array of notification ids.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="clearAll"></div>
<h3><code>clearAll()</code>

</h3>



Clears all notifications










<div id="cancel"></div>
<h3><code>cancel(notificationId)</code>

</h3>

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
      notificationId
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>A single notification id, or an array of notification ids.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="cancelAll"></div>
<h3><code>cancelAll()</code>

</h3>



Cancels all notifications










<div id="isPresent"></div>
<h3><code>isPresent(notificationId)</code>

</h3>

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
      notificationId
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="isScheduled"></div>
<h3><code>isScheduled(notificationId)</code>

</h3>

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
      notificationId
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="isTriggered"></div>
<h3><code>isTriggered(notificationId)</code>

</h3>

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
      notificationId
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="getAllIds"></div>
<h3><code>getAllIds()</code>

</h3>

Get all the notification ids










<div id="getTriggeredIds"></div>
<h3><code>getTriggeredIds()</code>

</h3>

Get the ids of triggered notifications










<div id="getScheduledIds"></div>
<h3><code>getScheduledIds()</code>

</h3>

Get the ids of scheduled notifications










<div id="get"></div>
<h3><code>get(notificationId)</code>

</h3>

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
      notificationId
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>The id of the notification to get</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="getScheduled"></div>
<h3><code>getScheduled(notificationId)</code>

</h3>

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
      notificationId
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>The id of the notification to get</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="getTriggered"></div>
<h3><code>getTriggered(notificationId)</code>

</h3>

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
      notificationId
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>The id of the notification to get</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="getAll"></div>
<h3><code>getAll()</code>

</h3>

Get all notification objects










<div id="getAllScheduled"></div>
<h3><code>getAllScheduled()</code>

</h3>

Get all scheduled notification objects










<div id="getAllTriggered"></div>
<h3><code>getAllTriggered()</code>

</h3>

Get all triggered notification objects










<div id="on"></div>
<h3><code>on(eventName,&nbsp;callback)</code>

</h3>



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
      eventName
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      callback
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Call back function. All events return notification and state parameter. clear and clearall return state parameter only.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

