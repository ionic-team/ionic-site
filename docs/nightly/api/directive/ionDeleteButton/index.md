---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionDeleteButton/"

title: "ion-delete-button"
header_sub_title: "Directive in module ionic"
doc: "ionDeleteButton"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/itemDeleteButton.js#L4'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-delete-button


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionItem/"><code>ionItem</code></a>
</small>


</h1>














  
<pre>{
  "fileType": "js",
  "startingLine": 4,
  "file": "js/angular/directive/itemDeleteButton.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionDeleteButton\n@parent ionic.directive:ionItem\n@module ionic\n@restrict E\nCreates a delete button inside a list item, that is visible when the\n<a href="/docs/nightly/api/directive/ionList/">ionList parent's</a> `show-delete` evaluates to true or\n`$ionicListDelegate.showDelete(true)` is called.\n\nTakes any ionicon as a class.\n\nSee <a href="/docs/nightly/api/directive/ionList/"><code>ionList</code></a> for a complete example & explanation.\n\n@usage\n\n```html\n<ion-list show-delete=\"shouldShowDelete\">\n  <ion-item>\n    <ion-delete-button class=\"ion-minus-circled\"></ion-delete-button>\n    Hello, list item!\n  </ion-item>\n</ion-list>\n<ion-toggle ng-model=\"shouldShowDelete\">\n  Show Delete?\n</ion-toggle>\n```",
  "fileName": "itemDeleteButton",
  "relativePath": "js/angular/directive/itemDeleteButton.js",
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
        "startingLine": 4
      },
      {
        "tagDef": {
          "name": "name",
          "required": true
        },
        "tagName": "name",
        "description": "ionDeleteButton",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "parent"
        },
        "tagName": "parent",
        "description": "ionic.directive:ionItem",
        "startingLine": 6
      },
      {
        "tagDef": {
          "name": "module"
        },
        "tagName": "module",
        "description": "ionic",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "E\nCreates a delete button inside a list item, that is visible when the\n<a href="/docs/nightly/api/directive/ionList/">ionList parent's</a> `show-delete` evaluates to true or\n`$ionicListDelegate.showDelete(true)` is called.\n\nTakes any ionicon as a class.\n\nSee <a href="/docs/nightly/api/directive/ionList/"><code>ionList</code></a> for a complete example & explanation.",
        "startingLine": 8
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-list show-delete=\"shouldShowDelete\">\n  <ion-item>\n    <ion-delete-button class=\"ion-minus-circled\"></ion-delete-button>\n    Hello, list item!\n  </ion-item>\n</ion-list>\n<ion-toggle ng-model=\"shouldShowDelete\">\n  Show Delete?\n</ion-toggle>\n```",
        "startingLine": 17
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
          "startingLine": 4
        }
      ],
      "name": [
        {
          "tagDef": {
            "name": "name",
            "required": true
          },
          "tagName": "name",
          "description": "ionDeleteButton",
          "startingLine": 5
        }
      ],
      "parent": [
        {
          "tagDef": {
            "name": "parent"
          },
          "tagName": "parent",
          "description": "ionic.directive:ionItem",
          "startingLine": 6
        }
      ],
      "module": [
        {
          "tagDef": {
            "name": "module"
          },
          "tagName": "module",
          "description": "ionic",
          "startingLine": 7
        }
      ],
      "restrict": [
        {
          "tagDef": {
            "name": "restrict"
          },
          "tagName": "restrict",
          "description": "E\nCreates a delete button inside a list item, that is visible when the\n<a href="/docs/nightly/api/directive/ionList/">ionList parent's</a> `show-delete` evaluates to true or\n`$ionicListDelegate.showDelete(true)` is called.\n\nTakes any ionicon as a class.\n\nSee <a href="/docs/nightly/api/directive/ionList/"><code>ionList</code></a> for a complete example & explanation.",
          "startingLine": 8
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-list show-delete=\"shouldShowDelete\">\n  <ion-item>\n    <ion-delete-button class=\"ion-minus-circled\"></ion-delete-button>\n    Hello, list item!\n  </ion-item>\n</ion-list>\n<ion-toggle ng-model=\"shouldShowDelete\">\n  Show Delete?\n</ion-toggle>\n```",
          "startingLine": 17
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionDeleteButton",
  "module": "ionic",
  "usage": "```html\n<ion-list show-delete=\"shouldShowDelete\">\n  <ion-item>\n    <ion-delete-button class=\"ion-minus-circled\"></ion-delete-button>\n    Hello, list item!\n  </ion-item>\n</ion-list>\n<ion-toggle ng-model=\"shouldShowDelete\">\n  Show Delete?\n</ion-toggle>\n```",
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
  "id": "module:ionic.directive:ionDeleteButton",
  "partialNames": [
    "ionDeleteButton",
    "directive:ionDeleteButton",
    "ionic.ionDeleteButton",
    "module:ionic.ionDeleteButton",
    "ionic.directive:ionDeleteButton",
    "module:ionic.directive:ionDeleteButton"
  ],
  "outputPath": "docs/nightly/api/directive/ionDeleteButton/index.md",
  "path": "api/directive/ionDeleteButton/",
  "searchTerms": {
    "titleWords": "ionDeleteButton",
    "keywords": "$ioniclistdelegate any api as button called class complete creates delete directive docs evaluates example explanation for hello html inside ion-minus-circled iondeletebutton ionic ionicon ionlist is item itemdeletebutton js list md module ng-model or parent see shouldshowdelete show show-delete showdelete takes that the to true visible when"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-list show-delete="shouldShowDelete">
  <ion-item>
    <ion-delete-button class="ion-minus-circled"></ion-delete-button>
    Hello, list item!
  </ion-item>
</ion-list>
<ion-toggle ng-model="shouldShowDelete">
  Show Delete?
</ion-toggle>
```
  
  

  





