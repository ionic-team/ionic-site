---
layout: "docs_api"
version: "1.0.0-beta.13"
versionHref: "/docs/1.0.0-beta.13"
path: "api/service/$ionicTemplateCache/"

title: "$ionicTemplateCache"
header_sub_title: "Service in module ionic"
doc: "$ionicTemplateCache"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/templateCache.js#L5'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/templateCache.js#L5'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicTemplateCache



</h1>





A service that preemptively caches template files to eliminate transition flicker and boost performance.









## Usage
State templates are cached automatically, but you can optionally cache other templates.

```js
$ionicTemplateCache('myNgIncludeTemplate.html');
```

Optionally disable all preemptive caching with the `$ionicConfigProvider` or individual states by setting `prefetchTemplate`
in the `$state` definition

```js
  angular.module('myApp', ['ionic'])
  .config(function($stateProvider, $ionicConfigProvider) {

    // disable preemptive template caching globally
    $ionicConfigProvider.prefetchTemplates(false);

    // disable individual states
    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract: true,
        prefetchTemplate: false,
        templateUrl: "tabs-templates/tabs.html"
      })
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            prefetchTemplate: false,
            templateUrl: "tabs-templates/home.html",
            controller: 'HomeTabCtrl'
          }
        }
      });
  });
```


  

  
  
  






