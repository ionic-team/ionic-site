---
layout: fluid/docs_base
category: cli
id: cli-cordova-platform
command_name: cordova platform
title: cordova platform
header_sub_title: Ionic CLI
---

# `$ ionic cordova platform`

Manage Cordova platform targets
## Synopsis

```bash
$ ionic cordova platform [action] [platform]
```
  
## Details

Like running `cordova platform` directly, but adds default Ionic icons and splash screen resources (during `add`) and provides friendly checks.


Input | Description
----- | ----------
`action` | add, remove, or update a platform; ls, check, or save all project platforms
`platform` | The platform that you would like to add (e.g. ios, android)


Option | Description
------ | ----------
`--noresources`, `-r` | Do not add default Ionic icons and splash screen resources (corresponds to add)

## Examples

```bash
$ ionic cordova platform 
$ ionic cordova platform add ios
$ ionic cordova platform add android
$ ionic cordova platform rm ios
```
