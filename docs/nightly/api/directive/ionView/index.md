---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionView/"

title: "ion-view"
header_sub_title: "Directive in module ionic"
doc: "ionView"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/view.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/view.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-view


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a>
</small>


</h1>





A container for view content and any navigational and header bar information.
When a view enters and exists its parent <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a>, the view
also emits view information, such as its title, if the back button should show or not, if
the corresponding <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> should show or not, which transition the view
should use to animate, and what direction to animate.

Views are cached to improve performance. When a view is navigated away from, its
element is left in the DOM, and its scope is disconnected from the cycle. When navigating
to a view which is already cached, its scope is reconnected, and the existing element which
was left in the DOM becomes the active view. Config variables can be used to disable this
feature, or change the maximum number of views which can be cached.








  
<h2 id="usage">Usage</h2>
  
Below is an example where our page will load with a <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> containing
"My Page" as the title.

```html
<ion-nav-bar></ion-nav-bar>
<ion-nav-view>
  <ion-view view-title="My Page">
    <ion-content>
      Hello!
    </ion-content>
  </ion-view>
</ion-nav-view>
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
        view-title
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The title to display on the parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        cache-view
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>If this view should be allowed to be cached or not. Default <code>true</code></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        hide-back-button
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to hide the back button on the parent
<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        hide-nav-bar
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to hide the parent
<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





