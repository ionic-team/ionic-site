---
layout: "fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/3.1.0"
path: ""
category: api
id: "range"
title: "Range"
header_sub_title: "Ionic API Documentation"
doc: "Range"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/range/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="range" href="#range"></a>

Range
<h3><code>ion-range</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/range/range.ts#L12">
Improve this doc
</a>






<p>The Range slider lets users select from a range of values by moving
the slider knob. It can accept dual knobs, but by default one knob
controls the value of the range.</p>
<h3 id="range-labels">Range Labels</h3>
<p>Labels can be placed on either side of the range by adding the
<code>range-left</code> or <code>range-right</code> property to the element. The element
doesn&#39;t have to be an <code>ion-label</code>, it can be added to any element
to place it to the left or right of the range. See <a href="#usage">usage</a>
below for examples.</p>
<h3 id="minimum-and-maximum-values">Minimum and Maximum Values</h3>
<p>Minimum and maximum values can be passed to the range through the <code>min</code>
and <code>max</code> properties, respectively. By default, the range sets the <code>min</code>
to <code>0</code> and the <code>max</code> to <code>100</code>.</p>
<h3 id="steps-and-snaps">Steps and Snaps</h3>
<p>The <code>step</code> property specifies the value granularity of the range&#39;s value.
It can be useful to set the <code>step</code> when the value isn&#39;t in increments of <code>1</code>.
Setting the <code>step</code> property will show tick marks on the range for each step.
The <code>snaps</code> property can be set to automatically move the knob to the nearest
tick mark based on the step property value.</p>
<h3 id="dual-knobs">Dual Knobs</h3>
<p>Setting the <code>dualKnobs</code> property to <code>true</code> on the range component will
enable two knobs on the range. If the range has two knobs, the value will
be an object containing two properties: <code>lower</code> and <code>upper</code>.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-item&gt;
    &lt;ion-range [(ngModel)]=&quot;singleValue&quot; color=&quot;danger&quot; pin=&quot;true&quot;&gt;&lt;/ion-range&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-range min=&quot;-200&quot; max=&quot;200&quot; [(ngModel)]=&quot;saturation&quot; color=&quot;secondary&quot;&gt;
      &lt;ion-label range-left&gt;-200&lt;/ion-label&gt;
      &lt;ion-label range-right&gt;200&lt;/ion-label&gt;
    &lt;/ion-range&gt;
  &lt;/ion-item&gt;

 &lt;ion-item&gt;
   &lt;ion-range min=&quot;20&quot; max=&quot;80&quot; step=&quot;2&quot; [(ngModel)]=&quot;brightness&quot;&gt;
     &lt;ion-icon small range-left name=&quot;sunny&quot;&gt;&lt;/ion-icon&gt;
     &lt;ion-icon range-right name=&quot;sunny&quot;&gt;&lt;/ion-icon&gt;
   &lt;/ion-range&gt;
 &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;step=100, snaps, {{singleValue4}}&lt;/ion-label&gt;
    &lt;ion-range min=&quot;1000&quot; max=&quot;2000&quot; step=&quot;100&quot; snaps=&quot;true&quot; color=&quot;secondary&quot; [(ngModel)]=&quot;singleValue4&quot;&gt;&lt;/ion-range&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;dual, step=3, snaps, {{dualValue2 | json}}&lt;/ion-label&gt;
    &lt;ion-range dualKnobs=&quot;true&quot; [(ngModel)]=&quot;dualValue2&quot; min=&quot;21&quot; max=&quot;72&quot; step=&quot;3&quot; snaps=&quot;true&quot;&gt;&lt;/ion-range&gt;
  &lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="ratio"></div>

<h3>
<a class="anchor" name="ratio" href="#ratio"></a>
<code>ratio</code>


</h3>

Returns the ratio of the knob's is current location, which is a number
between `0` and `1`. If two knobs are used, this property represents
the lower value.










<div id="ratioUpper"></div>

<h3>
<a class="anchor" name="ratioUpper" href="#ratioUpper"></a>
<code>ratioUpper</code>


</h3>

Returns the ratio of the upper value's is current location, which is
a number between `0` and `1`. If there is only one knob, then this
will return `null`.









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
      <td>debounce</td>
      <td><code>number</code></td>
      <td><p> How long, in milliseconds, to wait to trigger the
<code>ionChange</code> event after each change in the range value. Default <code>0</code>.</p>
</td>
    </tr>

    <tr>
      <td>dualKnobs</td>
      <td><code>boolean</code></td>
      <td><p> Show two knobs. Defaults to <code>false</code>.</p>
</td>
    </tr>

    <tr>
      <td>max</td>
      <td><code>number</code></td>
      <td><p> Maximum integer value of the range. Defaults to <code>100</code>.</p>
</td>
    </tr>

    <tr>
      <td>min</td>
      <td><code>number</code></td>
      <td><p> Minimum integer value of the range. Defaults to <code>0</code>.</p>
</td>
    </tr>

    <tr>
      <td>pin</td>
      <td><code>boolean</code></td>
      <td><p> If true, a pin with integer value is shown when the knob
is pressed. Defaults to <code>false</code>.</p>
</td>
    </tr>

    <tr>
      <td>snaps</td>
      <td><code>boolean</code></td>
      <td><p> If true, the knob snaps to tick marks evenly spaced based
on the step property value. Defaults to <code>false</code>.</p>
</td>
    </tr>

    <tr>
      <td>step</td>
      <td><code>number</code></td>
      <td><p> Specifies the value granularity. Defaults to <code>1</code>.</p>
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
        <td><code>$range-ios-padding-vertical</code></td>

          <td><code>8px</code></td>

        <td><p>Padding top/bottom of the range</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-padding-horizontal</code></td>

          <td><code>16px</code></td>

        <td><p>Padding left/right of the range</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-slider-height</code></td>

          <td><code>42px</code></td>

        <td><p>Height of the range slider</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-hit-width</code></td>

          <td><code>42px</code></td>

        <td><p>Width of the area that will select the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-hit-height</code></td>

          <td><code>$range-ios-slider-height</code></td>

        <td><p>Height of the area that will select the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-bar-height</code></td>

          <td><code>1px</code></td>

        <td><p>Height of the range bar</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-bar-background-color</code></td>

          <td><code>#bdbdbd</code></td>

        <td><p>Background of the range bar</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-bar-active-background-color</code></td>

          <td><code>color($colors-ios, primary)</code></td>

        <td><p>Background of the active range bar</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-knob-width</code></td>

          <td><code>28px</code></td>

        <td><p>Width of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-knob-height</code></td>

          <td><code>$range-ios-knob-width</code></td>

        <td><p>Height of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-knob-box-shadow</code></td>

          <td><code>0 3px 1px rgba(0, 0, 0, .1), 0 4px 8px rgba(0, 0, 0, .13), 0 0 0 1px rgba(0, 0, 0, .02)</code></td>

        <td><p>Box shadow of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-knob-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-knob-background-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Background of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-tick-width</code></td>

          <td><code>$range-ios-bar-height</code></td>

        <td><p>Width of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-tick-height</code></td>

          <td><code>8px</code></td>

        <td><p>Height of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-tick-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-tick-background-color</code></td>

          <td><code>$range-ios-bar-background-color</code></td>

        <td><p>Background of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-tick-active-background-color</code></td>

          <td><code>$range-ios-bar-active-background-color</code></td>

        <td><p>Background of the active range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-pin-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-pin-color</code></td>

          <td><code>$text-ios-color</code></td>

        <td><p>Color of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-pin-font-size</code></td>

          <td><code>12px</code></td>

        <td><p>Font size of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-ios-pin-padding</code></td>

          <td><code>8px</code></td>

        <td><p>Padding of the range pin</p>
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
        <td><code>$range-md-padding-vertical</code></td>

          <td><code>8px</code></td>

        <td><p>Padding top/bottom of the range</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-padding-horizontal</code></td>

          <td><code>8px</code></td>

        <td><p>Padding left/right of the range</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-slider-height</code></td>

          <td><code>42px</code></td>

        <td><p>Height of the range slider</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-hit-width</code></td>

          <td><code>42px</code></td>

        <td><p>Width of the area that will select the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-hit-height</code></td>

          <td><code>$range-md-slider-height</code></td>

        <td><p>Height of the area that will select the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-bar-height</code></td>

          <td><code>2px</code></td>

        <td><p>Height of the range bar</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-bar-background-color</code></td>

          <td><code>#bdbdbd</code></td>

        <td><p>Background of the range bar</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-bar-active-background-color</code></td>

          <td><code>color($colors-md, primary)</code></td>

        <td><p>Background of the active range bar</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-knob-width</code></td>

          <td><code>18px</code></td>

        <td><p>Width of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-knob-height</code></td>

          <td><code>$range-md-knob-width</code></td>

        <td><p>Height of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-knob-background-color</code></td>

          <td><code>$range-md-bar-active-background-color</code></td>

        <td><p>Background of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-knob-min-background-color</code></td>

          <td><code>$background-md-color</code></td>

        <td><p>Background of the range knob when the value is the minimum</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-knob-min-border</code></td>

          <td><code>2px solid $range-md-bar-background-color</code></td>

        <td><p>Border of the range knob when the value is the minimum</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-tick-width</code></td>

          <td><code>2px</code></td>

        <td><p>Width of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-tick-height</code></td>

          <td><code>$range-md-tick-width</code></td>

        <td><p>Height of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-tick-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-tick-background-color</code></td>

          <td><code>#000</code></td>

        <td><p>Background of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-tick-active-background-color</code></td>

          <td><code>$range-md-tick-background-color</code></td>

        <td><p>Background of the active range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-pin-background-color</code></td>

          <td><code>$range-md-bar-active-background-color</code></td>

        <td><p>Background of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-pin-color</code></td>

          <td><code>color-contrast($colors-md, $range-md-bar-active-background-color)</code></td>

        <td><p>Color of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-pin-font-size</code></td>

          <td><code>12px</code></td>

        <td><p>Font size of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-pin-padding-vertical</code></td>

          <td><code>8px</code></td>

        <td><p>Padding top/bottom of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-pin-padding-horizontal</code></td>

          <td><code>0</code></td>

        <td><p>Padding left/right of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-md-pin-min-background-color</code></td>

          <td><code>$range-md-bar-background-color</code></td>

        <td><p>Background of the range pin when the value is the minimum</p>
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
        <td><code>$range-wp-padding-vertical</code></td>

          <td><code>8px</code></td>

        <td><p>Padding top/bottom of the range</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-padding-horizontal</code></td>

          <td><code>8px</code></td>

        <td><p>Padding left/right of the range</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-slider-height</code></td>

          <td><code>42px</code></td>

        <td><p>Height of the range slider</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-hit-width</code></td>

          <td><code>42px</code></td>

        <td><p>Width of the area that will select the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-hit-height</code></td>

          <td><code>$range-wp-slider-height</code></td>

        <td><p>Height of the area that will select the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-bar-height</code></td>

          <td><code>2px</code></td>

        <td><p>Height of the range bar</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-bar-background-color</code></td>

          <td><code>#bdbdbd</code></td>

        <td><p>Background of the range bar</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-bar-active-background-color</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Background of the active range bar</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-knob-width</code></td>

          <td><code>8px</code></td>

        <td><p>Width of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-knob-height</code></td>

          <td><code>$range-wp-knob-width * 3</code></td>

        <td><p>Height of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-knob-background-color</code></td>

          <td><code>$range-wp-bar-active-background-color</code></td>

        <td><p>Background of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-knob-border-radius</code></td>

          <td><code>$range-wp-knob-width / 2</code></td>

        <td><p>Border radius of the range knob</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-tick-width</code></td>

          <td><code>$range-wp-bar-height</code></td>

        <td><p>Width of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-tick-height</code></td>

          <td><code>$range-wp-tick-width * 3</code></td>

        <td><p>Height of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-tick-border-radius</code></td>

          <td><code>$range-wp-knob-width / 2</code></td>

        <td><p>Border radius of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-tick-background-color</code></td>

          <td><code>$range-wp-bar-background-color</code></td>

        <td><p>Background of the range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-tick-active-background-color</code></td>

          <td><code>$range-wp-bar-active-background-color</code></td>

        <td><p>Background of the active range tick</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-pin-background-color</code></td>

          <td><code>$range-wp-bar-active-background-color</code></td>

        <td><p>Background of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-pin-color</code></td>

          <td><code>color-contrast($colors-wp, $range-wp-bar-active-background-color)</code></td>

        <td><p>Color of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-pin-font-size</code></td>

          <td><code>12px</code></td>

        <td><p>Font size of the range pin</p>
</td>
      </tr>

      <tr>
        <td><code>$range-wp-pin-padding</code></td>

          <td><code>8px</code></td>

        <td><p>Padding of the range pin</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

