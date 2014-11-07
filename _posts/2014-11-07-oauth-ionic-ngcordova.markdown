---
layout: post
title:  "OAuth with Ionic and ngCordova"
date:   "2014-11-07  2:00:00"
categories: angularjs, ionic, ngCordova, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/2653730816/5da4d8fb72352c715bbaffe07e56270e_400x400.jpeg" class="author-icon"><a href="http://twitter.com/nraboy" target="_blank">Nic Raboy</a>'
published: true
---

*This is a guest post by [Nic Raboy](http://blog.nraboy.com/), an application developer with a strong background in Android, AngularJS, Ionic, Java, SQL, and Unity3D. Nic writes often about Ionic and how to build great hybrid apps.*

I get a lot of inquiries regarding OAuth 2.0 with Apache Cordova and Ionic Framework applications. Although I do have [another post](http://blog.nraboy.com/2014/07/using-oauth-2-0-service-ionicframework/) elaborating on how to accomplish this, I decided to take it a step further and make a simplistic library for AngularJS.

I created [ngCordovaOauth](https://github.com/nraboy/ng-cordova-oauth), which can be found on GitHub. It was designed to make it as simple as possible to obtain access tokens for some of the popular web APIs, such as Google.

<!-- more -->

I took my ngCordovaOauth library a step further, and [included it](http://ngcordova.com/docs/#Oauth) in the official [ngCordova](http://ngcordova.com/) project. For the sake of this tutorial, I'm going to explain things around the official ngCordova library which is now the official implementation.

When I was designing the OAuth functionality, my strategy was to expect a promise based on the login flow. If the flow is successful, we will receive an object containing whatever the server responds with. Otherwise, we'll get some kind of error.

Although I designed this with Ionic Framework in mind, it will also work for any Apache Cordova or Phonegap application that makes use of AngularJS. With this in mind, let's set up the library for use.

```bash
ionic start IonicProject blank
cd IonicProject
ionic platform add android
ionic platform add ios
```

Note that if you are not using a Mac, you cannot build for iOS.

OAuth with ngCordova relies heavily on the Apache Cordova [InAppBrowser](http://cordova.apache.org/docs/en/3.0.0/cordova_inappbrowser_inappbrowser.md.html) plugin. If you'd like to know more about how this plugin works, you can view my [previous post](http://blog.nraboy.com/2014/07/launch-external-urls-ionicframework/) on the topic, otherwise just continue by running the following:

```bash
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
```

Your Ionic project is now ready for the ngCordova library.  [Download](https://github.com/driftyco/ng-cordova/archive/master.zip) it and include **ng-cordova.min.js** into your **www/js** directory.

Open the **www/index.html** file and include the following:

```html
<script src="js/ng-cordova.min.js"></script>
```

One more item must be added in order to fully make use of this plugin. You must inject ngCordova into your AngularJS module found in the **www/js/app.js** file:

```javascript
angular.module('starter', ['ionic', 'ngCordova'])
```

Here is an example of how you might use the OAuth with the ngCordova library:

```javascript
var ionicExample = angular.module('starter', ['ionic', 'ngCordova']);

ionicExample.controller("OauthExample", function($scope, $cordovaOauth) {

    $scope.googleLogin = function() {
        $cordovaOauth.google("CLIENT_ID_HERE", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(error);
        });
    }

});
```

As of right now, the following methods are available:

```bash
$cordovaOauth.dropbox(string appKey);
$cordovaOauth.digitalOcean(string clientId, string clientSecret);
$cordovaOauth.google(string clientId, array appScope);
$cordovaOauth.github(string clientId, string clientSecret, array appScope);
$cordovaOauth.facebook(string clientId, array appScope);
$cordovaOauth.linkedin(string clientId, string clientSecret, array appScope, string state);
$cordovaOauth.instagram(string clientId, array appScope);
$cordovaOauth.box(string clientId, string clientSecret, string state);
```

There are some things to note about OAuth with ngCordova:

* It will only work on your device or simulator. It will not work in the web browser.
* All redirect / callback URIs must point to http://localhost/callback; otherwise, the login flow will not complete.

When you have your access token, you can typically make full use of the web APIs for that service. For example, if you wanted to use one of the Digital Ocean APIs, you might do the following:

```javascript
var ionicExample = angular.module('starter', ['ionic', 'ngCordova']);

ionicExample.controller("DigitalOceanExample", function($scope, $http, $cordovaOauth) {

    $scope.digitalOceanLogin = function() {
        $cordovaOauth.digitalOcean("CLIENT_ID_HERE", "CLIENT_SECRET_HERE").then(function(result) {
            window.localStorage.setItem("access_token", result.access_token);
        }, function(error) {
            console.log(error);
        });
    }

    $scope.getDroplets = function() {
        $http.defaults.headers.common.Authorization = "Bearer " + window.localStorage.getItem("access_token");
        $http.get("https://api.digitalocean.com/v2/droplets")
            .success(function(data) {
                console.log(JSON.stringify(data.droplets));
            })
            .error(function(error) {
                console.log(error);
            });
    }

});
```

Notice that in the above example, we are using the access token. In this particular example, the access token is used in the header, but in many APIs, the access token is passed in the POST or GET parameters.

### Conclusion

Adding OAuth to your Ionic apps is easy with the new [OAuth support](http://ngcordova.com/docs/#Oauth) in ngCordova. With support for such providers as Google, Facebook, and Dropbox, it's just a matter of adding your authentication tokens and linking with the plugin. 

Support for Twitter, which uses a slightly different client-side token system, is coming soon!
