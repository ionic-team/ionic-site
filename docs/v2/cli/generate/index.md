---
layout: v2_fluid/docs_cli_base
category: cli
id: cli-generate
command_name: generate
title: Ionic 2 | CLI | Generators
header_title: Ionic CLI
header_sub_title: Ionic 2 Developer Preview
---

## Description

Ionic now provides a generator function to create pages and services for your app. This makes going from a basic app to a full featured app with navigation much easier.

To create a page you can use the following command:

```bash
# ionic g page <PageName>
ionic g page myPage

√ Create www/app/my-page/my-page.html
√ Create www/app/my-page/my-page.js
√ Create www/app/my-page/my-page.scss
```

This will give you a html file, sass file, and a js file with your component definition.


To create a service, you can replace `page` with `injectable`:

```bash
ionic g injectable MyData

√ Create www/app/my-data/my-data.js
```

This will create a standard class with a simple `http` get request using Angular's `http` class.

>They're called injectables because to use the class, you first have to annotate it with the `@Injectable()` decorator. This will let you use the class in your app.

### A quick note on naming conventions

Ionic 2 uses kebob-casing for file names (`my-about-page.html`) and css classes (`.my-about-page`), and uses PascalCasing for JavaScript classes in ES6/TypeScript (`MyAboutPage`). Using this convention, developers can pick up any Ionic 2 project and quickly become productive, similar to Rails.

