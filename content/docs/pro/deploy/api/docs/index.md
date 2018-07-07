[Cordova Plugin Ionic](../../README.md)

# Interface: IPluginBaseAPI

The IonicCordova Plugin API

## Hierarchy

**IPluginBaseAPI**

## Index

### Properties

* [deploy](_ioniccordova_d_.ipluginbaseapi.md#deploy)

### Methods

* [getAppDetails](_ioniccordova_d_.ipluginbaseapi.md#getappdetails)
* [getAppInfo](_ioniccordova_d_.ipluginbaseapi.md#getappinfo)

---

## Properties

<a id="deploy"></a>

###  deploy

**● deploy**: *[IDeployPluginAPI](_ioniccordova_d_.ideploypluginapi.md)*

*Defined in [IonicCordova.d.ts:180](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L180)*

An instance of the Ionic Deploy Plugin API

___

## Methods

<a id="getappdetails"></a>

###  getAppDetails

▸ **getAppDetails**(): `Promise`<[IAppInfo](_ioniccordova_d_.iappinfo.md)>

*Defined in [IonicCordova.d.ts:175](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L175)*

*__description__*: Get info about the current app.

**Returns:** `Promise`<[IAppInfo](_ioniccordova_d_.iappinfo.md)>

___
<a id="getappinfo"></a>

###  getAppInfo

▸ **getAppInfo**(success: *`Function`*, failure: *`Function`*): `void`

*Defined in [IonicCordova.d.ts:169](https://github.com/ionic-team/cordova-plugin-ionic/blob/e9ad281/types/IonicCordova.d.ts#L169)*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| success | `Function` |  - |
| failure | `Function` |   |

**Returns:** `void`

___

