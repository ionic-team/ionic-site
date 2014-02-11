---
layout: docs_0.9.0
active: angularjs
title: "Side Menu Controller"
header_sub_title: "Draggable side menus"
---

Available in:
<div class="label label-danger">Ionic-Angular 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>

Side Menu Controller
===

The Side Menu Controller enables a left and/or right side menu that can be toggled or exposed by dragging the center content area side to side. One or both of the menus can be enabled: 

<img src="http://ionicframework.com.s3.amazonaws.com/docs/controllers/sidemenu.gif" style="border: 1px solid #eee">

## Usage

To use the Side Menu Controller with Ionic-Angular, use the `<side-menu>` top level directive, adding a `<pane side-menu-content>` for the center content, and one or more `<side-menu>` directives:

```html
<side-menus>
  <!-- Center content -->
  <pane side-menu-content>
  </pane>

  <!-- Left menu -->
  <side-menu side="left">
  </side-menu>

  <!-- Right menu -->
  <side-menu side="right">
  </side-menu>
</side-menus>
```

The center content tag can be any element, but it must have the `side-menu-content` attribute or class directive.

Like all Ionic controllers, the Side Menu exposes one object for all child scopes that use prototypal inheritance (i.e. all besides isolated scopes).

To access the parent Side Menu Controller on a child scope, access the `$scope.sideMenuController` object. For example, the following code enables toggling the left side menu from a button in the header bar:

```html
<header>
  <button class="button" ng-click="toggleMenu()">Toggle</button>
</header>
```

```javascript
$scope.toggleMenu = function() {
  $scope.sideMenuController.toggleLeft();
};
```

Note: If you have horizontal-scrolling content and a draggable side-menu, both will not work.  It is advised if you have horizontal-scrolling content to disable dragging out the side-menu with the `drag-content` attribute:

```js
<pane side-menu-content drag-content="false"></pane>
```

Low-level API
=========

To use the Side Menu Controller low-level API, follow the markup and Javascript below:

```html

<!-- Center content -->
<div id="content" class="pane">
  <header class="bar bar-header bar-dark">
    <h1 class="title">Center</h1>
  </header>
</div>

<!-- Left menu -->
<div id="menu-left" class="menu menu-left">
  <header class="bar bar-header bar-dark">
    <h1 class="title">Left</h1>
  </header>
</div>

<!-- Right menu -->
<div id="menu-right" class="menu menu-right">
  <header class="bar bar-header bar-dark">
    <h1 class="title">Right</h1>
  </header>
</div>
```

```javascript
var contentEl = document.getElementById('content');
var content = new ionic.views.SideMenuContent({
  el: contentEl
});

var leftMenuEl = document.getElementById('menu-left');
var leftMenu = new ionic.views.SideMenu({
  el: leftMenuEl,
  width: 270
});

var rightMenuEl = document.getElementById('menu-right');
var rightMenu = new ionic.views.SideMenu({
  el: rightMenuEl,
  width: 270
});

var sm = new ionic.controllers.SideMenuController({
  content: content,
  left: leftMenu,
  right: rightMenu
});
```
