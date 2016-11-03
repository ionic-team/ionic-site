---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2/2.0.0-rc.2"
path: ""
category: api
id: "itemcontent"
title: "ItemContent"
header_sub_title: "Ionic API Documentation"
doc: "ItemContent"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="item-content" href="#item-content"></a>

ItemContent
<h3><code>ion-item,[ion-item]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/components/item/item.ts#L414">
Improve this doc
</a>










<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->


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
        
          <td><code>1.6rem</code></td>
        
        <td><p>Font size of the item text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-paragraph-text-color</code></td>
        
          <td><code>#666</code></td>
        
        <td><p>Color of the item paragraph</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-avatar-size</code></td>
        
          <td><code>3.6rem</code></td>
        
        <td><p>Size of the avatar in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-thumbnail-size</code></td>
        
          <td><code>5.6rem</code></td>
        
        <td><p>Size of the thumbnail in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-ios-note-color</code></td>
        
          <td><code>darken($list-ios-border-color, 10%)</code></td>
        
        <td><p>Color of the note in the item</p>
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
        
          <td><code>4rem</code></td>
        
        <td><p>Size of the avatar in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-thumbnail-size</code></td>
        
          <td><code>8rem</code></td>
        
        <td><p>Size of the thumbnail in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-note-color</code></td>
        
          <td><code>darken($list-md-border-color, 10%)</code></td>
        
        <td><p>Color of the note in the item</p>
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
        <td><code>$item-md-divider-background</code></td>
        
          <td><code>#fff</code></td>
        
        <td><p>Background for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-md-divider-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color for the divider</p>
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
        
          <td><code>4rem</code></td>
        
        <td><p>Size of the avatar in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-thumbnail-size</code></td>
        
          <td><code>8rem</code></td>
        
        <td><p>Size of the thumbnail in the item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-note-color</code></td>
        
          <td><code>$input-wp-border-color</code></td>
        
        <td><p>Color of the note in the item</p>
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
        <td><code>$item-wp-divider-background</code></td>
        
          <td><code>#fff</code></td>
        
        <td><p>Background for the divider</p>
</td>
      </tr>
      
      <tr>
        <td><code>$item-wp-divider-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color for the divider</p>
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

