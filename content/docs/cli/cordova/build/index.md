---
layout: fluid/docs_base
category: cli
id: cli-cordova-build
command_name: cordova build
title: cordova build
header_sub_title: Ionic CLI
---

# `$ ionic cordova build`

Build (prepare + compile) an Ionic project for a given platform
## Synopsis

```bash
$ ionic cordova build [<platform>]
```
  
## Details

Like running `cordova build` directly, but also builds web assets and provides friendly checks.


Input | Description
----- | ----------
`platform` | The platform to build: `ios`, `android`


Option | Description
------ | ----------
`--prod` | Build the application for production
`--aot` | Perform ahead-of-time compilation for this build
`--minifyjs` | Minify JS for this build
`--minifycss` | Minify CSS for this build
`--optimizejs` | Perform JS optimizations for this build
`--debug` | Create a Cordova debug build
`--release` | Create a Cordova release build
`--device` | Deploy Cordova build to a device
`--emulator` | Deploy Cordova build to an emulator
`--buildConfig` | Use the specified Cordova build configuration

## Examples

```bash
$ ionic cordova build ios
$ ionic cordova build ios --prod --release
$ ionic cordova build ios --device --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --provisioningProfile="UUID"
$ ionic cordova build android
$ ionic cordova build android --prod --release -- -- --minSdkVersion=21
$ ionic cordova build android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
```
