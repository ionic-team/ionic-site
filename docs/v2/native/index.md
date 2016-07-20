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

<h1 id="Overview">Ionic Native</h1>
Ionic Native is a curated set of ES5/ES6/TypeScript wrappers for Cordova/PhoneGap plugins that make adding any native functionality you need to your [Ionic](http://ionicframework.com/), Cordova, or Web View mobile app easy.

<h3 id="Promises_and_Observables">Promises and Observables</h3>
Ionic Native wraps plugin callbacks in a Promise or an [Observable](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), providing a common interface for all plugins and ensuring that native events trigger change detection in Angular 2.

```ts
import {Geolocation} from 'ionic-native';

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
To add Ionic Native to your app, run following command:
```
npm install ionic-native --save
```
Note that Ionic Native is included by default with every Ionic 2 app.

<h3 id="Usage">Usage</h3>

<h4 id="Importing_Ionic_Native">Import Ionic Native</h4>
If you are using **ES6/TypeScript**, you do not need to add any script tags in your index.html. Just import a plugin from the `ionic-native` npm package and start using it.

If you are using **Angular 1.x** or plain **ES5 JavaScript**, you need to add `ionic.native.js` to your index.html before your application's main code.

<h4 id="Install_Plugins_Needed">Install The Needed Plugins</h4>
Ionic Native will **not** install plugins for you automatically. You still need to install the plugins you need using Cordova CLI or Ionic CLI. Ionic Native will notify you if you are missing a plugin, and will provide you with the plugin package name to install.

It is recommended to follow the installation instruction on each plugin's documentation, as some plugins require additional steps to fully install.

<h4 id="Using_Ionic_Native_Wrappers">Examples</h4>

Ionic Native will work with any Cordova app as long as you have Promise support. It can be used with ES5, ES6, or TypeScript. The library also generates Angular 1 services automatically if you are using it with Angular 1 / Ionic 1. Below are examples demonstrating different implementations.

```js
// ES5 JavaScript
document.addEventListener('ondeviceready', function(){
  IonicNative.Camera.getPicture().then(
    function(res) {
      console.log("We have taken a picture!", res);
      // Run code to save the picture or use it elsewhere
    },
    function(err){
      console.error("Error taking a picture", err);
    }
  );
});

// Angular 1 / Ionic 1
// first we import 'ionic.native' module into our app
angular.module('MyApp', ['ionic.native'])
// then we import the service for the plugin we wish to use
// the name of the service is the same name for ES5/ES6/TypeScript with a $cordova prefix
// for example, the Camera plugin becomes $cordovaCamera in Angular 1
.controller('MyController', function($cordovaCamera,  $ionicPlatform){
    // wait for ondeviceready, or use $ionicPlatform.ready() if you're using Ionic Framework 1
    $ionicPlatform.ready(function(){
       // now we can call any of the functionality as documented in Native docs
      $cordovaCamera.getPicture().then(
        function(res) {
          console.log("We have taken a picture!", res);
          // Run code to save the picture or use it elsewhere
        },
        function(err){
          console.error("Error taking a picture", err);
        }
      );
    });
});

// ES6 / TypeScript / Ionic 2 / Angular 2
// Import the plugin you need to use from 'ionic-native' package
import {Camera} from 'ionic-native';

// wait for `ondeviceready` or use `platform.ready()` if you're using Ionic Framework 2
this.platform().then(() => { // we're assuming you injected platform in your constructor
  Camera.getPicture().then(
    res => console.log("We have taken a picture!"),
    err => console.error("Error taking picture", err)
  );
});
```
