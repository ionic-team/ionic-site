---
layout: v2_fluid/docs_base
category: resources
id: what_are_progressive_web_apps
title: What are Progressive Web Apps?
header_sub_title: Ionic Resources
---

# Progressive Web Apps

### The web...but better

If you want users to discover your web app, you traditionally have two paths.

1. Bundle the app with Cordova, and distribute through the app store.
2. Deploy to a server and point users to your URL.

Both options have their strengths. Cordova allows you to deploy your app and have it installed to the user's home screen. But the traditional server/url approach is easier for user to find and load. What would be great is if there was a way to combine both approaches and have the best of both worlds. Installable apps through the browser. Well, thankfully, with progressive web apps, we can.


### What's required

To be considered a progressive web app, you app must be:

- Progressive - Work for every user, regardless of browser choice because they’re built with progressive enhancement as a core tenet.

- Responsive - Fit any form factor, desktop, mobile, tablet, or whatever is next.

- Connectivity independent - Enhanced with service workers to work offline or on low quality networks.

- App-like - Use the app-shell model to provide app-style navigations and interactions.

- Fresh - Always up-to-date thanks to the service worker update process.

- Safe - Served via HTTPS to prevent snooping and ensure content has not been tampered with.

- Discoverable - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them.

- Re-engageable - Make re-engagement easy through features like push notifications.

- Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.

- Linkable - Easily share via URL and not require complex installation.

_[Addy Osmani: Progressive web apps](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/)_

There's a lot here, but it boils down to a few points for Ionic apps.

#### Offline Support

Apps should be able to work offline. Weather that be displaying a proper "offline" message or caching app data for display purpose.

#### App Manifest

An app manifest file should describe the resources your app will need. This includes your app's displayed name, icons, as well as splash screen. If you link to the manifest file in your index.html, browsers will detect that and load the resources for you.

#### Service Worker

Service worker could be mentioned in Offline Support, but it really deserves its own section. Service worker provides a programmatic way to cache app resources. Be it JavaScript files or JSON data from a HTTP request. The programmatic API allows devs to decide how to handle caching and provides a much more flexible experience than other options.

