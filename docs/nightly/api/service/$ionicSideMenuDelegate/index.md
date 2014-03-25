---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/service/$ionicSideMenuDelegate"

title: "$ionicSideMenuDelegate"
header_sub_title: "Service in module ionic"
doc: "$ionicSideMenuDelegate"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/ext/angular/src/directive/ionicSideMenu.js#L23'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicSideMenuDelegate



</h1>





Delegate for controlling the <a href="/docs/nightly/api/directive/ionSideMenus"><code>ionSideMenus</code></a> directive.

Methods called directly on the $ionicSideMenuDelegate service will control all side
menus.  Use the <a href="/docs/nightly/api/service/$ionicSideMenuDelegate#$getByHandle">$getByHandle</a>
method to control specific ionSideMenus instances.









## Usage
```html
<body ng-controller="MainCtrl">
  <ion-side-menus>
    <ion-pane ion-side-menu-content>
      Content!
      <button ng-click="toggleLeftSideMenu()">
        Toggle Left Side Menu
      </button>
    </ion-pane>
    <ion-side-menu side="left">
      Left Menu!
    <ion-side-menu>
  </ion-side-menus>
</body>
```
```js
function MainCtrl($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
```


  

  
## Methods

<div id="toggleLeft"></div>
<h2>
  <code>toggleLeft([isOpen])</code>

</h2>

Toggle the left side menu (if it exists).



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        isOpen
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to open or close the menu.
Default: Toggles the menu.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="toggleRight"></div>
<h2>
  <code>toggleRight([isOpen])</code>

</h2>

Toggle the right side menu (if it exists).



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        isOpen
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to open or close the menu.
Default: Toggles the menu.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="isOpenLeft"></div>
<h2>
  <code>isOpenLeft()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether the left menu is currently opened.




<div id="isOpenRight"></div>
<h2>
  <code>isOpenRight()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether the right menu is currently opened.




<div id="canDragContent"></div>
<h2>
  <code>canDragContent([canDrag])</code>

</h2>





<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        canDrag
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Set whether the content can or cannot be dragged to open
side menus.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether the content can be dragged to open side menus.




<div id="$getByHandle"></div>
<h2>
  <code>$getByHandle(handle)</code>

</h2>





<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        handle
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
   `delegateInstance` A delegate instance that controls only the
<a href="/docs/nightly/api/directive/ionSideMenus"><code>ionSideMenus</code></a> directives with `delegate-handle` matching
the given handle.

Example: `$ionicSideMenuDelegate.$getByHandle('my-handle').toggleLeft();`



  
  






