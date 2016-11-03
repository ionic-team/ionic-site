---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "actionsheetcmp"
title: "ActionSheetCmp"
header_sub_title: "Ionic API Documentation"
doc: "ActionSheetCmp"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="action-sheet-cmp" href="#action-sheet-cmp"></a>

ActionSheetCmp
<h3><code>ion-action-sheet</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/action-sheet/action-sheet-component.ts#L6">
Improve this doc
</a>










<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="d"></div>

<h3>
<a class="anchor" name="d" href="#d"></a>
<code>d</code>
  

</h3>












<div id="descId"></div>

<h3>
<a class="anchor" name="descId" href="#descId"></a>
<code>descId</code>
  

</h3>












<div id="enabled"></div>

<h3>
<a class="anchor" name="enabled" href="#enabled"></a>
<code>enabled</code>
  

</h3>












<div id="hdrId"></div>

<h3>
<a class="anchor" name="hdrId" href="#hdrId"></a>
<code>hdrId</code>
  

</h3>












<div id="id"></div>

<h3>
<a class="anchor" name="id" href="#id"></a>
<code>id</code>
  

</h3>












<div id="mode"></div>

<h3>
<a class="anchor" name="mode" href="#mode"></a>
<code>mode</code>
  

</h3>












<div id="ionViewDidLoad"></div>

<h3>
<a class="anchor" name="ionViewDidLoad" href="#ionViewDidLoad"></a>
<code>ionViewDidLoad()</code>
  

</h3>












<div id="ionViewDidEnter"></div>

<h3>
<a class="anchor" name="ionViewDidEnter" href="#ionViewDidEnter"></a>
<code>ionViewDidEnter()</code>
  

</h3>












<div id="keyUp"></div>

<h3>
<a class="anchor" name="keyUp" href="#keyUp"></a>
<code>keyUp()</code>
  

</h3>












<div id="click"></div>

<h3>
<a class="anchor" name="click" href="#click"></a>
<code>click()</code>
  

</h3>












<div id="bdClick"></div>

<h3>
<a class="anchor" name="bdClick" href="#bdClick"></a>
<code>bdClick()</code>
  

</h3>












<div id="dismiss"></div>

<h3>
<a class="anchor" name="dismiss" href="#dismiss"></a>
<code>dismiss()</code>
  

</h3>













  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
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
        <td><code>$action-sheet-ios-text-align</code></td>
        
          <td><code>center</code></td>
        
        <td><p>Text align of the action sheet</p>
</td>
      </tr>
      
      <tr>
        <td><code>$action-sheet-ios-padding</code></td>
        
          <td><code>0 10px</code></td>
        
        <td><p>Padding of the action sheet</p>
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
        
        <td><p>Min height of the action sheet button</p>
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
        
          <td><code>left</code></td>
        
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
        <td><code>$action-sheet-md-title-padding</code></td>
        
          <td><code>11px 16px 17px</code></td>
        
        <td><p>Padding of the action sheet title</p>
</td>
      </tr>
      
      <tr>
        <td><code>$action-sheet-md-button-min-height</code></td>
        
          <td><code>4.8rem</code></td>
        
        <td><p>Min height of the action sheet button</p>
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
        <td><code>$action-sheet-md-button-padding</code></td>
        
          <td><code>0 16px</code></td>
        
        <td><p>Padding of the action sheet button</p>
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
        <td><code>$action-sheet-md-icon-margin</code></td>
        
          <td><code>0 32px 0 0</code></td>
        
        <td><p>Margin of the icon in the action sheet button</p>
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
        
          <td><code>left</code></td>
        
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
        <td><code>$action-sheet-wp-title-padding</code></td>
        
          <td><code>11px 16px 17px</code></td>
        
        <td><p>Padding of the action sheet title</p>
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
        <td><code>$action-sheet-wp-button-padding</code></td>
        
          <td><code>0 16px</code></td>
        
        <td><p>Padding of the action sheet button</p>
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
        <td><code>$action-sheet-wp-icon-margin</code></td>
        
          <td><code>0 20px 0 0</code></td>
        
        <td><p>Margin of the icon in the action sheet button</p>
</td>
      </tr>
      
    </tbody>
  </table>
  
</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

