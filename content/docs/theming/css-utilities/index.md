---
layout: fluid/docs_base
category: theming
id: css_utilities
title: CSS Utilities
header_sub_title: Ionic Theming
prev_page_title: Sass Variables
prev_page_link: /docs//theming/sass-variables/
next_page_title: Platform Specific Theming
next_page_link: /docs//theming/platform-specific-styles/
---


<h1 class="title">Utility Attributes</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/content/docs//theming/css-utilities/index.md'>
  Improve this doc
</a>

Ionic provides a set of SCSS/CSS utility attributes that can help when developing your app.

### Text Transformation

| Attribute         | Description                                           |
|-------------------|-------------------------------------------------------|
| `text-left`       | Aligns the text of the element to its left            |
| `text-center`     | Aligns the text of the element to its center          |
| `text-right`      | Aligns the text of the element to its right           |
| `text-justify`    | Stretches the lines so that each line has equal width |
| `text-wrap`       | Wraps text                                             |
| `text-nowrap`     | Don't wrap text                                       |
| `text-uppercase`  | Transforms text to all caps                           |
| `text-lowercase ` | Transforms text to all lowercase                      |
| `text-capitalize` | Transforms the first letter of the text to capitals   |

### Element Padding


| Attribute            | Description                         |
|----------------------|-------------------------------------|
| `padding`            | Adds padding to the whole element   |
| `padding-top`        | Adds padding-top                    |
| `padding-left`       | Adds padding-left                   |
| `padding-right`      | Adds padding-right                  |
| `padding-bottom`     | Adds padding-bottom                 |
| `padding-vertical`   | Adds padding to the top and botttom |
| `padding-horizontal` | Adds padding to the left and right  |
| `no-padding`         | Removes any padding                 |

### Element Margin


| Attribute            | Description                         |
|----------------------|-------------------------------------|
| `margin`             | Adds margin to the whole element    |
| `margin-top`         | Adds margin-top                     |
| `margin-left`        | Adds margin-left                    |
| `margin-right`       | Adds margin-right                   |
| `margin-bottom`      | Adds margin-bottom                  |
| `margin-vertical`    | Adds margin to the top and botttom  |
| `margin-horizontal`  | Adds margin to the left and right   |
| `no-margin`          | Removes any margin                  |


### `ion-buttons` property

| Attribute | Description                                                                                                |
|-----------|------------------------------------------------------------------------------------------------------------|
| `start`   | Aligns the element at the start based on platform. iOS goes left, Android is the first item on the right   |
| `end`     | Aligns the element at the end based on the platform. iOS goes right, Android is the last item on the right |
| `left`    | Aligns the element on the left side. Overrides the platform specific order                                 |
| `right`   | Aligns the element on the right side. Overrides the platform specific order                                |


### `ion-checkbox, ion-select, ion-toggle` property

| Attribute         | Description                                           |
|-------------------|-------------------------------------------------------|
| `item-left`       | Aligns the control to the left of the `ion-label`     |
| `item-right`      | Aligns the control to the right of the `ion-label`    |
