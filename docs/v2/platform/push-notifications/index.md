---
layout: v2_fluid/docs_base
category: platform
id: push-notifications
title: Ionic 2 Plugins | Push Notifications
header_title: Push Notifications - Ionic 2 Plugins
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/plugins/push-notifications/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Receiving Push Notifications</h1>

```bash
$ ionic plugin install phonegap-plugin-push
```

Every app needs to receive push notifications.

To make sending and receiving push notifications easier, we've built a fully-integrated push notification
service for Ionic apps. To try it out, create an [Ionic.io](http://ionic.io/) account and then follow the
[Push Notification docs](http://docs.ionic.io/v1.0/docs/push-from-scratch).

If you'd like to use your own push server, just integrate it with the plugin below.

```javascript

import {Push} from 'ngcordova';

export class MyApp {

  constructor() {
    this.setupPush();
  }

  setupPush() {
    var iosConfig = {
      "badge": true,
      "sound": true,
      "alert": true,
    };

    document.addEventListener("deviceready", () => {

      Push.register(iosConfig).then((deviceToken) => {
        // Success -- send deviceToken to server, and store for future use
        console.log("deviceToken: " + deviceToken)

        fetch("http://server.co/", {
          method: 'post',
          body: JSON.stringify({
            user: "Bob",
            tokenID: deviceToken
          })
        });
      }, (err) => {
        alert("Registration error: " + err)
      });


      Push.onNotification.subscribe((event, notification) => {
        if (notification.alert) {
          navigator.notification.alert(notification.alert);
        }

        if (notification.sound) {
          var snd = new Media(event.sound);
          snd.play();
        }

        if (notification.badge) {
          Push.setBadgeNumber(notification.badge).then((result) => {
            // Success!
          }, (err) => {
            // An error occurred. Show a message to the user
          });
        }
      });

    }, false);
  }

  unregister() {
    // WARNING! dangerous to unregister (results in loss of tokenID)
    Push.unregister(options).then((result) => {
      // Success!
    }, (err) => {
      // Error
    });
  }
}
```
