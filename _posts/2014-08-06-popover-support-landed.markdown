---
layout: post
title:  "Popover Support Lands in Ionic"
date:   "2014-08-06 13:00:00"
categories: ionic, angularjs, beta
author: '<img src="http://www.gravatar.com/avatar/eeff5848f4231174094d2bc3cce26a05?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/adamdbradley">Adam</a>'
searchable: true
published: true
---

<img class="showcase-image" src="/img/blog/popover-header.gif">

A commonly requested feature from the community has been the Popover, which we’re happy to now have included within [Ionic v1.0.0-beta.11](http://forum.ionicframework.com/t/v1-0-0-beta-11-indium-iguana-released/7798).

A popover is a view that floats above an app’s content, except it stays attached to the element that opens up the popover. The popover content is usually emitted from a button, an action, a pointer, or another control, which is similar to how Ionic’s modals or actionsheets work. It’s a common interaction seen on iPad apps and other aliases, including drop downs, menus, chips, etc.

<!-- more -->

Popovers provide an easy way to present or gather information from the user and are commonly used to:

- Show more info about the current view
- Select a commonly used tool or configuration within a list
- Present a list of actions to perform inside one of your views

<a href="http://ionicframework.com/img/blog/craftedhere-app-preview.png"><img class="body-image" src="/img/blog/popover-preview.gif"></a>

Like with all of Ionic’s other components, its goal is to give the developer full control of creating a popover, and continue to take advantage of all the niceties of AngularJS, such as template files, controllers, scoped variables, etc.

<div style="float: right; margin-right: -160px">
  {% include codepen.html id="GpCst" %}
</div>

The popover itself is another view, not simply a preformatted list. This means anything you can do within a standard view, you can do within a popover. Scrollable areas, header bars, header buttons, content areas, form inputs, etc., can all be used no differently that a standard view. Check out the [popover documentation](/docs/api/service/$ionicPopover/) for more.

By default, Ionic’s popover comes in three styles: Base, iOS and Android. The base style, as you guessed it, is the base style that each platform overrides. Each of the platforms have subtle differences, but those differences ensure a consistent interface for the platform from which it’s being run. (Setting the correct platform style is all a part of Ionic’s initializing and isn’t something that needs to be manually set.)

Please give it a shot, and as always, please let us know what we can do to improve Ionic to help make your development easier. Thanks!
