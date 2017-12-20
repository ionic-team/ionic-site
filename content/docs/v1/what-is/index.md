---
layout: docs_home
title: "Ionic Developer Glossary"
header_title: Ionic Developer Glossary
header_sub_title: Learn about the Ionic community's favorite tools
---

# Ionic Developer Glossary

<div id="what-is">

  <section id="autoprefixer">
    <h3><a href="#autoprefixer">Autoprefixer</a></h3>
    <dd id="autoprefixer"><a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> is a tool that adds vendor-specific-prefixes to hand-written Sass/CSS code. This ensures that standardized CSS rules you write will be applied across all supporting browsers. For example, instead of having to know every flexbox syntax used by various browsers, autoprefixer allows you to just write <code>display: flex;</code> and it'll automatically plug in the correct CSS.</p>
  </section>

  <section id="babel">
    <h3><a href="#babel">Babel</a></h3>
    <p>Babel is a next-generation JavaScript compiler. Currently, today's browsers do not support every feature of the next-generation of JavaScript (<a href="#es2015-es6">ES6</a>). Babel solves this problem by compiling your ES6 code in to <a href="#es5">ES5</a>, which is the well-known version of JavaScript supported in all browsers.</p>
  </section>

  <section id="circlular-dependency">
    <h3><a href="#protractor">Circular Dependency</a></h3>
    <p>A circular dependency is a problem caused when two modules depend on each other. This can cause <a href="#dependency-injection">dependency injection</a> to break, and is to be avoided. <a href="http://misko.hevery.com/2008/08/01/circular-dependency-in-constructors-and-dependency-injection/">This article</a> outlines the problem of circular dependencies, and proposes a solution.</p>
  </section>

  <section id="cli">
    <h3><a href="#cli">CLI</a></h3>
    <p>A CLI, or command-line interface, is text-based interface for interacting with a program. The common command-line app for a Mac user is the Terminal app, and Windows users often use Command Prompt. The Ionic community often uses this term to refer to <a href="https://ionicframework.com/docs/v1/cli/">Ionic's CLI</a>. Ionic's CLI can be used for a number of things, such as creating production builds of an app, running the development server, and accessing <a href="/pro">Ionic services</a>.</p>
  </section>

  <section id="commonjs">
    <h3><a href="#commonjs">CommonJS</a></h3>
    <p>CommonJS is a group that defines standard formats for JavaScript API's. They have defined standards for JavaScript modules and packages.</p>
  </section>

  <section id="cordova">
    <h3><a href="#cordova">Cordova</a></h3>
    <p><a href="https://cordova.apache.org">Cordova</a> is a way to transform standard HTML/CSS/JS into a full-fledged native app. It provides a JavaScript API for accessing native device functionality, such as the camera or accelerometer. Cordova contains the necessary build tools for packaging webapps for iOS, Android, and Windows Phone.</p>
  </section>

  <section id="dependency-injection">
    <h3><a href="#dependency-injection">Dependency Injection</a></h3>
    <p>Dependency injection is a pattern used by Angular to resolve or "inject" dependencies into a <a href="#modules">module</a>. The injector finds the instance of the dependency being requested, and passes or "injects" this instance to the module.</p>
  </section>

  <section id="es5">
    <h3><a href="#es5">ES5</a></h3>
    <p>ES5 refers to EcmaScript 5th Edition. A simple way to put it is that ES5 is the version of JavaScript which developers are most familar with today.</p>
  </section>

  <section id="es2015-es6">
    <h3><a href="#es2015-es6">ES2015/ES6</a></h3>
    <p>ES2015/ES6 are two commonly used names for the most recent version of JavaScript. A wide range of new features have been introducted in this version, including classes, modules, iterators, and promises. The final draft of ES6 has been approved, which means eventually ES6 code will be interpreted directly by a browser. To use ES6 features today, tools such as <a href="#babel">Babel</a> and <a href="#typescript">TypeScript</a> have to <a href="#transpiler">transpile</a> ES6 code down to ES5.</p>
  </section>

  <section id="es2016-es7">
    <h3><a href="#es2016-es7">ES2016/ES7</a></h3>
    <p>ES2016/ES7 are two commonly used names for the experimental version of JavaScript. This future version of JavaScript will add a number of new features to the language, including async functions and typed objects. It is constantly being revised, and it is not currently suitable for production apps.</p>
  </section>

  <section id="git">
    <h3><a href="#git">Git</a></h3>
    <p><a href="https://git-scm.com/">Git</a> is a version control system for managing code. It allows development teams to contribute code to the same project without causing code conflicts.</p>
  </section>

  <section id="gulp">
    <h3><a href="#gulp">Gulp</a></h3>
    <p><a href="http://gulpjs.com/">Gulp</a> is a tool for running tasks which can be used to build your application. Common build tasks include transpiling <a href="#es2015-es6">ES6</a> to <a href="#es5">ES5</a>, turning <a href="#sass">Sass</a> in to CSS, minifying code, and concatenating files.</p>
  </section>

  <section id="hybrid-app">
    <h3><a href="#hybrid-app">Hybrid App</a></h3>
    <p>A hybrid app is a mobile app that is written using web technologies such as HTML, CSS, and JavaScript. Hybrid apps run in a WebView that contains your code. By using tools like <a href="#cordova">Cordova</a>, your code can access native device functionality such as the camera and accelerometer. Unlike <a href="#native-app">native apps</a> which typically only are built for a single platform, hybrid apps can run on iOS, Android, Windows Phone, and anywhere that has a WebView.
    </p>
  </section>

  <section id="ionicons">
    <h3><a href="#ionicons">Ionicons</a></h3>
    <p><a href="http://ionicons.com/">Ionicons</a> is an open-source icon set used and created by Ionic. It includes iOS, Material Design, and social icons, as well as a wide range of commonly used icons. Ionicons is included by default in Ionic distributions, but they can be used in any project.</p>
  </section>

  <section id="ios">
    <h3><a href="#ios">iOS</a></h3>
    <p>iOS is a mobile operating system used by the iPhone and iPad. iOS 9 is the most recent version of the operating system.</p>
  </section>

  <section id="karma">
    <h3><a href="#karma">Karma</a></h3>
    <p>Karma is the unit testing framework used internally for Ionic. Karma can initialize Ionic and Angular components, and run tests against them once instantiated. Karma's API provides a number of assertions and other functions that make unit testing easier. For example, Karma could instantiate a NavBar, set the title using Ionic's NavBar API, and then make sure that the title was actually updated.</p>
  </section>

  <section id="material-design">
    <h3><a href="#material-design">Material Design</a></h3>
    <p>Material Design is a design guideline created by Google. It includes a UI interaction standard, a colorscheme, layouts, components, and much more. Material Design is used for many default system interfaces on recent versions of Android. By default Ionic components will switch to a material design theme when on Android.
    </p>
  </section>

  <section id="minification">
    <h3><a href="#minification">Minification</a></h3>
    <p>JavaScript source code can be reduced in size through minification. This process does not change the functionality of the code, even though whitespace, newlines, and other characters are removed. Minified JavaScript files will often be written `.min.js` file extension so it is clear that the contents include minified code. In a typical Ionic project, <a href="#gulp">Gulp</a> is used for minification.
    </p>
  </section>


  <section id="module-loader">
    <h3><a href="#module-loader">Module Loader</a></h3>
    <p>A module loader is a tool that takes <a href="#modules">modules</a> of a certian format, loads its dependencies, and makes the module available to your application. The Ionic community will often use this term to talk about module loaders like SystemJS or RequireJS.</p>
  </section>

  <section id="modules">
    <h3><a href="#modules">Modules</a></h3>
    <p>Modules are organized units of code that belong together. Often times modules will be grouped by functionality. Modules can use other modules, but they have to explicitly import them. In other words, you can't globally access a function you define inside a module. Aside, from code reuse and organization, this helps avoid namespace conflicts. For example, you could define an `alert()` function inside a module, and it wouldn't conflict with `alert()` function that the `window` object provides.</p>
    <p>Prior to to <a href="#es2015-es6">ES6</a>, JavaScript had no built in standard for defining how to build and import a module. The JavaScript community subsequently came up with two different standards for modules &mdash; <a href="#amd">AMD</a> and <a href="#commonjs">CommonJS</a>. <a href="#es2015-es6">ES6</a> modules support both of these formats, so they are considered the "future" of how JavaScript modules will be written.</p>
  </section>

  <section id="native-app">
    <h3><a href="#native-app">Native App</a></h3>
    <p>A native app is a mobile app that is written using low-level APIs provided by the platform it runs on. Native apps can typically only be run on a single platform (eg: iOS, Android, Windows Phone). The term "native" is often used to compare these types of applications with Ionic apps, which are considered <a href="#hybrid">"hybrid"</a>.
    </p>
  </section>

  <section id="native-app">
    <h3><a href="#native-app">Native Plugin</a></h3>
    <p>A native plugin is a piece of code that exposes an API that can be used to access native device functionality. For an Ionic app, this is typically accomplished through <a href="#cordova">Cordova</a>. These plugins expose a JavaScript API that may interact with numerous platform APIs under the hood.
    </p>
  </section>

  <section id="node">
    <h3><a href="#node">node</a></h3>
    <p><a href="https://nodejs.org/">node</a> is a runtime environment that lets you write JavaScript on the server-side. In addition to being used for web services, node is often used to build developer tools, such as the <a href="#cli">Ionic CLI</a>.</p>
  </section>

  <section id="npm">
    <h3><a href="#npm">npm</a></h3>
    <p><a href="https://www.npmjs.com/">npm</a> is the package manager for <a href="#node">node</a>. It allows you to install, share, and package node modules. Ionic can be installed with npm, along with a number of its dependencies.
    </p>
  </section>

  <section id="protractor">
    <h3><a href="#protractor">Protractor</a></h3>
    <p>Protractor is the framework Angular and Ionic use for <a href="#end-to-end-test">end-to-end testing</a>. Protractor provides an API for selecting DOM elements, and running tests against them. For example, you could use the API to easily create a test that opens your app, fills out a form, and makes sure that it loads the next page when the form is submitted.</p>
  </section>

  <section id="Sass">
    <h3><a href="#sass">Sass</a></h3>
    <p>Sass is a stylesheet language that compiles to CSS and is used by Ionic. Sass is like CSS, but with extra features such as <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_">variables</a>, <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins">mixins</a>, and <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10">for loops</a>.</p>
  </section>

  <section id="systemjs">
    <h3><a href="#systemjs">SystemJS</a></h3>
    <p>SystemJS is a module loader (like RequireJS) that loads all module formats - AMD, CommonJS, and ES6, and is built on top of the <a href="https://github.com/ModuleLoader/es6-module-loader">ES6 Module Loader polyfill</a> (a polyfill implementing the way JavaScript will load modules natively in the future).</p>
  </section>

  <section id="transpiler">
    <h3><a href="#transpiler">transpiler</a></h3>
    <p>
    Transpile means to convert code from one language, to another language. Typically a transpiler will convert a high-level language to another high-level language. Often times the Ionic community will talk about <em>transpiling</em> <a href="#es2015-es6">ES2015/ES6</a> or <a href="#typescript">TypeScript</a> to <a href="#es5">ES5</a>.
    </p>
  </section>

  <section id="typescript">
    <h3><a href="#typescript">TypeScript</a></h3>
    <p>
    TypeScript is a superset of JavaScript, which means it gives you JavaScript, along with a number of extra features such as <a href="http://www.typescriptlang.org/Handbook#basic-types">type declarations</a> and <a href="http://www.typescriptlang.org/Handbook#interfaces">interfaces</a>. Although Ionic is built with TypeScript, using it to build an Ionic app is completely optional.
    </p>
  </section>

  <section id="webpack">
    <h3><a href="#webpack">Webpack</a></h3><p>
    Webpack bundles together JavaScript modules and other assets. It can be used to create single or multiple "chunks" that are only loaded when needed. Basically you can use Webpack to take your many files and dependencies and bundle them into one file, or however you see fit.</p>
  </section>

  <section id="web-app">
    <h3><a href="#web-app">Web App</a></h3>
    <p>Like a hybrid app, a web app is written using web technologies such as HTML, CSS, and JavaScript. However, unlike a <a href="#hybrid-app">hybrid app</a>, a web app can only be loaded in a browser. Also, although a web app may use responsive design and could be used by a mobile browser, it cannot access native device functionality like camera and accelerometer.
    </p>
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

