---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionRefresher/"

title: "ion-refresher"
header_sub_title: "Directive in module ionic"
doc: "ionRefresher"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/refresher.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-refresher


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionContent/"><code>ionContent</code></a> or <a href="/docs/nightly/api/directive/ionScroll/"><code>ionScroll</code></a>
</small>


</h1>





Allows you to add pull-to-refresh to a scrollView.

Place it as the first child of your <a href="/docs/nightly/api/directive/ionContent/"><code>ionContent</code></a> or
<a href="/docs/nightly/api/directive/ionScroll/"><code>ionScroll</code></a> element.

When refreshing is complete, $broadcast the 'scroll.refreshComplete' event
from your controller.








  
<pre>{
  "fileType": "js",
  "startingLine": 2,
  "file": "js/angular/directive/refresher.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionRefresher\n@module ionic\n@restrict E\n@parent ionic.directive:ionContent, ionic.directive:ionScroll\n@description\nAllows you to add pull-to-refresh to a scrollView.\n\nPlace it as the first child of your <a href="/docs/nightly/api/directive/ionContent/"><code>ionContent</code></a> or\n<a href="/docs/nightly/api/directive/ionScroll/"><code>ionScroll</code></a> element.\n\nWhen refreshing is complete, $broadcast the 'scroll.refreshComplete' event\nfrom your controller.\n\n@usage\n\n```html\n<ion-content ng-controller=\"MyController\">\n  <ion-refresher\n    pulling-text=\"Pull to refresh...\"\n    on-refresh=\"doRefresh()\">\n  </ion-refresher>\n  <ion-list>\n    <ion-item ng-repeat=\"item in items\"></ion-item>\n  </ion-list>\n</ion-content>\n```\n```js\nangular.module('testApp', ['ionic'])\n.controller('MyController', function($scope, $http) {\n  $scope.items = [1,2,3];\n  $scope.doRefresh = function() {\n    $http.get('/new-items')\n     .success(function(newItems) {\n       $scope.items = newItems;\n     })\n     .finally(function() {\n       // Stop the ion-refresher from spinning\n       $scope.$broadcast('scroll.refreshComplete');\n     });\n  };\n});\n```\n\n@param {expression=} on-refresh Called when the user pulls down enough and lets go\nof the refresher.\n@param {expression=} on-pulling Called when the user starts to pull down\non the refresher.\n@param {string=} pulling-icon The icon to display while the user is pulling down.\nDefault: 'ion-arrow-down-c'.\n@param {string=} pulling-text The text to display while the user is pulling down.\n@param {string=} refreshing-icon The icon to display after user lets go of the\nrefresher.\n@param {string=} refreshing-text The text to display after the user lets go of\nthe refresher.\n",
  "fileName": "refresher",
  "relativePath": "js/angular/directive/refresher.js",
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
        "startingLine": 2
      },
      {
        "tagDef": {
          "name": "name",
          "required": true
        },
        "tagName": "name",
        "description": "ionRefresher",
        "startingLine": 3
      },
      {
        "tagDef": {
          "name": "module"
        },
        "tagName": "module",
        "description": "ionic",
        "startingLine": 4
      },
      {
        "tagDef": {
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "E",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "parent"
        },
        "tagName": "parent",
        "description": "ionic.directive:ionContent, ionic.directive:ionScroll",
        "startingLine": 6
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "Allows you to add pull-to-refresh to a scrollView.\n\nPlace it as the first child of your <a href="/docs/nightly/api/directive/ionContent/"><code>ionContent</code></a> or\n<a href="/docs/nightly/api/directive/ionScroll/"><code>ionScroll</code></a> element.\n\nWhen refreshing is complete, $broadcast the 'scroll.refreshComplete' event\nfrom your controller.",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-content ng-controller=\"MyController\">\n  <ion-refresher\n    pulling-text=\"Pull to refresh...\"\n    on-refresh=\"doRefresh()\">\n  </ion-refresher>\n  <ion-list>\n    <ion-item ng-repeat=\"item in items\"></ion-item>\n  </ion-list>\n</ion-content>\n```\n```js\nangular.module('testApp', ['ionic'])\n.controller('MyController', function($scope, $http) {\n  $scope.items = [1,2,3];\n  $scope.doRefresh = function() {\n    $http.get('/new-items')\n     .success(function(newItems) {\n       $scope.items = newItems;\n     })\n     .finally(function() {\n       // Stop the ion-refresher from spinning\n       $scope.$broadcast('scroll.refreshComplete');\n     });\n  };\n});\n```",
        "startingLine": 16
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
        "description": "Called when the user pulls down enough and lets go\nof the refresher.",
        "startingLine": 46,
        "typeExpression": "expression=",
        "type": {
          "type": "NameExpression",
          "name": "expression",
          "optional": true
        },
        "typeList": [
          "expression"
        ],
        "optional": true,
        "name": "on-refresh"
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
        "description": "Called when the user starts to pull down\non the refresher.",
        "startingLine": 48,
        "typeExpression": "expression=",
        "type": {
          "type": "NameExpression",
          "name": "expression",
          "optional": true
        },
        "typeList": [
          "expression"
        ],
        "optional": true,
        "name": "on-pulling"
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
        "description": "The icon to display while the user is pulling down.\nDefault: 'ion-arrow-down-c'.",
        "startingLine": 50,
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
        "name": "pulling-icon"
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
        "description": "The text to display while the user is pulling down.",
        "startingLine": 52,
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
        "name": "pulling-text"
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
        "description": "The icon to display after user lets go of the\nrefresher.",
        "startingLine": 53,
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
        "name": "refreshing-icon"
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
        "description": "The text to display after the user lets go of\nthe refresher.",
        "startingLine": 55,
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
        "name": "refreshing-text"
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
          "startingLine": 2
        }
      ],
      "name": [
        {
          "tagDef": {
            "name": "name",
            "required": true
          },
          "tagName": "name",
          "description": "ionRefresher",
          "startingLine": 3
        }
      ],
      "module": [
        {
          "tagDef": {
            "name": "module"
          },
          "tagName": "module",
          "description": "ionic",
          "startingLine": 4
        }
      ],
      "restrict": [
        {
          "tagDef": {
            "name": "restrict"
          },
          "tagName": "restrict",
          "description": "E",
          "startingLine": 5
        }
      ],
      "parent": [
        {
          "tagDef": {
            "name": "parent"
          },
          "tagName": "parent",
          "description": "ionic.directive:ionContent, ionic.directive:ionScroll",
          "startingLine": 6
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "Allows you to add pull-to-refresh to a scrollView.\n\nPlace it as the first child of your <a href="/docs/nightly/api/directive/ionContent/"><code>ionContent</code></a> or\n<a href="/docs/nightly/api/directive/ionScroll/"><code>ionScroll</code></a> element.\n\nWhen refreshing is complete, $broadcast the 'scroll.refreshComplete' event\nfrom your controller.",
          "startingLine": 7
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-content ng-controller=\"MyController\">\n  <ion-refresher\n    pulling-text=\"Pull to refresh...\"\n    on-refresh=\"doRefresh()\">\n  </ion-refresher>\n  <ion-list>\n    <ion-item ng-repeat=\"item in items\"></ion-item>\n  </ion-list>\n</ion-content>\n```\n```js\nangular.module('testApp', ['ionic'])\n.controller('MyController', function($scope, $http) {\n  $scope.items = [1,2,3];\n  $scope.doRefresh = function() {\n    $http.get('/new-items')\n     .success(function(newItems) {\n       $scope.items = newItems;\n     })\n     .finally(function() {\n       // Stop the ion-refresher from spinning\n       $scope.$broadcast('scroll.refreshComplete');\n     });\n  };\n});\n```",
          "startingLine": 16
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
          "description": "Called when the user pulls down enough and lets go\nof the refresher.",
          "startingLine": 46,
          "typeExpression": "expression=",
          "type": {
            "type": "NameExpression",
            "name": "expression",
            "optional": true
          },
          "typeList": [
            "expression"
          ],
          "optional": true,
          "name": "on-refresh"
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
          "description": "Called when the user starts to pull down\non the refresher.",
          "startingLine": 48,
          "typeExpression": "expression=",
          "type": {
            "type": "NameExpression",
            "name": "expression",
            "optional": true
          },
          "typeList": [
            "expression"
          ],
          "optional": true,
          "name": "on-pulling"
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
          "description": "The icon to display while the user is pulling down.\nDefault: 'ion-arrow-down-c'.",
          "startingLine": 50,
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
          "name": "pulling-icon"
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
          "description": "The text to display while the user is pulling down.",
          "startingLine": 52,
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
          "name": "pulling-text"
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
          "description": "The icon to display after user lets go of the\nrefresher.",
          "startingLine": 53,
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
          "name": "refreshing-icon"
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
          "description": "The text to display after the user lets go of\nthe refresher.",
          "startingLine": 55,
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
          "name": "refreshing-text"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionRefresher",
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
      "description": "Called when the user pulls down enough and lets go\nof the refresher.",
      "startingLine": 46,
      "typeExpression": "expression=",
      "type": {
        "type": "NameExpression",
        "name": "expression",
        "optional": true
      },
      "typeList": [
        "expression"
      ],
      "optional": true,
      "name": "on-refresh"
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
      "description": "Called when the user starts to pull down\non the refresher.",
      "startingLine": 48,
      "typeExpression": "expression=",
      "type": {
        "type": "NameExpression",
        "name": "expression",
        "optional": true
      },
      "typeList": [
        "expression"
      ],
      "optional": true,
      "name": "on-pulling"
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
      "description": "The icon to display while the user is pulling down.\nDefault: 'ion-arrow-down-c'.",
      "startingLine": 50,
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
      "name": "pulling-icon"
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
      "description": "The text to display while the user is pulling down.",
      "startingLine": 52,
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
      "name": "pulling-text"
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
      "description": "The icon to display after user lets go of the\nrefresher.",
      "startingLine": 53,
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
      "name": "refreshing-icon"
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
      "description": "The text to display after the user lets go of\nthe refresher.",
      "startingLine": 55,
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
      "name": "refreshing-text"
    }
  ],
  "module": "ionic",
  "description": "Allows you to add pull-to-refresh to a scrollView.\n\nPlace it as the first child of your <a href="/docs/nightly/api/directive/ionContent/"><code>ionContent</code></a> or\n<a href="/docs/nightly/api/directive/ionScroll/"><code>ionScroll</code></a> element.\n\nWhen refreshing is complete, $broadcast the 'scroll.refreshComplete' event\nfrom your controller.",
  "usage": "```html\n<ion-content ng-controller=\"MyController\">\n  <ion-refresher\n    pulling-text=\"Pull to refresh...\"\n    on-refresh=\"doRefresh()\">\n  </ion-refresher>\n  <ion-list>\n    <ion-item ng-repeat=\"item in items\"></ion-item>\n  </ion-list>\n</ion-content>\n```\n```js\nangular.module('testApp', ['ionic'])\n.controller('MyController', function($scope, $http) {\n  $scope.items = [1,2,3];\n  $scope.doRefresh = function() {\n    $http.get('/new-items')\n     .success(function(newItems) {\n       $scope.items = newItems;\n     })\n     .finally(function() {\n       // Stop the ion-refresher from spinning\n       $scope.$broadcast('scroll.refreshComplete');\n     });\n  };\n});\n```",
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
    "ionic.directive:ionContent",
    "ionic.directive:ionScroll"
  ],
  "parentLinks": "<a href="/docs/nightly/api/directive/ionContent/"><code>ionContent</code></a> or <a href="/docs/nightly/api/directive/ionScroll/"><code>ionScroll</code></a>",
  "id": "module:ionic.directive:ionRefresher",
  "partialNames": [
    "ionRefresher",
    "directive:ionRefresher",
    "ionic.ionRefresher",
    "module:ionic.ionRefresher",
    "ionic.directive:ionRefresher",
    "module:ionic.directive:ionRefresher"
  ],
  "outputPath": "docs/nightly/api/directive/ionRefresher/index.md",
  "path": "api/directive/ionRefresher/",
  "searchTerms": {
    "titleWords": "ionRefresher",
    "keywords": "$broadcast $http $scope add after allows and angular any api as called child complete controller default directive display docs dorefresh down element enough event finally first from function get go html icon in ion-arrow-down-c ion-refresher ionic ionrefresher is it item items js lets md module mycontroller newitems ng-controller ng-repeat of on on-pulling on-refresh or place pull pull-to-refresh pulling pulling-icon pulling-text pulls refresh refreshcomplete refresher refreshing refreshing-icon refreshing-text scroll scrollview spinning starts stop success testapp text the to user when while you your"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-content ng-controller="MyController">
  <ion-refresher
    pulling-text="Pull to refresh..."
    on-refresh="doRefresh()">
  </ion-refresher>
  <ion-list>
    <ion-item ng-repeat="item in items"></ion-item>
  </ion-list>
</ion-content>
```
```js
angular.module('testApp', ['ionic'])
.controller('MyController', function($scope, $http) {
  $scope.items = [1,2,3];
  $scope.doRefresh = function() {
    $http.get('/new-items')
     .success(function(newItems) {
       $scope.items = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});
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
        on-refresh
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when the user pulls down enough and lets go
of the refresher.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-pulling
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when the user starts to pull down
on the refresher.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        pulling-icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon to display while the user is pulling down.
Default: &#39;ion-arrow-down-c&#39;.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        pulling-text
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The text to display while the user is pulling down.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        refreshing-icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon to display after user lets go of the
refresher.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        refreshing-text
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The text to display after the user lets go of
the refresher.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





