---
layout: "fluid/docs_base"
version: "3.7.1"
versionHref: "/docs/3.7.1"
path: ""
category: api
id: "actionsheetcontroller"
title: "ActionSheetController"
header_sub_title: "Ionic API Documentation"
doc: "ActionSheetController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/action-sheet/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="action-sheet-controller" href="#action-sheet-controller"></a>

ActionSheetController





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/action-sheet/action-sheet-controller.ts#L5">
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

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-ts">import { ActionSheetController } from &#39;ionic-angular&#39;

export class MyClass{

 constructor(public actionSheetCtrl: ActionSheetController) { }

 presentActionSheet() {
   const actionSheet = this.actionSheetCtrl.create({
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






<h2><a class="anchor" name="advanced" href="#advanced">Advanced</a></h2>
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
<pre><code class="lang-ts">const actionSheet = this.actionSheetCtrl.create({
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
        <td><code>$action-sheet-width</code></td>

          <td><code>100%</code></td>

        <td><p>Width of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-max-width</code></td>

          <td><code>500px</code></td>

        <td><p>Maximum width of the action sheet</p>
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
        <td><code>$action-sheet-ios-text-align</code></td>

          <td><code>center</code></td>

        <td><p>Text align of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-padding-top</code></td>

          <td><code>0</code></td>

        <td><p>Padding top of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-padding-end</code></td>

          <td><code>10px</code></td>

        <td><p>Padding end of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-padding-bottom</code></td>

          <td><code>$action-sheet-ios-padding-top</code></td>

        <td><p>Padding bottom of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-padding-start</code></td>

          <td><code>$action-sheet-ios-padding-end</code></td>

        <td><p>Padding start of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-group-margin-bottom</code></td>

          <td><code>10px</code></td>

        <td><p>Bottom margin of the action sheet button group</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-background</code></td>

          <td><code>#f9f9f9</code></td>

        <td><p>Background color of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-border-color</code></td>

          <td><code>#d6d6da</code></td>

        <td><p>Border color of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-border-radius</code></td>

          <td><code>13px</code></td>

        <td><p>Border radius of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-title-padding</code></td>

          <td><code>1.5rem</code></td>

        <td><p>Padding of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-title-color</code></td>

          <td><code>#8f8f8f</code></td>

        <td><p>Color of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-title-font-size</code></td>

          <td><code>1.3rem</code></td>

        <td><p>Font size of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-title-font-weight</code></td>

          <td><code>400</code></td>

        <td><p>Font weight of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-title-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-min-height</code></td>

          <td><code>5.6rem</code></td>

        <td><p>Minimum height of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-padding</code></td>

          <td><code>18px</code></td>

        <td><p>Padding of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-text-color</code></td>

          <td><code>#007aff</code></td>

        <td><p>Text color of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-font-size</code></td>

          <td><code>2rem</code></td>

        <td><p>Font size of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-border-width</code></td>

          <td><code>$hairlines-width</code></td>

        <td><p>Border width of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-border-color</code></td>

          <td><code>#d1d3d6</code></td>

        <td><p>Border color of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-background</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-background-activated</code></td>

          <td><code>#ebebeb</code></td>

        <td><p>Background color of the activated action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-destructive-text-color</code></td>

          <td><code>#f53d3d</code></td>

        <td><p>Destructive text color of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-cancel-background</code></td>

          <td><code>#fff</code></td>

        <td><p>Background color of the action sheet cancel button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-ios-button-cancel-font-weight</code></td>

          <td><code>600</code></td>

        <td><p>Font weight of the action sheet cancel button</p>
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
        <td><code>$action-sheet-md-text-align</code></td>

          <td><code>start</code></td>

        <td><p>Text align of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-background</code></td>

          <td><code>#fafafa</code></td>

        <td><p>Background color of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-group-margin-bottom</code></td>

          <td><code>8px</code></td>

        <td><p>Bottom margin of the action sheet button group</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-title-color</code></td>

          <td><code>#757575</code></td>

        <td><p>Color of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-title-font-size</code></td>

          <td><code>1.6rem</code></td>

        <td><p>Font size of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-title-padding-top</code></td>

          <td><code>11px</code></td>

        <td><p>Padding top of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-title-padding-end</code></td>

          <td><code>16px</code></td>

        <td><p>Padding end of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-title-padding-bottom</code></td>

          <td><code>17px</code></td>

        <td><p>Padding bottom of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-title-padding-start</code></td>

          <td><code>$action-sheet-md-title-padding-end</code></td>

        <td><p>Padding start of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-button-min-height</code></td>

          <td><code>4.8rem</code></td>

        <td><p>Minimum height of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-button-text-color</code></td>

          <td><code>#222</code></td>

        <td><p>Text color of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-button-font-size</code></td>

          <td><code>1.6rem</code></td>

        <td><p>Font size of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-button-padding-top</code></td>

          <td><code>0</code></td>

        <td><p>Padding top of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-button-padding-end</code></td>

          <td><code>16px</code></td>

        <td><p>Padding end of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-button-padding-bottom</code></td>

          <td><code>$action-sheet-md-button-padding-top</code></td>

        <td><p>Padding bottom of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-button-padding-start</code></td>

          <td><code>$action-sheet-md-button-padding-end</code></td>

        <td><p>Padding start of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-button-background</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-button-background-activated</code></td>

          <td><code>#f1f1f1</code></td>

        <td><p>Background color of the action sheet activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-icon-font-size</code></td>

          <td><code>2.4rem</code></td>

        <td><p>Font size of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-icon-width</code></td>

          <td><code>2.3rem</code></td>

        <td><p>Width of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-icon-text-align</code></td>

          <td><code>center</code></td>

        <td><p>Text align of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-icon-vertical-align</code></td>

          <td><code>middle</code></td>

        <td><p>Vertical align of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-icon-margin-top</code></td>

          <td><code>0</code></td>

        <td><p>Margin top of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-icon-margin-end</code></td>

          <td><code>32px</code></td>

        <td><p>Margin end of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-icon-margin-bottom</code></td>

          <td><code>0</code></td>

        <td><p>Margin bottom of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-md-icon-margin-start</code></td>

          <td><code>0</code></td>

        <td><p>Margin start of the icon in the action sheet button</p>
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
        <td><code>$action-sheet-wp-text-align</code></td>

          <td><code>start</code></td>

        <td><p>Text align of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-background</code></td>

          <td><code>#fff</code></td>

        <td><p>Background color of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-box-shadow-color</code></td>

          <td><code>rgba(0, 0, 0, .2)</code></td>

        <td><p>Box shadow color of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-box-shadow</code></td>

          <td><code>0 -1px 0 $action-sheet-wp-box-shadow-color</code></td>

        <td><p>Box shadow of the action sheet</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-title-padding-top</code></td>

          <td><code>11px</code></td>

        <td><p>Padding top of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-title-padding-end</code></td>

          <td><code>16px</code></td>

        <td><p>Padding end of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-title-padding-bottom</code></td>

          <td><code>17px</code></td>

        <td><p>Padding bottom of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-title-padding-start</code></td>

          <td><code>$action-sheet-wp-title-padding-end</code></td>

        <td><p>Padding start of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-title-font-size</code></td>

          <td><code>2rem</code></td>

        <td><p>Font size of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-title-color</code></td>

          <td><code>#4d4d4d</code></td>

        <td><p>Color of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-title-text-align</code></td>

          <td><code>$action-sheet-wp-text-align</code></td>

        <td><p>Text align of the action sheet title</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-height</code></td>

          <td><code>4.8rem</code></td>

        <td><p>Height of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-text-color</code></td>

          <td><code>#4d4d4d</code></td>

        <td><p>Text color of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-font-size</code></td>

          <td><code>1.5rem</code></td>

        <td><p>Font size of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-padding-top</code></td>

          <td><code>0</code></td>

        <td><p>Padding top of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-padding-end</code></td>

          <td><code>16px</code></td>

        <td><p>Padding end of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-padding-bottom</code></td>

          <td><code>$action-sheet-wp-button-padding-top</code></td>

        <td><p>Padding bottom of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-padding-start</code></td>

          <td><code>$action-sheet-wp-button-padding-end</code></td>

        <td><p>Padding start of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-text-align</code></td>

          <td><code>$action-sheet-wp-text-align</code></td>

        <td><p>Text align of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-background</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-button-background-activated</code></td>

          <td><code>$list-wp-activated-background-color</code></td>

        <td><p>Background color of the action sheet activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-icon-font-size</code></td>

          <td><code>2.4rem</code></td>

        <td><p>Font size of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-icon-width</code></td>

          <td><code>2.3rem</code></td>

        <td><p>Width of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-icon-text-align</code></td>

          <td><code>center</code></td>

        <td><p>Text align of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-icon-vertical-align</code></td>

          <td><code>middle</code></td>

        <td><p>Vertical align of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-icon-margin-top</code></td>

          <td><code>0</code></td>

        <td><p>Margin top of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-icon-margin-end</code></td>

          <td><code>20px</code></td>

        <td><p>Margin end of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-icon-margin-bottom</code></td>

          <td><code>0</code></td>

        <td><p>Margin bottom of the icon in the action sheet button</p>
</td>
      </tr>

      <tr>
        <td><code>$action-sheet-wp-icon-margin-start</code></td>

          <td><code>0</code></td>

        <td><p>Margin start of the icon in the action sheet button</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related">Related</a></h2>

<a href="/docs/components#action-sheets">ActionSheet Component Docs</a><!-- end content block -->


<!-- end body block -->

