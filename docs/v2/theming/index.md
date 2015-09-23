---
layout: v2/docs_base
id: theming
title: Ionic 2 Theming
header_title: Theming Ionic Apps
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/theming/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Theming Ionic Apps</h1>

We built Ionic to be a blank slate that you can easily customize and modify to fit your brand, while
still following standards of each platform. The best apps in the app stores are fully customized, and we want to make it easy to do the same with your Ionic apps.

We've made theming Ionic 2 apps easier than ever. Ionic is built on top of [Sass](../../what-is/#sass), which allows us to set some default styles for your app, but makes it extremely easy for you to change our defaults.

## Why Use Sass?

Sass helps keep large stylesheets well-organized, and get small stylesheets up and running quickly. Ionic uses the SCSS syntax, known as Sassy CSS, which has a `.scss` extension. Every valid CSS3 stylesheet is a valid SCSS file with the same meaning. This means that if you have some valid CSS you want to use in the Sass file you can, and it will work the same.

## How does Ionic work with Sass?

Ionic compiles the Sass files in your project into a CSS file, which your app uses for styling. Ionic uses node in order to compile your Sass files, so there is no Ruby dependency.

The generated CSS file gets placed at `www/app/build/css/app.css` in your project structure. Do not add any styling to this file, as it will be overridden when a new CSS file is generated.

## How do I use Sass?

There isn't much to using Sass, you just have to write it. Ionic takes care of generating the CSS file for you when you run `ionic serve`.

Ionic uses Sass variables in order to customize the look of your app. You can use these same variables to make it your own. To learn more about what Sass variables are, continue on to the [next section](./sass-variables/).

Already know everything there is to know about Sass? We still recommend reading our sections on [Overriding Ionic Variables](./overriding-ionic), [Ionic Themes](./ionic-themes), and [Ionic Modes](./ionic-modes) in order to learn about how well Ionic and Sass work together.

When you're all done with that, we have a list of all of the [Ionic Variables](./ionic-variables) you can use to customize the style of your app!
