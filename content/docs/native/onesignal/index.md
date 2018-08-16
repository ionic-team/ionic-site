---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "onesignal"
title: "OneSignal"
header_sub_title: "Class in module "
doc: "OneSignal"
docType: "class"
---

<h1 class="api-title">OneSignal</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/onesignal/index.ts#L300">
  Improve this doc
</a>







<p>The OneSignal plugin is an client implementation for using the <a href="https://onesignal.com/">OneSignal</a> Service.
OneSignal is a simple implementation for delivering push notifications.</p>
<p>Please view the official <a href="https://documentation.onesignal.com/docs/ionic-sdk-setup">OneSignal Ionic SDK Installation</a> guide
for more information.</p>
<h4 id="icons">Icons</h4>
<p>If you want to use generated icons with command <code>ionic cordova resources</code>:</p>
<ol>
<li><p>Add a file to your <code>hooks</code> directory called <code>copy_android_notification_icons.js</code></p>
</li>
<li><p>Configure the hook in your config.xml</p>
<pre><code>&lt;platform name=&quot;android&quot;&gt;
    &lt;hook type=&quot;after_prepare&quot; src=&quot;hooks/copy_android_notification_icons.js&quot; /&gt;
&lt;/platform&gt;
</code></pre>
</li>
<li><p>Put the following code in it:</p>
</li>
</ol>
<pre><code>#!/usr/bin/env node

var fs = require(&#39;fs&#39;);
var path = require(&#39;path&#39;);

var filestocopy = [{
    &quot;resources/android/icon/drawable-hdpi-icon.png&quot;:
        &quot;platforms/android/res/drawable-hdpi/ic_stat_onesignal_default.png&quot;
}, {
    &quot;resources/android/icon/drawable-mdpi-icon.png&quot;:
        &quot;platforms/android/res/drawable-mdpi/ic_stat_onesignal_default.png&quot;
}, {
    &quot;resources/android/icon/drawable-xhdpi-icon.png&quot;:
        &quot;platforms/android/res/drawable-xhdpi/ic_stat_onesignal_default.png&quot;
}, {
    &quot;resources/android/icon/drawable-xxhdpi-icon.png&quot;:
        &quot;platforms/android/res/drawable-xxhdpi/ic_stat_onesignal_default.png&quot;
}, {
    &quot;resources/android/icon/drawable-xxxhdpi-icon.png&quot;:
        &quot;platforms/android/res/drawable-xxxhdpi/ic_stat_onesignal_default.png&quot;
} ];

module.exports = function(context) {

    // no need to configure below
    var rootdir = context.opts.projectRoot;

    filestocopy.forEach(function(obj) {
        Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            var srcfile = path.join(rootdir, key);
            var destfile = path.join(rootdir, val);
            console.log(&quot;copying &quot;+srcfile+&quot; to &quot;+destfile);
            var destdir = path.dirname(destfile);
            if (fs.existsSync(srcfile) &amp;&amp; fs.existsSync(destdir)) {
                fs.createReadStream(srcfile).pipe(
                    fs.createWriteStream(destfile));
            }
        });
    });

};
</code></pre>
<ol>
<li>From the root of your project make the file executable:
<code>$ chmod +x hooks/after_prepare/030_copy_android_notification_icons.js</code></li>
</ol>


<p>Repo:
  <a href="https://github.com/OneSignal/OneSignal-Cordova-SDK">
    https://github.com/OneSignal/OneSignal-Cordova-SDK
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add onesignal-cordova-plugin
$ npm install --save @ionic-native/onesignal
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
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








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="OSInFocusDisplayOption" href="#OSInFocusDisplayOption"></a><code>OSInFocusDisplayOption</code></h3>

constants to use in inFocusDisplaying()



<h3><a class="anchor" name="startInit" href="#startInit"></a><code>startInit(appId,&nbsp;googleProjectNumber)</code></h3>




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
      appId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Your OneSignal app id</p>
</td>
  </tr>
  
  <tr>
    <td>
      googleProjectNumber</td>
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
  <b>Returns:</b> <code>any</code> 
</div><h3><a class="anchor" name="handleNotificationReceived" href="#handleNotificationReceived"></a><code>handleNotificationReceived()</code></h3>




Callback to run when a notification is received, whether it was displayed or not.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;OneSignalReceivedNotification&gt;</code> 
</div><h3><a class="anchor" name="handleNotificationOpened" href="#handleNotificationOpened"></a><code>handleNotificationOpened()</code></h3>




Callback to run when a notification is tapped on from the notification shade (**ANDROID**) or notification
center (**iOS**), or when closing an Alert notification shown in the app (if InAppAlert is enabled in
inFocusDisplaying).



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;OneSignalOpenedNotification&gt;</code> 
</div><h3><a class="anchor" name="iOSSettings" href="#iOSSettings"></a><code>iOSSettings(settings)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


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
      settings</td>
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
  <b>Returns:</b> <code>any</code> 
</div><h3><a class="anchor" name="endInit" href="#endInit"></a><code>endInit()</code></h3>




Must be called after `startInit` to complete initialization of OneSignal.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>any</code> 
</div><h3><a class="anchor" name="promptForPushNotificationsWithUserResponse" href="#promptForPushNotificationsWithUserResponse"></a><code>promptForPushNotificationsWithUserResponse()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Prompt the user for notification permissions. Callback fires as soon as the user accepts or declines notifications.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getTags" href="#getTags"></a><code>getTags()</code></h3>


Retrieve a list of tags that have been set on the user from the OneSignal server.

**Quirk**: You must wait for `getTags` to resolve before calling it again, as the plugin will only process the last method call and discard any previous ones.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves when tags are recieved.
</div><h3><a class="anchor" name="getIds" href="#getIds"></a><code>getIds()</code></h3>


Lets you retrieve the OneSignal user id and device token.
Your handler is called after the device is successfully registered with OneSignal.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Object&gt;</code> Returns a Promise that resolves if the device was successfully registered.

 userId {string} OneSignal userId is a UUID formatted string. (unique per device per app)

 pushToken {string} A push token is a Google/Apple assigned identifier(unique per device per app).
</div><h3><a class="anchor" name="sendTag" href="#sendTag"></a><code>sendTag(Key,&nbsp;Value)</code></h3>




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
      Key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>of your choosing to create or update.</p>
</td>
  </tr>
  
  <tr>
    <td>
      Value</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendTags" href="#sendTags"></a><code>sendTags(Pass)</code></h3>




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
      Pass</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>a json object with key/value pairs like: {key: &quot;value&quot;, key2: &quot;value2&quot;}</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="deleteTag" href="#deleteTag"></a><code>deleteTag(Key)</code></h3>




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
      Key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>to remove.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="deleteTags" href="#deleteTags"></a><code>deleteTags(Keys)</code></h3>




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
      Keys</td>
    <td>
      <code>Array&lt;string&gt;</code>
    </td>
    <td>
      <p>to remove.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="registerForPushNotifications" href="#registerForPushNotifications"></a><code>registerForPushNotifications()</code></h3>




Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
Only works if you set `kOSSettingsAutoPrompt` to `false` in `iOSSettings`



<h3><a class="anchor" name="enableVibrate" href="#enableVibrate"></a><code>enableVibrate(false)</code></h3>




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
      false</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>to disable vibrate, true to re-enable it.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="enableSound" href="#enableSound"></a><code>enableSound(false)</code></h3>




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
      false</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>to disable sound, true to re-enable it.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="inFocusDisplaying" href="#inFocusDisplaying"></a><code>inFocusDisplaying(displayOption)</code></h3>




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
      displayOption</td>
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
  <b>Returns:</b> <code>any</code> 
</div><h3><a class="anchor" name="setSubscription" href="#setSubscription"></a><code>setSubscription(enable)</code></h3>




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
      enable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getPermissionSubscriptionState" href="#getPermissionSubscriptionState"></a><code>getPermissionSubscriptionState()</code></h3>


Get the current notification and permission state. Returns a OSPermissionSubscriptionState type described below.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;OSPermissionSubscriptionState&gt;</code> 
</div><h3><a class="anchor" name="postNotification" href="#postNotification"></a><code>postNotification(Parameters)</code></h3>



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
      Parameters</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves if the notification was send successfully.
</div><h3><a class="anchor" name="cancelNotification" href="#cancelNotification"></a><code>cancelNotification(notificationId)</code></h3>




Cancels a single OneSignal notification based on its Android notification integer id. Use instead of NotificationManager.cancel(id); otherwise the notification will be restored when your app is restarted.
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
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="promptLocation" href="#promptLocation"></a><code>promptLocation()</code></h3>




Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.



<h3><a class="anchor" name="syncHashedEmail" href="#syncHashedEmail"></a><code>syncHashedEmail(email)</code></h3>





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
      email</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setLogLevel" href="#setLogLevel"></a><code>setLogLevel(contains)</code></h3>




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
      contains</td>
    <td>
      <code>loglevel</code>
    </td>
    <td>
      <p>two properties: logLevel (for console logging) and visualLevel (for dialog messages)</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="addPermissionObserver" href="#addPermissionObserver"></a><code>addPermissionObserver()</code></h3>




The passed in function will be fired when a notification permission setting changes.
This includes the following events:
- Notification permission prompt shown
- The user accepting or declining the permission prompt
- Enabling/disabling notifications for your app in the device Settings after returning to your app.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="addSubscriptionObserver" href="#addSubscriptionObserver"></a><code>addSubscriptionObserver()</code></h3>




The passed in function will be fired when a notification subscription property changes.
This includes the following events:
- Getting a push token from Apple / Google.
- Getting a player / user id from OneSignal
- OneSignal.setSubscription is called
- User disables or enables notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="clearOneSignalNotifications" href="#clearOneSignalNotifications"></a><code>clearOneSignalNotifications()</code></h3>




Clears all OneSignla notifications









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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      collapse_id
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      
      <em>(optional)</em>
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
      <p><strong>ANDROID</strong> - Small icon resource name set on the notification.</p>

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      launchURL
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL to open when opening the notification.</p>

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

      <em>(optional)</em>
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
      
      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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

      <em>(optional)</em>
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
      
      <em>(optional)</em>
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





