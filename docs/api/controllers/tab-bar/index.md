---
layout: "api_0.9.0"
title: "Tab Bar Controller"
header_sub_title: "Multi-page tab interfaces"
---

Tab Bar Controller
===

<!--
Available in:
<div class="label label-danger">Ionic-Angular 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>
-->


The Tab Bar Controller powers a multi-tabbed interface with a Tab Bar and a set of "pages" that can be tabbed through:

<img src="http://ionicframework.com.s3.amazonaws.com/docs/controllers/tabs.gif" style="border: 1px solid #eee">


```html
{% raw %}
<tabs tabs-type="tabs-icon-only"
      tabs-style="tabs-primary">

  <tab title="Home" icon-on="icon ion-ios7-filing" icon-off="icon ion-ios7-filing-outline">
    <!-- Tab 1 content -->
  </tab>

  <tab title="About" icon-on="icon ion-ios7-clock" icon-off="icon ion-ios7-clock-outline">
    <!-- Tab 2 content -->
  </tab>

  <tab title="Settings" icon-on="icon ion-ios7-gear" icon-off="icon ion-ios7-gear-outline">
    <!-- Tab 3 content -->
  </tab>
  
</tabs>
```
{% endraw %}

To use the tabs, put the content of each tab right into the `<tab>` tag, like this:

```html
<tabs tabs-type="tabs-icon-only">
  <tab title="Home" icon-on="icon ion-ios7-filing" icon-off="icon ion-ios7-filing-outline">
    <header-bar type="bar-positive" title="'Home'"></header-bar>
    <content has-header="true">
      <h2>Home Content</h2>
    </content>
  </tab>
</tabs>
```

Notice we set the title of the `<header-bar>` using single quotes (`title="'Home'"`) since the title is an angular expression and can be bound to a scope value for dynamic titles.

The Tab Bar also emits events when tabs change. To know when a tab is shown, listen for the `tab.shown` event, and the `tab.hidden` event for when it is hidden:

```html
<tabs tabs-type="tabs-icon-only">
  <tab title="Home" icon-on="icon ion-ios7-filing" icon-off="icon ion-ios7-filing-outline" ng-controller="HomeCtrl">
    <header-bar type="bar-positive" title="'Home'"></header-bar>
    <content has-header="true">
      <h2>Home Content</h2>
    </content>
  </tab>
</tabs>
```

```javascript
angular.module('test', ['ionic'])
.controller('HomeCtrl', function($scope) {
  $scope.$on('tab.shown', function() {
    // Maybe load some content here
  });
  $scope.$on('tab.hidden', function() {
    // Perhaps cycle out some data in memory here
  });
});
```
