---
layout: "fluid/docs_base"
version: "3.0.0"
versionHref: "/docs/v3/3.0.0"
path: ""
category: api
id: "alertcontroller"
title: "AlertController"
header_sub_title: "Ionic API Documentation"
doc: "AlertController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/alert/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="alert-controller" href="#alert-controller"></a>

AlertController





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/alert/alert-controller.ts#L5">
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

<div id="config"></div>

<h3>
<a class="anchor" name="config" href="#config"></a>
<code>config</code>


</h3>











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
<td>Emitted when the button is pressed.</td>
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
<a href="../../../navigation/NavController"><code>Nav Transition Promises</code></a> section. For alerts,
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



  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
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
        <td><code>$alert-min-width</code></td>

          <td><code>250px</code></td>

        <td><p>Minimum width of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-max-height</code></td>

          <td><code>90%</code></td>

        <td><p>Maximum height of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-button-line-height</code></td>

          <td><code>20px</code></td>

        <td><p>Line height of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-button-font-size</code></td>

          <td><code>14px</code></td>

        <td><p>Font size of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-input-placeholder-color</code></td>

          <td><code>#999</code></td>

        <td><p>Color of the alert input placeholder</p>
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
        <td><code>$alert-ios-max-width</code></td>

          <td><code>270px</code></td>

        <td><p>Max width of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-border-radius</code></td>

          <td><code>13px</code></td>

        <td><p>Border radius of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-background</code></td>

          <td><code>#f8f8f8</code></td>

        <td><p>Background color of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-box-shadow</code></td>

          <td><code>none</code></td>

        <td><p>Box shadow of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-head-padding</code></td>

          <td><code>12px 16px 7px</code></td>

        <td><p>Padding of the alert head</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-head-text-align</code></td>

          <td><code>center</code></td>

        <td><p>Text align of the alert head</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-title-margin-top</code></td>

          <td><code>8px</code></td>

        <td><p>Margin top of the alert title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-title-font-size</code></td>

          <td><code>17px</code></td>

        <td><p>Font size of the alert title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-title-font-weight</code></td>

          <td><code>600</code></td>

        <td><p>Font weight of the alert title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-sub-title-font-size</code></td>

          <td><code>14px</code></td>

        <td><p>Font size of the alert sub title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-sub-title-text-color</code></td>

          <td><code>#666</code></td>

        <td><p>Text color of the alert sub title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-message-padding</code></td>

          <td><code>0 16px 21px</code></td>

        <td><p>Padding of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-message-font-size</code></td>

          <td><code>13px</code></td>

        <td><p>Font size of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-message-text-align</code></td>

          <td><code>center</code></td>

        <td><p>Text align of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-message-text-color</code></td>

          <td><code>inherit</code></td>

        <td><p>Text color of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-message-padding-empty</code></td>

          <td><code>0 0 12px 0</code></td>

        <td><p>Padding of the alert empty message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-content-max-height</code></td>

          <td><code>240px</code></td>

        <td><p>Maximum height of the alert content</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-input-margin-top</code></td>

          <td><code>10px</code></td>

        <td><p>Margin top of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-input-padding</code></td>

          <td><code>6px</code></td>

        <td><p>Padding on the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-input-border-color</code></td>

          <td><code>#ccc</code></td>

        <td><p>Border color of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-input-border</code></td>

          <td><code>$hairlines-width solid $alert-ios-input-border-color</code></td>

        <td><p>Border of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-input-border-radius</code></td>

          <td><code>4px</code></td>

        <td><p>Border radius of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-input-background-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Background color of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-group-flex-wrap</code></td>

          <td><code>wrap</code></td>

        <td><p>Flex wrap of the alert button group</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-flex</code></td>

          <td><code>1 1 auto</code></td>

        <td><p>Flex of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-margin</code></td>

          <td><code>0</code></td>

        <td><p>Margin of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-min-width</code></td>

          <td><code>50%</code></td>

        <td><p>Min width of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-min-height</code></td>

          <td><code>44px</code></td>

        <td><p>Minimum height of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-font-size</code></td>

          <td><code>17px</code></td>

        <td><p>Font size of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-text-color</code></td>

          <td><code>color($colors-ios, primary)</code></td>

        <td><p>Color of the text in the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-background-color-activated</code></td>

          <td><code>#e9e9e9</code></td>

        <td><p>Background color of the alert activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-border-width</code></td>

          <td><code>$hairlines-width</code></td>

        <td><p>Border width of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-border-color</code></td>

          <td><code>#dbdbdf</code></td>

        <td><p>Border color of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-button-main-font-weight</code></td>

          <td><code>bold</code></td>

        <td><p>Font weight of the main text on the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-list-border-top</code></td>

          <td><code>$alert-ios-button-border-width $alert-ios-button-border-style $alert-ios-button-border-color</code></td>

        <td><p>Border top of the alert list</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-label-padding</code></td>

          <td><code>13px</code></td>

        <td><p>Padding on the label for the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-label-text-color</code></td>

          <td><code>initial</code></td>

        <td><p>Text color of the label for the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-label-text-color-checked</code></td>

          <td><code>$alert-ios-button-text-color</code></td>

        <td><p>Text color of the label for the checked radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-min-width</code></td>

          <td><code>30px</code></td>

        <td><p>Min width of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-icon-top</code></td>

          <td><code>-7px</code></td>

        <td><p>Top of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-icon-left</code></td>

          <td><code>7px</code></td>

        <td><p>Left of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-icon-width</code></td>

          <td><code>6px</code></td>

        <td><p>Width of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-icon-height</code></td>

          <td><code>12px</code></td>

        <td><p>Height of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-icon-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-icon-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-icon-border-color</code></td>

          <td><code>$alert-ios-button-text-color</code></td>

        <td><p>Border color of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-radio-icon-transform</code></td>

          <td><code>rotate(45deg)</code></td>

        <td><p>Transform of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-label-padding</code></td>

          <td><code>13px</code></td>

        <td><p>Padding of the label for the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-label-text-color</code></td>

          <td><code>initial</code></td>

        <td><p>Text color of the label for the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-label-text-color-checked</code></td>

          <td><code>initial</code></td>

        <td><p>Text color of the label for the checked checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-margin</code></td>

          <td><code>10px 6px 10px 16px</code></td>

        <td><p>Margin of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-size</code></td>

          <td><code>21px</code></td>

        <td><p>Size of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-border-width</code></td>

          <td><code>$hairlines-width</code></td>

        <td><p>Border width of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-border-color-off</code></td>

          <td><code>$list-ios-border-color</code></td>

        <td><p>Border color of the checkbox in the alert when off</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-border-color-on</code></td>

          <td><code>color($colors-ios, primary)</code></td>

        <td><p>Border color of the checkbox in the alert when on</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-background-color-off</code></td>

          <td><code>$list-ios-background-color</code></td>

        <td><p>Background color of the checkbox in the alert when off</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-background-color-on</code></td>

          <td><code>color($colors-ios, primary)</code></td>

        <td><p>Background color of the checkbox in the alert when on</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-icon-top</code></td>

          <td><code>4px</code></td>

        <td><p>Top of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-icon-left</code></td>

          <td><code>7px</code></td>

        <td><p>Left of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-icon-width</code></td>

          <td><code>4px</code></td>

        <td><p>Width of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-icon-height</code></td>

          <td><code>9px</code></td>

        <td><p>Height of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-icon-border-width</code></td>

          <td><code>$alert-ios-checkbox-border-width</code></td>

        <td><p>Border width of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-icon-border-style</code></td>

          <td><code>$alert-ios-checkbox-border-style</code></td>

        <td><p>Border style of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-icon-border-color</code></td>

          <td><code>$background-ios-color</code></td>

        <td><p>Border color of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-ios-checkbox-icon-transform</code></td>

          <td><code>rotate(45deg)</code></td>

        <td><p>Transform of the icon in the checkbox alert</p>
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
        <td><code>$alert-md-max-width</code></td>

          <td><code>280px</code></td>

        <td><p>Max width of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-background-color</code></td>

          <td><code>#fafafa</code></td>

        <td><p>Background color of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-box-shadow-color</code></td>

          <td><code>rgba(0, 0, 0, .4)</code></td>

        <td><p>Box shadow color of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-box-shadow</code></td>

          <td><code>0 16px 20px $alert-md-box-shadow-color</code></td>

        <td><p>Box shadow of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-head-padding</code></td>

          <td><code>24px 24px 20px 24px</code></td>

        <td><p>Padding of the alert head</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-head-text-align</code></td>

          <td><code>left</code></td>

        <td><p>Text align of the alert head</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-title-font-size</code></td>

          <td><code>22px</code></td>

        <td><p>Font size of the alert title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-sub-title-font-size</code></td>

          <td><code>16px</code></td>

        <td><p>Font size of the alert sub title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-message-padding</code></td>

          <td><code>0 24px 24px 24px</code></td>

        <td><p>Padding of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-message-font-size</code></td>

          <td><code>15px</code></td>

        <td><p>Font size of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-message-text-color</code></td>

          <td><code>rgba(0, 0, 0, .5)</code></td>

        <td><p>Text color of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-message-padding-empty</code></td>

          <td><code>0</code></td>

        <td><p>Padding of the alert empty message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-content-max-height</code></td>

          <td><code>240px</code></td>

        <td><p>Maximum height of the alert content</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-border-width</code></td>

          <td><code>1px</code></td>

        <td><p>Border width of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-border-color</code></td>

          <td><code>#dedede</code></td>

        <td><p>Border color of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-text-color</code></td>

          <td><code>#000</code></td>

        <td><p>Text color of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-border-width-focused</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the alert input when focused</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-border-style-focused</code></td>

          <td><code>$alert-md-input-border-style</code></td>

        <td><p>Border style of the alert input when focused</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-border-color-focused</code></td>

          <td><code>color($colors-md, primary)</code></td>

        <td><p>Border color of the alert input when focused</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-margin-top</code></td>

          <td><code>5px</code></td>

        <td><p>Margin top of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-margin-right</code></td>

          <td><code>0</code></td>

        <td><p>Margin right of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-margin-bottom</code></td>

          <td><code>5px</code></td>

        <td><p>Margin bottom of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-input-margin-left</code></td>

          <td><code>0</code></td>

        <td><p>Margin left of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-group-flex-wrap</code></td>

          <td><code>wrap-reverse</code></td>

        <td><p>Flex wrap of the alert button group</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-group-padding</code></td>

          <td><code>8px 8px 8px 24px</code></td>

        <td><p>Padding of the alert button group</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-group-justify-content</code></td>

          <td><code>flex-end</code></td>

        <td><p>Justify content of the alert button group</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-padding</code></td>

          <td><code>10px</code></td>

        <td><p>Padding of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-margin</code></td>

          <td><code>0 8px 0 0</code></td>

        <td><p>Margin of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-font-weight</code></td>

          <td><code>500</code></td>

        <td><p>Font weight of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-text-color</code></td>

          <td><code>color($colors-md, primary)</code></td>

        <td><p>Text color of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-background-color-activated</code></td>

          <td><code>rgba(158, 158, 158, .2)</code></td>

        <td><p>Background color of the alert activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-text-transform</code></td>

          <td><code>uppercase</code></td>

        <td><p>Text transform of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-button-text-align</code></td>

          <td><code>right</code></td>

        <td><p>Text align of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-list-border-top</code></td>

          <td><code>1px solid $alert-md-input-border-color</code></td>

        <td><p>Border top of the alert list</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-list-border-bottom</code></td>

          <td><code>$alert-md-list-border-top</code></td>

        <td><p>Border bottom of the alert list</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-label-padding</code></td>

          <td><code>13px 26px</code></td>

        <td><p>Padding on the label for the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-label-text-color</code></td>

          <td><code>initial</code></td>

        <td><p>Text color of the label for the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-label-text-color-checked</code></td>

          <td><code>$alert-md-button-text-color</code></td>

        <td><p>Text color of the label for the checked radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-top</code></td>

          <td><code>0</code></td>

        <td><p>Top of the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-left</code></td>

          <td><code>13px</code></td>

        <td><p>Left of the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-width</code></td>

          <td><code>16px</code></td>

        <td><p>Width of the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-height</code></td>

          <td><code>16px</code></td>

        <td><p>Height of the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-border-color-off</code></td>

          <td><code>darken($list-md-border-color, 40%)</code></td>

        <td><p>Border color of the alert radio when off</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-border-color-on</code></td>

          <td><code>$alert-md-button-text-color</code></td>

        <td><p>Border color of the alert radio when on</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-icon-top</code></td>

          <td><code>2px</code></td>

        <td><p>Top of the icon in the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-icon-left</code></td>

          <td><code>2px</code></td>

        <td><p>Left of the icon in the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-icon-width</code></td>

          <td><code>8px</code></td>

        <td><p>Width of the icon in the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-icon-height</code></td>

          <td><code>8px</code></td>

        <td><p>Height of the icon in the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-icon-border-radius</code></td>

          <td><code>$alert-md-radio-border-radius</code></td>

        <td><p>Border radius of the icon in the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-icon-transform-off</code></td>

          <td><code>scale3d(0, 0, 0)</code></td>

        <td><p>Transform of the icon in the alert radio when off</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-icon-transform-on</code></td>

          <td><code>scale3d(1, 1, 1)</code></td>

        <td><p>Transform of the icon in the alert radio when on</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-radio-icon-transition</code></td>

          <td><code>transform 280ms cubic-bezier(.4, 0, .2, 1)</code></td>

        <td><p>Transition of the icon in the alert radio</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-label-padding</code></td>

          <td><code>13px 26px</code></td>

        <td><p>Padding of the label for the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-label-text-color</code></td>

          <td><code>initial</code></td>

        <td><p>Text color of the label for the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-label-text-color-checked</code></td>

          <td><code>initial</code></td>

        <td><p>Text color of the label for the checked checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-top</code></td>

          <td><code>0</code></td>

        <td><p>Top of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-left</code></td>

          <td><code>13px</code></td>

        <td><p>Left of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-width</code></td>

          <td><code>16px</code></td>

        <td><p>Width of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-height</code></td>

          <td><code>16px</code></td>

        <td><p>Height of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-border-color-off</code></td>

          <td><code>darken($list-md-border-color, 40%)</code></td>

        <td><p>Border color of the checkbox in the alert when off</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-border-color-on</code></td>

          <td><code>$alert-md-button-text-color</code></td>

        <td><p>Border color of the checkbox in the alert when on</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-icon-top</code></td>

          <td><code>0</code></td>

        <td><p>Top of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-icon-left</code></td>

          <td><code>3px</code></td>

        <td><p>Left of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-icon-width</code></td>

          <td><code>6px</code></td>

        <td><p>Width of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-icon-height</code></td>

          <td><code>10px</code></td>

        <td><p>Height of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-icon-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-icon-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-icon-border-color</code></td>

          <td><code>color-contrast($colors-md, $alert-md-checkbox-border-color-on)</code></td>

        <td><p>Border color of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-md-checkbox-icon-transform</code></td>

          <td><code>rotate(45deg)</code></td>

        <td><p>Transform of the icon in the checkbox alert</p>
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
        <td><code>$alert-wp-backdrop-background</code></td>

          <td><code>#fff</code></td>

        <td><p>Background of the alert backdrop</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-width</code></td>

          <td><code>100%</code></td>

        <td><p>Width of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-max-width</code></td>

          <td><code>520px</code></td>

        <td><p>Max width of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-border-width</code></td>

          <td><code>1px</code></td>

        <td><p>Border width of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-border-color</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Border color of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-background</code></td>

          <td><code>#e6e6e6</code></td>

        <td><p>Background color of the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-head-padding</code></td>

          <td><code>20px 22px 5px 22px</code></td>

        <td><p>Padding of the alert head</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-head-text-align</code></td>

          <td><code>left</code></td>

        <td><p>Text align of the alert head</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-title-font-size</code></td>

          <td><code>20px</code></td>

        <td><p>Font size of the alert title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-title-font-weight</code></td>

          <td><code>400</code></td>

        <td><p>Font weight of the alert title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-sub-title-font-size</code></td>

          <td><code>16px</code></td>

        <td><p>Font size of the alert sub title</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-message-padding</code></td>

          <td><code>0 22px 8px 22px</code></td>

        <td><p>Padding of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-message-padding-empty</code></td>

          <td><code>0</code></td>

        <td><p>Padding of the alert empty message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-message-text-color</code></td>

          <td><code>#000</code></td>

        <td><p>Text color of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-message-font-size</code></td>

          <td><code>13px</code></td>

        <td><p>Font size of the alert message</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-content-max-height</code></td>

          <td><code>240px</code></td>

        <td><p>Maximum height of the alert content</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-input-margin</code></td>

          <td><code>5px 0 5px 0</code></td>

        <td><p>Margin of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-input-padding</code></td>

          <td><code>0 8px</code></td>

        <td><p>Padding on the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-input-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-input-border-style</code></td>

          <td><code>$alert-wp-border-style</code></td>

        <td><p>Border style of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-input-border-color</code></td>

          <td><code>$input-wp-border-color</code></td>

        <td><p>Border color of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-input-border-color-focused</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Border color of the alert input when focused</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-input-line-height</code></td>

          <td><code>3rem</code></td>

        <td><p>Line height of the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-input-text-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the text in the alert input</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-padding</code></td>

          <td><code>5px</code></td>

        <td><p>Padding of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-width</code></td>

          <td><code>49.5%</code></td>

        <td><p>Width of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-font-weight</code></td>

          <td><code>400</code></td>

        <td><p>Font weight of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-text-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the text in the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-background</code></td>

          <td><code>#b8b8b8</code></td>

        <td><p>Background color of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-background-activated</code></td>

          <td><code>color-shade($alert-wp-button-background)</code></td>

        <td><p>Background color of the activated alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-margin-right</code></td>

          <td><code>1%</code></td>

        <td><p>Margin right of the alert button</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-group-padding</code></td>

          <td><code>20px 22px 20px 22px</code></td>

        <td><p>Padding of the alert button group</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-group-justify-content</code></td>

          <td><code>flex-end</code></td>

        <td><p>Justify content of the alert button group</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-group-flex-wrap</code></td>

          <td><code>wrap-reverse</code></td>

        <td><p>Flex wrap of the alert button group</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-group-vertical-width</code></td>

          <td><code>100%</code></td>

        <td><p>Vertical width of the vertical alert button group</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-button-group-vertical-margin-top</code></td>

          <td><code>5px</code></td>

        <td><p>Margin top of the vertical alert button group</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-background</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Background color of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-border-color</code></td>

          <td><code>$input-wp-border-color</code></td>

        <td><p>Border color of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-label-padding</code></td>

          <td><code>13px 26px</code></td>

        <td><p>Padding of the label for the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-label-text-color</code></td>

          <td><code>initial</code></td>

        <td><p>Text color of the label for the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-label-text-color-checked</code></td>

          <td><code>$alert-wp-button-text-color</code></td>

        <td><p>Text color of the label for the checked radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-top</code></td>

          <td><code>0</code></td>

        <td><p>Top of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-left</code></td>

          <td><code>13px</code></td>

        <td><p>Left of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-width</code></td>

          <td><code>16px</code></td>

        <td><p>Width of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-height</code></td>

          <td><code>16px</code></td>

        <td><p>Height of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-border-radius</code></td>

          <td><code>50%</code></td>

        <td><p>Border radius of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-border-color</code></td>

          <td><code>$input-wp-border-color</code></td>

        <td><p>Border color of the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-icon-top</code></td>

          <td><code>2px</code></td>

        <td><p>Top of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-icon-left</code></td>

          <td><code>2px</code></td>

        <td><p>Left of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-icon-width</code></td>

          <td><code>8px</code></td>

        <td><p>Width of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-icon-height</code></td>

          <td><code>8px</code></td>

        <td><p>Height of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-radio-icon-border-radius</code></td>

          <td><code>$alert-wp-radio-border-radius</code></td>

        <td><p>Border radius of the icon in the radio alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-label-padding</code></td>

          <td><code>13px 26px</code></td>

        <td><p>Padding of the label for the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-label-text-color</code></td>

          <td><code>initial</code></td>

        <td><p>Text color of the label for the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-label-text-color-checked</code></td>

          <td><code>initial</code></td>

        <td><p>Text color of the label for the checked checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-top</code></td>

          <td><code>0</code></td>

        <td><p>Top of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-left</code></td>

          <td><code>13px</code></td>

        <td><p>Left of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-width</code></td>

          <td><code>16px</code></td>

        <td><p>Width of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-height</code></td>

          <td><code>16px</code></td>

        <td><p>Height of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-border-color</code></td>

          <td><code>$input-wp-border-color</code></td>

        <td><p>Border color of the checkbox in the alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-background-off</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the checkbox in the alert when off</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-background-on</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Background color of the checkbox in the alert when on</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-icon-top</code></td>

          <td><code>-2px</code></td>

        <td><p>Top of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-icon-left</code></td>

          <td><code>3px</code></td>

        <td><p>Left of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-icon-width</code></td>

          <td><code>6px</code></td>

        <td><p>Width of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-icon-height</code></td>

          <td><code>12px</code></td>

        <td><p>Height of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-icon-border-width</code></td>

          <td><code>1px</code></td>

        <td><p>Border width of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-icon-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-icon-border-color</code></td>

          <td><code>color-contrast($colors-wp, $alert-wp-checkbox-background-on)</code></td>

        <td><p>Border color of the icon in the checkbox alert</p>
</td>
      </tr>

      <tr>
        <td><code>$alert-wp-checkbox-icon-transform</code></td>

          <td><code>rotate(45deg)</code></td>

        <td><p>Transform of the icon in the checkbox alert</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

