---
layout: post
title:  "Ionic RC0: New Swipe to Go Back Feature"
date:   "2014-08-06 13:00:00"
categories: ionic, angularjs, beta
author: '<img src="http://www.gravatar.com/avatar/eeff5848f4231174094d2bc3cce26a05?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/adamdbradley">Adam</a>'
searchable: true
published: true
---

Last week at ng-conf, [we announced Ionic RC0](https://youtu.be/wvr11fvCeu4), which includes several new features about which we’re really excited.

The first one, a feature near and dear to my heart, is Swipe to Go Back. Ionic now uses interactive transitions, rather than just static animations. Swipe to Go Back works the same way the back button does, animating the nav bar title and back buttons. You can swipe from the left of a page to go back to the previous page. Letting go at certain points of the transition will cause the view to either snap back or complete the navigation.

<!-- more -->

This feature, which is common in native iOS apps, is only offered for iOS, because Android doesn’t do this. It’s only in Cordova, because standard mobile browsers provide their own swipe to go back capabilities. The URL still changes and is no different than any other navigation with the same lifecycle events.

Watch the video of my presentation [where I talk about Swipe to Go Back](https://youtu.be/wvr11fvCeu4?t=9m1s):
<iframe width="100%" height="510" src="//www.youtube.com/embed/wvr11fvCeu4?t=9m1s" frameborder="0" allowfullscreen></iframe>

For more on the Ionic community's response to Swipe to Go Back and RCO, check out [Sani Yusuf's post on Medium.com](https://medium.com/@saniyusuf/first-look-at-ionic-1-0-rc-release-candidate-40f6f18308f4).
