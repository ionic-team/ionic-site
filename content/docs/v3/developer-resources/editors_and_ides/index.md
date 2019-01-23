---
layout: fluid/docs_base
category: resources
id: editors_and_ides
title: Editors and IDEs
header_sub_title: Ionic Resources
---


# Editors and IDEs

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/resources/editors_and_ides/index.md'>
  Improve this doc
</a>

<p>
With Ionic being built on ES6 and TypeScript, it's important that your editors or IDE can support these new languages.
The following are a list of editors and IDEs that we think will give you the most effective support.
</p>


<section id="code">
  <h3>
    <a href="#code">Visual Studio Code</a>
    </h3>
  <p>VS Code is a new editor that comes with support for ES6 syntax, as well as TypeScript support. It will also prompt users to include TypeScript definition files and download them from <a href="http://definitelytyped.org/">Definitely Typed</a>. Visual Studio Code is free and works on macOS, Windows, and Linux.</p>
  <p><a href="https://code.visualstudio.com/">Official website</a></p>

</section>

<section id="atom">
<h3><a href="#atom">Atom</a></h3>
<p>Atom is cross platform editor built on web technologies. Atom has many plugins to make ES6/TypeScript development very easy. If there isn't something provided by Atom or a plugin, you can even make a plugin yourself, using JavaScript. Atom works on macOS, Windows, and Linux.</p>
<p><a href="https://atom.io/packages/atom-typescript">Atom TypeScript</a></p>
<p><a href="https://atom.io/">Atom official website</a></p>
</section>

<section id="webstorm">
  <h3><a href="#webstorm">WebStorm</a></h3>

<p>WebStorm is a paid IDE that provides many features, such as advanced refactoring support, automatic compilation of code, and gulp/grunt/webpack support. Out of the box, WebStorm comes with support for ES6 and TypeScript, as well as Angular and Ionic syntax support.</p>
<p><a href="https://www.jetbrains.com/webstorm/">WebStorm official website</a></p>
</section>


<section id="ALM">
  <h3><a href="#ALM">ALM</a></h3>

<p>ALM is a free open source IDE built for typescript development, it can be run on any computer running Chrome and can be hosted on a server and used on any computer with internet access.</p>
<p><a href="http://alm.tools/">ALM official website</a></p>
</section>


<section id="angularide">
  <h3><a href="#angularide">Angular IDE by Webclipse</a></h3>

<p>Angular IDE is a freemium IDE built for Angular and TypeScript development providing integrated terminal support helping with node and npm management. Out of the box, Angular IDE includes code completion and validation for ES6, TypeScript, and Angular HTML templates.</p>
<p><a href="https://www.genuitec.com/products/angular-ide/">Angular IDE official website</a></p>
</section>


<script>
$(document).ready(function() {
  $(function () {

      var setHash = function(urlHash) {
        window.location.hash = (urlHash);
        currentHash = urlHash;
      };

      var currentHash = "#"
      $(document).scroll(function () {
          $('section').each(function () {
              var top = window.pageYOffset;
              var distance = top - $(this).offset().top;
              var hash = '#' + $(this).attr('id');
              if (distance < 20 && distance > -20 && currentHash != hash) {
                setHash(hash);
              }
          });
      });
  });
});
</script>
