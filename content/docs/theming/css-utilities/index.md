---
layout: fluid/docs_base
category: theming
id: responsive-utilities
title: CSS Utilities
header_sub_title: Ionic Theming
header_includes: |
  <link rel="stylesheet" type="text/css" href="../style.css">
  <link rel="stylesheet" type="text/css" href="./style.css">
prev_page_title: Intro
prev_page_link: /docs/theming/
next_page_title: Responsive Grid
next_page_link: /docs/theming/responsive-grid/
---


<h1 class="title">CSS Utilities</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/content/docs/theming/css-utilities/index.md'>
  Improve this doc
</a>

Ionic provides a set of utility attributes that can be used on any element in order to modify the text or adjust the padding or margin.

## Text Modification

### Text Alignment

| Attribute         | Style Rule             | Description                                                                                                                                                         |
|-------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `text-left`       | `text-align: left`     | The inline contents are aligned to the left edge of the line box.                                                                                                   |
| `text-right`      | `text-align: right`    | The inline contents are aligned to the right edge of the line box.                                                                                                  |
| `text-center`     | `text-align: center`   | The inline contents are centered within the line box.                                                                                                               |
| `text-justify`    | `text-align: justify`  | The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. |
| `text-wrap`       | `white-space: nowrap`  | Sequences of whitespace are collapsed. Newline characters in the source are handled as other whitespace. Breaks lines as necessary to fill line boxes.              |
| `text-nowrap`     | `white-space: normal`  | Collapses whitespace as for `normal`, but suppresses line breaks (text wrapping) within text.                                                                       |

<ion-grid>
  <ion-row>
    <ion-col text-left>
      <b>text-left</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col text-right>
      <b>text-right</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col text-center>
      <b>text-center</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col text-justify>
      <b>text-justify</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col text-wrap>
      <b>text-wrap</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col text-nowrap style="min-width: 0; overflow: hidden; text-overflow: ellipsis;">
      <b>text-nowrap</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </ion-col>
  </ion-row>
</ion-grid>

<i>Note: the example above is shown with custom styling.</i>

```html
<div text-left>
  text-left
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
</div>
<div text-right>
  text-right
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
</div>
<div text-center>
  text-center
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
</div>
<div text-justify>
  text-justify
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
</div>
<div text-wrap>
  text-wrap
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
</div>
<div text-nowrap>
  text-nowrap
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
```


### Text Transformation

| Attribute         | Style Rule                   | Description                                                         |
|-------------------|------------------------------|---------------------------------------------------------------------|
| `text-uppercase`  | `text-transform: uppercase`  | Forces all characters to be converted to uppercase.                 |
| `text-lowercase`  | `text-transform: lowercase`  | Forces all characters to be converted to lowercase.                 |
| `text-capitalize` | `text-transform: capitalize` | Forces the first letter of each word to be converted to uppercase.  |

<ion-grid>
  <ion-row>
    <ion-col text-uppercase>
      <b>text-uppercase</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col text-lowercase>
      <b>text-lowercase</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col text-capitalize>
      <b>text-capitalize</b><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
  </ion-row>
</ion-grid>

<i>Note: the example above is shown with custom styling.</i>

```html
<div text-uppercase>
  text-uppercase
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
</div>
<div text-lowercase>
  text-lowercase
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
</div>
<div text-capitalize>
  text-capitalize
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
</div>
```


## Content Space

### Element Padding

The padding attribute sets the padding area of an element. The padding area is the space between the content of the element and its border.

The default amount of `padding` to be applied is set by the `$content-padding` variable to `16px`. Each mode can have a different value for padding by setting `$content-ios-padding`, `$content-md-padding`, or `$content-wp-padding`. See the [overriding ionic variables section](../overriding-ionic-variables/) to change this value.


| Attribute            | Style Rule               | Description                             |
|----------------------|--------------------------|-----------------------------------------|
| `padding`            | `padding: 16px`          | Applies padding to all sides.           |
| `padding-top`        | `padding-top: 16px`      | Applies padding to the top.             |
| `padding-left`       | `padding-left: 16px`     | Applies padding to the left.            |
| `padding-right`      | `padding-right: 16px`    | Applies padding to the right.           |
| `padding-bottom`     | `padding-bottom: 16px`   | Applies padding to the bottom.          |
| `padding-vertical`   | `padding: 16px 0`        | Applies padding to the top and botttom. |
| `padding-horizontal` | `padding: 0 16px`        | Applies padding to the left and right.  |
| `no-padding`         | `padding: 0`             | Applies no padding to all sides.        |


<ion-grid>
  <ion-row>
    <ion-col class="padding-col" padding>
      padding
    </ion-col>
    <ion-col class="padding-col" padding-top>
      padding-top
    </ion-col>
    <ion-col class="padding-col" padding-left>
      padding-left
    </ion-col>
    <ion-col class="padding-col" padding-right>
      padding-right
    </ion-col>
    <ion-col class="padding-col" padding-bottom>
      padding-bottom
    </ion-col>
    <ion-col class="padding-col" padding-vertical>
      padding-vertical
    </ion-col>
    <ion-col class="padding-col" padding-horizontal>
      padding-horizontal
    </ion-col>
    <ion-col class="padding-col" no-padding>
      no-padding
    </ion-col>
  </ion-row>
</ion-grid>

<i>Note: the example above is shown with custom styling to show the padding that gets applied in green.</i>

```html
<div padding>
  padding
</div>
<div padding-top>
  padding-top
</div>
<div padding-left>
  padding-left
</div>
<div padding-right>
  padding-right
</div>
<div padding-bottom>
  padding-bottom
</div>
<div padding-vertical>
  padding-vertical
</div>
<div padding-horizontal>
  padding-horizontal
</div>
<div no-padding>
  no-padding
</div>
```

### Element Margin

The margin area extends the border area with an empty area used to separate the element from its neighbors.

The default amount of `margin` to be applied is set by the `$content-margin` variable to `16px`. Each mode can have a different value for margin by setting `$content-ios-margin`, `$content-md-margin`, or `$content-wp-margin`. See the [overriding ionic variables section](../overriding-ionic-variables/) to change this value.


| Attribute            | Style Rule               | Description                             |
|----------------------|--------------------------|-----------------------------------------|
| `margin`             | `margin: 16px`           | Applies margin to all sides.            |
| `margin-top`         | `margin-top: 16px`       | Applies margin to the top.              |
| `margin-left`        | `margin-left: 16px`      | Applies margin to the left.             |
| `margin-right`       | `margin-right: 16px`     | Applies margin to the right.            |
| `margin-bottom`      | `margin-bottom: 16px`    | Applies margin to the bottom.           |
| `margin-vertical`    | `margin: 16px 0`         | Applies margin to the top and botttom.  |
| `margin-horizontal`  | `margin: 0 16px`         | Applies margin to the left and right.   |
| `no-margin`          | `margin: 0`              | Applies no margin to all sides.         |

<!-- Little bit of faking it here, using padding attributes so we can show it with a background -->
<ion-grid>
  <ion-row>
    <ion-col class="margin-col" padding>
      <div>margin</div>
    </ion-col>
    <ion-col class="margin-col" padding-top>
      <div>margin-top</div>
    </ion-col>
    <ion-col class="margin-col" padding-left>
      <div>margin-left</div>
    </ion-col>
    <ion-col class="margin-col" padding-right>
      <div>margin-right</div>
    </ion-col>
    <ion-col class="margin-col" padding-bottom>
      <div>margin-bottom</div>
    </ion-col>
    <ion-col class="margin-col" padding-vertical>
      <div>margin-vertical</div>
    </ion-col>
    <ion-col class="margin-col" padding-horizontal>
      <div>margin-horizontal</div>
    </ion-col>
    <ion-col class="margin-col" no-padding>
      <div>no-margin</div>
    </ion-col>
  </ion-row>
</ion-grid>

<i>Note: the example above is shown with custom styling to show the margin that gets applied in orange.</i>

```html
<div margin>
  margin
</div>
<div margin-top>
  margin-top
</div>
<div margin-left>
  margin-left
</div>
<div margin-right>
  margin-right
</div>
<div margin-bottom>
  margin-bottom
</div>
<div margin-vertical>
  margin-vertical
</div>
<div margin-horizontal>
  margin-horizontal
</div>
<div no-margin>
  no-margin
</div>
```