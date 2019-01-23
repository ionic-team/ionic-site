---
layout: fluid/docs_base
category: theming
id: sass-variables
title: Sass Variables
header_sub_title: Ionic Theming
prev_page_title: Theming your app
prev_page_link: /docs/theming/theming-your-app/
next_page_title: Platform Specific Styles
next_page_link: /docs/theming/platform-specific-styles/
---

<h1 class="title">Sass Variables</h1>

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/theming/sass-variables/index.md'>
  Improve this doc
</a>

Sass Variables allow you to define a value once and use it in multiple places. Variables begin with dollar signs and are set like CSS properties. You can change the value of the variable in one place, and all instances where it is used will be changed, too. For example, if you wanted to set the same height for two different selectors, you could create a variable called `$control-height`:

```scss
$control-height: 40px;
```

Then, you can use this variable in multiple places. For simplicity's sake, let's assign `$control-height` to the `height` attribute of two selectors:

```scss
.header {
  height: $control-height;
}

.sub-header {
  height: $control-height;
}
```

When translated to CSS, it becomes the following:

```css
.header {
  height: 40px;
}

.sub-header {
  height: 40px;
}
```

This is extremely useful if you decide later on that you would like to change the value of `$control-height`, and it is being used by multiple selectors. Instead of sifting through all of your code to find the places to change, you only have to update the `$control-height` variable.

Sass variables go hand in hand with Ionic. With some CSS frameworks, you have to create a new stylesheet and override their styles to change the look of your application. In Ionic, you can modify the Sass directly, so that the CSS file that gets generated has the customization you want.

Learn how you can override Ionic's Sass variables in order to get a custom style for your app in the [Overriding Ionic Sass Variables section](../overriding-ionic-variables/).
