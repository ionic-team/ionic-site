---
layout: v2_fluid/docs_base
category: storage
id: Storage
title: Storage | Ionic Native Plugins
header_title: Storage
header_sub_title: Save and load data
---


<h1 class="title">Storage</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/storage/index.md'>
  Improve this doc
</a>

```bash
$ ionic plugin add cordova-sqlite-storage
```

The `Storage` service makes it easy to persist and load data on the device. The `Storage` service is an abstraction
over specific storage engines. We provide two default engines: `SqlStorage` (based on SQLite) and `LocalStorage`. We highly recommend the SQLite based
storage engine for long term storage. Local Storage should *only* be used for temporary, cached data that you can afford
to lose.

The Storage service comes with a simple key/value API, which is what the vast majority of apps will need for simple storage.

Some engines, like the `SqlStorage` engine, expose a more powerful query system underneath. That means you can perform
full SQL queries if you like.

```javascript
import {Storage, SqlStorage, IonicPlatform} from 'ionic/ionic'

class MyPage {
  constructor() {
    this.storage = new Storage(SqlStorage);
  }
  setName(name) {
    this.storage.set('name', name);
  }
  getName() {
    this.storage.get('name').then(name => {
      // Name
    })
  }
  getUsers() {
    // If using the SqlStorage engine, we can perform arbitrary SQL queries
    this.storage.query('select * from users').then((data) => {
    })
  }
}
```
