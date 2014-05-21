---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicLoading/"

title: "$ionicLoading"
header_sub_title: "Service in module ionic"
doc: "$ionicLoading"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/loading.js#L10'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicLoading



</h1>





An overlay that can be used to indicate activity while blocking user
interaction.









## Usage
```js
angular.module('LoadingApp', ['ionic'])
.controller('LoadingCtrl', function($scope, $ionicLoading) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
});
```


  

  
## Methods

<div id="show"></div>
<h2>
  <code>show(opts)</code>

</h2>

Shows a loading indicator. If the indicator is already shown,
it will set the options given and keep the indicator shown.



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
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The options for the loading indicator. Available properties:</p>
<ul>
<li><code>{string=}</code> <code>template</code> The html content of the indicator.</li>
<li><code>{string=}</code> <code>templateUrl</code> The url of an html template to load as the content of the indicator.</li>
<li><code>{boolean=}</code> <code>noBackdrop</code> Whether to hide the backdrop. By default it will be shown.</li>
<li><code>{number=}</code> <code>delay</code> How many milliseconds to delay showing the indicator. By default there is no delay.</li>
<li><code>{number=}</code> <code>duration</code> How many milliseconds to wait until automatically
hiding the indicator. By default, the indicator will be shown until <code>.hide()</code> is called.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="hide"></div>
<h2>
  <code>hide()</code>

</h2>

Hides the loading indicator, if shown.








  
  






