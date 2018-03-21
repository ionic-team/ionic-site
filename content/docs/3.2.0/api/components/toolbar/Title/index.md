---
layout: "fluid/docs_base"
version: "3.2.0"
versionHref: "/docs/3.2.0"
path: ""
category: api
id: "title"
title: "Title"
header_sub_title: "Ionic API Documentation"
doc: "Title"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/title/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="title" href="#title"></a>

Title
<h3><code>ion-title</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/toolbar/toolbar-title.ts#L5">
Improve this doc
</a>






<p><code>ion-title</code> is a component that sets the title of the <code>Toolbar</code> or <code>Navbar</code></p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-header&gt;

  &lt;ion-navbar&gt;
    &lt;ion-title&gt;Settings&lt;/ion-title&gt;
  &lt;/ion-navbar&gt;

&lt;/ion-header&gt;
</code></pre>
<p>Or to create a navbar with a toolbar as a subheader:</p>
<pre><code class="lang-html">&lt;ion-header&gt;

  &lt;ion-navbar&gt;
    &lt;ion-title&gt;Main Header&lt;/ion-title&gt;
  &lt;/ion-navbar&gt;

  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;Subheader&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;

&lt;/ion-header&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->


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
        <td><code>$toolbar-order-ios</code></td>

          <td><code>(&#10;  back-button: 0,&#10;  menu-toggle-start: 1,&#10;  buttons-left: 2,&#10;  buttons-start: 3,&#10;  content: 4,&#10;  buttons-end: 5,&#10;  buttons-right: 6,&#10;  menu-toggle-end: 7,&#10;)</code></td>

        <td><p>Order of the toolbar elements</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-ios-button-font-size</code></td>

          <td><code>1.7rem</code></td>

        <td><p>Font size of the toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-ios-title-font-size</code></td>

          <td><code>1.7rem</code></td>

        <td><p>Font size of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-ios-title-font-weight</code></td>

          <td><code>600</code></td>

        <td><p>Font weight of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-ios-title-text-align</code></td>

          <td><code>center</code></td>

        <td><p>Text alignment of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-ios-title-text-color</code></td>

          <td><code>color-contrast($colors-ios, $toolbar-ios-background)</code></td>

        <td><p>Text color of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-ios-button-color</code></td>

          <td><code>color-contrast($colors-ios, $toolbar-ios-background, ios)</code></td>

        <td><p>Text color of the toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-ios-button-border-radius</code></td>

          <td><code>4px</code></td>

        <td><p>Border radius of the toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-ios-button-strong-font-weight</code></td>

          <td><code>600</code></td>

        <td><p>Font weight of the strong toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$navbar-ios-height</code></td>

          <td><code>$toolbar-ios-height</code></td>

        <td><p>Height of the navigation bar</p>
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
        <td><code>$toolbar-order-md</code></td>

          <td><code>(&#10;  back-button: 0,&#10;  menu-toggle-start: 1,&#10;  buttons-left: 2,&#10;  content: 3,&#10;  buttons-start: 4,&#10;  buttons-end: 5,&#10;  buttons-right: 6,&#10;  menu-toggle-end: 7,&#10;)</code></td>

        <td><p>Order of the toolbar elements</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-md-title-font-size</code></td>

          <td><code>2rem</code></td>

        <td><p>Font size of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-md-title-text-color</code></td>

          <td><code>color-contrast($colors-md, $toolbar-md-background, md)</code></td>

        <td><p>Text color of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-md-button-font-size</code></td>

          <td><code>1.4rem</code></td>

        <td><p>Font size of the toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-md-button-color</code></td>

          <td><code>$toolbar-md-title-text-color</code></td>

        <td><p>Text color of the toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-md-button-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-md-button-strong-font-weight</code></td>

          <td><code>bold</code></td>

        <td><p>Font weight of the strong toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$navbar-md-height</code></td>

          <td><code>$toolbar-md-height</code></td>

        <td><p>Height of the navigation bar</p>
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
        <td><code>$toolbar-order-wp</code></td>

          <td><code>(&#10;  back-button: 0,&#10;  menu-toggle-start: 1,&#10;  buttons-left: 2,&#10;  content: 3,&#10;  buttons-start: 4,&#10;  buttons-end: 5,&#10;  buttons-right: 6,&#10;  menu-toggle-end: 7,&#10;)</code></td>

        <td><p>Order of the toolbar elements</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-title-padding</code></td>

          <td><code>0 6px</code></td>

        <td><p>Padding of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-title-font-size</code></td>

          <td><code>1.5rem</code></td>

        <td><p>Font size of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-title-font-weight</code></td>

          <td><code>bold</code></td>

        <td><p>Font weight of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-title-text-transform</code></td>

          <td><code>uppercase</code></td>

        <td><p>Text transform of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-title-text-color</code></td>

          <td><code>color-contrast($colors-wp, $toolbar-wp-background, wp)</code></td>

        <td><p>Text color of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-button-font-size</code></td>

          <td><code>1.4rem</code></td>

        <td><p>Font size of the toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-button-color</code></td>

          <td><code>color-contrast($colors-wp, $toolbar-wp-background, wp)</code></td>

        <td><p>Text color of the toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-button-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-button-strong-font-weight</code></td>

          <td><code>bold</code></td>

        <td><p>Font weight of the strong toolbar button</p>
</td>
      </tr>

      <tr>
        <td><code>$navbar-wp-height</code></td>

          <td><code>$toolbar-wp-height</code></td>

        <td><p>Height of the navigation bar</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

