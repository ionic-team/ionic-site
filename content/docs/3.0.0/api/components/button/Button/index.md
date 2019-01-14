---
layout: "fluid/docs_base"
version: "3.0.0"
versionHref: "/docs/3.0.0"
path: ""
category: api
id: "button"
title: "Button"
header_sub_title: "Ionic API Documentation"
doc: "Button"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/button/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="button" href="#button"></a>

Button
<h3><code>[ion-button]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/button/button.ts#L4">
Improve this doc
</a>






<p>Buttons are simple components in Ionic. They can consist of text and icons
and be enhanced by a wide range of attributes.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;!-- Colors --&gt;
&lt;button ion-button&gt;Default&lt;/button&gt;

&lt;button ion-button color=&quot;secondary&quot;&gt;Secondary&lt;/button&gt;

&lt;button ion-button color=&quot;danger&quot;&gt;Danger&lt;/button&gt;

&lt;button ion-button color=&quot;light&quot;&gt;Light&lt;/button&gt;

&lt;button ion-button color=&quot;dark&quot;&gt;Dark&lt;/button&gt;

&lt;!-- Shapes --&gt;
&lt;button ion-button full&gt;Full Button&lt;/button&gt;

&lt;button ion-button block&gt;Block Button&lt;/button&gt;

&lt;button ion-button round&gt;Round Button&lt;/button&gt;

&lt;!-- Outline --&gt;
&lt;button ion-button full outline&gt;Outline + Full&lt;/button&gt;

&lt;button ion-button block outline&gt;Outline + Block&lt;/button&gt;

&lt;button ion-button round outline&gt;Outline + Round&lt;/button&gt;

&lt;!-- Icons --&gt;
&lt;button ion-button icon-left&gt;
  &lt;ion-icon name=&quot;star&quot;&gt;&lt;/ion-icon&gt;
  Left Icon
&lt;/button&gt;

&lt;button ion-button icon-right&gt;
  Right Icon
  &lt;ion-icon name=&quot;star&quot;&gt;&lt;/ion-icon&gt;
&lt;/button&gt;

&lt;button ion-button icon-only&gt;
  &lt;ion-icon name=&quot;star&quot;&gt;&lt;/ion-icon&gt;
&lt;/button&gt;

&lt;!-- Sizes --&gt;
&lt;button ion-button large&gt;Large&lt;/button&gt;

&lt;button ion-button&gt;Default&lt;/button&gt;

&lt;button ion-button small&gt;Small&lt;/button&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>block</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates a button style that fills the available width.</p>
</td>
    </tr>

    <tr>
      <td>clear</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates a transparent button style without a border.</p>
</td>
    </tr>

    <tr>
      <td>color</td>
      <td><code>string</code></td>
      <td><p> The color to use from your Sass <code>$colors</code> map.
Default options are: <code>&quot;primary&quot;</code>, <code>&quot;secondary&quot;</code>, <code>&quot;danger&quot;</code>, <code>&quot;light&quot;</code>, and <code>&quot;dark&quot;</code>.
For more information, see <a href="/docs/theming/theming-your-app">Theming your App</a>.</p>
</td>
    </tr>

    <tr>
      <td>default</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates the default button size. Normally the default, useful for buttons in an item.</p>
</td>
    </tr>

    <tr>
      <td>full</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates a button style that fills the available width without
a left and right border.</p>
</td>
    </tr>

    <tr>
      <td>large</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates the large button size.</p>
</td>
    </tr>

    <tr>
      <td>mode</td>
      <td><code>string</code></td>
      <td><p> The mode determines which platform styles to use.
Possible values are: <code>&quot;ios&quot;</code>, <code>&quot;md&quot;</code>, or <code>&quot;wp&quot;</code>.
For more information, see <a href="/docs/theming/platform-specific-styles">Platform Styles</a>.</p>
</td>
    </tr>

    <tr>
      <td>outline</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates a transparent button style with a border.</p>
</td>
    </tr>

    <tr>
      <td>round</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates a button with rounded corners.</p>
</td>
    </tr>

    <tr>
      <td>small</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates the small button size.</p>
</td>
    </tr>

    <tr>
      <td>solid</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates a solid button style. Normally the default, useful for buttons in a toolbar.</p>
</td>
    </tr>

    <tr>
      <td>strong</td>
      <td><code>boolean</code></td>
      <td><p> If true, activates a button with a heavier font weight.</p>
</td>
    </tr>

  </tbody>
</table><h2><a class="anchor" name="advanced" href="#advanced"></a>Advanced</h2>
<pre><code class="lang-html">&lt;!-- Bind the color and outline inputs to an expression --&gt;
&lt;button ion-button [color]=&quot;isDanger ? &#39;danger&#39; : &#39;primary&#39;&quot; [outline]=&quot;isOutline&quot;&gt;
  Danger (Solid)
&lt;/button&gt;

&lt;!-- Bind the color and round inputs to an expression --&gt;
&lt;button ion-button [color]=&quot;myColor&quot; [round]=&quot;isRound&quot;&gt;
  Secondary (Round)
&lt;/button&gt;

&lt;!-- Bind the color and clear inputs to an expression --&gt;
&lt;button ion-button [color]=&quot;isSecondary ? &#39;secondary&#39; : &#39;primary&#39;&quot;  [clear]=&quot;isClear&quot;&gt;
  Primary (Clear)
&lt;/button&gt;

&lt;!-- Bind the color, outline and round inputs to an expression --&gt;
&lt;button ion-button [color]=&quot;myColor2&quot; [outline]=&quot;isOutline&quot; [round]=&quot;isRound&quot;&gt;
  Dark (Solid + Round)
&lt;/button&gt;

&lt;!-- Bind the click event to a method --&gt;
&lt;button ion-button (click)=&quot;logEvent($event)&quot;&gt;
  Click me!
&lt;/button&gt;
</code></pre>
<pre><code class="lang-ts">@Component({
  templateUrl: &#39;main.html&#39;
})
class E2EPage {
  isDanger: boolean = true;
  isSecondary: boolean = false;
  isRound: boolean = true;
  isOutline: boolean = false;
  isClear: boolean = true;
  myColor: string = &#39;secondary&#39;;
  myColor2: string = &#39;dark&#39;;

  logEvent(event) {
    console.log(event)
  }
}
</code></pre>



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
        <td><code>$button-round-padding</code></td>

          <td><code>0 2.6rem</code></td>

        <td><p>Padding of the round button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-round-border-radius</code></td>

          <td><code>64px</code></td>

        <td><p>Border radius of the round button</p>
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
        <td><code>$button-ios-margin</code></td>

          <td><code>.4rem .2rem</code></td>

        <td><p>Margin of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-padding</code></td>

          <td><code>0 1em</code></td>

        <td><p>Padding of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-height</code></td>

          <td><code>2.8em</code></td>

        <td><p>Height of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-border-radius</code></td>

          <td><code>4px</code></td>

        <td><p>Border radius of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-font-size</code></td>

          <td><code>1.6rem</code></td>

        <td><p>Font size of the button text</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-background-color</code></td>

          <td><code>color($colors-ios, primary)</code></td>

        <td><p>Background color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-text-color</code></td>

          <td><code>color-contrast($colors-ios, $button-ios-background-color)</code></td>

        <td><p>Text color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-background-color-activated</code></td>

          <td><code>color-shade($button-ios-background-color)</code></td>

        <td><p>Background color of the activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-opacity-activated</code></td>

          <td><code>1</code></td>

        <td><p>Opacity of the activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-opacity-hover</code></td>

          <td><code>.8</code></td>

        <td><p>Opacity of the button on hover</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-large-padding</code></td>

          <td><code>0 1em</code></td>

        <td><p>Padding of the large button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-large-height</code></td>

          <td><code>2.8em</code></td>

        <td><p>Height of the large button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-large-font-size</code></td>

          <td><code>2rem</code></td>

        <td><p>Font size of the large button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-small-padding</code></td>

          <td><code>0 .9em</code></td>

        <td><p>Padding of the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-small-height</code></td>

          <td><code>2.1em</code></td>

        <td><p>Height of the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-small-font-size</code></td>

          <td><code>1.3rem</code></td>

        <td><p>Font size of the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-small-icon-font-size</code></td>

          <td><code>1.3em</code></td>

        <td><p>Font size of an icon in the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-outline-border-width</code></td>

          <td><code>1px</code></td>

        <td><p>Border width of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-outline-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-outline-border-radius</code></td>

          <td><code>$button-ios-border-radius</code></td>

        <td><p>Border radius of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-outline-border-color</code></td>

          <td><code>$button-ios-background-color</code></td>

        <td><p>Border color of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-outline-text-color</code></td>

          <td><code>$button-ios-background-color</code></td>

        <td><p>Text color of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-outline-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-outline-text-color-activated</code></td>

          <td><code>color-contrast($colors-ios, $button-ios-background-color)</code></td>

        <td><p>Text color of the activated outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-outline-background-color-activated</code></td>

          <td><code>$button-ios-background-color</code></td>

        <td><p>Background color of the activated outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-outline-opacity-activated</code></td>

          <td><code>1</code></td>

        <td><p>Opacity of the activated outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-clear-border-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Border color of the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-clear-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-clear-background-color-activated</code></td>

          <td><code>$button-ios-clear-background-color</code></td>

        <td><p>Background color of the activated clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-clear-opacity-activated</code></td>

          <td><code>.4</code></td>

        <td><p>Opacity of the activated clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-clear-text-color-hover</code></td>

          <td><code>$button-ios-background-color</code></td>

        <td><p>Text color of the clear button on hover</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-clear-opacity-hover</code></td>

          <td><code>.6</code></td>

        <td><p>Opacity of the clear button on hover</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-round-padding</code></td>

          <td><code>$button-round-padding</code></td>

        <td><p>Padding of the round button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-round-border-radius</code></td>

          <td><code>$button-round-border-radius</code></td>

        <td><p>Border radius of the round button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-ios-strong-font-weight</code></td>

          <td><code>600</code></td>

        <td><p>Font weight of the strong button</p>
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
        <td><code>$button-md-margin</code></td>

          <td><code>.4rem .2rem</code></td>

        <td><p>Margin of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-padding</code></td>

          <td><code>0 1.1em</code></td>

        <td><p>Padding of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-height</code></td>

          <td><code>3.6rem</code></td>

        <td><p>Height of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-font-size</code></td>

          <td><code>1.4rem</code></td>

        <td><p>Font size of the button text</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-font-weight</code></td>

          <td><code>500</code></td>

        <td><p>Font weight of the button text</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-text-transform</code></td>

          <td><code>uppercase</code></td>

        <td><p>Capitalization of the button text</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-background-color</code></td>

          <td><code>color($colors-md, primary)</code></td>

        <td><p>Background color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-text-color</code></td>

          <td><code>color-contrast($colors-md, $button-md-background-color)</code></td>

        <td><p>Text color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-box-shadow</code></td>

          <td><code>0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)</code></td>

        <td><p>Box shadow of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-transition-duration</code></td>

          <td><code>300ms</code></td>

        <td><p>Duration of the transition of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-transition-timing-function</code></td>

          <td><code>cubic-bezier(.4, 0, .2, 1)</code></td>

        <td><p>Speed curve of the transition of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-background-color-hover</code></td>

          <td><code>$button-md-background-color</code></td>

        <td><p>Background color of the button on hover</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-background-color-activated</code></td>

          <td><code>color-shade($button-md-background-color)</code></td>

        <td><p>Background color of the activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-opacity-activated</code></td>

          <td><code>1</code></td>

        <td><p>Opacity of the activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-box-shadow-activated</code></td>

          <td><code>0 3px 5px rgba(0, 0, 0, .14), 0 3px 5px rgba(0, 0, 0, .21)</code></td>

        <td><p>Box shadow of the activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-ripple-background-color</code></td>

          <td><code>#555</code></td>

        <td><p>Background color of the ripple on the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-large-padding</code></td>

          <td><code>0 1em</code></td>

        <td><p>Padding of the large button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-large-height</code></td>

          <td><code>2.8em</code></td>

        <td><p>Height of the large button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-large-font-size</code></td>

          <td><code>2rem</code></td>

        <td><p>Font size of the large button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-small-padding</code></td>

          <td><code>0 .9em</code></td>

        <td><p>Padding of the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-small-height</code></td>

          <td><code>2.1em</code></td>

        <td><p>Height of the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-small-font-size</code></td>

          <td><code>1.3rem</code></td>

        <td><p>Font size of the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-small-icon-font-size</code></td>

          <td><code>1.4em</code></td>

        <td><p>Font size of an icon in the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-border-width</code></td>

          <td><code>1px</code></td>

        <td><p>Border width of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-border-color</code></td>

          <td><code>$button-md-background-color</code></td>

        <td><p>Border color of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-text-color</code></td>

          <td><code>$button-md-background-color</code></td>

        <td><p>Text color of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-box-shadow</code></td>

          <td><code>none</code></td>

        <td><p>Box shadow of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-background-color-hover</code></td>

          <td><code>rgba(158, 158, 158, .1)</code></td>

        <td><p>Background color of the outline button on hover</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-background-color-activated</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the activated outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-box-shadow-activated</code></td>

          <td><code>none</code></td>

        <td><p>Box shadow of the activated outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-opacity-activated</code></td>

          <td><code>1</code></td>

        <td><p>Opacity of the activated outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-outline-ripple-background-color</code></td>

          <td><code>$button-md-background-color</code></td>

        <td><p>Background color of the ripple on the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-clear-border-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Border color of the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-clear-text-color</code></td>

          <td><code>$button-md-background-color</code></td>

        <td><p>Text color of the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-clear-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-clear-box-shadow</code></td>

          <td><code>none</code></td>

        <td><p>Box shadow of the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-clear-opacity</code></td>

          <td><code>1</code></td>

        <td><p>Opacity of the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-clear-background-color-activated</code></td>

          <td><code>rgba(158, 158, 158, .2)</code></td>

        <td><p>Background color of the activated clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-clear-box-shadow-activated</code></td>

          <td><code>$button-md-clear-box-shadow</code></td>

        <td><p>Box shadow of the activated clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-clear-background-color-hover</code></td>

          <td><code>rgba(158, 158, 158, .1)</code></td>

        <td><p>Background color of the clear button on hover</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-clear-ripple-background-color</code></td>

          <td><code>#999</code></td>

        <td><p>Background color of the ripple on the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-round-padding</code></td>

          <td><code>$button-round-padding</code></td>

        <td><p>Padding of the round button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-round-border-radius</code></td>

          <td><code>$button-round-border-radius</code></td>

        <td><p>Border radius of the round button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-md-strong-font-weight</code></td>

          <td><code>bold</code></td>

        <td><p>Font weight of the strong button</p>
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
        <td><code>$button-wp-margin</code></td>

          <td><code>.4rem .2rem</code></td>

        <td><p>Margin of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-padding</code></td>

          <td><code>0 1.1em</code></td>

        <td><p>Padding of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-height</code></td>

          <td><code>3.6rem</code></td>

        <td><p>Height of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-border-width</code></td>

          <td><code>3px</code></td>

        <td><p>Border width of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-border-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Border color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-font-size</code></td>

          <td><code>1.4rem</code></td>

        <td><p>Font size of the button text</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-background-color</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Background color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-text-color</code></td>

          <td><code>color-contrast($colors-wp, $button-wp-background-color)</code></td>

        <td><p>Text color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-background-color-activated</code></td>

          <td><code>color-shade($button-wp-background-color)</code></td>

        <td><p>Background color of the activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-large-padding</code></td>

          <td><code>0 1em</code></td>

        <td><p>Padding of the large button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-large-height</code></td>

          <td><code>2.8em</code></td>

        <td><p>Height of the large button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-large-font-size</code></td>

          <td><code>2rem</code></td>

        <td><p>Font size of the large button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-small-padding</code></td>

          <td><code>0 .9em</code></td>

        <td><p>Padding of the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-small-height</code></td>

          <td><code>2.1em</code></td>

        <td><p>Height of the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-small-font-size</code></td>

          <td><code>1.3rem</code></td>

        <td><p>Font size of the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-small-icon-font-size</code></td>

          <td><code>1.4em</code></td>

        <td><p>Font size of an icon in the small button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-outline-border-width</code></td>

          <td><code>1px</code></td>

        <td><p>Border width of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-outline-border-style</code></td>

          <td><code>solid</code></td>

        <td><p>Border style of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-outline-border-color</code></td>

          <td><code>$button-wp-background-color</code></td>

        <td><p>Border color of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-outline-text-color</code></td>

          <td><code>$button-wp-background-color</code></td>

        <td><p>Text color of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-outline-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-outline-background-color-activated</code></td>

          <td><code>$button-wp-background-color</code></td>

        <td><p>Background color of the activated outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-outline-background-color-opacity-activated</code></td>

          <td><code>.16</code></td>

        <td><p>Opacity of the background color of the activated outline button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-clear-text-color</code></td>

          <td><code>$button-wp-background-color</code></td>

        <td><p>Text color of the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-clear-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background color of the clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-clear-background-color-activated</code></td>

          <td><code>rgba(158, 158, 158, .2)</code></td>

        <td><p>Background color of the activated clear button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-clear-background-color-hover</code></td>

          <td><code>rgba(158, 158, 158, .1)</code></td>

        <td><p>Background color of the clear button on hover</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-round-padding</code></td>

          <td><code>$button-round-padding</code></td>

        <td><p>Padding of the round button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-round-border-radius</code></td>

          <td><code>$button-round-border-radius</code></td>

        <td><p>Border radius of the round button</p>
</td>
      </tr>

      <tr>
        <td><code>$button-wp-strong-font-weight</code></td>

          <td><code>bold</code></td>

        <td><p>Font weight of the strong button</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href="/docs/components#buttons">Button Component Docs</a>,
<a href="/docs/components#fabs">FabButton Docs</a>,
<a href="../../fab/FabButton">FabButton API Docs</a>,
<a href="../../fab/FabContainer">FabContainer API Docs</a><!-- end content block -->


<!-- end body block -->

