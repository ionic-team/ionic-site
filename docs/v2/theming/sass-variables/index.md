---
layout: v2/docs_base
id: theming
title: Ionic 2 Sass Variables
header_title: Ionic Sass Variables
header_sub_title: Ionic 2 Sass Variables
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/theming/sass-variables/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Sass Variables</h1>

Sass Variables allow you to define a value once and use it in multiple places. Variables begin with dollar signs, and are set like CSS properties. You can change the value of the variable in one place and all instances where it is used will be changed, too. For example, if you wanted to set the same height for two different selectors, you could create a variable called `$control-height`:

```sass
$control-height: 40px;
```

Then, you can use this variable in multiple places. For simplicity's sake, we are going to assign `$control-height` to the `height` attribute of two selectors:

```sass
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

This is extremely useful if you decide later on that you would like to change the value of `$control-height` and it is being used by multiple selectors. Instead of sifting through all of your code to find the places to change, you only have to update the `$control-height` variable.

Sass variables go hand in hand with Ionic. With some CSS frameworks, you have to create a new stylesheet and override their styles in order to change the look of your application. In Ionic, you can modify the Sass directly so that the CSS file that gets generated has the customization you want.

<h2>Overriding Ionic's Default Variables: <code>!default</code></h2>

From the [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_):

> You can assign to variables if they aren’t already assigned by adding the !default flag to the end of the value. This means that if the variable has already been assigned to, it won’t be re-assigned, but if it doesn’t have a value yet, it will be given one.

Ionic uses the `!default` flag for all defined Sass variables. This makes it extremely easy for you to override any Ionic variables by assigning a value to the variable before Ionic does. For example, Ionic defines the `$text-color` variable like below:

```sass
$text-color: #000 !default;
```

If you wanted to change the value of the `$text-color` variable, you can create your own Sass file with this variable and include this file prior to importing the Ionic Sass files, or you could add the variable directly to the main Sass file:

```sass
$text-color: #888;

// Ionic Sass
// ---------------------------------
@import "ionic";
```

<h2>Using Ionic Modes in Sass</h2>

Ionic uses modes in order to customize the look of components to match the platform you are using. For example, by default when you are viewing the app on an Android device, the `<body>` will have `class="md"` added to it:

```html
<body class="md">
```

Note: I have removed all other attributes and classes from the `<body>` to only show what the mode looks like when added. Here is a chart of the default mode that gets added based on platform:

<table class="table">
  <tr>
    <th>Platform</th>
    <th>Mode</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>iOS</td>
    <td>ios</td>
    <td>Applies iOS styling to all components.</td>
  </tr>
  <tr>
    <td>Android</td>
    <td>md</td>
    <td>Applies Material Design styling to all components.</td>
  </tr>  
  <tr>
    <td>All Other Platforms</td>
    <td>ios</td>
    <td>If you are on neither an iOS or an Android device, the app will get iOS styling by default.</td>
  </tr>
</table>

You can change the mode that gets assigned in the configuration of your app. Therefore, if you wanted the Material Design `md` mode on iOS, you could do it.

<h3><a name="overriding-modes" href="#overriding-modes">Overriding the Mode Styles</a></h3>

Each Ionic component has up to three stylesheets used to style it. For example, the tabs component has a core stylesheet which consists of styles shared between all modes, a material stylesheet which contains the styles for the `md` mode, and an iOS stylesheet for, you guessed it, the `ios` mode. Not all components are styled differently for each mode, so some of them will only have the core stylesheet, or the core stylesheet and one of the modes.  

You can use the class that is applied to the body to override specific properties in mode components. For example, if you wanted to override all Material Design (md) mode buttons to have capitalized text:

```sass
.md {
  button {
    text-transform: capitalize;
  }
}
```

The Sass files for these modes also have unique variables which can be used to override the styles. Using the same example above, we could change the `md` button's `border-radius` by changing the value of the `$button-md-border-radius` variable in our main Sass file, before Ionic is imported:

```sass
$button-md-border-radius: 8px;

// Ionic Sass
// ---------------------------------
@import "ionic";
```

<h2>Sass Variables used in Ionic</h2>

<input id="search-sass-input" type="search" placeholder="Filter Sass Variables" class="form-control">

<table id="search-sass-results" class="table sass-variables-table">
  <tr>
    <th>Variable Name</th>
    <th>File Declared In</th>
    <th>Default Variable</th>
  </tr>
</table>
