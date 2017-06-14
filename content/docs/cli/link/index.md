---
layout: fluid/docs_base
category: cli
id: cli-link
command_name: link
title: link
header_sub_title: Ionic CLI
---

# `$ ionic link`

Connect your local app to Ionic
## Synopsis

```bash
$ ionic link [app_id]
```
  
## Details

If you have an app on **https://apps.ionic.io**, you can link it to your local Ionic project with this command.

Excluding the `app_id` argument looks up your apps on **https://apps.ionic.io** and prompts you to select one.

This command simply sets the **app_id** property in **ionic.config.json** for other commands to read.


Input | Description
----- | ----------
`app_id` | The ID of the app to link (e.g. a1b2c3d4)




## Examples

```bash
$ ionic link 
$ ionic link a1b2c3d4
```
