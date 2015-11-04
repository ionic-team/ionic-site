---
layout: v2_fluid/docs_base
category: platform
id: Loading
title: Loading | Ionic Native Plugins
header_title: Loading
header_sub_title: Show loading indicators
---

<h1 class="title">Loading</h1>

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/loading/index.md'>
  Improve this doc
</a>

Show native loading and progress indicators

### Install the plugin

```bash
$ ionic plugin add cordova-plugin-progressindicator
```

```javascript
import {Loading} from 'ionic/ionic'

class MyPage {
  startLoading() {
    Loading.show(true, 'Waiting...') // Dim the background and show label
  }
}
```
