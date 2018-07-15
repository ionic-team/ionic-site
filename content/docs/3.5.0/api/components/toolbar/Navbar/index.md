---
layout: "fluid/docs_base"
version: "3.5.0"
versionHref: "/docs/3.5.0"
path: ""
category: api
id: "navbar"
title: "Navbar"
header_sub_title: "Ionic API Documentation"
doc: "Navbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/navbar/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="navbar" href="#navbar"></a>

Navbar
<h3><code>ion-navbar</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/toolbar/navbar.ts#L7">
Improve this doc
</a>






<p>Navbar acts as the navigational toolbar, which also comes with a back
button. A navbar can contain a <code>ion-title</code>, any number of buttons,
a segment, or a searchbar. Navbars must be placed within an
<code>&lt;ion-header&gt;</code> in order for them to be placed above the content.
It&#39;s important to note that navbar&#39;s are part of the dynamic navigation
stack. If you need a static toolbar, use ion-toolbar.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-header&gt;

  &lt;ion-navbar&gt;
    &lt;button ion-button icon-only menuToggle&gt;
      &lt;ion-icon name=&quot;menu&quot;&gt;&lt;/ion-icon&gt;
    &lt;/button&gt;

    &lt;ion-title&gt;
      Page Title
    &lt;/ion-title&gt;

    &lt;ion-buttons end&gt;
      &lt;button ion-button icon-only (click)=&quot;openModal()&quot;&gt;
        &lt;ion-icon name=&quot;options&quot;&gt;&lt;/ion-icon&gt;
      &lt;/button&gt;
    &lt;/ion-buttons&gt;
  &lt;/ion-navbar&gt;

&lt;/ion-header&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="backButtonClick"></div>

<h3>
<a class="anchor" name="backButtonClick" href="#backButtonClick"></a>
<code>backButtonClick()</code>


</h3>











<div id="setBackButtonText"></div>

<h3>
<a class="anchor" name="setBackButtonText" href="#setBackButtonText"></a>
<code>setBackButtonText()</code>


</h3>

Set the text of the Back Button in the Nav Bar. Defaults to "Back".









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
      <td>hideBackButton</td>
      <td><code>boolean</code></td>
      <td><p> If true, the back button will be hidden.</p>
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
        <td><code>$toolbar-wp-title-padding-top</code></td>

          <td><code>0</code></td>

        <td><p>Padding top of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-title-padding-end</code></td>

          <td><code>6px</code></td>

        <td><p>Padding end of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-title-padding-bottom</code></td>

          <td><code>$toolbar-wp-title-padding-top</code></td>

        <td><p>Padding bottom of the toolbar title</p>
</td>
      </tr>

      <tr>
        <td><code>$toolbar-wp-title-padding-start</code></td>

          <td><code>$toolbar-wp-title-padding-end</code></td>

        <td><p>Padding start of the toolbar title</p>
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



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href="../../toolbar/Toolbar/">Toolbar API Docs</a><!-- end content block -->


<!-- end body block -->

