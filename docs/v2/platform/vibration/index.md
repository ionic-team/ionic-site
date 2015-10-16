---
layout: v2_fluid/docs_base
category: platform
id: Vibration
title: Vibration | Ionic Native Plugins
header_title: Vibration
header_sub_title: Vibrate the device
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/vibration/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Vibration</h1>

```bash
$ ionic plugin install cordova-plugin-vibration
```

Vibrate the device. Pretty simple.

```javascript
import {Vibration} from 'ionic/ionic'

class MyPage {
  vibrate() {
    // iOS doesn't support the duration or pattern param
    Vibration.vibrate(3000);
  }
}
```
