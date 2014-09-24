---
layout: "docs_api"
version: "1.0.0-beta.13"
versionHref: "/docs"
path: "api/directive/ionSideMenus/"

title: "ion-side-menus"
header_sub_title: "Directive in module ionic"
doc: "ionSideMenus"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/sideMenus.js#L3'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/sideMenus.js#L3'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-side-menus



<br/>
<small>
  Delegate: <a href="/docs/api/service/$ionicSideMenuDelegate/"><code>$ionicSideMenuDelegate</code></a>
</small>

</h1>





A container element for side menu(s) and the main content. Allows the left
and/or right side menu to be toggled by dragging the main content area side
to side.

To automatically close an opened menu you can add the <a href="/docs/api/directive/menuClose/"><code>menuClose</code></a>
attribute directive. Including the `menu-close` attribute is usually added to
links and buttons within `ion-side-menu` content, so that when the element is
clicked then the opened side menu will automatically close.

By default, side menus are hidden underneath its side menu content, and can be opened by
either swiping the content left or right, or toggling a button to show the side menu. However,
by adding the <a href="/docs/api/directive/exposeAsideWhen/"><code>exposeAsideWhen</code></a> attribute directive to an
<a href="/docs/api/directive/ionSideMenu/"><code>ionSideMenu</code></a> element directive, a side menu can be given instructions
on "when" the menu should be exposed (always viewable).

![Side Menu](http://ionicframework.com.s3.amazonaws.com/docs/controllers/sidemenu.gif)

For more information on side menus, check out:

- <a href="/docs/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a>
- <a href="/docs/api/directive/ionSideMenu/"><code>ionSideMenu</code></a>
- <a href="/docs/api/directive/menuClose/"><code>menuClose</code></a>
- <a href="/docs/api/directive/exposeAsideWhen/"><code>exposeAsideWhen</code></a>








  
<h2 id="usage">Usage</h2>
  
To use side menus, add an `<ion-side-menus>` parent element,
an `<ion-side-menu-content>` for the center content,
and one or more `<ion-side-menu>` directives.

```html
<ion-side-menus>
  <!-- Center content -->
  <ion-side-menu-content ng-controller="ContentController">
  </ion-side-menu-content>

  <!-- Left menu -->
  <ion-side-menu side="left">
  </ion-side-menu>

  <!-- Right menu -->
  <ion-side-menu side="right">
  </ion-side-menu>
</ion-side-menus>
```
```js
function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
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
        delegate-handle
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The handle used to identify this side menu
with <a href="/docs/api/service/$ionicSideMenuDelegate/"><code>$ionicSideMenuDelegate</code></a>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





