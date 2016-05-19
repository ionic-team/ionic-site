---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "toast"
title: "Toast"
header_sub_title: "Ionic API Documentation"
doc: "Toast"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/toast/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="toast" href="#toast"></a>

Toast






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/components/toast/toast.ts#L10">
Improve this doc
</a>






<p>A Toast is a subtle notification that appears at the bottom of the
screen. It can be used to provide feedback about an operation or to
display a system message. The toast appears on top of the app&#39;s content,
and can be dismissed by the app to resume user interaction with
the app. It includes a backdrop, which can optionally be clicked to
dismiss the toast.</p>
<h3 id="creating">Creating</h3>
<p>All of the toast options should be passed in the first argument of
the create method: <code>Toast.create(opts)</code>. The message to display should be
passed in the <code>message</code> property. The <code>showCloseButton</code> option can be set to
true in order to display a close button on the toast. See the <a href="#create">create</a>
method below for all available options.</p>
<h3 id="dismissing">Dismissing</h3>
<p>The toast can be dismissed automatically after a specific amount of time
by passing the number of milliseconds to display it in the <code>duration</code> of
the toast options. It can also be dismissed by clicking on the backdrop,
unless <code>enableBackdropDismiss</code> is set to <code>false</code> upon creation. If <code>showCloseButton</code>
is set to true, then the close button will dismiss the toast. To dismiss
the toast after creation, call the <code>dismiss()</code> method on the Toast instance.
The <code>onDismiss</code> function can be called to perform an action after the toast
is dismissed.</p>

<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">constructor(nav: NavController) {
  this.nav = nav;
}

presentToast() {
  let toast = Toast.create({
    message: &#39;User was added successfully&#39;,
    duration: 3000
  });

  toast.onDismiss(() =&gt; {
    console.log(&#39;Dismissed toast&#39;);
  });

  this.nav.present(toast);
}
</code></pre>




<!-- @property tags -->
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<div id="create"></div>
<h3><a class="anchor" name="create" href="#create"></a><code>create(opts)</code>
  
</h3>

Toast options

 | Property              | Type      | Default         | Description                                                                                                   |
 |-----------------------|-----------|-----------------|---------------------------------------------------------------------------------------------------------------|
 | message               | `string`  | -               | The message for the toast. Long strings will wrap and the toast container will expand.                        |
 | duration              | `number`  | -               | How many milliseconds to wait before hiding the toast. By default, it will show until `dismiss()` is called.  |
 | cssClass              | `string`  | -               | Any additional class for custom styles.                                                                       |
 | showCloseButton       | `boolean` | false           | Whether or not to show a button to close the toast.                                                           |
 | closeButtonText       | `string`  | "Close"         | Text to display in the close button.                                                                          |
 | enableBackdropDismiss | `boolean` | true            | Whether the toast should be dismissed by tapping the backdrop.                                                |
 | dismissOnPageChange   | `boolean` | false           | Whether to dismiss the toast when navigating to a new page.                                                   |



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
        
  <code>object</code>
      </td>
      <td>
        <p>Toast options. See the above table for available options.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="setMessage"></div>

<h3>
<a class="anchor" name="setMessage" href="#setMessage"></a>
<code>setMessage(message)</code>
  

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
        message
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Toast message content</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






<!-- related link --><!-- end content block -->


<!-- end body block -->

