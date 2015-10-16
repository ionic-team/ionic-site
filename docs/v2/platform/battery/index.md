---
layout: v2_fluid/docs_base
category: platform
id: battery
title: Battery Status | Ionic Native Plugins
header_title: Battery Status
header_sub_title: Check battery status
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/battery/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Battery Status</h1>

Get information about the battery status of the device.

### Install the plugin

```bash
$ ionic plugin install cordova-plugin-battery-status
```


```javascript
import {Battery} from 'ionic/ionic'

class MyPage {
  constructor() {
    Battery.getStatus().then((data) => {
      console.log(data.charging, data.level, data.chargingTime, data.dischargingTime)
    });
  }
}
```
