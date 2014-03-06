---
layout: post
title:  "What is Cordova/PhoneGap?"
date:   "2014-03-06 08:00:00"
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: false
---

As we've built out Ionic, we've gotten a ton of questions about Cordova and PhoneGap. These range from confusion with the naming (are Cordova and PhoneGap the same thing?), to a misunderstanding of the goals and capabilities of these projects.

## A history lesson

PhoneGap was created around 2009 by a startup called Nitobi as an open source way to access the "native" environment through an embedded Web View in a native app. The goal of the project was to make it possible to build the bulk of a mobile app experience with pure web technologies like HTML5, CSS, and Javascript, but still be able to call into native code when necessary.

A few years later, Adobe purchased Nitobi and with it the rights to the PhoneGap brand. The project itself was still open source, and it was decided to donate that portion of it to the [Apache Software Foundation](http://apache.org/) under the name Cordova (the name of the street the original Nitobi office was on). This was done to ensure the underlying technology would be well maintained over time ([more on that](http://phonegap.com/2012/03/19/phonegap-cordova-and-what%E2%80%99s-in-a-name/))

## A rose by any other name

The whole Cordova vs PhoneGap thing is confusing. The analogy Adobe uses is Cordova is to WebKit as PhoneGap is to Chrome. PhoneGap is Cordova plus extra Adobe stuff.

At first, the differences between Cordova and PhoneGap were minimal. PhoneGap was basically a different name for the same thing. But Adobe always had plans to build out a proprietary set of services around the PhoneGap ecosystem, and has started to execute on that plan with PhoneGap Build.

So, when you start a new hybrid app project, you can either decide to use Cordova
