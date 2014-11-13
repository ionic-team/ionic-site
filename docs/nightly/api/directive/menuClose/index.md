---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
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





Attribute directive which closes a currently opened side menu. By default,
navigation transitions will not animate between views when the menu is open and
this directive is used to close the menu. Additionally, this directive
will reset the history and make the entering view the root of its history
stack. Having the entering view become the root of the history stack is done
to replicate the user experience seen on most side menu implementations, which is
to not show the back button at the root of the stack, and only show the
menu button. It's recommended to also use the `enable-menu-with-back-views="false"`
<a href="/docs/nightly/api/directive/ionSideMenus/"><code>ionSideMenus</code></a> attribute when using the menuClose directive.








  
<h2 id="usage">Usage</h2>
  
Below is an example of a link within a side menu. Tapping this link would
automatically close the currently opened menu.

```html
<a menu-close href="#/home" class="item">Home</a>
```
  
  

  





