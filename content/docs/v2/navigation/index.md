---
layout: v2_fluid/docs_base
version: "1.1.6"
category: navigation
id: "navigation"
title: "Navigation - Ionic Framework"
---

<h2 id="navigation" class="section-header">Navigation</h2>

<a target="_blank" class="improve-v2-docs" href="https://github.com/driftyco/ionic-site/edit/master/_includes/v2_fluid/component-docs/navigation.html">
  Improve this Doc
</a>

_For more in depth information on navigation, see the [Nav API reference](../api/components/nav/Nav)._

Navigation is how users move between different pages in your app. Ionic's navigation follows standard native navigation concepts, like [those in iOS](https://developer.apple.com/library/content/documentation/WindowsViews/Conceptual/ViewControllerCatalog/Chapters/NavigationControllers.html#//apple_ref/doc/uid/TP40011313-CH2-SW1). In order to enable native-like navigation, we've built a few new navigation components that might feel different for developers used to traditional desktop browser navigation.

<!--
Like native apps, URLs are not required for navigation in Ionic.  Instead, pages are pushed and popped on and off a navigation controller's page stack.  URLs can be used to link back to unique, important parts of your app ("deeplinking") but don't define navigation as your app runs.
-->

There are several ways to navigate throughout an Ionic app:

<h3 id="basic_navigation">Basic Navigation</h3>
<a target="_blank" class="component-doc-demo" href="https://github.com/driftyco/ionic-preview-app/tree/master/src/pages/navigation/basic">
  Demo Source
</a>

Navigation is handled through the [`<ion-nav>`](../api/components/nav/Nav/) component, which works as a simple stack that new pages are pushed onto and popped off of, corresponding to moving forward and backward in history.

We start with a root page that loads the Nav component:

```typescript
import {StartPage} from 'start'

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
class MyApp {
  // First page to push onto the stack
  rootPage = StartPage;
}
```

Next, we can access the Navigation Controller in each page that is navigated to by injecting it into any of our Pages.
Note that Page components does not need a selector. Ionic adds these automatically .

```typescript
@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>Hello World</ion-content>`
})
export class StartPage {
  constructor(public navCtrl: NavController) {
  }
}
```

To navigate from one page to another simply push or pop a new page onto the stack:

```typescript
@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>
    <button (click)="goToOtherPage()">
      Go to OtherPage
    </button>
  </ion-content>`
})
export class StartPage {
  constructor(public navCtrl: NavController) {}

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(OtherPage);
  }
}

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Other Page</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>I'm the other page!</ion-content>`
})
class OtherPage {}
```

If your page has an [`<ion-navbar>`](../api/components/navbar/NavBar/), a back button will automatically be added to it if it is not a root page, and the title of the Nav Bar will be updated.

Alternatively, if you want to go back, but don't have a NavBar, you can pop the current page off the stack:

```typescript
@Component({
  template: `
  <ion-content>
    <button (click)="goBack()">
      There's no place like home
    </button>
  </ion-content>`
})
class OtherPage {
  constructor(public navCtrl: NavController) {}

  goBack() {
    this.navCtrl.pop();
  }
}
```

For more information on basic navigation, check out the [Nav API reference](../api/components/nav/Nav/).

























 NavController is the base class for navigation controller components like
 [`Nav`](../Nav/) and [`Tab`](../../tabs/Tab/). You use navigation controllers
 to navigate to [pages](#view-creation) in your app. At a basic level, a
 navigation controller is an array of pages representing a particular history
 (of a Tab for example). This array can be manipulated to navigate throughout
 an app by pushing and popping pages or inserting and removing them at
 arbitrary locations in history.
 
 The current page is the last one in the array, or the top of the stack if we
 think of it that way. [Pushing](#push) a new page onto the top of the
 navigation stack causes the new page to be animated in, while [popping](#pop)
 the current page will navigate to the previous page in the stack.
 
 Unless you are using a directive like [NavPush](../../components/nav/NavPush/), or need a
 specific NavController, most times you will inject and use a reference to the
 nearest NavController to manipulate the navigation stack.
 
 ## Basic usage
 The simplest way to navigate through an app is to create and initialize a new
 nav controller using the `<ion-nav>` component.  `ion-nav` extends the `NavController`
 class.
 
 ```typescript
 import { Component } from `@angular/core`;
 import { StartPage } from './start-page';
 
 @Component(
   template: `<ion-nav [root]="rootPage"></ion-nav>`
 })
 class MyApp {
   // set the rootPage to the first page we want displayed
   public rootPage: any = StartPage;
 
   constructor(){
   }
 }
 
 ```
 
 ### Injecting NavController
 Injecting NavController will always get you an instance of the nearest
 NavController, regardless of whether it is a Tab or a Nav.
 
 Behind the scenes, when Ionic instantiates a new NavController, it creates an
 injector with NavController bound to that instance (usually either a Nav or
 Tab) and adds the injector to its own providers.  For more information on
 providers and dependency injection, see [Providers and DI]().
 
 Instead, you can inject NavController and know that it is the correct
 navigation controller for most situations (for more advanced situations, see
 [Menu](../../menu/Menu/) and [Tab](../../tab/Tab/)).
 
 ```ts
  import { NavController } from 'ionic-angular';
 
  class MyComponent {
    constructor(public navCtrl: NavController) {
 
    }
  }
 ```
 

 
 
 ## View creation
 Views are created when they are added to the navigation stack.  For methods
 like [push()](#push), the NavController takes any component class that is
 decorated with `@Component` as its first argument.  The NavController then
 compiles that component, adds it to the app and animates it into view.
 
 By default, pages are cached and left in the DOM if they are navigated away
 from but still in the navigation stack (the exiting page on a `push()` for
 example).  They are destroyed when removed from the navigation stack (on
 [pop()](#pop) or [setRoot()](#setRoot)).
 
 ## Pushing a View
 To push a new view on to the navigation stack, use the `push` method.
 If the page has an [`<ion-navbar>`](../../navbar/Navbar/),
 a back button will automatically be added to the pushed view.
 
 Data can also be passed to a view by passing an object to the `push` method.
 The pushed view can then receive the data by accessing it via the `NavParams`
 class.
 
 ```typescript
 import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';
 import { OtherPage } from './other-page';
 @Component({
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Login</ion-title>
      </ion-navbar>
    </ion-header>
 
    <ion-content>
      <button ion-button (click)="pushPage()">
        Go to OtherPage
      </button>
    </ion-content>
    `
 })
 export class StartPage {
   constructor(public navCtrl: NavController) {
   }
 
   pushPage(){
     // push another page on to the navigation stack
     // causing the nav controller to transition to the new page
     // optional data can also be passed to the pushed page.
     this.navCtrl.push(OtherPage, {
       id: "123",
       name: "Carl"
     });
   }
 }
 
 import { NavParams } from 'ionic-angular';
 
 @Component({
   template: `
   <ion-header>
     <ion-navbar>
       <ion-title>Other Page</ion-title>
     </ion-navbar>
   </ion-header>
   <ion-content>I'm the other page!</ion-content>`
 })
 class OtherPage {
   constructor(private navParams: NavParams) {
      let id = navParams.get('id');
      let name = navParams.get('name');
   }
 }
 ```
 
 ## Removing a view
 To remove a view from the stack, use the `pop` method.
 Popping a view will transition to the previous view.
 
 ```ts
 import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';
 
 @Component({
   template: `
   <ion-header>
     <ion-navbar>
       <ion-title>Other Page</ion-title>
     </ion-navbar>
   </ion-header>
   <ion-content>I'm the other page!</ion-content>`
 })
 class OtherPage {
    constructor(public navCtrl: NavController ){
    }
 
    popView(){
      this.navCtrl.pop();
    }
 }
 ```
 
 
 

 
 ## NavOptions
 
 Some methods on `NavController` allow for customizing the current transition.
 To do this, we can pass an object with the modified properites.
 
 
 | Property  | Value     | Description                                                                                                |
 |-----------|-----------|------------------------------------------------------------------------------------------------------------|
 | animate   | `boolean` | Whether or not the transition should animate.                                                              |
 | animation | `string`  | What kind of animation should be used.                                                                     |
 | direction | `string`  | The conceptual direction the user is navigating. For example, is the user navigating `forward`, or `back`? |
 | duration  | `number`  | The length in milliseconds the animation should take.                                                      |
 | easing    | `string`  | The easing for the animation.                                                                              |
 
 The property 'animation' understands the following values: `md-transition`, `ios-transition` and `wp-transition`.