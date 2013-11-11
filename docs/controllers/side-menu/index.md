---
layout: docs
title: "Ionic Framework - Side Menu Controller"
---

Available in:
<div class="label label-danger">AngularIonic 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>

# Side Menu Controller

The Side Menu Controller enables a left and/or right side menu that can be toggled or exposed by dragging the center content area side to side. One or both of the menus can be enabled: 

![Side menu](http://ionicframework.com.s3.amazonaws.com/docs/controllers/sideMenu4.png)
![Side menu](http://ionicframework.com.s3.amazonaws.com/docs/controllers/sideMenu2.png)

## Usage

To use the Side Menu Controller with AngularIonic, use the `<side-menu>` top level directive, adding a `<pane side-menu-content>` for the center content, and one or more `<menu>` directives:

```html
<side-menu>
  <!-- Center content -->
  <pane side-menu-content>
  </pane>

  <!-- Left menu -->
  <menu side="left">
  </menu>

  <!-- Right menu -->
  <menu side="right">
  </menu>
</side-menu>
```

The center content tag can be any element, but it must have the `side-menu-content` attribute or class directive.

## API

Like all Ionic controllers, the Side Menu exposes one object for all child scopes that use prototypal inheritance (i.e. all besides isolated scopes).

To access the parent Side Menu Controller on a child scope, access the `$scope.sideMenuCtrl` object. For example, the following code enables toggling the left side menu from a button in the header bar:

```html
<header>
  <button class="button" ng-click="toggleMenu()">Toggle</button>
</header>
```

```javascript
$scope.toggleMenu = function() {
  $scope.sideMenuCtrl.toggleLeft();
};
```
