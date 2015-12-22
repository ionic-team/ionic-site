---
layout: v2_fluid/docs_base
category: getting-started
id: installation
title: Ionic 2 | Installing
header_title: Developer Tips - Building to a Device
header_sub_title: Ionic 2 Developer Preview
---

# Installing Ionic

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/index.md'>Improve this doc</a>

Like Ionic 1, Ionic 2 apps can be quickly created from the Ionic CLI or GUI tool, or built and tested right in the browser.

To install the Ionic SDK and create Ionic 2 projects, we need to install the latest beta release:

```bash
$ npm install -g ionic@beta
```

(Note: do not type the dollar sign, that is a placeholder for your shell prompt).

> Worried about your V1 Ionic projects? Don't worry! The beta release has all the functionality to work with both V1 projects and V2 projects.

Once that's done, create your first Ionic app:

```bash
$ ionic start cutePuppyPics --v2
```

To run our app, let's `cd` in to the directory that was created, and then run the `ionic serve` command:

```bash
$ cd cutePuppyPics
$ ionic serve
```

And we can play with it right in the browser!


## [Building to a Device](#building-to-a-device)
After you have Ionic installed, we can build our app to a physical device. If you don't have a physical device on hand, you can still build to a device emulator. Check out the <a href="../../resources/developer-tips/#using-ios-simulator">iOS simulator</a> docs if you are on Mac, or the <a href="../../resources/developer-tips/#using-genymotion">Genymotion</a> docs if you are looking to emulate an Android device. We will also need <a href="../../resources/what-is/#cordova">Cordova</a> to run your app on a native device. To install Cordova, run:

```bash
$ sudo npm install -g cordova
```

Once you have Cordova installed, and a device or emulator ready to go, we can move on and begin building your app!


### [Building for iOS](#building-for-ios)
<p>To build for iOS, we need to add the iOS platform module to Cordova:</p>
{% highlight bash %}
$ ionic platform add ios
{% endhighlight %}

Next, we will need to install <a href="../../resources/what-is/#xcode">Xcode</a>. Xcode allows us to build compile to a target device running iOS.

From there, we should be able to run the iOS emulator using the following command:

```bash
$ ionic emulate ios
```


### [Building for Android](#building-for-android)
To build for Android, we need to add the Android platform module to Cordova:</p>

```bash
$ ionic platform add android
```

Next, we will need to install the <a href="../../resources/what-is/#android-sdk">Android SDK</a>. The Android SDK allows us to build compile to a target device running Android. Although the Android SDK comes with a stock emulator, <a href="../../resources/what-is/#genymotion">Genymotion</a> is recommended since is is much faster. Once installed, we can run an Android image and run:

```bash
$ ionic run android
```

<h3 style="text-align:right;">
 <a href="/docs/v2/getting-started/tutorial">
    Learn the basics
  </a>
</h3>

