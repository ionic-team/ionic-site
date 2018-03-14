---
layout: fluid/cli_docs_base
category: cli
id: cli-serve
page_name: ionic serve
command_name: ionic serve
title: ionic serve - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic serve`

Start a local dev server for app dev/testing
## Synopsis

```bash
$ ionic serve 
```
  
## Details

Easily spin up a development server which launches in your browser. It watches for changes in your source files and automatically reloads with the updated build.

By default, `ionic serve` boots up a development server on all network interfaces and prints the external address(es) on which your app is being served. It also broadcasts your app to the Ionic DevApp on your network. To disable the DevApp and bind to `localhost`, use `--local`.

Try the `--lab` option to see multiple platforms at once.





Option | Description
------ | ----------
`--consolelogs`, `-c` | Print app console logs to Ionic CLI
`--address` | Use specific address for the dev server
`--port`, `-p` | Use specific port for HTTP
`--livereload-port`, `-r` | Use specific port for live-reload
`--dev-logger-port` | Use specific port for dev server communication
`--no-devapp` | Do not publish DevApp service
`--no-open` | Do not open a browser window
`--local` | Disable external network usage
`--no-proxy` | Do not add proxies
`--browser`, `-w` | Specifies the browser to use (`safari`, `firefox`, `google chrome`)
`--browseroption`, `-o` | Specifies a path to open to (`/#/tab/dash`)
`--lab`, `-l` | Test your apps on multiple platform types in the browser
`--platform`, `-t` | Start serve with a specific platform (`android`, `ios`)

## Examples

```bash
$ ionic serve -c
$ ionic serve --lab -c
```
