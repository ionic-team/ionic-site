---
layout: docs_0.9.0
active: angularjs
title: "Content"
header_sub_title: "Content and scrollable areas"
---

Available in:
<div class="label label-danger">Ionic-Angular 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>


Content
===

Ionic provides easy to use content area directives for use in AngularJS projects that can be configured to use Ionic's custom Scroll View, or use the built in overflow scrolling of the browser.

While we recommend using the custom Scroll features in Ionic in most cases, sometimes (for performance reasons) only the browser's native overflow scrolling will suffice, and so we've made it easy to toggle between the Ionic scroll implementation and overflow scrolling.

When using the Ionic scroll features, you'll get pull-to-refresh, customizable scroll mechanics (like bounce easing, momentum acceleration, etc.) which aligns Ionic with native SDKs that give you access to scroll behavior. You'll also get events while in a momentum scroll, which `-webkit-overflow-scrolling: touch` will not, making it of limited use in real applications.

Also, we are working on virtual list rendering which will only work when using Ionic's scroll view. That is on the upcoming roadmap.

## Ionic-Angular Usage

The `<content>` directive can be used whenever a scrollable content area is desired. Here it is with all its available options, though none of these are required:

```html
<body ng-controller="ContentCtrl">
  <header-bar title="'Header'">
  </header-bar>

  <!-- content area -->
  <content
    has-header="true"
    has-footer="true"
    scroll="true"
    on-refresh="onRefresh()"
    >

    <!-- for pull to refresh -->
    <refresher></refresher>
    
    <!-- content -->
  </content>

  <footer-bar>
    <h1 class="title">Footer</h1>
  </footer-bar>
</body>
```

And example controller:

```javascript
angular.module('myModule', [])
.controller('ContentCtrl', function($scope, Users) {
  $scope.onRefresh = function() {
    // Load content
    Users.load().then(function(users) {
      $scope.users = users;

      // Trigger refresh complete on the pull to refresh action
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
});

```

### Dynamic content resizing

If the content of your scroll area changes, we can tell the content area to resize and update itself:

```javascript
$scope.$broadcast('scroll.resize');
```

### Pull to Refresh

Pull to refresh is an incredibly common UI paradigm found in mobile apps these days. If you want to add pull to refresh to your scroll area, you can just add the `<refresher>` element to the beginning of the scroll content:

```html
  <!-- content area -->
  <content on-refresh="onRefresh()">
    <refresher></refresher>
  </content>
```

This will give you a default icon and animation style. To customize the pull to refresh, use `<scroll-refresher>` instead of `<refresher>` and supply your own content:

```html
  <!-- content area -->
  <content on-refresh="onRefresh()">
    <scroll-refresher>
      Pull to refresh...
    </scroll-refresher>
  </content>
```

*Hint: Ionicons comes with [animated icons](http://ionicons.com/animation.html).*

When refreshing is complete, you'll need to tell the scroll view to stop the refresh. To do this, trigger an event either up or down the scope chain to the scroll view. If your controller is "above" the scroll view in the scope chain, use broadcast:

```javascript
$scope.$broadcast('scroll.refreshComplete');
```

Use `$scope.$emit` if the scroll view is above your controller.

### Available options

<table class="table">
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Values</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>has-header</td>
      <td>true/false</td>
      <td>false</td>
      <td>Whether to push the content area down by the height of the header</td>
    </tr>
    <tr>
      <td>has-subheader</td>
      <td>true/false</td>
      <td>false</td>
      <td>Whether to push the content area down by the height of the sub header. Requires "has-header" attribute.</td>
    </tr>
    <tr>
      <td>has-footer</td>
      <td>true/false</td>
      <td>false</td>
      <td>Whether to push the content area up by the height of the footer</td>
    </tr>
    <tr>
      <td>overflow-scroll</td>
      <td>true/false</td>
      <td>false</td>
      <td>Whether to use Ionic's custom scroll view (false), or the browser's overflow touch (true). Note: pull to refresh
          and other scroll features require this value to be false</td>
    </tr>
    <tr>
      <td>scroll</td>
      <td>true/false</td>
      <td>true</td>
      <td>Whether to scroll at all. Set this to "false" if a list child is going to handle scrolling instead</td>
    </tr>
    <tr>
      <td>on-refresh</td>
      <td>function</td>
      <td></td>
      <td>A function to call when pull-to-refresh is triggered on this content area</td>
    </tr>
<!--
    <tr>
      <td>on-refresh-opening</td>
      <td>function(amount)</td>
      <td></td>
      <td>A function to call as the pull to refresh opens. amount is a value in the range 0 <= amount <= 1. This function is
          throttled to improve performance.</td>
    </tr>
-->
    <tr>
      <td>padded</td>
      <td>true/false</td>
      <td>false</td>
      <td>Whether to add standard padding to the content area</td>
    </tr>
  </tbody>
</table>

