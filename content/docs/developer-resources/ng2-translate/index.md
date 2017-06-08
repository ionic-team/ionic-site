---
layout: fluid/docs_base
category: resources
id: using_ngx_translate
title: Using ngx-translate
header_sub_title: Ionic Resources
---

# Using ngx-translate

### Installing

To install ngx-translate run `npm install @ngx-translate/core @ngx-translate/http-loader --save`.

### Bootstrapping

To use ngx-translate, it must first be imported and added to the imports array in the NgModule of the application. Here’s an example of how to do this:

```typescript
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule.forRoot()
  ]
})
```

By default this will look for your translation json files in `i18n/`, but for Ionic you must change this to look in the `src/assets` directory. We can do this by creating a function that returns a new TranslateLoader:

```typescript
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
...

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
```
and then adding the following to your NgModules imports array:

```typescript
@NgModule({
  imports: [
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ]
})
```

## Lazy loading pages
If you want to use Ionics lazy loading pages together with ngx-translate, you have to configure your `component.module.ts` files

```typescript
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HelloPage } from './hello-page';

@NgModule({
  declarations: [
    HelloPage,
  ],
  imports: [
    IonicPageModule.forChild(HelloPage),
    TranslateModule.forChild()
  ],
  exports: [
    HelloPage
  ]
})
export class HelloPageModule {}
```

### Usage

Once the above steps have been completed, we can begin to use in your Ionic app. The first step is to set up the translation assets. The translation assets are just json objects, as shown below:

es.json

```json
{
  "HELLO": "hola"
}
```

en.json

```json
{
  "HELLO": "Hello"
}
```

Now we can use the `TranslatePipe` and the `TranslateService` to translate values in the app. The `TranslatePipe` is an Angular [pipe](https://angular.io/docs/ts/latest/guide/pipes.html) that can be used to translate static values in the application, such as a navbar title. Below is an example of how to use `TranslatePipe` to translate the app title using the above translation assets.

```html
{% raw %}
<ion-title>{{ 'HELLO' | translate }}</ion-title>
{% endraw %}
```

Instead of writing the actual string as the title, we write the key of the string that should be there. The translate pipe then takes care of the rest.

> For Ionic's components it's recommended to use the translate pipe, as this will make things behave correctly with content projections.

The `TranslateService`  can be used both to change the current language the app is using and to translate JavaScript values in an application. To use the `TranslateService` in your app you must first import it and set the default language.

```typescript
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-schedule',
    templateUrl: 'schedule.html'
})
export class SchedulePage {
    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
    }
}
```

To change the language the app is currently using, there’s the `use` method of the TranslationService.

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

For more information on how to use ngx-translate, check out its [docs](https://github.com/ngx-translate/core).
