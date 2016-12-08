---
layout: docs_platform_customization
title: Dynamically Loading Templates
header_sub_title: An overview of customizing your Ionic app based on the platform
chapter: true
---

# Dynamically Loading Templates

Sometimes showing or changing elements based on the platform isn't enough. There may be times when you need to use two different structures for your project, and you don't want to place the logic in the HTML. In these cases, you can use `ionic.Platform` to decide which template to load in a given state. For example, the following code will load the `templates/home-android.html` file if the platform is Android, and `templates/home.html` for all other platforms:

```javascript
.state('tab', {
  url: "/tab",
  abstract: true,
  controller: 'AppCtrl',
  templateUrl: function() {
    if (ionic.Platform.isAndroid()) {
        return  "templates/home-android.html";
    }
    return "templates/home.html";
  }
})
```

## Merges Directory

The `merges` directory is no longer added by default in a project, but it is still a powerful tool in customizing your app. You can create this directory at the top level of your project, alongside the `www` and `platforms` directory. From the [Cordova docs](http://cordova.apache.org/docs/en/3.5.0/guide_cli_index.md.html#The%20Command-Line%20Interface_using_merges_to_customize_each_platform):

> The top-level `merges` directory offers a place to specify assets to deploy on specific platforms. Each platform-specific subdirectory within `merges` mirrors the directory structure of the `www` source tree, allowing you to override or add files as needed.

For example, if you wanted to have a platform-specific `index.html` file, you would create the following directory structure:

```
merges/
    ios/
        index.html
    android/
        index.html
```

If you wanted to have platform-specific styles or javascript, you could override those, too:

```
merges/
    ios/
        index.html
        css/
            platform.css
        js/
            app.js
    android/
        index.html
        css/
            platform.css
        js/
            app.js
```

Cordova will copy the platform specific files to the `www` directory in the `platforms` directory when you run the app. Note that you will not be able to see these differences in the browser, only when you run the app on a device or simulator.
