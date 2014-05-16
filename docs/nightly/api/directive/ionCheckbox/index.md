---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionCheckbox/"

title: "ion-checkbox"
header_sub_title: "Directive in module ionic"
doc: "ionCheckbox"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/checkbox.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-checkbox



</h1>


{% include codepen.html id="hqcju" %}




The checkbox is no different than the HTML checkbox input, except it's styled differently.

The checkbox behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]).








  
<pre>{
  "fileType": "js",
  "startingLine": 2,
  "file": "js/angular/directive/checkbox.js",
  "basePath": "/home/travis/build/driftyco/ionic",
  "content": "@ngdoc directive\n@name ionCheckbox\n@module ionic\n@restrict E\n@codepen hqcju\n@description\nThe checkbox is no different than the HTML checkbox input, except it's styled differently.\n\nThe checkbox behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]).\n\n@usage\n```html\n<ion-checkbox ng-model=\"isChecked\">Checkbox Label</ion-checkbox>\n```",
  "fileName": "checkbox",
  "relativePath": "js/angular/directive/checkbox.js",
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
        "description": "ionCheckbox",
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
          "name": "restrict"
        },
        "tagName": "restrict",
        "description": "E",
        "startingLine": 5
      },
      {
        "tagDef": {
          "name": "codepen"
        },
        "tagName": "codepen",
        "description": "hqcju",
        "startingLine": 6
      },
      {
        "tagDef": {
          "name": "description"
        },
        "tagName": "description",
        "description": "The checkbox is no different than the HTML checkbox input, except it's styled differently.\n\nThe checkbox behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]).",
        "startingLine": 7
      },
      {
        "tagDef": {
          "name": "usage"
        },
        "tagName": "usage",
        "description": "```html\n<ion-checkbox ng-model=\"isChecked\">Checkbox Label</ion-checkbox>\n```",
        "startingLine": 12
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
          "description": "ionCheckbox",
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
      "codepen": [
        {
          "tagDef": {
            "name": "codepen"
          },
          "tagName": "codepen",
          "description": "hqcju",
          "startingLine": 6
        }
      ],
      "description": [
        {
          "tagDef": {
            "name": "description"
          },
          "tagName": "description",
          "description": "The checkbox is no different than the HTML checkbox input, except it's styled differently.\n\nThe checkbox behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]).",
          "startingLine": 7
        }
      ],
      "usage": [
        {
          "tagDef": {
            "name": "usage"
          },
          "tagName": "usage",
          "description": "```html\n<ion-checkbox ng-model=\"isChecked\">Checkbox Label</ion-checkbox>\n```",
          "startingLine": 12
        }
      ]
    },
    "badTags": [],
    "description": ""
  },
  "name": "ionCheckbox",
  "module": "ionic",
  "description": "The checkbox is no different than the HTML checkbox input, except it's styled differently.\n\nThe checkbox behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]).",
  "usage": "```html\n<ion-checkbox ng-model=\"isChecked\">Checkbox Label</ion-checkbox>\n```",
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
  "codepen": "hqcju",
  "id": "module:ionic.directive:ionCheckbox",
  "partialNames": [
    "ionCheckbox",
    "directive:ionCheckbox",
    "ionic.ionCheckbox",
    "module:ionic.ionCheckbox",
    "ionic.directive:ionCheckbox",
    "module:ionic.directive:ionCheckbox"
  ],
  "outputPath": "docs/nightly/api/directive/ionCheckbox/index.md",
  "path": "api/directive/ionCheckbox/",
  "undefined": [
    {
      "fileType": "js",
      "startingLine": 18,
      "file": "js/angular/directive/checkbox.js",
      "basePath": "/home/travis/build/driftyco/ionic",
      "content": "@ngdoc demo\n@name ionCheckbox#simple\n@module checkboxSimple\n@javascript\nvar app = angular.module('checkboxSimple', ['ionic']);\napp.controller('CheckboxSimpleCtrl', function($scope) {\n  $scope.pizza = {\n    pepperoni: true,\n    sausage: false,\n    anchovies: true,\n    jalapenos: false\n  };\n\n  $scope.toppings = function() {\n    var toppings = Object.keys($scope.pizza).filter(function(flavor) {\n      return $scope.pizza[flavor];\n    });\n    if (toppings.length > 1) {\n      toppings[toppings.length - 1] = 'and ' + toppings[toppings.length - 1];\n    }\n    if (toppings.length > 2) {\n      return toppings.join(', ');\n    } else if (toppings.length) {\n      return toppings.join(' ');\n    } else {\n      return 'nothing';\n    }\n  };\n});\n\n@html\n<ion-header-bar class=\"bar-positive\">\n  <h1 class=\"title\">\n    Checkbox: Simple Usage\n  </h1>\n</ion-header-bar>\n<ion-content ng-controller=\"CheckboxSimpleCtrl\" class=\"padding\">\n  <h3>Your pizza has {{toppings()}}!</h3>\n  <ion-checkbox ng-model=\"pizza.pepperoni\">\n    Pepperoni?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.sausage\">\n    Sausage?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.anchovies\">\n    Jalapeno?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.jalapenos\">\n    Anchovies?\n  </ion-checkbox>\n</ion-content>",
      "fileName": "checkbox",
      "relativePath": "js/angular/directive/checkbox.js",
      "tags": {
        "tags": [
          {
            "tagDef": {
              "name": "ngdoc",
              "required": true,
              "docProperty": "docType"
            },
            "tagName": "ngdoc",
            "description": "demo",
            "startingLine": 18
          },
          {
            "tagDef": {
              "name": "name",
              "required": true
            },
            "tagName": "name",
            "description": "ionCheckbox#simple",
            "startingLine": 19
          },
          {
            "tagDef": {
              "name": "module"
            },
            "tagName": "module",
            "description": "checkboxSimple",
            "startingLine": 20
          },
          {
            "tagDef": {
              "name": "javascript"
            },
            "tagName": "javascript",
            "description": "var app = angular.module('checkboxSimple', ['ionic']);\napp.controller('CheckboxSimpleCtrl', function($scope) {\n  $scope.pizza = {\n    pepperoni: true,\n    sausage: false,\n    anchovies: true,\n    jalapenos: false\n  };\n\n  $scope.toppings = function() {\n    var toppings = Object.keys($scope.pizza).filter(function(flavor) {\n      return $scope.pizza[flavor];\n    });\n    if (toppings.length > 1) {\n      toppings[toppings.length - 1] = 'and ' + toppings[toppings.length - 1];\n    }\n    if (toppings.length > 2) {\n      return toppings.join(', ');\n    } else if (toppings.length) {\n      return toppings.join(' ');\n    } else {\n      return 'nothing';\n    }\n  };\n});",
            "startingLine": 21
          },
          {
            "tagDef": {
              "name": "html"
            },
            "tagName": "html",
            "description": "<ion-header-bar class=\"bar-positive\">\n  <h1 class=\"title\">\n    Checkbox: Simple Usage\n  </h1>\n</ion-header-bar>\n<ion-content ng-controller=\"CheckboxSimpleCtrl\" class=\"padding\">\n  <h3>Your pizza has {{toppings()}}!</h3>\n  <ion-checkbox ng-model=\"pizza.pepperoni\">\n    Pepperoni?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.sausage\">\n    Sausage?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.anchovies\">\n    Jalapeno?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.jalapenos\">\n    Anchovies?\n  </ion-checkbox>\n</ion-content>",
            "startingLine": 48
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
              "description": "demo",
              "startingLine": 18
            }
          ],
          "name": [
            {
              "tagDef": {
                "name": "name",
                "required": true
              },
              "tagName": "name",
              "description": "ionCheckbox#simple",
              "startingLine": 19
            }
          ],
          "module": [
            {
              "tagDef": {
                "name": "module"
              },
              "tagName": "module",
              "description": "checkboxSimple",
              "startingLine": 20
            }
          ],
          "javascript": [
            {
              "tagDef": {
                "name": "javascript"
              },
              "tagName": "javascript",
              "description": "var app = angular.module('checkboxSimple', ['ionic']);\napp.controller('CheckboxSimpleCtrl', function($scope) {\n  $scope.pizza = {\n    pepperoni: true,\n    sausage: false,\n    anchovies: true,\n    jalapenos: false\n  };\n\n  $scope.toppings = function() {\n    var toppings = Object.keys($scope.pizza).filter(function(flavor) {\n      return $scope.pizza[flavor];\n    });\n    if (toppings.length > 1) {\n      toppings[toppings.length - 1] = 'and ' + toppings[toppings.length - 1];\n    }\n    if (toppings.length > 2) {\n      return toppings.join(', ');\n    } else if (toppings.length) {\n      return toppings.join(' ');\n    } else {\n      return 'nothing';\n    }\n  };\n});",
              "startingLine": 21
            }
          ],
          "html": [
            {
              "tagDef": {
                "name": "html"
              },
              "tagName": "html",
              "description": "<ion-header-bar class=\"bar-positive\">\n  <h1 class=\"title\">\n    Checkbox: Simple Usage\n  </h1>\n</ion-header-bar>\n<ion-content ng-controller=\"CheckboxSimpleCtrl\" class=\"padding\">\n  <h3>Your pizza has {{toppings()}}!</h3>\n  <ion-checkbox ng-model=\"pizza.pepperoni\">\n    Pepperoni?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.sausage\">\n    Sausage?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.anchovies\">\n    Jalapeno?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.jalapenos\">\n    Anchovies?\n  </ion-checkbox>\n</ion-content>",
              "startingLine": 48
            }
          ]
        },
        "badTags": [],
        "description": ""
      },
      "name": "simple",
      "module": "checkboxSimple",
      "docType": "demo",
      "area": "api",
      "priority": 0,
      "javascript": "var app = angular.module('checkboxSimple', ['ionic']);\napp.controller('CheckboxSimpleCtrl', function($scope) {\n  $scope.pizza = {\n    pepperoni: true,\n    sausage: false,\n    anchovies: true,\n    jalapenos: false\n  };\n\n  $scope.toppings = function() {\n    var toppings = Object.keys($scope.pizza).filter(function(flavor) {\n      return $scope.pizza[flavor];\n    });\n    if (toppings.length > 1) {\n      toppings[toppings.length - 1] = 'and ' + toppings[toppings.length - 1];\n    }\n    if (toppings.length > 2) {\n      return toppings.join(', ');\n    } else if (toppings.length) {\n      return toppings.join(' ');\n    } else {\n      return 'nothing';\n    }\n  };\n});",
      "html": "<ion-header-bar class=\"bar-positive\">\n  <h1 class=\"title\">\n    Checkbox: Simple Usage\n  </h1>\n</ion-header-bar>\n<ion-content ng-controller=\"CheckboxSimpleCtrl\" class=\"padding\">\n  <h3>Your pizza has {{toppings()}}!</h3>\n  <ion-checkbox ng-model=\"pizza.pepperoni\">\n    Pepperoni?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.sausage\">\n    Sausage?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.anchovies\">\n    Jalapeno?\n  </ion-checkbox>\n  <ion-checkbox ng-model=\"pizza.jalapenos\">\n    Anchovies?\n  </ion-checkbox>\n</ion-content>",
      "id": "ionCheckbox#simple",
      "partialNames": [
        "ionCheckbox#simple",
        "simple"
      ],
      "isMember": true,
      "memberof": "ionCheckbox",
      "outputPath": "docs/nightly/api/demo/simple/index.md",
      "path": "api/demo/simple/"
    }
  ],
  "searchTerms": {
    "titleWords": "ionCheckbox",
    "keywords": "angularjs any api behaves checkbox different differently directive docs except hqcju html input ioncheckbox ionic is ischecked it js label like md module ng-model no org styled than the"
  }
}</pre>
<h2 id="usage">Usage</h2>
  
```html
<ion-checkbox ng-model="isChecked">Checkbox Label</ion-checkbox>
```
  
  

  





