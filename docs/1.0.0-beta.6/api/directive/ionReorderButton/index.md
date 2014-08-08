---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionReorderButton/"

title: "ion-reorder-button"
header_sub_title: "Directive in module ionic"
doc: "ionReorderButton"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/itemReorderButton.js#L5'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-reorder-button


<br />
<small>
  Child of <a href="/docs/api/directive/ionItem/"><code>ionItem</code></a>
</small>


</h1>














  
<h2 id="usage">Usage</h2>
  
```html
<ion-list ng-controller="MyCtrl">
  <ion-item ng-repeat="item in items">
    Item {{$index}}
    <ion-reorder-button class="ion-navicon"
                        on-reorder="moveItem(item, $fromIndex, $toIndex)">
    </ion-reorder>
  </ion-item>
</ion-list>
```
```js
function MyCtrl($scope) {
  $scope.items = [1, 2, 3, 4];
  $scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
}
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
        on-reorder
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Expression to call when an item is reordered.
Parameters given: $fromIndex, $toIndex.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





