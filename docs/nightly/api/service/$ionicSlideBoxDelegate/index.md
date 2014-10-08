---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/service/$ionicSlideBoxDelegate/"

title: "$ionicSlideBoxDelegate"
header_sub_title: "Service in module ionic"
doc: "$ionicSlideBoxDelegate"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/slideBoxDelegate.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/slideBoxDelegate.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicSlideBoxDelegate



</h1>





Delegate that controls the <a href="/docs/nightly/api/directive/ionSlideBox/"><code>ionSlideBox</code></a> directive.

Methods called directly on the $ionicSlideBoxDelegate service will control all slide boxes.  Use the <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/#$getByHandle">$getByHandle</a>
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
    $ionicSlideBoxDelegate.select( $ionicSlideBoxDelegate.next() );
  }
}
```


  

  
## Methods

<div id="select"></div>
<h2>
  <code>select(slideIndex)</code>

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
        slideIndex
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The index to select.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="selected"></div>
<h2>
  <code>selected()</code>

</h2>








* Returns: 
   `slideIndex` The index of the currently selected slide.




<div id="loop"></div>
<h2>
  <code>loop([shouldLoop])</code>

</h2>

Sets/gets the looping state of the slidebox (whether going next from the last slide will go back to the first slide, and vice versa).



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
        shouldLoop
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Set whether the slidebox should loop.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
   `isLoop` Whether looping is currently enabled.




<div id="previous"></div>
<h2>
  <code>previous()</code>

</h2>








* Returns: 
   `slideIndex` The index of the previous slide. Wraps around if loop is enabled.




<div id="next"></div>
<h2>
  <code>next()</code>

</h2>








* Returns: 
   `slideIndex` The index of the next slide. Wraps around if loop is enabled.




<div id="autoPlay"></div>
<h2>
  <code>autoPlay(autoPlayInterval)</code>

</h2>

Set whether the slidebox should automatically play, and at what rate.



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
        autoPlayInterval
        
        
      </td>
      <td>
        
  <code>*</code>
      </td>
      <td>
        <p>How many milliseconds delay until changing to the next slide.
Set to zero or false to stop autoPlay.</p>

        
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
   `boolean` Whether sliding is enabled.




<div id="count"></div>
<h2>
  <code>count()</code>

</h2>








* Returns: 
   `number` The number of slides there are currently.




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
<a href="/docs/nightly/api/directive/ionSlideBox/"><code>ionSlideBox</code></a> directives with `delegate-handle` matching
the given handle.

Example: `$ionicSlideBoxDelegate.$getByHandle('my-handle').select(0);`



  
  






