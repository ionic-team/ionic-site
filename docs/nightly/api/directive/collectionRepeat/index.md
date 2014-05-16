---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/collectionRepeat/"

title: "collection-repeat"
header_sub_title: "Directive in module ionic"
doc: "collectionRepeat"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/collectionRepeat.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  collection-repeat



</h1>


{% include codepen.html id="mFygh" %}




`collection-repeat` is a directive that allows you to render lists with
thousands of items in them, and experience little to no performance penalty.

Demo:

The directive renders onto the screen only the items that should be currently visible.
So if you have 1,000 items in your list but only ten fit on your screen,
collection-repeat will only render into the DOM the ten that are in the current
scroll position.

Here are a few things to keep in mind while using collection-repeat:

1. The data supplied to collection-repeat must be an array.
2. You must explicitly tell the directive what size your items will be in the DOM, using directive attributes. Pixel amounts or percentages are allowed (see below).
3. The elements rendered will be absolutely positioned: be sure to let your CSS work with
this (see below).
4. Keep the HTML of your repeated elements as simple as possible. As the user scrolls down,
elements will be lazily compiled. Resultingly, the more complicated your elements, the more
likely it is that the on-demand compilation will cause some jerkiness in the user's scrolling.
5. The more elements you render on the screen per row, the more likelihood for scrolling to
slow down. It is recommended to keep grids of collection-repeat list elements at 3-wide or less.
For example, if you have a gallery of images just set their width to 33%.
6. Each collection-repeat list will take up all of its parent scrollView's space.
If you wish to have multiple lists on one page, put each list within its own
<a href="/docs/nightly/api/directive/ionScroll/">ionScroll</a> container.
7. You should not use the ng-show and ng-hide directives on your ion-content/ion-scroll elements that have a collection-repeat inside.  ng-show and ng-hide apply the `display: none` css rule to the content's style, causing the scrollView to read the width and height of the content as 0.  Resultingly, collection-repeat will render elements that have just been un-hidden incorrectly.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/collectionRepeat.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@module ionic\n@name collectionRepeat\n@restrict A\n@codepen mFygh\n@description\n`collection-repeat` is a directive that allows you to render lists with\nthousands of items in them, and experience little to no performance penalty.\n\nDemo:\n\nThe directive renders onto the screen only the items that should be currently visible.\nSo if you have 1,000 items in your list but only ten fit on your screen,\ncollection-repeat will only render into the DOM the ten that are in the current\nscroll position.\n\nHere are a few things to keep in mind while using collection-repeat:\n\n1. The data supplied to collection-repeat must be an array.\n2. You must explicitly tell the directive what size your items will be in the DOM, using directive attributes. Pixel amounts or percentages are allowed (see below).\n3. The elements rendered will be absolutely positioned: be sure to let your CSS work with\nthis (see below).\n4. Keep the HTML of your repeated elements as simple as possible. As the user scrolls down,\nelements will be lazily compiled. Resultingly, the more complicated your elements, the more\nlikely it is that the on-demand compilation will cause some jerkiness in the user's scrolling.\n5. The more elements you render on the screen per row, the more likelihood for scrolling to\nslow down. It is recommended to keep grids of collection-repeat list elements at 3-wide or less.\nFor example, if you have a gallery of images just set their width to 33%.\n6. Each collection-repeat list will take up all of its parent scrollView's space.\nIf you wish to have multiple lists on one page, put each list within its own\n<a href="/docs/nightly/api/directive/ionScroll/">ionScroll</a> container.\n7. You should not use the ng-show and ng-hide directives on your ion-content/ion-scroll elements that have a collection-repeat inside.  ng-show and ng-hide apply the `display: none` css rule to the content's style, causing the scrollView to read the width and height of the content as 0.  Resultingly, collection-repeat will render elements that have just been un-hidden incorrectly.\n\n\n@usage\n\n#### Basic Usage (single rows of items)\n\nNotice two things here: we use ng-style to set the height of the item to match\nwhat the repeater thinks our item height is.  Additionally, we add a css rule\nto make our item stretch to fit the full screen (since it will be absolutely\npositioned).\n\n```html\n<ion-content ng-controller=\"ContentCtrl\">\n  <div class=\"list\">\n    <div class=\"item my-item\"\n      collection-repeat=\"item in items\"\n      collection-item-width=\"'100%'\"\n      collection-item-height=\"getItemHeight(item, $index)\"\n      ng-style=\"{height: getItemHeight(item, $index)}\">\n      {% raw %}{{item}}{% endraw %}\n    </div>\n  </div>\n</div>\n```\n```js\nfunction ContentCtrl($scope) {\n  $scope.items = [];\n  for (var i = 0; i < 1000; i++) {\n    $scope.items.push('Item ' + i);\n  }\n\n  $scope.getItemHeight = function(item, index) {\n    //Make evenly indexed items be 10px taller, for the sake of example\n    return (index % 2) === 0 ? 50 : 60;\n  };\n}\n```\n```css\n.my-item {\n  left: 0;\n  right: 0;\n}\n```\n\n#### Grid Usage (three items per row)\n\n```html\n<ion-content>\n  <div class=\"item item-avatar my-image-item\"\n    collection-repeat=\"image in images\"\n    collection-item-width=\"'33%'\"\n    collection-item-height=\"'33%'\">\n    <img ng-src=\"{{image.src}}\">\n  </div>\n</ion-content>\n```\n```css\n.my-image-item {\n  height: 33%;\n  width: 33%;\n}\n```\n\n@param {expression} collection-repeat The expression indicating how to enumerate a collection. These\n  formats are currently supported:\n\n  * `variable in expression` – where variable is the user defined loop variable and `expression`\n    is a scope expression giving the collection to enumerate.\n\n    For example: `album in artist.albums`.\n\n  * `variable in expression track by tracking_expression` – You can also provide an optional tracking function\n    which can be used to associate the objects in the collection with the DOM elements. If no tracking function\n    is specified the collection-repeat associates elements by identity in the collection. It is an error to have\n    more than one tracking function to resolve to the same key. (This would mean that two distinct objects are\n    mapped to the same DOM element, which is not possible.)  Filters should be applied to the expression,\n    before specifying a tracking expression.\n\n    For example: `item in items` is equivalent to `item in items track by $id(item)'. This implies that the DOM elements\n    will be associated by item identity in the array.\n\n    For example: `item in items track by $id(item)`. A built in `$id()` function can be used to assign a unique\n    `$$hashKey` property to each item in the array. This property is then used as a key to associated DOM elements\n    with the corresponding item in the array by identity. Moving the same object in array would move the DOM\n    element in the same way in the DOM.\n\n    For example: `item in items track by item.id` is a typical pattern when the items come from the database. In this\n    case the object identity does not matter. Two objects are considered equivalent as long as their `id`\n    property is same.\n\n    For example: `item in items | filter:searchText track by item.id` is a pattern that might be used to apply a filter\n    to items in conjunction with a tracking expression.\n\n@param {expression} collection-item-width The width of the repeated element.  Can be a number (in pixels) or a percentage.\n@param {expression} collection-item-height The height of the repeated element.  Can be a number (in pixels), or a percentage.\n",
  "fileName": "collectionRepeat",
  "relativePath": "js/angular/directive/collectionRepeat.js",
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
          "name": "module"
        },
        "tagName": "module",
        "description": "ionic",
        "startingLine": 2
      },
      {
        "tagDef": {
          "name": "name",
          "required": true
        },
        "tagName": "name",
        "description": "collectionRepeat",
        "startingLine": 3
      },
      {
        "tagDef": {
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "A",
        "startingLine": 4
      },
      {
        "tagDef": {
          "name": "codepen"
        },
        "tagName": "codepen",
        "description": "mFygh",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "`collection-repeat` is a directive that allows you to render lists with\nthousands of items in them, and experience little to no performance penalty.\n\nDemo:\n\nThe directive renders onto the screen only the items that should be currently visible.\nSo if you have 1,000 items in your list but only ten fit on your screen,\ncollection-repeat will only render into the DOM the ten that are in the current\nscroll position.\n\nHere are a few things to keep in mind while using collection-repeat:\n\n1. The data supplied to collection-repeat must be an array.\n2. You must explicitly tell the directive what size your items will be in the DOM, using directive attributes. Pixel amounts or percentages are allowed (see below).\n3. The elements rendered will be absolutely positioned: be sure to let your CSS work with\nthis (see below).\n4. Keep the HTML of your repeated elements as simple as possible. As the user scrolls down,\nelements will be lazily compiled. Resultingly, the more complicated your elements, the more\nlikely it is that the on-demand compilation will cause some jerkiness in the user's scrolling.\n5. The more elements you render on the screen per row, the more likelihood for scrolling to\nslow down. It is recommended to keep grids of collection-repeat list elements at 3-wide or less.\nFor example, if you have a gallery of images just set their width to 33%.\n6. Each collection-repeat list will take up all of its parent scrollView's space.\nIf you wish to have multiple lists on one page, put each list within its own\n<a href="/docs/nightly/api/directive/ionScroll/">ionScroll</a> container.\n7. You should not use the ng-show and ng-hide directives on your ion-content/ion-scroll elements that have a collection-repeat inside.  ng-show and ng-hide apply the `display: none` css rule to the content's style, causing the scrollView to read the width and height of the content as 0.  Resultingly, collection-repeat will render elements that have just been un-hidden incorrectly.",
        "startingLine": 6
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "#### Basic Usage (single rows of items)\n\nNotice two things here: we use ng-style to set the height of the item to match\nwhat the repeater thinks our item height is.  Additionally, we add a css rule\nto make our item stretch to fit the full screen (since it will be absolutely\npositioned).\n\n```html\n<ion-content ng-controller=\"ContentCtrl\">\n  <div class=\"list\">\n    <div class=\"item my-item\"\n      collection-repeat=\"item in items\"\n      collection-item-width=\"'100%'\"\n      collection-item-height=\"getItemHeight(item, $index)\"\n      ng-style=\"{height: getItemHeight(item, $index)}\">\n      {% raw %}{{item}}{% endraw %}\n    </div>\n  </div>\n</div>\n```\n```js\nfunction ContentCtrl($scope) {\n  $scope.items = [];\n  for (var i = 0; i < 1000; i++) {\n    $scope.items.push('Item ' + i);\n  }\n\n  $scope.getItemHeight = function(item, index) {\n    //Make evenly indexed items be 10px taller, for the sake of example\n    return (index % 2) === 0 ? 50 : 60;\n  };\n}\n```\n```css\n.my-item {\n  left: 0;\n  right: 0;\n}\n```\n\n#### Grid Usage (three items per row)\n\n```html\n<ion-content>\n  <div class=\"item item-avatar my-image-item\"\n    collection-repeat=\"image in images\"\n    collection-item-width=\"'33%'\"\n    collection-item-height=\"'33%'\">\n    <img ng-src=\"{{image.src}}\">\n  </div>\n</ion-content>\n```\n```css\n.my-image-item {\n  height: 33%;\n  width: 33%;\n}\n```",
        "startingLine": 35
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
        "description": "The expression indicating how to enumerate a collection. These\n  formats are currently supported:\n\n  * `variable in expression` – where variable is the user defined loop variable and `expression`\n    is a scope expression giving the collection to enumerate.\n\n    For example: `album in artist.albums`.\n\n  * `variable in expression track by tracking_expression` – You can also provide an optional tracking function\n    which can be used to associate the objects in the collection with the DOM elements. If no tracking function\n    is specified the collection-repeat associates elements by identity in the collection. It is an error to have\n    more than one tracking function to resolve to the same key. (This would mean that two distinct objects are\n    mapped to the same DOM element, which is not possible.)  Filters should be applied to the expression,\n    before specifying a tracking expression.\n\n    For example: `item in items` is equivalent to `item in items track by $id(item)'. This implies that the DOM elements\n    will be associated by item identity in the array.\n\n    For example: `item in items track by $id(item)`. A built in `$id()` function can be used to assign a unique\n    `$$hashKey` property to each item in the array. This property is then used as a key to associated DOM elements\n    with the corresponding item in the array by identity. Moving the same object in array would move the DOM\n    element in the same way in the DOM.\n\n    For example: `item in items track by item.id` is a typical pattern when the items come from the database. In this\n    case the object identity does not matter. Two objects are considered equivalent as long as their `id`\n    property is same.\n\n    For example: `item in items | filter:searchText track by item.id` is a pattern that might be used to apply a filter\n    to items in conjunction with a tracking expression.",
        "startingLine": 96,
        "typeExpression": "expression",
        "type": {
          "type": "NameExpression",
          "name": "expression"
        },
        "typeList": [
          "expression"
        ],
        "name": "collection-repeat"
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
        "description": "The width of the repeated element.  Can be a number (in pixels) or a percentage.",
        "startingLine": 126,
        "typeExpression": "expression",
        "type": {
          "type": "NameExpression",
          "name": "expression"
        },
        "typeList": [
          "expression"
        ],
        "name": "collection-item-width"
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
        "description": "The height of the repeated element.  Can be a number (in pixels), or a percentage.",
        "startingLine": 127,
        "typeExpression": "expression",
        "type": {
          "type": "NameExpression",
          "name": "expression"
        },
        "typeList": [
          "expression"
        ],
        "name": "collection-item-height"
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
      "module": [
        {
          "tagDef": {
            "name": "module"
          },
          "tagName": "module",
          "description": "ionic",
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
          "description": "collectionRepeat",
          "startingLine": 3
        }
      ],
      "restrict": [
        {
          "tagDef": {
            "name": "restrict"
          },
          "tagName": "restrict",
          "description": "A",
          "startingLine": 4
        }
      ],
      "codepen": [
        {
          "tagDef": {
            "name": "codepen"
          },
          "tagName": "codepen",
          "description": "mFygh",
          "startingLine": 5
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "`collection-repeat` is a directive that allows you to render lists with\nthousands of items in them, and experience little to no performance penalty.\n\nDemo:\n\nThe directive renders onto the screen only the items that should be currently visible.\nSo if you have 1,000 items in your list but only ten fit on your screen,\ncollection-repeat will only render into the DOM the ten that are in the current\nscroll position.\n\nHere are a few things to keep in mind while using collection-repeat:\n\n1. The data supplied to collection-repeat must be an array.\n2. You must explicitly tell the directive what size your items will be in the DOM, using directive attributes. Pixel amounts or percentages are allowed (see below).\n3. The elements rendered will be absolutely positioned: be sure to let your CSS work with\nthis (see below).\n4. Keep the HTML of your repeated elements as simple as possible. As the user scrolls down,\nelements will be lazily compiled. Resultingly, the more complicated your elements, the more\nlikely it is that the on-demand compilation will cause some jerkiness in the user's scrolling.\n5. The more elements you render on the screen per row, the more likelihood for scrolling to\nslow down. It is recommended to keep grids of collection-repeat list elements at 3-wide or less.\nFor example, if you have a gallery of images just set their width to 33%.\n6. Each collection-repeat list will take up all of its parent scrollView's space.\nIf you wish to have multiple lists on one page, put each list within its own\n<a href="/docs/nightly/api/directive/ionScroll/">ionScroll</a> container.\n7. You should not use the ng-show and ng-hide directives on your ion-content/ion-scroll elements that have a collection-repeat inside.  ng-show and ng-hide apply the `display: none` css rule to the content's style, causing the scrollView to read the width and height of the content as 0.  Resultingly, collection-repeat will render elements that have just been un-hidden incorrectly.",
          "startingLine": 6
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "#### Basic Usage (single rows of items)\n\nNotice two things here: we use ng-style to set the height of the item to match\nwhat the repeater thinks our item height is.  Additionally, we add a css rule\nto make our item stretch to fit the full screen (since it will be absolutely\npositioned).\n\n```html\n<ion-content ng-controller=\"ContentCtrl\">\n  <div class=\"list\">\n    <div class=\"item my-item\"\n      collection-repeat=\"item in items\"\n      collection-item-width=\"'100%'\"\n      collection-item-height=\"getItemHeight(item, $index)\"\n      ng-style=\"{height: getItemHeight(item, $index)}\">\n      {% raw %}{{item}}{% endraw %}\n    </div>\n  </div>\n</div>\n```\n```js\nfunction ContentCtrl($scope) {\n  $scope.items = [];\n  for (var i = 0; i < 1000; i++) {\n    $scope.items.push('Item ' + i);\n  }\n\n  $scope.getItemHeight = function(item, index) {\n    //Make evenly indexed items be 10px taller, for the sake of example\n    return (index % 2) === 0 ? 50 : 60;\n  };\n}\n```\n```css\n.my-item {\n  left: 0;\n  right: 0;\n}\n```\n\n#### Grid Usage (three items per row)\n\n```html\n<ion-content>\n  <div class=\"item item-avatar my-image-item\"\n    collection-repeat=\"image in images\"\n    collection-item-width=\"'33%'\"\n    collection-item-height=\"'33%'\">\n    <img ng-src=\"{{image.src}}\">\n  </div>\n</ion-content>\n```\n```css\n.my-image-item {\n  height: 33%;\n  width: 33%;\n}\n```",
          "startingLine": 35
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
          "description": "The expression indicating how to enumerate a collection. These\n  formats are currently supported:\n\n  * `variable in expression` – where variable is the user defined loop variable and `expression`\n    is a scope expression giving the collection to enumerate.\n\n    For example: `album in artist.albums`.\n\n  * `variable in expression track by tracking_expression` – You can also provide an optional tracking function\n    which can be used to associate the objects in the collection with the DOM elements. If no tracking function\n    is specified the collection-repeat associates elements by identity in the collection. It is an error to have\n    more than one tracking function to resolve to the same key. (This would mean that two distinct objects are\n    mapped to the same DOM element, which is not possible.)  Filters should be applied to the expression,\n    before specifying a tracking expression.\n\n    For example: `item in items` is equivalent to `item in items track by $id(item)'. This implies that the DOM elements\n    will be associated by item identity in the array.\n\n    For example: `item in items track by $id(item)`. A built in `$id()` function can be used to assign a unique\n    `$$hashKey` property to each item in the array. This property is then used as a key to associated DOM elements\n    with the corresponding item in the array by identity. Moving the same object in array would move the DOM\n    element in the same way in the DOM.\n\n    For example: `item in items track by item.id` is a typical pattern when the items come from the database. In this\n    case the object identity does not matter. Two objects are considered equivalent as long as their `id`\n    property is same.\n\n    For example: `item in items | filter:searchText track by item.id` is a pattern that might be used to apply a filter\n    to items in conjunction with a tracking expression.",
          "startingLine": 96,
          "typeExpression": "expression",
          "type": {
            "type": "NameExpression",
            "name": "expression"
          },
          "typeList": [
            "expression"
          ],
          "name": "collection-repeat"
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
          "description": "The width of the repeated element.  Can be a number (in pixels) or a percentage.",
          "startingLine": 126,
          "typeExpression": "expression",
          "type": {
            "type": "NameExpression",
            "name": "expression"
          },
          "typeList": [
            "expression"
          ],
          "name": "collection-item-width"
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
          "description": "The height of the repeated element.  Can be a number (in pixels), or a percentage.",
          "startingLine": 127,
          "typeExpression": "expression",
          "type": {
            "type": "NameExpression",
            "name": "expression"
          },
          "typeList": [
            "expression"
          ],
          "name": "collection-item-height"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "collectionRepeat",
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
      "description": "The expression indicating how to enumerate a collection. These\n  formats are currently supported:\n\n  * `variable in expression` – where variable is the user defined loop variable and `expression`\n    is a scope expression giving the collection to enumerate.\n\n    For example: `album in artist.albums`.\n\n  * `variable in expression track by tracking_expression` – You can also provide an optional tracking function\n    which can be used to associate the objects in the collection with the DOM elements. If no tracking function\n    is specified the collection-repeat associates elements by identity in the collection. It is an error to have\n    more than one tracking function to resolve to the same key. (This would mean that two distinct objects are\n    mapped to the same DOM element, which is not possible.)  Filters should be applied to the expression,\n    before specifying a tracking expression.\n\n    For example: `item in items` is equivalent to `item in items track by $id(item)'. This implies that the DOM elements\n    will be associated by item identity in the array.\n\n    For example: `item in items track by $id(item)`. A built in `$id()` function can be used to assign a unique\n    `$$hashKey` property to each item in the array. This property is then used as a key to associated DOM elements\n    with the corresponding item in the array by identity. Moving the same object in array would move the DOM\n    element in the same way in the DOM.\n\n    For example: `item in items track by item.id` is a typical pattern when the items come from the database. In this\n    case the object identity does not matter. Two objects are considered equivalent as long as their `id`\n    property is same.\n\n    For example: `item in items | filter:searchText track by item.id` is a pattern that might be used to apply a filter\n    to items in conjunction with a tracking expression.",
      "startingLine": 96,
      "typeExpression": "expression",
      "type": {
        "type": "NameExpression",
        "name": "expression"
      },
      "typeList": [
        "expression"
      ],
      "name": "collection-repeat"
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
      "description": "The width of the repeated element.  Can be a number (in pixels) or a percentage.",
      "startingLine": 126,
      "typeExpression": "expression",
      "type": {
        "type": "NameExpression",
        "name": "expression"
      },
      "typeList": [
        "expression"
      ],
      "name": "collection-item-width"
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
      "description": "The height of the repeated element.  Can be a number (in pixels), or a percentage.",
      "startingLine": 127,
      "typeExpression": "expression",
      "type": {
        "type": "NameExpression",
        "name": "expression"
      },
      "typeList": [
        "expression"
      ],
      "name": "collection-item-height"
    }
  ],
  "module": "ionic",
  "description": "`collection-repeat` is a directive that allows you to render lists with\nthousands of items in them, and experience little to no performance penalty.\n\nDemo:\n\nThe directive renders onto the screen only the items that should be currently visible.\nSo if you have 1,000 items in your list but only ten fit on your screen,\ncollection-repeat will only render into the DOM the ten that are in the current\nscroll position.\n\nHere are a few things to keep in mind while using collection-repeat:\n\n1. The data supplied to collection-repeat must be an array.\n2. You must explicitly tell the directive what size your items will be in the DOM, using directive attributes. Pixel amounts or percentages are allowed (see below).\n3. The elements rendered will be absolutely positioned: be sure to let your CSS work with\nthis (see below).\n4. Keep the HTML of your repeated elements as simple as possible. As the user scrolls down,\nelements will be lazily compiled. Resultingly, the more complicated your elements, the more\nlikely it is that the on-demand compilation will cause some jerkiness in the user's scrolling.\n5. The more elements you render on the screen per row, the more likelihood for scrolling to\nslow down. It is recommended to keep grids of collection-repeat list elements at 3-wide or less.\nFor example, if you have a gallery of images just set their width to 33%.\n6. Each collection-repeat list will take up all of its parent scrollView's space.\nIf you wish to have multiple lists on one page, put each list within its own\n<a href="/docs/nightly/api/directive/ionScroll/">ionScroll</a> container.\n7. You should not use the ng-show and ng-hide directives on your ion-content/ion-scroll elements that have a collection-repeat inside.  ng-show and ng-hide apply the `display: none` css rule to the content's style, causing the scrollView to read the width and height of the content as 0.  Resultingly, collection-repeat will render elements that have just been un-hidden incorrectly.",
  "usage": "#### Basic Usage (single rows of items)\n\nNotice two things here: we use ng-style to set the height of the item to match\nwhat the repeater thinks our item height is.  Additionally, we add a css rule\nto make our item stretch to fit the full screen (since it will be absolutely\npositioned).\n\n```html\n<ion-content ng-controller=\"ContentCtrl\">\n  <div class=\"list\">\n    <div class=\"item my-item\"\n      collection-repeat=\"item in items\"\n      collection-item-width=\"'100%'\"\n      collection-item-height=\"getItemHeight(item, $index)\"\n      ng-style=\"{height: getItemHeight(item, $index)}\">\n      {% raw %}{{item}}{% endraw %}\n    </div>\n  </div>\n</div>\n```\n```js\nfunction ContentCtrl($scope) {\n  $scope.items = [];\n  for (var i = 0; i < 1000; i++) {\n    $scope.items.push('Item ' + i);\n  }\n\n  $scope.getItemHeight = function(item, index) {\n    //Make evenly indexed items be 10px taller, for the sake of example\n    return (index % 2) === 0 ? 50 : 60;\n  };\n}\n```\n```css\n.my-item {\n  left: 0;\n  right: 0;\n}\n```\n\n#### Grid Usage (three items per row)\n\n```html\n<ion-content>\n  <div class=\"item item-avatar my-image-item\"\n    collection-repeat=\"image in images\"\n    collection-item-width=\"'33%'\"\n    collection-item-height=\"'33%'\">\n    <img ng-src=\"{{image.src}}\">\n  </div>\n</ion-content>\n```\n```css\n.my-image-item {\n  height: 33%;\n  width: 33%;\n}\n```",
  "docType": "directive",
  "area": "api",
  "restrict": {
    "element": false,
    "attribute": true,
    "cssClass": false,
    "comment": false
  },
  "element": "ANY",
  "priority": 0,
  "codepen": "mFygh",
  "id": "module:ionic.directive:collectionRepeat",
  "partialNames": [
    "collectionRepeat",
    "directive:collectionRepeat",
    "ionic.collectionRepeat",
    "module:ionic.collectionRepeat",
    "ionic.directive:collectionRepeat",
    "module:ionic.directive:collectionRepeat"
  ],
  "outputPath": "docs/nightly/api/directive/collectionRepeat/index.md",
  "path": "api/directive/collectionRepeat/",
  "searchTerms": {
    "titleWords": "collectionRepeat",
    "keywords": "$id $index $scope absolutely add additionally album albums all allowed allows also amounts an and any api applied apply are array artist as assign associate associated associates at attributes basic be been before below built but by can case cause causing class collection collection-item-height collection-item-width collection-repeat collectionrepeat come compilation compiled complicated conjunction considered container content contentctrl corresponding css current currently data database defined demo directive directives display distinct docs does dom down each element elements endraw enumerate equivalent error evenly example experience explicitly expression few filter filters fit for formats from full function gallery getitemheight giving grid grids have height here how html id identity if image images implies in incorrectly index indexed indicating inside into ion-content ionic ionscroll is it item item-avatar items its jerkiness js just keep key lazily left less let likelihood likely list lists little long loop make mapped match matter md mean mfygh might mind module more move moving multiple must my-image-item my-item ng-controller ng-hide ng-show ng-src ng-style no none not notice number object objects of on on-demand one only onto optional or our own page parent pattern penalty per percentage percentages performance pixel pixels position positioned possible property provide push put raw read recommended render rendered renders repeated repeater resolve resultingly return right row rows rule sake same scope screen scroll scrolling scrolls scrollview set should simple size slow so some space specified specifying src stretch style supplied supported sure take taller tell ten than that the their them then these things thinks this thousands to track tracking tracking_expression two typical un-hidden unique up usage use used user using variable visible way we what when where which while width will wish with within work would you your"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
#### Basic Usage (single rows of items)

Notice two things here: we use ng-style to set the height of the item to match
what the repeater thinks our item height is.  Additionally, we add a css rule
to make our item stretch to fit the full screen (since it will be absolutely
positioned).

```html
<ion-content ng-controller="ContentCtrl">
  <div class="list">
    <div class="item my-item"
      collection-repeat="item in items"
      collection-item-width="'100%'"
      collection-item-height="getItemHeight(item, $index)"
      ng-style="{height: getItemHeight(item, $index)}">
      {% raw %}{{item}}{% endraw %}
    </div>
  </div>
</div>
```
```js
function ContentCtrl($scope) {
  $scope.items = [];
  for (var i = 0; i < 1000; i++) {
    $scope.items.push('Item ' + i);
  }

  $scope.getItemHeight = function(item, index) {
    //Make evenly indexed items be 10px taller, for the sake of example
    return (index % 2) === 0 ? 50 : 60;
  };
}
```
```css
.my-item {
  left: 0;
  right: 0;
}
```

#### Grid Usage (three items per row)

```html
<ion-content>
  <div class="item item-avatar my-image-item"
    collection-repeat="image in images"
    collection-item-width="'33%'"
    collection-item-height="'33%'">
    <img ng-src="{{image.src}}">
  </div>
</ion-content>
```
```css
.my-image-item {
  height: 33%;
  width: 33%;
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
        collection-repeat
        
        
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The expression indicating how to enumerate a collection. These
  formats are currently supported:</p>
<ul>
<li><p><code>variable in expression</code> – where variable is the user defined loop variable and <code>expression</code>
is a scope expression giving the collection to enumerate.</p>
<p>For example: <code>album in artist.albums</code>.</p>
</li>
<li><p><code>variable in expression track by tracking_expression</code> – You can also provide an optional tracking function
which can be used to associate the objects in the collection with the DOM elements. If no tracking function
is specified the collection-repeat associates elements by identity in the collection. It is an error to have
more than one tracking function to resolve to the same key. (This would mean that two distinct objects are
mapped to the same DOM element, which is not possible.)  Filters should be applied to the expression,
before specifying a tracking expression.</p>
<p>For example: <code>item in items</code> is equivalent to `item in items track by $id(item)&#39;. This implies that the DOM elements
will be associated by item identity in the array.</p>
<p>For example: <code>item in items track by $id(item)</code>. A built in <code>$id()</code> function can be used to assign a unique
<code>$$hashKey</code> property to each item in the array. This property is then used as a key to associated DOM elements
with the corresponding item in the array by identity. Moving the same object in array would move the DOM
element in the same way in the DOM.</p>
<p>For example: <code>item in items track by item.id</code> is a typical pattern when the items come from the database. In this
case the object identity does not matter. Two objects are considered equivalent as long as their <code>id</code>
property is same.</p>
<p>For example: <code>item in items | filter:searchText track by item.id</code> is a pattern that might be used to apply a filter
to items in conjunction with a tracking expression.</p>
</li>
</ul>

        
      </td>
    </tr>
    
    <tr>
      <td>
        collection-item-width
        
        
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The width of the repeated element.  Can be a number (in pixels) or a percentage.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        collection-item-height
        
        
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The height of the repeated element.  Can be a number (in pixels), or a percentage.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





