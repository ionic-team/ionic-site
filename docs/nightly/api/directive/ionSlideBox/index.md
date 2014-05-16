---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionSlideBox/"

title: "ion-slide-box"
header_sub_title: "Directive in module ionic"
doc: "ionSlideBox"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/slideBox.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-slide-box



<br/>
<small>
  Delegate: <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>
</small>

</h1>





The Slide Box is a multi-page container where each page can be swiped or dragged between:

![SlideBox](http://ionicframework.com.s3.amazonaws.com/docs/controllers/slideBox.gif)








  
<pre>{
  "fileType": "js",
  "startingLine": 2,
  "file": "js/angular/directive/slideBox.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionSlideBox\n@module ionic\n@delegate ionic.service:$ionicSlideBoxDelegate\n@restrict E\n@description\nThe Slide Box is a multi-page container where each page can be swiped or dragged between:\n\n![SlideBox](http://ionicframework.com.s3.amazonaws.com/docs/controllers/slideBox.gif)\n\n@usage\n```html\n<ion-slide-box>\n  <ion-slide>\n    <div class=\"box blue\"><h1>BLUE</h1></div>\n  </ion-slide>\n  <ion-slide>\n    <div class=\"box yellow\"><h1>YELLOW</h1></div>\n  </ion-slide>\n  <ion-slide on-slide-changed=\"slideHasChanged(index)\">\n    <div class=\"box pink\"><h1>PINK</h1></div>\n  </ion-slide>\n</ion-slide-box>\n```\n\n@param {string=} delegate-handle The handle used to identify this slideBox\nwith <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>.\n@param {boolean=} does-continue Whether the slide box should automatically slide.\n@param {number=} slide-interval How many milliseconds to wait to change slides (if does-continue is true). Defaults to 4000.\n@param {boolean=} show-pager Whether a pager should be shown for this slide box.\n@param {expression=} pager-click Expression to call when a pager is clicked (if show-pager is true). Is passed the 'index' variable.\n@param {expression=} on-slide-changed Expression called whenever the slide is changed.  Is passed an 'index' variable.\n@param {expression=} active-slide Model to bind the current slide to.",
  "fileName": "slideBox",
  "relativePath": "js/angular/directive/slideBox.js",
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
        "startingLine": 2
      },
      {
        "tagDef": {
          "name": "name",
          "required": true
        },
        "tagName": "name",
        "description": "ionSlideBox",
        "startingLine": 3
      },
      {
        "tagDef": {
          "name": "module"
        },
        "tagName": "module",
        "description": "ionic",
        "startingLine": 4
      },
      {
        "tagDef": {
          "name": "delegate"
        },
        "tagName": "delegate",
        "description": "ionic.service:$ionicSlideBoxDelegate",
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
        "description": "The Slide Box is a multi-page container where each page can be swiped or dragged between:\n\n![SlideBox](http://ionicframework.com.s3.amazonaws.com/docs/controllers/slideBox.gif)",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-slide-box>\n  <ion-slide>\n    <div class=\"box blue\"><h1>BLUE</h1></div>\n  </ion-slide>\n  <ion-slide>\n    <div class=\"box yellow\"><h1>YELLOW</h1></div>\n  </ion-slide>\n  <ion-slide on-slide-changed=\"slideHasChanged(index)\">\n    <div class=\"box pink\"><h1>PINK</h1></div>\n  </ion-slide>\n</ion-slide-box>\n```",
        "startingLine": 12
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
        "description": "The handle used to identify this slideBox\nwith <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>.",
        "startingLine": 27,
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
        "description": "Whether the slide box should automatically slide.",
        "startingLine": 29,
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
        "name": "does-continue"
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
        "description": "How many milliseconds to wait to change slides (if does-continue is true). Defaults to 4000.",
        "startingLine": 30,
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
        "name": "slide-interval"
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
        "description": "Whether a pager should be shown for this slide box.",
        "startingLine": 31,
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
        "name": "show-pager"
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
        "description": "Expression to call when a pager is clicked (if show-pager is true). Is passed the 'index' variable.",
        "startingLine": 32,
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
        "name": "pager-click"
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
        "description": "Expression called whenever the slide is changed.  Is passed an 'index' variable.",
        "startingLine": 33,
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
        "name": "on-slide-changed"
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
        "description": "Model to bind the current slide to.",
        "startingLine": 34,
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
        "name": "active-slide"
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
          "description": "ionSlideBox",
          "startingLine": 3
        }
      ],
      "module": [
        {
          "tagDef": {
            "name": "module"
          },
          "tagName": "module",
          "description": "ionic",
          "startingLine": 4
        }
      ],
      "delegate": [
        {
          "tagDef": {
            "name": "delegate"
          },
          "tagName": "delegate",
          "description": "ionic.service:$ionicSlideBoxDelegate",
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
          "description": "The Slide Box is a multi-page container where each page can be swiped or dragged between:\n\n![SlideBox](http://ionicframework.com.s3.amazonaws.com/docs/controllers/slideBox.gif)",
          "startingLine": 7
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-slide-box>\n  <ion-slide>\n    <div class=\"box blue\"><h1>BLUE</h1></div>\n  </ion-slide>\n  <ion-slide>\n    <div class=\"box yellow\"><h1>YELLOW</h1></div>\n  </ion-slide>\n  <ion-slide on-slide-changed=\"slideHasChanged(index)\">\n    <div class=\"box pink\"><h1>PINK</h1></div>\n  </ion-slide>\n</ion-slide-box>\n```",
          "startingLine": 12
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
          "description": "The handle used to identify this slideBox\nwith <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>.",
          "startingLine": 27,
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
          "description": "Whether the slide box should automatically slide.",
          "startingLine": 29,
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
          "name": "does-continue"
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
          "description": "How many milliseconds to wait to change slides (if does-continue is true). Defaults to 4000.",
          "startingLine": 30,
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
          "name": "slide-interval"
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
          "description": "Whether a pager should be shown for this slide box.",
          "startingLine": 31,
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
          "name": "show-pager"
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
          "description": "Expression to call when a pager is clicked (if show-pager is true). Is passed the 'index' variable.",
          "startingLine": 32,
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
          "name": "pager-click"
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
          "description": "Expression called whenever the slide is changed.  Is passed an 'index' variable.",
          "startingLine": 33,
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
          "name": "on-slide-changed"
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
          "description": "Model to bind the current slide to.",
          "startingLine": 34,
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
          "name": "active-slide"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionSlideBox",
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
      "description": "The handle used to identify this slideBox\nwith <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>.",
      "startingLine": 27,
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
      "description": "Whether the slide box should automatically slide.",
      "startingLine": 29,
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
      "name": "does-continue"
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
      "description": "How many milliseconds to wait to change slides (if does-continue is true). Defaults to 4000.",
      "startingLine": 30,
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
      "name": "slide-interval"
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
      "description": "Whether a pager should be shown for this slide box.",
      "startingLine": 31,
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
      "name": "show-pager"
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
      "description": "Expression to call when a pager is clicked (if show-pager is true). Is passed the 'index' variable.",
      "startingLine": 32,
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
      "name": "pager-click"
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
      "description": "Expression called whenever the slide is changed.  Is passed an 'index' variable.",
      "startingLine": 33,
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
      "name": "on-slide-changed"
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
      "description": "Model to bind the current slide to.",
      "startingLine": 34,
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
      "name": "active-slide"
    }
  ],
  "module": "ionic",
  "description": "The Slide Box is a multi-page container where each page can be swiped or dragged between:\n\n![SlideBox](http://ionicframework.com.s3.amazonaws.com/docs/controllers/slideBox.gif)",
  "usage": "```html\n<ion-slide-box>\n  <ion-slide>\n    <div class=\"box blue\"><h1>BLUE</h1></div>\n  </ion-slide>\n  <ion-slide>\n    <div class=\"box yellow\"><h1>YELLOW</h1></div>\n  </ion-slide>\n  <ion-slide on-slide-changed=\"slideHasChanged(index)\">\n    <div class=\"box pink\"><h1>PINK</h1></div>\n  </ion-slide>\n</ion-slide-box>\n```",
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
  "delegate": "<a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>",
  "id": "module:ionic.directive:ionSlideBox",
  "partialNames": [
    "ionSlideBox",
    "directive:ionSlideBox",
    "ionic.ionSlideBox",
    "module:ionic.ionSlideBox",
    "ionic.directive:ionSlideBox",
    "module:ionic.directive:ionSlideBox"
  ],
  "outputPath": "docs/nightly/api/directive/ionSlideBox/index.md",
  "path": "api/directive/ionSlideBox/",
  "searchTerms": {
    "titleWords": "ionSlideBox",
    "keywords": "active-slide amazonaws an any api automatically be between bind blue box call called can change changed class clicked com container current defaults delegate-handle directive docs does-continue dragged each expression for gif handle how html identify index ionic ionslidebox is js many md milliseconds model module multi-page on-slide-changed or page pager pager-click passed pink s3 service should show-pager shown slide slide-interval slidebox slidehaschanged slides swiped the this to true used variable wait when whenever where whether with yellow"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-slide-box>
  <ion-slide>
    <div class="box blue"><h1>BLUE</h1></div>
  </ion-slide>
  <ion-slide>
    <div class="box yellow"><h1>YELLOW</h1></div>
  </ion-slide>
  <ion-slide on-slide-changed="slideHasChanged(index)">
    <div class="box pink"><h1>PINK</h1></div>
  </ion-slide>
</ion-slide-box>
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
        <p>The handle used to identify this slideBox
with <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        does-continue
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the slide box should automatically slide.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        slide-interval
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>How many milliseconds to wait to change slides (if does-continue is true). Defaults to 4000.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        show-pager
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether a pager should be shown for this slide box.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        pager-click
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Expression to call when a pager is clicked (if show-pager is true). Is passed the &#39;index&#39; variable.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-slide-changed
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Expression called whenever the slide is changed.  Is passed an &#39;index&#39; variable.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        active-slide
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Model to bind the current slide to.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





