---
layout: "docs_api"
version: "1.0.0-beta.1"
versionHref: "/docs"
path: "api/service/$ionicLoading"

title: "$ionicLoading"
header_sub_title: "Service in module ionic"
doc: "$ionicLoading"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/ext/angular/src/service/ionicLoading.js#L3'>
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
    $scope.loading = $ionicLoading.show({
      content: 'Loading',
    });
  };
  $scope.hide = function(){
    $scope.loading.hide();
  };
});
```


  

  
## Methods

<div id="show"></div>
<h2>
  <code>show(opts)</code>

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
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The options for the indicator. Available properties:</p>
<ul>
<li><code>{string=}</code> <code>content</code> The content of the indicator. Default: none.</li>
<li><code>{string=}</code> <code>animation</code> The animation of the indicator.
Default: &#39;fade-in&#39;.</li>
<li><code>{boolean=}</code> <code>showBackdrop</code> Whether to show a backdrop. Default: true.</li>
<li><code>{number=}</code> <code>maxWidth</code> The maximum width of the indicator, in pixels.
Default: 200.</li>
<li><code>{number=}</code> <code>showDelay</code> How many milliseconds to delay showing the
indicator.  Default: 0.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A shown loader with the following methods:
 - `hide()` - Hides the loader.
 - `show()` - Shows the loader.
 - `setContent(string)` - Sets the html content of the loader.



  
  






