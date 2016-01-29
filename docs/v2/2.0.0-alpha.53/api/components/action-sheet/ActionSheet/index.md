---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.53"
versionHref: "/docs/v2/2.0.0-alpha.53"
path: ""
category: api
id: "actionsheet"
title: "ActionSheet"
header_sub_title: "Class in module "
doc: "ActionSheet"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/action-sheet/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">


ActionSheet






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/action-sheet/action-sheet.ts#L7'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p>An Action Sheet is a dialog that lets the user choose from a set of
options. It appears on top of the app&#39;s content, and must be manually
dismissed by the user before they can resume interaction with the app.
Dangerous (destructive) options are made obvious. There are easy
ways to cancel out of the action sheet, such as tapping the backdrop or
hitting the escape key on desktop.</p>
<p>An action sheet is created from an array of <code>buttons</code>, with each button
including properties for its <code>text</code>, and optionally a <code>style</code> and <code>handler</code>.
If a handler returns <code>false</code> then the action sheet will not be dismissed. An
action sheet can also optionally have a <code>title</code> and a <code>subTitle</code>.</p>
<p>A button&#39;s <code>style</code> property can either be <code>destructive</code> or <code>cancel</code>. Buttons
without a style property will have a default style for its platform. Buttons
with the <code>cancel</code> style will always load as the bottom button, no matter where
it shows up in the array. All other buttons will show up in the order they
have been added to the <code>buttons</code> array. Note: We recommend that <code>destructive</code>
buttons show be the first button in the array, making it the button on top.</p>
<p>Its shorthand is to add all the action sheet&#39;s options from within the
<code>ActionSheet.create(opts)</code> first argument. Otherwise the action sheet&#39;s
instance has methods to add options, such as <code>setTitle()</code> or <code>addButton()</code>.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">constructor(nav: NavController) {
  this.nav = nav;
}

presentActionSheet() {
  let actionSheet = ActionSheet.create({
    title: &#39;Modify your album&#39;,
    buttons: [
      {
        text: &#39;Destructive&#39;,
        style: &#39;destructive&#39;,
        handler: () =&gt; {
          console.log(&#39;Destructive clicked&#39;);
        }
      },
      {
        text: &#39;Archive&#39;,
        handler: () =&gt; {
          console.log(&#39;Archive clicked&#39;);
        }
      },
      {
        text: &#39;Cancel&#39;,
        style: &#39;cancel&#39;,
        handler: () =&gt; {
          console.log(&#39;Cancel clicked&#39;);
        }
      }
    ]
  });

  this.nav.present(actionSheet);
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
        <p>Action sheet title</p>


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
        <p>Action sheet subtitle</p>


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
        <p>Action sheet button</p>


      </td>
    </tr>

  </tbody>
</table>






<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#action-sheets'>ActionSheet Component Docs</a><!-- end content block -->


<!-- end body block -->
