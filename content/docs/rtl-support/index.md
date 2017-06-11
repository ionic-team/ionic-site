# RTL support
The goal is to have full RTL support for all of ionic.
This means that every property that controls horizontal sides (left, right) must go away.

*Note: If your app is always using a specific direction, use `$app-direction: ltr`,  or `$app-direction: rtl` and your css bundle will be smaller.

### Directional mixins
To remove all directional properties, we built mixins to handle them in LTR as default, and for RTL automaically.
The mixins should have the same structure as the full property:
`prop($top, $start: $top, $bottom: $top, $end: $start)`

##### Mixins like:
- @padding (@padding-horizontal)
- @margin (@margin-horizontal)
- @position
- @border-radius
- @text-align
- @transform (@translate3d)
- @transform-origin

### Future Mixins
- @border (@border-horizontal)
- @background-position($horizontal, $vertical)

### Custom directional support
When you want to add custom directional support (sometimes it is needed), you should do:
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

##### Ionicons
- Arrow icons with `forward` or `back` are flipped for RTL.

### Other directional fixes that require merge (remove when merged)
- Menu position - https://github.com/driftyco/ionic/pull/11336 WIP
- iOS page transition - https://github.com/driftyco/ionic/pull/11820
- Slide gesture - https://github.com/driftyco/ionic/pull/11822
- Native input issues - https://github.com/driftyco/ionic/pull/11817
- Toggle - https://github.com/driftyco/ionic/pull/11824
- Item Sliding - https://github.com/driftyco/ionic/pull/11825

### Directional naming
We kept the naming `left` and `right` where possible, to actually mean left and right, both on ltr and on rtl, but added new names: `start` and `end` where `start` means left on ltr, right on rtl, and `end` means right on ltr, left on rtl.
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

### Disabled properties
- padding
- padding-left
- padding-right
- padding-top
- padding-bottom
- margin
- margin-left
- margin-right
- margin-top
- margin-bottom
- right
- left
- border-radius
- border-top-left-radius
- border-top-right-radius
- border-bottom-right-radius
- border-bottom-left-radius
- text-align
- transform-origin

### Deprecated variables
We decided that to get the best support we need to split variables like `$item-margin: 0 1px 2px 3px` to:
- `$item-margin-top: 0;`
- `$item-margin-end: 1px;`
- `$item-margin-bottom: 2px;`
- `$item-margin-start: 3px;`

And to change many variables with `left` or `right` with them to have `start` or `end` instead.
So we deprecated many variables. (Every deprecated variable has `// deprecated` near or above it)

In ionic v3.x, we offer compatibility for deprecated variables, so if you used them, nothing will change in your app. However, in v4 they are planned to be removed

### Platform direction
Currently, if a `dir` attribute is not set on the `html` tag, `platform` will automatically set it to be "ltr", for the scss to work for them as well. We recommend to have an attribute set always, to save a DOM write

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
We can not support `direction: rtl` in scss, because properties like `padding-block-start` are not available in all browsers, and stuff like `float: start` does not exist at all.

### Mixins usage guide:

#### multi-dir, ltr, rtl
- If you want to set styling specifically for ltr or rtl, and no other mixin can help, use that style inside the `ltr` and `rtl` mixins.
```scss
@include ltr() {
  order: 1;
}
@include rtl() {
  order: -1;
}
```
- If you want to use the same style on both directions, and it is direction critical, use that style inside the `multi-dir` mixin.
```scss
@include multi-dir() {
  order: 1;
}
```

#### svg-background-image
- If you are using a background image as an svg, we added another parameter to flip it in rtl.
Previous usage:
```scss
@include svg-background-image($some-svg);
```
New usage, if you want to flip it in rtl:
```scss
@include svg-background-image($some-svg, true);
```

#### padding / margin
- Just like normal padding/margin, it has 4 parameters: `top, end, bottom, start`.
```scss
@include padding(0); // same on both directions
@include padding(0, 1px); // same on both directions
@include padding(0, 1px, 2px); // same on both directions
@include padding(0, 1px, 2px, 3px); // on rtl it would flip to `0 3px 2px 1px`
```
- If you want to use any specific padding/margin (`top`/`right`/`bottom`/`left`), use the mixin with null values.
```scss
@include padding(0, null, null, null); // padding-top
@include padding(null, 0, null, null); // padding-end (padding-right in ltr, padding-left in rtl)
@include padding(null, null, 0, null); // padding-top
@include padding(null, null, null, 0); // padding-start (padding-left in ltr, padding-right in rtl)
```

#### position
- Gets `top, end, bottom, start` and sets position accordingly.
```scss
@include position(0, 1px, 2px, 3px);
// LTR: top: 0, right: 1px, bottom: 2px, left: 3px,
// RTL: top: 0, right: 3px, bottom: 2px, left: 1px,

@include position(0, 1px, null, null);
// LTR: top: 0, right: 1px
// RTL: top: 0, left: 1px,
```

#### border-radius
- Just like the property, it gets up to 4 parameters: `top-start, top-end, bottom-end, bottom-start`
```scss
@include border-radius(50%); // border-radius: 50%
@include border-radius(50%, 0); // border-radius: 50% 0 in ltr, border-radius: 0 50% in rtl
@include border-radius(50%, 0, 1px); // border-radius: 50% 0 1px in ltr, border-radius: 0 50% 0 1px in rtl
@include border-radius(50%, 0, 1px, 2px); // border-radius: 50% 0 1px 2px in ltr, border-radius: 0 50% 2px 1px in rtl
```
- If you want a specific border radius, use with `null`:
```scss
@include border-radius(0, null, null, null); // border-top-left-radius in ltr, border-top-right-radius in rtl 
@include border-radius(null, 0, null, null); // border-top-right-radius in ltr, border-top-left-radius in rtl
@include border-radius(null, null, 0, null); // border-bottom-right-radius in ltr, border-bottom-left-radius in rtl
@include border-radius(null, null, null, 0); // border-bottom-left-radius in ltr, border-bottom-right-radius in rtl
```

### text-align
- Use normally, but try to use `start` and `end` where you can instead of `left` and `right`.
- This mixin just adds a fallback `text-align` in case the browser does not support `start` and `end`.
- In addition, there is a second parameter in which you can pass `!important`

### direction
```scss
@include direction(ltr); // ltr on ltr, rtl on rtl
@include direction(rtl); // rtl on ltr, ltr on rtl
```

### float
```scss
@include float(start); // float: left on ltr, float: right on rtl
@include float(end); // float: right on ltr, float: left on rtl
@include float(left); // float: left
@include float(right); // float: end
@include float(X); // float: X
```

### background-position
- A tiny bit different from the property. Horizontal must be the first property, and vertical the second, can't be the other way around.
```scss
@include background-position(center); // background-position: center
@include background-position(left, top); // background-position: left top
@include background-position(start, top); // background-position: left top on ltr, background-position: right top on rtl
@include background-position(start, 1px, top); // background-position: left 1px top on ltr, background-position: right 1px top on rtl
@include background-position(start, 1px, top, 2px); // background-position: left 1px top 2px on ltr, background-position: right 1px top 2px on rtl
```

### transform-origin
```scss
@include transform-origin(start, X); // transform-origin: left X on ltr, transform-origin: right X on rtl
@include transform-origin(end, X); // transform-origin: right X on ltr, transform-origin: left X on rtl
@include transform-origin(Y, X); // transform-origin: Y X
@include transform-origin(1px, X); // transform-origin: 1px X on ltr, transform-origin: calc(100% - 1px) X on rtl
```

### transform
- Gets all transformations the usual way
```scss
    @include transform(translate3d(1px, 2px, 3px), scale(-1), translateY(1px));
    // LTR: transform: translate3d(1px, 2px, 3px) scale(-1) translateY(1px)
    // RT:: transform: translate3d(calc(-1 * 1px), 2px, 3px) scale(-1) translateY(1px)
```
- In addition, there is `flip-scale` which also flips the scale (of X) on rtl
```scss
    @include transform(translate3d(1px, 2px, 3px), flip-scale(1));
    // LTR: transform: translate3d(1px, 2px, 3px) scale(1)
    // RT:: transform: translate3d(calc(-1 * 1px), 2px, 3px) scale(-1, 1)
```