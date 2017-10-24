---
layout: fluid/pro_docs_base
category: pro-devapp
id: pro-getting-started
title: Ionic Dev App - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Ionic DevApp

The Ionic DevApp is a free app that makes it easy to run your Ionic app directly on your iOS or Android device.

Skip dealing with frustrating Native SDK installation issues, just run `ionic serve`, open the Dev App, connect to the same network, and the app will automatically load
and run your app.

The DevApp comes with many native plugins built right in, so you don't need to worry about installing plugins.

## Download the DevApp

The Dev App is available on iOS and Android.

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
  <!--
  <a href="https://itunes.apple.com/us/app/ionic-dev-app/id1271789931?ls=1&mt=8" style="opacity: 0.4">
    <img style="width: 148px" src="/img/pro/appstore.png" id="appstore-image">
  </a>
  -->

  <a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en">
    <img style="width: 180px" alt="Get it on Google Play" src="/img/pro/playstore.png" id="playstore-image">
  </a>
</div>  

iOS Version Coming Soon! (Late October, 2017)

## Using DevApp

The DevApp finds `ionic serve` instances running on the local network and requires the latest release of the Ionic CLI (at least version 3.13.2).

First, ensure you are running the latest release of the Ionic CLI. Run `npm install -g ionic`. If that doesn't work, try uninstalling and re-installing using `npm uninstall -g ionic` then running the install command again.

Once the latest CLI is installed, run `ionic serve` in the app of your choice on your computer and let it finish building. Next, open your iOS or Android device and connect to _the same network_ as your computer (through wifi). Open the DevApp, and you should see your local app show up in the list.

## Troubleshooting

If you don't see your app in the list, try these things to resolve it:

1. First, make sure your are on the same network as the app. Double check your wifi connection settings.
2. Try force-quitting the DevApp and restarting it
3. Try restarting `ionic serve` on your computer.

If those things still didn't resolve the issue, make sure you don't have any custom network settings that could cause the app to fail to discover the serve instance. 

## Reporting issues and feedback

If the above steps don't work, or you want to share feedback, please post in the [DevApp Feedback Megathread](https://forum.ionicframework.com/t/ionic-devapp-feedback-mega-thread/109842) on the Ionic forum. Please avoid contacting support for this first release of the DevApp as we'd like direct feedback and would like to aggregate it to help others.

We cannot guarantee support on this post but we will monitor it and use it to make DevApp better.

## What about Ionic View?

Ionic Developers may remember that Ionic View helped test apps on device without dealing with the SDK toolchain.

As of August, 2017, the Ionic View app has "split" into two apps: Ionic DevApp focused on rapid local development and testing, and the new Ionic View focused on helping developers share and test their apps with external users, co-workers, clients, and more.

With this change, we've added a ton of new features to Ionic View to make it easier than ever before for teams to distribute an app for testing.

Read more about the [new Ionic View app](../view/).

To sum it up: pick Ionic DevApp for local development/testing, and Ionic View for sharing your app with others.