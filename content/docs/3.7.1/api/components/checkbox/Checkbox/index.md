---
layout: "fluid/docs_base"
version: "3.7.1"
versionHref: "/docs/3.7.1"
path: ""
category: api
id: "checkbox"
title: "Checkbox"
header_sub_title: "Ionic API Documentation"
doc: "Checkbox"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/checkbox/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="checkbox" href="#checkbox"></a>

Checkbox
<h3><code>ion-checkbox</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/checkbox/checkbox.ts#L7">
Improve this doc
</a>






<p>The Checkbox is a simple component styled based on the mode. It can be
placed in an <code>ion-item</code> or used as a stand-alone checkbox.</p>
<p>See the <a href="https://angular.io/docs/ts/latest/guide/forms.html">Angular Docs</a>
for more info on forms and inputs.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

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
      <td>checked</td>
      <td><code>boolean</code></td>
      <td><p> If true, the element is selected.</p>
</td>
    </tr>

  </tbody>
</table><h2><a class="anchor" name="advanced" href="#advanced">Advanced</a></h2>
<pre><code class="lang-html">&lt;!-- Call function when state changes --&gt;
 &lt;ion-list&gt;

   &lt;ion-item&gt;
     &lt;ion-label&gt;Cucumber&lt;/ion-label&gt;
     &lt;ion-checkbox [(ngModel)]=&quot;cucumber&quot; (ionChange)=&quot;updateCucumber()&quot;&gt;&lt;/ion-checkbox&gt;
   &lt;/ion-item&gt;

 &lt;/ion-list&gt;
</code></pre>
<pre><code class="lang-ts">@Component({
  templateUrl: &#39;main.html&#39;
})
class SaladPage {
  cucumber: boolean;

  updateCucumber() {
    console.log(&#39;Cucumbers new state:&#39; + this.cucumber);
  }
}
</code></pre>



  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables">Sass Variables</a></h2>
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
        <td><code>$checkbox-ios-item-start-margin-top</code></td>

          <td><code>$item-ios-padding-media-top</code></td>

        <td><p>Margin top of the left checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-ios-item-start-margin-end</code></td>

          <td><code>$item-ios-padding-end</code></td>

        <td><p>Margin end of the left checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-ios-item-start-margin-bottom</code></td>

          <td><code>$item-ios-padding-media-bottom</code></td>

        <td><p>Margin bottom of the left checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-ios-item-start-margin-start</code></td>

          <td><code>2px</code></td>

        <td><p>Margin start of the left checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-ios-item-end-margin-top</code></td>

          <td><code>10px</code></td>

        <td><p>Margin top of the right checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-ios-item-end-margin-end</code></td>

          <td><code>8px</code></td>

        <td><p>Margin end of the right checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-ios-item-end-margin-bottom</code></td>

          <td><code>9px</code></td>

        <td><p>Margin bottom of the right checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-ios-item-end-margin-start</code></td>

          <td><code>0</code></td>

        <td><p>Margin start of the right checkbox item</p>
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
        <td><code>$checkbox-md-item-start-margin-top</code></td>

          <td><code>$item-md-padding-media-top</code></td>

        <td><p>Margin top of the start checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-md-item-start-margin-end</code></td>

          <td><code>36px</code></td>

        <td><p>Margin end of the start checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-md-item-start-margin-bottom</code></td>

          <td><code>$item-md-padding-media-bottom</code></td>

        <td><p>Margin bottom of the start checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-md-item-start-margin-start</code></td>

          <td><code>4px</code></td>

        <td><p>Margin start of the start checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-md-item-end-margin-top</code></td>

          <td><code>11px</code></td>

        <td><p>Margin top of the end checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-md-item-end-margin-end</code></td>

          <td><code>10px</code></td>

        <td><p>Margin end of the end checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-md-item-end-margin-bottom</code></td>

          <td><code>10px</code></td>

        <td><p>Margin bottom of the end checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-md-item-end-margin-start</code></td>

          <td><code>0</code></td>

        <td><p>Margin start of the end checkbox item</p>
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
        <td><code>$checkbox-wp-item-start-margin-top</code></td>

          <td><code>$item-wp-padding-media-top</code></td>

        <td><p>Margin top of the start checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-wp-item-start-margin-end</code></td>

          <td><code>$item-wp-padding-end</code></td>

        <td><p>Margin end of the start checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-wp-item-start-margin-bottom</code></td>

          <td><code>$item-wp-padding-media-bottom</code></td>

        <td><p>Margin bottom of the start checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-wp-item-start-margin-start</code></td>

          <td><code>4px</code></td>

        <td><p>Margin start of the start checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-wp-item-end-margin-top</code></td>

          <td><code>11px</code></td>

        <td><p>Margin top of the end checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-wp-item-end-margin-end</code></td>

          <td><code>10px</code></td>

        <td><p>Margin end of the end checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-wp-item-end-margin-bottom</code></td>

          <td><code>10px</code></td>

        <td><p>Margin bottom of the end checkbox item</p>
</td>
      </tr>

      <tr>
        <td><code>$checkbox-wp-item-end-margin-start</code></td>

          <td><code>0</code></td>

        <td><p>Margin start of the end checkbox item</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related">Related</a></h2>

<a href="/docs/components#checkbox">Checkbox Component Docs</a><!-- end content block -->


<!-- end body block -->

