---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionNavBar/"

title: "ion-nav-bar"
header_sub_title: "Directive in module ionic"
doc: "ionNavBar"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navBar.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-nav-bar



<br/>
<small>
  Delegate: <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>
</small>

</h1>





If we have an <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a> directive, we can also create an
`<ion-nav-bar>`, which will create a topbar that updates as the application state changes.

We can add a back button by putting an <a href="/docs/nightly/api/directive/ionNavBackButton/"><code>ionNavBackButton</code></a> inside.

We can add buttons depending on the currently visible view using
<a href="/docs/nightly/api/directive/ionNavButtons/"><code>ionNavButtons</code></a>.

Assign an [animation class](/docs/components#animations) to the element to
enable animated changing of titles (recommended: 'nav-title-slide-ios7')








  
<pre>{
  "fileType": "js",
  "startingLine": 2,
  "file": "js/angular/directive/navBar.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionNavBar\n@module ionic\n@delegate ionic.service:$ionicNavBarDelegate\n@restrict E\n\n@description\nIf we have an <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a> directive, we can also create an\n`<ion-nav-bar>`, which will create a topbar that updates as the application state changes.\n\nWe can add a back button by putting an <a href="/docs/nightly/api/directive/ionNavBackButton/"><code>ionNavBackButton</code></a> inside.\n\nWe can add buttons depending on the currently visible view using\n<a href="/docs/nightly/api/directive/ionNavButtons/"><code>ionNavButtons</code></a>.\n\nAssign an [animation class](/docs/components#animations) to the element to\nenable animated changing of titles (recommended: 'nav-title-slide-ios7')\n\n@usage\n\n```html\n<body ng-app=\"starter\">\n  <!-- The nav bar that will be updated as we navigate -->\n  <ion-nav-bar class=\"bar-positive nav-title-slide-ios7\">\n  </ion-nav-bar>\n\n  <!-- where the initial view template will be rendered -->\n  <ion-nav-view></ion-nav-view>\n</body>\n```\n\n@param {string=} delegate-handle The handle used to identify this navBar\nwith <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.\n@param align-title {string=} Where to align the title of the navbar.\nAvailable: 'left', 'right', 'center'. Defaults to 'center'.\n\n</table><br/>\n\n### Alternative Usage\n\nAlternatively, you may put ion-nav-bar inside of each individual view's ion-view element.\nThis will allow you to have the whole navbar, not just its contents, transition every view change.\n\nThis is similar to using a header bar inside your ion-view, except it will has all the power of a navbar.\n\nIf you do this, simply put nav buttons inside the navbar itself; do not use `<ion-nav-buttons>`.\n\n\n```html\n<ion-nav-bar class=\"bar-positive\">\n  <ion-nav-back-button>\n    Back\n  </ion-nav-back-button>\n  <div class=\"buttons right-buttons\">\n    <button class=\"button\">\n      Right Button\n    </button>\n  </div>\n</ion-nav-bar>\n<ion-view title=\"myTitle\">\n</ion-view>\n```",
  "fileName": "navBar",
  "relativePath": "js/angular/directive/navBar.js",
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
        "description": "ionNavBar",
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
        "description": "ionic.service:$ionicNavBarDelegate",
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
        "description": "If we have an <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a> directive, we can also create an\n`<ion-nav-bar>`, which will create a topbar that updates as the application state changes.\n\nWe can add a back button by putting an <a href="/docs/nightly/api/directive/ionNavBackButton/"><code>ionNavBackButton</code></a> inside.\n\nWe can add buttons depending on the currently visible view using\n<a href="/docs/nightly/api/directive/ionNavButtons/"><code>ionNavButtons</code></a>.\n\nAssign an [animation class](/docs/components#animations) to the element to\nenable animated changing of titles (recommended: 'nav-title-slide-ios7')",
        "startingLine": 8
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<body ng-app=\"starter\">\n  <!-- The nav bar that will be updated as we navigate -->\n  <ion-nav-bar class=\"bar-positive nav-title-slide-ios7\">\n  </ion-nav-bar>\n\n  <!-- where the initial view template will be rendered -->\n  <ion-nav-view></ion-nav-view>\n</body>\n```",
        "startingLine": 20
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
        "description": "The handle used to identify this navBar\nwith <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.",
        "startingLine": 33,
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
        "description": "Where to align the title of the navbar.\nAvailable: 'left', 'right', 'center'. Defaults to 'center'.\n\n</table><br/>\n\n### Alternative Usage\n\nAlternatively, you may put ion-nav-bar inside of each individual view's ion-view element.\nThis will allow you to have the whole navbar, not just its contents, transition every view change.\n\nThis is similar to using a header bar inside your ion-view, except it will has all the power of a navbar.\n\nIf you do this, simply put nav buttons inside the navbar itself; do not use `<ion-nav-buttons>`.\n\n\n```html\n<ion-nav-bar class=\"bar-positive\">\n  <ion-nav-back-button>\n    Back\n  </ion-nav-back-button>\n  <div class=\"buttons right-buttons\">\n    <button class=\"button\">\n      Right Button\n    </button>\n  </div>\n</ion-nav-bar>\n<ion-view title=\"myTitle\">\n</ion-view>\n```",
        "startingLine": 35,
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
          "description": "ionNavBar",
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
          "description": "ionic.service:$ionicNavBarDelegate",
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
          "description": "If we have an <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a> directive, we can also create an\n`<ion-nav-bar>`, which will create a topbar that updates as the application state changes.\n\nWe can add a back button by putting an <a href="/docs/nightly/api/directive/ionNavBackButton/"><code>ionNavBackButton</code></a> inside.\n\nWe can add buttons depending on the currently visible view using\n<a href="/docs/nightly/api/directive/ionNavButtons/"><code>ionNavButtons</code></a>.\n\nAssign an [animation class](/docs/components#animations) to the element to\nenable animated changing of titles (recommended: 'nav-title-slide-ios7')",
          "startingLine": 8
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<body ng-app=\"starter\">\n  <!-- The nav bar that will be updated as we navigate -->\n  <ion-nav-bar class=\"bar-positive nav-title-slide-ios7\">\n  </ion-nav-bar>\n\n  <!-- where the initial view template will be rendered -->\n  <ion-nav-view></ion-nav-view>\n</body>\n```",
          "startingLine": 20
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
          "description": "The handle used to identify this navBar\nwith <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.",
          "startingLine": 33,
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
          "description": "Where to align the title of the navbar.\nAvailable: 'left', 'right', 'center'. Defaults to 'center'.\n\n</table><br/>\n\n### Alternative Usage\n\nAlternatively, you may put ion-nav-bar inside of each individual view's ion-view element.\nThis will allow you to have the whole navbar, not just its contents, transition every view change.\n\nThis is similar to using a header bar inside your ion-view, except it will has all the power of a navbar.\n\nIf you do this, simply put nav buttons inside the navbar itself; do not use `<ion-nav-buttons>`.\n\n\n```html\n<ion-nav-bar class=\"bar-positive\">\n  <ion-nav-back-button>\n    Back\n  </ion-nav-back-button>\n  <div class=\"buttons right-buttons\">\n    <button class=\"button\">\n      Right Button\n    </button>\n  </div>\n</ion-nav-bar>\n<ion-view title=\"myTitle\">\n</ion-view>\n```",
          "startingLine": 35,
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
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionNavBar",
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
      "description": "The handle used to identify this navBar\nwith <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.",
      "startingLine": 33,
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
      "description": "Where to align the title of the navbar.\nAvailable: 'left', 'right', 'center'. Defaults to 'center'.\n\n</table><br/>\n\n### Alternative Usage\n\nAlternatively, you may put ion-nav-bar inside of each individual view's ion-view element.\nThis will allow you to have the whole navbar, not just its contents, transition every view change.\n\nThis is similar to using a header bar inside your ion-view, except it will has all the power of a navbar.\n\nIf you do this, simply put nav buttons inside the navbar itself; do not use `<ion-nav-buttons>`.\n\n\n```html\n<ion-nav-bar class=\"bar-positive\">\n  <ion-nav-back-button>\n    Back\n  </ion-nav-back-button>\n  <div class=\"buttons right-buttons\">\n    <button class=\"button\">\n      Right Button\n    </button>\n  </div>\n</ion-nav-bar>\n<ion-view title=\"myTitle\">\n</ion-view>\n```",
      "startingLine": 35,
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
  "description": "If we have an <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a> directive, we can also create an\n`<ion-nav-bar>`, which will create a topbar that updates as the application state changes.\n\nWe can add a back button by putting an <a href="/docs/nightly/api/directive/ionNavBackButton/"><code>ionNavBackButton</code></a> inside.\n\nWe can add buttons depending on the currently visible view using\n<a href="/docs/nightly/api/directive/ionNavButtons/"><code>ionNavButtons</code></a>.\n\nAssign an [animation class](/docs/components#animations) to the element to\nenable animated changing of titles (recommended: 'nav-title-slide-ios7')",
  "usage": "```html\n<body ng-app=\"starter\">\n  <!-- The nav bar that will be updated as we navigate -->\n  <ion-nav-bar class=\"bar-positive nav-title-slide-ios7\">\n  </ion-nav-bar>\n\n  <!-- where the initial view template will be rendered -->\n  <ion-nav-view></ion-nav-view>\n</body>\n```",
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
  "delegate": "<a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>",
  "id": "module:ionic.directive:ionNavBar",
  "partialNames": [
    "ionNavBar",
    "directive:ionNavBar",
    "ionic.ionNavBar",
    "module:ionic.ionNavBar",
    "ionic.directive:ionNavBar",
    "module:ionic.directive:ionNavBar"
  ],
  "outputPath": "docs/nightly/api/directive/ionNavBar/index.md",
  "path": "api/directive/ionNavBar/",
  "searchTerms": {
    "titleWords": "ionNavBar",
    "keywords": "add align align-title all allow also alternative alternatively an animated animations any api application as assign available back bar bar-positive be button buttons by can center change changes changing class contents create currently defaults delegate-handle depending directive do docs each element enable every except handle has have header html identify if individual initial inside ion-nav-bar ion-view ionic ionnavbar is it its itself js just left may md module mytitle nav nav-title-slide-ios7 navbar navigate ng-app not of on power put putting rendered right right-buttons service similar simply starter state template that the this title titles to topbar transition updated updates usage use used using view visible we where which whole will with you your"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<body ng-app="starter">
  <!-- The nav bar that will be updated as we navigate -->
  <ion-nav-bar class="bar-positive nav-title-slide-ios7">
  </ion-nav-bar>

  <!-- where the initial view template will be rendered -->
  <ion-nav-view></ion-nav-view>
</body>
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
        <p>The handle used to identify this navBar
with <a href="/docs/nightly/api/service/$ionicNavBarDelegate/"><code>$ionicNavBarDelegate</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        align-title
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Where to align the title of the navbar.
Available: &#39;left&#39;, &#39;right&#39;, &#39;center&#39;. Defaults to &#39;center&#39;.</p>
<p></table><br/></p>
<h3 id="alternative-usage">Alternative Usage</h3>
<p>Alternatively, you may put ion-nav-bar inside of each individual view&#39;s ion-view element.
This will allow you to have the whole navbar, not just its contents, transition every view change.</p>
<p>This is similar to using a header bar inside your ion-view, except it will has all the power of a navbar.</p>
<p>If you do this, simply put nav buttons inside the navbar itself; do not use <code>&lt;ion-nav-buttons&gt;</code>.</p>
<pre><code class="lang-html">&lt;ion-nav-bar class=&quot;bar-positive&quot;&gt;
  &lt;ion-nav-back-button&gt;
    Back
  &lt;/ion-nav-back-button&gt;
  &lt;div class=&quot;buttons right-buttons&quot;&gt;
    &lt;button class=&quot;button&quot;&gt;
      Right Button
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/ion-nav-bar&gt;
&lt;ion-view title=&quot;myTitle&quot;&gt;
&lt;/ion-view&gt;</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





