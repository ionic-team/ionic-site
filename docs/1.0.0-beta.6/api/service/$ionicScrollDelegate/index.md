---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicScrollDelegate/"

title: "$ionicScrollDelegate"
header_sub_title: "Service in module ionic"
doc: "$ionicScrollDelegate"
docType: "service"
---

<div class="improve-docs">
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









<div id="getScrollView"></div>
<h2>
  <code>getScrollView()</code>

</h2>








* Returns: 
  <code>object</code> The scrollView associated with this delegate.




<div id="rememberScrollPosition"></div>
<h2>
  <code>rememberScrollPosition(id)</code>

</h2>

Will make it so, when this scrollView is destroyed (user leaves the page),
the last scroll position the page was on will be saved, indexed by the
given id.

Note: for pages associated with a view under an ion-nav-view,
rememberScrollPosition automatically saves their scroll.

Related methods: scrollToRememberedPosition, forgetScrollPosition (below).

In the following example, the scroll position of the ion-scroll element
will persist, even when the user changes the toggle switch.

```html
<ion-toggle ng-model="shouldShowScrollView"></ion-toggle>
<ion-scroll delegate-handle="myScroll" ng-if="shouldShowScrollView">
  <div ng-controller="ScrollCtrl">
    <ion-list>
      {% raw %}<ion-item ng-repeat="i in items">{{i}}</ion-item>{% endraw %}
    </ion-list>
  </div>
</ion-scroll>
```
```js
function ScrollCtrl($scope, $ionicScrollDelegate) {
  var delegate = $ionicScrollDelegate.$getByHandle('myScroll');

  // Put any unique ID here.  The point of this is: every time the controller is recreated
  // we want to load the correct remembered scroll values.
  delegate.rememberScrollPosition('my-scroll-id');
  delegate.scrollToRememberedPosition();
  $scope.items = [];
  for (var i=0; i<100; i++) {
    $scope.items.push(i);
  }
}
```



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
        id
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The id to remember the scroll position of this
scrollView by.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="forgetScrollPosition"></div>
<h2>
  <code>forgetScrollPosition()</code>

</h2>

Stop remembering the scroll position for this scrollView.









<div id="scrollToRememberedPosition"></div>
<h2>
  <code>scrollToRememberedPosition([shouldAnimate])</code>

</h2>

If this scrollView has an id associated with its scroll position,
(through calling rememberScrollPosition), and that position is remembered,
load the position and scroll to it.



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
        <p>Whether to animate the scroll.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









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



  
  






