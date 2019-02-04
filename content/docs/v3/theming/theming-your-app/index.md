---
layout: fluid/docs_base
category: theming
id: theming-your-app
title: Theming your Ionic App
header_sub_title: Ionic Theming
prev_page_title: Intro
prev_page_link: /docs/v3/theming/
next_page_title: Sass Variables
next_page_link: /docs/v3/theming/sass-variables/
---

<h1 class="title">Theming your Ionic App</h1>
<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/theming/theming-your-app/index.md'>
  Improve this doc
</a>

Theme support is baked right into Ionic apps. Changing the theme is as easy as updating the `$colors` [map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) in your `src/theme/variables.scss` file:

```scss
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222
);
```

The fastest way to change the theme of your Ionic app is to set a new value for `primary`, since Ionic uses the `primary` color by default to style most components. Colors can be removed from the map if they aren't being used, but `primary` should not be removed.

## Custom Colors

To use custom color keys, just add them to the `$colors` map:

```scss
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  twitter:    #55acee
);
```

_Note: Adding a color will generate CSS styles for all Ionic components. This inflates the size of your CSS file and can slow down your app. If you only need to use the color in a few places, we recommend adding a new [Sass variable](../sass-variables) for it._

You can customize colors even further by supplying a base and contrast property:

```scss
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  twitter: (
    base: #55acee,
    contrast: #ffffff
  )
);
```

Base acts as the background color and contrast acts as the text color for most components. This provides much more flexible control over your styles.

Ionic makes the `$colors` keys available as a property to many components. For example, to use our `twitter` color, add the key as a property:

```html
<button ion-button color="twitter">I'm a button</button>
```

You can use the `color` function to access any of the `$colors` in your custom styles:

```scss
my-component {
  background: color($colors, twitter, base);
}
```

The `color` function will look up the right color based on the map, the property, and the variant you pass it.
In this case the compile output would be:

```css
my-component {
  background: #55acee;
}
```

