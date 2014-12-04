---
layout: post
title:  "Moving Forward with ngCordova"
date:   "2014-12-04  11:08:00"
categories: angularjs, ionic, ngCordova, framework, mobile
author: '<img src="http://paolobernasconi.com/public/images/profile.jpg" class="author-icon"><a href="http://twitter.com/pbernasconi" target="_blank">Paolo Bernasconi</a>'
published: true
---

*This is a guest post by [Paolo Bernasconi](http://paolobernasconi.com/), a developer who built ngCordova.*

To watch [ngCordova](https://github.com/driftyco/ng-cordova) grow from a small idea to a popular open source project with over 1250 stars on GitHub has been a great pleasure for me. Since its inception in July 2014, I've had the opportunity to learn about creating and maintaining a github repository, and I've come to realize the true power of the community and contributors in open source. With the help and submissions from the community, **ngCordova is most definitely greater than the sum of its parts.**

When ngCordova started, it covered 14 basic Cordova plugins. Now it has **47** and counting, ranging from Push Notifications to Facebook support. We have since released 8 versions, received 230 pull requests from 49 contributors, and resolved over 170 issues.

#### So, what's next?

The first new feature in ngCordova's future is an **automatic `deviceready` check** to determine whether a device is ready for plugins to be used. Currently, the only way to ensure this is to manually insert plugin calls inside the event-listener:

```
document.addEventListener("deviceready", function () {
  $cordovaPlugin.someFunction().then(success, error);
}, false);

// OR with Ionic

$ionicPlatform.ready(function() {
  $cordovaPlugin.someFunction().then(success, error);
});

```

This *"event check"* needs to be done for each plugin method, which becomes a bit tedious and over-bloats code in the controller. Soon, ngCordova will call the `deviceready` event in the background, making it easier and simpler to use plugins.

Another important feature on the roadmap is **an improved demo app**. Cordova plugins can often be very hard to use, and sometimes we have no idea why our app is not working, or what error is being produced. While the [current demo](https://github.com/driftyco/ng-cordova/tree/master/demo/www/app) does include quite a few plugins, we plan on supporting **all** plugins in ngCordova, with very detailed examples and unit-tests.

Finally, we know and understand the need for **great documentation**, so we are improving the docs with more comprehensive methods for each plugin API ([see the Facebook plugin for an example](http://ngcordova.com/docs/#Facebook)), so you'll have all the information you require at your fingertips.

#### What about testing in the browser? 

One of the biggest issues with app development using Cordova plugins is the fact that it breaks an app when testing in the browser, giving us the *"white screen of death"*. ngCordova does have a [mocks module](https://github.com/driftyco/ng-cordova/tree/master/src/mocks), but it requires a lot of extra code in your controller to simulate the phone environment and isn't well documented at the moment.

This is why I created a Google Chrome extension called [Cordova Mocks](https://chrome.google.com/webstore/detail/cordova-mocks/iigcccneenmnplhhfhaeahiofeeeifpn) ([Github](https://github.com/pbernasconi/chrome-cordova)), which generates mock-data and automatically injects it into your browser. It follows the same API that Cordova plugins use, so the only thing you have to do is install the extension and start using your app as if you were testing on your phone.

It currently supports the following plugins, with many more to come:

- Camera
- Device Motion
- Device Orientation
- Device
- Dialogs
- Flashlight
- Geolocation
- Globalization
- Network Information


And soon, you'll be able to configure the data yourself in an options panel built into the extension. Also, expect a Firefox (and maybe Safari) extension in the next few weeks.

#### Conculsion

ngCordova is still growing day by day and always welcomes new ideas and plugins. If you encounter any issues or want a specific plugin officially supported, [create a new issue](https://github.com/driftyco/ng-cordova/issues/new), and stay tuned for new features and fixes.

