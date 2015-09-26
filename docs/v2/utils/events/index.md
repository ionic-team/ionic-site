---
layout: v2/docs_base
id: utils
title: Events | Ionic 2
header_title: Events
header_sub_title: Pub/sub events for your app
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/utilities/events.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Events</h1>

Ionic provides a publish/subscribe event system for application-level events.

## Sending and Receiving Events

Use the `Events` service to `subscribe` to event channels to receive events of that type. Use `publish` to publsh a new
event to subscribers of that type.

```javascript
export class MyApp {
  constructor(events: Events) {
    var userCreatedHandler = (user) => {
      // User created
    };

    // Listening to new events
    events.subscribe('user:created', userCreatedHander);
  }

  createUser() {
    // user created...
    var results = events.publish('user:created', {
      name: 'Ionitron',
      email: 'ionitron@ionic.io'
      id: 1
    })
  }
}
```

## Unsubscribing from events

To stop recieving events of a given type, use `unsubscribe`

```javascript
// Ignore `user:created` events
events.unsubscribe('user:created', userCreatedHandler);

// Or leave userCreatedHandler empty to remove ALL handlers on that event channel.
```
