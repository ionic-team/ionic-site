---
layout: fluid/pro_docs_base
category: pro
id: cli-cordova-prepare
command_name: cordova prepare
title: Ionic CLI Documentation - cordova prepare
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# `$ ionic cordova prepare`
Copies assets to Cordova platforms, preparing them for native builds
## Synopsis

```bash
$ ionic cordova prepare [<platform>]
```
  
## Details

`ionic cordova prepare` will do the following:
- Copy the **www/** directory into your Cordova platforms.
- Transform **config.xml** into platform-specific manifest files.
- Copy icons and splash screens from **resources/** to into your Cordova platforms.
- Copy plugin files into specified platforms.

You may wish to use `ionic cordova prepare` if you run your project with Android Studio or Xcode.


Input | Description
----- | ----------
`platform` | The platform you would like to prepare (e.g. `ios`, `android`)




## Examples

```bash
$ ionic cordova prepare 
$ ionic cordova prepare ios
$ ionic cordova prepare android
```
