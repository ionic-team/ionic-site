---
layout: v2_fluid/docs_base
category: platform
id: applinks
title: App Links | Ionic Native Plugins
header_title: App Links
header_sub_title: Check for and launch installed apps
---

<h1 class="title">App Links</h1>

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/applinks/index.md'>
  Improve this doc
</a>

### Install the plugin

```bash
$ ionic plugin add com.lampa.startapp
```

`AppLinks` makes it easy to check for installed apps on the user's device, and open those apps. Due to the way Android and iOS register apps, both platforms require different launch methods.

```javascript
import {AppLinks, IonicPlatform} from 'ionic/ionic'

class SharePage {
  constructor(platform: IonicPlatform) {
    this.platform = platform;
  }

  openTwitter() {
    if(this.platform.is('ios') {
     AppLinks.check('twitter://').then((installed) => {
       AppLinks.openIOS('twitter://user?screen_name=ionicframework')
     }, (err) => {
     })
   } else if(this.platform.is('android') {
     AppLinks.check('com.twitter.android').then((installed) => {
       AppLinks.openAndroid([["action", "VIEW"], ['twitter://user?screen_name=ionicframework']])
     })
   }
  }
}
```
