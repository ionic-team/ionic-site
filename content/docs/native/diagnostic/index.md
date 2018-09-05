---
layout: "fluid/docs_base"
version: "4.12.2"
versionHref: "/docs/native"
path: ""
category: native
id: "diagnostic"
title: "Diagnostic"
header_sub_title: "Class in module "
doc: "Diagnostic"
docType: "class"
---

<h1 class="api-title">Diagnostic</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/diagnostic/index.ts#L6">
  Improve this doc
</a>







<p>Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi</p>


<p>Repo:
  <a href="https://github.com/dpa99c/cordova-diagnostic-plugin">
    https://github.com/dpa99c/cordova-diagnostic-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova.plugins.diagnostic
$ npm install --save @ionic-native/diagnostic
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Diagnostic } from &#39;@ionic-native/diagnostic&#39;;

constructor(private diagnostic: Diagnostic) { }

...

let successCallback = (isAvailable) =&gt; { console.log(&#39;Is available? &#39; + isAvailable); };
let errorCallback = (e) =&gt; console.error(e);

this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);

this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);


this.diagnostic.getBluetoothState()
  .then((state) =&gt; {
    if (state == this.diagnostic.bluetoothState.POWERED_ON){
      // do something
    } else {
      // do something else
    }
  }).catch(e =&gt; console.error(e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="permission" href="#permission"></a><code>permission</code></h3>




<h3><a class="anchor" name="permissionStatus" href="#permissionStatus"></a><code>permissionStatus</code></h3>





<h3><a class="anchor" name="locationAuthorizationMode" href="#locationAuthorizationMode"></a><code>locationAuthorizationMode</code></h3>




<h3><a class="anchor" name="permissionGroups" href="#permissionGroups"></a><code>permissionGroups</code></h3>




<h3><a class="anchor" name="locationMode" href="#locationMode"></a><code>locationMode</code></h3>




<h3><a class="anchor" name="bluetoothState" href="#bluetoothState"></a><code>bluetoothState</code></h3>




<h3><a class="anchor" name="NFCState" href="#NFCState"></a><code>NFCState</code></h3>





<h3><a class="anchor" name="motionStatus" href="#motionStatus"></a><code>motionStatus</code></h3>





<h3><a class="anchor" name="isLocationAvailable" href="#isLocationAvailable"></a><code>isLocationAvailable()</code></h3>


Checks if app is able to access device location.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isWifiAvailable" href="#isWifiAvailable"></a><code>isWifiAvailable()</code></h3>


Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isCameraAvailable" href="#isCameraAvailable"></a><code>isCameraAvailable(externalStorage)</code></h3>




Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
application is authorized to use it.
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
      externalStorage</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
 cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isBluetoothAvailable" href="#isBluetoothAvailable"></a><code>isBluetoothAvailable()</code></h3>


Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="switchToLocationSettings" href="#switchToLocationSettings"></a><code>switchToLocationSettings()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">Windows 10</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Displays the device location settings to allow user to enable location services/change location mode.



<h3><a class="anchor" name="switchToMobileDataSettings" href="#switchToMobileDataSettings"></a><code>switchToMobileDataSettings()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">Windows 10</strong>&nbsp;</p>


Displays mobile settings to allow user to enable mobile data.



<h3><a class="anchor" name="switchToBluetoothSettings" href="#switchToBluetoothSettings"></a><code>switchToBluetoothSettings()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">Windows 10</strong>&nbsp;</p>


Displays Bluetooth settings to allow user to enable Bluetooth.



<h3><a class="anchor" name="switchToWifiSettings" href="#switchToWifiSettings"></a><code>switchToWifiSettings()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">Windows 10</strong>&nbsp;</p>


Displays WiFi settings to allow user to enable WiFi.



<h3><a class="anchor" name="isWifiEnabled" href="#isWifiEnabled"></a><code>isWifiEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">Windows 10</strong>&nbsp;</p>


Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="setWifiState" href="#setWifiState"></a><code>setWifiState(state)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">Windows 10</strong>&nbsp;</p>


Enables/disables WiFi on the device.
Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
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
      state</td>
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
</div><h3><a class="anchor" name="setBluetoothState" href="#setBluetoothState"></a><code>setBluetoothState(state)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">Windows 10</strong>&nbsp;</p>


Enables/disables Bluetooth on the device.
Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
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
      state</td>
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
</div><h3><a class="anchor" name="isLocationEnabled" href="#isLocationEnabled"></a><code>isLocationEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isLocationAuthorized" href="#isLocationAuthorized"></a><code>isLocationAuthorized()</code></h3>


Checks if the application is authorized to use location.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getLocationAuthorizationStatus" href="#getLocationAuthorizationStatus"></a><code>getLocationAuthorizationStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Returns the location authorization status for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestLocationAuthorization" href="#requestLocationAuthorization"></a><code>requestLocationAuthorization(mode)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Returns the location authorization status for the application.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

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
      mode</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>iOS only: location authorization mode: &quot;always&quot; or &quot;when_in_use&quot;. If not specified, defaults to &quot;when_in_use&quot;.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isCameraPresent" href="#isCameraPresent"></a><code>isCameraPresent()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Checks if camera hardware is present on device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isCameraAuthorized" href="#isCameraAuthorized"></a><code>isCameraAuthorized(externalStorage)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Checks if the application is authorized to use the camera.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
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
      externalStorage</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
 cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getCameraAuthorizationStatus" href="#getCameraAuthorizationStatus"></a><code>getCameraAuthorizationStatus(externalStorage)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Returns the camera authorization status for the application.
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
      externalStorage</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
 cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestCameraAuthorization" href="#requestCameraAuthorization"></a><code>requestCameraAuthorization(externalStorage)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Requests camera authorization for the application.
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
      externalStorage</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
 cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isMicrophoneAuthorized" href="#isMicrophoneAuthorized"></a><code>isMicrophoneAuthorized()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Checks if the application is authorized to use the microphone.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getMicrophoneAuthorizationStatus" href="#getMicrophoneAuthorizationStatus"></a><code>getMicrophoneAuthorizationStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Returns the microphone authorization status for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestMicrophoneAuthorization" href="#requestMicrophoneAuthorization"></a><code>requestMicrophoneAuthorization()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Requests microphone authorization for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isContactsAuthorized" href="#isContactsAuthorized"></a><code>isContactsAuthorized()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Checks if the application is authorized to use contacts (address book).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getContactsAuthorizationStatus" href="#getContactsAuthorizationStatus"></a><code>getContactsAuthorizationStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Returns the contacts authorization status for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestContactsAuthorization" href="#requestContactsAuthorization"></a><code>requestContactsAuthorization()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Requests contacts authorization for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isCalendarAuthorized" href="#isCalendarAuthorized"></a><code>isCalendarAuthorized()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Checks if the application is authorized to use the calendar.

Notes for Android:
  - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.

Notes for iOS:
  - This relates to Calendar Events (not Calendar Reminders)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getCalendarAuthorizationStatus" href="#getCalendarAuthorizationStatus"></a><code>getCalendarAuthorizationStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Returns the calendar authorization status for the application.

Notes for Android:
  - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.

Notes for iOS:
  - This relates to Calendar Events (not Calendar Reminders)



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestCalendarAuthorization" href="#requestCalendarAuthorization"></a><code>requestCalendarAuthorization()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Requests calendar authorization for the application.

Notes for iOS:
  - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
  - This relates to Calendar Events (not Calendar Reminders)

Notes for Android:
  - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
  - This requests permission for `READ_CALENDAR` run-time permission
  - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="switchToSettings" href="#switchToSettings"></a><code>switchToSettings()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Opens settings page for this app.
On Android, this opens the "App Info" page in the Settings app.
On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getBluetoothState" href="#getBluetoothState"></a><code>getBluetoothState()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Returns the state of Bluetooth on the device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="registerBluetoothStateChangeHandler" href="#registerBluetoothStateChangeHandler"></a><code>registerBluetoothStateChangeHandler(handler)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Registers a function to be called when a change in Bluetooth state occurs.
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
      handler</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="registerLocationStateChangeHandler" href="#registerLocationStateChangeHandler"></a><code>registerLocationStateChangeHandler(handler)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">iOS</strong>&nbsp;</p>


Registers a function to be called when a change in Location state occurs.
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
      handler</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="isGpsLocationAvailable" href="#isGpsLocationAvailable"></a><code>isGpsLocationAvailable()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if high-accuracy locations are available to the app from GPS hardware.
Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorized to use location.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isGpsLocationEnabled" href="#isGpsLocationEnabled"></a><code>isGpsLocationEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if location mode is set to return high-accuracy locations from GPS hardware.
  Returns true if Location mode is enabled and is set to either:
  - Device only = GPS hardware only (high accuracy)
  - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isNetworkLocationAvailable" href="#isNetworkLocationAvailable"></a><code>isNetworkLocationAvailable()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorized to use location.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isNetworkLocationEnabled" href="#isNetworkLocationEnabled"></a><code>isNetworkLocationEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
Returns true if Location mode is enabled and is set to either:
  - Battery saving = network triangulation and Wifi network IDs (low accuracy)
  - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getLocationMode" href="#getLocationMode"></a><code>getLocationMode()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Returns the current location mode setting for the device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getPermissionAuthorizationStatus" href="#getPermissionAuthorizationStatus"></a><code>getPermissionAuthorizationStatus(permission)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Returns the current authorization status for a given permission.
Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
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
      permission</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getPermissionsAuthorizationStatus" href="#getPermissionsAuthorizationStatus"></a><code>getPermissionsAuthorizationStatus(permissions)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Returns the current authorization status for multiple permissions.
Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
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
      permissions</td>
    <td>
      <code>any[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestRuntimePermission" href="#requestRuntimePermission"></a><code>requestRuntimePermission(permission)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Requests app to be granted authorization for a runtime permission.
Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
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
      permission</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestRuntimePermissions" href="#requestRuntimePermissions"></a><code>requestRuntimePermissions(permissions)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Requests app to be granted authorization for multiple runtime permissions.
Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
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
      permissions</td>
    <td>
      <code>any[]</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isRequestingPermission" href="#isRequestingPermission"></a><code>isRequestingPermission()</code></h3>




Indicates if the plugin is currently requesting a runtime permission via the native API.
Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>boolean</code> 
</div><h3><a class="anchor" name="registerPermissionRequestCompleteHandler" href="#registerPermissionRequestCompleteHandler"></a><code>registerPermissionRequestCompleteHandler(handler)</code></h3>




Registers a function to be called when a runtime permission request has completed.
Pass in a falsy value to de-register the currently registered function.
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
      handler</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="isBluetoothEnabled" href="#isBluetoothEnabled"></a><code>isBluetoothEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if the device setting for Bluetooth is switched on.
This requires `BLUETOOTH` permission on Android


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="hasBluetoothSupport" href="#hasBluetoothSupport"></a><code>hasBluetoothSupport()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if the device has Bluetooth capabilities.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="hasBluetoothLESupport" href="#hasBluetoothLESupport"></a><code>hasBluetoothLESupport()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if the device has Bluetooth Low Energy (LE) capabilities.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="hasBluetoothLEPeripheralSupport" href="#hasBluetoothLEPeripheralSupport"></a><code>hasBluetoothLEPeripheralSupport()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isExternalStorageAuthorized" href="#isExternalStorageAuthorized"></a><code>isExternalStorageAuthorized()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if the application is authorized to use external storage.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getExternalStorageAuthorizationStatus" href="#getExternalStorageAuthorizationStatus"></a><code>getExternalStorageAuthorizationStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


CReturns the external storage authorization status for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="requestExternalStorageAuthorization" href="#requestExternalStorageAuthorization"></a><code>requestExternalStorageAuthorization()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Requests external storage authorization for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getExternalSdCardDetails" href="#getExternalSdCardDetails"></a><code>getExternalSdCardDetails()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Returns details of external SD card(s): absolute path, is writable, free space.

The intention of this method is to return the location and details of removable external SD cards.
This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.

Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="switchToWirelessSettings" href="#switchToWirelessSettings"></a><code>switchToWirelessSettings()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.



<h3><a class="anchor" name="switchToNFCSettings" href="#switchToNFCSettings"></a><code>switchToNFCSettings()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Displays NFC settings to allow user to enable NFC.



<h3><a class="anchor" name="isNFCPresent" href="#isNFCPresent"></a><code>isNFCPresent()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if NFC hardware is present on device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isNFCEnabled" href="#isNFCEnabled"></a><code>isNFCEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if the device setting for NFC is switched on.
Note: this operation does not require NFC permission in the manifest.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isNFCAvailable" href="#isNFCAvailable"></a><code>isNFCAvailable()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
Note: this operation does not require NFC permission in the manifest.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="registerNFCStateChangeHandler" href="#registerNFCStateChangeHandler"></a><code>registerNFCStateChangeHandler(hander)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Registers a function to be called when a change in NFC state occurs. Pass in a falsy value to de-register the currently registered function.
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
      hander</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>callback function to be called when NFC state changes</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isDataRoamingEnabled" href="#isDataRoamingEnabled"></a><code>isDataRoamingEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if the device data roaming setting is enabled.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isADBModeEnabled" href="#isADBModeEnabled"></a><code>isADBModeEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if the device setting for ADB(debug) is switched on.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isDeviceRooted" href="#isDeviceRooted"></a><code>isDeviceRooted()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Checks if the device is rooted.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isCameraRollAuthorized" href="#isCameraRollAuthorized"></a><code>isCameraRollAuthorized()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Checks if the application is authorized to use the Camera Roll in Photos app.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getCameraRollAuthorizationStatus" href="#getCameraRollAuthorizationStatus"></a><code>getCameraRollAuthorizationStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Returns the authorization status for the application to use the Camera Roll in Photos app.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="requestCameraRollAuthorization" href="#requestCameraRollAuthorization"></a><code>requestCameraRollAuthorization()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Requests camera roll authorization for the application.
Should only be called if authorization status is NOT_REQUESTED.
Calling it when in any other state will have no effect.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isRemoteNotificationsEnabled" href="#isRemoteNotificationsEnabled"></a><code>isRemoteNotificationsEnabled()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


Checks if remote (push) notifications are enabled.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isRegisteredForRemoteNotifications" href="#isRegisteredForRemoteNotifications"></a><code>isRegisteredForRemoteNotifications()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Indicates if the app is registered for remote (push) notifications on the device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getRemoteNotificationsAuthorizationStatus" href="#getRemoteNotificationsAuthorizationStatus"></a><code>getRemoteNotificationsAuthorizationStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Returns the authorization status for the application to use Remote Notifications.
Note: Works on iOS 10+ only (iOS 9 and below will invoke the error callback).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="getRemoteNotificationTypes" href="#getRemoteNotificationTypes"></a><code>getRemoteNotificationTypes()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Indicates the current setting of notification types for the app in the Settings app.
Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isRemindersAuthorized" href="#isRemindersAuthorized"></a><code>isRemindersAuthorized()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Checks if the application is authorized to use reminders.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getRemindersAuthorizationStatus" href="#getRemindersAuthorizationStatus"></a><code>getRemindersAuthorizationStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Returns the reminders authorization status for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestRemindersAuthorization" href="#requestRemindersAuthorization"></a><code>requestRemindersAuthorization()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Requests reminders authorization for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isBackgroundRefreshAuthorized" href="#isBackgroundRefreshAuthorized"></a><code>isBackgroundRefreshAuthorized()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Checks if the application is authorized for background refresh.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="getBackgroundRefreshStatus" href="#getBackgroundRefreshStatus"></a><code>getBackgroundRefreshStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Returns the background refresh authorization status for the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestBluetoothAuthorization" href="#requestBluetoothAuthorization"></a><code>requestBluetoothAuthorization()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Requests Bluetooth authorization for the application.

Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isMotionAvailable" href="#isMotionAvailable"></a><code>isMotionAvailable()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Checks if motion tracking is available on the current device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="isMotionRequestOutcomeAvailable" href="#isMotionRequestOutcomeAvailable"></a><code>isMotionRequestOutcomeAvailable()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Checks if it's possible to determine the outcome of a motion authorization request on the current device.
There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="requestMotionAuthorization" href="#requestMotionAuthorization"></a><code>requestMotionAuthorization()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Requests motion tracking authorization for the application.

Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestmotionauthorization)



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="getMotionAuthorizationStatus" href="#getMotionAuthorizationStatus"></a><code>getMotionAuthorizationStatus()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


Checks motion authorization status for the application.

Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getmotionauthorizationstatus)



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div>





