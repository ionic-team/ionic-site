---
layout: "fluid/docs_base"
version: "4.15.0"
versionHref: "/docs/native"
path: ""
category: native
id: "clevertap"
title: "CleverTap"
header_sub_title: "Class in module "
doc: "CleverTap"
docType: "class"
---

<h1 class="api-title">CleverTap</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/clevertap/index.ts#L3">
  Improve this doc
</a>







<p>Cordova Plugin that wraps CleverTap SDK for Android and iOS</p>


<p>Repo:
  <a href="https://github.com/CleverTap/clevertap-cordova">
    https://github.com/CleverTap/clevertap-cordova
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add clevertap-cordova
$ npm install --save @ionic-native/clevertap
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { CleverTap } from &#39;@ionic-native/clevertap&#39;;

constructor(private clevertap: CleverTap) { }
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="notifyDeviceReady" href="#notifyDeviceReady"></a><code>notifyDeviceReady()</code></h3>


notify device ready
NOTE: in iOS use to be notified of launch Push Notification or Deep Link
in Android use only in android phonegap build projects


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="enablePersonalization" href="#enablePersonalization"></a><code>enablePersonalization()</code></h3>


****************
Personalization
****************
Personalization
Enables the Personalization API


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setOptOut" href="#setOptOut"></a><code>setOptOut(optOut)</code></h3>


Enables tracking opt out for the currently active user.
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
      optOut</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="enableDeviceNetworkInfoReporting" href="#enableDeviceNetworkInfoReporting"></a><code>enableDeviceNetworkInfoReporting(enable)</code></h3>


Enables the reporting of device network related information, including IP address.  This reporting is disabled by default.
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

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="registerPush" href="#registerPush"></a><code>registerPush()</code></h3>


****************
Push
****************
Registers for push notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setPushToken" href="#setPushToken"></a><code>setPushToken(token)</code></h3>


Sets the device's push token
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
      token</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="createNotificationChannel" href="#createNotificationChannel"></a><code>createNotificationChannel(channelID,&nbsp;channelName,&nbsp;channelDescription,&nbsp;importance,&nbsp;showBadge)</code></h3>


Create Notification Channel for Android O+
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
      channelID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      channelName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      channelDescription</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      importance</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      showBadge</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="createNotificationChannelWithSound" href="#createNotificationChannelWithSound"></a><code>createNotificationChannelWithSound(channelID,&nbsp;channelName,&nbsp;channelDescription,&nbsp;importance,&nbsp;showBadge,&nbsp;sound)</code></h3>


Create Notification Channel for Android O+
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
      channelID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      channelName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      channelDescription</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      importance</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      showBadge</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      sound</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="createNotificationChannelWithGroupId" href="#createNotificationChannelWithGroupId"></a><code>createNotificationChannelWithGroupId(channelID,&nbsp;channelName,&nbsp;channelDescription,&nbsp;importance,&nbsp;groupId,&nbsp;showBadge,&nbsp;sound)</code></h3>


Create Notification Channel with Group ID for Android O+
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
      channelID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      channelName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      channelDescription</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      importance</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      groupId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      showBadge</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      sound</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="createNotificationChannelWithGroupIdAndSound" href="#createNotificationChannelWithGroupIdAndSound"></a><code>createNotificationChannelWithGroupIdAndSound(channelID,&nbsp;channelName,&nbsp;channelDescription,&nbsp;importance,&nbsp;groupId,&nbsp;showBadge)</code></h3>


Create Notification Channel with Group ID for Android O+
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
      channelID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      channelName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      channelDescription</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      importance</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      groupId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      showBadge</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="createNotificationChannelGroup" href="#createNotificationChannelGroup"></a><code>createNotificationChannelGroup(groupID,&nbsp;groupName)</code></h3>


Create Notification Channel Group for Android O+
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
      groupID</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      groupName</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="deleteNotificationChannel" href="#deleteNotificationChannel"></a><code>deleteNotificationChannel(channelID)</code></h3>


Delete Notification Channel for Android O+
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
      channelID</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="deleteNotificationChannelGroup" href="#deleteNotificationChannelGroup"></a><code>deleteNotificationChannelGroup(groupID)</code></h3>


Delete Notification Group for Android O+
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
      groupID</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="recordScreenView" href="#recordScreenView"></a><code>recordScreenView(screenName)</code></h3>


****************
Events
****************
Record Screen View
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
      screenName</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="recordEventWithName" href="#recordEventWithName"></a><code>recordEventWithName(eventName)</code></h3>


Record Event with Name
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
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="recordEventWithNameAndProps" href="#recordEventWithNameAndProps"></a><code>recordEventWithNameAndProps(eventName,&nbsp;eventProps)</code></h3>


Record Event with Name and Event properties
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
      </td>
  </tr>
  
  <tr>
    <td>
      eventProps</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="recordChargedEventWithDetailsAndItems" href="#recordChargedEventWithDetailsAndItems"></a><code>recordChargedEventWithDetailsAndItems(details,&nbsp;items)</code></h3>


Record Charged Event with Details and Items
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
      details</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>object with transaction details</p>
</td>
  </tr>
  
  <tr>
    <td>
      items</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>array of items purchased</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="eventGetFirstTime" href="#eventGetFirstTime"></a><code>eventGetFirstTime(eventName)</code></h3>


Get Event First Time
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
      <p>callback returns epoch seconds or -1</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="eventGetLastTime" href="#eventGetLastTime"></a><code>eventGetLastTime(eventName)</code></h3>


Get Event Last Time
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
      <p>callback returns epoch seconds or -1</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="eventGetOccurrences" href="#eventGetOccurrences"></a><code>eventGetOccurrences(eventName)</code></h3>


Get Event Number of Occurrences
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
      <p>calls back with int or -1</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="eventGetDetails" href="#eventGetDetails"></a><code>eventGetDetails(eventName)</code></h3>


Get Event Details
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
      <p>calls back with object {&quot;eventName&quot;: <string>, &quot;firstTime&quot;:<epoch seconds>, &quot;lastTime&quot;: <epoch seconds>, &quot;count&quot;: <int>} or empty object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getEventHistory" href="#getEventHistory"></a><code>getEventHistory()</code></h3>


Get Event History
calls back with object {"eventName1":<event1 details object>, "eventName2":<event2 details object>}


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getLocation" href="#getLocation"></a><code>getLocation()</code></h3>


****************
Profiles
****************
Get the device location if available.
On iOS:
Calling this will prompt the user location permissions dialog.
Please be sure to include the NSLocationWhenInUseUsageDescription key in your Info.plist.
Uses desired accuracy of kCLLocationAccuracyHundredMeters.
If you need background location updates or finer accuracy please implement your own location handling.
On Android:
Requires Location Permission in AndroidManifest e.g. "android.permission.ACCESS_COARSE_LOCATION"
You can use location to pass it to CleverTap via the setLocation API
for, among other things, more fine-grained geo-targeting and segmentation purposes.
Note: on iOS the call to CleverTapSDK must be made on the main thread due to LocationManager restrictions, but the CleverTapSDK method itself is non-blocking.
calls back with {lat:lat, lon:lon} lat and lon are floats


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setLocation" href="#setLocation"></a><code>setLocation(lat,&nbsp;lon)</code></h3>


Set location
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
      lat</td>
    <td>
      <code>number</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      lon</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onUserLogin" href="#onUserLogin"></a><code>onUserLogin(profile)</code></h3>


Creates a separate and distinct user profile identified by one or more of Identity, Email, FBID or GPID values,
and populated with the key-values included in the profile dictionary.
If your app is used by multiple users, you can use this method to assign them each a unique profile to track them separately.
If instead you wish to assign multiple Identity, Email, FBID and/or GPID values to the same user profile,
use profileSet rather than this method.
If none of Identity, Email, FBID or GPID is included in the profile dictionary,
all properties values will be associated with the current user profile.
When initially installed on this device, your app is assigned an "anonymous" profile.
The first time you identify a user on this device (whether via onUserLogin or profileSet),
the "anonymous" history on the device will be associated with the newly identified user.
Then, use this method to switch between subsequent separate identified users.
Please note that switching from one identified user to another is a costly operation
in that the current session for the previous user is automatically closed
and data relating to the old user removed, and a new session is started
for the new user and data for that user refreshed via a network call to CleverTap.
In addition, any global frequency caps are reset as part of the switch.
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
      profile</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileSet" href="#profileSet"></a><code>profileSet(profile)</code></h3>


Set profile attributes
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
      profile</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileSetGraphUser" href="#profileSetGraphUser"></a><code>profileSetGraphUser(profile)</code></h3>


Set profile attributes from facebook user
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
      profile</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>facebook graph user object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileGooglePlusUser" href="#profileGooglePlusUser"></a><code>profileGooglePlusUser(profile)</code></h3>


Set profile attributes rom google plus user
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
      profile</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>google plus user object</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileGetProperty" href="#profileGetProperty"></a><code>profileGetProperty(propertyName)</code></h3>


Get User Profile Property
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
      propertyName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>calls back with value of propertyName or false</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileGetCleverTapAttributionIdentifier" href="#profileGetCleverTapAttributionIdentifier"></a><code>profileGetCleverTapAttributionIdentifier()</code></h3>


Get a unique CleverTap identifier suitable for use with install attribution providers.
calls back with unique CleverTap attribution identifier


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileGetCleverTapID" href="#profileGetCleverTapID"></a><code>profileGetCleverTapID()</code></h3>


Get User Profile CleverTapID
calls back with CleverTapID or false


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileRemoveValueForKey" href="#profileRemoveValueForKey"></a><code>profileRemoveValueForKey(key)</code></h3>


Remove the property specified by key from the user profile
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
      key</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileSetMultiValues" href="#profileSetMultiValues"></a><code>profileSetMultiValues(key,&nbsp;values)</code></h3>


Method for setting a multi-value user profile property
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      values</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>array of strings</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileAddMultiValue" href="#profileAddMultiValue"></a><code>profileAddMultiValue(key,&nbsp;value)</code></h3>


Method for adding a value to a multi-value user profile property
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      value</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileAddMultiValues" href="#profileAddMultiValues"></a><code>profileAddMultiValues(key,&nbsp;values)</code></h3>


Method for adding values to a multi-value user profile property
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      values</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>array of strings</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileRemoveMultiValue" href="#profileRemoveMultiValue"></a><code>profileRemoveMultiValue(key,&nbsp;value)</code></h3>


Method for removing a value from a multi-value user profile property
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      value</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="profileRemoveMultiValues" href="#profileRemoveMultiValues"></a><code>profileRemoveMultiValues(key,&nbsp;values)</code></h3>


Method for removing a value from a multi-value user profile property
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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      values</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>array of strings</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="sessionGetTimeElapsed" href="#sessionGetTimeElapsed"></a><code>sessionGetTimeElapsed()</code></h3>


****************
Session
****************
Get Session Elapsed Time
calls back with seconds


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="sessionGetTotalVisits" href="#sessionGetTotalVisits"></a><code>sessionGetTotalVisits()</code></h3>


Get Session Total Visits
calls back with with int or -1


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="sessionGetScreenCount" href="#sessionGetScreenCount"></a><code>sessionGetScreenCount()</code></h3>


Get Session Screen Count
calls back with with int


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="sessionGetPreviousVisitTime" href="#sessionGetPreviousVisitTime"></a><code>sessionGetPreviousVisitTime()</code></h3>


Get Session Previous Visit Time
calls back with with epoch seconds or -1


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="sessionGetUTMDetails" href="#sessionGetUTMDetails"></a><code>sessionGetUTMDetails()</code></h3>


Get Sesssion Referrer UTM details
object {"source": <string>, "medium": <string>, "campaign": <string>} or empty object


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="pushInstallReferrer" href="#pushInstallReferrer"></a><code>pushInstallReferrer(source,&nbsp;medium,&nbsp;campaign)</code></h3>


Call this to manually track the utm details for an incoming install referrer
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
      source</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      medium</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      campaign</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="setDebugLevel" href="#setDebugLevel"></a><code>setDebugLevel(level)</code></h3>


****************
Developer Options
****************
0 is off, 1 is info, 2 is debug, default is 1
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
      level</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





