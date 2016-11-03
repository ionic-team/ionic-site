---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2"
path: ""
category: api
id: "modal"
title: "Modal"
header_sub_title: "Ionic API Documentation"
doc: "Modal"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="modal" href="#modal"></a>

Modal





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/components/modal/modal.ts#L8">
Improve this doc
</a>










<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="present"></div>

<h3>
<a class="anchor" name="present" href="#present"></a>
<code>present(opts)</code>
  

</h3>

Present the action sheet instance.



<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>NavOptions</code>
      </td>
      <td>
        <p>Nav options to go with this transition.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>





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
        <td><code>$modal-inset-min-width</code></td>
        
          <td><code>768px</code></td>
        
        <td><p>Min width of the modal inset</p>
</td>
      </tr>
      
      <tr>
        <td><code>$modal-inset-min-height-small</code></td>
        
          <td><code>600px</code></td>
        
        <td><p>Min height of the small modal inset</p>
</td>
      </tr>
      
      <tr>
        <td><code>$modal-inset-min-height-large</code></td>
        
          <td><code>768px</code></td>
        
        <td><p>Min height of the large modal inset</p>
</td>
      </tr>
      
      <tr>
        <td><code>$modal-inset-width</code></td>
        
          <td><code>600px</code></td>
        
        <td><p>Width of the large modal inset</p>
</td>
      </tr>
      
      <tr>
        <td><code>$modal-inset-height-small</code></td>
        
          <td><code>500px</code></td>
        
        <td><p>Height of the small modal inset</p>
</td>
      </tr>
      
      <tr>
        <td><code>$modal-inset-height-large</code></td>
        
          <td><code>600px</code></td>
        
        <td><p>Height of the large modal inset</p>
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
        <td><code>$modal-ios-background-color</code></td>
        
          <td><code>$background-ios-color</code></td>
        
        <td><p>Background color for the modal</p>
</td>
      </tr>
      
      <tr>
        <td><code>$modal-ios-border-radius</code></td>
        
          <td><code>5px</code></td>
        
        <td><p>Border radius for the modal</p>
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
        <td><code>$modal-md-background-color</code></td>
        
          <td><code>$background-md-color</code></td>
        
        <td><p>Background color for the modal</p>
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
        <td><code>$modal-wp-background-color</code></td>
        
          <td><code>$background-wp-color</code></td>
        
        <td><p>Background color for the modal</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

