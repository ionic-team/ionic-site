---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionRefresher/"

title: "ion-refresher"
header_sub_title: "Directive in module ionic"
doc: "ionRefresher"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/refresher.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-refresher


<br />
<small>
  Child of <a href="/docs/api/directive/ionContent/"><code>ionContent</code></a> or <a href="/docs/api/directive/ionScroll/"><code>ionScroll</code></a>
</small>


</h1>





Allows you to add pull-to-refresh to a scrollView.

Place it as the first child of your <a href="/docs/api/directive/ionContent/"><code>ionContent</code></a> or
<a href="/docs/api/directive/ionScroll/"><code>ionScroll</code></a> element.

When refreshing is complete, $broadcast the 'scroll.refreshComplete' event
from your controller.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-content ng-controller="MyController">
  <ion-refresher
    pulling-text="Pull to refresh..."
    on-refresh="doRefresh()">
  </ion-refresher>
  <ion-list>
    <ion-item ng-repeat="item in items"></ion-item>
  </ion-list>
</ion-content>
```
```js
angular.module('testApp', ['ionic'])
.controller('MyController', function($scope, $http) {
  $scope.items = [1,2,3];
  $scope.doRefresh = function() {
    $http.get('/new-items')
     .success(function(newItems) {
       $scope.items = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});
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
        on-refresh
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when the user pulls down enough and lets go
of the refresher.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-pulling
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called when the user starts to pull down
on the refresher.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        pulling-icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon to display while the user is pulling down.
Default: &#39;ion-arrow-down-c&#39;.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        pulling-text
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The text to display while the user is pulling down.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        refreshing-icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon to display after user lets go of the
refresher.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        refreshing-text
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The text to display after the user lets go of
the refresher.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





