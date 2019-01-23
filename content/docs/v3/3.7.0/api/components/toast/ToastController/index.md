---
layout: "fluid/docs_base"
version: "3.7.0"
versionHref: "/docs/v3/3.7.0"
path: ""
category: api
id: "toastcontroller"
title: "ToastController"
header_sub_title: "Ionic API Documentation"
doc: "ToastController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/toast/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="toast-controller" href="#toast-controller"></a>

ToastController





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/toast/toast-controller.ts#L5">
Improve this doc
</a>






<p>A Toast is a subtle notification commonly used in modern applications.
It can be used to provide feedback about an operation or to
display a system message. The toast appears on top of the app&#39;s content,
and can be dismissed by the app to resume user interaction with
the app.</p>
<h3><a class="anchor" name="creating" href="#creating">Creating</a></h3>

<p>All of the toast options should be passed in the first argument of
the create method: <code>create(opts)</code>. The message to display should be
passed in the <code>message</code> property. The <code>showCloseButton</code> option can be set to
true in order to display a close button on the toast. See the <a href="#create">create</a>
method below for all available options.</p>
<h3><a class="anchor" name="positioning" href="#positioning">Positioning</a></h3>

<p>Toasts can be positioned at the top, bottom or middle of the
view port. The position can be passed to the <code>Toast.create(opts)</code> method.
The position option is a string, and the values accepted are <code>top</code>, <code>bottom</code> and <code>middle</code>.
If the position is not specified, the toast will be displayed at the bottom of the view port.</p>
<h3><a class="anchor" name="dismissing" href="#dismissing">Dismissing</a></h3>

<p>The toast can be dismissed automatically after a specific amount of time
by passing the number of milliseconds to display it in the <code>duration</code> of
the toast options. If <code>showCloseButton</code> is set to true, then the close button
will dismiss the toast. To dismiss the toast after creation, call the <code>dismiss()</code>
method on the Toast instance. The <code>onDidDismiss</code> function can be called to perform an action after the toast
is dismissed.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-ts">import { ToastController } from &#39;ionic-angular&#39;;

constructor(public toastCtrl: ToastController) { }

presentToast() {
  const toast = this.toastCtrl.create({
    message: &#39;User was added successfully&#39;,
    duration: 3000,
    position: &#39;top&#39;
  });

  toast.onDidDismiss(() =&gt; {
    console.log(&#39;Dismissed toast&#39;);
  });

  toast.present();
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="config"></div>

<h3>
<a class="anchor" name="config" href="#config">
<code>config</code>


</a>
</h3>











<div id="create"></div>

<h3>
<a class="anchor" name="create" href="#create">
<code>create(opts)</code>


</a>
</h3>

Create a new toast component. See options below


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
        opts


      </td>
      <td>

  <code>ToastOptions</code>
      </td>
      <td>
        <p>Toast options. See the below table for available options.</p>


      </td>
    </tr>

  </tbody>
</table>






<h2><a class="anchor" name="advanced" href="#advanced">Advanced</a></h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>message</td>
<td><code>string</code></td>
<td>-</td>
<td>The message for the toast. Long strings will wrap and the toast container will expand.</td>
</tr>
<tr>
<td>duration</td>
<td><code>number</code></td>
<td>-</td>
<td>How many milliseconds to wait before hiding the toast. By default, it will show until <code>dismiss()</code> is called.</td>
</tr>
<tr>
<td>position</td>
<td><code>string</code></td>
<td>&quot;bottom&quot;</td>
<td>The position of the toast on the screen. Accepted values: &quot;top&quot;, &quot;middle&quot;, &quot;bottom&quot;.</td>
</tr>
<tr>
<td>cssClass</td>
<td><code>string</code></td>
<td>-</td>
<td>Additional classes for custom styles, separated by spaces.</td>
</tr>
<tr>
<td>showCloseButton</td>
<td><code>boolean</code></td>
<td>false</td>
<td>Whether or not to show a button to close the toast.</td>
</tr>
<tr>
<td>closeButtonText</td>
<td><code>string</code></td>
<td>&quot;Close&quot;</td>
<td>Text to display in the close button.</td>
</tr>
<tr>
<td>dismissOnPageChange</td>
<td><code>boolean</code></td>
<td>false</td>
<td>Whether to dismiss the toast when navigating to a new page.</td>
</tr>
</tbody>
</table>



  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables">Sass Variables</a></h2>
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
        <td><code>$toast-width</code></td>

          <td><code>100%</code></td>

        <td><p>Width of the toast</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-max-width</code></td>

          <td><code>700px</code></td>

        <td><p>Max width of the toast</p>
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
        <td><code>$toast-ios-background</code></td>

          <td><code>rgba(0, 0, 0, .9)</code></td>

        <td><p>Background of the toast wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-ios-border-radius</code></td>

          <td><code>.65rem</code></td>

        <td><p>Border radius of the toast wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-ios-title-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Color of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-ios-title-font-size</code></td>

          <td><code>1.4rem</code></td>

        <td><p>Font size of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-ios-title-padding-top</code></td>

          <td><code>1.5rem</code></td>

        <td><p>Padding top of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-ios-title-padding-end</code></td>

          <td><code>$toast-ios-title-padding-top</code></td>

        <td><p>Padding end of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-ios-title-padding-bottom</code></td>

          <td><code>$toast-ios-title-padding-top</code></td>

        <td><p>Padding bottom of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-ios-title-padding-start</code></td>

          <td><code>$toast-ios-title-padding-end</code></td>

        <td><p>Padding start of the toast title</p>
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
        <td><code>$toast-md-background</code></td>

          <td><code>#333</code></td>

        <td><p>Background of the toast wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-md-title-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Color of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-md-title-font-size</code></td>

          <td><code>1.5rem</code></td>

        <td><p>Font size of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-md-title-padding-top</code></td>

          <td><code>19px</code></td>

        <td><p>Padding top of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-md-title-padding-end</code></td>

          <td><code>16px</code></td>

        <td><p>Padding end of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-md-title-padding-bottom</code></td>

          <td><code>17px</code></td>

        <td><p>Padding bottom of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-md-title-padding-start</code></td>

          <td><code>$toast-md-title-padding-end</code></td>

        <td><p>Padding start of the toast title</p>
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
        <td><code>$toast-wp-background</code></td>

          <td><code>rgba(0, 0, 0, 1)</code></td>

        <td><p>Background of the toast wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-wp-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the toast wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-wp-button-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Color of the toast button</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-wp-title-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Color of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-wp-title-font-size</code></td>

          <td><code>1.4rem</code></td>

        <td><p>Font size of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-wp-title-padding-top</code></td>

          <td><code>1.5rem</code></td>

        <td><p>Padding top of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-wp-title-padding-end</code></td>

          <td><code>$toast-wp-title-padding-top</code></td>

        <td><p>Padding end of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-wp-title-padding-bottom</code></td>

          <td><code>$toast-wp-title-padding-top</code></td>

        <td><p>Padding bottom of the toast title</p>
</td>
      </tr>

      <tr>
        <td><code>$toast-wp-title-padding-start</code></td>

          <td><code>$toast-wp-title-padding-end</code></td>

        <td><p>Padding start of the toast title</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

