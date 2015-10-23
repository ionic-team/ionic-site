---
layout: v2_fluid/docs_base
category: platform
id: device
title: Device | Ionic Native Plugins
header_title: Device
header_sub_title: Access device information
---

<h1 class="title">Device</h1>

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/device/index.md'>
  Improve this doc
</a>

Get information about the underlying device and platform.

### Install the plugin

```bash
$ ionic plugin install cordova-plugin-device
```

```javascript
import {Device} from 'ionic/ionic'

class MyPage {
  constructor() {
    var device = Device.getDevice();
    /*
    Device info:
    device.name
    device.model
    device.platform
    device.uuid
    device.version
    */
  }
}
```
