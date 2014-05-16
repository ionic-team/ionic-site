---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
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
  Child of <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>
</small>


</h1>





Creates a back button inside an <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.

Will show up when the user is able to go back in the current navigation stack.

By default, will go back when clicked.  If you wish for more advanced behavior, see the
examples below.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/navBackButton.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionNavBackButton\n@module ionic\n@restrict E\n@parent ionNavBar\n@description\nCreates a back button inside an <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.\n\nWill show up when the user is able to go back in the current navigation stack.\n\nBy default, will go back when clicked.  If you wish for more advanced behavior, see the\nexamples below.\n\n@usage\n\nWith default click action:\n\n```html\n<ion-nav-bar>\n  <ion-nav-back-button class=\"button-clear\">\n    <i class=\"ion-arrow-left-c\"></i> Back\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n\nWith custom click action, using <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>:\n\n```html\n<ion-nav-bar ng-controller=\"MyCtrl\">\n  <ion-nav-back-button class=\"button-clear\"\n    ng-click=\"canGoBack && goBack()\">\n    <i class=\"ion-arrow-left-c\"></i> Back\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n```js\nfunction MyCtrl($scope, $ionicNavBarDelegate) {\n  $scope.goBack = function() {\n    $ionicNavBarDelegate.back();\n  };\n}\n```\n\nDisplaying the previous title on the back button, again using\n<a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.\n\n```html\n<ion-nav-bar ng-controller=\"MyCtrl\">\n  <ion-nav-back-button class=\"button-icon\">\n    <i class=\"icon ion-arrow-left-c\"></i>{% raw %}{{getPreviousTitle() || 'Back'}}{% endraw %}\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n```js\nfunction MyCtrl($scope, $ionicNavBarDelegate) {\n  $scope.getPreviousTitle = function() {\n    return $ionicNavBarDelegate.getPreviousTitle();\n  };\n}\n```",
  "fileName": "navBackButton",
  "relativePath": "js/angular/directive/navBackButton.js",
  "tags": {
    "tags": [
      {
        "tagDef": {
          "name": "ngdoc",
          "required": true,
          "docProperty": "docType"
        },
        "tagName": "ngdoc",
        "description": "directive",
        "startingLine": 1
      },
      {
        "tagDef": {
          "name": "name",
          "required": true
        },
        "tagName": "name",
        "description": "ionNavBackButton",
        "startingLine": 2
      },
      {
        "tagDef": {
          "name": "module"
        },
        "tagName": "module",
        "description": "ionic",
        "startingLine": 3
      },
      {
        "tagDef": {
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "E",
        "startingLine": 4
      },
      {
        "tagDef": {
          "name": "parent"
        },
        "tagName": "parent",
        "description": "ionNavBar",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "Creates a back button inside an <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.\n\nWill show up when the user is able to go back in the current navigation stack.\n\nBy default, will go back when clicked.  If you wish for more advanced behavior, see the\nexamples below.",
        "startingLine": 6
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "With default click action:\n\n```html\n<ion-nav-bar>\n  <ion-nav-back-button class=\"button-clear\">\n    <i class=\"ion-arrow-left-c\"></i> Back\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n\nWith custom click action, using <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>:\n\n```html\n<ion-nav-bar ng-controller=\"MyCtrl\">\n  <ion-nav-back-button class=\"button-clear\"\n    ng-click=\"canGoBack && goBack()\">\n    <i class=\"ion-arrow-left-c\"></i> Back\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n```js\nfunction MyCtrl($scope, $ionicNavBarDelegate) {\n  $scope.goBack = function() {\n    $ionicNavBarDelegate.back();\n  };\n}\n```\n\nDisplaying the previous title on the back button, again using\n<a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.\n\n```html\n<ion-nav-bar ng-controller=\"MyCtrl\">\n  <ion-nav-back-button class=\"button-icon\">\n    <i class=\"icon ion-arrow-left-c\"></i>{% raw %}{{getPreviousTitle() || 'Back'}}{% endraw %}\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n```js\nfunction MyCtrl($scope, $ionicNavBarDelegate) {\n  $scope.getPreviousTitle = function() {\n    return $ionicNavBarDelegate.getPreviousTitle();\n  };\n}\n```",
        "startingLine": 14
      }
    ],
    "tagsByName": {
      "ngdoc": [
        {
          "tagDef": {
            "name": "ngdoc",
            "required": true,
            "docProperty": "docType"
          },
          "tagName": "ngdoc",
          "description": "directive",
          "startingLine": 1
        }
      ],
      "name": [
        {
          "tagDef": {
            "name": "name",
            "required": true
          },
          "tagName": "name",
          "description": "ionNavBackButton",
          "startingLine": 2
        }
      ],
      "module": [
        {
          "tagDef": {
            "name": "module"
          },
          "tagName": "module",
          "description": "ionic",
          "startingLine": 3
        }
      ],
      "restrict": [
        {
          "tagDef": {
            "name": "restrict"
          },
          "tagName": "restrict",
          "description": "E",
          "startingLine": 4
        }
      ],
      "parent": [
        {
          "tagDef": {
            "name": "parent"
          },
          "tagName": "parent",
          "description": "ionNavBar",
          "startingLine": 5
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "Creates a back button inside an <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.\n\nWill show up when the user is able to go back in the current navigation stack.\n\nBy default, will go back when clicked.  If you wish for more advanced behavior, see the\nexamples below.",
          "startingLine": 6
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "With default click action:\n\n```html\n<ion-nav-bar>\n  <ion-nav-back-button class=\"button-clear\">\n    <i class=\"ion-arrow-left-c\"></i> Back\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n\nWith custom click action, using <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>:\n\n```html\n<ion-nav-bar ng-controller=\"MyCtrl\">\n  <ion-nav-back-button class=\"button-clear\"\n    ng-click=\"canGoBack && goBack()\">\n    <i class=\"ion-arrow-left-c\"></i> Back\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n```js\nfunction MyCtrl($scope, $ionicNavBarDelegate) {\n  $scope.goBack = function() {\n    $ionicNavBarDelegate.back();\n  };\n}\n```\n\nDisplaying the previous title on the back button, again using\n<a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.\n\n```html\n<ion-nav-bar ng-controller=\"MyCtrl\">\n  <ion-nav-back-button class=\"button-icon\">\n    <i class=\"icon ion-arrow-left-c\"></i>{% raw %}{{getPreviousTitle() || 'Back'}}{% endraw %}\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n```js\nfunction MyCtrl($scope, $ionicNavBarDelegate) {\n  $scope.getPreviousTitle = function() {\n    return $ionicNavBarDelegate.getPreviousTitle();\n  };\n}\n```",
          "startingLine": 14
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionNavBackButton",
  "module": "ionic",
  "description": "Creates a back button inside an <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.\n\nWill show up when the user is able to go back in the current navigation stack.\n\nBy default, will go back when clicked.  If you wish for more advanced behavior, see the\nexamples below.",
  "usage": "With default click action:\n\n```html\n<ion-nav-bar>\n  <ion-nav-back-button class=\"button-clear\">\n    <i class=\"ion-arrow-left-c\"></i> Back\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n\nWith custom click action, using <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>:\n\n```html\n<ion-nav-bar ng-controller=\"MyCtrl\">\n  <ion-nav-back-button class=\"button-clear\"\n    ng-click=\"canGoBack && goBack()\">\n    <i class=\"ion-arrow-left-c\"></i> Back\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n```js\nfunction MyCtrl($scope, $ionicNavBarDelegate) {\n  $scope.goBack = function() {\n    $ionicNavBarDelegate.back();\n  };\n}\n```\n\nDisplaying the previous title on the back button, again using\n<a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.\n\n```html\n<ion-nav-bar ng-controller=\"MyCtrl\">\n  <ion-nav-back-button class=\"button-icon\">\n    <i class=\"icon ion-arrow-left-c\"></i>{% raw %}{{getPreviousTitle() || 'Back'}}{% endraw %}\n  </ion-nav-back-button>\n</ion-nav-bar>\n```\n```js\nfunction MyCtrl($scope, $ionicNavBarDelegate) {\n  $scope.getPreviousTitle = function() {\n    return $ionicNavBarDelegate.getPreviousTitle();\n  };\n}\n```",
  "docType": "directive",
  "area": "api",
  "restrict": {
    "element": true,
    "attribute": false,
    "cssClass": false,
    "comment": false
  },
  "element": "ANY",
  "priority": 0,
  "parent": [
    "ionNavBar"
  ],
  "parentLinks": "<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>",
  "id": "module:ionic.directive:ionNavBackButton",
  "partialNames": [
    "ionNavBackButton",
    "directive:ionNavBackButton",
    "ionic.ionNavBackButton",
    "module:ionic.ionNavBackButton",
    "ionic.directive:ionNavBackButton",
    "module:ionic.directive:ionNavBackButton"
  ],
  "outputPath": "docs/nightly/api/directive/ionNavBackButton/index.md",
  "path": "api/directive/ionNavBackButton/",
  "searchTerms": {
    "titleWords": "ionNavBackButton",
    "keywords": "$ionicnavbardelegate $scope able action advanced again an any api back behavior below button button-clear button-icon by cangoback class click clicked creates current custom default directive displaying docs endraw examples for function getprevioustitle go goback html icon if in inside ion-arrow-left-c ionic ionnavbackbutton ionnavbar is js md module more myctrl navbackbutton navigation ng-click ng-controller on previous raw return see service show stack the title to up user using when will wish with you"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
With default click action:

```html
<ion-nav-bar>
  <ion-nav-back-button class="button-clear">
    <i class="ion-arrow-left-c"></i> Back
  </ion-nav-back-button>
</ion-nav-bar>
```

With custom click action, using <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>:

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
<a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.

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
  
  

  





