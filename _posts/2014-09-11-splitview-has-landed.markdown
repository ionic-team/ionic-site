---
layout: post
title:  "Split View Lands in Ionic"
date:   "2014-09-11 12:30:00"
hide_date: false
categories: ionic
author: '<img src="https://pbs.twimg.com/profile_images/495587171332403200/tO9oMmCn.png" class="author-icon"><a href="https://twitter.com/mhartington">Mike</a>'
published: false
---

<img class="showcase-image" src="/img/blog/splitpane-header.png">

Any app that wants to stand out among the billions of apps out there needs to be able to adapt to different screen sizes, a fact with which all developers have to deal. Since Cordova is a web-view, devs can rely on responsive web design (RWD) to deal with this. However, some things need a little extra attention, like side-menus, since its interaction can vary depending on the screen size.

We are very happy to announce that Split View support has finally landed in Ionic! A frequently requested feature, Split View allows developers to expose a side-menu when the viewport is a certain width. To do this, all that needs to be added is the `expose-aside-when` attribute directive to the `ion-side-menu`:

```html
<ion-side-menus>
  <!-- Center content -->
  <ion-side-menu-content>
  </ion-side-menu-content>

  <!-- Left menu -->
  <ion-side-menu expose-aside-when="large">
  </ion-side-menu>
</ion-side-menus>
```

As you can see, it is _extremely difficult_ to do d(-_^).  

The `expose-aside-when="large"` attribute will keep the side menu hidden when the viewport's width is less than 768px, but when the viewport's width is 768px or greater, the menu will always be shown and can no longer be opened or closed, like it could when it was hidden for smaller viewports.

Using “large” as the attribute's value is simply an alias to `(min-width:768px)`, since it is the most common use-case. However, for added flexibility, any valid media query could be added as the value, such as `(min-width:600px)`, or even multiple queries, such as `(min-width:750px) and (max-width:1200px)`.

```html
<ion-side-menu expose-aside-when="(min-width:750px) and (max-width:1200px)"
```

With this addition to Ionic, apps can now adapt much better when going between phones and tablets of varying sizes. Check out the [codepen demo](http://codepen.io/ionic/pen/cDbFg) to see Splitview in action, and check out the [docs](http://ionicframework.com/docs/api/directive/exposeAsideWhen/) for more information.
