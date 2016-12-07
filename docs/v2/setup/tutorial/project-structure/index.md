---
layout: v2_fluid/docs_base
category: setup
id: tutorial
subid: tutorial
title: Project Structure - Tutorial
header_sub_title: Getting Started with Ionic
prev_page_title: Learn the basics
prev_page_link: /docs/v2/setup/tutorial/
next_page_title: Adding Pages
next_page_link: /docs/v2/setup/tutorial/adding-pages
---

# Project Structure

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/setup/tutorial/project-structure/index.md'>
  Improve this doc
</a>

Let's walk through the anatomy of an Ionic 2 app. Inside of the folder that was created, we have a typical [Cordova](/docs/what-is/#cordova) project structure where we can install native plugins, and create platform-specific project files.

<h3 class="file-title">./src/index.html</h3>

`src/index.html` is the main entry point for the app, though its purpose is to set up script and CSS includes and bootstrap, or start running, our app. We won't spend much of our time in this file.

For your app to function, Ionic looks for the `<ion-app>` tag in your HTML. In this example we have:

```html
<ion-app></ion-app>
```

And the following scripts near the bottom:

```html
<script src="cordova.js"></script>
<script src="build/main.js"></script>
```

- `build/main.js` is a concatenated file containing Ionic, Angular and your app's JavaScript.

- `cordova.js` will 404 during local development, as it gets injected into your project during Cordova's build process.

<h3 class="file-title">./src/</h3>

Inside of the `src` directory we find our raw, uncompiled code. This is where most of the work for an Ionic 2 app will take place. When we run `ionic serve`, our code inside of `src/` is [transpiled](/docs/v2/resources/what-is/#transpiler) into the correct Javascript version that the browser understands (currently, [ES5](/docs/v2/resources/what-is/#es5)). That means we can work at a higher level using TypeScript, but compile down to the older form of Javascript the browser needs.

`src/app/app.module.ts` is the entry point for our app.

Near the top of the file, we should see this:

```ts

@NgModule({
  declarations: [MyApp,HelloIonicPage, ItemDetailsPage, ListPage],
  imports: [IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,HelloIonicPage,ItemDetailsPage,ListPage],
  providers: []
})
export class AppModule {}
```

Every app has a *root module* that essentially controls the rest of the application. This is very similar to `ng-app` from Ionic and Angular 1. This is also where we bootstrap our app using `ionicBootstrap`.

In this module, we're setting the root component to MyApp, in `src/app/app.component.ts`. This is the first component that gets loaded in our app, and it typically is an empty shell for other components to be loaded into. In `app.component.ts`, we're setting our template to `src/app/app.html`, so let's look in there.

<h3 class="file-title">./src/app/app.html</h3>


Here's the main template for the app in `src/app/app.html`:

```html
<ion-menu [content]="content">

  <ion-header>
    <ion-toolbar>
      <ion-title>Pages</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">
        {% raw %}{{p.title}}{% endraw %}
      </button>
    </ion-list>
  </ion-content>

</ion-menu>

<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
```

In this template, we set up an [`ion-menu`](/docs/v2/components/#menus) to function as a side menu, and then an [`ion-nav`](/docs/v2/api/components/nav/Nav/) component to act as the main content area. The [`ion-menu`](/docs/v2/components/#menus)'s `[content]` property is bound to the local variable `content` from our [`ion-nav`](/docs/v2/api/components/nav/Nav/), so it knows where it should animate around.

Next let's see how to create more pages and perform basic navigation.
