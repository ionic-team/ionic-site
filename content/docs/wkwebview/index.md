---
layout: fluid/docs_base
category: wkwebview
id: docs-wkwebview
title: WKWebview
hide_header_search: true
pre_footer: true
---


In iOS-land, there have been two webviews for a few years now, UIWebView and WKWebView. Historically, Ionic apps have used UIWebView, but no longer. Ionic now uses WKWebview by default when building for iOS.

We strongly believe WKWebview is the best option for any app, as it features many improvements over the older, legacy webview (UIWebView). These features include:

- JIT conversion of JS code down to machine code, which runs much faster
- Improved rendering performance
- Less memory consumption
- Better adherence to web standards
- Reliable scroll events (important for virutal-list)

### Caveats

We wanted to make sure that people could easily switch to WKWebView without many issues, but there are still some things that you'll need to consider.


#### CLI

Please make sure that your global CLI is using the latest 3.x release. If not, please upgrade.

```bash
npm uninstall -g ionic
npm install -g ionic
```

#### CORS

UIWebView never enforced CORS, but WKWebView does.
Unfortunately there's no API to disable this, so you'll need to ensure any API that your app use, implement CORS correctly and accept requests with origin:


```bash

Origin: http://localhost:8080

```

[CORS MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

#### Rewriting file://

WKWebView still has some issues when referencing local files, `file://`. We tried [many solutions](https://docs.google.com/document/d/19VQ-n7hGr9IDPPstQqU8_8WgqUh7R6sgQfL2neoT-Xw/edit?usp=sharing) but went with a local server, as it was the only solution that worked for every case.

If you're working with local files (text files, images, videos), you'll need to make sure that the path of file **does not have** `file://` in front of it.

For example:

```bash
file:///usr/home/dev/app/index.html
```

Should be rewritten to:

```bash
/usr/home/dev/app/index.html
```


We added built-in function (Ionic 3.2.0) that will rewrite `file://` URLs  automatically:

```ts
import { normalizeURL } from 'ionic-angular';

let path = cordova.file.dataDirectory;
console.log('Original: ' + path);

path = normalizeURL(path);
console.log('Fixed: ' + path);
```

Output:

```bash
Original: file:///Users/manuelmartinez-almeida/Library/Developer/CoreSimulator/Devices/94646EFE-DE04-46BD-AFC1-B4F312BA06CB/data/Containers/Bundle/Application/6AD1018C-6836-4BF9-83DA-4430392D10D5/ionic-wk-test.app/www/index.html

Fixed: /Users/manuelmartinez-almeida/Library/Developer/CoreSimulator/Devices/94646EFE-DE04-46BD-AFC1-B4F312BA06CB/data/Containers/Bundle/Application/6AD1018C-6836-4BF9-83DA-4430392D10D5/ionic-wk-test.app/www/index.html
```

Or from within a template:

```html
<img [src]="imagePath"/>
```

```ts
takePhoto() {
  this.camera.getPicture().then((img)=>{
    this.imagePath = normalizeURL(img);
  })
}
```

**Note**: Core cordova plugins also allow you to reference a file via the `cdvfile://` protocol. Unfortunately, we cannot rewrite this path as it is something that gets resolved in native code. We suggest that when ever you reference a file, use the full path for rewrites, not `cdvfile://`.





### Downgrading to UIWebView

As we said previously, we strongly recommend developers upgrade to WKWebView, but if you still need to use UIWebView, here’s the step to downgrade:

```bash
$ ionic cordova plugin remove cordova cordova-plugin-wkwebview-engine --save
$ rm -rf platforms/
$ rm -rf plugins/
$ ionic cordova platform add ios
$ ionic cordova build ios
```


### Upgrading to WKWebView I users only)

[https://github.com/driftyco/cordova-plugin-wkwebview-engine#installation-instructions](https://github.com/driftyco/cordova-plugin-wkwebview-engine#installation-instructions)



### FAQs

#### My app does not load, white screen

Most of the this kind of problems come from an incorrect installation by cordova.

0. Ensure Xcode is closed

1. Clean install:

 ```bash
rm -rf platforms
rm -rf plugins
```

2. Add the platform back

 ```bash
ionic cordova platform add ios
```

3. Make sure localhost is allowed:

 ```xml
<allow-navigation href="http://localhost:8080/*"/>
```

4. Make sure WKWebView is the default engine:

 ```xml
<feature name="CDVWKWebViewEngine">
  <param name="ios-package" value="CDVWKWebViewEngine" />
</feature>
<preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />
```

5. Build ionic ios

 ```
ionic cordova build ios
```

6. Open Xcode and try to build again.


#### Malloc: *** error for object 0x1700af180: pointer being freed was not allocated

It looks like its a Safari bug and therefore only appears when you are debugging your webview with Safari. In Safari under:
Develop -> Your_Device_Name uncheck "Automatically Show Web Inspector for JSContexts".

This should resolve your issue.

#### My `<img>`/`<video>`/`<audio>`/etc does not load

Ensure, that the source of the resource does not start with `file://`.
In case it does, use `normalizeURL()` to rewrite the path:

```ts
import { normalizeURL} from 'ionic-angular';

imageSRC = normalizeURL(url);
```


#### XHR requests to a remote service does not longer work

UIWebView didn't enforce CORS at all, but WKWebView does and does not provide a way to disable it. There are two ways to handle this:

- Implement CORS correctly and allow `Origin: http://localhost:8080` in your all your services.
- Use `cordova-plugin-http` plugin: [http://ionicframework.com/docs/native/http/](http://ionicframework.com/docs/native/http/)
