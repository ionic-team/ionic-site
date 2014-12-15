---
layout: "docs_api"
version: "1.0.0-beta.14"
versionHref: "/docs"
path: "api/directive/ionNavBackButton/"

title: "ion-nav-back-button"
header_sub_title: "Directive in module ionic"
doc: "ionNavBackButton"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/navBackButton.js#L1'>
    View Source
  </a>
  &nbsp;
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

The back button will appear when the user is able to go back in the current navigation stack. By
default, the markup of the back button is automatically built using platform-appropriate defaults
(iOS back button icon on iOS and Android icon on Android).

Additionally, the button is automatically set to `$ionicGoBack()` on click/tap. By default, the
app will navigate back one view when the back button is clicked.  More advanced behavior is also
possible, as outlined below.








  
<h2 id="usage">Usage</h2>
  
Recommended markup for default settings:

```html
<ion-nav-bar>
  <ion-nav-back-button>
  </ion-nav-back-button>
</ion-nav-bar>
```

With custom inner markup, and automatically adds a default click action:

```html
<ion-nav-bar>
  <ion-nav-back-button class="button-clear">
    <i class="ion-arrow-left-c"></i> Back
  </ion-nav-back-button>
</ion-nav-bar>
```

With custom inner markup and custom click action, using <a href="/docs/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>:

```html
<ion-nav-bar ng-controller="MyCtrl">
  <ion-nav-back-button class="button-clear"
    ng-click="myGoBack()">
    <i class="ion-arrow-left-c"></i> Back
  </ion-nav-back-button>
</ion-nav-bar>
```
```js
function MyCtrl($scope, $ionicNavBarDelegate) {
  $scope.myGoBack = function() {
    $ionicNavBarDelegate.back();
  };
}
```
  
  

  





