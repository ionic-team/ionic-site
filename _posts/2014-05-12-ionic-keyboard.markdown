---
layout: post
title:  "Hybrid Adventures in Keyboard Land"
date:   "2014-05-12 08:00:00"
hide_date: false
categories: ionic
author: '<img src="https://pbs.twimg.com/profile_images/378800000290028838/ee3303b02223f25cb0f9b082b55b2eeb.jpeg" class="author-icon"><a href="http://twitter.com/dopernicus" target="_blank">Tim Lancina</a>'
published: true
---

<img class="showcase-image" src="/img/blog/keyboard-land.gif">

Hybrid development is great because you get to spend most of your time in the idyllic pastures of web technologies, and with the help of Cordova, reap many of the benefits of native with little extra effort. HTML5, CSS and JavaScript are your friends, and with all the time and money they save you, finding the time to go outside, have a few beers and enjoy life is easy.  But sometimes you have to realize every mobile web developer’s nightmare and actually venture out into the complex world of the various native environments. 

Here at Ionic we’re mostly denizens of the web, but we journeyed to this intimidating region of hybrid land to try and mitigate one of the more nagging problems we encountered: the keyboard.  People were having issues with the keyboard covering up focusable elements and messing up the layout of their application.  It’s a difficult problem to solve however, because from the web layer you have a lot less control over what the keyboard does.  How much of its design or behavior can be changed, and how much information you have about it, is for the most part at the mercy of the underlying native browser’s implementation.  Still, we wanted Ionic to be able to adjust to the presence of the keyboard accordingly.

<!-- more -->

### Issues

Getting the keyboard to play nicely with the web layer was challenging for several reasons.  Probably the biggest issue is the variation in behavior across devices and platforms when the keyboard is shown.  

In iOS, not only does the web view resize differently when the keyboard shows in versions 6.1, 7.0, and 7.1, but it is affected differently, and sometimes completely oppositely, by including or excluding the [viewport meta tag](https://developer.apple.com/library/iOs/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html).  Throw support for tablets and landscape orientation into the mix and trying to make every scenario on every device work nicely can have you quickly creating three new issues for every one you fix.

On Android there are similar issues. For example when the keyboard appears in an app in fullscreen mode, it [doesn't resize](https://code.google.com/p/android/issues/detail?id=5497) the web view at all.  Instead, it just pops up over any focusable elements that may live at the bottom of the page and hides them from sight.  Another obstacle is the amount of slow devices running Android still out there, meaning the amount of time it takes the web view to resize (or at least report it has resized) when the keyboard shows can vary greatly between devices and versions.  That, coupled with the fullscreen issue, means there are a number of different behaviors to handle on Android as well.

Another major challenge we faced, on all platforms, was trying to get the native overflow scrolling to stay out of the way.  Ionic uses JavaScript scrolling in its [scroll view](http://ionicframework.com/docs/api/directive/ionScroll/), so having the web view try to scroll focused elements into view was often a problem.  Since Ionic already handles scrolling, having the native layer also scroll either moves the focused element completely out of view, or shifts the entire content of the page, pushing headers off the page and ruining the layout of the app.

And finally, on top of everything else, we had to make sure that tap/click events worked nicely with everything we were doing.  One of the bigger problems is that removing the notorious [300ms delay](http://updates.html5rocks.com/2013/12/300ms-tap-delay-gone-away) often prevents the keyboard from showing up. Preventing the default behavior on touch and click events is tricky because while it may stop unwanted things from happening, it can just as easily suppress intended actions.

### Solution

Our approach to resolving all these issues was twofold: try to keep the problems with the native layer out of the way, and let Ionic do as much as possible to resolve the rest.  One of the biggest barriers to Ionic being able to accommodate the presence of the keyboard on the screen was knowing with absolute certainty when the keyboard was on the screen, and how big it was.  

To do this, we developed the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugins-keyboard), which on both iOS and Android fires events indicating when the keyboard will show or hide, and if it is going to appear, how big it is.  This allows Ionic to adjust the scrollable content area as quickly and as accurately as possible, which in turn allows it to scroll any obscured inputs into view.  On iOS, it actively prevents the native scroll, and to give your app a more native feel, gives you the option of removing the accessory bar that appears by default on top of the keyboard in a web form.  The plugin is not Ionic specific however, and can be used in any Cordova app to expose information about the keyboard to the web layer.

Since most of the logic for adjusting to the presence of the keyboard is done by Ionic in the web layer, you don’t need the plugin to see improvements.  However, for keeping things like the native scrolling at bay and achieving consistent behavior for your application across all devices, using the plugin is your best bet.

### Go Outside Again

The fact that there are so many issues with handling the keyboard in a hybrid environment can be a major deterrent for people considering hybrid as a viable alternative to native.  No one wants to spend all their time trying to solve every single scenario on every single device for something as trivial as the keyboard.  That’s why [we](https://github.com/driftyco/ionic/blob/master/test/unit/utils/keyboard.unit.js) [did](https://github.com/driftyco/ionic/blob/master/test/unit/utils/viewport.unit.js).  So you can go back to the inebriated, carefree lifestyle you normally enjoy when choosing hybrid for mobile app development.  Go outside, play with your kids and live the life you’ve imagined!
