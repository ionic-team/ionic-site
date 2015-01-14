---
layout: post
title:  "The Ionic View App is Alive!"
date:   "2015-01-14 14:00:00"
categories: ionic
author: '<img src="https://pbs.twimg.com/profile_images/477446871636393985/jPeOlsdz_400x400.jpeg" class="author-icon"><a href="http://twitter.com/dopernicus">Tim</a>'
published: true
---

<img class="showcase-image" src="/img/blog/ionic-view-app-header.gif" style="margin-top:-20px;">

Today, we’re excited to announce that Ionic View for iOS is now in public beta! 

The alpha version has been live in the App Store for a while now, and after much updating and testing, we are confident it is ready to become a useful part of your Ionic development toolchain. We want to get View out to people as soon as possible, so it may feel somewhat spare at first, but there are still many exciting features in the pipeline! 

<!-- more --> 

### What is Ionic View? How Does it Fit into My Workflow?

<div style="float: right; margin-right: -160px; margin-bottom: 80px; width: 50%;">
  <a href="http://ionicframework.com/img/blog/songhop-preview-right.jpg"><img src="/img/blog/ionic-view-preview-right.png"></a>
</div>

Ionic View functions like your own mobile app portfolio. It allows you to easily view, share, and test the Ionic apps you are developing across devices - your own, a client’s, or the person in the cubicle next to you (and by cubicle, we mean the pool chair at your beachside resort).

### Getting Started

Ionic View integrates with the [Ionic command line](https://github.com/driftyco/ionic-cli) to populate your app portfolio.  Once you’ve made sure to update your ionic-cli version to at least 1.3.2, starting and uploading an app is as easy as:

```bash 
$ ionic start myAppi
$ cd myApp
$ ionic upload
```

You’ll be prompted to login with your Ionic account, and upon doing so, your app will be visible in Ionic View.

### How it Works

<div style="float: left; margin-left: -120px; margin-right: 40px; margin-bottom: 70px; width: 32%;">
  <a href="http://ionicframework.com/img/blog/songhop-preview-left.jpg"><img src="/img/blog/ionic-view-preview-left.png"></a>
</div>

View uses the Cordova [inAppBrowser plugin](https://github.com/apache/cordova-plugin-inappbrowser) to launch your apps in their own separate WebView, so you can preview and test them. Normally, inAppBrowser only displays web content, but we might have hacked it a little to give apps access to the Cordova API and plugins. Ionic apps are hybrid apps for a reason, and a preview is not the same without plugin support! At the moment, plugin access is restricted to a specific subset of plugins, including GeoLocation, Keyboard, StatusBar, and BarcodeScanner, and we will be testing and adding many more in the coming weeks and months.  

Best of all, View is an Ionic app! We hope it sets a good example of the native-quality mobile apps that are possible with Ionic.

### Looking Forward

We’ll continue to add support for new plugins as we review and test them. We’ll also be fixing some known “quirks” (you mean you didn’t want your app links to expire after five minutes of having the app open?) in the next few weeks, and we’re looking forward to adding features like auto updating and the ability to sync with a livereload server in the near future as well. 

Being that it's an Ionic app, you may be wondering (or yelling) "where's Android?". Have no fear, the Android version is on it's way! We have been using Ionic View as a test for some of [ionic.io's](https://ionic.io) services that require custom plugins and started with iOS first. So instead of waiting for both versions, we decided to get View out to you as quickly as possible so people can start using and enjoying it :)

<strong>[Click here to download Ionic View](https://itunes.apple.com/us/app/ionic-view/id849930087) from Apple's App Store!</strong>

Have a plugin in your app that’s not supported yet? Having issues with the app? Feature request? Let us know on the [forum](http://forum.ionicframework.com/), hit Tim up on [Twitter](https://www.twitter.com/dopernicus), or open an issue on [Github](https://github.com/driftyco/ionic-view-issues/)!





