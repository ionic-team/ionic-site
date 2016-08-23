---
layout: "v2_fluid/docs_base"
version: "1.3.17"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/diagnostic.ts#L0">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova.plugins.diagnostic</code></pre>
<p>Repo:
  <a href="https://github.com/dpa99c/cordova-diagnostic-plugin">
    https://github.com/dpa99c/cordova-diagnostic-plugin
  </a>
</p>

<!-- description -->

<p>Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Diagnostic } from &#39;ionic-native&#39;;
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="isLocationAvailable"></div>
<h3><code>isLocationAvailable()</code>
  
</h3>

Checks if app is able to access device location.










<div id="isWifiAvailable"></div>
<h3><code>isWifiAvailable()</code>
  
</h3>

Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`










<div id="isCameraAvailable"></div>
<h3><code>isCameraAvailable()</code>
  
</h3>

Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
application is authorized to use it.










<div id="isBluetoothAvailable"></div>
<h3><code>isBluetoothAvailable()</code>
  
</h3>

Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />










<div id="requestLocationAuthorization"></div>
<h3><code>requestLocationAuthorization()</code>
  
</h3>

Returns the location authorization status for the application.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

mode - (iOS-only / optional) location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".










<div id="isLocationAuthorized"></div>
<h3><code>isLocationAuthorized()</code>
  
</h3>

Checks if the application is authorized to use location.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.










<div id="isCameraPresent"></div>
<h3><code>isCameraPresent()</code>
  
</h3>

Checks if camera hardware is present on device.










<div id="isCameraAuthorized"></div>
<h3><code>isCameraAuthorized()</code>
  
</h3>

Checks if the application is authorized to use the camera.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.










<div id="isGpsLocationEnabled"></div>
<h3><code>isGpsLocationEnabled()</code>
  
</h3>

Checks if location mode is set to return high-accuracy locations from GPS hardware.
  Returns true if Location mode is enabled and is set to either:
  - Device only = GPS hardware only (high accuracy)
  - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)










<div id="isNetworkLocationEnabled"></div>
<h3><code>isNetworkLocationEnabled()</code>
  
</h3>

Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
Returns true if Location mode is enabled and is set to either:
  - Battery saving = network triangulation and Wifi network IDs (low accuracy)
  - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)










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











<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

