---
layout: v2/docs_base
id: ui
title: Ionic 2 UI | Modals
header_title: Modals - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/modals/index.md'>
    Improve this doc
  </a>
</div>

<div class="docs-ui">

<h1 class="title">Modals</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/modal/" demo_name="modal" %}

Modals slide in off screen to display a temporary UI, often used for login or signup pages,
message composition, and option selection.

First, we need to create the class that will control our modal. Modals must extend
from the `Modal` Ionic class:

```javascript
@IonicComponent(Modal)
@View({
  template: `<ion-view id="my-modal">
    <ion-content padding>
      <button primary (click)="close()">Close</button>
    </ion-content>
  </ion-view>`,
  directives: [Content]
})
export class MyModal extends Modal {
  constructor() {
    super();
  }
}
```

To open a modal, we just call `Modal.open(MyModal)`:

```javascript
export class MyPage {
  onOpenClicked() {
    Modal.open(MyModal);
  }
}
```

</div>
