---
layout: fluid/cli_docs_base
category: cli
id: cli-start
page_name: ionic start
command_name: ionic start
title: ionic start - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic start`

Create a new project
## Synopsis

```bash
$ ionic start [<name>] [<template>]
```
  
## Details

This command creates a working Ionic app. It installs dependencies for you and sets up your project.

`ionic start` will create an app from a template. You can list all templates with the `--list` option.

See the CLI documentation on starters: **[https://ionicframework.com/docs/cli/starters.html](https://ionicframework.com/docs/cli/starters.html)**


Input | Description
----- | ----------
`name` | The name of your project directory
`template` | The starter template to use (e.g. `blank`, `tabs`; use `--list` to see all)


Option | Description
------ | ----------
`--list`, `-l` | List starter templates available
`--type` | Type of project to start (e.g. `ionic-angular`, `ionic1`)
`--app-name`, `-n` | Human-readable name (use quotes around the name)
`--no-deps` | Do not install npm/yarn dependencies
`--no-git` | Do not initialize a git repo
`--no-link` | Do not ask to connect the app with the Ionic Dashboard
`--pro-id` | Specify an app ID from the Ionic Dashboard to link

## Examples

```bash
$ ionic start 
$ ionic start --list
$ ionic start myApp blank
$ ionic start myApp blank --type=ionic1
```
