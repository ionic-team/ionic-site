---
layout: fluid/docs_base
category: cli
id: cli-config-get
command_name: config get
title: Ionic CLI Documentation - config get
header_sub_title: Ionic CLI
---

# `$ ionic config get`

Print config values
## Synopsis

```bash
$ ionic config get [<property>]
```
  
## Details

By default, this command prints properties in your project's **ionic.config.json** file.

For `--global` config, the CLI prints properties in the global CLI config file (**~/.ionic/config.json**).

For nested properties, separate nest levels with dots. For example, the property name `user.email` will look in the **user** object (a root-level field in the global CLI config file) for the **email** field.

Without a `property` argument, this command prints out the entire file contents.


Input | Description
----- | ----------
`property` | The property name you wish to get


Option | Description
------ | ----------
`--global`, `-g` | Use global CLI config

## Examples

```bash
$ ionic config get 
$ ionic config get app_id
$ ionic config get --global user.email
$ ionic config get -g yarn
```
