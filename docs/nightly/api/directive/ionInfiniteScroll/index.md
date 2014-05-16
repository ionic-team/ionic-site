---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionInfiniteScroll/"

title: "ion-infinite-scroll"
header_sub_title: "Directive in module ionic"
doc: "ionInfiniteScroll"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/infiniteScroll.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-infinite-scroll


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionContent/"><code>ionContent</code></a> or <a href="/docs/nightly/api/directive/ionScroll/"><code>ionScroll</code></a>
</small>


</h1>





The ionInfiniteScroll directive allows you to call a function whenever
the user gets to the bottom of the page or near the bottom of the page.

The expression you pass in for `on-infinite` is called when the user scrolls
greater than `distance` away from the bottom of the content.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/infiniteScroll.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionInfiniteScroll\n@module ionic\n@parent ionic.directive:ionContent, ionic.directive:ionScroll\n@restrict E\n\n@description\nThe ionInfiniteScroll directive allows you to call a function whenever\nthe user gets to the bottom of the page or near the bottom of the page.\n\nThe expression you pass in for `on-infinite` is called when the user scrolls\ngreater than `distance` away from the bottom of the content.\n\n@param {expression} on-infinite What to call when the scroller reaches the\nbottom.\n@param {string=} distance The distance from the bottom that the scroll must\nreach to trigger the on-infinite expression. Default: 1%.\n@param {string=} icon The icon to show while loading. Default: 'ion-loading-d'.\n\n@usage\n```html\n<ion-content ng-controller=\"MyController\">\n  <ion-infinite-scroll\n    on-infinite=\"loadMore()\"\n    distance=\"1%\">\n  </ion-infinite-scroll>\n</ion-content>\n```\n```js\nfunction MyController($scope, $http) {\n  $scope.items = [];\n  $scope.loadMore = function() {\n    $http.get('/more-items').success(function(items) {\n      useItems(items);\n      $scope.$broadcast('scroll.infiniteScrollComplete');\n    });\n  };\n\n  $scope.$on('stateChangeSuccess', function() {\n    $scope.loadMore();\n  });\n}\n```\n\nAn easy to way to stop infinite scroll once there is no more data to load\nis to use angular's `ng-if` directive:\n\n```html\n<ion-infinite-scroll\n  ng-if=\"moreDataCanBeLoaded()\"\n  icon=\"ion-loading-c\"\n  on-infinite=\"loadMoreData()\">\n</ion-infinite-scroll>\n```",
  "fileName": "infiniteScroll",
  "relativePath": "js/angular/directive/infiniteScroll.js",
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
        "description": "ionInfiniteScroll",
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
          "name": "parent"
        },
        "tagName": "parent",
        "description": "ionic.directive:ionContent, ionic.directive:ionScroll",
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
          "name": "description"
        },
        "tagName": "description",
        "description": "The ionInfiniteScroll directive allows you to call a function whenever\nthe user gets to the bottom of the page or near the bottom of the page.\n\nThe expression you pass in for `on-infinite` is called when the user scrolls\ngreater than `distance` away from the bottom of the content.",
        "startingLine": 7
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
        "description": "What to call when the scroller reaches the\nbottom.",
        "startingLine": 14,
        "typeExpression": "expression",
        "type": {
          "type": "NameExpression",
          "name": "expression"
        },
        "typeList": [
          "expression"
        ],
        "name": "on-infinite"
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
        "description": "The distance from the bottom that the scroll must\nreach to trigger the on-infinite expression. Default: 1%.",
        "startingLine": 16,
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
        "name": "distance"
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
        "description": "The icon to show while loading. Default: 'ion-loading-d'.",
        "startingLine": 18,
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
        "name": "icon"
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-content ng-controller=\"MyController\">\n  <ion-infinite-scroll\n    on-infinite=\"loadMore()\"\n    distance=\"1%\">\n  </ion-infinite-scroll>\n</ion-content>\n```\n```js\nfunction MyController($scope, $http) {\n  $scope.items = [];\n  $scope.loadMore = function() {\n    $http.get('/more-items').success(function(items) {\n      useItems(items);\n      $scope.$broadcast('scroll.infiniteScrollComplete');\n    });\n  };\n\n  $scope.$on('stateChangeSuccess', function() {\n    $scope.loadMore();\n  });\n}\n```\n\nAn easy to way to stop infinite scroll once there is no more data to load\nis to use angular's `ng-if` directive:\n\n```html\n<ion-infinite-scroll\n  ng-if=\"moreDataCanBeLoaded()\"\n  icon=\"ion-loading-c\"\n  on-infinite=\"loadMoreData()\">\n</ion-infinite-scroll>\n```",
        "startingLine": 20
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
          "description": "ionInfiniteScroll",
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
      "parent": [
        {
          "tagDef": {
            "name": "parent"
          },
          "tagName": "parent",
          "description": "ionic.directive:ionContent, ionic.directive:ionScroll",
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
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "The ionInfiniteScroll directive allows you to call a function whenever\nthe user gets to the bottom of the page or near the bottom of the page.\n\nThe expression you pass in for `on-infinite` is called when the user scrolls\ngreater than `distance` away from the bottom of the content.",
          "startingLine": 7
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
          "description": "What to call when the scroller reaches the\nbottom.",
          "startingLine": 14,
          "typeExpression": "expression",
          "type": {
            "type": "NameExpression",
            "name": "expression"
          },
          "typeList": [
            "expression"
          ],
          "name": "on-infinite"
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
          "description": "The distance from the bottom that the scroll must\nreach to trigger the on-infinite expression. Default: 1%.",
          "startingLine": 16,
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
          "name": "distance"
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
          "description": "The icon to show while loading. Default: 'ion-loading-d'.",
          "startingLine": 18,
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
          "name": "icon"
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-content ng-controller=\"MyController\">\n  <ion-infinite-scroll\n    on-infinite=\"loadMore()\"\n    distance=\"1%\">\n  </ion-infinite-scroll>\n</ion-content>\n```\n```js\nfunction MyController($scope, $http) {\n  $scope.items = [];\n  $scope.loadMore = function() {\n    $http.get('/more-items').success(function(items) {\n      useItems(items);\n      $scope.$broadcast('scroll.infiniteScrollComplete');\n    });\n  };\n\n  $scope.$on('stateChangeSuccess', function() {\n    $scope.loadMore();\n  });\n}\n```\n\nAn easy to way to stop infinite scroll once there is no more data to load\nis to use angular's `ng-if` directive:\n\n```html\n<ion-infinite-scroll\n  ng-if=\"moreDataCanBeLoaded()\"\n  icon=\"ion-loading-c\"\n  on-infinite=\"loadMoreData()\">\n</ion-infinite-scroll>\n```",
          "startingLine": 20
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionInfiniteScroll",
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
      "description": "What to call when the scroller reaches the\nbottom.",
      "startingLine": 14,
      "typeExpression": "expression",
      "type": {
        "type": "NameExpression",
        "name": "expression"
      },
      "typeList": [
        "expression"
      ],
      "name": "on-infinite"
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
      "description": "The distance from the bottom that the scroll must\nreach to trigger the on-infinite expression. Default: 1%.",
      "startingLine": 16,
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
      "name": "distance"
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
      "description": "The icon to show while loading. Default: 'ion-loading-d'.",
      "startingLine": 18,
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
      "name": "icon"
    }
  ],
  "module": "ionic",
  "description": "The ionInfiniteScroll directive allows you to call a function whenever\nthe user gets to the bottom of the page or near the bottom of the page.\n\nThe expression you pass in for `on-infinite` is called when the user scrolls\ngreater than `distance` away from the bottom of the content.",
  "usage": "```html\n<ion-content ng-controller=\"MyController\">\n  <ion-infinite-scroll\n    on-infinite=\"loadMore()\"\n    distance=\"1%\">\n  </ion-infinite-scroll>\n</ion-content>\n```\n```js\nfunction MyController($scope, $http) {\n  $scope.items = [];\n  $scope.loadMore = function() {\n    $http.get('/more-items').success(function(items) {\n      useItems(items);\n      $scope.$broadcast('scroll.infiniteScrollComplete');\n    });\n  };\n\n  $scope.$on('stateChangeSuccess', function() {\n    $scope.loadMore();\n  });\n}\n```\n\nAn easy to way to stop infinite scroll once there is no more data to load\nis to use angular's `ng-if` directive:\n\n```html\n<ion-infinite-scroll\n  ng-if=\"moreDataCanBeLoaded()\"\n  icon=\"ion-loading-c\"\n  on-infinite=\"loadMoreData()\">\n</ion-infinite-scroll>\n```",
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
  "id": "module:ionic.directive:ionInfiniteScroll",
  "partialNames": [
    "ionInfiniteScroll",
    "directive:ionInfiniteScroll",
    "ionic.ionInfiniteScroll",
    "module:ionic.ionInfiniteScroll",
    "ionic.directive:ionInfiniteScroll",
    "module:ionic.directive:ionInfiniteScroll"
  ],
  "outputPath": "docs/nightly/api/directive/ionInfiniteScroll/index.md",
  "path": "api/directive/ionInfiniteScroll/",
  "searchTerms": {
    "titleWords": "ionInfiniteScroll",
    "keywords": "$broadcast $http $on $scope allows an angular any api away bottom call called content data default directive distance docs easy expression for from function get gets greater html icon in infinite infinitescroll infinitescrollcomplete ion-loading-c ion-loading-d ionic ioninfinitescroll is items js load loading loadmore loadmoredata md module more moredatacanbeloaded must mycontroller near ng-controller ng-if no of on-infinite once or page pass reach reaches scroll scroller scrolls show statechangesuccess stop success than that the there to trigger use useitems user way what when whenever while you"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-content ng-controller="MyController">
  <ion-infinite-scroll
    on-infinite="loadMore()"
    distance="1%">
  </ion-infinite-scroll>
</ion-content>
```
```js
function MyController($scope, $http) {
  $scope.items = [];
  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  $scope.$on('stateChangeSuccess', function() {
    $scope.loadMore();
  });
}
```

An easy to way to stop infinite scroll once there is no more data to load
is to use angular's `ng-if` directive:

```html
<ion-infinite-scroll
  ng-if="moreDataCanBeLoaded()"
  icon="ion-loading-c"
  on-infinite="loadMoreData()">
</ion-infinite-scroll>
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
        on-infinite
        
        
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>What to call when the scroller reaches the
bottom.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        distance
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The distance from the bottom that the scroll must
reach to trigger the on-infinite expression. Default: 1%.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon to show while loading. Default: &#39;ion-loading-d&#39;.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





