---
layout: "fluid/docs_base"
version: "2.0.0"
versionHref: "/docs/v3/2.0.0"
path: ""
category: api
id: "itemsliding"
title: "ItemSliding"
header_sub_title: "Ionic API Documentation"
doc: "ItemSliding"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/item-sliding/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="item-sliding" href="#item-sliding"></a>

ItemSliding
<h3><code>ion-item-sliding</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/item/item-sliding.ts#L84">
Improve this doc
</a>






<p>A sliding item is a list item that can be swiped to reveal buttons. It requires
an <a href="../Item">Item</a> component as a child and a <a href="../../list/List">List</a> component as
a parent. All buttons to reveal can be placed in the <code>&lt;ion-item-options&gt;</code> element.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-item-sliding #item&gt;
    &lt;ion-item&gt;
      Item
    &lt;/ion-item&gt;
    &lt;ion-item-options side=&quot;left&quot;&gt;
      &lt;button ion-button (click)=&quot;favorite(item)&quot;&gt;Favorite&lt;/button&gt;
      &lt;button ion-button color=&quot;danger&quot; (click)=&quot;share(item)&quot;&gt;Share&lt;/button&gt;
    &lt;/ion-item-options&gt;

    &lt;ion-item-options side=&quot;right&quot;&gt;
      &lt;button ion-button (click)=&quot;unread(item)&quot;&gt;Unread&lt;/button&gt;
    &lt;/ion-item-options&gt;
  &lt;/ion-item-sliding&gt;
&lt;/ion-list&gt;
</code></pre>
<h3 id="swipe-direction">Swipe Direction</h3>
<p>By default, the buttons are revealed when the sliding item is swiped from right to left,
so the buttons are placed in the right side. But it&#39;s also possible to reveal them
in the right side (sliding from left to right) by setting the <code>side</code> attribute
on the <code>ion-item-options</code> element. Up to 2 <code>ion-item-options</code> can used at the same time
in order to reveal two different sets of buttons depending the swipping direction.</p>
<pre><code class="lang-html">&lt;ion-item-options side=&quot;right&quot;&gt;
  &lt;button ion-button (click)=&quot;archive(item)&quot;&gt;
    &lt;ion-icon name=&quot;archive&quot;&gt;&lt;/ion-icon&gt;
    Archive
  &lt;/button&gt;
&lt;/ion-item-options&gt;

&lt;ion-item-options side=&quot;left&quot;&gt;
  &lt;button ion-button (click)=&quot;archive(item)&quot;&gt;
    &lt;ion-icon name=&quot;archive&quot;&gt;&lt;/ion-icon&gt;
    Archive
  &lt;/button&gt;
&lt;/ion-item-options&gt;
</code></pre>
<h3 id="listening-for-events-iondrag-and-ionswipe-">Listening for events (ionDrag) and (ionSwipe)</h3>
<p>It&#39;s possible to know the current relative position of the sliding item by subscribing
to the (ionDrag)` event.</p>
<pre><code class="lang-html">&lt;ion-item-sliding (ionDrag)=&quot;logDrag($event)&quot;&gt;
  &lt;ion-item&gt;Item&lt;/ion-item&gt;
  &lt;ion-item-options&gt;
    &lt;button ion-button&gt;Favorite&lt;/button&gt;
  &lt;/ion-item-options&gt;
&lt;/ion-item-sliding&gt;
</code></pre>
<h3 id="button-layout">Button Layout</h3>
<p>If an icon is placed with text in the option button, by default it will
display the icon on top of the text. This can be changed to display the icon
to the left of the text by setting <code>icon-left</code> as an attribute on the
<code>&lt;ion-item-options&gt;</code> element.</p>
<pre><code class="lang-html">&lt;ion-item-options icon-left&gt;
  &lt;button ion-button (click)=&quot;archive(item)&quot;&gt;
    &lt;ion-icon name=&quot;archive&quot;&gt;&lt;/ion-icon&gt;
    Archive
  &lt;/button&gt;
&lt;/ion-item-options&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="close"></div>

<h3>
<a class="anchor" name="close" href="#close"></a>
<code>close()</code>
  

</h3>

Close the sliding item. Items can also be closed from the [List](../../list/List).

The sliding item can be closed by grabbing a reference to `ItemSliding`. In the
below example, the template reference variable `slidingItem` is placed on the element
and passed to the `share` method.

```html
<ion-list>
  <ion-item-sliding #slidingItem>
    <ion-item>
      Item
    </ion-item>
    <ion-item-options>
      <button ion-button (click)="share(slidingItem)">Share</button>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```

```ts
import { Component } from '@angular/core';
import { ItemSliding } from 'ionic-angular';

@Component({...})
export class MyClass {
  constructor() { }

  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }
}
```










<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>ionDrag</td>
      <td><p> Expression to evaluate when the sliding position changes.
It reports the relative position.</p>
<pre><code class="lang-ts">ondrag(item) {
  let percent = item.getSlidingPercent();
  if (percent &gt; 0) {
    // positive
    console.log(&#39;right side&#39;);
  } else {
    // negative
    console.log(&#39;left side&#39;);
  }
  if (Math.abs(percent) &gt; 1) {
    console.log(&#39;overscroll&#39;);
  }
}
</code></pre>
</td>
    </tr>
    
  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">
    
      
      
      <a ng-init="setSassPlatform('ios')" ng-class="{ active: active === 'ios' }" ng-click="setSassPlatform('ios')" >iOS</a>
      
      
      
      <a ng-class="{ active: active === 'md' }" ng-click="setSassPlatform('md')">Material Design</a>
      
      
      
      <a ng-class="{ active: active === 'wp' }" ng-click="setSassPlatform('wp')">Windows Platform</a>
      
      
    
  </div>


  
  <table ng-show="active === 'ios'" id="sass-ios" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$item-ios-body-text-font-size</code></td>
        
          <td><code>1.7rem</code></td>
        
        <td><p>Font size of the item text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-paragraph-margin</code></td>
        
          <td><code>0 0 2px</code></td>
        
        <td><p>Margin of the item paragraph</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-paragraph-font-size</code></td>
        
          <td><code>1.4rem</code></td>
        
        <td><p>Font size of the item paragraph</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-paragraph-text-color</code></td>
        
          <td><code>#8e9093</code></td>
        
        <td><p>Color of the item paragraph</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-avatar-size</code></td>
        
          <td><code>36px</code></td>
        
        <td><p>Size of the avatar in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-thumbnail-size</code></td>
        
          <td><code>56px</code></td>
        
        <td><p>Size of the thumbnail in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-detail-push-show</code></td>
        
          <td><code>true</code></td>
        
        <td><p>Shows the detail arrow icon on an item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-detail-push-color</code></td>
        
          <td><code>$list-ios-border-color</code></td>
        
        <td><p>Color of the detail arrow icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-detail-push-svg</code></td>
        
          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 12 20&#39;&gt;&lt;path d=&#39;M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z&#39; fill=&#39;#{$item-ios-detail-push-color}&#39;/&gt;&lt;/svg&gt;&quot;</code></td>
        
        <td><p>Icon for the detail arrow</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-divider-background</code></td>
        
          <td><code>#f7f7f7</code></td>
        
        <td><p>Background for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-divider-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-divider-padding</code></td>
        
          <td><code>5px 15px</code></td>
        
        <td><p>Padding for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-sliding-content-background</code></td>
        
          <td><code>$list-ios-background-color</code></td>
        
        <td><p>Background for the sliding content</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
  <table ng-show="active === 'md'" id="sass-md" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$item-md-body-text-font-size</code></td>
        
          <td><code>1.4rem</code></td>
        
        <td><p>Font size of the item text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-body-text-line-height</code></td>
        
          <td><code>1.5</code></td>
        
        <td><p>line height of the item text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-paragraph-text-color</code></td>
        
          <td><code>#666</code></td>
        
        <td><p>Color of the item paragraph</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-font-size</code></td>
        
          <td><code>1.6rem</code></td>
        
        <td><p>Font size of the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-avatar-size</code></td>
        
          <td><code>40px</code></td>
        
        <td><p>Size of the avatar in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-thumbnail-size</code></td>
        
          <td><code>80px</code></td>
        
        <td><p>Size of the thumbnail in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-detail-push-show</code></td>
        
          <td><code>false</code></td>
        
        <td><p>Shows the detail arrow icon on an item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-detail-push-color</code></td>
        
          <td><code>$list-md-border-color</code></td>
        
        <td><p>Color of the detail arrow icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-detail-push-svg</code></td>
        
          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 12 20&#39;&gt;&lt;path d=&#39;M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z&#39; fill=&#39;#{$item-md-detail-push-color}&#39;/&gt;&lt;/svg&gt;&quot;</code></td>
        
        <td><p>Icon for the detail arrow</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-divider-color</code></td>
        
          <td><code>#858585</code></td>
        
        <td><p>Color for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-divider-background</code></td>
        
          <td><code>#fff</code></td>
        
        <td><p>Background for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-divider-font-size</code></td>
        
          <td><code>$item-md-body-text-font-size</code></td>
        
        <td><p>Font size for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-divider-border-bottom</code></td>
        
          <td><code>1px solid $list-md-border-color</code></td>
        
        <td><p>Border bottom for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-divider-padding</code></td>
        
          <td><code>5px 15px</code></td>
        
        <td><p>Padding for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-sliding-content-background</code></td>
        
          <td><code>$list-md-background-color</code></td>
        
        <td><p>Background for the sliding content</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
  <table ng-show="active === 'wp'" id="sass-wp" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$item-wp-body-text-font-size</code></td>
        
          <td><code>1.4rem</code></td>
        
        <td><p>Font size of the item text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-body-text-line-height</code></td>
        
          <td><code>1.5</code></td>
        
        <td><p>line height of the item text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-body-background-color</code></td>
        
          <td><code>$list-wp-background-color</code></td>
        
        <td><p>Background color of the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-body-text-color</code></td>
        
          <td><code>$list-wp-text-color</code></td>
        
        <td><p>Color of the item text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-paragraph-text-color</code></td>
        
          <td><code>#666</code></td>
        
        <td><p>Color of the item paragraph</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-font-size</code></td>
        
          <td><code>1.6rem</code></td>
        
        <td><p>Font size of the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-avatar-size</code></td>
        
          <td><code>40px</code></td>
        
        <td><p>Size of the avatar in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-thumbnail-size</code></td>
        
          <td><code>80px</code></td>
        
        <td><p>Size of the thumbnail in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-detail-push-show</code></td>
        
          <td><code>false</code></td>
        
        <td><p>Shows the detail arrow icon on an item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-detail-push-color</code></td>
        
          <td><code>$input-wp-border-color</code></td>
        
        <td><p>Color of the detail arrow icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-detail-push-svg</code></td>
        
          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 12 20&#39;&gt;&lt;path d=&#39;M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z&#39; fill=&#39;#{$item-wp-detail-push-color}&#39;/&gt;&lt;/svg&gt;&quot;</code></td>
        
        <td><p>Icon for the detail arrow</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-divider-color</code></td>
        
          <td><code>$list-wp-text-color</code></td>
        
        <td><p>Color for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-divider-background</code></td>
        
          <td><code>#fff</code></td>
        
        <td><p>Background for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-divider-border-bottom</code></td>
        
          <td><code>1px solid $list-wp-border-color</code></td>
        
        <td><p>Bodrer bottom for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-divider-font-size</code></td>
        
          <td><code>2rem</code></td>
        
        <td><p>Font size for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-divider-padding</code></td>
        
          <td><code>5px 15px</code></td>
        
        <td><p>Padding for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-sliding-content-background</code></td>
        
          <td><code>$list-wp-background-color</code></td>
        
        <td><p>Background for the sliding content</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs//components#lists'>List Component Docs</a>,
<a href='../Item'>Item API Docs</a>,
<a href='../../list/List'>List API Docs</a><!-- end content block -->


<!-- end body block -->

