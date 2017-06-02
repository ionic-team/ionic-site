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
Ionic Native is a TypeScript wrapper for Cordova/PhoneGap plugins that make adding any native functionality you need to your [Ionic](https://ionicframework.com/) mobile app easy.

<h3 id="What_Ionic_Native_offers">What Ionic Native offers</h3>

<h4 id="Promises_and_Observables">Promises and Observables</h4>
Ionic Native wraps Cordova plugin callbacks in a Promise or an [Observable](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), providing a common interface for all plugins and ensuring that native events trigger change detection in Angular.


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
      
      // start watching the position
      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // stop watching
      watch.unsubscribe();

    });

  }

}
```

<h4 id="Runtime_Diagnostics">Runtime Diagnostics</h4>
Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.

<h4 id="Native_Plugins_in_the_Browser">Native Plugins in the Browser</h4>
Ionic Native allows developers to mock and use native plugins in the browser through a simple override mechanic, making it easy to provide testing data from a sensor, or to access a native-only API such as HealthKit. Read more on our [Browser Usage documentation](https://ionicframework.com/docs/native/browser.html).

<h3 id="Installation">Installation</h3>
To add Ionic Native to your app, run the following command to install the core package:
```
npm install @ionic-native/core --save
```
Note that Ionic Native core package is already included by default with every Ionic app.


<h3 id="Usage">Usage</h3>

<h4 id="Install_Plugins_Needed">Install the Needed Plugins</h4>
Install the Ionic Native package for each plugin you want to add.

For example, if you want to install the [Camera plugin](https://ionicframework.com/docs/native/camera/), you will need to run the following command:

```
npm install @ionic-native/camera --save
```

Then install the plugin using Ionic or Cordova CLI:

```
ionic cordova plugin add cordova-plugin-camera
```

All Cordova plugin package names are documented on the plugin's individual documentation. It is recommended to follow the installation instructions on each plugin's documentation, as some plugins require additional steps to fully install.

<h4 id="Add_Plugins_to_Your_App_Module">Add Plugins to Your App's Module</h4>
After installing a plugin's package, add it to your app's `NgModule`'s `provider` array. Keeping with the [Camera plugin](https://ionicframework.com/docs/native/camera/) as an example, you have to add two lines to your `app.module.ts`:

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

<h4 id="Use_plugin_functionality_in_your_app">Use plugin functionality in your app</h4>
You will find example code of the chosen plugin on the plugin's individual documentation page under the headline "Usage".
