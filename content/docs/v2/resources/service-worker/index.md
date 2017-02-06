---
layout: v2_fluid/docs_base
category: resources
id: service-worker
title: Ionic 2 Resources | Service Worker
---

While Prgressive Web Apps sound like a a new way of building apps, they're really a culmination of a few different pieces of technology. Of those technologies, service worker is oftern one of the most missunderstood and confusing parts. But it really boils down to a few concepts.


### Register

A service worker (service Worker) is like a specialized version of a general Web Worker. It is a script that run in a separate thread/context from the rest of an app. This means that a service worker can perform certain actions in the backround. To enable a service worker in your web app, you could add the following to your `index.html`

```html
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('service worker installed'))
        .catch(err => console.log('Error', err));
    }
  </script>
```

If the browser supports service worker, we register our `service-worker.js`. This returns a promise that we can handle how ever we want.
Now while this pretty self explanitory, we can look at the inner workings of our service worker implimentation.


### Install

Unlike typical JavaScript, a service worker does not have have a reference to any DOM. This follows the typical behaviour of web workers. Instead we reference `self` and use the built in methods of the Service worker. For example, if we wanted to handle what happens when the service worker get's installed by the browser, we could do the following:

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

A fetch even can be hanlded many different ways, all of which are application specific.
Be sure to consider how your web app should handle the request, as this example will cache everything.
Sometimes that is not always the best, as some data may always need to be up to date.

### Other resources
Service Worker, while at first intimidating, is rather approachable once the inital concepts are understood.
It exists as a background context for an app to handle many situations.
As the technology is stil changing, it is always best to read with the [specification](https://www.w3.org/TR/service-workers/) or [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), as these get updated as the spec evolves.

A base V2 app also uses [service worker-toolbox](https://github.com/GoogleChrome/sw-toolbox), a utility library (like lodash/jquery) for working with the service worker API. While this doc provides examples uing the raw service worker API, sw-toolbox decorates this a bit. This is already included by default in a new app, so there's no extra setup required.
