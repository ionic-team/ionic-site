---
layout: fluid/pro_docs_base
category: pro
id: pro-live-deploy
title: Live Deploy - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Live Deployment

Ionic Pro's Live Deploy feature let you update the UI and business logic of your app remotely, in real-time. Push HTML, JS, and CSS updates directly to your users without going through the
app store to quickly fix bugs and ship new features.

This enables you to

* Update your application on demand
* Skip app store approvals
* Get new features and bug fixes to your users quickly
* A/B test changes with certain users before rolling them out to everyone


## Installation

The Ionic Deploy Plugin manages fetching and applying remote app updates. To use Ionic Pro's Deploy feature, you must first [Set up a Channel](/docs/pro/channels.html) to poll for updates from.

Common use cases are using a **Production** Channel for your App Store binaries, and the **Master** channel to run a native binary on your phone during development that gets automatically updated.

Once you've set up a Channel, just click **Set Up Deploy** next to that Channel and it will walk you through the options available and generate the Command Line command that you should run.

## Usage

To push new updates to your app, first push a new build using the [Git Workflow](/docs/pro/git.html). This will create a new build viewable in the Ionic Pro dashboard.

To get that new build live in your app using Deploy, there are two options. Either [manually deploy the build to the channel](/docs/pro/channels.html#deploying-to-a-channel) defined in the plugin above (the "Production" channel, by default), or, if you have specified a [specific git branch channel to auto-deploy](/docs/pro/channels.html#automating-deployment-from-a-git-branch), the Deploy plugin will auto update once the build has completed.

## Deploy Plugin API

When using `UPDATE_METHOD="auto"` or `UPDATE_METHOD="background"`, the plugin manages updates for you. If you'd like to manually control updates, the Deploy plugin has a number of functions available to manage the update lifecycle.

See the Deploy manual example for an example of using the plugin directly:

`IonicDeploy.init(app_id, server_host, success, failure)`

Initializes the plugin with an app ID and API host specified in js-land.  Can be used to change these variables at runtime

`IonicDeploy.check(app_id, channel_tag, success, failure)`

Check for updates from a specified channel, will change the saved channel from the install step

`IonicDeploy.download(app_id, success, failure)`

If an update is present, download it

`IonicDeploy.extract(app_id, success, failure)`

If an update has been downloaded, extract it and set the default redirect location for next app start.

`IonicDeploy.redirect(app_id, success, failure)`

Redirect to the latest version of the app on this device.

`IonicDeploy.info(app_id, success, failure)`

Get info on current version for this device.

`IonicDeploy.getVersions(app_id, success, failure)`

List downloaded versions on this device.

`IonicDeploy.deleteVersion(app_id, uuid, success, failure)`

Delete a downloaded version by UUID from this device.
