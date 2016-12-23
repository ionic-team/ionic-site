---
layout: v2_fluid/docs_base
version: "1.1.6"
category: navigation
id: "navigation"
title: "Navigation - Ionic Framework"
---

<h1 class="api-title">
  <a class="anchor" name="navigation" href="#navigation"></a>
  Navigation
</h1>
<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/content/docs/v2/navigation/index.md'>
  Improve this doc
</a>

Navigation is how users move between different pages in your app. Ionic's navigation follows standard native navigation concepts, like [those in iOS](https://developer.apple.com/library/content/documentation/WindowsViews/Conceptual/ViewControllerCatalog/Chapters/NavigationControllers.html#//apple_ref/doc/uid/TP40011313-CH2-SW1). In order to enable native-like navigation, we've built a few new navigation components that might feel different for developers used to traditional desktop browser navigation.

For more in depth information on navigation, see the [Nav API reference](../../api/components/nav/Nav).

<!--
Like native apps, URLs are not required for navigation in Ionic.  Instead, pages are pushed and popped on and off a navigation controller's page stack.  URLs can be used to link back to unique, important parts of your app ("deeplinking") but don't define navigation as your app runs.
-->

<h2 id="basic_navigation">Basic Push/Pop Navigation</h2>

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
Note that Page components does not need a selector. Ionic adds these automatically.

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

<h2 id="view_creation">View Creation</h2>
Views are created when they are added to the navigation stack.  For methods
like `push()`, the NavController takes any component class that is
decorated with `@Component` as its first argument.  The NavController then
compiles that component, adds it to the app and animates it into view.

By default, pages are cached and left in the DOM if they are navigated away
from but still in the navigation stack (the exiting page on a `push()` for
example).  They are destroyed when removed from the navigation stack (on
`pop()` or `setRoot()`).

<h2 id="manipulating_navstack">Manipulating the Navigation Stack</h2>

The concept of navigation as a stack of pages not only allows us to easily
push pages on and pop pages off the stack, it also allows us to easily manipulate
the state of the navigation stack at any time. For example, using `insertPages()`
we can add pages anywhere in the stack, and similarly we can remove pages using `remove()`. 
This allows us to rewrite the navigation history of our app.

For a complete list of functions for working with the navigation stack, see 
[Instance Members](../api/navigation/NavController#instance-members) 
in the NavController docs.
