---
layout: "docs_api"
version: "1.0.0-beta.1"
versionHref: "/docs"
path: "api/directive/menuToggle/"

title: "menu-toggle"
header_sub_title: "Directive in module ionic"
doc: "menuToggle"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/ext/angular/src/directive/ionicSideMenu.js#L377'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  menu-toggle



</h1>





Toggle a side menu on the given side








  
<h2 id="usage">Usage</h2>
  
Below is an example of a link within a nav bar. Tapping this link would
automatically open the given side menu. Note that the menu-toggle attribute is actually "'left'", with single quotes inside of double-quotes.

```html
<ion-view>
  <ion-nav-buttons side="left">
   <button menu-toggle="'left'" class="button button-icon icon ion-navicon"></button>
  </ion-nav-buttons>
 ...
</ion-view>
```
  
  

  





