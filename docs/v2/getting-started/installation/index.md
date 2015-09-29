---
layout: v2_fluid/docs_base
category: getting-started
id: installation
title: Ionic 2 | Installing
header_title: Developer Tips - Building to a Device
header_sub_title: Ionic 2 Developer Preview
---

<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/index.md'>
    Improve this doc
  </a>
</div>

# Installing Ionic

Like Ionic 1, Ionic 2 apps can be quickly created from the Ionic CLI or GUI tool, or built and tested right in the browser.

To install the Ionic SDK and create Ionic 2 projects, we need to install the latest alpha release:

```bash
$ npm install -g ionic@alpha
```

(Note: do not type the dollar sign, that is a placeholder for your shell prompt).

Once that's done, create your first Ionic app:

```bash
$ ionic start cutePuppyPics --v2
```

To run our app, just run

```bash
$ ionic serve
```

And we can play with it right in the browser!


## [Building to a Device](#building-to-a-device)
After you have Ionic installed, we can build our app to a physical device. If you don't have a physical device on hand, you can still build to a device emulator. Check out the <a href="../developer-tips/#using-ios-simulator">iOS simulator</a> docs if you are on Mac, or the <a href="../developer-tips/#using-genymotion">Genymotion</a> docs if you are looking to emulate an Android device. We will also need <a href="../what-is/#cordova">Cordova</a> to run your app on a native device. To install Cordova, run:

```bash
$ sudo npm install -g cordova
```

Once you have Cordova installed, and a device or emulator ready to go, we can move on and begin building your app!


### [Building for iOS](#building-for-ios)
<p>To build for iOS, we need to add the iOS platform module to Cordova:</p>
{% highlight bash %}
$ ionic platform add ios
{% endhighlight %}
Next, we will need to install <a href="../what-is/#xcode">Xcode</a>. Xcode allows us to build compile to a target device running iOS. Once installed, if you plan on using the iOS emulator, we can safely install it using <a href="../what-is/#npm">npm</a>:

```bash
$ npm install ios-sim
```

From there, we should be able to run the iOS emulator using the following command:

```bash
$ ionic emulate ios
```


### [Building for Android](#building-for-android)
To build for Android, we need to add the Android platform module to Cordova:</p>

```bash
$ ionic platform add android
```

Next, we will need to install the <a href="../what-is/#android-sdk">Android SDK</a>. The Android SDK allows us to build compile to a target device running Android. Although the Android SDK comes with a stock emulator, <a href="../what-is/#genymotion">Genymotion</a> is recommended since is is much faster. Once installed, we can run an Android image and run:

```bash
$ ionic run android
```
