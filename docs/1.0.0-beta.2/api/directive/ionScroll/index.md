---
layout: "docs_api"
version: "1.0.0-beta.2"
versionHref: "/docs"
path: "api/directive/ionScroll/"

title: "ion-scroll"
header_sub_title: "Directive in module ionic"
doc: "ionScroll"
docType: "directive"
---

<div class="improve-docs">
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





Creates a scrollable container for all content inside.








  
<h2 id="usage">Usage</h2>
  
    

  ```html
  <ion-scroll
    [delegate-handle=""]
    [direction=""]
    [paging=""]
    [on-refresh=""]
    [on-scroll=""]
    [scrollbar-x=""]
    [scrollbar-y=""]>
  ...
  </ion-scroll>
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
        <p>Which way to scroll. &#39;x&#39; or &#39;y&#39;. Default &#39;y&#39;.</p>

        
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
        <p>Whether to show the horizontal scrollbar. Default false.</p>

        
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
    
  </tbody>
</table>

  

  





