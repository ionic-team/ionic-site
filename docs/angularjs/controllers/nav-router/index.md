---
layout: docs_0.9.0
active: angularjs
title: "Nav Router Controller"
header_sub_title: "Navigation stack"
---

Available in:
<div class="label label-danger">Ionic-Angular 0.9.0</div>

Nav Router Controller
===

The Nav Router Controller uses Angular's `ngRoute` module to provide a URL route-based navigation controller. The navigation controller can power a nav bar to update with the correct title of the pages as the user transitions through the app.

The Nav Router can also be updated from child view controllers such as tabs.

To start, we will wrap an `<ng-view>` with a node that uses the `nav-router` attribute or class directive, and also create a `<nav-bar>` which will update as the nav router updates. We also add some styles and set up animations:

```html
<body ng-app="starter">

  <!-- Our navigation router with some animations set -->
  <pane nav-router animation="slide-left-right-ios7">

    <!-- The nav bar that will be updated as we navigate -->
    <nav-bar class="nav-title-slide-ios7" type="bar-positive" back-button-type="button-icon" back-button-icon="icon ion-arrow-left-c"></nav-bar>

    <!-- where the content of each page will be rendered -->
    <ng-view></ng-view>
  </pane>
</body>
```

Then, we can set up Angular to listen for various routes and then render a template:

```javascript
angular.module('starter', ['ionic', 'ngRoute'])

.config(function ($compileProvider){
  // Needed for phonegap routing
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(function($routeProvider, $locationProvider) {

  // Set up the initial routes that our app will respond to.
  // These are then tied up to our nav router which animates and
  // updates a navigation bar
  $routeProvider.when('/home', {
    templateUrl: 'templates/app.html',
    controller: 'AppCtrl'
  });

  $routeProvider.when('/pet/:petId', {
    templateUrl: 'templates/pet.html',
    controller: 'PetCtrl'
  });

  $routeProvider.otherwise({
    redirectTo: '/home'
  });

});
```

Then, in each page of our app, we should wrap it in the `<nav-page>` directive. Here is an example
of a tab bar being used inside of a nav page, inside of the `templates/app.html` file:

```javascript
{% raw %}
<nav-page id="app-page" ng-controller="AppCtrl">
  <tabs tabs-style="tabs-icon-top" tabs-type="tabs-positive" animate-nav="false">

    <!-- Pets tab -->
    <tab title="Pets" icon="icon ion-home" ng-controller="PetsTabCtrl">
      <content has-header="true" has-tabs="true">
        <list>
          <link-item ng-repeat="pet in pets" type="item-text-wrap" href="#/pet/{{pet.id}}">
              <h3>{{pet.title}}</h3>
              <p>{{pet.description}}</p>
            </item>
          </link-item>
        </list>
      </content>
    </tab>

    <!-- Adoption tab -->
    <tab title="Adopt" icon="icon ion-heart">
      <content has-header="true" has-tabs="true">
      </content>
    </tab>

    <!-- Home tab -->
    <tab title="About" icon="icon ion-search">
      <content has-header="true" has-tabs="true" padding="true">
      </content>
    </tab>
  </tabs>
</nav-page>
{% endraw %}
```
