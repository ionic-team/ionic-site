---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.11"
versionHref: "/docs/v2/2.0.0-beta-11"
path: ""
category: api
id: "toastcontroller"
title: "ToastController"
header_sub_title: "Ionic API Documentation"
doc: "ToastController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/toast/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="toast-controller" href="#toast-controller"></a>

ToastController





</h1>

<a class="improve-v2-docs" href="https://github.com/driftyco/ionic/edit/master/src/components/toast/toast.ts#L75">
Improve this doc
</a>






<p>A Toast is a subtle notification commonly used in modern applications.
It can be used to provide feedback about an operation or to
display a system message. The toast appears on top of the app&#39;s content,
and can be dismissed by the app to resume user interaction with
the app.</p>
<h3 id="creating">Creating</h3>
<p>All of the toast options should be passed in the first argument of
the create method: <code>create(opts)</code>. The message to display should be
passed in the <code>message</code> property. The <code>showCloseButton</code> option can be set to
true in order to display a close button on the toast. See the <a href="#create">create</a>
method below for all available options.</p>
<h3 id="positioning">Positioning</h3>
<p>Toasts can be positioned at the top, bottom or middle of the
view port. The position can be passed to the <code>Toast.create(opts)</code> method.
The position option is a string, and the values accepted are <code>top</code>, <code>bottom</code> and <code>middle</code>.
If the position is not specified, the toast will be displayed at the bottom of the view port.</p>
<h3 id="dismissing">Dismissing</h3>
<p>The toast can be dismissed automatically after a specific amount of time
by passing the number of milliseconds to display it in the <code>duration</code> of
the toast options. If <code>showCloseButton</code> is set to true, then the close button
will dismiss the toast. To dismiss the toast after creation, call the <code>dismiss()</code>
method on the Toast instance. The <code>onDidDismiss</code> function can be called to perform an action after the toast
is dismissed.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">constructor(private toastCtrl: ToastController) {

}

presentToast() {
  let toast = this.toastCtrl.create({
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

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="create"></div>

<h3>
<a class="anchor" name="create" href="#create"></a>
<code>create(opts)</code>
  

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
        <p>Toast options. See the above table for available options.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
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
<td>Any additional class for custom styles.</td>
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





<!-- related link --><!-- end content block -->


<!-- end body block -->

