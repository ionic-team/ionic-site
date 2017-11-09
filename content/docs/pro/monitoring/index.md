---
layout: fluid/pro_docs_base
category: pro-monitoring
id: pro-error-monitoring
title: Runtime Error Monitoring - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Error Monitoring

Ionic Pro makes it easy to automatically track runtime errors in your Ionic app, and map it back to your original, non-transpiled source code (TypeScript, ES6, etc.).

## Summary

Tracking runtime errors and crashes in your app helps you respond to issues quickly to reduce customer frustration and major issues with production apps.

Combined with Ionic's Deploy feature, new updates can be rolled out quickly to address problems in real-time.

This lets you:

<div class="condensed" markdown="1">
* See exactly where errors happen in your original source code even through layers of transpiled code and minification
* Detect runtime errors in real-time with alerts and notifications
* Fix errors immediately even in live app store apps
</div>

## Getting Started

### NPM Install

We recommend installing the Ionic Pro client from NPM. 

```bash
npm install --save @ionic/pro
```

And then make sure to import and initialize the Pro client (for example, in `app.module.ts`):

```typescript
import { Pro } from '@ionic/pro';

const IonicPro = Pro.init('APP_ID', {
  appVersion: "APP_VERSION"
});
```

Where `APP_ID` is the Ionic Pro App ID Found on the dashboard for your app. `APP_VERSION` is the version of the code
running for the purposes of tracking code changes. We strongly recommend that this mirrors the version in `package.json` or `config.xml`.

Finally, make sure you are running `@ionic/app-scripts` version `3.1.0` or later, and `@ionic/pro` version `1.0.12` or later.

### CDN Install

The CDN install is for apps that aren't using a build step (for example, Ionic/Angular 1).

First, in your app's `index.html` file, add the following script include *immediately following your app code. Replace `APP_ID` and `APP_VERSION` with
the id of your app on https://app.ionicjs.com/, along with the version of your app as found in your `config.xml`.

```html
<script src="https://code.ionicframework.com/services/ionic-pro.min.js" data-app-id="APP_ID" data-app-version="APP_VERSION"></script>
```

<div class="callout danger" markdown="1">
It's important to keep the app version up to date because that is how the Error tracking
service will know when regressions have happened, as well as mapping your code to any
Source Maps you've provided.
</div>

<div class="callout info" markdown="1">
For Ionic 1/AngularJS apps, including the script tag is all you need to do. For Angular 2, follow instructions below to add the custom error handler.
</div>

## Angular 2.x+ Integration

For Ionic-Angular apps (Ionic 2.x and Angular 2.x and above), to capture errors automatically from Angular, add this snippet in `app.module.ts`:

```typescript
import { Pro } from '@ionic/pro';

// These are the imports required for the code below,
// feel free to merge into existing imports.
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

const IonicPro = Pro.init('APP_ID', {
  appVersion: "APP_VERSION"
});

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure 
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
```

Then add this entry to the `providers` in `NgModule`:

```
  providers: [
    // ...,
    IonicErrorHandler,
    [{ provide: ErrorHandler, useClass: MyErrorHandler }] // This line
  ]
```

## Manual capture

Ionic Pro Monitoring supports manually capturing errors and also sending log messages. Additionally, an `extra` field
takes key/value pairs for adding additional metadata for a call.

#### `Pro.getApp().monitoring.exception(errorObject, extra)`

Manually capture an error. For example

```typescript
Pro.getApp().monitoring.exception(new Error('error'))
```

`Pro.getApp().monitoring.log(msg, options, extra)`

Capture and send a log message. Options takes a `level` (such as 'error' or 'info').

Example:

```typescript
Pro.getApp().monitoring.log('This happens sometimes', { level: 'error' })
```

#### `Pro.getApp().monitoring.call(fn, extra)`

Call a function and automatically capture any resulting errors. Example:

```typescript
Pro.getApp().monitoring.call(() => {
  throw new Error('error');
})
```

#### `Pro.getApp().monitoring.wrap(fn, extra)`

Return a function that will automatically track any errors. Example:

```typescript
const newFn = Pro.getApp().monitoring.wrap(() => {
  throw new Error('error');
})
newFn();
```

## Source Maps

Source Maps enable the Error service to provide stacktraces that map back
to your original TypeScript code, making it easy to pinpoint problems
in your code, even through highly minified, production code.

#### Automatically adding Source Maps

New releases of Ionic CLI (3.9.0 and greater) come with a built-in command for syncing Source Maps with Ionic Pro. This feature requires Ionic 2 or above using `@ionic/app-scripts` 3.1.0 or greater.

To sync Source Maps, run

```bash
ionic monitoring syncmaps
```

The command will prompt for the version of your app these Source Maps correspond to, and then ask you if you'd like to perform a new build to ensure the Source Maps are up to date.

See the note about versions below, as keeping your Source Maps in sync with your app version is crucial for accurate stack trace context.

#### Manually adding Source Maps

To add a Source Map manually, navigate to your app on the [https://dashboard.ionicjs.com/](Ionic Pro Dashboard), click the "Monitoring" tab,
then click "Source Maps" in the upper right.

You can find your Source Maps after doing a dev or prod build in `YOUR_APP/.sourcemaps/`. Upload the `main.js.map` sourcemap for Angular/Ionic 2+, and any other sourcemaps that correspond to your code for other Ionic/Angular versions.

See the note about versions below, as keeping your Source Maps in sync with your app version is crucial for accurate stack trace context.

#### Ensuring Version Accuracy

Keeping your Source Maps in sync with the version of your code running in your app is crucial for accurate stack trace context.

Version numbers _must_ follow [semver](http://semver.org/), which ensures that the error tracking service can accurately detect regressions by comparing errors that occur in one version of your app with future releases of that app.

Before doing a release, ensure you've synced Source Maps and make sure to not send new Source Maps for that version in the future.

Note: we are working on automating the process to make it even easier.
