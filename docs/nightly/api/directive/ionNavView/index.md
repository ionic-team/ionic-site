---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionNavView/"

title: "ion-nav-view"
header_sub_title: "Directive in module ionic"
doc: "ionNavView"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navView.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-nav-view



</h1>


{% include codepen.html id="odqCz" %}




As a user navigates throughout your app, Ionic is able to keep track of their
navigation history. By knowing their history, transitions between views
correctly slide either left or right, or no transition at all. An additional
benefit to Ionic's navigation system is its ability to manage multiple
histories.

Ionic uses the AngularUI Router module so app interfaces can be organized
into various "states". Like Angular's core $route service, URLs can be used
to control the views. However, the AngularUI Router provides a more powerful
state manager in that states are bound to named, nested, and parallel views,
allowing more than one template to be rendered on the same page.
Additionally, each state is not required to be bound to a URL, and data can
be pushed to each state which allows much flexibility.

The ionNavView directive is used to render templates in your application. Each template
is part of a state. States are usually mapped to a url, and are defined programatically
using angular-ui-router (see [their docs](https://github.com/angular-ui/ui-router/wiki),
and remember to replace ui-view with ion-nav-view in examples).








  
<pre>{
  "fileType": "js",
  "startingLine": 1,
  "file": "js/angular/directive/navView.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionNavView\n@module ionic\n@restrict E\n@codepen odqCz\n\n@description\nAs a user navigates throughout your app, Ionic is able to keep track of their\nnavigation history. By knowing their history, transitions between views\ncorrectly slide either left or right, or no transition at all. An additional\nbenefit to Ionic's navigation system is its ability to manage multiple\nhistories.\n\nIonic uses the AngularUI Router module so app interfaces can be organized\ninto various \"states\". Like Angular's core $route service, URLs can be used\nto control the views. However, the AngularUI Router provides a more powerful\nstate manager in that states are bound to named, nested, and parallel views,\nallowing more than one template to be rendered on the same page.\nAdditionally, each state is not required to be bound to a URL, and data can\nbe pushed to each state which allows much flexibility.\n\nThe ionNavView directive is used to render templates in your application. Each template\nis part of a state. States are usually mapped to a url, and are defined programatically\nusing angular-ui-router (see [their docs](https://github.com/angular-ui/ui-router/wiki),\nand remember to replace ui-view with ion-nav-view in examples).\n\n@usage\nIn this example, we will create a navigation view that contains our different states for the app.\n\nTo do this, in our markup we use ionNavView top level directive. To display a header bar we use\nthe <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> directive that updates as we navigate through the\nnavigation stack.\n\nYou can use any [animation class](/docs/components#animation) on the navView's `animation` attribute\nto have its pages animate.\n\nRecommended for page transitions: 'slide-left-right', 'slide-left-right-ios7', 'slide-in-up'.\n\n```html\n<ion-nav-bar></ion-nav-bar>\n<ion-nav-view animation=\"slide-left-right\">\n  <!-- Center content -->\n</ion-nav-view>\n```\n\nNext, we need to setup our states that will be rendered.\n\n```js\nvar app = angular.module('myApp', ['ionic']);\napp.config(function($stateProvider) {\n  $stateProvider\n  .state('index', {\n    url: '/',\n    templateUrl: 'home.html'\n  })\n  .state('music', {\n    url: '/music',\n    templateUrl: 'music.html'\n  });\n});\n```\nThen on app start, $stateProvider will look at the url, see it matches the index state,\nand then try to load home.html into the `<ion-nav-view>`.\n\nPages are loaded by the URLs given. One simple way to create templates in Angular is to put\nthem directly into your HTML file and use the `<script type=\"text/ng-template\">` syntax.\nSo here is one way to put home.html into our app:\n\n```html\n<script id=\"home\" type=\"text/ng-template\">\n  <!-- The title of the ion-view will be shown on the navbar -->\n  <ion-view title=\"'Home'\">\n    <ion-content ng-controller=\"HomeCtrl\">\n      <!-- The content of the page -->\n      <a href=\"#/music\">Go to music page!</a>\n    </ion-content>\n  </ion-view>\n</script>\n```\n\nThis is good to do because the template will be cached for very fast loading, instead of\nhaving to fetch them from the network.\n\nPlease visit [AngularUI Router's docs](https://github.com/angular-ui/ui-router/wiki) for\nmore info. Below is a great video by the AngularUI Router guys that may help to explain\nhow it all works:\n\n<iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/dqJRoh8MnBo\"\nframeborder=\"0\" allowfullscreen></iframe>\n\n@param {string=} name A view name. The name should be unique amongst the other views in the\nsame state. You can have views of the same name that live in different states. For more\ninformation, see ui-router's [ui-view documentation](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-view).",
  "fileName": "navView",
  "relativePath": "js/angular/directive/navView.js",
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
        "description": "ionNavView",
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
          "name": "codepen"
        },
        "tagName": "codepen",
        "description": "odqCz",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "As a user navigates throughout your app, Ionic is able to keep track of their\nnavigation history. By knowing their history, transitions between views\ncorrectly slide either left or right, or no transition at all. An additional\nbenefit to Ionic's navigation system is its ability to manage multiple\nhistories.\n\nIonic uses the AngularUI Router module so app interfaces can be organized\ninto various \"states\". Like Angular's core $route service, URLs can be used\nto control the views. However, the AngularUI Router provides a more powerful\nstate manager in that states are bound to named, nested, and parallel views,\nallowing more than one template to be rendered on the same page.\nAdditionally, each state is not required to be bound to a URL, and data can\nbe pushed to each state which allows much flexibility.\n\nThe ionNavView directive is used to render templates in your application. Each template\nis part of a state. States are usually mapped to a url, and are defined programatically\nusing angular-ui-router (see [their docs](https://github.com/angular-ui/ui-router/wiki),\nand remember to replace ui-view with ion-nav-view in examples).",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "In this example, we will create a navigation view that contains our different states for the app.\n\nTo do this, in our markup we use ionNavView top level directive. To display a header bar we use\nthe <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> directive that updates as we navigate through the\nnavigation stack.\n\nYou can use any [animation class](/docs/components#animation) on the navView's `animation` attribute\nto have its pages animate.\n\nRecommended for page transitions: 'slide-left-right', 'slide-left-right-ios7', 'slide-in-up'.\n\n```html\n<ion-nav-bar></ion-nav-bar>\n<ion-nav-view animation=\"slide-left-right\">\n  <!-- Center content -->\n</ion-nav-view>\n```\n\nNext, we need to setup our states that will be rendered.\n\n```js\nvar app = angular.module('myApp', ['ionic']);\napp.config(function($stateProvider) {\n  $stateProvider\n  .state('index', {\n    url: '/',\n    templateUrl: 'home.html'\n  })\n  .state('music', {\n    url: '/music',\n    templateUrl: 'music.html'\n  });\n});\n```\nThen on app start, $stateProvider will look at the url, see it matches the index state,\nand then try to load home.html into the `<ion-nav-view>`.\n\nPages are loaded by the URLs given. One simple way to create templates in Angular is to put\nthem directly into your HTML file and use the `<script type=\"text/ng-template\">` syntax.\nSo here is one way to put home.html into our app:\n\n```html\n<script id=\"home\" type=\"text/ng-template\">\n  <!-- The title of the ion-view will be shown on the navbar -->\n  <ion-view title=\"'Home'\">\n    <ion-content ng-controller=\"HomeCtrl\">\n      <!-- The content of the page -->\n      <a href=\"#/music\">Go to music page!</a>\n    </ion-content>\n  </ion-view>\n</script>\n```\n\nThis is good to do because the template will be cached for very fast loading, instead of\nhaving to fetch them from the network.\n\nPlease visit [AngularUI Router's docs](https://github.com/angular-ui/ui-router/wiki) for\nmore info. Below is a great video by the AngularUI Router guys that may help to explain\nhow it all works:\n\n<iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/dqJRoh8MnBo\"\nframeborder=\"0\" allowfullscreen></iframe>",
        "startingLine": 27
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
        "description": "A view name. The name should be unique amongst the other views in the\nsame state. You can have views of the same name that live in different states. For more\ninformation, see ui-router's [ui-view documentation](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-view).",
        "startingLine": 91,
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
        "name": "name"
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
          "description": "ionNavView",
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
      "codepen": [
        {
          "tagDef": {
            "name": "codepen"
          },
          "tagName": "codepen",
          "description": "odqCz",
          "startingLine": 5
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "As a user navigates throughout your app, Ionic is able to keep track of their\nnavigation history. By knowing their history, transitions between views\ncorrectly slide either left or right, or no transition at all. An additional\nbenefit to Ionic's navigation system is its ability to manage multiple\nhistories.\n\nIonic uses the AngularUI Router module so app interfaces can be organized\ninto various \"states\". Like Angular's core $route service, URLs can be used\nto control the views. However, the AngularUI Router provides a more powerful\nstate manager in that states are bound to named, nested, and parallel views,\nallowing more than one template to be rendered on the same page.\nAdditionally, each state is not required to be bound to a URL, and data can\nbe pushed to each state which allows much flexibility.\n\nThe ionNavView directive is used to render templates in your application. Each template\nis part of a state. States are usually mapped to a url, and are defined programatically\nusing angular-ui-router (see [their docs](https://github.com/angular-ui/ui-router/wiki),\nand remember to replace ui-view with ion-nav-view in examples).",
          "startingLine": 7
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "In this example, we will create a navigation view that contains our different states for the app.\n\nTo do this, in our markup we use ionNavView top level directive. To display a header bar we use\nthe <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> directive that updates as we navigate through the\nnavigation stack.\n\nYou can use any [animation class](/docs/components#animation) on the navView's `animation` attribute\nto have its pages animate.\n\nRecommended for page transitions: 'slide-left-right', 'slide-left-right-ios7', 'slide-in-up'.\n\n```html\n<ion-nav-bar></ion-nav-bar>\n<ion-nav-view animation=\"slide-left-right\">\n  <!-- Center content -->\n</ion-nav-view>\n```\n\nNext, we need to setup our states that will be rendered.\n\n```js\nvar app = angular.module('myApp', ['ionic']);\napp.config(function($stateProvider) {\n  $stateProvider\n  .state('index', {\n    url: '/',\n    templateUrl: 'home.html'\n  })\n  .state('music', {\n    url: '/music',\n    templateUrl: 'music.html'\n  });\n});\n```\nThen on app start, $stateProvider will look at the url, see it matches the index state,\nand then try to load home.html into the `<ion-nav-view>`.\n\nPages are loaded by the URLs given. One simple way to create templates in Angular is to put\nthem directly into your HTML file and use the `<script type=\"text/ng-template\">` syntax.\nSo here is one way to put home.html into our app:\n\n```html\n<script id=\"home\" type=\"text/ng-template\">\n  <!-- The title of the ion-view will be shown on the navbar -->\n  <ion-view title=\"'Home'\">\n    <ion-content ng-controller=\"HomeCtrl\">\n      <!-- The content of the page -->\n      <a href=\"#/music\">Go to music page!</a>\n    </ion-content>\n  </ion-view>\n</script>\n```\n\nThis is good to do because the template will be cached for very fast loading, instead of\nhaving to fetch them from the network.\n\nPlease visit [AngularUI Router's docs](https://github.com/angular-ui/ui-router/wiki) for\nmore info. Below is a great video by the AngularUI Router guys that may help to explain\nhow it all works:\n\n<iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/dqJRoh8MnBo\"\nframeborder=\"0\" allowfullscreen></iframe>",
          "startingLine": 27
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
          "description": "A view name. The name should be unique amongst the other views in the\nsame state. You can have views of the same name that live in different states. For more\ninformation, see ui-router's [ui-view documentation](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-view).",
          "startingLine": 91,
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
          "name": "name"
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionNavView",
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
      "description": "A view name. The name should be unique amongst the other views in the\nsame state. You can have views of the same name that live in different states. For more\ninformation, see ui-router's [ui-view documentation](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-view).",
      "startingLine": 91,
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
      "name": "name"
    }
  ],
  "module": "ionic",
  "description": "As a user navigates throughout your app, Ionic is able to keep track of their\nnavigation history. By knowing their history, transitions between views\ncorrectly slide either left or right, or no transition at all. An additional\nbenefit to Ionic's navigation system is its ability to manage multiple\nhistories.\n\nIonic uses the AngularUI Router module so app interfaces can be organized\ninto various \"states\". Like Angular's core $route service, URLs can be used\nto control the views. However, the AngularUI Router provides a more powerful\nstate manager in that states are bound to named, nested, and parallel views,\nallowing more than one template to be rendered on the same page.\nAdditionally, each state is not required to be bound to a URL, and data can\nbe pushed to each state which allows much flexibility.\n\nThe ionNavView directive is used to render templates in your application. Each template\nis part of a state. States are usually mapped to a url, and are defined programatically\nusing angular-ui-router (see [their docs](https://github.com/angular-ui/ui-router/wiki),\nand remember to replace ui-view with ion-nav-view in examples).",
  "usage": "In this example, we will create a navigation view that contains our different states for the app.\n\nTo do this, in our markup we use ionNavView top level directive. To display a header bar we use\nthe <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> directive that updates as we navigate through the\nnavigation stack.\n\nYou can use any [animation class](/docs/components#animation) on the navView's `animation` attribute\nto have its pages animate.\n\nRecommended for page transitions: 'slide-left-right', 'slide-left-right-ios7', 'slide-in-up'.\n\n```html\n<ion-nav-bar></ion-nav-bar>\n<ion-nav-view animation=\"slide-left-right\">\n  <!-- Center content -->\n</ion-nav-view>\n```\n\nNext, we need to setup our states that will be rendered.\n\n```js\nvar app = angular.module('myApp', ['ionic']);\napp.config(function($stateProvider) {\n  $stateProvider\n  .state('index', {\n    url: '/',\n    templateUrl: 'home.html'\n  })\n  .state('music', {\n    url: '/music',\n    templateUrl: 'music.html'\n  });\n});\n```\nThen on app start, $stateProvider will look at the url, see it matches the index state,\nand then try to load home.html into the `<ion-nav-view>`.\n\nPages are loaded by the URLs given. One simple way to create templates in Angular is to put\nthem directly into your HTML file and use the `<script type=\"text/ng-template\">` syntax.\nSo here is one way to put home.html into our app:\n\n```html\n<script id=\"home\" type=\"text/ng-template\">\n  <!-- The title of the ion-view will be shown on the navbar -->\n  <ion-view title=\"'Home'\">\n    <ion-content ng-controller=\"HomeCtrl\">\n      <!-- The content of the page -->\n      <a href=\"#/music\">Go to music page!</a>\n    </ion-content>\n  </ion-view>\n</script>\n```\n\nThis is good to do because the template will be cached for very fast loading, instead of\nhaving to fetch them from the network.\n\nPlease visit [AngularUI Router's docs](https://github.com/angular-ui/ui-router/wiki) for\nmore info. Below is a great video by the AngularUI Router guys that may help to explain\nhow it all works:\n\n<iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/dqJRoh8MnBo\"\nframeborder=\"0\" allowfullscreen></iframe>",
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
  "codepen": "odqCz",
  "id": "module:ionic.directive:ionNavView",
  "partialNames": [
    "ionNavView",
    "directive:ionNavView",
    "ionic.ionNavView",
    "module:ionic.ionNavView",
    "ionic.directive:ionNavView",
    "module:ionic.directive:ionNavView"
  ],
  "outputPath": "docs/nightly/api/directive/ionNavView/index.md",
  "path": "api/directive/ionNavView/",
  "searchTerms": {
    "titleWords": "ionNavView",
    "keywords": "$route $stateprovider ability able additional additionally all allowfullscreen allowing allows amongst an and angular angular-ui-router angularui animate animation any api app application are as at attribute bar be because below benefit between bound by cached can center class com config contains content control core correctly create data defined different directive directly display do docs documentation each either example examples explain fast fetch file flexibility for frameborder from github given good great guys have having header height help here histories history home homectrl how however href html id in index info information instead interfaces into io ion-nav-view ion-view ionic ionnavview is it its js keep knowing left level like live load loaded loading look manage manager mapped markup matches may md module more much multiple music myapp name named navbar navigate navigates navigation navview need nested network next ng-controller no not odqcz of on one or organized other our page pages parallel part please powerful programatically provides pushed put recommended remember render rendered replace required right router same see service setup should shown simple slide slide-in-up slide-left-right slide-left-right-ios7 so src stack start state states syntax system template templates templateurl text than that the their them then this through throughout title to top track transition transitions try type ui-router ui-view unique updates url urls use used user uses using usually var various very video view views visit way we which width will with works you your youtube"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
In this example, we will create a navigation view that contains our different states for the app.

To do this, in our markup we use ionNavView top level directive. To display a header bar we use
the <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> directive that updates as we navigate through the
navigation stack.

You can use any [animation class](/docs/components#animation) on the navView's `animation` attribute
to have its pages animate.

Recommended for page transitions: 'slide-left-right', 'slide-left-right-ios7', 'slide-in-up'.

```html
<ion-nav-bar></ion-nav-bar>
<ion-nav-view animation="slide-left-right">
  <!-- Center content -->
</ion-nav-view>
```

Next, we need to setup our states that will be rendered.

```js
var app = angular.module('myApp', ['ionic']);
app.config(function($stateProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'home.html'
  })
  .state('music', {
    url: '/music',
    templateUrl: 'music.html'
  });
});
```
Then on app start, $stateProvider will look at the url, see it matches the index state,
and then try to load home.html into the `<ion-nav-view>`.

Pages are loaded by the URLs given. One simple way to create templates in Angular is to put
them directly into your HTML file and use the `<script type="text/ng-template">` syntax.
So here is one way to put home.html into our app:

```html
<script id="home" type="text/ng-template">
  <!-- The title of the ion-view will be shown on the navbar -->
  <ion-view title="'Home'">
    <ion-content ng-controller="HomeCtrl">
      <!-- The content of the page -->
      <a href="#/music">Go to music page!</a>
    </ion-content>
  </ion-view>
</script>
```

This is good to do because the template will be cached for very fast loading, instead of
having to fetch them from the network.

Please visit [AngularUI Router's docs](https://github.com/angular-ui/ui-router/wiki) for
more info. Below is a great video by the AngularUI Router guys that may help to explain
how it all works:

<iframe width="560" height="315" src="//www.youtube.com/embed/dqJRoh8MnBo"
frameborder="0" allowfullscreen></iframe>
  
  
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
        name
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>A view name. The name should be unique amongst the other views in the
same state. You can have views of the same name that live in different states. For more
information, see ui-router&#39;s <a href="http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-view">ui-view documentation</a>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





