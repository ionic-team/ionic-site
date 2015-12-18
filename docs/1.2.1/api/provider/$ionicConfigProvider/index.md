---
layout: "docs_api"
version: "1.2.1"
versionHref: "/docs"
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





Ionic automatically takes platform configurations into account to adjust things like what
transition style to use and whether tab icons should show on the top or bottom. For example,
iOS will move forward by transitioning the entering view from right to center and the leaving
view from center to left. However, Android will transition with the entering view going from
bottom to center, covering the previous view, which remains stationary. It should be noted
that when a platform is not iOS or Android, then it'll default to iOS. So if you are
developing on a desktop browser, it's going to take on iOS default configs.

These configs can be changed using the `$ionicConfigProvider` during the configuration phase
of your app. Additionally, `$ionicConfig` can also set and get config values during the run
phase and within the app itself.

By default, all base config variables are set to `'platform'`, which means it'll take on the
default config of the platform on which it's running. Config variables can be set at this
level so all platforms follow the same setting, rather than its platform config.
The following code would set the same config variable for all platforms:

```js
$ionicConfigProvider.views.maxCache(10);
```

Additionally, each platform can have it's own config within the `$ionicConfigProvider.platform`
property. The config below would only apply to Android devices.

```js
$ionicConfigProvider.platform.android.views.maxCache(5);
```









## Usage
```js
var myApp = angular.module('reallyCoolApp', ['ionic']);

myApp.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);

  // note that you can also chain configs
  $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
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
<li><code>platform</code>: Dynamically choose the correct transition style depending on the platform
the app is running from. If the platform is not <code>ios</code> or <code>android</code> then it will default
to <code>ios</code>.</li>
<li><code>ios</code>: iOS style transition.</li>
<li><code>android</code>: Android style transition.</li>
<li><code>none</code>: Do not perform animated transitions.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> value




<div id="views.maxCache"></div>
<h2>
  <code>views.maxCache(maxNumber)</code>

</h2>

Maximum number of view elements to cache in the DOM. When the max number is
exceeded, the view with the longest time period since it was accessed is removed. Views that
stay in the DOM cache the view's scope, current state, and scroll position. The scope is
disconnected from the `$watch` cycle when it is cached and reconnected when it enters again.
When the maximum cache is `0`, the leaving view's element will be removed from the DOM after
each view transition, and the next time the same view is shown, it will have to re-compile,
attach to the DOM, and link the element again. This disables caching, in effect.



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

By default, when navigating, views that were recently visited are cached, and
the same instance data and DOM elements are referenced when navigating back. However, when
navigating back in the history, the "forward" views are removed from the cache. If you
navigate forward to the same view again, it'll create a new DOM element and controller
instance. Basically, any forward views are reset each time. Set this config to `true` to have
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
        
        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> 




<div id="scrolling.jsScrolling"></div>
<h2>
  <code>scrolling.jsScrolling(value)</code>

</h2>

Whether to use JS or Native scrolling. Defaults to native scrolling. Setting this to
`true` has the same effect as setting each `ion-content` to have `overflow-scroll='false'`.



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
        <p>Defaults to <code>false</code> as of Ionic 1.2</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> 




<div id="backButton.icon"></div>
<h2>
  <code>backButton.icon(value)</code>

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
        value
        
        
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
  <code>backButton.text(value)</code>

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
        value
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Defaults to <code>Back</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> 




<div id="backButton.previousTitleText"></div>
<h2>
  <code>backButton.previousTitleText(value)</code>

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
        value
        
        
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




<div id="form.checkbox"></div>
<h2>
  <code>form.checkbox(value)</code>

</h2>

Checkbox style. Android defaults to `square` and iOS defaults to `circle`.



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
        
  <code>string</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> 




<div id="form.toggle"></div>
<h2>
  <code>form.toggle(value)</code>

</h2>

Toggle item style. Android defaults to `small` and iOS defaults to `large`.



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
        
  <code>string</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> 




<div id="spinner.icon"></div>
<h2>
  <code>spinner.icon(value)</code>

</h2>

Default spinner icon to use.



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
        
  <code>string</code>
      </td>
      <td>
        <p>Can be: <code>android</code>, <code>ios</code>, <code>ios-small</code>, <code>bubbles</code>, <code>circles</code>, <code>crescent</code>,
<code>dots</code>, <code>lines</code>, <code>ripple</code>, or <code>spiral</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> 




<div id="tabs.style"></div>
<h2>
  <code>tabs.style(value)</code>

</h2>

Tab style. Android defaults to `striped` and iOS defaults to `standard`.



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
        
  <code>string</code>
      </td>
      <td>
        <p>Available values include <code>striped</code> and <code>standard</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> 




<div id="tabs.position"></div>
<h2>
  <code>tabs.position(value)</code>

</h2>

Tab position. Android defaults to `top` and iOS defaults to `bottom`.



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
        
  <code>string</code>
      </td>
      <td>
        <p>Available values include <code>top</code> and <code>bottom</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> 




<div id="templates.maxPrefetch"></div>
<h2>
  <code>templates.maxPrefetch(value)</code>

</h2>

Sets the maximum number of templates to prefetch from the templateUrls defined in
$stateProvider.state. If set to `0`, the user will have to wait
for a template to be fetched the first time when navigating to a new page. Default `30`.



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
        
  <code>integer</code>
      </td>
      <td>
        <p>Max number of template to prefetch from the templateUrls defined in
<code>$stateProvider.state()</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>integer</code> 




<div id="navBar.alignTitle"></div>
<h2>
  <code>navBar.alignTitle(value)</code>

</h2>

Which side of the navBar to align the title. Default `center`.



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
        
  <code>string</code>
      </td>
      <td>
        <p>side of the navBar to align the title.</p>
<ul>
<li><p><code>platform</code>: Dynamically choose the correct title style depending on the platform
the app is running from. If the platform is <code>ios</code>, it will default to <code>center</code>.
If the platform is <code>android</code>, it will default to <code>left</code>. If the platform is not
<code>ios</code> or <code>android</code>, it will default to <code>center</code>.</p>
</li>
<li><p><code>left</code>: Left align the title in the navBar</p>
</li>
<li><code>center</code>: Center align the title in the navBar</li>
<li><code>right</code>: Right align the title in the navBar.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> value




<div id="navBar.positionPrimaryButtons"></div>
<h2>
  <code>navBar.positionPrimaryButtons(value)</code>

</h2>

Which side of the navBar to align the primary navBar buttons. Default `left`.



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
        
  <code>string</code>
      </td>
      <td>
        <p>side of the navBar to align the primary navBar buttons.</p>
<ul>
<li><p><code>platform</code>: Dynamically choose the correct title style depending on the platform
the app is running from. If the platform is <code>ios</code>, it will default to <code>left</code>.
If the platform is <code>android</code>, it will default to <code>right</code>. If the platform is not
<code>ios</code> or <code>android</code>, it will default to <code>left</code>.</p>
</li>
<li><p><code>left</code>: Left align the primary navBar buttons in the navBar</p>
</li>
<li><code>right</code>: Right align the primary navBar buttons in the navBar.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> value




<div id="navBar.positionSecondaryButtons"></div>
<h2>
  <code>navBar.positionSecondaryButtons(value)</code>

</h2>

Which side of the navBar to align the secondary navBar buttons. Default `right`.



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
        
  <code>string</code>
      </td>
      <td>
        <p>side of the navBar to align the secondary navBar buttons.</p>
<ul>
<li><p><code>platform</code>: Dynamically choose the correct title style depending on the platform
the app is running from. If the platform is <code>ios</code>, it will default to <code>right</code>.
If the platform is <code>android</code>, it will default to <code>right</code>. If the platform is not
<code>ios</code> or <code>android</code>, it will default to <code>right</code>.</p>
</li>
<li><p><code>left</code>: Left align the secondary navBar buttons in the navBar</p>
</li>
<li><code>right</code>: Right align the secondary navBar buttons in the navBar.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>string</code> value



  
  






