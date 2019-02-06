---
layout: fluid/docs_base
category: intro
id: tutorial
subid: tutorial
title: Tutorial
header_sub_title: Getting Started with Ionic
prev_page_title: Installing Ionic
prev_page_link: /docs/v3/intro/installation/
next_page_title: Project Structure
next_page_link: /docs/v3/intro/tutorial/project-structure/
---

# Ionic Tutorial

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/v3/intro/tutorial/index.md'>
  Improve this doc
</a>

Now that you have [Ionic and its dependencies installed](../installation), you
can build your first app! This section will guide you through the process of
starting a new application, adding pages, navigating between those pages, and
more. Let's get started!

> Ionic uses TypeScript for its code. If you're unfamiliar with TypeScript, don't
> worry, it's very similar to regular JavaScript. But if you want to read up on
> it, take a look at [this resource
> page](https://ionicframework.com/docs/resources/what-is/#typescript).

### Starting a New Ionic App

To start a new app, open your [terminal/command prompt](/docs/resources/what-is/#cli) and run:

```bash
$ ionic start MyIonicProject tutorial --type=ionic-angular
```

* `start` will tell the CLI create a new app.
* `MyIonicProject` will be the directory name and the app name from your
  project.
* `tutorial` will be the starter template for your project.

Along with creating your project, this will also install [node
modules](../../resources/what-is/#npm) for the application, and prompt you if
you want [Cordova](../../resources/what-is/#cordova) set up.

Along with the tutorial template, Ionic also provides the following official
templates:

* `tabs` : a simple 3 tab layout
* `sidemenu`: a layout with a swipable menu on the side
* `blank`: a bare starter with a single page
* `super`: starter project with over 14 ready to use page designs
* `tutorial`: a guided starter project

If you don't specify a template at the start, you will be prompted to pick one.

### Viewing the app in a browser

Now, you can `cd` into the folder that was created. To get a quick preview of
your app in the browser, use the `serve` command.

```bash
$ cd MyIonicProject/
$ ionic serve
```

<br/>
<center>
  <img src="/img/docs/tutorial-screen.png" style="max-width: 320px">
</center>
<br/>

In the next section, let's go over the project structure created by the `ionic
start` command.
