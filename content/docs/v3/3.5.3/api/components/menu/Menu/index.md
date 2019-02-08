---
layout: "fluid/docs_base"
version: "3.5.3"
versionHref: "/docs/v3/3.5.3"
path: ""
category: api
id: "menu"
title: "Menu"
header_sub_title: "Ionic API Documentation"
doc: "Menu"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/menu/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="menu" href="#menu"></a>

Menu
<h3><code>ion-menu</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/menu/menu.ts#L17">
Improve this doc
</a>






<p>The Menu component is a navigation drawer that slides in from the side of the current
view. By default, it slides in from the left, but the side can be overridden. The menu
will be displayed differently based on the mode, however the display type can be changed
to any of the available <a href="#menu-types">menu types</a>. The menu element should be a sibling
to the app&#39;s content element. There can be any number of menus attached to the content.
These can be controlled from the templates, or programmatically using the <a href="../../app/MenuController">MenuController</a>.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-menu [content]=&quot;mycontent&quot;&gt;
  &lt;ion-content&gt;
    &lt;ion-list&gt;
      &lt;p&gt;some menu content, could be list items&lt;/p&gt;
    &lt;/ion-list&gt;
  &lt;/ion-content&gt;
&lt;/ion-menu&gt;

&lt;ion-nav #mycontent [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
</code></pre>
<p>To add a menu to an app, the <code>&lt;ion-menu&gt;</code> element should be added as a sibling to the <code>ion-nav</code> it will belongs
to. A <a href="https://angular.io/docs/ts/latest/guide/user-input.html#local-variables">local variable</a>
should be added to the <code>ion-nav</code> and passed to the <code>ion-menu</code>s <code>content</code> property.</p>
<p>This tells the menu what it is bound to and what element to watch for gestures.
In the below example, <code>content</code> is using <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding">property binding</a>
because <code>mycontent</code> is a reference to the <code>&lt;ion-nav&gt;</code> element, and not a string.</p>
<h3 id="opening-closing-menus">Opening/Closing Menus</h3>
<p>There are several ways to open or close a menu. The menu can be <strong>toggled</strong> open or closed
from the template using the <a href="../MenuToggle">MenuToggle</a> directive. It can also be
<strong>closed</strong> from the template using the <a href="../MenuClose">MenuClose</a> directive. To display a menu
programmatically, inject the <a href="../MenuController">MenuController</a> provider and call any of the
<code>MenuController</code> methods.</p>
<h3 id="menu-types">Menu Types</h3>
<p>The menu supports several display types: <code>overlay</code>, <code>reveal</code> and <code>push</code>. By default,
it will use the correct type based on the mode, but this can be changed. The default
type for both Material Design and Windows mode is <code>overlay</code>, and <code>reveal</code> is the default
type for iOS mode. The menu type can be changed in the app&#39;s <a href="../../config/Config">config</a>
via the <code>menuType</code> property, or passed in the <code>type</code> property on the <code>&lt;ion-menu&gt;</code> element.
See <a href="#usage">usage</a> below for examples of changing the menu type.</p>
<h3 id="navigation-bar-behavior">Navigation Bar Behavior</h3>
<p>If a <a href="../MenuToggle">MenuToggle</a> button is added to the <a href="../../toolbar/Navbar">Navbar</a> of
a page, the button will only appear when the page it&#39;s in is currently a root page. The
root page is the initial page loaded in the app, or a page that has been set as the root
using the <a href="../../../navigation/NavController/#setRoot">setRoot</a> method on the <a href="../../../navigation/NavController">NavController</a>.</p>
<p>For example, say the application has two pages, <code>Page1</code> and <code>Page2</code>, and both have a
<code>MenuToggle</code> button in their navigation bars. Assume the initial page loaded into the app
is <code>Page1</code>, making it the root page. <code>Page1</code> will display the <code>MenuToggle</code> button, but once
<code>Page2</code> is pushed onto the navigation stack, the <code>MenuToggle</code> will not be displayed.</p>
<h3 id="persistent-menus">Persistent Menus</h3>
<p>Persistent menus display the <a href="../MenuToggle">MenuToggle</a> button in the <a href="../../toolbar/Navbar">Navbar</a>
on all pages in the navigation stack. To make a menu persistent set <code>persistent</code> to <code>true</code> on the
<code>&lt;ion-menu&gt;</code> element. Note that this will only affect the <code>MenuToggle</code> button in the <code>Navbar</code> attached
to the <code>Menu</code> with <code>persistent</code> set to true, any other <code>MenuToggle</code> buttons will not be affected.</p>
<h3 id="menu-side">Menu Side</h3>
<p>By default, menus slide in from the left, but this can be overridden by passing <code>right</code>
to the <code>side</code> property:</p>
<pre><code class="lang-html">&lt;ion-menu side=&quot;right&quot; [content]=&quot;mycontent&quot;&gt;...&lt;/ion-menu&gt;
</code></pre>
<h3 id="menu-type">Menu Type</h3>
<p>The menu type can be changed by passing the value to <code>type</code> on the <code>&lt;ion-menu&gt;</code>:</p>
<pre><code class="lang-html">&lt;ion-menu type=&quot;overlay&quot; [content]=&quot;mycontent&quot;&gt;...&lt;/ion-menu&gt;
</code></pre>
<p>It can also be set in the app&#39;s config. The below will set the menu type to
<code>push</code> for all modes, and then set the type to <code>overlay</code> for the <code>ios</code> mode.</p>
<pre><code class="lang-ts">// in NgModules

imports: [
  IonicModule.forRoot(MyApp,{
    menuType: &#39;push&#39;,
    platforms: {
      ios: {
        menuType: &#39;overlay&#39;,
      }
    }
  })
],
</code></pre>
<h3 id="displaying-the-menu">Displaying the Menu</h3>
<p>To toggle a menu from the template, add a button with the <code>menuToggle</code>
directive anywhere in the page&#39;s template:</p>
<pre><code class="lang-html">&lt;button ion-button menuToggle&gt;Toggle Menu&lt;/button&gt;
</code></pre>
<p>To close a menu, add the <code>menuClose</code> button. It can be added anywhere
in the content, or even the menu itself. Below it is added to the menu&#39;s
content:</p>
<pre><code class="lang-html">&lt;ion-menu [content]=&quot;mycontent&quot;&gt;
  &lt;ion-content&gt;
    &lt;ion-list&gt;
      &lt;ion-item menuClose detail-none&gt;Close Menu&lt;/ion-item&gt;
    &lt;/ion-list&gt;
  &lt;/ion-content&gt;
&lt;/ion-menu&gt;
</code></pre>
<p>See the <a href="../MenuToggle">MenuToggle</a> and <a href="../MenuClose">MenuClose</a> docs
for more information on these directives.</p>
<p>The menu can also be controlled from the Page by using the <code>MenuController</code>.
Inject the <code>MenuController</code> provider into the page and then call any of its
methods. In the below example, the <code>openMenu</code> method will open the menu
when it is called.</p>
<pre><code class="lang-ts">import { Component } from &#39;@angular/core&#39;;
import { MenuController } from &#39;ionic-angular&#39;;

@Component({...})
export class MyPage {
 constructor(public menuCtrl: MenuController) {}

 openMenu() {
   this.menuCtrl.open();
 }
}
</code></pre>
<p>See the <a href="../../app/MenuController">MenuController</a> API docs for all of the methods
and usage information.</p>




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
      <td>content</td>
      <td><code>any</code></td>
      <td><p> A reference to the content element the menu should use.</p>
</td>
    </tr>

    <tr>
      <td>enabled</td>
      <td><code>boolean</code></td>
      <td><p> If true, the menu is enabled. Default <code>true</code>.</p>
</td>
    </tr>

    <tr>
      <td>id</td>
      <td><code>string</code></td>
      <td><p> An id for the menu.</p>
</td>
    </tr>

    <tr>
      <td>persistent</td>
      <td><code>boolean</code></td>
      <td><p> If true, the menu will persist on child pages.</p>
</td>
    </tr>

    <tr>
      <td>side</td>
      <td><code>string</code></td>
      <td><p> Which side of the view the menu should be placed. Default <code>&quot;left&quot;</code>.</p>
</td>
    </tr>

    <tr>
      <td>swipeEnabled</td>
      <td><code>boolean</code></td>
      <td><p> If true, swiping the menu is enabled. Default <code>true</code>.</p>
</td>
    </tr>

    <tr>
      <td>type</td>
      <td><code>string</code></td>
      <td><p> The display type of the menu. Default varies based on the mode,
see the <code>menuType</code> in the <a href="../../config/Config">config</a>. Available options:
<code>&quot;overlay&quot;</code>, <code>&quot;reveal&quot;</code>, <code>&quot;push&quot;</code>.</p>
</td>
    </tr>

  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>ionClose</td>
      <td><p> Emitted when the menu has been closed.</p>
</td>
    </tr>

    <tr>
      <td>ionDrag</td>
      <td><p> Emitted when the menu is being dragged open.</p>
</td>
    </tr>

    <tr>
      <td>ionOpen</td>
      <td><p> Emitted when the menu has been opened.</p>
</td>
    </tr>

  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">



      <a ng-init="setSassPlatform('base')" ng-class="{ active: active === 'base' }" ng-click="setSassPlatform('base')" >All</a>



      <a ng-class="{ active: active === 'ios' }" ng-click="setSassPlatform('ios')">iOS</a>



      <a ng-class="{ active: active === 'md' }" ng-click="setSassPlatform('md')">Material Design</a>



      <a ng-class="{ active: active === 'wp' }" ng-click="setSassPlatform('wp')">Windows Platform</a>



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
        <td><code>$menu-width</code></td>

          <td><code>304px</code></td>

        <td><p>Width of the menu</p>
</td>
      </tr>

      <tr>
        <td><code>$menu-small-width</code></td>

          <td><code>$menu-width - 40px</code></td>

        <td><p>Width of the menu on small devices (under 340px)</p>
</td>
      </tr>

    </tbody>
  </table>

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
        <td><code>$menu-ios-background</code></td>

          <td><code>$background-ios-color</code></td>

        <td><p>Background of the menu</p>
</td>
      </tr>

      <tr>
        <td><code>$menu-ios-box-shadow-color</code></td>

          <td><code>rgba(0, 0, 0, .25)</code></td>

        <td><p>Box shadow color of the menu</p>
</td>
      </tr>

      <tr>
        <td><code>$menu-ios-box-shadow</code></td>

          <td><code>0 0 10px $menu-ios-box-shadow-color</code></td>

        <td><p>Box shadow of the menu</p>
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
        <td><code>$menu-md-background</code></td>

          <td><code>$background-md-color</code></td>

        <td><p>Background of the menu</p>
</td>
      </tr>

      <tr>
        <td><code>$menu-md-box-shadow-color</code></td>

          <td><code>rgba(0, 0, 0, .25)</code></td>

        <td><p>Box shadow color of the menu</p>
</td>
      </tr>

      <tr>
        <td><code>$menu-md-box-shadow</code></td>

          <td><code>0 0 10px $menu-md-box-shadow-color</code></td>

        <td><p>Box shadow of the menu</p>
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
        <td><code>$menu-wp-background</code></td>

          <td><code>#f2f2f2</code></td>

        <td><p>Background of the menu</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href="/docs/v3/components#menus">Menu Component Docs</a>,
<a href="../../app/MenuController">MenuController API Docs</a>,
<a href="../../nav/Nav">Nav API Docs</a>,
<a href="../../../navigation/NavController">NavController API Docs</a><!-- end content block -->


<!-- end body block -->

