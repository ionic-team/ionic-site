---
layout: "fluid/docs_base"
version: "2.1.0"
versionHref: "/docs/v3/2.1.0"
path: ""
category: api
id: "segmentbutton"
title: "SegmentButton"
header_sub_title: "Ionic API Documentation"
doc: "SegmentButton"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/segment/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="segment-button" href="#segment-button"></a>

SegmentButton
<h3><code>ion-segment-button</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/segment/segment.ts#L5">
Improve this doc
</a>






<p>The child buttons of the <code>ion-segment</code> component. Each <code>ion-segment-button</code> must have a value.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;
  &lt;!-- Segment buttons with icons --&gt;
  &lt;ion-segment [(ngModel)]=&quot;icons&quot; color=&quot;secondary&quot;&gt;
    &lt;ion-segment-button value=&quot;camera&quot;&gt;
      &lt;ion-icon name=&quot;camera&quot;&gt;&lt;/ion-icon&gt;
    &lt;/ion-segment-button&gt;
    &lt;ion-segment-button value=&quot;bookmark&quot;&gt;
      &lt;ion-icon name=&quot;bookmark&quot;&gt;&lt;/ion-icon&gt;
    &lt;/ion-segment-button&gt;
  &lt;/ion-segment&gt;

  &lt;!-- Segment buttons with text --&gt;
  &lt;ion-segment [(ngModel)]=&quot;relationship&quot; color=&quot;primary&quot;&gt;
    &lt;ion-segment-button value=&quot;friends&quot; (ionSelect)=&quot;selectedFriends()&quot;&gt;
      Friends
    &lt;/ion-segment-button&gt;
    &lt;ion-segment-button value=&quot;enemies&quot; (ionSelect)=&quot;selectedEnemies()&quot;&gt;
      Enemies
    &lt;/ion-segment-button&gt;
  &lt;/ion-segment&gt;
&lt;/ion-content&gt;
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
      <td><p> If true, the user cannot interact with this element.</p>
</td>
    </tr>
    
    <tr>
      <td>value</td>
      <td><code>string</code></td>
      <td><p> the value of the segment button. Required.</p>
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
      <td>ionSelect</td>
      <td><p> Emitted when a segment button has been clicked.</p>
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
        <td><code>$segment-button-ios-background-color</code></td>
        
          <td><code>transparent</code></td>
        
        <td><p>Background of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-background-color-activated</code></td>
        
          <td><code>$toolbar-ios-active-color</code></td>
        
        <td><p>Background of the activated segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-text-color</code></td>
        
          <td><code>color-contrast($colors-ios, $segment-button-ios-background-color-activated)</code></td>
        
        <td><p>Text color of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-transition-activated</code></td>
        
          <td><code>100ms all linear</code></td>
        
        <td><p>Transition of the activated segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-transition-hover</code></td>
        
          <td><code>100ms all linear</code></td>
        
        <td><p>Transition of the segment button on hover</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-transition-active</code></td>
        
          <td><code>100ms all linear</code></td>
        
        <td><p>Transition of the segment button when pressed</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-opacity-hover</code></td>
        
          <td><code>.1</code></td>
        
        <td><p>Opacity of the segment button on hover</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-opacity-active</code></td>
        
          <td><code>.16</code></td>
        
        <td><p>Opacity of the segment button when pressed</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-opacity-activated</code></td>
        
          <td><code>1</code></td>
        
        <td><p>Opacity of the activated segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-opacity-disabled</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-border-width</code></td>
        
          <td><code>1px</code></td>
        
        <td><p>Border width of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-height</code></td>
        
          <td><code>3.2rem</code></td>
        
        <td><p>Height of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-line-height</code></td>
        
          <td><code>3rem</code></td>
        
        <td><p>Line height of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-font-size</code></td>
        
          <td><code>1.3rem</code></td>
        
        <td><p>Font size of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-border-radius</code></td>
        
          <td><code>4px</code></td>
        
        <td><p>Border radius of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-icon-size</code></td>
        
          <td><code>2.6rem</code></td>
        
        <td><p>Size of an icon in the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-icon-line-height</code></td>
        
          <td><code>2.8rem</code></td>
        
        <td><p>Line height of an icon in the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-toolbar-button-max-width</code></td>
        
          <td><code>100px</code></td>
        
        <td><p>Max width of the segment button in a toolbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-toolbar-button-height</code></td>
        
          <td><code>2.6rem</code></td>
        
        <td><p>Height of the segment button in a toolbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-toolbar-line-height</code></td>
        
          <td><code>2.5rem</code></td>
        
        <td><p>Line height of the segment button in a toolbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-toolbar-font-size</code></td>
        
          <td><code>1.2rem</code></td>
        
        <td><p>Font size of the segment button in a toolbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-toolbar-icon-size</code></td>
        
          <td><code>2.2rem</code></td>
        
        <td><p>Size of an icon in the segment button in a toolbar</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-ios-toolbar-icon-line-height</code></td>
        
          <td><code>2.4rem</code></td>
        
        <td><p>Line height of an icon in the segment button in a toolbar</p>
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
        <td><code>$segment-button-md-text-color-activated</code></td>
        
          <td><code>$toolbar-md-active-color</code></td>
        
        <td><p>Text color of the activated segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-border-color-activated</code></td>
        
          <td><code>$toolbar-md-active-color</code></td>
        
        <td><p>Border color of the activated segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-border-bottom-width</code></td>
        
          <td><code>2px</code></td>
        
        <td><p>Width of the bottom border on the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-border-bottom-color</code></td>
        
          <td><code>rgba(#000, .10)</code></td>
        
        <td><p>Color of the bottom border on the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-opacity</code></td>
        
          <td><code>.7</code></td>
        
        <td><p>Opacity of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-opacity-activated</code></td>
        
          <td><code>1</code></td>
        
        <td><p>Opacity of the activated segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-opacity-disabled</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-padding</code></td>
        
          <td><code>0 6px</code></td>
        
        <td><p>Padding of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-height</code></td>
        
          <td><code>4.2rem</code></td>
        
        <td><p>Height of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-line-height</code></td>
        
          <td><code>4rem</code></td>
        
        <td><p>Line height of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-font-size</code></td>
        
          <td><code>1.2rem</code></td>
        
        <td><p>Font size of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-icon-size</code></td>
        
          <td><code>2.6rem</code></td>
        
        <td><p>Size of an icon in the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-md-icon-line-height</code></td>
        
          <td><code>$segment-button-md-line-height</code></td>
        
        <td><p>Line height of an icon in the segment button</p>
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
        <td><code>$segment-button-wp-background-color</code></td>
        
          <td><code>transparent</code></td>
        
        <td><p>Background of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-text-color-activated</code></td>
        
          <td><code>$toolbar-wp-text-color</code></td>
        
        <td><p>Text color of the activated segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-padding</code></td>
        
          <td><code>0 6px</code></td>
        
        <td><p>Padding of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-height</code></td>
        
          <td><code>4rem</code></td>
        
        <td><p>Height of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-line-height</code></td>
        
          <td><code>4rem</code></td>
        
        <td><p>Line height of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-font-size</code></td>
        
          <td><code>1.3rem</code></td>
        
        <td><p>Font size of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-text-transform</code></td>
        
          <td><code>uppercase</code></td>
        
        <td><p>Text transform of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-font-weight</code></td>
        
          <td><code>bold</code></td>
        
        <td><p>Font weight of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-opacity</code></td>
        
          <td><code>.5</code></td>
        
        <td><p>Opacity of the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-opacity-activated</code></td>
        
          <td><code>1</code></td>
        
        <td><p>Opacity of the activated segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-opacity-disabled</code></td>
        
          <td><code>.3</code></td>
        
        <td><p>Opacity of the disabled segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-icon-size</code></td>
        
          <td><code>2.6rem</code></td>
        
        <td><p>Size of an icon in the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-icon-line-height</code></td>
        
          <td><code>$segment-button-wp-line-height</code></td>
        
        <td><p>Line height of an icon in the segment button</p>
</td>
      </tr>
      
      <tr>
        <td><code>$segment-button-wp-buttons-justify-content</code></td>
        
          <td><code>flex-start</code></td>
        
        <td><p>Position of the buttons in the segment</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/components#segment'>Segment Component Docs</a>,
<a href='/docs/api/components/segment/Segment/'>Segment API Docs</a><!-- end content block -->


<!-- end body block -->

