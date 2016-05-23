---
layout: v2_fluid/docs_base
category: getting-started
id: tutorial
subid: tutorial
title: Project Structure - Tutorial
header_sub_title: Getting Started with Ionic
prev_page_title: Learn the basics
prev_page_link: /docs/v2/getting-started/tutorial/
next_page_title: Adding Pages
next_page_link: /docs/v2/getting-started/tutorial/adding-pages
---

# Project Structure

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/getting-started/tutorial/project-structure/index.md'>
  Improve this doc
</a>

Let's walk through the anatomy of an Ionic 2 app. Inside of the folder that was created, we have a typical [Cordova](/docs/what-is/#cordova) project structure where we can install native plugins, and create platform-specific project files. The bulk of our application lives inside the `app` folder, and so we are going to spend most of our time there.

<h3 class="file-title">./www/index.html</h3>

`www/index.html` is the main entry point for the app, though its purpose is to set up script and CSS includes and bootstrap, or start running, our app. We won't spend much of our time in this file.

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

- `cordova.js` will 404 during local development, as it gets injected into your project during Cordova's build process.

<h3 class="file-title">./app/app.js</h3>

Inside of the `app` directory we find our pre-compiled code. This is where most of the work for an Ionic 2 app will take place. When we run `ionic serve`, our code inside of `app/` is [transpiled](docs/v2/resources/what-is/#transpiler) into the correct Javascript version that the browser understands (currently, [ES5](/docs/v2/resources/what-is/#es5)). That means we can work at a higher level using TypeScript and [ES6+](docs/v2/resources/what-is/#es2015-es6), but compile down to the older form of Javascript the browser needs.

`app/app.js` is the entry point for our app.

Near the top of the file, we should see this:

```ts
@App({
  templateUrl: 'build/app.html'
})
class MyApp {
  constructor() {
  }
}
```

Every app has a *root component* that essentially controls the rest of the application. This is very similar to `ng-app` from Ionic and Angular 1. To specify a root component with Ionic, we use the `@App` decorator.

In this component, we set the template to be the file at `build/app.html`, which is a compiled version of `app/app.html`, let's take a look!

<h3 class="file-title">./app/app.html</h3>


Here's the main template for the app in `app/app.html`:

```html
<ion-menu [content]="content">

  <ion-toolbar>
    <ion-title>Pages</ion-title>
  </ion-toolbar>

  <ion-content>
    <ion-list>
      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">
        {% raw %}{{p.title}}{% endraw %}
      </button>
    </ion-list>
  </ion-content>

</ion-menu>

<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>
```

In this template, we set up an [`ion-menu`](/docs/v2/components/#menus) to function as a side menu, and then an [`ion-nav`](/docs/v2/api/components/nav/Nav/) component to act as the main content area. The [`ion-menu`](/docs/v2/components/#menus)'s `[content]` property is bound to the local variable `content` from our [`ion-nav`](/docs/v2/api/components/nav/Nav/), so it knows where it should animate around.

Next let's see how to create more pages and perform basic navigation.
