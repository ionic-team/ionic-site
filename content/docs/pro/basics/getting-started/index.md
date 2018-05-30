---
layout: fluid/pro_docs_base
category: pro-basics
id: pro-getting-started
title: Getting Started with Ionic Pro - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Getting Started with Ionic Pro

If you're new to Ionic Pro, please read the [Welcome](/docs/pro/basics/welcome/) introduction for a quick overview of Ionic pro and instructions on creating an account.

## Install Ionic CLI

Ionic Pro uses the latest version of the Ionic CLI to interface between your local code and our tools and services. To make sure you're using the latest CLI, upgrade using the following command:

```bash
npm install -g ionic
```

Note: you may need to add `sudo` to this command on Mac/Linux.

## Starting a New App

<script src="https://fast.wistia.com/embed/medias/5mpnif6345.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_5mpnif6345" style="height:400px;width:640px">&nbsp;</div>

If you are looking to create a brand new App to use with Ionic Pro, you can either start the process in [your dashboard](https://dashboard.ionicframework.com) or use the CLI locally. If you already have an App you'd like to link, skip this step.

To create a new app, run the `ionic start` command, or follow the official [Ionic Framework Getting Started](/getting-started) guide.

If this is your first time create an App on Pro, you may have to perform some additional steps that the CLI will walk you through such as logging into your account and setting up SSH keys.

Once the command finishes, you'll be prompted to create a new Ionic Pro app or link to an existing one. Go ahead and choose the option you'd like to do.

## Linking an Existing app

<script src="https://fast.wistia.com/embed/medias/fnfuwtyenb.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_fnfuwtyenb" style="height:400px;width:640px">&nbsp;</div>

Already have an existing Ionic app you'd like to link? No problem. Run `ionic link` in the directory of that app to connect it to Ionic Pro:

```bash
cd myApp
ionic link
```

The command will prompt you to create a new Ionic Pro app or link to an existing app.

If this is your first time running `ionic link` you may be prompted to perform additional steps such as logging in to your Pro account and setting up your SSH keys.

## Pushing your Code to Ionic

Now that you are logged into your Ionic Pro account from the CLI and have an app you'd like to use, the next
step is to push commits to your Ionic Pro account.

Follow the [Git Workflow](/docs/pro/basics/git/) to learn more about the workflow you should use while developing your App with Ionic Pro.

## Pro Client Setup

The Ionic Pro Client gives you access to the Monitoring and Deploy APIs inside of your app.

The first thing you have to do is set up the Pro Client (or update it to the latest version) in your project. Inside of your app directory, make sure you are on the latest version of the Pro Client and App Scripts:

```bash
npm install @ionic/app-scripts@latest @ionic/pro@latest
```

### Choose your Integration Type:

<div style="margin-top:15px;">

<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
<li role="ionic2" class="active"><a href="#ionic2" aria-controls="ionic2" role="tab" data-toggle="tab">Ionic 2/3</a></li>
<li role="ionic1"><a href="#ionic1" aria-controls="ionic1" role="tab" data-toggle="tab">Ionic 1</a></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="ionic2">

<div markdown="1">

<!-- IONIC 2+ CONTENT STARTS HERE -->

You'll want to initialize Pro Client with your App ID and App Version from Ionic Pro inside of `app.module.ts`.

Modify your `app.module.ts` to include the following code:

```typescript
// All of your imports that are already there
// import { ... } from '...';

// These are all imports required for Pro Client with Monitoring & Deploy,
// feel free to merge into existing imports above.
import { Pro } from '@ionic/pro';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

Pro.init('YOUR_APP_ID', {
  appVersion: 'APP_VERSION'
})

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
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
    // ...
    // Modify your providers to include the following
    providers: [
        // ...
        IonicErrorHandler,
        [{ provide: ErrorHandler, useClass: MyErrorHandler }]
    ]
})
export class AppModule {}
```

`YOUR_APP_ID` is the Ionic Pro App ID found on the dashboard for your app:

![App ID Location](/img/docs/pro/app-id-location.png)

`APP_VERSION` is the version of the code running for the purposes of tracking code changes. We strongly recommend that this mirrors the version in `package.json` or `config.xml`.

<div class="alert alert-warning" role="alert">It's important to keep the app version up to date because that is how the Error tracking
service will know when regressions have happened, as well as mapping your code to any
Source Maps you've provided.</div>

<!-- END IONIC 2+ CONTENT -->

</div>

</div>
<div role="tabpanel" class="tab-pane" id="ionic1">

<div markdown="1">

<!-- IONIC 1 CONTENT STARTS HERE -->

After installing `@ionic/pro` using NPM, you'll have to copy over the Pro Client files (`node_modules/@ionic/dist`) into `www/lib/ionic-pro`. You can run the following command to do so:

```bash
Mac:
cp -R node_modules/\@ionic/pro/dist www/lib/ionic-pro
Windows:
xcopy node_modules/\@ionic/pro/dist www/lib/ionic-pro
```

After you copy over the files, you'll have to include the Pro Client in your `index.hml` file after `ionic.bundle.js`:

```html
<script src="/lib/ionic-pro/ionic-pro.module.min.js"></script>
```

Then in your main `app.js` file where you set up your app, you should add a `.run` that initializes your app:

```javascript
// This line may be different in your file
angular.module('your-app', ['ionic', 'starter.controllers'])

// add this section:
.run(function(){
    Pro.init('APP_ID', {
        appVersion: 'APP_VERSION'
    });
})
```

`YOUR_APP_ID` is the Ionic Pro App ID found on the dashboard for your app:

![App ID Location](/img/docs/pro/app-id-location.png)

`APP_VERSION` is the version of the code running for the purposes of tracking code changes. We strongly recommend that this mirrors the version in `package.json` or `config.xml`.

<div class="alert alert-warning" role="alert">It's important to keep the app version up to date because that is how the Error tracking
service will know when regressions have happened, as well as mapping your code to any
Source Maps you've provided.</div>

<!-- IONIC 1 CONTENT ENDS HERE -->

</div>

</div>
</div>

</div>
