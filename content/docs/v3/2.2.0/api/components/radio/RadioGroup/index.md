---
layout: "fluid/docs_base"
version: "2.2.0"
versionHref: "/docs/v3/2.2.0"
path: ""
category: api
id: "radiogroup"
title: "RadioGroup"
header_sub_title: "Ionic API Documentation"
doc: "RadioGroup"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/radio/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="radio-group" href="#radio-group"></a>

RadioGroup
<h3><code>[radio-group]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/radio/radio-group.ts#L11">
Improve this doc
</a>






<p>A radio group is a group of <a href="../RadioButton">radio buttons</a>. It allows
a user to select at most one radio button from a set. Checking one radio
button that belongs to a radio group unchecks any previous checked
radio button within the same group.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular Forms Docs</a>
for more information on forms and inputs.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list radio-group [(ngModel)]=&quot;autoManufacturers&quot;&gt;

  &lt;ion-list-header&gt;
    Auto Manufacturers
  &lt;/ion-list-header&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Cord&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;cord&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Duesenberg&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;duesenberg&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Hudson&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;hudson&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Packard&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;packard&quot;&gt;&lt;/ion-radio&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Studebaker&lt;/ion-label&gt;
    &lt;ion-radio value=&quot;studebaker&quot;&gt;&lt;/ion-radio&gt;
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
      <td>disabled</td>
      <td><code>boolean</code></td>
      <td><p> If true, the user cannot interact with any of the buttons in the group.</p>
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
      <td><p> Emitted when the selected button has changed.</p>
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
        <td><code>$radio-ios-color-on</code></td>
        
          <td><code>color($colors-ios, primary)</code></td>
        
        <td><p>Color of the checked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-icon-width</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-icon-height</code></td>
        
          <td><code>21px</code></td>
        
        <td><p>Height of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-icon-border-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-icon-border-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border style of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-disabled-opacity</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-item-left-margin</code></td>
        
          <td><code>8px 21px 8px 3px</code></td>
        
        <td><p>Margin of the item-left in a radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-ios-item-right-margin</code></td>
        
          <td><code>$item-ios-padding-media-top 11px $item-ios-padding-media-bottom ($item-ios-padding-left / 2)</code></td>
        
        <td><p>Margin of the item-right in a radio</p>
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
        <td><code>$radio-md-color-on</code></td>
        
          <td><code>color($colors-md, primary)</code></td>
        
        <td><p>Color of the checked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-color-off</code></td>
        
          <td><code>darken($list-md-border-color, 40%)</code></td>
        
        <td><p>Color of the unchecked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-width</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-height</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Height of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-border-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-border-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border style of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-icon-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-transition-duration</code></td>
        
          <td><code>280ms</code></td>
        
        <td><p>Transition duration of the radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-transition-easing</code></td>
        
          <td><code>cubic-bezier(.4, 0, .2, 1)</code></td>
        
        <td><p>Transition easing of the radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-disabled-opacity</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-item-left-margin</code></td>
        
          <td><code>11px 36px 10px 4px</code></td>
        
        <td><p>Margin of the item-left in a radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-md-item-right-margin</code></td>
        
          <td><code>$item-md-padding-media-top 10px $item-md-padding-media-bottom 0</code></td>
        
        <td><p>Margin of the item-right in a radio</p>
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
        <td><code>$radio-wp-color-on</code></td>
        
          <td><code>color($colors-wp, primary)</code></td>
        
        <td><p>Color of the checked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-color-off</code></td>
        
          <td><code>#333</code></td>
        
        <td><p>Color of the unchecked radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-order</code></td>
        
          <td><code>-1</code></td>
        
        <td><p>Order of the radio (places to the left of the item)</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-width</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-height</code></td>
        
          <td><code>16px</code></td>
        
        <td><p>Height of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-border-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Border width of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-border-style</code></td>
        
          <td><code>solid</code></td>
        
        <td><p>Border style of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-icon-border-radius</code></td>
        
          <td><code>50%</code></td>
        
        <td><p>Border radius of the radio icon</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-disabled-opacity</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-item-left-margin</code></td>
        
          <td><code>9px 20px 9px 4px</code></td>
        
        <td><p>Margin of the item-left in a radio</p>
</td>
      </tr>
      
      <tr>
        <td><code>$radio-wp-item-right-margin</code></td>
        
          <td><code>11px 10px 10px 0</code></td>
        
        <td><p>Margin of the item-right in a radio</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/components#radio'>Radio Component Docs</a>,
<a href='../RadioButton'>RadioButton API Docs</a><!-- end content block -->


<!-- end body block -->

