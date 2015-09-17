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

Navigation in Ionic 2 is much more "native like" and is heavily modeled off of [the navigation
features in iOS](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Navigation.html).

In general, there are 3 types of navigation in an app:

 - Hierarchical
 - Flat
 - Content driven

 Ionic makes it easy to use any of the three, or some combination thereof.

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
Flat navigation is when the user can go from one root navigation state directly
to another.  The most common examples of this are when using [Tabs](../tabs/) or a [Menu](../menu).

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
Content- or experience-driven navigation is when navigation through your app is
tied directly to the content of your app.  Examples of this would be
navigating through a book's pages, or exploring the world of a game.

--------------

<h2 id="URL_to_State_vs_State_to_URL">URL -> State vs. State -> URL</h2>
Traditionally routing in an app happens by navigating to a certain URL and
having a router figure out how to map that URL to certain state.  Apps that rely
on URLs for navigation often make use of `href` to change between states.

While this type of navigation is supported in Ionic, it is not recommended as it
makes some types of navigation difficult (moving between states with flat
navigation for example).

Instead, to move between pages (states), you decide which view you want to show,
 and then `push` it into the navigation stack. To go back, you `pop` the current view.

 <h3 id="Reverse_Routing">Reverse Routing</h3>
Using [Angular2's router]() you can assign states a path (state -> URL), that is, a corresponding
URL that maps to that state (URL -> state), but you don't have to.  It is helpful
if you need to link directly into a particular state of your app (deeplinking
  from another app for example).


 <h3 id="spidey">"With great power comes great responsibility"</h3>
 The navigation in Ionic is extremely flexible.  That means if you'd like, you can
 easily nest tabs in modals in menus in tabs, etc. But just because you can
 doesn't mean you should (you shouldn't).

 Seriously, don't do this.  Most apps do not require many levels of nested navigation.
