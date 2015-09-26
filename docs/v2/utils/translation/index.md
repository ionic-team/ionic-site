---
layout: v2/docs_base
id: utils
title: Translation and i18n - Ionic 2
header_title: Translation and i18n
header_sub_title: Supporting multiple languages easily
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/utils/storage/index.md'>
    Improve this doc
  </a>
</div>

# Translation and i18n

Ionic comes with a simple and powerful translation/internationalization system to provide multiple language
support for your apps.

Unlike some translation systems, Ionic uses the full text that you wish to display in the default
language as the translation key (rather than a lookup key).

### Using `Translate`

The `Translate` service is used to set the active language, and provide string mapping.

```javascript
export class MyApp {

  // Inject the Translate service
  constructor(trans: Translate) {

    // Example German string mapping
    trans.translations('de', {
      'Location': 'lage'
    });

    console.log(this.trans.translate('Location')); // Shows 'Location'
    console.log(this.trans.translate('Location', 'de')); // Shows 'lage'

    // Change the active language for the entire app
    this.trans.setLanguage('de');
    console.log(this.trans.translate('Location')); // Shows 'lage'
  }
```

### Using `TranslatePipe`

To use translated strings in your templates, use the `translate` pipe:

{% raw %}
```html
<!-- to use the active language -->
<span>{{ 'Location' | translate }}</span>

<!-- to use a specific language -->
<span>{{ 'Location' | translate:"de" }}</span>
```
{% endraw %}
