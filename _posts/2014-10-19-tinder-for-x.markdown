---
layout: post
title:  "Tinder for X with Ionic"
date:   "2014-10-19  8:00:00"
categories: angularjs, ionic, tinder
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

When we released the [Swipe Cards](http://github.com/driftyco/ionic-contrib-swipe-cards) ion (our term for Ionic add-ons/widgets), Tinder wasn't really on our radar. At the time, we were impressed by some of the unique UX elements in the app [Jellyfish](http://jelly.co/) and wanted to prove they could be built just as well in Ionic and with the power of HTML5.

However, the #1 request we've had since the release was support for Tinder-style swipe cards. While we can't say whether or not we have any experience with Tinder, we do love the way Tinder makes it easy to process a large list of items, indicating a positive or negative reaction.

It's amazing how broadly applicable the swipe card interface is, and this "Tinder for X" phenomenon was something we wanted to help Ionic developers jump on.

<!-- more -->

Today we are happy to release the Ionic Tinder-style Cards ion. This ion has support for swiping cards left and right, and also animating the stack of cards underneath
the current card. Try it out below!

<div style="margin-left: auto; margin-right: auto; margin-top: 20px; margin-bottom: 70px; width: 320px">
   <p data-height="568" data-width="320" data-theme-id="3572" data-slug-hash="nxEdH" data-default-tab="result" data-user="ionic" class='codepen'>See the Pen <a href='http://codepen.io/ionic/pen/nxEdH/'>Ionic Ion: Tinder Cards</a> by Ionic (<a href='http://codepen.io/ionic'>@ionic</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
  <script async src="//codepen.io/assets/embed/ei.js"></script> 
</div>

This also marks the first usage of our [collide](https://github.com/driftyco/collide) animation library for support for physics-style animations like springs and gravity. Notice how if you drag too little and let go, the cards spring back into place!

### Getting started

To get started, use bower to add the ion to your project:

```bash
$ bower install ionic-contrib-tinder-cards
```

Take a look at the demo for a full example of how to use this ion: [https://github.com/driftyco/ionic-contrib-tinder-cards/tree/master/demo](https://github.com/driftyco/ionic-contrib-tinder-cards/tree/master/demo)
