---
layout: "docs_api"
version: "1.0.0-beta.1"
versionHref: "/docs"
path: "api/service/$ionicModal"

title: "$ionicModal"
header_sub_title: "Service in module ionic"
doc: "$ionicModal"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/ext/angular/src/service/ionicModal.js#L3'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicModal



</h1>





The Modal is a content pane that can go over the user's main view
temporarily.  Usually used for making a choice or editing an item.









## Usage
```html
<script id="my-modal.html" type="text/ng-template">
  <div class="modal">
    <ion-header-bar title="My Modal Title"></ion-header-bar>
    <ion-content>
      Hello!
    </ion-content>
  </div>
</script>
```
```js
angular.module('testApp', ['ionic'])
.controller('MyController', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});
```


  

  
## Methods

<div id="fromTemplate"></div>
<h2>
  <code>fromTemplate(templateString, options)</code>

</h2>





<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        templateString
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The template string to use as the modal&#39;s
content.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        options
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Options to be passed <a href="/docs/api/controller/ionicModal#initialize">ionicModal#initialize</a> method.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> An instance of an <a href="/docs/api/controller/ionicModal"><code>ionicModal</code></a>
controller.




<div id="fromTemplateUrl"></div>
<h2>
  <code>fromTemplateUrl(templateUrl, options)</code>

</h2>





<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        templateUrl
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The url to load the template from.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        options
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Options to be passed <a href="/docs/api/controller/ionicModal#initialize">ionicModal#initialize</a> method.
options object.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>promise</code> A promise that will be resolved with an instance of
an <a href="/docs/api/controller/ionicModal"><code>ionicModal</code></a> controller.



  
  






