---
layout: v2/docs_utilities
title: Ionic 2 | Networking
header_title: Ionic 2 - Networking
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/utilities/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Networking</h1>

Sending HTTP requests to a URL is easy with Ionic's `Http` service.

<div class="note">
  <button primary small outline>Note: what happened to $http?</button>
  <div class="info">
    One of the changes in Angular 2's strategy is to do <i>less</i> when it comes to
    providing wrappers for browser utilities. Since the <code>fetch()</code> API is more mature
    and has usable polyfills, Angular 2 no longer provides a convenient <code>$http</code>-style
    service.
    <p />
    We've provided one to make the <code>fetch()</code> API easier to use, especially for the
    use case of sending and receiving JSON data.
  </div>
</div>

```javascript

import {Http} from 'ionic/ionic';

Http.get('http://swapi.co/api/people/1').then((resp) => {
  // Got Luke Skywalker
});

Http.post(myApi, {
  username: 'tim',
}).then((resp) => {
  // Response
}, (err) => {
  // Err
});
```

To send a `PUT/PATCH/DELETE` method, substitute `Http.post()` with the lower-cased method name.

To modify the request, pass a third object to `post/put/patch/delete` or a second object to `get` which follows
the [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object from the fetch API:

```javascript
Http.delete(myApi, {
  reason: 'Because I can'
}, {
  mode: 'cors'
})
```
