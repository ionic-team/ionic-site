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
    <!-- actual ltr -->
    <any dir="rtl">
        <!-- mostly rtl, but inherits some ltr -->
    </any>
</any>
<any dir="rtl">
    <!-- actual rtl -->
    <any dir="ltr">
        <!-- mostly rtl, but inherits some ltr -->
    </any>
</any>
```

### Real-time direction change
You can change the direction in real time (`platform.setDir('rtl', true)`), but currently we are aware that some things might get stuck in a direction, and aren't correct. (Style that is controlled from TS)
We recommend setting the direction as in-advance as possible, but plan to fix the real time directional support.

### CSS direction support
We can not support `direction: rtl` in scss, because properties like `padding-block-start` are not available in all browsers, and stuff like `float: start` does not exist at all.