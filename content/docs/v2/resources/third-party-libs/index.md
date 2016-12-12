---
layout: v2_fluid/docs_base
category: resources
id: third-party-libs
title: Ionic 2 Resources | Third Party Libraries
footer_includes: |
  <script src="//cdnjs.cloudflare.com/ajax/libs/anchor-js/3.2.0/anchor.min.js"></script>
  <script>
   anchors.options.placement = 'left';
    anchors.add('.v2.docs.page-third-party-libs main h2, .v2.docs.page-third-party-libs main h3');
  </script>
---


While there are many great built-in features in Ionic, there's some functionality that doesn't make sense for the core framework. For these use cases, apps can fall back on the rich ecosystem of libraries published on [NPM](https://www.npmjs.com). NPM's command line tool makes it easy to add and manage any additional packages.

If you want to read more about NPM and the command line tools, check out [NPM's docs](https://docs.npmjs.com/) before proceeding.


### Installation

To add an additional library to your app, you can run:

```bash
npm install <theLibraryName> --save
```

For example, to install Lodash:

```bash
npm install lodash --save
```

`install` will download a copy of the library from NPM, and save it in your app's `node_modules` directory.  `--save` will tell the NPM CLI to add an entry to your app’s `package.json` dependency list.

If this was _just_ JavaScript, the process above would be enough for installing third party libraries. But Ionic uses TypeScript, there is an additional step to the process.

Since TypeScript utilizes [static types](https://en.wikipedia.org/wiki/Type_system#STATIC), we need to be able to "describe" code we want to use and import. TypeScript does this through type definitions. The TypeScript team actually maintains a large collection of these, which can be installed through NPM as well.

Similar to our library installation, we can run:

```bash
npm install @types/theLibraryName --save
```

For our Lodash example, we can run:

```bash
npm install @types/lodash --save
```

In the rare case that types don't exist for your library, there are two options to proceed. The simple option is to create a short-hand type definition. A more complicated and time consuming option is to create a create a complete type definition.

### Creating Short-hand Definition

In the app's `src/` directory, make a new file called `declarations.d.ts`. The `.d.ts` denotes that the file is a definition file and not actual code.

In the file, we can add a line to `declare` our module:

```typescript
declare module 'theLibraryName';
```

All this does is tell the Typescript compiler that the module is found, and it is an object of `any` type. This will allow the library to be used freely without the Typescript compiler giving errors.

Going back to the Lodash example, we can write:

```typescript
declare module 'lodash';
```

Now we can declare several definitions in this file, so if you ended up using multiple libraries that do not have types, it's really easy to just drop them into your `declarations.d.ts`.

```typescript
declare module 'theLibraryName';
declare module 'anotherLibraryName';
declare module 'someOtherLibraryName';
```

### Using Libraries

After installing the library and its type definition, we can use it by importing the library.

Import statement follow a simple pattern.

```typescript
import { myFunction } from 'theLibraryName';
```

We first import the named exported function and say were it's from. This pattern is called the `named exports` approach. This is considered the best practice as it only imports the portion of the library that is needed - `myFunction` in the case above. This is exactly what is being done in your app when you import `Component` from Angular or `NavController` for Ionic.

```typescript
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
```

There are some cases where importing a specific portion of a library is not possible. Typically, this is the case with older libraries written for the [Node Environments](https://nodejs.org/en/). These follow the older [CommonJS module](https://nodejs.org/docs/latest/api/modules.html) pattern.

In that case, the library can be used but must be imported using the `default` export approach.

```typescript
import myLib from 'theLibraryName';
```

The default export maps one-to-one with a CommonJS `module.exports` attribute, meaning `myLib` has access to all properties, functions, etc that are exposed.

To call `myFunction` to follow our example above, the code would look like this:

```typescript
import myLib from 'theLibraryName';
myLib.myFunction();
```

Here’s an example of calling the `capitalize` method in Lodash.

```typescript
import lodash from 'lodash';
lodash.capitalize('myStringToCapitalize');
```

The best practice is to always try to import libraries using the `named export` approach, and only switching to the `default export` approach if there is an error when building.

### Troubleshooting

With most libraries, everything should "just works" out of the box. In some rare cases, the build process might need changes made to build. The Ionic build process allows you to easily extend the default settings with [custom configs](https://github.com/driftyco/ionic-app-scripts#custom-config-files).
