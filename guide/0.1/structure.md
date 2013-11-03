---
layout: guide
title: "Organizing your Ionic App"
---

# Structure of an Ionic App

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
  </head>
```
