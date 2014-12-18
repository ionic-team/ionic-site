---
layout: "docs_api"
version: "1.0.0-beta.14"
versionHref: "/docs"
path: "api/directive/ionView/"

title: "ion-view"
header_sub_title: "Directive in module ionic"
doc: "ionView"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/view.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/view.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-view


<br />
<small>
  Child of <a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a>
</small>


</h1>





A container for view content and any navigational and header bar information. When a view
enters and exists its parent <a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a>, the view also emits view
information, such as its title, whether the back button should show or not, whether the
corresponding <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a> should show or not, which transition the view
should use to animate, and which direction to animate.

*Views are cached to improve performance.* When a view is navigated away from, its element is
left in the DOM, and its scope is disconnected from the `$watch` cycle. When navigating to a
view that is already cached, its scope is reconnected, and the existing element, which was
left in the DOM, becomes active again. This can be disabled, or the maximum number of cached
views changed in <a href="/docs/ionic.directive:ionicConfig">TODO:ionic.directive:ionicConfig</a>, in the view's `$state` configuration, or
as an attribute on the view itself (see below).








  
<h2 id="usage">Usage</h2>
  
Below is an example where our page will load with a <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a> containing
"My Page" as the title.

```html
<ion-nav-bar></ion-nav-bar>
<ion-nav-view>
  <ion-view view-title="My Page">
    <ion-content>
      Hello!
    </ion-content>
  </ion-view>
</ion-nav-view>
```

## View LifeCycle and Events

Views can be cached, which means ***controllers normally only load once***, which may
affect your controller logic. To know when a view has entered or left, events
have been added that are emitted from the view's scope. These events also
contain data about the view, such as the title and whether the back button should
show. Also contained is transition data, such as the transition type and
direction that will be or was used.

<table class="table">
 <tr>
  <td><code>$ionicView.loaded</code></td>
  <td>The view has loaded. This event only happens once per
view being created and added to the DOM. If a view leaves but is cached,
then this event will not fire again on a subsequent viewing. The loaded event
is good place to put your setup code for the view; however, it is not the
recommended event to listen to when a view becomes active.</td>
 </tr>
 <tr>
  <td><code>$ionicView.enter</code></td>
  <td>The view has fully entered and is now the active view.
This event will fire, whether it was the first load or a cached view.</td>
 </tr>
 <tr>
  <td><code>$ionicView.leave</code></td>
  <td>The view has finished leaving and is no longer the
active view. This event will fire, whether it is cached or destroyed.</td>
 </tr>
 <tr>
  <td><code>$ionicView.beforeEnter</code></td>
  <td>The view is about to enter and become the active view.</td>
 </tr>
 <tr>
  <td><code>$ionicView.beforeLeave</code></td>
  <td>The view is about to leave and no longer be the active view.</td>
 </tr>
 <tr>
  <td><code>$ionicView.afterEnter</code></td>
  <td>The view has fully entered and is now the active view.</td>
 </tr>
 <tr>
  <td><code>$ionicView.afterLeave</code></td>
  <td>The view has finished leaving and is no longer the active view.</td>
 </tr>
 <tr>
  <td><code>$ionicView.unloaded</code></td>
  <td>The view's controller has been destroyed and its element has been
removed from the DOM.</td>
 </tr>
</table>

## Caching

Caching can be disabled and enabled in multiple ways. By default, Ionic will
cache a maximum of 10 views. You can optionally choose to disable caching at
either an individual view basis, or by global configuration. Please see the
_Caching_ section in <a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a> for more info.
  
  
<h2 id="api" style="clear:both;">API</h2>

<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        view-title
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>A text-only title to display on the parent <a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a>.
For an HTML title, such as an image, see <a href="/docs/api/directive/ionNavTitle/"><code>ionNavTitle</code></a> instead.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        cache-view
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>If this view should be allowed to be cached or not.
Please see the <em>Caching</em> section in <a href="/docs/api/directive/ionNavView/"><code>ionNavView</code></a> for
more info. Default <code>true</code></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        hide-back-button
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to hide the back button on the parent
<a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        hide-nav-bar
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether to hide the parent
<a href="/docs/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





