---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/page/tap/"

title: "tap"
header_sub_title: "Page in module ionic"
doc: "tap"
docType: "page"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/utils/tap.js#L2'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  tap



</h1>





On touch devices such as a phone or tablet, some browsers implement a 300ms delay between
the time the user stops touching the display and the moment the browser executes the
click. This delay was initially introduced so the browser can know whether the user wants to
double-tap to zoom in on the webpage.  Basically, the browser waits roughly 300ms to see if
the user is double-tapping, or just tapping on the display once.

Out of the box, Ionic automatically removes the 300ms delay in order to make Ionic apps
feel more "native" like. Resultingly, other solutions such as
[fastclick](https://github.com/ftlabs/fastclick) and Angular's
[ngTouch](https://docs.angularjs.org/api/ngTouch) should not be included, to avoid conflicts.

Some browsers already remove the delay with certain settings, such as the CSS property
`touch-events: none` or with specific meta tag viewport values. However, each of these
browsers still handle clicks differently, such as when to fire off or cancel the event
(like scrolling when the target is a button, or holding a button down).
For browsers that already remove the 300ms delay, consider Ionic's tap system as a way to
normalize how clicks are handled across the various devices so there's an expected response
no matter what the device, platform or version. Additionally, Ionic will prevent
ghostclicks which even browsers that remove the delay still experience.

In some cases, third-party libraries may also be working with touch events which can interfere
with the tap system. For example, mapping libraries like Google or Leaflet Maps often implement
a touch detection system which conflicts with Ionic's tap system.

### Disabling the tap system

To disable the tap for an element and all of its children elements,
add the attribute `data-tap-disabled="true"`.

```html
<div data-tap-disabled="true">
    <div id="google-map"></div>
</div>
```

### Additional Notes:

- Ionic tap  works with Ionic's JavaScript scrolling
- Elements can come and go from the DOM and Ionic tap doesn't keep adding and removing
  listeners
- No "tap delay" after the first "tap" (you can tap as fast as you want, they all click)
- Minimal events listeners, only being added to document
- Correct focus in/out on each input type (select, textearea, range) on each platform/device
- Shows and hides virtual keyboard correctly for each platform/device
- Works with labels surrounding inputs
- Does not fire off a click if the user moves the pointer too far
- Adds and removes an 'activated' css class
- Multiple [unit tests](https://github.com/driftyco/ionic/blob/master/test/unit/utils/tap.unit.js) for each scenario










  

  
  
  






