---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionSideMenus/"

title: "ion-side-menus"
header_sub_title: "Directive in module ionic"
doc: "ionSideMenus"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/sideMenus.js#L3'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-side-menus



<br/>
<small>
  Delegate: <a href="/docs/nightly/api/service/$ionicSideMenuDelegate/"><code>$ionicSideMenuDelegate</code></a>
</small>

</h1>





A container element for side menu(s) and the main content. Allows the left
and/or right side menu to be toggled by dragging the main content area side
to side.

![Side Menu](http://ionicframework.com.s3.amazonaws.com/docs/controllers/sidemenu.gif)

For more information on side menus, check out the documenation for
<a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> and
<a href="/docs/nightly/api/directive/ionSideMenu/"><code>ionSideMenu</code></a>.








  
<pre>{
  "fileType": "js",
  "startingLine": 3,
  "file": "js/angular/directive/sideMenus.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionSideMenus\n@module ionic\n@delegate ionic.service:$ionicSideMenuDelegate\n@restrict E\n\n@description\nA container element for side menu(s) and the main content. Allows the left\nand/or right side menu to be toggled by dragging the main content area side\nto side.\n\n![Side Menu](http://ionicframework.com.s3.amazonaws.com/docs/controllers/sidemenu.gif)\n\nFor more information on side menus, check out the documenation for\n<a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> and\n<a href="/docs/nightly/api/directive/ionSideMenu/"><code>ionSideMenu</code></a>.\n\n@usage\nTo use side menus, add an `<ion-side-menus>` parent element,\nan `<ion-side-menu-content>` for the center content,\nand one or more `<ion-side-menu>` directives.\n\n```html\n<ion-side-menus>\n  <!-- Center content -->\n  <ion-side-menu-content ng-controller=\"ContentController\">\n  </ion-side-menu-content>\n\n  <!-- Left menu -->\n  <ion-side-menu side=\"left\">\n  </ion-side-menu>\n\n  <!-- Right menu -->\n  <ion-side-menu side=\"right\">\n  </ion-side-menu>\n</ion-side-menus>\n```\n```js\nfunction ContentController($scope, $ionicSideMenuDelegate) {\n  $scope.toggleLeft = function() {\n    $ionicSideMenuDelegate.toggleLeft();\n  };\n}\n```\n\n@param {string=} delegate-handle The handle used to identify this side menu\nwith <a href="/docs/nightly/api/service/$ionicSideMenuDelegate/"><code>$ionicSideMenuDelegate</code></a>.\n",
  "fileName": "sideMenus",
  "relativePath": "js/angular/directive/sideMenus.js",
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
        "startingLine": 3
      },
      {
        "tagDef": {
          "name": "name",
          "required": true
        },
        "tagName": "name",
        "description": "ionSideMenus",
        "startingLine": 4
      },
      {
        "tagDef": {
          "name": "module"
        },
        "tagName": "module",
        "description": "ionic",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "delegate"
        },
        "tagName": "delegate",
        "description": "ionic.service:$ionicSideMenuDelegate",
        "startingLine": 6
      },
      {
        "tagDef": {
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "E",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "A container element for side menu(s) and the main content. Allows the left\nand/or right side menu to be toggled by dragging the main content area side\nto side.\n\n![Side Menu](http://ionicframework.com.s3.amazonaws.com/docs/controllers/sidemenu.gif)\n\nFor more information on side menus, check out the documenation for\n<a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> and\n<a href="/docs/nightly/api/directive/ionSideMenu/"><code>ionSideMenu</code></a>.",
        "startingLine": 9
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "To use side menus, add an `<ion-side-menus>` parent element,\nan `<ion-side-menu-content>` for the center content,\nand one or more `<ion-side-menu>` directives.\n\n```html\n<ion-side-menus>\n  <!-- Center content -->\n  <ion-side-menu-content ng-controller=\"ContentController\">\n  </ion-side-menu-content>\n\n  <!-- Left menu -->\n  <ion-side-menu side=\"left\">\n  </ion-side-menu>\n\n  <!-- Right menu -->\n  <ion-side-menu side=\"right\">\n  </ion-side-menu>\n</ion-side-menus>\n```\n```js\nfunction ContentController($scope, $ionicSideMenuDelegate) {\n  $scope.toggleLeft = function() {\n    $ionicSideMenuDelegate.toggleLeft();\n  };\n}\n```",
        "startingLine": 20
      },
      {
        "tagDef": {
          "name": "param",
          "multi": true,
          "docProperty": "params",
          "canHaveName": true,
          "canHaveType": true
        },
        "tagName": "param",
        "description": "The handle used to identify this side menu\nwith <a href="/docs/nightly/api/service/$ionicSideMenuDelegate/"><code>$ionicSideMenuDelegate</code></a>.",
        "startingLine": 48,
        "typeExpression": "string=",
        "type": {
          "type": "NameExpression",
          "name": "string",
          "optional": true
        },
        "typeList": [
          "string"
        ],
        "optional": true,
        "name": "delegate-handle"
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
          "startingLine": 3
        }
      ],
      "name": [
        {
          "tagDef": {
            "name": "name",
            "required": true
          },
          "tagName": "name",
          "description": "ionSideMenus",
          "startingLine": 4
        }
      ],
      "module": [
        {
          "tagDef": {
            "name": "module"
          },
          "tagName": "module",
          "description": "ionic",
          "startingLine": 5
        }
      ],
      "delegate": [
        {
          "tagDef": {
            "name": "delegate"
          },
          "tagName": "delegate",
          "description": "ionic.service:$ionicSideMenuDelegate",
          "startingLine": 6
        }
      ],
      "restrict": [
        {
          "tagDef": {
            "name": "restrict"
          },
          "tagName": "restrict",
          "description": "E",
          "startingLine": 7
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "A container element for side menu(s) and the main content. Allows the left\nand/or right side menu to be toggled by dragging the main content area side\nto side.\n\n![Side Menu](http://ionicframework.com.s3.amazonaws.com/docs/controllers/sidemenu.gif)\n\nFor more information on side menus, check out the documenation for\n<a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> and\n<a href="/docs/nightly/api/directive/ionSideMenu/"><code>ionSideMenu</code></a>.",
          "startingLine": 9
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "To use side menus, add an `<ion-side-menus>` parent element,\nan `<ion-side-menu-content>` for the center content,\nand one or more `<ion-side-menu>` directives.\n\n```html\n<ion-side-menus>\n  <!-- Center content -->\n  <ion-side-menu-content ng-controller=\"ContentController\">\n  </ion-side-menu-content>\n\n  <!-- Left menu -->\n  <ion-side-menu side=\"left\">\n  </ion-side-menu>\n\n  <!-- Right menu -->\n  <ion-side-menu side=\"right\">\n  </ion-side-menu>\n</ion-side-menus>\n```\n```js\nfunction ContentController($scope, $ionicSideMenuDelegate) {\n  $scope.toggleLeft = function() {\n    $ionicSideMenuDelegate.toggleLeft();\n  };\n}\n```",
          "startingLine": 20
        }
      ],
      "param": [
        {
          "tagDef": {
            "name": "param",
            "multi": true,
            "docProperty": "params",
            "canHaveName": true,
            "canHaveType": true
          },
          "tagName": "param",
          "description": "The handle used to identify this side menu\nwith <a href="/docs/nightly/api/service/$ionicSideMenuDelegate/"><code>$ionicSideMenuDelegate</code></a>.",
          "startingLine": 48,
          "typeExpression": "string=",
          "type": {
            "type": "NameExpression",
            "name": "string",
            "optional": true
          },
          "typeList": [
            "string"
          ],
          "optional": true,
          "name": "delegate-handle"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionSideMenus",
  "params": [
    {
      "tagDef": {
        "name": "param",
        "multi": true,
        "docProperty": "params",
        "canHaveName": true,
        "canHaveType": true
      },
      "tagName": "param",
      "description": "The handle used to identify this side menu\nwith <a href="/docs/nightly/api/service/$ionicSideMenuDelegate/"><code>$ionicSideMenuDelegate</code></a>.",
      "startingLine": 48,
      "typeExpression": "string=",
      "type": {
        "type": "NameExpression",
        "name": "string",
        "optional": true
      },
      "typeList": [
        "string"
      ],
      "optional": true,
      "name": "delegate-handle"
    }
  ],
  "module": "ionic",
  "description": "A container element for side menu(s) and the main content. Allows the left\nand/or right side menu to be toggled by dragging the main content area side\nto side.\n\n![Side Menu](http://ionicframework.com.s3.amazonaws.com/docs/controllers/sidemenu.gif)\n\nFor more information on side menus, check out the documenation for\n<a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> and\n<a href="/docs/nightly/api/directive/ionSideMenu/"><code>ionSideMenu</code></a>.",
  "usage": "To use side menus, add an `<ion-side-menus>` parent element,\nan `<ion-side-menu-content>` for the center content,\nand one or more `<ion-side-menu>` directives.\n\n```html\n<ion-side-menus>\n  <!-- Center content -->\n  <ion-side-menu-content ng-controller=\"ContentController\">\n  </ion-side-menu-content>\n\n  <!-- Left menu -->\n  <ion-side-menu side=\"left\">\n  </ion-side-menu>\n\n  <!-- Right menu -->\n  <ion-side-menu side=\"right\">\n  </ion-side-menu>\n</ion-side-menus>\n```\n```js\nfunction ContentController($scope, $ionicSideMenuDelegate) {\n  $scope.toggleLeft = function() {\n    $ionicSideMenuDelegate.toggleLeft();\n  };\n}\n```",
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
  "delegate": "<a href="/docs/nightly/api/service/$ionicSideMenuDelegate/"><code>$ionicSideMenuDelegate</code></a>",
  "id": "module:ionic.directive:ionSideMenus",
  "partialNames": [
    "ionSideMenus",
    "directive:ionSideMenus",
    "ionic.ionSideMenus",
    "module:ionic.ionSideMenus",
    "ionic.directive:ionSideMenus",
    "module:ionic.directive:ionSideMenus"
  ],
  "outputPath": "docs/nightly/api/directive/ionSideMenus/index.md",
  "path": "api/directive/ionSideMenus/",
  "undefined": [
    {
      "fileType": "js",
      "startingLine": 53,
      "file": "js/angular/directive/sideMenus.js",
      "basePath": "/home/travis/build/driftyco/ionic",
      "content": "@ngdoc demo\n@name ionSideMenus#simple\n@module sideMenusSimple\n@javascript\nvar app = angular.module('sideMenusSimple', ['ionic']);\napp.controller('SideMenusSimpleCtrl', function($scope, $ionicSideMenuDelegate) {\n\n  $scope.toggleLeft = function() {\n    $ionicSideMenuDelegate.toggleLeft();\n  };\n\n});\n\n@html\n<ion-view title=\"Side Menus Simple\" ng-controller=\"SideMenusSimpleCtrl\">\n  <ion-side-menus>\n\n    <ion-side-menu-content>\n      <ion-header-bar class=\"bar-positive\">\n        <div class=\"buttons\">\n          <div class=\"button button-clear\" ng-click=\"toggleLeft()\">\n            <i class=\"icon ion-navicon\"></i>\n          </div>\n        </div>\n      </ion-header-bar>\n      <ion-content class=\"padding\">\n        <p>Slide the content or press the button on the header to open a side menu.</p>\n      </ion-content>\n    </ion-side-menu-content>\n\n    <ion-side-menu side=\"left\">\n      <ion-header-bar class=\"bar-positive\">\n      </ion-header-bar>\n      <ion-content>\n        <a class=\"item\" ng-click=\"toggleLeft()\">\n          Close Menu\n        </a>\n      </ion-content>\n    </ion-side-menu>\n\n  </ion-side-menus>\n</ion-view>",
      "fileName": "sideMenus",
      "relativePath": "js/angular/directive/sideMenus.js",
      "tags": {
        "tags": [
          {
            "tagDef": {
              "name": "ngdoc",
              "required": true,
              "docProperty": "docType"
            },
            "tagName": "ngdoc",
            "description": "demo",
            "startingLine": 53
          },
          {
            "tagDef": {
              "name": "name",
              "required": true
            },
            "tagName": "name",
            "description": "ionSideMenus#simple",
            "startingLine": 54
          },
          {
            "tagDef": {
              "name": "module"
            },
            "tagName": "module",
            "description": "sideMenusSimple",
            "startingLine": 55
          },
          {
            "tagDef": {
              "name": "javascript"
            },
            "tagName": "javascript",
            "description": "var app = angular.module('sideMenusSimple', ['ionic']);\napp.controller('SideMenusSimpleCtrl', function($scope, $ionicSideMenuDelegate) {\n\n  $scope.toggleLeft = function() {\n    $ionicSideMenuDelegate.toggleLeft();\n  };\n\n});",
            "startingLine": 56
          },
          {
            "tagDef": {
              "name": "html"
            },
            "tagName": "html",
            "description": "<ion-view title=\"Side Menus Simple\" ng-controller=\"SideMenusSimpleCtrl\">\n  <ion-side-menus>\n\n    <ion-side-menu-content>\n      <ion-header-bar class=\"bar-positive\">\n        <div class=\"buttons\">\n          <div class=\"button button-clear\" ng-click=\"toggleLeft()\">\n            <i class=\"icon ion-navicon\"></i>\n          </div>\n        </div>\n      </ion-header-bar>\n      <ion-content class=\"padding\">\n        <p>Slide the content or press the button on the header to open a side menu.</p>\n      </ion-content>\n    </ion-side-menu-content>\n\n    <ion-side-menu side=\"left\">\n      <ion-header-bar class=\"bar-positive\">\n      </ion-header-bar>\n      <ion-content>\n        <a class=\"item\" ng-click=\"toggleLeft()\">\n          Close Menu\n        </a>\n      </ion-content>\n    </ion-side-menu>\n\n  </ion-side-menus>\n</ion-view>",
            "startingLine": 66
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
              "description": "demo",
              "startingLine": 53
            }
          ],
          "name": [
            {
              "tagDef": {
                "name": "name",
                "required": true
              },
              "tagName": "name",
              "description": "ionSideMenus#simple",
              "startingLine": 54
            }
          ],
          "module": [
            {
              "tagDef": {
                "name": "module"
              },
              "tagName": "module",
              "description": "sideMenusSimple",
              "startingLine": 55
            }
          ],
          "javascript": [
            {
              "tagDef": {
                "name": "javascript"
              },
              "tagName": "javascript",
              "description": "var app = angular.module('sideMenusSimple', ['ionic']);\napp.controller('SideMenusSimpleCtrl', function($scope, $ionicSideMenuDelegate) {\n\n  $scope.toggleLeft = function() {\n    $ionicSideMenuDelegate.toggleLeft();\n  };\n\n});",
              "startingLine": 56
            }
          ],
          "html": [
            {
              "tagDef": {
                "name": "html"
              },
              "tagName": "html",
              "description": "<ion-view title=\"Side Menus Simple\" ng-controller=\"SideMenusSimpleCtrl\">\n  <ion-side-menus>\n\n    <ion-side-menu-content>\n      <ion-header-bar class=\"bar-positive\">\n        <div class=\"buttons\">\n          <div class=\"button button-clear\" ng-click=\"toggleLeft()\">\n            <i class=\"icon ion-navicon\"></i>\n          </div>\n        </div>\n      </ion-header-bar>\n      <ion-content class=\"padding\">\n        <p>Slide the content or press the button on the header to open a side menu.</p>\n      </ion-content>\n    </ion-side-menu-content>\n\n    <ion-side-menu side=\"left\">\n      <ion-header-bar class=\"bar-positive\">\n      </ion-header-bar>\n      <ion-content>\n        <a class=\"item\" ng-click=\"toggleLeft()\">\n          Close Menu\n        </a>\n      </ion-content>\n    </ion-side-menu>\n\n  </ion-side-menus>\n</ion-view>",
              "startingLine": 66
            }
          ]
        },
        "badTags": [],
        "description": ""
      },
      "name": "simple",
      "module": "sideMenusSimple",
      "docType": "demo",
      "area": "api",
      "priority": 0,
      "javascript": "var app = angular.module('sideMenusSimple', ['ionic']);\napp.controller('SideMenusSimpleCtrl', function($scope, $ionicSideMenuDelegate) {\n\n  $scope.toggleLeft = function() {\n    $ionicSideMenuDelegate.toggleLeft();\n  };\n\n});",
      "html": "<ion-view title=\"Side Menus Simple\" ng-controller=\"SideMenusSimpleCtrl\">\n  <ion-side-menus>\n\n    <ion-side-menu-content>\n      <ion-header-bar class=\"bar-positive\">\n        <div class=\"buttons\">\n          <div class=\"button button-clear\" ng-click=\"toggleLeft()\">\n            <i class=\"icon ion-navicon\"></i>\n          </div>\n        </div>\n      </ion-header-bar>\n      <ion-content class=\"padding\">\n        <p>Slide the content or press the button on the header to open a side menu.</p>\n      </ion-content>\n    </ion-side-menu-content>\n\n    <ion-side-menu side=\"left\">\n      <ion-header-bar class=\"bar-positive\">\n      </ion-header-bar>\n      <ion-content>\n        <a class=\"item\" ng-click=\"toggleLeft()\">\n          Close Menu\n        </a>\n      </ion-content>\n    </ion-side-menu>\n\n  </ion-side-menus>\n</ion-view>",
      "id": "ionSideMenus#simple",
      "partialNames": [
        "ionSideMenus#simple",
        "simple"
      ],
      "isMember": true,
      "memberof": "ionSideMenus",
      "outputPath": "docs/nightly/api/demo/simple/index.md",
      "path": "api/demo/simple/"
    }
  ],
  "searchTerms": {
    "titleWords": "ionSideMenus",
    "keywords": "$ionicsidemenudelegate $scope add allows amazonaws an and any api area be by center check com container content contentcontroller delegate-handle directive directives docs documenation dragging element for function gif handle html identify information ionic ionsidemenus js left main md menu menus module more ng-controller on one or out parent right s3 service side sidemenus the this to toggled toggleleft use used with"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
To use side menus, add an `<ion-side-menus>` parent element,
an `<ion-side-menu-content>` for the center content,
and one or more `<ion-side-menu>` directives.

```html
<ion-side-menus>
  <!-- Center content -->
  <ion-side-menu-content ng-controller="ContentController">
  </ion-side-menu-content>

  <!-- Left menu -->
  <ion-side-menu side="left">
  </ion-side-menu>

  <!-- Right menu -->
  <ion-side-menu side="right">
  </ion-side-menu>
</ion-side-menus>
```
```js
function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
```
  
  
<h2 id="api" style="clear:both;">API</h2>

<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        delegate-handle
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The handle used to identify this side menu
with <a href="/docs/nightly/api/service/$ionicSideMenuDelegate/"><code>$ionicSideMenuDelegate</code></a>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





