---
layout: "fluid/docs_base"
version: "3.0.0"
versionHref: "/docs/v3/3.0.0"
path: ""
category: api
id: "fabcontainer"
title: "FabContainer"
header_sub_title: "Ionic API Documentation"
doc: "FabContainer"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/fab/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="fab-container" href="#fab-container"></a>

FabContainer
<h3><code>ion-fab</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/fab/fab-container.ts#L5">
Improve this doc
</a>






<p><code>&lt;ion-fab&gt;</code> is not a FAB button by itself but a container that assist the fab button (<code>&lt;button ion-fab&gt;</code>) allowing it
to be placed in fixed position that does not scroll with the content. It is also used to implement &quot;material design speed dial&quot;,
ie. a FAB buttons displays a small lists of related actions when clicked.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;!-- this fab is placed at top right --&gt;
&lt;ion-content&gt;
 &lt;ion-fab top right&gt;
   &lt;button ion-fab&gt;Button&lt;/button&gt;
 &lt;/ion-fab&gt;

 &lt;!-- this fab is placed at the center of the content viewport --&gt;
 &lt;ion-fab center middle&gt;
   &lt;button ion-fab&gt;Button&lt;/button&gt;
 &lt;/ion-fab&gt;
&lt;/ion-content&gt;
</code></pre>
<p>Ionic&#39;s FAB also supports &quot;material design&#39;s fab speed dial&quot;. It is a normal fab button
that shows a list of related actions when clicked.</p>
<p>The same <code>ion-fab</code> container can contain several <code>ion-fab-list</code> with different side values:
<code>top</code>, <code>bottom</code>, <code>left</code> and <code>right</code>. For example, if you want to have a list of button that are
on the top of the main button, you should use <code>side=&quot;top&quot;</code> and so on. By default, if side is ommited, <code>side=&quot;bottom&quot;</code>.</p>
<pre><code class="lang-html">&lt;ion-content&gt;
 &lt;!-- this fab is placed at bottom right --&gt;
 &lt;ion-fab bottom right &gt;
   &lt;button ion-fab&gt;Share&lt;/button&gt;
   &lt;ion-fab-list side=&quot;top&quot;&gt;
     &lt;button ion-fab&gt;Facebook&lt;/button&gt;
     &lt;button ion-fab&gt;Twitter&lt;/button&gt;
     &lt;button ion-fab&gt;Youtube&lt;/button&gt;
   &lt;/ion-fab-list&gt;
   &lt;ion-fab-list side=&quot;left&quot;&gt;
     &lt;button ion-fab&gt;Vimeo&lt;/button&gt;
   &lt;/ion-fab-list&gt;
 &lt;/ion-fab&gt;
&lt;/ion-content&gt;
</code></pre>
<p>A FAB speed dial can also be closed programatically.</p>
<pre><code class="lang-html">&lt;ion-content&gt;
 &lt;ion-fab bottom right #fab&gt;
   &lt;button ion-fab&gt;Share&lt;/button&gt;
   &lt;ion-fab-list side=&quot;top&quot;&gt;
     &lt;button ion-fab (click)=&quot;share(&#39;facebook&#39;, fab)&quot;&gt;Facebook&lt;/button&gt;
     &lt;button ion-fab (click)=&quot;share(&#39;twitter&#39;, fab)&quot;&gt;Twitter&lt;/button&gt;
   &lt;/ion-fab-list&gt;
 &lt;/ion-fab&gt;
&lt;/ion-content&gt;
</code></pre>
<pre><code class="lang-ts">share(socialNet: string, fab: FabContainer) {
  fab.close();
  console.log(&quot;Sharing in&quot;, socialNet);
}
</code></pre>




<!-- @property tags -->

<h2><a class="anchor" name="attributes" href="#attributes"></a>Attributes:</h2>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>



















<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
top
</td>



<td>
Places the container on the top of the content
</td>
</tr>

<tr>
<td>
bottom
</td>



<td>
Places the container on the bottom  of the content
</td>
</tr>

<tr>
<td>
left
</td>



<td>
Places the container on the left
</td>
</tr>

<tr>
<td>
right
</td>



<td>
Places the container on the right
</td>
</tr>

<tr>
<td>
middle
</td>



<td>
Places the container on the middle vertically
</td>
</tr>

<tr>
<td>
center
</td>



<td>
Places the container on the center horizontally
</td>
</tr>

<tr>
<td>
edge
</td>



<td>
Used to place the container between the content and the header/footer

</td>
</tr>

</tbody>
</table>



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="close"></div>

<h3>
<a class="anchor" name="close" href="#close"></a>
<code>close()</code>


</h3>

Close an active FAB list container











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
        <td><code>$fab-size</code></td>

          <td><code>56px</code></td>

        <td><p>Width and height of the FAB button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-mini-size</code></td>

          <td><code>40px</code></td>

        <td><p>Width and height of the FAB button mini</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-content-margin</code></td>

          <td><code>10px</code></td>

        <td><p>Margin of the FAB Container</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-list-margin</code></td>

          <td><code>10px</code></td>

        <td><p>Margin of the FAB List</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-list-button-background-color</code></td>

          <td><code>#f4f4f4</code></td>

        <td><p>Background color of the button in a list</p>
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
        <td><code>$fab-ios-background-color</code></td>

          <td><code>color($colors-ios, primary)</code></td>

        <td><p>Background color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-ios-text-color</code></td>

          <td><code>color-contrast($colors-ios, $fab-ios-background-color)</code></td>

        <td><p>Text color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-ios-background-color-activated</code></td>

          <td><code>color-shade($fab-ios-background-color)</code></td>

        <td><p>Background color of the activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-ios-list-button-background-color</code></td>

          <td><code>$fab-list-button-background-color</code></td>

        <td><p>Background color of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-ios-list-button-text-color</code></td>

          <td><code>color-contrast($colors-ios, $fab-ios-list-button-background-color)</code></td>

        <td><p>Text color of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-ios-list-button-background-color-activated</code></td>

          <td><code>color-shade($fab-ios-list-button-background-color)</code></td>

        <td><p>Background color of the activated button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-ios-list-button-transition-duration</code></td>

          <td><code>200ms</code></td>

        <td><p>Transition duration of the transform and opacity of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-ios-list-button-transition-timing-function</code></td>

          <td><code>ease</code></td>

        <td><p>Speed curve of the transition of the transform and opacity of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-ios-list-button-transition-delay</code></td>

          <td><code>10ms</code></td>

        <td><p>Transition delay of the transform and opacity of the button in a list</p>
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
        <td><code>$fab-md-box-shadow</code></td>

          <td><code>0 4px 6px 0 rgba(0, 0, 0, .14), 0 4px 5px rgba(0, 0, 0, .1)</code></td>

        <td><p>Box shadow of the FAB button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-box-shadow-activated</code></td>

          <td><code>0 5px 15px 0 rgba(0, 0, 0, .4), 0 4px 7px 0 rgba(0, 0, 0, .1)</code></td>

        <td><p>Box shadow of the activated FAB button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-background-color</code></td>

          <td><code>color($colors-md, primary)</code></td>

        <td><p>Background color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-text-color</code></td>

          <td><code>color-contrast($colors-md, $fab-md-background-color)</code></td>

        <td><p>Text color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-background-color-activated</code></td>

          <td><code>color-shade($fab-md-background-color)</code></td>

        <td><p>Background color of the activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-list-button-background-color</code></td>

          <td><code>$fab-list-button-background-color</code></td>

        <td><p>Background color of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-list-button-text-color</code></td>

          <td><code>color-contrast($colors-md, $fab-md-list-button-background-color)</code></td>

        <td><p>Text color of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-list-button-background-color-activated</code></td>

          <td><code>color-shade($fab-md-list-button-background-color)</code></td>

        <td><p>Background color of the activated button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-list-button-transition-duration</code></td>

          <td><code>200ms</code></td>

        <td><p>Transition duration of the transform and opacity of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-list-button-transition-timing-function</code></td>

          <td><code>ease</code></td>

        <td><p>Speed curve of the transition of the transform and opacity of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-md-list-button-transition-delay</code></td>

          <td><code>10ms</code></td>

        <td><p>Transition delay of the transform and opacity of the button in a list</p>
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
        <td><code>$fab-wp-background-color</code></td>

          <td><code>color($colors-wp, primary)</code></td>

        <td><p>Background color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-wp-text-color</code></td>

          <td><code>color-contrast($colors-wp, $fab-wp-background-color)</code></td>

        <td><p>Text color of the button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-wp-background-color-activated</code></td>

          <td><code>color-shade($fab-wp-background-color)</code></td>

        <td><p>Background color of the activated button</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-wp-list-button-background-color</code></td>

          <td><code>$fab-list-button-background-color</code></td>

        <td><p>Background color of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-wp-list-button-text-color</code></td>

          <td><code>color-contrast($colors-wp, $fab-wp-list-button-background-color)</code></td>

        <td><p>Text color of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-wp-list-button-background-color-activated</code></td>

          <td><code>color-shade($fab-wp-list-button-background-color)</code></td>

        <td><p>Background color of the activated button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-wp-list-button-transition-duration</code></td>

          <td><code>200ms</code></td>

        <td><p>Transition duration of the transform and opacity of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-wp-list-button-transition-timing-function</code></td>

          <td><code>ease</code></td>

        <td><p>Speed curve of the transition of the transform and opacity of the button in a list</p>
</td>
      </tr>

      <tr>
        <td><code>$fab-wp-list-button-transition-delay</code></td>

          <td><code>10ms</code></td>

        <td><p>Transition delay of the transform and opacity of the button in a list</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href="/docs/v3/components#fabs">FAB Component Docs</a><!-- end content block -->


<!-- end body block -->

