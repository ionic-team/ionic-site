---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionTab/"

title: "ion-tab"
header_sub_title: "Directive in module ionic"
doc: "ionTab"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/tab.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-tab


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionTabs/"><code>ionTabs</code></a>
</small>


</h1>





Contains a tab's content.  The content only exists while the given tab is selected.

Each ionTab has its own view history.








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/tab.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionTab\n@module ionic\n@restrict E\n@parent ionic.directive:ionTabs\n\n@description\nContains a tab's content.  The content only exists while the given tab is selected.\n\nEach ionTab has its own view history.\n\n@usage\n```html\n<ion-tab\n  title=\"Tab!\"\n  icon=\"my-icon\"\n  href=\"#/tab/tab-link\"\n  on-select=\"onTabSelected()\"\n  on-deselect=\"onTabDeselected()\">\n</ion-tab>\n```\nFor a complete, working tab bar example, see the <a href="/docs/nightly/api/directive/ionTabs/"><code>ionTabs</code></a> documentation.\n\n@param {string} title The title of the tab.\n@param {string=} href The link that this tab will navigate to when tapped.\n@param {string=} icon The icon of the tab. If given, this will become the default for icon-on and icon-off.\n@param {string=} icon-on The icon of the tab while it is selected.\n@param {string=} icon-off The icon of the tab while it is not selected.\n@param {expression=} badge The badge to put on this tab (usually a number).\n@param {expression=} badge-style The style of badge to put on this tab (eg tabs-positive).\n@param {expression=} on-select Called when this tab is selected.\n@param {expression=} on-deselect Called when this tab is deselected.\n@param {expression=} ng-click By default, the tab will be selected on click. If ngClick is set, it will not.  You can explicitly switch tabs using <a href="/docs/nightly/api/service/$ionicTabsDelegate/#select">$ionicTabsDelegate.select()</a>.",
  "fileName": "tab",
  "relativePath": "js/angular/directive/tab.js",
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
        "description": "ionTab",
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
        "description": "ionic.directive:ionTabs",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "Contains a tab's content.  The content only exists while the given tab is selected.\n\nEach ionTab has its own view history.",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-tab\n  title=\"Tab!\"\n  icon=\"my-icon\"\n  href=\"#/tab/tab-link\"\n  on-select=\"onTabSelected()\"\n  on-deselect=\"onTabDeselected()\">\n</ion-tab>\n```\nFor a complete, working tab bar example, see the <a href="/docs/nightly/api/directive/ionTabs/"><code>ionTabs</code></a> documentation.",
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
        "description": "The title of the tab.",
        "startingLine": 24,
        "typeExpression": "string",
        "type": {
          "type": "NameExpression",
          "name": "string"
        },
        "typeList": [
          "string"
        ],
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
        "description": "The link that this tab will navigate to when tapped.",
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
        "name": "href"
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
        "description": "The icon of the tab. If given, this will become the default for icon-on and icon-off.",
        "startingLine": 26,
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
        "name": "icon"
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
        "description": "The icon of the tab while it is selected.",
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
        "name": "icon-on"
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
        "description": "The icon of the tab while it is not selected.",
        "startingLine": 28,
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
        "name": "icon-off"
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
        "description": "The badge to put on this tab (usually a number).",
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
        "name": "badge"
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
        "description": "The style of badge to put on this tab (eg tabs-positive).",
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
        "name": "badge-style"
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
        "description": "Called when this tab is selected.",
        "startingLine": 31,
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
        "name": "on-select"
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
        "description": "Called when this tab is deselected.",
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
        "name": "on-deselect"
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
        "description": "By default, the tab will be selected on click. If ngClick is set, it will not.  You can explicitly switch tabs using <a href="/docs/nightly/api/service/$ionicTabsDelegate/#select">$ionicTabsDelegate.select()</a>.",
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
        "name": "ng-click"
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
          "description": "ionTab",
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
          "description": "ionic.directive:ionTabs",
          "startingLine": 5
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "Contains a tab's content.  The content only exists while the given tab is selected.\n\nEach ionTab has its own view history.",
          "startingLine": 7
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-tab\n  title=\"Tab!\"\n  icon=\"my-icon\"\n  href=\"#/tab/tab-link\"\n  on-select=\"onTabSelected()\"\n  on-deselect=\"onTabDeselected()\">\n</ion-tab>\n```\nFor a complete, working tab bar example, see the <a href="/docs/nightly/api/directive/ionTabs/"><code>ionTabs</code></a> documentation.",
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
          "description": "The title of the tab.",
          "startingLine": 24,
          "typeExpression": "string",
          "type": {
            "type": "NameExpression",
            "name": "string"
          },
          "typeList": [
            "string"
          ],
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
          "description": "The link that this tab will navigate to when tapped.",
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
          "name": "href"
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
          "description": "The icon of the tab. If given, this will become the default for icon-on and icon-off.",
          "startingLine": 26,
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
          "name": "icon"
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
          "description": "The icon of the tab while it is selected.",
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
          "name": "icon-on"
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
          "description": "The icon of the tab while it is not selected.",
          "startingLine": 28,
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
          "name": "icon-off"
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
          "description": "The badge to put on this tab (usually a number).",
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
          "name": "badge"
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
          "description": "The style of badge to put on this tab (eg tabs-positive).",
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
          "name": "badge-style"
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
          "description": "Called when this tab is selected.",
          "startingLine": 31,
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
          "name": "on-select"
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
          "description": "Called when this tab is deselected.",
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
          "name": "on-deselect"
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
          "description": "By default, the tab will be selected on click. If ngClick is set, it will not.  You can explicitly switch tabs using <a href="/docs/nightly/api/service/$ionicTabsDelegate/#select">$ionicTabsDelegate.select()</a>.",
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
          "name": "ng-click"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionTab",
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
      "description": "The title of the tab.",
      "startingLine": 24,
      "typeExpression": "string",
      "type": {
        "type": "NameExpression",
        "name": "string"
      },
      "typeList": [
        "string"
      ],
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
      "description": "The link that this tab will navigate to when tapped.",
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
      "name": "href"
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
      "description": "The icon of the tab. If given, this will become the default for icon-on and icon-off.",
      "startingLine": 26,
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
      "name": "icon"
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
      "description": "The icon of the tab while it is selected.",
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
      "name": "icon-on"
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
      "description": "The icon of the tab while it is not selected.",
      "startingLine": 28,
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
      "name": "icon-off"
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
      "description": "The badge to put on this tab (usually a number).",
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
      "name": "badge"
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
      "description": "The style of badge to put on this tab (eg tabs-positive).",
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
      "name": "badge-style"
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
      "description": "Called when this tab is selected.",
      "startingLine": 31,
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
      "name": "on-select"
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
      "description": "Called when this tab is deselected.",
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
      "name": "on-deselect"
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
      "description": "By default, the tab will be selected on click. If ngClick is set, it will not.  You can explicitly switch tabs using <a href="/docs/nightly/api/service/$ionicTabsDelegate/#select">$ionicTabsDelegate.select()</a>.",
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
      "name": "ng-click"
    }
  ],
  "module": "ionic",
  "description": "Contains a tab's content.  The content only exists while the given tab is selected.\n\nEach ionTab has its own view history.",
  "usage": "```html\n<ion-tab\n  title=\"Tab!\"\n  icon=\"my-icon\"\n  href=\"#/tab/tab-link\"\n  on-select=\"onTabSelected()\"\n  on-deselect=\"onTabDeselected()\">\n</ion-tab>\n```\nFor a complete, working tab bar example, see the <a href="/docs/nightly/api/directive/ionTabs/"><code>ionTabs</code></a> documentation.",
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
    "ionic.directive:ionTabs"
  ],
  "parentLinks": "<a href="/docs/nightly/api/directive/ionTabs/"><code>ionTabs</code></a>",
  "id": "module:ionic.directive:ionTab",
  "partialNames": [
    "ionTab",
    "directive:ionTab",
    "ionic.ionTab",
    "module:ionic.ionTab",
    "ionic.directive:ionTab",
    "module:ionic.directive:ionTab"
  ],
  "outputPath": "docs/nightly/api/directive/ionTab/index.md",
  "path": "api/directive/ionTab/",
  "searchTerms": {
    "titleWords": "ionTab",
    "keywords": "$ionictabsdelegate and any api badge badge-style bar be become by called can click complete contains content default deselected directive docs documentation each example exists explicitly for given has history href html icon icon-off icon-on if ionic iontab is it its js link md module my-icon navigate ng-click ngclick not number of on on-deselect on-select only ontabdeselected ontabselected own put see select selected service set style switch tab tabs tabs-positive tapped that the this title to using view when while will working you"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-tab
  title="Tab!"
  icon="my-icon"
  href="#/tab/tab-link"
  on-select="onTabSelected()"
  on-deselect="onTabDeselected()">
</ion-tab>
```
For a complete, working tab bar example, see the <a href="/docs/nightly/api/directive/ionTabs/"><code>ionTabs</code></a> documentation.
  
  
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
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The title of the tab.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        href
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The link that this tab will navigate to when tapped.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon of the tab. If given, this will become the default for icon-on and icon-off.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        icon-on
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon of the tab while it is selected.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        icon-off
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon of the tab while it is not selected.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        badge
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The badge to put on this tab (usually a number).</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        badge-style
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The style of badge to put on this tab (eg tabs-positive).</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-select
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when this tab is selected.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-deselect
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when this tab is deselected.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        ng-click
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>By default, the tab will be selected on click. If ngClick is set, it will not.  You can explicitly switch tabs using <a href="/docs/nightly/api/service/$ionicTabsDelegate/#select">$ionicTabsDelegate.select()</a>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





