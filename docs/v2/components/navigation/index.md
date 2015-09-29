---
layout: v2/docs_base
id: ui
title: Ionic 2 UI | Navigation
header_title: Navigation - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/navigation/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Navigation</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/navigation/" demo_name="navigation" %}

Navigation in Ionic 2 is much more "native like" and is heavily modeled off of [the navigation features in iOS](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Navigation.html).

One of the biggest differences about navigation in Ionic 2 is that URLs are not required.  Instead, views are pushed and popped on/off a navigation controller's view stack.

There are several ways to navigate throughout an Ionic app:

<h2 id="Parent_child">Parent - Child</h2>
The simplest way to navigate throughout your app is to create and initialize a new navigation controller, using [`<ion-nav>`](link_to_nav):

```ts
  import {StartPage} from 'start'

  @App({
    template: '<ion-nav [root]="rootPage"></ion-nav>'  
  })
  class MyApp {
    constructor(){
      // First view to push onto the stack
      this.rootPage = StartPage;
    }
  }
```

You can access the navigation controller you create by injecting it into any of your IonicViews:

```ts
@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>

    <ion-content>Hello World</ion-content>`
})
export class StartPage {
  constructor(navCtrl: NavController){ //<-- Well hello there
    this.nav = navCtrl;
  }
}
```

To navigate from one page to another simply push or pop a new view onto the stack:

```ts
@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>

    <ion-content>
      <button (click)="goToOtherPage()">
        Go to OtherPage
      </button>
    </ion-content>`
})
export class StartPage {
  constructor(navCtrl: NavController) {
    this.nav = navCtrl;
  }

  goToOtherPage(){
    //push another view onto the history stack
    //causing the nav controller to animate the new view in
    this.nav.push(OtherPage);
  }                           
}

@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Other Page</ion-title>
    </ion-navbar>

    <ion-content>I'm the other page!</ion-content>`
})
class OtherPage {}
```

If your view has an [`<ion-nav-bar>`](link_to_navbar), a back button will automatically be added to it if it is not a root view.  

Alternatively, if you want to go back, but don't have a NavBar, you can pop the current view off the stack:

```ts
@IonicView({
  template: `
    <ion-content>
      <button (click)="goBack()">
        There's no place like home
      </button>
    </ion-content>`
})
class OtherPage {
  constructor(navCtrl: NavController) {
    this.nav = navCtrl;
  }
  goBack() {
    this.nav.pop();
  }
}
```
For more information on navigation controllers, check out the [Nav API reference](link_to_Nav).

But what if you have several "root" or "top-level" views that don't have a parent-child relationship, but rather are siblings?      

You have two options: Tabs and Menu.

<h2 id="Tabs">Tabs</h2>

Tabs are useful if you have a few "root" or "top-level" views.  They are obvious to the user and quickly accessed, since they are always on the screen.  However if screen space is limited, or you have a large number of root views, a Menu may be a better option.

To initialize Tabs, use [`<ion-tabs>`](link_to_tabs), with a child [`<ion-tab>`](link_to_tab) for each tab:

```ts
@App({
  template: `
    <ion-tabs>
      <ion-tab tab-icon="heart" [root]="tab1Root"></ion-tab>
      <ion-tab tab-icon="star" [root]="tab2Root"></ion-tab>
    </ion-tabs>`
})
class MyApp {
  constructor() {
    this.tab1Root = Tab1;
    this.tab1Root = Tab2;
  }
}
```

Individual tabs are just [`@IonicViews`](link_to_Ionic_View):

```ts
@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Heart</ion-title>
    </ion-navbar>
    <ion-content>Tab 1</ion-content>`
})
class Tab1 {}

@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Star</ion-title>
    </ion-navbar>
    <ion-content>Tab 2</ion-content>`
})
class Tab2 {}
```

Notice that each [`<ion-tab>`](link_to_tabs) binds to a `[root]` property, just like the [`<ion-nav>`](link_to_ion_nav) example [above](#Parent_child).  That is because each [`<ion-tab>`](link_to_tabs) is really just a navigation controller.  This means that each tab has its own history stack, and [`NavControllers`](link_to_nav_controller) injected into children [`@IonicViews`](link_to_Ionic_View) of each tab will be unique to each tab:

```ts
@IonicView({
...
})
class Tab1 {
  constructor(nav: NavController) {
    // Id is 1, different navigation stack than tab 2
    console.log(nav.id)
  }
}

@IonicView({
...
})
class Tab2 {
  constructor(nav: NavController) {
    // Id is 2, different navigation stack than tab 1
    console.log(nav.id)
  }
}
```

For more information on tabs, check out the [Tabs API reference](link_to_Tabs).

<h2 id="Menu">Menu</h2>

As mentioned before, there are some situations where using Tabs might not be desirable.  For instance, if you have a large number of root views, making a TabBar impractical, a menu might be a better solution.  

Menus also allow you to return to root views at any point. They can be helpful if you have particularly deep navigation by allowing you to return to the top level of your app quickly.  

However, because Menus are not always and immediately visible on screen, they require more work for the user to use.  Make sure to weigh your priorities when designing the navigational structure of your app.

To use a Menu add an [`<ion-menu>`](link_to_menu) to your markup next to your root [`<ion-nav>`](link_to_nav):

```ts
@App({
  template: `
    <ion-menu [content]="content">
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <button ion-item (click)="openPage(loginPage)">
            Login
          </button>
          <button ion-item (click)="openPage(signupPage)">
            Signup
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-nav id="nav" #content [root]="loginPage"></ion-nav>`
})
class MyApp {}
```

The `<ion-menu>`s bound `[content]` property gets a [reference](angular_template_refs) to the [`<ion-nav>`](link_to_nav) in order to listen for drag events on the main content so it knows when to open/close.  

Then we have two buttons with click handlers that navigate to a new root view:

```ts
import {LoginPage} from 'login';
import {SignupPage} from 'signup';
...
class MyApp {
  constructor(ionicApp: IonicApp) {
    this.app = ionicApp;

    this.loginPage = LoginPage;
    this.signupPage = SignupPage;
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('menu').close();

    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page);
  }
}
```

We inject the [`IonicApp`](link_to_ionic_app) service so we can use Ionic's [id system](link_to_id_system) to get references to the menu and the nav controller.  We then use the NavController's [`setRoot`](link_to_setRoot) function to clear the navigation stack and set the selected page as the new navigation root.

Menus can be a little more complicated, but they allow for many different configuration options.  For more examples and in depth configuration explanations, take a look at the [Menu API reference](link_to_menu_api).

<h2 id="Lifecycle">Lifecycle events</h2>

 - `onViewLoaded` - Runs when the view has loaded. This event only happens once per view being created and added to the DOM. If a view leaves but is cached, then this event will not fire again on a subsequent viewing. The `onViewLoaded` event is good place to put your setup code for the view.
 - `onViewWillEnter` - Runs when the view is about to enter and become the active view.
 - `onViewDidEnter` - Runs when the view has fully entered and is now the active view. This event will fire, whether it was the first load or a cached view.
 - `onViewWillLeave` - Runs when the view is about to leave and no longer be the active view.
 - `onViewDidLeave` - Runs when the view has finished leaving and is no longer the active view.
 - `onViewWillUnload` - Runs when the view is about to be destroyed and have its elements removed.
 - `onViewDidUnload` - Runs after the view has been destroyed and its elements have been removed.

<br>

--------------

<h2 id="URL_to_State_vs_Just_States">URL -> State vs. State -> URL</h2>

Traditionally, routing in an app happens by navigating to a certain URL and having a router figure out how to map that URL to a certain state.  Apps that rely on URLs for navigation often make use of `href` to change between states.

While this type of navigation is supported in Ionic, it is not recommended, as it makes some navigation structures difficult to implement (moving between flat navigation states for example).

Instead of relying on a router, to move between pages/views/states you `push` the next state you would like to navigate to onto the navigation stack. To go back, you simply `pop` the current view.  At no point during navigation are URLs required, since the navigation stack is entirely managed within your app. However, if you do need URLs they are very easy to add.  

 <h3 id="Adding_URLs">Adding URLs to States (Reverse Routing)</h3>

 There are many situations where your app might need URLs: for example, deeplinking directly to a particular state from another app or saving the current state when refreshing during development. If one of your app states does need a URL, you can set the url using [Angular's router]():  

 ```js
 import {LoginPage} from 'login-page'
 import {RouteConfig} from 'angular2/router';

 @App({
   templateUrl: 'app/app.html'
 })
 @RouteConfig([
   { path: '/login', component: LoginPage, as: 'loginPage' }
 ])
 class MyApp {
 ```

-----------

<h2 id="Views_in_Ionic">Views in Ionic</h2>
<div class="highlight less-margin">
  <pre>
    <code class="language-text" data-lang="text">
                          +-------+                                                              
                          |  App  |                                                                               
                          +---+---+                                                                                 
                          &lt;ion-app&gt;
                              |
             +----------------+----------------+
             |   Ionic Nav View Controller     |
             +----------------+----------------+
                          &lt;ion-nav&gt;    
                              |                          @IonicView({
                              |                            templateUrl: './login.html'
            Pane 3  +--------------------+               })                   
          Pane 2  +--------------------+ |  Has header, so View Controller animates into pane 1     
        Pane 1  +--------------------+ | |              +--------------------+
                | | Header (Pane 1)  | | |              |       Login        |
                +--------------------+ | |              +--------------------+
                | | |                | | |              | Username:_____     |
                | | |                | | |              | Password:_____     |
                | | |  Pane 3 is     | | |              |                    |
                | | |  only content  | | |              |                    |
                | | |                |&lt;-----------------|                    |
                | | |                | | |              |                    |
                | | |                | | |              |                    |
                | +------------------|-+ |              |                    |
                | | Footer (Pane 2)--|-|-+              |                    |
                | +------------------|-+                |                    |
                +--------------------+                  +--------------------+
                      &lt;ion-pane&gt;                              &lt;ion-view&gt;

                  Pane 1                    Pane 2                    Pane 3                          
          +--------------------+    +--------------------+    +--------------------+                  
          | Header             |    | Content            |    | Content            |                  
          +--------------------+    |                    |    |                    |                  
          | Content            |    |                    |    |                    |                  
          |                    |    |                    |    |                    |                  
          |                    |    |                    |    |                    |                  
          |                    |    |                    |    |                    |                  
          |                    |    |                    |    |                    |                  
          |                    |    |                    |    |                    |                  
          |                    |    |                    |    |                    |                  
          |                    |    |                    |    |                    |                  
          |                    |    +--------------------+    |                    |                 
          |                    |    | Footer             |    |                    |                  
          +--------------------+    +--------------------+    +--------------------+                

    </code>
  </pre>
</div>




```ts

@IonicView({
  templateUrl: `
    <ion-navbar *navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>

    <ion-content> Hello World </ion-content>
  `
})
class StartPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  goToOtherPage(){
    //push another view onto the history stack
    //causing the view controller to animate the new view in
    this.nav.push(OtherPage);
  }                           
}

@IonicView({
  templateUrl: './otherpage.html'
})
class OtherPage {}
```
One of the features of IonicView is that it automatically wraps your page in `<ion-view>`, so you don't need to include it in your markup.

You can create additional navigation stacks by creating additional `<ion-nav>` in the templates of IonicViews that are pushed into your root nav stack.  Think 2d arrays, when you create another `<ion-nav>`, it creates a new history array that is then pushed onto the root array.  The `NavController` that gets injected into pages you push onto the new history is then the new view controller for that history.

### Panes

*NOTE: You don't have to do anything with panes, it is all taken care of for you. This is just an explanation of how Ionic works.*

When you push a new view onto the history/navigation stack using [`NavController.push()`](../../api/components/nav/NavController/#push), the view controller will animate the new view into the appropriate pane.

Panes are the containers the view controller creates to animate views into.  The easiest scenario is animating between views with the same structure.  If you have a view with a header and content, and navigate to another view that also has a header and content, the view controller can smoothly animate the incoming view into the pane the exiting view is leaving.  This allows for things like seamless header animations between views that both have headers.

But suppose you have a view with a header and content and want to navigate to a view with no header.  The view controller creates a new pane with no header that is directly behind the current pane.  It then animates the exiting view out of the current pane and the new view into the new content-only pane.

-----------


 -----------

 Navigation in Ionic 2 is much more "native like" and is heavily modeled off of [the navigation features in iOS](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Navigation.html).

  <h2 id="spidey">"With great tabs comes great responsibility"</h2>

  The navigation in Ionic is extremely flexible.  That means if you'd like, you can easily nest tabs in modals in menus in tabs, etc. But just because you can doesn't mean you should (you shouldn't).

  Seriously, don't do this.  Most apps do not require many levels of nested navigation!
