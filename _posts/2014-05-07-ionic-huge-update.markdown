---
layout: post
title:  "Ionic Beta 4: Our Biggest Update Yet"
date:   "2014-06-06 08:00:00"
hide_date: false
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: false
---

We've been quiet over the last month or so, but trust me, we've been busy!

Today, I am incredibly happy to announce the release of Ionic 1.0 Beta 4. What's that? You missed beta 2 and 3? Well, we had a very productive last two weeks and decided to ship three new releases in short succession :)

With Beta 4, Ionic becomes the most feature rich hybrid app framework in town, and fixes a lot of problems that have plagued mobile web developers in years past.

## Huge Collection Support

Lists and grids of data are pervasive in mobile. Your Twitter stream, Facebook News Feed, and Camera Roll are just a few examples of lists that often contain thousands, if not hundreds of thousands or millions of items. And, to top it all off, we expect the list to scroll just as quickly through 10 items as it does through 100,000 items.

With the new [Collection Repeat](http://ionicframework.com/docs/api/directive/collectionRepeat/) system, you can now scroll through huge lists with essentially no performance penalty!

And best of all, [Collection Repeat](http://ionicframework.com/docs/api/directive/collectionRepeat/) works just like ngRepeat, and can be easily swapped in for lists that need to be fast with lots of items. Make sure to check the doc page for more info.

## Keyboards Done Right

A big annoyance developers have with mobile web browsers is their wonky support for form inputs and the resulting keyboard that slides up. How do you remove the accessory bar on iOS? Why is my input scrolling out of view? How do I stop the viewport from shrinking and ruining my UI? 

Native apps don't have these issues, and neither should web apps. So we spent a month fixing keyboard issues across Android and iOS, with plenty of head banging so you don't have to have any. Today, we are releasing the first version of both a Cordova plugin to fix the issues at a native layer, and expanded support in the Ionic Javascript to handle it at the web layer.

This gives you clean keyboard support as shown in our upcoming Ionic View app:

<img alt="App" src="http://ionicframework.com.s3.amazonaws.com/blog/beta4-keyboard.png" style="width: 320px; border: 1px solid #eee; margin: auto; display: block">

## Fastclick? No, Adamclick!

Mobile web developers have long lamented the problem of normalizing tap events across mobile browsers and devices. Along with this, the 300ms click delay that hobbled the perceived performance of our apps gave mobile web apps a terrible reputation for being slow and unresponsive, which they did not deserve.

With Beta 4, we are releasing our most comprehensive solution to tap events in the mobile browser. This means not only are button clicks fast, but inputs respond immediately, scrolling does not accidentally trigger clicks on list items, and ghost clicks are a thing of the past.

How does this compare to Fastclick and ngTouch? Well, it handles a much larger set of tap related issues, and it comes with unit tests that run the gamut of tap related issues with browsers on Android, iOS, and soon Windows Phone.

[Adam](http://twitter.com/adamdbradley), one of our lead Ionic developers, has been agonizing over mobile tap issues so you don't have to. We call it Adamclick to honor his dedication to such an annoying problem.
