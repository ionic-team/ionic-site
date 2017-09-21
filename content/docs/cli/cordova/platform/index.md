---
layout: fluid/cli_docs_base
category: cli
id: cli-cordova-platform
command_name: cordova platform
title: Ionic CLI Documentation - cordova platform
header_sub_title: Ionic CLI
---

# `$ ionic cordova platform`

{% include fluid/toc.html %}

Manage Cordova platform targets
## Synopsis

```bash
$ ionic cordova platform [<action>] [<platform>]
```
  
## Details

Like running `cordova platform` directly, but adds default Ionic icons and splash screen resources (during `add`) and provides friendly checks.


Input | Description
----- | ----------
`action` | `add`, `remove`, or `update` a platform; `ls`, `check`, or `save` all project platforms
`platform` | The platform that you would like to add (`android`, `ios`)


Option | Description
------ | ----------
`--no-resources` | Do not pregenerate icons and splash screen resources (corresponds to `add`)

## Examples

```bash
$ ionic cordova platform 
$ ionic cordova platform add ios
$ ionic cordova platform add android
$ ionic cordova platform rm ios
```
