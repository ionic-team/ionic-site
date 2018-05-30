---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-live-deploy-plugin-api
title: Deploy Plugin API - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Customizing Ionic Deploy with the Deploy API

Using the Pro Client you can interact with Deploy, change which Channel your app is pulling from, and even manually apply updates yourself using custom logic. The Pro Client is also used for Monitoring, so it's an easy setup!

## Setup the Pro Client

Before you can use the Deploy API, you must set up the Pro Client inside of your app. Follow along with our [Pro Client Setup Guide](/docs/pro/basics/getting-started/#pro-client-setup). You should be on at least `1.0.20` of `@ionic/pro`.

## Install the Ionic Cordova Plugin

If you haven't set up the Ionic Cordova plugin yet with default values, you'll want to do that before you start using the Pro Client API for Deploy. You can learn more about this plugin, how to set it up, and how Channels work by visiting our [Deploy Installation Guide](/docs/pro/deploy/setup/#installation).

## Custom Updates & Data using the Deploy API

While the Ionic Cordova plugin can handle all of your updates and perform them for you, sometimes you'll want to customize how this works. Some examples of things you may want to do are:

- Allow users to subscribe to different Channels for Beta Features, etc.
- Manage the update process yourself (ex. Download updates on login, Apply updates on logout or Check for updates every 30 minutes)
- Display what Channel the user is connected to

The Pro Client gives you access to everything you need to make these modifications, and it's recommended that you always use the Pro Client instead of the Cordova plugin directly.

In the following video tutorial, we use the Deploy API to set up a custom Beta Channel that users can subscribe to in order to get updates early!

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

Before we dive into the specifics of each API function, here's an example template/JS for a page where we allow users to toggle to pull from a Beta Channel instead of Production and apply updates immediately when they toggle:

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

## Pro Client for Deploy API Documentation

`Pro.deploy` contains many functions that can help you utilize Deploy inside of your app. Here's a rundown of each:

#### Async Await vs. ".then()"

In all of the examples on this page you'll notice that we use Async/Await. This automatically resolves promises inline for you and waits to perform the next action. This is just an alternative to using `.then`. Async/Await just allows your code to be much more legible (especially when you'd normally be chaining multiple promises) as it's read like a syncronous piece of code. Here are two ways to write the same piece of code:

```js
Pro.deploy.info().then((info) => {
  console.log(info);
})

// is the same as

async getInfo(){
  const info = await Pro.deploy.info();
  console.log(info);
}

```

#### `Pro.deploy.init(config)`

This function configures any settings changes for Deploy, including your AppId and Channel that you're pulling from.

```js
async initDeploy() {
  const config = {
    'appId': 'YOUR_APP_ID',
    'channel': 'CHANNEL_NAME'
  }
  await Pro.deploy.init(config);
}
```

`appId` is fully optional, and if you leave it off we will use the App ID you passed into `Pro.init` in `app.module.ts`.

`channel` is the full name of the Channel you'd like to pull code from as seen in the Pro Dashboard. For example, `'My Awesome Channel'` (or one of the other channels) would be taken from below:

![Channel Name Location](/img/docs/pro/channel-name.png)

#### `Pro.deploy.info()`

This function returns an object that includes some information about our current Deploy config.

```js
async getInfo() {
  const info = await Pro.deploy.info()
  console.log(info)
  // { 'deploy_uuid': 'UUID_OF_ACTIVE_CODE', 'channel': 'CHANNEL_NAME', 'binary_version': 'X.X.X' }
}
```

#### `Pro.deploy.checkAndApply(redirect, downloadProgressFunc, extractProgressFunc)`

This function performs an entire standard Check, Download, Extract, and Redirect cycle rather than you having to program it yourself. This should be used most of the time unless you need to customize the flow.

```js
async performAutomaticUpdate() {
    try {
      const resp = await Pro.deploy.checkAndApply(true, function(progress){
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
```

#### `Pro.deploy.check()`

This function checks to see if an update is available for the current Channel that we are checking into. It returns a promise with a boolean value.

```js
async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    // We have an update!
  }
}
```

#### `Pro.deploy.download(progressFunc)`

This function begins downloading an available update, and should be called after you've used `Pro.deploy.check` to ensure that an update is indeed available. You can pass a function into it that will get an integer out of 100 that shows the progress of the download. Let's continue using the `Pro.deploy.check` example from above:

```js
public downloadProgress = 0;

async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    this.downloadProgress = 0;

    await Pro.deploy.download((progress) => {
      this.downloadProgress = progress;
    })
  }
}
```

#### `Pro.deploy.extract(progressFunc)`

This function extracts the download that has completed and should be called after you've used `Pro.deploy.download` to ensure we have something to extract. You can pass a function into it that will get an integer out of 100 that shows the progress of the download. Let's continue using the example from above:

```js
public downloadProgress = 0;
public extractProgress = 0;

async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    this.downloadProgress = 0;
    this.extractProgress = 0;

    await Pro.deploy.download((progress) => {
      this.downloadProgress = progress;
    })
    await Pro.deploy.extract((progress) => {
      this.extractProgress = progress;
    })
  }
}
```

#### `Pro.deploy.redirect()`

This function redirects to the newly extracted version of code and should be called after you've used `Pro.deploy.extract` to ensure we have something to redirect to. Yet again, continuing the example from above:

```js
public downloadProgress = 0;
public extractProgress = 0;

async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    this.downloadProgress = 0;
    this.extractProgress = 0;

    await Pro.deploy.download((progress) => {
      this.downloadProgress = progress;
    })
    await Pro.deploy.extract((progress) => {
      this.extractProgress = progress;
    })
    await Pro.deploy.redirect();
  }
}
```

#### `Pro.deploy.getVersions()`

This function returns a list of strings that represent the UUIDs of the downloaded versions of code that we have on the device. These can then be passed to delete for manual cleanup. By default we only keep around 2 extra versions of code, which is useful if you need to revert quickly.

```js
async checkVersions() {
  const versions = await Pro.deploy.getVersions();
  console.log(versions);
  // ['UUID', 'UUID2', 'UUID3']
}
```

#### `Pro.deploy.deleteVersion(uuid)`

This function deletes a version of code that is currently stored inside your app to free up storage space.  By default we only keep around 2 extra versions of code, which is useful if you need to revert quickly.

```js
async deleteVersion() {
  const versions = await Pro.deploy.getVersions();
  Pro.deploy.deleteVersion(versions[0]);
}
```

<!-- END IONIC 2+ CONTENT -->

</div>

</div>
<div role="tabpanel" class="tab-pane" id="ionic1">

<div markdown="1">

<!-- HERE IS WHERE IONIC 1 CONTENT GOES -->

Before we dive into the specifics of each API function, here's an example template/JS for a page where we allow users to toggle to pull from a Beta Channel instead of Production and apply updates immediately when they toggle:

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

## Pro Client for Deploy API Documentation

`Pro.deploy` contains many functions that can help you utilize Deploy inside of your app. Here's a rundown of each:

#### `Pro.deploy.init(config)`

This function configures any settings changes for Deploy, including your AppId and Channel that you're pulling from.

```js
var config = {
  'appId': 'YOUR_APP_ID',
  'channel': 'CHANNEL_NAME'
}
Pro.deploy.init(config);
```

`appId` is fully optional, and if you leave it off we will use the App ID you passed into `Pro.init` in `app.module.ts`.

`channel` is the full name of the Channel you'd like to pull code from as seen in the Pro Dashboard. For example, `'My Awesome Channel'` (or one of the other channels) would be taken from below:

![Channel Name Location](/img/docs/pro/channel-name.png)

#### `Pro.deploy.info()`

This function returns an object that includes some information about our current Deploy config.

```js
  Pro.deploy.info().then(function(info){
    console.log(info)
    // { 'deploy_uuid': 'UUID_OF_ACTIVE_CODE', 'channel': 'CHANNEL_NAME', 'binary_version': 'X.X.X' }
  });
```

#### `Pro.deploy.checkAndApply(redirect, downloadProgressFunc, extractProgressFunc)`

This function performs an entire standard Check, Download, Extract, and Redirect cycle rather than you having to program it yourself. This should be used most of the time unless you need to customize the flow.

```js
$scope.data = {
  'downloadProgress': 0
}

Pro.deploy.checkAndApply(true, function(progress){
  $timeout(function(){
    $scope.data.downloadProgress = progress;
  })
}).then(function(res){
  if (resp.update){
    // We found an update, and are in process of redirecting you since you put true!
  }else{
    // No update available
  }
})
```

#### `Pro.deploy.check()`

This function checks to see if an update is available for the current Channel that we are checking into. It returns a promise with a boolean value.

```js
Pro.deploy.check().then(function(haveUpdate){
  if (haveUpdate){
    // We have an update!
  }
})
```

#### `Pro.deploy.download(progressFunc)`

This function begins downloading an available update, and should be called after you've used `Pro.deploy.check` to ensure that an update is indeed available. You can pass a function into it that will get an integer out of 100 that shows the progress of the download. Let's continue using the `Pro.deploy.check` example from above:

```js
$scope.data = {
  'downloadProgress': 0
}

Pro.deploy.check().then(function(haveUpdate){
  if (haveUpdate){
    Pro.deploy.download(function(progress){
      $timeout(function(){
        $scope.data.downloadProgress = progress;
      })
    }).then(function(){
      // We're done downloading!
    })
  }
})
```

#### `Pro.deploy.extract(progressFunc)`

This function extracts the download that has completed and should be called after you've used `Pro.deploy.download` to ensure we have something to extract. You can pass a function into it that will get an integer out of 100 that shows the progress of the download. Let's continue using the example from above:

```js
$scope.data = {
  'downloadProgress': 0,
  'extractProgress': 0
}

Pro.deploy.check().then(function(haveUpdate){
  if (haveUpdate){
    Pro.deploy.download(function(progress){
      $timeout(function(){
        $scope.data.downloadProgress = progress;
      })
    }).then(function(){
      Pro.deploy.extract(function(progress){
        $timeout(function(){
          $scope.data.extractProgress = progress;
        })
      }).then(function(){
        // We're done extracting!
      })
    })
  }
})
```

#### `Pro.deploy.redirect()`

This function redirects to the newly extracted version of code and should be called after you've used `Pro.deploy.extract` to ensure we have something to redirect to. Yet again, continuing the example from above:

```js
$scope.data = {
  'downloadProgress': 0,
  'extractProgress': 0
}

Pro.deploy.check().then(function(haveUpdate){
  if (haveUpdate){
    Pro.deploy.download(function(progress){
      $timeout(function(){
        $scope.data.downloadProgress = progress;
      })
    }).then(function(){
      Pro.deploy.extract(function(progress){
        $timeout(function(){
          $scope.data.extractProgress = progress;
        })
      }).then(function(){
        Pro.deploy.redirect();
      })
    })
  }
})
```

#### `Pro.deploy.getVersions()`

This function returns a list of strings that represent the UUIDs of the downloaded versions of code that we have on the device. These can then be passed to delete for manual cleanup. By default we only keep around 2 extra versions of code, which is useful if you need to revert quickly.

```js
Pro.deploy.getVersions().then(function(versions){
  console.log(versions);
  // ['UUID', 'UUID2', 'UUID3']
})
```

#### `Pro.deploy.deleteVersion(uuid)`

This function deletes a version of code that is currently stored inside your app to free up storage space.  By default we only keep around 2 extra versions of code, which is useful if you need to revert quickly.

```js
Pro.deploy.getVersions().then(function(versions){
  console.log(versions);
  // ['UUID', 'UUID2', 'UUID3']
  Pro.deploy.deleteVersion(versions[0]);
})
```

<!-- END IONIC 1 CONTENT -->

</div>

</div>
</div>

</div>
