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

In general, there are 3 types of navigation in an app:

 - Hierarchical
 - Flat
 - Content driven

 Ionic makes it easy to use any of the three, or some combination thereof. For example, you may have a menu of items (flat) where each item leads to a series of different pages (hierarchical).

<h2 id="Hierarchical">Hierarchical</h2>

```
          +------+                                           
          | Home |                                           
          +---+--+                                           
              |                                                        
    +---------+----------+                                       
    |                    |                                       
+---+---+          +-----+-----+                      
| About |          | Ice Cream |                      
+-------+          +-----+-----+                      
                         |                                       
          +--------------+-+-----------------+             
          |                |                 |             
    +-----+-----+     +----+----+     +------+-----+
    | Chocolate |     | Vanilla |     | Strawberry |
    +-----------+     +---------+     +------------+
```

<h2 id="Flat">Flat</h2>

Flat navigation is when the user can go from one root navigation state directly to another. A good time to use flat navigation is when having a back button doesn't make sense, like when switching between [Tabs](../tabs/) or [Menu](../menu) items.

```
                    +-------+                  
                    | Earth |                  
                    +---+---+                  
                        |                      
       +-----------+----+-----+----------+     
       |           |          |          |     
+------+--+   +----+--+    +--+---+   +--+----+
| Mercury |   | Venus |    | Mars |   | Pluto |
+---------+   +-------+    +------+   +-------+
```

<h2 id="Content_Driven">Content Driven</h2>

Content- or experience-driven navigation is when navigation through your app is tied directly to the content of your app.  Examples of this would be navigating through a book's pages, or exploring the world of a game.

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

To create a new navigation stack and view controller, use `<ion-nav>`:

```ts
  import {StartPage} from './start/start'

  @App({
    template: '<ion-nav [root]="rootPage"></ion-nav>'  
  })
  class MyApp {
    // First view to push onto the stack
    this.rootPage = StartPage;
  }
```

You can access the navigation view controller you create by injecting it into any of your IonicView's:

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

```
Nav Stack for tabs
+---+---+
|   |   |  <-- Settings Tab with 2 views
+---+---+              
|   | <-- About Tab          
+---+---+---+         
|   |   |   | <-- User Tab with 3 views
+---+---+---+   
|   | <-- Home Tab          
+---+
```

### Panes

*NOTE: You don't have to do anything with panes, it is all taken care of for you. This is just an explanation of how Ionic works.*

When you push a new view onto the history/navigation stack using [`NavController.push()`](../../api/components/nav/NavController/#push), the view controller will animate the new view into the appropriate pane.

Panes are the containers the view controller creates to animate views into.  The easiest scenario is animating between views with the same structure.  If you have a view with a header and content, and navigate to another view that also has a header and content, the view controller can smoothly animate the incoming view into the pane the exiting view is leaving.  This allows for things like seamless header animations between views that both have headers.

But suppose you have a view with a header and content and want to navigate to a view with no header.  The view controller creates a new pane with no header that is directly behind the current pane.  It then animates the exiting view out of the current pane and the new view into the new content-only pane.

-----------

<h2 id="Lifecycle">Lifecycle events</h2>

 - `onViewLoaded` - Runs when the view has loaded. This event only happens once per view being created and added to the DOM. If a view leaves but is cached, then this event will not fire again on a subsequent viewing. The `onViewLoaded` event is good place to put your setup code for the view.
 - `onViewWillEnter` - Runs when the view is about to enter and become the active view.
 - `onViewDidEnter` - Runs when the view has fully entered and is now the active view. This event will fire, whether it was the first load or a cached view.
 - `onViewWillLeave` - Runs when the view is about to leave and no longer be the active view.
 - `onViewDidLeave` - Runs when the view has finished leaving and is no longer the active view.
 - `onViewWillUnload` - Runs when the view is about to be destroyed and have its elements removed.
 - `onViewDidUnload` - Runs after the view has been destroyed and its elements have been removed.

<br>
 -----------

  <h2 id="spidey">"With great tabs comes great responsibility"</h2>

  The navigation in Ionic is extremely flexible.  That means if you'd like, you can easily nest tabs in modals in menus in tabs, etc. But just because you can doesn't mean you should (you shouldn't).

  Seriously, don't do this.  Most apps do not require many levels of nested navigation!
