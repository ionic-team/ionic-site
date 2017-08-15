---
layout: fluid/pro_docs_base
category: pro
id: pro-migration 
title: Cloud Deploy Migration - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Migrate from Ionic Cloud

If you're moving your app from the legacy Ionic Cloud dashbaord and want to keep using deploy, here's what you need to do.

## Remove the old plugin

`ionic-plugin-deploy` is no longer needed in Ionic Pro, so you can run:

```bash
cordova plugin rm ionic-plugin-deploy
```

## Remove all your old deploy code

Your app is probably has code to check for and download updates using the `ionic-cloud-angular` library.  you can safely remove all of this code, as the new service works either automatically or directly on the plugin.

## Set up the new plugin

The Ionic Pro services which take advantage of native device features are now centralized in the `cordova-plugin-ionic` plugin.  You'll install it as part of the setup pricess **[here](/docs/pro/live-deploy/setup.html)**.  

## All set!

Congrats, you're done!





