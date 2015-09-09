---
layout: v2/docs_ui
title: Ionic 2 UI | Modals
header_title: Modals - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---

<h1 class="title">Modals</h1>

Modals slide in off screen to display a temporary UI, often used for login or signup pages,
message composition, and option selection.

First, we need to create the class that will control our modal. Modals must extend
from the `Modal` Ionic class:

{% include demo.html demo_url="/dist/examples/modal/basic/" demo_src="modal/test/basic" %}

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
