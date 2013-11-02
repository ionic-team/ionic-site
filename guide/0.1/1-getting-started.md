---
layout: guide
title: "Getting Started with Ionic Framework"
---

# Chapter 1: Getting Started with Ionic

If you've used other mobile development frameworks in the past, you should find Ionic fairly similar to use. But Ionic contains a lot of code in a lot of different files, and just looking at the directory structure can be quite daunting!

We also get a lot of questions about where Ionic fits into the mobile development stack. Think of Ionic as the front-end UI framework that handles all of the look and feel and UI interactions your app needs in order to be compelling. Since Ionic is an HTML5 framework, it needs a native wrapper like Cordova or PhoneGap in order to run as a native app. Ionic does not come with any backend services, though we have a few favorites that we are happy to recommend (more on that later). 

Beyond the framework itself, [Drifty](http://drifty.com/), the company behind the open source Ionic framework, provides additional services and tools to make your Ionic development experience better.

In this first chapter, we are going to walk through the process of downloading Ionic, creating a new app using Ionic, setting up your project to build with Cordova, and testing in device simulators or directly on your devices. Then, we will talk a little bit about distributing your app for testing, and getting your app in the various app stores.

First, we need to start with a note about minimum requirements for building your app with the current release of Ionic. First, Ionic only works on recent iPhone and Android devices. We support iOS 6+, and Android 4.2+. However, since there are a lot of different Android devices, it's possible certain ones might not work. As always, we are looking for help testing and improving our device compatibility and would love help from the community on our [GitHub](https://github.com/driftyco/ionic) project.

First, we will go and install the most recent version of [Apache Cordova](http://cordova.apache.org/), which will take our app and bundle it into a native wrapper to turn it into a traditional native app. There are other possible tools you could use instead of Cordova, including [PhoneGap](http://phonegap.com/) proper (the Adobe version of Cordova that has some additional Adobe service bundled in), [Trigger.io](https://trigger.io/), or a custom solution.

To install Cordova, make sure you have [Node.js](http://nodejs.org/) installed, then run

    $ sudo npm install -g cordova

First, make sure to download the [most recent release](https://github.com/driftyco/ionic/releases) of Ionic. It is not recommended to clone the repo for production apps
unless you want to live on the bleeding edge.

Once you have the most recent release of Ionic, extract it anywhere you like on your computer. We are only going to be needing some of the files for our app, specifically the ones in the `dist/` folder, and possibly the ones in the `scss/` folder for more advanced usage (more on that later). For the sake of getting started, we will start with the most basic usage of Ionic.

Now, we need to create a new folder somewhere on your computer for the code for your app. If you are planning on using any version control system, you can go ahead and set it up using this new folder. For new apps, follow this folder structure to get up and running quickly:

* `myapp`
 * `js`
 * `css`

Go ahead and copy the `dist/` files from the Ionic code we extracted above, and 
