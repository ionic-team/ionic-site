---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionScroll/"

title: "ion-scroll"
header_sub_title: "Directive in module ionic"
doc: "ionScroll"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/scroll.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-scroll



<br/>
<small>
  Delegate: <a href="/docs/nightly/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>
</small>

</h1>





Creates a scrollable container for all content inside.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/scroll.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionScroll\n@module ionic\n@delegate ionic.service:$ionicScrollDelegate\n@restrict E\n\n@description\nCreates a scrollable container for all content inside.\n\n@param {string=} delegate-handle The handle used to identify this scrollView\nwith <a href="/docs/nightly/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>.\n@param {string=} direction Which way to scroll. 'x' or 'y'. Default 'y'.\n@param {boolean=} paging Whether to scroll with paging.\n@param {expression=} on-refresh Called on pull-to-refresh, triggered by an <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>.\n@param {expression=} on-scroll Called whenever the user scrolls.\n@param {boolean=} scrollbar-x Whether to show the horizontal scrollbar. Default false.\n@param {boolean=} scrollbar-y Whether to show the vertical scrollbar. Default true.\n@param {boolean=} zooming Whether to support pinch-to-zoom\n@param {integer=} min-zoom The smallest zoom amount allowed (default is 0.5)\n@param {integer=} max-zoom The largest zoom amount allowed (default is 3)",
  "fileName": "scroll",
  "relativePath": "js/angular/directive/scroll.js",
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
        "description": "ionScroll",
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
        "description": "ionic.service:$ionicScrollDelegate",
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
        "description": "Creates a scrollable container for all content inside.",
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
        "description": "The handle used to identify this scrollView\nwith <a href="/docs/nightly/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>.",
        "startingLine": 10,
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
        "description": "Which way to scroll. 'x' or 'y'. Default 'y'.",
        "startingLine": 12,
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
        "name": "direction"
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
        "description": "Whether to scroll with paging.",
        "startingLine": 13,
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
        "name": "paging"
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
        "description": "Called on pull-to-refresh, triggered by an <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>.",
        "startingLine": 14,
        "typeExpression": "expression=",
        "type": {
          "type": "NameExpression",
          "name": "expression",
          "optional": true
        },
        "typeList": [
          "expression"
        ],
        "optional": true,
        "name": "on-refresh"
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
        "description": "Called whenever the user scrolls.",
        "startingLine": 15,
        "typeExpression": "expression=",
        "type": {
          "type": "NameExpression",
          "name": "expression",
          "optional": true
        },
        "typeList": [
          "expression"
        ],
        "optional": true,
        "name": "on-scroll"
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
        "description": "Whether to show the horizontal scrollbar. Default false.",
        "startingLine": 16,
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
        "name": "scrollbar-x"
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
        "description": "Whether to show the vertical scrollbar. Default true.",
        "startingLine": 17,
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
        "name": "scrollbar-y"
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
        "description": "Whether to support pinch-to-zoom",
        "startingLine": 18,
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
        "name": "zooming"
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
        "description": "The smallest zoom amount allowed (default is 0.5)",
        "startingLine": 19,
        "typeExpression": "integer=",
        "type": {
          "type": "NameExpression",
          "name": "integer",
          "optional": true
        },
        "typeList": [
          "integer"
        ],
        "optional": true,
        "name": "min-zoom"
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
        "description": "The largest zoom amount allowed (default is 3)",
        "startingLine": 20,
        "typeExpression": "integer=",
        "type": {
          "type": "NameExpression",
          "name": "integer",
          "optional": true
        },
        "typeList": [
          "integer"
        ],
        "optional": true,
        "name": "max-zoom"
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
          "description": "ionScroll",
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
          "description": "ionic.service:$ionicScrollDelegate",
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
          "description": "Creates a scrollable container for all content inside.",
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
          "description": "The handle used to identify this scrollView\nwith <a href="/docs/nightly/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>.",
          "startingLine": 10,
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
          "description": "Which way to scroll. 'x' or 'y'. Default 'y'.",
          "startingLine": 12,
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
          "name": "direction"
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
          "description": "Whether to scroll with paging.",
          "startingLine": 13,
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
          "name": "paging"
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
          "description": "Called on pull-to-refresh, triggered by an <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>.",
          "startingLine": 14,
          "typeExpression": "expression=",
          "type": {
            "type": "NameExpression",
            "name": "expression",
            "optional": true
          },
          "typeList": [
            "expression"
          ],
          "optional": true,
          "name": "on-refresh"
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
          "description": "Called whenever the user scrolls.",
          "startingLine": 15,
          "typeExpression": "expression=",
          "type": {
            "type": "NameExpression",
            "name": "expression",
            "optional": true
          },
          "typeList": [
            "expression"
          ],
          "optional": true,
          "name": "on-scroll"
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
          "description": "Whether to show the horizontal scrollbar. Default false.",
          "startingLine": 16,
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
          "name": "scrollbar-x"
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
          "description": "Whether to show the vertical scrollbar. Default true.",
          "startingLine": 17,
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
          "name": "scrollbar-y"
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
          "description": "Whether to support pinch-to-zoom",
          "startingLine": 18,
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
          "name": "zooming"
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
          "description": "The smallest zoom amount allowed (default is 0.5)",
          "startingLine": 19,
          "typeExpression": "integer=",
          "type": {
            "type": "NameExpression",
            "name": "integer",
            "optional": true
          },
          "typeList": [
            "integer"
          ],
          "optional": true,
          "name": "min-zoom"
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
          "description": "The largest zoom amount allowed (default is 3)",
          "startingLine": 20,
          "typeExpression": "integer=",
          "type": {
            "type": "NameExpression",
            "name": "integer",
            "optional": true
          },
          "typeList": [
            "integer"
          ],
          "optional": true,
          "name": "max-zoom"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionScroll",
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
      "description": "The handle used to identify this scrollView\nwith <a href="/docs/nightly/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>.",
      "startingLine": 10,
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
      "description": "Which way to scroll. 'x' or 'y'. Default 'y'.",
      "startingLine": 12,
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
      "name": "direction"
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
      "description": "Whether to scroll with paging.",
      "startingLine": 13,
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
      "name": "paging"
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
      "description": "Called on pull-to-refresh, triggered by an <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>.",
      "startingLine": 14,
      "typeExpression": "expression=",
      "type": {
        "type": "NameExpression",
        "name": "expression",
        "optional": true
      },
      "typeList": [
        "expression"
      ],
      "optional": true,
      "name": "on-refresh"
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
      "description": "Called whenever the user scrolls.",
      "startingLine": 15,
      "typeExpression": "expression=",
      "type": {
        "type": "NameExpression",
        "name": "expression",
        "optional": true
      },
      "typeList": [
        "expression"
      ],
      "optional": true,
      "name": "on-scroll"
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
      "description": "Whether to show the horizontal scrollbar. Default false.",
      "startingLine": 16,
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
      "name": "scrollbar-x"
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
      "description": "Whether to show the vertical scrollbar. Default true.",
      "startingLine": 17,
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
      "name": "scrollbar-y"
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
      "description": "Whether to support pinch-to-zoom",
      "startingLine": 18,
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
      "name": "zooming"
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
      "description": "The smallest zoom amount allowed (default is 0.5)",
      "startingLine": 19,
      "typeExpression": "integer=",
      "type": {
        "type": "NameExpression",
        "name": "integer",
        "optional": true
      },
      "typeList": [
        "integer"
      ],
      "optional": true,
      "name": "min-zoom"
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
      "description": "The largest zoom amount allowed (default is 3)",
      "startingLine": 20,
      "typeExpression": "integer=",
      "type": {
        "type": "NameExpression",
        "name": "integer",
        "optional": true
      },
      "typeList": [
        "integer"
      ],
      "optional": true,
      "name": "max-zoom"
    }
  ],
  "module": "ionic",
  "description": "Creates a scrollable container for all content inside.",
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
  "delegate": "<a href="/docs/nightly/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>",
  "id": "module:ionic.directive:ionScroll",
  "partialNames": [
    "ionScroll",
    "directive:ionScroll",
    "ionic.ionScroll",
    "module:ionic.ionScroll",
    "ionic.directive:ionScroll",
    "module:ionic.directive:ionScroll"
  ],
  "outputPath": "docs/nightly/api/directive/ionScroll/index.md",
  "path": "api/directive/ionScroll/",
  "searchTerms": {
    "titleWords": "ionScroll",
    "keywords": "all allowed amount an any api by called container content creates default delegate-handle direction directive docs false for handle horizontal identify inside ionic ionscroll is js largest max-zoom md min-zoom module on on-refresh on-scroll or paging pinch-to-zoom pull-to-refresh scroll scrollable scrollbar scrollbar-x scrollbar-y scrolls scrollview service show smallest support the this to triggered true used user vertical way whenever whether which with zoom zooming"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
    

  ```html
  <ion-scroll
    [delegate-handle=""]
    [direction=""]
    [paging=""]
    [on-refresh=""]
    [on-scroll=""]
    [scrollbar-x=""]
    [scrollbar-y=""]
    [zooming=""]
    [min-zoom=""]
    [max-zoom=""]>
  ...
  </ion-scroll>
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
        <p>The handle used to identify this scrollView
with <a href="/docs/nightly/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        direction
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Which way to scroll. &#39;x&#39; or &#39;y&#39;. Default &#39;y&#39;.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        paging
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to scroll with paging.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-refresh
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called on pull-to-refresh, triggered by an <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-scroll
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called whenever the user scrolls.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        scrollbar-x
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to show the horizontal scrollbar. Default false.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        scrollbar-y
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to show the vertical scrollbar. Default true.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        zooming
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to support pinch-to-zoom</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        min-zoom
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>integer</code>
      </td>
      <td>
        <p>The smallest zoom amount allowed (default is 0.5)</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        max-zoom
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>integer</code>
      </td>
      <td>
        <p>The largest zoom amount allowed (default is 3)</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





