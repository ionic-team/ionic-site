---
layout: post
title:  "Ionic Beta 4: Our Biggest Update Yet"
date:   "2014-05-07 08:00:00"
hide_date: false
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

<img class="showcase-image" src="/img/blog/b4-header2.png">

We've been quiet over the last month or so, but trust me, we've been busy!

Today, I am incredibly happy to announce the release of Ionic 1.0 Beta 4. What's that? You missed beta 2 and 3? Well, we had a very productive last two weeks and decided to ship three new releases in short succession :)

With Beta 4, Ionic becomes the most feature rich hybrid app framework in town, and fixes a lot of problems that have plagued mobile web developers in years past. Read the full [Release notes](https://github.com/driftyco/ionic/blob/master/CHANGELOG.md) to see what has changed!

<!-- more -->

### Huge Collection Support

Lists and grids of data are pervasive in mobile. Your Twitter stream, Facebook News Feed, and Camera Roll are just a few examples of lists that often contain thousands, if not hundreds of thousands or millions of items. And, to top it all off, we expect the list to scroll just as quickly through 10 items as it does through 100,000 items.

With the new [Collection Repeat](http://ionicframework.com/docs/api/directive/collectionRepeat/) system, you can now scroll through huge lists with essentially no performance penalty!

And best of all, [Collection Repeat](http://ionicframework.com/docs/api/directive/collectionRepeat/) works just like ngRepeat, and can be easily swapped in for lists that need to be fast with lots of items. Make sure to check the doc page for more info.

[Andy](http://twitter.com/andytjoslin), a lead Ionic developer, is responsible for this huge addition to Ionic!

### Keyboards Done Right

A big annoyance developers have with mobile web browsers is their wonky support for form inputs and the resulting keyboard that slides up. How do you remove the accessory bar on iOS? Why is my input scrolling out of view? How do I stop the viewport from shrinking and ruining my UI? 

Native apps don't have these issues, and neither should hybrid apps. So we spent a month fixing keyboard issues across Android and iOS, with plenty of head banging so you can go bruise-free. Today, we are releasing the first version of both a [Cordova plugin](https://github.com/driftyco/ionic-plugins-keyboard) (which will be added to the default plugin list for new Ionic apps) to fix the issues at a native layer, and expanded support in the Ionic Javascript to handle it at the web layer.

This gives you clean keyboard support as shown in our upcoming Ionic View app:

<img alt="App" src="http://ionicframework.com.s3.amazonaws.com/blog/beta4-keyboard.png" style="width: 320px; border: 1px solid #eee; margin: auto; display: block">

Beautiful! No accessory bar, no viewport shrinking, and it's very responsive and feels perfectly native.

We thank [Tim](http://twitter.com/dopernicus), our resident Cordova plugin master, for bringing us this black magic.

### Fastclick? No, Adamclick!

Mobile web developers have long lamented the problem of normalizing tap events across mobile browsers and devices. Along with this, the 300ms click delay that hobbled the perceived performance of our apps gave mobile web apps a terrible reputation for being slow and unresponsive, which they did not deserve.

With Beta 4, we are releasing our most comprehensive solution to tap events in the mobile browser. This means not only are button clicks fast, but inputs respond immediately, scrolling does not accidentally trigger clicks on list items, and ghost clicks are a thing of the past.

Compared to Fastclick and ngTouch, Ionic's tap system handles a much larger set of tap related issues, and comes with 115 unit tests that run the gamut of tap related issues with browsers on Android, iOS, and soon Windows Phone.

On top of this, it correctly handles active states which have been a source of frustration for mobile controls, and which Fastclick does not properly handle.

[Adam](http://twitter.com/adamdbradley), one of our lead Ionic developers, has been agonizing over mobile tap issues so you don't have to. We call it Adamclick to honor his dedication to such an annoying problem.

### Meta Viewport Success

Ah, the viewport meta tag. So much unrealized potential! It was the dream of mobile developers to control a website's transformation to a touch screen through a simple meta tag, but the reality has been a lot less fun. It seems every device handles this setting differently, and there are even variations between a mobile browser and the app running in Cordova.

Ionic now auto adjusts the viewport meta tag based on a set of heuristics to come up with the perfect viewport meta tag for your app. That means normalizing all of the issues with things like `height=device-height` across iOS and Android.

The end result is a more consistent viewport experience that Just Works and gives the best possible experience no matter which platform your app runs on.

### Growing Showcase

We recently released a revamped [Showcase](http://showcase.ionicframework.com/) page for user-submitted Ionic apps. With the new showcase we will be featuring some of the best Ionic apps, as well as showing the community what is truly possible with the framework.

So, if you've got a great Ionic app in development or already released, make sure to [submit](http://showcase.ionicframework.com/submit) it and we will share it with the world! We will also be doing indepth features on the very best Ionic apps, so it's a chance to get your app some great publicity.

### 1.0, and Beyond

If you've been following Ionic from our very first Alpha release a few months ago, you know how quickly things have changed, and how much better the framework has gotten in such a short amount of time.

Today, the project has over [5100 stars](http://github.com/driftyco/ionic), 61 contributors from around the world, and over 400 new Ionic projects getting started *every single day*.

(*Which reminds me, make sure to star the repo on GitHub if you haven't! Thanks :)*)

<iframe src="http://ghbtns.com/github-btn.html?user=driftyco&repo=ionic&type=watch&count=true&size=large"
  allowtransparency="true" frameborder="0" scrolling="0" width="152" height="30"></iframe>


With Collection Repeat, Tap fixes, and Keyboard improvements, we are feeling pretty confident about a 1.0 release lurking around the corner.

Along with this, we are going to be moving to a more frequent release schedule, with smaller fixes pushed weekly, instead of fewer bigger releases.

Beyond 1.0, you might be wondering what's next for the framework. To be honest, we aren't ready to share too many details, but we are working hard to make Ionic the most compelling mobile development platform in the world. This goes beyond just the framework, to other services and tools that are crucial to the success of a mobile app.

Give us a few months and we will have some awesome stuff to show!

### Join us!

Our team has been growing quite a bit lately, and we'd love to have you join us on our mission to make the web the dominant technology of mobile apps.

Check out our [jobs](/jobs) and get in touch if you think you'd be a great fit!

### Thank you!

Without <strong>YOU</strong> Ionic would be yet another framework that no one uses. Thank you so much for your support, and here's to a bright future of web tech on mobile!

Onward to 1.0!
