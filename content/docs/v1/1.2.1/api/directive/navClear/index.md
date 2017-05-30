---
layout: "docs_api"
version: "1.0.0-beta.13"
versionHref: "/docs/v1/1.2.1"
path: "api/directive/navClear/"

title: "nav-clear"
header_sub_title: "Directive in module ionic"
doc: "navClear"
docType: "directive"
---

<div class="improve-docs">
  <a href='https://github.com/ionic-team/ionic-v1/blob/master/js/angular/directive/navClear.js#L2'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/ionic-team/ionic/edit/1.x/js/angular/directive/navClear.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  nav-clear



</h1>





nav-clear is an attribute directive which should be used with an element that changes
the view on click, for example an `<a href>` or a `<button ui-sref>`.

nav-clear will cause the given element, when clicked, to disable the next view transition.
This directive is useful, for example, for links within a sideMenu.








  
<h2 id="usage">Usage</h2>
  
Below is a link in a side menu, with the nav-clear directive added to it.
Tapping this link will disable any animations that would normally occur
between views.

```html
<a nav-clear menu-close href="#/home" class="item">Home</a>
```
  
  

  





