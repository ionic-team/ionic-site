---
layout: "docs_api"
version: "1.0.0-rc.4"
versionHref: "/docs"
path: "api/directive/menuClose/"

title: "menu-close"
header_sub_title: "Directive in module ionic"
doc: "menuClose"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/menuClose.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/menuClose.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  menu-close



</h1>





`menu-close` is an attribute directive that closes a currently opened side menu.
Note that by default, navigation transitions will not animate between views when
the menu is open. Additionally, this directive will reset the entering view's
history stack, making the new page the root of the history stack. This is done
to replicate the user experience seen in most side menu implementations, which is
to not show the back button at the root of the stack and show only the
menu button. We recommend that you also use the `enable-menu-with-back-views="false"`
<a href="/docs/api/directive/ionSideMenus/"><code>ionSideMenus</code></a> attribute when using the menuClose directive.








  
<h2 id="usage">Usage</h2>
  
Below is an example of a link within a side menu. Tapping this link would
automatically close the currently opened menu.

```html
<a menu-close href="#/home" class="item">Home</a>
```
  
  

  





