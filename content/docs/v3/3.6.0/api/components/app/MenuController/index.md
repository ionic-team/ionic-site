---
layout: "fluid/docs_base"
version: "3.6.0"
versionHref: "/docs/v3/3.6.0"
path: ""
category: api
id: "menucontroller"
title: "MenuController"
header_sub_title: "Ionic API Documentation"
doc: "MenuController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/menu/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="menu-controller" href="#menu-controller"></a>

MenuController





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/app/menu-controller.ts#L2">
Improve this doc
</a>






<p>The MenuController is a provider which makes it easy to control a <a href="../../Menu/Menu/">Menu</a>.
Its methods can be used to display the menu, enable the menu, toggle the menu, and more.
The controller will grab a reference to the menu by the <code>side</code>, <code>id</code>, or, if neither
of these are passed to it, it will grab the first menu it finds.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<p>Add a basic menu component to start with. See the <a href="../../Menu/Menu/">Menu</a> API docs
for more information on adding menu components.</p>
<pre><code class="lang-html">&lt;ion-menu [content]=&quot;mycontent&quot;&gt;
  &lt;ion-content&gt;
    &lt;ion-list&gt;
    ...
    &lt;/ion-list&gt;
  &lt;/ion-content&gt;
&lt;/ion-menu&gt;

&lt;ion-nav #mycontent [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
</code></pre>
<p>To call the controller methods, inject the <code>MenuController</code> provider
into the page. Then, create some methods for opening, closing, and
toggling the menu.</p>
<pre><code class="lang-ts">import { Component } from &#39;@angular/core&#39;;
import { MenuController } from &#39;ionic-angular&#39;;

@Component({...})
export class MyPage {

 constructor(public menuCtrl: MenuController) {

 }

 openMenu() {
   this.menuCtrl.open();
 }

 closeMenu() {
   this.menuCtrl.close();
 }

 toggleMenu() {
   this.menuCtrl.toggle();
 }

}
</code></pre>
<p>Since only one menu exists, the <code>MenuController</code> will grab the
correct menu and call the correct method for each.</p>
<h3 id="multiple-menus-on-different-sides">Multiple Menus on Different Sides</h3>
<p>For applications with both a left and right menu, the desired menu can be
grabbed by passing the <code>side</code> of the menu. If nothing is passed, it will
default to the <code>&quot;left&quot;</code> menu.</p>
<pre><code class="lang-html">&lt;ion-menu side=&quot;left&quot; [content]=&quot;mycontent&quot;&gt;...&lt;/ion-menu&gt;
&lt;ion-menu side=&quot;right&quot; [content]=&quot;mycontent&quot;&gt;...&lt;/ion-menu&gt;
&lt;ion-nav #mycontent [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
</code></pre>
<pre><code class="lang-ts">toggleLeftMenu() {
  this.menuCtrl.toggle();
}

toggleRightMenu() {
  this.menuCtrl.toggle(&#39;right&#39;);
}
</code></pre>
<h3 id="multiple-menus-on-the-same-side">Multiple Menus on the Same Side</h3>
<p>An application can have multiple menus on the same side. In order to determine
the menu to control, an <code>id</code> should be passed. In the example below, the menu
with the <code>authenticated</code> id will be enabled, and the menu with the <code>unauthenticated</code>
id will be disabled.</p>
<pre><code class="lang-html">&lt;ion-menu id=&quot;authenticated&quot; side=&quot;left&quot; [content]=&quot;mycontent&quot;&gt;...&lt;/ion-menu&gt;
&lt;ion-menu id=&quot;unauthenticated&quot; side=&quot;left&quot; [content]=&quot;mycontent&quot;&gt;...&lt;/ion-menu&gt;
&lt;ion-nav #mycontent [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
</code></pre>
<pre><code class="lang-ts">enableAuthenticatedMenu() {
  this.menuCtrl.enable(true, &#39;authenticated&#39;);
  this.menuCtrl.enable(false, &#39;unauthenticated&#39;);
}
</code></pre>
<p>Note: if an app only has one menu, there is no reason to pass an <code>id</code>.</p>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="close"></div>

<h3>
<a class="anchor" name="close" href="#close">
<code>close(menuId)</code>


</a>
</h3>

Programatically close the Menu. If no `menuId` is given as the first
argument then it'll close any menu which is open. If a `menuId`
is given then it'll close that exact menu.


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
        menuId


      </td>
      <td>

  <code>string</code>
      </td>
      <td>
        <p>Optionally get the menu by its id, or side.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Promise</code> <p>returns a promise when the menu is fully closed</p>


</div>




<div id="enable"></div>

<h3>
<a class="anchor" name="enable" href="#enable">
<code>enable(menuId)</code>


</a>
</h3>

Used to enable or disable a menu. For example, there could be multiple
left menus, but only one of them should be able to be opened at the same
time. If there are multiple menus on the same side, then enabling one menu
will also automatically disable all the others that are on the same side.


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
        menuId


      </td>
      <td>

  <code>string</code>
      </td>
      <td>
        <p>Optionally get the menu by its id, or side.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Menu</code> <p>Returns the instance of the menu, which is useful for chaining.</p>


</div>




<div id="get"></div>

<h3>
<a class="anchor" name="get" href="#get">
<code>get(menuId)</code>


</a>
</h3>

Used to get a menu instance. If a `menuId` is not provided then it'll
return the first menu found. If a `menuId` is `left` or `right`, then
it'll return the enabled menu on that side. Otherwise, if a `menuId` is
provided, then it'll try to find the menu using the menu's `id`
property. If a menu is not found then it'll return `null`.


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
        menuId


      </td>
      <td>

  <code>string</code>
      </td>
      <td>
        <p>Optionally get the menu by its id, or side.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Menu</code> <p>Returns the instance of the menu if found, otherwise <code>null</code>.</p>


</div>




<div id="getMenus"></div>

<h3>
<a class="anchor" name="getMenus" href="#getMenus">
<code>getMenus()</code>


</a>
</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Array&lt;Menu&gt;</code> <p>Returns an array of all menu instances.</p>


</div>




<div id="getOpen"></div>

<h3>
<a class="anchor" name="getOpen" href="#getOpen">
<code>getOpen()</code>


</a>
</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Menu</code> <p>Returns the instance of the menu already opened, otherwise <code>null</code>.</p>


</div>




<div id="isEnabled"></div>

<h3>
<a class="anchor" name="isEnabled" href="#isEnabled">
<code>isEnabled(menuId)</code>


</a>
</h3>




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
        menuId


      </td>
      <td>

  <code>string</code>
      </td>
      <td>
        <p>Optionally get the menu by its id, or side.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>boolean</code> <p>Returns true if the menu is currently enabled, otherwise false.</p>


</div>




<div id="isOpen"></div>

<h3>
<a class="anchor" name="isOpen" href="#isOpen">
<code>isOpen(menuId)</code>


</a>
</h3>




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
        menuId


      </td>
      <td>

  <code>string</code>
      </td>
      <td>
        <p>Optionally get the menu by its id, or side.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>boolean</code> <p>Returns true if the specified menu is currently open, otherwise false.
If the menuId is not specified, it returns true if ANY menu is currenly open.</p>


</div>




<div id="open"></div>

<h3>
<a class="anchor" name="open" href="#open">
<code>open(menuId)</code>


</a>
</h3>

Programatically open the Menu.


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
        menuId


      </td>
      <td>

  <code>string</code>
      </td>
      <td>
        <p>Optionally get the menu by its id, or side.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Promise</code> <p>returns a promise when the menu is fully opened</p>


</div>




<div id="swipeEnable"></div>

<h3>
<a class="anchor" name="swipeEnable" href="#swipeEnable">
<code>swipeEnable(shouldEnable,&nbsp;menuId)</code>


</a>
</h3>

Used to enable or disable the ability to swipe open the menu.


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
        shouldEnable


      </td>
      <td>

  <code>boolean</code>
      </td>
      <td>
        <p>True if it should be swipe-able, false if not.</p>


      </td>
    </tr>

    <tr>
      <td>
        menuId


      </td>
      <td>

  <code>string</code>
      </td>
      <td>
        <p>Optionally get the menu by its id, or side.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Menu</code> <p>Returns the instance of the menu, which is useful for chaining.</p>


</div>




<div id="toggle"></div>

<h3>
<a class="anchor" name="toggle" href="#toggle">
<code>toggle(menuId)</code>


</a>
</h3>

Toggle the menu. If it's closed, it will open, and if opened, it
will close.


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
        menuId


      </td>
      <td>

  <code>string</code>
      </td>
      <td>
        <p>Optionally get the menu by its id, or side.<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Promise</code> <p>returns a promise when the menu has been toggled</p>


</div>





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



<!-- related link -->

<h2><a class="anchor" name="related" href="#related">Related</a></h2>

<a href="/docs/v3/components#menus">Menu Component Docs</a>,
<a href="../Menu">Menu API Docs</a><!-- end content block -->


<!-- end body block -->

