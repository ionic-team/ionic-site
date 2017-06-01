---
layout: fluid/docs_base
category: resources
id: service-worker
title: Ionic Resources | Service Worker
---

While Progressive Web Apps sound like a new way of building apps, they're actually a culmination of a few different pieces of technology. Service workers are often the most misunderstood and confusing part of a Progressive Web App. They consist of a few main concepts.


### Register

A service worker (`serviceWorker`) is like a specialized version of a general Web Worker. It is a script that runs in a separate thread from the rest of an application. This means that a service worker can perform certain actions in the background. To enable a service worker in your web app, you can add the following to your `index.html`:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('service worker installed'))
      .catch(err => console.log('Error', err));
  }
</script>
```

If the browser supports service workers, we register our `service-worker.js`. This returns a promise that we can handle how ever we want.
While this is pretty self explanatory, let's take a look at the inner workings of our service worker implementation.


### Install

Unlike typical JavaScript, a service worker does not have have a reference to any DOM. This follows the typical behavior of web workers. Instead we reference `self` and use the built in methods of the service worker. For example, if we wanted to handle what happens when the service worker gets installed by the browser, we could do the following:

```javascript
self.addEventListener('install', function(event){
  // only happens once for this version of the service worker
  // wait until the install event has resolved
  event.waitUntil(
    // then create our named cached
    caches
    .open('my-sw-cache')
    .then(function(cache) {
      // once created, lets add some local resouces
      return cache.addAll([
        './build/main.js',
        './build/main.css'
      ]);
    })
    .then(function(){
      console.log('Service worker is ready, and assets are cached');
    });
  );
})
```

### Fetch
We can go even further and cache resources from XHR using the `fetch` event.

```javascript
self.addEventListener("fetch", function(event) {
  // If the request in GET, let the network handle things,
  if (event.request.method !== 'GET') {
    return;
  }
  // here we block the request and handle it our selves
  event.respondWith(
    // Returns a promise of the cache entry that matches the request
    caches
    .match(event.request)
    .then(function(response) {

      // here we can hanlde the request how ever we want.
      // We can reutrn the cache right away if it exisit,
      // or go to network to fetch it.
      // There are more intricate examples below.
      // https://ponyfoo.com/articles/progressive-networking-serviceworker

      if (response) {
        // our responce is in the cache, let's return that instead
        return response;
      }
      // if the responce is not in the cache, let's fetch it
      return fetch(event.request)
        .then(function(response) {
          // we have a responce from the network
          return response;
        }).catch(function(error) {
          // Something happened
          console.error('Fetching failed:', error);
          throw error;
        });
    })
  );
});
```

A fetch event can be handled many different ways, all of which are application specific.
Be sure to consider how your web app should handle the request, as this example will cache everything.
Sometimes that is not always the best, as some data may always need to be up to date.

### Other resources
Service worker, while at first intimidating, is rather approachable once the initial concepts are understood.
It exists as a background context for an app to handle many situations.
As the technology is still changing, it is always best to read the [specification](https://www.w3.org/TR/service-workers/) or [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), as these get updated as the spec evolves.

A base Ionic app also uses [service worker-toolbox](https://github.com/GoogleChrome/sw-toolbox), a utility library (like lodash/jquery) for working with the service worker API. While this doc provides examples uing the raw service worker API, sw-toolbox decorates this a bit. This is already included by default in a new Ionic app, so there's no extra setup required.
