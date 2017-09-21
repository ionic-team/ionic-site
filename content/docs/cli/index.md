---
layout: fluid/cli_docs_base
category: cli
id: cli-intro
title: Ionic CLI Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Ionic CLI

The Ionic Command Line Interface (CLI) is your go-to tool for developing Ionic apps. You can follow CLI development on [Github](https://github.com/ionic-team/ionic-cli).

{% include fluid/toc.html %}

## Installation

Please make sure latest [Node](/docs/resources/what-is/#node) 6 LTS and [NPM](/docs/resources/what-is/#npm) 3+ are installed.

Then, install the CLI globally (you may need sudo):

```bash
$ npm install -g ionic@latest
```

You can verify your installation with the `ionic --version` command.

## Getting started

Start a new Ionic project using `ionic start`:

```bash
$ ionic start myNewProject
```

`ionic start` will prompt you to select a "starter". We recommend using the `tutorial` starter for your first app.

After selecting a starter, the CLI will create a new app named `myNewProject`. Once you `cd` into your project's directory, a few new commands become available to you, such as `ionic serve`:

```bash
$ cd ./myNewProject
$ ionic serve
```

While running `ionic serve`, changes you make to your app code will automatically refresh the browser. If you want to see your app on a device or emulator, you can [use Cordova](#using-cordova).

You can list available commands with the `ionic --help` command.

## Using Cordova

Integrate Ionic with [Cordova](https://cordova.apache.org/) to bring native capabilities to your app.

```bash
$ npm install -g cordova
$ ionic cordova --help
$ ionic cordova run ios
```

The `ionic cordova` commands (aside from `ionic cordova resources`) wrap the Cordova CLI. You can read about the differences in each command's `--help` page. To learn more about the commands, see the [Cordova CLI Reference](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/) documentation.

* For iOS development, see the [iOS Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html).
* For Android development, see the [Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html).

## Ionic Pro

[Ionic Pro](/products/) is a powerful suite of tools and services designed for the entire app lifecycle, all in one integrated experience. Ionic Pro is fully supported in the Ionic CLI. See the [Pro Docs](/docs/pro/basics/getting-started/) to get started.

Ionic Cloud (legacy) will be supported until its end-of-life on January 31st, 2018. Until then, you can switch between Ionic Cloud and Ionic Pro with `ionic config set -g backend legacy` and `ionic config set -g backend pro`. Unfortunately, you'll need to re-authenticate with `ionic login` each time the backend mode is switched.

## Integrations

Integrations such as Cordova are automatically activated when detected, but can be easily disabled.

Integrations hook into CLI events. For example, when the Cordova integration is enabled, `ionic cordova prepare` will run after `ionic build` runs. See [CLI Hooks](#cli-hooks).

| integration | enabled when...                                             | disabled with...                                         |
| ------------|-------------------------------------------------------------|----------------------------------------------------------|
| Cordova     | `ionic cordova` commands are run                          | `ionic config set integrations.cordova.enabled false`  |
| Gulp        | `gulp` exists in `devDependencies` of your `package.json` | `ionic config set integrations.gulp.enabled false` |

## Environment Variables

The CLI will look for the following environment variables:

* `IONIC_CONFIG_DIRECTORY`: Where the CLI config files live. Defaults to `~/.ionic`.
* `IONIC_HTTP_PROXY`: Set a URL for proxying all CLI requests through. See [Using a Proxy](#using-a-proxy). The CLI will also look for `HTTP_PROXY` and `HTTPS_PROXY`, both of which npm use.
* `IONIC_EMAIL` / `IONIC_PASSWORD`: For automatic login via environment variables.

## Flags

CLI flags are global options that alter the behavior of a CLI command.

* `--help`: Instead of running the command, view its help page.
* `--verbose`: Show all log messages for debugging purposes.
* `--quiet`: Only show `WARN` and `ERROR` log messages.
* `--no-interactive`: Turn off interactive prompts and fancy outputs. If a CI server is detected (we use [ci-info](https://www.npmjs.com/package/ci-info)), the CLI is automatically non-interactive.
* `--confirm`: Turn on auto-confirmation of confirmation prompts. *Careful*: the CLI prompts before doing something potentially harmful. Auto-confirming may have unintended results.

## Configuration

The CLI provides commands for setting and printing config values from project config files and the global CLI config file. See `ionic config set --help` and `ionic config get --help` for usage.

## Hooks

CLI hooks are how you can run scripts during CLI events, such as "watch" and "build". To hook into the CLI, use the following [npm scripts](https://docs.npmjs.com/misc/scripts) in your `package.json` file:

| npm script             | description                                                       | commands                                                                                                                              |
|------------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `ionic:watch:before` | Runs **before** the file watcher activates during a "watch" event | `ionic serve`, `ionic cordova run -l`, `ionic cordova emulate -l`                                                               |
| `ionic:build:before` | Runs **before** the Ionic "build" event starts.                   | `ionic build`, `ionic upload`, `ionic package build`, `ionic cordova build`, `ionic cordova run`, `ionic cordova emulate` |
| `ionic:build:after`  | Runs **after** the Ionic "build" event finishes.                  | `ionic build`, `ionic upload`, `ionic package build`, `ionic cordova build`, `ionic cordova run`, `ionic cordova emulate` |

### Example

```json
  "scripts": {
    "ionic:build:before": "cp somefile www/somefile",
  }
```

*Note: If you use [gulp](https://gulpjs.com/), the CLI will run gulp tasks by the same name as the npm scripts above.*

## Service Proxies

The CLI can add proxies to the HTTP server for "livereload" commands like `ionic serve` and `ionic cordova run android -lc`. These proxies are useful if you are developing in the browser and you need to make calls to an external API. With this feature you can proxy requests to the external API through the Ionic CLI, which prevents the `No 'Access-Control-Allow-Origin' header is present on the requested resource` error.

In the `ionic.config.json` file you can add a property with an array of proxies you want to add. The proxies are an object with the following properties:

* `path`: string that will be matched against the beginning of the incoming request URL.
* `proxyUrl`: a string with the url of where the proxied request should go.
* `proxyNoAgent`: (optional) true/false, if true opts out of connection pooling, see [HttpAgent](https://nodejs.org/api/http.html#http_class_http_agent)

```json
{
  "name": "appname",
  "app_id": "",
  "type": "ionic-angular",
  "proxies": [
    {
      "path": "/v1",
      "proxyUrl": "https://api.instagram.com/v1"
    }
  ]
}
```

Using the above configuration, you can now make requests to your local server at `http://localhost:8100/v1` to have it proxy out requests to `https://api.instagram.com/v1`.

*Note: Don't forget to change the URLs being requested in your app to the local URL. Also, the "livereload" command must be restarted for the proxy configuration to take effect.*

## Using a Proxy

To proxy HTTP requests performed by the CLI, you will need to install the CLI proxy plugin in the same `node_modules` context as the Ionic CLI:

For CLI installed globally:

```bash
$ npm install -g @ionic/cli-plugin-proxy
```

For CLI installed locally:

```bash
$ cd myProject # cd into your project
$ npm install --save-exact --save-dev @ionic/cli-plugin-proxy
```

Then, use one of the following environment variables:

```bash
$ export HTTP_PROXY="http://proxy.example.org:8888" # used by npm
$ export HTTPS_PROXY="https://proxy.example.org:8888" # used by npm
$ export IONIC_HTTP_PROXY="http://proxy.example.org:8888"
```

### SSL Configuration

You can configure the Ionic CLI's SSL (similar to configuring npm CLI):

```bash
$ ionic config set -g ssl.cafile /path/to/cafile # file path to your CA root certificate
$ ionic config set -g ssl.certfile /path/to/certfile # file path to a client certificate
$ ionic config set -g ssl.keyfile /path/to/keyfile # file path to a client key file
```

The `cafile`, `certfile`, and `keyfile` entries can be manually edited as arrays of strings in `~/.ionic/config.json` to include multiple files.

## Command List

Here is a full list of Ionic commands. You can also see the list on the command line with `ionic --help`.

Command | Description
------- | -----------
[build](build/) | Build web assets and prepare your app for any platform targets
[docs](docs/) | Open the Ionic documentation website
[generate](generate/) | Generate pipes, components, pages, directives, providers, and tabs (ionic-angular >= 3.0.0)
[info](info/) | Print system/environment info
[link](link/) | Connect your local app to Ionic
[login](login/) | Login with your Ionic ID
[serve](serve/) | Start a local dev server for app dev/testing
[signup](signup/) | Create an Ionic account
[start](start/) | Create a new project
[telemetry](telemetry/) | Opt in and out of telemetry
[upload](upload/) | (deprecated) Upload a new snapshot of your app
[config get](config/get/) | Print config values
[config set](config/set/) | Set config values
[cordova build](cordova/build/) | Build (prepare + compile) an Ionic project for a given platform
[cordova compile](cordova/compile/) | Compile native platform code
[cordova emulate](cordova/emulate/) | Emulate an Ionic project on a simulator or emulator
[cordova platform](cordova/platform/) | Manage Cordova platform targets
[cordova plugin](cordova/plugin/) | Manage Cordova plugins
[cordova prepare](cordova/prepare/) | Copies assets to Cordova platforms, preparing them for native builds
[cordova requirements](cordova/requirements/) | Checks and print out all the requirements for platforms
[cordova resources](cordova/resources/) | Automatically create icon and splash screen resources
[cordova run](cordova/run/) | Run an Ionic project on a connected device
[git remote](git/remote/) | Adds/updates the Ionic git remote to your local Ionic app repository
[monitoring syncmaps](monitoring/syncmaps/) | Sync Source Maps to Ionic Pro Error Monitoring service
[package build](package/build/) | (deprecated) Start a package build
[package download](package/download/) | (deprecated) Download your packaged app
[package info](package/info/) | (deprecated) Get info about a build
[package list](package/list/) | (deprecated) List your cloud builds
[ssh add](ssh/add/) | Add an SSH public key to Ionic
[ssh delete](ssh/delete/) | Delete an SSH public key from Ionic
[ssh generate](ssh/generate/) | Generates a private and public SSH key pair
[ssh list](ssh/list/) | List your SSH public keys on Ionic
[ssh setup](ssh/setup/) | Setup your Ionic SSH keys automatically
[ssh use](ssh/use/) | Set your active Ionic SSH key

## Troubleshooting

If you're having trouble with the CLI, you can try the following:

* Make sure you're on the latest version of the CLI. Update with `npm update -g ionic`.
* Try running commands with the `--verbose` flag, which will print `DEBUG` messages.
