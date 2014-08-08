---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionNavButtons/"

title: "ion-nav-buttons"
header_sub_title: "Directive in module ionic"
doc: "ionNavButtons"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navButtons.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-nav-buttons


<br />
<small>
  Child of <a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a>
</small>


</h1>





Use ionNavButtons to set the buttons on your <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>
from within an <a href="/docs/api/directive/ionView/"><code>ionView</code></a>.

Any buttons you declare will be placed onto the navbar's corresponding side,
and then destroyed when the user leaves their parent view.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-nav-bar>
</ion-nav-bar>
<ion-nav-view>
  <ion-view>
    <ion-nav-buttons side="left">
      <button class="button" ng-click="doSomething()">
        I'm a button on the left of the navbar!
      </button>
    </ion-nav-buttons>
    <ion-content>
      Some super content here!
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
        side
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The side to place the buttons on in the parent
<a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>. Available: &#39;left&#39; or &#39;right&#39;.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





