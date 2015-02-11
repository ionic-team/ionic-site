---
layout: post
title:  "Displaying the Twitter Feed within Your Ionic App"
date:   "2015-01-28  2:00:00"
categories: angularjs, ionic, ngCordova, framework, mobile
author: '<img src="/img/blog/saimon.png"
class="author-icon"><a href="https://twitter.com/schlimmson" target="_blank">Simon Reimler</a>'
published: false
---

*This is a guest post by Simon Reimler, software developer at arvato Bertelsmann, experienced with iOS, Android, AngularJS, Ionic and Python. Simon often writes about Ionic, web and mobile development. Read more on [Simon's Blog, DevDactic](http://devdactic.com/).*

Getting the Twitter timeline of a user into your Ionic app can be a challenging task. Lucky for us, we can use the simple ngCordova OAuth wrapper previously [described by Nic Raboy](http://ionicframework.com/blog/oauth-ionic-ngcordova/) to solve the basic authentication. But what happens after the token authentication?

In this post, I will take things one step further and show you how to authenticate with OAuth, make signed calls to the well documented [Twitter REST API](https://dev.twitter.com/rest/public), and parse the home timeline of a user inside your Ionic app.

<!-- more -->

### Set Up a Simple App
We'll start with a simple blank Ionic app, install **ngCordova** and **ngResource** (needed for the REST calls later) via the [bower package manager](http://bower.io/) and add a Cordova plugin we will need for the OAuth:
```shell
ionic start devdactic-twitterfeed blank --appname “My Twitter Feed”
cd devdactic-twitterfeed
bower install angular-resource ngCordova --save
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
```
Additionally, we need the jsSHA Library inside our project, because Twitter requires request signing using HMAC-SHA1. Go to the [jsSHA Github project](https://github.com/Caligatio/jsSHA), download it, and copy the **sha.js** file from the archive into the **www/lib/** folder of your app.

Now, we need to include all these files inside our **index.html**. Make sure to add the ngCordova file before the cordova.js script tag that is already included! We also already included our services, and later, we will create and add a controller.
```html
<!-- Before cordova.js -->
<script src="lib/sha.js"></script>
<script src="lib/angular-resource/angular-resource.js"></script>
<script src="lib/ngCordova/dist/ng-cordova.js"></script>

<!-- After cordova.js -->
<script src="js/controllers.js"></script>
<script src="js/services.js"></script>

```
Finally, we must add the dependencies to our AngularJS module inside our **app.js** file:
```javascript
angular.module('starter', ['ionic', 'ngResource', 'ngCordova'])
```
Our app is now ready to connect with Twitter. The last thing we must do is to create an app on Twitter that will give us the credentials we need. Go to the [Twitter Application Management](https://apps.twitter.com/) page and create a simple app.

After creation, we need to change the callback URL of our Twitter app to *http://localhost/callback*. As this is currently not possible via Twitter, make yourself a [tiny URL](http://tinyurl.com/), and insert that one instead.
Leave the created app for now; we will need to copy some keys from it in a later step.

### Writing a Twitter Service
The heart of our app will be the `TwitterService`, which will handle our calls to the REST API and give us the data we need. Therefore, create a new file named **services.js** next to the app.js file, and insert this (I will discuss the functions in detail afterwards):
```javascript
.factory('TwitterService', function($cordovaOauth, $cordovaOauthUtility, $http, $resource, $q) {
    // 1
    var twitterKey = "STORAGE.TWITTER.KEY";
    var clientId = 'TwitterAppConsumerKey';
    var clientSecret = 'TwitterAppConsumerSecret';

    // 2
    function storeUserToken(data) {
        window.localStorage.setItem(twitterKey, JSON.stringify(data));
    }

    function getStoredToken() {
        return window.localStorage.getItem(twitterKey);
    }

    // 3
    function createTwitterSignature(method, url) {
        var token = angular.fromJson(getStoredToken());
        var oauthObject = {
            oauth_consumer_key: clientId,
            oauth_nonce: $cordovaOauthUtility.createNonce(10),
            oauth_signature_method: "HMAC-SHA1",
            oauth_token: token.oauth_token,
            oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
            oauth_version: "1.0"
        };
        var signatureObj = $cordovaOauthUtility.createSignature(method, url, oauthObject, {}, clientSecret, token.oauth_token_secret);
        $http.defaults.headers.common.Authorization = signatureObj.authorization_header;
    }

    return {
        // 4
        initialize: function() {
            var deferred = $q.defer();
            var token = getStoredToken();

            if (token !== null) {
                deferred.resolve(true);
            } else {
                $cordovaOauth.twitter(clientId, clientSecret).then(function(result) {
                    storeUserToken(result);
                    deferred.resolve(true);
                }, function(error) {
                    deferred.reject(false);
                });
            }
            return deferred.promise;
        },
        // 5
        isAuthenticated: function() {
            return getStoredToken() !== null;
        },
        // 6
        getHomeTimeline: function() {
            var home_tl_url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
            createTwitterSignature('GET', home_tl_url);
            return $resource(home_tl_url).query();
        },
        storeUserToken: storeUserToken,
        getStoredToken: getStoredToken,
        createTwitterSignature: createTwitterSignature
    };
});
```
1. Insert your personal **Consumer** and **Consumer Secret Key** from the Twitter app you created in the preparation step. The Storage key is just for your localStorage, so change it to whatever you like.

2. The first two functions are just for storing and retrieving the OAuth Token once the user is successfully authorized; nothing special here.

3. `createTwitterSignature` is one of the most important functions here, because this function takes care of the correct signing of our requests. When called, we give it the HTTP method like `GET` or `POST`, and the URL from which we want to get the data. The function will then read the OAuth Token from localStorage and create an object with some more general stuff the Twitter REST API requires, like the Consumer Key and the OAuth Token. This object is then passed to the `$cordovaOauthUtility`of ngCordova to create a correct authorization object, which will be set as the _authorization header_ of our request. For more detailed information about OAuth 1.0a, check out [Nic Raboy's blog post](https://blog.nraboy.com/2014/11/understanding-request-signing-oauth-1-0a-providers/)!

4. After this function, we come to the returned object of our TwitterService. The `initialize` function will be called on our app startup. This function looks for a stored OAuth token that could be used for signing, but if it is not present, will try to authorize the user with the help of `$cordovaOauth`, where we again need the Consumer Key and Consumer Secret.
This ngCordova wrapper will slide up a Twitter authorization form to the user, where the user must enter his/her credentials. Finally, we return a promise from this function to get informed about a correct/failed authorization in our controller.

5. The `isAuthenticated` function is very simple and only checks for a stored token. Keep in mind that users could revoke their permissions for an app, so here you might add a token verification check in a real app.

6. Finally the `getHomeTimeline`function can be called to retrieve our home timeline feed. Here, we create our signature for the request for the associated URL and return the request as a resource object. To learn more about this, check out my [ngResource blog post](http://devdactic.com/improving-rest-with-ngresource/).

### Accessing the data from our Controller
After we have our service, we need to create the controller for our app, so go ahead and create a **controllers.js**. Now, open your created file, and insert this:
```javascript
.controller('AppCtrl', function($scope, $ionicPlatform, TwitterService) {
    // 1
    $scope.correctTimestring = function(string) {
        return new Date(Date.parse(string));
    };
    // 2
    $scope.showHomeTimeline = function() {
        $scope.home_timeline = TwitterService.getHomeTimeline();
    };
    // 3
    $scope.doRefresh = function() {
        $scope.showHomeTimeline();
        $scope.$broadcast('scroll.refreshComplete');
    };
    // 4
    $ionicPlatform.ready(function() {
        if (TwitterService.isAuthenticated()) {
            $scope.showHomeTimeline();
        } else {
            TwitterService.initialize().then(function(result) {
                if(result === true) {
                    $scope.showHomeTimeline();
                }
            });
        }
    });
});
```
Our controller is rather simple now, as we have all our REST interaction logic inside our service. Anyway, let’s take a closer look at our functions:
1. As our feed object from Twitter returns a quite unformatted date string, we need to convert the string to a more readable date to display.
2. The `showHomeTimeline` function will fill our `home_timeline` array with the feed data we get from our service.
3. As we will have a pull-to-refresh inside our view, we need a function to update the feeds array.
4. When our platform is ready, we check if the user is already authenticated and initially fill the array. If not, we call our `initialize` from the service to show the login view to the user to perform the OAuth authentication.

That's pretty much everything we need for a simple Twitter feed!

## Showing Feeds Inside our View
After we have a service to get the data from Twitter and a controller to hold our received data, we need an appropriate view to show the feeds in a Twitter-like style. For this, open the **index.html** and replace the dummy body with this:
```html
<body ng-app="starter" ng-controller='AppCtrl'>
  <ion-pane>
    <ion-header-bar class="bar-positive">
      <h1 class="title">My Twitter Feed</h1>
    </ion-header-bar>
    <ion-content class="has-header padding">
      <ion-refresher on-refresh="doRefresh()"></ion-refresher>

    <div ng-show="home_timeline.length == 0">Loading tweets...</div>

    <div ng-repeat="entry in home_timeline" class="list card">
      <div class="item item-avatar">
        <img ng-src="{{entry.user.profile_image_url}}"/>
        <h2>{{entry.user.name}}</h2>
        <p>{{correctTimestring(entry.created_at) | date:'medium'}}</p>
      </div>

      <div class="item item-body">
        <p ng-bind-html="entry.text"></p>
        <img ng-if="entry.extended_entities" ng-src="{{ entry.extended_entities.media[0].media_url }}" style="width: 100%;"/>
      </div>

    </div>
  </ion-content>
</ion-pane>
</body>
```
Inside our view, we first have the refresher, which allows us to use pull-to-refresh. Next, if our feed's array is empty, we just display a little dummy text.

The main part is the `ng-repeat` to iterate over the feed objects. Here, we make use of the [Ionic cards](http://ionicframework.com/docs/components/#cards), where we have the profile image of the user as an item-avatar, the username, our corrected time string in the top area, and inside the body of our card the text of the tweet. Additionally, if some media inside the feed data is set, we display the posted image below the content.

### Final words and outlook
This tutorial shows a straightforward way to display Twitter feed data in an appropriate way inside your Ionic app. There are many more endpoints in the Twitter REST API, so make use of the newly created TwitterService and get the data you need! 
Additionally, you could parse the feed data a bit more through a filter to make links clickable. Check out [my blog](http://devdactic.com/) for an upcoming post about this topic!

If you have any questions, issues, or ideas, please leave a comment below and/or follow me [@schlimmson](https://twitter.com/schlimmson) on Twitter.

A video version of this article can be seen below.

[![Displaying the Twitter Feed within Your Ionic App](http://img.youtube.com/vi/VE2mbQPQZwA/0.jpg)](http://www.youtube.com/watch?v=VE2mbQPQZwA)
