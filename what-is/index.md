---
layout: docs_home
title: "Ionic Developer Toolchain "
header_title: Ionic Tools
header_sub_title: Learn about the Ionic community's favorite tools
---

# Ionic Developer Toolchain

<div id="what-is">

  <section id="autoprefixer">
    <h3><a href="#autoprefixer">Autoprefixer</a></h3>
    <dd id="autoprefixer">An autoprefixer is a tool that adds vendor-specific-prefixes to hand-written SASS/CSS code. This ensures that the CSS rules you write will be applied across all browsers. Typically, an autoprefixer is used as part of the build process. <a href="https://www.npmjs.com/package/gulp-autoprefixer">gulp-autoprefixer</a> if often used in Ionic projects.</p>
  </section>

  <section id="babel">
    <h3><a href="#babel">Babel</a></h3>
    <p>Babel is a next-generation javascript compiler. Currently, all browsers do not support the next generation of javascript (<a href="#es2015-es6">ES6</a>). Babel solves this problem by compiling your ES6 code in to ES5, which is a version of javascript supported in all browsers.</p>
  </section>

  <section id="bower">
    <h3><a href="#bower">Bower</a></h3>
    <p>Bower is a package manager for front-end development resources. It allows you to easily share and package HTML, CSS, and javascript components. Bower also manages dependencies between resources. Ionic, Angular, and a number of front-end libraries can be found on Bower's <a href="http://bower.io/search/">registry</a>. Although Ionic 1 uses Bower, it is replaced by <a href="#">Webpack</a> in Ionic 2.</p>
  </section>

  <section id="cli">
    <h3><a href="#cli">CLI</a></h3>
    <p>A CLI or command-line interface is text-based interface for interacting with a program. The Ionic community often uses this term to refer to <a href="http://ionicframework.com/docs/cli/">Ionic's CLI</a>. Ionic's CLI can be used for a number of things, such as creating production builds of an app, running the development server, and accessing <a href="http://ionic.io/">Ionic services</a>.</p>
  </section>

  <section id="commonjs">
    <h3><a href="#commonjs">CommonJS</a></h3>
    <p>CommonJS is a group that defines standard formats for javascript API's. They have defined standards for javascript modules and packages.</p>
  </section>

  <section id="cordova">
    <h3><a href="#cordova">Cordova</a></h3>
    <p><a href="https://cordova.apache.org">Cordova</a> is a platform for creating mobile apps using HTML, CSS, and javascript. Cordova provides a javascript api for accessing native device functionality, such as the camera or accelerometer. It also contains a set of tools for packaging apps for iOS, Android, and Windows Phone.</p>
  </section>

  <section id="es2015-es6">
    <h3><a href="#es2015-es6">ES2015/ES6</a></h3>
    <p>ES2015/ES6 are two different names for the next version of javascript. A wide range of new features are introducted in this version of javascript, including classes, modules, iterators, and promises. While <a href="#typescript">TypeScript</a> also has many of these features, ES2015/ES6 will eventually be supported in all browsers. This means ES6 code can be interpreted directly by a browser, where as TypeScript will need to first be transpiled. </p>
  </section>

  <section id="es2016-es7">
    <h3><a href="#es2016-es7">ES2016/ES7</a></h3>
    <p>ES2016/ES7 are two different names for the current experimental version of ECMAScript (javascript). This future version of javascript will add a number of new features to the language, including async functions and typed objects. It is constantly being revised, and it is not currently suitable for production apps.</p>
  </section>

  <section id="git">
    <h3><a href="#git">Git</a></h3>
    <p><a href="https://git-scm.com/">Git</a> is a version control system for managing code. It allows development teams to contribute code to the same project without causing code conflicts.</p>
  </section>

  <section id="gulp">
    <h3><a href="#gulp">Gulp</a></h3>
    <p><a href="http://gulpjs.com/">Gulp</a> is a tool for building your application. Gulp watches your code while you develop, and runs build tasks when changes are detected. Common build tasks include turning your SASS in to CSS, minifying javascript, and concatenating files.</p>
  </section>

  <section id="ionicons">
    <h3><a href="#ionicons">Ionicons</a></h3>
    <p><a href="http://ionicons.com/">Ionicons</a> are an icon font used by Ionic. They includes iOS, Android, and social icons, as well as a wide range of commonly used icons. Ionicons are included by default in recent Ionic distributions, but they can be used in any project.</p>
  </section>

  <section id="node">
    <h3><a href="#node">node</a></h3>
    <p><a href="https://nodejs.org/">node</a> is a runtime environment that lets you write javascript on the server-side. In addition to being used for web services, node is often used to build developer tools, such as the <a href="#cli">Ionic CLI</a>.</p>
  </section>

  <section id="npm">
    <h3><a href="#npm">npm</a></h3>
    <p>
    [npm](https://www.npmjs.com/) is the package manager for [node](https://nodejs.org/). It allows you to install, share, and package node modules. Ionic can be installed with npm, along with a number of its dependencies.
    </p>
  </section>

  <section id="sass">
    <h3><a href="#sass">SASS</a></h3>
    <p>SASS is a fancy stylesheet language that compiles to CSS. SASS is like CSS, but with extra features such as <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html">mixins</a> and <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10">for loops</a>.</p>
  </section>

  <section id="systemjs">
    <h3><a href="#systemjs">SystemJS</a></h3>
    <p>SystemJS is a standard format for javascript modules. The SystemJS module format also supports a wide range of other module formats, including <a href="#commonjs">CommonJS</a> and AMD. </p>
  </section>

  <section id="transpiler">
    <h3><a href="#transpiler">transpiler</a></h3>
    <p>
    Transpile means to convert code from one language, to another language. Typically a transpiler will convert a high-level lanuage to another high-level language. Often times the Ionic community will talk about <i>transpiling</i> TypeScript/ES6 to javascript. 
    </p>
  </section>

  <section id="typescript">
    <h3><a href="#typescript">TypeScript</a></h3>
    <p>
    TypeScript is a superset of javascript, which means it gives you javascript, along with a number of extra features such as <a href="http://www.typescriptlang.org/Handbook#basic-types">type declarations</a> and <a href="http://www.typescriptlang.org/Handbook#classes">classes</a>. Although Ionic is built with TypeScript, using it to build an Ionic app is completely optional.
    </p>
  </section>

  <section id="webpack">
    <h3><a href="#webpack">Webpack</a></h3><p>
    Webpack bundles javascript modules and other assets. Unlike other front-end asset managers, Webpack can be used to create single or multiple "chunks" that are only loaded when needed.</p>
  </section>

</div>

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
 