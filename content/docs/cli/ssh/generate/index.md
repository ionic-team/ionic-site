---
layout: fluid/cli_docs_base
category: cli
id: cli-ssh-generate
page_name: ionic ssh generate
command_name: ionic ssh generate
title: ionic ssh generate - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic ssh generate`

Generates a private and public SSH key pair
## Synopsis

```bash
$ ionic ssh generate [<key-path>]
```
  
## Details


Input | Description
----- | ----------
`key-path` | Destination of private key file


Option | Description
------ | ----------
`--type`, `-t` | The type of key to generate: `ecdsa`, `ed25519`, `rsa`
`--bits`, `-b` | Number of bits in the key
`--annotation`, `-C` | Annotation (comment) in public key. Your Ionic email address will be used
