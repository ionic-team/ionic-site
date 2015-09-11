---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionNavTitle/"

title: "ion-nav-title"
header_sub_title: "Directive in module ionic"
doc: "ionNavTitle"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/navTitle.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navTitle.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-nav-title


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a>
</small>


</h1>





The nav title directive replaces an <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> title text with
custom HTML from within an <a href="/docs/nightly/api/directive/ionView/"><code>ionView</code></a> template. This gives each
view the ability to specify its own custom title element, such as an image or any HTML,
rather than being text-only. Alternatively, text-only titles can be updated using the
`view-title` <a href="/docs/nightly/api/directive/ionView/"><code>ionView</code></a> attribute.

Note that `ion-nav-title` must be an immediate descendant of the `ion-view` or
`ion-nav-bar` element (basically don't wrap it in another div).








  
<h2 id="usage">Usage</h2>
  
```html
<ion-nav-bar>
</ion-nav-bar>
<ion-nav-view>
  <ion-view>
    <ion-nav-title>
      <img src="logo.svg">
    </ion-nav-title>
    <ion-content>
      Some super content here!
    </ion-content>
  </ion-view>
</ion-nav-view>
```
  
  

  





