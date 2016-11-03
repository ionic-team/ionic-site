---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2"
path: ""
category: api
id: "alertcmp"
title: "AlertCmp"
header_sub_title: "Ionic API Documentation"
doc: "AlertCmp"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="alert-cmp" href="#alert-cmp"></a>

AlertCmp
<h3><code>ion-alert</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/components/alert/alert-component.ts#L6">
Improve this doc
</a>










<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="activeId"></div>

<h3>
<a class="anchor" name="activeId" href="#activeId"></a>
<code>activeId</code>
  

</h3>












<div id="descId"></div>

<h3>
<a class="anchor" name="descId" href="#descId"></a>
<code>descId</code>
  

</h3>












<div id="d"></div>

<h3>
<a class="anchor" name="d" href="#d"></a>
<code>d</code>
  

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












<div id="inputType"></div>

<h3>
<a class="anchor" name="inputType" href="#inputType"></a>
<code>inputType</code>
  

</h3>












<div id="lastClick"></div>

<h3>
<a class="anchor" name="lastClick" href="#lastClick"></a>
<code>lastClick</code>
  

</h3>












<div id="msgId"></div>

<h3>
<a class="anchor" name="msgId" href="#msgId"></a>
<code>msgId</code>
  

</h3>












<div id="subHdrId"></div>

<h3>
<a class="anchor" name="subHdrId" href="#subHdrId"></a>
<code>subHdrId</code>
  

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












<div id="keyUp"></div>

<h3>
<a class="anchor" name="keyUp" href="#keyUp"></a>
<code>keyUp()</code>
  

</h3>












<div id="ionViewDidEnter"></div>

<h3>
<a class="anchor" name="ionViewDidEnter" href="#ionViewDidEnter"></a>
<code>ionViewDidEnter()</code>
  

</h3>












<div id="btnClick"></div>

<h3>
<a class="anchor" name="btnClick" href="#btnClick"></a>
<code>btnClick()</code>
  

</h3>












<div id="rbClick"></div>

<h3>
<a class="anchor" name="rbClick" href="#rbClick"></a>
<code>rbClick()</code>
  

</h3>












<div id="cbClick"></div>

<h3>
<a class="anchor" name="cbClick" href="#cbClick"></a>
<code>cbClick()</code>
  

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












<div id="getValues"></div>

<h3>
<a class="anchor" name="getValues" href="#getValues"></a>
<code>getValues()</code>
  

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
        
        <td><p>Max height of the alert content</p>
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
        
        <td><p>Min height of the alert button</p>
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
        
        <td><p>Max height of the alert content</p>
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
        <td><code>$alert-md-checkbox-label-text-color-checked</code></td>
        
          <td><code>initial</code></td>
        
        <td><p>Text color of the label for the checked checkbox in the  alert</p>
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
        
        <td><p>Max height of the alert content</p>
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

