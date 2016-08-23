---
layout: v2_fluid/docs_base
category: resources
id: using_ng2_translate
title: Using NG2-Translate
header_sub_title: Ionic Resources
---

# Using NG2-Translate

### Installing

For the latest version of Ionic 2, which runs on Angular 2 RC4, you have to install the release of NG2-Translate that is built for Angular 2 RC4. To install the correct version, you can run `npm install ng2-translate@2.2.2 --save --save-exact`.

### Bootstrapping

To use NG2-Translate, you must first import it and add it to your `ionicBootstrap`. Here’s an example of how to do this:

```typescript
import { TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

ionicBootstrap(MyApp, [
  { 
    provide: TranslateLoader,
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
    deps: [Http]
  },
  TranslateService
]);
```

This loads the `TranslateService`, sets the default loader, and also bootstraps the Angular 2 http module, which NG2-Translate requires. Normally you would also have to import the Angular 2 http module too, but because Ionic 2 already provides it for you, there is no need to import and bootstrap it again. The most important part here is the `TranslateStaticLoader` constructor. The first argument is injecting the Angular 2 http module, which it uses to fetch each translation file. The second argument is the path to your translation assets, and the third argument is the type of file that your translation assets are in (usually json).

### Usage

Once you’ve followed the above steps, you can begin to use NG2-Translate in your Ionic 2 app, just like you would in an Angular 2 application. The best place to start in the NG2-Translate docs is [here](https://github.com/ocombe/ng2-translate#3-define-the-translations). It will show you how to put your translation keys and values in a json file for each language you would like to support:

es.json
```json
{
    “HELLO”: “hola”
}
```

en.json 
```json
  {
      “HELLO”: “hello”
  }
```
...and how you can use the `TranslatePipe` and the `get` observable of the `TranslateService` to translate strings in your app!
