---
layout: post
title:  "Crosswalk comes to Ionic"
date:   "2015-01-12  2:00:00"
categories: angularjs, ionic, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/378800000732074456/9d7a839f5c3d9e6f98b390b795909af8.jpeg" class="author-icon"><a
href="https://twitter.com/jbavari">Josh</a>'
published: true
---

<img class="showcase-image" src="/img/blog/crosswalk-header.jpg" style="margin-top:-20px;">


### Ionic and Crosswalk

With our latest CLI update, we’re excited to introduce the ability to package modern rendering engines within your app
for Cordova, starting with [Crosswalk for Android](https://crosswalk-project.org/). Crosswalk provides Android
developers a bundled Chrome webview for their projects, resulting in better performance and predictability!

Our team is passionate about making hybrid mobile development awesome, and we’re so grateful to our committed,
enthusiastic community for helping us succeed in our mission.

<!-- more -->

### Getting Started With Crosswalk

First, make sure you get the latest Ionic CLI, and then you can easily create an app, add the Android platform, and add
Crosswalk to the project.

#### New Project

```bash
npm install ionic
ionic start my_app
cd my_app
ionic browser add crosswalk
ionic run android
```

#### Previous Ionic Project

```bash
npm install ionic
cd existing_app
ionic browser add crosswalk
ionic run android
```

#### Specifying a version of Crosswalk

`ionic browser list` #Find the version of Crosswalk you want.
`ionic browser add crosswalk@10.39.235.15`  #Install stable version 10.39.235.15.

#### Building for separate architectures

Update: Previously you needed an environment variable to build multiple architectures. Do to some changes on the underlying Cordova Android library, you no longer need to specify the environment variable to build multiple APKs. This should happen by default by running `ionic build android`.

If you have a device connected and run `ionic run android`, it will auto detect that architecture type and only build and run for that device.

#### Volatility

*Please note that running these steps it will alter your Android project, so you’ll want to use version control to
handle changes from Crosswalk.*

These commands should set you up with a custom Android build with Crosswalk. You can run the project as you normally
would.

To confirm it was, in fact installed, open [Chrome DevTools](chrome://inspect/#devices) and confirm that it says "Chrome 37"
or greater.

We'd love to ask you to help out the cause by testing and giving feedback. This is your chance to help several open source projects at once: Cordova, Crosswalk, and Ionic!

#### 10 Questions You May Ask:

We’ve put together this Q & A to answer questions you might have about Crosswalk. Please don't hesitate to contact us if you have questions that aren't answered here!

1. What is Crosswalk?
  * Crosswalk is an open source project that allows you to specify a version of Chrome to use as your web browser in Android.
  * The compiled app will have your code hosted inside of this Chrome webview.
2. Why should I use Crosswalk?
  * Older versions of Android devices (4.0-4.3) use Android’s default browser, which has significantly less performance and standards compliance than modern Chrome.
  * Using Crosswalk gives you a specific and more performant version of Chrome to use on all Android devices, in order to reduce fluctuations and fragmentation among devices.
3. How does Crosswalk improve Cordova Android apps?
  * By designating a specific version of Chrome, you can skip the unexpected behavior from browsers that vary from device to device.
  * Improved performance and ease of debugging.
4. What can I expect, performance and size-wise?
  * In older Android Devices (4.0-4.3), you’ll see about a 10x improvement of both HTML/CSS rendering and JavaScript performance and CSS correctness.
  * To bundle Chrome, you will see a small (~10-15MB) size increase in your Android Apps.
5. How do I try it out?
  * `npm install -g ionic`
6. How do I report errors?
  * If you encounter any errors, please type `ionic info` and paste that information to our [Ionic CLI issues on github](https://github.com/driftyco/ionic-cli/issues)
7. What should I look for when testing?
  * Improved performance on older Android devices, with the ability to debug using Chrome DevTools.
  * Testing any of the core Cordova plugins, such as Camera, GPS, etc.
  * Report weird behaviour while building or running the app.
  * Report differences between using Crosswalk and not; for example, your splash screen no longer shows.
8. How do I debug with Crosswalk / Chrome?
  * Fire up Chrome DevTools and go to [Chrome Inspect Devices](chrome://inspect/#devices).
9. What are the architectures for Android devices and why do they exist?
  * There are two main Architectures for Android - x86 and ARM.
  * The reason for the two are due to the device providers choosing to use a separate processor. With different processors, we’ll need to compile them separately.
  * Using Crosswalk, you may specify that you want two separate builds for x86 / Arm to keep your build size down.
  * If you make a single build, you will have to bundle both versions of Crosswalk (x86/Arm) and have a larger build
  * size (~50-60 MB).
10. Why the switch to Gradle for Android?
  * The Cordova Android team has decided to move away from Ant towards more of a Gradle-based build scenario.
  * In this upgrade, you may see alternative build messages from Gradle, instead of your normal Ant messages.

### CLI Roadmap (tentative)

It’s really important to us that we keep our users informed about what we're working on. Here’s a roadmap that covers where we’ve been and where we’re going. Thanks for joining us on the journey!

#### 1.3 Milestones (1/7/2014 - 1/12/2015)

* Crosswalk Browser introduction &amp; installation.
* Info command for environment-specific info.
* Error reporting from CLI - helps us respond to errors faster and be proactive about errors.
* Individual help commands - now the CLI gives more info about the individual commands `ionic help serve`.

#### 1.3.1 Milestones (1/12/2015 -1/14/2015)

* Specify a [version of Crosswalk](https://download.01.org/crosswalk/releases/crosswalk/android/stable/) to use - `ionic browser add crosswalk@10.39.235.15`.
* See all the browsers available to install - `ionic browser list`. *NOTE: Only stable releases are allowed for now.*
* Fixed a bug related to `ionic upload`.
* Caching the Crosswalk downloads - once you’ve installed a version in a project, running `ionic browser add crosswalk` will not re-download the webviews.

#### 1.3.2 Milestones (1/14/2015 - 1/23/2015)

* Quick fix for the `ionic upload` command - fixed an issue with the cookies from the request.

#### 1.3.3 Milestones (1/23/2015 - onward)

* Add a release option that removes unused files and minifies/uglifies to give you smaller builds.
* Add the ability to specify Beta/Canary builds of Crosswalk.
* Provide a way to release Android builds post 4.4 without Crosswalk.
* Make using the CLI easier with tab complete.

[Crosswalk Docs](https://github.com/driftyco/ionic-cli#crosswalk-for-android)
