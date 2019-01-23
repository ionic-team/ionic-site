---
layout: "fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v3/3.1.0"
path: ""
category: api
id: "itemoptions"
title: "ItemOptions"
header_sub_title: "Ionic API Documentation"
doc: "ItemOptions"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="item-options" href="#item-options"></a>

ItemOptions
<h3><code>ion-item-options</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/item/item-options.ts#L4">
Improve this doc
</a>






<p>The option buttons for an <code>ion-item-sliding</code>. These buttons can be placed either on the left or right side.
You can combine the <code>(ionSwipe)</code> event plus the <code>expandable</code> directive to create a full swipe action for the item.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-item-sliding&gt;
  &lt;ion-item&gt;
    Item 1
  &lt;/ion-item&gt;
  &lt;ion-item-options side=&quot;right&quot; (ionSwipe)=&quot;saveItem(item)&quot;&gt;
    &lt;button ion-button expandable (click)=&quot;saveItem(item)&quot;&gt;
      &lt;ion-icon name=&quot;star&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;
  &lt;/ion-item-options&gt;
&lt;/ion-item-sliding&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>side</td>
      <td><code>string</code></td>
      <td><p> The side the option button should be on. Defaults to <code>&quot;right&quot;</code>.
If you have multiple <code>ion-item-options</code>, a side must be provided for each.</p>
</td>
    </tr>

  </tbody>
</table>
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
      <td>ionSwipe</td>
      <td><p> Emitted when the item has been fully swiped.</p>
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
        <td><code>$item-ios-avatar-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the avatar in the item</p>
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
        <td><code>$item-md-avatar-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the avatar in the item</p>
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
        <td><code>$item-wp-avatar-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the avatar in the item</p>
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



<!-- related link --><!-- end content block -->


<!-- end body block -->

