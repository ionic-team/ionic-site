---
layout: "fluid/docs_base"
version: "3.7.0"
versionHref: "/docs/3.7.0"
path: ""
category: api
id: "splitpane"
title: "SplitPane"
header_sub_title: "Ionic API Documentation"
doc: "SplitPane"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="split-pane" href="#split-pane"></a>

SplitPane
<h3><code>ion-split-pane</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/split-pane/split-pane.ts#L22">
Improve this doc
</a>






<p>SplitPane is a component that makes it possible to create multi-view layout.
Similar to iPad apps, SplitPane allows UI elements, like Menus, to be
displayed as the viewport increases.</p>
<p>If the devices screen size is below a certain size, the SplitPane will
collapse and the menu will become hidden again. This is especially useful when
creating an app that will be served over a browser or deployed through the app
store to phones and tablets.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<p>To use SplitPane, simply add the component around your root component.
In this example, we&#39;ll be using a sidemenu layout, similar to what is
provided from the sidemenu starter template.</p>
<pre><code class="lang-html">&lt;ion-split-pane&gt;
  &lt;!--  our side menu  --&gt;
  &lt;ion-menu [content]=&quot;content&quot;&gt;
    &lt;ion-header&gt;
      &lt;ion-toolbar&gt;
        &lt;ion-title&gt;Menu&lt;/ion-title&gt;
      &lt;/ion-toolbar&gt;
    &lt;/ion-header&gt;
  &lt;/ion-menu&gt;

  &lt;!-- the main content --&gt;
  &lt;ion-nav [root]=&quot;root&quot; main #content&gt;&lt;/ion-nav&gt;
&lt;/ion-split-pane&gt;
</code></pre>
<p> Here, SplitPane will look for the element with the <code>main</code> attribute and make
 that the central component on larger screens. The <code>main</code> component can be any
 Ionic component (<code>ion-nav</code> or <code>ion-tabs</code>) except <code>ion-menu</code>.</p>
<h3 id="setting-breakpoints">Setting breakpoints</h3>
<p> By default, SplitPane will expand when the screen is larger than 768px.
 If you want to customize this, use the <code>when</code> input. The <code>when</code> input can
 accept any valid media query, as it uses <code>matchMedia()</code> underneath.</p>
<pre><code>&lt;ion-split-pane when=&quot;(min-width: 475px)&quot;&gt;

  &lt;!--  our side menu  --&gt;
  &lt;ion-menu [content]=&quot;content&quot;&gt;
  ....
  &lt;/ion-menu&gt;

  &lt;!-- the main content --&gt;
  &lt;ion-nav [root]=&quot;root&quot; main #content&gt;&lt;/ion-nav&gt;
&lt;/ion-split-pane&gt;
</code></pre>
<p> SplitPane also provides some predefined media queries that can be used.</p>
<pre><code class="lang-html">&lt;!-- could be &quot;xs&quot;, &quot;sm&quot;, &quot;md&quot;, &quot;lg&quot;, or &quot;xl&quot; --&gt;
&lt;ion-split-pane when=&quot;lg&quot;&gt;
...
&lt;/ion-split-pane&gt;
</code></pre>
<table>
<thead>
<tr>
<th>Size</th>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>xs</code></td>
<td><code>(min-width: 0px)</code></td>
<td>Show the split-pane when the min-width is 0px (meaning, always)</td>
</tr>
<tr>
<td><code>sm</code></td>
<td><code>(min-width: 576px)</code></td>
<td>Show the split-pane when the min-width is 576px</td>
</tr>
<tr>
<td><code>md</code></td>
<td><code>(min-width: 768px)</code></td>
<td>Show the split-pane when the min-width is 768px (default break point)</td>
</tr>
<tr>
<td><code>lg</code></td>
<td><code>(min-width: 992px)</code></td>
<td>Show the split-pane when the min-width is 992px</td>
</tr>
<tr>
<td><code>xl</code></td>
<td><code>(min-width: 1200px)</code></td>
<td>Show the split-pane when the min-width is 1200px</td>
</tr>
</tbody>
</table>
<p> You can also pass in boolean values that will trigger SplitPane when the value
 or expression evaluates to true.</p>
<pre><code class="lang-html">&lt;ion-split-pane [when]=&quot;isLarge&quot;&gt;
...
&lt;/ion-split-pane&gt;
</code></pre>
<pre><code class="lang-ts">class MyClass {
  public isLarge = false;
  constructor(){}
}
</code></pre>
<p> Or</p>
<pre><code class="lang-html">&lt;ion-split-pane [when]=&quot;shouldShow()&quot;&gt;
...
&lt;/ion-split-pane&gt;
</code></pre>
<pre><code class="lang-ts">class MyClass {
  constructor(){}
  shouldShow(){
    if(conditionA){
      return true
    } else {
      return false
    }
  }
}
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
      <td>enabled</td>
      <td><code>boolean</code></td>
      <td><p> If <code>false</code>, the split-pane is disabled, ie. the side pane will
never be displayed. Default <code>true</code>.</p>
</td>
    </tr>

    <tr>
      <td>when</td>
      <td><code>string | boolean</code></td>
      <td><p> When the split-pane should be shown.
Can be a CSS media query expression, or a shortcut expression.
Can also be a boolean expression.</p>
</td>
    </tr>

  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events">Output Events</a></h2>
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
      <td><p> Expression to be called when the split-pane visibility has changed</p>
</td>
    </tr>

  </tbody>
</table>


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
        <td><code>$split-pane-ios-side-min-width</code></td>

          <td><code>$split-pane-side-min-width</code></td>

        <td><p>Minimum width of the split-pane&#39;s side pane</p>
</td>
      </tr>

      <tr>
        <td><code>$split-pane-ios-side-max-width</code></td>

          <td><code>$split-pane-side-max-width</code></td>

        <td><p>Maximum width of the split-pane&#39;s side pane</p>
</td>
      </tr>

      <tr>
        <td><code>$split-pane-ios-border</code></td>

          <td><code>$hairlines-width solid $list-ios-border-color</code></td>

        <td><p>Border style of the side pane</p>
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
        <td><code>$split-pane-md-side-min-width</code></td>

          <td><code>$split-pane-side-min-width</code></td>

        <td><p>Minimum width of the split-pane&#39;s side pane</p>
</td>
      </tr>

      <tr>
        <td><code>$split-pane-md-side-max-width</code></td>

          <td><code>$split-pane-side-max-width</code></td>

        <td><p>Maximum width of the split-pane&#39;s side pane</p>
</td>
      </tr>

      <tr>
        <td><code>$split-pane-md-border</code></td>

          <td><code>1px solid $list-md-border-color</code></td>

        <td><p>Border style of the side pane</p>
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
        <td><code>$split-pane-wp-side-min-width</code></td>

          <td><code>$split-pane-side-min-width</code></td>

        <td><p>Minimum width of the split-pane&#39;s side pane</p>
</td>
      </tr>

      <tr>
        <td><code>$split-pane-wp-side-max-width</code></td>

          <td><code>$split-pane-side-max-width</code></td>

        <td><p>Maximum width of the split-pane&#39;s side pane</p>
</td>
      </tr>

      <tr>
        <td><code>$split-pane-wp-border</code></td>

          <td><code>1px solid $list-wp-border-color</code></td>

        <td><p>Border style of the side pane</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

