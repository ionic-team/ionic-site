---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionToggle/"

title: "ion-toggle"
header_sub_title: "Directive in module ionic"
doc: "ionToggle"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/toggle.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-toggle



</h1>


{% include codepen.html id="tfAzj" %}




A toggle is an animated switch which binds a given model to a boolean.

Allows dragging of the switch's nub.

The toggle behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]) otherwise.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/toggle.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionToggle\n@module ionic\n@codepen tfAzj\n@restrict E\n\n@description\nA toggle is an animated switch which binds a given model to a boolean.\n\nAllows dragging of the switch's nub.\n\nThe toggle behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]) otherwise.\n\n@param toggle-class {string=} Sets the CSS class on the inner `label.toggle` element created by the directive.\n\n@usage\nBelow is an example of a toggle directive which is wired up to the `airplaneMode` model\nand has the `toggle-calm` CSS class assigned to the inner element.\n\n```html\n<ion-toggle ng-model=\"airplaneMode\" toggle-class=\"toggle-calm\">Airplane Mode</ion-toggle>\n```",
  "fileName": "toggle",
  "relativePath": "js/angular/directive/toggle.js",
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
        "description": "ionToggle",
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
          "name": "codepen"
        },
        "tagName": "codepen",
        "description": "tfAzj",
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
        "description": "A toggle is an animated switch which binds a given model to a boolean.\n\nAllows dragging of the switch's nub.\n\nThe toggle behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]) otherwise.",
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
        "description": "Sets the CSS class on the inner `label.toggle` element created by the directive.",
        "startingLine": 14,
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
        "name": "toggle-class"
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "Below is an example of a toggle directive which is wired up to the `airplaneMode` model\nand has the `toggle-calm` CSS class assigned to the inner element.\n\n```html\n<ion-toggle ng-model=\"airplaneMode\" toggle-class=\"toggle-calm\">Airplane Mode</ion-toggle>\n```",
        "startingLine": 16
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
          "description": "ionToggle",
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
      "codepen": [
        {
          "tagDef": {
            "name": "codepen"
          },
          "tagName": "codepen",
          "description": "tfAzj",
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
          "description": "A toggle is an animated switch which binds a given model to a boolean.\n\nAllows dragging of the switch's nub.\n\nThe toggle behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]) otherwise.",
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
          "description": "Sets the CSS class on the inner `label.toggle` element created by the directive.",
          "startingLine": 14,
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
          "name": "toggle-class"
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "Below is an example of a toggle directive which is wired up to the `airplaneMode` model\nand has the `toggle-calm` CSS class assigned to the inner element.\n\n```html\n<ion-toggle ng-model=\"airplaneMode\" toggle-class=\"toggle-calm\">Airplane Mode</ion-toggle>\n```",
          "startingLine": 16
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionToggle",
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
      "description": "Sets the CSS class on the inner `label.toggle` element created by the directive.",
      "startingLine": 14,
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
      "name": "toggle-class"
    }
  ],
  "module": "ionic",
  "description": "A toggle is an animated switch which binds a given model to a boolean.\n\nAllows dragging of the switch's nub.\n\nThe toggle behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]) otherwise.",
  "usage": "Below is an example of a toggle directive which is wired up to the `airplaneMode` model\nand has the `toggle-calm` CSS class assigned to the inner element.\n\n```html\n<ion-toggle ng-model=\"airplaneMode\" toggle-class=\"toggle-calm\">Airplane Mode</ion-toggle>\n```",
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
  "codepen": "tfAzj",
  "id": "module:ionic.directive:ionToggle",
  "partialNames": [
    "ionToggle",
    "directive:ionToggle",
    "ionic.ionToggle",
    "module:ionic.ionToggle",
    "ionic.directive:ionToggle",
    "module:ionic.directive:ionToggle"
  ],
  "outputPath": "docs/nightly/api/directive/ionToggle/index.md",
  "path": "api/directive/ionToggle/",
  "searchTerms": {
    "titleWords": "ionToggle",
    "keywords": "airplanemode allows an and angularjs animated any api assigned behaves below binds boolean by checkbox class created css directive docs dragging element example given has html inner ionic iontoggle is js label like md mode model module ng-model nub of on org otherwise sets switch tfazj the to toggle toggle-calm toggle-class up which wired"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
Below is an example of a toggle directive which is wired up to the `airplaneMode` model
and has the `toggle-calm` CSS class assigned to the inner element.

```html
<ion-toggle ng-model="airplaneMode" toggle-class="toggle-calm">Airplane Mode</ion-toggle>
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
        toggle-class
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Sets the CSS class on the inner <code>label.toggle</code> element created by the directive.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





