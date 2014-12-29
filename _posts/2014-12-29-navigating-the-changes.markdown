---
layout: post
title:  "Navigating the Changes"
date:   "2014-12-23  2:00:00"
categories: angularjs, ionic, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/495587171332403200/tO9oMmCn.png" class="author-icon"><a href="https://twitter.com/mhartington">Mike</a>'
published: false
---

<img class="showcase-image" src="/img/blog/b14-header.jpg" style="margin-top:-20px;">

Before releasing Beta 14, we took some time to gather feedback from the Ionic community about how navigation UI should behave: not just how it should be animated, but how
everything comes together in an app. In Beta 14, we made some major changes to the navigation structure and elements that follow some already well-established patterns
that can be found in apps across all platforms. We feel these updates will smooth the process of building UI navigation for your app.

<!-- more -->
###Nav buttons
In Beta 14, we introduced a new navbar inheritance structure. Any collection of elements in <ion-nav-buttons> or <ion-nav-title> will replace what’s in the header by default or from the main top-level view (likely your index.html file).

In many cases, you’ll want your <ion-nav-bar> to be limited to adding the buttons appropriate to a given page to that page’s template.

Your typical structure will be:

```
<!-- index.html -->
<ion-nav-bar>
<ion-nav-buttons side="secondary">
<button class="button" ng-click="doSomething()">
I'm a button on the secondary of the navbar!
</button>
</ion-nav-buttons>
</ion-nav-bar>
<ion-nav-view>
</ion-nav-view>

<!-- some page template -->
<ion-view>
<ion-nav-buttons side="primary">
<button class="button" ng-click="doSomethingElse()">
I'm a button on the primary of the navbar for just this page!
</button>
</ion-nav-buttons>
<ion-content>
Some super content here!
</ion-content>
</ion-view>
```

###Navigation base
Before we released Beta 14, we revisited the way we felt navigation UI should behave. Components like our `ion-tab` and our `ion-side-menus` now have a lot more purpose behind them. Like their native counterparts, these components have now become a base for navigation.



Let’s look at our side-menus:

```
<ion-side-menus enable-menu-with-back-views="false">

<ion-side-menu-content>
<ion-nav-bar class="bar-positive">
<ion-nav-back-button>
</ion-nav-back-button>
<ion-nav-buttons side="left">
<button class="button button-icon button-clear ion-navicon" menu-toggle="left">
</button>
</ion-nav-buttons>
</ion-nav-bar>
<ion-nav-view name="menuContent"></ion-nav-view>
</ion-side-menu-content>

<ion-side-menu side="left">
<ion-content>
<ul class="list">
<a href="#/event/check-in" class="item" menu-close>Check-in</a>
<a href="#/event/attendees" class="item" menu-close>Attendees</a>
</ul>
</ion-content>
</ion-side-menu>

</ion-side-menus>
```

In that left side-menu, you probably have a list of links to over pages in your app, while in the side-menu-content, you’d have a nav-view to render these pages. In Beta 14, those links in the side-menu now trigger a change in the navigation stack. The view gets treated as a navigation root and has animation only on the child views.

![](gif/image visually show this)

As a result, you may not be able to use side-menus haphazardly in any view. The use of a menu should be to create a base of navigation, through which views will transition. For a more contextual menu, developers should consider components like [popover](http://codepen.io/ionic/pen/GpCst) or [modal](http://codepen.io/ionic/pen/gblny).



###Menu Toggle Visibility
In our navigation research, we discovered that existing native SDKs that have a similar side-menu component and navigation stack automatically hide the menu toggle, burger, icon-button icon on child pages; it’s only visible on root level pages. We agree with this UX approach and have made it the default in Ionic. That can be overridden with setting enable-menu-with-back-views=”true” on the <ion-side-menus> element
(http://ionicframework.com/docs/nightly/api/directive/ionSideMenus/).

###View LifeCycle
In order improve performance, we’re no longer destroying scopes and views. Once a controller is initialized, it may persist throughout the app’s life; it’s just hidden and removed from the watch cycle. Since we aren’t rebuilding scope, we’ve added events for which we should listen when entering the watch cycle again.


<table class="table">
<tr>
<td><code>$ionicView.loaded</code></td>
<td>The view has loaded. This event only happens once per view being created and added to the DOM. If a view leaves but is cached, then this event will not fire again on a subsequent viewing. The loaded event is good place to put your setup code for the view; however, it is not the recommended event to listen to when a view becomes active.</td>
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
<td>The view's controller has been destroyed, and its element has been
removed from the DOM.</td>
</tr>
</table>

An example of using these events would be:

```
$scope.$on('$ionicView.afterEnter', function(){
  // Any functionality you can think of
});
```



### Parting Words

With these updates, Ionic now has a more complete structure for navigation and view management. Check out the docs for more information.

[ionNavView](http://ionicframework.com/docs/api/directive/ionNavView/)

[ionNavButtons](http://ionicframework.com/docs/api/directive/ionNavButtons/)

[ionSideMenus](http://ionicframework.com/docs/api/directive/ionSideMenus/)

[ionTabs](http://ionicframework.com/docs/api/directive/ionTabs/)

	
