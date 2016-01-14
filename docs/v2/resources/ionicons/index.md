---
layout: v2_fluid/docs_base
category: resources
id: ionicons
title: Ionic 2 | Ionicons
header_title: Ionicons - Ionic 2
header_sub_title: Ionic 2 Developer Preview
---

<div class="docs-ionicons" ng-controller="IoniconDocsCtrl">

  {% raw %}
  <div ng-repeat="(key, value) in icons" id="{{key}}" style="display:none;">
    <h2 class="title">{{key}}</h2>
    <ul class="modal-icons">
      <li ng-repeat="(ikey, ivalue) in value['icons']">
        <i class="ion-{{ivalue['name']}}"></i>
        <code>{{ivalue['name']}}</code>
      </li>
    </ul>
  
    <h4 class="modal-subtitle">Usage:</h4>
      <figure class="highlight">
        <delayed-pre>
          <code class="language-html lang-html hljs xml" data-lang="html">
  <span class="hljs-comment">&lt;!--Basic: auto-select the icon based on the platform --&gt;</span>
  &lt;ion-icon name="{{key}}"&gt;&lt;/ion-icon&gt;
  <span class="hljs-comment">&lt;!-- Advanced: explicity set the icon for each platform --&gt;</span>
  &lt;ion-icon ios="{{getIcon({key:value}, 'ios' )}}" md="{{getIcon({key:value}, 'md' )}}"&gt;&lt;/ion-icon&gt;
          </code>
        </delayed-pre>
      </figure>

  </div>
  {% endraw %}

    <p class="search">
      <input id="search-ionicons" type="search" placeholder="Search">
      <i class="ion-ios-search"></i>
    </p>

    <section id="icons" class="search-nil">

      <ul class="icon-labels">
        <li>Name</li>
        <li>iOS</li>
        <li>iOS-Outline</li>
        <li>Material Design</li>
      </ul>

    </section>

    <div id="icon-panel">
      <input type="text" id="icon-name" onclick="this.select();" readonly>
      <div id="icon-code"></div>
      <div id="animate-link"><a href="animation.html">See all animated icons</a></div>
    </div>

  </div>

  <script>
  window.isIoniconsPage = true;
  </script>