---
layout: fluid/cli_docs_base
category: cli
id: cli-config-get
page_name: ionic config get
command_name: ionic config get
title: ionic config get - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


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

If you are using this command programmatically, you can use the `--json` option.

This command attempts to sanitize config output for known sensitive fields, such as fields within the **tokens** object in the global CLI config file. This functionality is disabled when using `--json`.


Input | Description
----- | ----------
`property` | The property name you wish to get


Option | Description
------ | ----------
`--global`, `-g` | Use global CLI config
`--json` | Output config values in JSON

## Examples

```bash
$ ionic config get 
$ ionic config get app_id
$ ionic config get --global user.email
$ ionic config get -g yarn
```
