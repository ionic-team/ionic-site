---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-live-deploy-setup
title: Live Deploy Setup - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Using Ionic Deploy

Ionic Pro's Deploy feature makes it easy to deploy app updates in real time without going through a traditional app store submission process for the vast majority of business logic, UI, and style changes.

The Deploy feature works with the Ionic Pro [Git Workflow](/docs/pro/basics/git/) to deploy new code updates in production (or testing) apps.

*Note: The Deploy feature only works on binary compatible changes, meaning if you rely on native code updates you must resubmit to the app store first before using Deploy.*

## Installation

<script src="https://fast.wistia.com/embed/medias/2702mkf530.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_2702mkf530" style="height:400px;width:640px">&nbsp;</div>

The Ionic Plugin manages fetching and applying remote app updates. To use Ionic Pro's Deploy feature, you must first [Set up a Channel](/docs/pro/channels.html) to poll for updates from.

### Setting up a Channel

Every app comes with two default channels: **Master**, and **Production**.

Common use cases are using a **Production** Channel for your App Store binaries, and the **Master** channel to run a native binary on your phone during development that gets automatically updated.

Once you've set up a Channel, just click **Set Up Deploy** next to that Channel and it will walk you through the options available and generate the Command Line command that you should run.

To create new channels beyond these two, you must have a paid Ionic Pro membership. To add new channels, simply view the channels list by going to Code -> Channels, and then click the New Channel button.

### Installing Ionic Pro Plugin

The Ionic Pro plugin comes with Ionic Pro's Deploy feature for detecting and syncing your app with updates that you've pushed to channels.

To install the plugin, we recommend following the automatic instructions after clicking "Set Up Deploy" on the channels list:

To install the plugin manually, run the following command in the root of your Ionic app, making sure to substitute the correct values for your app:

```bash
cordova plugin add cordova-plugin-ionic --save --variable APP_ID="YOUR_APP_ID" --variable CHANNEL_NAME="YOUR_CHANNEL_NAME" --variable UPDATE_METHOD="background|auto|none" --variable MAX_STORE="2"
```

Where `YOUR_APP_ID` is the ID of the app in Ionic Pro, and `YOUR_CHANNEL_NAME` is the name of a channel. Make sure to use the exact name of your channel, including the exact casing. `MAX_STORE` tells us how many previous versions of code to keep inside your app, this enables you to revert to those versions quickly, or swap between versions. `UPDATE_METHOD` is one of the options from below.

## Different methods of applying updates (background, auto, none)

When you are installing the Ionic Pro plugin, you have the option to choose which update method to use. The three options are:

**"background"** mode will check for updates when a user first opens your app from a completely closed state (in the splashscreen). It will download the update in the background while the user is using your app. The next time they close and open your app, we will apply the updated version. Updates are performed in the native code layer, and don't rely on your app loading to complete, thus protecting you from broken updates. The channel you are pulling from can by dynamically updated using the [Deploy Pro Client](/docs/pro/deploy/plugin-api.html), and you can still perform updates yourself using JS as well.

**"auto"** mode will check for updates when a user first opens your app from a completely closed state (in the splashscreen). It will then WAIT on the splashscreen until the new update is downloaded, and immediately show the user the new version of the code after the splashscreen. Using this method essentially forces users to always use the most up to date version when connected to the internet. Updates are performed in the native code layer, and don't rely on your app loading to complete, thus protecting you from broken updates. The channel you are pulling from can by dynamically updated using the [Deploy Pro Client](/docs/pro/deploy/plugin-api.html), and you can still perform updates yourself using JS as well.

**"none"** will not automatically apply or download updates for you. Instead you have to manage the entire update process yourself using the [Deploy Pro Client](/docs/pro/deploy/plugin-api.html). This isn't recommended as if you deploy an update that "breaks" your app and can no longer apply Deploy updates, you will have to release a native binary in order to fix the issue or the user will have to delete and reinstall your app. Using the background or auto methods protects you by applying updates in the native layer.

## Usage

To push new updates to your app, first push a new build using the [Git Workflow](/docs/pro/basics/git/). This will create a new build viewable in the Ionic Pro dashboard.

To get that new build live in your app using Deploy, there are two options. Either [manually deploy the build to the channel](/docs/pro/channels.html#deploying-to-a-channel) defined in the plugin above (the "Production" channel, by default), or, if you have specified a [specific git branch channel to auto-deploy](/docs/pro/channels.html#automating-deployment-from-a-git-branch), the Deploy plugin will auto update once the build has completed.

<script src="https://fast.wistia.com/embed/medias/00mgfso2ak.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_00mgfso2ak" style="height:400px;width:640px">&nbsp;</div>

## Developing With the Plugin (Debug Mode)

When you install the Ionic Cordova Plugin, you might not want Deploy to download new versions of code when running Debug binaries. To allow this, you will encounter a popup asking you if you want to download new versions of code when using a Debug binary.

If you wish to actively develop WHILE using Deploy (such as testing it when you're setting it up, etc), you might want to disable our debug warning by passing in `WARN_DEBUG="false"` when installing the plugin:

```bash
cordova plugin add cordova-plugin-ionic --save --variable APP_ID="YOUR_APP_ID" --variable CHANNEL_NAME="YOUR_CHANNEL_NAME" --variable UPDATE_METHOD="background|auto|none" --variable WARN_DEBUG="false"
```

When you run with a Release binary, this message will go away. You can ensure you're on a release binary by doing the following:

On iOS you can toggle the build type In Xcode via **Product -> Scheme -> Edit Scheme**.

On Android, you can create a release build with `ionic build android --release`

## Advanced Usage

Want to do something sweet, like allow users to subscribe to a special Beta Channel instead of the default Production one? Do some split testing? Customize the way updates are applied (like checking every 30 minutes, or on login/logout)? Check out our detailed [Deploy API Documentation](/docs/pro/deploy/plugin-api.html)!