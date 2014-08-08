---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicBackdrop/"

title: "$ionicBackdrop"
header_sub_title: "Service in module ionic"
doc: "$ionicBackdrop"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/backdrop.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicBackdrop



</h1>





Shows and hides a backdrop over the UI.  Appears behind popups, loading,
and other overlays.

Often, multiple UI components require a backdrop, but only one backdrop is
ever needed in the DOM at a time.

Therefore, each component that requires the backdrop to be shown calls
`$ionicBackdrop.retain()` when it wants the backdrop, then `$ionicBackdrop.release()`
when it is done with the backdrop.

For each time `retain` is called, the backdrop will be shown until `release` is called.

For example, if `retain` is called three times, the backdrop will be shown until `release`
is called three times.









## Usage
```js
function MyController($scope, $ionicBackdrop, $timeout) {
  //Show a backdrop for one second
  $scope.action = function() {
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 1000);
  };
}
```


  

  
## Methods

<div id="retain"></div>
<h2>
  <code>retain()</code>

</h2>

Retains the backdrop.









<div id="release"></div>
<h2>
  <code>release()</code>

</h2>

Releases the backdrop.








  
  






