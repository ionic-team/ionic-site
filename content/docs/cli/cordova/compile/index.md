---
layout: fluid/cli_docs_base
category: cli
id: cli-cordova-compile
command_name: cordova compile
title: Ionic CLI Documentation - cordova compile
header_sub_title: Ionic CLI
---

# `$ ionic cordova compile`

{% include fluid/toc.html %}

Compile native platform code
## Synopsis

```bash
$ ionic cordova compile [<platform>]
```
  
## Details

Like running `cordova compile` directly, but provides friendly checks.


Input | Description
----- | ----------
`platform` | The platform to compile (`android`, `ios`)


Option | Description
------ | ----------
`--debug` | Create a Cordova debug build
`--release` | Create a Cordova release build
`--device` | Compile Cordova build to a device
`--emulator` | Compile Cordova build to an emulator

## Examples

```bash
$ ionic cordova compile ios
$ ionic cordova compile ios --device
$ ionic cordova compile android
```
