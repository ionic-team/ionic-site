---
layout: v2/docs_base
id: theming
title: Ionic Modes
header_title: Ionic Modes
header_sub_title: Ionic Modes
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/theming/ionic-modes/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Ionic Modes</h1>

Ionic uses modes to customize the look of components to match the platform you are using. For example, when you are viewing the app on an Android device, the `<body>` will have `class="md"` added to it by default:

```html
<body class="md">
```

<em>Note: I have removed all other attributes and classes from the `<body>` to only show what the mode looks like when added.</em>

Here is a chart of the default mode that gets added based on platform:

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
    <td>Windows Phone</td>
    <td>md</td>
    <td>Applies Material Design styling to all components.</td>
  </tr>  
  <tr>
    <td>All Other Platforms</td>
    <td>ios</td>
    <td>If you are not on one of the above devices, the app will get iOS styling by default.</td>
  </tr>
</table>

You can change the mode that gets assigned in the configuration of your app. Therefore, if you wanted the Material Design `md` mode on iOS, you could do it.

<h2>Overriding the Mode Styles</h2>

Each Ionic component has up to three stylesheets used to style it. For example, the tabs component has a core stylesheet that consists of styles shared between all modes, a material stylesheet which contains the styles for the `md` mode, and an iOS stylesheet for, you guessed it, the `ios` mode. Not all components are styled differently for each mode, so some of them will only have the core stylesheet, or the core stylesheet and one of the modes.  

You can use the class that is applied to the body to override specific properties in mode components. For example, if you wanted to override all Material Design (md) mode buttons to have capitalized text:

```scss
.md button {
  text-transform: capitalize;
}
```

The Sass files for these modes also have unique variables that can be used to override the styles. Using the same example above, we could change the `md` button's `border-radius` by changing the value of the `$button-md-border-radius` variable. You can do this in your own custom Sass file or in our main Sass file, before Ionic is imported:

```scss
$button-md-border-radius: 8px;

// Ionic Sass
// ---------------------------------
@import "ionic";
```

Continue on to the [next section](../ionic-variables/) to see a list of all of the variables Ionic uses to style your app.
