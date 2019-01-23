---
layout: "fluid/docs_base"
version: "3.0.1"
versionHref: "/docs/v3/3.0.1"
path: ""
category: api
id: "itemreorder"
title: "ItemReorder"
header_sub_title: "Ionic API Documentation"
doc: "ItemReorder"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/item-reorder/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="item-reorder" href="#item-reorder"></a>

ItemReorder
<h3><code>ion-list[reorder],ion-item-group[reorder]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/item/item-reorder.ts#L15">
Improve this doc
</a>






<p>Item reorder adds the ability to change an item&#39;s order in a group.
It can be used within an <code>ion-list</code> or <code>ion-item-group</code> to provide a
visual drag and drop interface.</p>
<h2 id="grouping-items">Grouping Items</h2>
<p>All reorderable items must be grouped in the same element. If an item
should not be reordered, it shouldn&#39;t be included in this group. For
example, the following code works because the items are grouped in the
<code>&lt;ion-list&gt;</code>:</p>
<pre><code class="lang-html">&lt;ion-list reorder=&quot;true&quot;&gt;
  &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{% raw %}{{ item }}{% endraw %}&lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>
<p>However, the below list includes a header that shouldn&#39;t be reordered:</p>
<pre><code class="lang-html">&lt;ion-list reorder=&quot;true&quot;&gt;
  &lt;ion-list-header&gt;Header&lt;/ion-list-header&gt;
  &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{% raw %}{{ item }}{% endraw %}&lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>
<p>In order to mix different sets of items, <code>ion-item-group</code> should be used to
group the reorderable items:</p>
<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-list-header&gt;Header&lt;/ion-list-header&gt;
  &lt;ion-item-group reorder=&quot;true&quot;&gt;
    &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{% raw %}{{ item }}{% endraw %}&lt;/ion-item&gt;
  &lt;/ion-item-group&gt;
&lt;/ion-list&gt;
</code></pre>
<p>It&#39;s important to note that in this example, the <code>[reorder]</code> directive is applied to
the <code>&lt;ion-item-group&gt;</code> instead of the <code>&lt;ion-list&gt;</code>. This way makes it possible to
mix items that should and shouldn&#39;t be reordered.</p>
<h2 id="implementing-the-reorder-function">Implementing the Reorder Function</h2>
<p>When the item is dragged and dropped into the new position, the <code>(ionItemReorder)</code> event is
emitted. This event provides the initial index (from) and the new index (to) of the reordered
item. For example, if the first item is dragged to the fifth position, the event will emit
<code>{from: 0, to: 4}</code>. Note that the index starts at zero.</p>
<p>A function should be called when the event is emitted that handles the reordering of the items.
See <a href="#usage">usage</a> below for some examples.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-list-header&gt;Header&lt;/ion-list-header&gt;
  &lt;ion-item-group reorder=&quot;true&quot; (ionItemReorder)=&quot;reorderItems($event)&quot;&gt;
    &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{% raw %}{{ item }}{% endraw %}&lt;/ion-item&gt;
  &lt;/ion-item-group&gt;
&lt;/ion-list&gt;
</code></pre>
<pre><code class="lang-ts">class MyComponent {
  items = [];

  constructor() {
    for (let x = 0; x &lt; 5; x++) {
      this.items.push(x);
    }
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }
}
</code></pre>
<p>Ionic also provides a helper function called <code>reorderArray</code> to
reorder the array of items. This can be used instead:</p>
<pre><code class="lang-ts">import { reorderArray } from &#39;ionic-angular&#39;;

class MyComponent {
  items = [];

  constructor() {
    for (let x = 0; x &lt; 5; x++) {
      this.items.push(x);
    }
  }

  reorderItems(indexes) {
    this.items = reorderArray(this.items, indexes);
  }
}
</code></pre>
<p>Alternatevely you can execute helper function inside template:</p>
<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-list-header&gt;Header&lt;/ion-list-header&gt;
  &lt;ion-item-group reorder=&quot;true&quot; (ionItemReorder)=&quot;$event.applyTo(items)&quot;&gt;
    &lt;ion-item *ngFor=&quot;let item of items&quot;&gt;{% raw %}{{ item }}{% endraw %}&lt;/ion-item&gt;
  &lt;/ion-item-group&gt;
&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
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
      <td>ionItemReorder</td>
      <td><p> Emitted when the item is reordered. Emits an object
with <code>from</code> and <code>to</code> properties.</p>
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

<a href="/docs/v3/components#lists">List Component Docs</a>,
<a href="../../list/List">List API Docs</a>,
<a href="../Item">Item API Docs</a><!-- end content block -->


<!-- end body block -->

