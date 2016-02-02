---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.54"
versionHref: "/docs/v2/2.0.0-alpha.54"
path: ""
category: api
id: "alert"
title: "Alert"
header_sub_title: "Class in module "
doc: "Alert"
docType: "class"

---









<h1 class="api-title">


Alert






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/alert/alert.ts#L7'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>An Alert is a dialog that presents users with either information, or used
to receive information from the user using inputs. An alert appears on top
of the app&#39;s content, and must be manually dismissed by the user before
they can resume interaction with the app.</p>
<p>An alert is created from an array of <code>buttons</code> and optionally an array of
<code>inputs</code>. Each button includes properties for its <code>text</code>, and optionally a
<code>handler</code>. If a handler returns <code>false</code> then the alert will not be dismissed.
An alert can also optionally have a <code>title</code>, <code>subTitle</code> and <code>message</code>.</p>
<p>All buttons will show up in the order they have been added to the <code>buttons</code>
array, from left to right. Note: The right most button (the last one in the
array) is the main button.</p>
<p>Optionally, a <code>role</code> property can be added to a button, such as <code>cancel</code>.
If a <code>cancel</code> role is on one of the buttons, then if the alert is dismissed
by tapping the backdrop, then it will fire the handler from the button
with a cancel role.</p>
<p>Alerts can also include inputs whos data can be passed back to the app.
Inputs can be used to prompt users for information.</p>
<p>Its shorthand is to add all the alert&#39;s options from within the
<code>Alert.create(opts)</code> first argument. Otherwise the alert&#39;s instance
has methods to add options, such as <code>setTitle()</code> or <code>addButton()</code>.</p>

<!-- @usage tag -->

<h2>Usage</h2>

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


<!-- methods on the class -->

<h2>Methods</h2>

<div id="setTitle"></div>

<h3>
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
        
  <code>object</code>
      </td>
      <td>
        <p>Alert button</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="setCssClass"></div>

<h3>
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

