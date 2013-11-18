---
layout: "tutorial"
title: "AngularJS Routing with Ionic"
---

AngularJS URL Routing in Ionic
====

Ionic works at a lower level than typical web-based mobile frameworks, so it does not have any kind of build in URL routing support.

However, we think URL routing is a great choice for building and organizing apps, and so we made sure it would be super easy to use URL routing if you wanted to. 

AngularJS offers a great routing service built in, and it can be easily used inside of your Ionic apps. Follow along as we build an example Ionic app that utilizes AngularJS Routing.


## Step 1: Seed

For most of these tutorials, we will be using the official [ionic-angular-cordova-seed](http://github.com/driftyco/ionic-angular-cordova-seed) project on GitHub. This project sets you up with a working example Ionic app that uses Cordova to build to a native app.

To start, download or clone the seed project and open the directory it downloaded or extracted to. The seed project comes with an example app that has some functionality built in that we won't need, so go ahead and remove the following files:

```bash
$ rm www/js/app.js
$ rm www/js/controllers.js
$ rm www/css/app.css
```

Next, open up `www/index.html`, and remove the `<navigation>` section that looks like this:

```html
<!--
Create our navigation controller and set the first page to
be splash.html
-->
<navigation first="templates/splash.html">
</navigation>
```

And replace it with:

```html
<ng-view></ng-view>
```
