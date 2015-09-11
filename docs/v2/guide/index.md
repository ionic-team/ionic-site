---
layout: v2/docs_guide
title: Ionic 2 Guide
header_title: Getting Started - Ionic 2 Guide
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/guide/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Ionic 2 Guide</h1>


Welcome to the Ionic 2 Guide. In this guide we will walk through the process of creating a new app based on Ionic 2, adding several views (or "pages") to the app, working with some of the most important controls, and thoughts on getting your app deployed into the app stores.


## Getting Started

To get started, let's go and clone the official [Ionic 2 Starter](https://github.com/driftyco/ionic2-starter), and `cd` into it in a terminal window, along with installing any dependencies we might need. Note: don't type the dollar sign (`$`), it's there to show you how the commands might look in your terminal:


```bash
$ sudo npm install -g gulp (if you haven't installed gulp)
$ cd ionic2-starter
$ npm install
$ gulp watch
```

Next, open up `http://localhost:8100/` in your browser to get a glimpse of your first Ionic 2 app:

<img src="http://ionicframework.com.s3.amazonaws.com/v2/starter1.png" style="max-width: 320px">


## Project Structure

Let's walk through the anatomy of an Ionic 2 app. Inside of the folder that was created, we have a Cordova project structure where we can install native plugins and create platform-specific project files. The bulk of our application lives inside the `www` folder, and so we are going to spend most of our time there.

### www/index.html

`www/index.html` is the main entry point for the app, though its purpose is to set up script and CSS
includes and `bootstrap`, or start running, our app. We won't spend much of our time in this file.

To run your app, Ionic looks for the `<ionic-app>` tag in your HTML. In this example we have:

```html
<ionic-app></ionic-app>
```

And the following scripts near the bottom:

```html
<script src="lib/bundle.js"></script>
<script src="_app/app.bundle.js"></script>
<script>System && System.import && System.import('app/app')</script>
```

`lib/bundle.js` is the bundled Angular, Angular dependencies, and Ionic code.

`_app/app.bundle.js` is the code for your app

Finally, `System.import('app/app')` loads your app entrypoint code and makes it available to Ionic.


### app/app.js

Inside of the `app` directory we find our pre-compiled Javascript code. This is where
most of the work for an Ionic 2 app will take place. When we run `gulp watch`, our code
inside of `app/` is *transpiled* into the correct Javascript version that the browser understands
(currently, ES5). That means we can work at a higher level using TypeScript and ES6+, but
compile down to the older form of Javascript the browser needs.

`app.js` is the entry point for our app.

Near the top of the file, we should see this:

```javascript
@App({
  templateUrl: '_app/app.html'
})
export class MyApp {
  constructor() {
  }
}
```

Every app has a *root component* that essentially controls the rest of the application. This
is very similar to `ng-app` from Ionic and Angular 1. To specify a root component with Ionic,
we use the `@App` decorator.

In this component, we set the template to be the file at `_app/main.html`, let's take a look!

### app/app.html

Notice that our app code referenced the template in `_app/app.html`. This is the final, compiled
path of that template found at `www/_app/app.html`. As developers, we will only edit the version in `app/`.

Here's the main template for the app in `app/app.html`:

```html
{% raw %}
<ion-aside #aside [content]="content">
  <ion-toolbar>
    <ion-title>Menu</ion-title>
  </ion-toolbar>
  <ion-content>
    <ion-list inset>
      <ion-item *ng-for="#c of components" (^click)="openPage(aside, c)">
        {{c.title}}
      </ion-item>
    </ion-list>
  </ion-content>
</ion-aside>

<ion-nav #content [root]="firstPage"></ion-nav>
{% endraw %}
```

In this template, we set up an Aside to function as a side menu, and then a navigation controller
to act as the main content area. The app will let the user select sections from the side
menu which will change what they see in the content area. The user will be able to navigate
inside the content menu if the section has other pages to navigate to.

Let's go and see how to create more pages and perform basic navigation.

<a href="/docs/v2/guide/adding-pages/" button primary>Adding Pages</a>
