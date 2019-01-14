---
layout: fluid/cli_docs_base
category: cli
id: cli-build
page_name: ionic build
command_name: ionic build
title: ionic build - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic build`

Build web assets and prepare your app for any platform targets
## Synopsis

```bash
$ ionic build 
```
  
## Details

`ionic build` will perform an Ionic build, which compiles web assets and prepares them for deployment. For Ionic/Cordova apps, the CLI will run `cordova prepare`, which copies the built web assets into the Cordova platforms that you've installed. For full details, see `ionic cordova prepare --help`.





Option | Description
------ | ----------
`--prod` | Build the application for production
`--aot` | Perform ahead-of-time compilation for this build
`--minifyjs` | Minify JS for this build
`--minifycss` | Minify CSS for this build
`--optimizejs` | Perform JS optimizations for this build

## Examples

```bash
$ ionic build 
$ ionic build --prod
```
