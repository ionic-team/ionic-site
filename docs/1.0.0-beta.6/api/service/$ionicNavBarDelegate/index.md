---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicNavBarDelegate/"

title: "$ionicNavBarDelegate"
header_sub_title: "Service in module ionic"
doc: "$ionicNavBarDelegate"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/navBarDelegate.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicNavBarDelegate



</h1>





Delegate for controlling the <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a> directive.









## Usage
```html
<body ng-controller="MyCtrl">
  <ion-nav-bar>
    <button ng-click="setNavTitle('banana')">
      Set title to banana!
    </button>
  </ion-nav-bar>
</body>
```
```js
function MyCtrl($scope, $ionicNavBarDelegate) {
  $scope.setNavTitle = function(title) {
    $ionicNavBarDelegate.setTitle(title);
  }
}
```


  

  
## Methods

<div id="back"></div>
<h2>
  <code>back([event])</code>

</h2>

Goes back in the view history.



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
        event
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>DOMEvent</code>
      </td>
      <td>
        <p>The event object (eg from a tap event)</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="align"></div>
<h2>
  <code>align([direction])</code>

</h2>

Aligns the title with the buttons in a given direction.



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
        direction
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The direction to the align the title text towards.
Available: &#39;left&#39;, &#39;right&#39;, &#39;center&#39;. Default: &#39;center&#39;.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="showBackButton"></div>
<h2>
  <code>showBackButton([show])</code>

</h2>

Set/get whether the <a href="/docs/api/directive/ionNavBackButton/"><code>ionNavBackButton</code></a> is shown
(if it exists).



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
        show
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to show the back button.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether the back button is shown.




<div id="showBar"></div>
<h2>
  <code>showBar(show)</code>

</h2>

Set/get whether the <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a> is shown.



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
        show
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to show the bar.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether the bar is shown.




<div id="setTitle"></div>
<h2>
  <code>setTitle(title)</code>

</h2>

Set the title for the <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>.



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
        title
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The new title to show.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="changeTitle"></div>
<h2>
  <code>changeTitle(title, direction)</code>

</h2>

Change the title, transitioning the new title in and the old one out in a given direction.



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
        title
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The new title to show.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        direction
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The direction to transition the new title in.
Available: &#39;forward&#39;, &#39;back&#39;.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="getTitle"></div>
<h2>
  <code>getTitle()</code>

</h2>








* Returns: 
  <code>string</code> The current title of the navbar.




<div id="getPreviousTitle"></div>
<h2>
  <code>getPreviousTitle()</code>

</h2>








* Returns: 
  <code>string</code> The previous title of the navbar.




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
navBars with delegate-handle matching the given handle.

Example: `$ionicNavBarDelegate.$getByHandle('myHandle').setTitle('newTitle')`



  
  






