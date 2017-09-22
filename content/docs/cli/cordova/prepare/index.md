---
layout: fluid/cli_docs_base
category: cli
id: cli-cordova-prepare
page_name: ionic cordova prepare
command_name: ionic cordova prepare
title: ionic cordova prepare - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


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
`platform` | The platform you would like to prepare (`android`, `ios`)




## Examples

```bash
$ ionic cordova prepare 
$ ionic cordova prepare ios
$ ionic cordova prepare android
```
