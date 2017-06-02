---
layout: "docs_api"
version: "1.3.3"
versionHref: "/docs/v1"
path: "api/object/$ionicLoadingConfig/"

title: "$ionicLoadingConfig"
header_sub_title: "Object in module ionic"
doc: "$ionicLoadingConfig"
docType: "object"
---

<div class="improve-docs">
<a href='https://github.com/ionic-team/ionic-v1/blob/master/js/angular/service/loading.js#L36'>
View Source
</a>
&nbsp;
<a href='http://github.com/ionic-team/ionic/edit/1.x/js/angular/service/loading.js#L36'>
Improve this doc
</a>
</div>




<h1 class="api-title">

$ionicLoadingConfig



</h1>





Set the default options to be passed to the <a href="/docs/v1/api/service/$ionicLoading/"><code>$ionicLoading</code></a> service.









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


  

  
  
  






