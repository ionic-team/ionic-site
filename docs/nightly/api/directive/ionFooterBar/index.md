---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionFooterBar/"

title: "ion-footer-bar"
header_sub_title: "Directive in module ionic"
doc: "ionFooterBar"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/headerFooterBar.js#L39'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-footer-bar



</h1>





Adds a fixed footer bar below some content.

Can also be a subfooter (higher up) if the 'bar-subfooter' class is applied.
See [the footer CSS docs](/docs/components/#footer).








  
<pre>{
  "fileType": "js",
  "startingLine": 39,
  "file": "js/angular/directive/headerFooterBar.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionFooterBar\n@module ionic\n@restrict E\n\n@description\nAdds a fixed footer bar below some content.\n\nCan also be a subfooter (higher up) if the 'bar-subfooter' class is applied.\nSee [the footer CSS docs](/docs/components/#footer).\n\n@param {string=} align-title Where to align the title.\nAvaialble: 'left', 'right', or 'center'.  Defaults to 'center'.\n\n@usage\n```html\n<ion-content>\n  Some content!\n</ion-content>\n<ion-footer-bar align-title=\"left\" class=\"bar-assertive\">\n  <div class=\"buttons\">\n    <button class=\"button\">Left Button</button>\n  </div>\n  <h1 class=\"title\">Title!</h1>\n  <div class=\"buttons\" ng-click=\"doSomething()\">\n    <button class=\"button\">Right Button</button>\n  </div>\n</ion-footer-bar>\n```",
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
        "startingLine": 39
      },
      {
        "tagDef": {
          "name": "name",
          "required": true
        },
        "tagName": "name",
        "description": "ionFooterBar",
        "startingLine": 40
      },
      {
        "tagDef": {
          "name": "module"
        },
        "tagName": "module",
        "description": "ionic",
        "startingLine": 41
      },
      {
        "tagDef": {
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "E",
        "startingLine": 42
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "Adds a fixed footer bar below some content.\n\nCan also be a subfooter (higher up) if the 'bar-subfooter' class is applied.\nSee [the footer CSS docs](/docs/components/#footer).",
        "startingLine": 44
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
        "name": "align-title"
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-content>\n  Some content!\n</ion-content>\n<ion-footer-bar align-title=\"left\" class=\"bar-assertive\">\n  <div class=\"buttons\">\n    <button class=\"button\">Left Button</button>\n  </div>\n  <h1 class=\"title\">Title!</h1>\n  <div class=\"buttons\" ng-click=\"doSomething()\">\n    <button class=\"button\">Right Button</button>\n  </div>\n</ion-footer-bar>\n```",
        "startingLine": 53
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
          "startingLine": 39
        }
      ],
      "name": [
        {
          "tagDef": {
            "name": "name",
            "required": true
          },
          "tagName": "name",
          "description": "ionFooterBar",
          "startingLine": 40
        }
      ],
      "module": [
        {
          "tagDef": {
            "name": "module"
          },
          "tagName": "module",
          "description": "ionic",
          "startingLine": 41
        }
      ],
      "restrict": [
        {
          "tagDef": {
            "name": "restrict"
          },
          "tagName": "restrict",
          "description": "E",
          "startingLine": 42
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "Adds a fixed footer bar below some content.\n\nCan also be a subfooter (higher up) if the 'bar-subfooter' class is applied.\nSee [the footer CSS docs](/docs/components/#footer).",
          "startingLine": 44
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
          "name": "align-title"
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-content>\n  Some content!\n</ion-content>\n<ion-footer-bar align-title=\"left\" class=\"bar-assertive\">\n  <div class=\"buttons\">\n    <button class=\"button\">Left Button</button>\n  </div>\n  <h1 class=\"title\">Title!</h1>\n  <div class=\"buttons\" ng-click=\"doSomething()\">\n    <button class=\"button\">Right Button</button>\n  </div>\n</ion-footer-bar>\n```",
          "startingLine": 53
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionFooterBar",
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
      "name": "align-title"
    }
  ],
  "module": "ionic",
  "description": "Adds a fixed footer bar below some content.\n\nCan also be a subfooter (higher up) if the 'bar-subfooter' class is applied.\nSee [the footer CSS docs](/docs/components/#footer).",
  "usage": "```html\n<ion-content>\n  Some content!\n</ion-content>\n<ion-footer-bar align-title=\"left\" class=\"bar-assertive\">\n  <div class=\"buttons\">\n    <button class=\"button\">Left Button</button>\n  </div>\n  <h1 class=\"title\">Title!</h1>\n  <div class=\"buttons\" ng-click=\"doSomething()\">\n    <button class=\"button\">Right Button</button>\n  </div>\n</ion-footer-bar>\n```",
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
  "id": "module:ionic.directive:ionFooterBar",
  "partialNames": [
    "ionFooterBar",
    "directive:ionFooterBar",
    "ionic.ionFooterBar",
    "module:ionic.ionFooterBar",
    "ionic.directive:ionFooterBar",
    "module:ionic.directive:ionFooterBar"
  ],
  "outputPath": "docs/nightly/api/directive/ionFooterBar/index.md",
  "path": "api/directive/ionFooterBar/",
  "searchTerms": {
    "titleWords": "ionFooterBar",
    "keywords": "adds align align-title also any api applied avaialble bar bar-assertive bar-subfooter be below button buttons can center class content css defaults directive docs dosomething fixed footer headerfooterbar html if ionfooterbar ionic is js left md module ng-click or right see some subfooter the title to up where"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-content>
  Some content!
</ion-content>
<ion-footer-bar align-title="left" class="bar-assertive">
  <div class="buttons">
    <button class="button">Left Button</button>
  </div>
  <h1 class="title">Title!</h1>
  <div class="buttons" ng-click="doSomething()">
    <button class="button">Right Button</button>
  </div>
</ion-footer-bar>
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

  

  





