---
layout: docs_concepts
title: "Ionic Concepts"
header_title: Ionic Concepts
header_sub_title: The bigger picture of an Ionic App
---

### App Development Process

Ionic is a collection of Angular.js, UI Router, Angular directives, Angular services, JS utilities, and mobile focused CSS styles. These are bundled together as ionic.bundle.js and ionic.css. 

First, you must install the ionic CLI with npm:

```bash
npm install ionic
```

After that, you can start an app using one of our starter templates, or start from scratch, using the command 

```bash
ionic start myApp blank
ionic start myApp tabs 
ionic start myApp sidemenu
```

You can also use a github or codepen URL to start a project from a cool example you may find. 

During the development process, be sure to test on devices often. While Ionic makes it significantly easier to create performant mobile apps, it does not stop you from adding features that are buggy or slow. Please see Caching and Optimization for more tips and tricks for creating performant apps. 

To test on a device, first add the platform:

```bash
ionic add ios 
# or 
ionic add android
```

Then run the command `ionic run android` or `ionic run ios`. If you have the device plugged in, it will run on the device. Otherwise, it will start the respective device’s emulator. Note that the npm package `ios-sim` must be installed for the iOS simulator to be started from the command line.
