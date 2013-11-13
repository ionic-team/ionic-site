---
layout: "api_0.9.0"
title: "Tab Bar Controller"
header_sub_title: "Multi-page tab interfaces"
---

Tab Bar Controller
===

<!--
Available in:
<div class="label label-danger">AngularIonic 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>
-->


The Tab Bar Controller powers a multi-tabbed interface with a Tab Bar and a set of "pages" that can be tabbed through:

![Tab Bar Controller](http://ionicframework.com.s3.amazonaws.com/docs/controllers/tabs2.png)


```html
{% raw %}
<tabs tabs-type="tabs-icon-only"
      tabs-style="tabs-primary"
      controller-changed="onControllerChanged(oldController, oldIndex, newController, newIndex)">

  <tab title="Home" icon-on="icon ion-ios7-filing" icon-off="icon ion-ios7-filing-outline">
    <!-- Tab 1 content -->
  </tab>

  <tab title="About" icon-on="icon ion-ios7-clock" icon-off="icon ion-ios7-clock-outline">
    <!-- Tab 2 content -->
  </tab>

  <tab title="Settings" icon-on="icon ion-ios7-gear" icon-off="icon ion-ios7-gear-outline">
    <!-- Tab 3 content -->
  </tab>
  
</tabs>
```
{% endraw %}
