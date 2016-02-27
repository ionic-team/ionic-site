---
layout: v2_fluid/docs_base
category: getting-started
id: installation
title: Ionic 2 | Installing
header_title: Developer Tips - Building to a Device
header_sub_title: Ionic 2 Developer Preview
prev_page_title: Welcome to Ionic
prev_page_link: /docs/v2/getting-started/
next_page_title: Learn the basics
next_page_link: /docs/v2/getting-started/tutorial
---

# Installing Ionic

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/getting-started/installation/index.md'>Improve this doc</a>

Like Ionic 1, Ionic 2 apps can be quickly created from the Ionic CLI or GUI tool or built and tested right in the browser.

To install the Ionic SDK and create Ionic 2 projects, you'll need to install the latest beta release:

```bash
$ npm install -g ionic@beta
```

> Make sure you have NodeJS installed. Download the installer [here](https://nodejs.org/en/). It's best to get the 4x version of node for stability.
> Unfamiliar with NPM? Learn more about it and what packages we use [here](/docs/v2/resources/using-npm/)

Worried about your V1 Ionic projects? Don't worry! The beta release has all the functionality to work with both V1 projects and V2 projects.

Once that's done, create your first Ionic app:

```bash
$ ionic start cutePuppyPics --v2
```

To run your app, `cd` into the directory that was created and then run the `ionic serve` command:

```bash
$ cd cutePuppyPics
$ ionic serve
```

You can play with it right in the browser!


### [Building to a Device](#building-to-a-device)
After you have Ionic installed, you can build your app to a physical device. If you don't have a physical device on hand, you can still build to a device emulator. Check out the <a href="../../resources/developer-tips/#using-ios-simulator">iOS simulator</a> docs if you are on a Mac, or the <a href="../../resources/developer-tips/#using-genymotion">Genymotion</a> docs if you are looking to emulate an Android device. You will also need <a href="../../resources/what-is/#cordova">Cordova</a> to run your app on a native device. To install Cordova, run:

```bash
$ sudo npm install -g cordova
```

Once you have Cordova installed and a device or emulator ready to go, you can move on and begin building your app!


### [Building for iOS](#building-for-ios)
<p>To build for iOS, we need to add the iOS platform module to Cordova:</p>
{% highlight bash %}
$ ionic platform add ios
{% endhighlight %}

Next, you'll need to install <a href="../../resources/what-is/#xcode">Xcode</a>. Xcode allows you to build compile to a target device running iOS.

From there, you should be able to run the iOS emulator using the following command:

```bash
$ ionic emulate ios
```


### [Building for Android](#building-for-android)
To build for Android, you'll need to add the Android platform module to Cordova:

```bash
$ ionic platform add android
```

Next, you'll need to install the <a href="../../resources/what-is/#android-sdk">Android SDK</a>. The Android SDK allows you to build compile to a target device running Android. Although the Android SDK comes with a stock emulator, <a href="../../resources/what-is/#genymotion">Genymotion</a> is recommended, since it's much faster. Once installed, start an Android image and run:

```bash
$ ionic run android
```
