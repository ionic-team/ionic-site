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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/toast/toast.ts#L13">
Improve this doc
</a>






<p>An Toast is a small message that appears in the lower part of the screen.
It&#39;s useful for displaying success messages, error messages, etc.</p>

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
  this.nav.present(toast);
}
</code></pre>




<!-- @property tags -->
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<div id="create"></div>
<h3><a class="anchor" name="create" href="#create"></a><code>create(ToastOptions)</code>
  
</h3>

Toast options

 | Property              | Type      | Description                                                                   |
 |-----------------------|-----------|---------------------------------------------------------------------------    |
 | message               | `string`  | The message for the toast. Long strings will wrap and the toast container will expand. **(required)**                                                     |
 | duration              | `number`  | The amount of time in milliseconds the toast should appear *(optional)*         |
 | cssClass              | `string`  | Any additional class for the toast *(optional)*                                 |
 | showCloseButton       | `boolean` | Whether or not to show an optional button to close the toast. *(optional)*      |
 | closeButtonText       | `string`  | Text to display in the close button. *(optional)*                               |
 | enableBackdropDismiss | `boolean` | Whether the the toast should be dismissed by tapping the backdrop *(optional)*  |



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
        ToastOptions
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Toast. See the above table for available options.</p>

        
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

