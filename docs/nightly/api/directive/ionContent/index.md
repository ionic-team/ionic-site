---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionContent/"

title: "ion-content"
header_sub_title: "Directive in module ionic"
doc: "ionContent"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/content.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-content



<br/>
<small>
  Delegate: <a href="/docs/nightly/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>
</small>

</h1>





The ionContent directive provides an easy to use content area that can be configured
to use Ionic's custom Scroll View, or the built in overflow scrolling of the browser.

While we recommend using the custom Scroll features in Ionic in most cases, sometimes
(for performance reasons) only the browser's native overflow scrolling will suffice,
and so we've made it easy to toggle between the Ionic scroll implementation and
overflow scrolling.

You can implement pull-to-refresh with the <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>
directive, and infinite scrolling with the <a href="/docs/nightly/api/directive/ionInfiniteScroll/"><code>ionInfiniteScroll</code></a>
directive.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/content.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionContent\n@module ionic\n@delegate ionic.service:$ionicScrollDelegate\n@restrict E\n\n@description\nThe ionContent directive provides an easy to use content area that can be configured\nto use Ionic's custom Scroll View, or the built in overflow scrolling of the browser.\n\nWhile we recommend using the custom Scroll features in Ionic in most cases, sometimes\n(for performance reasons) only the browser's native overflow scrolling will suffice,\nand so we've made it easy to toggle between the Ionic scroll implementation and\noverflow scrolling.\n\nYou can implement pull-to-refresh with the <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>\ndirective, and infinite scrolling with the <a href="/docs/nightly/api/directive/ionInfiniteScroll/"><code>ionInfiniteScroll</code></a>\ndirective.\n\n@param {string=} delegate-handle The handle used to identify this scrollView\nwith <a href="/docs/nightly/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>.\n@param {boolean=} padding Whether to add padding to the content.\nof the content.  Defaults to true on iOS, false on Android.\n@param {boolean=} scroll Whether to allow scrolling of content.  Defaults to true.\n@param {boolean=} overflow-scroll Whether to use overflow-scrolling instead of\nIonic scroll.\n@param {boolean=} has-bouncing Whether to allow scrolling to bounce past the edges\nof the content.  Defaults to true on iOS, false on Android.\n@param {expression=} on-scroll Expression to evaluate when the content is scrolled.\n@param {expression=} on-scroll-complete Expression to evaluate when a scroll action completes.",
  "fileName": "content",
  "relativePath": "js/angular/directive/content.js",
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
        "description": "ionContent",
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
        "description": "The ionContent directive provides an easy to use content area that can be configured\nto use Ionic's custom Scroll View, or the built in overflow scrolling of the browser.\n\nWhile we recommend using the custom Scroll features in Ionic in most cases, sometimes\n(for performance reasons) only the browser's native overflow scrolling will suffice,\nand so we've made it easy to toggle between the Ionic scroll implementation and\noverflow scrolling.\n\nYou can implement pull-to-refresh with the <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>\ndirective, and infinite scrolling with the <a href="/docs/nightly/api/directive/ionInfiniteScroll/"><code>ionInfiniteScroll</code></a>\ndirective.",
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
        "startingLine": 20,
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
        "description": "Whether to add padding to the content.\nof the content.  Defaults to true on iOS, false on Android.",
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
        "name": "padding"
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
        "description": "Whether to allow scrolling of content.  Defaults to true.",
        "startingLine": 24,
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
        "name": "scroll"
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
        "description": "Whether to use overflow-scrolling instead of\nIonic scroll.",
        "startingLine": 25,
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
        "name": "overflow-scroll"
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
        "description": "Whether to allow scrolling to bounce past the edges\nof the content.  Defaults to true on iOS, false on Android.",
        "startingLine": 27,
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
        "name": "has-bouncing"
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
        "description": "Expression to evaluate when the content is scrolled.",
        "startingLine": 29,
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
        "description": "Expression to evaluate when a scroll action completes.",
        "startingLine": 30,
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
        "name": "on-scroll-complete"
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
          "description": "ionContent",
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
          "description": "The ionContent directive provides an easy to use content area that can be configured\nto use Ionic's custom Scroll View, or the built in overflow scrolling of the browser.\n\nWhile we recommend using the custom Scroll features in Ionic in most cases, sometimes\n(for performance reasons) only the browser's native overflow scrolling will suffice,\nand so we've made it easy to toggle between the Ionic scroll implementation and\noverflow scrolling.\n\nYou can implement pull-to-refresh with the <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>\ndirective, and infinite scrolling with the <a href="/docs/nightly/api/directive/ionInfiniteScroll/"><code>ionInfiniteScroll</code></a>\ndirective.",
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
          "startingLine": 20,
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
          "description": "Whether to add padding to the content.\nof the content.  Defaults to true on iOS, false on Android.",
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
          "name": "padding"
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
          "description": "Whether to allow scrolling of content.  Defaults to true.",
          "startingLine": 24,
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
          "name": "scroll"
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
          "description": "Whether to use overflow-scrolling instead of\nIonic scroll.",
          "startingLine": 25,
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
          "name": "overflow-scroll"
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
          "description": "Whether to allow scrolling to bounce past the edges\nof the content.  Defaults to true on iOS, false on Android.",
          "startingLine": 27,
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
          "name": "has-bouncing"
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
          "description": "Expression to evaluate when the content is scrolled.",
          "startingLine": 29,
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
          "description": "Expression to evaluate when a scroll action completes.",
          "startingLine": 30,
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
          "name": "on-scroll-complete"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionContent",
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
      "startingLine": 20,
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
      "description": "Whether to add padding to the content.\nof the content.  Defaults to true on iOS, false on Android.",
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
      "name": "padding"
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
      "description": "Whether to allow scrolling of content.  Defaults to true.",
      "startingLine": 24,
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
      "name": "scroll"
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
      "description": "Whether to use overflow-scrolling instead of\nIonic scroll.",
      "startingLine": 25,
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
      "name": "overflow-scroll"
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
      "description": "Whether to allow scrolling to bounce past the edges\nof the content.  Defaults to true on iOS, false on Android.",
      "startingLine": 27,
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
      "name": "has-bouncing"
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
      "description": "Expression to evaluate when the content is scrolled.",
      "startingLine": 29,
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
      "description": "Expression to evaluate when a scroll action completes.",
      "startingLine": 30,
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
      "name": "on-scroll-complete"
    }
  ],
  "module": "ionic",
  "description": "The ionContent directive provides an easy to use content area that can be configured\nto use Ionic's custom Scroll View, or the built in overflow scrolling of the browser.\n\nWhile we recommend using the custom Scroll features in Ionic in most cases, sometimes\n(for performance reasons) only the browser's native overflow scrolling will suffice,\nand so we've made it easy to toggle between the Ionic scroll implementation and\noverflow scrolling.\n\nYou can implement pull-to-refresh with the <a href="/docs/nightly/api/directive/ionRefresher/"><code>ionRefresher</code></a>\ndirective, and infinite scrolling with the <a href="/docs/nightly/api/directive/ionInfiniteScroll/"><code>ionInfiniteScroll</code></a>\ndirective.",
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
  "id": "module:ionic.directive:ionContent",
  "partialNames": [
    "ionContent",
    "directive:ionContent",
    "ionic.ionContent",
    "module:ionic.ionContent",
    "ionic.directive:ionContent",
    "module:ionic.directive:ionContent"
  ],
  "outputPath": "docs/nightly/api/directive/ionContent/index.md",
  "path": "api/directive/ionContent/",
  "searchTerms": {
    "titleWords": "ionContent",
    "keywords": "action add allow an and android any api area be between bounce browser built can cases completes configured content custom defaults delegate-handle directive docs easy edges evaluate expression false features handle has-bouncing identify implement implementation in infinite instead ioncontent ionic ios is it js made md module most native of on on-scroll on-scroll-complete only or overflow overflow-scroll overflow-scrolling padding past performance provides pull-to-refresh reasons recommend scroll scrolled scrolling scrollview service so sometimes suffice that the this to toggle true use used using ve view we when whether while will with you"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
    

  ```html
  <ion-content
    [delegate-handle=""]
    [padding=""]
    [scroll=""]
    [overflow-scroll=""]
    [has-bouncing=""]
    [on-scroll=""]
    [on-scroll-complete=""]>
  ...
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
        padding
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to add padding to the content.
of the content.  Defaults to true on iOS, false on Android.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        scroll
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to allow scrolling of content.  Defaults to true.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        overflow-scroll
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to use overflow-scrolling instead of
Ionic scroll.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        has-bouncing
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to allow scrolling to bounce past the edges
of the content.  Defaults to true on iOS, false on Android.</p>

        
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
        <p>Expression to evaluate when the content is scrolled.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-scroll-complete
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Expression to evaluate when a scroll action completes.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





