---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionHeaderBar/"

title: "ion-header-bar"
header_sub_title: "Directive in module ionic"
doc: "ionHeaderBar"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/headerFooterBar.js#L6'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-header-bar



</h1>





Adds a fixed header bar above some content.

Can also be a subheader (lower down) if the 'bar-subheader' class is applied.
See [the header CSS docs](/docs/components/#subheader).








  
<pre>{
  "fileType": "js",
  "startingLine": 6,
  "file": "js/angular/directive/headerFooterBar.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionHeaderBar\n@module ionic\n@restrict E\n\n@description\nAdds a fixed header bar above some content.\n\nCan also be a subheader (lower down) if the 'bar-subheader' class is applied.\nSee [the header CSS docs](/docs/components/#subheader).\n\n@param {string=} align-title Where to align the title.\nAvaialble: 'left', 'right', or 'center'.  Defaults to 'center'.\n\n@usage\n```html\n<ion-header-bar align-title=\"left\" class=\"bar-positive\">\n  <div class=\"buttons\">\n    <button class=\"button\" ng-click=\"doSomething()\">Left Button</button>\n  </div>\n  <h1 class=\"title\">Title!</h1>\n  <div class=\"buttons\">\n    <button class=\"button\">Right Button</button>\n  </div>\n</ion-header-bar>\n<ion-content>\n  Some content!\n</ion-content>\n```",
  "fileName": "headerFooterBar",
  "relativePath": "js/angular/directive/headerFooterBar.js",
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
        "startingLine": 6
      },
      {
        "tagDef": {
          "name": "name",
          "required": true
        },
        "tagName": "name",
        "description": "ionHeaderBar",
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
        "description": "E",
        "startingLine": 9
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "Adds a fixed header bar above some content.\n\nCan also be a subheader (lower down) if the 'bar-subheader' class is applied.\nSee [the header CSS docs](/docs/components/#subheader).",
        "startingLine": 11
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
        "description": "Where to align the title.\nAvaialble: 'left', 'right', or 'center'.  Defaults to 'center'.",
        "startingLine": 17,
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
        "name": "align-title"
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-header-bar align-title=\"left\" class=\"bar-positive\">\n  <div class=\"buttons\">\n    <button class=\"button\" ng-click=\"doSomething()\">Left Button</button>\n  </div>\n  <h1 class=\"title\">Title!</h1>\n  <div class=\"buttons\">\n    <button class=\"button\">Right Button</button>\n  </div>\n</ion-header-bar>\n<ion-content>\n  Some content!\n</ion-content>\n```",
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
          "startingLine": 6
        }
      ],
      "name": [
        {
          "tagDef": {
            "name": "name",
            "required": true
          },
          "tagName": "name",
          "description": "ionHeaderBar",
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
          "description": "E",
          "startingLine": 9
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "Adds a fixed header bar above some content.\n\nCan also be a subheader (lower down) if the 'bar-subheader' class is applied.\nSee [the header CSS docs](/docs/components/#subheader).",
          "startingLine": 11
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
          "description": "Where to align the title.\nAvaialble: 'left', 'right', or 'center'.  Defaults to 'center'.",
          "startingLine": 17,
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
          "name": "align-title"
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-header-bar align-title=\"left\" class=\"bar-positive\">\n  <div class=\"buttons\">\n    <button class=\"button\" ng-click=\"doSomething()\">Left Button</button>\n  </div>\n  <h1 class=\"title\">Title!</h1>\n  <div class=\"buttons\">\n    <button class=\"button\">Right Button</button>\n  </div>\n</ion-header-bar>\n<ion-content>\n  Some content!\n</ion-content>\n```",
          "startingLine": 20
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionHeaderBar",
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
      "description": "Where to align the title.\nAvaialble: 'left', 'right', or 'center'.  Defaults to 'center'.",
      "startingLine": 17,
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
      "name": "align-title"
    }
  ],
  "module": "ionic",
  "description": "Adds a fixed header bar above some content.\n\nCan also be a subheader (lower down) if the 'bar-subheader' class is applied.\nSee [the header CSS docs](/docs/components/#subheader).",
  "usage": "```html\n<ion-header-bar align-title=\"left\" class=\"bar-positive\">\n  <div class=\"buttons\">\n    <button class=\"button\" ng-click=\"doSomething()\">Left Button</button>\n  </div>\n  <h1 class=\"title\">Title!</h1>\n  <div class=\"buttons\">\n    <button class=\"button\">Right Button</button>\n  </div>\n</ion-header-bar>\n<ion-content>\n  Some content!\n</ion-content>\n```",
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
  "id": "module:ionic.directive:ionHeaderBar",
  "partialNames": [
    "ionHeaderBar",
    "directive:ionHeaderBar",
    "ionic.ionHeaderBar",
    "module:ionic.ionHeaderBar",
    "ionic.directive:ionHeaderBar",
    "module:ionic.directive:ionHeaderBar"
  ],
  "outputPath": "docs/nightly/api/directive/ionHeaderBar/index.md",
  "path": "api/directive/ionHeaderBar/",
  "searchTerms": {
    "titleWords": "ionHeaderBar",
    "keywords": "above adds align align-title also any api applied avaialble bar bar-positive bar-subheader be button buttons can center class content css defaults directive docs dosomething down fixed header headerfooterbar html if ionheaderbar ionic is js left md module ng-click or right see some subheader the title to where"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-header-bar align-title="left" class="bar-positive">
  <div class="buttons">
    <button class="button" ng-click="doSomething()">Left Button</button>
  </div>
  <h1 class="title">Title!</h1>
  <div class="buttons">
    <button class="button">Right Button</button>
  </div>
</ion-header-bar>
<ion-content>
  Some content!
</ion-content>
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
        align-title
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Where to align the title.
Avaialble: &#39;left&#39;, &#39;right&#39;, or &#39;center&#39;.  Defaults to &#39;center&#39;.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





