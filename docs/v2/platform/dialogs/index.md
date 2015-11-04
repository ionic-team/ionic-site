---
layout: v2_fluid/docs_base
category: platform
id: dialogs
title: Dialogs | Ionic Native Plugins
header_title: Dialogs
header_sub_title: Open device dialogs and prompts
---

<h1 class="title">Dialogs</h1>

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/dialogs/index.md'>
  Improve this doc
</a>

Open device-specific dialogs and prompts.

### Install the plugin

```bash
$ ionic plugin add cordova-plugin-dialogs
```


```javascript
import {Dialogs} from 'ionic/ionic'

class MyPage {
  doAlert() {
    Dialogs.alert('Hello');
  }
  doConfirm() {
    Dialogs.confirm('Do you want to click that?').then((resp) => {
      console.log(resp);
    });
  }
  doPrompt() {
    Dialogs.prompt('What is your fav ice cream?').then((resp) => {
      console.log(resp);
    });
  }
}
```
