---
layout: "v2_fluid/docs_base"
version: "2.2.12"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/onesignal.ts#L64">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add onesignal-cordova-plugin</code></pre>
<p>Repo:
  <a href="https://github.com/OneSignal/OneSignal-Cordova-SDK">
    https://github.com/OneSignal/OneSignal-Cordova-SDK
  </a>
</p>

<!-- description -->

<p>The OneSignal plugin is an client implementation for using the <a href="https://onesignal.com/">OneSignal</a> Service.
OneSignal is a simple implementation for delivering push notifications.</p>
<p>Requires Cordova plugin: <code>onesignal-cordova-plugin</code>. For more info, please see the <a href="https://documentation.onesignal.com/docs/phonegap-sdk-installation">OneSignal Cordova Docs</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { OneSignal } from &#39;ionic-native&#39;;

OneSignal.startInit(&#39;b2f7f966-d8cc-11e4-bed1-df8f05be55ba&#39;, &#39;703322744261&#39;);

OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);

OneSignal.handleNotificationReceived().subscribe(() =&gt; {
 // do something when notification is received
});

OneSignal.handleNotificationOpened().subscribe(() =&gt; {
  // do something when a notification is opened
});

OneSignal.endInit();
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="OSInFocusDisplayOption"></div>
<h3><code>OSInFocusDisplayOption()</code>
  
</h3>

constants to use in inFocusDisplaying()










<div id="startInit"></div>
<h3><code>startInit(appId,&nbsp;googleProjectNumber)</code>
  
</h3>




Start the initialization process. Once you are done configuring OneSignal, call the endInit function.



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
      <p>Your AppId from your OneSignal app</p>

      
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
      <p>The Google Project Number (which you can get from the Google Developer Portal) and the autoRegister option.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>any</code> 
</div>



<div id="handleNotificationReceived"></div>
<h3><code>handleNotificationReceived()</code>
  
</h3>




Callback to run when a notification is received






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="handleNotificationOpened"></div>
<h3><code>handleNotificationOpened()</code>
  
</h3>




Callback to run when a notification is opened






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<div id="iOSSettings"></div>
<h3><code>iOSSettings(settings)</code>
  
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
      settings
      
      
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
<code>any</code> 
</div>



<div id="endInit"></div>
<h3><code>endInit()</code>
  
</h3>











<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>any</code> 
</div>



<div id="getTags"></div>
<h3><code>getTags()</code>
  
</h3>


Retrieve a list of tags that have been set on the user from the OneSignal server.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves when tags are recieved.
</div>



<div id="getIds"></div>
<h3><code>getIds()</code>
  
</h3>


Lets you retrieve the OneSignal user id and device token.
Your handler is called after the device is successfully registered with OneSignal.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that reolves if the device was successfully registered.
It returns a JSON with `userId`and `pushToken`.
</div>



<div id="sendTag"></div>
<h3><code>sendTag(Key,&nbsp;Value)</code>
  
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
<h3><code>sendTags(Pass)</code>
  
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
<h3><code>deleteTag(Key)</code>
  
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
<h3><code>deleteTags(Keys)</code>
  
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
<h3><code>registerForPushNotifications()</code>
  
</h3>




Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
Only use if you passed false to autoRegister when calling init.










<div id="enableVibrate"></div>
<h3><code>enableVibrate(false)</code>
  
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
<h3><code>enableSound(false)</code>
  
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
<h3><code>inFocusDisplaying(displayOption)</code>
  
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
      
<code>number</code>
    </td>
    <td>
      <p>Options are 0 = None, 1 = InAppAlert, and 2 = Notification.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="setSubscription"></div>
<h3><code>setSubscription(enable)</code>
  
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
<h3><code>postNotification(Parameters)</code>
  
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
</div>



<div id="promptLocation"></div>
<h3><code>promptLocation()</code>
  
</h3>




Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.










<div id="syncHashedEmail"></div>
<h3><code>syncHashedEmail(email)</code>
  
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
<h3><code>setLogLevel(contains)</code>
  
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








<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="OneSignalNotification" href="#OneSignalNotification"></a>OneSignalNotification</h2>


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
      app_id
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      isIos
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      isAndroid
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      isWP
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      isWP_WNS
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      isAdm
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      isChrome
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      isChromeWeb
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      isSafari
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      isAnyWeb
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      included_segments
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      excluded_segments
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      include_player_ids
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      include_ios_tokens
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      include_android_reg_ids
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      include_wp_uris
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      include_wp_wns_uris
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      include_amazon_reg_ids
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      include_chrome_reg_ids
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      include_chrome_web_reg_ids
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      app_ids
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      tags
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any[]</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      ios_badgeType
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      ios_badgeCount
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      ios_sound
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      android_sound
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      adm_sound
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      wp_sound
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      wp_wns_sound
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      data
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      buttons
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      small_icon
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      large_icon
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      big_picture
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      adm_small_icon
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      adm_large_icon
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      adm_big_picture
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      chrome_icon
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      chrome_big_picture
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      chrome_web_icon
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      firefox_icon
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      url
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      send_after
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      delayed_option
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      delivery_time_of_day
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      android_led_color
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      android_accent_color
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      android_visibility
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      content_available
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      amazon_background_data
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      template_id
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      android_group
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      android_group_message
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      adm_group
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      adm_group_message
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>any</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      ttl
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      priority
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  <tr>
    <td>
      ios_category
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

