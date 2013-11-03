---
layout: guide
title: "Organizing your Ionic App"
---

# Chapter 2: Structure of an Ionic App

Those familiar with web development will find the structure of an Ionic app straightforward. At its core, it's just a web page running in an native app shell!

That means we can use any kind of HTML, CSS, and Javascript we want. The only difference is, instead of creating a website that others will link to, we are building a self-contained application experience.

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

## Ionic App Layout

Just like any native app, Ionic apps utilize common core layout features. These include but aren't limited to header and footer bars, scrollable content areas, tabs, navigation stacks, and side menus.
