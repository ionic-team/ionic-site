---
layout: v2/docs_base
id: theming
title: Ionic 2 Theming
header_title: Theming Ionic Apps
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/theming/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Theming Ionic Apps</h1>

We built Ionic not to be a direct clone of the stock iOS and Android theme, but to
be a blank slate that you can easily customize and modify to fit your brand, while
still following standards of each platform. The best apps in the app stores are fully customized, and we want to make it easy to do the same with your Ionic apps.

We've made theming Ionic 2 apps easier than ever, and themes support any number
of custom colors.

### Starter Themes

When starting Ionic apps using the standard starter templates (either manually or using the `ionic start` command), theming is baked right in.

The theme is configured in the `app/scss/theme.scss` file. Let's open that up:

```scss
$colors: (
  // primary: #387ef5,
)
```

The `$colors` variable is a [Sass Map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) which is a simple key/value association.

By default, Ionic uses the `primary` theme color on all primary elements, like buttons, toggle/checkbox active states, and several other places. The quickest way to add your brand color is to override the primary color map:

```scss
$colors: (
  primary: red
)
```

### Custom Colors

It's easy to add new color names and use them immediately in your code.

For example, let's say we want to add a `myBrand` color:

```scss
$colors: (
  myBrand: #3B5998
)
```

Ionic automatically makes this available on most components. For example, to use this color
on a button:

```html
<button my-brand>Tap!</button>
```

And it just works.
