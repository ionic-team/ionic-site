---
layout: fluid/docs_base
category: cli
id: cli-start
command_name: start
title: Ionic CLI Documentation - start
header_sub_title: Ionic CLI
---

# `$ ionic start`

Create a new project
## Synopsis

```bash
$ ionic start [<name>] [<template>]
```
  
## Details

This command creates a working Ionic app. It installs dependencies for you and sets up your project.

`ionic start` will create an app from a template. You can list all templates with the `--list` option.


Input | Description
----- | ----------
`name` | The name of your project directory
`template` | The starter template to use (e.g. `blank`, `tabs`; use `--list` to see all)


Option | Description
------ | ----------
`--type` | Type of project to start (e.g. `ionic-angular`, `ionic1`)
`--app-name`, `-n` | Human-readable name (use quotes around the name)
`--list`, `-l` | List starter templates available
`--no-deps` | Do not install npm/yarn dependencies
`--no-git` | Do not initialize a git repo
`--no-link` | Do not ask to connect the app with the Ionic Dashboard

## Examples

```bash
$ ionic start 
$ ionic start --list
$ ionic start myApp blank
$ ionic start myApp blank --type=ionic1
```
