# RTL support
The goal is to have full RTL support for all of ionic.
If you don't need RTL support, you can set `$include-rtl: false`, and your css bundle will be smaller.
This means that every property that controls horizontal sides (left, right) must go away.

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

### Custom directional support
When you want to add custom directional support (sometimes it is needed), you should do:
```scss
element {
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

### Future properties
- @border (@border-horizontal)
- @transform($translate3d, $scale, $origin-horizontal, $origin-vertical) 
- @background-position($horizontal, $vertical)

### Directional naming
We kept the naming `left` and `right` where possible, to actually mean left and right, both on ltr and on rtl, but added new names: `start` and `end` where `start` means left on ltr, right on rtl, and `end` means right on ltr, left on rtl.

##### New names
- `item-start` & `item-end`
- `icon-start` & `icon-end`
- `side="start"` / `side="end"` for ion-menu (defaults to `start`)
- `padding-start` & `padding-end`
- `margin-start` & `margin-end`
- `text-start` & `text-end`
- `start` and `end` for FABs
- `flip-rtl` and `unflip-rtl` for `ion-icon` (arrows are flipped by default)

##### Deprecated names
- `item-left` & `item-right`
- `icon-left` & `icon-right`

### Disabled properties
- padding
- padding-left
- padding-right
- margin
- margin-left
- margin-right
- right
- left
- border-radius
- border-top-left-radius
- border-top-right-radius
- border-bottom-right-radius
- border-bottom-left-radius
- text-align

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
    <!-- actual ltr -->
    <any dir="rtl">
        <!-- mostly rtl, but inherits some ltr -->
        <any dir="ltr">
            <!-- mostly rtl, but inherits some ltr -->
        </any>
    </any>
</any>
<any dir="rtl">
    <!-- actual rtl -->
</any>
```

### CSS direction support
We can not support `direction: rtl` in scss, because properties like `padding-block-start` are not available in all browsers, and stuff like `float: start` does not exist at all.