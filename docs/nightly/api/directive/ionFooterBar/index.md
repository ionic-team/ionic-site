---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionFooterBar/"

title: "ion-footer-bar"
header_sub_title: "Directive in module ionic"
doc: "ionFooterBar"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/ext/angular/src/directive/ionicBar.js#L42'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-footer-bar



</h1>





Adds a fixed footer bar below some content.

Can also be a subfooter (higher up) if the 'bar-subfooter' class is applied.
See [the footer CSS docs](/docs/components/#footer).








  
<h2 id="usage">Usage</h2>
  
```html
<ion-content>
  Some content!
</ion-content>
<ion-footer-bar align-title="left" class="bar-assertive">
  <div class="buttons">
    <button class="button">Left Button</button>
  </div>
  <h1 class="title">Title!</h1>
  <div class="buttons" ng-click="doSomething()">
    <button class="button">Right Button</button>
  </div>
</ion-footer-bar>
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
        align-title
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Where to align the title.
Avaialble: &#39;left&#39;, &#39;right&#39;, or &#39;center&#39;.  Defaults to &#39;center&#39;.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





