---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.1"
versionHref: "/docs/v2/2.0.0-rc.1"
path: ""
category: api
id: "alertcontroller"
title: "AlertController"
header_sub_title: "Ionic API Documentation"
doc: "AlertController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/alert/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="alert-controller" href="#alert-controller"></a>

AlertController





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/alert/alert.ts#L86">
Improve this doc
</a>






<p>An Alert is a dialog that presents users with information or collects
information from the user using inputs. An alert appears on top
of the app&#39;s content, and must be manually dismissed by the user before
they can resume interaction with the app. It can also optionally have a
<code>title</code>, <code>subTitle</code> and <code>message</code>.</p>
<p>You can pass all of the alert&#39;s options in the first argument of
the create method: <code>create(opts)</code>. Otherwise the alert&#39;s instance
has methods to add options, such as <code>setTitle()</code> or <code>addButton()</code>.</p>
<h3 id="alert-buttons">Alert Buttons</h3>
<p>In the array of <code>buttons</code>, each button includes properties for its <code>text</code>,
and optionally a <code>handler</code>. If a handler returns <code>false</code> then the alert
will not automatically be dismissed when the button is clicked. All
buttons will show up in the order they have been added to the <code>buttons</code>
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

<pre><code class="lang-ts">constructor(private alertCtrl: AlertController) {

}

presentAlert() {
  let alert = this.alertCtrl.create({
    title: &#39;Low battery&#39;,
    subTitle: &#39;10% of battery remaining&#39;,
    buttons: [&#39;Dismiss&#39;]
  });
  alert.present();
}

presentConfirm() {
  let alert = this.alertCtrl.create({
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
  alert.present();
}

presentPrompt() {
  let alert = this.alertCtrl.create({
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
  alert.present();
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

Display an alert with a title, inputs, and buttons


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
        
  <code>AlertOptions</code>
      </td>
      <td>
        <p>Alert. See the table below</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>Alert options</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td><code>string</code></td>
<td>The title for the alert.</td>
</tr>
<tr>
<td>subTitle</td>
<td><code>string</code></td>
<td>The subtitle for the alert.</td>
</tr>
<tr>
<td>message</td>
<td><code>string</code></td>
<td>The message for the alert.</td>
</tr>
<tr>
<td>cssClass</td>
<td><code>string</code></td>
<td>Additional classes for custom styles, separated by spaces.</td>
</tr>
<tr>
<td>inputs</td>
<td><code>array</code></td>
<td>An array of inputs for the alert. See input options.</td>
</tr>
<tr>
<td>buttons</td>
<td><code>array</code></td>
<td>An array of buttons for the alert. See buttons options.</td>
</tr>
<tr>
<td>enableBackdropDismiss</td>
<td><code>boolean</code></td>
<td>Whether the alert should be dismissed by tapping the backdrop.</td>
</tr>
</tbody>
</table>
<p> Input options</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td><code>string</code></td>
<td>The type the input should be: text, tel, number, etc.</td>
</tr>
<tr>
<td>name</td>
<td><code>string</code></td>
<td>The name for the input.</td>
</tr>
<tr>
<td>placeholder</td>
<td><code>string</code></td>
<td>The input&#39;s placeholder (for textual/numeric inputs)</td>
</tr>
<tr>
<td>value</td>
<td><code>string</code></td>
<td>The input&#39;s value.</td>
</tr>
<tr>
<td>label</td>
<td><code>string</code></td>
<td>The input&#39;s label (only for radio/checkbox inputs)</td>
</tr>
<tr>
<td>checked</td>
<td><code>boolean</code></td>
<td>Whether or not the input is checked.</td>
</tr>
<tr>
<td>id</td>
<td><code>string</code></td>
<td>The input&#39;s id.</td>
</tr>
</tbody>
</table>
<p> Button options</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td><code>string</code></td>
<td>The buttons displayed text.</td>
</tr>
<tr>
<td>handler</td>
<td><code>any</code></td>
<td>Expression that should be evaluated when the button is pressed.</td>
</tr>
<tr>
<td>cssClass</td>
<td><code>string</code></td>
<td>An additional CSS class for the button.</td>
</tr>
<tr>
<td>role</td>
<td><code>string</code></td>
<td>The buttons role, null or <code>cancel</code>.</td>
</tr>
</tbody>
</table>
<h3 id="dismissing-and-async-navigation">Dismissing And Async Navigation</h3>
<p>After an alert has been dismissed, the app may need to also transition
to another page depending on the handler&#39;s logic. However, because multiple
transitions were fired at roughly the same time, it&#39;s difficult for the
nav controller to cleanly animate multiple transitions that may
have been kicked off asynchronously. This is further described in the
<a href="../../nav/NavController"><code>Nav Transition Promises</code></a> section. For alerts,
this means it&#39;s best to wait for the alert to finish its transition
out before starting a new transition on the same nav controller.</p>
<p>In the example below, after the alert button has been clicked, its handler
waits on async operation to complete, <em>then</em> it uses <code>pop</code> to navigate
back a page in the same stack. The potential problem is that the async operation
may have been completed before the alert has even finished its transition
out. In this case, it&#39;s best to ensure the alert has finished its transition
out first, <em>then</em> start the next transition.</p>
<pre><code class="lang-ts">let alert = this.alertCtrl.create({
  title: &#39;Hello&#39;,
  buttons: [{
    text: &#39;Ok&#39;,
    handler: () =&gt; {
      // user has clicked the alert button
      // begin the alert&#39;s dismiss transition
      let navTransition = alert.dismiss();

      // start some async method
      someAsyncOperation().then(() =&gt; {
        // once the async operation has completed
        // then run the next nav transition after the
        // first transition has finished animating out

        navTransition.then(() =&gt; {
          this.nav.pop();
        });
      });
      return false;
    }
  }]
});

alert.present();
</code></pre>
<p>It&#39;s important to note that the handler returns <code>false</code>. A feature of
button handlers is that they automatically dismiss the alert when their button
was clicked, however, we&#39;ll need more control regarding the transition. Because
the handler returns <code>false</code>, then the alert does not automatically dismiss
itself. Instead, you now have complete control of when the alert has finished
transitioning, and the ability to wait for the alert to finish transitioning
out before starting a new transition.</p>





<!-- related link --><!-- end content block -->


<!-- end body block -->

