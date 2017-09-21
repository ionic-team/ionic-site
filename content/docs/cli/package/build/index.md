---
layout: fluid/cli_docs_base
category: cli
id: cli-package-build
command_name: package build
title: Ionic CLI Documentation - package build
header_sub_title: Ionic CLI
---

# `$ ionic package build`

{% include fluid/toc.html %}

Start a package build
## Synopsis

```bash
$ ionic package build [<platform>]
```
  
## Details

Ionic Package makes it easy to build a native binary of your app in the cloud.

Full documentation can be found here: **[https://docs.ionic.io/services/package/](https://docs.ionic.io/services/package/)**


Input | Description
----- | ----------
`platform` | The platform to target: `ios`, `android`


Option | Description
------ | ----------
`--prod` | Mark as a production build
`--release` | Mark as a release build
`--profile`, `-p` | The security profile to use with this build
`--note` | Give the package snapshot a note

## Examples

```bash
$ ionic package build android
$ ionic package build ios --profile=dev
$ ionic package build android --profile=prod --release --prod
```
