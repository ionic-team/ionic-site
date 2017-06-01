---
layout: "docs_api"
version: "1.3.2"
versionHref: "/docs/v1/1.3.2"
path: "api/directive/ionOptionButton/"

title: "ion-option-button"
header_sub_title: "Directive in module ionic"
doc: "ionOptionButton"
docType: "directive"
---

<div class="improve-docs">
<a href='https://github.com/ionic-team/ionic-v1/blob/master/js/angular/directive/itemOptionButton.js#L4'>
View Source
</a>
&nbsp;
<a href='https://github.com/ionic-team/ionic-v1/edit/master/js/angular/directive/itemOptionButton.js#L4'>
Improve this doc
</a>
</div>




<h1 class="api-title">

ion-option-button


<br />
<small>
Child of <a href="/docs/v1/api/directive/ionItem/"><code>ionItem</code></a>
</small>


</h1>





Creates an option button inside a list item, that is visible when the item is swiped
to the left by the user.  Swiped open option buttons can be hidden with
<a href="/docs/v1/api/service/$ionicListDelegate/#closeOptionButtons">$ionicListDelegate.closeOptionButtons</a>.

Can be assigned any button class.

See <a href="/docs/v1/api/directive/ionList/"><code>ionList</code></a> for a complete example & explanation.









<h2 id="usage">Usage</h2>

```html
<ion-list>
  <ion-item>
    I love kittens!
    <ion-option-button class="button-positive">Share</ion-option-button>
    <ion-option-button class="button-assertive">Edit</ion-option-button>
  </ion-item>
</ion-list>
```









