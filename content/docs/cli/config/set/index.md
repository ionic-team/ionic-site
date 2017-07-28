---
layout: fluid/docs_base
category: cli
id: cli-config-set
command_name: config set
title: Ionic CLI Documentation - config set
header_sub_title: Ionic CLI
---

# `$ ionic config set`

Set config values
## Synopsis

```bash
$ ionic config set [<property>] [<value>]
```
  
## Details

By default, this command sets properties in your project's **ionic.config.json** file.

For `--global` config, the CLI sets properties in the global CLI config file (**~/.ionic/config.json**).

For nested properties, separate nest levels with dots. For example, the property name `user.email` will look in the **user** object (a root-level field in the global CLI config file) for the **email** field.


Input | Description
----- | ----------
`property` | The property name you wish to set
`value` | The new value of the given property, interpreted as a string unless "true" or "false"


Option | Description
------ | ----------
`--global`, `-g` | Use global CLI config

## Examples

```bash
$ ionic config set name newAppName
$ ionic config set -g yarn true
```
