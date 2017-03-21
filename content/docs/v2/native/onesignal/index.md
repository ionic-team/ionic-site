---
layout: "v2_fluid/docs_base"
version: "3.1.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "onesignal"
title: "OneSignal"
header_sub_title: "Class in module "
doc: "OneSignal"
docType: "class"
---







<h1 class="api-title">
  
  OneSignal
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/onesignal/index.ts#L260">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add onesignal-cordova-plugin
$ npm install --save @ionic-native/onesignal
</code></pre>
<p>Repo:
  <a href="https://github.com/OneSignal/OneSignal-Cordova-SDK">
    https://github.com/OneSignal/OneSignal-Cordova-SDK
  </a>
</p>

<!-- description -->

<p>The OneSignal plugin is an client implementation for using the <a href="https://onesignal.com/">OneSignal</a> Service.
OneSignal is a simple implementation for delivering push notifications.</p>
<p>Requires Cordova plugin: <code>onesignal-cordova-plugin</code>. For more info, please see the <a href="https://documentation.onesignal.com/docs/phonegap-sdk-installation">OneSignal Cordova Docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows</li><li>FireOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { OneSignal } from &#39;@ionic-native/onesignal&#39;;

constructor(private oneSignal: OneSignal) { }

...

this.oneSignal.startInit(&#39;b2f7f966-d8cc-11e4-bed1-df8f05be55ba&#39;, &#39;703322744261&#39;);

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

this.oneSignal.handleNotificationReceived().subscribe(() =&gt; {
 // do something when notification is received
});

this.oneSignal.handleNotificationOpened().subscribe(() =&gt; {
  // do something when a notification is opened
});

this.oneSignal.endInit();
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="OSInFocusDisplayOption"></div>
<h3>
  <code>OSInFocusDisplayOption</code>
  

</h3>
constants to use in inFocusDisplaying()



<div id="startInit"></div>
<h3>
  <code>startInit(appId,&nbsp;googleProjectNumber)</code>
  

</h3>
Start the initialization process. Once you are done configuring OneSignal, call the `endInit` function.

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
      appId
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Your OneSignal app id</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      googleProjectNumber
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - your Google project number; only required for Android GCM/FCM pushes.</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>any</code> 
</div><div id="handleNotificationReceived"></div>
<h3>
  <code>handleNotificationReceived()</code>
  

</h3>
Callback to run when a notification is received, whether it was displayed or not.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;OneSignalReceivedNotification&gt;</code> 
</div><div id="handleNotificationOpened"></div>
<h3>
  <code>handleNotificationOpened()</code>
  

</h3>
Callback to run when a notification is tapped on from the notification shade (**ANDROID**) or notification
center (**iOS**), or when closing an Alert notification shown in the app (if InAppAlert is enabled in
inFocusDisplaying).



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;OneSignalOpenedNotification&gt;</code> 
</div><div id="iOSSettings"></div>
<h3>
  <code>iOSSettings(settings)</code>
  

</h3>
**iOS** - Settings for iOS apps

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
      settings
      
    </td>
    <td>
      

    </td>
    <td>
      <p>kOSSettingsKeyAutoPrompt: boolean = true
 Auto prompt user for notification permissions.</p>
<p> kOSSettingsKeyInAppLaunchURL: boolean = false
 Launch notifications with a launch URL as an in app webview.</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>any</code> 
</div><div id="endInit"></div>
<h3>
  <code>endInit()</code>
  

</h3>
Must be called after `startInit` to complete initialization of OneSignal.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>any</code> 
</div><div id="getTags"></div>
<h3>
  <code>getTags()</code>
  

</h3>
Retrieve a list of tags that have been set on the user from the OneSignal server.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves when tags are recieved.
</div><div id="getIds"></div>
<h3>
  <code>getIds()</code>
  

</h3>
Lets you retrieve the OneSignal user id and device token.
Your handler is called after the device is successfully registered with OneSignal.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Object&gt;</code> Returns a Promise that resolves if the device was successfully registered.

 userId {string} OneSignal userId is a UUID formatted string. (unique per device per app)

 pushToken {string} A push token is a Google/Apple assigned identifier(unique per device per app).
</div><div id="sendTag"></div>
<h3>
  <code>sendTag(Key,&nbsp;Value)</code>
  

</h3>
Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.

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
      Key
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>of your choosing to create or update.</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      Value
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="sendTags"></div>
<h3>
  <code>sendTags(Pass)</code>
  

</h3>
Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.

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
      Pass
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>a json object with key/value pairs like: {key: &quot;value&quot;, key2: &quot;value2&quot;}</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="deleteTag"></div>
<h3>
  <code>deleteTag(Key)</code>
  

</h3>
Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.

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
      Key
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>to remove.</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="deleteTags"></div>
<h3>
  <code>deleteTags(Keys)</code>
  

</h3>
Deletes tags that were previously set on a user with `sendTag` or `sendTags`.

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
      Keys
      
    </td>
    <td>
      
<code>Array&lt;string&gt;</code>
    </td>
    <td>
      <p>to remove.</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="registerForPushNotifications"></div>
<h3>
  <code>registerForPushNotifications()</code>
  

</h3>
Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
Only works if you set `kOSSettingsAutoPrompt` to `false` in `iOSSettings`



<div id="enableVibrate"></div>
<h3>
  <code>enableVibrate(false)</code>
  

</h3>
Warning:
Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.

By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.

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
      false
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      <p>to disable vibrate, true to re-enable it.</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="enableSound"></div>
<h3>
  <code>enableSound(false)</code>
  

</h3>
Warning:
Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.

By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
Passing false means that the device will only vibrate unless the device is set to a total silent mode.

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
      false
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      <p>to disable sound, true to re-enable it.</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="inFocusDisplaying"></div>
<h3>
  <code>inFocusDisplaying(displayOption)</code>
  

</h3>
Setting to control how OneSignal notifications will be shown when one is received while your app is in focus. By default this is set to inAppAlert, which can be helpful during development.

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
      displayOption
      
    </td>
    <td>
      
<code>DisplayType</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>any</code> 
</div><div id="setSubscription"></div>
<h3>
  <code>setSubscription(enable)</code>
  

</h3>
You can call this method with false to opt users out of receiving all notifications through OneSignal.
You can pass true later to opt users back into notifications.

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
      enable
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="postNotification"></div>
<h3>
  <code>postNotification(Parameters)</code>
  

</h3>

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
      Parameters
      
    </td>
    <td>
      
<code>notificationObj</code>
    </td>
    <td>
      <p>see POST <a href="https://documentation.onesignal.com/v2.0/docs/notifications-create-notification">documentation</a></p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves if the notification was send successfully.
</div><div id="promptLocation"></div>
<h3>
  <code>promptLocation()</code>
  

</h3>
Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.



<div id="syncHashedEmail"></div>
<h3>
  <code>syncHashedEmail(email)</code>
  

</h3>

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
      email
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setLogLevel"></div>
<h3>
  <code>setLogLevel(contains)</code>
  

</h3>
Enable logging to help debug if you run into an issue setting up OneSignal.
The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose

The higher the value the more information is shown.

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
      contains
      
    </td>
    <td>
      
<code>loglevel</code>
    </td>
    <td>
      <p>two properties: logLevel (for console logging) and visualLevel (for dialog messages)</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="OSNotification" href="#OSNotification"></a>OSNotification</h2>


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
      isAppInFocus
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Was app in focus.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      shown
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Was notification shown to the user. Will be false for silent notifications.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      androidNotificationId
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - Android Notification assigned to the notification. Can be used to cancel or replace the notification.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      payload
    </td>
    <td>
      <code>OSNotificationPayload</code>
    </td>
    <td>
      <p>Payload received from OneSignal.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      displayType
    </td>
    <td>
      <code>OSDisplayType</code>
    </td>
    <td>
      <p>How the notification was displayed to the user. Can be set to <code>Notification</code>, <code>InAppAlert</code>, or <code>None</code> if it was not displayed.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      groupedNotifications
    </td>
    <td>
      <code>OSNotificationPayload[]</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - Notification is a summary notification for a group this will contain all notification payloads it was created from.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      app_id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      contents
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      headings
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isIos
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isAndroid
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isWP
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isWP_WNS
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isAdm
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isChrome
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isChromeWeb
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isSafari
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isAnyWeb
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      included_segments
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      excluded_segments
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      include_player_ids
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      include_ios_tokens
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      include_android_reg_ids
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      include_wp_uris
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      include_wp_wns_uris
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      include_amazon_reg_ids
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      include_chrome_reg_ids
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      include_chrome_web_reg_ids
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      app_ids
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      tags
    </td>
    <td>
      <code>any[]</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      ios_badgeType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      ios_badgeCount
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      ios_sound
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      android_sound
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      adm_sound
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      wp_sound
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      wp_wns_sound
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      buttons
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      small_icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      large_icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      big_picture
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      adm_small_icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      adm_large_icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      adm_big_picture
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      chrome_icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      chrome_big_picture
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      chrome_web_icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      firefox_icon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      send_after
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      delayed_option
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      delivery_time_of_day
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      android_led_color
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      android_accent_color
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      android_visibility
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      content_available
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      amazon_background_data
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      template_id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      android_group
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      android_group_message
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      adm_group
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      adm_group_message
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      ttl
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      ios_category
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="OSLockScreenVisibility" href="#OSLockScreenVisibility"></a>OSLockScreenVisibility</h2>


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
      Public
    </td>
    <td>
      <code>1</code>
    </td>
    <td>
      <p>Fully visible (default)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      Private
    </td>
    <td>
      <code>0</code>
    </td>
    <td>
      <p>Contents are hidden</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      Secret
    </td>
    <td>
      <code>-1</code>
    </td>
    <td>
      <p>Not shown</p>

      
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="OSDisplayType" href="#OSDisplayType"></a>OSDisplayType</h2>


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
      None
    </td>
    <td>
      <code>0</code>
    </td>
    <td>
      <p>notification is silent, or inFocusDisplaying is disabled.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      InAppAlert
    </td>
    <td>
      <code>1</code>
    </td>
    <td>
      <p>(<strong>DEFAULT</strong>) - native alert dialog display.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      Notification
    </td>
    <td>
      <code>2</code>
    </td>
    <td>
      <p>native notification display.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="OSNotificationPayload" href="#OSNotificationPayload"></a>OSNotificationPayload</h2>


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
      notificationID
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>OneSignal notification UUID.</p>

      
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
      <p>Title of the notification.</p>

      
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
      <p>Body of the notification.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      additionalData
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Custom additional data that was sent with the notification. Set on the dashboard under Options &gt; Additional Data
or with the &#39;data&#39; field on the REST API.</p>

      <strong class="tag">Optional</strong>
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
      <p><strong>ANDROID</strong> - Small icon resource name set on the notification.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      largeIcon
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - Large icon set on the notification.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      bigPicture
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - Big picture image set on the notification.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      smallIconAccentColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - Accent color shown around small notification icon on Android 5+ devices. ARGB format.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      launchUrl
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL to open when opening the notification.</p>

      <strong class="tag">Optional</strong>
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
      <p>Sound resource to play when the notification is shown.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      ledColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - Devices that have a notification LED will blink in this color. ARGB format.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      lockScreenVisibility
    </td>
    <td>
      <code>OSLockScreenVisibility</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      groupKey
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - Notifications with this same key will be grouped together as a single summary notification.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      groupMessage
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - Summary text displayed in the summary notification.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      actionButtons
    </td>
    <td>
      <code>OSActionButton[]</code>
    </td>
    <td>
      <p>List of action buttons on the notification.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fromProjectNumber
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - The Google project number the notification was sent under.</p>

      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      backgroundImageLayout
    </td>
    <td>
      <code>OSBackgroundImageLayout</code>
    </td>
    <td>
      <p><strong>ANDROID</strong> - If a background image was set this object will be available.</p>

      <strong class="tag">Optional</strong>
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
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      rawPayload
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>List of action buttons on the notification.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="OSActionButton" href="#OSActionButton"></a>OSActionButton</h2>


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
      <code>string</code>
    </td>
    <td>
      <p>Id assigned to the button.</p>

      
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
      <p>Text show on the button to the user.</p>

      
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
      <p><strong>ANDROID</strong> - Icon shown on the button.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="OSBackgroundImageLayout" href="#OSBackgroundImageLayout"></a>OSBackgroundImageLayout</h2>


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
      image
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Image URL or name used as the background image.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      titleTextColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Text color of the title on the notification. ARGB Format.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      bodyTextColor
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Text color of the body on the notification. ARGB Format.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="OSNotificationOpenedResult" href="#OSNotificationOpenedResult"></a>OSNotificationOpenedResult</h2>


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
      action
    </td>
    <td>
      <code>*/
    actionID?: string;
  }</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      notification
    </td>
    <td>
      <code>OSNotification</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="OSActionType" href="#OSActionType"></a>OSActionType</h2>


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
      Opened
    </td>
    <td>
      <code>0</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      ActionTake
    </td>
    <td>
      <code>1</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

