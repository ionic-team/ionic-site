---
layout: post
title:  "Changes to Ionic Directive Naming"
date:   "2014-02-20 08:00:00"
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

A few days ago we released Ionic v0.9.25 "Quokka" ([changelog](https://github.com/driftyco/ionic/blob/master/CHANGELOG.md#0925-quokka-2014-02-19)). In addition to lots of bugs getting fixed and a few new features, one big thing that changed was moving Ionic directives to use the `ion-` prefix.

This means instead of using `<side-menus>`, you'll need to start using `<ion-side-menus>`. This applies to any and all Ionic directives, including attribute and class name directives (though we rarely use those).

We thought long and hard about making this change, and at the end of the day we felt it was more clear which directives were powered by Ionic, and safer in the case that
you had similiar-named directives in your own application.

<!-- more -->

We know this is going to be annoying and cause upgrade issues. We wanted to get this out of the way before we release the beta so that we can move forward with
the best possible solution to Ionic namespacing in your apps.

If you have any questions about this or need help, please head on over to the [forum](http://forum.ionicframework.com/).
