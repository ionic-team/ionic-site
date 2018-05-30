---
layout: fluid/cli_docs_base
category: cli
id: cli-upload
page_name: ionic upload
command_name: ionic upload
title: ionic upload - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic upload`

Upload a new snapshot of your app
## Synopsis

```bash
$ ionic upload
```

## Details

**WARNING**: Ionic Cloud is deprecated and will reach end-of-life on January 31st, 2018. This command will not be supported afterwards. Ionic Pro takes a different approach to uploading. See the Getting Started documentation for details: **[https://ionicframework.com/docs/pro/basics/getting-started/](https://ionicframework.com/docs/pro/basics/getting-started/)**

Zips up your local app files and uploads a snapshot to Ionic.

From there, you can use Ionic View (**[https://ionicframework.com/pro/view](https://ionicframework.com/pro/view)**) to easily share your app with your organization and testers around the world.





Option | Description
------ | ----------
`--note` | Give this snapshot a nice description
`--deploy` | Deploys this snapshot to the given channel
`--metadata` | Set custom metadata JSON for the deploy
`--no-build` | Do not invoke an Ionic build
`--prod` | Build the application for production
`--aot` | Perform ahead-of-time compilation for this build
`--minifyjs` | Minify JS for this build
`--minifycss` | Minify CSS for this build
`--optimizejs` | Perform JS optimizations for this build

## Examples

```bash
$ ionic upload
$ ionic upload --deploy=dev
$ ionic upload --deploy=production --note="add menu entry" --metadata="{\"custom_data\":true}"
```
