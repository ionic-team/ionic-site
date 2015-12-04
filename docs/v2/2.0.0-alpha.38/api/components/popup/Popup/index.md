---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.38"
versionHref: "/docs/v2/2.0.0-alpha.38"
path: ""
category: api
id: "{{Popup | slugify}}"
title: "Popup"
header_sub_title: "Class in module "
doc: "Popup"
docType: "class"
---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/popup/popup.ts#L8'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/popup/popup.ts#L8'>
    Improve this doc
  </a>

  <!-- TODO(drewrygh, perrygovier): render this block in the correct location, markup identical to component docs -->

</div>




<h1 class="api-title">


Popup






</h1>






<h2>Description</h2>

<p>The Ionic Popup service allows the creation of popup windows that require the user to respond in order to continue.</p>
<p>The popup service has support for more flexible versions of the built in <code>alert()</code>, <code>prompt()</code>, and <code>confirm()</code> functions that users are used to, in addition to allowing popups with completely custom content and look.</p>

<h2>Usage</h2>


<pre><code class="lang-ts">class myApp {

  constructor(popup: Popup) {
    this.popup = popup;
  }

  doAlert() {
    this.popup.alert({
      title: &quot;New Friend!&quot;,
      template: &quot;Your friend, Obi wan Kenobi, just accepted your friend request!&quot;,
      cssClass: &#39;my-alert&#39;
    }).then(() =&gt; {
      console.log(&#39;Alert closed&#39;);
    });
  }

  doPrompt() {
    this.popup.prompt({
      title: &quot;New Album&quot;,
      template: &quot;Enter a name for this new album you&#39;re so keen on adding&quot;,
      inputPlaceholder: &quot;Title&quot;,
      okText: &quot;Save&quot;,
      okType: &quot;secondary&quot;
    }).then((name) =&gt; {
      console.log(&#39;Name entered:&#39;, name);
    }, () =&gt; {
      console.error(&#39;Prompt closed&#39;);
    });
  }

  doConfirm() {
    this.popup.confirm({
      title: &quot;Use this lightsaber?&quot;,
      subTitle: &quot;You can&#39;t exchange lightsabers&quot;,
      template: &quot;Do you agree to use this lightsaber to do good across the intergalactic galaxy?&quot;,
      cancelText: &quot;Disagree&quot;,
      okText: &quot;Agree&quot;
    }).then((result, ev) =&gt; {
      console.log(&#39;Confirmed!&#39;, result);
    }, () =&gt; {
      console.error(&#39;Not confirmed!&#39;);
    });
  }
}
</code></pre>







<h2>Methods</h2>

<div id="open"></div>

<h3>
<code>open(opts)</code>

</h3>

TODO



<table class="table" style="margin:0;">
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
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A promise




<div id="alert"></div>

<h3>
<code>alert(opts)</code>

</h3>

Show a simple alert popup with a message and one button
that the user can tap to close the popup.




<table class="table" style="margin:0;">
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
        <p>The options for showing the alert, of the form:</p>
<pre><code>{
  title: &#39;&#39;, // String. The title of the popup.
  cssClass: &#39;&#39;, // String (optional). The custom CSS class name.
  subTitle: &#39;&#39;, // String (optional). The sub-title of the popup.
  template: &#39;&#39;, // String (optional). The html template to place in the popup body.
  okText: &#39;&#39;, // String (default: &#39;OK&#39;). The text of the OK button.
  okType: &#39;&#39;, // String (default: &#39;&#39;). The type of the OK button.
}
</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A promise which is resolved when the popup is closed.




<div id="confirm"></div>

<h3>
<code>confirm(opts)</code>

</h3>

Show a simple confirm popup with a message, Cancel and OK button.

Resolves the promise with true if the user presses the OK button, and false if the user presses the Cancel button.




<table class="table" style="margin:0;">
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
        <p>The options for showing the confirm, of the form:</p>
<pre><code>{
  title: &#39;&#39;, // String. The title of the popup.
  cssClass: &#39;&#39;, // String (optional). The custom CSS class name.
  subTitle: &#39;&#39;, // String (optional). The sub-title of the popup.
  template: &#39;&#39;, // String (optional). The html template to place in the popup body.
  cancelText: &#39;&#39;, // String (default: &#39;Cancel&#39;). The text of the Cancel button.
  cancelType: &#39;&#39;, // String (default: &#39;&#39;). The type of the Cancel button.
  okText: &#39;&#39;, // String (default: &#39;OK&#39;). The text of the OK button.
  okType: &#39;&#39;, // String (default: &#39;&#39;). The type of the OK button.
}
</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A promise which is resolved when the popup is closed.




<div id="prompt"></div>

<h3>
<code>prompt(opts)</code>

</h3>

Show a simple prompt popup with a message, input, Cancel and OK button.

Resolves the promise with the value of the input if the user presses OK, and with undefined if the user presses Cancel.




<table class="table" style="margin:0;">
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
        <p>The options for showing the prompt, of the form:</p>
<pre><code>{
  title: &#39;&#39;, // String. The title of the popup.
  cssClass: &#39;&#39;, // String (optional). The custom CSS class name.
  subTitle: &#39;&#39;, // String (optional). The sub-title of the popup.
  template: &#39;&#39;, // String (optional). The html template to place in the popup body.
  inputType: // String (default: &#39;text&#39;). The type of input to use.
  inputPlaceholder: // String (default: &#39;&#39;). A placeholder to use for the input.
  cancelText: &#39;&#39;, // String (default: &#39;Cancel&#39;). The text of the Cancel button.
  cancelType: &#39;&#39;, // String (default: &#39;&#39;). The type of the Cancel button.
  okText: &#39;&#39;, // String (default: &#39;OK&#39;). The text of the OK button.
  okType: &#39;&#39;, // String (default: &#39;&#39;). The type of the OK button.
}
</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A promise which is resolved when the popup is closed.




<div id="get"></div>

<h3>
<code>get(handle)</code>

</h3>

TODO



<table class="table" style="margin:0;">
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
        handle
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>TODO</code> TODO


<!-- end content block -->


<!-- end body block -->


