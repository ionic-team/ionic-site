---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicTabsDelegate/"

title: "$ionicTabsDelegate"
header_sub_title: "Service in module ionic"
doc: "$ionicTabsDelegate"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/tabsDelegate.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicTabsDelegate



</h1>





Delegate for controlling the <a href="/docs/api/directive/ionTabs/"><code>ionTabs</code></a> directive.

Methods called directly on the $ionicTabsDelegate service will control all ionTabs
directives. Use the <a href="/docs/api/service/$ionicTabsDelegate/#$getByHandle">$getByHandle</a>
method to control specific ionTabs instances.









## Usage
```html
<body ng-controller="MyCtrl">
  <ion-tabs>

    <ion-tab title="Tab 1">
      Hello tab 1!
      <button ng-click="selectTabWithIndex(1)">Select tab 2!</button>
    </ion-tab>
    <ion-tab title="Tab 2">Hello tab 2!</ion-tab>

  </ion-tabs>
</body>
```
```js
function MyCtrl($scope, $ionicTabsDelegate) {
  $scope.selectTabWithIndex = function(index) {
    $ionicTabsDelegate.select(index);
  }
}
```


  

  
## Methods

<div id="select"></div>
<h2>
  <code>select(index, [shouldChangeHistory])</code>

</h2>

Select the tab matching the given index.



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
        index
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Index of the tab to select.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        shouldChangeHistory
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether this selection should load this tab&#39;s
view history (if it exists) and use it, or just load the default page.
Default false.
Hint: you probably want this to be true if you have an
<a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a> inside your tab.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="selectedIndex"></div>
<h2>
  <code>selectedIndex()</code>

</h2>








* Returns: 
   `number` The index of the selected tab, or -1.




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
<a href="/docs/api/directive/ionTabs/"><code>ionTabs</code></a> directives with `delegate-handle` matching
the given handle.

Example: `$ionicTabsDelegate.$getByHandle('my-handle').select(0);`



  
  






