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

## Hierarchical

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

## Flat
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

## Content driven
Content- or experience-driven navigation is when navigation through your app is
tied directly to the content of your app.  Examples of this would be
navigating through a book's pages, or exploring the world of a game.
