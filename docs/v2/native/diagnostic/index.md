---
layout: "v2_fluid/docs_base"
version: "2.2.6"
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

let successCallback = (isAvailable) =&gt; { console.log(&#39;Is available? &#39; + isAvailable); };
let errorCallback = (e) =&gt; console.error(e);

Diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);

Diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);


Diagnostic.getBluetoothState()
  .then((state) =&gt; {
    if (state == Diagnostic.bluetoothStates.POWERED_ON){
      // do something
    } else {
      // do something else
    }
  }).catch(e =&gt; console.error(e));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="permission"></div>
<h3><code>permission()</code>
  
</h3>











<div id="permissionStatus"></div>
<h3><code>permissionStatus()</code>
  
</h3>











<div id="locationAuthorizationMode"></div>
<h3><code>locationAuthorizationMode()</code>
  
</h3>











<div id="permissionGroups"></div>
<h3><code>permissionGroups()</code>
  
</h3>











<div id="locationMode"></div>
<h3><code>locationMode()</code>
  
</h3>











<div id="bluetoothState"></div>
<h3><code>bluetoothState()</code>
  
</h3>











<div id="isLocationAvailable"></div>
<h3><code>isLocationAvailable()</code>
  
</h3>


Checks if app is able to access device location.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isWifiAvailable"></div>
<h3><code>isWifiAvailable()</code>
  
</h3>


Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isCameraAvailable"></div>
<h3><code>isCameraAvailable()</code>
  
</h3>


Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
application is authorized to use it.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isBluetoothAvailable"></div>
<h3><code>isBluetoothAvailable()</code>
  
</h3>


Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="switchToLocationSettings"></div>
<h3><code>switchToLocationSettings()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>Windows 10</code>&nbsp;
  </p>



Displays the device location settings to allow user to enable location services/change location mode.










<div id="switchToMobileDataSettings"></div>
<h3><code>switchToMobileDataSettings()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>Windows 10</code>&nbsp;
  </p>



Displays mobile settings to allow user to enable mobile data.










<div id="switchToBluetoothSettings"></div>
<h3><code>switchToBluetoothSettings()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>Windows 10</code>&nbsp;
  </p>



Displays Bluetooth settings to allow user to enable Bluetooth.










<div id="switchToWifiSettings"></div>
<h3><code>switchToWifiSettings()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>Windows 10</code>&nbsp;
  </p>



Displays WiFi settings to allow user to enable WiFi.










<div id="isWifiEnabled"></div>
<h3><code>isWifiEnabled()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>Windows 10</code>&nbsp;
  </p>



Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="setWifiState"></div>
<h3><code>setWifiState(state)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>Windows 10</code>&nbsp;
  </p>



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
      state
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="setBluetoothState"></div>
<h3><code>setBluetoothState(state)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>Windows 10</code>&nbsp;
  </p>



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
      state
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="isLocationEnabled"></div>
<h3><code>isLocationEnabled()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="isLocationAuthorized"></div>
<h3><code>isLocationAuthorized()</code>
  
</h3>


Checks if the application is authorized to use location.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="getLocationAuthorizationStatus"></div>
<h3><code>getLocationAuthorizationStatus()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Returns the location authorization status for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestLocationAuthorization"></div>
<h3><code>requestLocationAuthorization()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Returns the location authorization status for the application.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

mode - (iOS-only / optional) location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isCameraPresent"></div>
<h3><code>isCameraPresent()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Checks if camera hardware is present on device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isCameraAuthorized"></div>
<h3><code>isCameraAuthorized()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Checks if the application is authorized to use the camera.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="getCameraAuthorizationStatus"></div>
<h3><code>getCameraAuthorizationStatus()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Returns the camera authorization status for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestCameraAuthorization"></div>
<h3><code>requestCameraAuthorization()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Requests camera authorization for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isMicrophoneAuthorized"></div>
<h3><code>isMicrophoneAuthorized()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Checks if the application is authorized to use the microphone.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="getMicrophoneAuthorizationStatus"></div>
<h3><code>getMicrophoneAuthorizationStatus()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Returns the microphone authorization status for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestMicrophoneAuthorization"></div>
<h3><code>requestMicrophoneAuthorization()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Requests microphone authorization for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isContactsAuthorized"></div>
<h3><code>isContactsAuthorized()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Checks if the application is authorized to use contacts (address book).






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="getContactsAuthorizationStatus"></div>
<h3><code>getContactsAuthorizationStatus()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Returns the contacts authorization status for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestContactsAuthorization"></div>
<h3><code>requestContactsAuthorization()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Requests contacts authorization for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isCalendarAuthorized"></div>
<h3><code>isCalendarAuthorized()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Checks if the application is authorized to use the calendar.

Notes for Android:
  - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.

Notes for iOS:
  - This relates to Calendar Events (not Calendar Reminders)






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="getCalendarAuthorizationStatus"></div>
<h3><code>getCalendarAuthorizationStatus()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Returns the calendar authorization status for the application.

Notes for Android:
  - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.

Notes for iOS:
  - This relates to Calendar Events (not Calendar Reminders)







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestCalendarAuthorization"></div>
<h3><code>requestCalendarAuthorization()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="switchToSettings"></div>
<h3><code>switchToSettings()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Opens settings page for this app.
On Android, this opens the "App Info" page in the Settings app.
On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="getBluetoothState"></div>
<h3><code>getBluetoothState()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



Returns the state of Bluetooth on the device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="registerBluetoothStateChangeHandler"></div>
<h3><code>registerBluetoothStateChangeHandler(handler)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



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
      handler
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="registerLocationStateChangeHandler"></div>
<h3><code>registerLocationStateChangeHandler(handler)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  
  <code>iOS</code>&nbsp;
  </p>



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
      handler
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="isGpsLocationAvailable"></div>
<h3><code>isGpsLocationAvailable()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Checks if high-accuracy locations are available to the app from GPS hardware.
Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorised to use location.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isGpsLocationEnabled"></div>
<h3><code>isGpsLocationEnabled()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Checks if location mode is set to return high-accuracy locations from GPS hardware.
  Returns true if Location mode is enabled and is set to either:
  - Device only = GPS hardware only (high accuracy)
  - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)










<div id="isNetworkLocationAvailable"></div>
<h3><code>isNetworkLocationAvailable()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorised to use location.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isNetworkLocationEnabled"></div>
<h3><code>isNetworkLocationEnabled()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
Returns true if Location mode is enabled and is set to either:
  - Battery saving = network triangulation and Wifi network IDs (low accuracy)
  - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="getLocationMode"></div>
<h3><code>getLocationMode()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Returns the current location mode setting for the device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="getPermissionAuthorizationStatus"></div>
<h3><code>getPermissionAuthorizationStatus(permission)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Returns the current authorisation status for a given permission.
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
      permission
      
      
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
<code>Promise&lt;any&gt;</code> 
</div>



<div id="getPermissionsAuthorizationStatus"></div>
<h3><code>getPermissionsAuthorizationStatus(permissions)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Returns the current authorisation status for multiple permissions.
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
      permissions
      
      
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
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestRuntimePermission"></div>
<h3><code>requestRuntimePermission(permission)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Requests app to be granted authorisation for a runtime permission.
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
      permission
      
      
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
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestRuntimePermissions"></div>
<h3><code>requestRuntimePermissions(permissions)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Requests app to be granted authorisation for multiple runtime permissions.
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
      permissions
      
      
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
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isRequestingPermission"></div>
<h3><code>isRequestingPermission()</code>
  
</h3>




Indicates if the plugin is currently requesting a runtime permission via the native API.
Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>boolean</code> 
</div>



<div id="registerPermissionRequestCompleteHandler"></div>
<h3><code>registerPermissionRequestCompleteHandler(handler)</code>
  
</h3>




Registers a function to be called when a runtime permission request has completed.
Pass in a falsey value to de-register the currently registered function.


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
      handler
      
      
    </td>
    <td>
      
<code>Function</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="isBluetoothEnabled"></div>
<h3><code>isBluetoothEnabled()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Checks if the device setting for Bluetooth is switched on.
This requires `BLUETOOTH` permission on Android






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="hasBluetoothSupport"></div>
<h3><code>hasBluetoothSupport()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Checks if the device has Bluetooth capabilities.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="hasBluetoothLESupport"></div>
<h3><code>hasBluetoothLESupport()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Checks if the device has Bluetooth Low Energy (LE) capabilities.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="hasBluetoothLEPeripheralSupport"></div>
<h3><code>hasBluetoothLEPeripheralSupport()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="isCameraRollAuthorized"></div>
<h3><code>isCameraRollAuthorized()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Checks if the application is authorized to use the Camera Roll in Photos app.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="getCameraRollAuthorizationStatus"></div>
<h3><code>getCameraRollAuthorizationStatus()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Returns the authorization status for the application to use the Camera Roll in Photos app.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="requestCameraRollAuthorization"></div>
<h3><code>requestCameraRollAuthorization()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Requests camera roll authorization for the application.
Should only be called if authorization status is NOT_REQUESTED.
Calling it when in any other state will have no effect.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isRemoteNotificationsEnabled"></div>
<h3><code>isRemoteNotificationsEnabled()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Checks if remote (push) notifications are enabled.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="isRegisteredForRemoteNotifications"></div>
<h3><code>isRegisteredForRemoteNotifications()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Indicates if the app is registered for remote (push) notifications on the device.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="getRemoteNotificationTypes"></div>
<h3><code>getRemoteNotificationTypes()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Indicates the current setting of notification types for the app in the Settings app.
Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isRemindersAuthorized"></div>
<h3><code>isRemindersAuthorized()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Checks if the application is authorized to use reminders.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="getRemindersAuthorizationStatus"></div>
<h3><code>getRemindersAuthorizationStatus()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Returns the reminders authorization status for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="requestRemindersAuthorization"></div>
<h3><code>requestRemindersAuthorization()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Requests reminders authorization for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="isBackgroundRefreshAuthorized"></div>
<h3><code>isBackgroundRefreshAuthorized()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Checks if the application is authorized for background refresh.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> 
</div>



<div id="getBackgroundRefreshStatus"></div>
<h3><code>getBackgroundRefreshStatus()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Returns the background refresh authorization status for the application.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

