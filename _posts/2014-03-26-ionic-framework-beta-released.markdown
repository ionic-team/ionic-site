---
layout: post
title:  "Ionic Framework Beta Released!"
date:   "2014-03-26 08:00:00"
hide_date: false
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/eeff5848f4231174094d2bc3cce26a05?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/adamdbradley">@adamdbradley</a>'
published: true
---

<img class="showcase-image" src="/img/blog/beta-header.png">

If you've been following Ionic since we launched, or even reviewing our nightly commit log, you’ll know just how hard we’ve been working to continue to improve Ionic.

In the short time since our Alpha release a few months ago, we’ve seen some great apps being built, and have been amazed by the passion and excitement of our growing community. By the numbers, Ionic developers are creating over **220** new apps every day, the [repo](http://github.com/driftyco/ionic) recently passed **4100** stars, and traffic is growing week over week.

With this momentum, we’re so thrilled to take the framework into Beta and officially announce version 1.0.0-beta.1, “Ionic Actinium”, and the release of our [new docs](/docs/api/)!

<!-- more -->

The ever growing community of Ionites have been vital to Ionic’s success, especially in helping to shape the API and battle test our nightly builds. There have been some significant changes since the Alpha version, but trust us that each breaking change has been made with the ultimate goal of making it easier to develop hybrid mobile apps.

One of the largest changes is that the beta has stepped back from using multiple attributes in favor of simply adding child elements/directives. For example, headers and footers no longer use the `left-buttons` attribute to specify an array of buttons, but rather a nested element which is easier to control and integrate with Angular. This same method is being used for the back buttons within `ion-nav-bar`, and the left and right side buttons for `ion-view`.

We’ve also simplified applying styles with the `class` attribute, rather than through custom attributes. Some of our directives used attributes like `tabs-type="tabs-top"` and `tabs-style="tabs-positive"`, but in the end all the attributes really did was apply a CSS class. We decided these were redundant, deviated from the CSS docs, and added unnecessary confusion. Removing them has cleaned up the code further by separating behavior from style.

Additionally, controlling UI elements from within your app has never been easier. We've taken the delegate pattern from the alpha and expanded it, adding a delegate for every directive that needs control. Tabs and NavBar delegates have been added, along with more methods in all the delegates, allowing developers even finer control over how their app interacts with Ionic.

The beta has also removed the requirement for the developer to manually tell the content to reposition itself if there is a header, footer, or tabbar present. Resultantly, the  `has-header`, `has-footer`, and `has-tabs` attributes have been removed. Ionic now will automatically reposition and resize the content depending on what surrounding widgets are present. If any old alpha code references these attributes or classnames they can be safely removed since they’re no longer being used by the framework.

For more information regarding the specifics of the beta release please visit our [change log](https://github.com/driftyco/ionic/blob/master/CHANGELOG.md), in addition to our [migration guide](https://github.com/driftyco/ionic/blob/master/CHANGELOG.md#breaking-changes--migration-guide).

Ionic has come a long ways, but we’re not even close to being done. Currently our roadmap includes improving animations, keyboard fixes, adding support for huge virtual lists, Windows Phone 8 support, FirefoxOS support, awesome tooling, overall performance improvements and so much more.

Again we’d like to thank the community in helping us build a framework which makes building hybrid mobile apps incredibly easy and fun. You are the reason we get to do what we do every day, and we are so thankful for your passion and excitement for Ionic.

Oh, and we are hiring! If you want to help shape the future of mobile development by making web technologies the best way to build mobile apps, come [join our growing team](/jobs/)! We are looking for great frontend and backend developers to help take Ionic to the next level.

<3,

The Ionic Team
