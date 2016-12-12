---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.1"
versionHref: "/docs/v2/2.0.0-rc.1"
path: ""
category: api
id: "actionsheetcontroller"
title: "ActionSheetController"
header_sub_title: "Ionic API Documentation"
doc: "ActionSheetController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/src/action-sheet/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="action-sheet-controller" href="#action-sheet-controller"></a>

ActionSheetController





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/action-sheet/action-sheet.ts#L63">
Improve this doc
</a>






<p>An Action Sheet is a dialog that lets the user choose from a set of
options. It appears on top of the app&#39;s content, and must be manually
dismissed by the user before they can resume interaction with the app.
Dangerous (destructive) options are made obvious in <code>ios</code> mode. There are easy
ways to cancel out of the action sheet, such as tapping the backdrop or
hitting the escape key on desktop.</p>
<p>An action sheet is created from an array of <code>buttons</code>, with each button
including properties for its <code>text</code>, and optionally a <code>handler</code> and <code>role</code>.
If a handler returns <code>false</code> then the action sheet will not be dismissed. An
action sheet can also optionally have a <code>title</code>, <code>subTitle</code> and an <code>icon</code>.</p>
<p>A button&#39;s <code>role</code> property can either be <code>destructive</code> or <code>cancel</code>. Buttons
without a role property will have the default look for the platform. Buttons
with the <code>cancel</code> role will always load as the bottom button, no matter where
they are in the array. All other buttons will be displayed in the order they
have been added to the <code>buttons</code> array. Note: We recommend that <code>destructive</code>
buttons are always the first button in the array, making them the top button.
Additionally, if the action sheet is dismissed by tapping the backdrop, then
it will fire the handler from the button with the cancel role.</p>
<p>You can pass all of the action sheet&#39;s options in the first argument of
the create method: <code>ActionSheet.create(opts)</code>. Otherwise the action sheet&#39;s
instance has methods to add options, like <code>setTitle()</code> or <code>addButton()</code>.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">import { ActionSheetController } from &#39;ionic-angular&#39;

export class MyClass{

 constructor(public actionSheetCtrl: ActionSheetController) {}

 presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: &#39;Modify your album&#39;,
     buttons: [
       {
         text: &#39;Destructive&#39;,
         role: &#39;destructive&#39;,
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
         role: &#39;cancel&#39;,
         handler: () =&gt; {
           console.log(&#39;Cancel clicked&#39;);
         }
       }
     ]
   });

   actionSheet.present();
 }
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

Open an action sheet with a title, subTitle, and an array of buttons


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
        
  <code>ActionSheetOptions</code>
      </td>
      <td>
        <p>Action sheet options</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






<h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<p>ActionSheet create options</p>
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
<td>title</td>
<td><code>string</code></td>
<td>The title for the Action Sheet.</td>
</tr>
<tr>
<td>subTitle</td>
<td><code>string</code></td>
<td>The sub-title for the Action Sheet.</td>
</tr>
<tr>
<td>cssClass</td>
<td><code>string</code></td>
<td>Additional classes for custom styles, separated by spaces.</td>
</tr>
<tr>
<td>enableBackdropDismiss</td>
<td><code>boolean</code></td>
<td>If the Action Sheet should close when the user taps the backdrop.</td>
</tr>
<tr>
<td>buttons</td>
<td><code>array&lt;any&gt;</code></td>
<td>An array of buttons to display.</td>
</tr>
</tbody>
</table>
<p>ActionSheet button options</p>
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
<td>text</td>
<td><code>string</code></td>
<td>The buttons text.</td>
</tr>
<tr>
<td>icon</td>
<td><code>icon</code></td>
<td>The buttons icons.</td>
</tr>
<tr>
<td>handler</td>
<td><code>any</code></td>
<td>An express the button should evaluate.</td>
</tr>
<tr>
<td>cssClass</td>
<td><code>string</code></td>
<td>Additional classes for custom styles, separated by spaces.</td>
</tr>
<tr>
<td>role</td>
<td><code>string</code></td>
<td>How the button should be displayed, <code>destructive</code> or <code>cancel</code>. If not role is provided, it will display the button without any additional styles.</td>
</tr>
</tbody>
</table>
<h3 id="dismissing-and-async-navigation">Dismissing And Async Navigation</h3>
<p>After an action sheet has been dismissed, the app may need to also transition
to another page depending on the handler&#39;s logic. However, because multiple
transitions were fired at roughly the same time, it&#39;s difficult for the
nav controller to cleanly animate multiple transitions that may
have been kicked off asynchronously. This is further described in the
<a href="../../nav/NavController/#nav-transition-promises"><code>Nav Transition Promises</code></a> section. For action sheets,
this means it&#39;s best to wait for the action sheet to finish its transition
out before starting a new transition on the same nav controller.</p>
<p>In the example below, after the button has been clicked, its handler
waits on async operation to complete, <em>then</em> it uses <code>pop</code> to navigate
back a page in the same stack. The potential problem is that the async operation
may have been completed before the action sheet has even finished its transition
out. In this case, it&#39;s best to ensure the action sheet has finished its transition
out first, <em>then</em> start the next transition.</p>
<pre><code class="lang-ts">let actionSheet = this.actionSheetCtrl.create({
  title: &#39;Hello&#39;,
  buttons: [{
    text: &#39;Ok&#39;,
    handler: () =&gt; {
      // user has clicked the action sheet button
      // begin the action sheet&#39;s dimiss transition
      let navTransition = actionSheet.dismiss();

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

actionSheet.present();
</code></pre>
<p>It&#39;s important to note that the handler returns <code>false</code>. A feature of
button handlers is that they automatically dismiss the action sheet when their button
was clicked, however, we&#39;ll need more control regarding the transition. Because
the handler returns <code>false</code>, then the action sheet does not automatically dismiss
itself. Instead, you now have complete control of when the action sheet has finished
transitioning, and the ability to wait for the action sheet to finish transitioning
out before starting a new transition.</p>





<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#action-sheets'>ActionSheet Component Docs</a><!-- end content block -->


<!-- end body block -->

