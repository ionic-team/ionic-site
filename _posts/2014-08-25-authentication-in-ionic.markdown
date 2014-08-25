---
layout: post
title:  "Adding Auth to your Ionic app in 5 mins with Auth0"
date:   "2014-08-25 13:00:00"
categories: angularjs
author: '<img src="https://www.gravatar.com/avatar/df6c864847fba9687d962cb80b482764?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/mgonto" target="_blank">@mgonto</a>'
searchable: true
published: true
---

*This is a guest post by Martin Gontovnikas (aka [mgonto](http://twitter.com/mgonto)), the lead Developer Advocate at Auth0. Martin is passionate about tech and contributes to open source with [Restangular](https://github.com/mgonto/restangular) (the famous REST client for AngularJS), AngularWizard, Angularytics, and FactoryPal. He also blogs at [http://gon.to/blog/](http://gon.to/blog/)

> *TL;DR*: Get the [sample project using Ionic and Auth0 from Github](https://github.com/auth0/auth0-ionic/tree/master/examples/refresh-token-sample). 

The smartphone has changed the way everyone interacts with different services and applications. Facebook reports having more usage from mobile phones compared to desktop computers. The industry calls this trend  *Mobile First*.

Mobile First implies that companies first develop a mobile experience of their services. Often this means implementing the application in lots of different languages and platforms: Objective C for iOS, Java for Android, C# for Windows Phone, etc.

This is where Ionic and Cordova help you. Thanks to Cordova, you just code the application once in HTML and JS, and it works in all the different platforms. Thanks to Ionic, your code is easily reusable and maintainable. You're basically creating a Single Page App (SPA) that works on any device. It seems it could be the holy grail of mobile development.

However, once you start coding, you'll see that there are some obstacles to overcome. If you search for *"Authentication with AngularJS/Ionic"* in Stackoverflow, you'll see that [there are more than 900 questions](http://stackoverflow.com/search?q=angularjs+authentication) about it.

How do you keep users logged in forever? Should you use Cookies or Tokens? How to login users with social providers such as Facebook, Twitter, Linkedin, etc.? What if you need to authenticate users in enterprise directories such as Active Directory or LDAP? 

These are some of the challenges that we solve at [Auth0](http://auth0.com/). 

In this post, you'll learn how to easily add any authentication to your Ionic app using Auth0. As an introduction to this post, you can read about why it's better to use tokens in your AngularJS SPA in [this other post](http://blog.auth0.com/2014/01/07/angularjs-authentication-with-cookies-vs-token/).

## 1. Add the required dependencies
The first thing you'll need to do is add the required dependencies. If you don't have an Ionic project yet, you can just create one using the `ionic` command:

````bash
ionic start auth0-ionic-app tabs
ionic platform add ios
````

### 1.1 Add Auth0 dependencies
Add the Auth0 dependencies to your `bower.json` file. Save the file and run `bower install`:

````json
"dependencies" : {
  "auth0-angular": "2.2.*"
},
````

Add a reference to the Auth0 JS files from your `index.html` file:

````html
<!-- Auth0 Lock (Login Widget) -->
<script src="lib/auth0-widget.js/build/auth0-widget.js"></script>

<!-- ionic/angularjs js -->
<script src="lib/ionic/js/ionic.bundle.js"></script>

<!-- Auth0 Angular module -->
<script src="lib/auth0-angular/build/auth0-angular.js"></script>
````

### 1.2 Add the InAppBrowser plugin
Auth0 uses the `InAppBrowser` plugin from Cordova to display the Login Window from each of the different Identity Providers. To install it, run the following command:

````bash
ionic plugin add org.apache.cordova.inappbrowser
````

Then add this configuration to your `config.xml`:

````xml
<feature name="InAppBrowser">
  <param name="ios-package" value="CDVInAppBrowser" />
  <param name="android-package" value="org.apache.cordova.InAppBrowser" />
</feature>
````

## 2. Time to code!
Now the fun starts. Let's integrate Auth0 into our Ionic code.

### 2.1 Add the Auth0 module as a dependency and configure it

Add the dependency for the `auth0` module and inject the `authProvider` to configure it:

````js
angular.module('starter', ['ionic',
  'starter.controllers',
  'starter.services',
  'auth0']).config(function ($stateProvider, $urlRouterProvider, authProvider) {
	...
	authProvider.init({
	  domain: '{your domain in Auth0}.auth0.com',
      clientID: '{your client id in Auth0}',
      callbackURL: location.href,
      loginState: 'login'
	});
})
.run(function(auth) {
  // Hook auth0-angular to all the events it needs to listen to
  auth.hookEvents();
});
````

The `init` method in `authProvider` needs Auth0 account data such as the `domain` and the app registration identifier (the `clientId`). This ensures your Ionic app connects to the right Auth0 instance: yours!

> You don't have an Auth0 account yet? It's really easy. You'll learn how to create one in steps below.

### 2.2 Configure the routes in the app
You will add a new state called `login` which will actually get displayed before the user can access the main pages of the application:

````js
app.config(function($stateProvider) {
	...
	$stateProvider
    // This is the state where you'll show the login
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl',
    })
    // Your app states
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      // This state requires users to be logged in
	    // If they're not they'll be redirected to the login state
      data: {
        requiresLogin: true
      }
    });
    ...
});
````

> Notice the `requiresLogin` added to the `tabs` state.

### 2.3 Add code for the Login state
Now, it's just time to code the Login state!

````js
app.controller('LoginCtrl', function($scope, auth, $state) {
  auth.signin({
    // This is a must for mobile projects
    popup: true,
    // Make the widget non closeable
    standalone: true,
    // This asks for the refresh token
    // So that the user never has to log in again
    offline_mode: true,
    device: 'Phone'
  }, function() {
	// Login was successful
    $state.go('tab.dash');
  }, function(error) {
	// Oops something went wrong during login:
    console.log("There was an error logging in", error);
  });
})
````

````html
 <ion-view title="'Login'">
    <ion-content>
      <!-- The content of the page -->
      <!-- The widget is created by Auth0. We don't have to add anything here -->
    </ion-content>
  </ion-view>
````

The `auth.signin` method is called as soon as the controller is created. This will result in the [Auth0 Lock](https://auth0.com/lock) being displayed. The `Auth0 Lock` is a UI widget that will let your users choose how they want to authenticate to your Ionic app. The `Auth0 Lock` comes pre-configured with all usual controls for various ways of authetnication: Social Connections, Enterprise connections or regular Username and passwords. It's pretty on its own, but it be fully customized to match your UX.

> Auth0 supports [a large number of identity providers](https://docs.auth0.com/identityproviders).

Notice the various parameters in the *Auth0 Lock*. In particular, check the `offline_mode` set to true. This setting is very important for mobile apps since it'll make Auth0 return a `refresh_token` to your app. For more information about Refresh Tokens, you can [click here](http://docs.auth0.com/refresh-token).

### 2.4 Call the secured API
With the token in the app, you can now call a secured API safely. Each call you make to an API endpoint should attach the token (JWT) to the `Authorization` header. To simplify your code, `auth0-angular` ships with an `$http` interceptor that will automatically inject the token on each call:

````js
// app.js
app.config(function ($httpProvider) {
  // ...
  $httpProvider.interceptors.push('authInterceptor');
  // ...
});
````

All that's left now is validating the sent token in your server hosting the API. [Tailored tutorials](https://docs.auth0.com/#!/hybrid/ionic) for all popular stacks and platforms will teach you how to do that. Auth0 OSS SDKs make it really easy.

### 2.5 Display user information
Once the user is logged in, you can access the user information via `auth.profile`. [Auth0 ensures that common properties are all sent in the same way](https://docs.auth0.com/user-profile).

````html
<span>Hi {{auth.profile.nickname}}</span>
````

## 3. Configure Auth0
Now it's time to configure Auth0. First, we need to register an `Application`. This represents the Ionic app and the API. Then, you can choose which Identity Providers the user will be enabled for the app. 

### 3.1 Create the Application in Auth0
Creating the Application is super easy. Once created, check Settings, and copy the `clientId` and `domain`. These are used in Step 2.1.

<img src="https://cloudup.com/iYZPXy0c303+" />

> *Note*: If you want to try this out with `ionic serve` as well, you'll have to put `localhost:8100` as one of the `callbackURLs` on the Settings of your application.

### 3.2 Choose the Identity providers
Now, you can choose what Identity Providers (called *Connections* in Auth0) the user will use to log in. We have tons of them!

<img src="https://cloudup.com/iVIa3IZg_6o+" />


## Show time!

You've completed implementing Authentication in your app. Let's see how it runs!

<img src="https://cloudup.com/iMmARAM4VJZ+" />

## Final thoughts

You've added authentication with Social Providers, Enterprise Providers and regular username & password to our Ionic app in just a few simple steps.

[You can download this exact example from Github](https://github.com/auth0/auth0-ionic/tree/master/examples/refresh-token-sample).

If you have any questions, please contact me at [gonto@auth0.com](mailto:gonto@auth0.com) :).

Happy hacking!

[@mgonto](http://twitter.com/mgonto)

