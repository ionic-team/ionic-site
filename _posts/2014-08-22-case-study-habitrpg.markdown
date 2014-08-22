---
layout: post
title:  "Ionic Case Study: HabitRPG"
date:   "2014-08-22 10:00:00"
hide_date: false
categories: ionic
author: '<img src="https://s3.amazonaws.com/ionicframework.com/blog/katie-md.jpg" class="author-icon">Katie'
published: true
---

<img class="showcase-image" src="/img/blog/habitrpg-header.png">

[HabitRPG](https://habitrpg.com/static/front) is a fantasy role-playing game for improving real-life habits. When users achieve their goals, such as exercising for a certain number of hours a day or writing a specific number of words a day, they gain experience and “gold.” Failed goals (smoking, eating junk food, etc.) result in lost hit points. It’s for anyone who can use a motivation boost for self-improvement.

The website is currently the main property and includes additional features, like boss-battles, quests, challenges, guilds, and pets. The mobile app has, until recently, served as a slimmed-down companion to the website, but CTO Tyler Renelle says, “Now that we’re on Ionic, this will change fast.” The HabitRPG website, mobile app, and Chrome extension are all [open source](https://github.com/habitrpg/).

The original HabitRPG app was built using PhoneGap, AngularJS, and Topcoat. “Topcoat was a decent leg up from a blank slate, mostly bare bones CSS for a mobile-ish feel, but it wasn’t enough,” says Renelle. “After poor reviews on performance and design, we decided it was time for a facelift and new framework.”

<!-- more -->

When it was time to re-do the app, Renelle says Ratchet and Ionic were the main contenders. Based on recommendations, research, and the insistence of their top contributor, [paglias](https://github.com/paglias), the HabitRPG team chose Ionic. “Ionic had many more features than Ratchet, was a tad more performant in my basic `cordova run android --device` experiments, and had much more steam in meetups and online discussions,” says Renelle. “This already was enough for our decision. Then we found out Ionic is on AngularJS. As an AngularJS shop ourselves, the rest is history.”

The HabitRPG team chose to build an HTML5 app for two reasons: cross-platform builds and the ability to use JavaScript.

“We wrote our app once, and it’s available for iOS and Android,” says Renelle. “The small performance and native-feel penalty is worth the time and resources saved, especially as our small operation has a limited supply of both.”

<a href="http://ionicframework.com/img/blog/craftedhere-app-preview.png"><img class="body-image" src="/img/blog/habitrpg-app-preview.png"></a>

Plus, HabitRPG is a “full-stack JavaScript shop,” using AngularJS, Node.js, MongoDB, and Chrome Extension. “PhoneGap fit our stack like a glove,” says Renelle. “We have a ‘common lib’ housing all our algorithms, helper functions, services/directives, etc.--a package included on all properties and comprising the majority of each property’s codebase. Fix a web bug, and we get that fix on mobile for free. It saves us tremendous amounts of time. Furthermore, any of our developers can jump to any of the other properties with ease--they’re all JavaScript, and AngularJS to boot.”

Renelle explains that using Ionic allowed his team to replace awkward custom solutions with much cleaner code. “Our app was basically a combo of Ionic’s side menu and tabs starters--very basic,” says Renelle. “However, our previous framework didn’t support much of this by way of JS components or CSS, so we home-grew the majority of it. Ionic allowed us to gut most of our code. I went in with a sledge hammer, replacing rickety custom solutions with Ionic’s side menus, tabs, performant scrolling, navigation history, and more. Swipe-refresher was a pleasant surprise, so we put that right in.” 

The HabitRPG team plans to incorporate more Ionic components over time. “We had Github tickets planning contending solutions for modals, item sorting, and infinite-scroll,” says Renelle. “These would have added more dependencies and more home-grown clunkiness. Needless to say, I’m excited to find these supported in Ionic proper. Our app has a much brighter future, thanks to Ionic.”

Renelle says he believes Ionic is the second most important thing to happen to the hybrid app dev space (the first being PhoneGap). “Ionic will grow an impressive showcase, proving to companies that hybrid is a viable option,” he says.

Find HabitRPG was developed by [Tyler Renelle](http://about.me/lefnire). You can find it on the [iOS App Store](https://itunes.apple.com/us/app/habitrpg/id689569235?mt=8) or the [Android Play Store](https://play.google.com/store/apps/details?id=com.ocdevel.habitrpg).
