---
layout: v2_fluid/docs_base
category: resources
id: third-party-libs
title: Ionic 2 Resources | Third Party Libraries
---

# Third Party libraries in Ionic Apps

Ionic Framework provides a comprehensive solution to take an app from idea to production. However, There are some use cases that are outside of the scope of Ionic. For these use cases, Ionic apps can fall back on the rich ecosystem of libraries published on [Node Package Manager](https://www.npmjs.com), better known as NPM. NPM is a command line tool to managing an application’s dependencies.

This article makes the assumption that you’re moderately familiar with NPM and how to use it. If you’re not, please review the [NPM documentation](https://docs.npmjs.com/) before proceeding.


## Installing third party libraries

To install a third party library into an Ionic application, open a command line terminal and navigate to the application’s directory. From there, execute the following command:

```
npm install theLibraryName --save
```

For example, here’s how the popular library Lodash would be installed:

```
npm install lodash --save
```

The `npm install` command will download a copy of the library from NPM, and save it in the application’s `node_modules` directory. It will also add an entry to the application’s `package.json` dependency list.

If Ionic used pure javascript, the step above would be sufficient for installing the third party library. Since Ionic utilizes [Typescript](https://www.typescriptlang.org/) instead of pure javascript, there is an additional step to the process.

Typescript introduces a concept of optional [static types](https://en.wikipedia.org/wiki/Type_system#STATIC). To install a third party library, that means we must also install or create a `type definition` for the library. Fortunately, Microsoft has created a very large ecosystem for acquiring and downloading community maintained `type definition` files. The best part is it uses `npm` too, so there isn’t a new tool to install or learn.

To install a `type definition` file, enter the following command:
```
npm install @types/theLibraryName --save
```

If this command looks and feels very similar to how a library is installed, that’s because it is. We’re executing almost the exact same command, except we’re telling NPM to look into the `@types` namespace for the type definition files.

For example, here’s how the popular library lodash’s `type definition` file would be installed

```
npm install @types/lodash --save
```

9 times out of 10, NPM does all of the heavy lifting so we can focus on our app. The `@types` ecosystem is mature and typically kept up to date. It is open source and if there is an error in a `type definition` file, it can be corrected via [DefinitelyTyped](http://definitelytyped.org/).

In the rare case that an `@types/theLibraryName` doesn’t exist, that means that no one has created and shared a `type definition` for the library yet. In this case, there are two options to proceed. The simple option is to create a short-hand type definition. A more complicated and time consuming option is to create a create a complete type definition, but that is outside of the scope of this article.

### Creating a Short-hand Type Definition
This is the simple approach. In the application’s `src` directory, create a new file called `declarations.d.ts`. The file extension must be `.d.ts` in order to be considered a `type definition` file.

Inside of the file, create an entry for the library that looks like this:

```
declare module 'theLibraryName'
```

This is our first short-hand type definition. All this does is tell the Typescript compiler that the module is found, and it is an object of `any` type. This will allow the library to be used freely without the Typescript compiler giving errors.

Here’s how the `declarations.d.ts` file would look if I created a short-hand type definition for the popular library `lodash`.

```
declare module 'lodash'
```

Multiple short-hand type definitions can be included in the `declarations.d.ts` file. It is considered a best practice to keep all of these type definitions in one file when creating them.

```
declare module 'theLibraryName'
declare module 'anotherLibraryName'
declare module 'someOtherLibraryName'
```

## Using third party libraries

After installing the third party library and its type definition, it must be `imported` into the application to be used.

Open the `.ts` file where the library is needed. At the top of the file, add an import statement for the library.

```
import { myFunction } from 'theLibraryName';
```

This pattern is called the `named exports` approach. This is considered the best practice for using third party libraries. It only imports the portion of the library that is needed - `myFunction` in the case above. This pattern is used very frequently in Ionic apps to import Ionic and Angular functionality.

```
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
```

`Component` is one small piece of `@angular/core`, and `NavController` is one small piece of `ionic-angular`. By following this pattern, Ionic apps will include the minimum amount of code needed from the library, resulting in a smaller and faster application.

There are some cases where importing a specific portion of a library is not possible. Typically, this is the case with older libraries written for the [Node.js](https://nodejs.org/en/) javascript runtime. This sort of library is typically called a [Common JS module](https://nodejs.org/docs/latest/api/modules.html).

In that case, the library can be used but must be imported using the `default` export approach.

```
import myLib from 'theLibraryName'
```

The default export maps one-to-one with a CommonJS `module.exports` attribute, meaning `myLib` has access to all properties, functions, etc that are exposed.

To call `myFunction` to follow our example above, the code would look like this:

```
import myLib from 'theLibraryName'
myLib.myFunction()
```

Here’s an example of calling the `capitalize` method in the popular `lodash` library.

```
import lodash from 'lodash';
lodash.capitalize('myStringToCapitalize');
```

From our experience, the best practice is to always try to import libraries using the `named export` approach, and only switching to the `default export` approach if there is an error when building and bundling the Ionic app.

## Troubleshooting
With most third party libraries, everything “just works” out of the box. In some rare cases, some libraries may require modifications to the build configuration to properly build them. See this link for more information about [configuring the build](LINK_NEEDED) process to resolve any issues that may arise.
