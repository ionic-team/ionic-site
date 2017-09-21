---
layout: fluid/cli_docs_base
category: cli
id: cli-package-download
page_name: ionic package download
command_name: ionic package download
title: Ionic CLI Documentation - ionic package download
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic package download`

Download your packaged app
## Synopsis

```bash
$ ionic package download [<id>]
```
  
## Details

Ionic Package makes it easy to build a native binary of your app in the cloud.

Full documentation can be found here: **[https://docs.ionic.io/services/package/](https://docs.ionic.io/services/package/)**


Input | Description
----- | ----------
`id` | The build ID to download. Defaults to the latest build


Option | Description
------ | ----------
`--destination`, `-d` | The download destination directory

## Examples

```bash
$ ionic package download 
$ ionic package download 15
$ ionic package download --destination=my-builds
```
