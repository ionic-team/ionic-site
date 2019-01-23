---
layout: "fluid/docs_base"
version: "3.4.2"
versionHref: "/docs/v3/3.4.2"
path: ""
category: api
id: "spinner"
title: "Spinner"
header_sub_title: "Ionic API Documentation"
doc: "Spinner"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="spinner" href="#spinner"></a>

Spinner
<h3><code>ion-spinner</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/spinner/spinner.ts#L4">
Improve this doc
</a>






<p>The <code>ion-spinner</code> component provides a variety of animated SVG spinners.
Spinners enables you to give users feedback that the app is actively
processing/thinking/waiting/chillin’ out, or whatever you’d like it to indicate.
By default, the <code>ion-refresher</code> feature uses this spinner component while it&#39;s
the refresher is in the <code>refreshing</code> state.</p>
<p>Ionic offers a handful of spinners out of the box, and by default, it will use
the appropriate spinner for the platform on which it’s running.</p>
<table class="table spinner-table">
 <tr>
   <th>
     <code>ios</code>
   </th>
   <td>
     <ion-spinner name="ios"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>ios-small</code>
   </th>
   <td>
     <ion-spinner name="ios-small"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>bubbles</code>
   </th>
   <td>
     <ion-spinner name="bubbles"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>circles</code>
   </th>
   <td>
     <ion-spinner name="circles"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>crescent</code>
   </th>
   <td>
     <ion-spinner name="crescent"></ion-spinner>
   </td>
 </tr>
 <tr>
   <th>
     <code>dots</code>
   </th>
   <td>
     <ion-spinner name="dots"></ion-spinner>
   </td>
 </tr>
</table>



<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>The following code would use the default spinner for the platform it&#39;s
running from. If it&#39;s neither iOS or Android, it&#39;ll default to use <code>ios</code>.</p>
<pre><code class="lang-html">&lt;ion-spinner&gt;&lt;/ion-spinner&gt;
</code></pre>
<p>By setting the <code>name</code> property, you can specify which predefined spinner to
use, no matter what the platform is.</p>
<pre><code class="lang-html">&lt;ion-spinner name=&quot;bubbles&quot;&gt;&lt;/ion-spinner&gt;
</code></pre>
<h2 id="styling-svg-with-css">Styling SVG with CSS</h2>
<p>One cool thing about SVG is its ability to be styled with CSS! One thing to note
is that some of the CSS properties on an SVG element have different names. For
example, SVG uses the term <code>stroke</code> instead of <code>border</code>, and <code>fill</code> instead
of <code>background-color</code>.</p>
<pre><code class="lang-css">ion-spinner * {
  width: 28px;
  height: 28px;
  stroke: #444;
  fill: #222;
}
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
      <td>duration</td>
      <td><code>string</code></td>
      <td><p> How long it takes it to do one loop.</p>
</td>
    </tr>

    <tr>
      <td>name</td>
      <td><code>string</code></td>
      <td><p> SVG spinner name.</p>
</td>
    </tr>

    <tr>
      <td>paused</td>
      <td><code>boolean</code></td>
      <td><p> If true, pause the animation.</p>
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
        <td><code>$spinner-ios-ios-color</code></td>

          <td><code>#69717d</code></td>

        <td><p>Color of the ios spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-ios-bubbles-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the bubbles spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-ios-circles-color</code></td>

          <td><code>#69717d</code></td>

        <td><p>Color of the circles spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-ios-crescent-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the crescent spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-ios-dots-color</code></td>

          <td><code>#444</code></td>

        <td><p>Color of the dots spinner</p>
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
        <td><code>$spinner-md-ios-color</code></td>

          <td><code>#69717d</code></td>

        <td><p>Color of the ios spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-md-bubbles-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the bubbles spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-md-circles-color</code></td>

          <td><code>#69717d</code></td>

        <td><p>Color of the circles spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-md-crescent-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the crescent spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-md-dots-color</code></td>

          <td><code>#444</code></td>

        <td><p>Color of the dots spinner</p>
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
        <td><code>$spinner-wp-ios-color</code></td>

          <td><code>#69717d</code></td>

        <td><p>Color of the ios spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-wp-bubbles-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the bubbles spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-wp-circles-color</code></td>

          <td><code>#69717d</code></td>

        <td><p>Color of the circles spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-wp-crescent-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the crescent spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$spinner-wp-dots-color</code></td>

          <td><code>#444</code></td>

        <td><p>Color of the dots spinner</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

