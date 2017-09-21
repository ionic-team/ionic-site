---
layout: fluid/cli_docs_base
category: cli
id: cli-upload
page_name: ionic upload
command_name: ionic upload
title: Ionic CLI Documentation - ionic upload
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

Zips up your local app files and uploads a snapshot to Ionic.

From there, you can use Ionic View (**[https://view.ionic.io](https://view.ionic.io)**) to easily share your app with your organization and testers around the world.





Option | Description
------ | ----------
`--note` | Give this snapshot a nice description
`--deploy` | Deploys this snapshot to the given channel
`--metadata` | Set custom metadata JSON for the deploy
`--prod` | Build the application for production
`--aot` | Perform ahead-of-time compilation for the upload's build
`--minifyjs` | Minify JS for the upload's build
`--minifycss` | Minify CSS for the upload's build
`--optimizejs` | Perform JS optimizations for the upload's build
`--no-build` | Do not invoke an Ionic build

## Examples

```bash
$ ionic upload 
$ ionic upload --deploy=dev
$ ionic upload --deploy=production --note="add menu entry" --metadata="{\"custom_data\":true}"
```
