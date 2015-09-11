---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/exposeAsideWhen/"

title: "expose-aside-when"
header_sub_title: "Directive in module ionic"
doc: "exposeAsideWhen"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/exposeAsideWhen.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/exposeAsideWhen.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  expose-aside-when


<br />
<small>
  Child of <a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a>
</small>


</h1>





It is common for a tablet application to hide a menu when in portrait mode, but to show the
same menu on the left side when the tablet is in landscape mode. The `exposeAsideWhen` attribute
directive can be used to accomplish a similar interface.

By default, side menus are hidden underneath its side menu content, and can be opened by either
swiping the content left or right, or toggling a button to show the side menu. However, by adding the
`exposeAsideWhen` attribute directive to an <a href="/docs/nightly/api/directive/ionSideMenu/"><code>ionSideMenu</code></a> element directive,
a side menu can be given instructions on "when" the menu should be exposed (always viewable). For
example, the `expose-aside-when="large"` attribute will keep the side menu hidden when the viewport's
width is less than `768px`, but when the viewport's width is `768px` or greater, the menu will then
always be shown and can no longer be opened or closed like it could when it was hidden for smaller
viewports.

Using `large` as the attribute's value is a shortcut value to `(min-width:768px)` since it is
the most common use-case. However, for added flexibility, any valid media query could be added
as the value, such as `(min-width:600px)` or even multiple queries such as
`(min-width:750px) and (max-width:1200px)`.








  
<h2 id="usage">Usage</h2>
  
```html
<ion-side-menus>
  <!-- Center content -->
  <ion-side-menu-content>
  </ion-side-menu-content>

  <!-- Left menu -->
  <ion-side-menu expose-aside-when="large">
  </ion-side-menu>
</ion-side-menus>
```
For a complete side menu example, see the
<a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a> documentation.
  
  

  





