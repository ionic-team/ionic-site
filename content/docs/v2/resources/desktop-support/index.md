---
layout: v2_fluid/docs_base
category: resources
id: desktop-support
title: Desktop Support in Ionic
header_sub_title: Ionic Resources
---

### Desktop Support in Ionic

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/content/docs/v2/resources/desktop-support/index.md'>
  Improve this doc
</a>


While Ionic first came on to the scene as a framework for building mobile apps, it's quickly become a viable solution for building progressive web apps for desktop and mobile web. With this, there are some points to consider to make sure an Ionic app can work smoothly in both a native environment and mobile web environment.


### Layout

Layout is something that most people don't even notice in an app, but can have a big impact on experience and usability. Consider this pretty common UI pattern.


```html
<ion-header>
...
</ion-header>
<ion-content>
  <ion-list>
    <ion-item>Item 01</ion-item>
    <ion-item>Item 02</ion-item>
    <ion-item>Item 03</ion-item>
    <ion-item>Item 04</ion-item>
    <ion-item>Item 05</ion-item>
  </ion-list>
</ion-content>
```

Now this will just render 5 list items, all with a width of 100%. Now though this may look great on a mobile phone, viewing this on a desktop browser is a different story. While mobile devices all have different screen sizes, they tend to fall into a range of 350-600px in width. Compare that to a desktop screen size of anywhere between 720px to 1080px, and sometimes even more, and you get a different experience.

The items become stretched and distorted because of the wide screen width. To improve this experience, consider using the `ion-grid` component.

We can rewrite this list view into something more usable on largers screens.

```html
<ion-content>
  <ion-grid fixed>
    <ion-list>
      <ion-item>Item 01</ion-item>
      <ion-item>Item 02</ion-item>
      <ion-item>Item 03</ion-item>
      <ion-item>Item 04</ion-item>
      <ion-item>Item 05</ion-item>
    </ion-list>
  </ion-grid>
</ion-content>
```

By wrapping our list in a grid, we're wrapping the Ionic grid system to our layout. By adding the attribute `fixed` we're also telling our grid that it should have fixed size, perfect for desktop.

Now the grid can do more with the addition of `ion-row` and `ion-col`, which allow us to add grid item. Similar to something like Bootstrap, we can define a grid layout where the columns in grid can besized at certain breakpoints.

```html
<ion-grid>
  <ion-row>
    <ion-col
      col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3
      *ngFor="let item of [0,1,2,3,4,5]">
      <ion-card>{{item}}</ion-card>
    </ion-col
  <ion-row>
</ion-grid>
```

There'a bit going on here so let's disect it a bit.

- The `ion-col` gets its width by reading the `col-<col-size>` attributes added to it.
- The `col-` attribute can accept a size argument, `col-<breakpoint>-<col-size>`, setting its size for the break point.
- If you apply a width without a breakpoint argument, it assumes the smallest break point, `xs`, so `col-12` === `col-xs-12`.

A living example of this is the example app, [Ionic Confernce](https://github.com/driftyco/ionic-conference-app/blob/master/src/pages/speaker-list/speaker-list.html) which uses the grid for it's speaker view.

### Storage

Most apps at some point will need to store some sort of data locally. Be it storing some json form an XHR request, or saving user auth token, you have many differernt storage options that you could use. On top of this, if you're running your app in a naitve environment, you can create a full SQLite database and store data there. Now all these different storage mechanisms have their benefits and defects, but we shouldn't have to worry about that.


In this case, [Ionic's Storage library](https://github.com/driftyco/ionic-storage) is a perfect canidate for our multi-environment use case. Built ontop of the well tested [LocalForage](https://github.com/localForage/localForage) library, Ionic's storage class provides an adatable storage mechanism that will pick the best storage solution for the current run time.


Currently this measn it will run through SQLite for native, IndexDB (if available), WebSql, or Local Storage. By handling all of this, it frees you up to just write to storage using a sane API.


```ts
class MyClass{
  constructor(public storage: Storage){}

  setData(key, value){
    this.storage.set(key, value)
    .then(res => console.log(res))
  }
  getData(key){
    this.storage.get(key)
    .then(keyVal => console.log('Key is', keyVal))
  }
}
```

There are also other storage solutions out there as well, such as PouchDB, which provide a similar, adaptable storage mechanism.

### Plugins

In a native environment, you're bound to make calls to some sort of native API. But in a web environment, these API calls wont work since there's no native bridge. There are a few way to handle this.


1. Use Ionic Native plugins when possible.

Ionic Native has it's own internal logic to detech if it is inside of a native environment. If it's not, instead of throwing a runtime error, it will simple print a warning informing you of the situation. Now this wont break your app and you continue to work as expected.

2. Detect native platform.

In your apps logic, when ever you need to make a native, it's a safe idea to alway check if you're in a native environment first. For example:

```js
this.platform.ready()
.then(()=>{
    if(this.platform.is('cordova')){
      // make your native calls
    } else {
      // handle thing accordingly
    }

})
```

This bit of psuedo code can be a big bit of help when target environments that you're not sure if you'll have access to native APIs.

3. Fall back to browser base APIs

May native APIs that people tend to use (for example, the File API), are availble in the browser these days. The APIs are always improving and catching up to native, so be sure to research them. Taking the fist two points into consideration, we can create a nice experience that can adpat for the platform you're on.


### Parting words

This article only touchs on a few basic concepts, but there are many things to consider when making an app that is truly cross platform and cross environment.

As more common patterns are solidified, they will be documented here as a point of reference.
