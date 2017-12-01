---
layout: fluid/pro_docs_base
category: pro-devapp
id: pro-getting-started
title: Ionic DevApp - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Ionic DevApp

The Ionic DevApp is a free app that makes it easy to run your Ionic app directly on your iOS or Android device.

Skip dealing with frustrating Native SDK installation issues, just run `ionic serve`, open the DevApp, connect to the same network, and the app will automatically load
and run your app.

The DevApp comes with many native plugins built right in, so you don't need to worry about installing plugins.

## Download the DevApp

The DevApp is available on iOS and Android.

Enter your phone number below to text yourself an install link, or find the app on your app store of choice:

<div id="branch-sms-box">
  <form id="branch-sms-form">
    Phone # (include country code): <input type="tel" class="form-control" id="branch-phone-no">
    <div>
      <button class="btn btn-primary btn-small" type="submit">Text Me the Link</button>
    </div>
  </form>
</div>

<div id="badges">
  <a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8">
    <img style="width: 148px" src="/img/pro/appstore.png" id="appstore-image">
  </a>

  <a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en">
    <img style="width: 180px" alt="Get it on Google Play" src="/img/pro/playstore.png" id="playstore-image">
  </a>
</div>  

## Using DevApp

The DevApp finds `ionic serve` instances running on the local network and requires the latest release of the Ionic CLI (at least version 3.13.2).

First, ensure you are running the latest release of the Ionic CLI. Run `npm install -g ionic`. If that doesn't work, try uninstalling and re-installing using `npm uninstall -g ionic` then running the install command again.

Once the latest CLI is installed, run `ionic serve -c` in the app of your choice on your computer and let it finish building. Next, open your iOS or Android device and connect to _the same network_ as your computer (through wifi). Open the DevApp, and you should see your local app show up in the list.

## Capturing console logs

To make sure you receive console logs generated from the app, which will be displayed in the terminal window where `ionic serve` was run, add the `-c` flag to `ionic serve`:

```bash
ionic serve -c
```

## CORS

If your web requests are failing, you may be running into issues with
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).  Unfortunately, CORS errors only show in the console of
your browser, so they won't appear as a runtime error modal or in the logs printed to your `ionic serve` instance.

There are a few things you can do to resolve the issue.

### Set the appropriate headers

If you control the server responding to the failing requests, you can set the appropriate `Access-Control-Allow-Origin`
header on the server.  The Origin of your request is the IP that your app is served from, for example `192.168.1.1:8100`.
You can also set the Origin as `*` (wildcard), but be aware that requests from any origin will be able to see responses from your server.
Wildcard is a common setting for any API, or any other endpoint that is expected to be accessed from various origins.

### Use a proxy

The [Ionic CLI can proxy requests](/docs/pro/cli/configuring.html#service-proxies) you make to it. Since CORS is enforced by the
browser (in this case the Android or iOS web view), by having the Ionic CLI make the request for you, it won't care
whether there is an `Access-Control-Allow-Origin` header in the server response and will simply pass the response back
to your app.

### Use a plugin

Similarly to using the Ionic CLI proxy, you can use the [Advanced HTTP plugin](https://ionicframework.com/docs/native/http/) to make
requests. The plugin receives responses natively and passes the response back to JavaScript.

## Troubleshooting

If you don't see your app in the list, try these things to resolve it:

1. First, make sure your are on the same network as the app. Double check your wifi connection settings.
2. Try force-quitting the DevApp and restarting it
3. Try restarting `ionic serve` on your computer.

If those things still didn't resolve the issue, make sure you don't have any custom network settings that could cause the app to fail to discover the serve instance. 

## Reporting issues and feedback

If the above steps don't work, or you want to share feedback, please post in the [DevApp Feedback Megathread](https://forum.ionicframework.com/t/ionic-devapp-feedback-mega-thread/109842) on the Ionic forum. Please avoid contacting support for this first release of the DevApp as we'd like direct feedback and would like to aggregate it to help others.

We cannot guarantee support on this post but we will monitor it and use it to make DevApp better.

## Native Cordova Plugin Support

The Ionic DevApp supports the same set of common native plugins as Ionic View. Please check [this list](/docs/pro/view.html#plugin-support) to see which plugins are supported out of the box. If an Ionic Native plugin you need isn't functioning correctly or isn't available, let us know!

## What about Ionic View?

Ionic Developers may remember that Ionic View helped test apps on device without dealing with the SDK toolchain.

As of August, 2017, the Ionic View app has "split" into two apps: Ionic DevApp focused on rapid local development and testing, and the new Ionic View focused on helping developers share and test their apps with external users, co-workers, clients, and more.

With this change, we've added a ton of new features to Ionic View to make it easier than ever before for teams to distribute an app for testing.

Read more about the [new Ionic View app](../view/).

To sum it up: pick Ionic DevApp for local development/testing, and Ionic View for sharing your app with others.
