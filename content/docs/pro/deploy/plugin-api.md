---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-live-deploy-plugin-api
title: Deploy PLugin API - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Deploy Plugin API

When using `UPDATE_METHOD="auto"` or `UPDATE_METHOD="background"`, the plugin manages updates for you. If you'd like to manually control updates, the Ionic plugin has a number of functions available to manage the update lifecycle.

Here's an example of stringing together the API functions to perform an update:

```js
declare var IonicCordova

export function update(appId: string, channelName: string, callback: (err: any, success: boolean) => void) {
  // Set our app data (OPTIONAL)
  let config = {
    appId: "abcd1234",
    channel: "Master"
  }

  // Initialize the deploy plugin (OPTIONAL)
  IonicCordova.deploy.init(config, (res: any) => {
    console.log(res)
  }, (err: any) => {
    handleError(err, callback)
  })

  // Check for available updates
  IonicCordova.deploy.check((res: any) => {
    console.log("Check result:", res)

    if (res === 'true') {

      // A new version is ready to download
      IonicCordova.deploy.download((res: any) => {
        if  (res === 'true' || res == 'false') {

          // We can unzip the latest version
          IonicCordova.deploy.extract(appId, (res: any) => {
            if (res === 'true' || res == 'false') {

              // we're ready to load the new version
              IonicCordova.deploy.redirect(() => {
                callback(null, true)
              }, (e: any) => {handleError(e, callback)})
            } else {

              // It's a progress update
              console.log('Extract progress:', res)
            }
          }, (e: any) => {handleError(e, callback)})
        } else {

          // It's a progress update
          console.log('Download progress:', res)
        }
      }, (e: any) => {handleError(e, callback)})
    }
  }, (e: any) => {handleError(e, callback)})
}

export function handleError(error: any, callback: (err: any, success: boolean) => void) {
  console.error(error)
  callback(error, false)
}
```

If you'd like to customize your Deploy setup, you can merely only perform the calls you want. For instance, you could perform `check`, `download`, and `extract` on Login and `redirect` on Logout for apps that are continuously running.

```js
IonicCordova.deploy.init(config, success, failure)
```

Initializes the plugin with an app ID and API host specified in js-land.  Can be used to change these variables at runtime

```js
IonicCordova.deploy.check(success, failure)
```

Check for updates from a specified channel, will change the saved channel from the install step

```js
IonicCordova.deploy.download(success, failure)
```

If an update is present, download it

```js
IonicCordova.deploy.extract(success, failure)
```

If an update has been downloaded, extract it and set the default redirect location for next app start.

```js
IonicCordova.deploy.redirect(success, failure)
```

Redirect to the latest version of the app on this device.

```js
IonicCordova.deploy.info(success, failure)
```

Get info on current version for this device.

```js
IonicCordova.deploy.getVersions(success, failure)
```

List downloaded versions on this device.

```js
IonicCordova.deploy.deleteVersion(uuid, success, failure)
```

Delete a downloaded version by UUID from this device.
