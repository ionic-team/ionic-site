---
layout: fluid/docs_base
category: resources
id: third-party-libs
title: Ionic Resources | Third Party Libraries
footer_includes: |
  <script src="//cdnjs.cloudflare.com/ajax/libs/anchor-js/3.2.0/anchor.min.js"></script>
  <script>
   anchors.options.placement = 'left';
    anchors.add('.v2.docs.page-third-party-libs main h2, .v2.docs.page-third-party-libs main h3');
  </script>
---

# Adding Third Party Libs

{% include fluid/toc.html %}

While there are many great built-in features in Ionic, there's some functionality that doesn't make sense for the core framework. For these use cases, apps can fall back on the rich ecosystem of libraries published on [NPM](https://www.npmjs.com). NPM's command line tool makes it easy to add and manage any additional packages.

If you want to read more about NPM and the command line tools, check out [NPM's docs](https://docs.npmjs.com/) before proceeding.

## Installation Using NPM

To add a third party library to an app, run the following command:

```bash
npm install <theLibraryName> --save
```

For example, to install the popular library Lodash:

```bash
npm install lodash --save
```

`npm install` will download a copy of the library from NPM and save it in your app's `node_modules` directory.  `--save` will tell the NPM CLI to add an entry to your app’s `package.json` dependency list. The library is now ready to use.

## Using Libraries

After installing the library, we must import it into our code to use it.

Import statements can follow two simple patterns: using a `named export` and using a `default export`. The best practice is to use the `named export` pattern whenever possible. If it doesn't work correctly, fall back to the `default export`.

```typescript
// named export pattern
import { myFunction } from 'theLibraryName';
...
// use the imported functionality
myFunction();
```

-- OR --

```typescript
// default export pattern
import myLibrary from 'theLibraryName';
...
// call the function on the object
myLibrary.myFunction();
```


### Examples and Additional Details

Angular and Ionic components are imported using the `named export` pattern, as are standard compliant third-party libraries.

```typescript
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
```

Using the `named export` pattern is preferred and considered best practice because it only imports/includes the portion of the library that is needed. This results in smaller, faster apps.

In some cases, importing a specific portion of a library isn't possible. Typically, this is the case with older libraries written for the [Node Environments](https://nodejs.org/en/) that don't follow the ES2015 Module standard.

In that case, the library can be used but must be imported using the `default` export approach.

```typescript
import myLib from 'theLibraryName';
myLib.myFunction();
```

Here’s an example of calling the `capitalize` method in Lodash.

```typescript
import lodash from 'lodash';
lodash.capitalize('myStringToCapitalize');
```

## Type Definitions

Third Party libraries work with Ionic just like they would for any other JavaScript project utilizing `npm`. Often, these libraries don't have intellisense information for IDEs and editors. Adding a Type Definition will enable intellisense and ensure correctness of the program. To add a Type Definition for a Library, we can again utilize `npm` and the `@types` namespace maintained by the TypeScript community.

To install a Type Definition, execute the following command:

```bash
npm install @types/theLibraryName --save
```

For example, to install the Type Definitions for Lodash:

```bash
npm install @types/lodash --save
```

## Troubleshooting

### Using console.dir
If you're unsure of the "shape" of the object being imported, using `console.dir` can be very helpful.

```
import lodash from 'lodash'
console.dir(lodash);
```

`console.dir` prints out all of the important details about an object and its API.

### Custom Build Configuration
With most libraries, everything "just works" out of the box. In some rare cases, the build process might need changes made to build. The Ionic build process allows you to easily extend the default settings with [custom configs](https://github.com/ionic-team/ionic-app-scripts#custom-config-files).
