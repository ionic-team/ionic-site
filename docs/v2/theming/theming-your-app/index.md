---
layout: v2_fluid/docs_base
category: theming
id: theming-your-app
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

Theme support is baked right in to your Ionic apps. To change the theme, just tweak the `$colors` [map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) in your `www/app/app.scss` file:

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

To add custom colors, just add them to the `$colors` map:

```scss
$colors: (
  // ...
  twitter:    #55acee
)
```

Ionic makes the `$colors` keys available as a property to many components. For example, to use our `twitter` color, add the key as a property:

```html
<button twitter>I'm a button</button>
```

## Dark theme

By default, Ionic comes with a light and dark theme. To use the dark theme, import it before the Ionic Sass files in your `app.scss` file:

```scss
@import "themes/dark";

// Ionic Sass
// ---------------------------------
@import "ionic";
```

## Platform Specific Styles

To change the look of your app on different platforms, continue to the [next section](../platform-specific-styles/).
