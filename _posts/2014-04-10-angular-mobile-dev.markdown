---
layout: post
title:  "Building Mobile Apps with AngularJS and Ionic"
date:   "2014-04-10 15:00:00"
hide_date: true
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

<img class="showcase-image" src="/img/blog/angularjs-ionic-framework.jpg">

[AngularJS](http://angularjs.org/) is turning out to be one of the best frameworks for building mobile apps across all major platforms.

One reason that Angular fits so well into the mobile developer toolbox is its features for interacting with backend web services and external data sources. Since most apps today are data-driven, it makes sense to use a tool built from the ground up to solve this problem.

Beyond that, AngularJS comes with some of the most modern and advanced software development practices ready-made and easy to use. You'll find that building mobile apps with Angular is highly efficient and results in solid code that will scale up as you pile on the features.

<!-- more -->

### Three-way data binding

Data binding is a popular concept in developer circles. The idea is when our data model updates, the UI also updates. This is great, but Angular takes it a step further: when our UI updates, we update the model to match.

This is called two-way data binding and it's incredibly easy to do in Angular:

[Firebase](http://firebase.com/) coined the term ["Three-way Data Binding"](https://www.firebase.com/blog/2013-10-04-firebase-angular-data-binding.html) which is the idea that we can not only keep our UI and in-memory data in sync (two-way data binding), but we can also sync the data with our backend services.

This means taking input from a user, processing it, saving it on the server, and keeping the UI in sync is incredibly easy to do with Angular. Coming from a jQuery or native iOS/Android background, you'll find Angular's data binding to be a *huge* timesaver for mobile development.

### Reusable logic

Angular helps keep our view (UI), data model, and application logic separate.  This means Angular lets us reuse our web application logic on multiple devices on multiple platforms, while still enabling us to customize the UI for each platform.

Previously, to target users across desktop, tablet, and mobile, our only option was to build a separate website for the Desktop, then build an iOS app with Objective-C, then an Android app with Java. We weren't able to share any code, making application development expensive, time consuming, and *risky*.

With AngularJS, we can keep the funcionality for our application (in controllers) separate from the way our application looks. This works regardless of whether we take a Responsive Web Design approach, or custom UIs for desktop and mobile.

### Testability

AngularJS uses the concept of [Dependency Injection](http://docs.angularjs.org/guide/di) (DI) to make it easy to pull in pieces of your code from anywhere. One benefit of this is how easy it is to *mock* part of your code for testing, which is the process of substituting a real component for one that fakes the functionality for testing purposes.

On mobile, this is especially important due to the slower develop-deploy-test cycle. We can't afford to waste time setting up and debugging a full physical enviornment each time we want to make a change in our app.

Imagine building an app that interacts with a Bluetooth device. If you use Angular and provide the Bluetooth functionality in a self-contained *service*, you can quickly mock this service and add fake Bluetooth data instead of having to painstakingly connect and reconnect with a physical Bluetooth device. Your mobile app won't even know the difference!

### Among Friends

AngularJS is being adopted by developers at an incredible rate (check out our [last post](http://ionicframework.com/blog/angularjs-will-be-huge/) on that). Google Trends for the last several years clearly shows the explosive growth of AngularJS:

<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=angularjs,+ember.js,+knockoutjs,+backbonejs&cmpt=q&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=550&h=330"></script>

This means by picking Angular we can take advantage of a growing number of high quality libraries and addons being created by the community. Need charts and graphs, analytics, or i18n support? It's all there. See the growing [ngmodules.org](http://ngmodules.org/) database for a good selection of these components.

### Mobile UI with Ionic

One thing that is often missing when building a mobile app with web technologies is the lack of a native-style UI kit. Luckily, with [Ionic](/), you get that in one free and open source package, complete with amazing AngularJS features. Check out our [huge collection](/docs/) of mobile-focused [components](/docs/api/directive/ionSideMenus/) and [utilities](/docs/api/service/$ionicPopup/) for building great apps with AngularJS and web technologies you already know and love.

Ionic is focused on using Web Standards, which means an Ionic app will fit right into your frontend stack, from desktop to tablet to mobile, and will take advantage of any existing web development experience on your team.

Ionic is part of a quickly growing community of AngularJS powered libraries that make building mobile apps with Angular incredibly fast and easy. 

### Go forth and build

AngularJS is a great choice not only for desktop apps, but increasingly for mobile apps as well. The combination of tight data binding across all parts of the application make developing data-driven apps with Angular fast and easy.

Being able to share application logic across desktop, tablet, and mobile apps is a huge plus which will save an incredible amount of time and money, and make it easier to add features for all your apps.

Angular's focus on testability makes it easy to mock physical devices and situations (bluetooth, GPS, and accelerometer, to name a few), which can dramatically speed up the development process and make your code more battle hardened and testable.

It's also a pleasure to develop in, and developers are increasingly learning and choosing to develop with Angular. It's a safe bet for finding great developers to build your apps.

What are your thoughts? Have you found AngularJS great for mobile app development? **Share your thoughts below**
