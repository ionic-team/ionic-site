---
layout: v2_fluid/docs_base
category: getting-started
id: tutorial
subid: tutorial
title: Ionic 2 | Getting Started | Tutorial
header_title: Getting Started - Tutorial
header_sub_title: Ionic 2 Developer Preview
---

# Project Structure

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/getting-started/tutorial/project-structure/index.md'>
  Improve this doc
</a>

Let's walk through the anatomy of an Ionic 2 app. Inside of the folder that was created, we have a typical [Cordova](/docs/what-is/#cordova) project structure where we can install native plugins, and create platform-specific project files. The bulk of our application lives inside the `www` folder, and so we are going to spend most of our time there.

<h3 class="file-title">www/index.html</h3>

`www/index.html` is the main entry point for the app, though its purpose is to set up script and CSS includes and `bootstrap`, or start running, our app. We won't spend much of our time in this file.

For your app to function, Ionic looks for the `<ion-app>` tag in your HTML. In this example we have:

```html
<ion-app></ion-app>
```

And the following scripts near the bottom:

```html
<script src="cordova.js"></script>
<script src="build/js/app.bundle.js"></script>
```

- `build/js/app.bundle.js` is a concatenated file containing Ionic, Angular and your app's JavaScript.

- `cordova.js` will 404 during local development, as it gets injected into your project during cordova's build process.

<h3 class="file-title">www/app/app.js</h3>

Inside of the `app` directory we find our pre-compiled Javascript code. This is where most of the work for an Ionic 2 app will take place. When we run `ionic serve`, our code inside of `app/` is [transpiled](/docs/what-is/#transpiler) into the correct Javascript version that the browser understands (currently, [ES5](/docs/what-is/#es5)). That means we can work at a higher level using TypeScript and [ES6+](/docs/what-is/es2015-es6), but compile down to the older form of Javascript the browser needs.

`app/app.js` is the entry point for our app.

Near the top of the file, we should see this:

```ts
@App({
  templateUrl: 'build/app.html'
})
export class MyApp {
  constructor() {
  }
}
```

Every app has a *root component* that essentially controls the rest of the application. This is very similar to `ng-app` from Ionic and Angular 1. To specify a root component with Ionic, we use the `@App` decorator.

In this component, we set the template to be the file at `app/app.html`, let's take a look!

<h3 class="file-title">www/app/app.html</h3>


Here's the main template for the app in `www/app/app.html`:

```html
<ion-menu [content]="content">

  <ion-toolbar>
    <ion-title>Pages</ion-title>
  </ion-toolbar>

  <ion-content>
    <ion-list>
      <button ion-item *ng-for="#p of pages" (click)="openPage(p)">
        {% raw %}{{p.title}}{% endraw %}
      </button>
    </ion-list>
  </ion-content>

</ion-menu>

<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>
```

In this template, we set up an `ion-menu` to function as a side menu, and then a navigation controller
to act as the main content area. The `ion-menu` takes a property of `content`, and we can pass the local variable of `#content` from our `ion-nav`.
This will let the menu know what element should be the main content. The app will let the user select sections from the side menu which will change what they see in the content area. The user will be able to navigate inside the content menu if the section has other pages to navigate to.

Let's go and see how to create more pages and perform basic navigation.

<h3 style="text-align:right;">
  <a href="../adding-pages/" >Adding Pages</a>
</h3>

