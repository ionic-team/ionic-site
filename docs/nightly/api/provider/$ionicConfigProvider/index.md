---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/provider/$ionicConfigProvider/"

title: "$ionicConfigProvider"
header_sub_title: "Provider in module ionic"
doc: "$ionicConfigProvider"
docType: "provider"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/ionicConfig.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/ionicConfig.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicConfigProvider



</h1>





$ionicConfigProvider can be used during the configuration phase of your app
to change how Ionic works.









## Usage
```js
var myApp = angular.module('reallyCoolApp', ['ionic']);

myApp.config(function($ionicConfigProvider) {
  $ionicConfigProvider.prefetchTemplates(false);
});
```


  

  
## Methods

<div id="prefetchTemplates"></div>
<h2>
  <code>prefetchTemplates(shouldPrefetch)</code>

</h2>

Set whether Ionic should prefetch all templateUrls defined in
$stateProvider.state. If set to false, the user will have to wait
for a template to be fetched the first time when navigating to a new page. Default `true`.



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
        shouldPrefetch
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether Ionic should prefetch templateUrls defined in
<code>$stateProvider.state()</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether Ionic will prefetch templateUrls defined in $stateProvider.state.



  
  






