---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionSlides/"

title: "ion-slides"
header_sub_title: "Directive in module ionic"
doc: "ionSlides"
docType: "directive"
---

<div class="improve-docs">
<a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/slides.js#L2'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/slides.js#L2'>
Improve this doc
</a>
</div>




<h1 class="api-title">

ion-slides



<br/>
<small>
Delegate: <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>
</small>

</h1>





The Slides component is a powerful multi-page container where each page can be swiped or dragged between.

Note: this is a new version of the Ionic Slide Box based on the [Swiper](http://www.idangero.us/swiper/#.Vmc1J-ODFBc) widget from
[idangerous](http://www.idangero.us/).

![SlideBox](http://ionicframework.com.s3.amazonaws.com/docs/controllers/slideBox.gif)









<h2 id="usage">Usage</h2>

```html
<ion-slides  options="options" slider="data.slider">
  <ion-slide-page>
    <div class="box blue"><h1>BLUE</h1></div>
  </ion-slide-page>
  <ion-slide-page>
    <div class="box yellow"><h1>YELLOW</h1></div>
  </ion-slide-page>
  <ion-slide-page>
    <div class="box pink"><h1>PINK</h1></div>
  </ion-slide-page>
</ion-slides>
```

```js
$scope.options = {
  loop: false,
  effect: fade,
  speed: 500,
}
$scope.data = {};
$scope.$watch('data.slider', function(nv, ov) {
  $scope.slider = $scope.data.slider;
})
```









