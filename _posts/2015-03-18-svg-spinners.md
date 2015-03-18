---
layout: post
title:  "Ionic 1.0: SVG Spinners"
date:   "2015-03-18  11:31:00"
categories: angularjs, ionic, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/495587171332403200/tO9oMmCn.png" class="author-icon"><a
href="https://twitter.com/mhartington">Mike</a>'
published: false
---


Now that we’ve released Ionic 1.0, we want to share more about our favorite new Ionic features. Last week, Adam wrote about his favorite new feature in Ionic 1.0, Swipe to Go Back. Personally, I’m most excited about our new animated SVG spinners, and I thought I’d explain why we decided to changes the spinners and what the new SVG spinners can do for your app.

<!-- more -->

### Why SVGs?

Why would we need new spinners? After all, Ionicons already come with animated font icons that get the job done. Well, the older animated font icons were subjected to the browser’s font rendering, which differs between iOS and Android and among all the different versions of Android. Normally, this wouldn’t make a difference, since all fonts get rendered out as static content, but the animated font icons weren’t static. Depending on which browser you were using, they would rotate, and users would see the icon wobble. We had to face the facts: Animated Font Icons Were Not An Ideal Solution. 

### Enter Animated SVGs

Since animated icons were not a perfect solution, we decided to move to full SVG icons, in order to create icons that weren’t subjected to the browsers font rendering. An added benefit was that since we use Angular, we could encapsulate a bunch of different icons inside a [directive](https://github.com/driftyco/ionic/blob/master/js/angular/controller/spinnerController.js), and developers wouldn’t have to deal with the SVG markup. 

<div style="float: right; margin-right: -160px">
{% include codepen.html id="OPaxME" %}
</div>

Did we lose the ability to style the icons? Nope, you’ll still get to customize the icons to the colors of your choice and even use the built-in Ionic colors. To top it off, since the icons are a directive, we can switch them out at run time for Platform Continuity, and iOS and Android will each get the correct icons. This is also configurable, so you have the option of passing in one icon for both platforms. 

Be sure to check out the [documentation for the spinners](http://ionicframework.com/docs/nightly/api/directive/ionSpinner/) and try them out in your own app! 

Cheers!
