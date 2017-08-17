---
layout: fluid/pro_docs_base
category: pro
id: pro-live-deploy-setup
title: Live Deploy Setup - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Live Deployments

## Installation

<script src="https://fast.wistia.com/embed/medias/2702mkf530.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_2702mkf530" style="height:400px;width:640px">&nbsp;</div>

The Ionic Plugin manages fetching and applying remote app updates. To use Ionic Pro's Deploy feature, you must first [Set up a Channel](/docs/pro/channels.html) to poll for updates from.

Common use cases are using a **Production** Channel for your App Store binaries, and the **Master** channel to run a native binary on your phone during development that gets automatically updated.

Once you've set up a Channel, just click **Set Up Deploy** next to that Channel and it will walk you through the options available and generate the Command Line command that you should run.

## Usage

To push new updates to your app, first push a new build using the [Git Workflow](/docs/pro/git.html). This will create a new build viewable in the Ionic Pro dashboard.

To get that new build live in your app using Deploy, there are two options. Either [manually deploy the build to the channel](/docs/pro/channels.html#deploying-to-a-channel) defined in the plugin above (the "Production" channel, by default), or, if you have specified a [specific git branch channel to auto-deploy](/docs/pro/channels.html#automating-deployment-from-a-git-branch), the Deploy plugin will auto update once the build has completed.

<script src="https://fast.wistia.com/embed/medias/00mgfso2ak.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_00mgfso2ak" style="height:400px;width:640px">&nbsp;</div>