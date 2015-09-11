---
layout: v2/docs_ui
title: Ionic 2 UI | Animation
header_title: Animation
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/animation/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Animation</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/animations/" demo_name="animations" %}

Ionic comes with a powerful Animation system based on the Web Animation API.

Unlike CSS animations, Ionic animations can be easily triggered based on events
and support interactive "scrubbing": the ability to manually step through an animation
such as during a drag gesture.

```ts

// Import it
import {Animation} from 'ionic/ionic';

export class MyComponent {
  
  // Create a new animation
  var ionitron = document.querySelector('#ionitron');
  var spin = new Animation(ionitron);

  // Add a CSS transform
  spin
    .from('transform', 'rotate(0deg)')
    .to('transform', 'rotate(360deg)')

  // Register the animation with your component
  this.animation.add(spin);

  // Start the animation when the play button is tapped
  play() {
    this.animation.play();
  }

}
```

Animations also support physics curves like `spring` to build animations and UIs that feel real.

See the full list of possible easing curves in [animation.js](https://github.com/driftyco/ionic2/blob/9b80cffedb9398376e69bdc2afc3440a4d0c39e0/ionic/animations/animation.js#L629).
