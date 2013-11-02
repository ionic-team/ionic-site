---
layout: guide
title: "Getting Started with Ionic Framework"
---

# Chapter 0: Preface to the Ionic Guide

This is the official guide to building HTML5 apps with the Ionic framework, written by the [creators](http://drifty.com/) of Ionic. It contains all you need to know to get started building apps with Ionic, and lays a foundation for more advanced development.

If you've used other mobile development frameworks in the past, you should find Ionic fairly similar to use. But getting started with any framework is always daunting, so we will start simple and expand on some basic concepts. But first, we need to talk a bit about the Ionic project itself, where it fits into the dev stack, and why we built it.

## What is Ionic, and where does it fit?

Ionic is an HTML5 mobile app development framework targeted at building hybrid mobile apps. Hybrid apps are essentially small websites running in a browser shell in an app that have access to the native platform layer. Hybrid apps have many benefits over pure native apps, specifically in terms of platform support, speed of development, and access to 3rd party code.

But they also have drawbacks. On older devices, Hybrid apps run slower than native apps because there is an additional layer of overhead for the browser. They also don't support all native controls, and have different access to low level APIs. For certain graphically intensive applications like games, hybrid apps might not offer enough raw performance and control over memory usage.

We built Ionic because we strongly believed that HTML5 would rule on mobile over time, exactly as it has on the desktop. Once desktop computers became powerful enough and browser technology had advanced enough, almost everyone was spending most of their computing time in the browser. Luckily, with mobile devices building on much of the technology advanced in the desktop era, we now have smartphones and tablets capable of running powerful apps and rich 3D games.

We get a lot of questions asking where Ionic fits into the mobile development stack. Think of Ionic as the front-end UI framework that handles all of the look and feel and UI interactions your app needs in order to be compelling. Kind of like "Bootstrap for Native" but much more. Since Ionic is an HTML5 framework, it needs a native wrapper like Cordova or PhoneGap in order to run as a native app. Ionic does not come with any backend services, though we have a few favorites that we are happy to recommend (more on that later). 

With Ionic, we wanted to build an HTML5 mobile development framework that was focused on *native* or hybrid apps instead of mobile websites, since we felt there were [great tools](http://jquerymobile.com/) already for mobile website development. So Ionic apps aren't meant to be run in a mobile browser app like Chrome or Safari, but rather the low-level browser shell like iOS's UIWebView or Android's WebView.

We also wanted to make sure Ionic was as open source as possible, both by having a permissive open source license that could be used in both commercial and open source apps, but by cultivating a strong community around the project. 

## Who makes Ionic?

Ionic is a project of [Drifty](http://drifty.com/), a Madison-based developer tools company. Drifty makes money by building simple developer tools and services that can enhance your Ionic developer experience, but they are not necessary in order to use the framework. Rest assured knowing Ionic is supported by a profitable, growing, and independent software company.

The first version of Ionic was built by [Max Lynch](http://twitter.com/maxlynch), [Ben Sperry](http://twitter.com/helloimben), and [Adam Bradley](http://twitter.com/adamdbradley). But Ionic has an ever growing list of [community contributors](https://github.com/driftyco/ionic/graphs/contributors) and would not exist without them.
