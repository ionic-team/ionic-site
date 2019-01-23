---
layout: "fluid/docs_base"
version: "3.4.2"
versionHref: "/docs/v3/3.4.2"
path: ""
category: api
id: "popovercontroller"
title: "PopoverController"
header_sub_title: "Ionic API Documentation"
doc: "PopoverController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/popover/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="popover-controller" href="#popover-controller"></a>

PopoverController





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/popover/popover-controller.ts#L6">
Improve this doc
</a>






<p>A Popover is a dialog that appears on top of the current page.
It can be used for anything, but generally it is used for overflow
actions that don&#39;t fit in the navigation bar.</p>
<h3 id="creating">Creating</h3>
<p>A popover can be created by calling the <code>create</code> method. The view
to display in the popover should be passed as the first argument.
Any data to pass to the popover view can optionally be passed in
the second argument. Options for the popover can optionally be
passed in the third argument. See the <a href="#create">create</a> method
below for all available options.</p>
<h3 id="presenting">Presenting</h3>
<p>To present a popover, call the <code>present</code> method on a PopoverController instance.
In order to position the popover relative to the element clicked, a click event
needs to be passed into the options of the the `present method. If the event
is not passed, the popover will be positioned in the center of the current
view. See the <a href="#usage">usage</a> section for an example of passing this event.</p>
<h3 id="dismissing">Dismissing</h3>
<p>To dismiss the popover after creation, call the <code>dismiss()</code> method on the
<code>Popover</code> instance. The popover can also be dismissed from within the popover&#39;s
view by calling the <code>dismiss()</code> method on the <a href="../../navigation/ViewController">ViewController</a>.
The <code>dismiss()</code> call accepts an optional parameter that will be passed to the callback described
as follows. The <code>onDidDismiss(&lt;func&gt;)</code> function can be called to set up a callback action that will
be performed after the popover is dismissed, receiving the parameter passed to <code>dismiss()</code>.
The popover will dismiss when the backdrop is clicked by implicitly performing <code>dismiss(null)</code>,
but this can be disabled by setting <code>enableBackdropDismiss</code> to <code>false</code> in the popover options.</p>
<blockquote>
<p>Note that after the component is dismissed, it will not be usable anymore and
another one must be created. This can be avoided by wrapping the creation and
presentation of the component in a reusable function as shown in the <a href="#usage">usage</a>
section below.</p>
</blockquote>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>To open a popover on the click of a button, pass <code>$event</code> to the method
which creates and presents the popover:</p>
<pre><code class="lang-html">&lt;button ion-button icon-only (click)=&quot;presentPopover($event)&quot;&gt;
  &lt;ion-icon name=&quot;more&quot;&gt;&lt;/ion-icon&gt;
&lt;/button&gt;
</code></pre>
<pre><code class="lang-ts">import { PopoverController } from &#39;ionic-angular&#39;;

@Component({})
class MyPage {
  constructor(public popoverCtrl: PopoverController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
</code></pre>
<p>The <code>PopoverPage</code> will display inside of the popover, and
can be anything. Below is an example of a page with items
that close the popover on click.</p>
<pre><code class="lang-ts">@Component({
  template: `
    &lt;ion-list&gt;
      &lt;ion-list-header&gt;Ionic&lt;/ion-list-header&gt;
      &lt;button ion-item (click)=&quot;close()&quot;&gt;Learn Ionic&lt;/button&gt;
      &lt;button ion-item (click)=&quot;close()&quot;&gt;Documentation&lt;/button&gt;
      &lt;button ion-item (click)=&quot;close()&quot;&gt;Showcase&lt;/button&gt;
      &lt;button ion-item (click)=&quot;close()&quot;&gt;GitHub Repo&lt;/button&gt;
    &lt;/ion-list&gt;
  `
})
class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="config"></div>

<h3>
<a class="anchor" name="config" href="#config"></a>
<code>config</code>


</h3>











<div id="create"></div>

<h3>
<a class="anchor" name="create" href="#create"></a>
<code>create(component,&nbsp;data,&nbsp;opts)</code>


</h3>

Present a popover. See below for options


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
        component


      </td>
      <td>

  <code>object</code>
      </td>
      <td>
        <p>The Popover</p>


      </td>
    </tr>

    <tr>
      <td>
        data


      </td>
      <td>

  <code>object</code>
      </td>
      <td>
        <p>Any data to pass to the Popover view</p>


      </td>
    </tr>

    <tr>
      <td>
        opts


      </td>
      <td>

  <code>PopoverOptions</code>
      </td>
      <td>
        <p>Popover options</p>


      </td>
    </tr>

  </tbody>
</table>






<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>Popover Options</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>cssClass</td>
<td><code>string</code></td>
<td>Additional classes for custom styles, separated by spaces.</td>
</tr>
<tr>
<td>showBackdrop</td>
<td><code>boolean</code></td>
<td>Whether to show the backdrop. Default true.</td>
</tr>
<tr>
<td>enableBackdropDismiss</td>
<td><code>boolean</code></td>
<td>Whether the popover should be dismissed by tapping the backdrop. Default true.</td>
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
        <td><code>$popover-ios-width</code></td>

          <td><code>200px</code></td>

        <td><p>Width of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-ios-min-width</code></td>

          <td><code>0</code></td>

        <td><p>Min width of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-ios-min-height</code></td>

          <td><code>0</code></td>

        <td><p>Minimum height of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-ios-max-height</code></td>

          <td><code>90%</code></td>

        <td><p>Maximum height of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-ios-border-radius</code></td>

          <td><code>10px</code></td>

        <td><p>Border radius of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-ios-text-color</code></td>

          <td><code>$text-ios-color</code></td>

        <td><p>Text color of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-ios-background</code></td>

          <td><code>$background-ios-color</code></td>

        <td><p>Background of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-ios-arrow-background</code></td>

          <td><code>$popover-ios-background</code></td>

        <td><p>Background of the popover arrow</p>
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
        <td><code>$popover-md-width</code></td>

          <td><code>250px</code></td>

        <td><p>Width of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-md-min-width</code></td>

          <td><code>0</code></td>

        <td><p>Min width of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-md-min-height</code></td>

          <td><code>0</code></td>

        <td><p>Minimum height of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-md-max-height</code></td>

          <td><code>90%</code></td>

        <td><p>Maximum height of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-md-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-md-text-color</code></td>

          <td><code>$text-md-color</code></td>

        <td><p>Text color of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-md-background</code></td>

          <td><code>$background-md-color</code></td>

        <td><p>Background of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-md-box-shadow-color</code></td>

          <td><code>rgba(0, 0, 0, .3)</code></td>

        <td><p>Box shadow color of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-md-box-shadow</code></td>

          <td><code>0 3px 12px 2px $popover-md-box-shadow-color</code></td>

        <td><p>Box shadow of the popover content</p>
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
        <td><code>$popover-wp-width</code></td>

          <td><code>200px</code></td>

        <td><p>Width of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-wp-min-width</code></td>

          <td><code>0</code></td>

        <td><p>Min width of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-wp-min-height</code></td>

          <td><code>0</code></td>

        <td><p>Minimum height of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-wp-max-height</code></td>

          <td><code>90%</code></td>

        <td><p>Maximum height of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-wp-border</code></td>

          <td><code>2px solid #ccc</code></td>

        <td><p>Border of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-wp-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-wp-text-color</code></td>

          <td><code>$text-wp-color</code></td>

        <td><p>Text color of the popover content</p>
</td>
      </tr>

      <tr>
        <td><code>$popover-wp-background</code></td>

          <td><code>$background-wp-color</code></td>

        <td><p>Background of the popover content</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

