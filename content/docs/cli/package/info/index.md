---
layout: fluid/cli_docs_base
category: cli
id: cli-package-info
page_name: ionic package info
command_name: ionic package info
title: ionic package info - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic package info`

Get info about a build
## Synopsis

```bash
$ ionic package info [<id>]
```
  
## Details

**WARNING**: Ionic Cloud is deprecated and will reach end-of-life on January 31st, 2018. These commands will not be supported afterwards. Ionic Pro takes a different approach to the Ionic Package service. See the Package documentation for details: **[https://ionicframework.com/docs/pro/package/](https://ionicframework.com/docs/pro/package/)**

Ionic Package makes it easy to build a native binary of your app in the cloud.

Full documentation can be found here: **[https://docs.ionic.io/services/package/](https://docs.ionic.io/services/package/)**


Input | Description
----- | ----------
`id` | The build ID. Defaults to the latest build


Option | Description
------ | ----------
`--json` | Output build info in JSON

## Examples

```bash
$ ionic package info 
$ ionic package info 15
```
