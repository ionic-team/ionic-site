---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionList/"

title: "ion-list"
header_sub_title: "Directive in module ionic"
doc: "ionList"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/list.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-list



<br/>
<small>
  Delegate: <a href="/docs/nightly/api/service/$ionicListDelegate/"><code>$ionicListDelegate</code></a>
</small>

</h1>


{% include codepen.html id="JsHjf" %}




The List is a widely used interface element in almost any mobile app, and can include
content ranging from basic text all the way to buttons, toggles, icons, and thumbnails.

Both the list, which contains items, and the list items themselves can be any HTML
element. The containing element requires the `list` class and each list item requires
the `item` class.

However, using the ionList and ionItem directives make it easy to support various
interaction modes such as swipe to edit, drag to reorder, and removing items.

Related: <a href="/docs/nightly/api/directive/ionItem/"><code>ionItem</code></a>, <a href="/docs/nightly/api/directive/ionOptionButton/"><code>ionOptionButton</code></a>
<a href="/docs/nightly/api/directive/ionReorderButton/"><code>ionReorderButton</code></a>, <a href="/docs/nightly/api/directive/ionDeleteButton/"><code>ionDeleteButton</code></a>, [`list CSS documentation`](/docs/components/#list).








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/list.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionList\n@module ionic\n@delegate ionic.service:$ionicListDelegate\n@codepen JsHjf\n@restrict E\n@description\nThe List is a widely used interface element in almost any mobile app, and can include\ncontent ranging from basic text all the way to buttons, toggles, icons, and thumbnails.\n\nBoth the list, which contains items, and the list items themselves can be any HTML\nelement. The containing element requires the `list` class and each list item requires\nthe `item` class.\n\nHowever, using the ionList and ionItem directives make it easy to support various\ninteraction modes such as swipe to edit, drag to reorder, and removing items.\n\nRelated: <a href="/docs/nightly/api/directive/ionItem/"><code>ionItem</code></a>, <a href="/docs/nightly/api/directive/ionOptionButton/"><code>ionOptionButton</code></a>\n<a href="/docs/nightly/api/directive/ionReorderButton/"><code>ionReorderButton</code></a>, <a href="/docs/nightly/api/directive/ionDeleteButton/"><code>ionDeleteButton</code></a>, [`list CSS documentation`](/docs/components/#list).\n\n@usage\n\nBasic Usage:\n\n```html\n<ion-list>\n  <ion-item ng-repeat=\"item in items\">\n    {% raw %}Hello, {{item}}!{% endraw %}\n  </ion-item>\n</ion-list>\n```\n\nAdvanced Usage: Thumbnails, Delete buttons, Reordering, Swiping\n\n```html\n<ion-list ng-controller=\"MyCtrl\"\n          show-delete=\"shouldShowDelete\"\n          show-reorder=\"shouldShowReorder\"\n          can-swipe=\"listCanSwipe\">\n  <ion-item ng-repeat=\"item in items\"\n            class=\"item-thumbnail-left\">\n\n    {% raw %}<img ng-src=\"{{item.img}}\">\n    <h2>{{item.title}}</h2>\n    <p>{{item.description}}</p>{% endraw %}\n    <ion-option-button class=\"button-positive\"\n                       ng-click=\"share(item)\">\n      Share\n    </ion-option-button>\n    <ion-option-button class=\"button-info\"\n                       ng-click=\"edit(item)\">\n      Edit\n    </ion-option-button>\n    <ion-delete-button class=\"ion-minus-circled\"\n                       ng-click=\"items.splice($index, 1)\">\n    </ion-delete-button>\n    <ion-reorder-button class=\"ion-navicon\"\n                        on-reorder=\"reorderItem(item, $fromIndex, $toIndex)\">\n    </ion-reorder-button>\n\n  </ion-item>\n</ion-list>\n```\n\n@param {string=} delegate-handle The handle used to identify this list with\n<a href="/docs/nightly/api/service/$ionicListDelegate/"><code>$ionicListDelegate</code></a>.\n@param show-delete {boolean=} Whether the delete buttons for the items in the list are\ncurrently shown or hidden.\n@param show-reorder {boolean=} Whether the reorder buttons for the items in the list are\ncurrently shown or hidden.\n@param can-swipe {boolean=} Whether the items in the list are allowed to be swiped to reveal\noption buttons. Default: true.",
  "fileName": "list",
  "relativePath": "js/angular/directive/list.js",
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
        "description": "ionList",
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
          "name": "delegate"
        },
        "tagName": "delegate",
        "description": "ionic.service:$ionicListDelegate",
        "startingLine": 4
      },
      {
        "tagDef": {
          "name": "codepen"
        },
        "tagName": "codepen",
        "description": "JsHjf",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "E",
        "startingLine": 6
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "The List is a widely used interface element in almost any mobile app, and can include\ncontent ranging from basic text all the way to buttons, toggles, icons, and thumbnails.\n\nBoth the list, which contains items, and the list items themselves can be any HTML\nelement. The containing element requires the `list` class and each list item requires\nthe `item` class.\n\nHowever, using the ionList and ionItem directives make it easy to support various\ninteraction modes such as swipe to edit, drag to reorder, and removing items.\n\nRelated: <a href="/docs/nightly/api/directive/ionItem/"><code>ionItem</code></a>, <a href="/docs/nightly/api/directive/ionOptionButton/"><code>ionOptionButton</code></a>\n<a href="/docs/nightly/api/directive/ionReorderButton/"><code>ionReorderButton</code></a>, <a href="/docs/nightly/api/directive/ionDeleteButton/"><code>ionDeleteButton</code></a>, [`list CSS documentation`](/docs/components/#list).",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "Basic Usage:\n\n```html\n<ion-list>\n  <ion-item ng-repeat=\"item in items\">\n    {% raw %}Hello, {{item}}!{% endraw %}\n  </ion-item>\n</ion-list>\n```\n\nAdvanced Usage: Thumbnails, Delete buttons, Reordering, Swiping\n\n```html\n<ion-list ng-controller=\"MyCtrl\"\n          show-delete=\"shouldShowDelete\"\n          show-reorder=\"shouldShowReorder\"\n          can-swipe=\"listCanSwipe\">\n  <ion-item ng-repeat=\"item in items\"\n            class=\"item-thumbnail-left\">\n\n    {% raw %}<img ng-src=\"{{item.img}}\">\n    <h2>{{item.title}}</h2>\n    <p>{{item.description}}</p>{% endraw %}\n    <ion-option-button class=\"button-positive\"\n                       ng-click=\"share(item)\">\n      Share\n    </ion-option-button>\n    <ion-option-button class=\"button-info\"\n                       ng-click=\"edit(item)\">\n      Edit\n    </ion-option-button>\n    <ion-delete-button class=\"ion-minus-circled\"\n                       ng-click=\"items.splice($index, 1)\">\n    </ion-delete-button>\n    <ion-reorder-button class=\"ion-navicon\"\n                        on-reorder=\"reorderItem(item, $fromIndex, $toIndex)\">\n    </ion-reorder-button>\n\n  </ion-item>\n</ion-list>\n```",
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
        "description": "The handle used to identify this list with\n<a href="/docs/nightly/api/service/$ionicListDelegate/"><code>$ionicListDelegate</code></a>.",
        "startingLine": 65,
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
        "description": "Whether the delete buttons for the items in the list are\ncurrently shown or hidden.",
        "startingLine": 67,
        "typeExpression": "boolean=",
        "type": {
          "type": "NameExpression",
          "name": "boolean",
          "optional": true
        },
        "typeList": [
          "boolean"
        ],
        "optional": true,
        "name": "show-delete"
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
        "description": "Whether the reorder buttons for the items in the list are\ncurrently shown or hidden.",
        "startingLine": 69,
        "typeExpression": "boolean=",
        "type": {
          "type": "NameExpression",
          "name": "boolean",
          "optional": true
        },
        "typeList": [
          "boolean"
        ],
        "optional": true,
        "name": "show-reorder"
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
        "description": "Whether the items in the list are allowed to be swiped to reveal\noption buttons. Default: true.",
        "startingLine": 71,
        "typeExpression": "boolean=",
        "type": {
          "type": "NameExpression",
          "name": "boolean",
          "optional": true
        },
        "typeList": [
          "boolean"
        ],
        "optional": true,
        "name": "can-swipe"
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
          "description": "ionList",
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
      "delegate": [
        {
          "tagDef": {
            "name": "delegate"
          },
          "tagName": "delegate",
          "description": "ionic.service:$ionicListDelegate",
          "startingLine": 4
        }
      ],
      "codepen": [
        {
          "tagDef": {
            "name": "codepen"
          },
          "tagName": "codepen",
          "description": "JsHjf",
          "startingLine": 5
        }
      ],
      "restrict": [
        {
          "tagDef": {
            "name": "restrict"
          },
          "tagName": "restrict",
          "description": "E",
          "startingLine": 6
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "The List is a widely used interface element in almost any mobile app, and can include\ncontent ranging from basic text all the way to buttons, toggles, icons, and thumbnails.\n\nBoth the list, which contains items, and the list items themselves can be any HTML\nelement. The containing element requires the `list` class and each list item requires\nthe `item` class.\n\nHowever, using the ionList and ionItem directives make it easy to support various\ninteraction modes such as swipe to edit, drag to reorder, and removing items.\n\nRelated: <a href="/docs/nightly/api/directive/ionItem/"><code>ionItem</code></a>, <a href="/docs/nightly/api/directive/ionOptionButton/"><code>ionOptionButton</code></a>\n<a href="/docs/nightly/api/directive/ionReorderButton/"><code>ionReorderButton</code></a>, <a href="/docs/nightly/api/directive/ionDeleteButton/"><code>ionDeleteButton</code></a>, [`list CSS documentation`](/docs/components/#list).",
          "startingLine": 7
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "Basic Usage:\n\n```html\n<ion-list>\n  <ion-item ng-repeat=\"item in items\">\n    {% raw %}Hello, {{item}}!{% endraw %}\n  </ion-item>\n</ion-list>\n```\n\nAdvanced Usage: Thumbnails, Delete buttons, Reordering, Swiping\n\n```html\n<ion-list ng-controller=\"MyCtrl\"\n          show-delete=\"shouldShowDelete\"\n          show-reorder=\"shouldShowReorder\"\n          can-swipe=\"listCanSwipe\">\n  <ion-item ng-repeat=\"item in items\"\n            class=\"item-thumbnail-left\">\n\n    {% raw %}<img ng-src=\"{{item.img}}\">\n    <h2>{{item.title}}</h2>\n    <p>{{item.description}}</p>{% endraw %}\n    <ion-option-button class=\"button-positive\"\n                       ng-click=\"share(item)\">\n      Share\n    </ion-option-button>\n    <ion-option-button class=\"button-info\"\n                       ng-click=\"edit(item)\">\n      Edit\n    </ion-option-button>\n    <ion-delete-button class=\"ion-minus-circled\"\n                       ng-click=\"items.splice($index, 1)\">\n    </ion-delete-button>\n    <ion-reorder-button class=\"ion-navicon\"\n                        on-reorder=\"reorderItem(item, $fromIndex, $toIndex)\">\n    </ion-reorder-button>\n\n  </ion-item>\n</ion-list>\n```",
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
          "description": "The handle used to identify this list with\n<a href="/docs/nightly/api/service/$ionicListDelegate/"><code>$ionicListDelegate</code></a>.",
          "startingLine": 65,
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
          "description": "Whether the delete buttons for the items in the list are\ncurrently shown or hidden.",
          "startingLine": 67,
          "typeExpression": "boolean=",
          "type": {
            "type": "NameExpression",
            "name": "boolean",
            "optional": true
          },
          "typeList": [
            "boolean"
          ],
          "optional": true,
          "name": "show-delete"
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
          "description": "Whether the reorder buttons for the items in the list are\ncurrently shown or hidden.",
          "startingLine": 69,
          "typeExpression": "boolean=",
          "type": {
            "type": "NameExpression",
            "name": "boolean",
            "optional": true
          },
          "typeList": [
            "boolean"
          ],
          "optional": true,
          "name": "show-reorder"
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
          "description": "Whether the items in the list are allowed to be swiped to reveal\noption buttons. Default: true.",
          "startingLine": 71,
          "typeExpression": "boolean=",
          "type": {
            "type": "NameExpression",
            "name": "boolean",
            "optional": true
          },
          "typeList": [
            "boolean"
          ],
          "optional": true,
          "name": "can-swipe"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionList",
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
      "description": "The handle used to identify this list with\n<a href="/docs/nightly/api/service/$ionicListDelegate/"><code>$ionicListDelegate</code></a>.",
      "startingLine": 65,
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
      "description": "Whether the delete buttons for the items in the list are\ncurrently shown or hidden.",
      "startingLine": 67,
      "typeExpression": "boolean=",
      "type": {
        "type": "NameExpression",
        "name": "boolean",
        "optional": true
      },
      "typeList": [
        "boolean"
      ],
      "optional": true,
      "name": "show-delete"
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
      "description": "Whether the reorder buttons for the items in the list are\ncurrently shown or hidden.",
      "startingLine": 69,
      "typeExpression": "boolean=",
      "type": {
        "type": "NameExpression",
        "name": "boolean",
        "optional": true
      },
      "typeList": [
        "boolean"
      ],
      "optional": true,
      "name": "show-reorder"
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
      "description": "Whether the items in the list are allowed to be swiped to reveal\noption buttons. Default: true.",
      "startingLine": 71,
      "typeExpression": "boolean=",
      "type": {
        "type": "NameExpression",
        "name": "boolean",
        "optional": true
      },
      "typeList": [
        "boolean"
      ],
      "optional": true,
      "name": "can-swipe"
    }
  ],
  "module": "ionic",
  "description": "The List is a widely used interface element in almost any mobile app, and can include\ncontent ranging from basic text all the way to buttons, toggles, icons, and thumbnails.\n\nBoth the list, which contains items, and the list items themselves can be any HTML\nelement. The containing element requires the `list` class and each list item requires\nthe `item` class.\n\nHowever, using the ionList and ionItem directives make it easy to support various\ninteraction modes such as swipe to edit, drag to reorder, and removing items.\n\nRelated: <a href="/docs/nightly/api/directive/ionItem/"><code>ionItem</code></a>, <a href="/docs/nightly/api/directive/ionOptionButton/"><code>ionOptionButton</code></a>\n<a href="/docs/nightly/api/directive/ionReorderButton/"><code>ionReorderButton</code></a>, <a href="/docs/nightly/api/directive/ionDeleteButton/"><code>ionDeleteButton</code></a>, [`list CSS documentation`](/docs/components/#list).",
  "usage": "Basic Usage:\n\n```html\n<ion-list>\n  <ion-item ng-repeat=\"item in items\">\n    {% raw %}Hello, {{item}}!{% endraw %}\n  </ion-item>\n</ion-list>\n```\n\nAdvanced Usage: Thumbnails, Delete buttons, Reordering, Swiping\n\n```html\n<ion-list ng-controller=\"MyCtrl\"\n          show-delete=\"shouldShowDelete\"\n          show-reorder=\"shouldShowReorder\"\n          can-swipe=\"listCanSwipe\">\n  <ion-item ng-repeat=\"item in items\"\n            class=\"item-thumbnail-left\">\n\n    {% raw %}<img ng-src=\"{{item.img}}\">\n    <h2>{{item.title}}</h2>\n    <p>{{item.description}}</p>{% endraw %}\n    <ion-option-button class=\"button-positive\"\n                       ng-click=\"share(item)\">\n      Share\n    </ion-option-button>\n    <ion-option-button class=\"button-info\"\n                       ng-click=\"edit(item)\">\n      Edit\n    </ion-option-button>\n    <ion-delete-button class=\"ion-minus-circled\"\n                       ng-click=\"items.splice($index, 1)\">\n    </ion-delete-button>\n    <ion-reorder-button class=\"ion-navicon\"\n                        on-reorder=\"reorderItem(item, $fromIndex, $toIndex)\">\n    </ion-reorder-button>\n\n  </ion-item>\n</ion-list>\n```",
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
  "delegate": "<a href="/docs/nightly/api/service/$ionicListDelegate/"><code>$ionicListDelegate</code></a>",
  "codepen": "JsHjf",
  "id": "module:ionic.directive:ionList",
  "partialNames": [
    "ionList",
    "directive:ionList",
    "ionic.ionList",
    "module:ionic.ionList",
    "ionic.directive:ionList",
    "module:ionic.directive:ionList"
  ],
  "outputPath": "docs/nightly/api/directive/ionList/index.md",
  "path": "api/directive/ionList/",
  "searchTerms": {
    "titleWords": "ionList",
    "keywords": "$fromindex $toindex advanced all allowed almost and any api app are as basic be both button-info button-positive buttons can can-swipe class containing contains content css currently default delegate-handle delete description directive directives docs documentation drag each easy edit element endraw for from handle hidden however html icons identify img in include interaction interface ion-minus-circled ion-navicon ionic ionitem ionlist is it item item-thumbnail-left items js jshjf list listcanswipe make md mobile modes module myctrl ng-click ng-controller ng-repeat ng-src on-reorder option or ranging raw related removing reorder reordering reorderitem requires reveal service share shouldshowdelete shouldshowreorder show-delete show-reorder shown splice such support swipe swiped swiping text the themselves this thumbnails title to toggles true usage used using various way whether which widely with"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
Basic Usage:

```html
<ion-list>
  <ion-item ng-repeat="item in items">
    {% raw %}Hello, {{item}}!{% endraw %}
  </ion-item>
</ion-list>
```

Advanced Usage: Thumbnails, Delete buttons, Reordering, Swiping

```html
<ion-list ng-controller="MyCtrl"
          show-delete="shouldShowDelete"
          show-reorder="shouldShowReorder"
          can-swipe="listCanSwipe">
  <ion-item ng-repeat="item in items"
            class="item-thumbnail-left">

    {% raw %}<img ng-src="{{item.img}}">
    <h2>{{item.title}}</h2>
    <p>{{item.description}}</p>{% endraw %}
    <ion-option-button class="button-positive"
                       ng-click="share(item)">
      Share
    </ion-option-button>
    <ion-option-button class="button-info"
                       ng-click="edit(item)">
      Edit
    </ion-option-button>
    <ion-delete-button class="ion-minus-circled"
                       ng-click="items.splice($index, 1)">
    </ion-delete-button>
    <ion-reorder-button class="ion-navicon"
                        on-reorder="reorderItem(item, $fromIndex, $toIndex)">
    </ion-reorder-button>

  </ion-item>
</ion-list>
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
        <p>The handle used to identify this list with
<a href="/docs/nightly/api/service/$ionicListDelegate/"><code>$ionicListDelegate</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        show-delete
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the delete buttons for the items in the list are
currently shown or hidden.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        show-reorder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the reorder buttons for the items in the list are
currently shown or hidden.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        can-swipe
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the items in the list are allowed to be swiped to reveal
option buttons. Default: true.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





