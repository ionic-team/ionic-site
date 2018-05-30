---
layout: "fluid/docs_base"
version: "3.6.1"
versionHref: "/docs/3.6.1"
path: ""
category: api
id: "searchbar"
title: "Searchbar"
header_sub_title: "Ionic API Documentation"
doc: "Searchbar"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/searchbar/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="searchbar" href="#searchbar"></a>

Searchbar
<h3><code>ion-searchbar</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/searchbar/searchbar.ts#L7">
Improve this doc
</a>






<p>Manages the display of a Searchbar which can be used to search or filter items.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-html">&lt;ion-searchbar
  [(ngModel)]=&quot;myInput&quot;
  [showCancelButton]=&quot;shouldShowCancel&quot;
  (ionInput)=&quot;onInput($event)&quot;
  (ionCancel)=&quot;onCancel($event)&quot;&gt;
&lt;/ion-searchbar&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="positionPlaceholder"></div>

<h3>
<a class="anchor" name="positionPlaceholder" href="#positionPlaceholder">
<code>positionPlaceholder()</code>


</a>
</h3>











<div id="setFocus"></div>

<h3>
<a class="anchor" name="setFocus" href="#setFocus">
<code>setFocus()</code>


</a>
</h3>










<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties">Input Properties</a></h2>
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
      <td>animated</td>
      <td><code>boolean</code></td>
      <td><p> If true, enable searchbar animation. Default <code>false</code>.</p>
</td>
    </tr>

    <tr>
      <td>autocomplete</td>
      <td><code>string</code></td>
      <td><p> Set the input&#39;s autocomplete property. Values: <code>&quot;on&quot;</code>, <code>&quot;off&quot;</code>. Default <code>&quot;off&quot;</code>.</p>
</td>
    </tr>

    <tr>
      <td>autocorrect</td>
      <td><code>string</code></td>
      <td><p> Set the input&#39;s autocorrect property. Values: <code>&quot;on&quot;</code>, <code>&quot;off&quot;</code>. Default <code>&quot;off&quot;</code>.</p>
</td>
    </tr>

    <tr>
      <td>cancelButtonText</td>
      <td><code>string</code></td>
      <td><p> Set the the cancel button text. Default: <code>&quot;Cancel&quot;</code>.</p>
</td>
    </tr>

    <tr>
      <td>debounce</td>
      <td><code>number</code></td>
      <td><p> How long, in milliseconds, to wait to trigger the <code>ionInput</code> event after each keystroke. Default <code>250</code>.</p>
</td>
    </tr>

    <tr>
      <td>placeholder</td>
      <td><code>string</code></td>
      <td><p> Set the input&#39;s placeholder. Default <code>&quot;Search&quot;</code>.</p>
</td>
    </tr>

    <tr>
      <td>showCancelButton</td>
      <td><code>boolean</code></td>
      <td><p> If true, show the cancel button. Default <code>false</code>.</p>
</td>
    </tr>

    <tr>
      <td>spellcheck</td>
      <td><code>string|boolean</code></td>
      <td><p> Set the input&#39;s spellcheck property. Values: <code>true</code>, <code>false</code>. Default <code>false</code>.</p>
</td>
    </tr>

    <tr>
      <td>type</td>
      <td><code>string</code></td>
      <td><p> Set the type of the input. Values: <code>&quot;text&quot;</code>, <code>&quot;password&quot;</code>, <code>&quot;email&quot;</code>, <code>&quot;number&quot;</code>, <code>&quot;search&quot;</code>, <code>&quot;tel&quot;</code>, <code>&quot;url&quot;</code>. Default <code>&quot;search&quot;</code>.</p>
</td>
    </tr>

  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events">Output Events</a></h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>ionCancel</td>
      <td><p> Emitted when the cancel button is clicked.</p>
</td>
    </tr>

    <tr>
      <td>ionClear</td>
      <td><p> Emitted when the clear input button is clicked.</p>
</td>
    </tr>

    <tr>
      <td>ionInput</td>
      <td><p> Emitted when the Searchbar input has changed, including when it&#39;s cleared.</p>
</td>
    </tr>

  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables">Sass Variables</a></h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">



      <a ng-init="setSassPlatform('ios')" ng-class="{ active: active === 'ios' }" ng-click="setSassPlatform('ios')" >iOS</a>



      <a ng-class="{ active: active === 'md' }" ng-click="setSassPlatform('md')">Material Design</a>



      <a ng-class="{ active: active === 'wp' }" ng-click="setSassPlatform('wp')">Windows Platform</a>



  </div>



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
        <td><code>$searchbar-ios-padding-vertical</code></td>

          <td><code>0</code></td>

        <td><p>Padding top/bottom of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-padding-horizontal</code></td>

          <td><code>8px</code></td>

        <td><p>Padding start/end of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-background-color</code></td>

          <td><code>rgba(0, 0, 0, .2)</code></td>

        <td><p>Background of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-border-color</code></td>

          <td><code>rgba(0, 0, 0, .05)</code></td>

        <td><p>Border color of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-min-height</code></td>

          <td><code>44px</code></td>

        <td><p>Minimum height of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-search-icon-color</code></td>

          <td><code>rgba(0, 0, 0, .5)</code></td>

        <td><p>Color of the searchbar input search icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-search-icon-svg</code></td>

          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 13 13&#39;&gt;&lt;path fill=&#39;fg-color&#39; d=&#39;M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1 M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0 L5,0z&#39;/&gt;&lt;line stroke=&#39;fg-color&#39; stroke-miterlimit=&#39;10&#39; x1=&#39;12.6&#39; y1=&#39;12.6&#39; x2=&#39;8.2&#39; y2=&#39;8.2&#39;/&gt;&lt;/svg&gt;&quot;</code></td>

        <td><p>Svg for the searchbar input search icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-search-icon-size</code></td>

          <td><code>13px</code></td>

        <td><p>Size of the searchbar input search icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-height</code></td>

          <td><code>3rem</code></td>

        <td><p>Height of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-placeholder-color</code></td>

          <td><code>rgba(0, 0, 0, .5)</code></td>

        <td><p>Color of the searchbar input placeholder</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-text-color</code></td>

          <td><code>#000</code></td>

        <td><p>Color of the searchbar input text</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-background-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Background of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-transition</code></td>

          <td><code>all 300ms ease</code></td>

        <td><p>Transition of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-cancel-transition</code></td>

          <td><code>all 300ms ease</code></td>

        <td><p>Transition of the searchbar input cancel button</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-clear-icon-color</code></td>

          <td><code>rgba(0, 0, 0, .5)</code></td>

        <td><p>Color of the searchbar input clear icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-clear-icon-svg</code></td>

          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 512 512&#39;&gt;&lt;path fill=&#39;fg-color&#39; d=&#39;M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z&#39;/&gt;&lt;/svg&gt;&quot;</code></td>

        <td><p>Svg for the searchbar input clear icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-input-clear-icon-size</code></td>

          <td><code>18px</code></td>

        <td><p>Size of the searchbar input clear icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-ios-toolbar-input-background</code></td>

          <td><code>rgba(0, 0, 0, .08)</code></td>

        <td><p>Background of the searchbar input inside of a toolbar</p>
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
        <td><code>$searchbar-md-padding-top</code></td>

          <td><code>8px</code></td>

        <td><p>Padding top of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-padding-end</code></td>

          <td><code>$searchbar-md-padding-top</code></td>

        <td><p>Padding end of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-padding-bottom</code></td>

          <td><code>$searchbar-md-padding-top</code></td>

        <td><p>Padding bottom of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-padding-start</code></td>

          <td><code>$searchbar-md-padding-end</code></td>

        <td><p>Padding start of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-background-color</code></td>

          <td><code>inherit</code></td>

        <td><p>Background of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-search-icon-color</code></td>

          <td><code>#5b5b5b</code></td>

        <td><p>Color of the searchbar input search icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-search-icon-svg</code></td>

          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 512 512&#39;&gt;&lt;path fill=&#39;&quot; + $searchbar-md-input-search-icon-color + &quot;&#39; d=&#39;M337.509,305.372h-17.501l-6.571-5.486c20.791-25.232,33.922-57.054,33.922-93.257C347.358,127.632,283.896,64,205.135,64C127.452,64,64,127.632,64,206.629s63.452,142.628,142.225,142.628c35.011,0,67.831-13.167,92.991-34.008l6.561,5.487v17.551L415.18,448L448,415.086L337.509,305.372z M206.225,305.372c-54.702,0-98.463-43.887-98.463-98.743c0-54.858,43.761-98.742,98.463-98.742c54.7,0,98.462,43.884,98.462,98.742C304.687,261.485,260.925,305.372,206.225,305.372z&#39;/&gt;&lt;/svg&gt;&quot;</code></td>

        <td><p>Svg for the searchbar input search icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-search-icon-size</code></td>

          <td><code>20px</code></td>

        <td><p>Size of the searchbar input search icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-height</code></td>

          <td><code>auto</code></td>

        <td><p>Height of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-line-height</code></td>

          <td><code>3rem</code></td>

        <td><p>Line height of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-box-shadow</code></td>

          <td><code>0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)</code></td>

        <td><p>Box shadow of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-placeholder-color</code></td>

          <td><code>#aeaeae</code></td>

        <td><p>Color of the searchbar input placeholder</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-text-color</code></td>

          <td><code>#141414</code></td>

        <td><p>Color of the searchbar input text</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-background-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Background of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-clear-icon-color</code></td>

          <td><code>#5b5b5b</code></td>

        <td><p>Color of the searchbar input clear icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-clear-icon-svg</code></td>

          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 512 512&#39;&gt;&lt;polygon fill=&#39;&quot; + $searchbar-md-input-clear-icon-color + &quot;&#39; points=&#39;405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 375.202,405 405,375.202 285.798,256&#39;/&gt;&lt;/svg&gt;&quot;</code></td>

        <td><p>Svg for the searchbar input clear icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-md-input-clear-icon-size</code></td>

          <td><code>22px</code></td>

        <td><p>Size of the searchbar input clear icon</p>
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
        <td><code>$searchbar-wp-padding-top</code></td>

          <td><code>8px</code></td>

        <td><p>Padding top of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-padding-end</code></td>

          <td><code>$searchbar-wp-padding-top</code></td>

        <td><p>Padding end of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-padding-bottom</code></td>

          <td><code>$searchbar-wp-padding-top</code></td>

        <td><p>Padding bottom of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-padding-start</code></td>

          <td><code>$searchbar-wp-padding-end</code></td>

        <td><p>Padding start of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-background-color</code></td>

          <td><code>transparent</code></td>

        <td><p>Background of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-border-width</code></td>

          <td><code>2px</code></td>

        <td><p>Border width of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-border-color</code></td>

          <td><code>$input-wp-border-color</code></td>

        <td><p>Border color of the searchbar</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-border-color-focused</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Border color of the searchbar on focus</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-search-icon-color</code></td>

          <td><code>#858585</code></td>

        <td><p>Color of the searchbar input search icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-search-icon-svg</code></td>

          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 512 512&#39;&gt;&lt;path fill=&#39;&quot; + $searchbar-wp-input-search-icon-color + &quot;&#39; d=&#39;M337.509,305.372h-17.501l-6.571-5.486c20.791-25.232,33.922-57.054,33.922-93.257C347.358,127.632,283.896,64,205.135,64C127.452,64,64,127.632,64,206.629s63.452,142.628,142.225,142.628c35.011,0,67.831-13.167,92.991-34.008l6.561,5.487v17.551L415.18,448L448,415.086L337.509,305.372z M206.225,305.372c-54.702,0-98.463-43.887-98.463-98.743c0-54.858,43.761-98.742,98.463-98.742c54.7,0,98.462,43.884,98.462,98.742C304.687,261.485,260.925,305.372,206.225,305.372z&#39;/&gt;&lt;/svg&gt;&quot;</code></td>

        <td><p>Svg for the searchbar input search icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-search-icon-size</code></td>

          <td><code>20px</code></td>

        <td><p>Size of the searchbar input search icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-padding-vertical</code></td>

          <td><code>0</code></td>

        <td><p>Padding top/bottom of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-padding-horizontal</code></td>

          <td><code>8px</code></td>

        <td><p>Padding start/end of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-height</code></td>

          <td><code>auto</code></td>

        <td><p>Height of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-line-height</code></td>

          <td><code>3rem</code></td>

        <td><p>Line height of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-placeholder-color</code></td>

          <td><code>#858585</code></td>

        <td><p>Color of the searchbar input placeholder</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-text-color</code></td>

          <td><code>#141414</code></td>

        <td><p>Color of the searchbar input text</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-background-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Background of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-border-radius</code></td>

          <td><code>0</code></td>

        <td><p>Border radius of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-font-size</code></td>

          <td><code>1.4rem</code></td>

        <td><p>Font size of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-font-weight</code></td>

          <td><code>400</code></td>

        <td><p>Font weight of the searchbar input</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-clear-icon-color</code></td>

          <td><code>#858585</code></td>

        <td><p>Color of the searchbar input clear icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-clear-icon-svg</code></td>

          <td><code>&quot;&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 512 512&#39;&gt;&lt;polygon fill=&#39;&quot; + $searchbar-wp-input-clear-icon-color + &quot;&#39; points=&#39;405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 375.202,405 405,375.202 285.798,256&#39;/&gt;&lt;/svg&gt;&quot;</code></td>

        <td><p>Svg for the searchbar input clear icon</p>
</td>
      </tr>

      <tr>
        <td><code>$searchbar-wp-input-clear-icon-size</code></td>

          <td><code>22px</code></td>

        <td><p>Size of the searchbar input clear icon</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related">Related</a></h2>

<a href="/docs/components#searchbar">Searchbar Component Docs</a><!-- end content block -->


<!-- end body block -->

