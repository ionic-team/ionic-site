---
layout: fluid/pro_docs_base
category: pro-builds
id: pro-builds
title: Builds - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Builds

## Introduction

The [Git Workflow](/docs/pro/basics/git/) at the core of Ionic Pro allows you to push commits of your app code,
which can then be used to trigger two distinct types of builds: Deploy and Package Builds.

### Concurrency limits

Before talking in details about build types, a brief note about builds concurrency.

Each account plan has a defined maximum amount of concurrent builds allowed (see [Plans Details](/pro/pricing)).
This limit is enforced at the account level across different apps.

When you trigger a build, in the Pro Dashboard you will notice that a build can have different statuses before it is processed:

* **Queued**: this means that your build is queued for the next available runner. Usually your build should not be in this state for more than few seconds.
* **Pending**: this means that you have reached your concurrent build limit and your build will continue when your current builds are completed.

After the build starts to be processed the statuses are:

* **Running**: the build is currently being processed. You can read the logs in the build details.
* **Successful**: the build terminated in a correct state.
* **Failed**: the build terminated in an incorrect state.

More concurrent builds can be added to your plan.
If you have a Starter or Developer plan, you can get more builds by [upgrading plan](https://dashboard.ionicframework.com/settings/billing).
If you have a Teams or Business plan, please [contact us](https://ionic.zendesk.com/hc/en-us/requests/new).

## Deploy Builds

A deploy build is a build of your application that includes only the web assets (JavaScript, HTML, fonts, and images) which
can be shipped out to customer via [Deploy](/docs/pro/deploy/). Deploy builds are currently automatically triggered when
you push code to the Ionic Pro Remote or any branch that is connected to your app via the GitHub or Bitbucket integration.
The basic steps of the deploy build are as follows:

* `npm install` will run to install any dependencies you have.
* `npm run build` will run if a `build` script is detected in the `scripts` section of your `package.json` in order to build the web assets for your application.
* The `www` directory with your built application will be stored and made available for live updates via [Deploy](/docs/pro/deploy/)
* You can find the history and status of your deploy builds in the side menu under `Builds` in the `Deploy` tab.

<div style="text-align: center">
  <img style="width: 950px" src="/img/pro/deploy-builds-img.png">
</div>

## Package Builds

A package build is a native build of your application that is platform specific and can run on a physical device.
Package builds produce `apk` files for Android and `ipa` files for iOS. Currently package builds are only available
to customers on one of the paid plans and must manually be triggered from the dashboard.
The basic steps of the package build are as follows:

* `npm install` will run to install any dependencies you have.
* `npm run build` will run if a `build` script is detected in the `scripts` section of your `package.json` in order to build the web assets for your application.
* `cordova platform add [ios|android]` will run with the platform you have configured `NOTE:` *DO NOT* commit your `platforms` directory as this will cause your build to fail.
* `cordova build [ios|android]` will run with the platform and options you have configured and generate the `ipa` or `apk` file
* The generated `ipa` or `apk` will be stored and available for you to download from the dashboard
* You can find the history and status of your package builds as well as download successful builds in the side menu under `Builds` in the `Package` tab.

<div style="text-align: center">
  <img style="width: 950px" src="/img/pro/package-builds-img.png">
</div>


## Build Environments

Every time a Build occurs, it's done in a secure environment where we provide
some [predefined variables](#predefined-variables) which are key/value pairs that are made
available in the environment and are available by using
[process.env.MY_VAR](https://nodejs.org/docs/latest-v8.x/api/process.html#process_process_env) syntax
in NodeJS or via `$MY_VAR` syntax in a standard shell script.
These variables can be leveraged to customize the build and outputs.

The following environment variables are provided in every build, which can be accessed in build scripts:

* `CI_APP_ID` **(string):** Your Ionic app's unique ID.
* `CI_APP_NAME` **(string):** Your Ionic app's name.
* `CI_GIT_COMMIT_SHA` **(string):** The SHA for the commit on which the build was run.
* `CI_GIT_REF` **(string):** The git ref from which the build was created (i.e. `master`).
* `CI_GIT_REF_TYPE` **(string):** The git ref type (i.e. `branch`).

For example you could replace your `build` script in the `package.json` with a custom shell script that
reads the branch and triggers a custom build.

```json
// customize the build script in the package.json
{
...
    "scripts": {
        "clean": "ionic-app-scripts clean",
        "build": "./mybuild.sh",
        "lint": "ionic-app-scripts lint",
        "ionic:build": "ionic-app-scripts build",
        "ionic:serve": "ionic-app-scripts serve"
    },
...
```

```
#!/bin/bash
if [ "$CI_GIT_REF" = "master" ]; then
    npx ionic-app-scripts build --prod
else
    npx ionic-app-scripts build
fi
```

As of `@ionic/app-scripts@3.2.0` you can also use
[environment variables directly in your source code](https://github.com/ionic-team/ionic-app-scripts#environments)
and they will be replaced at build time so that you can customize your code based on the environment.

For example:

```typescript
productionConfig = {
  api: 'https://my.production.api.com',
  analyticsKey: 'my-production-key'
}
stagingConfig = {
  api: 'https://my.staging.api.com',
  analyticsKey: 'my-staging-key'
}

localConfig = {
  api: 'https://localhost:7000'
  analyticsKey: 'my-local-key'
}

switch (process.env.CI_GIT_REF) {
  case 'master':
    return productionConfig;
  case 'staging':
    return stagingConfig;
  default:
    return localConfig;
}
```
