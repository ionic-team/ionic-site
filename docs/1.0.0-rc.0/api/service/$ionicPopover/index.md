---
layout: "docs_api"
version: "1.0.0-rc.0"
versionHref: "/docs"
path: "api/service/$ionicPopover/"

title: "$ionicPopover"
header_sub_title: "Service in module ionic"
doc: "$ionicPopover"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/popover.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/popover.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicPopover



</h1>





Related: <a href="/docs/api/controller/ionicPopover/">ionicPopover controller</a>.

The Popover is a view that floats above an app’s content. Popovers provide an
easy way to present or gather information from the user and are
commonly used in the following situations:

- Show more info about the current view
- Select a commonly used tool or configuration
- Present a list of actions to perform inside one of your views

Put the content of the popover inside of an `<ion-popover-view>` element.









## Usage
```html
<p>
  <button ng-click="openPopover($event)">Open Popover</button>
</p>

<script id="my-popover.html" type="text/ng-template">
  <ion-popover-view>
    <ion-header-bar>
      <h1 class="title">My Popover Title</h1>
    </ion-header-bar>
    <ion-content>
      Hello!
    </ion-content>
  </ion-popover-view>
</script>
```
```js
angular.module('testApp', ['ionic'])
.controller('MyController', function($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
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
        <p>The template string to use as the popovers&#39;s
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
        <p>Options to be passed to the initialize method.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> An instance of an <a href="/docs/api/controller/ionicPopover/"><code>ionicPopover</code></a>
controller (ionicPopover is built on top of $ionicPopover).




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
        <p>Options to be passed to the initialize method.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>promise</code> A promise that will be resolved with an instance of
an <a href="/docs/api/controller/ionicPopover/"><code>ionicPopover</code></a> controller (ionicPopover is built on top of $ionicPopover).



  
  






