---
layout: fluid/cli_docs_base
category: cli
id: cli-config-set
page_name: ionic config set
command_name: ionic config set
title: ionic config set - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic config set`

Set config values
## Synopsis

```bash
$ ionic config set [<property>] [<value>]
```
  
## Details

By default, this command sets JSON properties in your project's **ionic.config.json** file.

For `--global` config, the CLI sets properties in the global CLI config file (**~/.ionic/config.json**).

For nested properties, separate nest levels with dots. For example, the property name `user.email` will look in the **user** object (a root-level field in the global CLI config file) for the **email** field.

`ionic config set` will attempt to coerce `value` into a suitable JSON type. If it is JSON-parsable, such as `true` or `[]`, it takes the parsed result. Otherwise, the value is interpreted as a string. For stricter input, use `--json`, which will error with non-JSON values.

By default, if `property` exists and is an object or an array, the value is not overwritten. To disable this check and always overwrite the property, use `--force`.


Input | Description
----- | ----------
`property` | The property name you wish to set
`value` | The new value of the given property


Option | Description
------ | ----------
`--global`, `-g` | Use global CLI config
`--json` | Always interpret `value` as JSON
`--force` | Always overwrite existing values

## Examples

```bash
$ ionic config set name newAppName
$ ionic config set name "\"newAppName\"" --json
$ ionic config set watchPatterns "[]" --force
$ ionic config set -g yarn true
```
