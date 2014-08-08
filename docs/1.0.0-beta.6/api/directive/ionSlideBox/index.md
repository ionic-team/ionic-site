---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionSlideBox/"

title: "ion-slide-box"
header_sub_title: "Directive in module ionic"
doc: "ionSlideBox"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/slideBox.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-slide-box



<br/>
<small>
  Delegate: <a href="/docs/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>
</small>

</h1>





The Slide Box is a multi-page container where each page can be swiped or dragged between:

![SlideBox](http://ionicframework.com.s3.amazonaws.com/docs/controllers/slideBox.gif)








  
<h2 id="usage">Usage</h2>
  
```html
<ion-slide-box on-slide-changed="slideHasChanged($index)">
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
with <a href="/docs/api/service/$ionicSlideBoxDelegate/"><code>$ionicSlideBoxDelegate</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        does-continue
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether the slide box should automatically slide.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        slide-interval
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>How many milliseconds to wait to change slides (if does-continue is true). Defaults to 4000.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        show-pager
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether a pager should be shown for this slide box.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        pager-click
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Expression to call when a pager is clicked (if show-pager is true). Is passed the &#39;index&#39; variable.</p>

        
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
        <p>Expression called whenever the slide is changed.  Is passed an &#39;$index&#39; variable.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        active-slide
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Model to bind the current slide to.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





