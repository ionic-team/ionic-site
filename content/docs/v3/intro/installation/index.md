---
layout: fluid/docs_base
category: intro
id: installation
title: Ionic Native App Installation with Ionic CLI and Cordova
next_page_title: Tutorial
next_page_link: /docs/v3/intro/tutorial
---

# Installing Ionic

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/v3/intro/installation/index.md'>Improve
this doc</a>

Ionic apps are created and developed primarily through the Ionic command line
utility (the "CLI"), and use Cordova to build/deploy as a native app. This means
we need to install a few utilities to get developing.

### Getting Node and NPM

Most of the tooling in the CLI is based on Node and is managed through npm. The
quickest way to get Node and NPM installed on your machine is through the
[NodeJS installer](https://nodejs.org/). Be sure to install the LTS version of
Node. Close any terminals/command prompts you may have open, run the installer,
and launch a new terminal window. To verify you have everything installed
correctly, you can run `npm --version` and `node --version`. If this errors,
please resolve before moving on.

### Ionic CLI and Cordova

With Node and NPM setup, let's install the Ionic and Cordova CLI.

```bash
$ npm install -g ionic cordova
```

> Note: The `-g` means this is a global install, so for Windows you will need
> to open an Admin command prompt. For Mac/Linux, you might need to run the command
> with `sudo`.

Once that's done, create your first Ionic app:

```bash
$ ionic start helloWorld blank
```

To run your app, `cd` into the directory that was created and then run the
`ionic serve` command to test your app right in the browser!

```bash
$ cd helloWorld
$ ionic serve
```
