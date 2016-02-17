---
layout: v2_fluid/docs_base
category: theming
id: overriding-ionic-variables
title: Overriding Ionic Sass Variables
header_title: Overriding Ionic Styles
header_sub_title: Providing custom values for Ionic styles
header_includes: <link rel="stylesheet" type="text/css" href="style.css">
footer_includes: <script src="app.js"></script>
---

<h1 class="title">Overriding Ionic Sass Variables</h1>
<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/theming/overriding-ionic-variables/index.md'>
  Improve this doc
</a>

There are many variables you can override with Ionic. Any of the following variables can be overridden from your `app/theme/app.variables.scss` file, just add a new value to the file:

```scss
$text-color: #000099;

$colors(
  ...
)
```

<input id="search-sass-input" type="search" placeholder="Filter Sass Variables" class="form-control">

<table id="search-sass-results" class="table">
  <tr>
    <th>Variable Name</th>
    <th>Default Value</th>
    <th>Declared In</th>
  </tr>
</table>
