---
layout: fluid/pro_docs_base
category: pro-view
id: pro-beta-testing
title: Beta Testing with Ionic View - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Beta Testing with Ionic View

Ionic View makes it easy to distribute versions of your app to beta testers, clients, co-workers, and more, without dealing with the complicated device provisioning and configuration required with traditional beta testing services.

Looking for a reference of Ionic View the app? Take a look at the [Ionic View app docs](/docs/pro/view.html) for an overview of features in the app itself.

In order to share & test with Ionic View, you'll have to push any code up to Ionic Pro that you'd like to share with [git push ionic master](/docs/pro/git.html#pushing-new-builds).

## Install Ionic View

As a Developer with an Ionic Pro account, you can log into your own account in View to access your projects. You can download Ionic View for iOS or Android:

<div id="badges" style="text-align:center">
  <a href="https://itunes.apple.com/us/app/ionic-view-test-share-ionic-apps/id1271789931?ls=1&mt=8">
    <img style="width: 148px" src="/img/pro/appstore.png" id="appstore-image">
  </a>

  <a href="https://play.google.com/store/apps/details?id=com.ionicframework.view">
    <img style="width: 180px" alt="Get it on Google Play" src="/img/pro/playstore.png" id="playstore-image">
  </a>
</div>
<br>

If you are working with testers, the email they receive inviting them to look at your app will include links to the respective app stores and help get them set up.

<br>

<script src="https://fast.wistia.com/embed/medias/za0joonedd.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_za0joonedd" style="height:400px;width:640px">&nbsp;</div>

## Using Channels with Ionic View

In order to test anything in Ionic View, you will have to assign your Builds to a Channel. These Channels are what you will use to share a version of your app with someone.

For instance, you could set up a **Staging** Channel that you can share with your QA Testers, a **Marketing Preview** Channel that you can share with the Marketing department to give them an early preview, a **Public** Channel to be shared with anyone via a QR code, etc.

You have complete control over these Channels and what Build is set to active for them. If you push a new build to **Staging**, anyone who has been given access to that Channel will be able to see the update right in Ionic View.

For more information on setting up and deploying to Channels, please see our [Channels Documentation](/docs/pro/channels.html).

## Inviting Private Testers

Once you have a Channel set up to share, click on the **Share App** button in the top right of your Apps dashboard. Here you'll be able to choose which Channel to share, and manage the email addresses you've shared with.

These users will receive an email with a link that will automatically download Ionic View for them, and then grant them access to your App.

<script src="https://fast.wistia.com/embed/medias/6uubjvj0q6.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_6uubjvj0q6" style="height:400px;width:640px">&nbsp;</div>

## Sharing Publicly

<i class="ion-ios-information-circle" style="font-size: 24px; vertical-align: middle"></i> <span style="font-weight: 600">Public app sharing is currently disabled on iOS to comply with
the Apple App Store Guidelines.</span>

If you'd like to share your App publicly in Ionic View (for instance, on our Marketplace), all you have to do is set up one or more Public Channels (See [Using Public Channels](/docs/pro/channels.html#using-public-channels)).

Once your Public channels have been set up, click on the **Share App** button in the top right of your Apps dashboard and click the "Public Ionic View" tab. Copy your AppId and share it with whomever you'd like.

## Viewing Feedback

You can view feedback submitted by testers for any app from the Feedback tab in your Ionic Pro dashboard for that app.

<div style="text-align: center">
  <img style="width: 950px" src="/img/pro/beta-testing-feedback.png">
</div>

See the [Submitting Feedback](/docs/pro/view.html#submitting-feedback) for more details.

## CORS

If web requests for your app are failing when using View, you may be running into issues with
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

There are a couple things you can do to resolve the issue.

### Set the appropriate headers

If you control the server responding to the failing requests, you can set the `Access-Control-Allow-Origin`
header to `*` (wildcard) on the server. Be aware that requests from any origin will be able to see responses from your server when using `*`.
Wildcard is a common setting for any API, or any other endpoint that is expected to be accessed from various origins.

### Use a plugin

If you can't or don't control the server headers, you can use the [Advanced HTTP plugin](https://ionicframework.com/docs/native/http/) (which doesn't enforce CORS) to make
requests. The plugin receives responses natively and passes them back to JavaScript.
