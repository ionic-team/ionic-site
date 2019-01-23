---
layout: fluid/docs_base
category: intro
id: concepts
title: Concepts
header_sub_title: Getting Started with Ionic
---

# Core Concepts

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/v3/intro/concepts/index.md'>Improve
this doc</a>

If you’re completely new to Ionic and/or hybrid mobile app development, it can
be helpful to get a high-level understanding of the core philosophy, concepts,
and tools behind Ionic. The information below can help you familiarize yourself
with what Ionic is and how it works.

### What is Ionic Framework?

Ionic Framework is an open source SDK that enables developers to build
performant, high-quality mobile apps using familiar web technologies (HTML, CSS,
and JavaScript).

Ionic is focused mainly on the look and feel, or the UI interaction, of an app.
This means that it’s not a replacement for Cordova or your favorite JavaScript
framework. Instead, Ionic fits in well with these projects, in order to simplify
one big part of your app development process: the front-end. Check out [“Where
does the Ionic Framework fit
in?”](https://blog.ionicframework.com/where-does-the-ionic-framework-fit-in/) to
get a good understanding of Ionic's core philosophy and goals.

### How is Ionic Licensed?

Ionic is completely free and open source, released under the permissive
[MIT](http://opensource.org/licenses/MIT) license, which means you can use Ionic
in personal or commercial projects for free. For example, MIT is the same
license used by such popular projects as jQuery and Ruby on Rails.

This website and documentation content (found in the
[ionic-site](https://github.com/ionic-team/ionic-site) repo) is licensed under
the Apache 2 license.

### What is the Ionic CLI?

The [CLI](../../resources/what-is/#cli), or command line interface, is a tool
that provides a number of helpful commands to Ionic developers. In addition to
installing and updating Ionic, the CLI comes with a built-in development server,
build and debugging tools, and much more. If you are using [Ionic Appflow](/appflow),
the CLI can be used to export code and even interact with your account
programmatically.

### What are components?

Components in Ionic are reusable UI elements that serve as the building blocks
for your mobile app. Components are made up of HTML, CSS, and sometimes
JavaScript. Every Ionic component adapts to the platform on which your app is
running. We call this **Platform Continuity** and go more in depth on how it
works in Theming.

### What is theming?

Themes are sets of styles that get applied to an app. Ionic uses a light theme
by default, but it also comes with a dark theme. In addition to theming, Ionic’s
**Platform Continuity** enables components to have platform-specific styles.
This means the app’s styles will change based on the platform (iOS, Android,
etc.) on which it’s being run, offering your users an experience with which
they’re familiar.

### How does navigation work?

Navigation works like a stack &mdash; **push** a page to the stack to navigate
to it, and **pop** to go back. Modals and alerts can also be displayed by
pushing them onto the navigation stack.

### Who is behind Ionic?

Ionic was originally built by [@benjsperry](https://twitter.com/benjsperry),
[@adamdbradley](https://twitter.com/adamdbradley), and
[@maxlynch](https://twitter.com/maxlynch). After releasing an alpha version of
Ionic in November 2013, we released a 1.0 beta in March 2014 and a 1.0 final in
May 2015.

Now, Ionic has a massive international community of developers and contributors
propelling its growth and adoption. Companies small and large are using Ionic to
build better apps, faster. In 2015 Ionic developers reportedly created over 1.3M
apps with Ionic, a number that continues to grow each day.

### What is Angular?

[Angular](https://angular.io/) is the underlying framework that powers Ionic. It
is responsible for the component API that is the building block of Ionic. For an
overview on Angular, be sure to checkout the official [Angular
Docs](https://angular.io/docs/ts/latest/).
