---
layout: post
title:  "Salesforce $1M Hackathon Survival Kit"
date:   "2014-09-29 8:00:00"
categories: angularjs, salesforce
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: false
---

Salesforce just announced the return of the [$1M Hackathon](https://developer.salesforce.com/million-dollar-hackathon), this time coming to their October 13th [Dreamforce](http://www.salesforce.com/dreamforce/DF14/) conference.

The hackathon runs from October 10th through the 12th. That means you have just *two days* to build the best mobile app on Salesforce technology and win part of the $1M in prizes. You can't afford to waste a minute on anything besides building a great unique experience on Salesforce!

So, to help you get up and running as quickly as possible, we've partnered with the Salesforce team to bring you the [Ionic Salesforce Survival Kit](https://github.com/driftyco/ionic-starter-salesforce), a pre-configured Ionic app template complete with everything you need to connect to the Salesforce platform and build your UI.

### Required knowledge 

Don't know native development? Perfect! Ionic apps use only web technologies like AngularJS and run on both iOS and Android without any extra work.

To get the most out of the app, some experience with Javascript and HTML will be necessary, and if you know AngularJS that will also help (but isn't required).

### Getting started


First, you'll need to install Ionic and Cordova. Our [Getting Started](http://ionicframework.com/getting-started/) page can help you with that. These tools let you create, build, test, and run your mobile apps in the browser and on your devices.

We recommend doing this *before* the Hackathon so there are no issues when the competition stars.

Once everything is installed, test out the Ionic command to see if you can start and build an app:

```bash
$ ionic start myApp salesforce
$ cd myApp
$ ionic serve
```

You should see the salesforce demo app in your browser. Now, let's test it on the phone!

```bash
$ ionic platform add ios (or android for windows developers)
$ ionic build ios
$ ionic emulate ios
```

This should open the simulator with the real app running right on the phone!

Note: for Android developers we recommend testing directly on the device, so substitute `ionic emulate` for `ionic run`.

