---
layout: "fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v3/3.1.0"
path: ""
category: api
id: "col"
title: "Col"
header_sub_title: "Ionic API Documentation"
doc: "Col"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="col" href="#col"></a>

Col
<h3><code>ion-col, [ion-col]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/grid/col.ts#L0">
Improve this doc
</a>






<p>Columns are cellular components of the <a href="../Grid">grid</a> system and go inside of a <a href="../Row">row</a>.
They will expand to fill their row. All content within a grid should go inside of a column.</p>
<h2 id="column-attributes">Column attributes</h2>
<p>By default, columns will stretch to fill the entire height of the row.
There are several attributes that can be added to a column to customize this behavior.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>align-self-start</td>
<td>Adds <code>align-self: flex-start</code>. The column will be vertically aligned at the top.</td>
</tr>
<tr>
<td>align-self-center</td>
<td>Adds <code>align-self: center</code>. The column will be vertically aligned in the center.</td>
</tr>
<tr>
<td>align-self-end</td>
<td>Adds <code>align-self: flex-end</code>. The column will be vertically aligned at the bottom.</td>
</tr>
<tr>
<td>align-self-stretch</td>
<td>Adds <code>align-self: stretch</code>. The column will be stretched to take up the entire height of the row.</td>
</tr>
<tr>
<td>align-self-baseline</td>
<td>Adds <code>align-self: baseline</code>. The column will be vertically aligned at its baseline.</td>
</tr>
</tbody>
</table>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->


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
        <td><code>$grid-breakpoints</code></td>

          <td><code>(&#10;  xs: 0,&#10;  sm: 576px,&#10;  md: 768px,&#10;  lg: 992px,&#10;  xl: 1200px&#10;)</code></td>

        <td><p>The minimum dimensions at which your layout will change,
adapting to different screen sizes, for use in media queries</p>
</td>
      </tr>

      <tr>
        <td><code>$grid-max-widths</code></td>

          <td><code>(&#10;  sm: 540px,&#10;  md: 720px,&#10;  lg: 960px,&#10;  xl: 1140px&#10;)</code></td>

        <td><p>Maximum width of the grid for different screen sizes</p>
</td>
      </tr>

      <tr>
        <td><code>$grid-columns</code></td>

          <td><code>12</code></td>

        <td><p>Number of columns for the grid</p>
</td>
      </tr>

      <tr>
        <td><code>$grid-padding-width</code></td>

          <td><code>10px</code></td>

        <td><p>Total width of the padding for the grid</p>
</td>
      </tr>

      <tr>
        <td><code>$grid-padding-widths</code></td>

          <td><code>(&#10;  xs: $grid-padding-width,&#10;  sm: $grid-padding-width,&#10;  md: $grid-padding-width,&#10;  lg: $grid-padding-width,&#10;  xl: $grid-padding-width&#10;)</code></td>

        <td><p>Padding for the columns for different screen sizes</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

