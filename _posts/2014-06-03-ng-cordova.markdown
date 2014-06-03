---
layout: post
title:  "Announcing ngCordova: Simple AngularJS Cordova Extensions"
date:   "2014-06-03 08:00:00"
hide_date: false
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

<img class="showcase-image" src="/img/blog/ngcordova-logo.png" style="margin: auto; display: block; max-width: 300px">

Today I am incredibly excited to announce the very first release of [ngCordova](http://ngcordova.com/), an open-source collection of AngularJS services and extensions that make it incredibly easy to use Cordova plugins and native features in your hybrid apps.

With ngCordova, instead of calling Cordova plugins directly and having to figure out the proper object or plugin name, or to check if the plugin is actually installed, you can just call a simple AngularJS service like this:

```javascript
$cordovaCamera.getPicture(options)
  .then(function(imageData) {
   
    // Process camera data

  }, function(error) {

    // Show an error to the user

  });
```

The services support promises to make it easier to deal with their asynchronous nature and ensure scope data is properly updated. And with support for **14** plugins at the time of this writing, ngCordova provides a centralized way to add lots of native functionality to your app!

We've got big plans for ngCordova. Soon, it will possible to mock the services for testing outside of a Cordova app in case cordova.js isn't available, and to simulate data such as geolocation, accelerometer, and network changes.

As Ionic projects go, ngCordova was a unique one. Created only a **day and a half ago** as a fun hack, the project grew out of the suggestion of community member [Paolo Bernasconi](https://github.com/pbernasconi) to make it easier for people to use Cordova plugins in Ionic projects. He noted a lot of Ionic developers on the forum having issues using Cordova plugins due to the lack of centralized documentation and confusing APIs, and figured simple AngularJS wrappers would help.

After creating the [ng-cordova](https://github.com/driftyco/ng-cordova) repo on github with a simple Camera plugin wrapper, the project immediately recieved 6 pull requests with wrappers for various other plugins (thanks [PatrickJS](https://github.com/gdi2290)!). It seems it struck a chord with hybrid developers!

So, go ahead and check out version [0.1.1-alpha](https://github.com/driftyco/ng-cordova/releases/tag/v0.1.1-alpha) and let us know what you think! Are there any other plugins you'd like to see simple wrappers for? We'd also love some help building out tests and mocking systems for common plugins.

Start adding powerful native functionality to your hybrid and Ionic apps today, with ngCordova and the power of AngularJS.
