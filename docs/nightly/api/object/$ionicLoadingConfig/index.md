---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/object/$ionicLoadingConfig/"

title: "$ionicLoadingConfig"
header_sub_title: "Object in module ionic"
doc: "$ionicLoadingConfig"
docType: "object"
---

<div class="improve-docs">
<a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/loading.js#L35'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/loading.js#L35'>
Improve this doc
</a>
</div>




<h1 class="api-title">

$ionicLoadingConfig



</h1>





Set the default options to be passed to the <a href="/docs/nightly/api/service/$ionicLoading/"><code>$ionicLoading</code></a> service.









## Usage
```js
var app = angular.module('myApp', ['ionic'])
app.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
});
app.controller('AppCtrl', function($scope, $ionicLoading) {
  $scope.showLoading = function() {
    //options default to values in $ionicLoadingConfig
    $ionicLoading.show().then(function(){
       console.log("The loading indicator is now displayed");
    });
  };
});
```


  

  
  
  






