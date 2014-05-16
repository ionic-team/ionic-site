---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionView/"

title: "ion-view"
header_sub_title: "Directive in module ionic"
doc: "ionView"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/view.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-view


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a>
</small>


</h1>





A container for content, used to tell a parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>
about the current view.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/view.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionView\n@module ionic\n@restrict E\n@parent ionNavView\n\n@description\nA container for content, used to tell a parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>\nabout the current view.\n\n@usage\nBelow is an example where our page will load with a navbar containing \"My Page\" as the title.\n\n```html\n<ion-nav-bar></ion-nav-bar>\n<ion-nav-view class=\"slide-left-right\">\n  <ion-view title=\"My Page\">\n    <ion-content>\n      Hello!\n    </ion-content>\n  </ion-view>\n</ion-nav-view>\n```\n\n@param {string=} title The title to display on the parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.\n@param {boolean=} hide-back-button Whether to hide the back button on the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.\n@param {boolean=} hide-nav-bar Whether to hide the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.",
  "fileName": "view",
  "relativePath": "js/angular/directive/view.js",
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
        "description": "ionView",
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
        "description": "A container for content, used to tell a parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>\nabout the current view.",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "Below is an example where our page will load with a navbar containing \"My Page\" as the title.\n\n```html\n<ion-nav-bar></ion-nav-bar>\n<ion-nav-view class=\"slide-left-right\">\n  <ion-view title=\"My Page\">\n    <ion-content>\n      Hello!\n    </ion-content>\n  </ion-view>\n</ion-nav-view>\n```",
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
        "description": "The title to display on the parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.",
        "startingLine": 25,
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
        "name": "title"
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
        "description": "Whether to hide the back button on the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.",
        "startingLine": 26,
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
        "name": "hide-back-button"
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
        "description": "Whether to hide the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.",
        "startingLine": 28,
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
        "name": "hide-nav-bar"
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
          "description": "ionView",
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
          "description": "A container for content, used to tell a parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>\nabout the current view.",
          "startingLine": 7
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "Below is an example where our page will load with a navbar containing \"My Page\" as the title.\n\n```html\n<ion-nav-bar></ion-nav-bar>\n<ion-nav-view class=\"slide-left-right\">\n  <ion-view title=\"My Page\">\n    <ion-content>\n      Hello!\n    </ion-content>\n  </ion-view>\n</ion-nav-view>\n```",
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
          "description": "The title to display on the parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.",
          "startingLine": 25,
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
          "name": "title"
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
          "description": "Whether to hide the back button on the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.",
          "startingLine": 26,
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
          "name": "hide-back-button"
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
          "description": "Whether to hide the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.",
          "startingLine": 28,
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
          "name": "hide-nav-bar"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionView",
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
      "description": "The title to display on the parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.",
      "startingLine": 25,
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
      "name": "title"
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
      "description": "Whether to hide the back button on the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.",
      "startingLine": 26,
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
      "name": "hide-back-button"
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
      "description": "Whether to hide the parent\n<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.",
      "startingLine": 28,
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
      "name": "hide-nav-bar"
    }
  ],
  "module": "ionic",
  "description": "A container for content, used to tell a parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>\nabout the current view.",
  "usage": "Below is an example where our page will load with a navbar containing \"My Page\" as the title.\n\n```html\n<ion-nav-bar></ion-nav-bar>\n<ion-nav-view class=\"slide-left-right\">\n  <ion-view title=\"My Page\">\n    <ion-content>\n      Hello!\n    </ion-content>\n  </ion-view>\n</ion-nav-view>\n```",
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
  "id": "module:ionic.directive:ionView",
  "partialNames": [
    "ionView",
    "directive:ionView",
    "ionic.ionView",
    "module:ionic.ionView",
    "ionic.directive:ionView",
    "module:ionic.directive:ionView"
  ],
  "outputPath": "docs/nightly/api/directive/ionView/index.md",
  "path": "api/directive/ionView/",
  "searchTerms": {
    "titleWords": "ionView",
    "keywords": "about an any api as back below button by class container containing content current default directive display docs example for hello hide hide-back-button hide-nav-bar html ionic ionnavview ionview is js load md module my navbar on our page parent slide-left-right tell the title to used view where whether will with"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
Below is an example where our page will load with a navbar containing "My Page" as the title.

```html
<ion-nav-bar></ion-nav-bar>
<ion-nav-view class="slide-left-right">
  <ion-view title="My Page">
    <ion-content>
      Hello!
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
        title
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The title to display on the parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        hide-back-button
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to hide the back button on the parent
<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        hide-nav-bar
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to hide the parent
<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





