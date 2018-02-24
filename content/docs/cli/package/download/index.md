---
layout: fluid/cli_docs_base
category: cli
id: cli-package-download
page_name: ionic package download
command_name: ionic package download
title: ionic package download - Ionic CLI Documentation
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

**WARNING**: Ionic Cloud is deprecated and will reach end-of-life on January 31st, 2018. These commands will not be supported afterwards. Ionic Pro takes a different approach to the Ionic Package service. See the Package documentation for details: **[https://ionicframework.com/docs/pro/package/](https://ionicframework.com/docs/pro/package/)**

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
