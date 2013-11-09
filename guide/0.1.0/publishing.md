---
layout: guide
title: "Publishing the Todo App"
---

Now that we have a working app, we are ready to push it live to the world! Since [Drifty](http://drifty.com/), the creators of Ionic, already submitted the Todo app from this guide to the app store, chances are you'll want to follow this chapter with a new app that you make on your own.

So first, we need to generate a release build of our app, targeted at each platform we wish to deploy on. Before we deploy, we should take care to adjust plugins needed during development that should not be in production mode. For example, we probably don't want the debug console plugin enabled, so we should remove it before generating the release builds:

```bash
$ cordova plugin rm org.apache.cordova.console 
```

## Android Release Build

To generate a release build for Android, we simply run

```bash
$ cordova build --release android
```

Then, we can find our *unsigned* APK file in `platforms/android/bin`. In our example, the file was `platforms/android/bin/HelloWorld-release-unsigned.apk`. Now, we need to sign the unsigned APK and run an alignment utility on it to optimize it and prepare it for the app store. If you already have a signing key, skip these steps and use that one instead.

Let's generate our private key using the `keytool` command that comes with the Java JDK. If this tool isn't found, refer to the [installation guide](installation.html):

```bash
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

You'll first be promoted to create a password for the keystore. Then, answer the rest of the nice tools's questions and when it's all done, you should have a file called `my-release-key.keystore` created in the current directory.

When in doubt, refer to the official [Android App Signing](http://developer.android.com/tools/publishing/app-signing.html) documentation which has a lot of information on various signing strategies.


First, we will start with the Google Play Store for Android, since it's easier to deploy apps there and there is little to no app review process (unlike Apple).

To start, you'll need to visit the [Google Play Store Developer Console](https://play.google.com/apps/publish/) and create a new developer account. Unfortunately, this is not free. However, the cost is only $25 compared to Apple's $99.

Now that 

Once you have a developer account, you can go ahead and click "Publish an Android App on Google Play" as in the screenshot below:

![New google play app](http://ionicframework.com.s3.amazonaws.com/guide/0.1.0/5-play.png)

Then, you can go ahead and click the button to edit the store listing (We will upload an APK later). You'll want to fill out the description for the app. Here is a little preview from when we filled out the application with the Ionic Todo app:

![Ionic Todo](http://ionicframework.com.s3.amazonaws.com/guide/0.1.0/5-play2.png)
