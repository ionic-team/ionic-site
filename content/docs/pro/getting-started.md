---
layout: fluid/pro_docs_base
category: pro
id: pro-getting-started
title: Getting Started with Ionic Pro - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Getting Started with Ionic Pro

Ionic Pro is a commercial layer of Software Development Lifecycle (SDLC) features that help professional Ionic developers
build better apps, faster.

To get started with Ionic Pro, first [create an account](https://dashboard.ionicjs.com/signup). Ionic Pro has a free plan for development and kicking the tires, and paid plans for production app usage. Larger teams can also create Organizations to administer team members and make it easy to manage projects.


Next, make sure to install the Ionic CLI by running

```bash
npm install -g ionic
```

Note: you may need to add `sudo` to this command on Mac/Linux.

## Log into your Ionic Pro account

Once the Ionic CLI is installed, you'll need to log into your Ionic Pro account from the CLI:

```bash
ionic login
```

## Creating a new App

Once logged in, you can create a new Ionic app and link it to Ionic Pro. If you already have an app you'd like to link, skip this step.

To create a new app, use the `ionic start` command, or follow the official [Ionic Framework Getting Started](/getting-started) guide.

Here's an example of creating a simple new app with the `tabs` template:

```bash
ionic start myApp tabs
```

Once the command finishes, you'll be prompted to create a new Ionic Pro app or link to an existing one. Go ahead and choose the option you'd like to do.

## Linking an Existing app

Already have an existing Ionic app you'd like to link? No problem. Run `ionic link` in the directory of that app to connect it to Ionic Pro:

```bash
cd myApp
ionic link
```

The command will prompt you to create a new Ionic Pro app or link to an existing app.

## git push ionic master

Now that you are logged into your Ionic Pro account from the CLI and have an app you'd like to use, the next
step is to push commits to your Ionic Pro account.

Follow the [Git Workflow](git.html) to continue.
