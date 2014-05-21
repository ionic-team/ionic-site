---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionToggle/"

title: "ion-toggle"
header_sub_title: "Directive in module ionic"
doc: "ionToggle"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/toggle.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-toggle



</h1>


{% include codepen.html id="tfAzj" %}




A toggle is an animated switch which binds a given model to a boolean.

Allows dragging of the switch's nub.

The toggle behaves like any [AngularJS checkbox](http://docs.angularjs.org/api/ng/input/input[checkbox]) otherwise.








  
<h2 id="usage">Usage</h2>
  
Below is an example of a toggle directive which is wired up to the `airplaneMode` model
and has the `toggle-calm` CSS class assigned to the inner element.

```html
<ion-toggle ng-model="airplaneMode" toggle-class="toggle-calm">Airplane Mode</ion-toggle>
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
        toggle-class
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Sets the CSS class on the inner <code>label.toggle</code> element created by the directive.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





