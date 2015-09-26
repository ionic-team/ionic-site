---
layout: v2/docs_base
id: theming
title: Theming your Ionic app
header_title: Theming your App
header_sub_title: Customizing your app to fit your brand
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/theming/theming-your-app/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Theming your Ionic App</h1>

Theme support is baked right in to your Ionic apps. To change the theme, just tweak the `$colors` variable in your `www/app/app.scss` file:

```scss
$colors: (

  primary:    #387ef5,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,

);

```

The fastest way to change the theme of your Ionic app is to set a new value for `primary`, since Ionic uses the primary color by default for buttons and other components.

## Custom Colors

To add custom colors, just add them to the map:

```scss
$colors: (
  // ...
  twitter: #55acee
)
```

Ionic makes color types available as a property to many components. For example, to use our `twitter` color, add it as a property:
```html
<button twitter>I'm a button</button>
```

## Dark theme

By default, Ionic comes with a light and dark theme. To use the dark theme, download the [dark.scss](https://github.com/driftyco/ionic2/blob/master/ionic/themes/dark.scss) file and put it into your `www/app/themes` directory. Then, use it in your `app.scss` file:

```html
@import "themes/dark";
```

## Platform styles

To change the look of your app on different platforms, continue to the [Platform Specific Styles](../platform-specific-styles/) guide.
