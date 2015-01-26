---
layout: post
title:  "Looking Sharp on the iPhone 6"
date:   "2015-01-20 14:00:00"
categories: ionic
author: '<img src="https://en.gravatar.com/userimage/4492737/bd46f8f2d8d12133c4df6c0441bc7ef1.jpg" class="author-icon"><a href="http://twitter.com/perrygovier" target="_blank">@perrygovier</a>'
published: true
---

![Cordova on the iPhone 6](/img/blog/iphones-header.png)

Now that Apple’s new iPhone 6 and 6 Plus are on the scene, developers must consider new screen resolutions when building iOS apps. Ionic’s styles are fully responsive out of the box, so there’s no issue there. However, when testing an app on a shiny new iPhone 6, your app will look slightly blurry by default, displaying at the resolution of the iPhone 5 series and anti-aliasing the difference. That’s wasted pixels! There are two things you must do for your app to display full resolution on the iPhone 6 family of phones.

<!-- more -->

First, you may need to update the version of Cordova your project uses. The Ionic CLI makes this process a breeze. Simply run the following commands in a terminal window. Note that the first command may require sudo.

```bash
npm update -g ionic cordova
cd ~/Development/myProjectDirectory
ionic platform update ios
```

The next step is to add the appropriate splash screen. XCode will decide whether your app can take advantage of the full iPhone 6 and 6 Plus resolutions, based on whether appropriately sized splash screens have been added to your project. The Cordova update you just installed also includes the ability to specify splash screens via the confix.xml file, like this:

```xml
<platform name="ios">
    <splash src="pathToImage/Default-568h@2x~iphone.png" width="640" height="1136"/>
    <splash src="pathToImage/Default-667h.png" width="750" height="1334"/>
    <splash src="pathToImage/Default-736h.png" width="1242" height="2208"/>
…
```

The Ionic CLI makes that even simpler. As described in greater detail by [Mike Hartington](https://twitter.com/mhartington) in [Automating Icons and Splash Screens](http://ionicframework.com/blog/automating-icons-and-splash-screens/), the new `resources` command makes it easy to create a splash screen. Simply put an image titled “splash” in your project’s resources directory (you may need to create one), and run:

```bash
ionic resources
```

This will automatically create iPhone 6 or 6 Plus-sized splash screens and update your config.xml. If you have images already prepared, just make sure you link to an image titled `Default-667h.png`, with the dimensions 750px by 1334px for the iPhone 6, and `Default-736h.png`, with the dimensions 1242px by 2208px for the iPhone 6+, and that they’ve been added to your project’s config.xml.

That’s it! Next time you run `ionic prepare`, `ionic run`, or `ionic build`, the splash screens will be applied to your project, and your app can take full advantage of the new screen real estate offered to the new iPhone 6 series phones.




