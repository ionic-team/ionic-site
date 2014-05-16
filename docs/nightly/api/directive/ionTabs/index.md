---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionTabs/"

title: "ion-tabs"
header_sub_title: "Directive in module ionic"
doc: "ionTabs"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/tabs.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-tabs



<br/>
<small>
  Delegate: <a href="/docs/nightly/api/service/$ionicTabsDelegate/"><code>$ionicTabsDelegate</code></a>
</small>

</h1>


{% include codepen.html id="KbrzJ" %}




Powers a multi-tabbed interface with a Tab Bar and a set of "pages" that can be tabbed
through.

Assign any [tabs class](/docs/components#tabs) or
[animation class](/docs/components#animation) to the element to define
its look and feel.

See the <a href="/docs/nightly/api/directive/ionTab/"><code>ionTab</code></a> directive's documentation for more details on
individual tabs.

Note: do not place ion-tabs inside of an ion-content element; it has been known to cause a
certain CSS bug.








  
<pre>{
  "fileType": "js",
  "startingLine": 2,
  "file": "js/angular/directive/tabs.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionTabs\n@module ionic\n@delegate ionic.service:$ionicTabsDelegate\n@restrict E\n@codepen KbrzJ\n\n@description\nPowers a multi-tabbed interface with a Tab Bar and a set of \"pages\" that can be tabbed\nthrough.\n\nAssign any [tabs class](/docs/components#tabs) or\n[animation class](/docs/components#animation) to the element to define\nits look and feel.\n\nSee the <a href="/docs/nightly/api/directive/ionTab/"><code>ionTab</code></a> directive's documentation for more details on\nindividual tabs.\n\nNote: do not place ion-tabs inside of an ion-content element; it has been known to cause a\ncertain CSS bug.\n\n@usage\n```html\n<ion-tabs class=\"tabs-positive tabs-icon-only\">\n\n  <ion-tab title=\"Home\" icon-on=\"ion-ios7-filing\" icon-off=\"ion-ios7-filing-outline\">\n    <!-- Tab 1 content -->\n  </ion-tab>\n\n  <ion-tab title=\"About\" icon-on=\"ion-ios7-clock\" icon-off=\"ion-ios7-clock-outline\">\n    <!-- Tab 2 content -->\n  </ion-tab>\n\n  <ion-tab title=\"Settings\" icon-on=\"ion-ios7-gear\" icon-off=\"ion-ios7-gear-outline\">\n    <!-- Tab 3 content -->\n  </ion-tab>\n\n</ion-tabs>\n```\n\n@param {string=} delegate-handle The handle used to identify these tabs\nwith <a href="/docs/nightly/api/service/$ionicTabsDelegate/"><code>$ionicTabsDelegate</code></a>.",
  "fileName": "tabs",
  "relativePath": "js/angular/directive/tabs.js",
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
        "description": "ionTabs",
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
        "description": "ionic.service:$ionicTabsDelegate",
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
          "name": "codepen"
        },
        "tagName": "codepen",
        "description": "KbrzJ",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "Powers a multi-tabbed interface with a Tab Bar and a set of \"pages\" that can be tabbed\nthrough.\n\nAssign any [tabs class](/docs/components#tabs) or\n[animation class](/docs/components#animation) to the element to define\nits look and feel.\n\nSee the <a href="/docs/nightly/api/directive/ionTab/"><code>ionTab</code></a> directive's documentation for more details on\nindividual tabs.\n\nNote: do not place ion-tabs inside of an ion-content element; it has been known to cause a\ncertain CSS bug.",
        "startingLine": 9
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-tabs class=\"tabs-positive tabs-icon-only\">\n\n  <ion-tab title=\"Home\" icon-on=\"ion-ios7-filing\" icon-off=\"ion-ios7-filing-outline\">\n    <!-- Tab 1 content -->\n  </ion-tab>\n\n  <ion-tab title=\"About\" icon-on=\"ion-ios7-clock\" icon-off=\"ion-ios7-clock-outline\">\n    <!-- Tab 2 content -->\n  </ion-tab>\n\n  <ion-tab title=\"Settings\" icon-on=\"ion-ios7-gear\" icon-off=\"ion-ios7-gear-outline\">\n    <!-- Tab 3 content -->\n  </ion-tab>\n\n</ion-tabs>\n```",
        "startingLine": 23
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
        "description": "The handle used to identify these tabs\nwith <a href="/docs/nightly/api/service/$ionicTabsDelegate/"><code>$ionicTabsDelegate</code></a>.",
        "startingLine": 42,
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
          "description": "ionTabs",
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
          "description": "ionic.service:$ionicTabsDelegate",
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
      "codepen": [
        {
          "tagDef": {
            "name": "codepen"
          },
          "tagName": "codepen",
          "description": "KbrzJ",
          "startingLine": 7
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "Powers a multi-tabbed interface with a Tab Bar and a set of \"pages\" that can be tabbed\nthrough.\n\nAssign any [tabs class](/docs/components#tabs) or\n[animation class](/docs/components#animation) to the element to define\nits look and feel.\n\nSee the <a href="/docs/nightly/api/directive/ionTab/"><code>ionTab</code></a> directive's documentation for more details on\nindividual tabs.\n\nNote: do not place ion-tabs inside of an ion-content element; it has been known to cause a\ncertain CSS bug.",
          "startingLine": 9
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-tabs class=\"tabs-positive tabs-icon-only\">\n\n  <ion-tab title=\"Home\" icon-on=\"ion-ios7-filing\" icon-off=\"ion-ios7-filing-outline\">\n    <!-- Tab 1 content -->\n  </ion-tab>\n\n  <ion-tab title=\"About\" icon-on=\"ion-ios7-clock\" icon-off=\"ion-ios7-clock-outline\">\n    <!-- Tab 2 content -->\n  </ion-tab>\n\n  <ion-tab title=\"Settings\" icon-on=\"ion-ios7-gear\" icon-off=\"ion-ios7-gear-outline\">\n    <!-- Tab 3 content -->\n  </ion-tab>\n\n</ion-tabs>\n```",
          "startingLine": 23
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
          "description": "The handle used to identify these tabs\nwith <a href="/docs/nightly/api/service/$ionicTabsDelegate/"><code>$ionicTabsDelegate</code></a>.",
          "startingLine": 42,
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
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionTabs",
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
      "description": "The handle used to identify these tabs\nwith <a href="/docs/nightly/api/service/$ionicTabsDelegate/"><code>$ionicTabsDelegate</code></a>.",
      "startingLine": 42,
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
    }
  ],
  "module": "ionic",
  "description": "Powers a multi-tabbed interface with a Tab Bar and a set of \"pages\" that can be tabbed\nthrough.\n\nAssign any [tabs class](/docs/components#tabs) or\n[animation class](/docs/components#animation) to the element to define\nits look and feel.\n\nSee the <a href="/docs/nightly/api/directive/ionTab/"><code>ionTab</code></a> directive's documentation for more details on\nindividual tabs.\n\nNote: do not place ion-tabs inside of an ion-content element; it has been known to cause a\ncertain CSS bug.",
  "usage": "```html\n<ion-tabs class=\"tabs-positive tabs-icon-only\">\n\n  <ion-tab title=\"Home\" icon-on=\"ion-ios7-filing\" icon-off=\"ion-ios7-filing-outline\">\n    <!-- Tab 1 content -->\n  </ion-tab>\n\n  <ion-tab title=\"About\" icon-on=\"ion-ios7-clock\" icon-off=\"ion-ios7-clock-outline\">\n    <!-- Tab 2 content -->\n  </ion-tab>\n\n  <ion-tab title=\"Settings\" icon-on=\"ion-ios7-gear\" icon-off=\"ion-ios7-gear-outline\">\n    <!-- Tab 3 content -->\n  </ion-tab>\n\n</ion-tabs>\n```",
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
  "delegate": "<a href="/docs/nightly/api/service/$ionicTabsDelegate/"><code>$ionicTabsDelegate</code></a>",
  "codepen": "KbrzJ",
  "id": "module:ionic.directive:ionTabs",
  "partialNames": [
    "ionTabs",
    "directive:ionTabs",
    "ionic.ionTabs",
    "module:ionic.ionTabs",
    "ionic.directive:ionTabs",
    "module:ionic.directive:ionTabs"
  ],
  "outputPath": "docs/nightly/api/directive/ionTabs/index.md",
  "path": "api/directive/ionTabs/",
  "searchTerms": {
    "titleWords": "ionTabs",
    "keywords": "about an and animation any api assign bar be been bug can cause certain class content css define delegate-handle details directive do docs documentation element feel for handle has home html icon-off icon-on identify individual inside interface ion-content ion-ios7-clock ion-ios7-clock-outline ion-ios7-filing ion-ios7-filing-outline ion-ios7-gear ion-ios7-gear-outline ion-tabs ionic iontabs it its js kbrzj known look md module more multi-tabbed not note of on or pages place powers see service set settings tab tabbed tabs tabs-icon-only tabs-positive that the these through title to used with"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-tabs class="tabs-positive tabs-icon-only">

  <ion-tab title="Home" icon-on="ion-ios7-filing" icon-off="ion-ios7-filing-outline">
    <!-- Tab 1 content -->
  </ion-tab>

  <ion-tab title="About" icon-on="ion-ios7-clock" icon-off="ion-ios7-clock-outline">
    <!-- Tab 2 content -->
  </ion-tab>

  <ion-tab title="Settings" icon-on="ion-ios7-gear" icon-off="ion-ios7-gear-outline">
    <!-- Tab 3 content -->
  </ion-tab>

</ion-tabs>
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
        <p>The handle used to identify these tabs
with <a href="/docs/nightly/api/service/$ionicTabsDelegate/"><code>$ionicTabsDelegate</code></a>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





