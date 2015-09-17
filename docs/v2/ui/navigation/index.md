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

 ```
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

 <h2 id="spidey">"With great tabs comes great responsibility"</h2>

 The navigation in Ionic is extremely flexible.  That means if you'd like, you can easily nest tabs in modals in menus in tabs, etc. But just because you can doesn't mean you should (you shouldn't).

 Seriously, don't do this.  Most apps do not require many levels of nested navigation!
