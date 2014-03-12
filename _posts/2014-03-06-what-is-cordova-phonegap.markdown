---
layout: post
title:  "The Last Word on Cordova and PhoneGap"
date:   "2014-03-06 08:00:00"
hide_date: true
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

As we've built out Ionic, we've gotten a ton of questions about [Cordova](http://cordova.apache.org/) and [PhoneGap](http://phonegap.com/). These range from confusion with the naming (are Cordova and PhoneGap the same thing?), to a misunderstanding of the goals and capabilities of these projects.

### A quick history lesson

PhoneGap proper was created around 2009 by a startup called Nitobi as an open source way to access the "native" environment through an embedded Web View in a native app. The goal of the project was to make it possible to build the bulk of a mobile app experience with pure web technologies like HTML5, CSS, and Javascript, but still be able to call into native code when necessary.

In 2011 Adobe purchased Nitobi and with it the rights to the PhoneGap brand, and the open source core was donated to the [Apache Software Foundation](http://apache.org/) under the name Cordova.

<!-- more -->

### A rose by any other name

So what is the difference between Cordova and PhoneGap? One helpful analogy Adobe uses is Cordova is to WebKit as PhoneGap is to Chrome. PhoneGap is Cordova plus extra Adobe stuff.

At first, the differences between Cordova and PhoneGap were minimal. But Adobe always had plans to build out a proprietary set of services around the PhoneGap ecosystem, and has started to execute on that plan with PhoneGap Build.

So, when you start a new hybrid app project, you can either decide to use Cordova proper, or enter into Adobe's ecosystem and use the PhoneGap distribution of Cordova.

Note: Ionic uses Cordova proper at the core, we do not use PhoneGap at all (though it can be used just fine).

### You don't know what I'm capable of!

At its core, Cordova offers a simple but powerful API to call Javascript functions that map to native code or plugins. This means you can transfer any kind of data from native land into web land. 

This is something people don't always realize. Cordova is capable of pretty much anything you need to do on mobile. It's a powerful low-level API that comes with a set of pre-made, simple plugins to do things like access the camera or compass.

So when someone says that Cordova can't do the same things other native apps can do, they are wrong. The only limitation is what plugins are currently available, and your ability or interest in building custom ones for your app.

### Part technology, part dream

So if Cordova can do anything native apps can do, why doesn't it seem like it? For that, we have to look at the vision of the project.

Adobe has always said that the big goal of Cordova is to make itself obsolete. Basically, that Cordova's feature APIs would eventually be implemented by browser vendors, making the project less necessary.

Take, for example, the Geolocation API. While GPS on mobile was made popular with the iPhone, mobile browsers didn't support it well until later. So, Cordova had a bridge for that, through a `navigator.geolocation` Javascript API that they expected to become the standard in the future. Cordova uses the native browser implementation when available, or uses the bridge when it's not.

The same thing can be seen today with the `navigator.camera` API. This is a very simple API for getting a picture from a device's camera. You might imagine browsers offering this as a standard in the future.

So, the vision for the core plugins of Cordova is to offer simple functionality that would fit into the API of the browsers of the future, one day making the Cordova implementation obsolete!

### One size fits all?

I personally disagree with that vision. While I think we *should* be working toward a better, more standard browser API, we should also be enabling the creation of really custom and creative hybrid apps. To do that, we need more generic native-to-browser plugins and APIs in Cordova.

This is the difference between the existing `navigator.camera.getPicture()` API and a theoretical `navigator.camera.getPhotos(start, count, size)`. The first only lets you grab *one* photo through a hard-coded UI you have no control over, and the latter leaves it up to you to build the experience, merely streaming the data from the native layer to your Javascript.

Luckily, Cordova has a high quality plugin API, we just need more great plugins that expose *data* from the native layer, not just hard coded features or UIs. While the default plugins are very simple and easy to use, they don't scale well when you want to build something really custom (like the Instagram app).

This is one of the big goals of Ionic: to provide a broader set of more generic Cordova plugins to enable the creation of more complex and custom apps. It won't be easy, but we've already started on this quest and will be releasing a lot of interesting demos in the coming months really showing the capabilities of Cordova.

### Readers Digest

Let's recap:

Cordova is the community powered version of PhoneGap, which is Adobe's *productized* version and ecosystem on top of Cordova. Ionic uses Cordova not PhoneGap for our core tools.

Cordova is both a low-level native app to browser API, and a set of default plugins that provide simple features to your Cordova apps in the spirit of simple browser APIs.

Cordova can do pretty much anything a native app can do, it just needs the right plugins that send the right data to your web code. We need more developers building these generic plugins, and we will continue to see more of them over time.

Oh, and Cordova is awesome and we love it here at Ionic!
