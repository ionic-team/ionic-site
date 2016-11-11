---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2/2.0.0-rc.2"
path: ""
category: api
id: "cardtitle"
title: "CardTitle"
header_sub_title: "Ionic API Documentation"
doc: "CardTitle"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="card-title" href="#card-title"></a>

CardTitle
<h3><code>ion-card-title</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master/src/components/card/card.ts#L54">
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
        <td><code>$card-ios-margin-top</code></td>
        
          <td><code>12px</code></td>
        
        <td><p>Margin top of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-margin-right</code></td>
        
          <td><code>12px</code></td>
        
        <td><p>Margin right of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-margin-bottom</code></td>
        
          <td><code>12px</code></td>
        
        <td><p>Margin bottom of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-margin-left</code></td>
        
          <td><code>12px</code></td>
        
        <td><p>Margin left of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-padding-top</code></td>
        
          <td><code>13px</code></td>
        
        <td><p>Padding top of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-padding-right</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Padding right of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-padding-bottom</code></td>
        
          <td><code>14px</code></td>
        
        <td><p>Padding bottom of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-padding-left</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Padding left of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-padding-media-top</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Padding top of the media on the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-padding-media-bottom</code></td>
        
          <td><code>9px</code></td>
        
        <td><p>Padding bottom of the media on the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-background-color</code></td>
        
          <td><code>$list-ios-background-color</code></td>
        
        <td><p>Background color of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-box-shadow-color</code></td>
        
          <td><code>rgba(0, 0, 0, .3)</code></td>
        
        <td><p>Box shadow color of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-box-shadow</code></td>
        
          <td><code>0 1px 2px $card-ios-box-shadow-color</code></td>
        
        <td><p>Box shadow of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-border-radius</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border radius of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-font-size</code></td>
        
          <td><code>1.4rem</code></td>
        
        <td><p>Font size of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-text-color</code></td>
        
          <td><code>#666</code></td>
        
        <td><p>Color of the card text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-title-font-size</code></td>
        
          <td><code>1.8rem</code></td>
        
        <td><p>Font size of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-title-padding</code></td>
        
          <td><code>8px 0 8px 0</code></td>
        
        <td><p>Padding of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-title-margin</code></td>
        
          <td><code>2px 0 2px</code></td>
        
        <td><p>Margin of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-title-text-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-header-font-size</code></td>
        
          <td><code>1.6rem</code></td>
        
        <td><p>Font size of the card header</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-header-font-weight</code></td>
        
          <td><code>500</code></td>
        
        <td><p>Font weight of the card header</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-header-padding</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Padding of the card header</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-ios-header-color</code></td>
        
          <td><code>#333</code></td>
        
        <td><p>Color of the card header</p>
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
        <td><code>$card-md-margin-top</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Margin top of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-margin-right</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Margin right of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-margin-bottom</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Margin bottom of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-margin-left</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Margin left of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-padding-top</code></td>
        
          <td><code>13px</code></td>
        
        <td><p>Padding top of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-padding-right</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Padding right of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-padding-bottom</code></td>
        
          <td><code>13px</code></td>
        
        <td><p>Padding bottom of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-padding-left</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Padding left of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-padding-media-top</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Padding top of the media on the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-padding-media-bottom</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Padding bottom of the media on the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-avatar-size</code></td>
        
          <td><code>4rem</code></td>
        
        <td><p>Size of the card avatar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-thumbnail-size</code></td>
        
          <td><code>8rem</code></td>
        
        <td><p>Size of the card thumbnail</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-background-color</code></td>
        
          <td><code>$list-md-background-color</code></td>
        
        <td><p>Background color of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-box-shadow</code></td>
        
          <td><code>0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)</code></td>
        
        <td><p>Box shadow of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-border-radius</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border radius of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-font-size</code></td>
        
          <td><code>1.4rem</code></td>
        
        <td><p>Font size of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-line-height</code></td>
        
          <td><code>1.5</code></td>
        
        <td><p>Line height of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-text-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color of the card text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-title-font-size</code></td>
        
          <td><code>2.4rem</code></td>
        
        <td><p>Font size of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-title-padding</code></td>
        
          <td><code>8px 0 8px 0</code></td>
        
        <td><p>Padding of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-title-margin</code></td>
        
          <td><code>2px 0 2px</code></td>
        
        <td><p>Margin of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-title-text-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-header-font-size</code></td>
        
          <td><code>1.6rem</code></td>
        
        <td><p>Font size of the card header</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-header-padding</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Padding of the card header</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-md-header-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color of the card header</p>
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
        <td><code>$card-wp-margin-top</code></td>
        
          <td><code>8px</code></td>
        
        <td><p>Margin top of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-margin-right</code></td>
        
          <td><code>8px</code></td>
        
        <td><p>Margin right of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-margin-bottom</code></td>
        
          <td><code>8px</code></td>
        
        <td><p>Margin bottom of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-margin-left</code></td>
        
          <td><code>8px</code></td>
        
        <td><p>Margin left of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-padding-top</code></td>
        
          <td><code>13px</code></td>
        
        <td><p>Padding top of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-padding-right</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Padding right of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-padding-bottom</code></td>
        
          <td><code>13px</code></td>
        
        <td><p>Padding bottom of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-padding-left</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Padding left of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-padding-media-top</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Padding top of the media on the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-padding-media-bottom</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Padding bottom of the media on the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-avatar-size</code></td>
        
          <td><code>4rem</code></td>
        
        <td><p>Size of the card avatar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-thumbnail-size</code></td>
        
          <td><code>8rem</code></td>
        
        <td><p>Size of the card thumbnail</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-background-color</code></td>
        
          <td><code>$list-wp-background-color</code></td>
        
        <td><p>Background color of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-box-shadow-color</code></td>
        
          <td><code>rgba(0, 0, 0, .2)</code></td>
        
        <td><p>Box shadow color of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-box-shadow</code></td>
        
          <td><code>0 1px 1px 1px $card-wp-box-shadow-color</code></td>
        
        <td><p>Box shadow of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-border-radius</code></td>
        
          <td><code>1px</code></td>
        
        <td><p>Border radius of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-font-size</code></td>
        
          <td><code>1.4rem</code></td>
        
        <td><p>Font size of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-line-height</code></td>
        
          <td><code>1.5</code></td>
        
        <td><p>Line height of the card</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-text-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color of the card text</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-title-font-size</code></td>
        
          <td><code>2.4rem</code></td>
        
        <td><p>Font size of card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-title-padding</code></td>
        
          <td><code>8px 0 8px 0</code></td>
        
        <td><p>Padding of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-title-margin</code></td>
        
          <td><code>2px 0</code></td>
        
        <td><p>Margin of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-title-text-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color of the card title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-header-font-size</code></td>
        
          <td><code>1.6rem</code></td>
        
        <td><p>Font size of the card header</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-header-padding</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Padding of the card header</p>
</td>
      </tr>
      
      <tr>
        <td><code>$card-wp-header-color</code></td>
        
          <td><code>#222</code></td>
        
        <td><p>Color of the card header</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

