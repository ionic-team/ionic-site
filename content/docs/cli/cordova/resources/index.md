---
layout: fluid/cli_docs_base
category: cli
id: cli-cordova-resources
page_name: ionic cordova resources
command_name: ionic cordova resources
title: ionic cordova resources - Ionic CLI Documentation
header_sub_title: Ionic CLI
---


{% comment %}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DO NOT MODIFY THIS FILE DIRECTLY -- IT IS GENERATED FROM THE CLI REPO
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{% endcomment %}


# `$ ionic cordova resources`

Automatically create icon and splash screen resources
## Synopsis

```bash
$ ionic cordova resources [<platform>]
```
  
## Details

Ionic can automatically generate perfectly sized icons and splash screens from source images (**.png**, **.psd**, or **.ai**) for your Cordova platforms.

The source image for icons should ideally be at least **1024×1024px** and located at **resources/icon.png**. The source image for splash screens should ideally be at least **2732×2732px** and located at **resources/splash.png**. If you used `ionic start`, there should already be default Ionic resources in the **resources/** directory, which you can overwrite.

You can also generate platform-specific icons and splash screens by placing them in the respective **resources/&lt;platform&gt;/** directory. For example, to generate an icon for Android, place your image at **resources/android/icon.png**.

By default, this command will not regenerate resources whose source image has not changed. To disable this functionality and always overwrite generated images, use `--force`.

For best results, the splash screen's artwork should roughly fit within a square (**1200×1200px**) at the center of the image. You can use **[https://code.ionicframework.com/resources/splash.psd](https://code.ionicframework.com/resources/splash.psd)** as a template for your splash screen.

`ionic cordova resources` will automatically update your **config.xml** to reflect the changes in the generated images, which Cordova then configures.

Cordova reference documentation:
- Icons: **[https://cordova.apache.org/docs/en/latest/config_ref/images.html](https://cordova.apache.org/docs/en/latest/config_ref/images.html)**
- Splash Screens: **[https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/)**

This command uses Ionic servers, so we require you to be logged into your free Ionic account. Use `ionic login` to login.


Input | Description
----- | ----------
`platform` | The platform for which you would like to generate resources (`android`, `ios`)


Option | Description
------ | ----------
`--force`, `-f` | Force regeneration of resources
`--icon`, `-i` | Generate icon resources
`--splash`, `-s` | Generate splash screen resources

## Examples

```bash
$ ionic cordova resources 
$ ionic cordova resources ios
$ ionic cordova resources android
```
