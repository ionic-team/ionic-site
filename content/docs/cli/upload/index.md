---
layout: fluid/docs_base
category: cli
id: cli-upload
command_name: upload
title: Ionic CLI Documentation - upload
header_sub_title: Ionic CLI
---

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
`--nobuild` | Do not invoke a build for this snapshot

## Examples

```bash
$ ionic upload 
$ ionic upload --deploy=dev
$ ionic upload --deploy=production --note="add menu entry" --metadata="{"custom_data":true}"
```
