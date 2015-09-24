---
layout: v2/docs_base
id: theming
title: Overriding Ionic Variables
header_title: Overriding Ionic Variables
header_sub_title: Overriding Ionic's Default Variables
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/theming/overriding-ionic/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Overriding Ionic's Default Variables: <code>!default</code></h1>

From the [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_):

> You can assign to variables if they aren’t already assigned by adding the !default flag to the end of the value. This means that if the variable has already been assigned to, it won’t be re-assigned, but if it doesn’t have a value yet, it will be given one.

Ionic uses the `!default` flag for many of the Sass variables that make up Ionic's css. This makes it extremely easy for you to override any Ionic variables by assigning a value to the variable before Ionic does. For example, Ionic defines the `$text-color` variable like this:

```scss
$text-color: #000 !default;
```

If you wanted to change the value of the `$text-color` variable, you could add the variable directly to the main Sass file at `www/app/app.scss`, before the import of Ionic's Sass file:

```scss
$text-color: #888;

// Ionic Sass
// ---------------------------------
@import "ionic";
```

Or, to keep things structured, you can create your own Sass file and import this file in your `www/app/app.scss` file. Create a file named `custom.scss` in the `www/app/` directory, with the following code:

```scss
/*** www/app/custom.scss ***/
$text-color: #888;
```

And then import the file in your `www/app/app.scss` file:

```scss
@import "custom";

// Ionic Sass
// ---------------------------------
@import "ionic";
```

<em>Note: We do not recommend changing the value of any of the variables in our Sass files directly. When a new version of Ionic is released, these files will be updated, and you will lose any changes you've made to them.</em>

If you think you're ready to start changing variables in your app, a list of all of the variables with the `!default` flag (or all the variables you can override) can be found in the [Ionic Sass Variables](../ionic-variables/) section. However, we recommend reading on to the [next section](../ionic-themes/) to find out how you can use the default themes Ionic provides to further style your app.
