---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2"
path: ""
category: api
id: "listheader"
title: "ListHeader"
header_sub_title: "Ionic API Documentation"
doc: "ListHeader"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="list-header" href="#list-header"></a>

ListHeader
<h3><code>ion-list-header</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/components/list/list-header.ts#L3">
Improve this doc
</a>










<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="id"></div>

<h3>
<a class="anchor" name="id" href="#id"></a>
<code>id</code>
  

</h3>














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
        <td><code>$list-ios-margin-top</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Margin top of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-ios-margin-right</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Margin right of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-ios-margin-bottom</code></td>
        
          <td><code>32px</code></td>
        
        <td><p>Margin bottom of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-ios-margin-left</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Margin left of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-ios-margin-top</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin top of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-ios-margin-right</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin right of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-ios-margin-bottom</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin bottom of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-ios-margin-left</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin left of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-ios-border-radius</code></td>
        
          <td><code>4px</code></td>
        
        <td><p>Border radius of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-ios-header-padding-left</code></td>
        
          <td><code>$item-ios-padding-left</code></td>
        
        <td><p>Padding left of the header in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-ios-header-font-size</code></td>
        
          <td><code>1.2rem</code></td>
        
        <td><p>Font size of the header in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-ios-header-font-weight</code></td>
        
          <td><code>500</code></td>
        
        <td><p>Font weight of the header in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-ios-header-letter-spacing</code></td>
        
          <td><code>.1rem</code></td>
        
        <td><p>Letter spacing of the header in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-ios-header-color</code></td>
        
          <td><code>#333</code></td>
        
        <td><p>Text color of the header in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-ios-header-background-color</code></td>
        
          <td><code>transparent</code></td>
        
        <td><p>Background color of the header in a list</p>
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
        <td><code>$list-md-margin-top</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin top of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-md-margin-right</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Margin right of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-md-margin-bottom</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin bottom of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-md-margin-left</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Margin left of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-md-margin-top</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin top of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-md-margin-right</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin right of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-md-margin-bottom</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin bottom of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-md-margin-left</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin left of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-md-border-radius</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border radius of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-md-header-padding-left</code></td>
        
          <td><code>$item-md-padding-left</code></td>
        
        <td><p>Padding left of the header in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-md-header-font-size</code></td>
        
          <td><code>1.4rem</code></td>
        
        <td><p>Font size of the header in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-md-header-color</code></td>
        
          <td><code>#858585</code></td>
        
        <td><p>Text color of the header in a list</p>
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
        <td><code>$list-wp-margin-top</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin top of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-wp-margin-right</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Margin right of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-wp-margin-bottom</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin bottom of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-wp-margin-left</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Margin left of the list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-wp-margin-top</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin top of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-wp-margin-right</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin right of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-wp-margin-bottom</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin bottom of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-wp-margin-left</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Margin left of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-inset-wp-border-radius</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border radius of the inset list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-wp-header-padding-left</code></td>
        
          <td><code>$item-wp-padding-left</code></td>
        
        <td><p>Padding left of the header in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-wp-header-font-size</code></td>
        
          <td><code>2rem</code></td>
        
        <td><p>Font size of the header in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$list-wp-header-color</code></td>
        
          <td><code>$list-wp-text-color</code></td>
        
        <td><p>Text color of the header in a list</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

