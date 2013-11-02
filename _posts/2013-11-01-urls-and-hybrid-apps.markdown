---
layout: post
title:  "URLs are for Web Apps, not Hybrid Apps"
date:   "2013-11-01 13:00:00"
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

When we started planning to build what soon became [Ionic](http://ionicframework.com/), we knew that we needed to take a native-focused approach to building the next great HTML5 development framework.

We felt that there were enough web-focused HTML5 frameworks, but few that treated HTML5 as a first-class citizen in the app store. We couldn't ignore that people increasingly look to the app store to find apps, rather than browse the web for them.

One big difference that kept coming up between web apps and native apps is how they handle URLs. Web apps utilize URLs both for the developer's convenience but also for the user's, allowing people all over the world to link directly to content. Native apps, in comparison, don't use URLs at all, or use them only for the developer's convenience.

In a native app, a user will never see any URLs even if the app is using URL based routing underneath. Obviously there are no URL bars or browser chrome in a native app so having URLs doesn't make sense, it's merely a convenient way to manage UI state for the developer.

Yet most current HTML5 development frameworks have kept URLs as a core concept, limiting a lot of UI interaction to those that can be expressed as resource paths. It's probably out of developer comfort, but also because the history of HTML5 and web technology is rooted in the browser app. But even then, URLs were meant to link to specific resources on the web, not to control user interface interactions.


If you are familiar with native app development, you'll know that native apps tend to utilize a lower level design pattern called the [View Controller](https://developer.apple.com/library/ios/featuredarticles/ViewControllerPGforiPhoneOS/Introduction/Introduction.html) pattern (ignore the Model portion for now). The idea is pretty simple: you have a set of views (think of them as boxes or rectangles where UI elements are drawn), and then controllers that manage multiple views in tandem.

The [UITabBarController](https://developer.apple.com/library/ios/documentation/uikit/reference/UITabBarController_Class/Reference/Reference.html) on iOS is a perfect example of this. It takes a set of child controllers which each have their own set of views that make up each "page" in the tabs, and manages tabbing between them:

<div class="phone">
  <img src="http://farm6.staticflickr.com/5330/9023342228_8341c60043_b.jpg" alt="UITabController">
</div>
<div class="caption">(don't forget to drink your vitamins, all day every day)</div>

In the screenshot of the iOS Alarm app above, you'll notice four tab buttons with four possible pages of the tab you can select. We are currently on the "Alarm" tab. The UITabBarController holds a reference to the [UITabBar](https://developer.apple.com/library/ios/documentation/uikit/reference/UITabBar_Class/Reference/Reference.html) view at the bottom (it even creates it for you), and then when a tab is selected, the controller makes sure to switch the pages for you.

In a WebApp, you might have a distinct URL for each page in the tab. That wouldn't be the worst thing in the world for a hybrid/native app, but it soon breaks down when we look at more complicated native apps. For example, the great [Yahoo! Weather](https://itunes.apple.com/us/app/yahoo-weather/id628677149?mt=8) app:

<div class="phone">
  <img src="http://ionicframework.com.s3.amazonaws.com/blog/madison_weather.jpg" alt="Yahoo! Weather">
</div>

If you haven't used the Yahoo Weather app before (highly recommended), it features one single pane that scrolls up displaying a variety of weather information. In an app like this, it becomes clear that URLs are not useful for any users of the app. But for the developer, it's even worse: URL-based routing becomes an artistic restriction.

When we think about apps as a complex, delightful dance of view elements on the screen, it seems really limiting to pigeonhole each view of the app to a URL. Another good example is the Gmail app sidebar:

<div class="phone">
  <img src="http://ionicframework.com.s3.amazonaws.com/blog/gmail_app.jpg" alt="Gmail app">
</div>

Since the user can drag over the content and expose the sidebar, the bar is often in various states of being uncovered. While we could trigger the sidebar to open with a URL, how do we handle intermediate states? How do you trigger the URL change if the user drags instead of clicking the open button? It's a mess when we start to restrict complicated UI to the URL.

In the Gmail case, it makes a lot more sense to apply the View Controller pattern, and think of every visible View on the screen as being controlled by a set of View Controllers. We start one with "root" controller that handles the left menu, center content, and right menu. The controller then handles dragging on the center content to expose the menus if necessary. Each child is its own View Controller containing more views and possible child view controllers.

Ionic: Native Applied to Web, And Back Again
--------

With Ionic, we wanted to apply these native design patterns to web development. And in doing so, we realized something really exciting: _HTML5 was just as powerful and flexible as native development_. But better still, it had some major benefits over native: it was faster to build in, easier to port across platforms, and known by a lot more developers.

We realized that if we could build an HTML5 framework that loved native design concepts instead of avoiding them, we could enable developers to build any kind of app they dreamed up, not just ones that worked with the URL pattern.

So we decided to apply the View Controller pattern to a lot of the ways developers build UI interactions in Ionic. If you are a web developer that hasn't had much experience with native development, it will probably feel a bit strange at first. We are confident that once you see what is possible when you free yourself from the URL, you'll feel quite empowered to build great apps in HTML5.
