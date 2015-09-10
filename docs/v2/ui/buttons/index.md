---
layout: v2/docs_ui
title: Ionic 2 UI | Buttons
header_title: Buttons - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---

<h1 class="title">Buttons</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/buttons/" demo_name="buttons" %}

Buttons are a simple CSS component in Ionic 2:

```html
<button primary>Button</button>
```

The `primary` property sets the color of the button. Ionic includes a number of default colors which can be easily overridden:

```html
<button primary>Primary</button>
<button secondary>Secondary</button>
<button danger>Danger</button>
<button stable>Stable</button>
<button light>Light</button>
<button dark>Dark</button>
```

To create outline buttons, just add the `outline` property:

```html
<button primary button-outline>Primary Outline</button>
<button secondary outline>Secondary Outline</button>
<button danger outline>Danger Outline</button>
<button stable outline>Stable Outline</button>
<button light outline>Light Outline</button>
<button dark outline>Dark Outline</button>
```

To add icons to a button, add the `icon` property:

```html
<button icon><i class="icon ion-ios-ionic-outline"></i></button>
```
