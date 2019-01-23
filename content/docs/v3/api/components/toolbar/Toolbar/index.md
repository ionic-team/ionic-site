---
layout: "fluid/docs_base"
version: "3.9.2"
versionHref: "/docs"
path: ""
category: api
id: "toolbar"
title: "Toolbar"
header_sub_title: "Ionic API Documentation"
doc: "Toolbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/toolbar/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="toolbar" href="#toolbar"></a>

Toolbar
<h3><code>ion-toolbar</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/toolbar/toolbar.ts#L3">
Improve this doc
</a>






<p>A Toolbar is a generic bar that is positioned above or below content.
Unlike a <a href="../Navbar/">Navbar</a>, a toolbar can be used as a subheader.
When toolbars are placed within an <code>&lt;ion-header&gt;</code> or <code>&lt;ion-footer&gt;</code>,
the toolbars stay fixed in their respective location. When placed within
<code>&lt;ion-content&gt;</code>, toolbars will scroll with the content.</p>
<h3><a class="anchor" name="buttons-in-a-toolbar" href="#buttons-in-a-toolbar">Buttons in a Toolbar</a></h3>

<p>Buttons placed in a toolbar should be placed inside of the <code>&lt;ion-buttons&gt;</code>
element. An exception to this is a <a href="../../menu/MenuToggle">menuToggle</a> button.
It should not be placed inside of the <code>&lt;ion-buttons&gt;</code> element. Both the
<code>&lt;ion-buttons&gt;</code> element and the <code>menuToggle</code> can be positioned inside of the
toolbar using different properties. The below chart has a description of each
property.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>start</code></td>
<td>Positions element to the left of the content in <code>ios</code> mode, and directly to the right in <code>md</code> and <code>wp</code> mode.</td>
</tr>
<tr>
<td><code>end</code></td>
<td>Positions element to the right of the content in <code>ios</code> mode, and to the far right in <code>md</code> and <code>wp</code> mode.</td>
</tr>
<tr>
<td><code>left</code></td>
<td>Positions element to the left of all other elements.</td>
</tr>
<tr>
<td><code>right</code></td>
<td>Positions element to the right of all other elements.</td>
</tr>
</tbody>
</table>
<h3><a class="anchor" name="header-footer-box-shadow-and-border" href="#header-footer-box-shadow-and-border">Header / Footer Box Shadow and Border</a></h3>

<p>In <code>md</code> mode, the <code>&lt;ion-header&gt;</code> will receive a box-shadow on the bottom, and the
<code>&lt;ion-footer&gt;</code> will receive a box-shadow on the top.  In <code>ios</code> mode, the <code>&lt;ion-header&gt;</code>
will receive a border on the bottom, and the <code>&lt;ion-footer&gt;</code> will receive a border on the
top. Both the <code>md</code> box-shadow and the <code>ios</code> border can be removed by adding the <code>no-border</code>
attribute to the element.</p>
<pre><code class="lang-html">&lt;ion-header no-border&gt;
  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;Header&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;
&lt;/ion-header&gt;

&lt;ion-content&gt;
&lt;/ion-content&gt;

&lt;ion-footer no-border&gt;
  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;Footer&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;
&lt;/ion-footer&gt;
</code></pre>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-html">&lt;ion-header no-border&gt;

  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;My Toolbar Title&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;

  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;I&#39;m a subheader&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;

&lt;ion-header&gt;


&lt;ion-content&gt;

  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;Scrolls with the content&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;

&lt;/ion-content&gt;


&lt;ion-footer no-border&gt;

  &lt;ion-toolbar&gt;
    &lt;ion-title&gt;I&#39;m a footer&lt;/ion-title&gt;
  &lt;/ion-toolbar&gt;

&lt;/ion-footer&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->


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

<h2><a class="anchor" name="related" href="#related">Related</a></h2>

<a href="../Navbar/">Navbar API Docs</a><!-- end content block -->


<!-- end body block -->

