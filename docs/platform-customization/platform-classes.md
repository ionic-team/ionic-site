---
layout: docs_platform_customization
title: Platform Classes
header_sub_title: An overview of customizing your Ionic app based on the platform
chapter: true
---

# Platform Classes

Ionic automagically adds classes to the `<body>` of your project based on the device you are using to view the project. This means if you are viewing your app on an iOS device, the `<body>` will have the `platform-ios` class applied. Some information of the different classes can be found below.

## Platform Device Classes

<code><a href="/docs/api/utility/ionic.Platform/">ionic.Platform</a></code> is used to retrieve the device information and apply classes to the `<body>` of the project. These classes are used by the Ionic SDK to give the project a platform specific look and feel, and can be used by you to override styles.

<table class="table">
  <tr>
    <td>Platform</td>
    <td>Class</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Browser</td>
    <td><code>platform-browser</code></td>
    <td>Whether the application is running on the Desktop Browser - applied if you are running <code>ionic serve</code></td>
  </tr>
  <tr>
    <td>Cordova</td>
    <td><code>platform-cordova</code></td>
    <td>Whether the application is running on the device, as the device uses Cordova to display the application</td>
  </tr>  
  <tr>
    <td>Webview</td>
    <td><code>platform-webview</code></td>
    <td>Whether the application is running within a webview on the device within a native application</td>
  </tr>  
  <tr>
    <td>iOS</td>
    <td><code>platform-ios</code></td>
    <td>The device is iOS, therefore the "look and feel" will be given the iOS treatment</td>
  </tr>
  <tr>
    <td>iPad</td>
    <td><code>platform-ipad</code></td>
    <td>iOS device is an iPad - this class is applied in addition to <code>platform-ios</code></td>
  </tr>
  <tr>
    <td>Android</td>
    <td><code>platform-android</code></td>
    <td>The device is Android, therefore the "look and feel" will be given the Android treatment</td>
  </tr>  
  <tr>
    <td>Windows Phone</td>
    <td><code>platform-windowsphone</code></td>
    <td>The device is Windows Phone, therefore the "look and feel" will be given the Windows Phone treatment</td>
  </tr>
</table>

## Platform OS Version Classes

Ionic also adds classes based on the OS version. This can be used to customize your project for a specific OS version. A class is added for the major version and the major + minor version.

The class is created by looking at the User Agent of the OS version. The major + minor class is created by replacing the `.` separating the major and minor version numbers with a `_`. So if you are running your project on a device running iOS 8.4 it will add the `platform-ios8` and `platform-ios8_4` classes.

<table class="table">
  <tr>
    <td>Platform OS Version</td>
    <td>Class</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>iOS 8</td>
    <td><code>platform-ios8</code></td>
    <td>The OS on the device is running iOS 8</td>
  </tr>
  <tr>
    <td>iOS 8.4</td>
    <td><code>platform-ios8_4</code></td>
    <td>The OS on the device is running iOS 8.4. This class is applied in addition to <code>platform-ios8</code></td>
  </tr>  
  <tr>
    <td>Android 4</td>
    <td><code>platform-android4</code></td>
    <td>The OS on the device is running Android 4</td>
  </tr>
  <tr>
    <td>Android 4.4</td>
    <td><code>platform-android4_4</code></td>
    <td>The OS on the device is running Android 4.4. This class is applied in addition to <code>platform-android4</code></td>
  </tr>  
</table>

## Using Platform Classes to Override Styling

You can use any of the above classes to override Ionic styling. For example, if you wanted to override the header title on Android to be uppercase, you could use the following code:

```css
.platform-android .bar-header {
  text-transform: uppercase;  
}
```

This would uppercase the title for Android, but any other device would remain lowercase.

You could even go as far as customizing the side menu style based on the platform. The possibilities are endless!
