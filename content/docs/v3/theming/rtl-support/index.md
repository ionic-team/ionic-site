---
layout: fluid/docs_base
category: theming
id: rtl-support
title: RTL Support
header_sub_title: Ionic Theming
prev_page_title: Overriding Ionic Sass Variables
prev_page_link: /docs/theming/overriding-ionic-variables/
---

Ionic offers full LTR and RTL support for apps of all languages. If you have any custom styles that are applied to your app, you might want to use some built in mixins that will address the multi-directional needs.

### Enabling support

By default, apps are set to LTR only. To enable support for multi-directional apps, change the `$app-direction` variable to `multi`

```scss
$app-direction: multi // Both RTL and LTR
```

If you know your app will only ever be in either RTL or LTR, you can lock the direction.

```scss
$app-direction: rtl // RTL only apps
// or
$app-direction: ltr // LTR only apps
```

This has the added benefit of also keeping the generated CSS a bit smaller as well.


### Directional mixins
To remove all directional properties, there are mixins added that handle directions in LTR and RTL automaically.
The mixins should have the same structure as the full property:
`prop($top, $start: $top, $bottom: $top, $end: $start)`

##### Mixins:
- @padding (@padding-horizontal)
- @margin (@margin-horizontal)
- @position
- @border-radius
- @text-align
- @transform
- @transform-origin
- @background-position


### Custom directional support

If your custom styles need additional rules applied for RTL/LTR, you can use the `ltr()` and `rtl()` functions:

```scss
selector {
    // Include directional properties
    @include padding(0, 10px, null, 5px);

    // Direction agnostic style goes here
    background-color: black;

    @include ltr() {
        // Custom ltr style goes here
        float: left;
    }

    @include rtl() {
        // Custom rtl style goes here
        float: right;
    }
}
```



### Directional properties

We kept the properties `left` and `right` where possible, to actually mean left and right, regardless of app direction
To make things work well in both directions, we added new properties:  `start` and `end`.
where `start` means left on ltr, right on rtl, and `end` means right on ltr, left on rtl.

We recommend using just `start` and `end`, as for 99% of the cases those are the correct sides on both directions.

##### New names
- `item-start` & `item-end`
- `icon-start` & `icon-end`
- `side="start"` & `side="end"` for ion-menu (defaults to `start`)
- `padding-start` & `padding-end`
- `margin-start` & `margin-end`
- `text-start` & `text-end`
- `start` and `end` for FABs

##### Deprecated names
- `item-left` & `item-right`
- `icon-left` & `icon-right`


### Deprecated variables

In order to best support multidirectional apps, we felt it was needed to deprecate some sass variables:

- `$item-margin-top: 0;`
- `$item-margin-end: 1px;`
- `$item-margin-bottom: 2px;`
- `$item-margin-start: 3px;`

And to change many variables with `left` or `right` with them to have `start` or `end` instead.
These sass variables will continue to stay in the framework, until the next major release (4.x).
We strongly suggest that you update your variables sooner than later.

### Platform direction

Currently, if a `dir` attribute is not set on the `html` tag, `platform` will automatically set it to be "ltr", for the scss to work for them as well.
We recommend that you set the attribute before hand though as it is much faster.

### Nesting directions

There is no support for nested directions.
For example:
```html
<any dir="ltr">
    <!-- ltr -->
    <any dir="rtl">
        <!-- rtl -->
    </any>
</any>
<any dir="rtl">
    <!-- rtl -->
    <any dir="ltr">
        <!-- rtl -->
    </any>
</any>
```

### Real-time direction change
You can change the direction in real time (`platform.setDir('rtl', true)`), but currently we are aware that some things might get stuck in a direction, and aren't correct. (Style that is controlled from TS)
We recommend setting the direction as in-advance as possible, but plan to fix the real time directional support.

### CSS direction support
We cannot support `direction: rtl` in scss, because properties like `padding-block-start` are not available in all browsers, and rules like `float: start` does not exist at all.

### Mixins usage guide:

#### multi-dir, ltr, rtl

If you want to set styling specifically for ltr or rtl, and no other mixin can help, use that style inside the `ltr` and `rtl` mixins.

```scss
@include ltr() {
  order: 1;
}
@include rtl() {
  order: -1;
}
```

If you want to use the same style on both directions, and it is direction critical, use that style inside the `multi-dir` mixin.

```scss
@include multi-dir() {
  order: 1;
}
```


#### svg-background-image

If you are using a background image as an svg, we added another parameter to flip it in rtl.

Previous usage:

```scss
@include svg-background-image($some-svg);
```

New usage, if you want to flip it in rtl:

```scss
@include svg-background-image($some-svg, true);
```

#### padding / margin

Just like normal padding/margin, it has 4 parameters: `top, end, bottom, start`.

```scss
@include padding(0); // same on both directions
@include padding(0, 1px); // same on both directions
@include padding(0, 1px, 2px); // same on both directions
@include padding(0, 1px, 2px, 3px); // on rtl it would flip to `0 3px 2px 1px`
```

If you want to use any specific padding/margin (`top`/`right`/`bottom`/`left`), use the mixin with null values.

```scss
@include padding(0, null, null, null); // padding-top
@include padding(null, 0, null, null); // padding-end (padding-right in ltr, padding-left in rtl)
@include padding(null, null, 0, null); // padding-top
@include padding(null, null, null, 0); // padding-start (padding-left in ltr, padding-right in rtl)
```

#### position

Gets `top, end, bottom, start` and sets position accordingly.

```scss
@include position(0, 1px, 2px, 3px);
// LTR: top: 0, right: 1px, bottom: 2px, left: 3px,
// RTL: top: 0, right: 3px, bottom: 2px, left: 1px,

@include position(0, 1px, null, null);
// LTR: top: 0, right: 1px
// RTL: top: 0, left: 1px,
```

#### border-radius

Just like the  property, it gets up to 4 parameters: `top-start, top-end, bottom-end, bottom-start`

```scss
@include border-radius(50%); // border-radius: 50%
@include border-radius(50%, 0); // border-radius: 50% 0 in ltr, border-radius: 0 50% in rtl
@include border-radius(50%, 0, 1px); // border-radius: 50% 0 1px in ltr, border-radius: 0 50% 0 1px in rtl
@include border-radius(50%, 0, 1px, 2px); // border-radius: 50% 0 1px 2px in ltr, border-radius: 0 50% 2px 1px in rtl
```

If you want a specific border radius, use with `null`:

```scss
@include border-radius(0, null, null, null); // border-top-left-radius in ltr, border-top-right-radius in rtl
@include border-radius(null, 0, null, null); // border-top-right-radius in ltr, border-top-left-radius in rtl
@include border-radius(null, null, 0, null); // border-bottom-right-radius in ltr, border-bottom-left-radius in rtl
@include border-radius(null, null, null, 0); // border-bottom-left-radius in ltr, border-bottom-right-radius in rtl
```

#### text-align

Use like you normally would, but try to use `start` and `end` instead of `left` and `right`. This mixin just adds a fallback `text-align` in case the browser does not support `start` and `end`. In addition, there is a second parameter in which you can pass `!important`

```scss
div {
  @include text-align('start')
}

h1 {
  @include text-align('center')
}
```

#### direction

```scss
@include direction(ltr); // ltr on ltr, rtl on rtl
@include direction(rtl); // rtl on ltr, ltr on rtl
```

#### float

```scss
@include float(start); // float: left on ltr, float: right on rtl
@include float(end); // float: right on ltr, float: left on rtl
@include float(left); // float: left
@include float(right); // float: end
@include float(X); // float: X
```

#### background-position

A tiny bit different from the property. Horizontal must be the first property, and vertical the second, can't be the other way around.

```scss
@include background-position(center); // background-position: center
@include background-position(left, top); // background-position: left top
@include background-position(start, top); // background-position: left top on ltr, background-position: right top on rtl
@include background-position(start, 1px, top); // background-position: left 1px top on ltr, background-position: right 1px top on rtl
@include background-position(start, 1px, top, 2px); // background-position: left 1px top 2px on ltr, background-position: right 1px top 2px on rtl
```

#### transform-origin

```scss
@include transform-origin(start, X); // transform-origin: left X on ltr, transform-origin: right X on rtl
@include transform-origin(end, X); // transform-origin: right X on ltr, transform-origin: left X on rtl
@include transform-origin(Y, X); // transform-origin: Y X
@include transform-origin(1px, X); // transform-origin: 1px X on ltr, transform-origin: calc(100% - 1px) X on rtl
```

#### transform

Gets all transformations the usual way

```scss
    @include transform(translate3d(1px, 2px, 3px), scale(-1), translateY(1px));
    // LTR: transform: translate3d(1px, 2px, 3px) scale(-1) translateY(1px)
    // RTL: transform: translate3d(calc(-1 * 1px), 2px, 3px) scale(-1) translateY(1px)
```

In addition, there is `flip-scale` which also flips the scale (of X) on rtl

```scss
    @include transform(translate3d(1px, 2px, 3px), flip-scale(1));
    // LTR: transform: translate3d(1px, 2px, 3px) scale(1)
    // RTL: transform: translate3d(calc(-1 * 1px), 2px, 3px) scale(-1, 1)
```
