---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/collectionRepeat/"

title: "collection-repeat"
header_sub_title: "Directive in module ionic"
doc: "collectionRepeat"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/collectionRepeat.js#L2'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/collectionRepeat.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  collection-repeat



</h1>


{% include codepen.html id="7ec1ec58f2489ab8f359fa1a0fe89c15" %}




`collection-repeat` allows an app to show huge lists of items much more performantly than
`ng-repeat`.

It renders into the DOM only as many items as are currently visible.

This means that on a phone screen that can fit eight items, only the eight items matching
the current scroll position will be rendered.

**The Basics**:

- The data given to collection-repeat must be an array.
- If the `item-height` and `item-width` attributes are not supplied, it will be assumed that
  every item in the list's dimensions are the same as the first item's dimensions.
- Don't use angular one-time binding (`::`) with collection-repeat. The scope of each item is
  assigned new data and re-digested as you scroll. Bindings need to update, and one-time bindings
  won't.

**Performance Tips**:

- The iOS webview has a performance bottleneck when switching out `<img src>` attributes.
  To increase performance of images on iOS, cache your images in advance and,
  if possible, lower the number of unique images. We're working on [a solution](https://github.com/driftyco/ionic/issues/3194).








  
<h2 id="usage">Usage</h2>
  
#### Basic Item List ([codepen](http://codepen.io/ionic/pen/0c2c35a34a8b18ad4d793fef0b081693))
```html
<ion-content>
  <ion-item collection-repeat="item in items">
    {% raw %}{{item}}{% endraw %}
  </ion-item>
</ion-content>
```

#### Grid of Images ([codepen](http://codepen.io/ionic/pen/5515d4efd9d66f780e96787387f41664))
```html
<ion-content>
  <img collection-repeat="photo in photos"
    item-width="33%"
    item-height="200px"
    ng-src="{% raw %}{{photo.url}}{% endraw %}">
</ion-content>
```

#### Horizontal Scroller, Dynamic Item Width ([codepen](http://codepen.io/ionic/pen/67cc56b349124a349acb57a0740e030e))
```html
<ion-content>
  <h2>Available Kittens:</h2>
  <ion-scroll direction="x" class="available-scroller">
    <div class="photo" collection-repeat="photo in main.photos"
       item-height="250" item-width="photo.width + 30">
       <img ng-src="{{photo.src}}">
    </div>
  </ion-scroll>
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
        collection-repeat
        
        
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The expression indicating how to enumerate a collection,
  of the format  <code>variable in expression</code> – where variable is the user defined loop variable
  and <code>expression</code> is a scope expression giving the collection to enumerate.
  For example: <code>album in artist.albums</code> or <code>album in artist.albums | orderBy:&#39;name&#39;</code>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        item-width
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The width of the repeated element. The expression must return
  a number (pixels) or a percentage. Defaults to the width of the first item in the list.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        item-height
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>The height of the repeated element. The expression must return
  a number (pixels) or a percentage. Defaults to the height of the first item in the list.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        item-render-buffer
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The number of items to load before and after the visible
  items in the list. Default 10. This is good to set higher if you have lots of images to preload.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        force-refresh-images
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Force images to refresh as you scroll. This fixes a problem
  where, when an element is interchanged as scrolling, its image will still have the old src
  while the new src loads. Setting this to true comes with a small performance loss.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





