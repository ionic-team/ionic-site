---
layout: guide
title: "Building the UI for Toderp"
---

# Chapter 2: Building our UI

Enough with the theory, let's jump in and start building a real app!

The Todo list app is pretty much a right of passage for frameworks, so we will walk through the process of building one with Ionic.

First, we need to figure out what the interface layout of our application is going to be. We have a ton of choices when it comes to UI design on mobile. There are a few standard layouts, like tabs and side menus, but there are practically infinite custom layouts that we could implement if we really wanted to (which Ionic encourages!). For the sake of this example, we are going to pick a simple Side Menu layout.

In the center content area, we will list the various tasks that we have to get completed for the current project. We can add new tasks, or edit existing ones. If we drag the center content over to the right, we expose the left side menu which lets us choose the current project we want to edit, or create new projects.  Take a look at the mockup below for an example of what we are trying to build:

Since every Ionic app is basically a web page, we need to have an `index.html` file in our app which defines the first page that loads in the app. Let's create `www/index.html` and initialize it with this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Toderp</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel="stylesheet" href="/css/ionic.css">

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-touch.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-animate.js"></script>

    <script src="/js/ionic.js"></script>
    <script src="/js/ionic-angular.js"></script>
  </head>
  <body>
  </body>
</html>
```


