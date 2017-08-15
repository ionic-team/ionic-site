---
layout: fluid/pro_docs_base
category: pro
id: cli-login
command_name: login
title: Ionic CLI Documentation - login
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

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
