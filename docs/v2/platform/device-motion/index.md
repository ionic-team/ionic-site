---
layout: v2_fluid/docs_base
category: platform
id: device-motion
title: Device Motion | Ionic Native Plugins
header_title: Device Motion
header_sub_title: React to device motion changes
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/device-motion/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Device Motion</h1>

React to device motion changes.

### Install the plugin

```bash
$ ionic plugin install cordova-plugin-device-motion
```

```javascript
import {DeviceMotion, IonicPlatform} from 'ionic/ionic'

class MyPage {
  constructor(platform: IonicPlatform) {
    platform.ready().then(() => {
      let watch = DeviceMotion.watchAcceleration();

      watch.source.subscribe((data) => {
        // data.acceleration.x
        // data.acceleration.y
        // data.acceleration.z
      })

      watch.clear() // to stop watching
    });
  }
}
```
