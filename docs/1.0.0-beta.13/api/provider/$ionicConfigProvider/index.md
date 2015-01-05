---
layout: "docs_api"
version: "1.0.0-beta.13"
versionHref: "/docs/1.0.0-beta.13"
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
$stateProvider.state. Default true. If set to false, the user will have to wait
for a template to be fetched the first time he/she is going to a a new page.



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
        
  
      </td>
      <td>
        <p>Whether Ionic should prefetch templateUrls defined in
<code>$stateProvider.state()</code>. Default true.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether Ionic will prefetch templateUrls defined in $stateProvider.state.



  
  






