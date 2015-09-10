---
layout: v2/docs_ui
title: Ionic 2 UI | Action Menus
header_title: Action Menus - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---

<h1 class="title">Action Menus</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/action-menu/" demo_name="action-menu" %}

Action Menus display a modal set of options to confirm or cancel an action.

```javascript
ActionMenu.open({
  buttons: [
    { text: 'Share This' },
    { text: 'Move' }
  ],
  destructiveText: 'Delete',
  titleText: 'Modify your album',
  cancelText: 'Cancel',
  cancel: function() {
    // add cancel code..
    console.log('Canceled');
  },
  destructiveButtonClicked: () => {
    console.log('Destructive clicked');
  },
  buttonClicked: function(index) {
    console.log('Button clicked', index);
    if(index == 1) { return false; }
    return true;
  }
}).then(actionMenu => {
  // Action menu was created and opened
  this.actionMenu = actionMenu;
  // this.actionMenu.close() to close it programatically
})
```
