---
layout: "fluid/docs_base"
versionHref: "/docs/"
path: ""
category: native
id: browser
title: "Using Ionic Native Plugins in The Browser"
header_sub_title: "Harness the power of devices' native APIs"
searchable: false
---

<h3 id="Promises_and_Observables">Using Native Plugins in the Browser</h3>

Ionic Native comes with over 130 mobile Native SDK plugins that make it possible to build powerful Ionic apps that take full advantage of Native mobile SDKs on iOS, Android, and beyond.

Historically, it was difficult to test native functionality in the browser, requiring Ionic developers to test on a physical device or emulator, a rather slow process.

Ionic Native 3.0 now allows developers to mock and use native plugins in the browser through a simple override mechanic, making it easy to provide testing data from a sensor, or to access a native-only API such as HealthKit.

This means that a large majority of an Ionic app can now be built entirely in the browser without deploying to device or emulator. A level of development speed unheard of in mobile.

<h3 id="Mocking_Plugins">Mocking Plugins</h3>

To use an Ionic Native plugin in the browser and `ionic serve` session, you just need to extend the original plugin class and override the methods you'd like to mock.

Let's try mocking the `Camera` plugin to return an image instead of using the native Camera which may not be available outside of a device context.

First import the `Camera` class in our `src/app/app.module.ts` file:

```ts
import { Camera } from '@ionic-native/camera';
```

Then create a new class that extends the `Camera` class with a mock implementation:

```ts
class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}
```

Finally, override the previous `Camera` class in our `providers` for this module:

```ts
providers: [
  { provide: Camera, useClass: CameraMock }
]
```

Here's the full example:

```ts
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Camera } from '@ionic-native/camera';

class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: Camera, useClass: CameraMock }
  ]
})
export class AppModule {}
```

<h3 id="Where_To_Go">Where to go from here</h3>

The `Camera` example above shows the pattern for overriding and mocking plugins. Pick any plugin available in Ionic Native 3.0 or above, import it, then provide a custom overriding provider which will be called instead of the
native implementation.

In this provider, custom data can be provided for quick testing. Some ideas include returning test barcode data from `BarcodeScanner.scan()`, implementing a fake connection and data transfer system for a device using `BluetoothSerial`, or implement a finger print scanning flow for iOS and Android by overriding `TouchID` and `AndroidFingerprintAuth`.
