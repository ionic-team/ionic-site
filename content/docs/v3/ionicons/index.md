---
layout: fluid/docs_base
category: ionicons
id: ionicons
title: Ionicons
header_sub_title: App Design and Development Icons
---

<div class="docs-ionicons" ng-controller="IoniconDocsCtrl">

  {% raw %}
  <div id="ionicons-modal"
       class="modal fade"
       tabindex="-1"
       role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h2 class="modal-title title">{{selected.key}}</h2>
          <ul class="modal-icons">
            <li ng-repeat="(ikey, ivalue) in selected.icons">
              <i class="ion-{{ivalue['name']}}"></i>
              <code>{{ivalue['name']}}</code>
            </li>
          </ul>

          <h4 class="modal-subtitle">Usage:</h4>
          <figure class="highlight">
            <delayed-pre>
              <code class="language-html lang-html hljs xml" data-lang="html">
  <span class="hljs-comment">&lt;!--Basic: auto-select the icon based on the platform --&gt;</span>
  <span class="hljs-keyword">&lt;ion-icon</span> <span class="hljs-built_in">name=</span><span class="hljs-string" ng-if="selected.icons.length < 2">"{{selected.icons[0].name}}"</span><span class="hljs-string" ng-if="selected.icons.length > 1">"{{selected.key}}"</span><span class="hljs-keyword">&gt;&lt;/ion-icon&gt;</span>

  <span class="hljs-comment">&lt;!-- Advanced: explicity set the icon for each platform --&gt;</span>
  <span class="hljs-keyword">&lt;ion-icon</span> <span class="hljs-built_in">ios=</span><span class="hljs-string">"{{getIcon(selected, 'ios' )}}"</span> <span class="hljs-built_in">md=</span><span class="hljs-string">"{{getIcon(selected, 'md' )}}"</span><span class="hljs-keyword">&gt;&lt;/ion-icon&gt;</span>
              </code>
            </delayed-pre>
          </figure>
        </div>
      </div>
    </div>
  </div>

  <form class="search">
    <input id="search-ionicons"
           type="search"
           placeholder="Search Ionicons"
           ng-model="searchTerm">
  </form>

    <section id="icons" class="search-nil">

      <ul class="icon-labels">
        <li>Name</li>
        <li>iOS</li>
        <li>iOS-Outline</li>
        <li>Material Design</li>
      </ul>
      <a ng-click="open(key)" ng-repeat="(key, item) in filteredIcons" id="{{key}}">
        <ul>
          <li class="add">{{key}}</li>
          <li ng-repeat="icon in item.icons" class="ion-{{icon.name}}"></li>
        </ul>
      </a>
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


  {% endraw %}
