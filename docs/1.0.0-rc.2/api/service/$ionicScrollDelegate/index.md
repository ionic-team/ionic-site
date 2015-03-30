---
layout: "docs_api"
version: "1.0.0-rc.2"
versionHref: "/docs"
path: "api/service/$ionicScrollDelegate/"

title: "$ionicScrollDelegate"
header_sub_title: "Service in module ionic"
doc: "$ionicScrollDelegate"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/scrollDelegate.js#L2'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/scrollDelegate.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicScrollDelegate



</h1>





Delegate for controlling scrollViews (created by
<a href="/docs/api/directive/ionContent/"><code>ionContent</code></a> and
<a href="/docs/api/directive/ionScroll/"><code>ionScroll</code></a> directives).

Methods called directly on the $ionicScrollDelegate service will control all scroll
views.  Use the <a href="/docs/api/service/$ionicScrollDelegate/#$getByHandle">$getByHandle</a>
method to control specific scrollViews.









## Usage
```html
<body ng-controller="MainCtrl">
  <ion-content>
    <button ng-click="scrollTop()">Scroll to Top!</button>
  </ion-content>
</body>
```
```js
function MainCtrl($scope, $ionicScrollDelegate) {
  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };
}
```

Example of advanced usage, with two scroll areas using `delegate-handle`
for fine control.

```html
<body ng-controller="MainCtrl">
  <ion-content delegate-handle="mainScroll">
    <button ng-click="scrollMainToTop()">
      Scroll content to top!
    </button>
    <ion-scroll delegate-handle="small" style="height: 100px;">
      <button ng-click="scrollSmallToTop()">
        Scroll small area to top!
      </button>
    </ion-scroll>
  </ion-content>
</body>
```
```js
function MainCtrl($scope, $ionicScrollDelegate) {
  $scope.scrollMainToTop = function() {
    $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
  };
  $scope.scrollSmallToTop = function() {
    $ionicScrollDelegate.$getByHandle('small').scrollTop();
  };
}
```


  

  
## Methods

<div id="resize"></div>
<h2>
  <code>resize()</code>

</h2>

Tell the scrollView to recalculate the size of its container.









<div id="scrollTop"></div>
<h2>
  <code>scrollTop([shouldAnimate])</code>

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
        shouldAnimate
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the scroll should animate.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="scrollBottom"></div>
<h2>
  <code>scrollBottom([shouldAnimate])</code>

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
        shouldAnimate
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the scroll should animate.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="scrollTo"></div>
<h2>
  <code>scrollTo(left, top, [shouldAnimate])</code>

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
        left
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The x-value to scroll to.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        top
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The y-value to scroll to.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        shouldAnimate
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the scroll should animate.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="scrollBy"></div>
<h2>
  <code>scrollBy(left, top, [shouldAnimate])</code>

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
        left
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The x-offset to scroll by.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        top
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The y-offset to scroll by.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        shouldAnimate
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the scroll should animate.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="zoomTo"></div>
<h2>
  <code>zoomTo(level, [animate], [originLeft], [originTop])</code>

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
        level
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Level to zoom to.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        animate
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to animate the zoom.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        originLeft
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Zoom in at given left coordinate.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        originTop
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Zoom in at given top coordinate.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="zoomBy"></div>
<h2>
  <code>zoomBy(factor, [animate], [originLeft], [originTop])</code>

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
        factor
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The factor to zoom by.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        animate
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to animate the zoom.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        originLeft
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Zoom in at given left coordinate.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        originTop
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Zoom in at given top coordinate.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="getScrollPosition"></div>
<h2>
  <code>getScrollPosition()</code>

</h2>








* Returns: 
  <code>object</code> The scroll position of this view, with the following properties:
 - `{number}` `left` The distance the user has scrolled from the left (starts at 0).
 - `{number}` `top` The distance the user has scrolled from the top (starts at 0).




<div id="anchorScroll"></div>
<h2>
  <code>anchorScroll([shouldAnimate])</code>

</h2>

Tell the scrollView to scroll to the element with an id
matching window.location.hash.

If no matching element is found, it will scroll to top.



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
        shouldAnimate
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the scroll should animate.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="freezeScroll"></div>
<h2>
  <code>freezeScroll([shouldFreeze])</code>

</h2>

Does not allow this scroll view to scroll either x or y.



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
        shouldFreeze
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Should this scroll view be prevented from scrolling or not.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> If the scroll view is being prevented from scrolling or not.




<div id="freezeAllScrolls"></div>
<h2>
  <code>freezeAllScrolls([shouldFreeze])</code>

</h2>

Does not allow any of the app's scroll views to scroll either x or y.



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
        shouldFreeze
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Should all app scrolls be prevented from scrolling or not.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="getScrollView"></div>
<h2>
  <code>getScrollView()</code>

</h2>








* Returns: 
  <code>object</code> The scrollView associated with this delegate.




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
scrollViews with `delegate-handle` matching the given handle.

Example: `$ionicScrollDelegate.$getByHandle('my-handle').scrollTop();`



  
  






