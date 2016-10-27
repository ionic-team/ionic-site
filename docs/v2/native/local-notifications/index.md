---
layout: "v2_fluid/docs_base"
version: "2.2.6"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/localnotifications.ts#L0">
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

<pre><code class="lang-typescript">import { LocalNotifications } from &#39;ionic-native&#39;;


// Schedule a single notification
LocalNotifications.schedule({
  id: 1,
  text: &#39;Single Notification&#39;,
  sound: isAndroid? &#39;file://sound.mp3&#39;: &#39;file://beep.caf&#39;,
  data: { secret: key }
});


// Schedule multiple notifications
LocalNotifications.schedule([{
   id: 1,
   text: &#39;Multi Notification 1&#39;,
   sound: isAndroid ? &#39;file://sound.mp3&#39;: &#39;file://beep.caf&#39;,
   data: { secret:key }
  },{
   id: 2,
   title: &#39;Local Notification Example&#39;,
   text: &#39;Multi Notification 2&#39;,
   icon: &#39;http://example.com/icon.png&#39;
}]);


// Schedule delayed notification
LocalNotifications.schedule({
   text: &#39;Delayed Notification&#39;,
   at: new Date(new Date().getTime() + 3600),
   led: &#39;FF0000&#39;,
   sound: null
});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise when the notification had been cleared
</div>



<div id="clearAll"></div>
<h3><code>clearAll()</code>
  
</h3>




Clears all notifications






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise when all notifications have cleared
</div>



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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise when the notification is canceled
</div>



<div id="cancelAll"></div>
<h3><code>cancelAll()</code>
  
</h3>




Cancels all notifications






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise when all notifications are canceled
</div>



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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



<div id="getAllIds"></div>
<h3><code>getAllIds()</code>
  
</h3>


Get all the notification ids






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



<div id="getTriggeredIds"></div>
<h3><code>getTriggeredIds()</code>
  
</h3>


Get the ids of triggered notifications






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



<div id="getScheduledIds"></div>
<h3><code>getScheduledIds()</code>
  
</h3>


Get the ids of scheduled notifications






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



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





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



<div id="getAll"></div>
<h3><code>getAll()</code>
  
</h3>


Get all notification objects






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



<div id="getAllScheduled"></div>
<h3><code>getAllScheduled()</code>
  
</h3>


Get all scheduled notification objects






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



<div id="getAllTriggered"></div>
<h3><code>getAllTriggered()</code>
  
</h3>


Get all triggered notification objects






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



<div id="registerPermission"></div>
<h3><code>registerPermission()</code>
  
</h3>


Register permission to show notifications if not already granted.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



<div id="hasPermission"></div>
<h3><code>hasPermission()</code>
  
</h3>


Informs if the app has the permission to show notifications.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> Returns a promise
</div>



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








<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

