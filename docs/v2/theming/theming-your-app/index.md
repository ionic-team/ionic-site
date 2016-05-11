---
layout: v2_fluid/docs_base
category: theming
id: theming-your-app
title: Theming your Ionic App
header_sub_title: Ionic Theming
prev_page_title: Intro
prev_page_link: /docs/v2/theming/
next_page_title: Sass Variables
next_page_link: /docs/v2/theming/sass-variables/
---

<h1 class="title">Theming your Ionic App</h1>
<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/theming/theming-your-app/index.md'>
  Improve this doc
</a>

Theme support is baked right in to your Ionic apps. To change the theme, just tweak the `$colors` [map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) in your `app/theme/app.variables.scss` file:

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

You can customize this further by supplying a base and contrast property.

```scss
$colors: (
  // ...
  twitter:(
    base: #55acee,
    contrast: #ffffff
  )
)
```
Base normally acts as the background color for elements and contrast acts as the text color. This provides a much more flexible control over your styles.


Ionic makes the `$colors` keys available as a property to many components. For example, to use our `twitter` color, add the key as a property:

```html
<button twitter>I'm a button</button>
```

For any custom components, you can use the `color` function to get the right colors.

```scss
my-component {
  background : color($colors, twitter, contrast)
}
```

The `color` function will look up the right color based on the map, the property, and the variant you pass it.
In this case the compile output would be:

```css
my-component {
  background : #55acee
}
```

