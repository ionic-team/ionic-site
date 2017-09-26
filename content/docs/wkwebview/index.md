---
layout: fluid/docs_base
category: wkwebview
id: docs-wkwebview
title: WKWebview
hide_header_search: true
pre_footer: true
---

# WKWebView

In iOS-land, there have been two webviews for a few years now, UIWebView and WKWebView. Historically, Ionic apps have used UIWebView, but no longer. Ionic now uses WKWebview by default when building for iOS.

We strongly believe WKWebview is the best option for any app, as it features many improvements over the older, legacy webview (UIWebView). These features include:

- JIT conversion of JS code down to machine code, which runs much faster
- Improved rendering performance
- Less memory consumption
- Better adherence to web standards
- Reliable scroll events (important for virutal-list)


We wanted to make sure that people could easily switch to WKWebView without many issues, but there are still some things that you'll need to consider.


## Update Ionic CLI

> WKWebView plugin needs latest Ionic CLI in order to work properly.

Please make sure that your global CLI is using the latest 3.x release. If not, please upgrade:

```bash
npm uninstall -g ionic
npm install -g ionic
```

## CORS

> UIWebView never enforced CORS, but WKWebView does.

Unfortunately there's no API to disable this, so you'll need to ensure any remote API that your app use, implement CORS correctly. [CORS MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

```bash
Origin: http://localhost:8080
```

1. [Whitelist Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin): `http://localhost:8080`
2. [Whitelist Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods)
3. [Whitelist Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)
4. [CORS preflight request (OPTION)](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)




### Rewriting file://

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
<img [src]="imagePath" />
```

```ts
takePhoto() {
  this.camera.getPicture().then((img)=>{
    this.imagePath = normalizeURL(img);
  })
}
```

**Note**: Core cordova plugins also allow you to reference a file via the `cdvfile://` protocol. Unfortunately, we cannot rewrite this path as it is something that gets resolved in native code. We suggest that when ever you reference a file, use the full path for rewrites, not `cdvfile://`.



## Upgrading to WKWebView (UIWebView users only)

```
ionic cordova plugin add cordova-plugin-ionic-webview --save
```

More info: [https://github.com/ionic-team/cordova-plugin-ionic-webview#installation-instructions](https://github.com/ionic-team/cordova-plugin-ionic-webview#installation-instructions)


## Downgrading to UIWebView

As we said previously, we strongly recommend developers upgrade to WKWebView, but if you still need to use UIWebView, here’s the step to downgrade:

```bash
$ ionic cordova plugin remove cordova cordova-plugin-ionic-webview --save
$ rm -rf platforms/
$ rm -rf plugins/
$ ionic cordova platform add ios
$ ionic cordova build ios
```


# FAQs

## My app does not load, white screen

> I don't have any error in my code, but still I get a blank screen

Most of the time, this kind of problems come from an incorrect installation of cordova.

- Ensure Xcode is closed

- Clean install:

  ```bash
  rm -rf platforms
  rm -rf plugins
  ```

- Add the platform back

  ```bash
  ionic cordova platform add ios
  ```

- Make sure localhost is allowed:

  ```xml
  <allow-navigation href="http://localhost:8080/*"/>
  ```

- Make sure WKWebView is the default engine:

  ```xml
  <feature name="CDVWKWebViewEngine">
    <param name="ios-package" value="CDVWKWebViewEngine" />
  </feature>
  <preference name="CordovaWebViewEngine" value="CDVWKWebViewEngine" />
  ```

 - Build ionic ios

  ```
  ionic cordova build ios
  ```

- Open Xcode and try to build again.


## Malloc: *** error for object 0x1700af180: pointer being freed was not allocated

It looks like its a Safari bug and therefore only appears when you are debugging your webview with Safari. In Safari under:
Develop -> *Your_Device_Name* uncheck **"Automatically Show Web Inspector for JSContexts"**.

This should resolve your issue.


## My local resources does not load

> Some of the `<img>`/`<video>`/`<audio>` does not load.

Ensure, that the URL of the resource does not start with `file://`.
If it is the case, use `normalizeURL()` to rewrite the path:

```ts
import { normalizeURL} from 'ionic-angular';

imageSRC = normalizeURL(url);
```


## XHR requests does not work

> I am trying to call some remote service using XHR (or fetch), but it is not working.

As we said previously, WKWebView enforces CORS. You will need to whitelist `http://localhost:8080` as "Origin" and/or implement CORS properly.


## I can't implement CORS

> I don't control the backend, so I can't add CORS to it, how can I make it work with WKWebView?

If it is not an possibility to implement or configure CORS in the server, Ionic has an native plugin that can "proxy" the HTTP requests using native code, so CORS can be completely bypasses:

Read more here: [cordova-plugin-http](http://ionicframework.com/docs/native/http/).

