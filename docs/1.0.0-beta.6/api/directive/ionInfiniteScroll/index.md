---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionInfiniteScroll/"

title: "ion-infinite-scroll"
header_sub_title: "Directive in module ionic"
doc: "ionInfiniteScroll"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/infiniteScroll.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-infinite-scroll


<br />
<small>
  Child of <a href="/docs/api/directive/ionContent/"><code>ionContent</code></a> or <a href="/docs/api/directive/ionScroll/"><code>ionScroll</code></a>
</small>


</h1>





The ionInfiniteScroll directive allows you to call a function whenever
the user gets to the bottom of the page or near the bottom of the page.

The expression you pass in for `on-infinite` is called when the user scrolls
greater than `distance` away from the bottom of the content.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-content ng-controller="MyController">
  <ion-infinite-scroll
    on-infinite="loadMore()"
    distance="1%">
  </ion-infinite-scroll>
</ion-content>
```
```js
function MyController($scope, $http) {
  $scope.items = [];
  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  $scope.$on('stateChangeSuccess', function() {
    $scope.loadMore();
  });
}
```

An easy to way to stop infinite scroll once there is no more data to load
is to use angular's `ng-if` directive:

```html
<ion-infinite-scroll
  ng-if="moreDataCanBeLoaded()"
  icon="ion-loading-c"
  on-infinite="loadMoreData()">
</ion-infinite-scroll>
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
        on-infinite
        
        
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>What to call when the scroller reaches the
bottom.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        distance
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The distance from the bottom that the scroll must
reach to trigger the on-infinite expression. Default: 1%.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        icon
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The icon to show while loading. Default: &#39;ion-loading-d&#39;.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





