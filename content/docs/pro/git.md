---
layout: fluid/pro_docs_base
category: pro
id: pro-git
title: Working with Git - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
pre_footer: true
dark_header: true
---

# Working with Git

Ionic Pro uses a git-based workflow to manage updates and to push new builds through Ionic View, Live Deploy, and more. If you're familiar with how Heroku works, then you'll find Ionic Pro's git workflow similar to use.

Note: Ionic Pro is *not a replacement* for your current source code repository service (GitHub, GitLab, etc.)! The `ionic` remote is used only for interacting with the Ionic Pro suite of services.

## Installing Git

On Mac and Linux, git should already be installed and configured properly.

For Windows, download and install [Git for Windows](https://git-scm.com/download/win). During installation, make sure to select "Use OpenSSH."

That should be it, git will be installed and ready to use!

## Getting Started

If you haven't followed the quick setup guide in the Ionic Pro Dashboard after creating an app, follow the instructions below.

First, install the latest version of the Ionic CLI:

```bash
npm install -g ionic@latest
```

Next, find your App ID from the Ionic Pro Dashboard. Then run:

```bash
ionic start myApp --pro-id APP_ID
```

Where `APP_ID` is the ID for your app from the Ionic Pro Dashboard.

Finally, `cd` into the app directory and use git to push your changes to Ionic Pro:

```bash
cd myApp
git push ionic master
```

## Pushing new builds

Once you have changes you'd like to build and manage on Ionic Pro, first commit your code changes, and then push to the `ionic` remote:

```bash
git add -u
git commit -m "Million dollar commit"

```

Don't forget to also periodically push to your existing `origin`, as Ionic Pro is not a replacement for GitHub, GitLab, or a self-hosted git repository.

## Linking an existing app

If you already have an Ionic app that you'd like to start using git with, use the `ionic link` command. If the app hasn't been created in Ionic Pro yet, leave out `--pro-id` below and instead choose to create a new app:

```bash
ionic link --pro-id APP_ID
```

## Adding SSH Keys

The Ionic CLI automatically detects and adds your public key to your Ionic Pro account as part of the `link` and `start` commands. If you have additional public keys you'd like to link to Ionic Pro, create them manually using `ssh-keygen`, log into your Ionic Pro account, and add the keys manually under "SSH Keys"
