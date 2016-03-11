---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "alert"
title: "Alert"
header_sub_title: "Class in module "
doc: "Alert"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/alert/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="alert" href="#alert"></a>

Alert






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/alert/alert.ts#L8">
Improve this doc
</a>






<p>An Alert is a dialog that presents users with information or collects
information from the user using inputs. An alert appears on top
of the app&#39;s content, and must be manually dismissed by the user before
they can resume interaction with the app. It can also optionally have a
<code>title</code>, <code>subTitle</code> and <code>message</code>.</p>
<p>You can pass all of the alert&#39;s options in the first argument of
the create method: <code>Alert.create(opts)</code>. Otherwise the alert&#39;s instance
has methods to add options, such as <code>setTitle()</code> or <code>addButton()</code>.</p>
<h3 id="alert-buttons">Alert Buttons</h3>
<p>In the array of <code>buttons</code>, each button includes properties for its <code>text</code>,
and optionally a <code>handler</code>. If a handler returns <code>false</code> then the alert
will not automatically be dismissed when the button is clicked. All
buttons will show  up in the order they have been added to the <code>buttons</code>
array, from left to right. Note: The right most button (the last one in
the array) is the main button.</p>
<p>Optionally, a <code>role</code> property can be added to a button, such as <code>cancel</code>.
If a <code>cancel</code> role is on one of the buttons, then if the alert is
dismissed by tapping the backdrop, then it will fire the handler from
the button with a cancel role.</p>
<h3 id="alert-inputs">Alert Inputs</h3>
<p>Alerts can also include several different inputs whose data can be passed
back to the app. Inputs can be used as a simple way to prompt users for
information. Radios, checkboxes and text inputs are all accepted, but they
cannot be mixed. For example, an alert could have all radio button inputs,
or all checkbox inputs, but the same alert cannot mix radio and checkbox
inputs. Do note however, different types of &quot;text&quot;&quot; inputs can be mixed,
such as <code>url</code>, <code>email</code>, <code>text</code>, etc. If you require a complex form UI
which doesn&#39;t fit within the guidelines of an alert then we recommend
building the form within a modal instead.</p>

<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">constructor(nav: NavController) {
  this.nav = nav;
}

presentAlert() {
  let alert = Alert.create({
    title: &#39;Low battery&#39;,
    subTitle: &#39;10% of battery remaining&#39;,
    buttons: [&#39;Dismiss&#39;]
  });
  this.nav.present(alert);
}

presentConfirm() {
  let alert = Alert.create({
    title: &#39;Confirm purchase&#39;,
    message: &#39;Do you want to buy this book?&#39;,
    buttons: [
      {
        text: &#39;Cancel&#39;,
        role: &#39;cancel&#39;,
        handler: () =&gt; {
          console.log(&#39;Cancel clicked&#39;);
        }
      },
      {
        text: &#39;Buy&#39;,
        handler: () =&gt; {
          console.log(&#39;Buy clicked&#39;);
        }
      }
    ]
  });
  this.nav.present(alert);
}

presentPrompt() {
  let alert = Alert.create({
    title: &#39;Login&#39;,
    inputs: [
      {
        name: &#39;username&#39;,
        placeholder: &#39;Username&#39;
      },
      {
        name: &#39;password&#39;,
        placeholder: &#39;Password&#39;,
        type: &#39;password&#39;
      }
    ],
    buttons: [
      {
        text: &#39;Cancel&#39;,
        role: &#39;cancel&#39;,
        handler: data =&gt; {
          console.log(&#39;Cancel clicked&#39;);
        }
      },
      {
        text: &#39;Login&#39;,
        handler: data =&gt; {
          if (User.isValid(data.username, data.password)) {
            // logged in!
          } else {
            // invalid login
            return false;
          }
        }
      }
    ]
  });
  this.nav.present(alert);
}
</code></pre>




<!-- @property tags -->
<h2><a class="anchor" name="static-methods" href="#static-methods"></a>Static Methods</h2>
<div id="create"></div>
<h3><a class="anchor" name="create" href="#create"></a><code>create(opts)</code>
  
</h3>

Alert options

 | Property              | Type      | Description                                                               |
 |-----------------------|-----------|---------------------------------------------------------------------------|
 | title                 | `string`  | The string for the alert (optional)                                       |
 | subTitle              | `string`  | The subtitle for the alert (optional)                                     |
 | message               | `string`  | The message for the alert (optional)                                      |
 | cssClass              | `string`  | Any additional class for the alert (optional)                             |
 | inputs                | `array`   | An array of inputs for the alert. See input options. (optional)           |
 | buttons               | `array`   | An array of buttons for the alert. See buttons options. (optional)        |
 | enableBackdropDismiss | `boolean` | Wheather the alert should be dismissed by tapping the backdrop (optional) |


 Input options

 | Property    | Type      | Description                                                     |
 |-------------|-----------|-----------------------------------------------------------------|
 | type        | `string`  | The type the input should be, text, tel, number, etc (optional) |
 | name        | `string`  | The name for the input (optional)                               |
 | placeHolder | `string`  | The input's placeholder (optional)                              |
 | value       | `string`  | The input's value (optional)                                    |
 | label       | `string`  | The input's label (optional)                                    |
 | checked     | `boolean` | Whether or not the input is checked or not (optional)           |
 | id          | `string`  | The input's id (optional)                                       |

 Button options

 | Property | Type     | Description                                                    |
 |----------|----------|----------------------------------------------------------------|
 | text     | `string` | The buttons displayed text                                     |
 | handler  | `any`    | Expression that should be evaluated when the button is pressed |
 | cssClass | `string` | An additional CSS class for the button                         |
 | role     | `string` | The buttons role, null or `cancel`                             |



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
        <p>Alert. See the tabel above</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-methods" href="#instance-methods"></a>Instance Methods</h2>

<div id="setTitle"></div>

<h3>
<a class="anchor" name="setTitle" href="#setTitle"></a>
<code>setTitle(title)</code>
  

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
        title
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Alert title</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="setSubTitle"></div>

<h3>
<a class="anchor" name="setSubTitle" href="#setSubTitle"></a>
<code>setSubTitle(subTitle)</code>
  

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
        subTitle
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Alert subtitle</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








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
        <p>Alert message content</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="addInput"></div>

<h3>
<a class="anchor" name="addInput" href="#addInput"></a>
<code>addInput(input)</code>
  

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
        input
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Alert input</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="addButton"></div>

<h3>
<a class="anchor" name="addButton" href="#addButton"></a>
<code>addButton(button)</code>
  

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
        button
        
        
      </td>
      <td>
        
  <code>any</code>
      </td>
      <td>
        <p>Alert button</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="setCssClass"></div>

<h3>
<a class="anchor" name="setCssClass" href="#setCssClass"></a>
<code>setCssClass(cssClass)</code>
  

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
        cssClass
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>CSS class name to add to the alert&#39;s outer wrapper</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






<!-- related link --><!-- end content block -->


<!-- end body block -->

