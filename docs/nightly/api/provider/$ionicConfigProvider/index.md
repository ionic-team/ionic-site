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
  $ionicConfigProvider.templates.maxPrefetch(10);
});
```


  

  
## Methods

<div id="views.transition"></div>
<h2>
  <code>views.transition(transition)</code>

</h2>

Animation style when transitioning between views. Default `platform`.



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
        transition
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Which style of view transitioning to use.</p>
<ul>
<li><code>platform</code>: Dynamically choose the correct transition style depending on<pre><code>        the platform the app is running from. If the platform is
        not `ios` or `android` then it will default to `ios-transition`.</code></pre>
</li>
<li><code>ios</code>: iOS style transition.</li>
<li><code>android</code>: Android style transition.</li>
<li><code>none</code>: Do not preform animated transitions.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> View animation.




<div id="views.maxCache"></div>
<h2>
  <code>views.maxCache(maxNumber)</code>

</h2>

Maximum number of view elements to cache in the DOM. When the max number is
exceeded, the view with the longest time period since it was accessed is removed. Views
which stay in the DOM essentially caches the view's scope, current state and scroll position.
However, the scope is disconnected from the cycle when it is cached, and reconnected when it enters again.
When the maximum cached is `0`, then after each view transition, the leaving view's element will
be removed from the DOM, and the next time the same view is shown it will have to
re-compile, attach to the DOM, and link the element again.



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
        maxNumber
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Maximum number of views to retain. Default <code>10</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>number</code> How many views Ionic will hold onto until the a view is removed.




<div id="views.forwardCache"></div>
<h2>
  <code>views.forwardCache(value)</code>

</h2>

When navigating between views, by default, views that were recently visited
are cached, and the same data and DOM elements are referenced when navigating back. However,
when navigating back in the history, the "forward" view is removed so its not cached. If
you navigate forward to the same view again it'll create a new DOM element, re-compiled and
link. Basically any forward views are reset each time. Set this config to `true` to have
forward views cached and not reset on each load.



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
        value
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p><code>false</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> 




<div id="backButton.icon"></div>
<h2>
  <code>backButton.icon(classname)</code>

</h2>

Back button icon.



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
        classname
        
        
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
  <code>string</code> 




<div id="backButton.text"></div>
<h2>
  <code>backButton.text(text)</code>

</h2>

Back button text.



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
        text
        
        
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
  <code>string</code> 




<div id="backButton.previousTitleText"></div>
<h2>
  <code>backButton.previousTitleText(previousTitleText)</code>

</h2>

If the previous title text should become the back button text. This
is the default for iOS.



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
        previousTitleText
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> 




<div id="tabs.style"></div>
<h2>
  <code>tabs.style(style)</code>

</h2>

Tab style.



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
        style
        
        
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
  <code>string</code> 




<div id="tabs.position"></div>
<h2>
  <code>tabs.position(position)</code>

</h2>

Tab position.



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
        position
        
        
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
  <code>string</code> 




<div id="templates.prefetch"></div>
<h2>
  <code>templates.prefetch(shouldPrefetch)</code>

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



  
  






