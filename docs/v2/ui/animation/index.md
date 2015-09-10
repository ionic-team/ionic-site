---
layout: v2/docs_ui
title: Ionic 2 UI | Animation
header_title: Animation - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---

<h1 class="title">Animation</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/animations/" demo_name="animations" %}

Ionic comes with a powerful Animation system based on the Web Animation API.

Unlike CSS animations, Ionic animations can be easily triggered based on events
and support interactive "scrubbing": the ability to manually step through an animation
such as during a drag gesture.

```javascript

// Import it
import {Animation} from 'ionic/ionic';

//...

export class MyComponent {

  fadeOut() {
    // To
    new Animation(myElement)
      .easing('ease-in-out')
      .fromTo('opacity', 0, 1)
      .play()
      .then(() => {
        console.log('Animation done');
      })
  }

  onDrag(event) {

    // To step through an animation, pass a value from 0 to 1
    // that represents the percentage completion of the animation
    myAnimation.progress(dx / total);
  }
}
```

Animations also support physics curves like `spring` to build animations
and UIs that feel real.

See the full list of possible easing curves in [animation.js](https://github.com/driftyco/ionic2/blob/9b80cffedb9398376e69bdc2afc3440a4d0c39e0/ionic/animations/animation.js#L629).
