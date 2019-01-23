---
layout: "fluid/docs_base"
version: "2.0.1"
versionHref: "/docs/v3/2.0.1"
path: ""
category: api
id: "fablist"
title: "FabList"
header_sub_title: "Ionic API Documentation"
doc: "FabList"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/fab/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="fab-list" href="#fab-list"></a>

FabList
<h3><code>ion-fab-list</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/fab/fab.ts#L102">
Improve this doc
</a>






<p><code>ion-fab-list</code> is a container for multiple FAB buttons. They are components of <code>ion-fab</code> and allow you to specificy the buttons position, left, right, top, bottom.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-fab bottom right &gt;
  &lt;button ion-fab&gt;Share&lt;/button&gt;
  &lt;ion-fab-list side=&quot;top&quot;&gt;
    &lt;button ion-fab&gt;Facebook&lt;/button&gt;
    &lt;button ion-fab&gt;Twitter&lt;/button&gt;
    &lt;button ion-fab&gt;Youtube&lt;/button&gt;
  &lt;/ion-fab-list&gt;
  &lt;ion-fab-list side=&quot;left&quot;&gt;
    &lt;button ion-fab&gt;Vimeo&lt;/button&gt;
  &lt;/ion-fab-list&gt;
&lt;/ion-fab&gt;
</code></pre>




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
        <td><code>$fab-size</code></td>
        
          <td><code>56px</code></td>
        
        <td><p>Width and height of the FAB button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-mini-size</code></td>
        
          <td><code>40px</code></td>
        
        <td><p>Width and height of the FAB button mini</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-content-margin</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Margin of the FAB Container</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-list-margin</code></td>
        
          <td><code>10px</code></td>
        
        <td><p>Margin of the FAB List</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-list-button-background-color</code></td>
        
          <td><code>#f4f4f4</code></td>
        
        <td><p>Background color of the button in a list</p>
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
        <td><code>$fab-ios-background-color</code></td>
        
          <td><code>color($colors-ios, primary)</code></td>
        
        <td><p>Background color of the button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-ios-text-color</code></td>
        
          <td><code>color-contrast($colors-ios, $fab-ios-background-color)</code></td>
        
        <td><p>Text color of the button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-ios-background-color-activated</code></td>
        
          <td><code>color-shade($fab-ios-background-color)</code></td>
        
        <td><p>Background color of the activated button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-ios-list-button-background-color</code></td>
        
          <td><code>$fab-list-button-background-color</code></td>
        
        <td><p>Background color of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-ios-list-button-text-color</code></td>
        
          <td><code>color-contrast($colors-ios, $fab-ios-list-button-background-color)</code></td>
        
        <td><p>Text color of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-ios-list-button-background-color-activated</code></td>
        
          <td><code>color-shade($fab-ios-list-button-background-color)</code></td>
        
        <td><p>Background color of the activated button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-ios-list-button-transition-duration</code></td>
        
          <td><code>200ms</code></td>
        
        <td><p>Transition duration of the transform and opacity of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-ios-list-button-transition-timing-function</code></td>
        
          <td><code>ease</code></td>
        
        <td><p>Speed curve of the transition of the transform and opacity of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-ios-list-button-transition-delay</code></td>
        
          <td><code>10ms</code></td>
        
        <td><p>Transition delay of the transform and opacity of the button in a list</p>
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
        <td><code>$fab-md-box-shadow</code></td>
        
          <td><code>0 4px 6px 0 rgba(0, 0, 0, .14), 0 4px 5px rgba(0, 0, 0, .1)</code></td>
        
        <td><p>Box shadow of the FAB button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-box-shadow-activated</code></td>
        
          <td><code>0 5px 15px 0 rgba(0, 0, 0, .4), 0 4px 7px 0 rgba(0, 0, 0, .1)</code></td>
        
        <td><p>Box shadow of the activated FAB button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-background-color</code></td>
        
          <td><code>color($colors-md, primary)</code></td>
        
        <td><p>Background color of the button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-text-color</code></td>
        
          <td><code>color-contrast($colors-md, $fab-md-background-color)</code></td>
        
        <td><p>Text color of the button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-background-color-activated</code></td>
        
          <td><code>color-shade($fab-md-background-color)</code></td>
        
        <td><p>Background color of the activated button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-list-button-background-color</code></td>
        
          <td><code>$fab-list-button-background-color</code></td>
        
        <td><p>Background color of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-list-button-text-color</code></td>
        
          <td><code>color-contrast($colors-md, $fab-md-list-button-background-color)</code></td>
        
        <td><p>Text color of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-list-button-background-color-activated</code></td>
        
          <td><code>color-shade($fab-md-list-button-background-color)</code></td>
        
        <td><p>Background color of the activated button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-list-button-transition-duration</code></td>
        
          <td><code>200ms</code></td>
        
        <td><p>Transition duration of the transform and opacity of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-list-button-transition-timing-function</code></td>
        
          <td><code>ease</code></td>
        
        <td><p>Speed curve of the transition of the transform and opacity of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-md-list-button-transition-delay</code></td>
        
          <td><code>10ms</code></td>
        
        <td><p>Transition delay of the transform and opacity of the button in a list</p>
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
        <td><code>$fab-wp-background-color</code></td>
        
          <td><code>color($colors-wp, primary)</code></td>
        
        <td><p>Background color of the button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-wp-text-color</code></td>
        
          <td><code>color-contrast($colors-wp, $fab-wp-background-color)</code></td>
        
        <td><p>Text color of the button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-wp-background-color-activated</code></td>
        
          <td><code>color-shade($fab-wp-background-color)</code></td>
        
        <td><p>Background color of the activated button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-wp-list-button-background-color</code></td>
        
          <td><code>$fab-list-button-background-color</code></td>
        
        <td><p>Background color of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-wp-list-button-text-color</code></td>
        
          <td><code>color-contrast($colors-wp, $fab-wp-list-button-background-color)</code></td>
        
        <td><p>Text color of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-wp-list-button-background-color-activated</code></td>
        
          <td><code>color-shade($fab-wp-list-button-background-color)</code></td>
        
        <td><p>Background color of the activated button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-wp-list-button-transition-duration</code></td>
        
          <td><code>200ms</code></td>
        
        <td><p>Transition duration of the transform and opacity of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-wp-list-button-transition-timing-function</code></td>
        
          <td><code>ease</code></td>
        
        <td><p>Speed curve of the transition of the transform and opacity of the button in a list</p>
</td>
      </tr>
      
      <tr>
        <td><code>$fab-wp-list-button-transition-delay</code></td>
        
          <td><code>10ms</code></td>
        
        <td><p>Transition delay of the transform and opacity of the button in a list</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs//components#fab'>Fab Component Docs</a><!-- end content block -->


<!-- end body block -->

