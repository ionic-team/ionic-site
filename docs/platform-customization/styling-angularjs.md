---
layout: docs_platform_customization
title: Styling using AngularJS
header_sub_title: An overview of customizing your Ionic app based on the platform
chapter: true
---

# Styling using AngularJS

The <code><a href="/docs/api/utility/ionic.Platform/">ionic.Platform</a></code> utility can be used in your JavaScript controller to set the platform for your app. For the following examples, we assume you have a controller called `AppCtrl` encapsulating your project.

## Setting the Platform

In your `AppCtrl` controller, retrieve and set the platform using `ionic.Platform`:

```javascript
.controller('AppCtrl', function($scope) {
  $scope.platform = ionic.Platform.platform();
})
```

## Using the Platform to Dynamically Style Elements

You can then use this platform to change which elements display, and what classes get added to specific elements. Say you are using the tabs structure and you want to change the way the tabs look on android but keep the same look and feel for all other devices. We can use Angular's `ng-class` to dynamically add classes based on the platform. Adding the following to the `{% raw %}<ion-tabs>{% endraw %}` directive will add the `tabs-postiive` class for Android platforms and the `tabs-icon-top` class to all devices but Android:

```html
{% raw %}
<ion-tabs class="tabs-stable" ng-class="{'tabs-positive': platform == 'android', 'tabs-icon-top': platform != 'android'}">
  <!-- ion-tab directives go here -->
</ion-tabs>
{% endraw %}
```

You can also use Angular's `ng-attr` in order to dynamically define attributes based on platform. For example, you may want the icons in the tabs to show on all devices except Android. You can dynamically add the icon by using the `ng-attr-icon` property. To define an icon for all devices minus Android on the "Home" tab, you could use the following code:

```html
{% raw %}
<!-- if the platform is android don't add an icon, all other devices get an icon -->
<ion-tab title="Home" ng-attr-icon="{{ platform != 'android' ? 'ion-home' : undefined}}" href="#/tab/home">
{% endraw %}
```
