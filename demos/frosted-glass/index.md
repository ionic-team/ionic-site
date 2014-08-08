---
layout: demo_landing
title: "Ionic Framework - iOS 7 Frosted Glass Blur"
demo_title: "iOS 7 Frosted Glass Blur"
codepen_id: "rxysG"
---

The frosted glass effect was made popular in iOS 7. The basic concept is
we are blurring not only the top layer, but the content underneath it.

Historically, devices weren't powerful enough to do this type of compositing,
but with newer devices like the iPhone 5 and the Nexus 5, it's easy and fast! __Note__: that means this effect should only be used on new devices, preferrably iOS ones!


Achieving the frosted glass effect in your Ionic apps is easy! All you need to do is include the CSS and JS from the [Ionic Frosted Glass](http://github.com/driftyco/ionic-contrib-frosted-glass) repo, include the `ionic.contrib.frostedGlass` angular module, and then add `frosted-bar` to your header bar in Ionic:

```html
<pane ng-controller="PageCtrl">
  <header-bar title="'Title'" type="bar-frosted" frosted-bar></header-bar>
  <content has-header="true">
    <!-- Content here -->
  </content>
</pane>
```

See the full instructions on the [Ionic Frosted Glass](http://github.com/driftyco/ionic-contrib-frosted-glass)
repository.  Or, download the starter Cordova project below which contains everything you need
to build and run your own frosted glass Ionic app!

<a href="https://github.com/driftyco/ionic-contrib-frosted-glass/archive/master.zip" class="btn btn-large btn-primary"><i class="icon ion-social-github"></i> Download Project</a>
