---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionView/"

title: "ion-view"
header_sub_title: "Directive in module ionic"
doc: "ionView"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/view.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-view


<br />
<small>
  Child of <a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a>
</small>


</h1>





A container for content, used to tell a parent <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>
about the current view.








  
<h2 id="usage">Usage</h2>
  
Below is an example where our page will load with a navbar containing "My Page" as the title.

```html
<ion-nav-bar></ion-nav-bar>
<ion-nav-view class="slide-left-right">
  <ion-view title="My Page">
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
        title
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The title to display on the parent <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>.</p>

        
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
<a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
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
<a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





