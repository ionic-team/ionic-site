---
layout: "fluid/docs_base"
version: "3.5.3"
versionHref: "/docs/3.5.3"
path: ""
category: api
id: "row"
title: "Row"
header_sub_title: "Ionic API Documentation"
doc: "Row"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="row" href="#row"></a>

Row
<h3><code>ion-row, [ion-row]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/grid/row.ts#L0">
Improve this doc
</a>






<p>Rows are horizontal components of the <a href="../Grid">grid</a> system and contain varying numbers of
<a href="../Col">columns</a>. They ensure the columns are positioned properly.</p>
<h2 id="row-attributes">Row attributes</h2>
<p>By default, columns will stretch to fill the entire height of the row and wrap when necessary.
There are several attributes that can be added to a row to customize this behavior.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nowrap</td>
<td>Adds <code>flex-wrap: nowrap</code>. Forces the columns to a single row.</td>
</tr>
<tr>
<td>wrap-reverse</td>
<td>Adds <code>flex-wrap: wrap-reverse</code>. The columns will wrap in reverse.</td>
</tr>
<tr>
<td>align-items-start</td>
<td>Adds <code>align-items: flex-start</code>. All columns will be vertically aligned at the top, unless they specify their own alignment.</td>
</tr>
<tr>
<td>align-items-center</td>
<td>Adds <code>align-items: center</code>. All columns will be vertically aligned in the center, unless they specify their own alignment.</td>
</tr>
<tr>
<td>align-items-end</td>
<td>Adds <code>align-items: flex-end</code>. All columns will be vertically aligned at the bottom, unless they specify their own alignment.</td>
</tr>
<tr>
<td>align-items-stretch</td>
<td>Adds <code>align-items: stretch</code>. All columns will be stretched to take up the entire height of the row, unless they specify their own alignment.</td>
</tr>
<tr>
<td>align-items-baseline</td>
<td>Adds <code>align-items: baseline</code>. All columns will be vertically aligned at their baselines, unless they specify their own alignment.</td>
</tr>
<tr>
<td>justify-content-start</td>
<td>Adds <code>justify-content: start</code>. All columns will be horizontally aligned at the start.</td>
</tr>
<tr>
<td>justify-content-center</td>
<td>Adds <code>justify-content: center</code>. All columns will be horizontally aligned at the center.</td>
</tr>
<tr>
<td>justify-content-end</td>
<td>Adds <code>justify-content: end</code>. All columns will be horizontally aligned at the end.</td>
</tr>
<tr>
<td>justify-content-around</td>
<td>Adds <code>justify-content: space-around</code>. All columns will be horizontally aligned with equal space around them.</td>
</tr>
<tr>
<td>justify-content-between</td>
<td>Adds <code>justify-content: space-between</code>. All columns will be horizontally aligned with a half-size space on either end.</td>
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

