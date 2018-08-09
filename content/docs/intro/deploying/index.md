---
layout: fluid/docs_base
category: intro
id: deploying
title: Deploying
header_sub_title: Getting Started with Ionic
---


# Deploying to a Device

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/intro/migration/index.md'>Improve this doc</a>

Testing your app in the browser with `ionic serve` or with an emulator is fast, easy and convenient when your app is in development, but eventually you're going to have to test on a device. Not only is it the only way to accurately test how your app will behave and perform, many [Ionic Native](https://ionicframework.com/docs//native/) plugins will only work when they are run on actual hardware.

## Android Devices

Deploying to an Android device is a fairly straightforward process. If you have a working Android development environment, you're ready to go.

### Requirements

- [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)
- [Android Studio or Android Command Line Tools](https://developer.android.com/studio/index.html)
- Updated Android SDK tools, platform and component dependencies. Available through Android Studio's [SDK Manager](https://developer.android.com/studio/intro/update.html) or through Android's [`sdkmanager`](https://developer.android.com/studio/command-line/sdkmanager) from the command line tools.

### Running Your App

To run your app, all you have to do is enable USB debugging and Developer Mode on your Android device, then run `ionic cordova run android --device` from the command line.

This will produce a debug build of your app, both in terms of Android and Ionic's code

Enabling USB debugging and Developer Mode can vary between devices, but is easy to look up with a Google search. You can also check out [Enabling On-device Developer Options](https://developer.android.com/studio/run/device.html#developer-device-options) in the Android docs.

### Production Builds

To run or build your app for production, run

```bash
ionic cordova run android --prod --release
# or
ionic cordova build android --prod --release
```

This will minify your app's code as Ionic's source and also remove any debugging capabilities from the APK. This is generally used when deploying an app to the Google Play Store.

### Sign Android APK
If you want to release your app in the Google Play Store, you have to sign your APK file.
To do this, you have to create a new certificate/keystore.

Let’s generate your private key using the keytool command that comes with the JDK:
```bash
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
```
You’ll first be prompted to create a password for the keystore. Then, answer the rest of the nice tools’s questions and when it’s all done, you should have a file called my-release-key.jks created in the current directory.

__Note__: Make sure to save this file somewhere safe, if you lose it you won’t be able to submit updates to your app!

To sign the unsigned APK, run the jarsigner tool which is also included in the JDK:

```bash
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk my-alias
```

This signs the APK in place. Finally, we need to run the zip align tool to optimize the APK. The zipalign tool can be found in `/path/to/Android/sdk/build-tools/VERSION/zipalign`. For example, on OS X with Android Studio installed, zipalign is in `~/Library/Android/sdk/build-tools/VERSION/zipalign`:

```bash
zipalign -v 4 app-release-unsigned.apk HelloWorld.apk
```

To verify that your apk is signed run apksigner. The apksigner can be also found in the same path as the zipalign tool:

```bash
apksigner verify HelloWorld.apk
```

Now we have our final release binary called HelloWorld.apk and we can release this on the Google Play Store for all the world to enjoy!

All steps can also be found here: [Android SDK docs](https://developer.android.com/studio/publish/app-signing.html#signing-manually)

## iOS Devices

Unlike Android, iOS developers need to generate a provisioning profile to code sign their apps for testing. The good news is that, as of iOS9, you can develop and test your apps on your iOS device without a paid Apple Developer account. This is particularly great for developers who want to try out mobile development with Ionic, since it saves the cost but still provides a lot of the features of having a full Apple Developer account. For a full breakdown of the features included, check out [Apple's docs](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/SupportedCapabilities/SupportedCapabilities.html#//apple_ref/doc/uid/TP40012582-CH38-SW1).

### Requirements

- Xcode 7 or higher
- iOS 9
- A free [Apple ID](https://appleid.apple.com/) or paid Apple Developer account

### Creating a Provisioning Profile

To start, you'll need to set up a provisioning profile to code sign your apps.

#### Using an Apple ID

1. Open Xcode preferences (Xcode > Preferences...)
2. Click the 'Accounts' tab
3. Login with your Apple ID (+ > Add Apple ID...)

Once you've successfully logged in, a new 'Personal Team' with the role 'Free' will appear beneath your Apple ID.

<img src="/img/docs/deploying/profiles.jpg" alt="profiles">

#### Using an Apple Developer Account

Creating a provisioning profile with a paid Apple Developer account is a little bit more involved. For full instructions, check out [Launching Your App on Devices](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/LaunchingYourApponDevices/LaunchingYourApponDevices.html) in the Apple Developer docs.

### Running Your App

1. Run a production build of your app with `ionic cordova build ios --prod`
2. Open the `.xcodeproj` file in `platforms/ios/` in Xcode
3. Connect your phone via USB and select it as the run target
4. Click the play button in Xcode to try to run your app

Oops, code signing error! No problem.

### Code Signing Your App

Next, you'll need to code sign your app. How you do this will depend on if you are running Xcode 8 or an earlier version.

#### Xcode 7 and Earlier ####

If you are running Xcode 7 or earlier, you'll get a code signing error that looks like this when you try to run the app:

<img src="/img/docs/deploying/sign-fail-1.jpg">

Click the 'Fix Issue' button, then select your 'Personal Team' profile.

<img src="/img/docs/deploying/team-menu-1.jpg">

#### Xcode 8 ####

If you are running Xcode 8, the code signing error will appear as a buildtime error, rather than as a pop-up:

<img src="/img/docs/deploying/code-sign-err-xcode8.png">

To select the certificate to sign your app with, do the following:

1. Go to the 'Project Editor' by clicking the name or your project in the 'Project Navigator'
2. Select the 'General' section
3. Select the team associate with your signing certificate from the 'Team' dropdown in the 'Signing' section

<img src="/img/docs/deploying/code-sign-xcode8.png">

### Trusting the Certificate ###

Once you've code signed your app, you should get a launch error that looks like this. On Xcode 7 and below you'll see this automatically. On Xcode 8 it will appear the next time you try to run the app:

<img src="/img/docs/deploying/launch-fail-1.jpg">

To get past this, we have to tell our iOS device to trust the certificate we code signed our app with:

1. Open the 'Settings' app on your iOS device
2. Go to 'General > Device Management'. You'll see the email address associated with the Apple ID or Apple Developer account you used to code sign your app.
3. Tap the email address
4. Tap 'Trust &lt;your_email&gt;':

<img src="/img/docs/deploying/verify.jpg">

Now, go back to Xcode and hit that play button or run `ionic cordova run ios --device` from the command line to install and launch your app on your iOS device.
