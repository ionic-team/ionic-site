---
layout: v2_fluid/docs_base
category: platform
id: Keyboard
title: Keyboard | Ionic Native Plugins
header_title: Keyboard
header_sub_title: Control the device keyboard
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/keyboard/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Keyboard</h1>

Show native loading and progress indicators

### Install the plugin

```bash
$ ionic plugin install ionic-plugin-keyboard
```

Control the device keyboard

```javascript
import {Keyboard, IonicPlatform} from 'ionic/ionic'

class MyPage {
  constructor(platform: IonicPlatform) {

    platform.ready().then(() => {
      // Hide the accessory bar (our default)
      Keyboard.setAccessoryBarVisible(false)
    })

  }
  userDidSomething() {
    // In case you want to programatically close the keyboard
    Keyboard.close()
  }
}
```
