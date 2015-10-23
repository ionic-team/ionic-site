---
layout: v2_fluid/docs_base
category: platform
id: barcode
title: Barcode Scanner | Ionic Native Plugins
header_title: Barcode Scanner
header_sub_title: Scan and create barcodes and QR codes
---

<h1 class="title">Barcode Scanner</h1>

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/barcode/index.md'>
  Improve this doc
</a>


Use the `Barcode` class to create and scan barcodes and QR codes.

### Install the plugin

```bash
$ ionic plugin install phonegap-plugin-barcodescanner
```

```javascript
import {Barcode} from 'ionic/ionic'

class BarcodePage {
  scan() {
    Barcode.scan().then((data) => {
      console.log("Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
    }, (err) => {
    })
  }

  create() {
    Barcode.encode(Barcode.TEXT_TYPE).then((data) => {}, (fail) => {});
  }
}
```
