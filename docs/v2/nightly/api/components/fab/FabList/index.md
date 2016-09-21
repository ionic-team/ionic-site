---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "fablist"
title: "FabList"
header_sub_title: "Ionic API Documentation"
doc: "FabList"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/fab/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="fab-list" href="#fab-list"></a>

FabList
<h3><code>ion-fab-list</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/fab/fab.ts#L105">
Improve this doc
</a>










<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->


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
        <td><code>$button-fab-size</code></td>
        
          <td><code>56px</code></td>
        
        <td><p>Width and height of the FAB button</p>
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
        <td><code>$button-ios-fab-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the FAB button</p>
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
        <td><code>$button-md-fab-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the FAB button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$button-md-fab-box-shadow</code></td>
        
          <td><code>0 4px 6px 0 rgba(0, 0, 0, .14), 0 4px 5px rgba(0, 0, 0, .1)</code></td>
        
        <td><p>Box shadow of the FAB button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$button-md-fab-box-shadow-activated</code></td>
        
          <td><code>0 5px 15px 0 rgba(0, 0, 0, .4), 0 4px 7px 0 rgba(0, 0, 0, .1)</code></td>
        
        <td><p>Box shadow of the activated FAB button</p>
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
        <td><code>$button-wp-fab-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the FAB button</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#fab'>Fab Component Docs</a><!-- end content block -->


<!-- end body block -->

