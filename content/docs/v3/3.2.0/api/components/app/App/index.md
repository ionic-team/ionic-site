---
layout: "fluid/docs_base"
version: "3.2.0"
versionHref: "/docs/v3/3.2.0"
path: ""
category: api
id: "app"
title: "App"
header_sub_title: "Ionic API Documentation"
doc: "App"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="app" href="#app"></a>

App





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/app/app.ts#L15">
Improve this doc
</a>






<p>App is a utility class used in Ionic to get information about various aspects of an app</p>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="getActiveNav"></div>

<h3>
<a class="anchor" name="getActiveNav" href="#getActiveNav"></a>
<code>getActiveNav()</code>


</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>NavController</code> <p>Returns the active NavController. Using this method is preferred when we need access to the top-level navigation controller while on the outside views and handlers like <code>registerBackButtonAction()</code></p>


</div>




<div id="getRootNav"></div>

<h3>
<a class="anchor" name="getRootNav" href="#getRootNav"></a>
<code>getRootNav()</code>


</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>NavController</code> <p>Returns the root NavController</p>


</div>




<div id="isScrolling"></div>

<h3>
<a class="anchor" name="isScrolling" href="#isScrolling"></a>
<code>isScrolling()</code>


</h3>

Boolean if the app is actively scrolling or not.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>boolean</code> <p>returns true or false</p>


</div>




<div id="setTitle"></div>

<h3>
<a class="anchor" name="setTitle" href="#setTitle"></a>
<code>setTitle(val)</code>


</h3>

Sets the document title.


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>
        val


      </td>
      <td>

  <code>string</code>
      </td>
      <td>
        <p>Value to set the document title to.</p>


      </td>
    </tr>

  </tbody>
</table>








<div id="viewDidEnter"></div>

<h3>
<a class="anchor" name="viewDidEnter" href="#viewDidEnter"></a>
<code>viewDidEnter</code>


</h3>

Observable that emits after any view is entered in the app.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewDidLeave"></div>

<h3>
<a class="anchor" name="viewDidLeave" href="#viewDidLeave"></a>
<code>viewDidLeave</code>


</h3>

Observable that emits after any view is exited in the app.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewDidLoad"></div>

<h3>
<a class="anchor" name="viewDidLoad" href="#viewDidLoad"></a>
<code>viewDidLoad</code>


</h3>

Observable that emits whenever a view loads in the app.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewWillEnter"></div>

<h3>
<a class="anchor" name="viewWillEnter" href="#viewWillEnter"></a>
<code>viewWillEnter</code>


</h3>

Observable that emits before any view is entered in the app.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewWillLeave"></div>

<h3>
<a class="anchor" name="viewWillLeave" href="#viewWillLeave"></a>
<code>viewWillLeave</code>


</h3>

Observable that emits before any view is exited in the app.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewWillUnload"></div>

<h3>
<a class="anchor" name="viewWillUnload" href="#viewWillUnload"></a>
<code>viewWillUnload</code>


</h3>

Observable that emits before any view unloads in the app.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Observable</code> <p>Returns an observable</p>


</div>





  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">

    <h3 ng-init="setSassPlatform('base')">All</h3>

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
        <td><code>$font-size-root</code></td>

          <td><code>62.5%</code></td>

        <td><p>Font size of the root html</p>
</td>
      </tr>

      <tr>
        <td><code>$headings-font-weight</code></td>

          <td><code>500</code></td>

        <td><p>Font weight of all headings</p>
</td>
      </tr>

      <tr>
        <td><code>$headings-line-height</code></td>

          <td><code>1.2</code></td>

        <td><p>Line height of all headings</p>
</td>
      </tr>

      <tr>
        <td><code>$h1-font-size</code></td>

          <td><code>2.6rem</code></td>

        <td><p>Font size of heading level 1</p>
</td>
      </tr>

      <tr>
        <td><code>$h2-font-size</code></td>

          <td><code>2.4rem</code></td>

        <td><p>Font size of heading level 2</p>
</td>
      </tr>

      <tr>
        <td><code>$h3-font-size</code></td>

          <td><code>2.2rem</code></td>

        <td><p>Font size of heading level 3</p>
</td>
      </tr>

      <tr>
        <td><code>$h4-font-size</code></td>

          <td><code>2rem</code></td>

        <td><p>Font size of heading level 4</p>
</td>
      </tr>

      <tr>
        <td><code>$h5-font-size</code></td>

          <td><code>1.8rem</code></td>

        <td><p>Font size of heading level 5</p>
</td>
      </tr>

      <tr>
        <td><code>$h6-font-size</code></td>

          <td><code>1.6rem</code></td>

        <td><p>Font size of heading level 6</p>
</td>
      </tr>

      <tr>
        <td><code>$include-responsive-utilities</code></td>

          <td><code>true</code></td>

        <td><p>Whether to include all of the responsive utility attributes</p>
</td>
      </tr>

      <tr>
        <td><code>$include-text-alignment-utilities</code></td>

          <td><code>$include-responsive-utilities</code></td>

        <td><p>Whether to include all of the responsive text alignment attributes</p>
</td>
      </tr>

      <tr>
        <td><code>$include-text-transform-utilities</code></td>

          <td><code>$include-responsive-utilities</code></td>

        <td><p>Whether to include all of the responsive text transform attributes</p>
</td>
      </tr>

      <tr>
        <td><code>$include-float-element-utilities</code></td>

          <td><code>$include-responsive-utilities</code></td>

        <td><p>Whether to include all of the responsive float attributes</p>
</td>
      </tr>

      <tr>
        <td><code>$screen-breakpoints</code></td>

          <td><code>(&#10;  xs: 0,&#10;  sm: 576px,&#10;  md: 768px,&#10;  lg: 992px,&#10;  xl: 1200px&#10;)</code></td>

        <td><p>The minimum dimensions at which your layout will change,
adapting to different screen sizes, for use in media queries</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

