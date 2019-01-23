---
layout: "fluid/docs_base"
version: "2.0.1"
versionHref: "/docs/v3/2.0.1"
path: ""
category: api
id: "fabbutton"
title: "FabButton"
header_sub_title: "Ionic API Documentation"
doc: "FabButton"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/fab/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="fab-button" href="#fab-button"></a>

FabButton
<h3><code>[ion-fab]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/fab/fab.ts#L6">
Improve this doc
</a>






<p>FABs (Floating Action Buttons) are standard material design components. They are shaped as a circle that represents a promoted action. When pressed, it may contain more related actions.
FABs as its name suggests are floating over the content in a fixed position. This is not achieved exclusively with <code>&lt;button ion-fab&gt;Button&lt;/button&gt;</code> but it has to wrapped with the <code>&lt;ion-fab&gt;</code> component, like this:</p>
<pre><code class="lang-html">&lt;ion-content&gt;
 &lt;!-- Real floating action button, fixed. It will not scroll with the content --&gt;
 &lt;ion-fab&gt;
   &lt;button ion-fab&gt;Button&lt;/button&gt;
 &lt;/ion-fab&gt;

 &lt;!-- Button shaped as a circle that just like a normal button scrolls with the content --&gt;
 &lt;button ion-fab&gt;Button&lt;/button&gt;
&lt;/ion-content&gt;
</code></pre>
<p>In case the button is not wrapped with <code>&lt;ion-fab&gt;</code>, the fab button will behave like a normal button, scrolling with the content.</p>
<p>See [ion-fab] to learn more information about how to position the fab button.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;!-- Colors --&gt;
&lt;ion-fab&gt;
  &lt;button ion-fab color=&quot;primary&quot;&gt;Button&lt;/button&gt;
&lt;/ion-fab&gt;

&lt;!-- Mini --&gt;
&lt;ion-fab&gt;
  &lt;button ion-fab mini&gt;Small&lt;/button&gt;
&lt;/ion-fab&gt;
</code></pre>




<!-- @property tags -->

<h2><a class="anchor" name="attributes" href="#attributes"></a>Attributes:</h2>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>







<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
mini
</td>



<td>
Makes a fab button with a reduced size.

</td>
</tr>

</tbody>
</table>



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

<a href='/docs//components#fabs'>FAB Component Docs</a><!-- end content block -->


<!-- end body block -->

