---
layout: fluid/cli_docs_base
category: cli
id: cli-configuration
page_name: Configuring
title: Configuring - Ionic CLI Documentation
hide_header_search: true
dark_header: true
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# Configuring


{% include fluid/toc.html %}

## Config Files

Configuration values are stored in JSON files.

* Global config file (`~/.ionic/config.json`): for global CLI config and auth
* Project config files (`ionic.config.json`): for Ionic project config

The CLI provides commands for setting and printing config values from project config files and the global CLI config file. See `ionic config set --help` and `ionic config get --help` for usage.

## Integrations

Integrations such as Cordova are automatically activated when detected, but can be easily disabled.

Integrations hook into CLI events. For example, when the Cordova integration is enabled, `ionic cordova prepare` will run after `ionic build` runs. See [Hooks](#hooks).

| integration | enabled when...                                             | disabled with...                                         |
| ------------|-------------------------------------------------------------|----------------------------------------------------------|
| Cordova     | `ionic cordova` commands are run                          | `ionic config set integrations.cordova.enabled false`  |
| Gulp        | `gulp` exists in `devDependencies` of your `package.json` | `ionic config set integrations.gulp.enabled false` |

## Environment Variables

The CLI will look for the following environment variables:

* `IONIC_CONFIG_DIRECTORY`: The directory of the global CLI config. Defaults to `~/.ionic`.
* `IONIC_HTTP_PROXY`: Set a URL for proxying all CLI requests through. See [Using a Proxy](#using-a-proxy). The CLI will also look for `HTTP_PROXY` and `HTTPS_PROXY`, both of which npm use.
* `IONIC_EMAIL` / `IONIC_PASSWORD`: For automatic login via environment variables.

## Flags

CLI flags are global options that alter the behavior of a CLI command.

* `--help`: Instead of running the command, view its help page.
* `--verbose`: Show all log messages for debugging purposes.
* `--quiet`: Only show `WARN` and `ERROR` log messages.
* `--no-interactive`: Turn off interactive prompts and fancy outputs. If a CI server is detected (we use [ci-info](https://www.npmjs.com/package/ci-info)), the CLI is automatically non-interactive.
* `--confirm`: Turn on auto-confirmation of confirmation prompts. *Careful*: the CLI prompts before doing something potentially harmful. Auto-confirming may have unintended results.

## Hooks

CLI hooks are how you can run scripts during CLI events, such as "watch" and "build". To hook into the CLI, use the following [npm scripts](https://docs.npmjs.com/misc/scripts) in your `package.json` file:

| npm script             | commands                                                                                                                              |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `ionic:watch:before` | `ionic serve`, `ionic cordova run -l`, `ionic cordova emulate -l`                                                               |
| `ionic:build:before` | `ionic build`, `ionic upload`, `ionic package build`, `ionic cordova build`, `ionic cordova run`, `ionic cordova emulate` |
| `ionic:build:after`  | `ionic build`, `ionic upload`, `ionic package build`, `ionic cordova build`, `ionic cordova run`, `ionic cordova emulate` |

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
