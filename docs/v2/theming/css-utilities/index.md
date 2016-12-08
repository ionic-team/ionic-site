---
layout: v2_fluid/docs_base
category: theming
id: css_utilities
title: CSS Utilities
header_sub_title: Ionic Theming
prev_page_title: Sass Variables
prev_page_link: /docs/v2/theming/sass-variables/
next_page_title: Platform Specific Theming
next_page_link: /docs/v2/theming/platform-specific-styles/
---


<h1 class="title">Utility Attributes</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/theming/css-utilities/index.md'>
  Improve this doc
</a>

Ionic provides a set of SCSS/CSS utility attributes that can help when developing your app.

### Text Transformation

| Attribute         | Description                                           |
|-------------------|-------------------------------------------------------|
| `text-left`       | aligns the text of the element to its left            |
| `text-center`     | aligns the text of the element to its center          |
| `text-right`      | aligns the text of the element to its right           |
| `text-justify`    | stretches the lines so that each line has equal width |
| `text-wrap`       | wrap text                                             |
| `text-nowrap`     | don't wrap text                                       |
| `text-uppercase`  | transforms text to all caps                           |
| `text-lowercase ` | transforms text to all lowercase                      |
| `text-capitalize` | transforms the first letter of the text to capitals   |

### Element Padding


| Attribute            | Description                         |
|----------------------|-------------------------------------|
| `padding`            | adds padding to the whole element   |
| `padding-top`        | adds padding-top                    |
| `padding-left`       | adds padding-left                   |
| `padding-right`      | adds padding-right                  |
| `padding-bottom`     | adds padding-bottom                 |
| `padding-vertical`   | adds padding to the top and botttom |
| `padding-horizontal` | adds padding to the left and right  |
| `no-padding`         | removes any padding                 |

### Element Margin


| Attribute            | Description                         |
|----------------------|-------------------------------------|
| `margin`             | adds margin to the whole element    |
| `margin-top`         | adds margin-top                     |
| `margin-left`        | adds margin-left                    |
| `margin-right`       | adds margin-right                   |
| `margin-bottom`      | adds margin-bottom                  |
| `margin-vertical`    | adds margin to the top and botttom  |
| `margin-horizontal`  | adds margin to the left and right   |
| `no-margin`          | removes any margin                  |


### `ion-button` properties

| Attribute | Description                                                                                                |
|-----------|------------------------------------------------------------------------------------------------------------|
| `start`   | Aligns the element at the start based on platform. iOS goes left, Android is the first item on the right   |
| `end`     | Aligns the element at the end based on the platform. iOS goes right, Android is the last item on the right |
| `left`    | Aligns the element on the left side. Overrides the platform specific order                                 |
| `right`   | Aligns the element on the right side. Overrides the platform specific order                                |


### `ion-grid` properties

#### Column Width

| Attribute            | Description                         |
|----------------------|-------------------------------------|
| `width-10`           | 10% of row width                    |
| `width-20`           | 20% of row width                    |
| `width-25`           | 25% of row width                    |
| `width-33`           | 33.3333% of row width               |
| `width-50`           | 50% of row width                    |
| `width-67`           | 66.6666% of row width               |
| `width-75`           | 75% of row width                    |
| `width-80`           | 80% of row width                    |
| `width-90`           | 10% of row width                    |

#### Column Left Offset

| Attribute            | Description                         |
|----------------------|-------------------------------------|
| `offset-10`          | 10% left offset                     |
| `offset-20`          | 20% left offset                     |
| `offset-25`          | 25% left offset                     |
| `offset-33`          | 33.3333% left offset                |
| `offset-50`          | 50% left offset                     |
| `offset-67`          | 66.6666% left offset                |
| `offset-75`          | 75% left offset                     |
| `offset-80`          | 80% left offset                     |
| `offset-90`          | 10% left offset                     |

#### Row Formatting

| Attribute            | Description                         |
|----------------------|-------------------------------------|
| `center`             | Align columns to vertical middle    |
| `baseline`           | Align columns to baseline           |
| `wrap`               | Wrap elements inside row            |
