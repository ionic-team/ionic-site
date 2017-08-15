---
layout: fluid/pro_docs_base
category: pro
id: pro-native-builds
title: Native Binary Builds - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Building Native Binaries

Ionic Pro makes it easy to build native app binaries for iOS and Android in the cloud. Perfect for automating binary builds and for developers using Windows that want to build iOS apps.

## Prerequisites

<div class="condensed" markdown="1">
* A Security Profile with App Credentials (see [Android App
  Keystore](/services/profiles/#android-app-keystore) and [iOS App Certificate
  & Provisioning
  Profile](/services/profiles/#ios-app-certificate--provisioning-profile))
</div>

## Uploading your Certs

After yo uhave generated your Security Profile, you must upload it to Ionic Pro. Navigate to your App, then click on Settings Tab and choose Certificates on the left hand side.

Click the **Add Profile** button to create a new Profile. Both iOS and Android certifications can be used with one Profile, so we recommend making things like "Real App Store Profile", etc.

Once that Profile has been created, click the **Edit** button for it and upload your iOS and Android certs.

## Performing a Build

Click on the **Code** tab of your App, you should be at your **Builds** list. Click on the **Package** button for the Build you'd like to get a Native binary for.

In the Package GUI you'll be able to choose the type of Build you want to perform, and the Cert you'd like to use. You'll then be taken to the History tab while the build completes. After the build completes, click Download and you'll get your native binary!