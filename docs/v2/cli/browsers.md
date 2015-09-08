---
layout: docs_cli
title: "Ionic CLI - Alternate Browsers"
header_title:  Using Alternate Browsers
header_sub_title: You arent stuck to the system browsers with Ionic
---


# Using Alternate Browsers

Hybrid development relies on a browser to view your application. Since Ionic relies heavily on these browsers, we've decided to implement alternate browsers that you may choose from. Currently, we only support the Android platform and have plans to provide alternate browsers for the iOS platform.

For older Android devices, there is a system provided browser that does not follow most web standards, CSS rendering, or even parsing and running JavaScript efficiently.

Ionic provides you a method to provide an alternate browser other than the system provided browsers, starting with the Chromium browser.

## Viewing browsers available

`ionic browser list` - this should show all the browsers available by platform.

### Specifying a browser

For Android, there is a project that bundles up Chromium to be used in place of the default Android browser. The project that provides Chromium is called Crosswalk.

`ionic browser add crosswalk` - this will install the Chromium browser for Android. By default, it will install Chromium 37 (Crosswalk 8.37.189.12 version).

### Specifying a version

`ionic browser add crosswalk@10.39.235.15` - this specifies a newer version of Chromium.

### Removing the browser for a platform

`ionic browser revert android` or `ionic browser revert ios`

These commands will remove any custom browser that was installed for either platform by replacing it with the system default browser.

Note: this will remove the entire `platforms/android` or `platforms/ios` folder(s). If you have any custom Java or Objective-C code in these folders, they will be removed.

### Removing a browser

`ionic browser rm crosswalk` - this is essentially the same as `ionic browser revert android`
