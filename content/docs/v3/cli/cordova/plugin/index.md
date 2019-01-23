---
layout: fluid/cli_docs_base
category: cli
id: cli-cordova-plugin
page_name: ionic cordova plugin
command_name: ionic cordova plugin
title: ionic cordova plugin - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


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
`--force` | Force overwrite the plugin if it exists (corresponds to `add`)
`--variable` | Specify plugin variables

## Examples

```bash
$ ionic cordova plugin 
$ ionic cordova plugin add cordova-plugin-inappbrowser@latest
$ ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXX
$ ionic cordova plugin rm cordova-plugin-camera
```
