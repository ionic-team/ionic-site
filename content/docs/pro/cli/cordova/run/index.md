---
layout: fluid/pro_docs_base
category: pro
id: cli-cordova-run
command_name: cordova run
title: Ionic CLI Documentation - cordova run
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# `$ ionic cordova run`
Run an Ionic project on a connected device
## Synopsis

```bash
$ ionic cordova run [<platform>]
```
  
## Details

Like running `cordova run` directly, but also watches for changes in web assets and provides live-reload functionality with the `--livereload` option.

For Android and iOS, you can setup Remote Debugging on your device with browser development tools: **[https://docs.ionic.io/tools/developer/#remote-debugging](https://docs.ionic.io/tools/developer/#remote-debugging)**

Just like with `ionic cordova build`, you can pass additional options to the Cordova CLI using the **--** separator.


Input | Description
----- | ----------
`platform` | The platform to run: `ios`, `android`


Option | Description
------ | ----------
`--list` | List all available Cordova targets
`--livereload`, `-l` | Spin up server to live-reload www files
`--consolelogs`, `-c` | Print out console logs to terminal
`--serverlogs`, `-s` | Print out dev server logs to terminal
`--address` | Use specific address for dev/live-reload server
`--port`, `-p` | Use specific port for the dev server
`--livereload-port`, `-r` | Use specific port for live-reload server
`--prod` | Mark as a production build
`--aot` | Perform ahead-of-time compilation for this build
`--minifyjs` | Minify JS for this build
`--minifycss` | Minify CSS for this build
`--optimizejs` | Perform JS optimizations for this build
`--debug` | Mark as a debug build
`--release` | Mark as a release build
`--device` | Deploy Cordova build to a device
`--emulator` | Deploy Cordova build to an emulator
`--target` | Deploy Cordova build to a device (use `--list` to see all)
`--buildConfig` | Use the specified Cordova build configuration

## Examples

```bash
$ ionic cordova run 
$ ionic cordova run ios
$ ionic cordova run ios -lcs
$ ionic cordova run android -lcs --address localhost
$ ionic cordova run android -lcs -- -d
```
