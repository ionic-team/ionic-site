---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-deploy-tutorials
title: Deploy Tutorials - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

## Setup and Deploy on iOS

<script src="https://fast.wistia.com/embed/medias/2702mkf530.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_2702mkf530" style="height:400px;width:640px">&nbsp;</div>

Learn how to install, configure, and deploy your first live update.

## Setup Automated Live Deployments

<script src="https://fast.wistia.com/embed/medias/00mgfso2ak.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_00mgfso2ak" style="height:400px;width:640px">&nbsp;</div>

Setup a channel so that when you push a branch it automatically deploys to the channel.

## Upgrading to the New Deploy Plugin

Here are the steps in order to successfully upgrade to the new version of the Pro Client, Deploy Plugin, and Webview Plugin.
You can follow the guide below or watch this video:

<!-- TODO: Replace with appropriate video -->
<script src="https://fast.wistia.com/embed/medias/00mgfso2ak.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_00mgfso2ak" style="height:400px;width:640px">&nbsp;</div>

### Deploy Upgrade Guide
You'll need specific versions of each of the following libraries:
* `cordova-plugin-ionic-webview >= 2.0.0`
* `cordoava-plugin-ionic >= 5.0.0`
* `@ionic/pro >= 2.0.0`

The following commands inside the root of you Ionic app should remove the old versions and install the new ones for you:

```bash
// remove the old version of the webview plugin
cordova plugin rm cordova-plugin-ionic-webview
// add the the new webview plugin
cordova plugin add cordova-plugin-ionic-webview@latest
// remove the old deploy plugin
cordova plugin rm cordova-plugin-ionic
// install the new deploy plugin
cordova plugin add cordova-plugin-ionic@latest --variable APP_ID=YOUR_APP_ID --variable CHANNEL_NAME=YOUR_CHANNEL_NAME
// install the new Pro SDK
npm install @ionic/pro@latest
```

That's it! You should be all configured to start taking advanatage of the new deploy features! The new plugin

### Using the Legacy Plugin

For convienience we've also provided an intermediate version which exposes both the old and new API for those looking to incrementally upgrade.
You'll still need the `latest` tag of the `cordova-plugin-ionic-webview` plugin but you can use `cordova-plugin-ionic@4.2.0` and `@ionic/pro@1.1.0`.

You can follow the instructions above but use the `legacy` tag for `cordova-plugin-ionic` & `@ionic/pro`.
```bash
// remove the old version of the webview plugin
cordova plugin rm cordova-plugin-ionic-webview
// add the the new webview plugin
cordova plugin add cordova-plugin-ionic-webview@latest --save
// remove the old deploy plugin
cordova plugin rm cordova-plugin-ionic
// install the new deploy plugin
cordova plugin add cordova-plugin-ionic@legacy --save --variable APP_ID=YOUR_APP_ID --variable CHANNEL_NAME=YOUR_CHANNEL_NAME
// install the new Pro SDK
npm install @ionic/pro@legacy --save
```

We highly recommend updating your code where neccessary and moving to the latest versions as we will be releasing new features to the latest versions
the the `legacy` tag is only meant to help with the migration path.

## Setting up a Beta Channel

In the following video tutorial, and code snippets we use the Deploy API to set up a custom Beta Channel that users can subscribe to in order to get updates early!

<iframe width="560" height="315" src="https://www.youtube.com/embed/I7PC3O4q1ug?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

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

<!-- HERE IS WHERE IONIC 2+ CONTENT GOES -->

Here's an example template/JS for a page where we allow users to toggle to pull from a Beta Channel instead of Production and apply updates immediately when they toggle:

```html {% raw %}
<!-- settings.html -->
<ion-header>
  <ion-navbar>
    <ion-title>Settings</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <h3>Settings</h3>

  <p>I'm connected to the {{ deployChannel }}.</p>

  <p>Download Progress {{ downloadProgress }} / 100</p>

  <ion-item>
    <ion-label>Opt in to Beta Features</ion-label>
    <ion-toggle [(ngModel)]="isBeta" (ionChange)="toggleBeta()"></ion-toggle>
  </ion-item>

</ion-content>
{% endraw %}
```

```js
// settings.ts
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pro } from '@ionic/pro';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public deployChannel = "";
  public isBeta = false;
  public downloadProgress = 0;

  constructor(public navCtrl: NavController) {
    this.checkChannel();
  }

  async checkChannel() {
    try {
      const res = await Pro.deploy.info();
      this.deployChannel = res.channel;
      this.isBeta = (this.deployChannel === 'Beta')
    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
    }
  }

  async toggleBeta() {
    const config = {
      channel: (this.isBeta ? 'Beta' : 'Production')
    }

    try {
      await Pro.deploy.init(config);
      await this.checkChannel();
      await this.performAutomaticUpdate(); // Alternatively, to customize how this works, use performManualUpdate()
    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
    }

  }

  async performAutomaticUpdate() {

    /*
      This code performs an entire Check, Download, Extract, Redirect flow for
      you so you don't have to program the entire flow yourself. This should
      work for a majority of use cases.
    */

    try {
      const resp = await Pro.deploy.checkAndApply(true, progress => {
          this.downloadProgress = progress;
      });

      if (resp.update){
        // We found an update, and are in process of redirecting you since you put true!
      }else{
        // No update available
      }
    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
    }
  }

  async performManualUpdate() {

    /*
      Here we are going through each manual step of the update process:
      Check, Download, Extract, and Redirect.
      This code is currently exactly the same as performAutomaticUpdate,
      but you could split it out to customize the flow.

      Ex: Check, Download, Extract when a user logs into your app,
        but Redirect when they logout for an app that is always running
        but used with multiple users (like at a doctors office).
    */

    try {
      const haveUpdate = await Pro.deploy.check();

      if (haveUpdate){
        this.downloadProgress = 0;

        await Pro.deploy.download((progress) => {
          this.downloadProgress = progress;
        })
        await Pro.deploy.extract();
        await Pro.deploy.redirect();
      }
    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
    }

  }

}
```
<!-- END IONIC 2+ CONTENT -->

</div>

</div>
<div role="tabpanel" class="tab-pane" id="ionic1">

<div markdown="1">

<!-- HERE IS WHERE IONIC 1 CONTENT GOES -->

Here's an example template/JS for a page where we allow users to toggle to pull from a Beta Channel instead of Production and apply updates immediately when they toggle:

```html {% raw %}
<!-- settings.html -->
<ion-view view-title="Settings">
  <ion-content>
    <h3>Settings</h3>
    <p>I'm connected to the {{data.deployChannel}} channel.
    <p>Download Progress {{data.downloadProgress}} / 100</p>
    <ion-list>
      <ion-toggle ng-model="data.isBeta" ng-change="toggleBeta()">
        Opt in to Beta Features
      </ion-toggle>
    </ion-list>
  </ion-content>
</ion-view>
{% endraw %}
```

```js
// controllers.js
.controller('SettingsCtrl', function($scope, $timeout, $ionicPlatform) {

  $scope.data = {
    'deployChannel': '',
    'isBeta': false,
    'downloadProgress': 0
  }

  function checkChannel(){
    Pro.deploy.info().then(function(res){
      $timeout(function(){
        $scope.data.deployChannel = res.channel;
        $scope.data.isBeta = ($scope.data.deployChannel === 'Beta');
      })
    })
  }

  $ionicPlatform.ready(function(){
    checkChannel();
  });

  function performAutomaticUpdate(){

    /*
      This code performs an entire Check, Download, Extract, Redirect flow for
      you so you don't have to program the entire flow yourself. This should
      work for a majority of use cases.
    */

    Pro.deploy.checkAndApply(true, function(progress){
      $timeout(function(){
        $scope.data.downloadProgress = progress;
      });
    }).then(function(res){
      if (res.update){
        // Awesome we have an update and are redirecting!
      }else{
        // We didn't have an update!
      }
    }, function(err){

    })

  }

  function performManualUpdate(){

    /*
      Here we are going through each manual step of the update process:
      Check, Download, Extract, and Redirect.
      This code is currently exactly the same as performAutomaticUpdate,
      but you could split it out to customize the flow.

      Ex: Check, Download, Extract when a user logs into your app,
        but Redirect when they logout for an app that is always running
        but used with multiple users (like at a doctors office).
    */

    Pro.deploy.check().then(function(haveUpdate){
     if (haveUpdate){
      $scope.data.downloadProgress = 0;
      Pro.deploy.download(function(progress){
        $timeout(function(){
          $scope.data.downloadProgress = progress;
        })
      }).then(function(res){
        Pro.deploy.extract().then(function(res){
          Pro.deploy.redirect();
        }, function(err){
          // We encountered an error.
          // Here's how we would log it to Ionic Pro Monitoring while also catching:
          Pro.monitoring.exception(err);
        })
      }, function(err){
        // We encountered an error.
        // Here's how we would log it to Ionic Pro Monitoring while also catching:
        Pro.monitoring.exception(err);
      })
     }
    }, function(err){
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:
      Pro.monitoring.exception(err);
    })

  }

  $scope.toggleBeta = function(){

    var config = {
      channel: ( $scope.data.isBeta ? 'Beta' : 'Production' )
    }

    Pro.deploy.init(config).then(function(res){
      checkChannel();
      performAutomaticUpdate(); // Alternatively, to customize how this works, use performManualUpdate()
    }, function(err){
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:
      Pro.monitoring.exception(err);
    });

  }

})
```
</div>
</div>
</div>
</div>

## Developing With the Plugin (Debug Mode)

When you install the Ionic Cordova Plugin, you might not want Deploy to download new versions of code when running Debug binaries. To allow this, you will encounter a popup asking you if you want to download new versions of code when using a Debug binary.

If you wish to actively develop WHILE using Deploy (such as testing it when you're setting it up, etc), you might want to disable our debug warning by passing in `WARN_DEBUG="false"` when installing the plugin:

```bash
cordova plugin add cordova-plugin-ionic --save --variable APP_ID="YOUR_APP_ID" --variable CHANNEL_NAME="YOUR_CHANNEL_NAME" --variable UPDATE_METHOD="background|auto|none" --variable WARN_DEBUG="false"
```

When you run with a Release binary, this message will go away. You can ensure you're on a release binary by doing the following:

On iOS you can toggle the build type In Xcode via **Product -> Scheme -> Edit Scheme**.

On Android, you can create a release build with `ionic build android --release`
