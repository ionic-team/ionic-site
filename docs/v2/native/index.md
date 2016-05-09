---
layout: "v2_fluid/docs_base"
version: "1.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "ionic-native"
title: "Ionic Native"
header_sub_title: ""
---

<h1 id="Overview">Ionic Native</h1>
Ionic Native is a curated set of ES6/TypeScript wrappers for Cordova/PhoneGap plugins that make adding any native functionality you need to your [Ionic](http://ionicframework.com/), Cordova, or Web View mobile app easy.

<h3 id="Promises_and_Observables">Promises and Observables</h3>
Ionic Native wraps plugin callbacks in a Promise or [Observable](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), providing a common interface for all plugins and ensuring that native events trigger change detection in Angular 2.

```ts
import {Geolocation} from 'ionic-native';

Geolocation.getCurrentPosition().then(pos => { 
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

let watch = Geolocation.watchPosition();
watch.subscribe(pos => {
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

// to stop watching
watch.unsubscribe();
```

<h3 id="Runtime_Diagnostics">Runtime Diagnostics</h3>
Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.

<h3 id="Installation">Installation</h3>
Run following commmand to install ionic-native in your project. 
```shell
npm install ionic-native --save
```

<h3 id="Usage">Usage</h3>

<h4 id="Importing_Ionic_Native">Import Ionic Native</h4>
If you are using Angular 2.0, you do not need to include any JavaScript files in your index.html. Simply importing the plugin you need from the `ionic-native` npm package will result in the required code to be imported in your compiled code. However, if you are using Angular 1.x or plain JavaScript then you will need to import `ionic.native.js` file into your index.html before your application's main code.

<h4 id="Install_Plugins_Needed">Install The Needed Plugins</h4>
Ionic Native will *not* install plugins for you automatically. You still need to install the plugins you need using the Cordova CLI or Ionic CLI. Ionic Native will notify you if you are missing a plugin, and will also provide you with the plugin name to install.

<h4 id="Using_Ionic_Native_Wrappers">Use Ionic Native Wrappers</h4>
We can call the functions of that plugin directly without the requirement of performing any checks, such as ensuring that the `deviceready` event has fired.

```js
// Example with plain JS
window.IonicNative.Camera.getPicture().then(
  function(res) {
    console.log("We have taken a picture!");
    // Run code to save the picture or use it elsewhere
  }
);

// Example with AngularJS
angular.module('MyApp', ['ngCordova'])
.controller('MyController', function(){
    ngCordova.Camera.getPicture().then(
      function(res) {
        console.log("We have taken a picture!");
        // Run code to save the picture or use it elsewhere
      }
    );
});


// Example with TypeScript and Angular 2.0
import {Camera} from 'ionic-native';
Camera.getPicture().then(
  res => {
    console.log("We have taken a picture!");
  }
);
```
