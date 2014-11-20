---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionSlideBox/"

title: "ion-slide-box"
header_sub_title: "Directive in module ionic"
doc: "ionSlideBox"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/slideBox.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/slideBox.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-slide-box



<br/>
<small>
  Delegate: <a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>
</small>

</h1>





The Slide Box is a multi-page container where each page can be swiped or dragged between:

![SlideBox](http://ionicframework.com.s3.amazonaws.com/docs/controllers/slideBox.gif)

Note: The slideBox will take up the whole width and height of its parent element.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-content>
  <ion-slide-box on-slide-changed="slideHasChanged($slideIndex)" loop="shouldLoop" auto-play="3000">
    <ion-slide>
      <div class="box blue"><h1>BLUE</h1></div>
    </ion-slide>
    <ion-slide>
      <div class="box yellow"><h1>YELLOW</h1></div>
    </ion-slide>
    <ion-slide>
      <div class="box pink"><h1>PINK</h1></div>
    </ion-slide>
  </ion-slide-box>
</ion-content>
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
        selected
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>A model bound to the selected slide index.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        loop
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the slide box should loop. Default false.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        auto-play
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>If a positive number, then every time the given number of milliseconds have passed, slideBox will go to the next slide. Set to a non-positive number to disable. Default: -1.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-slide-changed
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Expression called whenever the slide is changed.  Is passed a &#39;$slideIndex&#39; variable.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        delegate-handle
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The handle used to identify this slideBox with
<a href="/docs/nightly/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





