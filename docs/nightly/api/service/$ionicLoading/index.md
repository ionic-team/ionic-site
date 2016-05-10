---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/service/$ionicLoading/"

title: "$ionicLoading"
header_sub_title: "Service in module ionic"
doc: "$ionicLoading"
docType: "service"
---

<div class="improve-docs">
<a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/loading.js#L8'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/loading.js#L8'>
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
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
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
<li><code>{object=}</code> <code>scope</code> The scope to be a child of. Default: creates a child of $rootScope.</li>
<li><code>{boolean=}</code> <code>noBackdrop</code> Whether to hide the backdrop. By default it will be shown.</li>
<li><code>{boolean=}</code> <code>hideOnStateChange</code> Whether to hide the loading spinner when navigating
to a new state. Default false.</li>
<li><code>{number=}</code> <code>delay</code> How many milliseconds to delay showing the indicator. By default there is no delay.</li>
<li><code>{number=}</code> <code>duration</code> How many milliseconds to wait until automatically
hiding the indicator. By default, the indicator will be shown until <code>.hide()</code> is called.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>promise</code> A promise which is resolved when the loading indicator is presented.




<div id="hide"></div>
<h2>
  <code>hide()</code>

</h2>

Hides the loading indicator, if shown.






* Returns: 
  <code>promise</code> A promise which is resolved when the loading indicator is hidden.



  
  






