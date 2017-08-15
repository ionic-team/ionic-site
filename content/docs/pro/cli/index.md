---
layout: fluid/pro_docs_base
category: pro
id: cli-intro
title: Ionic CLI Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# ionic


The Ionic CLI is your go-to tool for developing Ionic apps. You can follow CLI
development on [Github](https://github.com/ionic-team/ionic-cli).

## Installation

Please make sure latest
[Node](https://ionicframework.com/docs/resources/what-is/#node) 6 LTS and
[NPM](https://ionicframework.com/docs/resources/what-is/#npm) 3+ are installed.

Then, install the CLI globally (you may need sudo):

```bash
$ npm install -g ionic@latest
```

## Getting Started

Start a new Ionic project using `ionic start`:

```bash
ionic start myNewProject tabs
cd ./myNewProject
```

This will create a new app named `myNewProject`. Once you `cd` into your
project's directory, a few new commands become available to you, such as
`serve`:

```bash
ionic serve
```

## Commands

Here is a full list of Ionic commands. You can also see the list on the command
line with `ionic --help`.

Command | Description
------- | -----------
[build](build/) | Build web assets and prepare your app for any platform targets
[docs](docs/) | Open the Ionic documentation website
[generate](generate/) | Generate pipes, components, pages, directives, providers, and tabs (ionic-angular >= 3.0.0)
[info](info/) | Print system/environment info
[link](link/) | Connect your local app to Ionic
[login](login/) | Login with your Ionic ID
[serve](serve/) | Start a local dev server for app dev/testing
[start](start/) | Create a new project
[telemetry](telemetry/) | Opt in and out of telemetry
[config get](config/get/) | Print config values
[config set](config/set/) | Set config values
[cordova build](cordova/build/) | Build (prepare + compile) an Ionic project for a given platform
[cordova compile](cordova/compile/) | Compile native platform code
[cordova emulate](cordova/emulate/) | Emulate an Ionic project on a simulator or emulator
[cordova platform](cordova/platform/) | Manage Cordova platform targets
[cordova plugin](cordova/plugin/) | Manage Cordova plugins
[cordova prepare](cordova/prepare/) | Copies assets to Cordova platforms, preparing them for native builds
[cordova resources](cordova/resources/) | Automatically create icon and splash screen resources
[cordova run](cordova/run/) | Run an Ionic project on a connected device
[git remote](git/remote/) | Adds/updates the Ionic git remote to your local Ionic app repository
[ssh add](ssh/add/) | Add an SSH public key to Ionic
[ssh delete](ssh/delete/) | Delete an SSH public key from Ionic
[ssh generate](ssh/generate/) | Generates a private and public SSH key pair
[ssh list](ssh/list/) | List your SSH public keys on Ionic
[ssh setup](ssh/setup/) | Setup your Ionic SSH keys automatically
[ssh use](ssh/use/) | Set your active Ionic SSH key
