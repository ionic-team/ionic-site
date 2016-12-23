---
layout: v2_fluid/docs_base
category: navigation
id: navigation_controller
title: Navigation - Navigation Controller
header_sub_title: Ionic Navigation
---

<h1 class="title">The Navigation Controller</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/content/docs/v2/navigation/navigation-controller/index.md'>
  Improve this doc
</a>

NavController is the base class for navigation controller components like
[`Nav`](../../api/components/nav/Nav/) and [`Tab`](../../components/tabs/Tab/). You use navigation controllers
to navigate to pages in your app. At a basic level, a
navigation controller is an array of pages representing a particular history
(of a Tab for example). This array can be manipulated to navigate throughout
an app by pushing and popping pages or inserting and removing them at
arbitrary locations in history.

The current page is the last one in the array, or the top of the stack if we
think of it that way. Pushing a new page onto the top of the
navigation stack causes the new page to be animated in, while popping
the current page will navigate to the previous page in the stack.

Unless you are using a directive like [NavPush](../../api/components/nav/NavPush/), or need a
specific NavController, most times you will inject and use a reference to the
nearest NavController to manipulate the navigation stack.

For more information on basic push/pop navigation, see [Basic Navigation](../#basic_navigation).

<h3 id="injecting_nav_controller">Injecting NavController</h3>

Injecting NavController will always get you an instance of the nearest
NavController, regardless of whether it is a Tab or a Nav.

Behind the scenes, when Ionic instantiates a new NavController, it creates an
injector with NavController bound to that instance (usually either a Nav or
Tab) and adds the injector to its own providers.

Instead, you can inject NavController and know that it is the correct
navigation controller for most situations (for more advanced situations, see
[Menu](../../api/components/menu/Menu/) and [Tab](../../api/components/tabs/Tab/)).

```ts
 import { NavController } from 'ionic-angular';

 class MyComponent {
   constructor(public navCtrl: NavController) {

   }
 }
```

<h3 id="navoptions">NavOptions</h3>

Some methods on `NavController` allow for customizing the current transition.
To do this, we can pass an object with the modified properites.


| Property  | Value     |Description                                                                                                |
|-----------|-----------|-----------------------------------------------------------------------------------------------------------|
| animate   | `boolean` | Whether or not the transition shouldanimate.                                                              |
| animation | `string`  | What kind of animation should beused.                                                                     |
| direction | `string`  | The conceptual direction the user is navigating. For example, is the user navigating `forward`, or`back`? |
| duration  | `number`  | The length in milliseconds the animation shouldtake.                                                      |
| easing    | `string`  | The easing for theanimation.                                                                              |

The property 'animation' understands the following values: `md-transition`, `ios-transition` and `wp-transition`.