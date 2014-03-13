---
layout: docs_guide
title: "Welcome to Ionic"
chapter: preface
---

# Chapter 1: All About Ionic

This is the official guide to building HTML5 apps with the Ionic framework, written by the [creators](http://drifty.com/) of Ionic. It contains all you need to know to get started building apps with Ionic, and lays a foundation for more advanced development.

If you've used other mobile development frameworks in the past, you should find Ionic fairly similar to use. But getting started with any framework is always daunting, so we will start simple and expand on some basic concepts. But first, we need to talk a bit about the Ionic project itself, where it fits into the dev stack, and why we built it.

## What is Ionic, and where does it fit?

Ionic is an HTML5 mobile app development framework targeted at building hybrid mobile apps. Hybrid apps are essentially small websites running in a browser shell in an app that have access to the native platform layer. Hybrid apps have many benefits over pure native apps, specifically in terms of platform support, speed of development, and access to 3rd party code.

But they also have drawbacks. On older devices, Hybrid apps run slower than native apps because there is an additional layer of overhead for the browser. They also don't support all native controls, and have different access to low level APIs. For certain graphically intensive applications like games, hybrid apps might not offer enough raw performance and control over memory usage.

We get a lot of questions asking where Ionic fits into the mobile development stack. Think of Ionic as the front-end UI framework that handles all of the look and feel and UI interactions your app needs in order to be compelling. Kind of like "Bootstrap for Native," with support for a broad range of common native mobile components, slick animations, and beautiful design. Ionic also gives you some opinionated but powerful ways to build mobile applications that eclipse existing HTML5 development frameworks.

Since Ionic is an HTML5 framework, it needs a native wrapper like Cordova or PhoneGap in order to run as a native app. Ionic does not come with any backend services, though we have a few favorites that we are happy to recommend (more on that later).

## Why did we build Ionic?

We built Ionic because we strongly believed that HTML5 would rule on mobile over time, exactly as it has on the desktop. Once desktop computers became powerful enough and browser technology had advanced enough, almost everyone was spending their computing time in the browser. And developers were overwhelmingly building web applications. Luckily, with mobile devices building on much of the technology advanced in the desktop era, we now have smartphones and tablets capable of running powerful apps and rich 3D games.

With Ionic, we wanted to build an HTML5 mobile development framework that was focused on *native* or hybrid apps instead of mobile websites, since we felt there were [great tools](http://jquerymobile.com/) already for mobile website development. So Ionic apps aren't meant to be run in a mobile browser app like Chrome or Safari, but rather the low-level browser shell like iOS's UIWebView or Android's WebView.

In fact, we felt that the history of web technologies living in the browser application was holding back its potential in the native environment. So with Ionic, we have liberated the developer from fitting their app into neat sections that can be linked through URLs, and we are focused on application layouts not content layouts. We've taken a native design to everything, and it might be a bit of a change for web developers. Trust us, it's worth it.

And above all, we wanted to make sure Ionic was as open source as possible, both by having a permissive open source license that could be used in both commercial and open source apps, but by cultivating a strong community around the project. We felt there were too many frameworks that were *technically* open source, but were not open source in spirit or were not possible to use

## Who makes Ionic?

Ionic is a project of [Drifty](http://drifty.com/), a Madison-based developer tools company. Drifty makes money by building simple developer tools and services that can enhance your Ionic developer experience, but they are not necessary in order to use the framework. Rest assured knowing Ionic is supported by a profitable, growing, and independent software company.

The first version of Ionic was built by [Max Lynch](http://twitter.com/maxlynch), [Ben Sperry](http://twitter.com/benjsperry), and [Adam Bradley](http://twitter.com/adamdbradley). But Ionic has an ever growing list of [community contributors](https://github.com/driftyco/ionic/graphs/contributors) and would not exist without them.

## Building Hybrid Apps With Ionic

Those familiar with web development will find the structure of an Ionic app straightforward. At its core, it's just a web page running in an native app shell! That means we can use any kind of HTML, CSS, and Javascript we want. The only difference is, instead of creating a website that others will link to, we are building a self-contained application experience.

The bulk of an Ionic app will be written in HTML, Javascript, and CSS. Eager developers might also dig down into the native layer with custom Cordova plugins or native code, but it's not necessary to get a great app.

Ionic uses AngularJS by default. And although it isn't absolutely required, the low-level Ionic APIs are more advanced and not part of this tutorial. We think Ionic is best served through your framework of choice, and we are recommending Angular for all apps built with Ionic.

## Ionic Apps vs. Web Apps

Just like any native app, Ionic apps utilize common core layout features. These include but aren't limited to: header and footer bars, scrollable content areas, tabs, navigation stacks, and side menus.

Unlike web apps or mobile web apps, we need to think of the structure of our app less as a collection of resources linked through URLs, and more of a collection of dynamic, potentially non-linear experiences.

To help you get there, Ionic does not impose any page or routing restrictions. For developers new to mobile development, this might seem strange. It's natural to have a URL bar and to link between different views of the application through the built in routing mechanisms found in the browser application, letting the user travel backwards and forwards in time using the buttons in the browser.

But in native app development, we work at lower level. Instead of using URLs, we need to think in terms of collections of *views*, or rectangles of UI content. Everything you see on the screen is a view. A Button is a view, a Tab Bar is a view, a Header is a view, and an Image is a view.

We use View Controllers to take individual views and control them as a group to create amazing experiences. A perfect example is a Tab Bar. We might have a Tab Bar View with three Buttons views in it. But we also have three corresponding content pages that we need to control through Tab Bar taps.

Instead of treating each page as a separate URL, we treat them as their own groups of views, using a Tab Controller to manage the Tab Bar Button taps to switch the different "pages," each of which is their own View Controller containing sets of child Views and View Controllers. It might seem complicated, but think of it just like the DOM: a tree of tangible UI elements inside of containers that manage them.

Perhaps we load certain assets (like images, cached templates, or web content) from a URL, but since we need local content to load incredibly quickly, we only use URLs as a convenience in their function as unique resource identifiers.

Hopefully, as we start to build out the UI, the View Controller concept will become a lot more clear.

## Get building!

Now that you have and understanding of what Ionic is and why it exists, you are ready to start building your first app with it. Continue on to get everything installed and start building with Ionic!

[Chapter 2: Installation](installation.html)
