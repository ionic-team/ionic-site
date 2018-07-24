---
layout: "fluid/docs_base"
version: "3.3.0"
versionHref: "/docs/3.3.0"
path: ""
category: api
id: "toggle"
title: "Toggle"
header_sub_title: "Ionic API Documentation"
doc: "Toggle"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/toggle/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="toggle" href="#toggle"></a>

Toggle
<h3><code>ion-toggle</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/toggle/toggle.ts#L13">
Improve this doc
</a>






<p>A toggle technically is the same thing as an HTML checkbox input,
except it looks different and is easier to use on a touch device.
Toggles can also have colors assigned to them, by adding any color
attribute.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular 2 Docs</a>
for more info on forms and inputs.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-list&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Pepperoni&lt;/ion-label&gt;
    &lt;ion-toggle [(ngModel)]=&quot;pepperoni&quot;&gt;&lt;/ion-toggle&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Sausage&lt;/ion-label&gt;
    &lt;ion-toggle [(ngModel)]=&quot;sausage&quot; disabled=&quot;true&quot;&gt;&lt;/ion-toggle&gt;
  &lt;/ion-item&gt;

  &lt;ion-item&gt;
    &lt;ion-label&gt;Mushrooms&lt;/ion-label&gt;
    &lt;ion-toggle [(ngModel)]=&quot;mushrooms&quot;&gt;&lt;/ion-toggle&gt;
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
        <td><code>$toggle-ios-width</code></td>

          <td><code>51px</code></td>

        <td><p>Width of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-height</code></td>

          <td><code>32px</code></td>

        <td><p>Height of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-border-radius</code></td>

          <td><code>$toggle-ios-height / 2</code></td>

        <td><p>Border radius of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-background-color-off</code></td>

          <td><code>$list-ios-background-color</code></td>

        <td><p>Background color of the unchecked toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-border-color-off</code></td>

          <td><code>grayscale(lighten($list-ios-border-color, 11%))</code></td>

        <td><p>Border color of the unchecked toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-background-color-on</code></td>

          <td><code>color($colors-ios, primary)</code></td>

        <td><p>Background color of the checked toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-handle-width</code></td>

          <td><code>$toggle-ios-height - ($toggle-ios-border-width * 2)</code></td>

        <td><p>Width of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-handle-height</code></td>

          <td><code>$toggle-ios-handle-width</code></td>

        <td><p>Height of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-handle-border-radius</code></td>

          <td><code>$toggle-ios-handle-height / 2</code></td>

        <td><p>Border radius of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-handle-box-shadow</code></td>

          <td><code>0 3px 12px rgba(0, 0, 0, .16), 0 3px 1px rgba(0, 0, 0, .1)</code></td>

        <td><p>Box shadow of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-handle-background-color</code></td>

          <td><code>$toggle-ios-background-color-off</code></td>

        <td><p>Background color of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-media-margin</code></td>

          <td><code>0</code></td>

        <td><p>Margin of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-transition-duration</code></td>

          <td><code>300ms</code></td>

        <td><p>Transition duration of the toggle icon</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-disabled-opacity</code></td>

          <td><code>.3</code></td>

        <td><p>Opacity of the disabled toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-item-start-padding-top</code></td>

          <td><code>6px</code></td>

        <td><p>Padding top of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-item-start-padding-end</code></td>

          <td><code>16px</code></td>

        <td><p>Padding end of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-item-start-padding-bottom</code></td>

          <td><code>5px</code></td>

        <td><p>Padding bottom of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-item-start-padding-start</code></td>

          <td><code>0</code></td>

        <td><p>Padding start of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-item-end-padding-top</code></td>

          <td><code>6px</code></td>

        <td><p>Padding top of the toggle positioned on the end in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-item-end-padding-end</code></td>

          <td><code>($item-ios-padding-end / 2)</code></td>

        <td><p>Padding end of the toggle positioned on the end in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-item-end-padding-bottom</code></td>

          <td><code>5px</code></td>

        <td><p>Padding bottom of the toggle positioned on the end in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-ios-item-end-padding-start</code></td>

          <td><code>$item-ios-padding-start</code></td>

        <td><p>Padding start of the toggle positioned on the end in an item</p>
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
        <td><code>$toggle-md-active-color</code></td>

          <td><code>color($colors-md, primary)</code></td>

        <td><p>Color of the active toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-track-width</code></td>

          <td><code>36px</code></td>

        <td><p>Width of the toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-track-height</code></td>

          <td><code>14px</code></td>

        <td><p>Height of the toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-track-background-color-off</code></td>

          <td><code>$list-md-border-color</code></td>

        <td><p>Background color of the toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-track-background-color-on</code></td>

          <td><code>lighten($toggle-md-active-color, 25%)</code></td>

        <td><p>Background color of the checked toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-handle-width</code></td>

          <td><code>20px</code></td>

        <td><p>Width of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-handle-height</code></td>

          <td><code>20px</code></td>

        <td><p>Height of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-handle-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-handle-box-shadow</code></td>

          <td><code>0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)</code></td>

        <td><p>Box shadow of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-handle-background-color-off</code></td>

          <td><code>$background-md-color</code></td>

        <td><p>Background color of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-handle-background-color-on</code></td>

          <td><code>$toggle-md-active-color</code></td>

        <td><p>Background color of the checked toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-media-margin-top</code></td>

          <td><code>0</code></td>

        <td><p>Margin top of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-media-margin-end</code></td>

          <td><code>$toggle-md-media-margin-top</code></td>

        <td><p>Margin end of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-media-margin-bottom</code></td>

          <td><code>$toggle-md-media-margin-top</code></td>

        <td><p>Margin bottom of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-media-margin-start</code></td>

          <td><code>$toggle-md-media-margin-end</code></td>

        <td><p>Margin start of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-transition-duration</code></td>

          <td><code>300ms</code></td>

        <td><p>Transition duration of the toggle icon</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-disabled-opacity</code></td>

          <td><code>.3</code></td>

        <td><p>Opacity of the disabled toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-padding-top</code></td>

          <td><code>12px</code></td>

        <td><p>Padding top of standalone toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-padding-end</code></td>

          <td><code>$toggle-md-padding-top</code></td>

        <td><p>Padding end of standalone toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-padding-bottom</code></td>

          <td><code>$toggle-md-padding-top</code></td>

        <td><p>Padding bottom of standalone toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-padding-start</code></td>

          <td><code>$toggle-md-padding-end</code></td>

        <td><p>Padding start of standalone toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-item-start-padding-top</code></td>

          <td><code>12px</code></td>

        <td><p>Padding top of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-item-start-padding-end</code></td>

          <td><code>18px</code></td>

        <td><p>Padding end of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-item-start-padding-bottom</code></td>

          <td><code>12px</code></td>

        <td><p>Padding bottom of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-item-start-padding-start</code></td>

          <td><code>2px</code></td>

        <td><p>Padding start the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-item-end-padding-top</code></td>

          <td><code>12px</code></td>

        <td><p>Padding top of the toggle positioned on the end in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-item-end-padding-end</code></td>

          <td><code>($item-md-padding-end / 2)</code></td>

        <td><p>Padding end of the toggle positioned on the end in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-item-end-padding-bottom</code></td>

          <td><code>12px</code></td>

        <td><p>Padding bottom of the toggle positioned on the end in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-md-item-end-padding-start</code></td>

          <td><code>$item-md-padding-start</code></td>

        <td><p>Padding start of the toggle positioned on the end in an item</p>
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
        <td><code>$toggle-wp-inactive-color</code></td>

          <td><code>#323232</code></td>

        <td><p>Color of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-active-color</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Color of the checked toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-track-width</code></td>

          <td><code>40px</code></td>

        <td><p>Width of the toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-track-height</code></td>

          <td><code>18px</code></td>

        <td><p>Height of the toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-track-background-color-off</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-track-background-color-on</code></td>

          <td><code>$toggle-wp-active-color</code></td>

        <td><p>Background color of the checked toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-track-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-track-border-color-off</code></td>

          <td><code>$toggle-wp-inactive-color</code></td>

        <td><p>Border color of the toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-track-border-color-on</code></td>

          <td><code>$toggle-wp-active-color</code></td>

        <td><p>Border color of the checked toggle track</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-handle-width</code></td>

          <td><code>10px</code></td>

        <td><p>Width of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-handle-height</code></td>

          <td><code>10px</code></td>

        <td><p>Height of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-handle-top</code></td>

          <td><code>2px</code></td>

        <td><p>Top of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-handle-left</code></td>

          <td><code>2px</code></td>

        <td><p>Left of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-handle-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-handle-background-color-off</code></td>

          <td><code>$toggle-wp-inactive-color</code></td>

        <td><p>Background color of the toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-handle-background-color-on</code></td>

          <td><code>color-contrast($colors-wp, $toggle-wp-active-color)</code></td>

        <td><p>Background color of the checked toggle handle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-media-margin</code></td>

          <td><code>0</code></td>

        <td><p>Margin of the toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-transition-duration</code></td>

          <td><code>300ms</code></td>

        <td><p>Transition duration of the toggle icon</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-disabled-opacity</code></td>

          <td><code>.3</code></td>

        <td><p>Opacity of the disabled toggle</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-item-start-padding-top</code></td>

          <td><code>12px</code></td>

        <td><p>Padding top of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-item-start-padding-end</code></td>

          <td><code>18px</code></td>

        <td><p>Padding end of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-item-start-padding-bottom</code></td>

          <td><code>12px</code></td>

        <td><p>Padding bottom of the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-item-start-padding-start</code></td>

          <td><code>2px</code></td>

        <td><p>Padding start the toggle positioned on the start in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-item-end-padding-top</code></td>

          <td><code>12px</code></td>

        <td><p>Padding top of the toggle positioned on the end in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-item-end-padding-end</code></td>

          <td><code>($item-wp-padding-end / 2)</code></td>

        <td><p>Padding end of the toggle positioned on the end in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-item-end-padding-bottom</code></td>

          <td><code>12px</code></td>

        <td><p>Padding bottom of the toggle positioned on the end in an item</p>
</td>
      </tr>

      <tr>
        <td><code>$toggle-wp-item-end-padding-start</code></td>

          <td><code>$item-wp-padding-start</code></td>

        <td><p>Padding start of the toggle positioned on the end in an item</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href="/docs/components#toggle">Toggle Component Docs</a><!-- end content block -->


<!-- end body block -->

