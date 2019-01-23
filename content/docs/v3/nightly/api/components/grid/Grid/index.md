---
layout: "fluid/docs_base"
version: "nightly"
versionHref: "/docs/v3/nightly"
path: ""
category: api
id: "grid"
title: "Grid"
header_sub_title: "Ionic API Documentation"
doc: "Grid"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="grid" href="#grid"></a>

Grid
<h3><code>ion-grid, [ion-grid]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/grid/grid.ts#L0">
Improve this doc
</a>






<p>The grid is a powerful mobile-first flexbox system for building custom layouts.
It is heavily influenced by <a href="http://v4-alpha.getbootstrap.com/layout/grid/">Bootstrap&#39;s grid system</a>.</p>
<p>The grid is composed of three units — a grid, row(s) and column(s). Columns will expand to fill their
row, and will resize to fit additional columns. It is based on a 12 column layout with different
breakpoints based on the screen size. The number of columns and breakpoints can be fully customized
using Sass.</p>
<ul>
<li><a href="#how-it-works">How it works</a></li>
<li><a href="#grid-size">Grid size</a></li>
<li><a href="#grid-attributes">Grid attributes</a></li>
<li><a href="#default-breakpoints">Default breakpoints</a></li>
<li><a href="#auto-layout-columns">Auto-layout columns</a><ul>
<li><a href="#equal-width">Equal-width</a></li>
<li><a href="#setting-one-column-width">Setting one column width</a></li>
<li><a href="#variable-width">Variable-width</a></li>
</ul>
</li>
<li><a href="#responsive-attributes">Responsive attributes</a><ul>
<li><a href="#all-breakpoints">All breakpoints</a></li>
<li><a href="#stacked-to-horizontal">Stacked to horizontal</a></li>
</ul>
</li>
<li><a href="#reordering">Reordering</a><ul>
<li><a href="#offsetting-columns">Offsetting columns</a></li>
<li><a href="#push-and-pull">Push and pull</a></li>
</ul>
</li>
<li><a href="#alignment">Alignment</a><ul>
<li><a href="#vertical-alignment">Vertical Alignment</a></li>
<li><a href="#horizontal-alignment">Horizontal Alignment</a></li>
</ul>
</li>
<li><a href="#customizing-the-grid">Customizing the grid</a><ul>
<li><a href="#number-of-columns-and-padding">Number of columns and padding</a></li>
<li><a href="#grid-tiers">Grid tiers</a></li>
</ul>
</li>
</ul>
<h2 id="how-it-works">How it works</h2>
<p>The grid is a mobile-first system made up of any number of rows and columns.
It is built with flexbox making it extremely responsive. The components that
make up the grid can be written as an element (e.g., <code>&lt;ion-grid&gt;</code>) or added as
an attribute to any element (e.g., <code>&lt;div ion-row&gt;</code>).</p>
<p>Here&#39;s how it works:</p>
<ul>
<li>Grids act as a container for all rows and columns. Grids take up the full width of their container,
but adding the <code>fixed</code> attribute will specify the width per screen size, see <a href="#grid-size">grid size</a> below.</li>
<li>Rows are horizontal groups of columns that line the columns up properly.</li>
<li>Content should be placed within columns, and only columns may be immediate children of rows.</li>
<li>Grid columns without a specified width will automatically have equal widths.
For example, four instances of <code>col-sm</code> will each automatically be 25% wide for small breakpoints.</li>
<li>Column attributes indicate the number of columns to use out of the default 12 per row.
So, <code>col-4</code> can be added in order to have three equal-width columns.</li>
<li>Column widths are set as a percentage, so they’re always fluid and sized relative to their parent element.</li>
<li>Columns have padding between individual columns, however, the padding can be removed from the grid and
columns by adding <code>no-padding</code> on the grid.</li>
<li>There are five grid tiers by default, one for each responsive breakpoint: all breakpoints (extra small),
small, medium, large, and extra large.</li>
<li>Grid tiers are based on minimum widths, meaning they apply to their tier and all those larger than it
(e.g., <code>col-sm-4</code> applies to small, medium, large, and extra large devices).</li>
<li>Grids can easily be customized via Sass variables. See <a href="#customizing-the-grid">customizing the grid</a>.</li>
</ul>
<p>There are some <a href="https://github.com/philipwalton/flexbugs">known bugs with flexbox</a> that
should be checked prior to creating issues with Ionic.</p>
<h2 id="grid-size">Grid size</h2>
<p>By default, the grid will take up 100% width. To set a maximum width based on the screen
size add the <code>fixed</code> attribute. The maximum width of the grid for each breakpoint is defined
in the <code>$grid-max-widths</code> Sass variable. For more information, see
<a href="#customizing-the-grid">customizing the grid</a>.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>xs</td>
<td>auto</td>
<td>Don&#39;t set the grid width for xs screens</td>
</tr>
<tr>
<td>sm</td>
<td>540px</td>
<td>Set grid width to 540px when (min-width: 576px)</td>
</tr>
<tr>
<td>md</td>
<td>720px</td>
<td>Set grid width to 720px when (min-width: 768px)</td>
</tr>
<tr>
<td>lg</td>
<td>960px</td>
<td>Set grid width to 960px when (min-width: 992px)</td>
</tr>
<tr>
<td>xl</td>
<td>1140px</td>
<td>Set grid width to 1140px when (min-width: 1200px)</td>
</tr>
</tbody>
</table>
<h2 id="grid-attributes">Grid attributes</h2>
<p>The grid takes up full width and has padding added to it based on the screen size. There are two
attributes that can be used to adjust this behavior.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>no-padding</td>
<td>Removes padding from the grid and immediate children columns.</td>
</tr>
<tr>
<td>fixed</td>
<td>Set a max width based on the screen size.</td>
</tr>
</tbody>
</table>
<h2 id="default-breakpoints">Default breakpoints</h2>
<p>The default breakpoints are defined by the <code>$grid-breakpoints</code> Sass variable. It can be
customized to use different values for the breakpoint, rename and add/remove breakpoints.
For more information, see <a href="#customizing-the-grid">customizing the grid</a>.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Value</th>
<th>Width Prefix</th>
<th>Offset Prefix</th>
<th>Push Prefix</th>
<th>Pull Prefix</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>xs</td>
<td>0</td>
<td><code>col-</code></td>
<td><code>offset-</code></td>
<td><code>push-</code></td>
<td><code>pull-</code></td>
<td>Set columns when (min-width: 0)</td>
</tr>
<tr>
<td>sm</td>
<td>576px</td>
<td><code>col-sm-</code></td>
<td><code>offset-sm-</code></td>
<td><code>push-sm-</code></td>
<td><code>pull-sm-</code></td>
<td>Set columns when (min-width: 576px)</td>
</tr>
<tr>
<td>md</td>
<td>768px</td>
<td><code>col-md-</code></td>
<td><code>offset-md-</code></td>
<td><code>push-md-</code></td>
<td><code>pull-md-</code></td>
<td>Set columns when (min-width: 768px)</td>
</tr>
<tr>
<td>lg</td>
<td>992px</td>
<td><code>col-lg-</code></td>
<td><code>offset-lg-</code></td>
<td><code>push-lg-</code></td>
<td><code>pull-lg-</code></td>
<td>Set columns when (min-width: 992px)</td>
</tr>
<tr>
<td>xl</td>
<td>1200px</td>
<td><code>col-xl-</code></td>
<td><code>offset-xl-</code></td>
<td><code>push-xl-</code></td>
<td><code>pull-xl-</code></td>
<td>Set columns when (min-width: 1200px)</td>
</tr>
</tbody>
</table>
<p><em>Note: the first breakpoint must have the value set to 0 and all breakpoint values must be in
ascending order.</em></p>
<h2 id="auto-layout-columns">Auto-layout columns</h2>
<h3><a class="anchor" name="equal-width" href="#equal-width">Equal-width</a></h3>


<p>By default, columns will take up equal width inside of a row for all devices and screen sizes.</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col&gt;
      1 of 2
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      2 of 2
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
  &lt;ion-row&gt;
    &lt;ion-col&gt;
      1 of 3
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      2 of 3
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      3 of 3
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<h3><a class="anchor" name="setting-one-column-width" href="#setting-one-column-width">Setting one column width</a></h3>


<p>Set the width of one column and the others will automatically resize around it.
This can be done using our predefined grid attributes. In the example below,
the other columns will resize no matter the width of the center column.</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col&gt;
      1 of 3
    &lt;/ion-col&gt;
    &lt;ion-col col-8&gt;
      2 of 3 (wider)
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      3 of 3
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
  &lt;ion-row&gt;
    &lt;ion-col&gt;
      1 of 3
    &lt;/ion-col&gt;
    &lt;ion-col col-6&gt;
      2 of 3 (wider)
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      3 of 3
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<h3><a class="anchor" name="variable-width" href="#variable-width">Variable-width</a></h3>


<p>Using the <code>col-{breakpoint}-auto</code> attributes, the column can size itself based on the
natural width of its content. This is extremely useful for setting a column width
using pixels. The columns next to the variable-width column will resize to fill the row.</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col&gt;
      1 of 3
    &lt;/ion-col&gt;
    &lt;ion-col col-auto&gt;
      Variable width content
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      3 of 3
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
  &lt;ion-row&gt;
    &lt;ion-col&gt;
      1 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      2 of 4
    &lt;/ion-col&gt;
    &lt;ion-col col-auto&gt;
      &lt;ion-input placeholder=&quot;Variable width input&quot;&gt;&lt;/ion-input&gt;
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      4 of 4
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<h2 id="responsive-attributes">Responsive attributes</h2>
<h3><a class="anchor" name="all-breakpoints" href="#all-breakpoints">All breakpoints</a></h3>


<p>To customize a column&#39;s width for all devices and screens, add the <code>col-*</code>
attribute. These attributes tell the column to take up <code>*</code> columns out
of the available columns.</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col col-4&gt;
      1 of 4
    &lt;/ion-col&gt;
    &lt;ion-col col-2&gt;
      2 of 4
    &lt;/ion-col&gt;
    &lt;ion-col col-2&gt;
      3 of 4
    &lt;/ion-col&gt;
    &lt;ion-col col-4&gt;
      4 of 4
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<h3><a class="anchor" name="-stacked-to-horizontal" href="#-stacked-to-horizontal"> Stacked to horizontal</a></h3>


<p>Use a combination of width and breakpoint attributes to create a grid that starts out stacked
on extra small screens before becoming horizontal on small screens.</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col col-12 col-sm&gt;
      1 of 4
    &lt;/ion-col&gt;
    &lt;ion-col col-12 col-sm&gt;
      2 of 4
    &lt;/ion-col&gt;
    &lt;ion-col col-12 col-sm&gt;
      3 of 4
    &lt;/ion-col&gt;
    &lt;ion-col col-12 col-sm&gt;
      4 of 4
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<h2 id="reordering">Reordering</h2>
<h3><a class="anchor" name="offsetting-columns" href="#offsetting-columns">Offsetting columns</a></h3>


<p>Move columns to the right by adding the <code>offset-*</code> attributes. These attributes
increase the margin start of the column by <code>*</code> columns. For example, in the following
grid the last column will be offset by 3 columns and take up 3 columns:</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col col-3&gt;
      1 of 2
    &lt;/ion-col&gt;
    &lt;ion-col col-3 offset-3&gt;
      2 of 2
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<p>Offsets can also be added based on screen breakpoints. Here&#39;s an example of a
grid where the last column will be offset by 3 columns for <code>md</code> screens and up:</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col col-md-3&gt;
      1 of 3
    &lt;/ion-col&gt;
    &lt;ion-col col-md-3&gt;
      2 of 3
    &lt;/ion-col&gt;
    &lt;ion-col col-md-3 offset-md-3&gt;
      3 of 3
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<h3><a class="anchor" name="push-and-pull" href="#push-and-pull">Push and pull</a></h3>


<p>Reorder the columns by adding the <code>push-*</code> and <code>pull-*</code> attributes. These attributes
adjust the <code>left</code> and <code>right</code> of the columns by <code>*</code> columns making it easy to reorder
columns. For example, in the following grid the column with the <code>1st col</code> description
will actually be the last column and the <code>2nd col</code> will be the first column.</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col col-9 push-3&gt;
      1 of 2
    &lt;/ion-col&gt;
    &lt;ion-col col-3 pull-9&gt;
      2 of 2
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<p>Push and pull can also be added based on screen breakpoints. In the following example,
the column with the <code>3rd</code> column description will actually be the first column for
<code>md</code> screens and up:</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col col-md-6 push-md-3&gt;
      1 of 3
    &lt;/ion-col&gt;
    &lt;ion-col col-md-3 push-md-3&gt;
      2 of 3
    &lt;/ion-col&gt;
    &lt;ion-col col-md-3 pull-md-9&gt;
      3 of 3
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<h2 id="alignment">Alignment</h2>
<h3><a class="anchor" name="vertical-alignment" href="#vertical-alignment">Vertical alignment</a></h3>


<p>All columns can be vertically aligned inside of a row by adding different
attributes to the row. For a list of available attributes, see
<a href="../Row#row-attributes">row attributes</a>.</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row align-items-start&gt;
    &lt;ion-col&gt;
      1 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      2 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      3 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      4 of 4 &lt;br&gt;#&lt;br&gt;#&lt;br&gt;#
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;

  &lt;ion-row align-items-center&gt;
    &lt;ion-col&gt;
      1 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      2 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      3 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      4 of 4 &lt;br&gt;#&lt;br&gt;#&lt;br&gt;#
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;

  &lt;ion-row align-items-end&gt;
    &lt;ion-col&gt;
      1 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      2 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      3 of 4
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      4 of 4 &lt;br&gt;#&lt;br&gt;#&lt;br&gt;#
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<p>Columns can also align themselves differently than other columns by
adding the alignment attribute directly to the column. For a list of available
attributes, see <a href="../Col#column-attributes">column attributes</a>.</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row&gt;
    &lt;ion-col align-self-start&gt;
      &lt;div&gt;
        1 of 4
      &lt;/div&gt;
    &lt;/ion-col&gt;
    &lt;ion-col align-self-center&gt;
      &lt;div&gt;
        2 of 4
      &lt;/div&gt;
    &lt;/ion-col&gt;
    &lt;ion-col align-self-end&gt;
      &lt;div&gt;
        3 of 4
      &lt;/div&gt;
    &lt;/ion-col&gt;
    &lt;ion-col&gt;
      &lt;div&gt;
        4 of 4 &lt;br&gt;#&lt;br&gt;#&lt;br&gt;#
      &lt;/div&gt;
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<h3><a class="anchor" name="horizontal-alignment" href="#horizontal-alignment">Horizontal alignment</a></h3>


<p>All columns can be horizontally aligned inside of a row by adding different
attributes to the row. For a list of available attributes, see
<a href="../Row#row-attributes">row attributes</a>.</p>
<pre><code>&lt;ion-grid&gt;
  &lt;ion-row justify-content-start&gt;
    &lt;ion-col col-3&gt;
      1 of 2
    &lt;/ion-col&gt;
    &lt;ion-col col-3&gt;
      2 of 2
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;

  &lt;ion-row justify-content-center&gt;
    &lt;ion-col col-3&gt;
      1 of 2
    &lt;/ion-col&gt;
    &lt;ion-col col-3&gt;
      2 of 2
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;

  &lt;ion-row justify-content-end&gt;
    &lt;ion-col col-3&gt;
      1 of 2
    &lt;/ion-col&gt;
    &lt;ion-col col-3&gt;
      2 of 2
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;

  &lt;ion-row justify-content-around&gt;
    &lt;ion-col col-3&gt;
      1 of 2
    &lt;/ion-col&gt;
    &lt;ion-col col-3&gt;
      2 of 2
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;

  &lt;ion-row justify-content-between&gt;
    &lt;ion-col col-3&gt;
      1 of 2
    &lt;/ion-col&gt;
    &lt;ion-col col-3&gt;
      2 of 2
    &lt;/ion-col&gt;
  &lt;/ion-row&gt;
&lt;/ion-grid&gt;
</code></pre>
<h2 id="customizing-the-grid">Customizing the grid</h2>
<p>Using our built-in grid Sass variables and maps, it’s possible to completely customize
the predefined grid attributes. Change the number of breakpoints, the media query values,
the number of columns, and more.</p>
<h3><a class="anchor" name="number-of-columns-and-padding" href="#number-of-columns-and-padding">Number of columns and padding</a></h3>


<p>The number of grid columns and their padding can be modified via Sass variables.
<code>$grid-columns</code> is used to generate the widths (in percent) of each individual column.
<code>$grid-padding-width</code> is used for the padding on the grid, while <code>$grid-padding-widths</code>
allows breakpoint-specific widths that are divided evenly across <code>padding-left</code> and
<code>padding-right</code> as well as <code>padding-top</code> and <code>padding-bottom</code> of the grid and columns.</p>
<pre><code>$grid-columns:               12 !default;

$grid-padding-width:         10px !default;

$grid-padding-widths: (
  xs: $grid-padding-width,
  sm: $grid-padding-width,
  md: $grid-padding-width,
  lg: $grid-padding-width,
  xl: $grid-padding-width
) !default;
</code></pre>
<h3><a class="anchor" name="grid-tiers" href="#grid-tiers">Grid tiers</a></h3>


<p>To customize the breakpoints and their values, override the values of
<code>$grid-breakpoints</code> and <code>$grid-max-widths</code>. For example, to only use
3 breakpoints, the following could be written:</p>
<pre><code>$grid-breakpoints: (
  sm: 0,
  md: 768px,
  lg: 1024px
);

$grid-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
</code></pre>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables">Sass Variables</a></h2>
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

