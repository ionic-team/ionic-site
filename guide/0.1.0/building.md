---
layout: guide
title: "Building out the ToDo App"
---

Previous: <a href="starting.html">Starting our App</a>

# Chapter 4: Building out our App

Now that we know everything there is to know about testing our Ionic apps, and we have a working app shell, let's move on to actually making some bacon!

So, let's take another look at our mockup:

<img src="http://ionicframework.com.s3.amazonaws.com/guide/0.1.0/3-mockup.png" alt="Mockup">

We can see that both the center content and side menus have lists. Lists in Ionic are very powerful, and come with a lot of different features commonly see in native app development. Luckily, adding them is really simple. 

Since we are using AngularJS, we are going to use the <a href="http://docs.angularjs.org/api/ng.directive:ngRepeat">`ng-repeat`</a> directive to create a new list item for every single task we have in a given project:

<button type="button" class="btn btn-danger" data-toggle="collapse" data-target="#angular-note">
  AngularJS n00b?
</button>

<div id="angular-note" class="collapse well">
<p>
  Never fear! You can pick up the basics with the ever-growing selection of great tutorials on the web. If you like videos, John Lindquist of <a href="http://egghead.io/">egghead.io</a> has a great selection of short, straight-to-the point AngularJS tutorial videos. You can start with Video #1: <a href="http://egghead.io/lessons/angularjs-binding">AngularJS Binding</a>. Matt Frisbie of <a href="http://www.thinkster.io/">Thinkster.io</a> also has a <a href="http://www.thinkster.io/pick/GtaQ0oMGIl/">great selection</a> of tutorials.
</p>
<p>
  One of the toughest parts about learning Angular is not knowing "the way" to do certain things. We hope that by providing a great selection of examples and guides for Ionic, you'll pick up on how to write Angular in practice. There is no better way to learn Angular than by building something real!
</p>
</div>


With the list code and the Angular `ng-repeat`, the center content becomes:

```html
<!-- Center content -->
<pane side-menu-content>
  <header class="bar bar-header bar-dark">
    <h1 class="title">ToDo</h1>
  </header>
  <div class="content has-header">
    <!-- our list and list items -->
    <list>
      <list-item ng-repeat="todo in todos">
      </list-item>
    </list>
  </div>
</pane>

```
