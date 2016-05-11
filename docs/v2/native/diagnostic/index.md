---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "diagnostic"
title: "Diagnostic"
header_sub_title: "Class in module "
doc: "Diagnostic"
docType: "class"
---








<h1 class="api-title">

  
  Diagnostic
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/diagnostic.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova.plugins.diagnostic</code></pre>
<p>Repo:
  <a href="https://github.com/floatinghotpot/cordova-plugin-admob">
    https://github.com/floatinghotpot/cordova-plugin-admob
  </a>
</p>

<!-- description -->




<!-- @usage tag -->


<!-- @property tags -->
<h2>Static Methods</h2>
<div id="isLocationEnabled"></div>
<h3><code>isLocationEnabled()</code>

</h3>

Checks if app is able to access device location.










<div id="isWifiEnabled"></div>
<h3><code>isWifiEnabled()</code>

</h3>

Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`










<div id="isCameraEnabled"></div>
<h3><code>isCameraEnabled()</code>

</h3>











<div id="isBluetoothEnabled"></div>
<h3><code>isBluetoothEnabled()</code>

</h3>











<div id="requestLocationAuthorization"></div>
<h3><code>requestLocationAuthorization()</code>

</h3>











<div id="isLocationAuthorized"></div>
<h3><code>isLocationAuthorized()</code>

</h3>











<div id="isCameraPresent"></div>
<h3><code>isCameraPresent()</code>

</h3>











<div id="isCameraAuthorized"></div>
<h3><code>isCameraAuthorized()</code>

</h3>











<div id="isGpsLocationEnabled"></div>
<h3><code>isGpsLocationEnabled()</code>

</h3>











<div id="isNetworkLocationEnabled"></div>
<h3><code>isNetworkLocationEnabled()</code>

</h3>











<div id="isRemoteNotificationsEnabled"></div>
<h3><code>isRemoteNotificationsEnabled()</code>

</h3>

Checks if remote (push) notifications are enabled.
On iOS 8+, returns true if app is registered for remote notifications AND "Allow Notifications" switch is ON AND alert style is not set to "None" (i.e. "Banners" or "Alerts").
On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRegisteredForRemoteNotifications().










<div id="isRegisteredForRemoteNotifications"></div>
<h3><code>isRegisteredForRemoteNotifications()</code>

</h3>

Indicates if the app is registered for remote (push) notifications on the device.
On iOS 8+, returns true if the app is registered for remote notifications and received its device token, or false if registration has not occurred, has failed, or has been denied by the user. Note that user preferences for notifications in the Settings app will not affect this.
On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRemoteNotificationsEnabled().











<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

