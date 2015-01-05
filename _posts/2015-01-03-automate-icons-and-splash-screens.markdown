---
layout: post
title:  "Automate Icons and Splash Screens"
date:   "2015-01-05  2:00:00"
categories: angularjs, ionic, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/495587171332403200/tO9oMmCn.png" class="author-icon"><a
href="https://twitter.com/mhartington">Mike</a>'
published: false
---

What is the first thing that users see when they download your app? What about after they install it and start the app?
An apps icon and splash screen (launch image) is an important part of any app, yet making them is tedious. There are
numerous icons needed for iOS and Android and then you have to deal with splash screens with all their different sizes.
It’s a very time consuming and a pain. **No more though!** Now that Ionic’s CLI has the ability to generate app icons
and splash screens.

<!-- more -->
### Generate those Resources
With the new CLI, all that is needed is a resource directory and two images. These images can be either a `.png` file, a
Photoshop `.psd` file, or an Illustrator `.ai`, file and named icon and splash. The `ionic resources` command will
generate the icons and splash screen images for each platform setup in the project, sending them to Ionic's image
resizing and cropping server so that developers don't have to install extra dependencies.

```bash
$ ionic resources
```

After the images are generated, the CLI will go ahead and update the `config.xml` to [**include the icons and splash
screens**](http://cordova.apache.org/docs/en/4.0.0/config_ref_images.md.html#Icons%20and%20Splash%20Screens) so that
will be transferred over in Cordova's build process. Note, this process requires Cordova CLI version to be at least 3.6 

Say you only need to update one of the resources? Or you only want to generate icons and not both. Well the `ionic
resources` command has two flags that will allow you to target each asset instead of generating both.
```bash
$ ionic resources --icon
$ ionic resources --splash
```

### Image sizes
In order to be able to crop and resize images to fit the various needs of each platform, icons and splash screen images
should meet a minimum sizes.

The icon image's minimum dimensions should be 192x192 px, and should have no rounded corners. Note that each platform
will apply it's own mask and effects to the icons. For example, iOS will automatically apply it's custom rounded
corners, so the source file should not already come with rounded corners.

Splash screen dimensions vary for each platform, device and orientation, so a square source image is required the
generate each of various sizes. The source image's minimum dimensions should be 2208x2208 px, and its artwork should be
centered within the square, knowing that each generated image will be center cropped into landscape and portrait images.
The splash screen's artwork should roughly fit within a center square (1200x1200 px). This
[**template**](http://code.ionicframework.com/resources/splash.psd) provides the recommended size and guidelines of the
artwork's safe zone.


### Platform Specifics
Want a icon different for iOS and Android? No problem, we got that covered as well. To use different source images for
individual platforms, place the source image in the respective platform's directory. To use a different icon for
Android, it should follow this path: `resources/android/icon.png`, and a different image for iOS would use this path:
`resources/ios/icon.png`. This way, you could have the iOS icon get the native rounded corners and an Android icon could
use a transparent background.


Making a developer's life easier is the driving force behind Ionic and this updates proves it. Update your CLI and try
out the resource generator today.

```bash
$ npm install -g ionic
```
### What's Next
As mentioned in our Beta 14 post, we've been working on adding Crosswalk intergration into our CLI. Josh has been
hard at work at this and should be landing in the CLI as a beta feature. Keep a look out for Crossswalk in the CLI soon!


- [Ionic-CLI Resource Generator Docs](https://github.com/driftyco/ionic-cli#icon-and-splash-screen-image-generation)
- [Cordova Icons and Splash Screens Docs](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html#Icons%20and%20Splash%20Screens)
- [Splash screen photoshop template](http://code.ionicframework.com/resources/splash.psd)
