---
layout: "docs_api"
version: "1.0.0-beta.2"
versionHref: "/docs"
path: "api/directive/navClear/"

title: "nav-clear"
header_sub_title: "Directive in module ionic"
doc: "navClear"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navClear.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  nav-clear



</h1>





Disables any transition animations between views, along with removing the back
button which would normally show on the next view. This directive is useful for
links within a sideMenu.








  
<h2 id="usage">Usage</h2>
  
Below is an example of a link within a side menu. Tapping this link would disable
any animations which would normally occur between views.

```html
<a nav-clear menu-close href="#/home" class="item">Home</a>
```
  
  

  





