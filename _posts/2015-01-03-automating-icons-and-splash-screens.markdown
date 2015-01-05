---
layout: post
title:  "Automating Icons and Splash Screens"
date:   "2015-01-05  2:00:00"
categories: angularjs, ionic, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/495587171332403200/tO9oMmCn.png" class="author-icon"><a
href="https://twitter.com/mhartington">Mike</a>'
published: true
---

<img class="showcase-image" src="/img/blog/splash-header.jpg" style="margin-top:-20px;">


What’s the first thing users see when they download your app? What about after they install it and start the app?

An app icon and splash screen (launch image) are important parts of any app, yet making them used to be incredibly
tedious. You needed numerous icons for iOS and Android, and then you had to deal with splash screens and all their
different sizes.


To save you the stress of dealing with all that, we’ve made it possible for you to generate app icons and splash screens
via the Ionic CLI.

<!-- more -->
### Generate those Resources
With the new CLI, all you need is a resource directory and two images. These images can be  `.png` files, Photoshop
`.psd` files, or Illustrator `.ai` files, named icon.png (for example) and splash.png. With the images in a resources
directory, `./resources`, the `ionic resources` command will generate the icons and splash screen images for  each
platform setup in the project, sending them to Ionic's image resizing and cropping server, so you don't have to  install
extra dependencies.

```bash
$ ionic resources
```

After the images are generated, the CLI will update the `config.xml` to [include the icons and splash
screens](http://cordova.apache.org/docs/en/4.0.0/config_ref_images.md.html#Icons%20and%20Splash%20Screens), so they
will be transferred over in Cordova's build process. NOTE: This process requires Cordova CLI version 3.6 or higher.

If you only need to update one of the resources, or you only want to generate icons and not both, the `ionic resources`
command has two flags that allow you to target each asset, instead of generating both.

```bash
$ ionic resources --icon
$ ionic resources --splash
```

### Image Sizes
In order to be able to crop and resize images to fit the various needs of each platform, icons and splash screen images
should meet a minimum size requirement.

The icon image's minimum dimensions should be 192x192 px and should have no rounded corners. Note that each platform
will apply its own mask and effects to the icons. For example, iOS will automatically apply its custom rounded corners,
so the source file should not already come with rounded corners.

Splash screen dimensions vary for each platform, device, and orientation, so a square source image is required to
generate each of the various screen sizes. The source image's minimum dimensions should be 2208x2208 px, and the artwork
should be centered within the square, because each generated image will be center cropped into landscape and portrait
images.
The splash screen's artwork should roughly fit within a center square (1200x1200 px). This
[template](http://code.ionicframework.com/resources/splash.psd) provides the recommended size and guidelines about
artwork's safe zone.


### Platform Specifics
Want different icons for the iOS and Android versions of your app? No problem; we’ve got that covered, too. To use
different source images for individual platforms, place the source image in the respective platform's directory. To use
a different icon for Android, the image should follow this path: `resources/android/icon.png`, and the image for iOS
should use this path: `resources/ios/icon.png`. This way, you can have an iOS icon with native rounded corners and an
Android icon with a transparent background.

This is just one more way Ionic aims to make developers’ lives easier, not to mention more fun. Update your CLI and try
out the resource generator today.

```bash
$ npm install -g ionic
```
### What's Next
As we mentioned in our Beta 14 blog post, we've been working on adding Crosswalk integration for Android into our CLI.
Josh has been hard at work on this, and it will be landing in the CLI as a beta feature soon. Keep an eye on the CLI!


- [Ionic-CLI Resource Generator Docs](https://github.com/driftyco/ionic-cli#icon-and-splash-screen-image-generation)
- [Cordova Icons and Splash Screens
  Docs](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html#Icons%20and%20Splash%20Screens)
- [Splash screen photoshop template](http://code.ionicframework.com/resources/splash.psd)

