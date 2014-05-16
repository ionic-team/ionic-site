---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionNavButtons/"

title: "ion-nav-buttons"
header_sub_title: "Directive in module ionic"
doc: "ionNavButtons"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navButtons.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-nav-buttons


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a>
</small>


</h1>





Use ionNavButtons to set the buttons on your <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>
from within an <a href="/docs/nightly/api/directive/ionView/"><code>ionView</code></a>.

Any buttons you declare will be placed onto the navbar's corresponding side,
and then destroyed when the user leaves their parent view.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/navButtons.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionNavButtons\n@module ionic\n@restrict E\n@parent ionNavView\n\n@description\nUse ionNavButtons to set the buttons on your <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>\nfrom within an <a href="/docs/nightly/api/directive/ionView/"><code>ionView</code></a>.\n\nAny buttons you declare will be placed onto the navbar's corresponding side,\nand then destroyed when the user leaves their parent view.\n\n@usage\n```html\n<ion-nav-bar>\n</ion-nav-bar>\n<ion-nav-view>\n  <ion-view>\n    <ion-nav-buttons side=\"left\">\n      <button class=\"button\" ng-click=\"doSomething()\">\n        I'm a button on the left of the navbar!\n      </button>\n    </ion-nav-buttons>\n    <ion-content>\n      Some super content here!\n    </ion-content>\n  </ion-view>\n</ion-nav-view>\n```\n\n@param {string} side The side to place the buttons on in the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>. Available: 'left' or 'right'.",
  "fileName": "navButtons",
  "relativePath": "js/angular/directive/navButtons.js",
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
        "description": "ionNavButtons",
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
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "E",
        "startingLine": 4
      },
      {
        "tagDef": {
          "name": "parent"
        },
        "tagName": "parent",
        "description": "ionNavView",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "Use ionNavButtons to set the buttons on your <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>\nfrom within an <a href="/docs/nightly/api/directive/ionView/"><code>ionView</code></a>.\n\nAny buttons you declare will be placed onto the navbar's corresponding side,\nand then destroyed when the user leaves their parent view.",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-nav-bar>\n</ion-nav-bar>\n<ion-nav-view>\n  <ion-view>\n    <ion-nav-buttons side=\"left\">\n      <button class=\"button\" ng-click=\"doSomething()\">\n        I'm a button on the left of the navbar!\n      </button>\n    </ion-nav-buttons>\n    <ion-content>\n      Some super content here!\n    </ion-content>\n  </ion-view>\n</ion-nav-view>\n```",
        "startingLine": 14
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
        "description": "The side to place the buttons on in the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>. Available: 'left' or 'right'.",
        "startingLine": 32,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "side"
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
          "description": "ionNavButtons",
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
      "restrict": [
        {
          "tagDef": {
            "name": "restrict"
          },
          "tagName": "restrict",
          "description": "E",
          "startingLine": 4
        }
      ],
      "parent": [
        {
          "tagDef": {
            "name": "parent"
          },
          "tagName": "parent",
          "description": "ionNavView",
          "startingLine": 5
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "Use ionNavButtons to set the buttons on your <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>\nfrom within an <a href="/docs/nightly/api/directive/ionView/"><code>ionView</code></a>.\n\nAny buttons you declare will be placed onto the navbar's corresponding side,\nand then destroyed when the user leaves their parent view.",
          "startingLine": 7
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-nav-bar>\n</ion-nav-bar>\n<ion-nav-view>\n  <ion-view>\n    <ion-nav-buttons side=\"left\">\n      <button class=\"button\" ng-click=\"doSomething()\">\n        I'm a button on the left of the navbar!\n      </button>\n    </ion-nav-buttons>\n    <ion-content>\n      Some super content here!\n    </ion-content>\n  </ion-view>\n</ion-nav-view>\n```",
          "startingLine": 14
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
          "description": "The side to place the buttons on in the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>. Available: 'left' or 'right'.",
          "startingLine": 32,
          "typeExpression": "string",
          "type": {
            "type": "NameExpression",
            "name": "string"
          },
          "typeList": [
            "string"
          ],
          "name": "side"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionNavButtons",
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
      "description": "The side to place the buttons on in the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>. Available: 'left' or 'right'.",
      "startingLine": 32,
      "typeExpression": "string",
      "type": {
        "type": "NameExpression",
        "name": "string"
      },
      "typeList": [
        "string"
      ],
      "name": "side"
    }
  ],
  "module": "ionic",
  "description": "Use ionNavButtons to set the buttons on your <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>\nfrom within an <a href="/docs/nightly/api/directive/ionView/"><code>ionView</code></a>.\n\nAny buttons you declare will be placed onto the navbar's corresponding side,\nand then destroyed when the user leaves their parent view.",
  "usage": "```html\n<ion-nav-bar>\n</ion-nav-bar>\n<ion-nav-view>\n  <ion-view>\n    <ion-nav-buttons side=\"left\">\n      <button class=\"button\" ng-click=\"doSomething()\">\n        I'm a button on the left of the navbar!\n      </button>\n    </ion-nav-buttons>\n    <ion-content>\n      Some super content here!\n    </ion-content>\n  </ion-view>\n</ion-nav-view>\n```",
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
    "ionNavView"
  ],
  "parentLinks": "<a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a>",
  "id": "module:ionic.directive:ionNavButtons",
  "partialNames": [
    "ionNavButtons",
    "directive:ionNavButtons",
    "ionic.ionNavButtons",
    "module:ionic.ionNavButtons",
    "ionic.directive:ionNavButtons",
    "module:ionic.directive:ionNavButtons"
  ],
  "outputPath": "docs/nightly/api/directive/ionNavButtons/index.md",
  "path": "api/directive/ionNavButtons/",
  "searchTerms": {
    "titleWords": "ionNavButtons",
    "keywords": "an and any api available be button buttons class content corresponding declare destroyed directive docs dosomething from here html in ionic ionnavbuttons ionnavview js leaves left md module navbar navbuttons ng-click of on onto or parent place placed right set side some super the their then to use user view when will within you your"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-nav-bar>
</ion-nav-bar>
<ion-nav-view>
  <ion-view>
    <ion-nav-buttons side="left">
      <button class="button" ng-click="doSomething()">
        I'm a button on the left of the navbar!
      </button>
    </ion-nav-buttons>
    <ion-content>
      Some super content here!
    </ion-content>
  </ion-view>
</ion-nav-view>
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
        side
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The side to place the buttons on in the parent
<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>. Available: &#39;left&#39; or &#39;right&#39;.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





