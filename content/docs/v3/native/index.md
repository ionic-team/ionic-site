---
layout: "fluid/docs_base"
versionHref: "/docs/"
path: ""
category: native
id: native
title: "Ionic Native"
header_sub_title: "Harness the power of devices' native APIs"
searchable: false
---

<h1 id="Overview" class="banner">Ionic Native</h1>
Ionic Native is a TypeScript wrapper for Cordova/PhoneGap plugins that make adding any native functionality you need to your 
[Ionic](https://ionicframework.com/) mobile app easy.

<blockquote>
  Disclaimer: <p>Ionic Native is largely a set of <i>community maintained</i> plugins, and while the community is quick to find and fix issues, certain plugins may not function properly. For teams that require dedicated Native plugin support, the Ionic team has options available. Please <a href="mailto:sales@ionicframework.com">contact us</a> for more information.</p>
</blockquote>

<h3 id="Promises_and_Observables">Promises and Observables</h3>
Ionic Native wraps plugin callbacks in a Promise or an [Observable](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), providing a common interface for all plugins and ensuring that native events trigger change detection in Angular.


```typescript
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

class MyComponentOrService {

  constructor(private platform: Platform, private geolocation: Geolocation) {

    platform.ready().then(() => {

      // get current position
      geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();

    });

  }

}

```

<h3 id="Runtime_Diagnostics">Runtime Diagnostics</h3>
Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.

<h3 id="Installation">Installation</h3>
To add Ionic Native to your app, run following command to install the core package:
```
npm install @ionic-native/core@4 --save
```
Note that Ionic Native core package is included by default with every Ionic app.


<h3 id="Usage">Usage</h3>

<h4 id="Install_Plugins_Needed">Install the Needed Plugins</h4>
Install the Ionic Native package for each plugin you want to add.

For example, if you want to install the Camera plugin, you will need to run the following command:
```
npm install @ionic-native/camera@4 --save
```
Then install the plugin using Cordova or Ionic CLI.

For example:
```
ionic cordova plugin add cordova-plugin-camera
```

All package names are documented on the plugin's documentation. It is recommended to follow the installation instructions on each plugin's documentation, as some plugins require additional steps to fully install.

<h4 id="Add_Plugins_to_Your_App_Module">Add Plugins to Your App's Module</h4>
After installing a plugin's package, add it to your app's `NgModule`.

```typescript
...

import { Camera } from '@ionic-native/camera';

...

@NgModule({
  ...

  providers: [
    ...
    Camera
    ...
  ]
  ...
})
export class AppModule { }

```
