---
layout: post
title:  "Ionic Compared to Other Frameworks"
date:   "2014-01-13 13:00:00"
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: false
---

We are often asked how Ionic compares to other mobile frameworks. Since we built Ionic to serve a need we saw being unfilled in the mobile development
world, we hope this post clarifies why Ionic fits in, when to use it, and even when *not* to use it.

I'll start first with the permissive open source projects, and end with the commercial ones.

## Open Source

### jQuery Mobile

[jQuery Mobile](http://jquerymobile.com/) is a great, MIT licensed open source mobile web app framework. It has amazing device compatibility, and works
very well when used to build mobile websites.

Because jQuery Mobile has the goal of supporting as many mobile devices as possible, the feature set is more conservative than Ionic. jQuery Mobile is also optimized
to be run in a mobile website, so some interactions that Ionic supports like draggable side menus aren't available (mobile browsers have their own side gestures for switching tabs, etc.).

Performance wise, many have found Ionic to be faster, smoother, more interactive, and a better fit with the native look and feel. That's in large part due to our focus
on eliminating jQuery and optimizing touch gestures and transitions, as well as using faster AngularJS features that jQuery Mobile provides for developers.

We think jQuery Mobile is a great choice if you are building a mobile website instead of a hybrid mobile app, and we invested in jQuery Mobile quite a bit two years ago, building our [initial business](http://codiqa.com/) around it. But for building hybrid mobile apps, Ionic is a better choice.

*jQuery Mobile licensed under MIT*

### Bootstrap

[Bootstrap](http://getbootstrap.com/) is a great responsive website framework. Its sweet spot is building desktop websites that work great on mobile.

Compared to Ionic, Bootstrap does not offer much in the way of a "native" or app-style mobile UI. But if your goal is to have a single desktop and mobile *web* experience Bootstrap is a great choice.

*Bootstrap licensed under MIT*

### Topcoat

[Topcoat](http://topcoat.io/) is an Adobe sponsored mobile-optimized CSS framework. One of the goals of Topcoat is to produce very light-weight CSS components for building mobile apps.

It's important to realize that a CSS framework is not a UI library. There are no logic-driven components like tabbed interfaces, navigation stacks, side menus, or image sliders.

Instead, Topcoat is more like one half of Ionic, the part that deals with the *look* but not the *feel* or *function* of your app.

Since Ionic's component set overlaps with and exceeds Topcoat, I find it harder to recommend using it as you'll end up needing to replicate things that are already available in Ionic. Not to mention the default theme of Topcoat is very non-standard, while Ionic tends to feel right at home on iOS 7 while not cloning it outright.

*Topcoat is licensed under Apache 2*

### Ratchet

[Ratchet](http://maker.github.io/ratchet/) is an HTML5 iOS prototyping library. What that means is it provides a clone of the default theme for iOS exposed as a set of HTML markup, CSS styles, and Javascript components to emulate simple iOS components and interactions.

As such, Ratchet isn't meant for building full HTML5 hybrid apps, just for prototyping ones you'll be building from scratch using native code. It's a crucial philosophical difference from Ionic, where we believe HTML5 can, and *should* be used for building real apps, not just prototypes.

Ratchet does a great job cloning the default native look and feel for iOS, so it's a good solution if you are trying to whip together an iOS prototype for a client or your team. Unfortunately, it does not come with a sophisticated UI component model, so building full applications on it will be a bit of a challenge, and it's not in the scope of the project.

*Ratchet licensed under MIT*

## Commercial

### Kendo UI Mobile

[Kendo UI Mobile](http://www.kendoui.com/mobile.aspx) is a split commercial-GPLv3 licensed mobile app framework closely modeled off jQuery Mobile. This means for jQuery Mobile, Kendo Mobile
will be an easy transition, and will provide other benefits such as a more native-oriented component set and more native themes.

It's important to understand the license of Kendo if you wish to build an app using it. For all intents and purposes, you'll need to buy a commercial Kendo UI Mobile license to build a commercial closed-source app, or to ship even an open source app to the App Stores.

Since the open source portion of Kendo is GPLv3 licensed, that means you can't link it with a closed-source application unless you release the closed-source portion under a GPLv3 compatible open source license. Also, neither [Apple](http://programmers.stackexchange.com/questions/63754/is-it-legal-to-distribute-a-gplv3-licensed-binary-through-the-apples-app-store?rq=1) nor [Microsoft](http://programmers.stackexchange.com/questions/167797/could-apple-and-microsoft-allow-the-gplv3-on-their-locked-down-devices) allow GPL apps in the App Store because it's nearly impossible
for them to abide by the license when they bundle and distribute your GPLv3 code in their proprietary apps.

Kendo's design philosophy is to closely clone the native UIs for each platform. Compared to Ionic, we are trying to encourage customization, but we do base our default theme on iOS 7. The benefit to Ionic's approach is a cleaner, much easier starting point for customizing your app to fit your brand. The benefit of Kendo's approach is a faster fit with the default look of a platform's apps.

Also keep in mind that while Kendo is split licensed with the GPLv3, that doesn't mean the project is open source in spirit. You can't submit pull requests, collaborate with their developers on the code repo, or see what they are working on. Ionic, in comparison, accepts contributions from developers around the world and has an incredibly transparent process on our [GitHub repo](https://github.com/driftyco/ionic).

### Sencha

[Sencha](http://sencha.com/) is another split-licensed commercial and GPLv3 mobile framework. I would say Sencha is the most powerful and comprehensive app framework on this list, and I find it to be quite high quality.

Compared to Ionic, Sencha is almost purely Javascript driven, and does not support AngularJS. That means you won't be able to use your existing web design knowledge to build or style
Sencha apps. Instead, every button, layout, and event is created and bound through a custom Javascript API.

A license for Sencha Touch is $600+ per developer, and Sencha seems to be focusing on the enterprise market. Ionic, in contrast, is 100% free to use for both open source and commercial apps, and we are a great fit for individual developers up to huge enterprises, especially ones that are increasingly investing in AngularJS.

Sencha development is also not public and filing issues and getting support has to be done through their community-driven forums.

### Lungo.js

[Lungo](http://lungo.tapquo.com/) is a newcomer to the mobile framework scene. I don't have a lot of experience with it, but like Kendo and Sencha it is also GPLv3 split commercial-licensed, with all of the same details you'll need to be aware of if you decide to use it.

I don't have much experience with Lungo, but it doesn't support Angular out of the and doesn't appear to have as much focus on gestures and native-style UI interactions as Ionic.

### Others?

I've left one upcoming framework, [Famous](http://famo.us/), off this list. From what I can see it's going to be quite impressive (though with a more custom Sencha-style development experience), but it's not out yet so I don't have enough information to compare just yet.


## Ionic

All of the frameworks on this list are high quality and each serve their purpose incredibly well. We built Ionic because we looked at the frameworks on this list and didn't see one that was
both permissively open source (usable in both commercial and open source apps for free), and laser focused on hybrid, native-style apps.

We wanted to build a framework that used touch and animation heavily, as well as offered a native-style API. Also, we wanted something that fit in perfectly with AngularJS and was
obsessive about having great design.

Looking at where we are *today*, we are confident Ionic is the best choice for building hybrid apps when compared with the other permissive licensed frameworks on this list, and most of the commercially-licensed ones.

While some frameworks like Sencha have a more complete feature set, we are catching up quickly and benefiting from a passionate and growing community that is helping make Ionic amazing. When looking back at other popular open source projects, it's the ones that built a great community, focused on high quality, and kept shipping that won.
