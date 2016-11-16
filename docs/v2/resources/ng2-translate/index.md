---
layout: v2_fluid/docs_base
category: resources
id: using_ng2_translate
title: Using NG2-Translate
header_sub_title: Ionic Resources
---

# Using NG2-Translate

### Installing

To install NG2-Translate run `npm install ng2-translate --save`.

### Bootstrapping

To use NG2-Translate, it must first be imported and added to the imports array in the NgModule of the application. Here’s an example of how to do this:

```typescript
import { TranslateModule } from 'ng2-translate/ng2-translate';

@NgModule({
  imports: [
    TranslateModule.forRoot()
  ]
})
```

By default this will look for your translation json files in `i18n/`, if you would like to customize this path you can create a function that returns a new
TranslateLoader:

```typescript
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
```
and then add the following to your NgModules imports array:

```typescript
@NgModule({
  imports: [
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ]
})
```

### Usage

Once the above steps have been completed, we can begin to use NG2-Translate in your Ionic 2 app. The first step is to set up the translation assets. The translation assets are just json objects, as shown below:

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

Now we can use the `TranslatePipe` and the `TranslateService` to translate values in the app. The `TranslatePipe` is an Angular [pipe](https://angular.io/docs/ts/latest/guide/pipes.html) that can be used to translate static values in the application, such as a navbar title. Below is an example of how to use `TranslatePipe` to translate the app title using the above translation assets.

```html
<ion-title>{{ 'HELLO' | translate }}</ion-title>
```

Instead of writing the actual string as the title, we write the key of the string that should be there. The translate pipe then takes care of the rest.

The `TranslateService`  can be used both to change the current language the app is using and to translate JavaScript values in an application. To change the language the app is currently using, there’s the `use` method of the TranslationService.

```typescript
translateService.use('en')
```

To translate any JavaScript values in the application, like the title of an alert, the `TranslateService` provides a `get` [observable](http://angular-2-training-book.rangle.io/handout/observables/using_observables.html).

```typescript
translateService.get('HELLO').subscribe(
  value => {
    // value is our translated string
    let alertTitle = value;
  }
)
```

It takes the key of the string that needs to be translated from the translation assets. We then subscribe to the observable, and it will return the translated string.

For more information on how to use NG2-Translate, check out its [docs](https://github.com/ocombe/ng2-translate).
