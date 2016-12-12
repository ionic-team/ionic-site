---
layout: v2_fluid/docs_base
category: setup
id: installation
title: Installing Ionic
header_sub_title: Getting Started with Ionic
next_page_title: Tutorial
next_page_link: /docs/v2/setup/tutorial
---

# Installing Ionic

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/setup/installation/index.md'>Improve this doc</a>

Ionic 2 apps are created and developed primarily through the Ionic command line utility (the "CLI"), and use Cordova to build and deploy as a native app. This means we need to install a few utilities to get developing.

### Ionic CLI and Cordova

To create Ionic 2 projects, you'll need to install the latest version of the CLI and Cordova. Before you do that, you'll need a recent version of Node.js. [Download the installer](https://nodejs.org/) for Node.js 6 or greater and then proceed to install the Ionic CLI and Cordova for native app development:

```bash
$ npm install -g ionic cordova
```

> You may need to add "sudo" in front of these commands to install the utilities globally

Once that's done, create your first Ionic app:

```bash
$ ionic start cutePuppyPics --v2
```

Omit --v2 if you'd like to use Ionic 1. To run your app, `cd` into the directory that was created and then run the `ionic serve` command to test your app right in the browser!

```bash
$ cd cutePuppyPics
$ ionic serve
```

<!--
### [Basic Ionic workflow](#basic-workflow)

There is a basic workflow for building and testing Ionic apps:

First, we build the app code that is primarily written in TypeScript/JavaScript with our HTML templates and Sass files for styling. To do this, we
can either build our app code manually each time it changes with `npm run build`, or we can "watch" for changes and rebuild automatically with `npm run watch`.

Once our app code is built and ready to be deployed and tested, we bundle that code with Cordova into a device project for X Code and/or Android Studio. We use the command `ionic build [android,ios]` to tell Cordova to package our app code into a device project and do a full build. For those that prefer to do the build from the platform-specific IDE like X Code or Android Studio, it's faster to run `ionic prepare [android,ios]` which copies all the files needed to do the build, but doesn't actually do the full build.

Third, we tell Cordova to run the actual device app code on a device, simulator/emulator, or in the browser as a Progressive Web App. We do this by running `ionic run` to run on-device, or `ionic emulate` to run in a simulator or emulator.

### [Browser testing](#browser-testing)

As a bonus, since Ionic is built on standard web technologies, we can develop and test much of our app directly in the web browser as long as we aren't relying on native plugins for functionality, or if we are building a Progressive Web App.

To do this, run `ionic serve` which will start a local web server and launch your browser of choice. This is great for rapid app development and testing.

We also have a fun side-by-side development tool called Lab that you can run with `ionic serve --lab`. This runs your app with iOS styles and Android styles side-by-side. It's a great way to see what your app will look like on all platforms while you develop and test!
-->

### [Platform Guides](#platform-guides)

For those building native apps for iOS and Android (most of you!), each platform has certain features and installation requirements before you can get the most out of your Ionic and Cordova development.

For iOS developers, take a look at the [Cordova iOS Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/) and follow the instructions to install or upgrade Xcode, and possibly register for a developer account to start building apps for iOS.

For Android developers, take a look at the [Cordova Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/) and follow the instructions to install the SDK and/or Android Studio to start building apps for Android.
