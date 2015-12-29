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
<ion-slides on-slide-changed="slideHasChanged($index)">
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
        delegate-handle
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The handle used to identify this slideBox
with <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        options
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>to pass to the widget. See the full ist here: <a href="http://www.idangero.us/swiper/api/"><a href="http://www.idangero.us/swiper/api/">http://www.idangero.us/swiper/api/</a></a></p>

        
      </td>
    </tr>
    
  </tbody>
</table>









