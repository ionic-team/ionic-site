---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-deploy-api
title: Deploy Plugin API - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Using the Deploy API

<div class="alert alert-danger" role="alert">
Before you begin using the API you'll need to make sure you've already
<a href="/docs/pro/deploy/setup/#installation" style="color: #4a8bfc;">installed and configured the Pro Client & Plugin.</a>
</div>

While the Ionic Cordova plugin can handle all of your updates and perform them for you,
sometimes you may want to customize how this works.
Some examples of things you may want to do are:

- Allow users to subscribe to different Channels for Beta Features, etc.
- Manage the update process yourself (ex. Download updates on login, Apply updates on logout or Check for updates every 30 minutes)
- Display what Channel the user is connected to

The Pro Client gives you access to everything you need to make these modifications,
and it's recommended that you always use the Pro Client instead of the Cordova plugin directly.

<div class="alert alert-warning" role="alert"><h4>Note: Async Await vs. ".then()"</h4>
<p>In all of the examples on this page you'll notice that we use Async/Await.
This automatically resolves promises inline for you and waits to perform the next action.
This is just an alternative to using `.then`. Async/Await just allows your code to be much more legible
(especially when you'd normally be chaining multiple promises) as it's read like a syncronous piece of code.
Here are two ways to write the same piece of code:</p>
<div markdown="1">
```js
Pro.deploy.info().then((info) => {
  console.log(info);
})

// is the same as

async getInfo(){
  const info = await Pro.deploy.info();
  console.log(info);
}

```
</div>
</div>

## Methods

<div class="alert alert-warning" role="alert"><h4>API Changes: </h4>
<div markdown="1">
Versions of the Pro Client `>=2.0.0` expose a new API and require `cordova-plugin-ionic >=5.0.0`.
This is the latest API and we highly recommend using it to take advantage of the new features, such as CDN and faster downloads.

To install the latest versions of both you can do the following:
```bash
npm install @ionic/pro@latest --save
cordova plugin add cordova-plugin-ionic@latest --save
```

For ease of migration we have released `1.1.0` of the Pro Client which requires `cordova-plugin-ionic@>=4.2.0` and exposes both the old and new API so
that you can incrementally replace the deprecated methods.

To install the backwards compatible version you can do the following
```bash
npm install @ionic/pro@legacy --save
cordova plugin add cordova-plugin-ionic@legacy --save
```
</div>
</div>

`Pro.deploy` contains many functions that can help you utilize Deploy inside of your app. Here's a rundown of each:

<div style="margin-top:15px;">

<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
<li role="v5api" class="active"><a href="#v5api" aria-controls="v5api" role="tab" data-toggle="tab">v5 API</a></li>
<li role="v4api"><a href="#v4api" aria-controls="v4api" role="tab" data-toggle="tab">v4 API (Deprecated)</a></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">

<div role="tabpanel" class="tab-pane active" id="v5api">

<div markdown="1" style="margin-top:15px;">
<!-- BEGIN v5 API -->

* [configure](#configure)
* [sync](#sync)
* [checkForUpdate](#checkforupdate)
* [downloadUpdate](#downloadupdate)
* [extractUpdate](#extract)
* [reloadApp](#reloadapp)
* [getCurrentVersion](#getcurrentversion)
* [getAvailableVersions](#getavailableversions)
* [deleteVersionById](#deleteversionbyid)

---

###  configure

▸ **configure**(config: *[DeployConfig](#deployconfig)*): `Promise`<`void`>

*__description__*: Update the default configuration for the plugin on the current device. The new configuration will be persisted across app close and binary updates.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [DeployConfig](#deployconfig) |  The new configuration for the plugin on this device. |

**Returns:** `Promise`<`void`>

```js
async configureDeploy() {
  const config = {
    'appId': 'YOUR_APP_ID',
    'channel': 'CHANNEL_NAME'
  }
  await Pro.deploy.configure(config);
}
```

___

###  sync

▸ **sync**(options: [SyncOptions](#syncoptions)): `Promise`<[SnapshotInfo](#snapshotinfo)>

*__description__*: This function performs an entire standard check, download, extract, and reload cycle rather than having to program it yourself. This should be used most of the time unless you need to customize the flow.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | [SyncOptions](#syncoptions) |  Options to call sync with to override the default update method. |

**Returns:** `Promise`<[SnapshotInfo](#snapshotinfo)> - The info of the currently applied update

```js
async performAutomaticUpdate() {
  try {
    const currentVersion = Pro.deploy.getCurrentVersion();
    const resp = await Pro.deploy.sync({updateMethod: 'auto'});
    if (currentVersion.versionId !== resp.versionId){
      // We found an update, and are in process of redirecting you since you put auto!
    }else{
      // No update available
    }
  } catch (err) {
    // We encountered an error.
    // Here's how we would log it to Ionic Pro Monitoring while also catching:

    // Pro.monitoring.exception(err);
  }
}
```

___

###  checkForUpdate

▸ **checkForUpdate**(): `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)>

*__description__*: Check for available updates for the currently configured app id and channel.

*__since__*: v5.0.0

**Returns:** `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)>

```js
async performManualUpdate() {
  const update = await Pro.deploy.checkForUpdate()
  if (update.available){
    // We have an update!
  }
}
```

___

###  downloadUpdate

▸ **downloadUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`string`>*): `Promise`<`string`>

*__description__*: Download the new files from an available update found by the checkForUpdate method and prepare the update.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`string`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`string`>

```js

async performManualUpdate() {
  const update = await Pro.deploy.checkForUpdate()
  if (update.available){
    await Pro.deploy.downloadUpdate((progress) => {
      console.log(progress);
    })
  }
}
```

___

###  extractUpdate

▸ **extractUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`string`>*): `Promise`<`string`>

*__description__*: Extract the files from an update downloaded with the downloadUpdate method to prepare for loading the app.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`string`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`string`>

```js
async performManualUpdate() {
  const update = await Pro.deploy.checkForUpdate()
  if (update.available){
    await Pro.deploy.downloadUpdate((progress) => {
      console.log(progress);
    })
    await Pro.deploy.extractUpdate((progress) => {
      console.log(progress);
    })
  }
}
```

___

###  reloadApp

▸ **reloadApp**(): `Promise`<`string`>

*__description__*: Reload the app if a more recent version of the app is available.

*__since__*: v5.0.0

**Returns:** `Promise`<`string`>

```js
async performManualUpdate() {
  const update = await Pro.deploy.checkForUpdate()
  if (update.available){
    await Pro.deploy.downloadUpdate((progress) => {
      console.log(progress);
    })
    await Pro.deploy.extractUpdate((progress) => {
      console.log(progress);
    })
    await Pro.deploy.reloadApp();
  }
}
```

___

###  getCurrentVersion

▸ **getCurrentVersion**(): `Promise`<[SnapshotInfo](#snapshotinfo)>

*__description__*: Get info about the currently deployed update.

*__since__*: v5.0.0

**Returns:** `Promise`<[SnapshotInfo](#snapshotinfo)>

```js
const info = await Pro.deploy.getCurrentVersion()
console.log(info)
// { 
//   'versionId': 'UUID_OF_ACTIVE_CODE',
//   'channel': 'CHANNEL_NAME',
//   'binaryVersion': 'X.X.X'
// }
```
___

###  getAvailableVersions

▸ **getAvailableVersions**(): `Promise`<[SnapshotInfo](#snapshotinfo)[]>

*__description__*: Get a list of the snapshots available on the device.

*__since__*: v5.0.0

**Returns:** `Promise`<[SnapshotInfo](#snapshotinfo)[]>

```js
async checkVersions() {
  const versions = await Pro.deploy.getAvailableVersions();
  console.log(versions);
  // [
  //   {
  //     'versionId': 'versionId1',
  //     'channel': 'CHANNEL_NAME',
  //     'binaryVersion': '1.0.1'
  //   },
  //   {
  //     'versionId': 'versionId2',
  //     'channel': 'CHANNEL_NAME',
  //     'binaryVersion': '1.0.1'
  //   },
  // ]
}
```
___

###  deleteVersionById

▸ **deleteVersionById**(versionId: *`string`*): `Promise`<`string`>

*__description__*: Remove the files specific to a snapshot from the device.

*__since__*: v5.0.0

**Parameters:**

| Param | Type |
| ------ | ------ |
| versionId | `string` | 

**Returns:** `Promise`<`string`>

```js
async deleteVersion() {
  const versions = await Pro.deploy.getAvailableVersions();
  Pro.deploy.deleteVersion(versions[0].versionId);
}
```

___

<!-- END v5 API -->
</div>
</div>

<div role="tabpanel" class="tab-pane" id="v4api">
<div markdown="1" style="margin-top:15px;">
<!-- BEGIN v4 API -->

* [init](#init)
* [checkAndApply](#checkandapply)
* [check](#check)
* [download](#download)
* [extract](#extract)
* [redirect](#redirect)
* [info](#info)
* [getVersions](#getversions)
* [deleteVersion](#deleteversion)

---

###  init

▸ **init**(config: *[DeployConfig](#deployconfig)*): `Promise`<`void`>

*__description__*: Update the default configuration for the plugin on the current device. The new configuration will be persisted across app close and binary updates.

*__deprecated__*: in v4.2.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [DeployConfig](#deployconfig) |  The new configuration for the plugin on this device. |

**Returns:** `Promise`<`void`>

```js
async initDeploy() {
  const config = {
    'appId': 'YOUR_APP_ID',
    'channel': 'CHANNEL_NAME'
  }
  await Pro.deploy.init(config);
}
```

___

###  checkAndApply

▸ **checkAndApply**(redirect: `boolean`, downloadProgressFunc: [CallbackFunction](#callbackfunction), extractProgressFunc: [CallbackFunction](#callbackfunction)): `Promise`<`string`>

*__description__*: This function performs an entire standard check, download, extract, and reload cycle rather than having to program it yourself. This should be used most of the time unless you need to customize the flow.

*__deprecated__*: in v4.2.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| redirect | `boolean` |  Whether or not to reload the app immediately if an update is available. |
| downloadProgressFunc | [CallbackFunction](#callbackfunction) |  A function which will recieve calls with a `number` representing the progress of the download. |
| extractProgressFunc | [CallbackFunction](#callbackfunction) |  A function which will recieve calls with a `number` representing the progress of the extract. |

**Returns:** `Promise`<[SnapshotInfo](#snapshotinfo)> - The info of the currently applied update

```js
async performAutomaticUpdate() {
    try {
      const resp = await Pro.deploy.checkAndApply(true, function(progress){
          this.downloadProgress = progress;
      });

      if (resp.update){
        // We found an update, and are in process of redirecting you since you put true!
      }else{
        // No update available
      }
    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
    }
  }
```

___

###  check

▸ **check**(): `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)>

*__description__*: Check for available updates for the currently configured app id and channel.

*__deprecated__*: in v4.2.0

**Returns:** `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)>

```js
async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    // We have an update!
  }
}
```

___

###  download

▸ **download**(progress?: *[CallbackFunction](#callbackfunction)<`string`>*): `Promise`<`string`>

*__description__*: Download the new files from an available update found by the checkForUpdate method and prepare the update.

*__deprecated__*: in v4.2.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`string`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`string`>

```js
public downloadProgress = 0;

async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    this.downloadProgress = 0;

    await Pro.deploy.download((progress) => {
      this.downloadProgress = progress;
    })
  }
}
```

___

###  extract

▸ **extractUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`string`>*): `Promise`<`string`>

*__description__*: Extract the files from an update downloaded with the downloadUpdate method to prepare for loading the app.

*__deprecated__*: in v4.2.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`string`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`string`>

```js
public downloadProgress = 0;
public extractProgress = 0;

async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    this.downloadProgress = 0;
    this.extractProgress = 0;

    await Pro.deploy.download((progress) => {
      this.downloadProgress = progress;
    })
    await Pro.deploy.extract((progress) => {
      this.extractProgress = progress;
    })
  }
}
```


___

###  redirect

▸ **redirect**(): `Promise`<`string`>

*__description__*: Reload the app if a more recent version of the app is available.

*__deprecated__*: in v4.2.0

**Returns:** `Promise`<`string`>

```js
public downloadProgress = 0;
public extractProgress = 0;

async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    this.downloadProgress = 0;
    this.extractProgress = 0;

    await Pro.deploy.download((progress) => {
      this.downloadProgress = progress;
    })
    await Pro.deploy.extract((progress) => {
      this.extractProgress = progress;
    })
    await Pro.deploy.redirect();
  }
}
```

___

###  info

▸ **info**(): `Promise`<`string`>

*__description__*: Get the versionId of the currently deployed update.

*__deprecated__*: in v4.2.0

**Returns:** `Promise`<`string`>

```js
const info = await Pro.deploy.info()
console.log(info)
// { 
//   'deploy_uuid': 'UUID_OF_ACTIVE_CODE',
//   'channel': 'CHANNEL_NAME',
//   'binary_version': 'X.X.X'
// }
```

___

###  getVersions

▸ **getVersions**(): `Promise`<`string[]`>

*__description__*: Get a list of the snapshots available on the device.

*__deprecated__*: in v4.2.0

**Returns:** `Promise`<`string[]`>

```js
async checkVersions() {
  const versions = await Pro.deploy.getVersions();
  console.log(versions);
  // ['UUID', 'UUID2', 'UUID3']
}
```

___

###  deleteVersion

▸ **deleteVersion**(versionId: *`string`*): `Promise`<`string`>

*__description__*: Remove the files specific to a snapshot from the device.

*__deprecated__*: in v4.2.0

**Parameters:**

| Param | Type |
| ------ | ------ |
| versionId | `string` | 

**Returns:** `Promise`<`string`>

```js
async deleteVersion() {
  const versions = await Pro.deploy.getVersions();
  Pro.deploy.deleteVersion(versions[0]);
}
```

___

<!-- END v4 API -->
</div>
</div>
</div>
</div>

## Interfaces
* [DeployConfig](#deployconfig)
* [CheckForUpdateResponse](#checkforupdateresponse)
* [SnapshotInfo](#snapshotinfo)
* [CallbackFunction](#callbackfunction)

### DeployConfig

#### Properties

* [channel](#optional-channel)
* [appId](#optional-appid)
* [debug](#optional-debug)

___

#### `<Optional>` appId

**● appId**: `undefined` |
`string`


The [Ionic Pro](https://ionicframework.com/docs/pro/) app id.

___

#### `<Optional>` channel

**● channel**: `undefined` |
`string`


The [channel](/docs/pro/deploy/channels) that the plugin should listen for updates on.

___

#### `<Optional>` debug

**● debug**: `undefined` |
`true` |
`false`


whether or not the app should in debug mode

___

### CheckForUpdateResponse

#### Properties

* [available](#available)
* [integrity](#optional-integrity)
* [snapshot](#optional-snapshot)
* [url](#optional-url)

####  available

**● available**: `boolean`

Whether or not an update is available.

___

#### `<Optional>` integrity

**● integrity**: `undefined` |
`string`


The checksum of the manifest file.

___

#### `<Optional>` snapshot

**● snapshot**: `undefined` |
`string`


The id of the snapshot if available.

___

#### `<Optional>` url

**● url**: `undefined` |
`string`


The url to fetch the manifest of files in the update.

___

### SyncOptions

#### Properties
* [updateMethod](#updatemethod)

####  updateMethod

**● updateMethod**: `'background' | 'auto'`

The update method to use when applying an update if available. This will override the default method the plugin was configured with temporarily.

___

### SnapshotInfo

#### Properties
* [binaryVersion](#binaryversion)
* [binary_version](#binary_version)
* [channel](#channel)
* [deploy_uuid](#deploy_uuid)
* [versionId](#versionid)

####  binaryVersion

**● binaryVersion**: *`string`*

The binary version the snapshot was downloaded for.

___

####  binary_version

**● binary_version**: *`string`*

*__deprecated__*: in favor of [binaryVersion](#binaryversion)

The binary version the snapshot was downloaded for.

___

####  channel

**● channel**: *`string`*

The channel that the snapshot was downloaded for..

___

####  deploy_uuid

**● deploy_uuid**: *`string`*

*__deprecated__*: in favor of [versionId](#versionid)

The id for the snapshot.

___

####  versionId

**● versionId**: *`string`*

The id for the snapshot.

___

### CallbackFunction

#### Callable
▸ **__call**(result?: *[T]()*): `void`

A callback function to handle the result.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` result | [T]() | 

**Returns:** `void`
