---
layout: fluid/docs_base
category: theming
id: platform-specific-styles
title: Platform Specific Styles
header_sub_title: Ionic Theming
prev_page_title: Responsive Grid
prev_page_link: /docs/v3/theming/responsive-grid/
next_page_title: Overriding Ionic Variables
next_page_link: /docs/v3/theming/overriding-ionic-variables/
---

<h1 class="title">Platform Specific Styles</h1>
<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/theming/platform-specific-styles/index.md'>
  Improve this doc
</a>


Ionic uses **modes** to customize the look of components. Each **platform** has a default **mode**, but this can be overridden. For example, an app being viewed on an Android platform will use the `md` (Material Design) mode. The `<ion-app>` will have `class="md"` added to it by default and all of the components will use Material Design styles:

```html
<ion-app class="md">
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
| `popoverEnter`        | `"popover-pop-in"`         | `"popover-md-pop-in"`         | `"popover-md-pop-in"`         |
| `popoverLeave`        | `"popover-pop-out"`        | `"popover-md-pop-out"`        | `"popover-md-pop-out"`        |
| `spinner`             | `"ios"`                    | `"crescent"`                  | `"circles"`                   |
| `tabsHighlight`       | `false`                    | `false`                       | `false`                       |
| `tabsLayout`          | `"icon-top"`               | `"icon-top"`                  | `"icon-top"`                  |
| `tabsPlacement`       | `"bottom"`                 | `"bottom"`                    | `"top"`                       |
| `tabsHideOnSubPages`  | `false`                    | `false`                       | `true`                        |
| `toastEnter`          | `"toast-slide-in"`         | `"toast-md-slide-in"`         | `"toast-wp-slide-in"`         |
| `toastLeave`          | `"toast-slide-out"`        | `"toast-md-slide-out"`        | `"toast-wp-slide-out"`        |


## Overriding the Mode Styles

Each Ionic component has up to three stylesheets used to style it. For example, the tabs component has a core stylesheet that consists of styles shared between all modes, a Material Design stylesheet which contains the styles for the `md` mode, an iOS stylesheet for the `ios` mode, and a Windows stylesheet for the `wp` mode. Not all components are styled differently for each mode, so some of them will only have the core stylesheet, or the core stylesheet and one of the mode stylesheets.

You can use the class that is applied to the `ion-app` to override styles. For example, if you wanted to override all buttons in Material Design (md) mode to have capitalized text:

```css
.md .button {
  text-transform: capitalize;
}
```

The mode is also combined with the component name and then added as a class to each component. The above could be simplified to only target Material Design buttons by using:

```
.button-md {
  text-transform: capitalize;
}
```

The Sass files for these modes also have unique variables that can be used to override the styles. Using the same example above, we could change the `md` button's `border-radius` by changing the value of the `$button-md-border-radius` variable. You should do this in the `src/theme/variables.scss` file, before the Ionic theme is imported:

```scss
// App Material Design Variables
// --------------------------------------------------
// Material Design only Sass variables can go here

$button-md-border-radius: 8px;
```
