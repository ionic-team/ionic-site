---
layout: v2/docs_base
id: getting-started
subid: tutorial
title: Ionic 2 | Getting Started | Tutorial
header_title: Getting Started - Tutorial
header_sub_title: Ionic 2 Developer Preview
---

<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/getting-started/tutorial/index.md'>
    Improve this doc
  </a>
</div>

# Ionic 2 Tutorial

Now that we have [Ionic and its dependencies installed](../installation), let's build our first app! This section will walk through the process of starting a new application, adding pages, navigating between those pages, and more. Let's get started!


## Starting a New Ionic 2 App

If you don't already have an app started from the [previous section](../installation), let's create a new app! Use the `start` command to initialize a new Ionic app. We specify that we want it to be an Ionic 2 app by passing in the `--v2` option.

```bash
$ ionic start MyIonic2Project --v2
```

This will pull Ionic 2 down, install [npm modules](../../resources/what-is/#npm) for the application, and get [Cordova](../../resources/what-is/#cordova) set up and ready to go.


## Viewing the app in a browser
To get a quick preview of the Ionic 2 starter, use the `serve` command.

```bash
$ ionic serve
```

<img src="http://ionicframework.com.s3.amazonaws.com/v2/starter1.png" style="max-width: 320px">

## Running the app on a device

To run an Ionic 2 app on a device or simulator, use the `ionic run` command. Check out the [installation](../installation/) docs if you don't have a simulator or device set up.

```bash
# Will run on the ios simulator
$ ionic run ios

# Will run on the android simulator
$ ionic run android
```

The same command with `--device` will run the app on an actual device if one is connected.


In the next section, let's go over the project structure created by the `ionic start` command.


<a href="project-structure/" class="btn btn-primary">Project Structure</a>
