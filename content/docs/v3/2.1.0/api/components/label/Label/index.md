---
layout: "fluid/docs_base"
version: "2.1.0"
versionHref: "/docs/v3/2.1.0"
path: ""
category: api
id: "label"
title: "Label"
header_sub_title: "Ionic API Documentation"
doc: "Label"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/label/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="label" href="#label"></a>

Label
<h3><code>ion-label</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/label/label.ts#L3">
Improve this doc
</a>






<p>Labels are placed inside of an <code>ion-item</code> element and can be used
to describe an <code>ion-input</code>, <code>ion-toggle</code>, <code>ion-checkbox</code>, and more.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-item&gt;
  &lt;ion-label&gt;Username&lt;/ion-label&gt;
  &lt;ion-input&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label fixed&gt;Website&lt;/ion-label&gt;
  &lt;ion-input type=&quot;url&quot;&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label floating&gt;Email&lt;/ion-label&gt;
  &lt;ion-input type=&quot;email&quot;&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label stacked&gt;Phone&lt;/ion-label&gt;
  &lt;ion-input type=&quot;tel&quot;&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label&gt;Toggle&lt;/ion-label&gt;
  &lt;ion-toggle&gt;&lt;/ion-toggle&gt;
&lt;/ion-item&gt;

&lt;ion-item&gt;
  &lt;ion-label&gt;Checkbox&lt;/ion-label&gt;
  &lt;ion-checkbox&gt;&lt;/ion-checkbox&gt;
&lt;/ion-item&gt;
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
fixed
</td>



<td>
A persistent label that sits next the input.
</td>
</tr>

<tr>
<td>
floating
</td>



<td>
A label that will float above the input if the input is empty or loses focus.
</td>
</tr>

<tr>
<td>
stacked
</td>



<td>
A stacked label will always appear on top of the input.


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
        <td><code>$label-ios-margin</code></td>
        
          <td><code>$item-ios-padding-top ($item-ios-padding-right / 2) $item-ios-padding-bottom 0</code></td>
        
        <td><p>Margin of the label</p>
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
        <td><code>$label-md-text-color</code></td>
        
          <td><code>#999</code></td>
        
        <td><p>Text color of the label</p>
</td>
      </tr>
      
      <tr>
        <td><code>$label-md-text-color-focused</code></td>
        
          <td><code>color($colors-md, primary)</code></td>
        
        <td><p>Text color of the label when it has focused</p>
</td>
      </tr>
      
      <tr>
        <td><code>$label-md-margin</code></td>
        
          <td><code>$item-md-padding-top ($item-md-padding-right / 2) $item-md-padding-bottom 0</code></td>
        
        <td><p>Margin of the label</p>
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
        <td><code>$label-wp-text-color</code></td>
        
          <td><code>#999</code></td>
        
        <td><p>Text color of the label</p>
</td>
      </tr>
      
      <tr>
        <td><code>$label-wp-text-color-focused</code></td>
        
          <td><code>color($colors-wp, primary)</code></td>
        
        <td><p>Text color of the label when it has focused</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='../../../../components#inputs'>Input Component Docs</a>,
<a href='../../input/Input'>Input API Docs</a><!-- end content block -->


<!-- end body block -->

