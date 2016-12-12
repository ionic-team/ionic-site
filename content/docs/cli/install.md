---
layout: docs_cli
title: "Ionic CLI"
header_title: Installing the CLI globally
header_sub_title: The powerful command line utility
---

# Install the Ionic CLI

The easiest way to get the Ionic CLI is through [npm](https://www.npmjs.com/).

```bash
$ npm install -g ionic
```

*Note: For a global install of -g ionic, OSX/Linux users may need to prefix the command with sudo.*


## Update Ionic lib

Update Ionic library files, which are found in the `www/lib/ionic` directory. If bower is being used
by the project, this command will automatically run `bower update ionic`, otherwise this command updates
the local static files from Ionic's CDN.

```bash
$ ionic lib update
```

*Note: Using bower? This command does not update Ionic's dependencies. Run `bower update` to update Ionic and all of it's dependencies defined in `bower.json`.*
