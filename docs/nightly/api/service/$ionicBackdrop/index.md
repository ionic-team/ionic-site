---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/service/$ionicBackdrop/"

title: "$ionicBackdrop"
header_sub_title: "Service in module ionic"
doc: "$ionicBackdrop"
docType: "service"
---

<div class="improve-docs">
<a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/backdrop.js#L1'>
View Source
</a>
&nbsp;
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

**Notes:**
- The backdrop service will broadcast 'backdrop.shown' and 'backdrop.hidden' events from the root scope,
this is useful for alerting native components not in html.









## Usage
```js
function MyController($scope, $ionicBackdrop, $timeout, $rootScope) {
  //Show a backdrop for one second
  $scope.action = function() {
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 1000);
  };

  // Execute action on backdrop disappearing
  $scope.$on('backdrop.hidden', function() {
    // Execute action
  });

  // Execute action on backdrop appearing
  $scope.$on('backdrop.shown', function() {
    // Execute action
  });

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








  
  






