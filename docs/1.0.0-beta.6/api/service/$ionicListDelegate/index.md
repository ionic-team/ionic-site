---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicListDelegate/"

title: "$ionicListDelegate"
header_sub_title: "Service in module ionic"
doc: "$ionicListDelegate"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/controller/listController.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicListDelegate



</h1>





Delegate for controlling the <a href="/docs/api/directive/ionList/"><code>ionList</code></a> directive.

Methods called directly on the $ionicListDelegate service will control all lists.
Use the <a href="/docs/api/service/$ionicListDelegate/#$getByHandle">$getByHandle</a>
method to control specific ionList instances.









## Usage
````html
<ion-content ng-controller="MyCtrl">
  <button class="button" ng-click="showDeleteButtons()"></button>
  <ion-list>
    <ion-item ng-repeat="i in items">>
      {% raw %}Hello, {{i}}!{% endraw %}
      <ion-delete-button class="ion-minus-circled"></ion-delete-button>
    </ion-item>
  </ion-list>
</ion-content>
```
```js
function MyCtrl($scope, $ionicListDelegate) {
  $scope.showDeleteButtons = function() {
    $ionicListDelegate.showDelete(true);
  };
}
```


  

  
## Methods

<div id="showReorder"></div>
<h2>
  <code>showReorder([showReorder])</code>

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
        showReorder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Set whether or not this list is showing its reorder buttons.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether the reorder buttons are shown.




<div id="showDelete"></div>
<h2>
  <code>showDelete([showReorder])</code>

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
        showReorder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Set whether or not this list is showing its delete buttons.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether the delete buttons are shown.




<div id="canSwipeItems"></div>
<h2>
  <code>canSwipeItems([showReorder])</code>

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
        showReorder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Set whether or not this list is able to swipe to show
option buttons.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether the list is able to swipe to show option buttons.




<div id="closeOptionButtons"></div>
<h2>
  <code>closeOptionButtons()</code>

</h2>

Closes any option buttons on the list that are swiped open.









<div id="$getByHandle"></div>
<h2>
  <code>$getByHandle(handle)</code>

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
        handle
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
   `delegateInstance` A delegate instance that controls only the
<a href="/docs/api/directive/ionList/"><code>ionList</code></a> directives with `delegate-handle` matching
the given handle.

Example: `$ionicListDelegate.$getByHandle('my-handle').showReorder(true);`



  
  






