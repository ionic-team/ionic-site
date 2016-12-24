---
layout: docs_cli
title: "Ionic CLI"
header_title:  Run & Emulate on your Phone
header_sub_title: The powerful command line utility
---

## Adding a platform target

```bash
$ ionic platform ios android
```

## Building your app

```bash
$ ionic build ios
```

## Live Reload App During Development (beta)

The `run` or `emulate` command will deploy the app to the specified platform devices/emulators. You can also run __live reload__ on the specified platform device by adding the `--livereload` option. The live reload functionality is similar to `ionic serve`, but instead of developing and debugging an app using a standard browser, the compiled hybrid app itself is watching for any changes to its files and reloading the app when needed. This reduces the requirement to constantly rebuild the app for small changes. However, any changes to plugins will still require a full rebuild. For live reload to work, the dev machine and device must be on the same local network, and the device must support [web sockets](http://caniuse.com/websockets).

With live reload enabled, an app's console logs can also be printed to the terminal/command prompt by including the `--consolelogs` or `-c` option. Additionally, the development server's request logs can be printed out using `--serverlogs` or `-s` options.

### Command-line flags/options for `run` and `emulate`

```
[--livereload|-l] .......  Live Reload app dev files from the device (beta)
[--consolelogs|-c] ......  Print app console logs to Ionic CLI (live reload req.)
[--serverlogs|-s] .......  Print dev server logs to Ionic CLI (live reload req.)
[--port|-p] .............  Dev server HTTP port (8100 default, live reload req.)
[--livereload-port|-i] ..  Live Reload port (35729 default, live reload req.)
[--debug|--release]
```

While the server is running for live reload, you can use the following commands within the CLI:

```
restart or r to restart the client app from the root
goto or g and a url to have the app navigate to the given url
consolelogs or c to enable/disable console log output
serverlogs or s to enable/disable server log output
quit or q to shutdown the server and exit
```

## Emulating your app

Deploys the Ionic app on specified platform emulator. This is simply an alias for `run --emulator`.

```bash
$ ionic emulate ios [options]
```


## Running your app

Deploys the Ionic app on specified platform devices. If a device is not found it'll then deploy to an emulator/simulator.

```bash
$ ionic run ios [options]
```