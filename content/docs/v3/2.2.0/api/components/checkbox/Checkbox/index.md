---
layout: "fluid/docs_base"
version: "2.2.0"
versionHref: "/docs/v3/2.2.0"
path: ""
category: api
id: "checkbox"
title: "Checkbox"
header_sub_title: "Ionic API Documentation"
doc: "Checkbox"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/checkbox/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="checkbox" href="#checkbox"></a>

Checkbox
<h3><code>ion-checkbox</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/checkbox/checkbox.ts#L13">
Improve this doc
</a>






<p>The Checkbox is a simple component styled based on the mode. It can be
placed in an <code>ion-item</code> or used as a stand-alone checkbox.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular 2 Docs</a>
for more info on forms and inputs.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Pepperoni&lt;/ion-label&gt;
    &lt;ion-checkbox [(ngModel)]=&quot;pepperoni&quot;&gt;&lt;/ion-checkbox&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Sausage&lt;/ion-label&gt;
    &lt;ion-checkbox [(ngModel)]=&quot;sausage&quot; disabled=&quot;true&quot;&gt;&lt;/ion-checkbox&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Mushrooms&lt;/ion-label&gt;
    &lt;ion-checkbox [(ngModel)]=&quot;mushrooms&quot;&gt;&lt;/ion-checkbox&gt;
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
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
      <td>checked</td>
      <td><code>boolean</code></td>
      <td><p> If true, the element is selected.</p>
</td>
    </tr>
    
    <tr>
      <td>color</td>
      <td><code>string</code></td>
      <td><p> The color to use from your Sass <code>$colors</code> map.
Default options are: <code>&quot;primary&quot;</code>, <code>&quot;secondary&quot;</code>, <code>&quot;danger&quot;</code>, <code>&quot;light&quot;</code>, and <code>&quot;dark&quot;</code>.
For more information, see <a href="/docs/theming/theming-your-app">Theming your App</a>.</p>
</td>
    </tr>
    
    <tr>
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> If true, the user cannot interact with this element.</p>
</td>
    </tr>
    
    <tr>
      <td>mode</td>
      <td><code>string</code></td>
      <td><p> The mode determines which platform styles to use.
Possible values are: <code>&quot;ios&quot;</code>, <code>&quot;md&quot;</code>, or <code>&quot;wp&quot;</code>.
For more information, see <a href="/docs/theming/platform-specific-styles">Platform Styles</a>.</p>
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
      <td>ionChange</td>
      <td><p> Emitted when the checkbox value changes.</p>
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
        <td><code>$checkbox-ios-background-color-off</code></td>
        
          <td><code>$list-ios-background-color</code></td>
        
        <td><p>Background color of the checkbox when off</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-background-color-on</code></td>
        
          <td><code>color($colors-ios, primary)</code></td>
        
        <td><p>Background color of the checkbox when on</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-icon-size</code></td>
        
          <td><code>21px</code></td>
        
        <td><p>Size of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-icon-border-color-off</code></td>
        
          <td><code>$list-ios-border-color</code></td>
        
        <td><p>Border color of the checkbox icon when off</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-icon-border-color-on</code></td>
        
          <td><code>$checkbox-ios-background-color-on</code></td>
        
        <td><p>Border color of the checkbox icon when on</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-icon-border-width</code></td>
        
          <td><code>1px</code></td>
        
        <td><p>Border width of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-icon-border-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border style of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-icon-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-icon-checkmark-width</code></td>
        
          <td><code>1px</code></td>
        
        <td><p>Width of the checkbox icon checkmark</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-icon-checkmark-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Style of the checkbox icon checkmark</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-icon-checkmark-color</code></td>
        
          <td><code>color-contrast($colors-ios, $checkbox-ios-background-color-on)</code></td>
        
        <td><p>Color of the checkbox icon checkmark</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-disabled-opacity</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-item-left-margin</code></td>
        
          <td><code>$item-ios-padding-media-top $item-ios-padding-right $item-ios-padding-media-bottom 2px</code></td>
        
        <td><p>Margin of the left checkbox item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-ios-item-right-margin</code></td>
        
          <td><code>10px 8px 9px 0</code></td>
        
        <td><p>Margin of the right checkbox item</p>
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
        <td><code>$checkbox-md-border-bottom-width</code></td>
        
          <td><code>1px</code></td>
        
        <td><p>Border bottom width of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-border-bottom-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border bottom style of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-border-bottom-color</code></td>
        
          <td><code>$list-md-border-color</code></td>
        
        <td><p>Border bottom color of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-padding</code></td>
        
          <td><code>$item-md-padding-top ($item-md-padding-right / 2) $item-md-padding-bottom 0</code></td>
        
        <td><p>Padding of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-margin</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Margin of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-disabled-opacity</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-background-color-off</code></td>
        
          <td><code>$list-md-background-color</code></td>
        
        <td><p>Background color of the checkbox icon when off</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-background-color-on</code></td>
        
          <td><code>color($colors-md, primary)</code></td>
        
        <td><p>Background color of the checkbox icon when on</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-size</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Size of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-checkmark-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Width of the checkbox icon checkmark</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-checkmark-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Style of the checkbox icon checkmark</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-checkmark-color</code></td>
        
          <td><code>color-contrast($colors-md, $checkbox-md-icon-background-color-on)</code></td>
        
        <td><p>Color of the checkbox icon checkmark</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-border-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border width of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-border-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border style of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-border-radius</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border radius of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-border-color-off</code></td>
        
          <td><code>darken($list-md-border-color, 40%)</code></td>
        
        <td><p>Border color of the checkbox icon when off</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-icon-border-color-on</code></td>
        
          <td><code>color($colors-md, primary)</code></td>
        
        <td><p>Border color of the checkbox icon when on</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-transition-duration</code></td>
        
          <td><code>280ms</code></td>
        
        <td><p>Transition duration of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-transition-easing</code></td>
        
          <td><code>cubic-bezier(.4, 0, .2, 1)</code></td>
        
        <td><p>Transition easing of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-item-left-margin</code></td>
        
          <td><code>$item-md-padding-media-top 36px $item-md-padding-media-bottom 4px</code></td>
        
        <td><p>Margin of the left checkbox item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-md-item-right-margin</code></td>
        
          <td><code>11px 10px 10px 0</code></td>
        
        <td><p>Margin of the right checkbox item</p>
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
        <td><code>$checkbox-wp-border-bottom-width</code></td>
        
          <td><code>1px</code></td>
        
        <td><p>Border bottom width of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-border-bottom-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border bottom style of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-border-bottom-color</code></td>
        
          <td><code>$list-wp-border-color</code></td>
        
        <td><p>Border bottom color of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-padding</code></td>
        
          <td><code>$item-wp-padding-top ($item-wp-padding-right / 2) $item-wp-padding-bottom 0</code></td>
        
        <td><p>Padding of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-margin</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Margin of the checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-disabled-opacity</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled checkbox</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-background-color-off</code></td>
        
          <td><code>$list-wp-background-color</code></td>
        
        <td><p>Background color of the checkbox icon when off</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-background-color-on</code></td>
        
          <td><code>color($colors-wp, primary)</code></td>
        
        <td><p>Background color of the checkbox icon when on</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-size</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Size of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-checkmark-width</code></td>
        
          <td><code>1px</code></td>
        
        <td><p>Width of the checkbox icon checkmark</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-checkmark-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Style of the checkbox icon checkmark</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-checkmark-color</code></td>
        
          <td><code>color-contrast($colors-wp, $checkbox-wp-icon-background-color-on)</code></td>
        
        <td><p>Color of the checkbox icon checkmark</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-border-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border width of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-border-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border style of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-border-radius</code></td>
        
          <td><code>0</code></td>
        
        <td><p>Border radius of the checkbox icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-border-color-off</code></td>
        
          <td><code>#333</code></td>
        
        <td><p>Border color of the checkbox icon when off</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-icon-border-color-on</code></td>
        
          <td><code>color($colors-wp, primary)</code></td>
        
        <td><p>Border color of the checkbox icon when on</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-item-left-margin</code></td>
        
          <td><code>$item-wp-padding-media-top $item-wp-padding-right $item-wp-padding-media-bottom 4px</code></td>
        
        <td><p>Margin of the left checkbox item</p>
</td>
      </tr>
      
      <tr>
        <td><code>$checkbox-wp-item-right-margin</code></td>
        
          <td><code>11px 10px 10px 0</code></td>
        
        <td><p>Margin of the right checkbox item</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/components#checkbox'>Checkbox Component Docs</a><!-- end content block -->


<!-- end body block -->

