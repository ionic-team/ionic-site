---
layout: post
title:  "Beta 14: The Final Beta"
date:   "2014-12-15  2:00:00"
categories: angularjs, ionic, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/459365829348302849/lJ1X8rU9.png" class="author-icon"><a href="https://twitter.com/Ionicframework">Ionic Team</a>'
published: false
---

<img class="showcase-image" src="/img/blog/b14-header.jpg">


Today, we're thrilled to announce Ionic 1.0 Beta 14, The Last of the Betas! Beta 14 takes Ionic beyond its birth as a [framework](http://ionicframework.com/blog/beyond-framework/) to its current state as a complete suite of solutions for hybrid mobile app development. After we released Beta 13, our team examined our tools and services and analyzed areas where we could make improvements for hybrid app development. The desire to meet the needs of our developers in the best way possible is the driving force behind every decision we make about Ionic. For this release, we focused on performance boosts, caching, view transitions, and platform-specific changes.

<!-- more -->

### Update to Angular 1.3
One of the biggest updates we've made in this release is that we've migrated Ionic's core to work with [Angular 1.3](http://angularjs.blogspot.com/2014/10/angularjs-130-superluminal-nudge.html), which offers supercharged performance and slick new features. Take a look at [Angular's Migration Page](https://docs.angularjs.org/guide/migration#migrating-from-1-2-to-1-3) to get familiar with any changes that apply to your app!


### Caching, Transitions, and Platform Configuration, Oh My!

####Caching

One huge performance boost we've added is the caching of views. It used to be that views and their scopes were destroyed as soon as the user navigated away from them. While this is the normal behavior for views in Angular, it's also a big hit for performance and perceived speed to have the same elements and data reloaded on every viewing.

Now, when the user transitions away from a view, the scope is disconnected, rather than destroyed, and the view is kept in the DOM. This allows us to essentially cache the view and reconnect the scopes, instead of rebuilding them. This means all that data crunching to get a controller spun up only needs to happen once. The controller and its data can stay in memory and listen for events, just like native apps. By default, Ionic will cache only 10 views, but this is all [highly configurable](http://ionicframework.com/docs/nightly/api/directive/ionNavView/).

Being able to hold scroll position as a user navigates forward and back is great for user interaction. For example, if the user scrolls down a large list on View A, then navigates to a detail page in View B, then navigates back to View A, it'll still be at the same scroll position (without any data reloading or skippy scrolling).

####Ionic's Got Some New Moves

If you follow any of the Ionic devs on Twitter, you've probably seen some hints about what we've been working on.

<img class="showcase-image" style="display: block; margin: auto;" src="https://pbs.twimg.com/media/B1DcthWCYAA45I1.jpg">


We spent a lot of time analyzing both iOS and Android animations to figure out exactly how they work. In iOS, there are about 20 different things happening all at once. New nav-bar buttons fade in, and old buttons fade out. Old titles slide to the back button text, and new titles slide in. The old view slides away, and the new view slides in, all while an overlay fades in. And that's just for the transition to a new view! Going back is a slightly different variation of this. We also spent a lot of time looking at how views transition in Android 5.0, paying special attention to the ways in which transitions are done with tabs in Android.

We encourage Ionic app developers to embrace platform specific changes, so users feel right at home using interactions and layouts with which they're familiar. For example, iOS apps have center-aligned titles and header buttons on the left and right, while Android apps have left-aligned titles and header buttons on the right. In Beta 14, we've added these as defaults, so  platform-specific UI changes happen _automatically_, but they can all still be configured.

It was clear to us that we needed to rethink our transition system and how we were handling views. Simple CSS transitions weren't cutting it, especially because we wanted a transition to also be controlled with user-interaction (think swipe-to-go-back). This realization drove us to create our new view transition and caching system and to structure the core so it is easily configurable. With this new setup, we'll begin working on a new animations pack to provide even more compelling animations. Expect even more to come!


####Configure All The Things

We also created the  [`$ionicConfigProvider`](http://ionicframework.com/docs/nightly/api/provider/$ionicConfigProvider/), a powerful feature that allows you to customize nearly every aspect of your app, from where the title aligns in the nav-bar to the style of animations used for transitions. Even small changes, such as the back button icon, can be configured to be one way for an iOS app and another way for an Android app.

### Automatic History Magic

In addition to all the configuration that can be done with `$ionicConfigProvider`, we've also added [`$ionicHistory`](http://ionicframework.com/docs/nightly/api/service/$ionicHistory/), which includes functionality that was available in previous versions of Ionic, but wraps them in an Angular service and adds new features. `$ionicHistory` keeps track of an app's views and history stack as the user navigates. Similar to the way a browser behaves, an Ionic app is able to keep track of the previous view, the current view, and the forward view (if there is one).

However, a typical web browser only keeps track of one history stack in a linear fashion. Ionic's `$ionicHistory` is able to keep track of multiple histories and follow the user as he or she navigates among different views and different histories. For example, an app with tabs has its own history stack for each tab, so a user can navigate a few views in Tab A, then navigate a few in Tab B, and return to Tab A, with the previous stack location having been maintained the whole time.

### But Wait, There's MORE!
We have so many things in store for 2015 that we couldn't resist offering you a little sneak peek...

Here's What's Next!
Chromium builds for Android: We'll be integrating Chromium builds into the CLI soon, but remember that [you can do this now with Crosswalk](http://blog.nraboy.com/2014/10/use-crosswalk-ionic-framework-android-apps/). What this means for you is drastically improved performance on Android devices.
Now that view elements are cached in the DOM, we'll be adding the "swipe to go back" feature between pages.
Since Android provides the necessary scroll events, we'll be refactoring our scrolling, such that we can remove JS scrolling on Android devices.
This is our _last Beta release_! Once “swipe to go back” and removal of JS scrolling on Android updates are added, we're going to call Ionic v1.0 feature complete and roll out the Release Candidate.
Our new navigation and transition system provides a lot more power for animations. In the near future, we'll be creating an animations pack that can easily extend Ionic's animations and allow apps to do some pretty slick stuff with very minimal code.
More Ionicons! We will be adding to and improving our [beloved font icon pack](http://ionicons.com/) to pair nicely with the next Ionic release. Spinning font icons will be removed in lieu of a special new loading spinner project we're working on…
Oh, and let's not forget Ionic.io, which will give all Ionic developers access to powerful services like Analytics, A/B testing, and live-updating of apps without app store submission. Sign up on the alpha list for more info as we move closer to release!

### Setting the Bar for Maximum Awesomeness
We encourage the Ionic community to check out the [changelog](https://github.com/driftyco/ionic/blob/master/CHANGELOG.md) for this release, review our [docs](http://ionicframework.com/docs/), and read up on all the new APIs. Ionic has evolved into a full-fledged SDK for mobile apps, and we believe the updates we've made in this release will make app development an even more enjoyable process for all of you. Thanks to all our community members who have provided feedback and improvements to the open source project. We are very grateful to you!

**Docs**

- [View LifeCycle and Events](http://ionicframework.com/docs/nightly/api/directive/ionView/)
- [Navigation](http://ionicframework.com/docs/nightly/api/directive/ionNavView/)
- [Ionic Config](http://ionicframework.com/docs/nightly/api/provider/$ionicConfigProvider/)
- [Angular v1.2 to v1.3 Migration](https://docs.angularjs.org/guide/migration#migrating-from-1-2-to-1-3)
- [Angular v1.3 (ngEurope 2014)](https://www.youtube.com/watch?v=ojMy6m_fcxc)
