---
layout: v2_fluid/docs_base
category: cli
id: concepts
title: Ionic 2 | CLI | Overview
header_title: Ionic CLI
header_sub_title: Ionic 2 Developer Preview
---


## CLI 2.0

Ionic 2 brings a lot of new changes to your typical development process. To make development much easier, the CLI has been upgraded to include many useful features.

## Generators

Ionic now provides a generator function to create pages and services for your app. This makes going from a basic app to a full featured app with navigation much easier.

To create a page you can use the following command

```bash
# ionic g page <PageName>
ionic g page myPage

√ Create www/app/my-page/my-page.html
√ Create www/app/my-page/my-page.js
√ Create www/app/my-page/my-page.scss
```

This will give you a html file, sass file, and a js file with your component definition.


To create service, you can replace `page` with `injectable`

```bash
ionic g injectable MyData

√ Create www/app/my-data/my-data.js
```

This will create a standard class with a simple `http` get request using Angular's `http` class

>They're called injectable because to use the class, you first have to annotate it with the `@Injectable()` decorator. This will let you use the class in your app.

### A quick note on naming conventions

For Ionic 2, it uses kabob-casing for file names (my-about-page.html) and css classes (.my-about-page), and using PascalCasing for JavaScript classes in ES6/TypeScript (MyAboutPage).
Using this convention, developers can pick up any Ionic 2 project and be productive, similar to rails.


