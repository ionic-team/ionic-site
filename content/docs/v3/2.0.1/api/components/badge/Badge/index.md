---
layout: "fluid/docs_base"
version: "2.0.1"
versionHref: "/docs/v3/2.0.1"
path: ""
category: api
id: "badge"
title: "Badge"
header_sub_title: "Ionic API Documentation"
doc: "Badge"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="badge" href="#badge"></a>

Badge
<h3><code>ion-badge</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/badge/badge.ts#L3">
Improve this doc
</a>






<p>Badges are simple components in Ionic containing numbers or text. You can display a badge to indicate that there is new information associated with the item it is on.</p>




<!-- @usage tag -->


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
      <td>color</td>
      <td><code>string</code></td>
      <td><p> The color to use from your Sass <code>$colors</code> map.
Default options are: <code>&quot;primary&quot;</code>, <code>&quot;secondary&quot;</code>, <code>&quot;danger&quot;</code>, <code>&quot;light&quot;</code>, and <code>&quot;dark&quot;</code>.
For more information, see <a href="/docs//theming/theming-your-app">Theming your App</a>.</p>
</td>
    </tr>
    
    <tr>
      <td>mode</td>
      <td><code>string</code></td>
      <td><p> The mode determines which platform styles to use.
Possible values are: <code>&quot;ios&quot;</code>, <code>&quot;md&quot;</code>, or <code>&quot;wp&quot;</code>.
For more information, see <a href="/docs//theming/platform-specific-styles">Platform Styles</a>.</p>
</td>
    </tr>
    
  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">
    
      
      
      <a ng-init="setSassPlatform('base')" ng-class="{ active: active === 'base' }" ng-click="setSassPlatform('base')" >All</a>
      
      
      
      <a ng-class="{ active: active === 'ios' }" ng-click="setSassPlatform('ios')">iOS</a>
      
      
      
      <a ng-class="{ active: active === 'md' }" ng-click="setSassPlatform('md')">Material Design</a>
      
      
      
      <a ng-class="{ active: active === 'wp' }" ng-click="setSassPlatform('wp')">Windows Platform</a>
      
      
    
  </div>


  
  <table ng-show="active === 'base'" id="sass-base" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td><code>$badge-font-size</code></td>
        
          <td><code>1.3rem</code></td>
        
        <td><p>Font size of the badge</p>
</td>
      </tr>
      
      <tr>
        <td><code>$badge-font-weight</code></td>
        
          <td><code>bold</code></td>
        
        <td><p>Font weight of the badge</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
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
        <td><code>$badge-ios-border-radius</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Border radius of the badge</p>
</td>
      </tr>
      
      <tr>
        <td><code>$badge-ios-background-color</code></td>
        
          <td><code>color($colors-ios, primary)</code></td>
        
        <td><p>Background color of the badge</p>
</td>
      </tr>
      
      <tr>
        <td><code>$badge-ios-text-color</code></td>
        
          <td><code>color-contrast($colors-ios, $badge-ios-background-color)</code></td>
        
        <td><p>Text color of the badge</p>
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
        <td><code>$badge-md-border-radius</code></td>
        
          <td><code>4px</code></td>
        
        <td><p>Border radius of the badge</p>
</td>
      </tr>
      
      <tr>
        <td><code>$badge-md-background-color</code></td>
        
          <td><code>color($colors-md, primary)</code></td>
        
        <td><p>Background color of the badge</p>
</td>
      </tr>
      
      <tr>
        <td><code>$badge-md-text-color</code></td>
        
          <td><code>color-contrast($colors-md, $badge-md-background-color)</code></td>
        
        <td><p>Text color of the badge</p>
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
        <td><code>$badge-wp-border-radius</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Border radius of the badge</p>
</td>
      </tr>
      
      <tr>
        <td><code>$badge-wp-background-color</code></td>
        
          <td><code>color($colors-wp, primary)</code></td>
        
        <td><p>Background color of the badge</p>
</td>
      </tr>
      
      <tr>
        <td><code>$badge-wp-text-color</code></td>
        
          <td><code>color-contrast($colors-wp, $badge-wp-background-color)</code></td>
        
        <td><p>Text color of the badge</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs//components/#badges'>Badges Component Docs</a><!-- end content block -->


<!-- end body block -->

