---
layout: fluid/cli_docs_base
category: cli
id: cli-cordova-build
page_name: ionic cordova build
command_name: ionic cordova build
title: ionic cordova build - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic cordova build`

Build (prepare + compile) an Ionic project for a given platform
## Synopsis

```bash
$ ionic cordova build [<platform>]
```
  
## Details

Like running `cordova build` directly, but also builds web assets and provides friendly checks.

To pass additional options to the Cordova CLI, use the `--` separator after the Ionic CLI arguments. For example, for verbose log output from Cordova during an iOS build, one would use `ionic cordova build ios -- -d`. See additional examples below.


Input | Description
----- | ----------
`platform` | The platform to build (`android`, `ios`)


Option | Description
------ | ----------
`--no-build` | Do not invoke an Ionic build
`--prod` | Build the application for production
`--aot` | Perform ahead-of-time compilation for this build
`--minifyjs` | Minify JS for this build
`--minifycss` | Minify CSS for this build
`--optimizejs` | Perform JS optimizations for this build
`--debug` | Create a Cordova debug build
`--release` | Create a Cordova release build
`--device` | Create a Cordova build for a device
`--emulator` | Create a Cordova build for an emulator
`--buildConfig` | Use the specified Cordova build configuration

## Examples

```bash
$ ionic cordova build ios
$ ionic cordova build ios --prod --release
$ ionic cordova build ios --device --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
$ ionic cordova build android
$ ionic cordova build android --prod --release -- -- --keystore=filename.keystore --alias=myalias
$ ionic cordova build android --prod --release -- -- --minSdkVersion=21
$ ionic cordova build android --prod --release -- -- --versionCode=55
$ ionic cordova build android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
```
