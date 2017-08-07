---
layout: fluid/pro_docs_base
category: pro
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
* Detect runtime errors and crashes in real-time with alerts and notifications
* Fix errors immediately even in live app store apps
</div>

## Getting Started

First, in your app's `index.html` file, add the following script include *immediately following cordova.js*. Replace `APP_ID` and `APP_VERSION` with
the id of your app on https://app.ionicjs.com/, along with the version of your app as found in your `config.xml`.

```html
<script src="https://code.ionicframework.com/services/ionic-error-tracking.min.js" data-app-id="APP_ID" data-app-version="APP_VERSION"></script>
```

<div class="callout danger" markdown="1">
It's important to keep the app version up to date because that is how the Error tracking
service will know when regressions have happened, as well as mapping your code to any
Source Maps you've provided.
</div>

## Angular 2.x+ Integration

For Ionic-Angular apps (Ionic 2.x and Angular 2.x and above), to capture errors automatically from Angular, add this snippet in `app.module.ts`:

```typescript
import { ErrorHandler } from '@angular/core';

declare var window;

export class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    window.Ionic.handleNewError(err);
  }
}
```

Then add this entry to the `providers` in `NgModule`:

```
  providers: [
    // ...,
    [{ provide: ErrorHandler, useClass: MyErrorHandler }] // This line
  ]
```


## Adding Source Maps

Source Maps enable the Error service to provide stacktraces that map back
to your original TypeScript code, making it easy to pinpoint problems
in your code, even through highly minified, production code.

To add a Source Map, navigate to your app on [https://app.ionicjs.com/], click the "Monitoring" tab,
then click "Source Maps" in the upper right.

You can find your source maps after doing a dev or prod build in `YOUR_APP/.tmp/build/`. Upload all `js.map` files
under the same version string (for example, `main.js.map`).
