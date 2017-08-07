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

## Building

The CLI must be used to package your app. The syntax is similar to `ionic
build`. You must specify the platform. Additionally, you must build your app
with a [Security Profile](/services/profiles) (except for Android debug
builds).

In the following examples, fill in the following:

| `PLATFORM_TAG` | `android` or `ios`
| `PROFILE_TAG`  | The Security Profile tag found in Settings › Certificates in the [Dashboard](https://apps.ionic.io)

```bash
$ ionic package build PLATFORM_TAG --profile PROFILE_TAG
```

It first does an upload of your code and then queues your build in the cloud.
Your build will be assigned an ID and will take a few minutes to complete.

### Release Builds

You can build your app for production by specifying the `--release` flag. You
must have a production [Security Profile](/services/profiles) with
corresponding production Apple certificates.

```bash
$ ionic package build PLATFORM_TAG --profile PROFILE_TAG --release
```

## Build Information

Because your app is built asynchronously, you'll need to check the status of
your builds by listing them.

```bash
$ ionic package list
```

### Build Output

If a build fails, you can find out why by viewing the output.

| `BUILD_ID` | The build's ID found with `ionic package list`

```bash
$ ionic package info BUILD_ID
```

## Download

You can download successful builds. This will put the `.ipa` or `.apk` file in
your app's directory.

| `BUILD_ID` | The build's ID found with `ionic package list`

```bash
$ ionic package download BUILD_ID
```

## Customizing Builds

Not all files are sent to the build servers. We use `cordova prepare`
internally, which uses the metadata defined in your `config.xml` to make sure
your app is ready to be built with the native SDKs.

### Plugins

Although your Cordova plugins may be installed locally, they may not be defined
explicitly in your `config.xml`. To ensure that the build servers know about
which plugins you need, use the `--save` flag when adding and removing plugins.

```bash
$ cordova plugin add cordova-plugin-splashscreen --save
```

### Platform Version

You can choose which versions of `cordova-ios` and `cordova-android` to use in
cloud builds.

For example, you can use `cordova-ios` 4.2.1 when building your app (instead of
the most recent version) by installing the platform at a specific version:

```bash
$ cordova platform add ios@4.2.1 --save
```

### Hooks

Custom hooks are not run during cloud builds. Instead, we have a [repository of
common hooks](https://github.com/driftyco/ionic-package-hooks). These hooks
should suit most needs, such as re-enabling HTTP on iOS9, disabling bitcode
during iOS builds, etc.

See [`README.md`](https://github.com/driftyco/ionic-package-hooks#readme) for
documentation and
[`CONTRIBUTING.md`](https://github.com/driftyco/ionic-package-hooks/blob/master/CONTRIBUTING.md#contributing)
if you'd like to submit a hook.
