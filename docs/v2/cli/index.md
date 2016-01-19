---
layout: v2_fluid/docs_base
category: cli
id: cli-intro
title: Ionic 2 | CLI | Intro
header_title: Ionic CLI
header_sub_title: Ionic 2 Developer Preview
---


## Ionic CLI

The Ionic CLI is the primary tool used during the process of developing an Ionic app. It is like a swiss army knife in that it brings together a bunch of miscellaneous tools under a single interface. The CLI contains a number of commands crucial for Ionic development, such as `start`, `build`, `serve`, and `run`. It also contains commands like `emulate` and `info`, which can be helpful in certain situations.

### Installing the CLI

To install the CLI, you will need to first install [node](../resources/what-is#node) and [npm](../resources/what-is#npm). Note - the CLI requires Node 4.X. Node 5.X has been know to cause a number of issues.  Once installed, run the following command to get the latest version of the Ionic CLI:

```bash
$ npm install -g ionic@beta
``` 

On Mac and Linux, you'll need to add `sudo` to install Ionic globally:

```bash
$ sudo npm install -g ionic@beta
```

### Basic Usage

One of the most important commands is the `start` command, which creates a new Ionic project. Let's try it out:

```bash
$ ionic start myAwesomeApp --v2
```

This will create a new app named `myAwesomeApp`. Let's `cd` in to that directory, and run another Ionic CLI command:

```bash
$ ionic info
```

This should print out details about your Ionic environment, which is useful for debugging. Finally, to view our app in the browser, we can use the `serve` command:

```bash
$ ionic serve
```

### Next Steps

Now that you've got the basics down, check out the menu on the left for a full list of commands. If you prefer to use the command line, you can see the full list of commands and options by simply typing `ionic`.
