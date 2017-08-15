---
layout: fluid/pro_docs_base
category: pro
id: cli-cordova-plugin
command_name: cordova plugin
title: Ionic CLI Documentation - cordova plugin
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# `$ ionic cordova plugin`
Manage Cordova plugins
## Synopsis

```bash
$ ionic cordova plugin [<action>] [<plugin>]
```
  
## Details

Like running `cordova plugin` directly, but provides friendly checks.


Input | Description
----- | ----------
`action` | `add` or `remove` a plugin; `ls` or `save` all project plugins
`plugin` | The name of the plugin (corresponds to `add` and `remove`)


Option | Description
------ | ----------
`--force` | Forve overwrite the plugin if it exists (corresponds to `add`)
`--variable` | Specify plugin variables

## Examples

```bash
$ ionic cordova plugin 
$ ionic cordova plugin add cordova-plugin-inappbrowser@latest
$ ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXX
$ ionic cordova plugin rm cordova-plugin-camera
```
