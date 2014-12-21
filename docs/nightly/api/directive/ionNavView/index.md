---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/directive/ionNavView/"

title: "ion-nav-view"
header_sub_title: "Directive in module ionic"
doc: "ionNavView"
docType: "directive"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/directive/navView.js#L1'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/directive/navView.js#L1'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ion-nav-view



</h1>


{% include codepen.html id="odqCz" %}




As a user navigates throughout your app, Ionic is able to keep track of their
navigation history. By knowing their history, transitions between views
correctly enter and exit using the platform's transition style. An additional
benefit to Ionic's navigation system is its ability to manage multiple
histories. For example, each tab can have it's own navigation history stack.

Ionic uses the AngularUI Router module so app interfaces can be organized
into various "states". Like Angular's core $route service, URLs can be used
to control the views. However, the AngularUI Router provides a more powerful
state manager in that states are bound to named, nested, and parallel views,
allowing more than one template to be rendered on the same page.
Additionally, each state is not required to be bound to a URL, and data can
be pushed to each state which allows much flexibility.

The ionNavView directive is used to render templates in your application. Each template
is part of a state. States are usually mapped to a url, and are defined programatically
using angular-ui-router (see [their docs](https://github.com/angular-ui/ui-router/wiki),
and remember to replace ui-view with ion-nav-view in examples).








  
<h2 id="usage">Usage</h2>
  
In this example, we will create a navigation view that contains our different states for the app.

To do this, in our markup we use ionNavView top level directive. To display a header bar we use
the <a href="/docs/nightly/api/directive/ionNavBar/"><code>ionNavBar</code></a> directive that updates as we navigate through the
navigation stack.

Next, we need to setup our states that will be rendered.

```js
var app = angular.module('myApp', ['ionic']);
app.config(function($stateProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'home.html'
  })
  .state('music', {
    url: '/music',
    templateUrl: 'music.html'
  });
});
```
Then on app start, $stateProvider will look at the url, see it matches the index state,
and then try to load home.html into the `<ion-nav-view>`.

Pages are loaded by the URLs given. One simple way to create templates in Angular is to put
them directly into your HTML file and use the `<script type="text/ng-template">` syntax.
So here is one way to put home.html into our app:

```html
<script id="home" type="text/ng-template">
  <!-- The title of the ion-view will be shown on the navbar -->
  <ion-view view-title="Home">
    <ion-content ng-controller="HomeCtrl">
      <!-- The content of the page -->
      <a href="#/music">Go to music page!</a>
    </ion-content>
  </ion-view>
</script>
```

This is good to do because the template will be cached for very fast loading, instead of
having to fetch them from the network.

## Caching

By default, views are cached to improve performance. When a view is navigated away from, its
element is left in the DOM, and its scope is disconnected from the `$watch` cycle. When
navigating to a view that is already cached, its scope is then reconnected, and the existing
element that was left in the DOM becomes the active view. This also allows for the scroll
position of previous views to be maintained.

Caching can be disabled and enabled in multiple ways. By default, Ionic will cache a maximum of
10 views, and not only can this be configured, but apps can also explicitly state which views
should and should not be cached.

Note that because we are caching these views, *we aren’t destroying scopes*. Instead, scopes
are being disconnected from the watch cycle. Because scopes are not being destroyed and
recreated, controllers are not loading again on a subsequent viewing. If the app/controller
needs to know when a view has entered or has left, then view events emitted from the
<a href="/docs/nightly/api/directive/ionView/"><code>ionView</code></a> scope, such as `$ionicView.enter`, may be useful.

By default, when navigating back in the history, the "forward" views are removed from the cache. If you navigate forward to the same view again, it'll create a new DOM element and controller instance. Basically, any forward views are reset each time. This can be configured using the <a href="/docs/nightly/api/provider/$ionicConfigProvider/"><code>$ionicConfigProvider</code></a>:

```js
$ionicConfigProvider.views.forwardCache(true);
```

#### Disable cache globally

The <a href="/docs/nightly/api/provider/$ionicConfigProvider/"><code>$ionicConfigProvider</code></a> can be used to set the maximum allowable views
which can be cached, but this can also be use to disable all caching by setting it to 0.

```js
$ionicConfigProvider.views.maxCache(0);
```

#### Disable cache within state provider

```js
$stateProvider.state('myState', {
   cache: false,
   url : '/myUrl',
   templateUrl : 'my-template.html'
})
```

#### Disable cache with an attribute

```html
<ion-view cache-view="false" view-title="My Title!">
  ...
</ion-view>
```


## AngularUI Router

Please visit [AngularUI Router's docs](https://github.com/angular-ui/ui-router/wiki) for
more info. Below is a great video by the AngularUI Router team that may help to explain
how it all works:

<iframe width="560" height="315" src="//www.youtube.com/embed/dqJRoh8MnBo"
frameborder="0" allowfullscreen></iframe>
  
  
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
        name
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>A view name. The name should be unique amongst the other views in the
same state. You can have views of the same name that live in different states. For more
information, see ui-router&#39;s
<a href="http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.directive:ui-view">ui-view documentation</a>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>

  

  





