---
layout: v2/docs_base
id: getting-started
title: Getting Started with Ionic 2
header_title: Getting Started with Ionic 2
header_sub_title: Getting Started with Ionic 2
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Getting Started with Ionic 2</h1>


Welcome to the Ionic 2 Guide! In this section, we will walk through the process of creating a new Ionic 2 app. We will then add several *views*, or *pages* to the app. Finally, we will work with some of the most important controls, and go over getting your app into the app stores.

Like Ionic 1, Ionic 2 apps can be quickly created from the Ionic CLI or GUI tool, or built and tested right in the browser.

To install the Ionic SDK and create Ionic 2 projects, we need to install the latest alpha release:

```bash
$ npm install -g ionic@alpha
```

(Note: do not type the dollar sign, that is a placeholder for your shell prompt).

For more installation info, follow the official [Getting Started](http://ionicframework.com/getting-started/) guide. This walks you through
installing node, npm, cordova, and Ionic.

Once that's done, create your first Ionic app:

```bash
$ ionic start cutePuppyPics --v2
```

To run our app, just run

```bash
$ ionic serve
```

And we can play with it right in the browser!

In the [next section](project-structure/), we will go over the [structure](project-structure/) of a typical Ionic project!
