---
layout: "fluid/docs_base"
version: "nightly"
versionHref: "/docs/nightly"
path: ""
category: api
id: "input"
title: "Input"
header_sub_title: "Ionic API Documentation"
doc: "Input"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/input/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="input" href="#input"></a>

Input
<h3><code>ion-input,ion-textarea</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/input/input.ts#L26">
Improve this doc
</a>






<p><code>ion-input</code> is meant for text type inputs only, such as <code>text</code>,
<code>password</code>, <code>email</code>, <code>number</code>, <code>search</code>, <code>tel</code>, and <code>url</code>. Ionic
still uses an actual <code>&lt;input type=&quot;text&quot;&gt;</code> HTML element within the
component, however, with Ionic wrapping the native HTML input
element it&#39;s better able to handle the user experience and
interactivity.</p>
<p>Similarly, <code>&lt;ion-textarea&gt;</code> should be used in place of <code>&lt;textarea&gt;</code>.</p>
<p>An <code>ion-input</code> is <strong>not</strong> used for non-text type inputs, such as a
<code>checkbox</code>, <code>radio</code>, <code>toggle</code>, <code>range</code>, <code>select</code>, etc.</p>
<p>Along with the blur/focus events, <code>input</code> support all standard text input
events like <code>keyup</code>, <code>keydown</code>, <code>keypress</code>, <code>input</code>,etc. Any standard event
can be attached and will function as expected.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-html">&lt;ion-list&gt;
  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot;&gt;Inline Label&lt;/ion-label&gt;
    &lt;ion-input placeholder=&quot;Text Input&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot; fixed&gt;Fixed Label&lt;/ion-label&gt;
    &lt;ion-input type=&quot;tel&quot; placeholder=&quot;Tel Input&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-input type=&quot;number&quot; placeholder=&quot;Number Input with no label&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot; stacked&gt;Stacked Label&lt;/ion-label&gt;
    &lt;ion-input type=&quot;email&quot; placeholder=&quot;Email Input&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot; stacked&gt;Stacked Label&lt;/ion-label&gt;
    &lt;ion-input type=&quot;password&quot; placeholder=&quot;Password Input&quot;&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label color=&quot;primary&quot; floating&gt;Floating Label&lt;/ion-label&gt;
    &lt;ion-input&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-input placeholder=&quot;Clear Input&quot; clearInput&gt;&lt;/ion-input&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-textarea placeholder=&quot;Enter a description&quot;&gt;&lt;/ion-textarea&gt;
  &lt;/ion-item&gt;
&lt;/ion-list&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="ngAfterContentInit"></div>

<h3>
<a class="anchor" name="ngAfterContentInit" href="#ngAfterContentInit">
<code>ngAfterContentInit()</code>


</a>
</h3>











<div id="ngControl"></div>

<h3>
<a class="anchor" name="ngControl" href="#ngControl">
<code>ngControl</code>


</a>
</h3>










<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties">Input Properties</a></h2>
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
      <td>autocomplete</td>
      <td><code>string</code></td>
      <td><p> Set the input&#39;s autocomplete property. Values: <code>&quot;on&quot;</code>, <code>&quot;off&quot;</code>. Default <code>&quot;off&quot;</code>.</p>
</td>
    </tr>

    <tr>
      <td>autocorrect</td>
      <td><code>string</code></td>
      <td><p> Set the input&#39;s autocorrect property. Values: <code>&quot;on&quot;</code>, <code>&quot;off&quot;</code>. Default <code>&quot;off&quot;</code>.</p>
</td>
    </tr>

    <tr>
      <td>clearInput</td>
      <td><code>boolean</code></td>
      <td><p> If true, a clear icon will appear in the input when there is a value. Clicking it clears the input.</p>
</td>
    </tr>

    <tr>
      <td>clearOnEdit</td>
      <td><code>boolean</code></td>
      <td><p> If true, the value will be cleared after focus upon edit.
Defaults to <code>true</code> when <code>type</code> is <code>&quot;password&quot;</code>, <code>false</code> for all other types.</p>
</td>
    </tr>

    <tr>
      <td>max</td>
      <td><code>any</code></td>
      <td><p> The maximum value, which must not be less than its minimum (min attribute) value.</p>
</td>
    </tr>

    <tr>
      <td>min</td>
      <td><code>any</code></td>
      <td><p> The minimum value, which must not be greater than its maximum (max attribute) value.</p>
</td>
    </tr>

    <tr>
      <td>placeholder</td>
      <td><code>string</code></td>
      <td><p> Instructional text that shows before the input has a value.</p>
</td>
    </tr>

    <tr>
      <td>readonly</td>
      <td><code>boolean</code></td>
      <td><p> If true, the user cannot modify the value.</p>
</td>
    </tr>

    <tr>
      <td>step</td>
      <td><code>any</code></td>
      <td><p> Works with the min and max attributes to limit the increments at which a value can be set.</p>
</td>
    </tr>

    <tr>
      <td>type</td>
      <td><code>string</code></td>
      <td><p> The type of control to display. The default type is text.
Possible values are: <code>&quot;text&quot;</code>, <code>&quot;password&quot;</code>, <code>&quot;email&quot;</code>, <code>&quot;number&quot;</code>, <code>&quot;search&quot;</code>, <code>&quot;tel&quot;</code>, or <code>&quot;url&quot;</code>.</p>
</td>
    </tr>

  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables">Sass Variables</a></h2>
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
        <td><code>$text-input-highlight-color-valid</code></td>

          <td><code>#32db64</code></td>

        <td><p>Color of the input highlight when valid</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-highlight-color-invalid</code></td>

          <td><code>#f53d3d</code></td>

        <td><p>Color of the input highlight when invalid</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-placeholder-color</code></td>

          <td><code>#999</code></td>

        <td><p>Color of the input placeholder</p>
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
        <td><code>$text-input-ios-background-color</code></td>

          <td><code>$list-ios-background-color</code></td>

        <td><p>Background color of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-margin-top</code></td>

          <td><code>$item-ios-padding-top</code></td>

        <td><p>Margin top of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-margin-end</code></td>

          <td><code>$text-input-ios-margin-right</code></td>

        <td><p>Margin end of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-margin-bottom</code></td>

          <td><code>$item-ios-padding-bottom</code></td>

        <td><p>Margin bottom of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-margin-start</code></td>

          <td><code>$text-input-ios-margin-left</code></td>

        <td><p>Margin start of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-input-clear-icon-width</code></td>

          <td><code>30px</code></td>

        <td><p>Width of the icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-input-clear-icon-color</code></td>

          <td><code>rgba(0, 0, 0, .5)</code></td>

        <td><p>Color of the icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-input-clear-icon-svg</code></td>

          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 512 512&#39;&gt;&lt;path fill=&#39;&quot; + $text-input-ios-input-clear-icon-color + &quot;&#39; d=&#39;M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z&#39;/&gt;&lt;/svg&gt;&quot;</code></td>

        <td><p>Icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-input-clear-icon-size</code></td>

          <td><code>18px</code></td>

        <td><p>Size of the icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-show-focus-highlight</code></td>

          <td><code>false</code></td>

        <td><p>Show the focus highlight when the input has focus</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-show-valid-highlight</code></td>

          <td><code>$text-input-ios-show-focus-highlight</code></td>

        <td><p>Show the valid highlight when it is valid and has a value</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-show-invalid-highlight</code></td>

          <td><code>$text-input-ios-show-focus-highlight</code></td>

        <td><p>Show the invalid highlight when it is invalid and has value</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-highlight-color</code></td>

          <td><code>color($colors-ios, primary)</code></td>

        <td><p>Color of the input highlight</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-highlight-color-valid</code></td>

          <td><code>$text-input-highlight-color-valid</code></td>

        <td><p>Color of the input highlight when valid</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-ios-highlight-color-invalid</code></td>

          <td><code>$text-input-highlight-color-invalid</code></td>

        <td><p>Color of the input highlight when invalid</p>
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
        <td><code>$text-input-md-background-color</code></td>

          <td><code>$list-md-background-color</code></td>

        <td><p>Background color of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-margin-top</code></td>

          <td><code>$item-md-padding-top</code></td>

        <td><p>Margin top of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-margin-end</code></td>

          <td><code>$text-input-md-margin-right</code></td>

        <td><p>Margin end of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-margin-bottom</code></td>

          <td><code>$item-md-padding-bottom</code></td>

        <td><p>Margin bottom of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-margin-start</code></td>

          <td><code>$text-input-md-margin-left</code></td>

        <td><p>Margin start of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-input-clear-icon-width</code></td>

          <td><code>30px</code></td>

        <td><p>Width of the icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-input-clear-icon-color</code></td>

          <td><code>#5b5b5b</code></td>

        <td><p>Color of the icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-input-clear-icon-svg</code></td>

          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 512 512&#39;&gt;&lt;polygon fill=&#39;&quot; + $text-input-md-input-clear-icon-color + &quot;&#39; points=&#39;405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 375.202,405 405,375.202 285.798,256&#39;/&gt;&lt;/svg&gt;&quot;</code></td>

        <td><p>Icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-input-clear-icon-size</code></td>

          <td><code>22px</code></td>

        <td><p>Size of the icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-show-focus-highlight</code></td>

          <td><code>true</code></td>

        <td><p>Show the focus highlight when the input has focus</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-show-valid-highlight</code></td>

          <td><code>$text-input-md-show-focus-highlight</code></td>

        <td><p>Show the valid highlight when it is valid and has a value</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-show-invalid-highlight</code></td>

          <td><code>$text-input-md-show-focus-highlight</code></td>

        <td><p>Show the invalid highlight when it is invalid and has value</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-highlight-color</code></td>

          <td><code>color($colors-md, primary)</code></td>

        <td><p>Color of the input highlight</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-highlight-color-valid</code></td>

          <td><code>$text-input-highlight-color-valid</code></td>

        <td><p>Color of the input highlight when valid</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-md-highlight-color-invalid</code></td>

          <td><code>$text-input-highlight-color-invalid</code></td>

        <td><p>Color of the input highlight when invalid</p>
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
        <td><code>$text-input-wp-background-color</code></td>

          <td><code>$list-wp-background-color</code></td>

        <td><p>Background color of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-border-color</code></td>

          <td><code>$input-wp-border-color</code></td>

        <td><p>Border color of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-margin-top</code></td>

          <td><code>$item-wp-padding-top</code></td>

        <td><p>Margin top of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-margin-end</code></td>

          <td><code>$text-input-wp-margin-right</code></td>

        <td><p>Margin end of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-margin-bottom</code></td>

          <td><code>$item-wp-padding-bottom</code></td>

        <td><p>Margin bottom of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-margin-start</code></td>

          <td><code>$text-input-wp-margin-left</code></td>

        <td><p>Margin start of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-padding-vertical</code></td>

          <td><code>0</code></td>

        <td><p>Vertical padding of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-padding-horizontal</code></td>

          <td><code>8px</code></td>

        <td><p>Horizontal padding of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-line-height</code></td>

          <td><code>3rem</code></td>

        <td><p>Line height of the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-input-clear-icon-width</code></td>

          <td><code>30px</code></td>

        <td><p>Width of the icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-input-clear-icon-color</code></td>

          <td><code>$input-wp-border-color</code></td>

        <td><p>Color of the icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-input-clear-icon-svg</code></td>

          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 512 512&#39;&gt;&lt;polygon fill=&#39;&quot; + $text-input-wp-input-clear-icon-color + &quot;&#39; points=&#39;405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 375.202,405 405,375.202 285.798,256&#39;/&gt;&lt;/svg&gt;&quot;</code></td>

        <td><p>Icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-input-clear-icon-size</code></td>

          <td><code>22px</code></td>

        <td><p>Size of the icon used to clear the input</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-show-focus-highlight</code></td>

          <td><code>true</code></td>

        <td><p>Show the focus highlight when the input has focus</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-show-valid-highlight</code></td>

          <td><code>$text-input-wp-show-focus-highlight</code></td>

        <td><p>Show the valid highlight when it is valid and has a value</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-show-invalid-highlight</code></td>

          <td><code>$text-input-wp-show-focus-highlight</code></td>

        <td><p>Show the invalid highlight when it is invalid and has value</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-highlight-color</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Color of the input highlight</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-highlight-color-valid</code></td>

          <td><code>$text-input-highlight-color-valid</code></td>

        <td><p>Color of the input highlight when valid</p>
</td>
      </tr>

      <tr>
        <td><code>$text-input-wp-highlight-color-invalid</code></td>

          <td><code>$text-input-highlight-color-invalid</code></td>

        <td><p>Color of the input highlight when invalid</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

