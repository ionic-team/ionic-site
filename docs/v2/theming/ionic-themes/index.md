---
layout: v2/docs_base
id: theming
title: Ionic Themes
header_title: Ionic Themes
header_sub_title: Ionic Themes
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/theming/ionic-themes/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Ionic Themes</h1>

When starting Ionic apps using the standard starter templates, either manually or using the `ionic start` command, theming is baked right in.

## Starter Themes

The default theme is configured in the source code of the [default.scss](https://github.com/driftyco/ionic2/blob/master/ionic/themes/default.scss) file. If you open that up you'll see it has the variable `$colors`:

```scss
$colors: (

  primary:    #387ef5,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,

) !default;
```

The `$colors` variable is a [Sass Map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps), which is an association between keys and values, where keys are used to look up values.

The fastest and easiest way to brand the app with your color is to override the `primary` color value. In your `www/app/app.scss` file in your project, you can change the value of `primary`:

```scss
$colors: (

  primary: #ff0000

)

// Ionic Sass
// ---------------------------------
@import "ionic";
```

You can change the values of any of the variables in the default theme, or leave them as they are and use them in your app. By default, Ionic uses the primary theme color on all elements. For example, a button with the following markup:

```html
<a button>I'm a button</a>
```

is the same as writing:

```html
<a button primary>I'm a button</a>
```

Since these elements are already styled using the `primary` color without adding the `primary`, you can use less markup to change the color of all elements without attributes.

There is also a [dark.scss](https://github.com/driftyco/ionic2/blob/master/ionic/themes/dark.scss) theme provided if you don't want to use the default theme. You can import this theme before the Ionic Sass files in your `www/app/app.scss` file in order to use that theme:

```html
@import "themes/dark";

// Ionic Sass
// ---------------------------------
@import "ionic";
```

## Custom Colors

If you don't want to use any of the colors we have defined in the default themes, it's easy to add new colors and then use them to style your app.

For example, you can add a `myBrand` color like below:

```scss
$colors: (

  my-brand: #3B5998

)
```

Ionic automatically makes this available on most components. For example, to use this color
on a button, you can add the following markup:

```html
<button my-brand>Tap!</button>
```

And it will style your button using the `myBrand` color. You can add as many colors as you want, or remove all of them, it's completely up to you.

If you want to change the way your app looks on different platforms, the [next section](../ionic-modes/) on Ionic Modes is what you need to continue making the app your own.
