---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.42"
versionHref: "/docs/v2/2.0.0-alpha.42"
path: ""
category: api
id: "{{Config | slugify}}"
title: "Config"
header_sub_title: "Class in module "
doc: "Config"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/config/
Config lets you change multiple or a single value in an apps mode configuration. Things such as tab placement, icon changes, and view animations can be set here.

```ts
@App({
  template: `<ion-nav [root]="root"></ion-nav>`
  config: {
    backButtonText: 'Go Back',
    iconMode: 'ios',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    tabbarPlacement: 'bottom',
    pageTransition: 'ios',
  }
})
```

Config can be overwritting at multiple levels, allowing deeper configuration. Taking the example from earlier, we can override any setting we want based on a platform.
```ts
@App({
  template: `<ion-nav [root]="root"></ion-nav>`
  config: {
    tabbarPlacement: 'bottom',
    platforms: {
     ios: {
       tabbarPlacement: 'top',
     }
    }
  }
})
```

We could also configure these values at a component level. Take `tabbarPlacement`, we can configure this as a property on our `ion-tabs`.

```html
<ion-tabs tabbarPlacement="top">
   <ion-tab tabTitle="Dash" tabIcon="pulse" [root]="tabRoot"></ion-tab>
 </ion-tabs>
```

The property will override anything else set in the apps.

The last way we could configure is through URL query strings. This is useful for testing while in the browser.
Simply add `?ionic<PROPERTYNAME>=<value>` to the url.

```bash
http://localhost:8100/?ionicTabbarPlacement=bottom
```

A config value can come from anywhere and be anything, but there are a default set of values.

``` javascript
// iOS
activator: 'highlight',
actionSheetEnter: 'action-sheet-slide-in',
actionSheetLeave: 'action-sheet-slide-out',
actionSheetCancelIcon: '',
actionSheetDestructiveIcon: '',
backButtonText: 'Back',
backButtonIcon: 'ion-ios-arrow-back',
iconMode: 'ios',
menuType: 'reveal',
modalEnter: 'modal-slide-in',
modalLeave: 'modal-slide-out',
pageTransition: 'ios-transition',
pageTransitionDelay: 16,
popupEnter: 'popup-pop-in',
popupLeave: 'popup-pop-out',
tabbarPlacement: 'bottom',

// MD
activator: 'ripple',
actionSheetEnter: 'action-sheet-md-slide-in',
actionSheetLeave: 'action-sheet-md-slide-out',
actionSheetCancelIcon: 'ion-md-close',
actionSheetDestructiveIcon: 'ion-md-trash',
backButtonText: '',
backButtonIcon: 'ion-md-arrow-back',
iconMode: 'md',
menuType: 'overlay',
modalEnter: 'modal-md-slide-in',
modalLeave: 'modal-md-slide-out',
pageTransition: 'md-transition',
pageTransitionDelay: 120,
popupEnter: 'popup-md-pop-in',
popupLeave: 'popup-md-pop-out',
tabbarHighlight: true,
tabbarPlacement: 'top',
tabSubPages: true,
```

| Config property            | Default iOS Value      | Default MD Value          |
|----------------------------|------------------------|---------------------------|
| activator                  | highlight              | ripple                    |
| actionSheetEnter           | action-sheet-slide-in  | action-sheet-md-slide-in  |
| actionSheetLeave           | action-sheet-slide-out | action-sheet-md-slide-out |
| actionSheetCancelIcon      |                        | ion-md-close              |
| actionSheetDestructiveIcon |                        | ion-md-trash              |
| backButtonText             | Back                   |                           |
| backButtonIcon             | ion-ios-arrow-back     | ion-md-arrow-back         |
| iconMode                   | ios                    | md                        |
| menuType                   | reveal                 | overlay                   |
| modalEnter                 | modal-slide-in         | modal-md-slide-in         |
| modalLeave                 | modal-slide-out        | modal-md-slide-out        |
| pageTransition             | ios-transition         | md-transition             |
| pageTransitionDelay        | 16                     | 120                       |
| popupEnter                 | popup-pop-in           | popup-md-pop-in           |
| popupLeave                 | popup-pop-out          | popup-md-pop-out          |
| tabbarPlacement            | bottom                 | true                      |
| tabbarHighlight            |                        | top                       |
| tabSubPage                 |                        | true                      |"
angular_controller: APIDemoCtrl 
---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/config/config.ts#L9'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/config/config.ts#L9'>
Improve this doc
</a>
</div>





<h1 class="api-title">


Config






</h1>






<!-- description -->
<h2>Description</h2>


<!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

