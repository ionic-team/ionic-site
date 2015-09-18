---
layout: v2/docs_base
id: ui
title: Ionic 2 UI | Action Sheets
header_title: Action Sheets - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/action-sheets/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Action Sheets</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/action-sheet/" demo_name="action-sheet" %}

Action Sheets display a modal set of options to confirm or cancel an action.

```javascript
ActionSheet.open({
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
}).then(actionSheet => {
  // Action sheet was created and opened
  this.actionSheet = actionSheet;
  // this.actionSheet.close() to close it programatically
})
```
