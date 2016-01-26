---
layout: v2_fluid/docs_base
category: platform
id: camera
title: Camera | Ionic Native Plugins
header_title: Camera Support
header_sub_title: Take photos and video
---

<h1 class="title">Camera</h1>

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/camera/index.md'>
  Improve this doc
</a>

```bash
$ ionic plugin add cordova-plugin-camera
```

To take pictures in your Ionic app, use the `Camera` utility:

```javascript
import {Camera} from 'ionic/ionic'

class PhotoTaker {
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
      //let base64Image = "data:image/jpeg;base64," + data;
      // this.imageData = base64Image;
      //
      // Use this in your view: <img src="{{imageData}}">
    })
  }
}
```
