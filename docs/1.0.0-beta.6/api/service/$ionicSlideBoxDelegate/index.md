---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicSlideBoxDelegate/"

title: "$ionicSlideBoxDelegate"
header_sub_title: "Service in module ionic"
doc: "$ionicSlideBoxDelegate"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/slideBoxDelegate.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicSlideBoxDelegate



</h1>





Delegate that controls the <a href="/docs/api/directive/ionSlideBox/"><code>ionSlideBox</code></a> directive.

Methods called directly on the $ionicSlideBoxDelegate service will control all slide boxes.  Use the <a href="/docs/api/service/$ionicSlideBoxDelegate/#$getByHandle">$getByHandle</a>
method to control specific slide box instances.









## Usage
```html
<body ng-controller="MyCtrl">
  <ion-slide-box>
    <ion-slide>
      <div class="box blue">
        <button ng-click="nextSlide()">Next slide!</button>
      </div>
    </ion-slide>
    <ion-slide>
      <div class="box red">
        Slide 2!
      </div>
    </ion-slide>
  </ion-slide-box>
</body>
```
```js
function MyCtrl($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }
}
```


  

  
## Methods

<div id="update"></div>
<h2>
  <code>update()</code>

</h2>

Update the slidebox (for example if using Angular with ng-repeat,
resize it for the elements inside).









<div id="slide"></div>
<h2>
  <code>slide(to, [speed])</code>

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
        to
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The index to slide to.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        speed
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The number of milliseconds for the change to take.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="enableSlide"></div>
<h2>
  <code>enableSlide([shouldEnable])</code>

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
        shouldEnable
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to enable sliding the slidebox.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether sliding is enabled.




<div id="previous"></div>
<h2>
  <code>previous()</code>

</h2>

Go to the previous slide. Wraps around if at the beginning.









<div id="next"></div>
<h2>
  <code>next()</code>

</h2>

Go to the next slide. Wraps around if at the end.









<div id="stop"></div>
<h2>
  <code>stop()</code>

</h2>

Stop sliding. The slideBox will not move again until
explicitly told to do so.









<div id="currentIndex"></div>
<h2>
  <code>currentIndex()</code>

</h2>








* Returns: 
   number The index of the current slide.




<div id="slidesCount"></div>
<h2>
  <code>slidesCount()</code>

</h2>








* Returns: 
   number The number of slides there are currently.




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
<a href="/docs/api/directive/ionSlideBox/"><code>ionSlideBox</code></a> directives with `delegate-handle` matching
the given handle.

Example: `$ionicSlideBoxDelegate.$getByHandle('my-handle').stop();`



  
  






