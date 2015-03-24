---
layout: post
title:  "Ionic RC1: SVG Spinners"
date:   "2015-03-18  11:31:00"
categories: angularjs, ionic, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png" class="author-icon"><a
href="https://twitter.com/mhartington">Mike</a>'
published: true
---

<iframe width="100%" height="350" src="http://s.codepen.io/ionic/debug/GgwVON?" frameborder="0"></iframe>

Now that we’ve released Ionic RC1, we want to share more about our favorite new Ionic features. Last week, [Adam](https://twitter.com/adamdbradley) wrote about his favorite new feature in Ionic RC0, [Swipe to Go Back](http://ionicframework.com/blog/rc0-swipe-to-go-back/). Personally, I’m most excited about our new animated SVG spinners, and I thought I’d explain why we decided to change the spinners and what the new SVG spinners can do for your app.

<!-- more -->

### Why SVGs?

Why would we need new spinners? After all, Ionicons already come with animated font icons that get the job done. Well, the older animated font icons were subjected to the browser’s font rendering, which differs between iOS and Android and among all the different versions of Android. Normally, this wouldn’t make a difference, since all fonts get rendered out as static content, but the animated font icons weren’t static. Depending on which browser you were using, they would rotate, and users would see the icon wobble. We had to face the facts: Animated Font Icons Were Not An Ideal Solution. 


<div style="float: right; margin-right: -160px">
{% include codepen.html id="OPaxME" %}
</div>

### Enter Animated SVGs

Since animated icons were not a perfect solution, we decided to move to full SVG icons, in order to create icons that weren’t subjected to the browser's font rendering. An added benefit was that since we use Angular, we could encapsulate a bunch of different icons inside a [directive](https://github.com/driftyco/ionic/blob/master/js/angular/controller/spinnerController.js), and developers wouldn’t have to deal with the SVG markup. 



Did we lose the ability to style the icons? Nope; you’ll still get to customize the icons to the colors of your choice and even use the built-in Ionic colors. To top it off, since the icons are a directive, we can switch them out at run time for Platform Continuity, and iOS and Android will each get the correct icons. This is also configurable, so you have the option of passing in one icon for both platforms. 

Be sure to check out the [documentation for the spinners](http://ionicframework.com/docs/nightly/api/directive/ionSpinner/) and try them out in your own app! 

Cheers!
