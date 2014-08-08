---
layout: demo_landing
title: "Ionic Framework - Intro App Tutorial Demo"
demo_title: "Multi-page Intro Tutorial"
codepen_id: "AjgEB"
---

Add a simple first-run user tutorial to your apps with the Ionic
`SlideBox` component.

Using the `SlideBox` is super easy, just wrap your `<ion-slide>` pages with the
`<ion-slide-box>` directive in your AngularJS markup and get a powerful and
smooth, swipeable tutorial:

{% highlight html %}
<ion-slide-box>

  <!-- Slide page one -->
  <ion-slide>
    <h2>Welcome!</h2>
    <p>
      Thanks for trying my app.
    </p>
  </ion-slide>

  <!-- Slide page two -->
  <ion-slide>
    <h2>Try this!</h2>
    <p>
      Tap the "Awesome" button anytime you want
      to feel a bit more awesome. It's easy!
    </p>
  </ion-slide>

  <!-- More slides here... -->
</ion-slide-box>
{% endhighlight %}
