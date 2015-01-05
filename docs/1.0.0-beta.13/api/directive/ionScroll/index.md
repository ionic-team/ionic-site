---
layout: "docs_api"
version: "1.0.0-beta.13"
versionHref: "/docs/1.0.0-beta.13"
path: "api/directive/ionScroll/"

title: "ion-scroll"
header_sub_title: "Directive in module ionic"
doc: "ionScroll"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/scroll.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/scroll.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-scroll



<br/>
<small>
  Delegate: <a href="/docs/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>
</small>

</h1>


{% include codepen.html id="mwFuh" %}




Creates a scrollable container for all content inside.








  
<h2 id="usage">Usage</h2>
  
Basic usage:

```html
<ion-scroll zooming="true" direction="xy" style="width: 500px; height: 500px">
  <div style="width: 5000px; height: 5000px; background: url('https://upload.wikimedia.org/wikipedia/commons/a/ad/Europe_geological_map-en.jpg') repeat"></div>
 </ion-scroll>
```

Note that it's important to set the height of the scroll box as well as the height of the inner
content to enable scrolling. This makes it possible to have full control over scrollable areas.

If you'd just like to have a center content scrolling area, use <a href="/docs/api/directive/ionContent/"><code>ionContent</code></a> instead.
  
  
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
        <p>The handle used to identify this scrollView
with <a href="/docs/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        direction
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Which way to scroll. &#39;x&#39; or &#39;y&#39; or &#39;xy&#39;. Default &#39;y&#39;.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        locking
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to lock scrolling in one direction at a time. Useful to set to false when zoomed in or scrolling in two directions. Default true.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        paging
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to scroll with paging.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-refresh
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called on pull-to-refresh, triggered by an <a href="/docs/api/directive/ionRefresher/"><code>ionRefresher</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-scroll
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Called whenever the user scrolls.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        scrollbar-x
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to show the horizontal scrollbar. Default true.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        scrollbar-y
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to show the vertical scrollbar. Default true.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        zooming
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to support pinch-to-zoom</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        min-zoom
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>integer</code>
      </td>
      <td>
        <p>The smallest zoom amount allowed (default is 0.5)</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        max-zoom
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>integer</code>
      </td>
      <td>
        <p>The largest zoom amount allowed (default is 3)</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        has-bouncing
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to allow scrolling to bounce past the edges
of the content.  Defaults to true on iOS, false on Android.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





