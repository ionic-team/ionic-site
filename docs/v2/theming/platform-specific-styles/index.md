---
layout: v2_fluid/docs_base
category: theming
id: platform-specific-styles
title: Platform Specific Styles
header_sub_title: Ionic Theming
prev_page_title: Platform Specific Theming
prev_page_link: /docs/v2/theming/platform-specific-styles/
next_page_title: Overriding Ionic Variables
next_page_link: /docs/v2/theming/overriding-ionic-variables/
---

<h1 class="title">Platform Specific Styles</h1>
<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/theming/platform-specific-styles/index.md'>
  Improve this doc
</a>


Ionic uses **modes** to customize the look of components. Each **platform** has a default **mode**, but this can be overridden. For example, an app being viewed on an Android platform will use the `md` (Material Design) mode. The `<body>` will have `class="md"` added to it by default and all of the components will use Material Design styles:

```html
<body class="md">
```

The following chart displays the default **mode** that is added to each **platform**:

| Platform        | Mode       | Details                                                                                        |
|-----------------|------------|------------------------------------------------------------------------------------------------|
| `ios`           | `ios`      | Viewing on an `iphone`, `ipad`, or `ipod` will use the iOS styles.                             |
| `android`       | `md`       | Viewing on any android device will use the Material Design styles.                             |
| `windows`       | `wp`       | Viewing on any windows device inside cordova or electron uses the Windows styles.              |
| `core`          | `md`       | Any platform that doesn't fit any of the above platforms will use the Material Design styles.  |


It is important to note that the **platform** and the **mode** are not the same thing. The platform can be set to use any mode in the [config](../../api/config/Config) of an app. See the following section for the default config values for each mode.

## Default Mode Configuration

Each mode has a default configuration. The [configuration properties](../../api/config/Config) can be changed per platform or for all platforms. The following chart displays the default configuration value for each configuration property. See the [Config API Docs](../../api/config/Config) for a description of each property and more information on overriding these values.

| Config Property       | Default `ios` Value        | Default `md` Value            | Default `wp` Value            |
|-----------------------|----------------------------|-------------------------------|-------------------------------|
| `activator`           | `"highlight"`              | `"ripple"`                    | `"highlight"`                 |
| `actionSheetEnter`    | `"action-sheet-slide-in"`  | `"action-sheet-md-slide-in"`  | `"action-sheet-wp-slide-in"`  |
| `actionSheetLeave`    | `"action-sheet-slide-out"` | `"action-sheet-md-slide-out"` | `"action-sheet-wp-slide-out"` |
| `alertEnter`          | `"alert-pop-in"`           | `"alert-md-pop-in"`           | `"alert-wp-pop-in"`           |
| `alertLeave`          | `"alert-pop-out"`          | `"alert-md-pop-out"`          | `"alert-wp-pop-out"`          |
| `backButtonText`      | `"Back"`                   | `""`                          | `""`                          |
| `backButtonIcon`      | `"ios-arrow-back"`         | `"md-arrow-back"`             | `"ios-arrow-back"`            |
| `iconMode`            | `"ios"`                    | `"md"`                        | `"ios"`                       |
| `loadingEnter`        | `"loading-pop-in"`         | `"loading-md-pop-in"`         | `"loading-wp-pop-in"`         |
| `loadingLeave`        | `"loading-pop-out"`        | `"loading-md-pop-out"`        | `"loading-wp-pop-out"`        |
| `menuType`            | `"reveal"`                 | `"overlay"`                   | `"overlay"`                   |
| `modalEnter`          | `"modal-slide-in"`         | `"modal-md-slide-in"`         | `"modal-md-slide-in"`         |
| `modalLeave`          | `"modal-slide-out"`        | `"modal-md-slide-out"`        | `"modal-md-slide-out"`        |
| `pageTransition`      | `"ios-transition"`         | `"md-transition"`             | `"wp-transition"`             |
| `pageTransitionDelay` | `16`                       | `96`                          | `96`                          |
| `pickerEnter`         | `"picker-slide-in"`        | `"picker-slide-in"`           | `"picker-slide-in"`           |
| `pickerLeave`         | `"picker-slide-out"`       | `"picker-slide-out"`          | `"picker-slide-out"`          |
| `spinner`             | `"ios"`                    | `"crescent"`                  | `"circles"`                   |
| `tabbarHighlight`     | `false`                    | `true`                        | `false`                       |
| `tabbarLayout`        | `"icon-top"`               | `"icon-top"`                  | `"icon-top"`                  |
| `tabbarPlacement`     | `"bottom"`                 | `"top"`                       | `"top"`                       |
| `tabSubPages`         | `false`                    | `true`                        | `true`                        |
| `toastEnter`          | `"toast-slide-in"`         | `"toast-md-slide-in"`         | `"toast-wp-slide-in"`         |
| `toastLeave`          | `"toast-slide-out"`        | `"toast-md-slide-out"`        | `"toast-wp-slide-out"`        |


## Overriding the Mode Styles

Each Ionic component has up to three stylesheets used to style it. For example, the tabs component has a core stylesheet that consists of styles shared between all modes, a Material stylesheet which contains the styles for the `md` mode, and an iOS stylesheet for, you guessed it, the `ios` mode. Not all components are styled differently for each mode, so some of them will only have the core stylesheet, or the core stylesheet and one of the modes.

You can use the class that is applied to the body to override specific properties in mode components. For example, if you wanted to override all Material Design (md) mode buttons to have capitalized text:

```scss
.md button {
  text-transform: capitalize;
}
```

The Sass files for these modes also have unique variables that can be used to override the styles. Using the same example above, we could change the `md` button's `border-radius` by changing the value of the `$button-md-border-radius` variable. You can do this in your own custom Sass file or in our main Sass file, before Ionic is imported:

```scss
$button-md-border-radius: 8px;

// Ionic Sass
// ---------------------------------
@import "ionic";
```

## Setting Attributes Dynamically

By setting an attribute dynamically, you can add or remove functionality from a component based on a certain condition. To set an attribute dynamically, use the following syntax:

```html
<ion-list [attr.no-lines]="isMD ? '' : null">
```

This will set the `no-lines` attribute on the list component if `isMD` evaluates to true.
