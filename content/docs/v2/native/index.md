---
layout: "v2_fluid/docs_base"
versionHref: "/docs/v2"
path: ""
category: native
id: native
title: "Ionic Native"
header_sub_title: "Harness the power of devices' native APIs"
searchable: false
---

<h1 id="Overview" class="banner">Ionic Native</h1>
Ionic Native is a TypeScript wrapper for Cordova/PhoneGap plugins that make adding any native functionality you need to your [Ionic 2](http://ionicframework.com/) mobile app easy.

<h3 id="Promises_and_Observables">Promises and Observables</h3>
Ionic Native wraps plugin callbacks in a Promise or an [Observable](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), providing a common interface for all plugins and ensuring that native events trigger change detection in Angular 2.


```ts
import { Geolocation } from 'ionic-native';

Geolocation.getCurrentPosition().then(pos => {
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

let watch = Geolocation.watchPosition().subscribe(pos => {
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

// to stop watching
watch.unsubscribe();
```

<h3 id="Runtime_Diagnostics">Runtime Diagnostics</h3>
Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.

<h3 id="Installation">Installation</h3>
To add Ionic Native to your app, run following command to install the core package:
```
npm install @ionic-native/core --save
```
Note that Ionic Native core package is included by default with every Ionic 2 app.


<h3 id="Usage">Usage</h3>

<h4 id="Install_Plugins_Needed">Install the Needed Plugins</h4>
You need to install the appropriate pacakage for each plugin you want to add. The package names are documented in each plugin's documentation.

For example, if you want to install the Camera plugin, you will need to run the following command:
```
npm install @ionic-native/camera --save
```

Ionic Native will **not** install plugins for you automatically. You still need to install the plugins you need using Cordova CLI or Ionic CLI. Ionic Native will notify you if you are missing a plugin, and will provide you with the plugin package name to install.

It is recommended to follow the installation instruction on each plugin's documentation, as some plugins require additional steps to fully install.

<h4 id="Using_Ionic_Native_Wrappers">Examples</h4>

```js
import { Camera } from '@ionic-native/camera';
import { Platform } from 'ionic-angular';

constructor(private camera: Camera, privat platform: Platform) {

  platform.ready().then(() => {
    camera.getPicture()
      .then((data: any) => console.log(data))
      .catch((error: any) => console.log(error));
  });

}
```
