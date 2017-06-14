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

Zips up your local app files and uploads a snapshot to **[https://apps.ionic.io](https://apps.ionic.io)**.

From there, you can use Ionic View (**https://view.ionic.io**) to easily share your app with your organization and testers around the world.





Option | Description
------ | ----------
`--note` | Give this snapshot a nice description
`--deploy` | Deploys this snapshot to the given channel
`--metadata` | Set metadata properties for the deploy
`--nobuild` | Do not invoke a build for this snapshot

## Examples

```bash
$ ionic upload 
```
