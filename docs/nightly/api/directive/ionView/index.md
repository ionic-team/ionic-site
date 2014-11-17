---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
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
  Child of <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a>
</small>


</h1>





A container for view content and any navigational and header bar information.
When a view enters and exists its parent <a href="/docs/nightly/api/directive/ionNavView/"><code>ionNavView</code></a>, the view
also emits view information, such as its title, if the back button should show or not, if
the corresponding <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> should show or not, which transition the view
should use to animate, and what direction to animate.

Views are cached to improve performance. When a view is navigated away from, its
element is left in the DOM, and its scope is disconnected from the cycle. When navigating
to a view which is already cached, its scope is reconnected, and the existing element which
was left in the DOM becomes the active view. Config variables can be used to disable this
feature, or change the maximum number of views which can be cached.








  
<h2 id="usage">Usage</h2>
  
Below is an example where our page will load with a <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> containing
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

Views can be cached which means controllers may only load once, which could change how you'd
expect controllers to fire. To know when a view has entered or left, events have been added that
get emitted from the view's scope. These events also contain data about the view,
such as the title and if the back button should show, along with transition data, such as the
transition type and direction that will be or was used.

* `$ionicView.loaded`: The view has loaded. This event only happens once per the scope being created
and view element added to the DOM. If a view leaves and is cached, then a subsequent time it enters
this this event will not fire again, rather it would only fire again if the view was not cached
and accessed again. This is good place to put your setup code for the View.
* `$ionicView.enter`: The view has fully entered and is now the active view. This event will fire
no matter if it was the first load or it was a cached view.
* `$ionicView.leave`: The view has finished leaving and is no longer the active view. This event will
fire no matter if it will be cached or destroyed.
* `$ionicView.beforeEnter`: The view is about to enter and become the active view.
* `$ionicView.beforeLeave`: The view is about to leave and no longer be the active view.
* `$ionicView.afterEnter`: The view has fully entered and is now the active view.
* `$ionicView.afterLeave`: The view has finished leaving and is no longer the active view.

## Caching

Caching can disabled/enabled by multiple ways. By default, Ionic will cache a maximum of 10 views. You can optionally choose to disable caching a view through the `cache-view` attribute directive.

```html
<ion-view cache-view="false" view-title="My Title"></ion-view>
```

Alternatively, you could choose to disable caching through `$stateProvider.state`.

```
$stateProvider.state('myState', {
 cache: false,
 url : '/myUrl',
 views: {
   'nav-view': {
     templateUrl : 'my-template.html'
   }
 }
})
```

If you wish to disable caching globally in an app, you can edit the `$ionicConfigProvider.views.maxCache`

```
$ionicConfigProvider.views.maxCache(0);
```

In this instance we’re setting the number of cached views to 0, essentially disabling the caching functionality.

Note that because we are caching these views, we aren’t destroying scopes. Instead, scopes are being disconnected.
Then when you travel back to that cached view, the scopes get reconnected.
  
  
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
        <p>The title to display on the parent <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a>.</p>

        
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
        <p>If this view should be allowed to be cached or not. Default <code>true</code></p>

        
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
<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
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
<a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> by default.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





