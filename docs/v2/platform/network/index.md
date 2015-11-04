---
layout: v2_fluid/docs_base
category: platform
id: Network
title: Network | Ionic Native Plugins
header_title: Network
header_sub_title: Access network information
---


<h1 class="title">Network</h1>

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/network/index.md'>
  Improve this doc
</a>

### Install the plugin

```bash
$ ionic plugin add cordova-plugin-network-information
```

```javascript
import {Network, Events} from 'ionic/ionic'

class MyPage {
  constructor(events: Events) {
    var isOnline = Network.isOnline();

    // Respond to online/offline changes
    events.subscribe('app:offline', () => {
      // App is offline
    })

    events.subscribe('app:online', () => {
      // App is online
    })
  }
}
```
