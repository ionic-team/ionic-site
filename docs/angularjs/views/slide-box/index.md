---
layout: docs_0.9.0
active: angularjs
title: "Slide Box"
header_sub_title: "A draggable paging component"
---

Available in:
<div class="label label-danger">Ionic-Angular 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>

Slide Box
===


The Slide Box is a multi-page container where each page can be swiped or dragged between:

<img src="http://ionicframework.com.s3.amazonaws.com/docs/controllers/slideBox.gif">

## Ionic-Angular Usage

To use the slide box in your apps, use the following markup.  The active-slide directive must be set to a $scope parameter in the controller. The slide box will open on the slide index designated in active-slide.

```html
<slide-box active-slide="activeSlideValue">
  <slide>
    <div class="box blue"><h1>BLUE</h1></div>
  </slide>
  <slide>
    <div class="box yellow"><h1>YELLOW</h1></div>
  </slide>
  <slide>
    <div class="box pink"><h1>PINK</h1></div>
  </slide>
</slide-box>
```

```js
angular.module('myApp.controllers').controller('slideBoxController', [ '$scope', function($scope) {
  $scope.activeSlideValue = 0;
}]);
```
