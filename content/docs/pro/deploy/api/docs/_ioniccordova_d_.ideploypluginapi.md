[Cordova Plugin Ionic](../../README.md)

# Interface: IDeployPluginAPI

The Public API for the deploy Plugin

## Hierarchy

**IDeployPluginAPI**

## Index

### Methods

* [check](_ioniccordova_d_.ideploypluginapi.md#check)
* [checkForUpdate](_ioniccordova_d_.ideploypluginapi.md#checkforupdate)
* [configure](_ioniccordova_d_.ideploypluginapi.md#configure)
* [deleteVersion](_ioniccordova_d_.ideploypluginapi.md#deleteversion)
* [deleteVersionById](_ioniccordova_d_.ideploypluginapi.md#deleteversionbyid)
* [download](_ioniccordova_d_.ideploypluginapi.md#download)
* [downloadUpdate](_ioniccordova_d_.ideploypluginapi.md#downloadupdate)
* [extract](_ioniccordova_d_.ideploypluginapi.md#extract)
* [getAvailableVersions](_ioniccordova_d_.ideploypluginapi.md#getavailableversions)
* [getCurrentVersion](_ioniccordova_d_.ideploypluginapi.md#getcurrentversion)
* [getVersions](_ioniccordova_d_.ideploypluginapi.md#getversions)
* [info](_ioniccordova_d_.ideploypluginapi.md#info)
* [init](_ioniccordova_d_.ideploypluginapi.md#init)
* [redirect](_ioniccordova_d_.ideploypluginapi.md#redirect)
* [reloadApp](_ioniccordova_d_.ideploypluginapi.md#reloadapp)

---

## Methods

<a id="check"></a>

###  check

▸ **check**(success: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*, failure: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*): `void`

*Defined in [IonicCordova.d.ts:32](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L32)*

*__deprecated__*: in v5.0.0 use [checkForUpdate](#checkforupdate) in favor of this function.

*__description__*: Check for available updates for the currently configured app id and channel.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| success | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  The callback that handles a successful check. On success this function will be called with the string 'true' or 'false' depending on whether a new update is available. |
| failure | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  The callback that handles a failed check. On failure this function will be called with a string description of the failure. |

**Returns:** `void`

___
<a id="checkforupdate"></a>

###  checkForUpdate

▸ **checkForUpdate**(): `Promise`<[CheckDeviceResponse](_ioniccordova_d_.checkdeviceresponse.md)>

*Defined in [IonicCordova.d.ts:119](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L119)*

*__description__*: Check for available updates for the currently configured app id and channel.

*__since__*: v5.0.0

**Returns:** `Promise`<[CheckDeviceResponse](_ioniccordova_d_.checkdeviceresponse.md)>

___
<a id="configure"></a>

###  configure

▸ **configure**(config: *[IDeployConfig](_ioniccordova_d_.ideployconfig.md)*): `Promise`<`void`>

*Defined in [IonicCordova.d.ts:112](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L112)*

*__description__*: Update the default configuration for the plugin on the current device. The new configuration will be persisted across app close and binary updates.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [IDeployConfig](_ioniccordova_d_.ideployconfig.md) |  The new configuration for the plugin on this device. |

**Returns:** `Promise`<`void`>

___
<a id="deleteversion"></a>

###  deleteVersion

▸ **deleteVersion**(version: *`string`*, success: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*, failure: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*): `void`

*Defined in [IonicCordova.d.ts:101](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L101)*

*__deprecated__*: in v5.0.0 use [deleteVersionById](#deleteversionbyid) in favor of this function.

*__description__*: Remove the files specific to a snapshot from the device.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| version | `string` |  The version id of the snapshot to delete. |
| success | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  A callback function which will receive a string 'true' upon successful deletion. |
| failure | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  On failure to delete a snapshot this function will be called with a string description of the failure. |

**Returns:** `void`

___
<a id="deleteversionbyid"></a>

###  deleteVersionById

▸ **deleteVersionById**(versionId: *`string`*): `Promise`<`string`>

*Defined in [IonicCordova.d.ts:157](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L157)*

*__description__*: Remove the files specific to a snapshot from the device.

**Parameters:**

| Param | Type |
| ------ | ------ |
| versionId | `string` | 

**Returns:** `Promise`<`string`>

___
<a id="download"></a>

###  download

▸ **download**(success: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*, failure: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*): `void`

*Defined in [IonicCordova.d.ts:43](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L43)*

*__deprecated__*: in v5.0.0 use [downloadUpdate](#downloadupdate) in favor of this function.

*__description__*: Download the new files from an available update found by the check method.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| success | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  The callback that handles a successful download. This function will be called during download with a string representing the percentage of download completion e.g. '1', '20', etc. and the string 'done' upon successful completion. |
| failure | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  The callback that handles a failed download. On failure this function will be called with a string description of the failure. |

**Returns:** `void`

___
<a id="downloadupdate"></a>

###  downloadUpdate

▸ **downloadUpdate**(progress?: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*): `Promise`<`string`>

*Defined in [IonicCordova.d.ts:128](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L128)*

*__description__*: Download the new files from an available update found by the checkForUpdate method and prepare the update.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`string`>

___
<a id="extract"></a>

###  extract

▸ **extract**(success: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*, failure: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*): `void`

*Defined in [IonicCordova.d.ts:54](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L54)*

*__deprecated__*: in v5.0.0 use [downloadUpdate](#downloadupdate) instead which downloads and prepares the update.

*__description__*: Extract the new files from a downloaded update so it is ready to load.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| success | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  The callback that handles a successful extract. This function will be called multiple times during extract with a string representing the percentage complete e.g. '1', '20', etc. and the string 'done' upon successful completion. |
| failure | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  The callback that handles a failed extract. On failure this function will be called with a string description of the failure. |

**Returns:** `void`

___
<a id="getavailableversions"></a>

###  getAvailableVersions

▸ **getAvailableVersions**(): `Promise`<[ISnapshotInfo](_ioniccordova_d_.isnapshotinfo.md)[]>

*Defined in [IonicCordova.d.ts:150](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L150)*

*__description__*: Get a list of the snapshots available on the device.

*__since__*: v5.0.0

**Returns:** `Promise`<[ISnapshotInfo](_ioniccordova_d_.isnapshotinfo.md)[]>

___
<a id="getcurrentversion"></a>

###  getCurrentVersion

▸ **getCurrentVersion**(): `Promise`<[ISnapshotInfo](_ioniccordova_d_.isnapshotinfo.md)>

*Defined in [IonicCordova.d.ts:143](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L143)*

*__description__*: Get info about the currently deployed update.

*__since__*: v5.0.0

**Returns:** `Promise`<[ISnapshotInfo](_ioniccordova_d_.isnapshotinfo.md)>

___
<a id="getversions"></a>

###  getVersions

▸ **getVersions**(success: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`[]>*, failure: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*): `void`

*Defined in [IonicCordova.d.ts:88](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L88)*

*__deprecated__*: in v5.0.0 use [getAvailableVersions](#getavailableversions) in favor of this function.

*__description__*: Fetch the current version ids for snapshots stored locally on the device.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| success | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`[]> |  A callback function which will receive a list of string version ids for snapshots that are currently stored on the device. |
| failure | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  On failure to fetch snapshot info this function will be called with a string description of the failure. |

**Returns:** `void`

___
<a id="info"></a>

###  info

▸ **info**(success: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<[ISnapshotInfo](_ioniccordova_d_.isnapshotinfo.md)>*, failure: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*): `void`

*Defined in [IonicCordova.d.ts:77](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L77)*

*__deprecated__*: in v5.0.0 use [getCurrentVersion](#getcurrentversion) in favor of this function.

*__description__*: Fetch current information about the currently applied snapshot on this device.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| success | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<[ISnapshotInfo](_ioniccordova_d_.isnapshotinfo.md)> |  A callback function which will receive the object describing the currently deployed snapshot. |
| failure | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  On failure to fetch snapshot info this function will be called with a string description of the failure. |

**Returns:** `void`

___
<a id="init"></a>

###  init

▸ **init**(config: *[IDeployConfig](_ioniccordova_d_.ideployconfig.md)*, success: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`void`>*, failure: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*): `void`

*Defined in [IonicCordova.d.ts:21](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L21)*

*__deprecated__*: in v5.0.0 use [configure](#configure) in favor of this function.

*__description__*: Update the default configuration for the plugin on the current device. The new configuration will be persisted across app close and binary updates.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [IDeployConfig](_ioniccordova_d_.ideployconfig.md) |  The new configuration for the plugin on this device. |
| success | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`void`> |  The callback that handles a successful configuration. On success this function will be called with no arguments. |
| failure | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  The callback that handles a failed configuration. On failure this function will be called with a string description of the failure. |

**Returns:** `void`

___
<a id="redirect"></a>

###  redirect

▸ **redirect**(success: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*, failure: *[CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`>*): `void`

*Defined in [IonicCordova.d.ts:65](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L65)*

*__deprecated__*: in v5.0.0 use [reloadApp](#reloadapp) in favor of this function.

*__description__*: Redirect to the most recent available update stored on the device for the current app id and channel.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| success | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  The callback that handles a successful redirect. |
| failure | [CallbackFunction](_ioniccordova_d_.callbackfunction.md)<`string`> |  The callback that handles a failed redirect. On failure this function will be called with a string description of the failure. |

**Returns:** `void`

___
<a id="reloadapp"></a>

###  reloadApp

▸ **reloadApp**(): `Promise`<`string`>

*Defined in [IonicCordova.d.ts:135](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L135)*

*__description__*: Reload the app if a more recent version of the app is available.

*__since__*: v5.0.0

**Returns:** `Promise`<`string`>

___

