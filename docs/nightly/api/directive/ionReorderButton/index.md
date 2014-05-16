---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionReorderButton/"

title: "ion-reorder-button"
header_sub_title: "Directive in module ionic"
doc: "ionReorderButton"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/itemReorderButton.js#L5'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-reorder-button


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionItem/"><code>ionItem</code></a>
</small>


</h1>














  
<pre>{
  "fileType": "js",
  "startingLine": 5,
  "file": "js/angular/directive/itemReorderButton.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionReorderButton\n@parent ionic.directive:ionItem\n@module ionic\n@restrict E\nCreates a reorder button inside a list item, that is visible when the\n<a href="/docs/nightly/api/directive/ionList/">ionList parent's</a> `show-reorder` evaluates to true or\n`$ionicListDelegate.showReorder(true)` is called.\n\nCan be dragged to reorder items in the list. Takes any ionicon class.\n\nWhen an item reorder is complete, the `on-reorder` callback given in the attribute is called\n(see below).\n\nSee <a href="/docs/nightly/api/directive/ionList/"><code>ionList</code></a> for a complete example.\n\n@usage\n\n```html\n<ion-list ng-controller=\"MyCtrl\">\n  <ion-item ng-repeat=\"item in items\">\n    Item {{$index}}\n    <ion-reorder-button class=\"ion-navicon\"\n                        on-reorder=\"moveItem(item, $fromIndex, $toIndex)\">\n    </ion-reorder>\n  </ion-item>\n</ion-list>\n```\n```js\nfunction MyCtrl($scope) {\n  $scope.items = [1, 2, 3, 4];\n  $scope.moveItem = function(item, fromIndex, toIndex) {\n    //Move the item in the array\n    $scope.items.splice(fromIndex, 1);\n    $scope.items.splice(toIndex, 0, item);\n  };\n}\n```\n\n@param {expression=} on-reorder Expression to call when an item is reordered.\nParameters given: $fromIndex, $toIndex.",
  "fileName": "itemReorderButton",
  "relativePath": "js/angular/directive/itemReorderButton.js",
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
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "name",
          "required": true
        },
        "tagName": "name",
        "description": "ionReorderButton",
        "startingLine": 6
      },
      {
        "tagDef": {
          "name": "parent"
        },
        "tagName": "parent",
        "description": "ionic.directive:ionItem",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "module"
        },
        "tagName": "module",
        "description": "ionic",
        "startingLine": 8
      },
      {
        "tagDef": {
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "E\nCreates a reorder button inside a list item, that is visible when the\n<a href="/docs/nightly/api/directive/ionList/">ionList parent's</a> `show-reorder` evaluates to true or\n`$ionicListDelegate.showReorder(true)` is called.\n\nCan be dragged to reorder items in the list. Takes any ionicon class.\n\nWhen an item reorder is complete, the `on-reorder` callback given in the attribute is called\n(see below).\n\nSee <a href="/docs/nightly/api/directive/ionList/"><code>ionList</code></a> for a complete example.",
        "startingLine": 9
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-list ng-controller=\"MyCtrl\">\n  <ion-item ng-repeat=\"item in items\">\n    Item {{$index}}\n    <ion-reorder-button class=\"ion-navicon\"\n                        on-reorder=\"moveItem(item, $fromIndex, $toIndex)\">\n    </ion-reorder>\n  </ion-item>\n</ion-list>\n```\n```js\nfunction MyCtrl($scope) {\n  $scope.items = [1, 2, 3, 4];\n  $scope.moveItem = function(item, fromIndex, toIndex) {\n    //Move the item in the array\n    $scope.items.splice(fromIndex, 1);\n    $scope.items.splice(toIndex, 0, item);\n  };\n}\n```",
        "startingLine": 21
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
        "description": "Expression to call when an item is reordered.\nParameters given: $fromIndex, $toIndex.",
        "startingLine": 44,
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
        "name": "on-reorder"
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
          "startingLine": 5
        }
      ],
      "name": [
        {
          "tagDef": {
            "name": "name",
            "required": true
          },
          "tagName": "name",
          "description": "ionReorderButton",
          "startingLine": 6
        }
      ],
      "parent": [
        {
          "tagDef": {
            "name": "parent"
          },
          "tagName": "parent",
          "description": "ionic.directive:ionItem",
          "startingLine": 7
        }
      ],
      "module": [
        {
          "tagDef": {
            "name": "module"
          },
          "tagName": "module",
          "description": "ionic",
          "startingLine": 8
        }
      ],
      "restrict": [
        {
          "tagDef": {
            "name": "restrict"
          },
          "tagName": "restrict",
          "description": "E\nCreates a reorder button inside a list item, that is visible when the\n<a href="/docs/nightly/api/directive/ionList/">ionList parent's</a> `show-reorder` evaluates to true or\n`$ionicListDelegate.showReorder(true)` is called.\n\nCan be dragged to reorder items in the list. Takes any ionicon class.\n\nWhen an item reorder is complete, the `on-reorder` callback given in the attribute is called\n(see below).\n\nSee <a href="/docs/nightly/api/directive/ionList/"><code>ionList</code></a> for a complete example.",
          "startingLine": 9
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-list ng-controller=\"MyCtrl\">\n  <ion-item ng-repeat=\"item in items\">\n    Item {{$index}}\n    <ion-reorder-button class=\"ion-navicon\"\n                        on-reorder=\"moveItem(item, $fromIndex, $toIndex)\">\n    </ion-reorder>\n  </ion-item>\n</ion-list>\n```\n```js\nfunction MyCtrl($scope) {\n  $scope.items = [1, 2, 3, 4];\n  $scope.moveItem = function(item, fromIndex, toIndex) {\n    //Move the item in the array\n    $scope.items.splice(fromIndex, 1);\n    $scope.items.splice(toIndex, 0, item);\n  };\n}\n```",
          "startingLine": 21
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
          "description": "Expression to call when an item is reordered.\nParameters given: $fromIndex, $toIndex.",
          "startingLine": 44,
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
          "name": "on-reorder"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionReorderButton",
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
      "description": "Expression to call when an item is reordered.\nParameters given: $fromIndex, $toIndex.",
      "startingLine": 44,
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
      "name": "on-reorder"
    }
  ],
  "module": "ionic",
  "usage": "```html\n<ion-list ng-controller=\"MyCtrl\">\n  <ion-item ng-repeat=\"item in items\">\n    Item {{$index}}\n    <ion-reorder-button class=\"ion-navicon\"\n                        on-reorder=\"moveItem(item, $fromIndex, $toIndex)\">\n    </ion-reorder>\n  </ion-item>\n</ion-list>\n```\n```js\nfunction MyCtrl($scope) {\n  $scope.items = [1, 2, 3, 4];\n  $scope.moveItem = function(item, fromIndex, toIndex) {\n    //Move the item in the array\n    $scope.items.splice(fromIndex, 1);\n    $scope.items.splice(toIndex, 0, item);\n  };\n}\n```",
  "docType": "directive",
  "area": "api",
  "restrict": {
    "element": true,
    "attribute": false,
    "cssClass": true,
    "comment": false
  },
  "element": "ANY",
  "priority": 0,
  "parent": [
    "ionic.directive:ionItem"
  ],
  "parentLinks": "<a href="/docs/nightly/api/directive/ionItem/"><code>ionItem</code></a>",
  "id": "module:ionic.directive:ionReorderButton",
  "partialNames": [
    "ionReorderButton",
    "directive:ionReorderButton",
    "ionic.ionReorderButton",
    "module:ionic.ionReorderButton",
    "ionic.directive:ionReorderButton",
    "module:ionic.directive:ionReorderButton"
  ],
  "outputPath": "docs/nightly/api/directive/ionReorderButton/index.md",
  "path": "api/directive/ionReorderButton/",
  "searchTerms": {
    "titleWords": "ionReorderButton",
    "keywords": "$fromindex $ioniclistdelegate $scope $toindex an any api array attribute be below button call callback called can class complete creates directive docs dragged evaluates example expression for fromindex function given html in inside ion-navicon ionic ionicon ionlist ionreorderbutton is item itemreorderbutton items js list md module moveitem myctrl ng-controller ng-repeat on-reorder or parameters parent reorder reordered see show-reorder showreorder splice takes that the to toindex true visible when"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-list ng-controller="MyCtrl">
  <ion-item ng-repeat="item in items">
    Item {{$index}}
    <ion-reorder-button class="ion-navicon"
                        on-reorder="moveItem(item, $fromIndex, $toIndex)">
    </ion-reorder>
  </ion-item>
</ion-list>
```
```js
function MyCtrl($scope) {
  $scope.items = [1, 2, 3, 4];
  $scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
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
        on-reorder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Expression to call when an item is reordered.
Parameters given: $fromIndex, $toIndex.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





