---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionSideMenu/"

title: "ion-side-menu"
header_sub_title: "Directive in module ionic"
doc: "ionSideMenu"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/sideMenu.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-side-menu


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a>
</small>


</h1>





A container for a side menu, sibling to an <a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> directive.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/sideMenu.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionSideMenu\n@module ionic\n@restrict E\n@parent ionic.directive:ionSideMenus\n\n@description\nA container for a side menu, sibling to an <a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> directive.\n\n@usage\n```html\n<ion-side-menu\n  side=\"left\"\n  width=\"myWidthValue + 20\"\n  is-enabled=\"shouldLeftSideMenuBeEnabled()\">\n</ion-side-menu>\n```\nFor a complete side menu example, see the\n<a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a> documentation.\n\n@param {string} side Which side the side menu is currently on.  Allowed values: 'left' or 'right'.\n@param {boolean=} is-enabled Whether this side menu is enabled.\n@param {number=} width How many pixels wide the side menu should be.  Defaults to 275.",
  "fileName": "sideMenu",
  "relativePath": "js/angular/directive/sideMenu.js",
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
        "description": "ionSideMenu",
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
        "description": "ionic.directive:ionSideMenus",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "A container for a side menu, sibling to an <a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> directive.",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-side-menu\n  side=\"left\"\n  width=\"myWidthValue + 20\"\n  is-enabled=\"shouldLeftSideMenuBeEnabled()\">\n</ion-side-menu>\n```\nFor a complete side menu example, see the\n<a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a> documentation.",
        "startingLine": 10
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
        "description": "Which side the side menu is currently on.  Allowed values: 'left' or 'right'.",
        "startingLine": 21,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
        "name": "side"
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
        "description": "Whether this side menu is enabled.",
        "startingLine": 22,
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
        "name": "is-enabled"
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
        "description": "How many pixels wide the side menu should be.  Defaults to 275.",
        "startingLine": 23,
        "typeExpression": "number=",
        "type": {
          "type": "NameExpression",
          "name": "number",
          "optional": true
        },
        "typeList": [
          "number"
        ],
        "optional": true,
        "name": "width"
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
          "description": "ionSideMenu",
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
          "description": "ionic.directive:ionSideMenus",
          "startingLine": 5
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "A container for a side menu, sibling to an <a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> directive.",
          "startingLine": 7
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-side-menu\n  side=\"left\"\n  width=\"myWidthValue + 20\"\n  is-enabled=\"shouldLeftSideMenuBeEnabled()\">\n</ion-side-menu>\n```\nFor a complete side menu example, see the\n<a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a> documentation.",
          "startingLine": 10
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
          "description": "Which side the side menu is currently on.  Allowed values: 'left' or 'right'.",
          "startingLine": 21,
          "typeExpression": "string",
          "type": {
            "type": "NameExpression",
            "name": "string"
          },
          "typeList": [
            "string"
          ],
          "name": "side"
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
          "description": "Whether this side menu is enabled.",
          "startingLine": 22,
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
          "name": "is-enabled"
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
          "description": "How many pixels wide the side menu should be.  Defaults to 275.",
          "startingLine": 23,
          "typeExpression": "number=",
          "type": {
            "type": "NameExpression",
            "name": "number",
            "optional": true
          },
          "typeList": [
            "number"
          ],
          "optional": true,
          "name": "width"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionSideMenu",
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
      "description": "Which side the side menu is currently on.  Allowed values: 'left' or 'right'.",
      "startingLine": 21,
      "typeExpression": "string",
      "type": {
        "type": "NameExpression",
        "name": "string"
      },
      "typeList": [
        "string"
      ],
      "name": "side"
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
      "description": "Whether this side menu is enabled.",
      "startingLine": 22,
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
      "name": "is-enabled"
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
      "description": "How many pixels wide the side menu should be.  Defaults to 275.",
      "startingLine": 23,
      "typeExpression": "number=",
      "type": {
        "type": "NameExpression",
        "name": "number",
        "optional": true
      },
      "typeList": [
        "number"
      ],
      "optional": true,
      "name": "width"
    }
  ],
  "module": "ionic",
  "description": "A container for a side menu, sibling to an <a href="/docs/nightly/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> directive.",
  "usage": "```html\n<ion-side-menu\n  side=\"left\"\n  width=\"myWidthValue + 20\"\n  is-enabled=\"shouldLeftSideMenuBeEnabled()\">\n</ion-side-menu>\n```\nFor a complete side menu example, see the\n<a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a> documentation.",
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
    "ionic.directive:ionSideMenus"
  ],
  "parentLinks": "<a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a>",
  "id": "module:ionic.directive:ionSideMenu",
  "partialNames": [
    "ionSideMenu",
    "directive:ionSideMenu",
    "ionic.ionSideMenu",
    "module:ionic.ionSideMenu",
    "ionic.directive:ionSideMenu",
    "module:ionic.directive:ionSideMenu"
  ],
  "outputPath": "docs/nightly/api/directive/ionSideMenu/index.md",
  "path": "api/directive/ionSideMenu/",
  "searchTerms": {
    "titleWords": "ionSideMenu",
    "keywords": "allowed an any api be complete container currently defaults directive docs documentation enabled example for how html ionic ionsidemenu is is-enabled js left many md menu module mywidthvalue on or pixels right see should shouldleftsidemenubeenabled sibling side sidemenu the this to values whether which wide width"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-side-menu
  side="left"
  width="myWidthValue + 20"
  is-enabled="shouldLeftSideMenuBeEnabled()">
</ion-side-menu>
```
For a complete side menu example, see the
<a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a> documentation.
  
  
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
        <p>Which side the side menu is currently on.  Allowed values: &#39;left&#39; or &#39;right&#39;.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        is-enabled
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether this side menu is enabled.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        width
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>How many pixels wide the side menu should be.  Defaults to 275.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





