---
layout: "tutorial"
title: "AngularJS Routing with Ionic"
---

AngularJS URL Routing in Ionic
====

Using AngularJS routing in Ionic is very easy. Ionic even ships with a navigation system that processes routes and transitions header bars and other elements between different pages of the navigation stack. This is just like UINavigationController on iOS, but with the added benefit of URL routing which is simple to add to your app markup.

## Step 1: Seed

For most of these tutorials, we will be using the official [ionic-angular-cordova-seed](http://github.com/driftyco/ionic-angular-cordova-seed) project on GitHub. This project sets you up with a working example Ionic app that uses Cordova to build to a native app.

To start, download or clone the seed project and open the directory it downloaded or extracted to. The seed project comes with an example app that has some functionality built in that we won't need, so go ahead and remove the following files:

```bash
$ rm www/js/controllers.js
$ rm www/css/app.css
```

Inside of the `index.html` file, you'll see something like this:

```html
<!-- Our navigation router with some animations set -->
<pane nav-router animation="slide-left-right-ios7">
  <!-- The nav bar that will be updated as we navigate -->
  <nav-bar class="nav-title-slide-ios7" type="bar-positive" back-button-type="button-icon" back-button-icon="icon ion-arrow-left-c"></nav-bar>

  <!-- where the content of each page will be rendered -->
  <ng-view></ng-view>
</pane>
```

We've wrapped the `<ng-view>` in Ionic's `<pane nav-router>` directive, and added one child `<nav-bar>`. The `<pane nav-router>` uses the `nav-router` attribute directive which listens for route changes and then animates the `<nav-bar>` and other aspects of the page transition. The `<pane>` directive is used to just create a full screen div to ensure animation works correctly. Note: it is recommended to only have one <nav-bar> if using the Navigation Router.

That's all you need to do, the app can then use the normal ngRoute API.

So, if we want to add a new URL route to the app, we can edit `www/js/app.js` and add a new route entry:

```javascript
$routeProvider.when('/user/:userId', {
  templateUrl: 'templates/user.html',
  controller: 'UserCtrl'
});
```

Which will load the `templates/user.html` template and pass along the `:userId` param to a new instance of the `UserCtrl` controller. Inside of the new controller, we can then grab the userId passed to the route:

```javascript
.controller('UserCtrl', function($scope, $routeParams) {
  $scope.userId = $routeParams.userId;
});
```

Then, just link to the new route using hash routing syntax (note: HTML5 mode from the `$locationProvider` does not seem to work well with Cordova):

```html
<list>
  <link-item href="#/user/{{user.id}}">
    {{user.name}}
  </link-item>
</list>
```

Thats it! You now have a router based Ionic and Angular app!

[Discuss this tutorial on the Ionic Forum](http://forum.ionicframework.com/t/angularjs-url-routing-in-ionic/34)
