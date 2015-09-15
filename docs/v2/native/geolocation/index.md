---
layout: v2/docs_base
id: native
title: Ionic 2 | Geolocation
header_title: Geolocation - Ionic 2
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/native/geolocation/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Tracking GPS Location</h1>

Tracking GPS location is easy with the `Geolocation` class. There are two modes:
single value, and watching. Single value grabs one location position and returns it,
while watching continuously checks for location changes and returns those.

Both operations prompt the user to accept location sharing with your app.

```javascript
import {Geolocation} from 'ngcordova'

class LocationTracker {
  constructor() {
    Geolocation.getCurrentPosition({
    }).then((position) => {
      let lat  = position.coords.latitude
      let long = position.coords.longitude
    }, (err) => {
     // error
    });
  }

  startTracking() {
    var watchOptions = {
     frequency : 1000,
     timeout : 3000,
     enableHighAccuracy: false // may cause errors if true
    };

    this.currentWatch = Geolocation.watchPosition(watchOptions, (position) => {
      // Called continuously
      let lat  = position.coords.latitude
      let long = position.coords.longitude
    });
  }

  stopTracking() {
    if(!this.currentWatch) { return; }

    Geolocation.clearWatch(this.currentWatch);
  }
}
```
