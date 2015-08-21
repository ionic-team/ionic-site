---
layout: docs_platform_customization
title: Dynamically Loading Templates
header_sub_title: An overview of customizing your Ionic app based on the platform
chapter: true
---

# Dynamically Loading Templates

Sometimes showing or changing elements based on the platform isn't enough. There may be times when you need to use two different structures for your project, and placing the logic in the HTML isn't desired. In this case, you can use `ionic.Platform` to decide which template to load in a given state. For example, the following code will load the `templates/home-android.html` file if the platform is Android, and `templates/home.html` for all other platforms:

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
