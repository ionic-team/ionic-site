---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionSlidePager/"

title: "ion-slide-pager"
header_sub_title: "Directive in module ionic"
doc: "ionSlidePager"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/slideBoxPager.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/slideBoxPager.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-slide-pager


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionSlideBox/"><code>ionSlideBox</code></a>
</small>


</h1>





Shows a pager for the slidebox.

A pager is a row of small buttons at the bottom of the slidebox, each
representing one slide. When the user clicks a pager, that slide will
be selected.

For more complete examples, see <a href="/docs/nightly/api/directive/ionSlideBox/"><code>ionSlideBox</code></a>.








  
<h2 id="usage">Usage</h2>
  
This will show four pager buttons, one for each slide.

```html
<ion-slide-box>
  <ion-slide-pager></ion-slide-pager>
  <ion-slide>1</ion-slide>
  <ion-slide>2</ion-slide>
  <ion-slide>3</ion-slide>
  <ion-slide>4</ion-slide>
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
        ng-click
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>By default, clicking a pager will select the corresponding
slide. You can override this by providing an ng-click expression. The ng-click
expression will be provided a <code>$slideIndex</code> variable, signifying the slide index
matching the click.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





