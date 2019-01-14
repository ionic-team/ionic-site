---
layout: fluid/cli_docs_base
category: cli
id: cli-package-build
page_name: ionic package build
command_name: ionic package build
title: ionic package build - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic package build`

Start a package build
## Synopsis

```bash
$ ionic package build [<platform>]
```
  
## Details

**WARNING**: Ionic Cloud is deprecated and will reach end-of-life on January 31st, 2018. These commands will not be supported afterwards. Ionic Pro takes a different approach to the Ionic Package service. See the Package documentation for details: **[https://ionicframework.com/docs/pro/package/](https://ionicframework.com/docs/pro/package/)**

Ionic Package makes it easy to build a native binary of your app in the cloud.

Full documentation can be found here: **[https://docs.ionic.io/services/package/](https://docs.ionic.io/services/package/)**


Input | Description
----- | ----------
`platform` | The platform to target: `ios`, `android`


Option | Description
------ | ----------
`--prod` | Build the application for production
`--aot` | Perform ahead-of-time compilation for this build
`--minifyjs` | Minify JS for this build
`--minifycss` | Minify CSS for this build
`--optimizejs` | Perform JS optimizations for this build
`--release` | Mark as a release build
`--profile`, `-p` | The security profile to use with this build
`--note` | Give the package snapshot a note

## Examples

```bash
$ ionic package build android
$ ionic package build ios --profile=dev
$ ionic package build android --profile=prod --release --prod
```
