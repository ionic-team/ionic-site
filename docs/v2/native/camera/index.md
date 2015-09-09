---
layout: v2/docs_native
title: Ionic 2 | Camera
header_title: Ionic 2 - Camera
header_sub_title: Ionic 2 Developer Preview
---

<h1 class="title">Camera</h1>

To take pictures in your Ionic app, use the `Camera` utility from ngCordova:

```javascript
import {Camera} from 'ngcordova'

class PhotoTaker {
  constructor() {
  }

  takePhoto() {
    Camera.getPicture({
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    }).then((data) => {
      // Camera data
    })
  }
}
```