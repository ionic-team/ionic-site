---
layout: docs_guide
title: "Building the UI for Todo"
chapter: starting
---

Previous: <a href="installation.html">Installing Ionic</a>

# Chapter 3: Starting our App

Now that we've got everything installed and a new Cordova project created, let's jump in and start building a real app!

The Todo list app is pretty much a rite of passage for frameworks, so we will walk through the process of building one with Ionic.

Since every Ionic app is basically a web page, we need to have an `index.html` file in our app which defines the first page that loads in the app. Let's create `www/index.html` and initialize it with this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Todo</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">

    <link href="css/ionic.css" rel="stylesheet">

    <script src="js/ionic.bundle.js"></script>

    <!-- Needed for Cordova/PhoneGap (will be a 404 during development) -->
    <script src="cordova.js"></script>
  </head>
  <body>
  </body>
</html>
```

In the shell above, we are including the Ionic CSS and both the core Ionic JS and the Ionic AngularJS extensions. Ionic-Angular relies on Angular v{{ site.included_angular_version }} as well as some modules, so we also include those (the modules are small in size). Also note that the cordova.js or phonegap.js file must be the last script, and that this file will not be found in your development files, but rather automatically included by the Cordova or Phonegap build.

Now that we have our starting place, we need to figure out what the interface layout of our application is going to be. We have a ton of choices when it comes to UI design on mobile. There are a few standard layouts, like tabs and side menus, but there are practically infinite custom layouts that we could implement if we really wanted to (which Ionic encourages!). For the sake of this example, we are going to pick a simple Side Menu layout which lets us drag and expose a side menu with center content.

In the center content area, we will list the various tasks that we have to get completed for the current project. We can add new tasks, or edit existing ones. If we drag the center content over to the right, we expose the left side menu which lets us choose the current project we want to edit, or create new projects.  Take a look at the mockup below for an example of what we are trying to build:

<img src="http://ionicframework.com.s3.amazonaws.com/guide/0.1.0/3-mockup.png" alt="Mockup">

To create side menus in Ionic, we can use the [Side Menu Controller](http://ionicframework.com/docs/angularjs/controllers/side-menu/). Feel free to read up on it, but the markup needed is simple. Edit the `index.html` file and change the `<body>` content to look like this:

```html
<body>
  <ion-side-menus>
    <ion-pane ion-side-menu-content>
    </ion-pane>
    <ion-side-menu side="left">
    </ion-side-menu>
  </ion-side-menus>
</body>
```

In the code above, we've added our `<ion-side-menus>` controller which will handle the draggng and exposing of the side menu. Inside of the controller we have a `<ion-pane ion-side-menu-content>` which is the center content area of the app, and a `<ion-side-menu side="left">` which is a left, initially hidden, side menu.

Now, if you run this code (more on testing in a bit), you wouldn't see anything! There are two reasons for that: The first is we haven't created an AngularJS app to turn the custom tags (like `<ion-side-menus>`) into anything functional. And, because we don't have any content yet.

Let's fix that. First, we need to create a new AngularJS module and tell Angular to initialize it. Let's create a new file located at `www/js/app.js`. Put this code into the file:

```javascript
angular.module('todo', ['ionic']);
```

This is the Angular way of creating an application, and we are telling angular to include the `ionic` module which includes all of the Ionic code which will process the tags above and make our app come to life.

Now, go back to `index.html` and right before the ending `</head>` tag, add:

```html
<script src="js/app.js"></script>
```

This includes the script we just created.

And to make our new app run, we need to add the `ng-app` attribute to the body tag:

```html
<body ng-app="todo">
```

Now, we still won't see anything if we run the code, because we need to add some content to the application. Let's go ahead and add a header for both the center content area and the left menu.

Update the body content to be:

```html
<body ng-app="todo">
  <ion-side-menus>

    <!-- Center content -->
    <ion-pane ion-side-menu-content>
      <ion-header-bar class="bar bar-header bar-dark">
        <h1 class="title">Todo</h1>
      </ion-header-bar>
      <ion-content has-header="true">
      </ion-content>
    </ion-pane>

    <!-- Left menu -->
    <ion-side-menu side="left">
      <ion-header-bar class="bar bar-header bar-dark">
        <h1 class="title">Projects</h1>
      </ion-header-bar>
    </ion-side-menu>

  </ion-side-menus>
</body>
```

## Testing your work

Now, since we actually have something to look at, we need to talk about the testing and development process for our app. There are four ways to test your app as you develop: in a desktop WebKit browser, in the iOS or Android simulator, in a mobile browser on your phone, or as a native app on the phone.

### Desktop browser testing

Unless you are using custom Cordova plugins, or a lot of Cordova specific code, it's very easy to test in the desktop browser. The easiest thing is to `cd` into the `www` folder, and run

```bash
$ python -m SimpleHTTPServer 8000
```

Substitute SimpleHTTPServer with http.server if your Python version is 3.x (run `python --version` to check). This will start a tiny web server hosting all of the files in the `www` folder. All you have to do to test it is open Chrome or Safari and navigate to `http://localhost:8000`. You should see something that looks like this:

<img src="http://ionicframework.com.s3.amazonaws.com/guide/0.1.0/3-running.png" style="border: 1px solid #ccc; border-radius: 4px;" alt="Running">

Try dragging the center content to the right (works with the mouse as well) to expose the left menu. Smooth like butter!

### Simulator testing

You can also test right in the simulator using the cordova commands from the previous chapter. For example, to test in the iOS simulator, `cd` into the root of the project (one level up from the `www` folder), and run:

```bash
$ cordova build ios
$ cordova emulate ios
```

Substitute ios with android for Android testing. If you want to get advanced, you can also open up the project file for a specific platform by opening the required XCode or Android Eclipse project in `platforms/PLATFORM` inside the root of your project. Then, you can build and test from inside the platform-specific IDE. Note: if you go this route, I recommend still working inside of the root `www` folder, and when you've made changes to this folder, run the command:

```bash
$ cordova prepare ios
```

Which will update the ios specific project with the code from the `www` folder. Note: this will overwrite any changes you've made to the `platforms/ios/www` and other platform-specific folders.

### Mobile browser testing

You can also test the app directly in a mobile browser. For OS X users, Safari on OS X can directly debug websites and simulator applications. First you have to [enable the remote web inspector](http://moduscreate.com/enable-remote-web-inspector-in-ios-6/) on both the device and Safari on desktop. To debug iOS 7 apps, you'll need to upgrade to Safari 6.1 which was released on October 22nd, 2013. Android apps supporting Android 4.4 or above can also use Chrome for remote debugging. Check out the Android docs for [more info](http://developer.android.com/guide/webapps/debugging.html).

If you are using the local server method from the Desktop testing section and you are on the same network as the desktop computer, you can connect to the ip address of the desktop computer to test. So, if our desktop is running a test server at `192.168.1.123:8000`, we can just load that address into our mobile Chrome or Safari to test it.

One problem with testing in a mobile browser is that it's probably the furthest of the three options from the actual app experience. This is largely because the browser app is meant for browsing websites, so it often adds functionality that conflicts with your app. For example, Chrome and Safari both listen for drag events on the sides of the app which let you switch between open tabs. They also have issues with the URL bars getting in the way, and some scrolling behavior is not the same as it is in the web view running in Cordova. It is fine for small tests, but not recommended for more complex apps.

### Testing as a native app

Since we are building a native (or "hybrid") app, we can (and should!) test it as one. There are serveral ways to do this. If you are building for iOS, you'll need to sign up for an [Apple Developer](https://developer.apple.com/) account to test as a native app on an iPhone or iPad. Unfortunately, this costs $99 per year (don't blame us!). Once you have an account and you have set up XCode with your certificates to enable device testing, you'll want to open the XCode project from `platforms/ios/` and do your testing from XCode.

Testing on Android is much easier and faster. To test on the device, simply plug it in, and run

```bash
$ cordova run android
```

If this doesn't work, make sure you have USB debugging enabled on your device, as [described](http://developer.android.com/tools/device.html) on the Android developer site.

Now that we have a shell to test and we know how to test our app, let's start building out the guts of the app!

[Chapter 4: Building out our App](building.html)


