---
layout: guide
title: "Organizing your Ionic App"
---

# Chapter 2: Structure and Concepts in Ionic

Those familiar with web development will find the structure of an Ionic app straightforward. At its core, it's just a web page running in an native app shell! That means we can use any kind of HTML, CSS, and Javascript we want. The only difference is, instead of creating a website that others will link to, we are building a self-contained application experience.

To start, our app needs to use the HTML5 doctype, include the required Ionic dependencies, and set the correct viewport meta tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel="stylesheet" href="/css/ionic.css">

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-touch.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-animate.js"></script>

    <script src="/js/ionic.js"></script>
    <script src="/js/ionic-angular.js"></script>
  </head>
```

Ionic uses AngularJS by default. And although it isn't absolutely required, the low-level Ionic APIs are more advanced and not part of this tutorial. We think Ionic is best served through your framework of choice, and we've started with Angular.

## Ionic Apps vs. Web Apps

Just like any native app, Ionic apps utilize common core layout features. These include but aren't limited to: header and footer bars, scrollable content areas, tabs, navigation stacks, and side menus.

Unlike web apps or mobile web apps, we need to think of the structure of our app less as a collection of resources linked through URLs, and more of a collection of dynamic, potentially non-linear experiences.

To help you get there, Ionic does not impose any page or routing restrictions. For developers new to mobile development, this might seem strange. It's natural to have a URL bar and to link between different views of the application through the built in routing mechanisms found in the browser application, letting the user travel backwards and forwards in time using the buttons in the browser.

But in native app development, we work at lower level. Instead of using URLs, we need to think in terms of collections of *views*, or rectangles of UI content. Everything you see on the screen is a view. A Button is a view, a Tab Bar is a view, a Header is a view, and an Image is a view.

We use View Controllers to take individual views and control them as a group to great effect. A perfect example is a Tab Bar. We might have a Tab Bar View with three Buttons views in it. But we also have three different pages that we need to page through.

Instead of treating each page as a separate URL, we treat them as their own groups of views, using a Tab Controller to manage the Tab Bar Button taps to switch the different "pages," each of which is their own View Controller containing sets of child Views and View Controllers. It might seem complicated, but think of it just like the DOM: a tree of tangible UI elements inside of functional containers.

Perhaps we load certain assets (like images, cached templates, or web content) from a URL, but since we need local content to load incredibly quickly, we only use URLs as a convenience in their function as unique resource identifiers.

