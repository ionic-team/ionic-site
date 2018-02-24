---
layout: fluid/cli_docs_base
category: cli
id: cli-login
page_name: ionic login
command_name: ionic login
title: ionic login - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic login`

Login with your Ionic ID
## Synopsis

```bash
$ ionic login [<email>] [<password>]
```
  
## Details

Authenticate with Ionic servers and retrieve a user token, which is stored in the CLI config.

Alternatively, set the `IONIC_EMAIL` and `IONIC_PASSWORD` environment variables, and the CLI will automatically authenticate you.

If you need to create an Ionic account, use `ionic signup`.


Input | Description
----- | ----------
`email` | Your email address
`password` | Your password




## Examples

```bash
$ ionic login 
$ ionic login john@example.com
$ ionic login hello@example.com secret
```
