---
layout: v2/docs_base
id: utils
title: Storage - Ionic 2
header_title: Storage
header_sub_title: Persisting and loading data
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/utils/storage/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Storage</h1>

All apps need to save and load data at some point. Ionic makes it easy with utilities for temporary storage (caching), and long term storage. Ionic storage services have a convenient key/value API, and some storage engines provide additional powerful operations (like SQL queries).

# Persistent Storage

For persistent storage, use the `SqlStorage` service, which uses SQLite and/or WebSQL (dev mode only).

```javascript
import {Storage, SqlStorage} from 'ionic/ionic';

export class MyApp {
  constructor() {
    this.storage = new Storage(SqlStorage);
  }
}
```


# Local Storage

For *temporary* storage, use the `LocalStorage` service:

```javascript
import {Storage, LocalStorage} from 'ionic/ionic';

export class MyApp {
  constructor() {
    this.storage = new Storage(LocalStorage);
  }
}
```

Note: _do not_ use Local Storage for data that you cannot afford to lose! Some operating systems (like iOS) will clear local storage when device storage gets low.

# Setting values

To store a value for a given key, use `set()`

```javascript
setName(name) {
  this.storage.set('name', name);
}
```

# Getting values

To retrieve a value for a given key, use `get()`

```javascript
getName(name) {
  this.storage.get('name').then((value) => {
    // name is available here
  })
}
```

# SQL Queries

When using the `SqlStorage` engine, a full query API is available:

```javascript
saveUser(user) {
  this.storage.query('insert into users(name, email) values (?, ?)', [user.name, user.email]).then(() => {
    // Saved
  })
}

getUser() {
  this.storage.query('select * from users where email = ?', [user.email]).then((users) => {
  });
}
```

# iCloud Support

iOS supports a variety of storage strategies that use (or don't use) iCloud. By default, Ionic storage
will not back up to iCloud, since storing arbitrary data in an iCloud-backup location is one of the
most common ways apps are rejected from the app stores.

If you have a logical `document` that user create and then might want to back up (for example, images, text documents, etc.), set the `SqlStorage` engine
to use the proper location:

```javascript
this.storage = new Storage(SqlStorage, {
  backupFlag: SqlStorage.DOCUMENTS
})
```

See the [Cordova SQLite](https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database) documentation for more info.
