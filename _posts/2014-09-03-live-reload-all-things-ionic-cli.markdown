---
layout: post
title:  "Live Reload All the Things: Ionic CLI's Latest Features"
date:   "2014-09-03 12:30:00"
hide_date: false
categories: ionic
author: '<img src="https://pbs.twimg.com/profile_images/495587171332403200/tO9oMmCn.png" class="author-icon"><a href="https://twitter.com/mhartington">Mike</a>'
published: true
---

<img class="showcase-image" src="/img/blog/ionic-cli-v1_2_0.png">

We are happy to announce that the Ionic CLI has been updated with some great new features.

<!-- more -->

### LiveReload All Things
One of the best features of the CLI is the LiveReload server that gets started when you run `ionic serve`. This allows you to develop your app in the browser and have it update instantly when changes are made to any development files.

With this in mind, we added the ability to have LiveReload run when you’re testing on a device! The LiveReload functionality is similar to Ionic Serve, but instead of developing and debugging an app using a standard browser, the compiled hybrid app itself is watching for any changes to its files and reloading the app when needed. This reduces the requirement to constantly rebuild the app for small changes. Do note, however, that LiveReload only works for devices that support [web sockets](http://caniuse.com/websockets).

Not only can you run LiveReload, you can also access console logs from the device and server logs showing which files the device is requesting. This lets you build your app quickly in the browser, then debug it on an actual device or emulator ([Genymotion](http://www.genymotion.com/) works, too). How do you start it? You can pass a few flags, in any combination, in your run/emulate commands:

```bash
$ ionic  [run|emulate] <platform> [options]

    [--livereload|-l] .... Live Reload app dev files from the device
    [--consolelogs|-c] ... Print app console logs to Ionic CLI
    [--serverlogs|-s] .... Print dev server logs to Ionic CLI
```

Ionic App LiveReload Command Examples:

```bash
$ ionic emulate ios --livereload --consolelogs --serverlogs

$ ionic run android -l -c -s
```



### Codepen Starter Templates

Ionic loves Codepen! In fact, we really love Codepen; just check out our [Codepen page](http://codepen.io/ionic/public-list/). It’s the perfect place to share code and play with ideas and concepts in a sandbox. It also provides an ideal environment in which to demonstrate issues that you may find during your development. Until now, taking Codepen demos and moving them into an Ionic project was a bit of a mess. You’d start a new project, copy all the assets from Codepen into their appropriate locations, remove the inline template, go back and make sure you caught that lone semicolon you forgot the first time…

Thankfully, those days are gone! Now, you have the ability to start a project based on a Codepen demo.  The new feature is dead simple; all you need is a Codepen URL, and you're good to go.

```bash
$ ionic start myapp http://codepen.io/ionic/pen/hqcju
```

The command will run its normal process, scaffolding out the project and installing the correct plugins, but it will also include the code from the Codepen. All the JavaScript and CSS will be parsed into their own respective files, and any inline templates will be made into html template files and saved into the `templates` directory.

## Update to the latest Ionic CLI

With these new features, you can go from testing in Codepen to testing on a device! Update your CLI to get these new features: `npm update -g ionic`, and be sure to check out the [CLI’s documentation](https://github.com/driftyco/ionic-cli). In addition to the documentation, the `ionic --help` command has been improved to include even more information about each task and its available options.

We’re always looking to improve the CLI to help make developing Ionic apps even easier, so please feel free to submit any ideas and feature requests to our [Ionic CLI repo](https://github.com/driftyco/ionic-cli/issues). Thanks!
