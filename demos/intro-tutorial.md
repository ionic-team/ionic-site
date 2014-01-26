---
layout: demo_landing
title: "Ionic Framework - Intro App Tutorial Demo"
demo_title: "Multi-page Intro Tutorial"
codepen_id: "AjgEB"
---

Add a simple first-run user tutorial to your apps with the Ionic
`SlideBox` component.

Using the `SlideBox` is super easy, just wrap your `<slide>` pages with the
`<slide-box>` directive in your AngularJS markup and get a powerful and
smooth, swipeable tutorial:

{% highlight html %}
<slide-box>

  <!-- Slide page one -->
  <slide>
    <h2>Welcome!</h2>
    <p>
      Thanks for trying my app.
    </p>
  </slide>

  <!-- Slide page two -->
  <slide>
    <h2>Try this!</h2>
    <p>
      Tap the "Awesome" button anytime you want
      to feel a bit more awesome. It's easy!
    </p>
  </slide>

  <!-- More slides here... -->
</slide-box>
{% endhighlight %}