---
layout: v2/docs_base
id: ui
title: Ionic 2 UI | Buttons
header_title: Buttons - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href="../../api/components/button/Button">Button API Spec</a>
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/buttons/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Buttons</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/buttons/" demo_name="buttons" %}

Buttons are an essential way to interact with an app. They are simple components in Ionic 2, and can be enhanced with a wide range of attributes.

### Basic Usage:

```html
<button primary>Button</button>
```

### Colors:

The `primary` property sets the color of the button. Ionic includes a number of default colors which can be easily overridden:

```html
<button primary>Primary</button>
<button secondary>Secondary</button>
<button danger>Danger</button>
<button stable>Stable</button>
<button light>Light</button>
<button dark>Dark</button>
```

### Shapes:

**Round:**

The `round` property will add rounded corners to a button:

```html
<button round>Round Button</button>
```

**Block:**

Adding `block` to a button will make the button take 100% of its parent's width. It will also add `display: block` to the button:

```html
<button block>Block Button</button>
```

**Full:**

Adding `full` to a button will also make the button take 100% of its parent's width. However, it will also remove the button's left and right borders. This style is useful when the button should stretch across the entire width of the display.

```html
<button full>Full Button</button>
```

**Floating Action Button:**

Adding `fab` to a button will turn it into a floating action button. This is a material design styled button that is meant to draw the user to take a specific action. Fab buttons are positioned absolutely, and their placement can be controlled by adding attributes like `fab-top` and `fab-left`. See the [button API spec](../../api/components/button/Button) for a full list of attributes.

```html
<button fab>FAB</button>
```

### Outlines:

To create outline buttons, just add the `outline` property:

```html
<button primary button-outline>Primary Outline</button>
<button secondary outline>Secondary Outline</button>
<button danger outline>Danger Outline</button>
<button stable outline>Stable Outline</button>
<button light outline>Light Outline</button>
<button dark outline>Dark Outline</button>
```

### Icons:

To add icons to a button, add an icon component inside of it:

```html
<!-- Float the icon left -->
<button>
	<icon home></icon>
	Left Icon
</button>

<!-- Float the icon right -->
<button>
    Right Icon
    <icon home></icon>
</button>

<!-- Only icon (no text) -->
<button>
    <icon home></icon>
</button>
```

### Sizes

Add the `large` attribute to make a button larger, or `small` to make it smaller:

```html
<button large>Large<button>
<button>Default<button>
<button small>Small<button>
```

