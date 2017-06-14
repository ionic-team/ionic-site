---
layout: fluid/docs_base
category: cli
id: cli-start
command_name: start
title: start
header_sub_title: Ionic CLI
---

# `$ ionic start`

Create a new project
## Synopsis

```bash
$ ionic start [name] [template]
```
  
## Details

This command creates a working Ionic app. It installs dependencies for you and sets up your project.

`ionic start` will create an app from a template. You can list all templates with the `--list` option.

If you want to create an Ionic/Cordova app, use the `--cordova` option.


Input | Description
----- | ----------
`name` | The name of your project directory
`template` | The starter template to use (e.g. blank, tabs; use --list to see all)


Option | Description
------ | ----------
`--type` | Type of project to start (e.g. ionic-angular, ionic1)
`--app-name`, `-n` | Human-readable name (use quotes around the name)
`--list`, `-l` | List starter templates available
`--skip-deps` | Skip npm/yarn package installation of dependencies
`--cordova` | Include Cordova integration
`--git` | Do not initialize a git repo
`--skip-link` | Do not link app to an Ionic Account

## Examples

```bash
$ ionic start 
$ ionic start --list
$ ionic start myApp blank
$ ionic start myApp tabs --cordova
$ ionic start myApp blank --type=ionic1
```
