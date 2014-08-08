---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionNavBackButton/"

title: "ion-nav-back-button"
header_sub_title: "Directive in module ionic"
doc: "ionNavBackButton"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navBackButton.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-nav-back-button


<br />
<small>
  Child of <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>
</small>


</h1>





Creates a back button inside an <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>.

Will show up when the user is able to go back in the current navigation stack.

By default, will go back when clicked.  If you wish for more advanced behavior, see the
examples below.








  
<h2 id="usage">Usage</h2>
  
With default click action:

```html
<ion-nav-bar>
  <ion-nav-back-button class="button-clear">
    <i class="ion-arrow-left-c"></i> Back
  </ion-nav-back-button>
</ion-nav-bar>
```

With custom click action, using <a href="/docs/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>:

```html
<ion-nav-bar ng-controller="MyCtrl">
  <ion-nav-back-button class="button-clear"
    ng-click="canGoBack && goBack()">
    <i class="ion-arrow-left-c"></i> Back
  </ion-nav-back-button>
</ion-nav-bar>
```
```js
function MyCtrl($scope, $ionicNavBarDelegate) {
  $scope.goBack = function() {
    $ionicNavBarDelegate.back();
  };
}
```

Displaying the previous title on the back button, again using
<a href="/docs/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.

```html
<ion-nav-bar ng-controller="MyCtrl">
  <ion-nav-back-button class="button-icon">
    <i class="icon ion-arrow-left-c"></i>{% raw %}{{getPreviousTitle() || 'Back'}}{% endraw %}
  </ion-nav-back-button>
</ion-nav-bar>
```
```js
function MyCtrl($scope, $ionicNavBarDelegate) {
  $scope.getPreviousTitle = function() {
    return $ionicNavBarDelegate.getPreviousTitle();
  };
}
```
  
  

  





