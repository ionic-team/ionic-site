---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicAnimation/"

title: "$ionicAnimation"
header_sub_title: "Service in module ionic"
doc: "$ionicAnimation"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/animation.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicAnimation



</h1>





A powerful animation and transition system for Ionic apps.









## Usage
```js
angular.module('mySuperApp', ['ionic'])
.controller(function($scope, $ionicAnimation) {
   var anim = $ionicAnimate({
    // A unique, reusable name
    name: 'popIn',

    // The duration of an auto playthrough
    duration: 0.5,

    // How long to wait before running the animation
    delay: 0,

    // Whether to reverse after doing one run through
    autoReverse: false,

    // How many times to repeat? -1 or null for infinite
    repeat: -1,

    // Timing curve to use (same as CSS timing functions), or a function of time "t" to handle it yourself
    curve: 'ease-in-out'

    onStart: function() {
      // Callback on start
    },
    onEnd: function() {
      // Callback on end
    },
    step: function(amt) {

    }
  })
});
```


  

  
  
  






