---
layout: fluid/pro_docs_base
category: pro
id: pro-concepts
title: Concepts - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Ionic Pro Concepts

Ionic Pro is a git-based mobile app development lifecycle suite that makes it easy to build, test, and deploy mobile and web apps faster than ever before.

Ionic Pro introduces a few new concepts and gives some familiar concepts new names.

## Builds

The [Git Workflow](/docs/pro/git.html) at the core of Ionic Pro takes commits of your app code, builds them in the cloud, and then makes it possible to distribute and manage those builds through a simple Dashboard interface and CLI tools.

A `Build` in Ionic Pro is triggered when running `git push ionic master` with new changes to your app. Each build goes through a CI system that triggers a full build of your app (much like running `npm run build`), and the completed build is stored for later use through one of the core Ionic Pro services.

## Channels

Every build of your app can be distributed through what we call `Channels`. A Channel points to a specific Build of your app that will be shared with specific testers and users. Channels are used for both Ionic View and Ionic Deploy.
