---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/directive/ionSideMenus/"

title: "ion-side-menus"
header_sub_title: "Directive in module ionic"
doc: "ionSideMenus"
docType: "directive"
---

<div class="improve-docs">
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

![Side Menu](http://ionicframework.com.s3.amazonaws.com/docs/controllers/sidemenu.gif)

For more information on side menus, check out the documenation for
<a href="/docs/api/directive/ionSideMenuContent/"><code>ionSideMenuContent</code></a> and
<a href="/docs/api/directive/ionSideMenu/"><code>ionSideMenu</code></a>.








  
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

  

  





