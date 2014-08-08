---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionContent/"

title: "ion-content"
header_sub_title: "Directive in module ionic"
doc: "ionContent"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/content.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-content



<br/>
<small>
  Delegate: <a href="/docs/api/service/$ionicScrollDelegate/"><code>$ionicScrollDelegate</code></a>
</small>

</h1>





The ionContent directive provides an easy to use content area that can be configured
to use Ionic's custom Scroll View, or the built in overflow scrolling of the browser.

While we recommend using the custom Scroll features in Ionic in most cases, sometimes
(for performance reasons) only the browser's native overflow scrolling will suffice,
and so we've made it easy to toggle between the Ionic scroll implementation and
overflow scrolling.

You can implement pull-to-refresh with the <a href="/docs/api/directive/ionRefresher/"><code>ionRefresher</code></a>
directive, and infinite scrolling with the <a href="/docs/api/directive/ionInfiniteScroll/"><code>ionInfiniteScroll</code></a>
directive.

Be aware that this directive gets its own child scope. If you do not understand why this
is important, you can read [https://docs.angularjs.org/guide/scope](https://docs.angularjs.org/guide/scope).








  
<h2 id="usage">Usage</h2>
  
    

  ```html
  <ion-content
    [delegate-handle=""]
    [direction=""]
    [padding=""]
    [scroll=""]
    [overflow-scroll=""]
    [scrollbar-x=""]
    [scrollbar-y=""]
    [has-bouncing=""]
    [on-scroll=""]
    [on-scroll-complete=""]>
  ...
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
        padding
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to add padding to the content.
of the content.  Defaults to true on iOS, false on Android.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        scroll
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to allow scrolling of content.  Defaults to true.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        overflow-scroll
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to use overflow-scrolling instead of
Ionic scroll.</p>

        
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
    
    <tr>
      <td>
        on-scroll
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Expression to evaluate when the content is scrolled.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        on-scroll-complete
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>expression</code>
      </td>
      <td>
        <p>Expression to evaluate when a scroll action completes.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





